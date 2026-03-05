function domainExpansion(){
 const d=document.createElement("div");
 d.className="domain";
 document.body.appendChild(d);
 setTimeout(()=>d.remove(),3000);
}