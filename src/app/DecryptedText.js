import React, { useState, useEffect, useRef } from "react";

const DecryptedText = ({
  text = "",
  speed = 50,
  animateOn = "view", // "view", "hover", or "immediate"
  sequential = false,
  duration = 1000, // Total animation duration in ms
  revealDirection = "start", // "start", "center", "end", "random"
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,./<>?",
  className = "",
  encryptedClassName = "",
  glitchIntensity = 0.3, // 0-1 value for how much glitching occurs after reveal
  preserveWhitespace = true,
  onAnimationComplete = () => {},
}) => {
  // Split text into array of characters for better animation control
  const textArray = text.split("");

  // State for each character's current display value and reveal status
  const [displayChars, setDisplayChars] = useState(
    textArray.map((char) => ({
      current:
        preserveWhitespace && char === " " ? " " : getRandomChar(characters),
      revealed: preserveWhitespace && char === " ", // Whitespace is considered revealed initially if preserveWhitespace is true
      isSpace: char === " ",
    }))
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Get random character from character set
  function getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
  }

  // Calculate character reveal order based on direction
  function getRevealOrder() {
    const indices = Array.from({ length: textArray.length }, (_, i) => i);

    switch (revealDirection) {
      case "start":
        return indices; // Already in order 0, 1, 2...
      case "end":
        return indices.reverse(); // Reverse order
      case "center": {
        // Sort by distance from center
        const center = Math.floor(textArray.length / 2);
        return indices.sort(
          (a, b) => Math.abs(a - center) - Math.abs(b - center)
        );
      }
      case "random":
        // Shuffle array
        return indices.sort(() => Math.random() - 0.5);
      default:
        return indices;
    }
  }

  // Main animation function
  function animateText() {
    if (isAnimating || hasAnimated) return;
    setIsAnimating(true);

    const revealOrder = getRevealOrder();
    const startTime = performance.now();
    const charDuration = sequential ? duration / textArray.length : duration;

    // For non-sequential animation, we need a different timing strategy
    const updateChars = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Update display characters
      setDisplayChars((prev) => {
        const newChars = [...prev];

        revealOrder.forEach((index, orderIndex) => {
          // Skip spaces if preserveWhitespace is true
          if (preserveWhitespace && textArray[index] === " ") return;

          // Determine if this character should be revealed yet
          const shouldReveal = sequential
            ? elapsed > orderIndex * charDuration
            : Math.random() < progress * 2;

          // If already revealed, occasionally glitch based on glitchIntensity
          if (newChars[index].revealed) {
            // Don't glitch spaces
            if (
              !newChars[index].isSpace &&
              Math.random() < glitchIntensity * 0.05
            ) {
              newChars[index] = {
                ...newChars[index],
                current: getRandomChar(characters),
              };

              // Quick reset back to the correct character
              setTimeout(() => {
                setDisplayChars((latest) => {
                  const reset = [...latest];
                  reset[index] = {
                    ...reset[index],
                    current: textArray[index],
                  };
                  return reset;
                });
              }, 50);
            }
            return;
          }

          // Not yet revealed - either reveal or change random character
          if (shouldReveal) {
            newChars[index] = {
              ...newChars[index],
              current: textArray[index],
              revealed: true,
            };
          } else {
            // For spaces, keep them as spaces but not revealed
            if (textArray[index] === " ") {
              newChars[index] = {
                ...newChars[index],
                current: " ",
                isSpace: true,
              };
            } else {
              newChars[index] = {
                ...newChars[index],
                current: getRandomChar(characters),
              };
            }
          }
        });

        return newChars;
      });

      // Continue animation if not complete
      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(updateChars);
      } else {
        // Ensure all characters are correctly revealed at the end
        setDisplayChars((prev) =>
          prev.map((char, i) => ({
            current: textArray[i],
            revealed: true,
            isSpace: textArray[i] === " ",
          }))
        );
        setIsAnimating(false);
        setHasAnimated(true);
        onAnimationComplete();
      }
    };

    animationRef.current = requestAnimationFrame(updateChars);
  }

  // Handle visibility-based animation
  useEffect(() => {
    if (animateOn === "immediate") {
      animateText();
    } else if (animateOn === "view") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateText();
          }
        },
        { threshold: 0.2 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }

    // Cleanup animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle hover animation
  const handleMouseEnter = () => {
    if (animateOn === "hover" && !hasAnimated) {
      animateText();
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`decrypted-text ${className} ${
        !hasAnimated ? encryptedClassName : ""
      }`}
      aria-label={text}
      style={{ whiteSpace: "pre-wrap" }}
    >
      {displayChars.map((char, index) => (
        <span
          key={index}
          className={char.revealed ? "revealed" : "encrypting"}
          style={{
            display: "inline",
            visibility: char.isSpace && !char.revealed ? "hidden" : "visible",
          }}
        >
          {char.current}
        </span>
      ))}
    </span>
  );
};

export default DecryptedText;
