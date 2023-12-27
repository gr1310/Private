myimg= document.querySelector(".card1");
document.querySelector(".card1").addEventListener("click",function(){
    alert("So you clicked on it huh!");
    alert("I'll flexx this now, I know this too😛");
    window.open("./images/image3.jpg",'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px')
    // myimg.src= "./images/image3.jpg";
    setTimeout(function(){
        myimg.src= "./images/image3.jpg";
        myimg.width= 250;
        myimg.height= 250;
    },1000);
    
});
myimg2= document.querySelector(".card2");
myimg2.addEventListener("click",function(){
    alert("Okayy so now this one <3");
    // myimg2.src= "./images/image4.jpeg";
    setTimeout(function(){
        myimg2.src="./images/image4.jpeg";
        myimg2.width= 250;
        myimg2.height= 250;
    },1000);
});
myimg3= document.querySelector(".card3");
myimg3.addEventListener("click",function(){
    alert("You won't be disappointed!");
    myimg3.src= "./images/image7.jpg";
});

myimg4= document.querySelector(".card4");
myimg4.addEventListener("click",function(){
    alert("Done teasing you!");
    myimg4.src= "./images/image0.jpeg";
});

