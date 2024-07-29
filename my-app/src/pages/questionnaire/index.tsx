import React, { useState } from "react";
import Header from '../../components/Header';

const Questionnaire = () => {
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォームの送信処理をここに追加
    console.log("Submitted response:", response);
    alert("ありがとうございます！ご回答が送信されました。");
    setResponse(""); // フォームをリセット
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">アンケートフォーム</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="response" className="text-lg">
            あなたが素敵だと思う話題を教えてください
          </label>
          <textarea
            id="response"
            value={response}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            送信
          </button>
        </form>
      </main>
    </div>
  );
};

export default Questionnaire;
