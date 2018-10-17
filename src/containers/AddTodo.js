import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    state = { value: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState(() => ({ value: '' }));
    }

    handleInput = (e) => {
        const value = e.target.value;
        this.setState(() => ({ value }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInput} value={this.state.value} />
                <button type="submit">Add Todo</button>
            </form>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);