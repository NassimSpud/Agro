import React from "react";

const BuyerCommunity = () => {
  const posts = [
    { id: 1, author: "Jane Wanjiru", content: "Anyone selling organic manure near Nairobi?", time: "2 hours ago" },
    { id: 2, author: "Peter Kariuki", content: "Just harvested fresh avocados from my farm in Murang'a. DM for orders!", time: "5 hours ago" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold mb-5">Community</h1>
      <div className="space-y-4 max-w-2xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-200" />
              <div>
                <div className="font-bold text-sm">{post.author}</div>
                <div className="text-xs text-gray-500">{post.time}</div>
              </div>
            </div>
            <p className="text-sm">{post.content}</p>
            <div className="mt-2 flex gap-3 text-xs text-gray-500">
              <button>👍 Like</button>
              <button>💬 Comment</button>
              <button>↗️ Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerCommunity;