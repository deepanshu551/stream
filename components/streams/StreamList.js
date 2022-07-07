import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import {Link} from "react-router-dom";
const Streamlist = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId === props.currentUserId) {
      return (

        <div className="right floated content">
            <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
            <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>

        </div>
      )
    }
  };
  return (
    <div>
      <h1>Streams</h1>
      <div className="ui celled list">
        {props.streams?.map((m) => (
          <div className="item" key={m.id}>
                 {renderAdmin(m)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              <Link to={`/streams/show/${m.id}`} className="header">{m.title}</Link>
              <div className="description">{m.description}</div>
            </div>
         
          </div>
        ))}
      </div>
{      props.isSignedIn&&<div style={{textAlign:"right"}}><Link to="/streams/new" className="ui button default right float">Create new Stream</Link></div>
}    </div>
  );
};
const mapStateToProp = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn:state.auth.isSignedIn
  };
};
export default connect(mapStateToProp, { fetchStreams })(Streamlist);
