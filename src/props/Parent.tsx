import { ChildAsFC } from "./Child";

const Parent = () => {
    return <ChildAsFC color="blue" onClick={() => console.log("Click on child component")}>
        Children
    </ChildAsFC>;
};

export default Parent;