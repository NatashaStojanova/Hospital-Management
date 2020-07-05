import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../service/CrudService";
import axios from "../../axios/axios"

class CheckUp extends Component {
    constructor(props) {
        super(props)

        let newCheckUp = {
            description: " ",
            doctorSSN: " ",
            patientSSN: " ",
        }

        let newCheckUpICD = {
            idCheckUp: null,
            idCode: null,
        }

        this.state = {
            checkUp: newCheckUp,
            checkUpICD: newCheckUpICD,
            icd_codes: [],
            codeId: " ",

        }
    }

    componentDidMount() {
        axios.get("/get-icd-codes").then((data) => {
            const icd_codes = Object.keys(data.data).map((icd_code, index) => {
                return (
                    <option
                        id={data.data[index].id}
                        key={index}
                        value={data.data[index].id}>
                        {data.data[index].name}
                    </option>

                );
            });
            this.setState({icd_codes: icd_codes});
        });
    }

    onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            let checkUp = this.state.checkUp;
            checkUp[name] = value;
            return {
                checkUp: checkUp,
            }
        }, () => {

        })
    }

    onCodeChange = (e) => {
        let code_id = e.target.value;
        this.setState(prevState => {
            let codeId = this.state.codeId;
            codeId = code_id;
            return {
                codeId: codeId,
            }
        }, () => {

        })
    }

    addData = () => {
        CrudService.createCheckUp(this.state.checkUp).then(resp => {
            this.setState(prevState => {
                let checkUpICD = this.state.checkUpICD;
                checkUpICD.idCheckUp = resp.data;
                checkUpICD.idCode = this.state.codeId;
                debugger;
                return {
                    checkUpICD: checkUpICD,
                }
            }, () => {
                CrudService.createCheckUpICD(this.state.checkUpICD).then(resp => {
                    this.props.history.push("/mainHospitals")
                })
            })


        })

    }

    render() {
        return (
            <div className="container">
                <br/><br/>
                <div>
                    <h1>Diagnosis</h1>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Doctor SSN</label>
                        <div className="col-sm-6">
                            <input
                                className="form-control" id="name" name={"doctorSSN"}
                                placeholder="Enter Doctor SSN" required maxLength="13" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Patient SSN</label>
                        <div className="col-sm-6">
                            <input type="text"
                                   className="form-control" id="name" name={"patientSSN"}
                                   placeholder="Enter Patient SSN" required maxLength="13"
                                   onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">Description</label>
                        <div className="col-sm-6">
                        <textarea
                            className="form-control" id="description" name={"description"}
                            placeholder="Describe diagnosis" required maxLength="255" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">ICD-Code</label>
                        <div className="col-sm-6">
                            <select name="code" className="form-control"
                                    onChange={this.onCodeChange} required>
                                <option value="">Choose code</option>
                                {this.state.icd_codes}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                onClick={this.addData}
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

export default withRouter(CheckUp);