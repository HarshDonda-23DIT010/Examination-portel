import React, { useState } from 'react';
import { User, Mail, Building, Users, Lock, Eye, EyeOff, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useUpdatePasswordMutation } from '../../store/api/authApi';
import { toast } from 'sonner';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordErrors, setPasswordErrors] = useState({});

  const [updatePassword, { isLoading: isUpdatingPassword }] = useUpdatePasswordMutation();

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (passwordErrors[name]) {
      setPasswordErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validatePasswordForm = () => {
    const errors = {};

    if (!passwordData.oldPassword.trim()) errors.oldPassword = 'Current password is required';
    if (!passwordData.newPassword.trim()) errors.newPassword = 'New password is required';
    if (passwordData.newPassword.length < 6) errors.newPassword = 'New password must be at least 6 characters';
    if (!passwordData.confirmPassword.trim()) errors.confirmPassword = 'Confirm password is required';
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (passwordData.oldPassword === passwordData.newPassword) {
      errors.newPassword = 'New password must be different from current password';
    }

    setPasswordErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswordForm()) return;

    try {
      await updatePassword({
        userId: user.userId,
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword
      }).unwrap();
      
      toast.success('Password changed successfully!');
      setPasswordData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setIsChangePasswordOpen(false);
    } catch (error) {
      console.error('Failed to change password:', error);
      toast.error(error.data?.message || 'Failed to change password. Please try again.');
    }
  };

  const closePasswordDialog = () => {
    setIsChangePasswordOpen(false);
    setPasswordData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    setPasswordErrors({});
    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account information and security settings</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Profile Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{user?.name || 'N/A'}</h2>
              <p className="text-gray-500 text-lg mb-1">{user?.role || 'Administrator'}</p>
              <p className="text-gray-400 text-sm">{user?.department || 'N/A'}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setIsChangePasswordOpen(true)}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2 font-medium"
                >
                  <Lock className="h-4 w-4" />
                  <span>Change Password</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">User ID</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{user?.userId || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Full Name</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{user?.name || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email Address</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1 break-all">{user?.email || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Work Information</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Department</p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{user?.department || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Role</p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{user?.role || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Change Password Dialog */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closePasswordDialog}
          ></div>
          
          {/* Dialog Content */}
          <div className="relative bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto z-10 border border-gray-200">
            {/* Header */}
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 rounded-t-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                <button
                  onClick={closePasswordDialog}
                  className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Form Content */}
            <form onSubmit={handlePasswordSubmit} className="p-8 space-y-6">
              {/* Current Password */}
              <div>
                <label htmlFor="oldPassword" className="block text-sm font-semibold text-gray-700 mb-3">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="oldPassword"
                    name="oldPassword"
                    type={showOldPassword ? 'text' : 'password'}
                    value={passwordData.oldPassword}
                    onChange={handlePasswordInputChange}
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all ${passwordErrors.oldPassword ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showOldPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {passwordErrors.oldPassword && <p className="text-red-500 text-sm mt-2 font-medium">{passwordErrors.oldPassword}</p>}
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 mb-3">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={handlePasswordInputChange}
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all ${passwordErrors.newPassword ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {passwordErrors.newPassword && <p className="text-red-500 text-sm mt-2 font-medium">{passwordErrors.newPassword}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-3">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordInputChange}
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all ${passwordErrors.confirmPassword ? 'border-red-300' : 'border-gray-200'}`}
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {passwordErrors.confirmPassword && <p className="text-red-500 text-sm mt-2 font-medium">{passwordErrors.confirmPassword}</p>}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closePasswordDialog}
                  className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdatingPassword}
                  className="px-6 py-3 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-lg transition duration-200 flex items-center space-x-2 font-medium"
                >
                  {isUpdatingPassword ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                  <span>{isUpdatingPassword ? 'Changing...' : 'Change Password'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
