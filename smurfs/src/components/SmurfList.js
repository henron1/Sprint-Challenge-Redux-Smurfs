import React from 'react';

function SmurfList(props) {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <div key={smurf.id}>{smurf.name} </div>
                    <p>{smurf.age}</p>
                </div>
            ))}

        </div>
    )
}

export default SmurfList;