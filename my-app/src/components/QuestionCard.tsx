import React, { useEffect, useRef, useState } from "react";

function splitIntoRectWidth(question: string, rectWidth: number) {
  const result = [];
  if (!question) return [];
  while (question.length > 0) {
    const fittedText = getFittedTextWithinWidth(question, rectWidth);
    result.push(fittedText);
    if (!fittedText) break;
    question = question.slice(fittedText.length);
  }
  return result;
}

function getFittedTextWithinWidth(text: string, rectWidth: number) {
  let chunk = "";
  if (!process.browser) return;
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return;
  ctx.font = "18px sans-jp";
  
  for (let i = 0; i < text.length; i++) {
    chunk += text[i];
    const chunkWidth = ctx.measureText(chunk).width;
    if (chunkWidth > rectWidth) {
      chunk = chunk.slice(0, -1);
      break;
    }
  }
  return chunk;
}

const QuestionCard = ({ question }: {question: string}) => {
  const [rectWidth, setRectWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const width = (cardRef.current as HTMLElement)?.offsetWidth || 0;
      setRectWidth(width);
    }
  }, []);

  const questionText = 'Q. ' + question;
  const splitQuestion = splitIntoRectWidth(questionText, rectWidth);

  return (
    <div
      className="rounded-lg w-full h-full p-6 shadow-md bg-cover bg-[url('/normal_paper.jpg')]"
    >
      {splitQuestion.map((text, index) => (
        <span
          ref={cardRef}
          key={index}
          className="w-full block text-lg border-dashed border-b border-orange-900"
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default QuestionCard;