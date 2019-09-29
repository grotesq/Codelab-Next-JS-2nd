import React from 'react';
import FeedForm from '../components/FeedForm';
import axios from 'axios';
import firebaseApp from '../firebase/firebaseApp';
import Link from 'next/link';
import { withAppContext } from '../contexts/AppContext';
import Nav from '../components/nav';
import Head from 'next/head';

const db = firebaseApp.firestore();

class Feeds extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            list: props.list
        }
    }
    componentDidMount() {
        db.collection('feeds').onSnapshot( result => {
            const list = [];
            result.forEach( doc => {
                list.push( { id: doc.id, ...doc.data() } );
            } );
            this.setState({ list });
        } );
    }
    render() {
        return <>
            <Head>
                <title>피드 목록</title>
                <meta type="title" content="피드 목록"/>
                <meta type="keyword" content="SNS, Social Media, 소셜 미디어"/>
            </Head>
            <Nav/>
            { this.props.context.user && (
                <div className="mb-4">
                    <FeedForm/>
                </div>
            ) }
            <ul className="list-unstyled row">
                { this.state.list.map( item => {
                    return (
                        <li className="card col-3" key={ item.id }>
                            <div className="card-body">
                                <p>
                                    <Link href={ '/feed?id=' + item.id }
                                        as={ '/feed/' + item.id }>
                                        <a>{ item.content }</a>
                                    </Link>
                                    <br/>
                                    <span>
                                        <img src={ item.avatar } style={{ height: '1.2em' }}/>
                                        { item.displayName }
                                    </span>
                                    <br/>
                                    <small>{ item.created_at }</small>
                                </p>
                            </div>
                            
                        </li>
                    )
                })}
                
            </ul>
        </>
    }
}

// next.js 
Feeds.getInitialProps = async () => {
    const response = await axios.get( 'http://localhost:3000/api/feeds' );

    return {
        list: response.data,
    };
}

Feeds = withAppContext( Feeds );

export default Feeds;