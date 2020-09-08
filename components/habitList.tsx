import Habit from './habit'

interface Props {
    habits: String[]
}

const HabitList = ({ habits }: Props) => {
    return (
        <section className="text-center w-full">
            <h2>My Habits</h2>
            {habits.map((habit, idx) => {
                return <Habit 
                    key={`${habit}-${idx}`} 
                    habit={habit}
                />
            })}
        </section>
    )
}

export default HabitList;