import React from 'react'
import Switch1 from './Switches/Switch1'
import Switch2 from './Switches/Switch2'
import Switch3 from './Switches/Switch3'
import Switch4 from './Switches/Switch4'

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-evenly",
  },
  switch1:{
    padding:"1rem"
  }
})

const Switches = () => {
   const styles = useStyles();
  return (
    <div className={styles.container}>
      <Switch1 className={styles.switch1}/>
      <Switch2 className={styles.switch2}/>
      <Switch3 className={styles.switch3}/>
      <Switch4 className={styles.switch4}/>
    </div>
  )
}

export default Switches
