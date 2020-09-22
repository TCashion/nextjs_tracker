import { Schema } from 'mongoose';
import { ReactNode } from 'react'

export interface NavLink {
    label: string,
    href: string
}

export interface NavProps {
    links: NavLink[],
    visible?: boolean
}

export interface ChildrenProps {
    children: ReactNode,
    title?: string
};

export interface IHabit {
    _id: Schema.Types.ObjectId,
    name: string,
    events?: Date[]
}

export interface IEvent {
    _id: Schema.Types.ObjectId,
    date: Date
}

export interface IAddHabitParams {
    habit: IHabit
}

export interface IAddEventParams {
    habitId: Schema.Types.ObjectId,
    date: Date
}

export interface IRemoveEventParams {
    habitId: Schema.Types.ObjectId,
    eventId: Schema.Types.ObjectId
}