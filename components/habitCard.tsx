import HabitButton from './habitButton'
import Card from './card'
import { IHabit } from '../@types/interfaces'

interface IProps {
    habit: IHabit
}

const HabitCard = ({ habit }: IProps) => {
    const dates = getLastSevenDays();
    return (
        <Card title={habit.name}>
            <div>
                {dates.map((date, idx) => {
                    return (
                        <HabitButton 
                            date={date}
                            key={`${date.getDate()}-${idx}`}
                            habitId={habit._id}
                            events={habit.events}
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

export default HabitCard;