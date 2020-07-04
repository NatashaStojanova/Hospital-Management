import React, {Component} from "react";
import axios from "../../axios/axios";
import CrudService from "../../service/CrudService";
import {Link} from "react-router-dom";

/**
 * @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHospitalId: props.match.params.baseHospitalId,
            hospitalId: props.match.params.hospitalId,
            doctors: []
        }
    }

    componentDidMount() {
        // TODO: Uncomment API call and delete static data fill
        CrudService.fetchDoctors(this.state.baseHospitalId, this.state.hospitalId)
            .then(response => {
                this.setState({
                    doctors: response.data
                });
            })
            .catch(error => {
                console.error(error);
                alert(error);
            })

        /*let doctors = [];
        for (let i = 0; i < 50; i++) {
            let doctor = {id: i, name: "Name_" + i, surname: "Surname_" + i, ssn: i * 1000000}
            doctors.push(doctor);
        }

        this.setState({
            doctors: doctors
        })*/
    }

    render() {
        return (
            <div>
                {this.state.doctors.length > 0 ?
            <div>
                <h1>Doctors for hospital with ID: {this.state.hospitalId}</h1>
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Surname
                        </th>
                        <th>
                            SSN
                        </th>
                        <th>
                            Patients
                        </th>
                    </tr>
                    </thead>
                    {this.state.doctors.map(doctor => {
                        return <tr className="col-md-6 mt-2 col-sm-12" key={doctor.id}>
                            <td>
                                {doctor.id}
                            </td>
                            <td>
                                {doctor.name}
                            </td>
                            <td>
                                {doctor.surname}
                            </td>
                            <td>
                                {doctor.ssn}
                            </td>
                            <td>
                                <Link to={"/base-hospital/" + this.state.baseHospitalId +
                                "/hospital/" + this.state.hospitalId + "/doctor/" + doctor.id}
                                      className="btn btn-primary"
                                      baseHospitalId={this.state.baseHospitalId}
                                      hospitalId={this.state.hospitalId}
                                      doctorId={doctor.id}
                                >
                                    Patients
                                </Link>
                            </td>
                        </tr>
                    })}
                </table>
            </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
                         className="container text-black-50 text-lg-center">
                        <img alt="" style={{width: "10%"}}
                             src={require('../../assets/loading.gif')}/>
                        Please wait while we fetch our data
                    </div>}
            </div>
        );
    }
}

export default Hospital;