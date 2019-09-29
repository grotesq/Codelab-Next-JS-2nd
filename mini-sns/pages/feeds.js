import React from 'react';
import FeedForm from '../components/FeedForm';
import axios from 'axios';
import firebaseApp from '../firebase/firebaseApp';
import Link from 'next/link';
import { withAppContext } from '../contexts/AppContext';

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
            { this.props.context.user && (
                <div>
                    <FeedForm/>
                </div>
            ) }
            <ul>
                { this.state.list.map( item => {
                    return (
                        <li key={ item.id }>
                            <p>
                                <Link href={ '/feed?id=' + item.id }
                                      as={ '/feed/' + item.id }>
                                    <a>{ item.content }</a>
                                </Link>
                                <br/>
                                <small>{ item.created_at }</small>
                            </p>
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