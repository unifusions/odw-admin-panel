import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Calendar,
    Users,
    FileText,
    MessageSquare,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Stethoscope,
    BadgePercent,
    Hospital,
    UserPen,
    UserStar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import DentistIcon from "../Icons/DentistIcon";



const adminNavigation = [
    { name: "Dashboard", href: '/admin/dashboard', icon: LayoutDashboard },
    { name: "Appointments", href: '/admin/appointments', icon: Calendar, badge: 12 },
    { name: "Second Opinion", href: '/admin/second-opinion', icon: MessageSquare, badge: 3 },
    { name: "Dental Estimates", href: '/admin/estimates', icon: FileText, badge: 5 },
    { name: "Compare Costs", href: '/admin/compare-costs', icon: MessageSquare, badge: 3 },

    { name: "Patients", href: '/admin/patients', icon: Users },

    { name: 'Clinics', href: '/admin/clinics', icon: Hospital, svgIcon: '' },
    { name: 'Dentists', href: '/admin/dentists', icon: UserPen, },
    { name: 'Specialists', href: '/admin/specialists', icon: UserStar },
    { name: 'Users', href: '/admin/clinic-users', icon: Users, },
    { name: 'Treatments', href: '/admin/services', icon: Stethoscope },


    { name: 'Deals', href: '/admin/deals', icon: BadgePercent, },
    { name: "Settings", href: "/admin/settings/mobile", icon: Settings },
];


const clinicAdminNavigation = [
    { name: "Dashboard", href: '/clinic/admin/dashboard', icon: LayoutDashboard },
    { name: "Appointments", href: '/clinic/admin/appointments', icon: Calendar, badge: 12 },


    // { name: "Patients", href: '/clinic/patients', icon: Users },


];

const clinicUserNavigation = [
    { name: "Dashboard", href: '/clinic/user/dashboard', icon: LayoutDashboard },
    { name: "Appointments", href: '/clinic/user/appointments', icon: Calendar, badge: 12 },


    // { name: "Patients", href: '/clinic/user/patients', icon: Users },


];



const roleLabels = {
    super_admin: "Administrator",
    moderator: "Moderator",
    clinic_user: "Clinic Staff",
    clinic_admin: "Clinic Admin"
};

const roleColors = {
    super_admin: "bg-accent text-accent-foreground",
    moderator: "bg-info text-info-foreground",
    clinic_user: "bg-success text-success-foreground",
};

const roleNavigation = {
    super_admin: adminNavigation,
    clinic_admin: clinicAdminNavigation,
    clinic_user: clinicUserNavigation
}

export function Sidebar({ userRole, userName }) {
    const location = route().current();
    const [collapsed, setCollapsed] = useState(false);
    const { post } = useForm();
    let navigation = roleNavigation[userRole];
    return (
        <aside
            className={cn(
                "fixed left-0 top-0 z-40 flex h-screen flex-col bg-sidebar transition-all duration-300",
                collapsed ? "w-20" : "w-64"
            )}
        >
            {/* Logo */}
            <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl ">
                        <img src="/images/odw-brand.png" alt="One Dental World" className="h-10 w-10" />
                    </div>
                    {!collapsed && (
                        <span className="text-lg font-semibold text-sidebar-foreground">
                            <img className="h-15" src="/images/odw-logo-text.png" alt="Logo" />
                        </span>
                    )
                    }
                </Link>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="rounded-lg p-1.5 text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                >
                    {collapsed ? (
                        <ChevronRight className="h-5 w-5" />
                    ) : (
                        <ChevronLeft className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                {navigation.map((item) => {
                    const isActive = usePage().url.startsWith(item.href);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn("sidebar-link", isActive && "active")}
                            title={collapsed ? item.name : undefined}
                        >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            {!collapsed && (
                                <>
                                    <span className="flex-1">{item.name}</span>
                                    {/* {item.badge && (
                                        <Badge
                                            variant="secondary"
                                            className="bg-sidebar-primary/20 text-sidebar-primary-foreground text-xs"
                                        >
                                            {item.badge}
                                        </Badge>
                                    )} */}


                                </>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="border-t border-sidebar-border p-4">
                <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-accent text-sm font-semibold text-sidebar-accent-foreground">
                        {userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                    </div>
                    {!collapsed && (
                        <div className="flex-1 overflow-hidden">
                            <p className="truncate text-sm font-medium text-sidebar-foreground">
                                {userName}
                            </p>
                            <Badge
                                className={cn(
                                    "mt-1 text-[10px] font-medium",
                                    roleColors[userRole]
                                )}
                            >
                                {roleLabels[userRole]}
                            </Badge>
                        </div>
                    )}
                </div>
                {!collapsed && (
                    < >

                        <form onSubmit={(e) => {
                            e.preventDefault();
                            post(route('logout'));
                        }} className="mt-4 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
                            <LogOut className="h-4 w-4" />
                            <button type="submit" className="dropdown-item">Logout</button>
                        </form>
                    </>
                )}
            </div>
        </aside>
    );
}
