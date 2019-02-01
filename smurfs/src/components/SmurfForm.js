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
                    placeholder="Age"
                    onChange={props.changeHandler}           
                    value={props.smurf.age}
                />

                <input 
                    type="text"
                    name="height"
                    placeholder="Height"
                    onChange={props.changeHandler}           
                    value={props.smurf.height}
                />

                <button onClick={handleClick}>Add a smurf with just a click of this button!</button>
            </form>
        </div>
    )
}

// export default withRouter(SmurfForm);
export default SmurfForm;