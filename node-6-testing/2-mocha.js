var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function () {
    describe('when used synchronously', function () {
        it('should double even numbers correctly', function () {
            fun.evenDoublerSync(2).should.equal(4);
        });

        it.skip('should throw on odd number', function (done) {
            (function () {
                fun.evenDoublerSync(3)
            }).should.throw(/Odd/);
            done();
        });
    });

    describe('when used asynchronously', function (done) {
        it('should doulbe even numbers correctly', function () {
            fun.evenDoubler(2, function (err, results) {
                should.not.exist(err);
                results.should.equal(4);
                //done();
            });
        })

        it('should return error on odd numbers', function (done) {
           fun.evenDoubler(3, function (err, results) {
               should.exist(err);
               should.not.exist(results);
               done();
           }); 
        });

    });

});