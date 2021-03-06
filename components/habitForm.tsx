import { useState, ChangeEvent, MouseEvent, FormEvent, Dispatch, SetStateAction } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Button from './button'

interface Props {
    setHabits: Dispatch<SetStateAction<string[]>>
}

const ADD_HABIT = gql`
    mutation addHabit($habit: HabitInput) {
        addHabit(habit: $habit) {
            _id
            name
        }
    }
`

const HabitForm = () => {
    const [formData, setFormData] = useState({ habit: '' });

    const [addHabit] = useMutation(ADD_HABIT, {
        // this option will re-fetch data after addHabit is complete
        refetchQueries: ['getHabits']
    });
    
    const handleCancel = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault(); 
        setFormData({
            habit: ''
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault(); 
        setFormData({
            habit: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        addHabit({
            variables: { 
                 habit: {
                     name: formData.habit
                 } 
            } 
        });
    };

    return (
        <form
            className="w-full max-w-sm my-8"
            onSubmit={handleSubmit}
        >
            <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                    <label htmlFor="habit" className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">Habit:</label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        name="habit"
                        id="habit"
                        value={formData.habit}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                    <Button 
                        innerText="Submit"
                        type="submit"
                    />
                </div>
                <div className="md:w-2/3">
                    <Button
                        innerText="Cancel"
                        type="button"
                        onClick={handleCancel}
                    />
                </div>
            </div>
        </form>
    )
}

export default HabitForm;