import React, { useEffect, useState } from 'react';

const MyOrder = () => {
     const [order, setOrder] = useState([]);
     useEffect(() => {
          fetch('https://calm-tor-36170.herokuapp.com/services')
               .then(res => res.json())
               .then(data => {
                    setOrder(data);
               })
     }, [])
     return (
          <div>
               <h1>order{order}</h1>
          </div>
     );
};

export default MyOrder;