window.onload = ()=>{
 const msg = new SpeechSynthesisUtterance("Welcome to Ken Jujutsu Portfolio");
 msg.lang="en-US";
 msg.rate=0.9;
 speechSynthesis.speak(msg);
}