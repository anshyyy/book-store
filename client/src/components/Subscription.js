import React from 'react';
import {subscription} from '../constant'
import SubscriptionCard from './SubscriptionCard';
const Subscription = () => {
 


  return (
    <div className='flex justify-around px-16 py-8'>
        {
            subscription && subscription.map((data, ind) => {
                return <SubscriptionCard key={ind} subscription={data} index = {ind}/>
            })
        }
    </div>
  );
};

export default Subscription;