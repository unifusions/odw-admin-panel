import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import GlobalSearch from "../GlobalSearch";
import { Head } from "@inertiajs/react";
import { useNotifications } from "@/hooks/useNotifications";


const staticNotifications = [
  { id: 1, title: "New appointment request", time: "5 min ago", unread: true },
  { id: 2, title: "Patient John Doe checked in", time: "15 min ago", unread: true },
  { id: 3, title: "Second opinion received", time: "1 hour ago", unread: false },
  { id: 4, title: "Estimate approved by patient", time: "2 hours ago", unread: false },
];


const formatTimeAgo = (timestamp) => {
  const now = new Date();
  const givenTime = new Date(timestamp);
  const diffInMs = now - givenTime;

  // Convert to minutes and hours
  const diffInMins = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  if (diffInMins < 1) {
    return 'just now';
  }

  if (diffInMins < 60) {
    return `${diffInMins} ${diffInMins === 1 ? 'min' : 'mins'} ago`;
  }

  return `${diffInHours} ${diffInHours === 1 ? 'hr' : 'hrs'} ago`;
};

export function Header({ title, subtitle }) {
  const { notifications, unread, unreadCount } = useNotifications();

  // let notifications = staticNotifications;
  // const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-300 bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Head title={title} />
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4 w-1/3">
        {/* Search */}
        <div className="relative hidden md:block w-full" >
          <GlobalSearch />

        </div>

        {/* Quick Actions
          TO BE ADDED IN FUTURE

        */}

        {/* <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Appointment</span>
        </Button> */}

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-accent p-0 text-[10px]">
                  {unreadCount}
                </Badge>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">
              Notifications
              <Badge variant="secondary" className="text-xs">
                {unreadCount ? `${unreadCount} New` : '0'}
              </Badge>
            </DropdownMenuLabel>
            {notifications.length > 0 ?
              (<>
                <DropdownMenuSeparator />

                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex flex-col items-start gap-1 p-3"
                  >
                    {console.log(notification)}
                    <div className="flex w-full items-center gap-2">
                      {notification.unread && (
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      )}
                      <div>
                        <p className={`font-medium ${notification.unread ? "text-primary" : ""}`}>
                          {notification.title}
                        </p>
                        <span className="text-xs">{notification.message}</span>
                      </div>

                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(notification.created_at)}
                    </span>
                  </DropdownMenuItem>
                ))}



              </>) : (<>  <DropdownMenuSeparator /> <p className="justify-center text-primary text-center text-xs py-2">
                No New Notifications
              </p>   </>)
            }

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
