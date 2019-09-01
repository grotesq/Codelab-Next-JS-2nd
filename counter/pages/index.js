import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

// state
const Home = () => {
  // const [ 읽기전용, 쓰기전용 ] = useState( 기본값 );
  const [ count, setCount ] = useState( 0 );
  const addCount = () => {
    setCount( count + 1 );
  }
  const [ tab, setTab ] = useState( 'tab1' );
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      count: { count }

      <div>
        <button onClick={ addCount }>Add count</button>
      </div>

      <div>
        <button onClick={ () => setTab( 'tab1' ) }>Tab 1</button>
        <button onClick={ () => setTab( 'tab2' ) }>Tab 2</button>
        <button onClick={ () => setTab( 'tab3' ) }>Tab 3</button>
      </div>

      {/* JSX 조건 분기 */}
      { tab === 'tab1' && (
        <p>Content 1</p>
      ) }
      { tab === 'tab2' && (
        <p>Content 2</p>
      ) }
      { tab === 'tab3' && (
        <p>Content 3</p>
      ) }
    </div>
  )
}

export default Home
