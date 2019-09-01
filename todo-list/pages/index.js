import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {
  const [ list, setList ] = React.useState( [] );
  const addItem = () => {
    let todoList = localStorage.getItem( 'todo-list' );
    if( todoList ) {
      todoList = JSON.parse( todoList );
    }
    else {
      todoList = [];
    }
    
    todoList.push( {
      id: new Date().getTime().toString(),
      content: '할 일 목록 ' + Math.random()
    } );

    localStorage.setItem('todo-list', JSON.stringify( todoList ) );
    load();
  }

  const load = () => {
    let list = localStorage.getItem('todo-list')
    if( list ) list = JSON.parse( list )
    else list = [];
    
    setList( list );
  }

  // componentDidMount와 동일하게 동작하는 useEffect
  React.useEffect(() => {
    load();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Nav />

      <div className="container">
        <ul>
          { list.map( item => (
            <li key={ item.id }>{ item.content }</li>
          ) ) }
        </ul>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control"/>
          </div>
          <div className="form-group">
            <button className="btn btn-white" onClick={ addItem }>추가</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
