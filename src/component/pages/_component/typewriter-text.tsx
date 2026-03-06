import { useState, useEffect, useCallback } from "react";

const WORDS = [
  "Software Engineer",
  "Frontend Developer",
  "React Specialist",
  "React Native Dev",
  "UI Architect",
];

export default function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [display, setDisplay] = useState("");

  const tick = useCallback(() => {
    const currentWord = WORDS[wordIndex];

    if (!isDeleting) {
      setDisplay(currentWord.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setDisplay(currentWord.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        return;
      }
    }
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="text-primary">
      {display}
      <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
}
