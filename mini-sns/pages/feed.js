import React from 'react';
import { useRouter } from 'next/router';
import firebaseApp from '../firebase/firebaseApp';
import { withAppContext } from '../contexts/AppContext';

const db = firebaseApp.firestore();

let Feed = ( props ) => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <>
            { props.data.content }
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