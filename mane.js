const ok1= document.querySelector('#ok1');
ok1.addEventListener("click",()=>{
  alert("Hello");
  document.querySelector("#ok1").style.backgroundColor="red";
  document.querySelector("#Small").style.backgroundImage="url(10001.png)"
  // document.getElementById("Small").innerHTML="i have done";
});


// const button2=document.addEventListener("dblclick",()=>{
//   const button2=document.querySelectorAll("#Ok2").style.backgroundImage="url(yashu.png.jpg)";

// });
const Ok2=document.querySelector("#Ok2");
Ok2.addEventListener("click",()=>{
  alert("Hello");
  document.querySelector("#Ok2").style.backgroundColor="red";
  document.querySelector("#mall").style.backgroundImage="url(10002.png)"
  document.getElementById("mall").innerText='Name :Yash Verma',
  'System id:';
  
});

