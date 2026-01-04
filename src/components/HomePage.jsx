import "./HomePage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const arr = useSelector(state => state.arrRedux);
    const flag = useSelector(state => state.flagRedux);
    const [del, setDel] = useState(false);
    const [delarr, setDelarr] = useState([]);


    function handleDeletion() {
        setDel(true);
    }

    function handleAddButton() {
        navigate('/form-page');
    }

    function handleChecker(event) {
        const indVal = parseInt(event.target.value);
        event.target.checked ? setDelarr((prev) => [...prev, indVal]) : setDelarr((prev) => prev.splice(prev.indexOf(indVal), 1));
    }

    function handleSelectedDel() {
        const newArr = arr.filter((item, ind) => !delarr.includes(ind));
        setDelarr([]);
        dispatch({ type: 'set', newArr })
        setDel(false);
    }

    const elem = (del ? arr.map((obj, ind) => (
        <tr key={ind}>
            <td>
                <input type="checkbox" value={ind}
                    onChange={handleChecker}
                />
            </td>
            <td>{obj.nameHolder}</td><td>{obj.favmeal}</td>
            <td>{obj.favAbb}</td><td>{obj.highestQualification}</td><td>{obj.occupation}</td><td>{obj.browser}</td></tr>)) : arr.map((obj, ind) => (<tr key={ind}><td colSpan={2}>{obj.nameHolder}</td><td>{obj.favmeal}</td><td>{obj.favAbb}</td><td>{obj.highestQualification}</td><td>{obj.occupation}</td><td>{obj.browser}</td></tr>)));

    return (
        <>
            <h1 className="tabledata">Tabular Forms</h1>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Name</th>
                        <th>Favourite meal</th>
                        <th>Farvourite Abbreviatioen</th>
                        <th>Highest Qualification</th>
                        <th>Occupation</th>
                        <th>Favourite Browser</th>
                    </tr>
                </thead>
                <tbody>
                    {elem}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={7}>Hello This is a footer</td>
                    </tr>
                </tfoot>
            </table>

            {del ? <button className="buttonapp" onClick={handleSelectedDel}>Delete Selected items</button> : <button className="buttonapp" onClick={handleDeletion}>Delete items</button>}
            <button className="buttonapp" onClick={handleAddButton}>Add more</button>
        </>
    )
}

export default HomePage;