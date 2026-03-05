// Scroll Top
const btn=document.getElementById("topBtn");
btn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

// Modal Projects
function openModal(text){
 document.getElementById("modal").style.display="flex";
 document.getElementById("modalText").innerText=text;
}
function closeModal(){
 document.getElementById("modal").style.display="none";
}

// Contact Form API
document.getElementById("contactForm").addEventListener("submit", async(e)=>{
 e.preventDefault();
 const data={name:name.value,email:email.value,message:message.value};

 await fetch("/contact",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(data)
 });

 status.innerText="Message Sent!";
});