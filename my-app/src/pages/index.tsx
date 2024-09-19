import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import router from 'next/router';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-baseColor">
      <Head>
        <title>36の質問 - ランディングページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center bg-bgColor w-full">
        <div className='w-full overflow-hidden'>
          <div className='w-full bg-baseColor h-screen flex items-center'>
            <div className='bg-[url("/couple.png")] bg-contain bg-no-repeat bg-center w-full h-96 flex flex-col items-center justify-center'>
              <p className='text-white'>関係性を深める、話題提供アプリ</p>
              <h1 className="text-4xl font-bold mt-2 text-white">36の質問</h1>
            </div>
          </div>
          <div className="w-full bg-baseColor rounded-b-[1000px_200px] h-12 mt-[-1px]"></div>
        </div>
        <div className='text-baseColor'>
          <div className='mt-16'>
            <p className="text-sm">
              あなたは、気になるあの子の
            </p>
            <p className="mt-3 text-sm">
              昔からの友人の
            </p>
            <p className="mt-3 text-sm">
              長年連れ添ったパートナーの
            </p>
            <p className="mt-3 text-sm">
              大切にしている価値観を本当に知っていますか？
            </p>
            <p className="mt-12 text-sm">
              36の質問は
            </p>
            <p className="mt-3 text-sm">
              質問のレベルが3段階に分かれています。
            </p>
            <p className="mt-3 text-sm">
              ライトなところから、徐々に深いところへ
            </p>
            <p className="mt-3 text-sm">
              是非、最後までお楽しみください。
            </p>
            <p className="mt-12 text-lg text-baseColor font-extrabold">
              深い対話ができる関係性の
            </p>
            <p className="mt-3 text-lg text-baseColor font-extrabold">
              きっかけ作りを
            </p>
            </div>
            <div className="flex items-center justify-center mt-8 mb-12">
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
          <Button className='p-5 text-md bg-baseColor hover:bg-baseColor' onClick={() => router.push('/questions/1')}>
              始める
          </Button>
          <div className='mt-16'>
            <p className='text-sm'>
              意識してほしいことが1つあります。
            </p>
            <p className='text-sm mt-3'>
              相手の回答を「へぇ~」と聞くだけでなく
            </p>
            <p className='text-sm mt-3'>
              その背景や理由を深ぼってみてください。
            </p>
            <p className='text-sm mt-3'>
              きっと、まだ見ぬ相手の一面が見えてくるはずです。
            </p>
            <div
              className='my-12 text-lg text-baseColor font-extrabold bg-center bg-no-repeat relative bg-[url("/book.png")] h-48 flex
              flex-col items-center justify-end bg-contain'
            >
              <p className='text-baseColor'>
                それでは、互いの心の中を覗く
              </p>
              <p className="mt-3 text-baseColor mb-6">
                素敵な時間を
              </p>
            </div>
          </div>
          <Button className='p-5 text-md mb-8 bg-baseColor hover:bg-baseColor' onClick={() => router.push('/questions/1')}>
            始める
          </Button>
        </div>
        <footer className="flex items-center justify-center w-full h-20 border-t">
          <p className="text-gray-500 text-sm">© 2024&nbsp;
          <a 
            href="https://twitter.com/kimu26sotsu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-blue-400">
            kimu
          </a>
          </p>
        </footer>
      </main>

    </div>
  );
};

export default Home;
