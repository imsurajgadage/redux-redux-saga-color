import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  changeBG,
  changeSecondaryBG,
  changeThirdBG,
} from "../redux/bgRedux/bg.actions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  primary_button: {
    width: "100px",
    margin: "1em",
    backgroundColor: "#5E4FDB",
    borderRadius: "8px",
    "&:hover": {
      background: "#5E4FDB",
    },
  },
  secondary_button: {
    width: "100px",
    margin: "1em",
    backgroundColor: "#F3F2FC",
    border: "1px solid #5E4FDB",
    color: "#5E4FDB",
    borderRadius: "8px",
    "&:hover": {
      background: "#F3F2FC",
    },
  },
  white_button: {
    width: "100px",
    margin: "1em",
    backgroundColor: "#FFF",
    color: "#5E4FDB",
    borderRadius: "8px",
    "&:hover": {
      background: "#FFF",
    },
  },
});

const Buttons = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  //Dispatchnig Actions

  const changePrimary = () => {
    dispatch(changeBG());
  };
  const changeSecondary = () => {
    dispatch(changeSecondaryBG());
  };

  const changeThirdButton = () => {
    dispatch(changeThirdBG());
  };


  return (
    <div className={styles.container}>
      <Button
        variant="contained"
        color="primary"
        className={styles.primary_button}
        onClick={changePrimary}
      >
        Button
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={styles.secondary_button}
        onClick={changeSecondary}
      >
        Button
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={styles.white_button}
        onClick={changeThirdButton}
      >
        Button
      </Button>
    </div>
  );
};

export default Buttons;
