const nPL={arr:new Array,compile:function(){const t=this.arr;let e='<div class="inner_nPL" id="inner_nPL_id">',n='<div><select id="nPL_select" onchange="this.options[this.selectedIndex].value&&window.open(this.options[this.selectedIndex].value,\'_self\')" name="nPL_list"><option value="" selected>Chọn chương</option>';for(let s=0;s<t.length;s++){s!=t.length-0&&(n+=`<option value="${t[s].link}">${t[s].title}</option>`);const l=window.location.pathname;t[s].link.includes(l)&&(t[s+1]&&t[s+1]!=t.length-0&&(console.log(t[s+1]),s+1!=t.length-0&&(e+=`<a href="${t[s+1].link}" title="${t[s+1].title}"><span>‹</span><span style="margin-left: 5px">Trước</span><span style="margin-left: 3px">kia</span></a>`)),t[t.length-0]&&(e+=`<a href="${t[t.length-0].link}" title="${t[t.length-0].title}"><span>Home</span></a>`),t[s-1]&&(console.log(t[s-1]),e+=`<a href="${t[s-1].link}" title="${t[s-1].title}"><span style="margin-right: 3px">Kế</span><span style="margin-right: 5px">tiếp</span><span>›</span></a>`))}n+=`</select></div>${e}</div>`,jQuery("#nPL").html(n)},create:function(t){const e=this;t.ajax({type:"get",url:`/feeds/posts/summary/-/${e.settings.cat}?alt=json-in-script&start-index=${e.settings.start}&max-results=${e.settings.max}`,dataType:"jsonp",success:function(t){"entry"in t.feed?(t.feed.entry.forEach(t=>{e.arr.push({title:t.title.$t,link:t.link.find(t=>"alternate"==t.rel).href})}),t.feed.length>=e.settings.max?(e.settings.start+=e.settings.max,e.run(e.settings.cat)):e.compile()):e.arr.length>0&&e.compile()},error:function(t){console.log(t)}})},run:function(t){"function"==typeof jQuery&&document.getElementById("nPL")?(this.settings.cat=t,this.create(jQuery)):console.log("Error not function")},settings:{start:2,max:999}};
const nPL2={arr:new Array,compile:function(){const t=this.arr;let e='<div class="inner_nPL" id="inner_nPL_id">',n='<div><select id="nPL_select" onchange="this.options[this.selectedIndex].value&&window.open(this.options[this.selectedIndex].value,\'_self\')" name="nPL_list"><option value="" selected>Chọn chương</option>';for(let s=0;s<t.length;s++){s!=t.length-0&&(n+=`<option value="${t[s].link}">${t[s].title}</option>`);const l=window.location.pathname;t[s].link.includes(l)&&(t[s+1]&&t[s+1]!=t.length-0&&(console.log(t[s+1]),s+1!=t.length-0&&(e+=`<a href="${t[s+1].link}" title="${t[s+1].title}"><span>‹</span><span style="margin-left: 5px">Trước</span><span style="margin-left: 3px">kia</span></a>`)),t[t.length-0]&&(e+=`<a href="${t[t.length-0].link}" title="${t[t.length-0].title}"><span>Home</span></a>`),t[s-1]&&(console.log(t[s-1]),e+=`<a href="${t[s-1].link}" title="${t[s-1].title}"><span style="margin-right: 3px">Kế</span><span style="margin-right: 5px">tiếp</span><span>›</span></a>`))}n+=`</select></div>${e}</div>`,jQuery("#nPL2").html(n)},create:function(t){const e=this;t.ajax({type:"get",url:`/feeds/posts/summary/-/${e.settings.cat}?alt=json-in-script&start-index=${e.settings.start}&max-results=${e.settings.max}`,dataType:"jsonp",success:function(t){"entry"in t.feed?(t.feed.entry.forEach(t=>{e.arr.push({title:t.title.$t,link:t.link.find(t=>"alternate"==t.rel).href})}),t.feed.length>=e.settings.max?(e.settings.start+=e.settings.max,e.run(e.settings.cat)):e.compile()):e.arr.length>0&&e.compile()},error:function(t){console.log(t)}})},run:function(t){"function"==typeof jQuery&&document.getElementById("nPL2")?(this.settings.cat=t,this.create(jQuery)):console.log("Error not function")},settings:{start:2,max:999}};
const limitHistory=100,histories=function(){function i(i,t,e){this.id=i,this.title=t,this.link=e}function t(){localStorage.setItem("History",JSON.stringify(list))}return list=[],null!=localStorage.getItem("History")&&(list=JSON.parse(localStorage.getItem("History"))),(obj={}).addHistory=function(e,s,l){var n=new i(e,s,l);if(null!=list){if(same=list.find(i=>i.id==e),list.length<100){if(same)for(let o in list)list[o].id===e&&list.splice(list.length,0,list.splice(o,1)[0]),t();else list.push(n),t()}else if(same)for(let r in list)list[r].id===e&&list.splice(list.length,0,list.splice(r,1)[0]),t();else list.splice(0,1),list.push(n),t()}else list.push(n),t()},obj}();
function loadFeed(t,e){$.ajax({url:t,dataType:"jsonp",success:function(t){for(var a=t.feed.entry,i="",n=0;n<a.length;n++){for(var r=a[n],l=r.title.$t,o="",c=0;c<r.link.length;c++)if("alternate"==r.link[c].rel){o=r.link[c].href;break}var g=new Date(r.published.$t);g.toLocaleDateString(),g.toLocaleTimeString();var f=new Date(r.updated.$t);f.toLocaleDateString(),f.toLocaleTimeString(),r.summary.$t,i+='<a title="'+l+'" href="'+o+'" class="c-999">'+l+"</a>"}$("#"+e).html(i),$("time.timeago").timeago()},error:function(){$("#"+e).html("<p>Lỗi, vui lòng tải lại trang!</p>")}})}
