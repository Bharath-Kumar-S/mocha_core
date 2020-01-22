const should = require('chai').should();
const assert = require('chai').assert;
const expect = require('chai').use(require('chai-as-promised')).expect;

const api = require('./libs');

before(() => {
    // console.log('Before suite global')
})

after(() => {
    // console.log('After suite global')
})

describe('Sample tests', () => {

    before(() => {
        // console.log('Before test suite');
    })

    beforeEach(() => {
        // console.log('Before each test');
    })

    it('sample spec', () => {
        assert.equal([1, 2, 3, 4].indexOf(4), 3);
    })

    it('sample spec with done callback', (done) => {
        let foo = 'abc';
        foo.should.have.length(3)

        assert.equal([1, 2, 3].indexOf(4), -1);
        done();
    })

    afterEach(() => {
        // console.log('After each test');
    })

    after(() => {
        // console.log('AFter test suite');
    })

})

describe('Using assert,expect and should from chai', () => {

    let foo = 'bar', beverages = { tea: ['chai', 'matcha', 'oolong'] };

    it('assert chai tests', () => {
        assert.typeOf(foo, 'string'); // without optional message
        assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
        assert.equal(foo, 'bar', 'foo equal `bar`');
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    })

    it('expect chai tests', () => {
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    })

    it('should chai tests', () => {
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);

    })

})

describe('Async based tests', () => {

    it('Using async await', async () => {
        let a = await api.getname();
        expect(a).to.equal('Bharath');
    })

    it('Using promised expects', () => {
        expect(api.getname()).eventually.to.equal('Bharath');
    })

    it('Using the then callback', (done) => {
        new Promise((resolve) => {
            assert.ok(true);
            resolve();
        }).then(done);
    });

    it('Using the promise to resolve done callback', () => {
        return new Promise((resolve) => {
            assert.ok(true);
            return resolve();
        })
    });

    it('Set the Timeout for the test', function (done) {
        // arrow functions change the this context
        this.timeout(5000);
        setTimeout(() => {
            done();
        }, 4000)
    })

})

describe('Pending, exclusive, inclusive tests',()=>{

    //pending
    it('should return -1 when the value is not present');
    
    //skipped
    it.skip('This test would be skipped',()=>{
        assert.equal(2,2);
    })

})


