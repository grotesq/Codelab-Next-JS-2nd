import { useRouter } from 'next/router';

export default () => {
    const router = useRouter();
    console.log( 'query', router.query );
    return (
        <>
            Feed
        </>
    )
}