function Goal(props) {
    const isGoal = props.isGoal;
    function MissedGoal() {
        return <h1>MISSED!</h1>;
      }
      function MadeGoal() {
        return <h1>Goal!</h1>;
      }
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

export default Goal;