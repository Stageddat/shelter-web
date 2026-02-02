"use client";

interface EntryActionsProps {
  onCancel: () => void;
  onSave: () => void;
  isSaving: boolean;
  canSave: boolean;
}

export const NewEntryActions = ({
  onCancel,
  onSave,
  isSaving,
  canSave,
}: EntryActionsProps) => {
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <button
        onClick={onCancel}
        className="rounded-xl px-6 py-3 font-medium text-gray-500 lowercase transition-all hover:bg-white/50 hover:text-gray-800 dark:hover:bg-white/5 dark:hover:text-gray-200"
      >
        cancel
      </button>
      <button
        onClick={onSave}
        disabled={isSaving || !canSave}
        className="bg-primary hover:bg-primary/90 flex transform items-center gap-2 rounded-xl px-8 py-3 font-bold text-[#131514] lowercase shadow-sm transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="material-symbols-outlined text-[18px]"></span>
        {isSaving ? "saving..." : "save"}
      </button>
    </div>
  );
};
