import { useState, useRef, useEffect, useMemo } from "react";

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const SendIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </svg>
);
const ArrowLeftIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);
const CheckCheckIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" />
  </svg>
);

const CONTACTS = {
  dispatch: { name: "Dispatch Center", role: "AgriSoko Ops", emoji: "🎧", online: true },
  seller1:  { name: "Kiambu Fresh Farms", role: "Farmer",      emoji: "🥑", online: true },
  buyer1:   { name: "Nairobi Grocers Ltd", role: "Buyer",      emoji: "🏪", online: false },
  seller2:  { name: "Limuru Family Farm",  role: "Farmer",     emoji: "🥬", online: true },
  buyer2:   { name: "Wanjiku Kamau",       role: "Consumer",   emoji: "👩🏾", online: false },
};

const INITIAL = [
  {
    id: "d", contactId: "dispatch", unread: 1, lastAt: Date.now() - 60000 * 3,
    lastMessage: "Please confirm pickup on AGS-2943 within 30 minutes.",
    messages: [
      { id: "m1", from: "them", text: "Morning James. Your route for today is ready.", at: Date.now() - 60000 * 15 },
      { id: "m2", from: "me",   text: "Got it, checking now.", at: Date.now() - 60000 * 12 },
      { id: "m3", from: "them", text: "Please confirm pickup on AGS-2943 within 30 minutes.", at: Date.now() - 60000 * 3 },
    ],
  },
  {
    id: "c1", contactId: "seller1", unread: 0, lastAt: Date.now() - 60000 * 25,
    lastMessage: "Load is ready. Gate is open, come through the side entrance.",
    messages: [
      { id: "m1", from: "me",   text: "On my way to pick up the avocado order.", at: Date.now() - 60000 * 45 },
      { id: "m2", from: "them", text: "Load is ready. Gate is open, come through the side entrance.", at: Date.now() - 60000 * 25 },
    ],
  },
  {
    id: "c2", contactId: "buyer1", unread: 0, lastAt: Date.now() - 60000 * 90,
    lastMessage: "Thanks — we'll have someone at the loading bay.",
    messages: [
      { id: "m1", from: "me",   text: "ETA 20 minutes to Westlands.", at: Date.now() - 60000 * 110 },
      { id: "m2", from: "them", text: "Thanks — we'll have someone at the loading bay.", at: Date.now() - 60000 * 90 },
    ],
  },
];

const formatTime = (ts) =>
  new Date(ts).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

const formatRelative = (ts) => {
  const diff = Math.floor((Date.now() - ts) / 60000);
  if (diff < 1) return "now";
  if (diff < 60) return `${diff}m`;
  return `${Math.floor(diff / 60)}h`;
};

