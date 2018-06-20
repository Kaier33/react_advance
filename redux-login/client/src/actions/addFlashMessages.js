import { ADD_FLASH_MESSAGES,DELETE_FLASH_MESSAGE} from '../consonants'

export const addFlashMessages = (message) => {
    return {
        type: ADD_FLASH_MESSAGES,
        message
    }
}

export const deleteFlashMessage = (id)=>{
    return {
        type:DELETE_FLASH_MESSAGE,
        id
    }
}