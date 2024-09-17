import React from "react";
import Link from "next/link";

const QuestionChangeButton = ({ nextQuestionLevel }: { nextQuestionLevel: number }) => {
  return (
    <Link href={`/questions/${nextQuestionLevel}`} className="bg-baseColor text-white py-2 px-4 rounded hover:bg-baseColor transition duration-300 ease-in-out">
        次へ
    </Link>
  );
}

export default QuestionChangeButton;