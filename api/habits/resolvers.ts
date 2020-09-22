// where we ask for data, this is what tells us what data to give back
// like a GET request
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import Habit from './habit'
import { IHabit } from '../../@types/interfaces'

export const habitResolvers = {
    Query: {
        async habits() {
            try {
                const habits: IHabit[] = await Habit.find();
                return habits;
            } catch (err) {
                console.log(err);
            }
        }
    },

    // this can be copied and pasted into other projects 
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Custom date scalar',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client from
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(ast.value);
            };
            return null; 
        }
    })
};