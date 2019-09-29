import React from 'react'
import Link from 'next/link'
import firebase from 'firebase';
import firebaseApp from '../firebase/firebaseApp';
import { withAppContext } from '../contexts/AppContext';

let Nav = props => {
  const googleLogin = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebaseApp.auth().signInWithPopup(provider);
      // firebaseApp.auth().signInWithRedirect(provider);
  }
  return(
    <nav>
      <ul>
        <li>
          <Link href='/feeds'>
            <a>피드 목록</a>
          </Link>
        </li>
        <li>
          { props.context.user && (
              <>
                { props.context.user.displayName }
              </>
          ) }
          { !props.context.user && (
              <button className="btn btn-white" onClick={ googleLogin }>
                로그인
              </button>
          ) }
          
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  )
}

Nav = withAppContext( Nav );

export default Nav
