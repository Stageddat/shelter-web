import {
  Database,
  Shield,
  CloudSync,
  EyeOff,
  Bird,
  PencilLine,
} from "lucide-react";
import type { FeatureCardProps } from "@/components/landing/FeatureCard";

export const features: FeatureCardProps[] = [
  {
    icon: Shield,
    title: "top-level security",
    text: "your entries are encrypted and protected at all times.",
  },
  {
    icon: Database,
    title: "local storage & offline-first",
    text: "keep your journals safe on your own device.",
  },
  {
    icon: CloudSync,
    title: "cloud sync (coming soon)",
    text: "soon you'll be able to access your thoughts anywhere.",
  },
  {
    icon: EyeOff,
    title: "100% personal & private",
    text: "your journal is for your eyes only.\nwe respect your privacy.",
  },
  {
    icon: Bird,
    title: "designed for calm",
    text: "a distraction-free interface to help you focus.",
  },
  {
    icon: PencilLine,
    title: "write at your own pace",
    text: "there are no deadlines or pressures. just you and your thoughts.",
  },
];
