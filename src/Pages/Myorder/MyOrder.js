import React, { useEffect, useState } from 'react';

const MyOrder = () => {
     const [order, setOrder] = useState([]);
     useEffect(() => {
          fetch('http://localhost:5000/orderService')
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