"use client";

import { Sidebar } from "@/components/app/Sidebar";
import { Header } from "@/components/app/Header";
// import { JournalEntry } from "@/components/JournalEntry";
// import { EntryActions } from "@/components/EntryActions";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-y-auto">
        <Header />
        <div className="flex flex-1 justify-center px-6 py-12">
          <div className="w-full max-w-3xl">
            <p>welcome back owo</p>
            {/* <JournalEntry /> */}
            {/* <EntryActions /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
