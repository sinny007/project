function send(){
 let msg=document.getElementById("msg").value;
 let reply="Gojo: ฉันคือผู้ใช้คุณไสยที่แข็งแกร่งที่สุด 😎";

 if(msg.includes("Sukuna")) reply="Sukuna: มนุษย์ช่างน่ารำคาญ...";
 if(msg.includes("ชื่อ")) reply="ฉันคือ Gojo Satoru";

 document.getElementById("chat").innerHTML+=`<p>You: ${msg}</p><p>${reply}</p>`;
}