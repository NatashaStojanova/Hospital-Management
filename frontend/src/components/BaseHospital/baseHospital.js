import React, {Component} from "react";
import axios from "../../axios/axios";
import CrudService from "../../service/CrudService";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

/**
 * @author Konstatnin Bogdanoski (konstantin.bogdanoski@inteligenta.io)
 */

class BaseHospital extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHospitalId: props.match.params.baseHospitalId,
            hospitals: []
        }
    }

    componentDidMount() {
        // TODO: Uncomment API call and delete static data fill
        CrudService.fetchHospitals(this.state.baseHospitalId)
            .then(response => {
                this.setState({
                    hospitals: response.data
                })
            })
            .catch(error => {
                alert(error)
            })

    }

    render() {
        return (
            <div>
                {this.state.hospitals.length > 0 ?
            <div>
                <h1>Hospitals of Base Hospital with ID: {this.state.baseHospitalId}</h1>
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
                            Doctors
                        </th>
                    </tr>
                    </thead>
                    {this.state.hospitals.map(hospital => {
                        return <tr className="col-md-6 mt-2 col-sm-12" key={hospital.id}>
                            <td>
                                {hospital.id}
                            </td>
                            <td>
                                {hospital.location}
                            </td>
                            <td>
                                <Link to={"/base-hospital/" + this.state.baseHospitalId +
                                          "/hospital/" + hospital.id}
                                      className="btn btn-primary"
                                      baseHospitalId={this.state.baseHospitalId}
                                      hospitalId={hospital.id}
                                >
                                    Doctors
                                </Link>
                            </td>
                        </tr>
                    })}
                </table>
                <Link to={"/base-hospital/" + this.state.baseHospitalId +
                "/addNewHospital/"} className="btn btn-primary"  baseHospitalId={this.state.baseHospitalId} >+ Location</Link>

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

export default BaseHospital;