"use client";

import { Editor, useEditorState } from "@tiptap/react";

import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Code,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

interface Props {
  editor: Editor;
}

export function EditorToolbar({ editor }: Props) {
  const state = useEditorState({
    editor,

    selector: ({ editor }) => ({
      bold: editor.isActive("bold"),
      italic: editor.isActive("italic"),
      strike: editor.isActive("strike"),
      bullet: editor.isActive("bulletList"),
      ordered: editor.isActive("orderedList"),
      code: editor.isActive("code"),
    }),
  });

  const buttons = [
    {
      icon: Bold,
      active: state.bold,
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      icon: Italic,
      active: state.italic,
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: Strikethrough,
      active: state.strike,
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      icon: List,
      active: state.bullet,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: ListOrdered,
      active: state.ordered,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      icon: Code,
      active: state.code,
      onClick: () => editor.chain().focus().toggleCode().run(),
    },
  ];

  return (
    <div className="mb-2 flex gap-1 px-3">
      {buttons.map((button, index) => {
        const Icon = button.icon;

        return (
          <Toggle
            key={index}
            pressed={button.active}
            onPressedChange={button.onClick}
            className="rounded p-2"
          >
            <Icon className="h-4 w-4" />
          </Toggle>
        );
      })}
    </div>
  );
}
