import { useSelector } from 'react-redux';
import { User } from 'lucide-react';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome, {user?.name || user?.userId || 'Admin'}!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              You have successfully logged into the DEPSTAR Administration Portal
            </p>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
