import initializeFirebase from '../pages/Login/Firebase/firebase.init';
import { useEffect, useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

//firebase initialization
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  //register user
  const registerUser = (email, password, navigate, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const newUser = { email, displayName: name };
        setUser(newUser);
        //Send Name to Firebase
        setUserName(name);
        // Save user to database
        saveUser(email, name);

        setError('');
        // navigate('/login');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // send name to firebase after creation
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  //LoginIn User

  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //observe User State change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //logout User
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //save user to database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(() => {});
  };

  //make sure admin role user email

  // useEffect(() => {
  //   fetch(`https://localhost:5000/api/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data.admin));
  // }, [user.email]);

  return {
    user,
    registerUser,
    loginUser,
    logOut,
    loading,
    authError,
    admin,
    error,
  };
};

export default useFirebase;
