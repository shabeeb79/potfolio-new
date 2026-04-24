import { useEffect, useState } from "react";

function useTypewriter(words = [], speed = 80, pauseDuration = 2000) {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!Array.isArray(words) || words.length === 0) {
      setCurrentText("");
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    let timeoutDelay = isDeleting ? speed / 2 : speed;

    if (!isDeleting && currentText.length === currentWord.length) {
      timeoutDelay = pauseDuration;
    }

    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else if (currentText.length > 0) {
        setCurrentText(currentWord.slice(0, currentText.length - 1));
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, timeoutDelay);

    return () => clearTimeout(timeoutId);
  }, [words, speed, pauseDuration, currentText, wordIndex, isDeleting]);

  return currentText;
}

export default useTypewriter;
