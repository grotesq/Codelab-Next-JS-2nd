import React from 'react';
import axios from 'axios';

export default () => {
    const [ content, setContent ] = React.useState('');
    const submit = () => {
        axios.post('/api/feeds', {
            content,
        } )
        .then( () => {
            setContent( '' );
        } )
        .catch( error => {
            console.log( error );
            alert( error.message );
        } );
    }
    return (
        <>
            <div className="form-inline">
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        value={ content }
                        onChange={ event => setContent( event.target.value ) }/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary"
                            onClick={ submit }>전송</button>
                </div>
            </div>
        </>
    )
}