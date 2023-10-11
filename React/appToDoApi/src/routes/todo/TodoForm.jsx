import { useContext, useRef } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Form from './../../shared/Form';
import Todo from '../../models/Todo';
import todoContext from './contexts/todoContext';

const TodoForm = () => {
    
    const { todos } = useContext(todoContext)
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    
    const { todoId } = useParams()
    const todo = todos.find(t => t.id === +todoId)

    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')
    
    const navigate = useNavigate()

    const submitHandler = () => {
        
        const title = titleInputRef.current.value
        const description = descriptionInputRef.current.value
        
        if(mode === "edit") {
            const updatedTodo = {
                id: todoId,
                _title: title,
                _description: description
            }
            
            axios.put(`http://localhost:3000/todos/${todoId}`, updatedTodo)
            .then(
                navigate("/")
            )
            .catch(error => console.error(error))


        } else {
            const newTodo = new Todo(title, description)
            axios.post('http://localhost:3000/todos', newTodo)
            .then(
                navigate("/")
            )
            .catch(error => console.error(error))
        }
    }
    
    return (
        <Form onSubmit={submitHandler}>
            <div className='m-3'>
            {
                mode === 'edit' ? <h3> Edit todo </h3> : <h3> Add todo </h3>
            }
            <div className="mb-3">
                <label htmlFor="title" className="form-label">title :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" placeholder="title" 
                    ref={titleInputRef}
                    defaultValue={todo?._title}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">description :</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="description" 
                    ref={descriptionInputRef}
                    defaultValue={todo?._description}
                />
            </div>
            {
                mode === 'edit' ? <button className='btn btn-warning'>Edit todo</button> : <button className='btn btn-success'>Add todo</button>
            }
            </div>
        </Form>
    )
}

export default TodoForm