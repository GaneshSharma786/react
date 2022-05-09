import React from 'react';
class First extends React.Component{
    render(){
        return(
            <div>
                <h1 onClick= {function() { console.log('click');}}>First component from {this.props.name} age is {this.props.age}</h1>
            </div>
        );
    }
}
export default First;