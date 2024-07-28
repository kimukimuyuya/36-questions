import React from "react";

const QuestionCard = ({ question }: { question: string }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <p className="text-lg">{question}</p>
    </div> 
  );
}

export default QuestionCard;