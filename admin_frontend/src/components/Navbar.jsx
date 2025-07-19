import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Bell, Settings, Menu, X, ChevronDown, UserCircle } from 'lucide-react';
import { useLogoutMutation } from '../store/api/authApi';
import logo from '../assets/depstar.png';
import { useState, useRef, useEffect } from 'react';


const Navbar = () => {
   const { user } = useSelector((state) => state.auth);
   const navigate = useNavigate();
   const [logoutMutation] = useLogoutMutation();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   // Close dropdown when clicking outside
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const handleLogout = async () => {
      try {
         await logoutMutation().unwrap();
         // No need to dispatch here - it's handled in authApi.js
         navigate('/login');
      } catch (error) {
         console.error('Logout error:', error);
         // Navigate to login even if logout fails
         navigate('/login');
      }
      setIsDropdownOpen(false);
   };

   const handleProfileClick = () => {
      navigate('/profile');
      setIsDropdownOpen(false);
   };

   const handleNavigation = (path) => {
      navigate(path);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
   };

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <header className="bg-white shadow-sm border-b border-blue-200 h-20 lg:h-20 sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 lg:py-3">
               {/* Logo Section */}
               <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-15 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center border rounded-lg lg:rounded-xl shadow-sm">
                     <img src={logo} alt="DEPSTAR" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain rounded-lg lg:rounded-xl" />
                  </div>
                  <div className="">
                     <h1
                        className="text-sm sm:text-base lg:text-lg font-semibold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => handleNavigation('/')}
                     >
                        DEPSTAR Admin
                     </h1>
                     <p className="text-xs lg:text-sm text-blue-600">Administration Portal</p>
                  </div>
               </div>


               {/* Navigation Links */}
               <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                  <button
                     onClick={() => handleNavigation('/add-faculties')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base px-2 py-1"
                  >
                     Add Faculties
                  </button>
                  <button
                     onClick={() => handleNavigation('/academic-year')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                     Add Academic Year
                  </button>
                  {/* <button
                     onClick={() => handleNavigation('/admin/courses')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                     Courses
                  </button>
                  <button
                     onClick={() => handleNavigation('/admin/reports')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                     Reports
                  </button> */}
               </nav>

               {/* Right Side - User Info and Actions */}
               <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  

                  {/* Settings - Hidden on small screens */}
                  <button
                     onClick={() => handleNavigation('/admin/settings')}
                     className="hidden sm:block p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                     <Settings className="h-4 w-4 lg:h-5 lg:w-5" />
                  </button>

                  {/* User Profile Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                     <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-2 lg:space-x-3 px-2 py-1 lg:px-3 lg:py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                     >
                        <div className="flex items-center space-x-1 lg:space-x-2">
                           <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                           </div>
                           <div className="hidden md:block">
                              <p className="text-xs lg:text-sm font-medium text-gray-700">
                                 {user?.name || user?.userId || 'Admin User'}
                              </p>
                              <p className="text-xs text-gray-500">Administrator</p>
                           </div>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {/* Dropdown Menu */}
                     {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                           <button
                              onClick={handleProfileClick}
                              className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                           >
                              <UserCircle className="h-4 w-4" />
                              <span>Profile</span>
                           </button>
                           <hr className="my-1 border-gray-200" />
                           <button
                              onClick={handleLogout}
                              className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                           >
                              <LogOut className="h-4 w-4" />
                              <span>Logout</span>
                           </button>
                        </div>
                     )}
                  </div>

               </div>
            </div>
         </div>

         
      </header>
   );
};

export default Navbar;
