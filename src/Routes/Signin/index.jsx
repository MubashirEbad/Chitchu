import React from 'react';
import Loadable from 'react-loadable';
import LogoLoader from 'components/Loader';

// const SignIn = () => {
//   return <p> aaaa </p>
// }

const SignIn = Loadable({
  loader: () => import('./components'),
  loading: () => <LogoLoader />
});

export default SignIn;