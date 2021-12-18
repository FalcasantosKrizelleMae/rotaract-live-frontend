import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
   const auth = localStorage.getItem('auth') ?? false;
   console.log(auth);
   return (
      <Route
         {...rest}
         render={(props) => {
            if (auth) return <Component {...props} />;
            if (!auth)
               return (
                  <Redirect
                     to={{
                        pathname: '/login',
                        state: { from: props.location },
                     }}
                  />
               );
         }}
      />
   );
};

export default ProtectedRoute;
