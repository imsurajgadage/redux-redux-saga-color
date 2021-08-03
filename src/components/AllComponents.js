import React from 'react'
import { useSelector } from "react-redux";
import { BG_KEY } from "../redux/bgRedux/bgReducer";
import Buttons from './Buttons';
import SmallButtons from './SmallButtons';
import Switches from './Switches';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  container: {
      height: "100vh",
      width: "100vw"
  },
})
const AllComponents = () => {
    const styles = useStyles();

    let viewBg = useSelector((state) => {
        return state[BG_KEY];
      });

    return (
        <div className={styles.container} style={{backgroundColor:viewBg.color }}>
                <Buttons/>
                <SmallButtons/>
                <Switches/>
        </div>
    )
}

export default AllComponents
