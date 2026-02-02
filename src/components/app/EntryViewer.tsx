"use client";

import { DecryptedEntry } from "@/services/app/entryService";

interface EntryViewerProps {
  entry: DecryptedEntry;
  wordCount: number;
  isEditing: boolean;
  editTitle: string;
  editContent: string;
  onTitleChange: (title: string) => void;
  onContentChange: (content: string) => void;
}

export const EntryViewer = ({
  entry,
  wordCount,
  isEditing,
  editTitle,
  editContent,
  onTitleChange,
  onContentChange,
}: EntryViewerProps) => {
  return (
    <div className="dark:bg-background-dark/30 flex min-h-[65vh] flex-col rounded-xl bg-white p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]">
      {isEditing ? (
        <>
          <input
            className="mb-6 w-full border-none bg-transparent p-0 text-left text-4xl font-bold tracking-tight lowercase placeholder:opacity-20 focus:ring-0 focus:outline-none"
            placeholder="untitled entry"
            type="text"
            value={editTitle}
            onChange={(e) => onTitleChange(e.target.value)}
          />

          <textarea
            className="w-full flex-1 resize-none border-none bg-transparent p-0 text-left text-lg leading-relaxed font-light lowercase placeholder:opacity-20 focus:ring-0 focus:outline-none"
            placeholder="begin your thoughts here..."
            value={editContent}
            onChange={(e) => onContentChange(e.target.value)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          />
        </>
      ) : (
        <>
          <h1 className="mb-6 text-4xl font-bold tracking-tight lowercase">
            {entry.title}
          </h1>

          <div className="flex-1 text-lg leading-relaxed font-light whitespace-pre-wrap lowercase">
            {entry.content}
          </div>
        </>
      )}

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 dark:border-gray-800/30">
        <div className="flex items-center gap-4 text-xs tracking-wider text-gray-400 uppercase">
          <span>{wordCount} words</span>
          <span>•</span>
          <span>{entry.date}</span>
          <span>•</span>
          <span>{entry.time}</span>
        </div>
      </div>

      <style jsx>{`
        textarea::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
