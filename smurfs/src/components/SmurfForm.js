import React from 'react';
// import {withRouter} from 'react-router';

function SmurfForm(props) {
    const handleClick = e => {
        e.preventDefault();
        props.addNewSmurf();
        // props.history.push();
    }

    return (
        <div>
            <form>
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={props.changeHandler}
                    value={props.smurf.name}
                />

                <input 
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={props.changeHandler}           
                    value={props.smurf.age}
                />

                <button onClick={handleClick}>Add a smurf with just a click of this button!</button>
            </form>
        </div>
    )
}

// export default withRouter(SmurfForm);
export default SmurfForm;