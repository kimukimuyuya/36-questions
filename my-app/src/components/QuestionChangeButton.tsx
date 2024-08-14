import React from "react";

const QuestionChangeButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="bg-red-700 hover:bg-red-700 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      質問を変更する
    </button>
  );
}

export default QuestionChangeButton;