import { put, delay, takeLatest, all, fork } from "redux-saga/effects";


function* chaneBGAsync(){
    yield delay(2000);
    yield put({type: "CHANGE_BG_ASYNC", value:"#5E4FDB"})
}

function* chaneSecondaryBGAsync(){
    yield delay(2000);
    yield put({type: "CHANGE_SECONDAEY_BG_ASYNC", value:" #F3F2FC"})
}

function* chaneThirdBGAsync(){
    yield delay(2000);
    yield put({type: "CHANGE_THIRD_BG_ASYNC", value:" #FFE3E3"})
}

 function* changeBg(){
    yield takeLatest('CHANGE_BG',chaneBGAsync)
}

function* changeSecondaryBg(){
    yield takeLatest('CHANGE_SECONDARY_BG',chaneSecondaryBGAsync)
}

function* changethirdBg(){
    yield takeLatest('CHANGE_THIRD_BG',chaneThirdBGAsync)
}



export function* rootSaga () {
    yield all([
        fork(changeBg), 
        fork(changeSecondaryBg),
        fork(changethirdBg)
    ]);
}