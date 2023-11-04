import React from "react";

// Attendance component to track child's participation
function Attendance () {
    return (
        <div className="attendance">
            <fieldset>
            <legend>Which days did this child attend?</legend>
            <div className="dayCheckbox">
                <input type="checkbox" name="monday"></input>
                <label for="monday">Monday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="tuesday"></input>
                <label for="tuesday">Tuesday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="wednesday"></input>
                <label for="wednesday">Wednesday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="thursday"></input>
                <label for="thursday">Thursday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="friday"></input>
                <label for="friday">Friday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="saturday"></input>
                <label for="saturday">Saturday</label>
            </div>
            <div className="dayCheckbox">
                <input type="checkbox" name="sunday"></input>
                <label for="sunday">Sunday</label>
            </div>
            </fieldset>
        </div>
    );
}

export default Attendance;
