import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import App from './App';
import ContactForm from './routes/ContactForm';
import ProjetsPage from './routes/ProjetsPage';
import AProposPage from './routes/AProposPage';
import ErrorPage from './routes/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/projets",
                element: <ProjetsPage />
            },
            {
                path: "/contact",
                element: <ContactForm />
            },
            {
                path: "/a-propos",
                element: <AProposPage />
            }
        ]
    }
])

export default router