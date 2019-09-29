import React from 'react';

class AppContainer extends React.Component {
    render() {
        return(
            <>
                { this.props.children }
            </>
        );
    }
}

export default AppContainer;