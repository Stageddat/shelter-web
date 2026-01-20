import { User, Mail, Cake, Lock, CircleQuestionMark, Info } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FormFieldConfig {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  icon: LucideIcon;
  tooltipIcon?: LucideIcon;
  tooltipContent?: string;
}

export const formFields: FormFieldConfig[] = [
  {
    id: "username",
    name: "username",
    label: "what would you like us to call you?",
    type: "text",
    placeholder: "enter your name",
    icon: User,
    tooltipIcon: Info,
    tooltipContent:
      "this is how we will call you across the app, you don't have to use your real name",
  },
  {
    id: "email",
    name: "email",
    label: "email",
    type: "email",
    placeholder: "enter your email",
    icon: Mail,
    tooltipIcon: CircleQuestionMark,
    tooltipContent: "we only use your email to send you important updates.",
  },
  {
    id: "dateOfBirth",
    name: "dateOfBirth",
    label: "date of birth",
    type: "date",
    icon: Cake,
    tooltipIcon: CircleQuestionMark,
    tooltipContent:
      "we only use this date to estimate your age for legal purposes.",
  },
  {
    id: "password",
    name: "password",
    label: "password",
    type: "password",
    placeholder: "set a password",
    icon: Lock,
  },
  {
    id: "password2",
    name: "password2",
    label: "repeat password",
    type: "password",
    placeholder: "repeat the password",
    icon: Lock,
  },
];
