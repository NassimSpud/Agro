import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ======================== Icons ========================
const NavigationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 19-9-9 19-2-8-8-2z" />
  </svg>
);
const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2C9.6 22 2 14.4 2 6a2 2 0 0 1 2-2z" />
  </svg>
);
const MessageIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 9-8.4z" />
  </svg>
);
const CrosshairIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

// ======================== Coordinates ========================
// Real Nairobi locations so the map looks authentic.
const PICKUP = { lat: -1.1739, lng: 36.8356, name: "Kiambu Fresh Farms, Kiambu" };
const DROPOFF = { lat: -1.2657, lng: 36.8100, name: "Westlands Market, Nairobi" };

// Fallback route (used if OSRM request fails)
const FALLBACK_ROUTE = [
  [-1.1739, 36.8356],
  [-1.1850, 36.8330],
  [-1.1980, 36.8290],
  [-1.2120, 36.8250],
  [-1.2260, 36.8210],
  [-1.2400, 36.8170],
  [-1.2530, 36.8130],
  [-1.2657, 36.8100],
];

// ======================== Custom marker icons ========================
const driverIcon = L.divIcon({
  className: "agri-marker",
  html: `<div class="driver-marker">
    <div class="driver-marker-pulse"></div>
    <div class="driver-marker-inner">🚚</div>
  </div>`,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});

const pickupIcon = L.divIcon({
  className: "agri-marker",
  html: `<div class="pin-wrap">
    <div class="pin pin-pickup">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    </div>
  </div>`,
  iconSize: [40, 48],
  iconAnchor: [20, 46],
});

const dropoffIcon = L.divIcon({
  className: "agri-marker",
  html: `<div class="pin-wrap">
    <div class="pin pin-dropoff">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>
  </div>`,
  iconSize: [40, 48],
  iconAnchor: [20, 46],
});

// ======================== Helpers ========================
// Interpolate a position along a polyline given t ∈ [0, 1]
const interpolateAlongRoute = (route, t) => {
  if (!route || route.length === 0) return [0, 0];
  if (route.length === 1) return route[0];
  const clamped = Math.max(0, Math.min(1, t));
  const totalSegments = route.length - 1;
  const scaled = clamped * totalSegments;
  const idx = Math.min(Math.floor(scaled), totalSegments - 1);
  const local = scaled - idx;
  const [lat1, lng1] = route[idx];
  const [lat2, lng2] = route[idx + 1];
  return [lat1 + (lat2 - lat1) * local, lng1 + (lng2 - lng1) * local];
};

// ======================== Map controller ========================
// Grabs the leaflet map instance and hands it up
const MapRef = ({ onReady }) => {
  const map = useMap();
  useEffect(() => { onReady(map); }, [map, onReady]);
  return null;
};

// Auto-follows the driver as it moves
const CameraFollower = ({ position, follow }) => {
  const map = useMap();
  const lastRef = useRef(0);

  useEffect(() => {
    if (!follow || !position) return;
    const now = Date.now();
    // throttle to ~10 fps for smooth but not overwhelming panning
    if (now - lastRef.current < 100) return;
    lastRef.current = now;
    map.panTo(position, { animate: false });
  }, [position, follow, map]);

  return null;
};

// Detects when the user manually pans/zooms and disables follow
const MapInteraction = ({ onUserPan }) => {
  useMapEvents({
    dragstart: () => onUserPan(),
    zoomstart: () => onUserPan(),
  });
  return null;
};

