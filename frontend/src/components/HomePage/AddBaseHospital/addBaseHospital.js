import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../../service/CrudService";

class AddBaseHospital extends Component {
    constructor(props) {
        super(props)

        let newBaseHospital = {
            name: " ",
            description: " ",
        }

        this.state = {
            baseHospital: newBaseHospital,

        }
    }

    onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            let baseHospital = this.state.baseHospital;
            baseHospital[name] = value;
            return {
                baseHospital: baseHospital,
            }
        }, () => {

        })
    }

    addData = () => {
        CrudService.saveBaseHospital(this.state.baseHospital).then(resp => {
            this.props.history.push("/mainHospitals")
        })
    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div>
                    <h4>Create new Hospital</h4>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="name" name={"name"}
                                   placeholder="Hospital name" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">Description</label>
                        <div className="col-sm-6">
                        <textarea
                            className="form-control" id="description" name={"description"}
                            placeholder="Description" required maxLength="255" onChange={this.onHandleChange}/>
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

export default withRouter(AddBaseHospital);