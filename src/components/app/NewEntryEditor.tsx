"use client";

interface EntryEditorProps {
  title: string;
  onTitleChange: (title: string) => void;
  content: string;
  onContentChange: (content: string) => void;
  wordCount: number;
}

export const NewEntryEditor = ({
  title,
  onTitleChange,
  content,
  onContentChange,
  wordCount,
}: EntryEditorProps) => {
  return (
    <div className="dark:bg-background-dark/30 flex min-h-[65vh] flex-col rounded-xl bg-white p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]">
      <input
        className="mb-6 w-full border-none bg-transparent p-0 text-left text-4xl font-bold tracking-tight lowercase placeholder:opacity-20 focus:ring-0 focus:outline-none"
        placeholder="untitled entry"
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />

      <textarea
        className="w-full flex-1 resize-none border-none bg-transparent p-0 text-left text-lg leading-relaxed font-light lowercase placeholder:opacity-20 focus:ring-0 focus:outline-none"
        placeholder="begin your thoughts here..."
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      />

      <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 dark:border-gray-800/30">
        <div className="flex items-center gap-4 text-xs tracking-wider text-gray-400 uppercase">
          <span>{wordCount} words</span>
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
