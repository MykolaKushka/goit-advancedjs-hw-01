import"./assets/styles-CxfezlBt.js";const e={email:"",message:""},s=document.querySelector(".feedback-form");window.addEventListener("load",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email||"",e.message=t.message||"",s.elements.email.value=e.email,s.elements.message.value=e.message}});s.addEventListener("input",a=>{const{name:t,value:m}=a.target;e[t]=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});s.addEventListener("submit",a=>{a.preventDefault();const{email:t,message:m}=e;if(t===""||m===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",s.reset()});
//# sourceMappingURL=2-form.js.map