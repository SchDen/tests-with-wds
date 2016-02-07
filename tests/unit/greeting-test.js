/* global describe, it */
import {assert} from 'chai';
import Greeting from 'js/greeting';

describe('Greeting tests', () => {
    it('Make hello world', () => {
        assert.equal('Hello World!', Greeting.makeHello('World'));
    });

    it('Check register', () => {
        assert.notEqual('Hello World!', Greeting.makeHello('world'));
    });
});
