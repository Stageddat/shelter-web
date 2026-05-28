import styles from "./LoadingText.module.css";

export default function LoadingText({ text = "loading" }: { text?: string }) {
  return <span className={`${styles.dots} text-muted-foreground`}>{text}</span>;
}
