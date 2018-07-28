function loadjson(file,callback) {
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
      if (xhr.readyState ===4 && xhr.status===200){
      	callback(xhr.responseText);
      }
	}
	xhr.send();
}
loadjson("data.json",function (text){
	let data=JSON.parse(text);
	console.log(data);
	basic(data.details);
	edu(data.education);
	skill(data.skills);
	carr(data.career);
})
 var main=document.querySelector(".main");
var left=document.createElement("div");
left.classList.add("left");
main.appendChild(left);
function basic(basicdetails){
var image=document.createElement("img");
image.src=basicdetails.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=basicdetails.name;
left.appendChild(name);
var email=document.createElement("h2");
email.textContent=basicdetails.email;
left.appendChild(email);
var phone=document.createElement("h2");
phone.textContent=basicdetails.phone;
left.appendChild(phone);
}
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
function edu(education){
	var e=document.createElement("h1");
	e.textContent="educational details";
	right.appendChild(e);
	e.appendChild(document.createElement("HR"));
	var  un=document.createElement("ul");
	e.appendChild(un);
	for (var i =0; i<education.length;i++) {
		var l1=document.createElement("h2");
		l1.textContent=education[i].course;
		un.appendChild(l1);
		var l2=document.createElement("li");
		l2.textContent=education[i].college;
		un.appendChild(l2);
		var l3=document.createElement("li");
		l3.textContent=education[i].percentage;
		un.appendChild(l3);
        var l4=document.createElement("li");
		l4.textContent=education[i].branch;
		un.appendChild(l4);
        var l5=document.createElement("li");
		l5.textContent=education[i].school;
		un.appendChild(l5);
    }
}
function skill(skilldata){
	 var s=document.createElement("div");
	 s.classList.add("sset");
	 right.appendChild(s);
	 var head=document.createElement("h1");
	 head.textContent="skill set";
	 s.appendChild(head);
     s.appendChild(document.createElement("HR"));
     var t=document.createElement("table");
     var tabledata="";
     for (i=0;i<skilldata.length;i++){
     	tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
        t.innerHTML=tabledata;
     }
     head.appendChild(t);


}
function carr(career){
var d=document.createElement("div");
d.classList.add("career");
right.appendChild(d);
var e=document.createElement("h1");
e.textContent="career objective";
d.appendChild(e);
d.appendChild(document.createElement("HR"));
var para=document.createElement("p");
para.textContent=career.co;
e.appendChild(para);

}
