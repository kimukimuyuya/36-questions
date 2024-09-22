import Header from '../../components/Header';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import router from 'next/router';
import 'animate.css'

const Thanks = () => {
  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <main className='flex flex-col items-center pt-12 justify-center animate__animated animate__fadeIn'>
        <div className='text-center space-y-8 mx-8 mb-12 text-baseColor'>
          <p className='text-md font-semibold'>
            ご回答いただきありがとうございます。
          </p>
          <p className='text-sm'>
            素敵な時間を過ごせましたか?
          </p>
          <p className='text-sm'>
            相手の心の中を覗けましたか?
          </p>
          <p className='text-sm'>
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