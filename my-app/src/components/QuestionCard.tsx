import React from "react";
import Image from "next/image";

const QuestionCard = ({ question }: { question: string }) => {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-2 border-yellow-200" 
    style={{ fontFamily: "'Dancing Script', cursive", backgroundImage: "url('/paper.jpg')", backgroundSize: "cover" }}>
      <p className="text-lg text-brown-700">{question}</p>
    </div> 
  );
}

export default QuestionCard;