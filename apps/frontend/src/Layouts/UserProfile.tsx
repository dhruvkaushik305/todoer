import React from 'react';
import { useParams } from 'react-router-dom';
const UserProfile: React.FC = () => {
  const { id } = useParams();
  return <div>UserProfile for {id}</div>;
};

export default UserProfile;