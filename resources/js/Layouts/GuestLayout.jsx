import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import * as Logo from '../../../public/images/odw-logo.png';
export default function GuestLayout({ children }) {
    return (
        <>

            


            <main id="content" role="main" className="main">

                {children}

            </main>

        </>


    );
}
