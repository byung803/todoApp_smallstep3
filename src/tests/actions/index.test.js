import { addTodo, removeTodo, setVisibilityFilter, toggleTodo } from '../../actions/index';

test('should test addTodo action generator', () => {
    const text = 'test text';
    expect(addTodo(text)).toEqual({
        type: 'ADD_TODO',
        id: expect.any(Number),
        text
    })
});

test('should test removeTodo action generator', () => {
    const id = 123;
    expect(removeTodo(id)).toEqual({
        type: "REMOVE_TODO",
        id
    })
});

test('should test setVisibilityFilter action generator', () => {
    const filter = 'FILTER';
    expect(setVisibilityFilter(filter)).toEqual({
        type: 'SET_VISIBILITY_FILTER',
        filter
    })
});

test('should test toggleTodo action generator', () => {
    const id = 1234;
    expect(toggleTodo(id)).toEqual({
        type: 'TOGGLE_TODO',
        id
    })
})