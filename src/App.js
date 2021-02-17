import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "./actions";
import { Grid, Cell, Row, Column } from 'react-foundation';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        Counter: {counter}
      </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button>-</button>
      {
        isLogged && <h3>Logged info</h3>
      }

      <Grid className="display" centerAlign>
        <Cell small={8}>4 columns</Cell>
      </Grid>

    </div>
  );
}

export default App;
