import React from "react";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80px",
    height: "38px",
    padding: "0px",
    margin: "10px"
  },
  switchBase: {
    color: "#D64B4B",
    padding: "6px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#D64B4B"
      }
    }
  },
  thumb: {
    color: "white",
    width: "24px",
    height: "24px",
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#D64B4B",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "12px"
    },
    "&:after": {
      content: "'Yes'",
      left: "8px"
    },
    "&:before": {
      content: "'No'",
      right: "7px"
    }
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(45px) !important"
  }
});

export default function Switches() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
