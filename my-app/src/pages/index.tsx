import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-bgColor">
      <Head>
        <title>36の質問 - ランディングページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center my-32">
        <div className="flex items-center justify-center">
          <Image
            src="/bride.png"
            alt="新婦"
            width={200}
            height={200}
          />
          <Image
            src="/bridegroom.png"
            alt="新郎"
            width={200}
            height={200}
          />
        </div>
        <Image 
          src="/book.png"
          alt="本"
          width={100}
          height={100}
        />
        <h1 className="text-5xl font-bold mt-4">36の質問</h1>
        <p className="mt-3 text-lg">
          大切な人と試してみよう
        </p>

        <div className="mt-6">
          <Link
            href="/questions/1"
            className="px-8 py-3 text-lg font-medium text-white bg-baseColor rounded-md hover:bg-baseColor"
          >
            始める
          </Link>
        </div>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">© 2024 36の質問. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Home;
