/**
 * @author Natasha Stojanvoa (natashastojanova6@gmail.com)
 */
import React from 'react';
import CanvasJSReact from "../../../assets/canvasjs-2.3.2/canvasjs.react";
import {useEffect, useState} from "react";
import CrudService from "../../../service/CrudService";

const Codes = (props) => {
    let [codes, setCodes] = useState();

    useEffect(() => {
        CrudService.groupByCodes().then((data) => {
            const codes = data.data;
            setCodes(codes);
        });
    }, []);

    let options = {};

    if (codes != undefined) {
        let tmp = codes.map((code) => {
            return {label: code.code, y: code.total}
        });

        debugger;

        options = {
            title: {
                text: "The most commonly diagnosed ICD codes of 2019"
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
            {codes !== undefined ?
                <CanvasJSReact.CanvasJSChart options={options}/>
                :<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}
                      className="container text-black-50 text-lg-center">
                    <img alt="" style={{width: "10%"}}
                         src={require('../../../assets/loading.gif')}/>
                    Please wait while we fetch our data
                </div>}
        </div>
    );
};

export default Codes;