import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png");

  const handleEmailChange = () => {
    const updatedUser = { ...user, email: newEmail };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditingEmail(false);
  };

  const handlePasswordChange = () => {
    console.log('New password:', newPassword);
    setIsEditingPassword(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        const updatedUser = { ...user, profilePicture: reader.result };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">No user logged in</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto p-8 bg-gradient-to-r flex justify-center items-center from-purple-500 to-blue-500 h-screen rounded-lg">
      <div className="w-1/2 rounded-3xl flex items-center bg-gradient-to-r from-slate-200 via-white/15 to-blue-300 h-96 border-2 p-8 space-x-6">
        {/* Profile Picture Section */}
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <label className="absolute -bottom-16 -right-8 bg-blue-600 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition-all duration-300">
            Change Picture
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </label>
        </div>

        {/* User Info Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800"><span className='text-md'>username : </span>{user.name}</h1>
          <p className="text-lg text-white">email : {user.email}</p>
          <p className="mt-2 text-sm text-gray-800">Member since: {user.memberSince || '2024'}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
