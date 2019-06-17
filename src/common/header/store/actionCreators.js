
import { constants } from '../store';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.SEARCH_INFO,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res) => {
            const data = res.data.data;
            dispatch(changeList(data))
        })
        .catch(() => {
            console.log('error')
        })
    }
};
