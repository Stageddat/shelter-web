"use client";
import packageJson from "@/../package.json";

export default function AppPage() {
  return (
    <main className="flex min-h-screen flex-col px-10 py-12">
      {/* top */}
      <h2 className="mb-6 text-left text-7xl font-bold tracking-wide lowercase">
        welcome to your shelter!
      </h2>

      <div className="grid h-1/3 grid-cols-3 grid-rows-2 gap-2">
        <div className="bg-accent col-span-2 row-span-2 rounded-xl p-10 text-3xl">
          biggie card :D <br />
          todo: last entries, type shit
        </div>
        <div className="bg-accent rounded-xl p-10 text-3xl">streak</div>
        <div className="bg-accent rounded-xl p-10 text-3xl">entries count</div>
      </div>

      {/* abajo */}
      <div className="mt-auto">
        <p className="w-fit rounded-xl border-2 border-dashed border-red-600 bg-red-200 p-3 text-2xl tracking-wide text-red-600 uppercase">
          This version of the application is in an early stage of development
          (Alpha). <br /> Its use is at your own risk; we are not responsible
          for any data loss between updates.
        </p>

        <p className="text-muted-foreground mt-2 -mr-8 -mb-10 text-right text-lg lowercase">
          v{packageJson.version}
        </p>
      </div>
    </main>
  );
}
