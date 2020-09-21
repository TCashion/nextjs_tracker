import Habit from './habit'
import { IHabit } from '../@types/interfaces'

interface Props {
    habits: IHabit[]
}

const HabitList = ({ habits }: Props) => {
    return (
        <section className="text-center w-full">
            <h2>My Habits</h2>
            {habits.map((habit) => {
                return <Habit 
                    key={`${habit._id}`} 
                    habit={habit.name}
                />
            })}
        </section>
    )
}

export default HabitList;