import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Breadcrumbs() {
    const { breadcrumbs } = usePage().props;

    if (!breadcrumbs || breadcrumbs.length === 0) return null;

    return (
        <>

            <nav>

                <ol className="breadcrumb breadcrumb-no-gutter">

                    {breadcrumbs.map((crumb, index) => (
                        <li key={index} className='breadcrumb-item'>

                            {index === breadcrumbs.length - 1 ? (
                                crumb.name
                            ) : (
                                <Link href={crumb.url} className="breadcrumb-item">
                                    {crumb.name}
                                </Link>


                            )}
                        </li>
                    ))}


                </ol>
            </nav>



        </>

    );
}