//your JS code here. If required.
let submitBtn=document.getElementById("submit");
const rememberBtn=document.getElementById("existing");
const checkbox=document.getElementById("checkbox");
const username=document.getElementById("username");
const pass=document.getElementById("password");

window.addEventListener("DOMContentLoaded",()=>{
	const savedUserName=localStorage.getItem("username");
	const savedPassword=localStorage.getItem("password");

	if(savedUserName && savedPassword){
		rememberBtn.classList.remove('hide');
	}
})

submitBtn.addEventListener("click",(e)=>{
	e.preventDefault();

	let userName=username.value.trim();
	let passWord=pass.value.trim();
	
	alert(`Logged in as ${userName}`);
	
	if(checkbox.checked){
		localStorage.setItem("username", userName);
		localStorage.setItem("password", passWord);
		rememberBtn.classList.remove('hide');
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		rememberBtn.classList.add('hide');
	}
});

rememberBtn.addEventListener("click",()=>{
	const savedUserName=localStorage.getItem("username");
	if(savedUserName){
		alert(`Logged in as ${savedUserName}`);
	}
});







