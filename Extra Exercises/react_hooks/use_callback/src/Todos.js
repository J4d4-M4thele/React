import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

//memo: not to rerender when states change
//returns a memoized value whereas useCallback returns memoised function 
export default memo(Todos);