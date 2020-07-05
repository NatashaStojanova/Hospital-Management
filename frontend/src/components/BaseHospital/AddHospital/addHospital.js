import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../../service/CrudService";

class AddHospital extends Component {
    constructor(props) {
        super(props);

        let newHospital = {
            location: " ",
        }

        this.state = {
            hospital: newHospital,
            baseHospitalId: props.match.params.baseHospitalId,

        }
    }

    onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            let hospital = this.state.hospital;
            hospital[name] = value;
            return {
                hospital: hospital,
            }
        }, () => {

        })
    }

    addData = () => {
        CrudService.saveHospital(this.state.hospital, this.state.baseHospitalId).then(resp => {
            this.props.history.push("/base-hospital/"+this.state.baseHospitalId)
        })
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div>
                    <h4>Create new Hospital</h4>
                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-4 offset-sm-1 text-left">Location</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="name" name={"location"}
                                   placeholder="Hospital name" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit"
                                onClick={this.addData}
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
                            <Link to={"/base-hospital/" + this.state.baseHospitalId}
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

export default withRouter(AddHospital);