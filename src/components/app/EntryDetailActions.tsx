"use client";

import { Pencil, Trash2, X, Check, ArrowLeft } from "lucide-react";

interface EntryDetailActionsProps {
  isEditing: boolean;
  isSaving: boolean;
  canSave: boolean;
  onEdit: () => void;
  onCancelEdit: () => void;
  onSave: () => void;
  onDelete: () => void;
  onBack: () => void;
}

export const EntryDetailActions = ({
  isEditing,
  isSaving,
  canSave,
  onEdit,
  onCancelEdit,
  onSave,
  onDelete,
  onBack,
}: EntryDetailActionsProps) => {
  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      <button
        onClick={onBack}
        className="flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-gray-500 lowercase transition-all hover:bg-white/50 hover:text-gray-800 dark:hover:bg-white/5 dark:hover:text-gray-200"
      >
        <ArrowLeft className="h-4 w-4" />
        back
      </button>

      <div className="flex items-center gap-3">
        {isEditing ? (
          <>
            <button
              onClick={onCancelEdit}
              className="flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-gray-500 lowercase transition-all hover:bg-white/50 hover:text-gray-800 dark:hover:bg-white/5 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
              cancel
            </button>
            <button
              onClick={onSave}
              disabled={isSaving || !canSave}
              className="bg-primary hover:bg-primary/90 flex transform items-center gap-2 rounded-xl px-8 py-3 font-bold text-[#131514] lowercase shadow-sm transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Check className="h-4 w-4" />
              {isSaving ? "saving..." : "save"}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onDelete}
              className="flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-red-500 lowercase transition-all hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-950/20"
            >
              <Trash2 className="h-4 w-4" />
              delete
            </button>
            <button
              onClick={onEdit}
              className="bg-primary hover:bg-primary/90 flex transform items-center gap-2 rounded-xl px-8 py-3 font-bold text-[#131514] lowercase shadow-sm transition-all active:scale-95"
            >
              <Pencil className="h-4 w-4" />
              edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};
