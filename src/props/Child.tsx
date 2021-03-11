interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            Hi there! {color}
            <button onClick={onClick}>Click Me!</button>
        </div>
    );
};

export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click Me!</button>
            {children}
        </div>
    );
};