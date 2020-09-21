import HabitSchema from './habit'
import { AddHabitParams } from '../../@types/interfaces'

// graphQL mutations are where we "modify" things
// like a POST request in a REST API

export const habitMutations = {
    Mutation: {
        async addHabit(_: any, { habit }: AddHabitParams) {
            try { 
                const newHabit = await HabitSchema.create({
                    ...habit
                });
                return newHabit;
            } catch (err) {
                console.log(err);
            };
        }
    }
};