const DeliveryMessages = () => {
  const [conversations, setConversations] = useState(INITIAL);
  const [activeId, setActiveId] = useState(null);
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");
  const [mobileShowSidebar, setMobileShowSidebar] = useState(true);
  const endRef = useRef(null);

  const active = useMemo(() => conversations.find((c) => c.id === activeId), [conversations, activeId]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages.length]);

  const filtered = useMemo(() => {
    if (!search.trim()) return conversations;
    const q = search.toLowerCase();
    return conversations.filter((c) => {
      const contact = CONTACTS[c.contactId];
      return contact?.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q);
    });
  }, [conversations, search]);

  const select = (id) => {
    setActiveId(id);
    setMobileShowSidebar(false);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
  };

  const send = (e) => {
    e?.preventDefault();
    if (!draft.trim() || !activeId) return;
    const text = draft.trim();
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [...c.messages, { id: `m-${Date.now()}`, from: "me", text, at: Date.now() }],
              lastMessage: `You: ${text}`,
              lastAt: Date.now(),
            }
          : c
      )
    );
    setDraft("");
  };

  return (
    <div className="font-body h-[calc(100vh-9rem)] flex bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
      {/* Sidebar */}
      <aside className={`w-full sm:w-80 flex-shrink-0 border-r border-[var(--border)] flex flex-col ${mobileShowSidebar ? "flex" : "hidden sm:flex"}`}>
        <div className="px-5 py-4 border-b border-[var(--border)]">
          <h1 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">Messages</h1>
          <p className="text-[12px] text-[var(--text-dim)] mt-0.5">{conversations.length} active chats</p>
        </div>

        <div className="px-4 py-3 border-b border-[var(--border)]">
          <div className="flex items-center bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-3.5 py-2">
            <SearchIcon className="w-4 h-4 text-[var(--text-dim)] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full ml-2.5 bg-transparent outline-none text-[13px] text-[var(--text)] placeholder-[var(--text-dim)]"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filtered.map((c) => {
            const contact = CONTACTS[c.contactId];
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                onClick={() => select(c.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors border-b border-[var(--border)] last:border-b-0 ${
                  isActive ? "bg-[var(--accent-soft)]" : "hover:bg-[var(--surface-2)]"
                }`}
              >
                <span className="relative w-11 h-11 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-lg flex-shrink-0">
                  {contact.emoji}
                  {contact.online && <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[var(--surface)]" />}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className={`text-[13.5px] font-semibold truncate ${isActive ? "text-[var(--accent-fg)]" : "text-[var(--text)]"}`}>
                      {contact.name}
                    </p>
                    <span className="text-[10.5px] text-[var(--text-dim)] flex-shrink-0">{formatRelative(c.lastAt)}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-[12px] truncate ${c.unread > 0 ? "text-[var(--text)] font-medium" : "text-[var(--text-dim)]"}`}>
                      {c.lastMessage}
                    </p>
                    {c.unread > 0 && (
                      <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Chat window */}
      <section className={`flex-1 flex flex-col min-w-0 bg-[var(--bg)] ${mobileShowSidebar ? "hidden sm:flex" : "flex"}`}>
        {!active ? (
          <div className="flex-1 flex items-center justify-center p-8 text-center">
            <div className="max-w-sm">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-4xl mb-5">💬</div>
              <h2 className="font-display text-lg font-bold text-[var(--text)]">Pick a conversation</h2>
              <p className="text-[13px] text-[var(--text-muted)] mt-2 leading-relaxed">
                Stay in touch with dispatch, farmers and customers throughout your route.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-[var(--border)] bg-[var(--surface)] flex-shrink-0">
              <button
                onClick={() => setMobileShowSidebar(true)}
                aria-label="Back"
                className="sm:hidden w-9 h-9 rounded-full hover:bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-muted)]"
              >
                <ArrowLeftIcon />
              </button>
              <span className="relative w-10 h-10 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-lg flex-shrink-0">
                {CONTACTS[active.contactId].emoji}
                {CONTACTS[active.contactId].online && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[var(--surface)]" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[var(--text)] truncate">{CONTACTS[active.contactId].name}</p>
                <p className="text-[11.5px] text-[var(--text-dim)]">
                  {CONTACTS[active.contactId].online ? (
                    <span className="text-green-600">Online</span>
                  ) : (
                    CONTACTS[active.contactId].role
                  )}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-1">
              {active.messages.map((m) => {
                const own = m.from === "me";
                return (
                  <div key={m.id} className={`flex ${own ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[75%] flex flex-col ${own ? "items-end" : "items-start"}`}>
                      <div className={`rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed break-words ${
                        own
                          ? "bg-[var(--brand)] text-[var(--brand-fg)] rounded-br-md"
                          : "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] rounded-bl-md"
                      }`}>
                        {m.text}
                      </div>
                      <div className={`flex items-center gap-1 mt-1 px-1 ${own ? "flex-row-reverse" : ""}`}>
                        <span className="text-[10.5px] text-[var(--text-dim)]">{formatTime(m.at)}</span>
                        {own && <CheckCheckIcon className="text-[var(--accent-fg)]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>

            <form onSubmit={send} className="flex items-center gap-2 px-4 sm:px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface)] flex-shrink-0">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 min-w-0 bg-[var(--surface-2)] border border-[var(--border)] rounded-full px-4 py-2.5 text-[13.5px] text-[var(--text)] placeholder-[var(--text-dim)] outline-none focus:border-[var(--accent)] focus:bg-[var(--surface)] transition-colors"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label="Send"
                className="w-11 h-11 rounded-full bg-[var(--brand)] text-[var(--brand-fg)] flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity flex-shrink-0"
              >
                <SendIcon />
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default DeliveryMessages;