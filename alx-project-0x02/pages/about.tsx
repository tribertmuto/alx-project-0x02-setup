import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next.js Project</title>
        <meta name="description" content="About page of Next.js Project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
            <p className="text-lg text-gray-600 mb-8">
              This project demonstrates various Next.js concepts and component patterns.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Component Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Different Sizes</h3>
                <div className="flex space-x-4">
                  <Button size="small" shape="rounded-md">Small Button</Button>
                  <Button size="medium" shape="rounded-md">Medium Button</Button>
                  <Button size="large" shape="rounded-md">Large Button</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Different Shapes</h3>
                <div className="flex space-x-4">
                  <Button size="medium" shape="rounded-sm">Rounded Small</Button>
                  <Button size="medium" shape="rounded-md">Rounded Medium</Button>
                  <Button size="medium" shape="rounded-full">Rounded Full</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Combinations</h3>
                <div className="flex space-x-4">
                  <Button size="small" shape="rounded-full">Small Full</Button>
                  <Button size="large" shape="rounded-sm">Large Small</Button>
                  <Button size="medium" shape="rounded-md">Medium Medium</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 