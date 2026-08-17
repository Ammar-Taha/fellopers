"use client";

import { languages } from "@codemirror/language-data";
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  CodeToggle,
  ConditionalContents,
  CreateLink,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  type CodeBlockLanguage,
} from "@mdxeditor/editor";
import { basicDark } from "cm6-theme-basic-dark";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

import "@mdxeditor/editor/style.css";

type InitializedMDXEditorProps = {
  value: string;
  fieldChange: (value: string) => void;
};

const POPULAR_LANGUAGE_NAMES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "HTML",
  "CSS",
  "SQL",
  "JSON",
  "JSX",
  "TSX",
  "Shell",
  "PowerShell",
  "Markdown",
];

const CODE_BLOCK_LANGUAGES: CodeBlockLanguage[] = [
  { name: "Plain Text", alias: ["text", "plain"], extensions: ["txt"] },
  ...[...languages]
    .sort((a, b) => {
      const aRank = POPULAR_LANGUAGE_NAMES.indexOf(a.name);
      const bRank = POPULAR_LANGUAGE_NAMES.indexOf(b.name);
      const aPopular = aRank === -1 ? POPULAR_LANGUAGE_NAMES.length : aRank;
      const bPopular = bRank === -1 ? POPULAR_LANGUAGE_NAMES.length : bRank;

      if (aPopular !== bPopular) return aPopular - bPopular;

      return a.name.localeCompare(b.name);
    })
    .map((language) => ({
      name: language.name,
      alias: language.alias,
      extensions: language.extensions,
    })),
];

const subscribeToNothing = () => () => {};

const InitializedMDXEditor = ({
  value,
  fieldChange,
}: InitializedMDXEditorProps) => {
  const { resolvedTheme } = useTheme();
  const isClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const isDark = resolvedTheme === "dark";

  if (!isClient) {
    return (
      <div className="min-h-[350px] rounded-md border light-border-2 background-light900_dark300" />
    );
  }

  return (
    <MDXEditor
      key={resolvedTheme}
      markdown={value}
      onChange={fieldChange}
      className={cn(
        "dark-editor markdown-editor w-full rounded-md border light-border-2 background-light900_dark300",
        isDark && "dark-theme",
      )}
      contentEditableClassName="prose max-w-none dark:prose-invert min-h-[350px] p-4"
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "javascript" }),
        codeMirrorPlugin({
          codeBlockLanguages: CODE_BLOCK_LANGUAGES,
          autoLoadLanguageSupport: true,
          codeMirrorExtensions: isDark ? [basicDark] : [],
        }),
        toolbarPlugin({
          toolbarContents: () => (
            <ConditionalContents
              options={[
                {
                  when: (editor) => editor?.editorType === "codeblock",
                  contents: () => <ChangeCodeMirrorLanguage />,
                },
                {
                  fallback: () => (
                    <>
                      <UndoRedo />
                      <Separator />
                      <BoldItalicUnderlineToggles />
                      <CodeToggle />
                      <Separator />
                      <BlockTypeSelect />
                      <Separator />
                      <ListsToggle />
                      <Separator />
                      <CreateLink />
                      <InsertImage />
                      <InsertTable />
                      <InsertThematicBreak />
                      <Separator />
                      <InsertCodeBlock />
                    </>
                  ),
                },
              ]}
            />
          ),
        }),
      ]}
    />
  );
};

export default InitializedMDXEditor;
