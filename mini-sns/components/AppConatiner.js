import React from 'react';
import { withAppContext } from '../contexts/AppContext';
import firebaseApp from '../firebase/firebaseApp';

class AppContainer extends React.Component {
    render() {
        return(
            <>
                { this.props.children }
            </>
        );
    }

    componentDidMount() {
        firebaseApp.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token.
              var token = result.credential.accessToken;
            }
            var user = result.user;
            console.log( 'getRedirectResult', user );
          });
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              // ...
              if( user.providerData.length ) {
                console.log( 'user', user );
              }
              else {
                console.log( 'anonymous user', user );
                this.props.context.update( {
                    user,
                } );
              }
            } else {
              // User is signed out.
              // ...
            }
            // ...
          });
        // firebaseApp.auth().signInAnonymously();
      }
}

AppContainer = withAppContext( AppContainer );

export default AppContainer;