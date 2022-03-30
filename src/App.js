//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Complaint from './Components/complaints/Complaint';

import OnlineServices from './Components/onlineServices/OnlineServices';
import BirthRegistration from './Components/onlineServices/BirthRegistration';
import MarriageRegistration from './Components/onlineServices/MarriageRegistration';
import DeathRegistration from './Components/onlineServices/DeathRegistration';
import NavigationBar from './Components/navbar/NavigationBar';
import AboutUs from './Components/navbar/AboutUs';
import Contact from './Components/navbar/Contact';
import Registration from './Components/navbar/Registration';
import Login from './Components/navbar/Login';
import NewPayment from './Components/payment/NewPayment';
import TouristGarden from './Components/navbar/TouristGarden';
import TouristZoo from './Components/navbar/TouristZoo';
import Footer from './Components/Footer';
import HODHomePage from './Components/hod/HODHomePage';
import ComplaintList from './Components/complaints/ComplaintList';
import ComplaintsCompletedList from './Components/complaints/ComplaintsCompletedList';
import ComplaintsRejectedList from './Components/complaints/ComplaintsRejectedList';

function App() {

  return (
    <BrowserRouter>
      <div >
      <NavigationBar /><br/><br/><br/>
        <Routes>
          {/* <Route exact path="/" component={HomePage}></Route> */}
          {/* In react-router-dom v6, "Switch" is replaced by routes "Routes" */}
          <Route path='/' element={<HomePage />} />
          <Route path='/complaints' element={<Complaint />} />
          
          <Route path='/onlineServices' element={<OnlineServices/>}></Route>
          <Route path='/birthRegistration' element={<BirthRegistration/>}></Route>
          <Route path='/marriageRegistration' element={<MarriageRegistration/>}></Route>
          <Route path='/deathRegistration' element={<DeathRegistration/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/deathRegistration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/newpayment' element={<NewPayment/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/touristGarden'element={<TouristGarden/>}></Route>
          <Route path='/touristZoo' element={<TouristZoo/>}></Route>
          <Route path='/hodhomepage' element={<HODHomePage/>}></Route>
          <Route path='/complaintslist' element={<ComplaintList/>}></Route>
          <Route path='/complaintscompletedlist' element={<ComplaintsCompletedList />}></Route>
          <Route path='/complaintsrejectedlist' element={<ComplaintsRejectedList />}></Route>

         

        </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
