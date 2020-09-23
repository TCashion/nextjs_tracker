import { useMutation } from '@apollo/react-hooks'
import { Schema } from 'mongoose'
import gql from 'graphql-tag'
import { IEvent } from '../@types/interfaces'


interface IProps {
    date: Date,
    habitId: Schema.Types.ObjectId, 
    events?: IEvent[]
}

const ADD_EVENT = gql`
    mutation addEvent($date: Date, $habitId: ID) {
        addEvent(date: $date, habitId: $habitId) {
            _id
            name
            events {
                _id
                date
            }
        }
    }
`

const REMOVE_EVENT = gql`
    mutation removeEvent($eventId: ID, $habitId: ID) {
        removeEvent(eventId: $eventId, habitId: $habitId) {
            _id
            name
            events {
                _id
                date
            }
        }
    }
`

const HabitButton = ({ date, habitId, events }: IProps) => {
    const [addEvent] = useMutation(ADD_EVENT, {
        refetchQueries: ['getHabits']
    });

    const [removeEvent] = useMutation(REMOVE_EVENT, {
        refetchQueries: ['getHabits']
    });

    const foundDate = events ? events.find((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === date.getDate();
    }) : false;

    return (
        <div className="inline-flex flex-col text-center">
            <span>{date.getMonth() + 1}/{date.getDate()}</span>
            {foundDate ?
                (
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"
                        onClick={() => removeEvent({
                            variables: {
                                habitId, 
                                eventId: foundDate._id
                            }
                        })}
                    >
                        X
                    </button>
                )
                :
                (
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"
                        onClick={() => addEvent({
                            variables: {
                                habitId,
                                date
                            }
                        })}
                    >
                        O
                    </button>
                )
            }
        </div >
    );
};

export default HabitButton;