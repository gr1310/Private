wrongans= document.querySelectorAll(".wrong");
wrongans[0].addEventListener("click", function(){
    alert("Wrong answer!!!!!");
});
wrongans[1].addEventListener("click", function(){
    alert("I am not that freee... veryy Wrong answer!!!!!");
});

correct_ans= document.querySelector(".true").addEventListener("click",function(){
    alert("Yesssss!!! Get jealoussss idccc!!!");
    window.open("../images/image6.jpeg",'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px');
});

ans= document.querySelector(".kinda").addEventListener("click",function(){
    alert("Huh, no 😛");
});