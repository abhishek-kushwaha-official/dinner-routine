import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./FormCompo.css";
import { useNavigate } from "react-router-dom";

export default function FormCompo() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChangeEvent(keyVar, event) {
        setInputs(prev => ({ ...prev, [keyVar]: event.target.value }));
    }

    function handleChange(keyVar, val) {
        setInputs(prev => ({ ...prev, [keyVar]: val }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (Object.keys(inputs).length === 6) {
            dispatch({ type: 'add', inputs });
            setInputs({});
            navigate('/');
        }
        else {
            alert("Fill all the details correctly!");
        }
    }


    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="outliner">
                    <label htmlFor="fullName">Name</label>
                    <input type="text" id="fullName" name="nameHolder" value={inputs.nameHolder || ""} onChange={(event) => handleChangeEvent("nameHolder", event)} />
                </div>

                <fieldset className="fieldset">
                    <legend>What is your favorite meal?</legend>
                    <div>
                        <input type="radio" name="favoriteMeal" id="breakfast" value={inputs.favmeal || ""} onChange={() => handleChange("favmeal", "Breakfast")}></input>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div>
                        <input type="radio" name="favoriteMeal" id="lunch" value={inputs.favmeal || ""} onChange={() => handleChange("favmeal", "Lunch")}></input>
                        <label htmlFor="lunch">Lunch</label>
                    </div>
                    <div>
                        <input type="radio" name="favoriteMeal" id="dinner" value={inputs.favmeal || ""} onChange={() => handleChange("favmeal", "Dinner")}></input>
                        <label htmlFor="dinner">Dinner</label>
                    </div>
                </fieldset>

                <div className="outliner">
                    <label htmlFor="favoriteAbbreviation">Favorite Abbreviation</label>
                    <select id="favoriteAbbreviation" name="favAbb" value={inputs.favAbb || ""} onChange={(event) => handleChangeEvent("favAbb", event)}>
                        <option value="">Select</option>
                        <option value="By the way">BTW</option>
                        <option value="Tell me ok">TTYL</option>
                        <option value="To be honest">TBH</option>
                        <option value=" I do not know">IDK</option>
                    </select>
                </div>

                <div className="outliner">
                    <label htmlFor="highestQual">Highest Qualification</label>
                    <textarea id="highestQual" name="highestQualification" rows={4} cols={12} value={inputs.highestQualification || ""} onChange={(event) => handleChangeEvent("highestQualification", event)} /></div>
                <div className="outliner">
                    <label htmlFor="occu">Occupation</label>
                    <textarea id="occu" name="occupation" rows={4} cols={12} value={inputs.occupation || ""} onChange={(event) => handleChangeEvent("occupation", event)} /></div>

                <div className="outliner">

                    <label htmlFor="browse">Favourite Browser</label>
                    <input list="browsers" id="browse" name="browser" value={inputs.browser || ""} onChange={(event) => handleChangeEvent("browser", event)} />

                    <datalist id="browsers">
                        <option value="Internet Explorer" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>
                </div>
                <button className="button" type="Submit">Submit</button>
            </form>
        </>
    );

}