
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import ProductsList from './routes/products/ProductsList';
import LoginForm from './routes/login/LoginForm';
import ProductForm from './routes/admin/ProductForm';
import Cart from './routes/cart/Cart';
import ProductTab from './routes/admin/ProductTab';
import ProtectedRoute from './routes/admin/ProtectedRoute';
import ProductDetails from './routes/products/ProductDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ProductsList />
            },
            {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            }
        ]
    },
    {
        path: "/admin",
        element:
            <ProtectedRoute>
                <App />
            </ProtectedRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/admin",
                element: <ProductTab />
            },
            {
                path: "/admin/products/add",
                element: <ProductForm />
            }
        ]
    }
])

export default router