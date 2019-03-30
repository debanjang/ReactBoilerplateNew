import React from 'react';

var isAdmin = true;

//Higher order component that takes in a component and returns a modifed component
//We are restricted to only highjacking the render method of the passed in Component here
//since we are extending React.Component
/* var adminComponent = (Component)=>{
    return class Admin extends React.Component{
        render() {
            if(isAdmin){
                return (
                    <div className="callout secondary">
                        <p className="alert label">For Admin only</p>
                        <Component {...this.props}/>
                    </div>
                );
            }else{
                return null;
            }
        }
    };
}; */


//Higher order component that takes in a component and returns a modifed component
//We can modify any method or life-cycle callback of the passed in component since we are
//extending the component directly. We are no longer restricted to only highjacking 
//the render method of the passed in Component
var adminComponent = (Component)=>{
    return class Admin extends Component{
        //Overriding LifeCycle method of Component passed
        componentDidUpdate(){
            console.log("Admin Component did update");

            if(super.componentDidUpdate){
                super.componentDidUpdate();
            }
        }
        
        render() {
            if(isAdmin){
                return (
                    <div className="callout secondary">
                        <p className="alert label">For Admin only</p>
                        {super.render()}
                    </div>
                );
            }else{
                return null;
            }
        }
    };
};

class ComponentTwo extends React.Component {
    
    componentDidUpdate() {
        console.log("ComponentTwo did update");
    }

    constructor(props){
        super(props);
        this.state = {
            count: props.count
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
            <div>
                <h3> Component Two created in es6 way of React.Component</h3>
                <p>Count is: {this.state.count}</p>
                <button className="button" onClick={this.onClick}>Button Two</button>
            </div>
        );
    }
};

//We can set the default props on the class after the definition of the same
ComponentTwo.defaultProps = {
    count: 10
};

ComponentTwo.propTypes = {
    count: React.PropTypes.number
}


export default adminComponent(ComponentTwo);
