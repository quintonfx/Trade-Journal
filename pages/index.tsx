import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trade Journal</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Trade Journal</h1>
        <p className="mt-2">Track your trades and view performance analytics.</p>
      </main>
    </div>
  );
}
