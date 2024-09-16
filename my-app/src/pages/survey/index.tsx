import router from 'next/router';
import { useState} from 'react';

const Survey = () => {
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    const response = await fetch('/api/survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    if (response.ok) {
      console.log('Survey result created');
      // router.push('/');
    }
  };
  return (
    <div>
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