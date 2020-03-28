import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import appReducer from './appReducer';

export const rootReducer = combineReducers({
    quiz: quizReducer,
    app: appReducer
})