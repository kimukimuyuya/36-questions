import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>36の質問 - ランディングページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-5xl font-bold mt-4">36の質問</h1>
        <p className="mt-3 text-lg">
          大切な人と試してみよう
        </p>

        <div className="mt-6">
          <a
            href="/questions/1"
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            始める
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-500">© 2024 36の質問. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
