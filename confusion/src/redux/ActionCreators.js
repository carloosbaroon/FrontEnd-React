import * as ActionTypes from "./ActionTypes";
import { DISHES } from '../shared/dishes';

//Function that creates actionObject that recives 4 parameters
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//Thunk, returns dispatch as a function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    },2000)
}

export const dishesLoading = () => ({
   type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});