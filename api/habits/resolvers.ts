// where we ask for data, this is what tells us what data to give back
// like a GET request
import Habit from './habit'
import { IHabit } from '../../@types/interfaces';

export const habitResolvers = {
    Query: {
        async habits() {
            console.log('get habits');
            const habit: IHabit = {
                _id: 'somefunkyarray',
                name: 'Make my bed'
            };
            return [habit];
        }
    }
};