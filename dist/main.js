!function(s){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return s[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=s,t.c=e,t.d=function(s,e,i){t.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:i})},t.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,e){if(1&e&&(s=t(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var o in s)t.d(i,o,function(e){return s[e]}.bind(null,o));return i},t.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(e,"a",e),e},t.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},t.p="",t(t.s=0)}([function(s,e,t){"use strict";t.r(e);var i=class{constructor(){this.keyPresses={},this.dx=0,this.dy=0,this.posX=50,this.posY=460,this.width=45,this.height=45,this.keydownListener=this.keydownListener.bind(this),this.keyupListener=this.keyupListener.bind(this),window.addEventListener("keydown",this.keydownListener,!1),window.addEventListener("keyup",this.keyupListener,!1)}keydownListener(s){this.keyPresses[s.key]=!0}keyupListener(s){this.keyPresses[s.key]=!1,this.dx=0,this.dy=0}moveSprite(s,e,t){this.keyPresses.w||this.keyPresses.W?this.dy=-e:this.keyPresses.s||this.keyPresses.S?this.dy=e:this.keyPresses.a||this.keyPresses.A?this.dx=-s:(this.keyPresses.d||this.keyPresses.D)&&(this.dx=s),this.posX+this.dx>0&&this.posX+55+this.dx<630&&this.posX+55+this.dx>0&&(this.posX+=this.dx),this.posY+this.dy>0&&this.posY+50+this.dy<510&&this.posY+50+this.dy>0&&(this.posY+=this.dy)}};var o=class{constructor(s){this.keyPresses={},this.dx=0,this.dy=0,this.posX=s,this.posY=400,this.width=35,this.height=20}moveSprite(s,e,t){this.posX+=s,this.posX<=-60&&(this.posX+=800)}};var r=class{constructor(s){this.keyPresses={},this.dx=0,this.dy=0,this.posX=s,this.posY=335,this.width=25,this.height=15}moveSprite(s,e,t){this.posX+=s,this.posX>750&&(this.posX=0)}};var n=class{constructor(s){this.dx=0,this.dy=0,this.posX=s,this.posY=285,this.width=90,this.height=50}moveSprite(s,e,t){this.posX+=s,this.posX<=-90&&(this.posX+=800)}};var p=class{constructor(s,e){this.dx=0,this.dy=0,this.posX=s.pos[0],this.posY=s.pos[1],this.height=55,this.width=55,this.hazardous=!1,this.ctx=e,this.src="./dist/Dungeon_B.png"}render(){let s=new Image;s.src="./dist/Dungeon_B.png",this.ctx.drawImage(s,482,100,45,40,this.posX,this.posY,this.width,this.height)}};var h=class{constructor(s,e){this.dx=0,this.dy=0,this.posX=s,this.posY=e,this.width=40,this.height=30}moveSprite(s,e,t){this.posX+=s,this.posX>750&&(this.posX=0)}};let a=document.createElement("canvas");a.className="canvas";let d=a.getContext("2d");a.width=600,a.height=503,document.getElementById("mid").appendChild(a);let w=[],c=!1,g=!1,m=new Image;m.src="./dist/lava.png";let u=new Image;u.src="./dist/Dungeon_A5.png";let l=new Image;l.src="./dist/Dungeon_A4.png";let y=new Image;y.src="./dist/cindyschar.png";let X=new Image;X.src="./dist/flappy.png";let v=new Image;v.src="./dist/wolf.png";let f=new Image;f.src="./dist/bowser.png";let I,Y,S,k,x,P,b,L,_,j,E,O,D,A,M,B=new Image;function C(){j=new i,I=new n(50),Y=new n(300),S=new n(550),k=new o(30),x=new o(300),P=new o(570),b=new r(0),L=new r(260),_=new r(520),E=new h(400,150),O=new h(100,100),D=new h(200,130),A=new h(250,110),M=new h(350,80),w=[],w.push(I,Y,S,k,x,P,b,L,_,E,O,D,A,M)}function T(){c=!0}B.src="./dist/ant.png";const q=[{pos:[80,155]},{pos:[80,100]},{pos:[80,60]},{pos:[80,90]},{pos:[80,119]},{pos:[513,155]},{pos:[513,100]},{pos:[513,60]},{pos:[513,90]},{pos:[513,119]},{pos:[297,155]},{pos:[297,100]},{pos:[297,60]},{pos:[297,90]},{pos:[297,119]}];let z=[];C(),q.forEach(s=>{z.push(new p(s,d))}),function s(){d.clearRect(0,0,a.width,a.height),j.moveSprite(4,4,a),k.moveSprite(-2,0,a),x.moveSprite(-2,0,a),P.moveSprite(-2,0,a),b.moveSprite(2,0,a),L.moveSprite(2,0,a),_.moveSprite(2,0,a),I.moveSprite(-2,0,a),Y.moveSprite(-2,0,a),S.moveSprite(-2,0,a),E.moveSprite(5,0,a),O.moveSprite(3,0,a),D.moveSprite(2,0,a),A.moveSprite(4,0,a),M.moveSprite(5,0,a),d.drawImage(u,0,250,145,40,0,0,615,80),d.drawImage(m,0,70,615,50),d.drawImage(m,0,120,615,50),d.drawImage(m,0,170,615,50),d.drawImage(u,0,245,145,40,0,210,615,100),d.drawImage(l,390,105,90,50,0,280,615,60),d.drawImage(l,390,105,90,50,0,340.2,615,60),d.drawImage(l,390,105,90,50,0,400.4,615,60),d.drawImage(l,400,270,80,50,0,460.6,615,40),z.forEach(s=>{s.render()}),d.drawImage(v,5,10,120,60,I.posX,I.posY,90,50),d.drawImage(v,5,10,120,60,Y.posX,Y.posY,90,50),d.drawImage(v,5,10,120,60,S.posX,S.posY,90,50),d.drawImage(B,0,0,30,20,b.posX,b.posY,60,50),d.drawImage(B,0,0,30,20,L.posX,L.posY,60,50),d.drawImage(B,0,0,30,20,_.posX,_.posY,60,50),d.drawImage(f,5,90,80,80,k.posX,k.posY,60,50),d.drawImage(f,5,90,80,80,x.posX,x.posY,60,50),d.drawImage(f,5,90,80,80,P.posX,P.posY,60,50),d.drawImage(X,E.posX,E.posY,40,30),d.drawImage(X,O.posX,O.posY,40,30),d.drawImage(X,D.posX,D.posY,40,30),d.drawImage(X,A.posX,A.posY,40,30),d.drawImage(X,M.posX,M.posY,40,30),d.drawImage(y,0,0,48,48,j.posX,j.posY,45,45),function(){let s=j.posX,e=j.posY,t=s+j.width,i=e+j.height;w.forEach(o=>{if(s<o.posX+o.width&&t>o.posX&&e<o.posY+o.height&&i>o.posY)return T(),!0})}(),function(){let s=j.posX,e=j.posY,t=s+j.width-10;e>63&&e<176&&(s>80&&t<135||s>297&&t<352||s>513&&t<568||T())}(),function(){let s=j.posY;s<60&&s>0&&(g=!0,console.log("you won!"))}(),requestAnimationFrame(s),c&&(c=!1,C())}()}]);