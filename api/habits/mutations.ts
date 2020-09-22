import Habit from './habit'
import { 
    IAddHabitParams, 
    IHabit, 
    IRemoveEventParams, 
    IAddEventParams 
} from '../../@types/interfaces'

// graphQL mutations are where we "modify" things
// like a POST request in a REST API

export const habitMutations = {
    Mutation: {
        async addHabit(_: any, { habit }: IAddHabitParams) {
            try { 
                const newHabit: IHabit = await Habit.create({
                    ...habit
                });
                return newHabit;
            } catch (err) {
                console.log(err);
            };
        }, 

        async addEvent(_: any, { habitId, date }: IAddEventParams) {
            console.log('addEvent');
        },

        async removeEvent(_: any, { habitId, eventId }: IRemoveEventParams) {
            console.log('removeEvent');
        }
        
    }
};