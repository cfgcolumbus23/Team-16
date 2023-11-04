import React from "react";

function Attendance ({ onDelete }) {
    //handle the event where the new component rendered wants to be deleted
    const handleDelete = () => {
        onDelete();
    };

    return (
        <div>
            <button onClick={handleDelete}>X</button>
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