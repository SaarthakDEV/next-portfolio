"use client";
import { useEffect, useState } from "react";
import { TABLET } from "@/libs/constant"

const Tag = () => {
    const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
    const words = TABLET;
    const erasingSpeed = 50;
    const typingSpeed = 300;
    const delay = 100;

  useEffect(() => {
    if (isErasing) {
      if (currentText.length > 0) {
        setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, erasingSpeed);
      } else {
        setIsErasing(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < words[wordIndex].length) {
        setTimeout(() => {
          setCurrentText((prev) => prev + words[wordIndex][currentText.length]);
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsErasing(true);
        }, delay); 
      }
    }
  }, [currentText, isErasing, wordIndex, words, typingSpeed, erasingSpeed, delay]);

  return (
    <span className="bg-black text-white text-xs border-1 border-gray-600 rounded-xl py-2 px-3">
      <span id="typewriter-word" className="text-red-600">{currentText}</span><span className="animate-ping font-extrabold">| </span><span>DEVELOPER</span>
    </span>
  )
}

export default Tag
