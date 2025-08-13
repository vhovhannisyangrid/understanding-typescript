import Header from "./components/Header"
import goalsImage from './assets/goals.jpg';
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'learn Ts',
      description: 'Learn TS desc'
    },
    {
      id: 2,
      title: 'Learn ts',
      description: 'Never give up'
    }
  ])

  function handleDelete(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals(prevGoals => prevGoals.concat({id: Math.random(), title: text, summary}))
  }

  return (
    <>
      <main>
        <Header image={{src: goalsImage, alt:'list of goals'}}>
          <h1>Cours Goals</h1>
        </Header>

        <CourseGoals goals={goals} onDelete={handleDelete}></CourseGoals>
        <NewGoal onAdd={handleAddGoal}/>
      </main>
    </>
  )
}

export default App
