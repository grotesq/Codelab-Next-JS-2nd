import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import _ from 'underscore';

function generate() {
  let numbers = [];
  _.times( 45, n => numbers.push( n + 1 ) );
  numbers = _.shuffle( numbers );
  numbers.length = 6;
  return numbers;
}

const Home = () => {
  const [ list, setList ] = React.useState( [] );
  const regenerate = () => {
    // state에 값 넣기
    setList( generate() );
  }
  React.useEffect( () => {
    // mount, update
    regenerate();
  }, [] ); // 주시할 대상
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className='container'>
        <div>
          { list.map( element => <span>{ element + ' ' }</span> ) }
        </div>

        <div>
          <button onClick={ regenerate }>재생성</button>
          {/* <button onClick={ () => setList( generate() ) }>재생성</button> */}
        </div>
      </div>

      {/* scope */}
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Home
