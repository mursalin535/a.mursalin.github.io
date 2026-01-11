import { cn } from "@/lib/utils"

const createDelay = ({ offset, index, delay }) => {
  return delay + (index + offset) * 50 + "ms"
}

const Word = ({
  isWordMode,
  word,
  index,
  offset,
  delay,
  duration,
  className,
}) => {
  if (isWordMode) {
    return word
  }

  return (
    <>
      {word.split("").map((letter, letterIndex) => (
        <span
          key={`${letter}_${letterIndex}_${index}`}
          className={cn(className)}
          style={{
            animationDuration: duration,
            animationDelay: createDelay({
              index: letterIndex,
              offset,
              delay,
            }),
          }}
        >
          {letter}
        </span>
      ))}
    </>
  )
}

const createAnimatedNodes = (args, word, index) => {
  const {
    nodes,
    offset,
    wordsLength,
    textLength,
    mode,
    direction,
    duration,
    delay,
    blur,
    className,
  } = args

  const isWordMode = mode === "word"
  const isUp = direction === "up"
  const length = isWordMode ? wordsLength : textLength
  const isLast = index === length - 1

  const animationClass = cn(
    "inline-block opacity-0 transition-all ease-in-out fill-mode-forwards",
    {
      "animate-[reveal-down]": !isUp && !blur,
      "animate-[reveal-up]": isUp && !blur,
      "animate-[reveal-down,content-blur]": !isUp && blur,
      "animate-[reveal-up,content-blur]": isUp && blur,
    },
    className
  )

  const node = (
    <span
      key={`word_${index}`}
      className={cn("contents", {
        [animationClass]: isWordMode,
      })}
      style={
        isWordMode
          ? {
              animationDuration: duration,
              animationDelay: createDelay({
                index,
                offset,
                delay,
              }),
            }
          : undefined
      }
    >
      <Word
        isWordMode={isWordMode}
        word={word}
        index={index}
        offset={offset}
        duration={duration}
        className={animationClass}
        delay={delay}
      />
      {!isLast && " "}
    </span>
  )

  return {
    ...args,
    nodes: [...nodes, node],
    offset: offset + (isWordMode ? 1 : word.length + 1),
  }
}

export default function WaveReveal({
  text,
  direction = "down",
  mode = "letter",
  className,
  duration = "2000ms",
  delay = 0,
  blur = true,
  letterClassName,
}) {
  if (!text) return null

  const words = text.trim().split(/\s/)

  const { nodes } = words.reduce(createAnimatedNodes, {
    nodes: [],
    offset: 0,
    wordsLength: words.length,
    textLength: text.length,
    direction,
    mode,
    duration,
    delay,
    blur,
    className: letterClassName,
  })

  return (
    <div
      className={cn(
        "relative flex flex-wrap justify-center whitespace-pre px-2 text-4xl font-black md:px-6 md:text-7xl",
        className
      )}
    >
      {nodes}
      <div className="sr-only">{text}</div>
    </div>
  )
}
