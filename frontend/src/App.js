import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import AuthContext from './context/authContext';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const router = useRoutes(routes)

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState({})

  const login = useCallback((userInfos, token) => {
    console.log(userInfos);
    console.log(token);
    setToken(token)
    setIsLoggedIn(true)
    setUserInfos(userInfos)
    localStorage.setItem('user', JSON.stringify({ token }))
  },[])

  const logout = useCallback((token) => {
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  })


  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))

    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          'Authorization': `Bearer ${localStorageData.token}`
        }
      }).then(res => res.json())
        .then(userData => {
          setIsLoggedIn(true)
          setUserInfos(userData)
        })
    }

  }, [login])

  return (
    <>

      <AuthContext.Provider value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout
      }}>

        {router}

      </AuthContext.Provider>
    </>
  );
}

export default App;
