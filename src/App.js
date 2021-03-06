import React from "react";
import { connect } from "react-redux";
import { Container } from "./components/styles/Container.styled";
import { Button } from "./components/styles/Button.styled";
import ToDoList  from "./views/ToDo";

const App = (props) => {
  // const increment = () => {
  //   props.dispatch({
  //     type: "INCREMENT"
  //   });
  // };

  // const decrement = () => {
  //   if (props.count !== 0) {
  //     props.dispatch({
  //       type: "DECREMENT"
  //     });
  //   }
  // };

  return (
    <>
    {/* <Container>
     <h1 data-testid="counter-text">{props.count}</h1>
      <Button bg="#2ecc71" mr="30" onClick={increment} data-testid="btn-increment">
        Increment
      </Button>
      <Button bg="#c0392b" onClick={decrement} data-testid="btn-decrement">
        Decrement
      </Button>
      </Container> */}
      <ToDoList />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  };
};

export default connect(mapStateToProps)(App);
