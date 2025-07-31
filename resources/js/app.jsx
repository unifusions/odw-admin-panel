import '../css/app.css';
// import '../css/dark.css';
import './bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/css/bootstrap.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
// import { applyTheme } from './Helpers/ThemeLoader';
import { useEffect } from 'react';



const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// useEffect(() => {
//     window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle");
//   }, []);

function ThemeLoader({ children }) {
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';

        if (theme === 'dark') {
            import('../css/dark.css');
        } else {
            import('../css/app.css');
        }
    }, []);

    return children;
}


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {

        // const userPreferredTheme = localStorage.getItem('theme') || 'light';

        // applyTheme(userPreferredTheme);

        const root = createRoot(el);

        root.render( <ThemeLoader><App {...props} /></ThemeLoader>);
    },
    progress: {
        color: '#asda',
    },
});
