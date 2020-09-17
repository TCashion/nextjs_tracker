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
    title?: String
};