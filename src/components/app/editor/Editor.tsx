"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorToolbar } from "./EditorToolbar";
import { Separator } from "@/components/ui/separator";
import styles from "./Editor.module.css";

interface EditorProps {
  content: string;
  editable: boolean;
  onChange?: (content: string) => void;
}

export function Editor({ content, editable, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: false })],
    content: content ? JSON.parse(content) : "",
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(JSON.stringify(editor.getJSON()));
    },
  });

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {" "}
      {editable && <EditorToolbar editor={editor} />}
      <Separator className="mb-4 h-0.5!" />
      <EditorContent
        editor={editor}
        className={`flex-1 outline-none ${styles.tiptapEditor}`}
      />
    </div>
  );
}
