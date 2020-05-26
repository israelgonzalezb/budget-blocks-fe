import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';
import OnBoarding from './OnBoarding';

const Dashboard = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    const { accessToken } = authState;

    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        const oktaUserInfo = info;

        axios
          .post('http://localhost:5000/api/users', oktaUserInfo, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            setUserInfo(res.data.data);
            setUserInfo(res.data.created);
            console.log(res);
          })
          .catch((err) => err.message);
      });
    }
  }, [authState, authService]);

  console.log(userInfo);

  return (
    <div>
      {/* //NOTE RENDER ONBOARDING IF ACCESS TOKEN DOESN'T EXISTS */}
      {/* {userInfo && userInfo.token === undefined || null ? <OnBoarding /> : null} */}
      <h1> DASHBOARD </h1>
      <p>
        If you landed here, then you have successfully logged in with
        Okta!!
      </p>
      <p
        style={{
          color: 'blue',
          fontSize: '32px',
        }}
      >
        Message:
        {`Hi, ${userInfo && userInfo.name}. Welcome to the dashboard.`}
      </p>
      <p> USER INFO STATE: {userInfo && userInfo.email} </p>
      <button onClick={logout}> Logout </button>
    </div>
  );
};

export default Dashboard;