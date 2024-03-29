// import { useEffect, useState } from "react"

// // components
// import WorkoutDetails from "../components/WorkoutDetails"

// import WorkoutForm from "../components/WorkoutForm"

// const Home = () => {
//   const [workouts, setWorkouts] = useState(null)

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch('http://localhost:4000/api/workouts')
//       const json = await response.json()

//       if (response.ok) {
//         setWorkouts(json)
//       }
//     }

//     fetchWorkouts()
//   }, [])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map(workout => (
//           <WorkoutDetails workout={workout} key={workout._id} />

//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }

// export default Home


import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://workout-api-9zra.onrender.com/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
