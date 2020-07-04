import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CrudService from "../../service/CrudService";
import {Link} from "react-router-dom";

/**
 * @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseHospitals: []
        }
    }

    componentDidMount() {
        // TODO: Uncomment API call and delete static data fill
        CrudService.fetchBaseHospitals()
            .then(response => {
                this.setState({
                    baseHospitals: response.data
                })
            })
            .catch(error => {
                alert(error)
            })
        //let baseHospitals = [];
        /*for (let i = 0; i < 20; i++) {
            let baseHospital = {id: i, name: "BaseHospital_" + i, description: "Description_" + i}
            baseHospitals.push(baseHospital);
        }*/

       /* this.setState({
            baseHospitals: baseHospitals
        })*/
    }

    render() {
        return (
            <Container>
                <h1>
                    Base Hospitals
                </h1>
                {this.state.baseHospitals.length > 0 ?
                    <div>
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
                                    Description
                                </th>
                                <th>
                                    Hospitals
                                </th>
                            </tr>
                            </thead>
                            {this.state.baseHospitals.map(baseHospital => {
                                return <tr className="col-md-6 mt-2 col-sm-12" key={baseHospital.id}>
                                    <td>
                                        {baseHospital.id}
                                    </td>
                                    <td>
                                        {baseHospital.name}
                                    </td>
                                    <td>
                                        {baseHospital.description}
                                    </td>
                                    <td>
                                        <Link to={"/base-hospital/" + baseHospital.id} className="btn btn-primary"
                                              baseHospitalId={baseHospital.id}
                                        >
                                            Hospitals
                                        </Link>
                                    </td>
                                </tr>
                            })}
                        </table>
                        <div>
                            <Row>
                                <Col>
                                    <Link to={"/addBaseHospital"} className="btn btn-primary">
                                        + Hospital
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
                         className="container text-black-50 text-lg-center">
                        <img alt="" style={{width: "10%"}}
                             src={require('../../assets/loading.gif')}/>
                        Please wait while we fetch our data
                    </div>}

            </Container>
        );
    }
}

export default HomePage;