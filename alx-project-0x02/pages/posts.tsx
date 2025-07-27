import { useState, useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  initialPosts: PostProps[];
}

export default function Posts({ initialPosts }: PostsPageProps) {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.slice(0, 9)); // Limit to 9 posts for better display
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Posts - Next.js Project</title>
          <meta name="description" content="Posts page of Next.js Project" />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-lg text-gray-600">Loading posts...</div>
            </div>
          </main>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Posts - Next.js Project</title>
          <meta name="description" content="Posts page of Next.js Project" />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Posts</h1>
              <div className="text-red-600">{error}</div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Posts - Next.js Project</title>
        <meta name="description" content="Posts page of Next.js Project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Posts</h1>
            <p className="text-lg text-gray-600">
              Displaying posts fetched from JSONPlaceholder API
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    return {
      props: {
        initialPosts: posts.slice(0, 9),
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch {
    return {
      props: {
        initialPosts: [],
      },
    };
  }
}; 