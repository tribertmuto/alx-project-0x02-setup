import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Users - Next.js Project</title>
          <meta name="description" content="Users page of Next.js Project" />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-lg text-gray-600">Loading users...</div>
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
          <title>Users - Next.js Project</title>
          <meta name="description" content="Users page of Next.js Project" />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Users</h1>
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
        <title>Users - Next.js Project</title>
        <meta name="description" content="Users page of Next.js Project" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Users</h1>
            <p className="text-lg text-gray-600">
              Displaying users fetched from JSONPlaceholder API
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
} 