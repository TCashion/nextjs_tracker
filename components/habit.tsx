import HabitButton from './habitButton';
import Card from '../components/card';

interface Props {
    habit: String
}

const Habit = ({ habit }: Props) => {
    const dates = getLastSevenDays();
    return (
        <Card title={habit}>
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
        </Card>
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