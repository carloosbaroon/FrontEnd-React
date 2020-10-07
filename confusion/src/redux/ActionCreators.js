import * as ActionTypes from "./ActionTypes";

//Funtion that creates actionObject that recieves 4 parameters
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});