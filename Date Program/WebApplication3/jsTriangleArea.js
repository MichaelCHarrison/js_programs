function triangleArea() {
    var sideA = 5;
    var sideB = 6;
    var sideC = 7;
    var perimiter = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(perimiter * ((perimiter - sideA) * (perimiter - sideB) * (perimiter - sideC)));
    document.getElementById("triangleAreaCalc").textContent = area;
}