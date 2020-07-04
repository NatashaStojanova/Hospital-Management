import React from 'react';
import {Jumbotron} from 'reactstrap';


const MainPage = (props) => {
    return (
        <div style={{minHeight: "100%"}}>
            <Jumbotron style={{backgroundImage: `url(https://www.businesskorea.co.kr/news/photo/201603/14972_14264_0.png)`}}>
                <h1 className="display-3">Hospital Management</h1>
                <h2 className="display-5">Here you can ....?</h2>
                <br/>
                <h3 className="display-5">What do we do</h3>
                <div className="container">
                    <p className="lead">Hospital management is a field which is related to management, health care systems, leadership, hospital networks and administration of hospitals. </p>
                </div>
                <br/>
                <hr className="my-2"/>
                <br/>
                <p>ffdsfsdfdsds </p>
                <p className="lead">
                    <a href="http://www.foaf-project.org/" className="btn btn-primary">Learn more</a>
                </p>
            </Jumbotron>
            <br/><br/><br/>
        </div>
    );
};

export default MainPage;