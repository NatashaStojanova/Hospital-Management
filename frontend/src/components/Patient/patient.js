import React, {Component} from "react";
import CrudService from "../../service/CrudService";

/**
 * @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHospitalId: props.match.params.baseHospitalId,
            hospitalId: props.match.params.hospitalId,
            doctorId: props.match.params.doctorId,
            patientId: props.match.params.patientId,
            diagnoses: []
        }
    }

    componentDidMount() {
        // TODO: Uncomment API call and delete static data fill
        CrudService.fetchDiagnoses(this.state.baseHospitalId, this.state.hospitalId, this.state.doctorId, this.state.patientId)
            .then(response => {
                this.setState({
                    diagnoses: response.data
                })
            })
            .catch(error => {
                console.error(error);
                alert(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.diagnoses.length > 0 ?
            <div>
                <h1>Diagnoses of Patient</h1>
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Code
                        </th>
                        <th>
                            Name
                        </th>
                    </tr>
                    </thead>
                    {this.state.diagnoses.map(diagnose => {
                        return <tr className="col-md-6 mt-2 col-sm-12" key={diagnose.id}>
                            <td>
                                {diagnose.id}
                            </td>
                            <td>
                                {diagnose.code}
                            </td>
                            <td>
                                {diagnose.name}
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

export default Patient;