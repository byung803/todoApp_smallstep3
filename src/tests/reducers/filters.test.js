import filter from '../../reducers/filter';

test('should test filter default init@@', () => {
    const state = filter(undefined, { type: '@@INIT' })
    expect(state).toBe('SHOW_ALL');
})

test('should test filter reducer', () => {
    const state = filter(undefined, { type: 'SET_VISIBILITY_FILTER', filter: 'SOMETING_ELSE' });
    expect(state).toBe('SOMETING_ELSE');
})