import React from 'react';
import firebase from 'firebase';
import firebaseApp from '../firebase/firebaseApp';

export default () => {
    const [ uid, setUid ] = React.useState( '' );
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
