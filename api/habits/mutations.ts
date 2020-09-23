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
            try {
                date.setHours(0, 0, 0, 0);
                const habit = await Habit.findOneAndUpdate(
                    {
                        _id: habitId,
                        'events.date': {
                            $ne: date
                        }
                    },
                    {
                        $addToSet: {
                            events: {
                                date
                            }
                        }
                    }
                );
                return habit;
            } catch (err) {
                console.log(err);
            }
        },

        async removeEvent(_: any, { habitId, eventId }: IRemoveEventParams) {
            try { 
                const habit = await Habit.findOneAndUpdate({
                    _id: habitId
                }, 
                {
                    $pull: {
                        events: {
                            _id: eventId
                        }
                    }
                });
                return habit; 
            } catch (err) {
                console.log(err);
            }
        }

    }
};