import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

interface IProps {
    date: Date
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

const HabitButton = ({ date }: IProps) => {

    const handleClick = () => console.log('hi')

    return (
        <div className="inline-flex flex-col text-center">
            <span>{date.getMonth() + 1}/{date.getDate()}</span>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-3"
                onClick={handleClick}
            >
                'O'
            </button>
        </div>
    );
};

export default HabitButton;