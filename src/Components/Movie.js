import React from 'react';

class Movie extends React.Component {

    render() {

        return(
            <div>
                {this.props.title} by {this.props.actor}
            </div>
        );
    }
}

export default Movie;
