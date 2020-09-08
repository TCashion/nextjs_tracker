import HabitButton from './habitButton'

interface Props {
    habit: String
}

const Habit = ({ habit }: Props) => {
    return (
        <article className="text-center">
            <h3 className="font-semibold">{habit}</h3>
            <div>
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
                <HabitButton />
            </div>
        </article>
    );
};

export default Habit;