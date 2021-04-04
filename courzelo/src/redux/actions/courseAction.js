
import axios from 'axios'
import ACTIONS from './index'

export const addCourse = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/course',post,{headers: {Authorization: token}});
    console.log(data);

    return dispatch({ type: ACTIONS.CREATE_COURSE, payload: data });
  } catch (error) {
    return res.status(500).json({msg: err.message})

  }
};
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/course');
    console.log('test5666565');
    return dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
  } catch (error) {
    return res.status(500).json({msg: err.message})

  }
};
export const getAllCoursesByUser = (token) => async (dispatch) => {
  try {
    console.log('test5666565');
    const { data } = await axios.get('/course/coursebyuser',{headers: {Authorization: token}});
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_USER, payload: data });
  } catch (error) {
    return res.status(500).json({msg: err.message})

  }
};
export const updateCourse = (id, editCourse) => async (dispatch) => {
  try {
  
    const { data } = await axios.patch(`/course/updateCourse/${editCourse._id}`,editCourse);

    return dispatch({ type: ACTIONS.UPDATE_COURSE, payload: data });
  } catch (error) {
    return res.status(500).json({msg: err.message})
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/course/delete/${id}`);

    return dispatch({ type: ACTIONS.DELETE_COURSE, payload:id });
  } catch (error) {
    return res.status(500).json({msg: err.message})
  }
};