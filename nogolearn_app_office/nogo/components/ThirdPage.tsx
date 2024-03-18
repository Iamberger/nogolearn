import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ThirdPage: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8001/api/customer/user/mini-profile',
          { withCredentials: true }
        );
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>با موفقیت وارد شدید</h1>
      {profile && (
        <div>
          <h2>Mini Profile</h2>
          <p>Username: {profile.username}</p>
          <p>Password: {profile.password}</p>
          <p>Phone Number: {profile.phone_number}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </div>
  );
};

export default ThirdPage;
