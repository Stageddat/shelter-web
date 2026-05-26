"use client";
import packageJson from "@/../package.json";
export default function AppPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-12">
      <div className="text-center">
        <h2 className="mb-2 text-7xl font-bold tracking-tight lowercase">
          welcome to your shelter!
        </h2>
        <p className="text-2xl text-red-600 uppercase">
          This version of the application is in an early stage of development
          (Alpha). <br /> Its use is at your own risk; we are not responsible
          for any data loss between updates.
        </p>
        <p className="text-muted-foreground text-lg lowercase">
          v{packageJson.version}
        </p>
      </div>
    </main>
  );
}
