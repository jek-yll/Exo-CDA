import { useRef } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../auth/authSlice";
import { BASE_DB_URL } from "../../src/firebaseConfig";
import { addTask } from "./taskSlice";


const TaskForm = ({user}) => {
    const textRef = useRef()
    const dispatch = useDispatch()

    const handlerSubmit = async (e) => {
        e.preventDefault()

        const newTask = {
            id: Date.now(),
            text: textRef.current.value,
            done: false
        }

        if (user.idToken) {
            try {
                const response = await fetch(`${BASE_DB_URL}/todoList.json?auth=${user.idToken}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTask)
                })

                if(!response.on){
                    throw new Error("erreur dans la requete POST")
                }

                const data = await response.json()
                dispatch(addTask(newTask))
            } catch(error) {
                console.log(error.message);
            }
        }
    }

    return (
        <>
            <button onClick={() => dispatch(removeUser())}>Déconnexion</button>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label className="label-form" htmlFor="task">Ajouter une tâche</label>
                    <input className="form-control" type="text" ref={textRef}/>
                </div>
            </form>
        </>
    );
}

export default TaskForm;