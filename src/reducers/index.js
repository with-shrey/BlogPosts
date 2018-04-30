import { combineReducers } from 'redux';
import PostReducer from './posts_reducer'
import { reducer as FormReducer } from 'redux-form';


const rootReducer = combineReducers({
  post: PostReducer,
  form: FormReducer
});

export default rootReducer;
