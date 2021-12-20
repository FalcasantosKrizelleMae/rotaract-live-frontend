import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Protected(props) {
   let Cmp = props.Cmp;
   const role = localStorage.getItem('role') ?? '';
   const status = localStorage.getItem('role') ?? false;
   const history = useHistory();
   useEffect(() => {
      if (status && role === 'Member') {
         history.push('/member');
      } else if (status && role === 'Secretary') {
         history.push('/secretary');
      } else if (status && role === 'Finance') {
         history.push('/finance');
      } else if (status && role === 'President') {
         history.push('/president');
      } else {
         history.push('/login');
      }
   });
   return (
      <div>
         <Cmp />
      </div>
   );
}

export default Protected;