// ======================== Main component ========================
const DeliveryTracking = () => {
  const [progress, setProgress] = useState(0);           // 0 → 1 across route
  const [route, setRoute] = useState(FALLBACK_ROUTE);
  const [follow, setFollow] = useState(true);
  const [mapInstance, setMapInstance] = useState(null);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  // Fetch real route from OSRM (free, no key)
  useEffect(() => {
    const url = `https://router.project-osrm.org/route/v1/driving/${PICKUP.lng},${PICKUP.lat};${DROPOFF.lng},${DROPOFF.lat}?overview=full&geometries=geojson`;
    let cancelled = false;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const coords = data?.routes?.[0]?.geometry?.coordinates;
        if (Array.isArray(coords) && coords.length > 1) {
          // OSRM returns [lng, lat]; Leaflet wants [lat, lng]
          setRoute(coords.map(([lng, lat]) => [lat, lng]));
        }
      })
      .catch(() => { /* keep fallback */ });
    return () => { cancelled = true; };
  }, []);

  // Animate the driver along the route
  useEffect(() => {
    const DURATION_MS = 45_000; // full route takes ~45s in this simulation
    startTimeRef.current = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / DURATION_MS, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [route]);

  // Driver position derived from the interpolation
  const driverPos = useMemo(
    () => interpolateAlongRoute(route, progress),
    [route, progress]
  );

  // Rough ETA — 28 min total trip
  const remainingMin = Math.max(0, Math.round(28 * (1 - progress)));
  const arrived = progress >= 0.999;

  // Timeline steps reflect the driver's live position
  const steps = useMemo(() => [
    {
      id: 1, label: "Order Confirmed", time: "7:30 AM",
      desc: "Order received and assigned to you",
      state: "done",
    },
    {
      id: 2, label: "Picked Up", time: "8:15 AM",
      desc: "Collected from Kiambu Fresh Farms",
      state: "done",
    },
    {
      id: 3, label: "In Transit", time: "9:02 AM",
      desc: arrived ? "Arrived at destination" : `On the way — ${remainingMin} min remaining`,
      state: arrived ? "done" : "current",
    },
    {
      id: 4, label: "Delivered", time: arrived ? "Just now" : "—",
      desc: arrived ? "Package handed to customer" : "Awaiting drop-off",
      state: arrived ? "current" : "pending",
    },
  ], [arrived, remainingMin]);

  const handleUserPan = useCallback(() => {
    setFollow(false);
  }, []);

  const handleRecenter = () => {
    setFollow(true);
    if (mapInstance) {
      mapInstance.flyTo(driverPos, 15, { duration: 0.8 });
    }
  };

  const handleZoomIn = () => mapInstance?.zoomIn();
  const handleZoomOut = () => mapInstance?.zoomOut();

  return (
    <div className="font-body">
      <div className="mb-6">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
          Track Delivery
        </h1>
        <p className="text-[13.5px] text-[var(--text-muted)] mt-1">
          Live position and progress for #AGS-2941
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* ==================== Map ==================== */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-auto lg:min-h-[560px] rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm">

          <MapContainer
            center={driverPos}
            zoom={15}
            zoomControl={false}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              maxZoom={19}
            />

            {/* Route line */}
            <Polyline
              positions={route}
              pathOptions={{
                color: "#1B3D28",
                weight: 5,
                opacity: 0.85,
                lineCap: "round",
                lineJoin: "round",
              }}
            />

            {/* Route shadow (softer, wider) */}
            <Polyline
              positions={route}
              pathOptions={{
                color: "#6B9B7A",
                weight: 12,
                opacity: 0.18,
                lineCap: "round",
                lineJoin: "round",
              }}
            />

            {/* Pickup */}
            <Marker position={[PICKUP.lat, PICKUP.lng]} icon={pickupIcon} />

            {/* Drop-off / customer */}
            <Marker position={[DROPOFF.lat, DROPOFF.lng]} icon={dropoffIcon} />

            {/* Driver — moving */}
            <Marker position={driverPos} icon={driverIcon} zIndexOffset={1000} />

            <MapRef onReady={setMapInstance} />
            <CameraFollower position={driverPos} follow={follow} />
            <MapInteraction onUserPan={handleUserPan} />
          </MapContainer>

          {/* ============ Overlays (outside Leaflet DOM) ============ */}

          {/* ETA pill */}
          <div className="absolute top-5 left-5 z-[400] bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl px-4 py-3 shadow-lg pointer-events-none">
            <p className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] font-bold">
              {arrived ? "Arrived" : "Arriving in"}
            </p>
            <p className="font-display font-bold text-xl leading-tight text-[var(--text)]">
              {arrived ? "0 min" : `~${remainingMin} min`}
            </p>
            <div className="mt-2 w-full h-1 bg-[var(--surface-3)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--brand)] rounded-full transition-[width] duration-200"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
          </div>

          {/* Recenter chip (top-right) */}
          <button
            onClick={handleRecenter}
            className={`absolute top-5 right-5 z-[400] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold shadow-lg transition-all ${
              follow
                ? "bg-[var(--brand)] text-[var(--brand-fg)]"
                : "bg-white text-[var(--text)] hover:bg-white/90"
            }`}
          >
            <CrosshairIcon className="w-3.5 h-3.5" />
            {follow ? "Following" : "Recenter"}
          </button>

          {/* Zoom + navigate controls (bottom-right) */}
          <div className="absolute bottom-14 right-4 z-[400] flex flex-col gap-2">
            <button
              onClick={handleZoomIn}
              aria-label="Zoom in"
              className="w-10 h-10 rounded-full bg-white text-[var(--text)] flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button
              onClick={handleZoomOut}
              aria-label="Zoom out"
              className="w-10 h-10 rounded-full bg-white text-[var(--text)] flex items-center justify-center shadow-lg hover:bg-white/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
              </svg>
            </button>
            <button
              onClick={handleRecenter}
              aria-label="Open navigation"
              className="w-12 h-12 rounded-full bg-[var(--brand)] text-[var(--brand-fg)] flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
            >
              <NavigationIcon />
            </button>
          </div>

          {/* Live badge (bottom-left) */}
          <div className="absolute bottom-4 left-4 z-[400] inline-flex items-center gap-1.5 bg-white/95 backdrop-blur border border-black/5 rounded-full px-3 py-1.5 shadow-lg pointer-events-none">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[var(--text)]">
              Live
            </span>
          </div>
        </div>

        {/* ==================== Timeline card ==================== */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-5 sm:p-6">
          <div className="flex items-start gap-4 pb-5 mb-5 border-b border-[var(--border)]">
            <span className="w-12 h-12 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-2xl flex-shrink-0">
              🥑
            </span>
            <div className="min-w-0">
              <p className="font-display font-bold text-[15px] text-[var(--text)]">
                Hass Avocado · 120 kg
              </p>
              <p className="text-[12px] text-[var(--text-dim)] mt-0.5">
                #AGS-2941 · Westlands Market, Nairobi
              </p>
            </div>
          </div>

          <div className="space-y-1">
            {steps.map((s, i) => {
              const isDone = s.state === "done";
              const isCurrent = s.state === "current";
              return (
                <div key={s.id} className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold transition-all ${
                        isCurrent
                          ? "bg-[var(--highlight)] text-[var(--highlight-fg)] ring-4 ring-[var(--highlight-soft)]"
                          : isDone
                          ? "bg-[var(--accent)] text-[var(--brand-fg)]"
                          : "bg-[var(--surface-2)] text-[var(--text-dim)] border border-[var(--border)]"
                      }`}
                    >
                      {isDone ? <CheckIcon className="w-4 h-4" /> : s.id}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 my-1.5 bg-[var(--border)] relative overflow-hidden">
                        {isDone && <div className="absolute inset-x-0 top-0 h-full bg-[var(--accent)]" />}
                      </div>
                    )}
                  </div>
                  <div className="pb-5 pt-1.5 min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-[13.5px] font-semibold ${
                        isCurrent
                          ? "text-[var(--highlight-fg)]"
                          : isDone
                          ? "text-[var(--text)]"
                          : "text-[var(--text-dim)]"
                      }`}>
                        {s.label}
                      </p>
                      <span className="text-[11.5px] text-[var(--text-dim)] flex-shrink-0">{s.time}</span>
                    </div>
                    <p className="text-[12px] text-[var(--text-muted)] mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customer contact */}
          <div className="mt-4 pt-5 border-t border-[var(--border)]">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center text-[var(--brand-fg)] text-[12px] font-bold flex-shrink-0">
                NG
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12.5px] font-semibold text-[var(--text)]">Nairobi Grocers Ltd</p>
                <p className="text-[11px] text-[var(--text-dim)]">+254 712 345 678</p>
              </div>
              <button className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors">
                <PhoneIcon />
              </button>
              <button className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-fg)] hover:border-[var(--border-strong)] transition-colors">
                <MessageIcon />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-3.5">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">
                  Distance left
                </p>
                <p className="text-[13px] font-bold text-[var(--text)]">
                  {(12.4 * (1 - progress)).toFixed(1)} km
                </p>
              </div>
              <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-2xl p-3.5">
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-bold mb-1">
                  Trip payout
                </p>
                <p className="text-[13px] font-bold text-[var(--accent-fg)]">KES 850</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Leaflet + marker styles ==================== */}
      <style>{`
        /* Kill Leaflet's default outline & focus rings */
        .leaflet-container { background: var(--surface-2); font-family: inherit; }
        .leaflet-container:focus { outline: none; }
        .leaflet-control-attribution {
          background: rgba(255,255,255,0.85) !important;
          font-size: 10px !important;
          padding: 2px 6px !important;
        }
        .leaflet-control-attribution a { color: var(--text-muted) !important; }

        /* Driver marker */
        .agri-marker { background: transparent !important; border: none !important; }
        .driver-marker {
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .driver-marker-inner {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid var(--brand);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          box-shadow: 0 8px 20px rgba(20,60,35,0.28);
          position: relative; z-index: 2;
        }
        .driver-marker-pulse {
          position: absolute; inset: 0;
          border-radius: 50%;
          background: var(--brand);
          opacity: 0.35;
          animation: driverPulse 1.8s ease-out infinite;
        }
        @keyframes driverPulse {
          0%   { transform: scale(0.6); opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* Pins */
        .pin-wrap { width: 40px; height: 48px; position: relative; }
        .pin {
          width: 36px; height: 36px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 14px rgba(20,60,35,0.3);
          border: 3px solid #fff;
          position: absolute; top: 0; left: 2px;
        }
        .pin > svg { transform: rotate(45deg); width: 16px; height: 16px; color: #fff; }
        .pin-pickup  { background: var(--accent); }
        .pin-dropoff { background: var(--highlight); }

        /* Small map tweaks */
        .leaflet-marker-icon.agri-marker { transition: none; }
      `}</style>
    </div>
  );
};

export default DeliveryTracking;