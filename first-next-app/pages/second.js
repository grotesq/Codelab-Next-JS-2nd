import Nav from '../components/nav';
import Head from 'next/head';

// JSX : Javascirpt + XML
export default () => <div>
    <Head>
        <title>2nd page</title>
    </Head>

    <Nav/>

    2nd Page

    <button className="btn btn-primary">Button</button>
</div>
// http://localhost:3000/second
