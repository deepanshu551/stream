import React,{useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {fetchStreams} from "../../actions";
import {connect} from "react-redux"
const Streamshow = (props) => {
    
useEffect(()=>{
    props.fetchStreams()
},[])

if(!props.stream){
    return <div>...Loading</div>
}
    return (
        <div>
            <h1>            {props.stream?.title}
</h1>
<h5>{props.stream?.description} </h5>
        </div>
    );
}

const mapStateToProp=(state,ownProps)=>{
return {stream:state.streams[parseInt(ownProps.match.params.id)]}
}

export default withRouter(connect(mapStateToProp,{fetchStreams})(Streamshow));
