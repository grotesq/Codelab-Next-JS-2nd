import React from 'react'
import App from 'next/app'
import Link from 'next/link';
import AppContainer from '../components/AppConatiner';
import { AppProvider } from '../contexts/AppContext';

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
    const { Component, pageProps } = this.props;

    return <div>
            <AppProvider>
                <AppContainer>
                    <Component {...pageProps} />
                </AppContainer>
            </AppProvider>
        </div>


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
}

export default MyApp