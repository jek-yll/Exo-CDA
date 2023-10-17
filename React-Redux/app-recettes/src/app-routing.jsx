import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RecipeForm from "./components/recettes/RecipeForm";
import RecipeList from "./components/recettes/RecipeList";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AuthForm from "./components/auth/AuthForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/signin",
                element: <AuthForm />
            },
            {
                path: "/recipes",
                element: <RecipeList />
            },
            {
                path: "/recipes/add",
                element: <ProtectedRoute><RecipeForm /></ProtectedRoute>
            }
        ]
    }
])

export default router