export interface NavLink {
    label: string,
    href: string
}

export interface NavProps {
    links: NavLink[],
    visible?: boolean
}