import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { BrowserRouter, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import StylistProfileContainer from './stylist_profile/stylist_profile_container';
import UserProfileContainer from './user_profile/user_profile_container'
import BookAppointmentContainer from './book_appointment/appointment_form_container'
import AppointmentsIndex from './appointments/appointments_booked_container'
import StylistsIndexContainer from './stylists_index/stylists_index_container'
import Footer from '../components/footer/footer';
import TeamPage from "../components/team/team";
// import Wow from '../components/wow/wow'
import StylistEditProfileContainer from './stylist-edit-profile/stylist_edit_profile_container';
import Search from '../components/search_bar/search'
import Modal from '../components/modal/modal'
import ReviewFormContainer from '../components/review/review_form_container'
import ImageContainer from "../components/image/ImageContainer"
import { Route, Redirect } from 'react-router';


const App = () => (
  <div>
    <NavBarContainer />
    <div className = "body">
    <Modal />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path='/stylists/index' component={StylistsIndexContainer}/>
        <Route exact path='/search' component={Search} />
        <ProtectedRoute exact path="/stylists/:stylistId/edit" component={StylistEditProfileContainer} />
        <Route exact path="/stylists/:stylistId" component={StylistProfileContainer}/>
        <ProtectedRoute exact path="/appointments/:id" component={AppointmentsIndex}/>
        <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer}/>
        <Route exact path="/stylists/:stylistId" component={StylistProfileContainer}/>
        <ProtectedRoute exact path='/appointments/create/:stylistId' component={BookAppointmentContainer}/>
        <ProtectedRoute exact path='/reviews/create/:stylistId' component={ReviewFormContainer}/>
        <Route exact path="/images" component={ImageContainer}/>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />    
    </Switch>
    </div>
    <Footer />
  </div>
);

export default App;