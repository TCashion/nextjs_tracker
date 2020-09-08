import HabitButton from './habitButton'

const Habit = () => {
    return (
        <article className="text-center">
            <h3>Habit Title</h3>
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