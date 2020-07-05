import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from "../HomePage/homePage";
import BaseHospital from "../BaseHospital/baseHospital";
import Hospital from "../Hospital/hospital";
import Doctor from "../Doctor/doctor";
import Patient from "../Patient/patient";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import MainPage from "../MainPage/mainPage";
import AddBaseHospital from "../HomePage/AddBaseHospital/addBaseHospital";
import AddHospital from "../BaseHospital/AddHospital/addHospital"
import CheckUp from "../CheckUp/checkUp"
import Codes from "../Statistics/Codes/codes";
import HospitalLocation from "../Statistics/HospitalLocation/hospitalLocation";
import AddNewPatient from "../Doctor/AddNewPatient/addNewPatient"
import MedicalSpecialist from "../Hospital/MedicalSpecialist/medicalSpecialist";
import TotalPatientsPerDoctor from "../TotalPatientsPerDoctor/totalPatientsPerDoctor"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Route path={"/"} exact component={MainPage}/>
                    <Route path={"/mainHospitals"} exact component={HomePage}/>
                    <Route path={"/base-hospital/:baseHospitalId"} exact component={BaseHospital}/>
                    <Route path={"/base-hospital/:baseHospitalId/hospital/:hospitalId"} exact component={Hospital}/>
                    <Route path={"/base-hospital/:baseHospitalId/hospital/:hospitalId/medical-specialists"} exact component={MedicalSpecialist}/>
                    <Route path={"/base-hospital/:baseHospitalId/hospital/:hospitalId/doctor/:doctorId"} exact component={Doctor}/>
                    <Route
                        path={"/base-hospital/:baseHospitalId/hospital/:hospitalId/doctor/:doctorId/patient/:patientId"}
                        exact
                        component={Patient}/>
                    <Route path={"/addBaseHospital"} exact component={AddBaseHospital}/>
                    <Route path={"/base-hospital/:baseHospitalId/addNewHospital"} exact component={AddHospital}/>
                    <Route path={"/createCheckUp"} exact component={CheckUp}/>
                    <Route path={"/groupByCode"} exact component={Codes}/>
                    <Route path={"/groupByLocation"} exact component={HospitalLocation}/>
                    <Route path={"/doctor/:doctorId/new-patient/"} exact component={AddNewPatient}/>
                    <Route path={"/monthly-report-doctor"} exact component={TotalPatientsPerDoctor}/>
                    <Footer/>
                </Router>
            </div>


        );
    }
}

export default App;
