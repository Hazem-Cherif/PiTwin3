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
import Courses from './courses/GererCours/courses';
import Admin from '../dashboard/index'
import DetailAddCourse from './courses/GererCours/DetailAddCourse'
import Questionnaire from './courses/Questionnaire'

import Gerercoursemodifsupp from './courses/GererCours/gerecoursemodifsupp'
import GererCourses from './courses/GererCourses'
import AddCourse from './courses/GererCours/addcourse'
import Modifiersupcourse from './courses/GererCours/modifier_sup_course'
import Modifiersupcoursform from './courses/GererCours/modifierFormCoursDetails'
import Modifiersupintro from './courses/GererCours/modifierIntro'
import Modifiersupchapitres from './courses/GererCours/modifierChapitres'
import Modifiersupconclusion from './courses/GererCours/modifierConclusion'
import CourseByCategory from './courses/GererCours/CourseByCategory'
import qst from './courses/components/UserForm'
import DetailCourse from './courses/GererCours/DetailCourse';
import AllCourses from './courses/GererCours/AllCourses';
import Contact from './contact/contact'
import AboutUS from './AboutUS/AboutUs'
import Index from '../dashboard/index'
import Header from './header footer/header'
import Blog from './blog/home'


function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged,isAdmin} = auth
    return (
        <>
        <Header/>
        <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/AboutUS" component={AboutUS} exact />
                

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />

                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                <Route path="/DetailAddCourse" component={isLogged ? DetailAddCourse : NotFound} exact />
               
                <Route path="/GererCourses" component={isLogged ? GererCourses : NotFound} exact />
                <Route path="/Gerercoursemodifsupp" component={isLogged ? Gerercoursemodifsupp : NotFound} exact />
                <Route path="/addcourse/:token" component={isLogged ? AddCourse : NotFound} exact />
                
                <Route path="/modifiersupcourse/:id" component={isLogged ? Modifiersupcourse : NotFound} exact />
                <Route path="/modifiersupcoursform/:id" component={isLogged ? Modifiersupcoursform : NotFound} exact />
                <Route path="/modifiersupintro/:id" component={isLogged ? Modifiersupintro : NotFound} exact />
                <Route path="/modifiersupchapitres/:id" component={isLogged ? Modifiersupchapitres : NotFound} exact />
                <Route path="/modifiersupconclusion/:id" component={isLogged ? Modifiersupconclusion : NotFound} exact />

                <Route path="/DetailCourse/:id" component={isLogged ? DetailCourse : NotFound} exact />
                <Route path="/CourseByCategory/:categorie" component={isLogged ? CourseByCategory : NotFound} exact />

                <Route path="/courses" component={isLogged ? GererCourses : NotFound} component={Courses} exact />
                <Route path="/allcourses" component={AllCourses} exact /> 
                <Route path="/qst" component={isLogged ? qst : NotFound} exact />

                <Route path="/admin" component={Admin} exact />

                <Route path="/blog" component={isLogged? Blog: NotFound} exact/>
            
                <Route path="/index" component={isAdmin? Index: NotFound} exact/>

                <Route path="/admin" component={Admin} exact />

            </Switch>
        </section>
        </>
    )
}

export default Body
                