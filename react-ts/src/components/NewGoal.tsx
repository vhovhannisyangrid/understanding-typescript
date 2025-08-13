import { useRef, type FormEvent } from "react";

interface NewGoalProps {
    onAdd: (text: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredGoal = goalRef.current!.value;
        const enteredSummary = goalRef.current!.value;
        onAdd(enteredGoal, enteredSummary )
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal"  ref={goalRef}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" ref={summaryRef}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}
