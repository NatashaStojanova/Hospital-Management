import React from 'react';
import {Jumbotron} from 'reactstrap';
import {Link} from "react-router-dom";


const MainPage = (props) => {
    return (
        <div style={{minHeight: "100%"}}>
            <Jumbotron style={{backgroundImage: `url(https://www.businesskorea.co.kr/news/photo/201603/14972_14264_0.png)`}}>
                <h1 className="display-3">Hospital Management</h1>
                <h2 className="display-5"></h2>
                <br/>
                <h3 className="display-5">About what is this project?</h3>
                <div className="container">
                    <p className="lead">Hospital management is a field which is related to management, health care systems, leadership, hospital networks and administration of hospitals. </p>
                    <p className="lead">The idea of this project is for users to be able to filter by hospitals or doctors, doctors can create new check up and
                        we can see the latest statistics like the most recently diagnosed ICD code for this year etc...</p>
                </div>
                <br/>
                <hr className="my-2"/>
                <br/>
                <p className="lead">
                    <Link to={"/mainHospitals"} className="btn btn-primary">Learn more</Link>
                </p>
            </Jumbotron>
            <br/><br/><br/>
        </div>
    );
};

export default MainPage;