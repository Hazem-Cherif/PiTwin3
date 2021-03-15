import './App.css';
import React, {useEffect, Fragment } from 'react';
import Header from './components/header footer/header'
import Footer from './components/header footer/footer'
import Body from './components/body/Body'

import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'

import axios from 'axios'

import {BrowserRouter as Router } from 'react-router-dom'


function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])

  

  return (
    <Router>
      <Fragment>
         <Header/>
           <Body/>
         <Footer/>
      </Fragment> 
    </Router>
    
   
  );
}

export default App;
