import React from 'react';

function SmurfList (props) {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <br />{smurf.name} <br /> <br /> {smurf.age}
                </div>
            ))}

        </div>
    )
}

export default SmurfList;