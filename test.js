var test = /** @class */ (function () {
    function test() {
    }
    test.prototype.getData = function () {
        return 3;
    };
    return test;
}());
var obj = new test();
var num = obj.getData();
console.log(num);
