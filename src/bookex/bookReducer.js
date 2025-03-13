import { BUY_BOOK } from "./bookType"

const initialState={
    numOfBooks :50
}

const bookreducer=(state=initialState , action)=>{
    switch (action.type) {
        case BUY_BOOK:
            return{
                numOfBooks : state.numOfBooks -5
            }
            break;

        default: return state;
            break;
    }
}

export default bookreducer;