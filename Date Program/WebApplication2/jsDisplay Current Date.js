function displayDateForm(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
        today = mm + '-' + dd + '-' + yyyy;
        document.getElementById("form1").textContent = today
        today = mm + '/' + dd + '/' + yyyy;
        document.getElementById("form2").textContent = today
        today = dd + '-' + mm + '-' + yyyy;
        document.getElementById("form3").textContent = today
        today = dd + '/' + mm + '/' + yyyy;
        document.getElementById("form4").textContent = today
}