import { Component } from 'react';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.input_metadata.reduce(function (acc, val) {
            return { ...acc, [val.name]: '' };
        }, {});

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        return this.props.children(this.state, this.handleChange);
    }


}


export default Form;