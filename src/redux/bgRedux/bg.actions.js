import {CHANGE_BG, CHANGE_SECONDARY_BG, CHANGE_THIRD_BG} from './bg.actionType'

let changeBG = () =>{
    return {
        type: CHANGE_BG,
        payload: "change background"
    }
}

let changeSecondaryBG = () =>{
    return {
        type: CHANGE_SECONDARY_BG,
        payload: "change secondary background"
    }
}
let changeThirdBG = () =>{
    return {
        type: CHANGE_THIRD_BG,
        payload: "change secondary background"
    }
}

export {changeBG,changeSecondaryBG,changeThirdBG}