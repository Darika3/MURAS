// import React from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContextProvider';

// const Activation = () => {
//     const [searchParams] = useSearchParams();
//     const {handleActivation} = useAuth();
//     const navigate = useNavigate()
     
// handleActivation(searchParams.get('uid','token'))
//   return (
//     <>
//     <h1>Success</h1>
//     <button onClick={()=> navigate("/login")}>LOGIN</button>
//     </>
//   )
// }


// export default Activation
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider';

const Activation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleActivation } = useAuth();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const uid = searchParams.get('uid');
    const token = searchParams.get('token');

    if (uid && token) {
      handleActivation(uid, token)
        .then(() => {
          navigate('/login');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [location.search, handleActivation, navigate]);

  return <h1>Success</h1>;
};

export default Activation;