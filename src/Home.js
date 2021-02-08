import React, { useContext } from 'react';
import { itemContext } from './App';



const Home = () => {

    const { obj, setObj } = useContext(itemContext);

    const displayData = () => {
        /*return (
            obj.filter((item) => {
                return (<div key={item.id}>
                    <h1>{item.selectShift}</h1>
                </div>)
            })) */
    }

    return (
        <div className="container" id="formcont">
            <div className="form">
                {
                    obj.filter((item) => item).map(item => <div key={item} className="item">
                        <b> Start Date is : {item.startDate} </b>
                        <br />
                        <b> Selected Shift Is : {item.selectShift} </b>
                        <br />
                        <b> Repeate Type is: {item.repeateType} </b>
                        <br />
                        <b> StartTime is : {item.startTime} </b>
                        <br />
                        <b> EndTime is : {item.endTime} </b>
                        <br />
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home
