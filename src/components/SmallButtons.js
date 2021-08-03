import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    row1_button_1: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#FFF",
      color: "#852121",
      border: "2px solid #852121",
      "&:hover": {
        background: "#FFF",
      },
    },
    row1_button_2: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#FFF",
      color: "#5E4FDB",
      border: "2px solid #5E4FDB",
      "&:hover": {
        background: "#FFF",
      },
    },
    row1_button_3: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#FFF",
      color: "#FFF",
      border: "2px solid #FFE3E3",
      "&:hover": {
        background: "#FFF",
      },
    },
    row2_button_1: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#0E4316",
      color: "#FFF",
      "&:hover": {
        background: "#0E4316",
      },
    },
    row2_button_2: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#5E4FDB",
      color: "#FFF",
            "&:hover": {
        background: "#5E4FDB",
      },
    },
    row2_button_3: {
      borderRadius: "10px",
      margin: "1em",
      backgroundColor: "#1ABC9C",
      color: "#FFF",
      "&:hover": {
        background: "#1ABC9C",
      },
    },
  });
  

const SmallButtons = () => {
    const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Button
          variant="contained"
          color="primary"
          className={styles.row1_button_1}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.row1_button_2}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.row1_button_3}
        >
          &#10004;
        </Button>
      </div>
      <div className={styles.row}>
        <Button
          variant="contained"
          color="primary"
          className={styles.row2_button_1}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.row2_button_2}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={styles.row2_button_3}
        >
          &#10004;
        </Button>
      </div>
    </div>
  );
};

export default SmallButtons;
