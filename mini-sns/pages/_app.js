import React from 'react'
import App from 'next/app'
import Link from 'next/link';
import AppContainer from '../components/AppConatiner';
import firebaseApp from '../firebase/firebaseApp';

// 실제 앱의 엔트리 포인트
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  state = {
      user: null,
  }

  render() {
    const { Component, pageProps } = this.props
    if( this.state.user ) {
        return <div>
            <AppContainer>
                <Component {...pageProps} />
            </AppContainer>
        </div>
    }
    else {
        return <>
            Loading user data...
        </>
    }
    
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
            this.setState({ user });
          }
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });
    firebaseApp.auth().signInAnonymously();
  }
}

export default MyApp