// import Axios from 'axios';
import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const SuccessDonation = () => {
   let history = useHistory();
   return (
      <>
         <Result
            status="success"
            title="We have received you kind donation. Thank you!"
            subTitle="Have a wonderful day ahead."
            extra={[
               <Button
                  key="back"
                  onClick={() => {
                     history.push('/profile');
                  }}
               >
                  Go back
               </Button>,
            ]}
         />
         ,
      </>
   );
};

export default SuccessDonation;
