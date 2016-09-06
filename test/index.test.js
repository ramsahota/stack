var main = require('../index.js');
var assert = require('assert');

describe('testing stack', function () {
    it('we can push to an empty stack', function () {
        var st = main.StackConstructor();
        st.push(3);
        assert.equal(st.arr[0],3);
    });
});