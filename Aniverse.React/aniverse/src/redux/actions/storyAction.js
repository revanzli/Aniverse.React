import axios from "axios"
import * as actionTypes from "./actionTypes"
import { baseUrl, header, headerPicture } from "./axiosConfiguration"

export function getUserStoriesSuccess(story) {
    return { type: actionTypes.GET_USER_STORIES_SUCCESS, payload: story }
}
export function getUserStoriesError(story) {
    return { type: actionTypes.GET_USER_STORIES_ERROR, payload: story }
}
export function getUserStories(username) {
    return async function (dispatch) {
        let url = `${baseUrl}/story/${username}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getUserStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserStoriesError(error));
            });
    }
}

export function getFriendStoriesSuccess(stories) {
    return { type: actionTypes.GET_FRIEND_STORIES_SUCCESS, payload: stories }
}
export function getFriendStoriesError(error) {
    return { type: actionTypes.GET_FRIEND_STORIES_ERROR, payload: error }
}
export function getFriendStoriesLoading() {
    return { type: actionTypes.GET_FRIEND_STORIES_LOADING }
}
export function getFriendStory(page = 1, size = 3) {
    return async function (dispatch) {
        dispatch(getFriendStoriesLoading());
        let url = `${baseUrl}/story/friend?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendStoriesError(error.response.data));
            });
    }
}

export function getAllStoriesSuccess(stories) {
    return { type: actionTypes.GET_ALL_STORIES_SUCCESS, payload: stories }
}
export function getAllStoriesError(error) {
    return { type: actionTypes.GET_ALL_STORIES_ERROR, payload: error }
}
export function getStories() {
    return async function (dispatch) {
        let url = `${baseUrl}/story`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllStoriesSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllStoriesError(error));
            })
    }
}

export function storyCreateSuccess(data) {
    return { type: actionTypes.STORY_CREATE_SUCCESS, payload: data }
}
export function storyCreateError(error) {
    return { type: actionTypes.STORY_CREATE_ERROR, payload: error }
}

export function storyCreate(storyData) {
    const formData = new FormData();
    formData.append('storyFile', storyData.storyFile);
    formData.append('content', storyData.name);
    return async function (dispatch) {
        let url = `${baseUrl}/story`;
        axios.post(url, formData, headerPicture)
            .then((res) => {
                res.data.imageSrc = storyData.imageSrc
                dispatch(storyCreateSuccess(res.data));
            }).catch((error) => {
                dispatch(storyCreateError(error.response.data.message));
            });
    }
}

export function deleteStorySuccess(data) {
    return { type: actionTypes.DELETE_STORY_SUCCESS, payload: data }
}
export function deleteStoryError(error) {
    return { type: actionTypes.DELETE_STORY_ERROR, payload: error }
}

export function deleteStory(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story/delete/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(deleteStorySuccess(id));
            }).catch((error) => {
                dispatch(deleteStoryError(error));
            });
    }
}

export function archiveStorySuccess(id) {
    return { type: actionTypes.ARCHIVE_STORY_SUCCESS, payload: id }
}
export function archiveStoryError(error) {
    return { type: actionTypes.ARCHIVE_STORY_ERROR, payload: error }
}
export function archiveStory(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/story/archive/${id}`;
        axios.patch(url, {}, header)
            .then((res) => {
                dispatch(archiveStorySuccess(id));
            }).then((error) => {
                dispatch(archiveStoryError(error));
            })
    }
}

export function getArchiveStorySuccess(data) {
    return { type: actionTypes.GET_STORY_ARCHIVE_SUCCESS, payload: data }
}
export function getArchiveStoryError(error) {
    return { type: actionTypes.GET_STORY_ARCHIVE_ERROR, payload: error }
}
export function getArchiveStory(page, size) {
    return function (dispatch) {
        let url = `${baseUrl}/story/archive?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getArchiveStorySuccess(res.data));
            }).catch((error) => {
                dispatch(getArchiveStoryError(error));
            })
    }
}

export function getRecycleStorySuccess(data) {
    return { type: actionTypes.GET_STORY_RECYCLE_SUCCESS, payload: data }
}
export function getRecycleStoryError(error) {
    return { type: actionTypes.GET_STORY_RECYCLE_ERROR, payload: error }
}
export function getRecycleStory(page, size) {
    return function (dispatch) {
        let url = `${baseUrl}/story/recycle?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getRecycleStorySuccess(res.data));
            }).catch((error) => {
                dispatch(getRecycleStoryError(error));
            })
    }
}