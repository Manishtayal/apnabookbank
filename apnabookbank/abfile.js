function save() {
    document.getElementById("vv").innerHTML=""
    // var strj=""
    var arr = []
    arr = JSON.parse(localStorage.getItem("key"))
    if (arr == null) {
        arr = []
    }
    var feedback = document.getElementById("txtarea").value
    arr.push(feedback)
    localStorage.setItem("key", JSON.stringify(arr))
    document.getElementById("txtarea").value = ""
    arr = JSON.parse(localStorage.getItem("key"))
    arr.forEach(function (obj, index) {
        // console.log(obj)
        let words = document.createElement("h1")
        words.innerHTML =obj
        console.log(words)
        document.getElementById("vv").append(words)
    });
    
}
function myfunction() {
    let butn = document.getElementById("topnav")
    if (butn.style.display=="block") 
    {
        butn.style.display = "none"
    }
    else{butn.style.display="block"}
}

var flag=0;
function photo(x){
flag= flag+x
slideshow(flag)
}
function slideshow(num){
let single=document.getElementsByClassName("single")
if(num==single.length){
flag=0;
num=0;
}
if(num<0){
flag=single.length-1
num=single.length-1}
for(let y of single){
    y.style.display="none"
}
single[num].style.display="block";
}