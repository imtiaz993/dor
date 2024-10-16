"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const ProfileContent = () => {
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name') || 'User';
  const phone = searchParams.get('phone') || '';
  const email = searchParams.get('email') || '';

  const data = {name, phone, email};

  return (
    <div className=''>
      <Navbar data={data}/>
      <ProfilePage data={data}/>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileContent />
      </Suspense>
    </div>
  );
};

export default Profile;