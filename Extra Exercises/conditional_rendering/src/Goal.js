import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
    const isGoal = props.isGoal;
    //IF LOGIC STATEMENT
    // if (isGoal) {
    //     return <MadeGoal />;
    // }
    // return <MissedGoal />;

    //TERNARY OPERATOR
    return(
    <>
       {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
    );
}

export default Goal;