import React from 'react';

function Car(props) {

    return(
        <div>
            {props.year} {props.make} {props.model}
        </div>
    );
}

export default Car;
