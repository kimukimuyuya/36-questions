import React from "react";

const QuestionCard = ({ question }: { question: string }) => {
  return (
    <div className="p-6 shadow-md" 
    style={{ 
      backgroundImage: "url('/paper.jpg')", 
      backgroundSize: "cover",
    }}>
      <p className="text-lg border-dashed border-b border-orange-900">
        Q. {question}
      </p>
    </div> 
  );
}

export default QuestionCard;