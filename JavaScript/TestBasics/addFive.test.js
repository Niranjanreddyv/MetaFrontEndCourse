const addFive = require('./index.js');

test('add plus 5 to the given value ', ()=>{
    expect(addFive(5)).toBe(10);
})

test('add plus 5 to the given value ', ()=>{
    expect(addFive('1')).toBe('15');
})
test('add plus 5 to the given value ', ()=>{
    expect(addFive(-1)).toBe(4);
})