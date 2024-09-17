import React from "react";
import Link from "next/link";

const QuestionChangeButton = ({ beforeQuestionLevel }: { beforeQuestionLevel: number }) => {

  return (
    <Link href={`/questions/${beforeQuestionLevel}`} className="  bg-baseColor text-white py-2 px-4 rounded hover:bg-baseColor transition duration-300 ease-in-out">
        前へ
    </Link>
  );
}

export default QuestionChangeButton;