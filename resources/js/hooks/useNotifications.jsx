import { useEffect, useState } from 'react';

export function useNotifications() {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    useEffect(() => {

       const channel =  Echo.channel('admin-notify');

    // This is a "god-mode" logger for debugging
    channel.listenToAll((eventName, data) => {
        console.log("RAW EVENT RECEIVED!");
        console.log("Event Name:", eventName);
        console.log("Data:", data);
    });

        Echo.channel('admin-notify').listen('.App.Events.AdminNotify', (e) =>{
console.log("Caught with absolute path!");
        })

        
        Echo.channel('admin-notify').listen('AdminNotify', (e) =>{
console.log("Caught with relative path!");
        })


        Echo.channel('admin-notify').listen('.AdminNotify', (e) =>{
console.log("Caught with dot-prefix!");
        })

        Echo.channel('admin-notify')
            .listen('.AdminNotify', (e) => {
                
                setNotifications(prev => [
                    {
                        id: e.notification.id,
                        title: e.notification.title,
                        message: e.notification.message,
                        created_at: e.notification.created_at,
                    },
                    ...prev,
                ]);

                setUnreadCount(count => count + 1);
            });

        return () => {
            Echo.leave('admin-notify');
        };
    }, []);

    return {
        notifications,
        unreadCount,
        markAllRead: () => setUnread(0),
    };
}