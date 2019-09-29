import React from 'react';
import firebase from 'firebase';
import firebaseApp from '../firebase/firebaseApp';

export default () => {
    const [ uid, setUid ] = React.useState( '' );
    const getAnonymousUser = async () => {
        firebaseApp.auth().signInAnonymously();
    }
    React.useEffect( () => {
        firebaseApp.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
              // This gives you a Google Access Token.
              var token = result.credential.accessToken;
            }
            var user = result.user;
            console.log( 'getRedirectResult', user );
          });
        firebaseApp.auth().onAuthStateChanged(function(user) {
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
              }
              setUid( user.uid );
            } else {
              // User is signed out.
              // ...
            }
            // ...
          });
        getAnonymousUser();
    }, [] );
    const gooleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        // firebaseApp.auth().signInWithPopup(provider);
        firebaseApp.auth().signInWithRedirect(provider);
    }
    return (
        <>
            <h1>Auth</h1>
            <p>uid : { uid }</p>
            <div>
                <button onClick={ gooleLogin }>Google Login</button>
            </div>
            <div>
                <button>Facebook Login</button>
            </div>
            <div>
                <button>Twitter Login</button>
            </div>
        </>
    )
}
