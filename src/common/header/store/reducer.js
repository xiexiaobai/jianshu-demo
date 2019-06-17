import { constants } from '../store';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default ( state = defaultState, action ) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.SEARCH_INFO:
            return state.merge({
                'list': action.data, 
                'totalPage': action.totalPage
                                })
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
    }
    return state;
}