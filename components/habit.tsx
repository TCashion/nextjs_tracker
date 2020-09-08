import HabitButton from './habitButton'

interface Props {
    habit: String
}

const Habit = ({ habit }: Props) => {
    const dates = getLastSevenDays();
    return (
        <article className="text-center">
            <h3 className="font-semibold">{habit}</h3>
            <div>
                {dates.map((date, idx) => {
                    return (
                        <HabitButton 
                            date={date}
                            key={`${date.getDate()}-${idx}`}
                        />
                    )
                })}
            </div>
        </article>
    );
};

const getLastSevenDays = () => {
    const dates = '0123456'.split('').map(day => {
        const tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - parseInt(day));
        return tempDate;
    }).reverse();
    return dates; 
}

export default Habit;