import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Project Setup</title>
        <meta name="description" content="Next.js Project Setup and Basics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex items-center justify-center flex-1 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Next.js Project Setup
            </h1>
            <p className="text-lg text-gray-600">
              This is a comprehensive Next.js project demonstrating fundamental concepts.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
