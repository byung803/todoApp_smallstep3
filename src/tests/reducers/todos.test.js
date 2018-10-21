import todos from '../../reducers/todos';

test('should test todos reducer default state', () => {
    const state = todos(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should test ADD TODO from nothing in array', () => {
    const action = {
        type: 'ADD_TODO',
        id: 123,
        text: 'hello world'
    }
    const state = todos(undefined, action);

    expect(state).toEqual([{
        id: 123,
        text: 'hello world',
        completed: false
    }]);
})

test('should test ADD TODO from some todos', () => {
    const defaultState = [{
        id: 123,
        text: 'hello world',
        completed: false
    }];

    const action = {
        type: 'ADD_TODO',
        id: 321,
        text: 'happy coding'
    };

    const state = todos(defaultState, action);
    expect(state).toEqual([{
        id: 123,
        text: 'hello world',
        completed: false
    }, {
        id: 321,
        text: 'happy coding',
        completed: false
    }])
})

test('should test REMOVE TODO', () => {
    const defaultState = [{
        id: 123,
        text: 'hello world',
        completed: false
    }, {
        id: 321,
        text: 'happy coding',
        completed: false
    }];

    const action = {
        type: 'REMOVE_TODO',
        id: 123
    }

    const state = todos(defaultState, action);
    expect(state).toEqual([{
        id: 321,
        text: 'happy coding',
        completed: false
    }])
})

test('should test TOGGLE TODO', () => {
    const defaultState = [{
        id: 123,
        text: 'hello world',
        completed: false
    }, {
        id: 321,
        text: 'happy coding',
        completed: false
    }];

    const action = {
        type: 'TOGGLE_TODO',
        id: 321
    }

    const state = todos(defaultState, action);
    expect(state).toEqual([{
        id: 123,
        text: 'hello world',
        completed: false
    }, {
        id: 321,
        text: 'happy coding',
        completed: true
    }])
}) 