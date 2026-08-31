import React, { useState } from "react";

const BuyerMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "seller", text: "Hello! How can I help you?", time: "10:30 AM" },
    { id: 2, sender: "buyer", text: "Hi, I'm interested in your avocados. Can we negotiate price?", time: "10:32 AM" },
    { id: 3, sender: "seller", text: "Sure, what quantity are you looking for?", time: "10:35 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), sender: "buyer", text: newMessage, time: "Just now" }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Messages</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-4 max-w-2xl">
        <div className="h-96 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "buyer" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] rounded-lg p-3 ${
                msg.sender === "buyer" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-800"
              }`}>
                <p className="text-sm">{msg.text}</p>
                <span className="text-xs opacity-70">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-600"
          />
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
};

export default BuyerMessages;