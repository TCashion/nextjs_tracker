import HabitCard from './habitCard'
import { IHabit } from '../@types/interfaces'

interface Props {
    habits: IHabit[]
}

const HabitList = ({ habits }: Props) => {
    return (
        <section className="text-center w-full">
            <h2>My Habits</h2>
            {habits.map((habit) => {
                return <HabitCard
                    key={`${habit._id}`} 
                    habit={habit}
                />
            })}
        </section>
    )
}

export default HabitList;