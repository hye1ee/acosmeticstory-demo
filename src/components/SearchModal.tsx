"use client";

import { X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-light">Search</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            className="w-full p-4 text-lg border-b border-gray-200 focus:outline-none focus:border-black"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
