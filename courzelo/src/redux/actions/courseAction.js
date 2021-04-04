
import axios from 'axios'
import ACTIONS from './index'

export const addCourse = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/course',post,{headers: {Authorization: token}});
    console.log(data);

    dispatch({ type: ACTIONS.CREATE_COURSE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/course');
    console.log('test5666565');
    dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllCoursesByUser = (token) => async (dispatch) => {
  try {
    console.log('test5666565');
    const { data } = await axios.get('/course/coursebyuser',{headers: {Authorization: token}});
console.log('test4',data);
    dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateCourse = (id, editCourse) => async (dispatch) => {
  try {
  
    const { data } = await axios.patch(`/course/updateCourse/${editCourse._id}`,editCourse);

    dispatch({ type: ACTIONS.UPDATE_COURSE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/course/delete/${id}`);

    dispatch({ type: ACTIONS.DELETE_COURSE, payload:id });
  } catch (error) {
    console.log(error.message);
  }
};