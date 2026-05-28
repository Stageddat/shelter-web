"use client";

import { Toggle } from "@/components/ui/toggle";
import { Editor, useEditorState } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Code,
} from "lucide-react";

interface EditorToolbarProps {
  editor: Editor | null;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor?.isActive("bold") ?? false,
      isItalic: ctx.editor?.isActive("italic") ?? false,
      isStrike: ctx.editor?.isActive("strike") ?? false,
      isBullet: ctx.editor?.isActive("bulletList") ?? false,
      isOrdered: ctx.editor?.isActive("orderedList") ?? false,
      isCode: ctx.editor?.isActive("code") ?? false,
    }),
  });

  if (!editor || !editorState) return null;

  const buttons = [
    {
      icon: Bold,
      action: () => editor.chain().focus().toggleBold().run(),
      active: editorState.isBold,
      label: "bold",
    },
    {
      icon: Italic,
      action: () => editor.chain().focus().toggleItalic().run(),
      active: editorState.isItalic,
      label: "italic",
    },
    {
      icon: Strikethrough,
      action: () => editor.chain().focus().toggleStrike().run(),
      active: editorState.isStrike,
      label: "strike",
    },
    {
      icon: List,
      action: () => editor.chain().focus().toggleBulletList().run(),
      active: editorState.isBullet,
      label: "bullet list",
    },
    {
      icon: ListOrdered,
      action: () => editor.chain().focus().toggleOrderedList().run(),
      active: editorState.isOrdered,
      label: "ordered list",
    },
    {
      icon: Code,
      action: () => editor.chain().focus().toggleCode().run(),
      active: editorState.isCode,
      label: "code",
    },
  ];

  return (
    <div className="mb-2 flex gap-0.5 px-3">
      {buttons.map(({ icon: Icon, action, active, label }) => (
        <Toggle
          key={label}
          type="button"
          pressed={active} // forzar el pressed de toggle con tiptap
          onPressedChange={action} // usar el evento nativo de togle
          className="hover:bg-accent rounded p-2 transition-colors"
        >
          <Icon className="h-4 w-4" />
        </Toggle>
      ))}
    </div>
  );
}
