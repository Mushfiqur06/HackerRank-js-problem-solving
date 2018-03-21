function isPositive(a) {
    if(a > 0)
        return "YES";
    throw a == 0 ? Error("Zero Error") : Error("Negative Error");
}
console.log(isPositive(1));