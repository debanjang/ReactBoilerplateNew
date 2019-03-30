import React from 'react';

var ComponentOne = React.createClass({
    
    getInitialState: function(){
        return {
            count: this.props.count
        };
    },

    getDefaultProps: function(){
        return {
            count: 10
        }
    },

    propTypes: {
        count: React.PropTypes.number
    },

    onClick(){
        this.setState({count: this.state.count+1});
    },
    
    render:  function(){
        return (
            <div>
                <h3> Component One created with es5 way of React.createClass </h3>
                <p>Count is: {this.state.count}</p>
                <button className="button" onClick={this.onClick}>Button One</button>
            </div>
        );
    }
});

export default ComponentOne;