
import GlobalSearch from "../GlobalSearch";
import { Head } from "@inertiajs/react";
import AdminNotifications from "./admin-notifications";



export function Header({ title, subtitle }) {

 

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
       {/* <AdminNotifications /> */}
      </div>
    </header>
  );
}
