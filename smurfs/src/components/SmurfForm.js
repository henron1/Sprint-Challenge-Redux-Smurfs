import React from 'react';


function SmurfForm(props) {
    const handleClick = ev => {
        ev.preventDefault();
        props.addSmurf();
        props.history.push('/');
    }

    return (
        <div>
            <form action=''>
                <br />
                <input
                    type="text"
                    name="name"
                    onChange={props.changeHandler}
                    placeholder="Name"
                    value={props.smurf.name}
                />

                <input 
                    type="text"
                    name="name"
                    onChange={props.changeHandler}
                    placeholder="smurf"
                    value={props.smurf.age}
                />

                <button onClick={handleClick}>Add a smurf with just a click of this button!</button>
            </form>
        </div>
    )
}

export default SmurfForm