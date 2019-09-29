import React from 'react';
import { useRouter } from 'next/router';
import firebaseApp from '../firebase/firebaseApp';
import { withAppContext } from '../contexts/AppContext';
import Nav from '../components/nav';
import Head from 'next/head';

const db = firebaseApp.firestore();

let Feed = ( props ) => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <>
            <Head>
                <title>{ props.data.displayName }님의 피드</title>
                <meta type="title" content={ props.data.displayName + '님의 피드' }/>
                <meta type="description" content={ props.data.content }/>
                <meta type="keyword" content="SNS, Social Media, 소셜 미디어"/>
                <meta property="og:url" content={ 'https://domain.com' + '/feed/' + id } />

                <meta type="og:title" content={ props.data.displayName + '님의 피드' }/>
            </Head>
            <Nav/>
            <div className="card">
                <div className="card-body">
                    { props.data.content }

                    <br/>
                    <span>
                        <img src={ props.data.avatar } style={{ height: '1.2em' }}/>
                        { props.data.displayName }
                    </span>
                </div>
            </div>
        </>
    )
}

// 서버사이드 렌더링 & SPA 라우팅
Feed.getInitialProps = async context => {
    const docRef = await db.collection('feeds')
        .doc( context.query.id )
        .get();
    const data = docRef.data();
    console.log( 'doc data', data );
    return {
        data,
    };
}

Feed = withAppContext( Feed );

export default Feed;