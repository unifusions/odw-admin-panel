import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle');