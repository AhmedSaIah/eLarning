import React, {useState,useEffect} from 'react';
import AuthStack from './Navigators/AuthStack';
import AppStack from './Navigators/AppStack';
import {isSignedIn, auth} from './Firebase/auth'
import { onAuthStateChanged } from 'firebase/auth';

export default function App({user}) {
  
  const [authenticated, setAuthenticated] = useState(user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
          // console.log("authorized user: ", user);
          // console.log(authentication.currentUser);
          setAuthenticated(user);
      }
      console.log('isSignedIn=', isSignedIn())
      setAuthenticated(user);
  });
  }, []);
  
  if (!authenticated) {
    return <AuthStack/>;
  } else{
    return <AppStack/>;
  }
};