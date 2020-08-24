import React, { useContext } from "react";
import Main from "components/main/Main";
import { createUseStyles } from "react-jss";
import BaseColorContext from "ne-ui/utils/BaseColorContext";

const useStyles = createUseStyles({
  appContainer: (props) => ({
    textAlign: "center",
    height: "100%",
    backgroundColor: props.baseColor.primary,
  }),
});

function App() {
  const baseColor = useContext(BaseColorContext);
  const classes = useStyles({ baseColor });
  return (
    <div className={classes.appContainer}>
      <Main />
    </div>
  );
}

export default App;
