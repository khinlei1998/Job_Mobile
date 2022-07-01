
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './src/component/Context/context';
import AuthNavigator from './src/component/Navigation/AuthNavigator';
import Navigation from './src/component/Navigation/Navigation';
import { storage } from './src/component/Storage/Appstorage';
import Splashscreen from './src/component/SplashScreen';

const App = () => {
  const [lang, setlang] = useState('en')
  const [auth, setAuth] = useState(false)
  const [showsplash, setShowsplash] = useState(false)
  const [userdata, setData] = useState()
  useEffect(() => {
    getAuthdata()


  }, [])

  const getAuthdata = () => {
    try {
      const data = storage.getString('data');
      const lang = storage.getString('lang');
      setlang(lang)
      if (data) {
        setData(data)
        setAuth(true);
        setShowsplash(true)
        setTimeout(() => {
          setShowsplash(false);
        }, 5000);

      } else {
        setAuth(false);
        setShowsplash(true)
        setTimeout(() => {
          setShowsplash(false);
        }, 5000);

      }
    } catch (error) {
      console.log('error', error);
    }
  }

  const getlang = (value) => {
    setlang(value)
  }

  const getAuth = (value) => {
    setAuth(value)
  }

  const showData = (name, email) => {
    const data = {
      'name': name,
      'email': email
    }
    setData(JSON.stringify(data))

  }


  if (showsplash) {
    return (
      <Splashscreen />
    )
  }

  if (auth) {
    return (
      <AuthContext.Provider value={{ getAuth, getlang, lang, showData, userdata, setData }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthContext.Provider>
    )
  } else {
    return (
      <AuthContext.Provider value={{ getAuth, getlang, lang, showData }}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </AuthContext.Provider>
    )
  }
};


export default App;
