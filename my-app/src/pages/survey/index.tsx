import { FormEvent, useState} from 'react';
import Header from '../../components/Header';
import router from 'next/router';

const Survey = () => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();  // デフォルトのフォーム送信を防ぐ
    const response = await fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      console.log('Survey result created');
      router.push('/thanks');  // 成功した場合に遷移
    }
  };

  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <h1>Survey</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;