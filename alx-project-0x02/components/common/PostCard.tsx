import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">ID: {id}</span>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{body}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">User ID: {userId}</span>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Read More
        </button>
      </div>
    </div>
  );
};

export default PostCard; 