for (var i = 1; i <= 50; i++) {
    console.log("Iteration:", i);
}
var a = 1;
while (a <= 50) {
    console.log("While Loop", a);
    a++;
}
var Strings = "Hello";
var Number1 = 12;
var isValid = true;
console.log(Strings, Number1, isValid);
if (Number1 < 10) {
    console.log("It is Lesser!");
}
else {
    console.log("Its Gt=reater!");
}
function multiplier(ab, cd) {
    if (ab === void 0) { ab = 2; }
    if (cd === void 0) { cd = 4; }
    return ab * cd;
}
