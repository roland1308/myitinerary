import React, { Component } from 'react'
import Loading from "../components/Loading";


export default class StoreToken extends Component {


    componentDidMount= () => {
        const token = (this.props.location.search.substring(7));
        console.log("TOKEN", token);
        window.localStorage.setItem("token", token);
        this.props.history.push("/");
    }
    
    render() {
        return (
            <div>
<Loading />
            </div>
        )
    }
}
