"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./InitializedMDXEditor"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[350px] rounded-md border light-border-2 background-light900_dark300" />
  ),
});

export default Editor;
