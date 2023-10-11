import TodosList from "./routes/todo/TodoList"
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <div className="container">
            <TodosList />
        </div>
    )
}

export default Home