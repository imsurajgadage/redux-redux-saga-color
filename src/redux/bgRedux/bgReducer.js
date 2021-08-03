import {CHANGE_BG, RESET_BG} from './bg.actionType'

export const BG_KEY = 'bgstore'

let initialState = {
    color: "#FFF"
}

let bgReducer = (state=initialState, action) =>{
    let {type,payload} = action
    switch(type){
        case 'CHANGE_BG_ASYNC':
            return{
                //required Color:
                color: "#5E4FDB"
            }
        case 'CHANGE_SECONDAEY_BG_ASYNC':
            return{
                //required Color:
                color: "#F3F2FC"
            }
            case 'CHANGE_THIRD_BG_ASYNC':
                return{
                    //required Color:
                    color: "#FFF"
                }
        default: return state
    }
}

export {bgReducer}