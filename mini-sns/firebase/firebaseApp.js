const firebase = require( 'firebase/app' );
// 필요한 서비스를 추가 로드
require( 'firebase/firestore' );
require( 'firebase/auth' );

let app;

try {
    app = firebase.initializeApp( require( './firebaseConfig' ) );
}
catch( error ) {
    app = firebase.app();
}

module.exports = app;