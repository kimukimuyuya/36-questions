import React from "react";
import Link from "next/link";

const QuestionChangeButton = ({ beforeQuestionLevel }: { beforeQuestionLevel: number }) => {
  return (
    <Link href={`/questions/${beforeQuestionLevel}`} className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out">
        前へ
    </Link>
  );
}

export default QuestionChangeButton;