import { useState } from "react";
// import { post } from "../../../backend/routers/workouts";

const WorkoutForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }
        const response = await fetch('https://workout-api-9zra.onrender.com/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new workout addes', json)
        }


    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3> Add New Workout</h3>
            <label>Exercise name</label>
            <input type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Enter Load (in Kg)</label>
            <input type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Number of Repetation:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}



export default WorkoutForm;
