function square(a){
    let result = a*a;
    return result;
}
function area(a){
    let result = a * a *3.14;
    return result;
}
function perimeter(d){
    let result = d* 3.14;
    return result;
}
function factorial(number) {
    let result =number;
    if (number===0 || number===1){
        result=1;
        return result;
    }else {
        while (number>1){
            number--;
            result *=number;
        }
return result
    }
}
function checkInput(text) {
    if (text % text===0){
        return true;
    }else {
        return false;
    }
}
function checkMax(x,y,z){
    let max =x;
    if (y>x&&y>z){
        max= y;
    }else if(z>x){
        max=z;
    }
    return max ;
}
function checkNumber(number){
    let result=false;
    if (number > 0 && number %1===0) {
        result= true;
    }
    return result;
}
function swap(a,b){
    let array=[a,b]
    let number=a
    for (let i=0;i<array.length;i++){
        array[i]=array[i+1]
    }
}

function bai1(){
    let number=+prompt("nhap gia tri");
    document.getElementById("resultBai1").innerHTML="Binh Phuong cua "+number+" =" +square(number);
}
function bai2(){
    let diameter= +prompt("nhap duong kinh hinh tron");
    document.getElementById("resultBai2").innerHTML="Dien Tich Hinh Tron = " +area(diameter)+"<br>"
        +"chu vi hinh tron = "+ perimeter(diameter);

}
function bai3(){
    let number= +prompt("nhap so tinh giai thua");
    document.getElementById("resultBai3").innerHTML=factorial(number);
}
function bai4(){
    let text=+document.getElementById("inputBai4").value;
    let result=checkInput(text);
    document.getElementById("resultBai4").innerHTML=result;
}
function bai5(){
    let result=checkMax(prompt("nhap1"),prompt("nhap 2"),prompt("nhap3"))
    document.getElementById("result5").innerHTML="so lon nhat trong 3 so = "+result;
}
function bai6(){
    let result = prompt("nhap");
    document.getElementById("resultBai6").innerHTML=checkNumber(result);
}
