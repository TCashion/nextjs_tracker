import { ChildrenProps } from '../types/interfaces';

const Card = ({ children, title }: ChildrenProps) => {
    return (
            <article className="text-left p-4 shadow-card rounded-lg my-4">
                {title ? <h3 className="font-semibold border-b-8 border-gray-700 py-2 mb-2">{title}</h3> : null}
                {children}
            </article>
    );
};

export default Card;