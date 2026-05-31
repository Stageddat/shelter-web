import { dynamicGreetings } from "@/data/app/dynamicGreetings";

type TimeOfDay = keyof typeof dynamicGreetings;

const getTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 22) return "evening";
  return "night";
};

export function getDynamicGreeting(
  username: string | null | undefined,
): string {
  const time = dynamicGreetings[getTimeOfDay()];

  const pool = username
    ? [
        ...time.withUser,
        ...dynamicGreetings.default.withUser,
        ...time.anonymous, // add anonymous greetings anyways for more variety :3
        ...dynamicGreetings.default.anonymous,
      ]
    : [...time.anonymous, ...dynamicGreetings.default.anonymous];

  const template = pool[Math.floor(Math.random() * pool.length)];
  return username ? template.replace("{username}", username) : template;
}
