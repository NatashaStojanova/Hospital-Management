import React, {Component} from "react";
import CrudService from "../../../service/CrudService";
import {Link} from "react-router-dom";

/**
 * @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

class MedicalSpecialist extends Component {
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
        CrudService.fetchDoctorsSpecialists(this.state.baseHospitalId, this.state.hospitalId)
            .then(response => {
                console.log(response)
                this.setState({
                    doctors: response.data
                });
            })
            .catch(error => {
                console.error(error);
                alert(error);
            })
    }

    render() {
        return (
            <div>
                {this.state.doctors.length > 0 ?
                    <div>
                        <div>
                            <h1>Medical Specialists</h1>
                            <div align = "left" style={{marginLeft: "20px"}}>
                                <Link to={"/base-hospital/" + this.state.baseHospitalId +
                                "/hospital/" + this.state.hospitalId}
                                      className="btn btn-primary"
                                      baseHospitalId={this.state.baseHospitalId}
                                      hospitalId={this.state.hospitalId}
                                >Switch to General Practitioners</Link>
                            </div></div>
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
                                    SSN
                                </th>
                                <th>
                                    Department
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
                                        {doctor.department.name}
                                    </td>
                                </tr>
                            })}
                        </table>
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
                         className="container text-black-50 text-lg-center">
                        <img alt="" style={{width: "10%"}}
                             src={require('../../../assets/loading.gif')}/>
                        Please wait while we fetch our data
                    </div>}
            </div>
        );
    }
}

export default MedicalSpecialist;