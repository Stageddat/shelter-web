"use client";

import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

import { Sidebar } from "@/components/app/Sidebar";
import { Header } from "@/components/Header";
// import { JournalEntry } from "@/components/JournalEntry";
// import { EntryActions } from "@/components/EntryActions";

export default function App() {
  // const { masterKey, isAuthenticated } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) {
  //   return null;
  // }

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
