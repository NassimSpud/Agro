import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { FaMapMarkerAlt, FaUserAlt, FaTruck, FaPhoneAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYmF6dWJhbGV0YSIsImEiOiJjbHY1cHhqM2cwNGYwMmpvMGQxZmlrYWwyIn0.-E-J7cEzxPSMwnGIBpho0A";
const DELIVERY_PERSON_NAME = "John Doe";
const DELIVERY_PHONE_NUMBER = "+254 700 123456";
const SPEED_KMH = 50;

const Tracking = () => {
  const [location, setLocation] = useState({
    town: "",
    county: "",
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [routeInfo, setRouteInfo] = useState({
    distance: 0,
    duration: 0,
    cost: 0,
  });
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [remainingDistance, setRemainingDistance] = useState(0);
  const [estimatedArrivalTime, setEstimatedArrivalTime] = useState("");

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const initializeMap = (longitude, latitude) => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12,
      });
      return map;
    };

    const fetchLocationDetails = async (longitude, latitude) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
        );
        const data = await response.json();

        if (data.features.length > 0) {
          const place = data.features.find((feature) =>
            feature.place_type.includes("place")
          );
          const region = data.features.find((feature) =>
            feature.place_type.includes("region")
          );
          setLocation((prevLocation) => ({
            ...prevLocation,
            town: place ? place.text : "Unknown",
            county: region ? region.text : "Unknown",
          }));
        }
      } catch (err) {
        setError("Failed to fetch location details.");
      }
    };

    const fetchRoute = async (map, start, end) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${MAPBOX_ACCESS_TOKEN}`
        );
        const data = await response.json();
        const route = data.routes[0].geometry.coordinates;
        const { distance, duration } = data.routes[0];

        const cost = Math.round((distance / 1000) * 50);
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);

        setRouteInfo({
          distance: (distance / 1000).toFixed(2),
          duration: `${hours} hr ${minutes} min`,
          cost: cost,
        });

        setRouteCoordinates(route);

        map.on("load", () => {
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: route,
                },
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#1db7dd",
              "line-width": 5,
            },
          });

          simulateMovement(map, route);
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch route data.");
        setLoading(false);
      }
    };

    let hasStarted = false;
    let hasEnded = false;

    const simulateMovement = (map, route) => {
      const marker = new mapboxgl.Marker({ color: "green" })
        .setLngLat(route[0])
        .addTo(map);

      let index = 0;
      const speed = 0.01;

      const calculateDistance = (start, end) => {
        const [lng1, lat1] = start;
        const [lng2, lat2] = end;
        const R = 6371; // Radius of the Earth in km
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLng = ((lng2 - lng1) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      };

      const updateRemainingDistance = () => {
        const distance = route
          .slice(index + 1)
          .reduce(
            (acc, coord, i) => acc + calculateDistance(route[index + i], coord),
            0
          );
        setRemainingDistance(distance.toFixed(2));
        const estimatedTime = new Date(
          Date.now() + (distance / SPEED_KMH) * 3600 * 1000
        );
        setEstimatedArrivalTime(
          `${estimatedTime.getHours()}:${String(
            estimatedTime.getMinutes()
          ).padStart(2, "0")}`
        );
      };

      const move = () => {
        if (index < route.length - 1) {
          const start = route[index];
          const end = route[index + 1];
          let t = 0;

          const animate = () => {
            if (t < 1) {
              t += speed;
              const lat = start[1] + (end[1] - start[1]) * t;
              const lng = start[0] + (end[0] - start[0]) * t;
              marker.setLngLat([lng, lat]);
              updateRemainingDistance();
              requestAnimationFrame(animate);
            } else {
              index += 1;
              if (index === 1 && !hasStarted) {
                hasStarted = true;
                toast.dismiss();
                toast.info("The delivery has started!");
              }
              if (index === route.length - 1 && !hasEnded) {
                hasEnded = true;
                toast.dismiss();
                toast.success("The delivery has reached the destination!");
              }
              move();
            }
          };

          animate();
        }
      };

      move();
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation((prevLocation) => ({
              ...prevLocation,
              latitude,
              longitude,
            }));

            await fetchLocationDetails(longitude, latitude);

            const map = initializeMap(longitude, latitude);

            const start = [35.2698, 0.5143];
            const end = [longitude, latitude];

            new mapboxgl.Marker({ color: "blue" }).setLngLat(start).addTo(map);
            new mapboxgl.Marker({ color: "red" }).setLngLat(end).addTo(map);

            await fetchRoute(map, start, end);
          },
          (error) => {
            setError("Unable to retrieve your location.");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <div className="dark:bg-darkBackground dark:text-darkText p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold mb-5 text-gradient">
        Order Tracking Map
      </h1>
      <p className="text-lg font-semibold mb-5 text-gray-500 dark:text-gray-300">
        Delivery by:{" "}
        <span className="text-white font-bold">{DELIVERY_PERSON_NAME}</span>
      </p>

      {loading && <p className="text-blue-500 animate-pulse">Loading map...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div
        id="map"
        className="w-full h-96 mb-5 rounded-lg bg-gray-200 dark:bg-gray-800 animate-fadeIn"
        style={{ minHeight: "400px" }}
      />

      <div className="p-5 rounded-lg bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-darkBackground dark:via-darkSecondary dark:to-darkBackground shadow-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-5 text-gradient">
          Delivery Details
        </h2>

        <div className="flex items-center mb-4 space-x-2">
          <FaMapMarkerAlt className="text-red-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Your location:{" "}
            <span className="font-semibold">
              {location.town}, {location.county}
            </span>
          </p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaMapMarkerAlt className="text-green-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Delivery Guy
          </p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaMapMarkerAlt className="text-blue-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">Market</p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaTruck className="text-blue-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Distance: {routeInfo.distance} km, Estimated Duration:{" "}
            {routeInfo.duration}, Estimated Cost: KES {routeInfo.cost}
          </p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaUserAlt className="text-orange-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Delivery Person:{" "}
            <span className="font-semibold">{DELIVERY_PERSON_NAME}</span>
          </p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaPhoneAlt className="text-orange-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Phone Number:{" "}
            <span className="font-semibold">{DELIVERY_PHONE_NUMBER}</span>
          </p>
        </div>

        <div className="flex items-center mb-4 space-x-2">
          <FaTruck className="text-purple-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Remaining Distance: {remainingDistance} km
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <FaTruck className="text-green-600" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Estimated Arrival Time: {estimatedArrivalTime}
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Tracking;