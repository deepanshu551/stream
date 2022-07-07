import React,{useEffect}from 'react';
import {connect} from "react-redux";
import _ from "lodash";
import {useParams} from "react-router-dom"
import {fetchStream,editStream} from "../../actions"
import StreamForm from "./StreamForm"
const Streamedit = (props) => {
    const {id}=useParams();
    useEffect(()=>{
        props.fetchStream(parseInt(id))
    },[])
    let stream;
const onSubmit=(formValues)=>{

    props.editStream(parseInt(id), formValues);
}
    const renderDetails=()=>{

        stream=props.streams.find(f=>f.id===parseInt(id));
    }
    return (
        <div>
            <h3>Edit Stream</h3>
          
            {renderDetails()}

            <StreamForm initialValues={_.pick(stream,'title','description')} onSubmit={onSubmit}/>
        </div>
    );
}
const mapStateToProp=(state)=>{

    return {streams:Object.values(state.streams)}
}
export default connect(mapStateToProp,{fetchStream,editStream})(Streamedit);
