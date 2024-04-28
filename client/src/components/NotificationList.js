import React, {useEffect, useState} from 'react'

const NotificationList = () => {
    const [notificationData, setNotificationData] = useState([])
    const handleClick = (e) => {
        window.localStorage.clear();
        window.location.href = './signin'
    }
    async function fetchNotification(){
        const data = await fetch('http://52.90.160.27:3000/api/notify/')
        const notifyData = await data.json();
        console.log(notifyData)
        setNotificationData(notifyData)
    }
    useEffect(() => {
        fetchNotification();
    },[])
  return (
    <div className='w-96 h-full shadow-md p-5 '>
            <h1 className='font-bold pb-10 text-5xl underline'>Notification</h1>
            <div className='flex flex-col gap-5'>
                {
                    notificationData?.data && notificationData?.data.map((data, index)=>{
                        return <p className='text-base p-3 bg-orange-200 rounded-lg font-semibold'>{data?.title}</p>
                    })
                }
            </div>
        </div>
  )
}

export default NotificationList