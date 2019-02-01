import React from 'react';

function SmurfList(props) {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <div key={smurf.id}>{smurf.name} </div>
                    <div key={smurf.id}>{smurf.age}</div>
                </div>
            ))}

        </div>
    )
}

export default SmurfList;