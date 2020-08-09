import React from 'react';
import Main from './components/main/Main';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  appContainer: {
    textAlign: "center",
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <Main />
    </div>
  );
}

export default App;
