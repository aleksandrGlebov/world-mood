import { useState, useCallback } from 'react';

const MAX_WORDS = 20;

export const useWordInput = () => {
  const [words, setWords] = useState<string[]>([]);
  const [remainingWords, setRemainingWords] = useState(MAX_WORDS);

  const addWord = useCallback((word: string) => {
    if (remainingWords > 0 && !words.includes(word)) {
      setWords((prevWords) => [...prevWords, word]);
      setRemainingWords((prev) => prev - 1);
    }
  }, [words, remainingWords]);

  return { words, remainingWords, addWord };
};