var mybutton=document.getElementById("scTop");function scrollFunction(){document.body.scrollTop>150||document.documentElement.scrollTop>150?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};
var toggle=document.getElementById("toggle"),content=document.getElementById("content");
function fungsiSearch() {var element = document.getElementById("Query-input");element.classList.toggle("mystyle")};
function myMenu(){document.getElementById("PageList1").classList.toggle("shwx")}toggle.addEventListener("click",function(){content.style.display=(content.dataset.toggled^=1)?"block":"none"});
function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#modeSwitch").classList.add("dark-mode"):document.querySelector("#modeSwitch").classList.remove("dark-mode")};
function copyFunction(){document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("share-notif").innerHTML="<span>Link copied!</span>" };
