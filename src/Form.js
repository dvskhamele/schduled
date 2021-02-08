import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { itemContext } from './App';

const Form = () => {

    const { obj, setObj } = useContext(itemContext);
    const history = useHistory();

    const [field, setField] = useState({
        startDate: '',
        repeateType: '',
        selectShift: '',
        startTime: '',
        endTime: '',
    });

    const setData = (e) => {

        const { name, value } = e.target;

        setField((old) => {

            return {
                ...old,
                [name]: value,
            };
        })
        console.log(field);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setObj((old) => {
            return [...old, field]
        });
        history.push('/home');
    }

    return (
        <div className="container" id="formcont">
            <form className="form" method="post" onSubmit={submitForm}>
                <div className="fields">
                    <b>Select Start Date and Shift Times</b>
                </div>

                <div className="fields">
                    <p>each row represents a shift</p>
                </div>

                <div className="fields">
                    <label><b>Select Start Date</b></label>
                    <input type="date" name="startDate" value={field.startDate} onChange={setData} />
                </div>

                <div className="fields">
                    <label><b>Select Repeate Type</b></label>
                    <select name="repeateType" value={field.repeateType} onChange={setData}>
                        <option value="None" >None</option>
                        <option value="Daily" >Daily</option>
                        <option value="Weekly" > Weekly</option>
                    </select>
                </div>

                <div className="fields">
                    <label><b>Select Shift</b></label>
                    <select name="selectShift" value={field.selectShift} onChange={setData}>
                        <option value="Morning Shift - 5am to 9pm" >Morning Shift - 5am to 9pm</option>
                        <option value="Evening Shift - 9pm to 5am" >Evening Shift - 9pm to 5am</option>
                    </select>
                </div>

                <div className="fields">
                    <label><b>Select Start Time</b></label>
                    <input type="time" name="startTime" value={field.startTime} onChange={setData} />
                </div>

                <div className="fields">
                    <label><b>Select End Time</b></label>
                    <input type="time" name="endTime" value={field.endTime} onChange={setData} />
                </div>

                <div className="weekdays">
                    <b>Please Select The day Of The Week</b>
                    <br />
                    <label className="selectweek">
                        <b>MON</b>
                        <input type="radio" value="Monday" />
                    </label>
                    <label className="selectweek">
                        <b>TUE</b>
                        <input type="radio" value="Tuesday" />
                    </label>
                    <label className="selectweek">
                        <b>WED</b>
                        <input type="radio" value="Wednesday" />
                    </label>
                    <label className="selectweek">
                        <b>THU</b>
                        <input type="radio" value="Thrusday" />
                    </label>
                    <label className="selectweek">
                        <b>FRI</b>
                        <input type="radio" value="Friday" />
                    </label>
                    <label className="selectweek">
                        <b>SAT</b>
                        <input type="radio" value="Saturday" />
                    </label>
                    <label className="selectweek">
                        <b>SUN</b>
                        <input type="radio" value="Sunday" />
                    </label>
                </div>

                <label>
                    <b>Weekdays Only</b>
                    <input type="radio" name="Weekdays" />
                </label>
                <button type="submit" className="addme"> <b>ADD +</b> </button>

            </form>
        </div >
    )
}

export default Form;
