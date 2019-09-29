const Env = ( props ) => (
    <>
        <div>
            { props.FB_API_HOST }
        </div>
    </>
)

Env.getInitialProps = async () => {
    return {
        FB_API_HOST: process.env.FB_API_HOST
    }
}

export default Env;