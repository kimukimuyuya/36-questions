import Image from 'next/image';
import { SeoHead } from '@/components/SeoHead';
import dynamic from 'next/dynamic';
const CourseSelectionDialog = dynamic(() => import('@/components/CourseSelectionDialog'), { ssr: false });

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-baseColor">
      <SeoHead
        title={"36の質問"}
        titleTemplate={"関係性を深める話題提供アプリ"}
        description={"36の質問は、関係性を深めるためのアプリです。3段階に分かれた質問で、相手の価値観を徐々に知っていきます。"}
        keyWords={"36の質問, 関係性, コミュニケーション, パートナー, 友人, 恋人, カップル, 対話, 話題, 提供"}
        ogType={"website"}
	      // TODO:public/ に1200x630pxの画像を用意
        imgUrl={'/36Q.png'} 
      />

      <main className="flex flex-col items-center justify-center text-center bg-bgColor w-full">
        <div className='w-full overflow-hidden'>
          <div className='w-full bg-baseColor h-screen flex items-center'>
            <div className='bg-[url("/couple.png")] bg-contain bg-no-repeat bg-center w-full h-96 flex flex-col items-center justify-center'>
              <h2 className='text-white'>関係性を深める、話題提供アプリ</h2>
              <h1 className="text-4xl font-bold mt-2 text-white">36の質問</h1>
            </div>
          </div>
          <div className="w-full bg-baseColor rounded-b-[1000px_200px] h-12 mt-[-1px]"></div>
        </div>
        <div className='text-baseColor mb-16'>
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
                alt="白いドレスを着た新婦のイラスト"
                width={150}
                height={150}
                priority={true}
                quality={75}
              />
              <Image
                src="/bridegroom.png"
                alt="グリーンのタキシードを着た新郎のイラスト"
                width={150}
                height={150}
                priority={true}
                quality={75}
              />
          </div>
          <CourseSelectionDialog />
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
          <CourseSelectionDialog />
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
