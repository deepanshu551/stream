import React from 'react';
import {Link} from "react-router-dom";
import Googleauth from './GoogleAuth';
 
const Headers = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamy</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Stream
                </Link>
                <Googleauth/>
            </div>
        </div>
    );
}

export default Headers;
