var lexurl="//cdn.visuwords.com/",assetsurl="/engine/visuwords_all_assets_config.php";
$(document).ready(function(){var n=$(".visuwords"),t=n.find(".origin"),o=$("#visuwords_enter"),e=0,r=null,a=new Array,s=new Array,c=0,l=null,f=null,u=function(n){for(i=0;
i<r.entity_category.length;
i++)

if(r.entity_category[i].type==n)
	return r.base_url+r.entity_category[i].file;

	return null},d=function(n){var t=null,o=null;
for(i=0; i<r.association_type.length; i++)

if(r.association_type[i].type==n){var e=r.association_type[i];

	return e.reciprocal&&(t=e.reciprocal),e.file&&(o=r.base_url+e.file),{reciprocal:t,file:o}}
	return null},v=function(i,n,o,e,r){var a=$("<img/>").attr("src",i);

	return a.addClass("link").appendTo(t),p(a,n,o,e,r),a},p=function(i,n,t,o,e){var r=t-.5*n,a=o-5,s=180*e/Math.PI;
$(i).css({width:n+"px",height:"10px",left:r+"px",top:a+"px",transform:"rotate("+s+"deg)"})},h=function(i,n,t){var o=d(i);


if(o.reciprocal){o=d(o.reciprocal);
var e=n;
n=t,t=e}var r=o.file,c=w(n),l=w(t),f=a[c].position,u=a[l].position,p=.5*(f.x+u.x),h=.5*(f.y+u.y),g=u.x-f.x,y=u.y-f.y,$=Math.atan2(y,g),x=Math.sqrt(y*y+g*g)-32,m=v(r,x,p,h,$);
s.push({n1:a[c],n2:a[l],domLink:m})},g=function(n,o){var e=n.category,r=null;


if("word"==e){
	r=$('<div class="node word"></div>').appendTo(t),$w=$('<div class="words"></div>').appendTo(r);
	var a=n.label.replace(/ /g,"&nbsp;
	").replace(/-/g,"&#8209;
");
$w.append("<div>"+a+"</div>");
var s=.5*(r.height()-$w.height()),c=.5*(r.width()-$w.width());
$w.css({top:s+"px",left:c+"px"})}else 

if(r=$('<div class="node"></div>').css({backgroundImage:"url("+u(e)+")"}).appendTo(t),n.label){for($w=$('<div class="words"></div>').appendTo(r),i=0;
i<n.label.length&&!(i>=3);
i++){var a=n.label[i].replace(/ /g,"&nbsp;
").replace(/-/g,"&#8209;
").replace(/\(p\)/,"");
$w.append("<div>"+a+"</div>")}var s=.5*(r.height()-$w.height()),c=.5*(r.width()-$w.width());
$w.css({top:s+"px",left:c+"px"})}
	return y(r,o),r},y=function(i,n){var t=i.width(),o=i.height(),e=n.x-.5*t,r=n.y-.5*o;
i.css({left:e+"px",top:r+"px"})},w=function(n){for(i=0;
i<a.length;
i++)

if(a[i].identity==n)
	return i;

	return-1},x=function(i,n){var t=-1;
n&&(t=w(n));
var o=i.entity,e=w(o.identity);


if(e>=0);
else{var r=null;


if(t>=0){
	r=a[t].position;
	var s=2*Math.PI*Math.random(),l=r.x+30*Math.cos(s),f=r.y+30*Math.sin(s);
	r={x:l,y:f}}else r={x:0,y:0};
	var u=g(o,r);
	o.position=r,o.force={x:0,y:0},o.domNode=u,a.push(o);
	for(var d=0;d<o.association.length;d++)

		if(18>c){
			c++;
			var v=o.association[d].link,p=o.identity;
			m(v,p)}}

if(t>=0){var y=a[t];
for(d=0;
d<y.association.length;
d++)

if(y.association[d].link==o.identity){h(y.association[d].type,y.identity,o.identity);
break}}},m=function(i,n){$(document).delay(100),$(document).queue(function(){$.ajax({dataType:"json",url:lexurl+i,success:function(i){x(i,n)}}),$(this).dequeue()})},b=function(i){var n,o,e={x:0,y:0};


if(i.touches){var r=i.touches[0];
n=r.pageX,o=r.pageY}else n=i.pageX,o=i.pageY;
var a=t.offset();

	return e.x=n-a.left,e.y=o-a.top,e},_=function(i,n){var t=i.x-n.x,o=i.y-n.y;

	return t*t+o*o},k=function(n){var t=null,o=1024;
for(i=0;
i<a.length;
i++){var e=a[i].position,r=_(n,e);
o>r&&(t=a[i],o=r)}
	return t},M=function(i){var n=b(i),t=k(n);
t?(i.preventDefault(),T(t)):l||I()},T=function(i){D(i)},L=function(i){var n=new Date,t=n.getTime();


if(200>t-e){var o=b(i),r=k(o);
console.debug(r);
for(var a=0;
a<r.association.length;
a++){c++;
var s=r.association[a].link,l=r.identity;
m(s,l)}}e=t;
var o=b(i),r=k(o);
r&&(i.preventDefault(),q(r))},q=function(i){I(),l=i.domNode,l.addClass("grabbed"),f=null,D(i)},E=function(i){

if(l){i.preventDefault();
var t=b(i);
f={x:t.x,y:t.y},W(n.find(".definition"),t)}},I=function(){n.find(".grabbed").removeClass("grabbed"),n.find(".definition").remove(),l=null},N=function(){I()},D=function(i){n.find(".definition").remove();
var o=400,e=n.width()-4;


if(e>o&&(e=o),"word"!=i.category){var r=$('<div class="definition"></div>'),a=i.label.join(", ");
r.html('<div class="liner"><div class="label">'+a+'</div><div class="defn">'+i.definition+"</div></div>"),r.css({width:e+"px"}),r.appendTo(t),W(r,i.position)}},W=function(i,n){var t=-$(O).find(".origin").position().left,o=+$(O).width()+t;
o-=i.width()+4;
{var e=$(window).scrollTop()+$("header").height(),r=-$(O).find(".origin").position().top;
+$(O).height()+r}r+=e;
var a=n.x-.5*i.width(),s=n.y-40-i.height();
r>s&&(s=n.y+40),t>a&&(a=t),a>o&&(a=o),i.css({left:a+"px",top:s+"px",opacity:1})},C=function(i,n,t,o){var e=99,r=20,a=e*e,s=n.x-i.x,c=n.y-i.y,l=s*s+c*c,f=Math.sqrt(l),u=0;
o&&(u+=l/a),t&&(u-=a/l);
var d=u*s/f,v=u*c/f;

	return-r>d&&(d=-r),d>+r&&(d=+r),-r>v&&(v=-r),v>+r&&(v=+r),{x:d,y:v}},S=function(){for(i=1;
i<a.length;
i++)for(j=0;
j<i;
j++){var n=a[i].position,t=a[j].position,o=C(n,t,1,0);
a[i].force.x+=o.x,a[i].force.y+=o.y,a[j].force.x-=o.x,a[j].force.y-=o.y}for(i=0;
i<s.length;
i++){var n=s[i].n1.position,t=s[i].n2.position,o=C(n,t,0,1);
s[i].n1.force.x+=o.x,s[i].n1.force.y+=o.y,s[i].n2.force.x-=o.x,s[i].n2.force.y-=o.y}for(i=0;
i<a.length;
i++)a[i].domNode!=l?(a[i].position.x+=a[i].force.x,a[i].position.y+=a[i].force.y):f&&(a[i].position=f),y(a[i].domNode,a[i].position),a[i].force.x*=.8,a[i].force.y*=.8;
for(i=0;
i<s.length;
i++){var n=s[i].n1.position,t=s[i].n2.position,e=.5*(n.x+t.x),r=.5*(n.y+t.y),c=t.x-n.x,u=t.y-n.y,d=Math.atan2(u,c),v=Math.sqrt(u*u+c*c)-32;
p(s[i].domLink,v,e,r,d)}setTimeout(function(){S()},40)},A=function(){try{
	return"localStorage"in window&&null!==window.localStorage}catch(i){
	return!1}},P=function(){A()&&(window.location.href=window.location.href)},X=function(){A()},Y=function(i){$(i).find(".legend")},z=function(i){{var n=$(i).attr("inout"),t=$(i).find(".inner").outerWidth()-5;
$(i).css("marginLeft")}"in"==n?($(i).finish().animate({marginLeft:"0px"}),$(i).attr("inout","out")):($(i).finish().animate({marginLeft:-t+"px"}),$(i).attr("inout","in"))},J=function(i){var n=$(window).height();
600>n&&(n=600),$(i).height(n);
var t=$("#header").outerWidth(),e=$("#header h1").position(),r=$("#header h1").outerWidth()+e.left+8,a=$("#header #nav").outerWidth()+8,s=t-(r+a);
o.css({width:s+"px",marginLeft:r+"px"});
var c=$(window).width();


if(736>c){var l=".visuwords .legend";
$(l).attr("inout","out"),z(l)}};
n.contextmenu(function(){});
var O=n;
J(O),$(window).on({resize:function(){J(O)}}),$(O).on({orientationchange:function(){J(O)}}),$(O).on({mousemove:function(i){M(i.originalEvent)}}),$(O).on({mousedown:function(i){L(i.originalEvent)}}),$(O).on({touchstart:function(i){L(i.originalEvent)}}),$(O).on({mousemove:function(i){E(i.originalEvent)}}),$(O).on({touchmove:function(i){E(i.originalEvent)}}),$(O).on({mouseup:function(){N()}}),$(O).on({mouseleave:function(){N()}}),$(O).on({savestate:function(){P()}}),$(O).on({loadstate:function(){X()}}),$(O).attr("unselectable","on"),$(O).css("user-select","none"),$(O).on("selectstart",!1),$(O).find(".legend").on({click:function(){z(this)}}),o.on("keyup",function(i){var n=i.which;


if(13==n){var t=o.find("input").val();
window.location="/"+t}}),$.getJSON(assetsurl).done(function(i){r=i.assets;
var n;
for(n=0;
n<r.association_type.length;
n++)

if(r.association_type[n].file){var t=new Image;
t.src=r.base_url+r.association_type[n].file}for(n=0;
n<r.entity_category.length;
n++){var t=new Image;
t.src=r.base_url+r.entity_category[n].file}window.visuword&&(Y(),m(visuword,null),S())})});
