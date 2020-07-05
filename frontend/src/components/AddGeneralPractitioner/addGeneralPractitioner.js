import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../service/CrudService";


class AddGeneralPractitioner extends Component {
    constructor(props) {
        super(props)

        let newGeneralPractitioner = {
            ssn: null,
            name: null,
            surname: null,
            hospitalId: null,
        }

        this.state = {
            generalPractitioner: newGeneralPractitioner,


        }
    }

    onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            let generalPractitioner = this.state.generalPractitioner;
            generalPractitioner[name] = value;
            return {
                generalPractitioner: generalPractitioner,
            }
        }, () => {

        })
    }


    addGeneralPractitioner = () => {
        CrudService.saveDoctor(this.state.generalPractitioner).then(resp => {
            CrudService.saveGeneralPractitioner(this.state.generalPractitioner).then(resp => {

            })
        })

    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div>
                    <h1>Add new General Practitioner</h1>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                        <div className="col-sm-6">
                            <input
                                className="form-control" id="name" name={"name"}
                                placeholder="Enter name" required maxLength="13" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surname" className="col-sm-4 offset-sm-1 text-left">Surname</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="surname" name={"surname"}
                                   placeholder="Enter Surname" required maxLength="13"
                                   onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">SSN</label>
                        <div className="col-sm-6">
                        <textarea
                            className="form-control" id="ssn" name={"ssn"}
                            placeholder="Enter SSN" required maxLength="255" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                onClick={this.addGeneralPractitioner}
                                type="submit"
                                className="btn btn-primary text-upper">
                                Create
                            </button>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <Link
                                type="reset"
                                className="btn btn-warning text-upper">
                                Reset
                            </Link>
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

export default withRouter(AddGeneralPractitioner);