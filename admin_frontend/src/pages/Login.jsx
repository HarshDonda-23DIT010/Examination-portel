import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, LogIn } from 'lucide-react';
import { useLoginMutation } from '../store/api/authApi';
import logo from '../assets/depstar.png';
import { useDispatch } from 'react-redux';
import { useGetYearsQuery } from '@/store/api/yearApi';
import { setYearAndSemester } from '@/store/slices/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };
  
  const dispatch = useDispatch();

  const { data, refetch } = useGetYearsQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData).unwrap();
      
      // Refetch years and wait for the response
      const yearsResponse = await refetch();
      const years = yearsResponse?.data?.data || [];

      const yearObject = years[years.length - 1];
      
      let semester = 5; // default
      if (yearObject?.year) {
        const yearStr = yearObject.year.toLowerCase();
        if (yearStr.includes('/odd')) {
          semester = 5; // Odd semester
        } else if (yearStr.includes('/even')) {
          semester = 4; // Even semester
        }
      }
      
      // Only dispatch if we have a valid year object
      if (yearObject) {
        dispatch(setYearAndSemester({
          yearObject: yearObject,
          semester: semester
        }));
      }
      
      navigate('/');
    } catch (err) {
      setError(err?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="flex w-full max-w-7xl mx-24 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Logo and Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-center items-center text-white">
          <div className="text-center">
            {/* DEPSTAR Logo Area */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-6">
                <img src={logo} alt="DEPSTAR" className='border rounded-2xl' />
              </div>
              <h1 className="text-4xl font-bold mb-2">Welcome to DEPSTAR</h1>
              <p className="text-blue-200 text-lg">Systematic Evaluation Portal of DEPSTAR</p>
              <p className="text-blue-200 text-sm mt-2">Charotar University of Science and Technology (CHARUSAT)</p>
            </div>


          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <div className="text-white text-lg font-bold">DEPSTAR</div>
              </div>
              <h1 className="text-2xl font-bold text-blue-800 mb-1">DEPSTAR</h1>
              <p className="text-blue-600 text-sm">Gateway to e-Governance</p>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h2>
              <p className="text-gray-600">Please sign in to your account</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User ID Field */}
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                  User ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="userId"
                    name="userId"
                    type="text"
                    required
                    value={formData.userId}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    placeholder="Enter your User ID"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                  Forgot your password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© 2025 DEPSTAR. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;