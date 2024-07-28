import React from "react";

const QuestionChangeButton = ({ onclick }: { onclick: () => void }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onclick}
    >
      質問を変更する
    </button>
  );
}

export default QuestionChangeButton;