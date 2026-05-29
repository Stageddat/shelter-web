"use client";

import { useCallback, useRef } from "react";
import {
  Editor as TiptapEditor,
  EditorContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Separator } from "@/components/ui/separator";
import { EditorToolbar } from "./EditorToolbar";
import styles from "./Editor.module.css";

interface Props {
  initialContent?: string;
  editable?: boolean;
  onChange?: (content: string) => void;
  onEmptyChange?: (isEmpty: boolean) => void;
}

export function Editor({
  initialContent = "",
  editable = true,
  onChange,
  onEmptyChange,
}: Props) {
  const wasEmptyRef = useRef(true);

  const handleUpdate = useCallback(
    ({ editor }: { editor: TiptapEditor }) => {
      onChange?.(JSON.stringify(editor.getJSON()));

      const currentEmpty = editor.isEmpty;
      if (currentEmpty !== wasEmptyRef.current) {
        wasEmptyRef.current = currentEmpty;

        queueMicrotask(() => {
          onEmptyChange?.(currentEmpty);
        });
      }
    },
    [onChange, onEmptyChange],
  );

  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: false })],
    content: initialContent ? JSON.parse(initialContent) : "",
    editable,
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    onUpdate: handleUpdate,
  });

  if (!editor) return null;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {editable && (
        <>
          <EditorToolbar editor={editor} />
          <Separator className="mb-4 h-0.5!" />
        </>
      )}

      <EditorContent
        editor={editor}
        className={`flex-1 outline-none ${styles.tiptapEditor}`}
      />
    </div>
  );
}
