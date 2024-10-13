"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";

const ProfileContent = () => {
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name') || 'User';
  const phone = searchParams.get('phone') || '';
  const email = searchParams.get('email') || '';

  const data = {name, phone, email};

  return (
    <>
      <Navbar data={data}/>
      <Overview data={data}/>
    </>
  );
};

const Profile = () => {
  return (
    <div className="bg-gray-900 h-dvh">
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileContent />
      </Suspense>
    </div>
  );
};

export default Profile;