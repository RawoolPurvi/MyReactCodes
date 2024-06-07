import React from "react";

export class Greeting extends React.Component{
    static defaultProps: { name: string; };
    render(){
        return(
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

Greeting.defaultProps = {
    name:'Stranger'
};
// const root = ReactDom.createRoot(document.getElementById('example'));
// root.render(<Greeting/>);