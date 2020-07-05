import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CrudService from "../../service/CrudService";

class AvgPatientsPerHospital extends Component {
    constructor(props) {
        super(props);

        let obj = {
            ssn: null,
            fromDate: null,
            toDate: null,
        }

        this.state = {
            obj: obj,
            total: null,
        }
    }

     onHandleChange = (e) => {
         let name = e.target.name;
         let value = e.target.value;
         this.setState(prevState => {
             let obj = this.state.obj;
             obj[name] = value;
             return {
                 obj: obj,
             }
         }, () => {

         })
     }

    addData = () => {
        CrudService.monthlyReport(this.state.obj).then(resp => {
            this.setState(prevState => {
                let total = this.state.total;
                total = resp.data;
                return {
                    total: total,
                }
            }, () => {

                document.getElementById("resp").style.display = "inline";
            })
        })
    }

    render() {
        return (
            <div className="container">
                <br/>
                <div>
                    <h2>Find total number of Check Ups for a specific doctor</h2>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-4 offset-sm-1 text-left">Doctor SSN</label>
                        <div className="col-sm-6">
                            <input type="number"
                                   className="form-control" id="name" name={"ssn"}
                                   placeholder="Enter Doctor SSN" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fromDate" className="col-sm-4 offset-sm-1 text-left">From Date</label>
                        <div className="col-sm-6">
                            <input type="date"
                                   className="form-control" id="fromDate" name={"fromDate"}
                                   placeholder="yyyy-mm-dd" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fromDate" className="col-sm-4 offset-sm-1 text-left">To Date</label>
                        <div className="col-sm-6">
                            <input type="date"
                                   className="form-control" id="fromDate" name={"toDate"}
                                   placeholder="yyyy-mm-dd" required maxLength="50" onChange={this.onHandleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div
                            className="offset-sm-1 col-sm-3  text-right">
                            <Link to={"/"}
                                  className="btn btn-danger text-upper">
                                Cancel
                            </Link>
                        </div>
                        <div
                            className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit"
                                onClick={this.addData}
                                className="btn btn-primary text-upper">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                            <div style={{display: "none"}}
                                className="form-control"
                                id="resp"
                            ><h1>Total number of Check Ups from {this.state.obj.fromDate} to {this.state.obj.toDate} is {this.state.total}</h1></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(AvgPatientsPerHospital);