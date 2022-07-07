import React, { Component } from 'react';
import {signIn,signOut} from "../actions";
import {connect} from "react-redux";
class Googleauth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'733686720494-ule970pfun40l7kkj2vl2a8od67nujp3.apps.googleusercontent.com',
                scope:'email',
                plugin_name: "streamy",
            }).then(()=>{

                this.auth=window.gapi.auth2.getAuthInstance();
this.onAuthChange(this.auth.isSignedIn.get())         
         this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });

    }
onSignIn=()=>{
this.auth.signIn()
}
onSignOut=()=>{
    this.auth.signOut()

}
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut()
        }
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return <div> I dont know if we are signed in</div>
        }
        else if(this.props.isSignedIn){
            return <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/>
                Sign Out
            </button>
        }
        else{
            return <button onClick={this.onSignIn} className="ui blue google button">
            <i className="google icon"/>
            Sign In with Google
        </button>
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}            </div>
        );
    }
}
const mapStateToProp=(state)=>{

    return {
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProp,{signIn,signOut})(Googleauth);
