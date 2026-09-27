import { useState, useEffect, useRef, useMemo } from "react";

// ======================== Icons ========================
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

const CheckIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const EmptyChatIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 1 1 9-8.4z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </svg>
);

const ImageIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

const SmileIcon = ({ className = "w-[18px] h-[18px]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

// ======================== Mock data ========================
const SELLERS = [
  { id: "s1", name: "Kiambu Fresh Farms",   role: "Avocado grower",     emoji: "🥑", online: true },
  { id: "s2", name: "Nakuru Green Growers", role: "Vegetables supplier", emoji: "🍅", online: true },
  { id: "s3", name: "Kitale Grain Hub",     role: "Grain wholesaler",    emoji: "🌽", online: false },
  { id: "s4", name: "Eldoret Feeds Ltd",    role: "Livestock feed",      emoji: "🌾", online: false },
  { id: "s5", name: "Limuru Family Farm",   role: "Fresh greens",        emoji: "🥬", online: true },
];

const initialConversations = [
  {
    id: "c1",
    sellerId: "s1",
    lastMessage: "Sure, what quantity are you looking for?",
    lastMessageAt: Date.now() - 1000 * 60 * 8, // 8 min ago
    lastMessageSender: "seller",
    unread: 1,
    messages: [
      { id: "m1", sender: "seller", text: "Hello! Thanks for reaching out to Kiambu Fresh Farms 🥑", at: Date.now() - 1000 * 60 * 30 },
      { id: "m2", sender: "buyer",  text: "Hi, I'm interested in your avocados. Can we negotiate the price?", at: Date.now() - 1000 * 60 * 28 },
      { id: "m3", sender: "seller", text: "Absolutely. Our current rate is KES 120/kg for Grade A.", at: Date.now() - 1000 * 60 * 25 },
      { id: "m4", sender: "buyer",  text: "What if I order 100kg or more?", at: Date.now() - 1000 * 60 * 12 },
      { id: "m5", sender: "seller", text: "Sure, what quantity are you looking for?", at: Date.now() - 1000 * 60 * 8 },
    ],
  },
  {
    id: "c2",
    sellerId: "s2",
    lastMessage: "Fresh tomatoes arriving tomorrow morning 🍅",
    lastMessageAt: Date.now() - 1000 * 60 * 60 * 2, // 2 hrs ago
    lastMessageSender: "seller",
    unread: 0,
    messages: [
      { id: "m1", sender: "buyer",  text: "Hi, do you have Grade 1 tomatoes in stock?", at: Date.now() - 1000 * 60 * 60 * 4 },
      { id: "m2", sender: "seller", text: "Yes, we have plenty available this week.", at: Date.now() - 1000 * 60 * 60 * 3 },
      { id: "m3", sender: "seller", text: "Fresh tomatoes arriving tomorrow morning 🍅", at: Date.now() - 1000 * 60 * 60 * 2 },
    ],
  },
  {
    id: "c3",
    sellerId: "s3",
    lastMessage: "You: Thanks, I'll get back to you",
    lastMessageAt: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
    lastMessageSender: "buyer",
    unread: 0,
    messages: [
      { id: "m1", sender: "buyer",  text: "What's the current price for dry maize in bulk?", at: Date.now() - 1000 * 60 * 60 * 26 },
      { id: "m2", sender: "seller", text: "KES 45/kg for orders above 500kg. Delivery included.", at: Date.now() - 1000 * 60 * 60 * 25 },
      { id: "m3", sender: "buyer",  text: "Thanks, I'll get back to you", at: Date.now() - 1000 * 60 * 60 * 24 },
    ],
  },
  {
    id: "c4",
    sellerId: "s4",
    lastMessage: "You: I'll place the order tonight",
    lastMessageAt: Date.now() - 1000 * 60 * 60 * 48,
    lastMessageSender: "buyer",
    unread: 0,
    messages: [
      { id: "m1", sender: "seller", text: "Dairy meal is in stock — KES 2,200 per 50kg bag.", at: Date.now() - 1000 * 60 * 60 * 50 },
      { id: "m2", sender: "buyer",  text: "I'll place the order tonight", at: Date.now() - 1000 * 60 * 60 * 48 },
    ],
  },
];

// Simulated auto-replies from sellers
const AUTO_REPLIES = [
  "Got it — let me check with the team and get back to you shortly.",
  "Sure thing. Would you like me to send you a photo of the current stock?",
  "We can definitely work something out on the price for that quantity.",
  "Thanks for the message! What's your preferred delivery date?",
  "Perfect. I'll reserve that for you and confirm in a few minutes.",
  "Understood. Let me know if you need anything else in the meantime.",
];

// ======================== Helpers ========================
const STORAGE_KEY = "agrisoko-messages-v1";

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return null;
    return parsed;
  } catch {
    return null;
  }
};

