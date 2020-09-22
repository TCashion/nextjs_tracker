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
    _id: string,
    name: string,
    events?: Date[]
}

export interface AddHabitParams {
    habit: IHabit
}