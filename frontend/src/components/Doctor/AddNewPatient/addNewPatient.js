import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../../service/CrudService";

class AddNewPatient extends Component {
    constructor(props) {
        super(props);

        let id_doctor = props.match.params.doctorId;

        this.state = {
            id_doctor: id_doctor,
            patient: {id_doctor: id_doctor}
        }
    };

    onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            let patient = this.state.patient;
            patient[name] = value;
            return {
                patient: patient
            }
        })
    };

    addData = () => {

        CrudService.savePatient(this.state.patient).then(resp => {
            this.props.history.push("/mainHospitals")
        })
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div>
                    <h4>Add new Patient</h4>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="name" name={"name"}
                                   placeholder="Name" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surname" className="col-sm-4 offset-sm-1 text-left">Surname</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="surname" name={"surname"}
                                   placeholder="Surname" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="address" className="col-sm-4 offset-sm-1 text-left">Address</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="address" name={"address"}
                                   placeholder="Address" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="ssn" className="col-sm-4 offset-sm-1 text-left">SSN</label>
                        <div className="col-sm-6">
                        <input
                            type="number"
                            className="form-control" id="ssn" name={"ssn"}
                            placeholder="SSN" required maxLength="255" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="age" className="col-sm-4 offset-sm-1 text-left">Age</label>
                        <div className="col-sm-6">
                            <input
                                type="number"
                                className="form-control" id="ssn" name={"age"}
                                placeholder="Age" required min={0} max={100} onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit" onClick={this.addData}
                                className="btn btn-primary text-upper">
                                Create
                            </button>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="reset"
                                className="btn btn-warning text-upper">
                                Reset
                            </button>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <Link to={"/mainHospitals"}
                                  className="btn btn-danger text-upper">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(AddNewPatient);