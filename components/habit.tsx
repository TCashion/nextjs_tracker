import HabitButton from './habitButton'

interface Props {
    habit: String
}

const Habit = ({ habit }: Props) => {
    const dates = getLastSevenDays();
    return (
        <article className="text-left p-4 shadow-card rounded-lg my-4">
            <h3 className="font-semibold border-b-8 border-gray-700 py-2 mb-2">{habit}</h3>
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