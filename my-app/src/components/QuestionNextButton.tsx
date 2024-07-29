import React from "react";
import Link from "next/link";

const QuestionChangeButton = ({ nextPatternId }: { nextPatternId: number }) => {
  return (
    <Link href={`/questions/${nextPatternId}`} className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 ease-in-out">
        次へ
    </Link>
  );
}

export default QuestionChangeButton;