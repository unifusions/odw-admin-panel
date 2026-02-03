import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function GuestLayout({ children, header }) {
    return (
        <>

            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

                <Head title={header} />
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    <div className="flex items-center gap-2  ">
                        <img className="h-15" src="/images/odw-logo-h.png" alt="Logo" width='auto' />


                    </div>

                    {/* <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                Admin Portal
              </Button>
            </Link>
            <a href="#download">
              <Button size="sm">
                Download App
              </Button>
            </a>
          </div> */}
                </div>
            </header>

            <main className="container mx-auto max-w-4xl px-4 py-12"  >


                {header && (<h1 className="mb-8 text-4xl font-bold text-foreground">{header}</h1>)
                }
                {children}

            </main>
            {/* Footer */}
            <footer className="border-t bg-card py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-2">
                            <img src="/images/odw-logo-h.png" alt="" className='h-14' />
                        </div>

                        <p className="text-sm text-muted-foreground">
                            © 2025-26 OneDentalWorld. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                App Support
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>


        </>


    );
}
