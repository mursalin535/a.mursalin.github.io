import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function TypingAnimation({
  children,
  words,
  className,
  duration = 5000,
  chunkSize = 5,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}) {
  const MotionComponent = motion.create(Component, { forwardMotionProps: true })
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const elementRef = useRef(null)
  const fullText = useMemo(() => (words ? words.join(" ") : children || ""), [words, children])

  useEffect(() => {
    if (!fullText) return
    const totalSteps = Math.ceil(fullText.length / chunkSize)
    const intervalTime = duration / totalSteps

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = Math.min(prev + chunkSize, fullText.length)
        setDisplayedText(fullText.slice(0, nextIndex))
        if (nextIndex >= fullText.length) clearInterval(interval)
        return nextIndex
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [fullText, chunkSize, duration])

  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "▌"
      case "underscore":
        return "_"
      case "line":
      default:
        return "|"
    }
  }

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("leading-[1.5em] tracking-[-0.02em]", className)}
      {...props}
    >
      {displayedText}
      {showCursor && displayedText.length < fullText.length && (
        <span className={cn("inline-block", blinkCursor && "animate-blink-cursor")}>
          {getCursorChar()}
        </span>
      )}
    </MotionComponent>
  )
}
