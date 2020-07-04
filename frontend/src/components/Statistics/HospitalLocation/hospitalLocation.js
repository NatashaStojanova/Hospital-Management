/**
 * @author Natasha Stojanvoa (natashastojanova6@gmail.com)
 */
import React from 'react';
import CanvasJSReact from "../../../assets/canvasjs-2.3.2/canvasjs.react";
import {useEffect, useState} from "react";
import CrudService from "../../../service/CrudService";

const HospitalLocation = (props) => {
    let [locations, setLocations] = useState();

    useEffect(() => {
        CrudService.groupByLocation().then((data) => {
            const locations = data.data;
            setLocations(locations);
        });
    }, []);

    let options = {};

    if (locations != undefined) {
        let tmp = locations.map((location) => {
            return {label: location.name, y: location.total}
        });


        options = {
            title: {
                text: "Codes"
            },
            data: [{
                type: "column",
                dataPoints: tmp
            }]
        };
    }
    else
        options = {};

    return (
        <div>
            {locations !== undefined ?
                <CanvasJSReact.CanvasJSChart options={options}/>
                : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
                       className="container text-black-50 text-lg-center">
                    <img alt="" style={{width: "10%"}}
                         src={require('../../../assets/loading.gif')}/>
                    Please wait while we fetch our data
                </div>}
        </div>
    );
};

export default HospitalLocation;