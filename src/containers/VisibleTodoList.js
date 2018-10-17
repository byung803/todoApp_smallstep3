import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, visibilityFilter, removeTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleFilter = (todos, filter) => {
    switch (filter) {
        case visibilityFilter.SHOW_ALL:
            return todos;
        case visibilityFilter.SHOW_ACTIVE:
            return todos.filter((todo) => (
                !todo.completed
            ))
        case visibilityFilter.SHOW_COMPLETED:
            return todos.filter((todo) => (
                todo.completed
            ))
    }
}


const mapStateToProps = (state) => ({
    todos: getVisibleFilter(state.todos, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);