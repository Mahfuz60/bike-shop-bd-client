import { useContext } from 'react';
import { AuthContext } from '../contextApi/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
