import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count1 : 1,
        }
    }
    render(){
        const {name,Location} = this.props;
        const {count,count1} = this.state;
        return(
            <div className="user-card">
                <h1>count : {count} + {count1}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : {Location}</h3>
                <h4>Contact : 9704854659</h4>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                        count1 : this.state.count1+1,
                    })
                }}>click me</button>
            </div>
        )
       
    }
}

export default UserClass;