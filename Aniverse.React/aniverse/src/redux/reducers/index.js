import { combineReducers } from 'redux'
import { postReducer } from './post/postReducer'
import { authReducer } from './Auth/authReducer';
import { storyFriendReducer, storyReducer, storiesReducer } from './story/storyReducer';
import { friendReducer, friendRequestReducer, getFriendRequestReducer } from './friend/friendReducer'
import { userReducer, animalFollowsReducer, userNavbarReducer, usersReducer, userPhotosReducer, userLoginReducer, seachUsersReducer } from './user/userReducer';
import { animalPostReducer, animalGetReducer, animalReducer, animalCategoryReducer, selectAnimalReducer, friendsAnimalReducer } from './animal/aimalReducer';
import { commentPostReducer } from './comment/commentReducer';


const rootReducer = combineReducers({
    usersReducer,
    userReducer,
    friendReducer,
    animalReducer,
    postReducer,
    storyReducer,
    authReducer,
    storyFriendReducer,
    userNavbarReducer,
    friendRequestReducer,
    animalGetReducer,
    animalPostReducer,
    userPhotosReducer,
    animalCategoryReducer,
    selectAnimalReducer,
    commentPostReducer,
    userLoginReducer,
    animalFollowsReducer,
    storiesReducer,
    friendsAnimalReducer,
    seachUsersReducer,
    getFriendRequestReducer
})
export default rootReducer;