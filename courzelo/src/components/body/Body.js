import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './authentification/login'
import Home from './home/home';
import Register from './authentification/register';
import ActivationEmail from './authentification/ActivationEmail';
import {useSelector} from 'react-redux'
import NotFound from '../util/NotFound/NotFound'
import ForgotPass from './authentification/ForgetPassword';
import ResetPass from '../body/authentification/ResetPassword'
import Profile from './profile/Profile'
import Courses from './courses/courses';
import Admin from '../dashboard/index'
import DetailAddCourse from './courses/DetailAddCourse'
import Questionnaire from './courses/Questionnaire'
import GererCourses from './courses/GererCourses'
import qst from './courses/components/UserForm'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged} = auth
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />

                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/DetailAddCourse" component={isLogged ? DetailAddCourse : NotFound} exact />
                <Route path="/Questionnaire" component={isLogged ? Questionnaire : NotFound} exact />
                <Route path="/GererCourses" component={isLogged ? GererCourses : NotFound} exact />
                <Route path="/courses" component={Courses} exact />
                <Route path="/qst" component={isLogged ? qst : NotFound} exact />

                <Route path="/admin" component={Admin} exact />

            </Switch>
        </section>
    )
}

export default Body
                