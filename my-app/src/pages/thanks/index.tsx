import Header from '../../components/Header';

const Thanks = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <main className='flex flex-col items-center justify-center py-10 text-baseColor'>
        <div className='text-center space-y-4'>
          <p className='text-xl font-semibold'>
            ご回答いただきありがとうございます。
          </p>
          <p className='text-md'>
            素敵な時間を過ごすことはできたでしょうか?
          </p>
          <p className='text-md'>
            相手の新しい一面を見ることはできたでしょうか?
          </p>
          <p className='text-md'>
            もし、関係性を深めるお手伝いができていましたら光栄です。
          </p>
        </div>
      </main>
    </div>
  );
}

export default Thanks;