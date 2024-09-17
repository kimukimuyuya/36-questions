import Header from '../../components/Header';

const Thanks = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <main className='flex flex-col items-center justify-center py-2'>
        <p>ご回答いただきありがとうございます。</p>
        <p>素敵な時間を過ごすことはできましたでしょうか?</p>
        <p>相手の新しい一面を見ることはできましたでしょうか?</p>
        <p>もし、関係性を深めるお手伝いができていましたら光栄です。</p>
      </main>
    </div>
  );
}

export default Thanks;