import type { FC } from "react";

interface Goal {
    id: number;
    title: string;
    description: string;
}

interface CourseGoalsProps {
    goals: Goal[];
    onDelete: (id: number) => void;
}
const CourseGoals: FC<CourseGoalsProps> = ({ goals, onDelete }) => {
    return (
        <ul>
            {
                goals.map(goal => (
                    <li key={goal.id}>
                        <article>
                            <div>
                            <h1>{goal.title}</h1>
                            <h2>{goal.description}</h2>
                            </div>
                        <button onClick={() => onDelete(goal.id)}>Delete</button>
                        </article>
                    </li>
                ))
            }
        </ul>
    )
}

export default CourseGoals