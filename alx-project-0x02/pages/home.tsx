import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import Button from '../components/common/Button';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Welcome to Our Platform",
      content: "This is a comprehensive Next.js project that demonstrates fundamental concepts including routing, components, and API integration."
    },
    {
      id: 2,
      title: "Getting Started",
      content: "Learn how to build modern web applications with Next.js, TypeScript, and Tailwind CSS."
    }
  ]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js Project</title>
        <meta name="description" content="Home page of Next.js Project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Home</h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to our Next.js project! Here you can explore various features and components.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="large"
              shape="rounded-md"
            >
              Add New Post
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        </main>
        
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </>
  );
} 