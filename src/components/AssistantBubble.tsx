"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export default function AssistantBubble() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-10 right-8 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-lg shadow-lg p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Assistant</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="text-sm text-gray-600">How can I help you today?</div>
        </div>
      ) : (
        <div className="relative group">
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            AI 어시스턴트
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="bg-black rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            aria-label="Open assistant"
          >
            <Sparkles
              size={20}
              strokeWidth={1}
              fill="white"
              className="text-white group-hover:animate-spin"
            />
          </button>
        </div>
      )}
    </div>
  );
}
