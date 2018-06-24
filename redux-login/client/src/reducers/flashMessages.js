
import { ADD_FLASH_MESSAGES ,DELETE_FLASH_MESSAGE } from '../consonants';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';
const flaseMessages = (state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGES:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    content: action.message.content
                }
            ]
        case DELETE_FLASH_MESSAGE:
            const index = findIndex(state,{id:action.id})
            if(index>=0){
                return [
                    ...state.slice(0,index),
                    ...state.slice(index+1)
                ]    
            }
            return state;
        default:
            return state;
    }
};

export default flaseMessages


