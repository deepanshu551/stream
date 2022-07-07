import React,{useEffect} from 'react';
import Modal from "../Modal";
import history from "../../history";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchStream,deleteStream} from "../../actions"

const Streamdelete = (props) => {
console.log(props)
    

useEffect(()=>{props.fetchStream(parseInt(props.match.params.id))},[])
    const actions=(

    <React.Fragment>
        <button className="ui button negative" onClick={()=>props.deleteStream(parseInt(props.match.params.id))}>Delete</button>
        <button className="ui button " onClick={()=>history.push("/")}>Cancel</button>
    </React.Fragment>
    )
    return (
        <div>
            StreamDelete
            <Modal title="Delete Strem" content={`Are you sure you want to delete '${props.stream?.title}'?`} actions={actions} onDismis={()=>history.push("/")}/>
        </div>
    );
}
const mapStateToProp=(state,ownProp)=>{
console.log(ownProp)
    return {stream:state.streams[parseInt(ownProp.match.params.id)]}
}
export default withRouter(connect(mapStateToProp,{fetchStream,deleteStream})(Streamdelete));
