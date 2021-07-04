// Components
import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import Signup from './routes/Signup.svelte';
import Settings from './routes/Settings.svelte';
import Dashboard from './auth/Dashboard.svelte';
import Logout from './routes/Logout.svelte';
// import NotFound from './routes/NotFound.svelte';

// Export the route definition object
export default {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    // '/hello/:first/:last?': Login,
    '/login': Login,
    '/signup': Signup,
    '/dashboard': Dashboard,
    '/settings/:username?': Settings,
    '/logout': Logout,

    // Catch-all, must be last
    // '*': NotFound,
}
