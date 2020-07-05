import React, {Component} from "react";
import CrudService from "../../service/CrudService";
import axios from "../../axios/axios";
import {Link} from "react-router-dom";

/**
 * @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHospitalId: props.match.params.baseHospitalId,
            hospitalId: props.match.params.hospitalId,
            doctorId: props.match.params.doctorId,
            patients: []
        }
    }

    componentDidMount() {
        // TODO: Uncomment API call and delete static data fill
        CrudService.fetchPatients(this.state.baseHospitalId, this.state.hospitalId, this.state.doctorId)
            .then(response => {
                this.setState({
                    patients: response.data
                })
            })
            .catch(error => {
                console.error(error);
                alert(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.patients.length > 0 ?
            <div>
                <div>
                     <h1>Patients of Doctor with ID: {this.state.doctorId}</h1>
                    <Link to={"/doctor/" + this.state.doctorId + "/new-patient/"}
                          className="btn btn-primary"
                          doctorId={this.state.doctorId}>
                          Add new Patient
                    </Link>
                </div>
                    <br/>
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
                            Address
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Diagnoses
                        </th>
                    </tr>
                    </thead>
                    {this.state.patients.map(patient => {
                        return <tr className="col-md-6 mt-2 col-sm-12" key={patient.id}>
                            <td>
                                {patient.id}
                            </td>
                            <td>
                                {patient.name}
                            </td>
                            <td>
                                {patient.surname}
                            </td>
                            <td>
                                {patient.address}
                            </td>
                            <td>
                                {patient.age}
                            </td>
                            <td>
                                <Link to={"/base-hospital/" + this.state.baseHospitalId +
                                "/hospital/" + this.state.hospitalId + "/doctor/" + this.state.doctorId +
                                "/patient/" + patient.id}
                                      className="btn btn-primary"
                                      baseHospitalId={this.state.baseHospitalId}
                                      hospitalId={this.state.hospitalId}
                                      doctorId={this.state.doctorId}
                                      patientId={patient.id}
                                >
                                    Diagnoses
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

export default Doctor;