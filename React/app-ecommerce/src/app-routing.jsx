
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import ProductsList from './routes/products/ProductsList';
import LoginForm from './routes/login/LoginForm';
import ProductDetails from './routes/products/ProductDetails';
import ProductForm from './routes/products/ProductForm';
import Cart from './routes/cart/Cart';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children:[
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
            },
            {
                path: "/products/admin/add",
                element: <ProductForm />
            },
        ]
    }
])

export default router