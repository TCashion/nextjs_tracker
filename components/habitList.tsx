import Habit from './habit'

interface Props {
    habits: [{
        _id: string,
        name: string
    }]
}

const HabitList = ({ habits }: Props) => {
    return (
        <section className="text-center w-full">
            <h2>My Habits</h2>
            {habits.map((habit, idx) => {
                return <Habit 
                    key={`${habit.name}-${idx}`} 
                    habit={habit.name}
                />
            })}
        </section>
    )
}

export default HabitList;