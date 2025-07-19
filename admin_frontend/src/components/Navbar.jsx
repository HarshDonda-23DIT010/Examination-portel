import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Bell, Settings, Menu, X } from 'lucide-react';
import { useLogoutMutation } from '../store/api/authApi';
import logo from '../assets/depstar.png';
import { useState } from 'react';


const Navbar = () => {
   const { user } = useSelector((state) => state.auth);
   const navigate = useNavigate();
   const [logoutMutation] = useLogoutMutation();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
   };

   const handleNavigation = (path) => {
      navigate(path);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
   };

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <header className="bg-white shadow-sm border-b border-blue-200 h-auto lg:h-24 sticky top-0 z-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 lg:py-4">
               {/* Logo Section */}
               <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center border rounded-xl lg:rounded-2xl shadow-sm">
                     <img src={logo} alt="DEPSTAR" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain rounded-xl lg:rounded-2xl" />
                  </div>
                  <div className="">
                     <h1
                        className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-blue-800 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => handleNavigation('/welcome')}
                     >
                        DEPSTAR Admin
                     </h1>
                     <p className="text-xs lg:text-sm text-blue-600">Administration Portal</p>
                  </div>
               </div>


               {/* Navigation Links */}
               <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                  <button
                     onClick={() => handleNavigation('/add-faculties')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                     Add Faculties
                  </button>
                  {/* <button
                     onClick={() => handleNavigation('/admin/users')}
                     className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm lg:text-base"
                  >
                     Users
                  </button>
                  <button
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

                  {/* User Profile */}
                  <div className="flex items-center space-x-2 lg:space-x-3 px-2 py-1 lg:px-3 lg:py-2 bg-gray-50 rounded-lg">
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
                  </div>

                  {/* Logout Button */}
                  <button
                     onClick={handleLogout}
                     className="flex items-center space-x-1 lg:space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg transition duration-200 group"
                  >
                     <LogOut className="h-3 w-3 lg:h-4 lg:w-4 group-hover:rotate-12 transition-transform duration-200" />
                     <span className="hidden sm:inline text-xs lg:text-sm">Logout</span>
                  </button>

                  {/* Mobile Menu Button */}
                  <button 
                     onClick={toggleMobileMenu}
                     className="lg:hidden p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                     {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                     ) : (
                        <Menu className="h-5 w-5" />
                     )}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Navigation Menu */}
         <div className={`lg:hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 py-3 space-y-2">
               {/* Mobile Navigation Links */}
               <button
                  onClick={() => handleNavigation('/welcome')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
               >
                  Dashboard
               </button>
               <button
                  onClick={() => handleNavigation('/admin/users')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
               >
                  Users
               </button>
               <button
                  onClick={() => handleNavigation('/admin/courses')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
               >
                  Courses
               </button>
               <button
                  onClick={() => handleNavigation('/admin/reports')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
               >
                  Reports
               </button>
               
               {/* Mobile-only options */}
               <div className="border-t border-gray-200 pt-2 mt-2 sm:hidden">
                  <button
                     onClick={() => handleNavigation('/admin/settings')}
                     className="flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm"
                  >
                     <Settings className="h-4 w-4" />
                     <span>Settings</span>
                  </button>
                  <button className="flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 text-sm">
                     <Bell className="h-4 w-4" />
                     <span>Notifications</span>
                     <span className="h-2 w-2 bg-red-500 rounded-full ml-1"></span>
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
