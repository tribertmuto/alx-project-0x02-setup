import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <span className="text-sm text-gray-500">ID: {id}</span>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <div className="text-gray-600">
          <span className="font-medium">Address:</span>
          <p className="ml-4 mt-1">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard; 