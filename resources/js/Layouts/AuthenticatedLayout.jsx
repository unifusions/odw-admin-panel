import ApplicationLogo from '@/Components/ApplicationLogo';
 
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
// import Sidebar from '@/Components/Sidebar';
import Notifications from '@/Components/Notifications';

import { ToastContainer, toast } from 'react-toastify';
 
import useInertiaLoading from '@/Helpers/useInertiaLoading';
import LoadingDots from '@/Components/LoadingDots';
import PageHeader from '@/Components/PageHeader';
import { cn } from '@/lib/util';
import { Header } from '@/Components/layouts/header';
import { Sidebar } from '@/Components/layouts/sidebar';

export default function AuthenticatedLayout({ header, children, callToAction, pageTitle, subTitle }) {
    const loading = useInertiaLoading();
    const user = usePage().props.auth.user;
    const flash = usePage().props.flash;
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    }

    useEffect(() => {

        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);
    useEffect(() => {

        if (flash.failed) {
            toast.error(flash.failed);
        }
    }, [flash.failed]);

  const [sidebarCollapsed] = useState(false);


    return (
        <>

            <div className="min-h-screen bg-background">
                <Sidebar userRole={user.role} userName={user.name} />

                <main
                    className={cn(
                        "transition-all duration-300",
                        sidebarCollapsed ? "ml-20" : "ml-64"
                    )}
                >
                     
                    <Header title={pageTitle} subtitle={subTitle} />
                    <div className="p-6">{children}</div>
                </main>
            </div>
            <ToastContainer />
        

        </>

    );
}
