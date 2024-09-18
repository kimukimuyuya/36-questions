import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import router from 'next/router';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-bgColor">
      <Head>
        <title>36の質問 - ランディングページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 mx-8 text-center mt-20">
        <div className='mb-12 bg-[url("/couple.png")] bg-cover bg-center w-full h-96 flex flex-col items-center justify-center'>
          <p>関係性を深める、話題提供アプリ</p>
          <h1 className="text-4xl font-bold mt-2 text-baseColor">36の質問</h1>
        </div>
        <div className=''>
          <p className="text-sm">
            あなたは気になるあの子と、
          </p>
          <p className="mt-3 text-sm">
            昔からの友人と、
          </p>
          <p className="mt-3 text-sm">
            長年連れ添ったパートナーと、
          </p>
          <p className="mt-3 text-sm">
            ○○できていますか?
          </p>
          <p className="mt-3 text-sm">
            深い対話ができる関係性の、
          </p>
          <p className="mt-3 text-sm">
            きっかけ作りができれば幸いです。
          </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <Image
              src="/bride.png"
              alt="新婦"
              width={150}
              height={150}
            />
            <Image
              src="/bridegroom.png"
              alt="新郎"
              width={150}
              height={150}
            />
        </div>
        <Button className='p-5 text-md my-8 bg-baseColor hover:bg-baseColor' onClick={() => router.push('/questions/1')}>
            始める
        </Button>
        <div className='mt-12'>
          <p className='text-sm'>
            それでは、互いの心の中を覗く
          </p>
          <p className='text-sm mt-3'>
            素敵な時間を。
          </p>
          <div className='mt-6 flex justify-center'>
            <Image 
              src="/book.png"
              alt="本"
              width={100}
              height={100}
            />
          </div>
        </div>
        <Button className='p-5 text-md my-8 bg-baseColor hover:bg-baseColor' onClick={() => router.push('/questions/1')}>
          始める
        </Button>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">© 2024 36の質問. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
