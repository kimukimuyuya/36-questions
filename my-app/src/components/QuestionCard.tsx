import React from "react";
//FIXME: 点線の長さがばらばらになる
function splitIntoRectWidth(question?: string) {
  const rectWidth = 200;
  const result = [];
  if (!question) return;
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
  for (let i = 0; i < text.length; i++) {
    chunk += text[i];
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return;
    ctx.font = "14px sans-serif";
    const chunkWidth = ctx.measureText(chunk).width;
    if (chunkWidth > rectWidth) {
      chunk = chunk.slice(0, -1);
      break;
    }
  }
  return chunk;

}
const QuestionCard = ({ question }: { question: string }) => {
  const questionText = 'Q. ' + question;
  const splitQuestion = splitIntoRectWidth(questionText);

  return (
    <div className="p-6 shadow-md" 
    style={{ 
      backgroundImage: "url('/paper.jpg')", 
      backgroundSize: "cover",
    }}>
    {splitQuestion?.map((text, index) => (
      <span key={index} className="text-lg border-dashed border-b border-orange-900">{text}</span>
    ))}
    </div> 
  );
}

export default QuestionCard;