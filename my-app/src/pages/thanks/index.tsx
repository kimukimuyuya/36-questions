import Header from '../../components/Header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import router from 'next/router';

const Thanks = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <main className='flex flex-col items-center py-12 justify-center'>
        <div className='text-center space-y-8 mx-8 mb-12'>
          <p className='text-md font-semibold text-baseColor'>
            ご回答いただきありがとうございます。
          </p>
          <p className='text-sm'>
            <span className='text-baseColor'>素敵な時間</span>を過ごせましたか?
          </p>
          <p className='text-sm'>
            相手の<span className='text-baseColor'>心の中</span>を覗けましたか?
          </p>
          <p className='text-sm space-y-6'>
            もし、関係性を深めるお手伝いができていましたら光栄です。
          </p>
        </div>
        <Image
          src='/newlywed.png'
          alt='新郎'
          width={200}
          height={200}
        />
        <Button className='mt-8 bg-baseColor hover:bg-baseColor' onClick={() => router.push('/')}>
          ホームに戻る
        </Button>
      </main>
    </div>
  );
}

export default Thanks;