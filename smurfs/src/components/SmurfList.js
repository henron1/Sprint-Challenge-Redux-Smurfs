import React from 'react';

function SmurfList(props) {
    return (
        <div>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                   <h2>{smurf.name} </h2> 
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                </div>
            ))}

        </div>
    )
}

export default SmurfList;