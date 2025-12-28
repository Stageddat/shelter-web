import CtaButton from "../CtaButton";

export default function Start() {
  return (
    <main className="flex flex-col gap-x-16 px-36 py-40">
      <h2 className="mb-2 text-center text-8xl">feel ready?</h2>
      <p className="mb-2.5 text-center text-2xl">
        start your journey without pressure
      </p>
      <div className="mx-auto w-1/6 items-center">
        <CtaButton />
      </div>
    </main>
  );
}
