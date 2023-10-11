import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import TodoForm from "./routes/todo/TodoForm";
import ErrorPage from "../src/routes/ErrorPage";
import TodoDetails from "./routes/todo/components/TodoDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/add",
        element: <TodoForm />,
        errorElement: <ErrorPage />
    },
    {
        path: "/edit/:todoId",
        element: <TodoForm />,
        errorElement: <ErrorPage /> 
    },
    {
        path: "/details/:todoId",
        element: <TodoDetails/>
    }
])

export default router