const saveToStorage = (conversations) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch {
    // Storage quota exceeded — silently ignore
  }
};

const formatRelativeTime = (ts) => {
  const date = new Date(ts);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "now";
  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  if (diffDays < 7) return `${diffDays}d`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const formatMessageTime = (ts) => {
  return new Date(ts).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
};

const groupMessagesByDay = (messages) => {
  const groups = [];
  let currentDay = null;

  messages.forEach((msg) => {
    const day = new Date(msg.at).toDateString();
    if (day !== currentDay) {
      currentDay = day;
      groups.push({ type: "day", id: `day-${day}`, label: formatDayLabel(msg.at) });
    }
    groups.push({ type: "msg", ...msg });
  });

  return groups;
};

const formatDayLabel = (ts) => {
  const date = new Date(ts);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  return date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
};

// ======================== Typing indicator ========================
const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-2">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[var(--text-dim)] typing-dot"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

// ======================== Component ========================
const BuyerMessage = () => {
  const [conversations, setConversations] = useState(() => loadFromStorage() || initialConversations);
  const [activeId, setActiveId] = useState(null);
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");
  const [sellerTyping, setSellerTyping] = useState(false);
  const [mobileShowSidebar, setMobileShowSidebar] = useState(true);

  const endRef = useRef(null);
  const replyTimeoutRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Persist to localStorage on every change
  useEffect(() => {
    saveToStorage(conversations);
  }, [conversations]);

  // Auto-scroll to newest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeId, conversations]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) clearTimeout(replyTimeoutRef.current);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const activeConvo = useMemo(
    () => conversations.find((c) => c.id === activeId) || null,
    [conversations, activeId]
  );

  const activeSeller = useMemo(
    () => (activeConvo ? SELLERS.find((s) => s.id === activeConvo.sellerId) : null),
    [activeConvo]
  );

  const filteredConvos = useMemo(() => {
    if (!search.trim()) return conversations;
    const q = search.toLowerCase();
    return conversations.filter((c) => {
      const seller = SELLERS.find((s) => s.id === c.sellerId);
      return (
        seller?.name.toLowerCase().includes(q) ||
        c.lastMessage.toLowerCase().includes(q)
      );
    });
  }, [conversations, search]);

  // ======================== Select conversation ========================
  const handleSelect = (id) => {
    setActiveId(id);
    setMobileShowSidebar(false);
    setSellerTyping(false);

    // Mark as read
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  // ======================== Send message ========================
  const handleSend = (e) => {
    e?.preventDefault();
    const text = draft.trim();
    if (!text || !activeId) return;

    const newMsg = {
      id: `m-${Date.now()}`,
      sender: "buyer",
      text,
      at: Date.now(),
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [...c.messages, newMsg],
              lastMessage: text,
              lastMessageAt: Date.now(),
              lastMessageSender: "buyer",
            }
          : c
      )
    );

    setDraft("");

    // Simulate the seller typing + replying
    simulateSellerReply(activeId);
  };

  // ======================== Simulated seller reply ========================
  const simulateSellerReply = (convoId) => {
    // Clear any pending reply for this conversation
    if (replyTimeoutRef.current) clearTimeout(replyTimeoutRef.current);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    // Seller starts typing after ~1s
    typingTimeoutRef.current = setTimeout(() => {
      setSellerTyping(true);
    }, 900);

    // Seller sends a reply after ~3s
    replyTimeoutRef.current = setTimeout(() => {
      setSellerTyping(false);

      const replyText = AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
      const replyMsg = {
        id: `m-${Date.now()}-r`,
        sender: "seller",
        text: replyText,
        at: Date.now(),
      };

      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== convoId) return c;
          const isActive = convoId === activeId;
          return {
            ...c,
            messages: [...c.messages, replyMsg],
            lastMessage: replyText,
            lastMessageAt: Date.now(),
            lastMessageSender: "seller",
            unread: isActive ? 0 : (c.unread || 0) + 1,
          };
        })
      );
    }, 3000);
  };

  // ======================== Rendered messages grouped by day ========================
  const groupedMessages = useMemo(
    () => (activeConvo ? groupMessagesByDay(activeConvo.messages) : []),
    [activeConvo]
  );

  // ======================== Total unread count ========================
  const totalUnread = conversations.reduce((sum, c) => sum + (c.unread || 0), 0);

  return (
    <div className="font-body h-[calc(100vh-9rem)] flex bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-[0_10px_40px_-20px_rgba(20,60,35,0.15)]">

      {/* ==================== Sidebar ==================== */}
      <aside
        className={`w-full sm:w-80 lg:w-96 flex-shrink-0 border-r border-[var(--border)] flex flex-col bg-[var(--surface)] ${
          mobileShowSidebar ? "flex" : "hidden sm:flex"
        }`}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-[var(--border)]">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-lg font-bold text-[var(--text)] tracking-tight">
              Messages
            </h1>
            {totalUnread > 0 && (
              <span className="min-w-[22px] h-[22px] px-2 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] text-[11px] font-bold flex items-center justify-center">
                {totalUnread}
              </span>
            )}
          </div>
          <p className="text-[12px] text-[var(--text-dim)] mt-0.5">
            {conversations.length} conversation{conversations.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Search */}
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

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto">
          {filteredConvos.length === 0 ? (
            <div className="p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-dim)] mb-3">
                <EmptyChatIcon className="w-6 h-6" />
              </div>
              <p className="text-[13px] text-[var(--text-muted)] font-medium">
                No conversations found
              </p>
            </div>
          ) : (
            filteredConvos.map((convo) => {
              const seller = SELLERS.find((s) => s.id === convo.sellerId);
              if (!seller) return null;

              const isActive = convo.id === activeId;
              const unread = convo.unread || 0;

              return (
                <button
                  key={convo.id}
                  onClick={() => handleSelect(convo.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors border-b border-[var(--border)] last:border-b-0 ${
                    isActive ? "bg-[var(--accent-soft)]" : "hover:bg-[var(--surface-2)]"
                  }`}
                >
                  {/* Avatar */}
                  <span className="relative w-11 h-11 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-lg flex-shrink-0">
                    {seller.emoji}
                    {seller.online && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[var(--surface)]" />
                    )}
                  </span>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <p className={`text-[13.5px] font-semibold truncate ${
                        isActive ? "text-[var(--accent-fg)]" : "text-[var(--text)]"
                      }`}>
                        {seller.name}
                      </p>
                      <span className="text-[10.5px] text-[var(--text-dim)] flex-shrink-0">
                        {formatRelativeTime(convo.lastMessageAt)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-[12px] truncate ${
                        unread > 0 ? "text-[var(--text)] font-medium" : "text-[var(--text-dim)]"
                      }`}>
                        {convo.lastMessageSender === "buyer" && "You: "}
                        {convo.lastMessage}
                      </p>
                      {unread > 0 && (
                        <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--highlight)] text-[var(--highlight-fg)] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </aside>

      {/* ==================== Chat window ==================== */}
      <section
        className={`flex-1 flex flex-col min-w-0 bg-[var(--bg)] ${
          mobileShowSidebar ? "hidden sm:flex" : "flex"
        }`}
      >
        {!activeConvo ? (
          // Empty state
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-dim)] mb-5">
                <EmptyChatIcon className="w-9 h-9" />
              </div>
              <h2 className="font-display text-lg font-bold text-[var(--text)]">
                Pick a conversation
              </h2>
              <p className="text-[13px] text-[var(--text-muted)] mt-2 leading-relaxed">
                Select a seller from the list to start chatting. Messages update instantly on your device.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-[var(--border)] bg-[var(--surface)] flex-shrink-0">
              <button
                onClick={() => setMobileShowSidebar(true)}
                aria-label="Back"
                className="sm:hidden w-9 h-9 rounded-full hover:bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-muted)] flex-shrink-0"
              >
                <ArrowLeftIcon />
              </button>

              <span className="relative w-10 h-10 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-lg flex-shrink-0">
                {activeSeller?.emoji}
                {activeSeller?.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[var(--surface)]" />
                )}
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-[var(--text)] truncate">
                  {activeSeller?.name}
                </p>
                <p className="text-[11.5px] text-[var(--text-dim)]">
                  {sellerTyping ? (
                    <span className="text-[var(--accent-fg)] font-medium">typing...</span>
                  ) : activeSeller?.online ? (
                    <span className="text-green-600">Online now</span>
                  ) : (
                    "Offline"
                  )}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-1">
              {groupedMessages.map((item, i) => {
                if (item.type === "day") {
                  return (
                    <div key={item.id} className="flex items-center justify-center py-4">
                      <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[var(--text-dim)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1 rounded-full">
                        {item.label}
                      </span>
                    </div>
                  );
                }

                const isOwn = item.sender === "buyer";
                const prevItem = groupedMessages[i - 1];
                const showAvatar = prevItem?.type !== "msg" || prevItem.sender !== item.sender;

                return (
                  <div
                    key={item.id}
                    className={`flex items-end gap-2 ${isOwn ? "justify-end" : "justify-start"}`}
                  >
                    {!isOwn && (
                      <span
                        className={`w-7 h-7 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[13px] flex-shrink-0 transition-opacity ${
                          showAvatar ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {activeSeller?.emoji}
                      </span>
                    )}

                    <div className={`max-w-[75%] flex flex-col ${isOwn ? "items-end" : "items-start"}`}>
                      <div
                        className={`rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed break-words ${
                          isOwn
                            ? "bg-[var(--brand)] text-[var(--brand-fg)] rounded-br-md"
                            : "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] rounded-bl-md"
                        }`}
                      >
                        {item.text}
                      </div>
                      <div className={`flex items-center gap-1 mt-1 px-1 ${isOwn ? "flex-row-reverse" : ""}`}>
                        <span className="text-[10.5px] text-[var(--text-dim)]">
                          {formatMessageTime(item.at)}
                        </span>
                        {isOwn && (
                          <span className="text-[var(--accent-fg)]">
                            <CheckCheckIcon />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {sellerTyping && (
                <div className="flex items-end gap-2 justify-start">
                  <span className="w-7 h-7 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[13px] flex-shrink-0">
                    {activeSeller?.emoji}
                  </span>
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl rounded-bl-md">
                    <TypingDots />
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Composer */}
            <form
              onSubmit={handleSend}
              className="flex items-end gap-2 px-4 sm:px-6 py-3.5 border-t border-[var(--border)] bg-[var(--surface)] flex-shrink-0"
            >
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  type="button"
                  aria-label="Attach image"
                  className="w-9 h-9 rounded-full hover:bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
                >
                  <ImageIcon />
                </button>
                <button
                  type="button"
                  aria-label="Insert emoji"
                  className="w-9 h-9 rounded-full hover:bg-[var(--surface-2)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
                >
                  <SmileIcon />
                </button>
              </div>

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
                aria-label="Send message"
                className="w-11 h-11 rounded-full bg-[var(--brand)] text-[var(--brand-fg)] flex items-center justify-center hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity flex-shrink-0"
              >
                <SendIcon />
              </button>
            </form>
          </>
        )}
      </section>

      {/* Typing dot animation */}
      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        .typing-dot { animation: typingBounce 1.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default BuyerMessage;