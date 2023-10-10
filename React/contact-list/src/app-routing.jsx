import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import Accueil from './routes/Accueil';
import ContactForm from './routes/ContactForm'
import ContactsList from './routes/ContactsList';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/",
                element: <Accueil/>
            },
            {
                path:"/contacts",
                element: <ContactsList/>
            },
            {
                path:"/contacts/add",
                element: <ContactForm />
            },
            {
                path:"/contacts/edit/:contactId",
                element: <ContactForm />
            },
            {
                path:"/contacts/delete/:contactId",
                element: <ContactForm />
            }
        ]
    }
])

export default router