(()=>{var Ff=0,jc=1,Of=2;var Fu=1,dc=2,di=3,Di=0,hn=1,Ct=2;var ii=0,Ps=1,Dr=2,Kc=3,Qc=4,Bf=5,Yi=100,kf=101,Hf=102,eh=103,th=104,Vf=200,Gf=201,Wf=202,Xf=203,yl=204,bl=205,qf=206,$f=207,Yf=208,Zf=209,Jf=210,jf=211,Kf=212,Qf=213,ed=214,td=0,nd=1,id=2,Ur=3,sd=4,ad=5,rd=6,od=7,pc=0,ld=1,cd=2,Pi=0,mc=1,gc=2,xc=3,Ua=4,hd=5,vc=6;var Ou=300,Us=301,Ns=302,Ml=303,wl=304,mo=306,zs=1e3,Zn=1001,Sl=1002,xn=1003,nh=1004;var zo=1005;var Un=1006,ud=1007;var ga=1008;var Ii=1009,fd=1010,dd=1011,_c=1012,Bu=1013,Ci=1014,Li=1015,Rn=1016,ku=1017,Hu=1018,ji=1020,pd=1021,Jn=1023,md=1024,gd=1025,Ki=1026,Fs=1027,xd=1028,Vu=1029,vd=1030,Gu=1031,Wu=1033,Fo=33776,Oo=33777,Bo=33778,ko=33779,ih=35840,sh=35841,ah=35842,rh=35843,Xu=36196,oh=37492,lh=37496,ch=37808,hh=37809,uh=37810,fh=37811,dh=37812,ph=37813,mh=37814,gh=37815,xh=37816,vh=37817,_h=37818,yh=37819,bh=37820,Mh=37821,Ho=36492,wh=36494,Sh=36495,_d=36283,Eh=36284,Th=36285,Ah=36286;var Nr=2300,zr=2301,Vo=2302,Rh=2400,Ch=2401,Lh=2402;var qu=3e3,Qi=3001,yd=3200,bd=3201,yc=0,Md=1,Nn="",_t="srgb",xi="srgb-linear",bc="display-p3",go="display-p3-linear",Fr="linear",bt="srgb",Or="rec709",Br="p3";var os=7680;var Ph=519,wd=512,Sd=513,Ed=514,$u=515,Td=516,Ad=517,Rd=518,Cd=519,El=35044;var Ih="300 es",Tl=1035,mi=2e3,kr=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,h=s.length;a<h;a++)s[a].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Go=Math.PI/180,Al=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function Ld(i,e){return(i%e+e)%e}function Wo(i,e,t){return(1-t)*i+t*e}function Dh(i){return(i&i-1)===0&&i!==0}function Rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,h=this.y-e.y;return this.x=a*n-h*s+e.x,this.y=a*s+h*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class i{constructor(e,t,n,s,a,h,o,l,r){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,h,o,l,r)}set(e,t,n,s,a,h,o,l,r){let c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=a,c[5]=l,c[6]=n,c[7]=h,c[8]=r,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,h=n[0],o=n[3],l=n[6],r=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],b=s[7],T=s[2],A=s[5],P=s[8];return a[0]=h*v+o*_+l*T,a[3]=h*m+o*y+l*A,a[6]=h*p+o*b+l*P,a[1]=r*v+c*_+u*T,a[4]=r*m+c*y+u*A,a[7]=r*p+c*b+u*P,a[2]=d*v+f*_+g*T,a[5]=d*m+f*y+g*A,a[8]=d*p+f*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8];return t*h*c-t*o*r-n*a*c+n*o*l+s*a*r-s*h*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8],u=c*h-o*r,d=o*l-c*a,f=r*a-h*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*r-c*n)*v,e[2]=(o*n-s*h)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=f*v,e[7]=(n*l-r*t)*v,e[8]=(h*t-n*a)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,h,o){let l=Math.cos(a),r=Math.sin(a);return this.set(n*l,n*r,-n*(l*h+r*o)+h+e,-s*r,s*l,-s*(-r*h+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new je;function Yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){let i=Hr("canvas");return i.style.display="block",i}var Uh={};function ua(i){i in Uh||(Uh[i]=!0,console.warn(i))}var Nh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[xi]:{transfer:Fr,primaries:Or,toReference:i=>i,fromReference:i=>i},[_t]:{transfer:bt,primaries:Or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[go]:{transfer:Fr,primaries:Br,toReference:i=>i.applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Nh)},[bc]:{transfer:bt,primaries:Br,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zh),fromReference:i=>i.applyMatrix3(Nh).convertLinearToSRGB()}},Id=new Set([xi,go]),mt={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Id.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=er[e].toReference,s=er[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return er[i].primaries},getTransfer:function(i){return i===Nn?Fr:er[i].transfer}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,Vr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Hr("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let h=0;h<a.length;h++)a[h]=Is(a[h]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dd=0,Gr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let h=0,o=s.length;h<o;h++)s[h].isDataTexture?a.push($o(s[h].image)):a.push($o(s[h]))}else a=$o(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,zn=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zn,s=Zn,a=Un,h=ga,o=Jn,l=Ii,r=i.DEFAULT_ANISOTROPY,c=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=gi(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=h,this.anisotropy=r,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Qi?_t:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Qi:qu}set encoding(e){ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?_t:Nn}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ou;zn.DEFAULT_ANISOTROPY=1;var It=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,h=e.elements;return this.x=h[0]*t+h[4]*n+h[8]*s+h[12]*a,this.y=h[1]*t+h[5]*n+h[9]*s+h[13]*a,this.z=h[2]*t+h[6]*n+h[10]*s+h[14]*a,this.w=h[3]*t+h[7]*n+h[11]*s+h[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,l=e.elements,r=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(r+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(r+1)/2,b=(f+1)/2,T=(p+1)/2,A=(c+d)/4,P=(u+v)/4,k=(g+m)/4;return y>b&&y>T?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=A/n,a=P/n):b>T?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=A/s,a=k/s):T<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),n=P/a,s=k/a),this.set(n,s,a,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-c)/_,this.w=Math.acos((r+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?_t:Nn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wr=class extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ll=class extends zn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,h,o){let l=n[s+0],r=n[s+1],c=n[s+2],u=n[s+3],d=a[h+0],f=a[h+1],g=a[h+2],v=a[h+3];if(o===0){e[t+0]=l,e[t+1]=r,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||r!==f||c!==g){let m=1-o,p=l*d+r*f+c*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let T=Math.sqrt(y),A=Math.atan2(T,p*_);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}let b=o*_;if(l=l*m+d*b,r=r*m+f*b,c=c*m+g*b,u=u*m+v*b,m===1-o){let T=1/Math.sqrt(l*l+r*r+c*c+u*u);l*=T,r*=T,c*=T,u*=T}}e[t]=l,e[t+1]=r,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,h){let o=n[s],l=n[s+1],r=n[s+2],c=n[s+3],u=a[h],d=a[h+1],f=a[h+2],g=a[h+3];return e[t]=o*g+c*u+l*f-r*d,e[t+1]=l*g+c*d+r*u-o*f,e[t+2]=r*g+c*f+o*d-l*u,e[t+3]=c*g-o*u-l*d-r*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,h=e._order,o=Math.cos,l=Math.sin,r=o(n/2),c=o(s/2),u=o(a/2),d=l(n/2),f=l(s/2),g=l(a/2);switch(h){case"XYZ":this._x=d*c*u+r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u+d*f*g;break;case"YZX":this._x=d*c*u+r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u-d*f*g;break;case"XZY":this._x=d*c*u-r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],h=t[1],o=t[5],l=t[9],r=t[2],c=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(a-r)*f,this._z=(h-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+h)/f,this._z=(a+r)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(a-r)/f,this._x=(s+h)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(h-s)/f,this._x=(a+r)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,h=e._w,o=t._x,l=t._y,r=t._z,c=t._w;return this._x=n*c+h*o+s*r-a*l,this._y=s*c+h*l+a*o-n*r,this._z=a*c+h*r+n*l-s*o,this._w=h*c-n*o-s*l-a*r,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,a=this._z,h=this._w,o=h*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=h,this._x=n,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*h+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}let r=Math.sqrt(l),c=Math.atan2(r,o),u=Math.sin((1-t)*c)/r,d=Math.sin(t*c)/r;return this._w=h*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,h=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*h,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*h,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*h,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,h=e.y,o=e.z,l=e.w,r=2*(h*s-o*n),c=2*(o*t-a*s),u=2*(a*n-h*t);return this.x=t+l*r+h*u-o*c,this.y=n+l*c+o*r-a*u,this.z=s+l*u+a*c-h*r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,h=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*h-n*l,this.z=n*o-s*h,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new O,Fh=new si,vi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let h=0,o=a.count;h<o;h++)e.isMesh===!0?e.getVertexPosition(h,Xn):Xn.fromBufferAttribute(a,h),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let s=e.children;for(let a=0,h=s.length;a<h;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),nr.subVectors(this.max,ta),cs.subVectors(e.a,ta),hs.subVectors(e.b,ta),us.subVectors(e.c,ta),Si.subVectors(hs,cs),Ei.subVectors(us,hs),Gi.subVectors(cs,us);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Gi.z,Gi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Gi.z,0,-Gi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Gi.y,Gi.x,0];return!Zo(t,cs,hs,us,nr)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,cs,hs,us,nr))?!1:(ir.crossVectors(Si,Ei),t=[ir.x,ir.y,ir.z],Zo(t,cs,hs,us,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,tr=new vi,cs=new O,hs=new O,us=new O,Si=new O,Ei=new O,Gi=new O,ta=new O,nr=new O,ir=new O,Wi=new O;function Zo(i,e,t,n,s){for(let a=0,h=i.length-3;a<=h;a+=3){Wi.fromArray(i,a);let o=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),r=t.dot(Wi),c=n.dot(Wi);if(Math.max(-Math.max(l,r,c),Math.min(l,r,c))>o)return!1}return!0}var Nd=new vi,na=new O,Jo=new O,_i=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let a=0,h=e.length;a<h;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Jo)),this.expandByPoint(na.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new O,jo=new O,sr=new O,Ti=new O,Ko=new O,ar=new O,Qo=new O,Os=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(jo);let a=e.distanceTo(t)*.5,h=-this.direction.dot(sr),o=Ti.dot(this.direction),l=-Ti.dot(sr),r=Ti.lengthSq(),c=Math.abs(1-h*h),u,d,f,g;if(c>0)if(u=h*l-o,d=h*o-l,g=a*c,u>=0)if(d>=-g)if(d<=g){let v=1/c;u*=v,d*=v,f=u*(u+h*d+2*o)+d*(h*u+d+2*l)+r}else d=a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;else d=-a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;else d<=-g?(u=Math.max(0,-(-h*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+r):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+r):(u=Math.max(0,-(h*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+r);else d=h>0?-a:a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jo).addScaledVector(sr,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,a=e.radius*e.radius;if(s>a)return null;let h=Math.sqrt(a-s),o=n-h,l=n+h;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,h,o,l,r=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return r>=0?(n=(e.min.x-d.x)*r,s=(e.max.x-d.x)*r):(n=(e.max.x-d.x)*r,s=(e.min.x-d.x)*r),c>=0?(a=(e.min.y-d.y)*c,h=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,h=(e.min.y-d.y)*c),n>h||a>s||((a>n||isNaN(n))&&(n=a),(h<s||isNaN(s))&&(s=h),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,a){Ko.subVectors(t,e),ar.subVectors(n,e),Qo.crossVectors(Ko,ar);let h=this.direction.dot(Qo),o;if(h>0){if(s)return null;o=1}else if(h<0)o=-1,h=-h;else return null;Ti.subVectors(this.origin,e);let l=o*this.direction.dot(ar.crossVectors(Ti,ar));if(l<0)return null;let r=o*this.direction.dot(Ko.cross(Ti));if(r<0||l+r>h)return null;let c=-o*Ti.dot(Qo);return c<0?null:this.at(c/h,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class i{constructor(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m)}set(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=h,p[9]=o,p[13]=l,p[2]=r,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),h=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*h,t[9]=n[9]*h,t[10]=n[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,h=Math.cos(n),o=Math.sin(n),l=Math.cos(s),r=Math.sin(s),c=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=h*c,f=h*u,g=o*c,v=o*u;t[0]=l*c,t[4]=-l*u,t[8]=r,t[1]=f+g*r,t[5]=d-v*r,t[9]=-o*l,t[2]=v-d*r,t[6]=g+f*r,t[10]=h*l}else if(e.order==="YXZ"){let d=l*c,f=l*u,g=r*c,v=r*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=h*r,t[1]=h*u,t[5]=h*c,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=h*l}else if(e.order==="ZXY"){let d=l*c,f=l*u,g=r*c,v=r*u;t[0]=d-v*o,t[4]=-h*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=h*c,t[9]=v-d*o,t[2]=-h*r,t[6]=o,t[10]=h*l}else if(e.order==="ZYX"){let d=h*c,f=h*u,g=o*c,v=o*u;t[0]=l*c,t[4]=g*r-f,t[8]=d*r+v,t[1]=l*u,t[5]=v*r+d,t[9]=f*r-g,t[2]=-r,t[6]=o*l,t[10]=h*l}else if(e.order==="YZX"){let d=h*l,f=h*r,g=o*l,v=o*r;t[0]=l*c,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=h*c,t[9]=-o*c,t[2]=-r*c,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=h*l,f=h*r,g=o*l,v=o*r;t[0]=l*c,t[4]=-u,t[8]=r*c,t[1]=d*u+v,t[5]=h*c,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Fd)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ai.crossVectors(n,Tn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ai.crossVectors(n,Tn)),Ai.normalize(),rr.crossVectors(Tn,Ai),s[0]=Ai.x,s[4]=rr.x,s[8]=Tn.x,s[1]=Ai.y,s[5]=rr.y,s[9]=Tn.y,s[2]=Ai.z,s[6]=rr.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,h=n[0],o=n[4],l=n[8],r=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],b=n[11],T=n[15],A=s[0],P=s[4],k=s[8],M=s[12],w=s[1],U=s[5],B=s[9],X=s[13],C=s[2],E=s[6],S=s[10],L=s[14],R=s[3],F=s[7],$=s[11],V=s[15];return a[0]=h*A+o*w+l*C+r*R,a[4]=h*P+o*U+l*E+r*F,a[8]=h*k+o*B+l*S+r*$,a[12]=h*M+o*X+l*L+r*V,a[1]=c*A+u*w+d*C+f*R,a[5]=c*P+u*U+d*E+f*F,a[9]=c*k+u*B+d*S+f*$,a[13]=c*M+u*X+d*L+f*V,a[2]=g*A+v*w+m*C+p*R,a[6]=g*P+v*U+m*E+p*F,a[10]=g*k+v*B+m*S+p*$,a[14]=g*M+v*X+m*L+p*V,a[3]=_*A+y*w+b*C+T*R,a[7]=_*P+y*U+b*E+T*F,a[11]=_*k+y*B+b*S+T*$,a[15]=_*M+y*X+b*L+T*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],h=e[1],o=e[5],l=e[9],r=e[13],c=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+a*l*u-s*r*u-a*o*d+n*r*d+s*o*f-n*l*f)+v*(+t*l*f-t*r*d+a*h*d-s*h*f+s*r*c-a*l*c)+m*(+t*r*u-t*o*f-a*h*u+n*h*f+a*o*c-n*r*c)+p*(-s*o*c-t*l*u+t*o*d+s*h*u-n*h*d+n*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=u*m*r-v*d*r+v*l*f-o*m*f-u*l*p+o*d*p,y=g*d*r-c*m*r-g*l*f+h*m*f+c*l*p-h*d*p,b=c*v*r-g*u*r+g*o*f-h*v*f-c*o*p+h*u*p,T=g*u*l-c*v*l-g*o*d+h*v*d+c*o*m-h*u*m,A=t*_+n*y+s*b+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=_*P,e[1]=(v*d*a-u*m*a-v*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(o*m*a-v*l*a+v*s*r-n*m*r-o*s*p+n*l*p)*P,e[3]=(u*l*a-o*d*a-u*s*r+n*d*r+o*s*f-n*l*f)*P,e[4]=y*P,e[5]=(c*m*a-g*d*a+g*s*f-t*m*f-c*s*p+t*d*p)*P,e[6]=(g*l*a-h*m*a-g*s*r+t*m*r+h*s*p-t*l*p)*P,e[7]=(h*d*a-c*l*a+c*s*r-t*d*r-h*s*f+t*l*f)*P,e[8]=b*P,e[9]=(g*u*a-c*v*a-g*n*f+t*v*f+c*n*p-t*u*p)*P,e[10]=(h*v*a-g*o*a+g*n*r-t*v*r-h*n*p+t*o*p)*P,e[11]=(c*o*a-h*u*a-c*n*r+t*u*r+h*n*f-t*o*f)*P,e[12]=T*P,e[13]=(c*v*s-g*u*s+g*n*d-t*v*d-c*n*m+t*u*m)*P,e[14]=(g*o*s-h*v*s-g*n*l+t*v*l+h*n*m-t*o*m)*P,e[15]=(h*u*s-c*o*s+c*n*l-t*u*l-h*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,h=e.x,o=e.y,l=e.z,r=a*h,c=a*o;return this.set(r*h+n,r*o-s*l,r*l+s*o,0,r*o+s*l,c*o+n,c*l-s*h,0,r*l-s*o,c*l+s*h,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,h){return this.set(1,n,a,0,e,1,h,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,h=t._y,o=t._z,l=t._w,r=a+a,c=h+h,u=o+o,d=a*r,f=a*c,g=a*u,v=h*c,m=h*u,p=o*u,_=l*r,y=l*c,b=l*u,T=n.x,A=n.y,P=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+b)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+y)*P,s[9]=(m-_)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,a=fs.set(s[0],s[1],s[2]).length(),h=fs.set(s[4],s[5],s[6]).length(),o=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);let r=1/a,c=1/h,u=1/o;return qn.elements[0]*=r,qn.elements[1]*=r,qn.elements[2]*=r,qn.elements[4]*=c,qn.elements[5]*=c,qn.elements[6]*=c,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=a,n.y=h,n.z=o,this}makePerspective(e,t,n,s,a,h,o=mi){let l=this.elements,r=2*a/(t-e),c=2*a/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===mi)f=-(h+a)/(h-a),g=-2*h*a/(h-a);else if(o===kr)f=-h/(h-a),g=-h*a/(h-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=r,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,h,o=mi){let l=this.elements,r=1/(t-e),c=1/(n-s),u=1/(h-a),d=(t+e)*r,f=(n+s)*c,g,v;if(o===mi)g=(h+a)*u,v=-2*u;else if(o===kr)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*r,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new O,qn=new Ye,zd=new O(0,0,0),Fd=new O(1,1,1),Ai=new O,rr=new O,Tn=new O,Oh=new Ye,Bh=new si,Xr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],h=s[4],o=s[8],l=s[1],r=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(d,r),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,r)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-h,r)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-h,r));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,r),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,r),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Od=0,kh=new O,ds=new si,hi=new Ye,or=new O,ia=new O,Bd=new O,kd=new si,Hh=new O(1,0,0),Vh=new O(0,1,0),Gh=new O(0,0,1),Hd={type:"added"},Vd={type:"removed"},Gt=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new Xr,n=new si,s=new O(1,1,1);function a(){n.setFromEuler(t,!1)}function h(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?or.copy(e):or.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(ia,or,this.up):hi.lookAt(or,ia,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(hi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let h=this.children[n].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,h=s.length;a<h;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let a=0,h=s.length;a<h;a++){let o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let r=0,c=l.length;r<c;r++){let u=l[r];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,r=this.material.length;l<r;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=h(e.geometries),l=h(e.materials),r=h(e.textures),c=h(e.images),u=h(e.shapes),d=h(e.skeletons),f=h(e.animations),g=h(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),r.length>0&&(n.textures=r),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function h(o){let l=[];for(let r in o){let c=o[r];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new O,ui=new O,el=new O,fi=new O,ps=new O,ms=new O,Wh=new O,tl=new O,nl=new O,il=new O,lr=!1,Ji=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){$n.subVectors(s,t),ui.subVectors(n,t),el.subVectors(e,t);let h=$n.dot($n),o=$n.dot(ui),l=$n.dot(el),r=ui.dot(ui),c=ui.dot(el),u=h*r-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,f=(r*l-o*c)*d,g=(h*c-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,n,s,a,h,o,l){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),this.getInterpolation(e,t,n,s,a,h,o,l)}static getInterpolation(e,t,n,s,a,h,o,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fi.x),l.addScaledVector(h,fi.y),l.addScaledVector(o,fi.z),l)}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),ui.subVectors(e,t),$n.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),$n.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,h,o;ps.subVectors(s,n),ms.subVectors(a,n),tl.subVectors(e,n);let l=ps.dot(tl),r=ms.dot(tl);if(l<=0&&r<=0)return t.copy(n);nl.subVectors(e,s);let c=ps.dot(nl),u=ms.dot(nl);if(c>=0&&u<=c)return t.copy(s);let d=l*u-c*r;if(d<=0&&l>=0&&c<=0)return h=l/(l-c),t.copy(n).addScaledVector(ps,h);il.subVectors(e,a);let f=ps.dot(il),g=ms.dot(il);if(g>=0&&f<=g)return t.copy(a);let v=f*r-l*g;if(v<=0&&r>=0&&g<=0)return o=r/(r-g),t.copy(n).addScaledVector(ms,o);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return Wh.subVectors(a,s),o=(u-c)/(u-c+(f-g)),t.copy(s).addScaledVector(Wh,o);let p=1/(m+v+d);return h=v*p,o=d*p,t.copy(n).addScaledVector(ps,h).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},cr={h:0,s:0,l:0};function sl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=Ld(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,h=2*n-a;this.r=sl(h,a,e+1/3),this.g=sl(h,a,e),this.b=sl(h,a,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,h=s[1],o=s[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],h=a.length;if(h===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){let n=Zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return mt.fromWorkingColorSpace(cn.copy(this),e),Math.round(nn(cn.r*255,0,255))*65536+Math.round(nn(cn.g*255,0,255))*256+Math.round(nn(cn.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,a=cn.b,h=Math.max(n,s,a),o=Math.min(n,s,a),l,r,c=(o+h)/2;if(o===h)l=0,r=0;else{let u=h-o;switch(r=c<=.5?u/(h+o):u/(2-h-o),h){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=r,e.l=c,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=_t){mt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(cr);let n=Wo(Ri.h,cr.h,t),s=Wo(Ri.s,cr.s,t),a=Wo(Ri.l,cr.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new de;de.NAMES=Zu;var Gd=0,jn=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Ps,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=bl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let h=[];for(let o in a){let l=a[o];delete l.metadata,h.push(l)}return h}if(t){let a=s(e.textures),h=s(e.images);a.length>0&&(n.textures=a),h.length>0&&(n.images=h)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Fn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new O,hr=new ce,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}};var qr=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Wd=0,Dn=new Ye,al=new Gt,gs=new O,An=new vi,sa=new vi,tn=new O,gt=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?$r:qr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];An.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let a=0,h=t.length;a<h;a++){let o=t[a];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(An.min,sa.min),An.expandByPoint(tn),tn.addVectors(An.max,sa.max),An.expandByPoint(tn)):(An.expandByPoint(sa.min),An.expandByPoint(sa.max))}An.getCenter(n);let s=0;for(let a=0,h=e.count;a<h;a++)tn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(tn));if(t)for(let a=0,h=t.length;a<h;a++){let o=t[a],l=this.morphTargetsRelative;for(let r=0,c=o.count;r<c;r++)tn.fromBufferAttribute(o,r),l&&(gs.fromBufferAttribute(e,r),tn.add(gs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,a=t.normal.array,h=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,r=[],c=[];for(let w=0;w<o;w++)r[w]=new O,c[w]=new O;let u=new O,d=new O,f=new O,g=new ce,v=new ce,m=new ce,p=new O,_=new O;function y(w,U,B){u.fromArray(s,w*3),d.fromArray(s,U*3),f.fromArray(s,B*3),g.fromArray(h,w*2),v.fromArray(h,U*2),m.fromArray(h,B*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);let X=1/(v.x*m.y-m.x*v.y);isFinite(X)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(X),_.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(X),r[w].add(p),r[U].add(p),r[B].add(p),c[w].add(_),c[U].add(_),c[B].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,U=b.length;w<U;++w){let B=b[w],X=B.start,C=B.count;for(let E=X,S=X+C;E<S;E+=3)y(n[E+0],n[E+1],n[E+2])}let T=new O,A=new O,P=new O,k=new O;function M(w){P.fromArray(a,w*3),k.copy(P);let U=r[w];T.copy(U),T.sub(P.multiplyScalar(P.dot(U))).normalize(),A.crossVectors(k,U);let X=A.dot(c[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=X}for(let w=0,U=b.length;w<U;++w){let B=b[w],X=B.start,C=B.count;for(let E=X,S=X+C;E<S;E+=3)M(n[E+0]),M(n[E+1]),M(n[E+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,a=new O,h=new O,o=new O,l=new O,r=new O,c=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.fromBufferAttribute(t,m),c.subVectors(h,a),u.subVectors(s,a),c.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),o.add(c),l.add(c),r.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,r.x,r.y,r.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),h.fromBufferAttribute(t,d+2),c.subVectors(h,a),u.subVectors(s,a),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){let r=o.array,c=o.itemSize,u=o.normalized,d=new r.constructor(l.length*c),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=r[f++]}return new Dt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],r=e(l,n);t.setAttribute(o,r)}let a=this.morphAttributes;for(let o in a){let l=[],r=a[o];for(let c=0,u=r.length;c<u;c++){let d=r[c],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let h=this.groups;for(let o=0,l=h.length;o<l;o++){let r=h[o];t.addGroup(r.start,r.count,r.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let r in l)l[r]!==void 0&&(e[r]=l[r]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let r=n[l];e.data.attributes[l]=r.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let r=this.morphAttributes[l],c=[];for(let u=0,d=r.length;u<d;u++){let f=r[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let r in s){let c=s[r];this.setAttribute(r,c.clone(t))}let a=e.morphAttributes;for(let r in a){let c=[],u=a[r];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[r]=c}this.morphTargetsRelative=e.morphTargetsRelative;let h=e.groups;for(let r=0,c=h.length;r<c;r++){let u=h[r];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xh=new Ye,Xi=new Os,ur=new _i,qh=new O,xs=new O,vs=new O,_s=new O,rl=new O,fr=new O,dr=new ce,pr=new ce,mr=new ce,$h=new O,Yh=new O,Zh=new O,gr=new O,xr=new O,Ve=class extends Gt{constructor(e=new gt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,h=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){fr.set(0,0,0);for(let l=0,r=a.length;l<r;l++){let c=o[l],u=a[l];c!==0&&(rl.fromBufferAttribute(u,e),h?fr.addScaledVector(rl,c):fr.addScaledVector(rl.sub(t),c))}t.add(fr)}return t}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(a),Xi.copy(e.ray).recast(e.near),!(ur.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ur,qh)===null||Xi.origin.distanceToSquared(qh)>(e.far-e.near)**2))&&(Xh.copy(a).invert(),Xi.copy(e.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let s,a=this.geometry,h=this.material,o=a.index,l=a.attributes.position,r=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(h))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=h[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,T=y;b<T;b+=3){let A=o.getX(b),P=o.getX(b+1),k=o.getX(b+2);s=vr(this,p,e,n,r,c,u,A,P,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=o.getX(m),y=o.getX(m+1),b=o.getX(m+2);s=vr(this,h,e,n,r,c,u,_,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(h))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=h[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=_,T=y;b<T;b+=3){let A=b,P=b+1,k=b+2;s=vr(this,p,e,n,r,c,u,A,P,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,y=m+1,b=m+2;s=vr(this,h,e,n,r,c,u,_,y,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Xd(i,e,t,n,s,a,h,o){let l;if(e.side===hn?l=n.intersectTriangle(h,a,s,!0,o):l=n.intersectTriangle(s,a,h,e.side===Di,o),l===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);let r=t.ray.origin.distanceTo(xr);return r<t.near||r>t.far?null:{distance:r,point:xr.clone(),object:i}}function vr(i,e,t,n,s,a,h,o,l,r){i.getVertexPosition(o,xs),i.getVertexPosition(l,vs),i.getVertexPosition(r,_s);let c=Xd(i,e,t,n,xs,vs,_s,gr);if(c){s&&(dr.fromBufferAttribute(s,o),pr.fromBufferAttribute(s,l),mr.fromBufferAttribute(s,r),c.uv=Ji.getInterpolation(gr,xs,vs,_s,dr,pr,mr,new ce)),a&&(dr.fromBufferAttribute(a,o),pr.fromBufferAttribute(a,l),mr.fromBufferAttribute(a,r),c.uv1=Ji.getInterpolation(gr,xs,vs,_s,dr,pr,mr,new ce),c.uv2=c.uv1),h&&($h.fromBufferAttribute(h,o),Yh.fromBufferAttribute(h,l),Zh.fromBufferAttribute(h,r),c.normal=Ji.getInterpolation(gr,xs,vs,_s,$h,Yh,Zh,new O),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:r,normal:new O,materialIndex:0};Ji.getNormal(xs,vs,_s,u.normal),c.face=u}return c}var Cn=class i extends gt{constructor(e=1,t=1,n=1,s=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:h};let o=this;s=Math.floor(s),a=Math.floor(a),h=Math.floor(h);let l=[],r=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,h,a,0),g("z","y","x",1,-1,n,t,-e,h,a,1),g("x","z","y",1,1,e,n,t,s,h,2),g("x","z","y",1,-1,e,n,-t,s,h,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(u,2));function g(v,m,p,_,y,b,T,A,P,k,M){let w=b/P,U=T/k,B=b/2,X=T/2,C=A/2,E=P+1,S=k+1,L=0,R=0,F=new O;for(let $=0;$<S;$++){let V=$*U-X;for(let j=0;j<E;j++){let q=j*w-B;F[v]=q*_,F[m]=V*y,F[p]=C,r.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[p]=A>0?1:-1,c.push(F.x,F.y,F.z),u.push(j/P),u.push(1-$/k),L+=1}}for(let $=0;$<k;$++)for(let V=0;V<P;V++){let j=d+V+E*$,q=d+V+E*($+1),W=d+(V+1)+E*($+1),re=d+(V+1)+E*$;l.push(j,q,re),l.push(q,W,re),R+=6}o.addGroup(f,R,M),f+=R,d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Bs(i[t]);for(let s in n)e[s]=n[s]}return e}function qd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){return i.getRenderTarget()===null?i.outputColorSpace:mt.workingColorSpace}var Fi={clone:Bs,merge:gn},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let h=this.uniforms[s].value;h&&h.isTexture?t.uniforms[s]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[s]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[s]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[s]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[s]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[s]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[s]={type:"m4",value:h.toArray()}:t.uniforms[s]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Yr=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sn=class extends Yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,h=this.view;if(this.view!==null&&this.view.enabled){let l=h.fullWidth,r=h.fullHeight;a+=h.offsetX*s/l,t-=h.offsetY*n/r,s*=h.width/l,n*=h.height/r}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ys=-90,bs=1,Pl=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(ys,bs,e,t);s.layers=this.layers,this.add(s);let a=new sn(ys,bs,e,t);a.layers=this.layers,this.add(a);let h=new sn(ys,bs,e,t);h.layers=this.layers,this.add(h);let o=new sn(ys,bs,e,t);o.layers=this.layers,this.add(o);let l=new sn(ys,bs,e,t);l.layers=this.layers,this.add(l);let r=new sn(ys,bs,e,t);r.layers=this.layers,this.add(r)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,h,o,l]=t;for(let r of t)this.remove(r);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let r of t)this.add(r),r.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,h,o,l,r,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,h),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,r),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zr=class extends zn{constructor(e,t,n,s,a,h,o,l,r,c){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,s,a,h,o,l,r,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?_t:Nn),this.texture=new Zr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),a=new Ot({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:ii});a.uniforms.tEquirect.value=t;let h=new Ve(s,a),o=t.minFilter;return t.minFilter===ga&&(t.minFilter=Un),new Pl(1,10,this).update(e,h),t.minFilter=o,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,n,s){let a=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,n,s);e.setRenderTarget(a)}},ol=new O,Zd=new O,Jd=new je,Yn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ol.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jd.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new _i,_r=new O,va=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,a=new Yn,h=new Yn){this.planes=[e,t,n,s,a,h]}set(e,t,n,s,a,h){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(h),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,s=e.elements,a=s[0],h=s[1],o=s[2],l=s[3],r=s[4],c=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],y=s[14],b=s[15];if(n[0].setComponents(l-a,d-r,m-f,b-p).normalize(),n[1].setComponents(l+a,d+r,m+f,b+p).normalize(),n[2].setComponents(l+h,d+c,m+g,b+_).normalize(),n[3].setComponents(l-h,d-c,m-g,b-_).normalize(),n[4].setComponents(l-o,d-u,m-v,b-y).normalize(),t===mi)n[5].setComponents(l+o,d+u,m+v,b+y).normalize();else if(t===kr)n[5].setComponents(o,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ju(){let i=null,e=!1,t=null,n=null;function s(a,h){t(a,h),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function jd(i,e){let t=e.isWebGL2,n=new WeakMap;function s(r,c){let u=r.array,d=r.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,d),r.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(r.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:r.version,size:f}}function a(r,c,u){let d=c.array,f=c._updateRange,g=c.updateRanges;if(i.bindBuffer(u,r),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function h(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);let c=n.get(r);c&&(i.deleteBuffer(c.buffer),n.delete(r))}function l(r,c){if(r.isGLBufferAttribute){let d=n.get(r);(!d||d.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}r.isInterleavedBufferAttribute&&(r=r.data);let u=n.get(r);if(u===void 0)n.set(r,s(r,c));else if(u.version<r.version){if(u.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,r,c),u.version=r.version}}return{get:h,remove:o,update:l}}var Ni=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,h=t/2,o=Math.floor(n),l=Math.floor(s),r=o+1,c=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){let _=p*d-h;for(let y=0;y<r;y++){let b=y*u-a;g.push(b,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let y=_+r*p,b=_+r*(p+1),T=_+1+r*(p+1),A=_+1+r*p;f.push(y,b,A),f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,H0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Kd,alphahash_pars_fragment:Qd,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:s0,aomap_pars_fragment:a0,batching_pars_vertex:r0,batching_vertex:o0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:f0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:x0,color_pars_fragment:v0,color_pars_vertex:_0,color_vertex:y0,common:b0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:w0,displacementmap_pars_vertex:S0,displacementmap_vertex:E0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:L0,envmap_common_pars_fragment:P0,envmap_pars_fragment:I0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:X0,envmap_vertex:U0,fog_vertex:N0,fog_pars_vertex:z0,fog_fragment:F0,fog_pars_fragment:O0,gradientmap_pars_fragment:B0,lightmap_fragment:k0,lightmap_pars_fragment:H0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:$0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:j0,lights_fragment_begin:K0,lights_fragment_maps:Q0,lights_fragment_end:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:ap,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphcolor_vertex:up,morphnormal_vertex:fp,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:vp,normal_vertex:_p,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Sp,opaque_fragment:Ep,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Lp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:zp,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:kp,specularmap_fragment:Hp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:$p,uv_pars_vertex:Yp,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:jp,background_frag:Kp,backgroundCube_vert:Qp,backgroundCube_frag:em,cube_vert:tm,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:am,distanceRGBA_frag:rm,equirect_vert:om,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:vm,meshphong_vert:_m,meshphong_frag:ym,meshphysical_vert:bm,meshphysical_frag:Mm,meshtoon_vert:wm,meshtoon_frag:Sm,points_vert:Em,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Lm},xe={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ni={basic:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new de(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:gn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:gn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:gn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new de(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:gn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:gn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:gn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:gn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:gn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:gn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:gn([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:gn([xe.lights,xe.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ni.physical={uniforms:gn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var yr={r:0,b:0,g:0};function Pm(i,e,t,n,s,a,h){let o=new de(0),l=a===!0?0:1,r,c,u=null,d=0,f=null;function g(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,l):y&&y.isColor&&(v(y,1),_=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,h):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,h),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===mo)?(c===void 0&&(c=new Ve(new Cn(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Bs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(r===void 0&&(r=new Ve(new Ni(2,2),new Ot({name:"BackgroundMaterial",uniforms:Bs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(r)),r.material.uniforms.t2D.value=y,r.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,r.material.toneMapped=mt.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),r.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(r.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),r.layers.enableAll(),m.unshift(r,r.geometry,r.material,0,0,null))}function v(m,p){m.getRGB(yr,Ju(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,p,h)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Im(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),h=n.isWebGL2||a!==null,o={},l=m(null),r=l,c=!1;function u(C,E,S,L,R){let F=!1;if(h){let $=v(L,S,E);r!==$&&(r=$,f(r.object)),F=p(C,L,S,R),F&&_(C,L,S,R)}else{let $=E.wireframe===!0;(r.geometry!==L.id||r.program!==S.id||r.wireframe!==$)&&(r.geometry=L.id,r.program=S.id,r.wireframe=$,F=!0)}R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,k(C,E,S,L),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function d(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function f(C){return n.isWebGL2?i.bindVertexArray(C):a.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function v(C,E,S){let L=S.wireframe===!0,R=o[C.id];R===void 0&&(R={},o[C.id]=R);let F=R[E.id];F===void 0&&(F={},R[E.id]=F);let $=F[L];return $===void 0&&($=m(d()),F[L]=$),$}function m(C){let E=[],S=[],L=[];for(let R=0;R<s;R++)E[R]=0,S[R]=0,L[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:S,attributeDivisors:L,object:C,attributes:{},index:null}}function p(C,E,S,L){let R=r.attributes,F=E.attributes,$=0,V=S.getAttributes();for(let j in V)if(V[j].location>=0){let W=R[j],re=F[j];if(re===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),W===void 0||W.attribute!==re||re&&W.data!==re.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function _(C,E,S,L){let R={},F=E.attributes,$=0,V=S.getAttributes();for(let j in V)if(V[j].location>=0){let W=F[j];W===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(W=C.instanceColor));let re={};re.attribute=W,W&&W.data&&(re.data=W.data),R[j]=re,$++}r.attributes=R,r.attributesNum=$,r.index=L}function y(){let C=r.newAttributes;for(let E=0,S=C.length;E<S;E++)C[E]=0}function b(C){T(C,0)}function T(C,E){let S=r.newAttributes,L=r.enabledAttributes,R=r.attributeDivisors;S[C]=1,L[C]===0&&(i.enableVertexAttribArray(C),L[C]=1),R[C]!==E&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,E),R[C]=E)}function A(){let C=r.newAttributes,E=r.enabledAttributes;for(let S=0,L=E.length;S<L;S++)E[S]!==C[S]&&(i.disableVertexAttribArray(S),E[S]=0)}function P(C,E,S,L,R,F,$){$===!0?i.vertexAttribIPointer(C,E,S,R,F):i.vertexAttribPointer(C,E,S,L,R,F)}function k(C,E,S,L){if(n.isWebGL2===!1&&(C.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let R=L.attributes,F=S.getAttributes(),$=E.defaultAttributeValues;for(let V in F){let j=F[V];if(j.location>=0){let q=R[V];if(q===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){let W=q.normalized,re=q.itemSize,be=t.get(q);if(be===void 0)continue;let Te=be.buffer,Oe=be.type,ke=be.bytesPerElement,ze=n.isWebGL2===!0&&(Oe===i.INT||Oe===i.UNSIGNED_INT||q.gpuType===Bu);if(q.isInterleavedBufferAttribute){let tt=q.data,K=tt.stride,Yt=q.offset;if(tt.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)T(j.location+le,tt.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let le=0;le<j.locationSize;le++)b(j.location+le);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let le=0;le<j.locationSize;le++)P(j.location+le,re/j.locationSize,Oe,W,K*ke,(Yt+re/j.locationSize*le)*ke,ze)}else{if(q.isInstancedBufferAttribute){for(let tt=0;tt<j.locationSize;tt++)T(j.location+tt,q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let tt=0;tt<j.locationSize;tt++)b(j.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let tt=0;tt<j.locationSize;tt++)P(j.location+tt,re/j.locationSize,Oe,W,re*ke,re/j.locationSize*tt*ke,ze)}}else if($!==void 0){let W=$[V];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(j.location,W);break;case 3:i.vertexAttrib3fv(j.location,W);break;case 4:i.vertexAttrib4fv(j.location,W);break;default:i.vertexAttrib1fv(j.location,W)}}}}A()}function M(){B();for(let C in o){let E=o[C];for(let S in E){let L=E[S];for(let R in L)g(L[R].object),delete L[R];delete E[S]}delete o[C]}}function w(C){if(o[C.id]===void 0)return;let E=o[C.id];for(let S in E){let L=E[S];for(let R in L)g(L[R].object),delete L[R];delete E[S]}delete o[C.id]}function U(C){for(let E in o){let S=o[E];if(S[C.id]===void 0)continue;let L=S[C.id];for(let R in L)g(L[R].object),delete L[R];delete S[C.id]}}function B(){X(),c=!0,r!==l&&(r=l,f(r.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:b,disableUnusedAttributes:A}}function Dm(i,e,t,n){let s=n.isWebGL2,a;function h(c){a=c}function o(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,c,u,d),t.update(u,a,d)}function r(c,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{f.multiDrawArraysWEBGL(a,c,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,a,1)}}this.setMode=h,this.render=o,this.renderInstances=l,this.renderMultiDraw=r}function Um(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let r=h||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,b=h||e.has("OES_texture_float"),T=y&&b,A=h?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:r,getMaxAnisotropy:s,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:A}}function Nm(i){let e=this,t=null,n=0,s=!1,a=!1,h=new Yn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?c(null):r();else{let _=a?0:n,y=_*4,b=p.clippingState||null;l.value=b,b=c(g,d,y,f);for(let T=0;T!==y;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function r(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=f;y!==v;++y,b+=4)h.copy(u[y]).applyMatrix4(_,o),h.normal.toArray(m,b),m[b+3]=h.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function zm(i){let e=new WeakMap;function t(h,o){return o===Ml?h.mapping=Us:o===wl&&(h.mapping=Ns),h}function n(h){if(h&&h.isTexture){let o=h.mapping;if(o===Ml||o===wl)if(e.has(h)){let l=e.get(h).texture;return t(l,h.mapping)}else{let l=h.image;if(l&&l.height>0){let r=new Il(l.height/2);return r.fromEquirectangularTexture(i,h),e.set(h,r),h.addEventListener("dispose",s),t(r.texture,h.mapping)}else return null}}return h}function s(h){let o=h.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var ks=class extends Yr{constructor(e=-1,t=1,n=1,s=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,h=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let r=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=r*this.view.offsetX,h=a+r*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,h,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,Jh=[.125,.215,.35,.446,.526,.582],Zi=20,ll=new ks,jh=new de,cl=null,hl=0,ul=0,$i=(1+Math.sqrt(5))/2,Ms=1/$i,Kh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,$i,Ms),new O(0,$i,-Ms),new O(Ms,0,$i),new O(-Ms,0,$i),new O($i,Ms,0),new O(-$i,Ms,0)],Jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cl,hl,ul),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Rn,format:Jn,colorSpace:xi,depthBuffer:!1},s=Qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(a)),this._blurMaterial=Om(a,e,t)}return s}_compileMaterial(e){let t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,n,s){let o=new sn(90,1,t,n),l=[1,-1,1,1,1,1],r=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(jh),c.toneMapping=Pi,c.autoClear=!1;let f=new Fn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Ve(new Cn,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(jh),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,l[p],0),o.lookAt(r[p],0,0)):_===1?(o.up.set(0,0,l[p]),o.lookAt(0,r[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,r[p]));let y=this._cubeSize;br(s,_*y,p>2?y:0,y,y),c.setRenderTarget(s),v&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Us||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let a=s?this._cubemapMaterial:this._equirectMaterial,h=new Ve(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(h,ll)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),h=Kh[(s-1)%Kh.length];this._blur(e,s-1,s,a,h)}t.autoClear=n}_blur(e,t,n,s,a){let h=this._pingPongRenderTarget;this._halfBlur(e,h,t,n,s,"latitudinal",a),this._halfBlur(h,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,h,o){let l=this._renderer,r=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Ve(this._lodPlanes[s],r),d=r.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),v=a/g,m=isFinite(a)?1+Math.floor(c*v):Zi;m>Zi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);let p=[],_=0;for(let P=0;P<Zi;++P){let k=P/v,M=Math.exp(-k*k/2);p.push(M),P===0?_+=M:P<m&&(_+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=h==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let b=this._sizeLods[s],T=3*b*(s>y-Rs?s-y+Rs:0),A=4*(this._cubeSize-b);br(t,T,A,3*b,2*b),l.setRenderTarget(t),l.render(u,ll)}};function Fm(i){let e=[],t=[],n=[],s=i,a=i-Rs+1+Jh.length;for(let h=0;h<a;h++){let o=Math.pow(2,s);t.push(o);let l=1/o;h>i-Rs?l=Jh[h-i+Rs-1]:h===0&&(l=0),n.push(l);let r=1/(o-2),c=-r,u=1+r,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,k=A>2?0:-1,M=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];_.set(M,v*g*A),y.set(d,m*g*A);let w=[A,A,A,A,A,A];b.set(w,p*g*A)}let T=new gt;T.setAttribute("position",new Dt(_,v)),T.setAttribute("uv",new Dt(y,m)),T.setAttribute("faceIndex",new Dt(b,p)),e.push(T),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qh(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Om(i,e,t){let n=new Float32Array(Zi),s=new O(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function eu(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function tu(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,r=l===Ml||l===wl,c=l===Us||l===Ns;if(r||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Jr(i)),u=r?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(r&&u&&u.height>0||c&&u&&s(u)){t===null&&(t=new Jr(i));let d=r?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function s(o){let l=0,r=6;for(let c=0;c<r;c++)o[c]!==void 0&&l++;return l===r}function a(o){let l=o.target;l.removeEventListener("dispose",a);let r=e.get(l);r!==void 0&&(e.delete(l),r.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:h}}function km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hm(i,e,t,n){let s={},a=new WeakMap;function h(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",h),delete s[d.id];let f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",h),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function r(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let y=0,b=_.length;y<b;y+=3){let T=_[y+0],A=_[y+1],P=_[y+2];d.push(T,A,A,P,P,T)}}else if(g!==void 0){let _=g.array;v=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let T=y+0,A=y+1,P=y+2;d.push(T,A,A,P,P,T)}}else return;let m=new(Yu(d)?$r:qr)(d,1);m.version=v;let p=a.get(u);p&&e.remove(p),a.set(u,m)}function c(u){let d=a.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&r(u)}else r(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Vm(i,e,t,n){let s=n.isWebGL2,a;function h(f){a=f}let o,l;function r(f){o=f.type,l=f.bytesPerElement}function c(f,g){i.drawElements(a,g,o,f*l),t.update(g,a,1)}function u(f,g,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](a,g,o,f*l,v),t.update(g,a,v)}function d(f,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(a,g,0,o,f,0,v);let p=0;for(let _=0;_<v;_++)p+=g[_];t.update(p,a,1)}}this.setMode=h,this.setIndex=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Gm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,h,o){switch(t.calls++,h){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wm(i,e){return i[0]-e[0]}function Xm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qm(i,e,t){let n={},s=new Float32Array(8),a=new WeakMap,h=new It,o=[];for(let r=0;r<8;r++)o[r]=[r,0];function l(r,c,u){let d=r.morphTargetInfluences;if(e.isWebGL2===!0){let f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=f!==void 0?f.length:0,v=a.get(c);if(v===void 0||v.count!==g){let C=function(){B.dispose(),a.delete(c),c.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();let _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],P=c.morphAttributes.color||[],k=0;_===!0&&(k=1),y===!0&&(k=2),b===!0&&(k=3);let M=c.attributes.position.count*k,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let U=new Float32Array(M*w*4*g),B=new Wr(U,M,w,g);B.type=Li,B.needsUpdate=!0;let X=k*4;for(let E=0;E<g;E++){let S=T[E],L=A[E],R=P[E],F=M*w*4*E;for(let $=0;$<S.count;$++){let V=$*X;_===!0&&(h.fromBufferAttribute(S,$),U[F+V+0]=h.x,U[F+V+1]=h.y,U[F+V+2]=h.z,U[F+V+3]=0),y===!0&&(h.fromBufferAttribute(L,$),U[F+V+4]=h.x,U[F+V+5]=h.y,U[F+V+6]=h.z,U[F+V+7]=0),b===!0&&(h.fromBufferAttribute(R,$),U[F+V+8]=h.x,U[F+V+9]=h.y,U[F+V+10]=h.z,U[F+V+11]=R.itemSize===4?h.w:1)}}v={count:g,texture:B,size:new ce(M,w)},a.set(c,v),c.addEventListener("dispose",C)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,g=n[c.id];if(g===void 0||g.length!==f){g=[];for(let y=0;y<f;y++)g[y]=[y,0];n[c.id]=g}for(let y=0;y<f;y++){let b=g[y];b[0]=y,b[1]=d[y]}g.sort(Xm);for(let y=0;y<8;y++)y<f&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Wm);let v=c.morphAttributes.position,m=c.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let b=o[y],T=b[0],A=b[1];T!==Number.MAX_SAFE_INTEGER&&A?(v&&c.getAttribute("morphTarget"+y)!==v[T]&&c.setAttribute("morphTarget"+y,v[T]),m&&c.getAttribute("morphNormal"+y)!==m[T]&&c.setAttribute("morphNormal"+y,m[T]),s[y]=A,p+=A):(v&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),s[y]=0)}let _=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $m(i,e,t,n){let s=new WeakMap;function a(l){let r=n.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==r&&(e.update(u),s.set(u,r)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==r&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,r))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==r&&(d.update(),s.set(d,r))}return u}function h(){s=new WeakMap}function o(l){let r=l.target;r.removeEventListener("dispose",o),t.remove(r.instanceMatrix),r.instanceColor!==null&&t.remove(r.instanceColor)}return{update:a,dispose:h}}var jr=class extends zn{constructor(e,t,n,s,a,h,o,l,r,c){if(c=c!==void 0?c:Ki,c!==Ki&&c!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Ki&&(n=Ci),n===void 0&&c===Fs&&(n=ji),super(null,s,a,h,o,l,c,n,r),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ku=new zn,Qu=new jr(1,1);Qu.compareFunction=$u;var ef=new Wr,tf=new Ll,nf=new Zr,nu=[],iu=[],su=new Float32Array(16),au=new Float32Array(9),ru=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=nu[s];if(a===void 0&&(a=new Float32Array(s),nu[s]=a),e!==0){n.toArray(a,0);for(let h=1,o=0;h!==e;++h)o+=t,i[h].toArray(a,o)}return a}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xo(i,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),jt(t,n)}}function Qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),jt(t,n)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),jt(t,n)}}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a=this.type===i.SAMPLER_2D_SHADOW?Qu:Ku;t.setTexture2D(e||a,s)}function hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tf,s)}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nf,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ef,s)}function dg(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return Jm;case 35666:return jm;case 35674:return Km;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return ag;case 36294:return rg;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(i,e){i.uniform1fv(this.addr,e)}function mg(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function gg(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function xg(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yg(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function Mg(i,e){i.uniform2iv(this.addr,e)}function wg(i,e){i.uniform3iv(this.addr,e)}function Sg(i,e){i.uniform4iv(this.addr,e)}function Eg(i,e){i.uniform1uiv(this.addr,e)}function Tg(i,e){i.uniform2uiv(this.addr,e)}function Ag(i,e){i.uniform3uiv(this.addr,e)}function Rg(i,e){i.uniform4uiv(this.addr,e)}function Cg(i,e,t){let n=this.cache,s=e.length,a=xo(t,s);Jt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let h=0;h!==s;++h)t.setTexture2D(e[h]||Ku,a[h])}function Lg(i,e,t){let n=this.cache,s=e.length,a=xo(t,s);Jt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let h=0;h!==s;++h)t.setTexture3D(e[h]||tf,a[h])}function Pg(i,e,t){let n=this.cache,s=e.length,a=xo(t,s);Jt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let h=0;h!==s;++h)t.setTextureCube(e[h]||nf,a[h])}function Ig(i,e,t){let n=this.cache,s=e.length,a=xo(t,s);Jt(n,a)||(i.uniform1iv(this.addr,a),jt(n,a));for(let h=0;h!==s;++h)t.setTexture2DArray(e[h]||ef,a[h])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return vg;case 35675:return _g;case 35676:return yg;case 5124:case 35670:return bg;case 35667:case 35671:return Mg;case 35668:case 35672:return wg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}var Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,h=s.length;a!==h;++a){let o=s[a];o.setValue(e,t[o.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function Ug(i,e,t){let n=i.name,s=n.length;for(fl.lastIndex=0;;){let a=fl.exec(n),h=fl.lastIndex,o=a[1],l=a[2]==="]",r=a[3];if(l&&(o=o|0),r===void 0||r==="["&&h+2===s){ou(t,r===void 0?new Dl(o,i,e):new Ul(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Nl(o),ou(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),h=e.getUniformLocation(t,a.name);Ug(a,h,this)}}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,h=t.length;a!==h;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let h=e[s];h.id in t&&n.push(h)}return n}};function lu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ng=37297,zg=0;function Fg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let h=s;h<a;h++){let o=h+1;n.push(`${o===e?">":" "} ${o}: ${t[h]}`)}return n.join(`
`)}function Og(i){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(i),n;switch(e===t?n="":e===Br&&t===Or?n="LinearDisplayP3ToLinearSRGB":e===Or&&t===Br&&(n="LinearSRGBToLinearDisplayP3"),i){case xi:case go:return[n,"LinearTransferOETF"];case _t:case bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let h=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Fg(i.getShaderSource(e),h)}else return s}function Bg(i,e){let t=Og(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kg(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case xc:t="OptimizedCineon";break;case Ua:t="ACESFilmic";break;case vc:t="AgX";break;case hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function Gg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),h=a.name,o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[h]={type:a.type,location:i.getAttribLocation(e,h),locationSize:o}}return t}function Cs(i){return i!==""}function hu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(Xg,$g)}var qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $g(i,e){let t=Je[e];if(t===void 0){let n=qg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(Yg,Zg)}function Zg(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function du(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function Qg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function ex(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tx(i,e,t,n){let s=i.getContext(),a=t.defines,h=t.vertexShader,o=t.fragmentShader,l=Jg(t),r=jg(t),c=Kg(t),u=Qg(t),d=ex(t),f=t.isWebGL2?"":Hg(t),g=Vg(t),v=Gg(a),m=s.createProgram(),p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[f,du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+r:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Pi?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Bg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),h=zl(h),h=hu(h,t),h=uu(h,t),o=zl(o),o=hu(o,t),o=uu(o,t),h=fu(h),o=fu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=y+p+h,T=y+_+o,A=lu(s,s.VERTEX_SHADER,b),P=lu(s,s.FRAGMENT_SHADER,T);s.attachShader(m,A),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(B){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(A).trim(),E=s.getShaderInfoLog(P).trim(),S=!0,L=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(S=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,P);else{let R=cu(s,A,"vertex"),F=cu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+R+`
`+F)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(C===""||E==="")&&(L=!1);L&&(B.diagnostics={runnable:S,programLog:X,vertexShader:{log:C,prefix:p},fragmentShader:{log:E,prefix:_}})}s.deleteShader(A),s.deleteShader(P),M=new Ds(s,m),w=Wg(s,m)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,Ng)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=P,this}var nx=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),h=this._getShaderCacheForMaterial(e);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ol(e),t.set(e,n)),n}},Ol=class{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}};function ix(i,e,t,n,s,a,h){let o=new xa,l=new Fl,r=[],c=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,w,U,B,X){let C=B.fog,E=X.geometry,S=M.isMeshStandardMaterial?B.environment:null,L=(M.isMeshStandardMaterial?t:e).get(M.envMap||S),R=L&&L.mapping===mo?L.image.height:null,F=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let $=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,V=$!==void 0?$.length:0,j=0;E.morphAttributes.position!==void 0&&(j=1),E.morphAttributes.normal!==void 0&&(j=2),E.morphAttributes.color!==void 0&&(j=3);let q,W,re,be;if(F){let dn=ni[F];q=dn.vertexShader,W=dn.fragmentShader}else q=M.vertexShader,W=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),be=l.getFragmentShaderID(M);let Te=i.getRenderTarget(),Oe=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,ze=!!M.map,tt=!!M.matcap,K=!!L,Yt=!!M.aoMap,le=!!M.lightMap,ue=!!M.bumpMap,N=!!M.normalMap,G=!!M.displacementMap,H=!!M.emissiveMap,D=!!M.metalnessMap,I=!!M.roughnessMap,Z=M.anisotropy>0,oe=M.clearcoat>0,ae=M.iridescence>0,he=M.sheen>0,Le=M.transmission>0,_e=Z&&!!M.anisotropyMap,Re=oe&&!!M.clearcoatMap,He=oe&&!!M.clearcoatNormalMap,pe=oe&&!!M.clearcoatRoughnessMap,ne=ae&&!!M.iridescenceMap,$e=ae&&!!M.iridescenceThicknessMap,Pe=he&&!!M.sheenColorMap,Ae=he&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,Se=!!M.specularColorMap,Ue=!!M.specularIntensityMap,ut=Le&&!!M.transmissionMap,Tt=Le&&!!M.thicknessMap,Ke=!!M.gradientMap,ge=!!M.alphaMap,Y=M.alphaTest>0,ye=!!M.alphaHash,ve=!!M.extensions,Fe=!!E.attributes.uv1,Be=!!E.attributes.uv2,pt=!!E.attributes.uv3,At=Pi;return M.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(At=i.toneMapping),{isWebGL2:c,shaderID:F,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:W,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ke,instancing:Oe,instancingColor:Oe&&X.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:xi,map:ze,matcap:tt,envMap:K,envMapMode:K&&L.mapping,envMapCubeUVHeight:R,aoMap:Yt,lightMap:le,bumpMap:ue,normalMap:N,displacementMap:d&&G,emissiveMap:H,normalMapObjectSpace:N&&M.normalMapType===Md,normalMapTangentSpace:N&&M.normalMapType===yc,metalnessMap:D,roughnessMap:I,anisotropy:Z,anisotropyMap:_e,clearcoat:oe,clearcoatMap:Re,clearcoatNormalMap:He,clearcoatRoughnessMap:pe,iridescence:ae,iridescenceMap:ne,iridescenceThicknessMap:$e,sheen:he,sheenColorMap:Pe,sheenRoughnessMap:Ae,specularMap:Ie,specularColorMap:Se,specularIntensityMap:Ue,transmission:Le,transmissionMap:ut,thicknessMap:Tt,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Ps,alphaMap:ge,alphaTest:Y,alphaHash:ye,combine:M.combine,mapUv:ze&&v(M.map.channel),aoMapUv:Yt&&v(M.aoMap.channel),lightMapUv:le&&v(M.lightMap.channel),bumpMapUv:ue&&v(M.bumpMap.channel),normalMapUv:N&&v(M.normalMap.channel),displacementMapUv:G&&v(M.displacementMap.channel),emissiveMapUv:H&&v(M.emissiveMap.channel),metalnessMapUv:D&&v(M.metalnessMap.channel),roughnessMapUv:I&&v(M.roughnessMap.channel),anisotropyMapUv:_e&&v(M.anisotropyMap.channel),clearcoatMapUv:Re&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(M.sheenRoughnessMap.channel),specularMapUv:Ie&&v(M.specularMap.channel),specularColorMapUv:Se&&v(M.specularColorMap.channel),specularIntensityMapUv:Ue&&v(M.specularIntensityMap.channel),transmissionMapUv:ut&&v(M.transmissionMap.channel),thicknessMapUv:Tt&&v(M.thicknessMap.channel),alphaMapUv:ge&&v(M.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(N||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Be,vertexUv3s:pt,pointsUvs:X.isPoints===!0&&!!E.attributes.uv&&(ze||ge),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ve&&M.extensions.derivatives===!0,extensionFragDepth:ve&&M.extensions.fragDepth===!0,extensionDrawBuffers:ve&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(_(w,M),y(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function y(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){let w=g[M.type],U;if(w){let B=ni[w];U=Fi.clone(B.uniforms)}else U=M.uniforms;return U}function T(M,w){let U;for(let B=0,X=r.length;B<X;B++){let C=r[B];if(C.cacheKey===w){U=C,++U.usedTimes;break}}return U===void 0&&(U=new tx(i,w,M,a),r.push(U)),U}function A(M){if(--M.usedTimes===0){let w=r.indexOf(M);r[w]=r[r.length-1],r.pop(),M.destroy()}}function P(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:r,dispose:k}}function sx(){let i=new WeakMap;function e(a){let h=i.get(a);return h===void 0&&(h={},i.set(a,h)),h}function t(a){i.delete(a)}function n(a,h,o){i.get(a)[h]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mu(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function h(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){let p=h(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,v,m){let p=h(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function r(u,d){t.length>1&&t.sort(u||ax),n.length>1&&n.sort(d||pu),s.length>1&&s.sort(d||pu)}function c(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:c,sort:r}}function rx(){let i=new WeakMap;function e(n,s){let a=i.get(n),h;return a===void 0?(h=new mu,i.set(n,[h])):s>=a.length?(h=new mu,a.push(h)):h=a[s],h}function t(){i=new WeakMap}return{get:e,dispose:t}}function ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new de};break;case"SpotLight":t={position:new O,direction:new O,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function lx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cx=0;function hx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i,e){let t=new ox,n=lx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new O);let a=new O,h=new Ye,o=new Ye;function l(c,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let v=0,m=0,p=0,_=0,y=0,b=0,T=0,A=0,P=0,k=0,M=0;c.sort(hx);let w=u===!0?Math.PI:1;for(let B=0,X=c.length;B<X;B++){let C=c[B],E=C.color,S=C.intensity,L=C.distance,R=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=E.r*S*w,f+=E.g*S*w,g+=E.b*S*w;else if(C.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(C.sh.coefficients[F],S);M++}else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){let $=C.shadow,V=n.get(C);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,s.directionalShadow[v]=V,s.directionalShadowMap[v]=R,s.directionalShadowMatrix[v]=C.shadow.matrix,b++}s.directional[v]=F,v++}else if(C.isSpotLight){let F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(E).multiplyScalar(S*w),F.distance=L,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,s.spot[p]=F;let $=C.shadow;if(C.map&&(s.spotLightMap[P]=C.map,P++,$.updateMatrices(C),C.castShadow&&k++),s.spotLightMatrix[p]=$.matrix,C.castShadow){let V=n.get(C);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,s.spotShadow[p]=V,s.spotShadowMap[p]=R,A++}p++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(E).multiplyScalar(S),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),s.rectArea[_]=F,_++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity*w),F.distance=C.distance,F.decay=C.decay,C.castShadow){let $=C.shadow,V=n.get(C);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,s.pointShadow[m]=V,s.pointShadowMap[m]=R,s.pointShadowMatrix[m]=C.shadow.matrix,T++}s.point[m]=F,m++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(S*w),F.groundColor.copy(C.groundColor).multiplyScalar(S*w),s.hemi[y]=F,y++}}_>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_FLOAT_1,s.rectAreaLTC2=xe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=xe.LTC_HALF_1,s.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==_||U.hemiLength!==y||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==A||U.numSpotMaps!==P||U.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=A+P-k,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=_,U.hemiLength=y,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=A,U.numSpotMaps=P,U.numLightProbes=M,s.version=cx++)}function r(c,u){let d=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let b=c[_];if(b.isDirectionalLight){let T=s.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),d++}else if(b.isSpotLight){let T=s.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let T=s.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),o.identity(),h.copy(b.matrixWorld),h.premultiply(p),o.extractRotation(h),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let T=s.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let T=s.hemi[m];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:r,state:s}}function gu(i,e){let t=new ux(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function h(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function r(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:r,pushLight:h,pushShadow:o}}function fx(i,e){let t=new WeakMap;function n(a,h=0){let o=t.get(a),l;return o===void 0?(l=new gu(i,e),t.set(a,[l])):h>=o.length?(l=new gu(i,e),o.push(l)):l=o[h],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Bl=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mx(i,e,t){let n=new va,s=new ce,a=new ce,h=new It,o=new Bl({depthPacking:bd}),l=new kl,r={},c=t.maxTextureSize,u={[Di]:hn,[hn]:Di,[Ct]:Ct},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:dx,fragmentShader:px}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ve(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let p=this.type;this.render=function(A,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=p!==di&&this.type===di,C=p===di&&this.type!==di;for(let E=0,S=A.length;E<S;E++){let L=A[E],R=L.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;s.copy(R.mapSize);let F=R.getFrameExtents();if(s.multiply(F),a.copy(R.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/F.x),s.x=a.x*F.x,R.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/F.y),s.y=a.y*F.y,R.mapSize.y=a.y)),R.map===null||X===!0||C===!0){let V=this.type!==di?{minFilter:xn,magFilter:xn}:{};R.map!==null&&R.map.dispose(),R.map=new Zt(s.x,s.y,V),R.map.texture.name=L.name+".shadowMap",R.camera.updateProjectionMatrix()}i.setRenderTarget(R.map),i.clear();let $=R.getViewportCount();for(let V=0;V<$;V++){let j=R.getViewport(V);h.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),B.viewport(h),R.updateMatrices(L,V),n=R.getFrustum(),b(P,k,R.camera,L,this.type)}R.isPointLightShadow!==!0&&this.type===di&&_(R,k),R.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,U)};function _(A,P){let k=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,k,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,k,f,v,null)}function y(A,P,k,M){let w=null,U=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)w=U;else if(w=k.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let B=w.uuid,X=P.uuid,C=r[B];C===void 0&&(C={},r[B]=C);let E=C[X];E===void 0&&(E=w.clone(),C[X]=E,P.addEventListener("dispose",T)),w=E}if(w.visible=P.visible,w.wireframe=P.wireframe,M===di?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=i.properties.get(w);B.light=k}return w}function b(A,P,k,M,w){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===di)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let X=e.update(A),C=A.material;if(Array.isArray(C)){let E=X.groups;for(let S=0,L=E.length;S<L;S++){let R=E[S],F=C[R.materialIndex];if(F&&F.visible){let $=y(A,F,M,w);A.onBeforeShadow(i,A,P,k,X,$,R),i.renderBufferDirect(k,null,X,$,A,R),A.onAfterShadow(i,A,P,k,X,$,R)}}}else if(C.visible){let E=y(A,C,M,w);A.onBeforeShadow(i,A,P,k,X,E,null),i.renderBufferDirect(k,null,X,E,A,null),A.onAfterShadow(i,A,P,k,X,E,null)}}let B=A.children;for(let X=0,C=B.length;X<C;X++)b(B[X],P,k,M,w)}function T(A){A.target.removeEventListener("dispose",T);for(let k in r){let M=r[k],w=A.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function gx(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,ye=new It,ve=null,Fe=new It(0,0,0,0);return{setMask:function(Be){ve!==Be&&!Y&&(i.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){Y=Be},setClear:function(Be,pt,At,Qt,dn){dn===!0&&(Be*=Qt,pt*=Qt,At*=Qt),ye.set(Be,pt,At,Qt),Fe.equals(ye)===!1&&(i.clearColor(Be,pt,At,Qt),Fe.copy(ye))},reset:function(){Y=!1,ve=null,Fe.set(-1,0,0,0)}}}function a(){let Y=!1,ye=null,ve=null,Fe=null;return{setTest:function(Be){Be?ke(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Be){ye!==Be&&!Y&&(i.depthMask(Be),ye=Be)},setFunc:function(Be){if(ve!==Be){switch(Be){case td:i.depthFunc(i.NEVER);break;case nd:i.depthFunc(i.ALWAYS);break;case id:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case sd:i.depthFunc(i.EQUAL);break;case ad:i.depthFunc(i.GEQUAL);break;case rd:i.depthFunc(i.GREATER);break;case od:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Be}},setLocked:function(Be){Y=Be},setClear:function(Be){Fe!==Be&&(i.clearDepth(Be),Fe=Be)},reset:function(){Y=!1,ye=null,ve=null,Fe=null}}}function h(){let Y=!1,ye=null,ve=null,Fe=null,Be=null,pt=null,At=null,Qt=null,dn=null;return{setTest:function(Rt){Y||(Rt?ke(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Rt){ye!==Rt&&!Y&&(i.stencilMask(Rt),ye=Rt)},setFunc:function(Rt,pn,ti){(ve!==Rt||Fe!==pn||Be!==ti)&&(i.stencilFunc(Rt,pn,ti),ve=Rt,Fe=pn,Be=ti)},setOp:function(Rt,pn,ti){(pt!==Rt||At!==pn||Qt!==ti)&&(i.stencilOp(Rt,pn,ti),pt=Rt,At=pn,Qt=ti)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){dn!==Rt&&(i.clearStencil(Rt),dn=Rt)},reset:function(){Y=!1,ye=null,ve=null,Fe=null,Be=null,pt=null,At=null,Qt=null,dn=null}}}let o=new s,l=new a,r=new h,c=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,y=null,b=null,T=null,A=null,P=null,k=null,M=new de(0,0,0),w=0,U=!1,B=null,X=null,C=null,E=null,S=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,F=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),R=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),R=F>=2);let V=null,j={},q=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),re=new It().fromArray(q),be=new It().fromArray(W);function Te(Y,ye,ve,Fe){let Be=new Uint8Array(4),pt=i.createTexture();i.bindTexture(Y,pt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<ve;At++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Be):i.texImage2D(ye+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Be);return pt}let Oe={};Oe[i.TEXTURE_2D]=Te(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=Te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Te(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),r.setClear(0),ke(i.DEPTH_TEST),l.setFunc(Ur),H(!1),D(jc),ke(i.CULL_FACE),N(ii);function ke(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function ze(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function tt(Y,ye){return f[Y]!==ye?(i.bindFramebuffer(Y,ye),f[Y]=ye,n&&(Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function K(Y,ye){let ve=v,Fe=!1;if(Y)if(ve=g.get(ye),ve===void 0&&(ve=[],g.set(ye,ve)),Y.isWebGLMultipleRenderTargets){let Be=Y.texture;if(ve.length!==Be.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,At=Be.length;pt<At;pt++)ve[pt]=i.COLOR_ATTACHMENT0+pt;ve.length=Be.length,Fe=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,Fe=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Yt(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}let le={[Yi]:i.FUNC_ADD,[kf]:i.FUNC_SUBTRACT,[Hf]:i.FUNC_REVERSE_SUBTRACT};if(n)le[eh]=i.MIN,le[th]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(le[eh]=Y.MIN_EXT,le[th]=Y.MAX_EXT)}let ue={[Vf]:i.ZERO,[Gf]:i.ONE,[Wf]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[Yf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[jf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Qf]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function N(Y,ye,ve,Fe,Be,pt,At,Qt,dn,Rt){if(Y===ii){p===!0&&(ze(i.BLEND),p=!1);return}if(p===!1&&(ke(i.BLEND),p=!0),Y!==Bf){if(Y!==_||Rt!==U){if((y!==Yi||A!==Yi)&&(i.blendEquation(i.FUNC_ADD),y=Yi,A=Yi),Rt)switch(Y){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}b=null,T=null,P=null,k=null,M.set(0,0,0),w=0,_=Y,U=Rt}return}Be=Be||ye,pt=pt||ve,At=At||Fe,(ye!==y||Be!==A)&&(i.blendEquationSeparate(le[ye],le[Be]),y=ye,A=Be),(ve!==b||Fe!==T||pt!==P||At!==k)&&(i.blendFuncSeparate(ue[ve],ue[Fe],ue[pt],ue[At]),b=ve,T=Fe,P=pt,k=At),(Qt.equals(M)===!1||dn!==w)&&(i.blendColor(Qt.r,Qt.g,Qt.b,dn),M.copy(Qt),w=dn),_=Y,U=!1}function G(Y,ye){Y.side===Ct?ze(i.CULL_FACE):ke(i.CULL_FACE);let ve=Y.side===hn;ye&&(ve=!ve),H(ve),Y.blending===Ps&&Y.transparent===!1?N(ii):N(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let Fe=Y.stencilWrite;r.setTest(Fe),Fe&&(r.setMask(Y.stencilWriteMask),r.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),r.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Z(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(Y){B!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),B=Y)}function D(Y){Y!==Ff?(ke(i.CULL_FACE),Y!==X&&(Y===jc?i.cullFace(i.BACK):Y===Of?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),X=Y}function I(Y){Y!==C&&(R&&i.lineWidth(Y),C=Y)}function Z(Y,ye,ve){Y?(ke(i.POLYGON_OFFSET_FILL),(E!==ye||S!==ve)&&(i.polygonOffset(ye,ve),E=ye,S=ve)):ze(i.POLYGON_OFFSET_FILL)}function oe(Y){Y?ke(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function ae(Y){Y===void 0&&(Y=i.TEXTURE0+L-1),V!==Y&&(i.activeTexture(Y),V=Y)}function he(Y,ye,ve){ve===void 0&&(V===null?ve=i.TEXTURE0+L-1:ve=V);let Fe=j[ve];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[ve]=Fe),(Fe.type!==Y||Fe.texture!==ye)&&(V!==ve&&(i.activeTexture(ve),V=ve),i.bindTexture(Y,ye||Oe[Y]),Fe.type=Y,Fe.texture=ye)}function Le(){let Y=j[V];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(Y){re.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),re.copy(Y))}function ut(Y){be.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),be.copy(Y))}function Tt(Y,ye){let ve=u.get(ye);ve===void 0&&(ve=new WeakMap,u.set(ye,ve));let Fe=ve.get(Y);Fe===void 0&&(Fe=i.getUniformBlockIndex(ye,Y.name),ve.set(Y,Fe))}function Ke(Y,ye){let Fe=u.get(ye).get(Y);c.get(ye)!==Fe&&(i.uniformBlockBinding(ye,Fe,Y.__bindingPointIndex),c.set(ye,Fe))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},V=null,j={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,y=null,b=null,T=null,A=null,P=null,k=null,M=new de(0,0,0),w=0,U=!1,B=null,X=null,C=null,E=null,S=null,re.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),r.reset()}return{buffers:{color:o,depth:l,stencil:r},enable:ke,disable:ze,bindFramebuffer:tt,drawBuffers:K,useProgram:Yt,setBlending:N,setMaterial:G,setFlipSided:H,setCullFace:D,setLineWidth:I,setPolygonOffset:Z,setScissorTest:oe,activeTexture:ae,bindTexture:he,unbindTexture:Le,compressedTexImage2D:_e,compressedTexImage3D:Re,texImage2D:Ie,texImage3D:Se,updateUBOMapping:Tt,uniformBlockBinding:Ke,texStorage2D:Pe,texStorage3D:Ae,texSubImage2D:He,texSubImage3D:pe,compressedTexSubImage2D:ne,compressedTexSubImage3D:$e,scissor:Ue,viewport:ut,reset:ge}}function xx(i,e,t,n,s,a,h){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,I){return f?new OffscreenCanvas(D,I):Hr("canvas")}function v(D,I,Z,oe){let ae=1;if((D.width>oe||D.height>oe)&&(ae=oe/Math.max(D.width,D.height)),ae<1||I===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let he=I?Rl:Math.floor,Le=he(ae*D.width),_e=he(ae*D.height);u===void 0&&(u=g(Le,_e));let Re=Z?g(Le,_e):u;return Re.width=Le,Re.height=_e,Re.getContext("2d").drawImage(D,0,0,Le,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Le+"x"+_e+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return Dh(D.width)&&Dh(D.height)}function p(D){return o?!1:D.wrapS!==Zn||D.wrapT!==Zn||D.minFilter!==xn&&D.minFilter!==Un}function _(D,I){return D.generateMipmaps&&I&&D.minFilter!==xn&&D.minFilter!==Un}function y(D){i.generateMipmap(D)}function b(D,I,Z,oe,ae=!1){if(o===!1)return I;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he=I;if(I===i.RED&&(Z===i.FLOAT&&(he=i.R32F),Z===i.HALF_FLOAT&&(he=i.R16F),Z===i.UNSIGNED_BYTE&&(he=i.R8)),I===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(he=i.R8UI),Z===i.UNSIGNED_SHORT&&(he=i.R16UI),Z===i.UNSIGNED_INT&&(he=i.R32UI),Z===i.BYTE&&(he=i.R8I),Z===i.SHORT&&(he=i.R16I),Z===i.INT&&(he=i.R32I)),I===i.RG&&(Z===i.FLOAT&&(he=i.RG32F),Z===i.HALF_FLOAT&&(he=i.RG16F),Z===i.UNSIGNED_BYTE&&(he=i.RG8)),I===i.RGBA){let Le=ae?Fr:mt.getTransfer(oe);Z===i.FLOAT&&(he=i.RGBA32F),Z===i.HALF_FLOAT&&(he=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(he=Le===bt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(D,I,Z){return _(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==Un?Math.log2(Math.max(I.width,I.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?I.mipmaps.length:1}function A(D){return D===xn||D===nh||D===zo?i.NEAREST:i.LINEAR}function P(D){let I=D.target;I.removeEventListener("dispose",P),M(I),I.isVideoTexture&&c.delete(I)}function k(D){let I=D.target;I.removeEventListener("dispose",k),U(I)}function M(D){let I=n.get(D);if(I.__webglInit===void 0)return;let Z=D.source,oe=d.get(Z);if(oe){let ae=oe[I.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(D),Object.keys(oe).length===0&&d.delete(Z)}n.remove(D)}function w(D){let I=n.get(D);i.deleteTexture(I.__webglTexture);let Z=D.source,oe=d.get(Z);delete oe[I.__cacheKey],h.memory.textures--}function U(D){let I=D.texture,Z=n.get(D),oe=n.get(I);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),h.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Z.__webglFramebuffer[ae]))for(let he=0;he<Z.__webglFramebuffer[ae].length;he++)i.deleteFramebuffer(Z.__webglFramebuffer[ae][he]);else i.deleteFramebuffer(Z.__webglFramebuffer[ae]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[ae])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ae=0;ae<Z.__webglFramebuffer.length;ae++)i.deleteFramebuffer(Z.__webglFramebuffer[ae]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ae=0;ae<Z.__webglColorRenderbuffer.length;ae++)Z.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[ae]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ae=0,he=I.length;ae<he;ae++){let Le=n.get(I[ae]);Le.__webglTexture&&(i.deleteTexture(Le.__webglTexture),h.memory.textures--),n.remove(I[ae])}n.remove(I),n.remove(D)}let B=0;function X(){B=0}function C(){let D=B;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),B+=1,D}function E(D){let I=[];return I.push(D.wrapS),I.push(D.wrapT),I.push(D.wrapR||0),I.push(D.magFilter),I.push(D.minFilter),I.push(D.anisotropy),I.push(D.internalFormat),I.push(D.format),I.push(D.type),I.push(D.generateMipmaps),I.push(D.premultiplyAlpha),I.push(D.flipY),I.push(D.unpackAlignment),I.push(D.colorSpace),I.join()}function S(D,I){let Z=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Z,D,I);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+I)}function L(D,I){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,I);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+I)}function R(D,I){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){re(Z,D,I);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+I)}function F(D,I){let Z=n.get(D);if(D.version>0&&Z.__version!==D.version){be(Z,D,I);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+I)}let $={[zs]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},V={[xn]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[ud]:i.LINEAR_MIPMAP_NEAREST,[ga]:i.LINEAR_MIPMAP_LINEAR},j={[wd]:i.NEVER,[Cd]:i.ALWAYS,[Sd]:i.LESS,[$u]:i.LEQUAL,[Ed]:i.EQUAL,[Rd]:i.GEQUAL,[Td]:i.GREATER,[Ad]:i.NOTEQUAL};function q(D,I,Z){if(Z?(i.texParameteri(D,i.TEXTURE_WRAP_S,$[I.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,$[I.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,$[I.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,V[I.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,V[I.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(I.wrapS!==Zn||I.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,A(I.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,A(I.minFilter)),I.minFilter!==xn&&I.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),I.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,j[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(I.magFilter===xn||I.minFilter!==zo&&I.minFilter!==ga||I.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&I.type===Rn&&e.has("OES_texture_half_float_linear")===!1)return;(I.anisotropy>1||n.get(I).__currentAnisotropy)&&(i.texParameterf(D,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy)}}function W(D,I){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,I.addEventListener("dispose",P));let oe=I.source,ae=d.get(oe);ae===void 0&&(ae={},d.set(oe,ae));let he=E(I);if(he!==D.__cacheKey){ae[he]===void 0&&(ae[he]={texture:i.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),ae[he].usedTimes++;let Le=ae[D.__cacheKey];Le!==void 0&&(ae[D.__cacheKey].usedTimes--,Le.usedTimes===0&&w(I)),D.__cacheKey=he,D.__webglTexture=ae[he].texture}return Z}function re(D,I,Z){let oe=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(oe=i.TEXTURE_3D);let ae=W(D,I),he=I.source;t.bindTexture(oe,D.__webglTexture,i.TEXTURE0+Z);let Le=n.get(he);if(he.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+Z);let _e=mt.getPrimaries(mt.workingColorSpace),Re=I.colorSpace===Nn?null:mt.getPrimaries(I.colorSpace),He=I.colorSpace===Nn||_e===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let pe=p(I)&&m(I.image)===!1,ne=v(I.image,pe,!1,s.maxTextureSize);ne=H(I,ne);let $e=m(ne)||o,Pe=a.convert(I.format,I.colorSpace),Ae=a.convert(I.type),Ie=b(I.internalFormat,Pe,Ae,I.colorSpace,I.isVideoTexture);q(oe,I,$e);let Se,Ue=I.mipmaps,ut=o&&I.isVideoTexture!==!0&&Ie!==Xu,Tt=Le.__version===void 0||ae===!0,Ke=T(I,ne,$e);if(I.isDepthTexture)Ie=i.DEPTH_COMPONENT,o?I.type===Li?Ie=i.DEPTH_COMPONENT32F:I.type===Ci?Ie=i.DEPTH_COMPONENT24:I.type===ji?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:I.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),I.format===Ki&&Ie===i.DEPTH_COMPONENT&&I.type!==_c&&I.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),I.type=Ci,Ae=a.convert(I.type)),I.format===Fs&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,I.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),I.type=ji,Ae=a.convert(I.type))),Tt&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Ie,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ne.width,ne.height,0,Pe,Ae,null));else if(I.isDataTexture)if(Ue.length>0&&$e){ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Ue[0].width,Ue[0].height);for(let ge=0,Y=Ue.length;ge<Y;ge++)Se=Ue[ge],ut?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,Pe,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ie,Se.width,Se.height,0,Pe,Ae,Se.data);I.generateMipmaps=!1}else ut?(Tt&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,Pe,Ae,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ne.width,ne.height,0,Pe,Ae,ne.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){ut&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Ie,Ue[0].width,Ue[0].height,ne.depth);for(let ge=0,Y=Ue.length;ge<Y;ge++)Se=Ue[ge],I.format!==Jn?Pe!==null?ut?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,ne.depth,Pe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ie,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,ne.depth,Pe,Ae,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ie,Se.width,Se.height,ne.depth,0,Pe,Ae,Se.data)}else{ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Ue[0].width,Ue[0].height);for(let ge=0,Y=Ue.length;ge<Y;ge++)Se=Ue[ge],I.format!==Jn?Pe!==null?ut?t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,Pe,Ae,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ie,Se.width,Se.height,0,Pe,Ae,Se.data)}else if(I.isDataArrayTexture)ut?(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,Ie,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Pe,Ae,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,Pe,Ae,ne.data);else if(I.isData3DTexture)ut?(Tt&&t.texStorage3D(i.TEXTURE_3D,Ke,Ie,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Pe,Ae,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,Pe,Ae,ne.data);else if(I.isFramebufferTexture){if(Tt)if(ut)t.texStorage2D(i.TEXTURE_2D,Ke,Ie,ne.width,ne.height);else{let ge=ne.width,Y=ne.height;for(let ye=0;ye<Ke;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ie,ge,Y,0,Pe,Ae,null),ge>>=1,Y>>=1}}else if(Ue.length>0&&$e){ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,Ue[0].width,Ue[0].height);for(let ge=0,Y=Ue.length;ge<Y;ge++)Se=Ue[ge],ut?t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Pe,Ae,Se):t.texImage2D(i.TEXTURE_2D,ge,Ie,Pe,Ae,Se);I.generateMipmaps=!1}else ut?(Tt&&t.texStorage2D(i.TEXTURE_2D,Ke,Ie,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ae,ne)):t.texImage2D(i.TEXTURE_2D,0,Ie,Pe,Ae,ne);_(I,$e)&&y(oe),Le.__version=he.version,I.onUpdate&&I.onUpdate(I)}D.__version=I.version}function be(D,I,Z){if(I.image.length!==6)return;let oe=W(D,I),ae=I.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Z);let he=n.get(ae);if(ae.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+Z);let Le=mt.getPrimaries(mt.workingColorSpace),_e=I.colorSpace===Nn?null:mt.getPrimaries(I.colorSpace),Re=I.colorSpace===Nn||Le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let He=I.isCompressedTexture||I.image[0].isCompressedTexture,pe=I.image[0]&&I.image[0].isDataTexture,ne=[];for(let ge=0;ge<6;ge++)!He&&!pe?ne[ge]=v(I.image[ge],!1,!0,s.maxCubemapSize):ne[ge]=pe?I.image[ge].image:I.image[ge],ne[ge]=H(I,ne[ge]);let $e=ne[0],Pe=m($e)||o,Ae=a.convert(I.format,I.colorSpace),Ie=a.convert(I.type),Se=b(I.internalFormat,Ae,Ie,I.colorSpace),Ue=o&&I.isVideoTexture!==!0,ut=he.__version===void 0||oe===!0,Tt=T(I,$e,Pe);q(i.TEXTURE_CUBE_MAP,I,Pe);let Ke;if(He){Ue&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Se,$e.width,$e.height);for(let ge=0;ge<6;ge++){Ke=ne[ge].mipmaps;for(let Y=0;Y<Ke.length;Y++){let ye=Ke[Y];I.format!==Jn?Ae!==null?Ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,0,0,ye.width,ye.height,Ae,Ie,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y,Se,ye.width,ye.height,0,Ae,Ie,ye.data)}}}else{Ke=I.mipmaps,Ue&&ut&&(Ke.length>0&&Tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Se,ne[0].width,ne[0].height));for(let ge=0;ge<6;ge++)if(pe){Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ne[ge].width,ne[ge].height,Ae,Ie,ne[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,ne[ge].width,ne[ge].height,0,Ae,Ie,ne[ge].data);for(let Y=0;Y<Ke.length;Y++){let ve=Ke[Y].image[ge].image;Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,0,0,ve.width,ve.height,Ae,Ie,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,Se,ve.width,ve.height,0,Ae,Ie,ve.data)}}else{Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ae,Ie,ne[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,Ae,Ie,ne[ge]);for(let Y=0;Y<Ke.length;Y++){let ye=Ke[Y];Ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,0,0,Ae,Ie,ye.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y+1,Se,Ae,Ie,ye.image[ge])}}}_(I,Pe)&&y(i.TEXTURE_CUBE_MAP),he.__version=ae.version,I.onUpdate&&I.onUpdate(I)}D.__version=I.version}function Te(D,I,Z,oe,ae,he){let Le=a.convert(Z.format,Z.colorSpace),_e=a.convert(Z.type),Re=b(Z.internalFormat,Le,_e,Z.colorSpace);if(!n.get(I).__hasExternalTextures){let pe=Math.max(1,I.width>>he),ne=Math.max(1,I.height>>he);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,he,Re,pe,ne,I.depth,0,Le,_e,null):t.texImage2D(ae,he,Re,pe,ne,0,Le,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),N(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ae,n.get(Z).__webglTexture,0,ue(I)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ae,n.get(Z).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,I,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),I.depthBuffer&&!I.stencilBuffer){let oe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||N(I)){let ae=I.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Li?oe=i.DEPTH_COMPONENT32F:ae.type===Ci&&(oe=i.DEPTH_COMPONENT24));let he=ue(I);N(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,oe,I.width,I.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,oe,I.width,I.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,I.width,I.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(I.depthBuffer&&I.stencilBuffer){let oe=ue(I);Z&&N(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,I.width,I.height):N(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{let oe=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ae=0;ae<oe.length;ae++){let he=oe[ae],Le=a.convert(he.format,he.colorSpace),_e=a.convert(he.type),Re=b(he.internalFormat,Le,_e,he.colorSpace),He=ue(I);Z&&N(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Re,I.width,I.height):N(I)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Re,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Re,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(D,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(I.depthTexture).__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),S(I.depthTexture,0);let oe=n.get(I.depthTexture).__webglTexture,ae=ue(I);if(I.depthTexture.format===Ki)N(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(I.depthTexture.format===Fs)N(I)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ze(D){let I=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!I.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ke(I.__webglFramebuffer,D)}else if(Z){I.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[oe]),I.__webglDepthbuffer[oe]=i.createRenderbuffer(),Oe(I.__webglDepthbuffer[oe],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer=i.createRenderbuffer(),Oe(I.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(D,I,Z){let oe=n.get(D);I!==void 0&&Te(oe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&ze(D)}function K(D){let I=D.texture,Z=n.get(D),oe=n.get(I);D.addEventListener("dispose",k),D.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=I.version,h.memory.textures++);let ae=D.isWebGLCubeRenderTarget===!0,he=D.isWebGLMultipleRenderTargets===!0,Le=m(D)||o;if(ae){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let Re=0;Re<I.mipmaps.length;Re++)Z.__webglFramebuffer[_e][Re]=i.createFramebuffer()}else Z.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(o&&I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<I.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let _e=D.texture;for(let Re=0,He=_e.length;Re<He;Re++){let pe=n.get(_e[Re]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&N(D)===!1){let _e=he?I:[I];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){let He=_e[Re];Z.__webglColorRenderbuffer[Re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Re]);let pe=a.convert(He.format,He.colorSpace),ne=a.convert(He.type),$e=b(He.internalFormat,pe,ne,He.colorSpace,D.isXRRenderTarget===!0),Pe=ue(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,$e,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Re])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),q(i.TEXTURE_CUBE_MAP,I,Le);for(let _e=0;_e<6;_e++)if(o&&I.mipmaps&&I.mipmaps.length>0)for(let Re=0;Re<I.mipmaps.length;Re++)Te(Z.__webglFramebuffer[_e][Re],D,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else Te(Z.__webglFramebuffer[_e],D,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(I,Le)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let _e=D.texture;for(let Re=0,He=_e.length;Re<He;Re++){let pe=_e[Re],ne=n.get(pe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),q(i.TEXTURE_2D,pe,Le),Te(Z.__webglFramebuffer,D,pe,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,0),_(pe,Le)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?_e=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,oe.__webglTexture),q(_e,I,Le),o&&I.mipmaps&&I.mipmaps.length>0)for(let Re=0;Re<I.mipmaps.length;Re++)Te(Z.__webglFramebuffer[Re],D,I,i.COLOR_ATTACHMENT0,_e,Re);else Te(Z.__webglFramebuffer,D,I,i.COLOR_ATTACHMENT0,_e,0);_(I,Le)&&y(_e),t.unbindTexture()}D.depthBuffer&&ze(D)}function Yt(D){let I=m(D)||o,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let oe=0,ae=Z.length;oe<ae;oe++){let he=Z[oe];if(_(he,I)){let Le=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(he).__webglTexture;t.bindTexture(Le,_e),y(Le),t.unbindTexture()}}}function le(D){if(o&&D.samples>0&&N(D)===!1){let I=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,oe=D.height,ae=i.COLOR_BUFFER_BIT,he=[],Le=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(D),Re=D.isWebGLMultipleRenderTargets===!0;if(Re)for(let He=0;He<I.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let He=0;He<I.length;He++){he.push(i.COLOR_ATTACHMENT0+He),D.depthBuffer&&he.push(Le);let pe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(pe===!1&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[He]),pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Le]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Le])),Re){let ne=n.get(I[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,ae,i.NEAREST),r&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Re)for(let He=0;He<I.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,_e.__webglColorRenderbuffer[He]);let pe=n.get(I[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ue(D){return Math.min(s.maxSamples,D.samples)}function N(D){let I=n.get(D);return o&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function G(D){let I=h.render.frame;c.get(D)!==I&&(c.set(D,I),D.update())}function H(D,I){let Z=D.colorSpace,oe=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Tl||Z!==xi&&Z!==Nn&&(mt.getTransfer(Z)===bt?o===!1?e.has("EXT_sRGB")===!0&&oe===Jn?(D.format=Tl,D.minFilter=Un,D.generateMipmaps=!1):I=Vr.sRGBToLinear(I):(oe!==Jn||ae!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),I}this.allocateTextureUnit=C,this.resetTextureUnits=X,this.setTexture2D=S,this.setTexture2DArray=L,this.setTexture3D=R,this.setTextureCube=F,this.rebindTextures=tt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=N}function vx(i,e,t){let n=t.isWebGL2;function s(a,h=Nn){let o,l=mt.getTransfer(h);if(a===Ii)return i.UNSIGNED_BYTE;if(a===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(a===fd)return i.BYTE;if(a===dd)return i.SHORT;if(a===_c)return i.UNSIGNED_SHORT;if(a===Bu)return i.INT;if(a===Ci)return i.UNSIGNED_INT;if(a===Li)return i.FLOAT;if(a===Rn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===pd)return i.ALPHA;if(a===Jn)return i.RGBA;if(a===md)return i.LUMINANCE;if(a===gd)return i.LUMINANCE_ALPHA;if(a===Ki)return i.DEPTH_COMPONENT;if(a===Fs)return i.DEPTH_STENCIL;if(a===Tl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===xd)return i.RED;if(a===Vu)return i.RED_INTEGER;if(a===vd)return i.RG;if(a===Gu)return i.RG_INTEGER;if(a===Wu)return i.RGBA_INTEGER;if(a===Fo||a===Oo||a===Bo||a===ko)if(l===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ih||a===sh||a===ah||a===rh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ih)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Xu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===oh||a===lh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===oh)return l===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===lh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ch||a===hh||a===uh||a===fh||a===dh||a===ph||a===mh||a===gh||a===xh||a===vh||a===_h||a===yh||a===bh||a===Mh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ch)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===uh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===fh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===dh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ph)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===mh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===gh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_h)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===yh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Mh)return l===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ho||a===wh||a===Sh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Ho)return l===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===wh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_d||a===Eh||a===Th||a===Ah)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Ho)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Th)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ah)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ji?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}var Hl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,h=null,o=this._targetRay,l=this._grip,r=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(r&&e.hand){h=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(r,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=r.joints["index-finger-tip"],u=r.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;r.inputState.pinching&&d>f+g?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&d<=f-g&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),r!==null&&(r.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vl=class extends Ui{constructor(e,t){super();let n=this,s=null,a=1,h=null,o="local-floor",l=1,r=null,c=null,u=null,d=null,f=null,g=null,v=t.getContextAttributes(),m=null,p=null,_=[],y=[],b=new ce,T=null,A=new sn;A.layers.enable(1),A.viewport=new It;let P=new sn;P.layers.enable(2),P.viewport=new It;let k=[A,P],M=new Hl;M.layers.enable(1),M.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=_[q];return W===void 0&&(W=new fa,_[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=_[q];return W===void 0&&(W=new fa,_[q]=W),W.getGripSpace()},this.getHand=function(q){let W=_[q];return W===void 0&&(W=new fa,_[q]=W),W.getHandSpace()};function B(q){let W=y.indexOf(q.inputSource);if(W===-1)return;let re=_[W];re!==void 0&&(re.update(q.inputSource,q.frame,r||h),re.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",C);for(let q=0;q<_.length;q++){let W=y[q];W!==null&&(y[q]=null,_[q].disconnect(W))}w=null,U=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r||h},this.setReferenceSpace=function(q){r=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",X),s.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zt(f.framebufferWidth,f.framebufferHeight,{format:Jn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,re=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=v.stencil?Fs:Ki,re=v.stencil?ji:Ci);let Te={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Te),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Zt(d.textureWidth,d.textureHeight,{format:Jn,type:Ii,depthTexture:new jr(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Oe=e.properties.get(p);Oe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),r=null,h=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(q){for(let W=0;W<q.removed.length;W++){let re=q.removed[W],be=y.indexOf(re);be>=0&&(y[be]=null,_[be].disconnect(re))}for(let W=0;W<q.added.length;W++){let re=q.added[W],be=y.indexOf(re);if(be===-1){for(let Oe=0;Oe<_.length;Oe++)if(Oe>=y.length){y.push(re),be=Oe;break}else if(y[Oe]===null){y[Oe]=re,be=Oe;break}if(be===-1)break}let Te=_[be];Te&&Te.connect(re)}}let E=new O,S=new O;function L(q,W,re){E.setFromMatrixPosition(W.matrixWorld),S.setFromMatrixPosition(re.matrixWorld);let be=E.distanceTo(S),Te=W.projectionMatrix.elements,Oe=re.projectionMatrix.elements,ke=Te[14]/(Te[10]-1),ze=Te[14]/(Te[10]+1),tt=(Te[9]+1)/Te[5],K=(Te[9]-1)/Te[5],Yt=(Te[8]-1)/Te[0],le=(Oe[8]+1)/Oe[0],ue=ke*Yt,N=ke*le,G=be/(-Yt+le),H=G*-Yt;W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(H),q.translateZ(G),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let D=ke+G,I=ze+G,Z=ue-H,oe=N+(be-H),ae=tt*ze/I*D,he=K*ze/I*D;q.projectionMatrix.makePerspective(Z,oe,ae,he,D,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function R(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=P.near=A.near=q.near,M.far=P.far=A.far=q.far,(w!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,U=M.far);let W=q.parent,re=M.cameras;R(M,W);for(let be=0;be<re.length;be++)R(re[be],W);re.length===2?L(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),F(q,M,W)};function F(q,W,re){re===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Al*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let $=null;function V(q,W){if(c=W.getViewerPose(r||h),g=W,c!==null){let re=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let be=!1;re.length!==M.cameras.length&&(M.cameras.length=0,be=!0);for(let Te=0;Te<re.length;Te++){let Oe=re[Te],ke=null;if(f!==null)ke=f.getViewport(Oe);else{let tt=u.getViewSubImage(d,Oe);ke=tt.viewport,Te===0&&(e.setRenderTargetTextures(p,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(p))}let ze=k[Te];ze===void 0&&(ze=new sn,ze.layers.enable(Te),ze.viewport=new It,k[Te]=ze),ze.matrix.fromArray(Oe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Oe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ke.x,ke.y,ke.width,ke.height),Te===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),be===!0&&M.cameras.push(ze)}}for(let re=0;re<_.length;re++){let be=y[re],Te=_[re];be!==null&&Te!==void 0&&Te.update(be,W,r||h)}$&&$(q,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}let j=new ju;j.setAnimationLoop(V),this.setAnimationLoop=function(q){$=q},this.dispose=function(){}}};function yx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ju(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),c(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(h(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?r(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,e,t,n){let s={},a={},h=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){let b=y.program;n.uniformBlockBinding(_,b)}function r(_,y){let b=s[_.id];b===void 0&&(g(_),b=c(_),s[_.id]=b,_.addEventListener("dispose",m));let T=y.program;n.updateUBOMapping(_,T);let A=e.render.frame;a[_.id]!==A&&(d(_),a[_.id]=A)}function c(_){let y=u();_.__bindingPointIndex=y;let b=i.createBuffer(),T=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let _=0;_<o;_++)if(h.indexOf(_)===-1)return h.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],b=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,P=b.length;A<P;A++){let k=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,w=k.length;M<w;M++){let U=k[M];if(f(U,A,M,T)===!0){let B=U.__offset,X=Array.isArray(U.value)?U.value:[U.value],C=0;for(let E=0;E<X.length;E++){let S=X[E],L=v(S);typeof S=="number"||typeof S=="boolean"?(U.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,B+C,U.__data)):S.isMatrix3?(U.__data[0]=S.elements[0],U.__data[1]=S.elements[1],U.__data[2]=S.elements[2],U.__data[3]=0,U.__data[4]=S.elements[3],U.__data[5]=S.elements[4],U.__data[6]=S.elements[5],U.__data[7]=0,U.__data[8]=S.elements[6],U.__data[9]=S.elements[7],U.__data[10]=S.elements[8],U.__data[11]=0):(S.toArray(U.__data,C),C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,b,T){let A=_.value,P=y+"_"+b;if(T[P]===void 0)return typeof A=="number"||typeof A=="boolean"?T[P]=A:T[P]=A.clone(),!0;{let k=T[P];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return T[P]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(_){let y=_.uniforms,b=0,T=16;for(let P=0,k=y.length;P<k;P++){let M=Array.isArray(y[P])?y[P]:[y[P]];for(let w=0,U=M.length;w<U;w++){let B=M[w],X=Array.isArray(B.value)?B.value:[B.value];for(let C=0,E=X.length;C<E;C++){let S=X[C],L=v(S),R=b%T;R!==0&&T-R<L.boundary&&(b+=T-R),B.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=L.storage}}}let A=b%T;return A>0&&(b+=T-A),_.__size=b,_.__cache={},this}function v(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let b=h.indexOf(y.__bindingPointIndex);h.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);h=[],s={},a={}}return{bind:l,update:r,dispose:p}}var _a=class{constructor(e={}){let{canvas:t=Pd(),context:n=null,depth:s=!0,stencil:a=!0,alpha:h=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:r=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=h;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let y=this,b=!1,T=0,A=0,P=null,k=-1,M=null,w=new It,U=new It,B=null,X=new de(0),C=0,E=t.width,S=t.height,L=1,R=null,F=null,$=new It(0,0,E,S),V=new It(0,0,E,S),j=!1,q=new va,W=!1,re=!1,be=null,Te=new Ye,Oe=new ce,ke=new O,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return P===null?L:1}let K=n;function Yt(z,J){for(let ee=0;ee<z.length;ee++){let te=z[ee],Q=t.getContext(te,J);if(Q!==null)return Q}return null}try{let z={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",ye,!1),K===null){let J=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&J.shift(),K=Yt(J,z),K===null)throw Yt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let le,ue,N,G,H,D,I,Z,oe,ae,he,Le,_e,Re,He,pe,ne,$e,Pe,Ae,Ie,Se,Ue,ut;function Tt(){le=new km(K),ue=new Um(K,le,e),le.init(ue),Se=new vx(K,le,ue),N=new gx(K,le,ue),G=new Gm(K),H=new sx,D=new xx(K,le,N,H,ue,Se,G),I=new zm(y),Z=new Bm(y),oe=new jd(K,ue),Ue=new Im(K,le,oe,ue),ae=new Hm(K,oe,G,Ue),he=new $m(K,ae,oe,G),Pe=new qm(K,ue,D),pe=new Nm(H),Le=new ix(y,I,Z,le,ue,Ue,pe),_e=new yx(y,H),Re=new rx,He=new fx(le,ue),$e=new Pm(y,I,Z,N,he,d,l),ne=new mx(y,he,ue),ut=new bx(K,G,ue,N),Ae=new Dm(K,le,G,ue),Ie=new Vm(K,le,G,ue),G.programs=Le.programs,y.capabilities=ue,y.extensions=le,y.properties=H,y.renderLists=Re,y.shadowMap=ne,y.state=N,y.info=G}Tt();let Ke=new Vl(y,K);this.xr=Ke,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let z=le.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){let z=le.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(z){z!==void 0&&(L=z,this.setSize(E,S,!1))},this.getSize=function(z){return z.set(E,S)},this.setSize=function(z,J,ee=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=z,S=J,t.width=Math.floor(z*L),t.height=Math.floor(J*L),ee===!0&&(t.style.width=z+"px",t.style.height=J+"px"),this.setViewport(0,0,z,J)},this.getDrawingBufferSize=function(z){return z.set(E*L,S*L).floor()},this.setDrawingBufferSize=function(z,J,ee){E=z,S=J,L=ee,t.width=Math.floor(z*ee),t.height=Math.floor(J*ee),this.setViewport(0,0,z,J)},this.getCurrentViewport=function(z){return z.copy(w)},this.getViewport=function(z){return z.copy($)},this.setViewport=function(z,J,ee,te){z.isVector4?$.set(z.x,z.y,z.z,z.w):$.set(z,J,ee,te),N.viewport(w.copy($).multiplyScalar(L).floor())},this.getScissor=function(z){return z.copy(V)},this.setScissor=function(z,J,ee,te){z.isVector4?V.set(z.x,z.y,z.z,z.w):V.set(z,J,ee,te),N.scissor(U.copy(V).multiplyScalar(L).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(z){N.setScissorTest(j=z)},this.setOpaqueSort=function(z){R=z},this.setTransparentSort=function(z){F=z},this.getClearColor=function(z){return z.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(z=!0,J=!0,ee=!0){let te=0;if(z){let Q=!1;if(P!==null){let Ee=P.texture.format;Q=Ee===Wu||Ee===Gu||Ee===Vu}if(Q){let Ee=P.texture.type,De=Ee===Ii||Ee===Ci||Ee===_c||Ee===ji||Ee===ku||Ee===Hu,We=$e.getClearColor(),qe=$e.getClearAlpha(),nt=We.r,Ze=We.g,Qe=We.b;De?(f[0]=nt,f[1]=Ze,f[2]=Qe,f[3]=qe,K.clearBufferuiv(K.COLOR,0,f)):(g[0]=nt,g[1]=Ze,g[2]=Qe,g[3]=qe,K.clearBufferiv(K.COLOR,0,g))}else te|=K.COLOR_BUFFER_BIT}J&&(te|=K.DEPTH_BUFFER_BIT),ee&&(te|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Re.dispose(),He.dispose(),H.dispose(),I.dispose(),Z.dispose(),he.dispose(),Ue.dispose(),ut.dispose(),Le.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",dn),Ke.removeEventListener("sessionend",Rt),be&&(be.dispose(),be=null),pn.stop()};function ge(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let z=G.autoReset,J=ne.enabled,ee=ne.autoUpdate,te=ne.needsUpdate,Q=ne.type;Tt(),G.autoReset=z,ne.enabled=J,ne.autoUpdate=ee,ne.needsUpdate=te,ne.type=Q}function ye(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function ve(z){let J=z.target;J.removeEventListener("dispose",ve),Fe(J)}function Fe(z){Be(z),H.remove(z)}function Be(z){let J=H.get(z).programs;J!==void 0&&(J.forEach(function(ee){Le.releaseProgram(ee)}),z.isShaderMaterial&&Le.releaseShaderCache(z))}this.renderBufferDirect=function(z,J,ee,te,Q,Ee){J===null&&(J=ze);let De=Q.isMesh&&Q.matrixWorld.determinant()<0,We=Df(z,J,ee,te,Q);N.setMaterial(te,De);let qe=ee.index,nt=1;if(te.wireframe===!0){if(qe=ae.getWireframeAttribute(ee),qe===void 0)return;nt=2}let Ze=ee.drawRange,Qe=ee.attributes.position,Ht=Ze.start*nt,En=(Ze.start+Ze.count)*nt;Ee!==null&&(Ht=Math.max(Ht,Ee.start*nt),En=Math.min(En,(Ee.start+Ee.count)*nt)),qe!==null?(Ht=Math.max(Ht,0),En=Math.min(En,qe.count)):Qe!=null&&(Ht=Math.max(Ht,0),En=Math.min(En,Qe.count));let en=En-Ht;if(en<0||en===1/0)return;Ue.setup(Q,te,We,ee,qe);let oi,Ut=Ae;if(qe!==null&&(oi=oe.get(qe),Ut=Ie,Ut.setIndex(oi)),Q.isMesh)te.wireframe===!0?(N.setLineWidth(te.wireframeLinewidth*tt()),Ut.setMode(K.LINES)):Ut.setMode(K.TRIANGLES);else if(Q.isLine){let it=te.linewidth;it===void 0&&(it=1),N.setLineWidth(it*tt()),Q.isLineSegments?Ut.setMode(K.LINES):Q.isLineLoop?Ut.setMode(K.LINE_LOOP):Ut.setMode(K.LINE_STRIP)}else Q.isPoints?Ut.setMode(K.POINTS):Q.isSprite&&Ut.setMode(K.TRIANGLES);if(Q.isBatchedMesh)Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Ut.renderInstances(Ht,en,Q.count);else if(ee.isInstancedBufferGeometry){let it=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Io=Math.min(ee.instanceCount,it);Ut.renderInstances(Ht,en,Io)}else Ut.render(Ht,en)};function pt(z,J,ee){z.transparent===!0&&z.side===Ct&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,Qa(z,J,ee),z.side=Di,z.needsUpdate=!0,Qa(z,J,ee),z.side=Ct):Qa(z,J,ee)}this.compile=function(z,J,ee=null){ee===null&&(ee=z),m=He.get(ee),m.init(),_.push(m),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),z!==ee&&z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights);let te=new Set;return z.traverse(function(Q){let Ee=Q.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let We=Ee[De];pt(We,ee,Q),te.add(We)}else pt(Ee,ee,Q),te.add(Ee)}),_.pop(),m=null,te},this.compileAsync=function(z,J,ee=null){let te=this.compile(z,J,ee);return new Promise(Q=>{function Ee(){if(te.forEach(function(De){H.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){Q(z);return}setTimeout(Ee,10)}le.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let At=null;function Qt(z){At&&At(z)}function dn(){pn.stop()}function Rt(){pn.start()}let pn=new ju;pn.setAnimationLoop(Qt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(z){At=z,Ke.setAnimationLoop(z),z===null?pn.stop():pn.start()},Ke.addEventListener("sessionstart",dn),Ke.addEventListener("sessionend",Rt),this.render=function(z,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(J),J=Ke.getCamera()),z.isScene===!0&&z.onBeforeRender(y,z,J,P),m=He.get(z,_.length),m.init(),_.push(m),Te.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),q.setFromProjectionMatrix(Te),re=this.localClippingEnabled,W=pe.init(this.clippingPlanes,re),v=Re.get(z,p.length),v.init(),p.push(v),ti(z,J,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(R,F),this.info.render.frame++,W===!0&&pe.beginShadows();let ee=m.state.shadowsArray;if(ne.render(ee,z,J),W===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,z),m.setupLights(y._useLegacyLights),J.isArrayCamera){let te=J.cameras;for(let Q=0,Ee=te.length;Q<Ee;Q++){let De=te[Q];Xc(v,z,De,De.viewport)}}else Xc(v,z,J);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),z.isScene===!0&&z.onAfterRender(y,z,J),Ue.resetDefaultState(),k=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ti(z,J,ee,te){if(z.visible===!1)return;if(z.layers.test(J.layers)){if(z.isGroup)ee=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(J);else if(z.isLight)m.pushLight(z),z.castShadow&&m.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||q.intersectsSprite(z)){te&&ke.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Te);let De=he.update(z),We=z.material;We.visible&&v.push(z,De,We,ee,ke.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||q.intersectsObject(z))){let De=he.update(z),We=z.material;if(te&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),ke.copy(z.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ke.copy(De.boundingSphere.center)),ke.applyMatrix4(z.matrixWorld).applyMatrix4(Te)),Array.isArray(We)){let qe=De.groups;for(let nt=0,Ze=qe.length;nt<Ze;nt++){let Qe=qe[nt],Ht=We[Qe.materialIndex];Ht&&Ht.visible&&v.push(z,De,Ht,ee,ke.z,Qe)}}else We.visible&&v.push(z,De,We,ee,ke.z,null)}}let Ee=z.children;for(let De=0,We=Ee.length;De<We;De++)ti(Ee[De],J,ee,te)}function Xc(z,J,ee,te){let Q=z.opaque,Ee=z.transmissive,De=z.transparent;m.setupLightsView(ee),W===!0&&pe.setGlobalState(y.clippingPlanes,ee),Ee.length>0&&If(Q,Ee,J,ee),te&&N.viewport(w.copy(te)),Q.length>0&&Ka(Q,J,ee),Ee.length>0&&Ka(Ee,J,ee),De.length>0&&Ka(De,J,ee),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function If(z,J,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Ee=ue.isWebGL2;be===null&&(be=new Zt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Rn:Ii,minFilter:ga,samples:Ee?4:0})),y.getDrawingBufferSize(Oe),Ee?be.setSize(Oe.x,Oe.y):be.setSize(Rl(Oe.x),Rl(Oe.y));let De=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(X),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear();let We=y.toneMapping;y.toneMapping=Pi,Ka(z,ee,te),D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be);let qe=!1;for(let nt=0,Ze=J.length;nt<Ze;nt++){let Qe=J[nt],Ht=Qe.object,En=Qe.geometry,en=Qe.material,oi=Qe.group;if(en.side===Ct&&Ht.layers.test(te.layers)){let Ut=en.side;en.side=hn,en.needsUpdate=!0,qc(Ht,ee,te,En,en,oi),en.side=Ut,en.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(be),D.updateRenderTargetMipmap(be)),y.setRenderTarget(De),y.setClearColor(X,C),y.toneMapping=We}function Ka(z,J,ee){let te=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,Ee=z.length;Q<Ee;Q++){let De=z[Q],We=De.object,qe=De.geometry,nt=te===null?De.material:te,Ze=De.group;We.layers.test(ee.layers)&&qc(We,J,ee,qe,nt,Ze)}}function qc(z,J,ee,te,Q,Ee){z.onBeforeRender(y,J,ee,te,Q,Ee),z.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),Q.onBeforeRender(y,J,ee,te,z,Ee),Q.transparent===!0&&Q.side===Ct&&Q.forceSinglePass===!1?(Q.side=hn,Q.needsUpdate=!0,y.renderBufferDirect(ee,J,te,Q,z,Ee),Q.side=Di,Q.needsUpdate=!0,y.renderBufferDirect(ee,J,te,Q,z,Ee),Q.side=Ct):y.renderBufferDirect(ee,J,te,Q,z,Ee),z.onAfterRender(y,J,ee,te,Q,Ee)}function Qa(z,J,ee){J.isScene!==!0&&(J=ze);let te=H.get(z),Q=m.state.lights,Ee=m.state.shadowsArray,De=Q.state.version,We=Le.getParameters(z,Q.state,Ee,J,ee),qe=Le.getProgramCacheKey(We),nt=te.programs;te.environment=z.isMeshStandardMaterial?J.environment:null,te.fog=J.fog,te.envMap=(z.isMeshStandardMaterial?Z:I).get(z.envMap||te.environment),nt===void 0&&(z.addEventListener("dispose",ve),nt=new Map,te.programs=nt);let Ze=nt.get(qe);if(Ze!==void 0){if(te.currentProgram===Ze&&te.lightsStateVersion===De)return Yc(z,We),Ze}else We.uniforms=Le.getUniforms(z),z.onBuild(ee,We,y),z.onBeforeCompile(We,y),Ze=Le.acquireProgram(We,qe),nt.set(qe,Ze),te.uniforms=We.uniforms;let Qe=te.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Qe.clippingPlanes=pe.uniform),Yc(z,We),te.needsLights=Nf(z),te.lightsStateVersion=De,te.needsLights&&(Qe.ambientLightColor.value=Q.state.ambient,Qe.lightProbe.value=Q.state.probe,Qe.directionalLights.value=Q.state.directional,Qe.directionalLightShadows.value=Q.state.directionalShadow,Qe.spotLights.value=Q.state.spot,Qe.spotLightShadows.value=Q.state.spotShadow,Qe.rectAreaLights.value=Q.state.rectArea,Qe.ltc_1.value=Q.state.rectAreaLTC1,Qe.ltc_2.value=Q.state.rectAreaLTC2,Qe.pointLights.value=Q.state.point,Qe.pointLightShadows.value=Q.state.pointShadow,Qe.hemisphereLights.value=Q.state.hemi,Qe.directionalShadowMap.value=Q.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qe.spotShadowMap.value=Q.state.spotShadowMap,Qe.spotLightMatrix.value=Q.state.spotLightMatrix,Qe.spotLightMap.value=Q.state.spotLightMap,Qe.pointShadowMap.value=Q.state.pointShadowMap,Qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Ze,te.uniformsList=null,Ze}function $c(z){if(z.uniformsList===null){let J=z.currentProgram.getUniforms();z.uniformsList=Ds.seqWithValue(J.seq,z.uniforms)}return z.uniformsList}function Yc(z,J){let ee=H.get(z);ee.outputColorSpace=J.outputColorSpace,ee.batching=J.batching,ee.instancing=J.instancing,ee.instancingColor=J.instancingColor,ee.skinning=J.skinning,ee.morphTargets=J.morphTargets,ee.morphNormals=J.morphNormals,ee.morphColors=J.morphColors,ee.morphTargetsCount=J.morphTargetsCount,ee.numClippingPlanes=J.numClippingPlanes,ee.numIntersection=J.numClipIntersection,ee.vertexAlphas=J.vertexAlphas,ee.vertexTangents=J.vertexTangents,ee.toneMapping=J.toneMapping}function Df(z,J,ee,te,Q){J.isScene!==!0&&(J=ze),D.resetTextureUnits();let Ee=J.fog,De=te.isMeshStandardMaterial?J.environment:null,We=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xi,qe=(te.isMeshStandardMaterial?Z:I).get(te.envMap||De),nt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ze=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!ee.morphAttributes.position,Ht=!!ee.morphAttributes.normal,En=!!ee.morphAttributes.color,en=Pi;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(en=y.toneMapping);let oi=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ut=oi!==void 0?oi.length:0,it=H.get(te),Io=m.state.lights;if(W===!0&&(re===!0||z!==M)){let In=z===M&&te.id===k;pe.setState(te,z,In)}let Ft=!1;te.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Io.state.version||it.outputColorSpace!==We||Q.isBatchedMesh&&it.batching===!1||!Q.isBatchedMesh&&it.batching===!0||Q.isInstancedMesh&&it.instancing===!1||!Q.isInstancedMesh&&it.instancing===!0||Q.isSkinnedMesh&&it.skinning===!1||!Q.isSkinnedMesh&&it.skinning===!0||Q.isInstancedMesh&&it.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&it.instancingColor===!1&&Q.instanceColor!==null||it.envMap!==qe||te.fog===!0&&it.fog!==Ee||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==pe.numPlanes||it.numIntersection!==pe.numIntersection)||it.vertexAlphas!==nt||it.vertexTangents!==Ze||it.morphTargets!==Qe||it.morphNormals!==Ht||it.morphColors!==En||it.toneMapping!==en||ue.isWebGL2===!0&&it.morphTargetsCount!==Ut)&&(Ft=!0):(Ft=!0,it.__version=te.version);let Hi=it.currentProgram;Ft===!0&&(Hi=Qa(te,J,Q));let Zc=!1,ea=!1,Do=!1,on=Hi.getUniforms(),Vi=it.uniforms;if(N.useProgram(Hi.program)&&(Zc=!0,ea=!0,Do=!0),te.id!==k&&(k=te.id,ea=!0),Zc||M!==z){on.setValue(K,"projectionMatrix",z.projectionMatrix),on.setValue(K,"viewMatrix",z.matrixWorldInverse);let In=on.map.cameraPosition;In!==void 0&&In.setValue(K,ke.setFromMatrixPosition(z.matrixWorld)),ue.logarithmicDepthBuffer&&on.setValue(K,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&on.setValue(K,"isOrthographic",z.isOrthographicCamera===!0),M!==z&&(M=z,ea=!0,Do=!0)}if(Q.isSkinnedMesh){on.setOptional(K,Q,"bindMatrix"),on.setOptional(K,Q,"bindMatrixInverse");let In=Q.skeleton;In&&(ue.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),on.setValue(K,"boneTexture",In.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(on.setOptional(K,Q,"batchingTexture"),on.setValue(K,"batchingTexture",Q._matricesTexture,D));let Uo=ee.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0&&ue.isWebGL2===!0)&&Pe.update(Q,ee,Hi),(ea||it.receiveShadow!==Q.receiveShadow)&&(it.receiveShadow=Q.receiveShadow,on.setValue(K,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Vi.envMap.value=qe,Vi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ea&&(on.setValue(K,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&Uf(Vi,Do),Ee&&te.fog===!0&&_e.refreshFogUniforms(Vi,Ee),_e.refreshMaterialUniforms(Vi,te,L,S,be),Ds.upload(K,$c(it),Vi,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ds.upload(K,$c(it),Vi,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&on.setValue(K,"center",Q.center),on.setValue(K,"modelViewMatrix",Q.modelViewMatrix),on.setValue(K,"normalMatrix",Q.normalMatrix),on.setValue(K,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let In=te.uniformsGroups;for(let No=0,zf=In.length;No<zf;No++)if(ue.isWebGL2){let Jc=In[No];ut.update(Jc,Hi),ut.bind(Jc,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Uf(z,J){z.ambientLightColor.needsUpdate=J,z.lightProbe.needsUpdate=J,z.directionalLights.needsUpdate=J,z.directionalLightShadows.needsUpdate=J,z.pointLights.needsUpdate=J,z.pointLightShadows.needsUpdate=J,z.spotLights.needsUpdate=J,z.spotLightShadows.needsUpdate=J,z.rectAreaLights.needsUpdate=J,z.hemisphereLights.needsUpdate=J}function Nf(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(z,J,ee){H.get(z.texture).__webglTexture=J,H.get(z.depthTexture).__webglTexture=ee;let te=H.get(z);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(z,J){let ee=H.get(z);ee.__webglFramebuffer=J,ee.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(z,J=0,ee=0){P=z,T=J,A=ee;let te=!0,Q=null,Ee=!1,De=!1;if(z){let qe=H.get(z);qe.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(K.FRAMEBUFFER,null),te=!1):qe.__webglFramebuffer===void 0?D.setupRenderTarget(z):qe.__hasExternalTextures&&D.rebindTextures(z,H.get(z.texture).__webglTexture,H.get(z.depthTexture).__webglTexture);let nt=z.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(De=!0);let Ze=H.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Ze[J])?Q=Ze[J][ee]:Q=Ze[J],Ee=!0):ue.isWebGL2&&z.samples>0&&D.useMultisampledRTT(z)===!1?Q=H.get(z).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[ee]:Q=Ze,w.copy(z.viewport),U.copy(z.scissor),B=z.scissorTest}else w.copy($).multiplyScalar(L).floor(),U.copy(V).multiplyScalar(L).floor(),B=j;if(N.bindFramebuffer(K.FRAMEBUFFER,Q)&&ue.drawBuffers&&te&&N.drawBuffers(z,Q),N.viewport(w),N.scissor(U),N.setScissorTest(B),Ee){let qe=H.get(z.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,qe.__webglTexture,ee)}else if(De){let qe=H.get(z.texture),nt=J||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,qe.__webglTexture,ee||0,nt)}k=-1},this.readRenderTargetPixels=function(z,J,ee,te,Q,Ee,De){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=H.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){N.bindFramebuffer(K.FRAMEBUFFER,We);try{let qe=z.texture,nt=qe.format,Ze=qe.type;if(nt!==Jn&&Se.convert(nt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Ze===Rn&&(le.has("EXT_color_buffer_half_float")||ue.isWebGL2&&le.has("EXT_color_buffer_float"));if(Ze!==Ii&&Se.convert(Ze)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Li&&(ue.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=z.width-te&&ee>=0&&ee<=z.height-Q&&K.readPixels(J,ee,te,Q,Se.convert(nt),Se.convert(Ze),Ee)}finally{let qe=P!==null?H.get(P).__webglFramebuffer:null;N.bindFramebuffer(K.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(z,J,ee=0){let te=Math.pow(2,-ee),Q=Math.floor(J.image.width*te),Ee=Math.floor(J.image.height*te);D.setTexture2D(J,0),K.copyTexSubImage2D(K.TEXTURE_2D,ee,0,0,z.x,z.y,Q,Ee),N.unbindTexture()},this.copyTextureToTexture=function(z,J,ee,te=0){let Q=J.image.width,Ee=J.image.height,De=Se.convert(ee.format),We=Se.convert(ee.type);D.setTexture2D(ee,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment),J.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,te,z.x,z.y,Q,Ee,De,We,J.image.data):J.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,te,z.x,z.y,J.mipmaps[0].width,J.mipmaps[0].height,De,J.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,te,z.x,z.y,De,We,J.image),te===0&&ee.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(z,J,ee,te,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=z.max.x-z.min.x+1,De=z.max.y-z.min.y+1,We=z.max.z-z.min.z+1,qe=Se.convert(te.format),nt=Se.convert(te.type),Ze;if(te.isData3DTexture)D.setTexture3D(te,0),Ze=K.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)D.setTexture2DArray(te,0),Ze=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment);let Qe=K.getParameter(K.UNPACK_ROW_LENGTH),Ht=K.getParameter(K.UNPACK_IMAGE_HEIGHT),En=K.getParameter(K.UNPACK_SKIP_PIXELS),en=K.getParameter(K.UNPACK_SKIP_ROWS),oi=K.getParameter(K.UNPACK_SKIP_IMAGES),Ut=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Ut.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ut.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,z.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,z.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,z.min.z),ee.isDataTexture||ee.isData3DTexture?K.texSubImage3D(Ze,Q,J.x,J.y,J.z,Ee,De,We,qe,nt,Ut.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ze,Q,J.x,J.y,J.z,Ee,De,We,qe,Ut.data)):K.texSubImage3D(Ze,Q,J.x,J.y,J.z,Ee,De,We,qe,nt,Ut),K.pixelStorei(K.UNPACK_ROW_LENGTH,Qe),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ht),K.pixelStorei(K.UNPACK_SKIP_PIXELS,En),K.pixelStorei(K.UNPACK_SKIP_ROWS,en),K.pixelStorei(K.UNPACK_SKIP_IMAGES,oi),Q===0&&te.generateMipmaps&&K.generateMipmap(Ze),N.unbindTexture()},this.initTexture=function(z){z.isCubeTexture?D.setTextureCube(z,0):z.isData3DTexture?D.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?D.setTexture2DArray(z,0):D.setTexture2D(z,0),N.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,N.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Qi:qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?_t:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gl=class extends _a{};Gl.prototype.isWebGL1Renderer=!0;var Kr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ya=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new O,ba=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),a=Mt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wn=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,aa=new O,Ss=new O,Es=new O,Ts=new ce,ra=new ce,sf=new Ye,Mr=new O,oa=new O,wr=new O,xu=new ce,dl=new ce,vu=new ce,Hs=class extends Gt{constructor(e=new wn){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qr(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new ba(n,3,0,!1)),ws.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=ws,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Es.z);let n=this.material.rotation,s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));let h=this.center;Sr(Mr.set(-.5,-.5,0),Es,h,Ss,s,a),Sr(oa.set(.5,-.5,0),Es,h,Ss,s,a),Sr(wr.set(.5,.5,0),Es,h,Ss,s,a),xu.set(0,0),dl.set(1,0),vu.set(1,1);let o=e.ray.intersectTriangle(Mr,oa,wr,!1,aa);if(o===null&&(Sr(oa.set(-.5,.5,0),Es,h,Ss,s,a),dl.set(0,1),o=e.ray.intersectTriangle(Mr,wr,oa,!1,aa),o===null))return;let l=e.ray.origin.distanceTo(aa);l<e.near||l>e.far||t.push({distance:l,point:aa.clone(),uv:Ji.getInterpolation(aa,Mr,oa,wr,xu,dl,vu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sr(i,e,t,n,s,a){Ts.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ra.x=a*Ts.x-s*Ts.y,ra.y=s*Ts.x+a*Ts.y):ra.copy(Ts),i.copy(e),i.x+=ra.x,i.y+=ra.y,i.applyMatrix4(sf)}var Ma=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new Ye,_u=new Ye,Er=[],yu=new vi,Mx=new Ye,la=new Ve,ca=new _i,Vs=class extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ma(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),yu.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),ca.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,As),_u.multiplyMatrices(n,As),la.matrixWorld=_u,la.raycast(e,Er);for(let h=0,o=Er.length;h<o;h++){let l=Er[h];l.instanceId=a,l.object=this,t.push(l)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ma(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wa=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bu=new O,Mu=new O,wu=new Ye,pl=new Os,Tr=new _i,Wl=class extends Gt{constructor(e=new gt,t=new wa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)bu.fromBufferAttribute(t,s-1),Mu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bu.distanceTo(Mu);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,h=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=a,e.ray.intersectsSphere(Tr)===!1)return;wu.copy(s).invert(),pl.copy(e.ray).applyMatrix4(wu);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,r=new O,c=new O,u=new O,d=new O,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,h.start),_=Math.min(g.count,h.start+h.count);for(let y=p,b=_-1;y<b;y+=f){let T=g.getX(y),A=g.getX(y+1);if(r.fromBufferAttribute(m,T),c.fromBufferAttribute(m,A),pl.distanceSqToSegment(r,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,h.start),_=Math.min(m.count,h.start+h.count);for(let y=p,b=_-1;y<b;y+=f){if(r.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),pl.distanceSqToSegment(r,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}},Su=new O,Eu=new O,eo=class extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Su.fromBufferAttribute(t,s),Eu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Su.distanceTo(Eu);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xl=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tu=new Ye,ql=new Os,Ar=new _i,Rr=new O,to=class extends Gt{constructor(e=new gt,t=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,h=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=a,e.ray.intersectsSphere(Ar)===!1)return;Tu.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Tu);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,r=n.index,u=n.attributes.position;if(r!==null){let d=Math.max(0,h.start),f=Math.min(r.count,h.start+h.count);for(let g=d,v=f;g<v;g++){let m=r.getX(g);Rr.fromBufferAttribute(u,m),Au(Rr,m,l,s,e,t,this)}}else{let d=Math.max(0,h.start),f=Math.min(u.count,h.start+h.count);for(let g=d,v=f;g<v;g++)Rr.fromBufferAttribute(u,g),Au(Rr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Au(i,e,t,n,s,a,h){let o=ql.distanceSqToPoint(i);if(o<t){let l=new O;ql.closestPointToPoint(i,l),l.applyMatrix4(n);let r=s.ray.origin.distanceTo(l);if(r<s.near||r>s.far)return;a.push({distance:r,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:h})}}var On=class extends zn{constructor(e,t,n,s,a,h,o,l,r){super(e,t,n,s,a,h,o,l,r),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let h=1;h<=e;h++)n=this.getPoint(h/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,a=n.length,h;t?h=t:h=e*n[a-1];let o=0,l=a-1,r;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),r=n[s]-h,r<0)o=s+1;else if(r>0)l=s-1;else{l=s;break}if(s=l,n[s]===h)return s/(a-1);let c=n[s],d=n[s+1]-c,f=(h-c)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let h=this.getPoint(s),o=this.getPoint(a),l=t||(h.isVector2?new ce:new O);return l.copy(o).sub(h).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],a=[],h=[],o=new O,l=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new O)}a[0]=new O,h[0]=new O;let r=Number.MAX_VALUE,c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=r&&(r=c,n.set(1,0,0)),u<=r&&(r=u,n.set(0,1,0)),d<=r&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),h[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),h[f]=h[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(nn(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}h[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(nn(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),h[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends Bn{constructor(e=0,t=0,n=1,s=1,a=0,h=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=h,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new ce,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,h=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(h?a=0:a=s),this.aClockwise===!0&&!h&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),r=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=r-this.aY;l=d*c-f*u+this.aX,r=d*u+f*c+this.aY}return n.set(l,r)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends Sa{constructor(e,t,n,s,a,h){super(e,t,n,n,s,a,h),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let i=0,e=0,t=0,n=0;function s(a,h,o,l){i=a,e=o,t=-3*a+3*h-2*o-l,n=2*a-2*h+o+l}return{initCatmullRom:function(a,h,o,l,r){s(h,o,r*(o-a),r*(l-h))},initNonuniformCatmullRom:function(a,h,o,l,r,c,u){let d=(h-a)/r-(o-a)/(r+c)+(o-h)/c,f=(o-h)/c-(l-h)/(c+u)+(l-o)/u;d*=c,f*=c,s(h,o,d,f)},calc:function(a){let h=a*a,o=h*a;return i+e*a+t*h+n*o}}}var Cr=new O,ml=new wc,gl=new wc,xl=new wc,Ea=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,a=s.length,h=(a-(this.closed?0:1))*e,o=Math.floor(h),l=h-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let r,c;this.closed||o>0?r=s[(o-1)%a]:(Cr.subVectors(s[0],s[1]).add(s[0]),r=Cr);let u=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?c=s[(o+2)%a]:(Cr.subVectors(s[a-1],s[a-2]).add(s[a-1]),c=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(r.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ml.initNonuniformCatmullRom(r.x,u.x,d.x,c.x,g,v,m),gl.initNonuniformCatmullRom(r.y,u.y,d.y,c.y,g,v,m),xl.initNonuniformCatmullRom(r.z,u.z,d.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(r.x,u.x,d.x,c.x,this.tension),gl.initCatmullRom(r.y,u.y,d.y,c.y,this.tension),xl.initCatmullRom(r.z,u.z,d.z,c.z,this.tension));return n.set(ml.calc(l),gl.calc(l),xl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(i,e,t,n,s){let a=(n-e)*.5,h=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+h)*l+(-3*t+3*n-2*a-h)*o+a*i+t}function wx(i,e){let t=1-i;return t*t*e}function Sx(i,e){return 2*(1-i)*i*e}function Ex(i,e){return i*i*e}function da(i,e,t,n){return wx(i,e)+Sx(i,t)+Ex(i,n)}function Tx(i,e){let t=1-i;return t*t*t*e}function Ax(i,e){let t=1-i;return 3*t*t*i*e}function Rx(i,e){return 3*(1-i)*i*i*e}function Cx(i,e){return i*i*i*e}function pa(i,e,t,n,s){return Tx(i,e)+Ax(i,t)+Rx(i,n)+Cx(i,s)}var no=class extends Bn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,a=this.v1,h=this.v2,o=this.v3;return n.set(pa(e,s.x,a.x,h.x,o.x),pa(e,s.y,a.y,h.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends Bn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,a=this.v1,h=this.v2,o=this.v3;return n.set(pa(e,s.x,a.x,h.x,o.x),pa(e,s.y,a.y,h.y,o.y),pa(e,s.z,a.z,h.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends Bn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends Bn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Bn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,a=this.v1,h=this.v2;return n.set(da(e,s.x,a.x,h.x),da(e,s.y,a.y,h.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Bn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,a=this.v1,h=this.v2;return n.set(da(e,s.x,a.x,h.x),da(e,s.y,a.y,h.y),da(e,s.z,a.z,h.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,a=(s.length-1)*e,h=Math.floor(a),o=a-h,l=s[h===0?h:h-1],r=s[h],c=s[h>s.length-2?s.length-1:h+1],u=s[h>s.length-3?s.length-1:h+2];return n.set(Ru(o,l.x,r.x,c.x,u.x),Ru(o,l.y,r.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:Ea,CubicBezierCurve:no,CubicBezierCurve3:Yl,EllipseCurve:Sa,LineCurve:io,LineCurve3:Zl,QuadraticBezierCurve:so,QuadraticBezierCurve3:ao,SplineCurve:ro}),jl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let h=s[a]-n,o=this.curves[a],l=o.getLength(),r=l===0?0:1-h/l;return o.getPointAt(r,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let h=a[s],o=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,l=h.getPoints(o);for(let r=0;r<l.length;r++){let c=l[r];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}},Ta=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new io(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new so(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,h){let o=new no(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(a,h));return this.curves.push(o),this.currentPoint.set(a,h),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ro(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,h){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,h),this}absarc(e,t,n,s,a,h){return this.absellipse(e,t,n,n,s,a,h),this}ellipse(e,t,n,s,a,h,o,l){let r=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+r,t+c,n,s,a,h,o,l),this}absellipse(e,t,n,s,a,h,o,l){let r=new Sa(e,t,n,s,a,h,o,l);if(this.curves.length>0){let u=r.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(r);let c=r.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class i extends gt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nn(s,0,Math.PI*2);let a=[],h=[],o=[],l=[],r=[],c=1/t,u=new O,d=new ce,f=new O,g=new O,v=new O,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let y=n+_*c*s,b=Math.sin(y),T=Math.cos(y);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*T,h.push(u.x,u.y,u.z),d.x=_/t,d.y=A/(e.length-1),o.push(d.x,d.y);let P=l[3*A+0]*b,k=l[3*A+1],M=l[3*A+0]*T;r.push(P,k,M)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let b=y+_*e.length,T=b,A=b+e.length,P=b+e.length+1,k=b+1;a.push(T,A,k),a.push(P,k,A)}this.setIndex(a),this.setAttribute("position",new Xe(h,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(r,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},yi=class i extends zi{constructor(e=1,t=1,n=4,s=8){let a=new Ta;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},es=class i extends gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let a=[],h=[],o=[],l=[],r=new O,c=new ce;h.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;r.x=e*Math.cos(f),r.y=e*Math.sin(f),h.push(r.x,r.y,r.z),o.push(0,0,1),c.x=(h[d]/e+1)/2,c.y=(h[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new Xe(h,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vn=class i extends gt{constructor(e=1,t=1,n=1,s=32,a=1,h=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:h,thetaStart:o,thetaLength:l};let r=this;s=Math.floor(s),a=Math.floor(a);let c=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),h===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){let b=new O,T=new O,A=0,P=(t-e)/n;for(let k=0;k<=a;k++){let M=[],w=k/a,U=w*(t-e)+e;for(let B=0;B<=s;B++){let X=B/s,C=X*l+o,E=Math.sin(C),S=Math.cos(C);T.x=U*E,T.y=-w*n+m,T.z=U*S,u.push(T.x,T.y,T.z),b.set(E,P,S).normalize(),d.push(b.x,b.y,b.z),f.push(X,1-w),M.push(g++)}v.push(M)}for(let k=0;k<s;k++)for(let M=0;M<a;M++){let w=v[M][k],U=v[M+1][k],B=v[M+1][k+1],X=v[M][k+1];c.push(w,U,X),c.push(U,B,X),A+=6}r.addGroup(p,A,0),p+=A}function y(b){let T=g,A=new ce,P=new O,k=0,M=b===!0?e:t,w=b===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let C=B/s*l+o,E=Math.cos(C),S=Math.sin(C);P.x=M*S,P.y=m*w,P.z=M*E,u.push(P.x,P.y,P.z),d.push(0,w,0),A.x=E*.5+.5,A.y=S*.5*w+.5,f.push(A.x,A.y),g++}for(let B=0;B<s;B++){let X=T+B,C=U+B;b===!0?c.push(C,C+1,X):c.push(C+1,C,X),k+=3}r.addGroup(p,k,b===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ts=class i extends vn{constructor(e=1,t=1,n=32,s=1,a=!1,h=0,o=Math.PI*2){super(0,e,t,n,s,a,h,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:h,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Aa=class extends Ta{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ta().fromJSON(s))}return this}},Lx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,a=af(i,0,s,t,!0),h=[];if(!a||a.next===a.prev)return h;let o,l,r,c,u,d,f;if(n&&(a=Nx(i,e,a,t)),i.length>80*t){o=r=i[0],l=c=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>r&&(r=u),d>c&&(c=d);f=Math.max(r-o,c-l),f=f!==0?32767/f:0}return Ra(a,h,t,o,l,f,0),h}};function af(i,e,t,n,s){let a,h;if(s===qx(i,e,t,n)>0)for(a=e;a<t;a+=n)h=Cu(a,i[a],i[a+1],h);else for(a=t-n;a>=e;a-=n)h=Cu(a,i[a],i[a+1],h);return h&&vo(h,h.next)&&(La(h),h=h.next),h}function ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vo(t,t.next)||Nt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ra(i,e,t,n,s,a,h){if(!i)return;!h&&a&&kx(i,n,s,a);let o=i,l,r;for(;i.prev!==i.next;){if(l=i.prev,r=i.next,a?Ix(i,n,s,a):Px(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),La(i),i=r.next,o=r.next;continue}if(i=r,i===o){h?h===1?(i=Dx(ns(i),e,t),Ra(i,e,t,n,s,a,2)):h===2&&Ux(i,e,t,n,s,a):Ra(ns(i),e,t,n,s,a,1);break}}}function Px(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,a=t.x,h=n.x,o=e.y,l=t.y,r=n.y,c=s<a?s<h?s:h:a<h?a:h,u=o<l?o<r?o:r:l<r?l:r,d=s>a?s>h?s:h:a>h?a:h,f=o>l?o>r?o:r:l>r?l:r,g=n.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Ls(s,o,a,l,h,r,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ix(i,e,t,n){let s=i.prev,a=i,h=i.next;if(Nt(s,a,h)>=0)return!1;let o=s.x,l=a.x,r=h.x,c=s.y,u=a.y,d=h.y,f=o<l?o<r?o:r:l<r?l:r,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>r?o:r:l>r?l:r,m=c>u?c>d?c:d:u>d?u:d,p=Kl(f,g,e,t,n),_=Kl(v,m,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=p&&b&&b.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==h&&Ls(o,c,l,u,r,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==h&&Ls(o,c,l,u,r,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==h&&Ls(o,c,l,u,r,d,y.x,y.y)&&Nt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==h&&Ls(o,c,l,u,r,d,b.x,b.y)&&Nt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Dx(i,e,t){let n=i;do{let s=n.prev,a=n.next.next;!vo(s,a)&&rf(s,n,n.next,a)&&Ca(s,a)&&Ca(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),La(n),La(n.next),n=i=a),n=n.next}while(n!==i);return ns(n)}function Ux(i,e,t,n,s,a){let h=i;do{let o=h.next.next;for(;o!==h.prev;){if(h.i!==o.i&&Gx(h,o)){let l=of(h,o);h=ns(h,h.next),l=ns(l,l.next),Ra(h,e,t,n,s,a,0),Ra(l,e,t,n,s,a,0);return}o=o.next}h=h.next}while(h!==i)}function Nx(i,e,t,n){let s=[],a,h,o,l,r;for(a=0,h=e.length;a<h;a++)o=e[a]*n,l=a<h-1?e[a+1]*n:i.length,r=af(i,o,l,n,!1),r===r.next&&(r.steiner=!0),s.push(Vx(r));for(s.sort(zx),a=0;a<s.length;a++)t=Fx(s[a],t);return t}function zx(i,e){return i.x-e.x}function Fx(i,e){let t=Ox(i,e);if(!t)return e;let n=of(t,i);return ns(n,n.next),ns(t,t.next)}function Ox(i,e){let t=e,n=-1/0,s,a=i.x,h=i.y;do{if(h<=t.y&&h>=t.next.y&&t.next.y!==t.y){let d=t.x+(h-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===a))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,r=s.y,c=1/0,u;t=s;do a>=t.x&&t.x>=l&&a!==t.x&&Ls(h<r?a:n,h,l,r,h<r?n:a,h,t.x,t.y)&&(u=Math.abs(h-t.y)/(a-t.x),Ca(t,i)&&(u<c||u===c&&(t.x>s.x||t.x===s.x&&Bx(s,t)))&&(s=t,c=u)),t=t.next;while(t!==o);return s}function Bx(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function kx(i,e,t,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hx(s)}function Hx(i){let e,t,n,s,a,h,o,l,r=1;do{for(t=i,i=null,a=null,h=0;t;){for(h++,n=t,o=0,e=0;e<r&&(o++,n=n.nextZ,!!n);e++);for(l=r;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,r*=2}while(h>1);return i}function Kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ls(i,e,t,n,s,a,h,o){return(s-h)*(e-o)>=(i-h)*(a-o)&&(i-h)*(n-o)>=(t-h)*(e-o)&&(t-h)*(a-o)>=(s-h)*(n-o)}function Gx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wx(i,e)&&(Ca(i,e)&&Ca(e,i)&&Xx(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||vo(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vo(i,e){return i.x===e.x&&i.y===e.y}function rf(i,e,t,n){let s=Pr(Nt(i,e,t)),a=Pr(Nt(i,e,n)),h=Pr(Nt(t,n,i)),o=Pr(Nt(t,n,e));return!!(s!==a&&h!==o||s===0&&Lr(i,t,e)||a===0&&Lr(i,n,e)||h===0&&Lr(t,i,n)||o===0&&Lr(t,e,n))}function Lr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Pr(i){return i>0?1:i<0?-1:0}function Wx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ca(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Xx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function of(i,e){let t=new Ql(i.i,i.x,i.y),n=new Ql(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Cu(i,e,t,n){let s=new Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qx(i,e,t,n){let s=0;for(let a=e,h=t-n;a<t;a+=n)s+=(i[h]-i[a])*(i[a+1]+i[h+1]),h=a;return s}var ma=class i{static area(e){let t=e.length,n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],a=[];Lu(e),Pu(n,e);let h=e.length;t.forEach(Lu);for(let l=0;l<t.length;l++)s.push(h),h+=t[l].length,Pu(n,t[l]);let o=Lx.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Lu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oo=class i extends gt{constructor(e=new Aa([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],a=[],h=[],o=0,l=0;if(Array.isArray(e)===!1)r(e);else for(let c=0;c<e.length;c++)r(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(h,2));function r(c){let u=s.length/3,d=c.extractPoints(t),f=d.shape,g=d.holes;ma.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ma.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=ma.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),a.push(0,0,1),h.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],y=_[0]+u,b=_[1]+u,T=_[2]+u;n.push(y,b,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return $x(t,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let h=t[e.shapes[s]];n.push(h)}return new i(n,e.curveSegments)}};function $x(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zt=class i extends gt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,h=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:h,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(h+o,Math.PI),r=0,c=[],u=new O,d=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,b=0;p===0&&h===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){let A=T/t;u.x=-e*Math.cos(s+A*a)*Math.sin(h+y*o),u.y=e*Math.cos(h+y*o),u.z=e*Math.sin(s+A*a)*Math.sin(h+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+b,1-y),_.push(r++)}c.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let y=c[p][_+1],b=c[p][_],T=c[p+1][_],A=c[p+1][_+1];(p!==0||h>0)&&f.push(y,b,A),(p!==n-1||l<Math.PI)&&f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bi=class i extends gt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);let h=[],o=[],l=[],r=[],c=new O,u=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*a,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),r.push(g/s),r.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;h.push(v,m,_),h.push(m,p,_)}this.setIndex(h),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(r,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var lo=class i extends gt{constructor(e=new ao(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};let h=e.computeFrenetFrames(t,a);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;let o=new O,l=new O,r=new ce,c=new O,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function v(){for(let y=0;y<t;y++)m(y);m(a===!1?t:0),_(),p()}function m(y){c=e.getPointAt(y/t,c);let b=h.normals[y],T=h.binormals[y];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,k=Math.sin(P),M=-Math.cos(P);l.x=M*b.x+k*T.x,l.y=M*b.y+k*T.y,l.z=M*b.z+k*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+n*l.x,o.y=c.y+n*l.y,o.z=c.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let b=1;b<=s;b++){let T=(s+1)*(y-1)+(b-1),A=(s+1)*y+(b-1),P=(s+1)*y+b,k=(s+1)*(y-1)+b;g.push(T,A,k),g.push(A,P,k)}}function _(){for(let y=0;y<=t;y++)for(let b=0;b<=s;b++)r.x=y/t,r.y=b/s,f.push(r.x,r.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Jl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var co=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ho=class extends jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ir(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let h;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}h=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}h=n,n=0;break t}break n}for(;n<h;){let o=n+h>>>1;e<t[o]?h=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let h=0;h!==s;++h)t[h]=n[a+h];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ec=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,h=e+1,o=s[a],l=s[h];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:a=e,o=2*t-n;break;case Lh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:h=e,l=2*n-t;break;case Lh:h=1,l=n+s[1]-s[0];break;default:h=e-1,l=t}let r=(n-t)*.5,c=this.valueSize;this._weightPrev=r/(t-o),this._weightNext=r/(l-n),this._offsetPrev=a*c,this._offsetNext=h*c}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=e*o,r=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let T=0;T!==o;++T)a[T]=p*h[c+T]+_*h[r+T]+y*h[l+T]+b*h[u+T];return a}},tc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=e*o,r=l-o,c=(n-t)/(s-t),u=1-c;for(let d=0;d!==o;++d)a[d]=h[r+d]*u+h[l+d]*c;return a}},nc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ir(t,this.TimeBufferType),this.values=Ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ir(e.times,Array),values:Ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,a=0,h=s-1;for(;a!==s&&n[a]<e;)++a;for(;h!==-1&&n[h]>t;)--h;if(++h,a!==0||h!==s){a>=h&&(h=Math.max(h,1),a=h-1);let o=this.getValueSize();this.times=n.slice(a,h),this.values=this.values.slice(a*o,h*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let h=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(h!==null&&h>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,h),e=!1;break}h=l}if(s!==void 0&&Yx(s))for(let o=0,l=s.length;o!==l;++o){let r=s[o];if(isNaN(r)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,r),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,a=e.length-1,h=1;for(let o=1;o<a;++o){let l=!1,r=e[o],c=e[o+1];if(r!==c&&(o!==1||r!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==h){e[h]=e[o];let u=o*n,d=h*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++h}}if(a>0){e[h]=e[a];for(let o=a*n,l=h*n,r=0;r!==n;++r)t[l+r]=t[o+r];++h}return h!==e.length?(this.times=e.slice(0,h),this.values=t.slice(0,h*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=zr;var is=class extends Kn{};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Nr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Kn{};ic.prototype.ValueTypeName="color";var sc=class extends Kn{};sc.prototype.ValueTypeName="number";var ac=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),r=e*o;for(let c=r+o;r!==c;r+=4)si.slerpFlat(a,0,h,r-o,h,r,l);return a}},Pa=class extends Kn{InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.DefaultInterpolation=zr;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Kn{};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Nr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Kn{};rc.prototype.ValueTypeName="vector";var oc=class{constructor(e,t,n){let s=this,a=!1,h=0,o=0,l,r=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,a===!1&&s.onStart!==void 0&&s.onStart(c,h,o),a=!0},this.itemEnd=function(c){h++,s.onProgress!==void 0&&s.onProgress(c,h,o),h===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return r.push(c,u),this},this.removeHandler=function(c){let u=r.indexOf(c);return u!==-1&&r.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=r.length;u<d;u+=2){let f=r[u],g=r[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},Zx=new oc,lc=class{constructor(e){this.manager=e!==void 0?e:Zx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ia=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ws=class extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vl=new Ye,Iu=new O,Du=new O,uo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Uu=new Ye,ha=new O,_l=new O,cc=class extends uo{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-ha.x,-ha.y,-ha.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},Da=class extends Ia{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hc=class extends uo{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new hc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Nu(){return(typeof performance>"u"?Date:performance).now()}var Sc="\\[\\]\\.:\\/",Jx=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",jx="[^"+Sc.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Qx=/(WCOD+)?/.source.replace("WCOD",jx),e1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),t1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),n1=new RegExp("^"+Kx+Qx+e1+t1+"$"),i1=["material","materials","bones","map"],uc=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jx,"")}static parseTrackName(e){let t=n1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);i1.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let h=0;h<a.length;h++){let o=a[h];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let r=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===r){r=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(r!==void 0){if(e[r]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[r]}}let h=e[s];if(h===void 0){let r=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+r+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=a}else h.fromArray!==void 0&&h.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=h):Array.isArray(h)?(l=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=uc;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j1=new Float32Array(1);var po=class{constructor(e,t,n=0,s=1/0){this.ray=new Os(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fc(e,this,n,t),n.sort(zu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)fc(e[s],this,n,t);return n.sort(zu),n}};function zu(i,e){return i.distance-e.distance}function fc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let a=0,h=s.length;a<h;a++)fc(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var _o={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},s1=new ks(-1,1,1,-1,0,1),Tc=class extends gt{constructor(){super(),this.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xe([0,2,0,0,2,0],2))}},a1=new Tc,Oi=class{constructor(e){this._mesh=new Ve(a1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,s1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var $s=class extends Pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Na=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let h,o;this.inverse?(h=0,o=1):(h=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,h,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},yo=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var bo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $s(_o),this.copyPass.material.blending=ii,this.clock=new fo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,a=this.passes.length;s<a;s++){let h=this.passes[s];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),h.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(h instanceof Na?n=!0:h instanceof yo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mo=class extends Pn{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let a,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=s}};var lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ys=class i extends Pn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(a,h,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Zt(a,h,{type:Rn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Zt(a,h,{type:Rn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),h=Math.round(h/2)}let o=lf;this.highPassUniforms=Fi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/a,1/h),a=Math.round(a/2),h=Math.round(h/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let r=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=r,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=_o;this.copyUniforms=Fi.clone(c.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new Fn,this.fsQuad=new Oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=h}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ys.BlurDirectionX=new ce(1,0);Ys.BlurDirectionY=new ce(0,1);var cf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var wo=class extends Pn{constructor(){super();let e=cf;this.uniforms=Fi.clone(e.uniforms),this.material=new co({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var za={alta:{dpr:2,shadows:2048,grass:1,post:!0,blur:!0},media:{dpr:1.5,shadows:1536,grass:.65,post:!0,blur:!1},baixa:{dpr:1,shadows:1024,grass:.35,post:!1,blur:!1}},r1={uniforms:{tDiffuse:{value:null},uRes:{value:new ce(1,1)},uBlur:{value:1},uFocus:{value:.52},uWarm:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uBlur, uFocus, uWarm; varying vec2 vUv;
    void main(){
      float d = abs(vUv.y - uFocus); float amt = smoothstep(0.24, 0.6, d) * uBlur;
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      if (amt > 0.01) {
        vec3 acc = c; float wsum = 1.0; vec2 px = amt * 0.0034 * vec2(uRes.y / uRes.x, 1.0);
        for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996; float r = sqrt((float(i) + 0.5) / 12.0); acc += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r * px).rgb; wsum += 1.0; }
        c = acc / wsum;
      }
      vec2 q = vUv - 0.5; float v = smoothstep(0.95, 0.25, length(q * vec2(1.05, 1.2)));
      c *= mix(0.8, 1.0, v);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.1);                         // gentle saturation
      c += vec3(0.022, 0.008, -0.012) * (1.0 - l);      // warm shadows
      gl_FragColor = vec4(c, 1.0);
    }`};function hf(i,e){let t=new _a({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.toneMapping=Ua,t.shadowMap.enabled=e.shadows>0,t.shadowMap.type=dc;let n={renderer:t,composer:null,q:e},s,a;return n.setup=(h,o)=>{let l=new Zt(4,4,{samples:4,type:Rn}),r=new bo(t,l);r.addPass(new Mo(h,o)),s=new Ys(new ce(256,256),.22,.7,.92),r.addPass(s),r.addPass(new wo),a=new $s(r1),a.uniforms.uBlur.value=n.q.blur?1:0,r.addPass(a),n.composer=r,n.final=a,n.bloom=s},n.resize=(h,o)=>{n.w=h,n.h=o;let l=Math.min(window.devicePixelRatio||1,n.q.dpr);t.setPixelRatio(l),t.setSize(h,o,!1),n.composer&&(n.composer.setPixelRatio(l),n.composer.setSize(h,o),a.uniforms.uRes.value.set(h*l,o*l))},n.render=(h,o)=>{n.composer&&n.q.post?n.composer.render():t.render(h,o)},n.setQuality=h=>{n.q=h,a&&(a.uniforms.uBlur.value=h.blur?1:0),n.resize(n.w,n.h)},n}function Xt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.pick=n=>n[Math.floor(t()*n.length)],t.sign=()=>t()<.5?-1:1,t}var Ge=(i,e,t)=>Math.min(t,Math.max(e,i)),Me=(i,e,t)=>i+(e-i)*t,_n=i=>(i=Ge(i,0,1),i*i*(3-2*i)),uf=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2);var we=Math.PI*2,Dv=new Ye,ie=(i,e,t)=>new Ye().makeTranslation(i,e,t),fe=i=>new Ye().makeRotationX(i),me=i=>new Ye().makeRotationY(i),yt=i=>new Ye().makeRotationZ(i),Mi=(i,e=i,t=i)=>new Ye().makeScale(i,e,t),se=(...i)=>{let e=new Ye;for(let t of i)e.multiply(t);return e},o1=new O(0,1,0);function xt(i,e){let t=new si().setFromUnitVectors(o1,e.clone().normalize());return new Ye().compose(i,t,new O(1,1,1))}var x=i=>new de(i);function et(i,e,t){return i.clone().lerp(e,t)}function st(i,e){return i.clone().multiplyScalar(e)}function kn(i,e,t=.06){let n={};return i.getHSL(n),new de().setHSL((n.h+e.range(-t,t)*.25+1)%1,Ge(n.s+e.range(-t,t),0,1),Ge(n.l+e.range(-t,t),0,1))}function wt(i,e,t,n){let s=[];for(let a=0;a<=n;a++){let h=a/n,o=(1-h)*(1-h),l=2*(1-h)*h,r=h*h;s.push(new O(i.x*o+e.x*l+t.x*r,i.y*o+e.y*l+t.y*r,i.z*o+e.z*l+t.z*r))}return s}function Lt(i,e){let t=Ge(e,0,1)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,a=i[n].clone().lerp(i[n+1],s),h=i[n+1].clone().sub(i[n]).normalize();return{p:a,d:h}}var Hn={uTime:{value:0},uWind:{value:1},uDay:{value:1}},l1=Je.normal_fragment_begin.replace("normal *= faceDirection;","normal *= mix(faceDirection, 1.0, vFix);");function Qn(i={}){let e=new Wt({vertexColors:!0,side:Ct,roughness:i.roughness??.62,metalness:0});return e.userData.u={uSway:{value:i.sway??.5},uDroop:{value:0},uGlow:{value:i.glow??.1},uPhase:{value:i.phase??0}},e.onBeforeCompile=t=>{Object.assign(t.uniforms,Hn,e.userData.u),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime, uWind, uSway, uDroop, uPhase; attribute float aFix; varying float vFix;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vFix = aFix;
        {
          vec4 wp0 = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float h = abs(transformed.y);
          float w = h * (0.35 + h) * uSway * uWind * 0.06;
          float ph = wp0.x * 0.7 + wp0.z * 0.55 + uPhase + transformed.x * 1.5 + transformed.z * 1.1;
          float gust = 0.6 + 0.4 * sin(uTime * 0.31 + wp0.x * 0.15 + wp0.z * 0.11);
          transformed.x += (sin(uTime * 1.35 + ph) + 0.35 * sin(uTime * 3.1 + ph * 2.3)) * w * gust;
          transformed.z += (cos(uTime * 1.1 + ph * 1.3) + 0.3 * sin(uTime * 2.7 + ph * 1.7)) * w * 0.8 * gust;
          transformed.y -= uDroop * h * 0.2;
          transformed.xz *= 1.0 + uDroop * min(h, 1.0) * 0.28;
        }`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uGlow, uDroop, uDay; varying float vFix;`).replace("#include <normal_fragment_begin>",l1).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(l * 1.05, l * 0.95, l * 0.62), uDroop * 0.55);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * uGlow * (0.25 + 0.75 * uDay);`)},e.customProgramCacheKey=()=>"plant-v1",e}var Fa=[{h:0,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1},{h:4.8,top:989240,hor:3358830,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1976908,exp:.95,cloud:4148600,night:1},{h:5.9,top:3688574,hor:15769724,sun:16751206,si:.5,sky:8423608,gnd:4866640,hi:.7,fog:11047072,exp:.98,cloud:15902864,night:.3},{h:7.2,top:6267612,hor:16571572,sun:16766624,si:2.3,sky:13623547,gnd:10127464,hi:.95,fog:15523012,exp:1,cloud:16773344,night:0},{h:10,top:5019868,hor:13887734,sun:16773852,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14280944,exp:1,cloud:16777215,night:0},{h:14.5,top:5019868,hor:14084338,sun:16773334,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14412014,exp:1,cloud:16777215,night:0},{h:16.8,top:5936847,hor:16374958,sun:16763264,si:2.6,sky:13950196,gnd:11045476,hi:.95,fog:15785152,exp:1.02,cloud:16771272,night:0},{h:18.1,top:4872860,hor:16357990,sun:16745544,si:1.7,sky:11051212,gnd:8413784,hi:.8,fog:15246472,exp:1.02,cloud:16294008,night:.1},{h:19,top:2240096,hor:11561608,sun:13142704,si:.45,sky:6318248,gnd:3551306,hi:.66,fog:6969984,exp:.98,cloud:8018568,night:.65},{h:20,top:923446,hor:2899052,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1845320,exp:.95,cloud:3820152,night:1},{h:24,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1}];for(let i of Fa)for(let e of["top","hor","sun","sky","gnd","fog","cloud"])i[e]=new de(i[e]);function c1(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.45,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new On(i);return n.colorSpace=_t,n}function ff(i,e,t){let n={hour:9,night:0,sunDir:new O,cur:{}},s={top:new de,hor:new de,sun:new de,sky:new de,gnd:new de,fog:new de,cloud:new de},a={uTop:{value:new de},uHor:{value:new de},uSunDir:{value:new O(0,1,0)},uSunCol:{value:new de},uNight:{value:0},uTime:Hn.uTime},h=new Ve(new zt(400,32,20),new Ot({side:hn,depthWrite:!1,fog:!1,uniforms:a,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uTop, uHor, uSunDir, uSunCol; uniform float uNight, uTime; varying vec3 vDir;
      float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.2, 1.0);
        vec3 c = mix(uHor, uTop, pow(smoothstep(-0.02, 0.75, h), 0.6));
        c = mix(c, uHor * 0.92, smoothstep(0.0, -0.18, h));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSunCol * (pow(s, 6.0) * 0.22 + pow(s, 60.0) * 0.5 + smoothstep(0.9993, 0.9997, s) * 3.0) * (1.0 - uNight * 0.6);
        if (uNight > 0.02 && d.y > 0.0) {
          vec3 g = floor(d * 190.0); float st = hash(g);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + st * 60.0);
          c += vec3(0.9, 0.95, 1.0) * smoothstep(0.9965, 1.0, st) * tw * uNight * smoothstep(0.0, 0.25, d.y);
        }
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));h.renderOrder=-10,h.frustumCulled=!1,i.add(h);let o=new Ws(16777215,8947848,1);i.add(o);let l=new Xs(16777215,2.5);l.castShadow=t.shadows>0,l.shadow.mapSize.set(t.shadows||512,t.shadows||512);let r=l.shadow.camera;r.left=-19,r.right=19,r.top=19,r.bottom=-19,r.near=1,r.far=90,l.shadow.bias=-4e-4,l.shadow.normalBias=.03,l.shadow.radius=3,i.add(l),i.add(l.target),i.fog=new Kr(16777215,38,230);let c=c1(),u=new Vt,d=[],f=Xt(42);for(let g=0;g<16;g++){let v=new Vt,m=f.range(22,46),p=new wn({map:c,transparent:!0,depthWrite:!1,fog:!1,opacity:f.range(.55,.9)});d.push(p);for(let b=0;b<7;b++){let T=new Hs(p),A=f.range(.4,1);T.scale.set(m*A*.7,m*A*.34,1),T.position.set(f.range(-.5,.5)*m,f.range(-.06,.1)*m,f.range(-3,3)),v.add(T)}let _=f()*we,y=f.range(120,300);v.position.set(Math.cos(_)*y,f.range(46,110),Math.sin(_)*y),v.userData.v=f.range(.4,1.1),u.add(v)}return u.renderOrder=-5,i.add(u),n.setHour=g=>{g=(g%24+24)%24,n.hour=g;let v=0;for(;v<Fa.length-2&&Fa[v+1].h<=g;)v++;let m=Fa[v],p=Fa[v+1],_=Ge((g-m.h)/(p.h-m.h),0,1);for(let M in s)s[M].copy(m[M]).lerp(p[M],_);let y=Me(m.si,p.si,_),b=Me(m.hi,p.hi,_);n.night=Me(m.night,p.night,_);let T=g>5.6&&g<18.9,A=T?(g-5.6)/13.3:(g+24-18.9)%24/10.7,P=Math.sin(A*Math.PI)*(T?1:.75)+.16,k=Me(-1.15,1.15,A);n.sunDir.set(-Math.sin(k)*Math.cos(P),Math.sin(P),Math.cos(k)*Math.cos(P)*.75+.12).normalize(),l.position.copy(n.sunDir).multiplyScalar(48).add(l.target.position),l.color.copy(s.sun),l.intensity=y,o.color.copy(s.sky),o.groundColor.copy(s.gnd),o.intensity=b,i.fog.color.copy(s.fog),a.uTop.value.copy(s.top),a.uHor.value.copy(s.hor),a.uSunDir.value.copy(n.sunDir),a.uSunCol.value.copy(s.sun),a.uNight.value=n.night,e.toneMappingExposure=Me(m.exp,p.exp,_);for(let M of d)M.color.copy(s.cloud);Hn.uDay.value=1-n.night*.8,n.cur=s,n.sunI=y},n.update=(g,v)=>{h.position.copy(v);for(let m of u.children)m.position.x+=m.userData.v*g,m.position.x>320&&(m.position.x=-320)},n.sun=l,n.hemi=o,n.setHour(9),n}function So(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},h={},o=i[0].morphTargetsRelative,l=new gt,r=0;for(let c=0;c<i.length;++c){let u=i[c],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;h[f]===void 0&&(h[f]=[]),h[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(r,f,c),r+=f}}if(t){let c=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(let c in a){let u=df(a[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in h){let u=h[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<h[c].length;++v)f.push(h[c][v][d]);let g=df(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function df(i){let e,t,n,s=-1,a=0;for(let r=0;r<i.length;++r){let c=i[r];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=c.array.length}let h=new e(a),o=0;for(let r=0;r<i.length;++r)h.set(i[r].array,o),o+=i[r].array.length;let l=new Dt(h,t,n);return s!==void 0&&(l.gpuType=s),l}var Oa=new O,h1=new je,Ba=new O,Ac=new O,ka=new O,Eo=new O,Kt=class{constructor(){this.pos=[],this.col=[],this.nrm=[],this.fix=[],this.idx=[],this.n=0}vert(e,t,n,s,a,h,o,l){return Oa.set(e,t,n),a&&Oa.applyMatrix4(a),this.pos.push(Oa.x,Oa.y,Oa.z),this.col.push(s.r,s.g,s.b),this.fix.push(h===void 0?0:1),h===void 0?this.nrm.push(NaN,0,0):(Ba.set(h,o,l),a&&Ba.applyMatrix3(h1.setFromMatrix4(a)).normalize(),this.nrm.push(Ba.x,Ba.y,Ba.z)),this.n++}quadGrid(e,t,n,s){let a=n+1;for(let h=0;h<t;h++)for(let o=0;o<n;o++){let l=e+h*a+o,r=l+1,c=l+a,u=c+1;s?this.idx.push(l,r,c,r,u,c):this.idx.push(l,c,r,r,c,u)}}petal(e,t){let n=t.nu??5,s=t.nv??4,a=t.L,h=t.W/2,o=t.a??1,l=t.b??.6,r=t.cup??0,c=t.curl??0,u=t.curlPow??1.6,d=t.ruffle??0,f=t.rf??2,g=t.twist??0,v=t.fold??0,m=t.base??0,[p,_,y]=t.cols,b=t.vein??0,T=t.phase??0,A=t.tipNotch??0,P=this.n,k=new de,M=0,w=0;for(let U=0;U<=n;U++){let B=U/n,X=t.angFn?t.angFn(B):(t.curl0??0)+c*Math.pow(B,u);if(U>0){let q=(U-.5)/n,W=t.angFn?t.angFn(q):(t.curl0??0)+c*Math.pow(q,u);M+=Math.cos(W)*a/n,w+=Math.sin(W)*a/n}let C=-Math.sin(X),E=Math.cos(X),S=Math.cos(X),L=Math.sin(X),R=Math.pow(Math.sin(Math.PI*Math.pow(Math.min(B,.999),o)),l);R=Math.max(R,m*(1-B));let F=h*R,$=g*B,V=Math.cos($),j=Math.sin($);for(let q=0;q<=s;q++){let W=q/s*2-1,re=W*F,be=-r*F*W*W-v*F*Math.abs(W)+d*h*Math.sin(W*Math.PI*f+T+B*5)*B*B,Te=A?-A*a*(1-Math.abs(W))*Math.pow(B,6):0,Oe=re*V-be*j,ke=re*j+be*V;B<.5?k.copy(p).lerp(_,B*2):k.copy(_).lerp(y,(B-.5)*2),b&&k.multiplyScalar(1-b*(1-Math.abs(W))*(1-B*.5)+b*.4),this.vert(Oe,M+C*ke+S*Te,w+E*ke+L*Te,k,e)}}this.quadGrid(P,n,s,!1)}tube(e,t,n,s,a,h,o=5,l=!1){let r=this.n,c=new de,u=t.length,d=new O(.13,.2,.97);for(let f=0;f<u;f++){let g=f/(u-1);Ac.copy(t[Math.min(u-1,f+1)]).sub(t[Math.max(0,f-1)]).normalize(),ka.crossVectors(Ac,d).normalize(),Eo.crossVectors(ka,Ac).normalize();let v=typeof n=="function"?n(g):n+(s-n)*g;c.copy(a).lerp(h,g);for(let m=0;m<=o;m++){let p=m/o*we,_=Math.cos(p)*v,y=Math.sin(p)*v;this.vert(t[f].x+ka.x*_+Eo.x*y,t[f].y+ka.y*_+Eo.y*y,t[f].z+ka.z*_+Eo.z*y,c,e)}}if(this.quadGrid(r,u-1,o,!0),l){let f=t[u-1];this.blob(new Ye().copy(e||new Ye).multiply(new Ye().makeTranslation(f.x,f.y,f.z)),typeof n=="function"?n(1):s,typeof n=="function"?n(1):s,h,h,5,3)}}blob(e,t,n,s,a,h=7,o=5,l){let r=this.n,c=new de;for(let u=0;u<=o;u++){let d=u/o*Math.PI,f=-Math.cos(d),g=Math.sin(d),v=u/o;l?v<.5?c.copy(s).lerp(a,v*2):c.copy(a).lerp(l,v*2-1):c.copy(s).lerp(a,v);for(let m=0;m<=h;m++){let p=m/h*we;this.vert(Math.cos(p)*g*t,f*n,Math.sin(p)*g*t,c,e)}}this.quadGrid(r,o,h,!1)}lathe(e,t,n,s,a=10,h,o=0,l=5){let r=this.n,c=new de,u=t.length;for(let d=0;d<u;d++){let f=d/(u-1);h?h(f,c):c.copy(n).lerp(s,f);for(let g=0;g<=a;g++){let v=g/a*we,m=t[d][0]*(1+o*f*f*Math.sin(v*l));this.vert(Math.cos(v)*m,t[d][1],Math.sin(v)*m,c,e)}}this.quadGrid(r,u-1,a,!1)}card(e,t,n,s,a,h,o,l,r=.25){let c=this.n;this.vert(0,0,0,s,e,h,o,l),this.vert(-t/2,n*.5,r*t,a,e,h,o,l),this.vert(t/2,n*.5,r*t,a,e,h,o,l),this.vert(0,n,0,a,e,h,o,l),this.idx.push(c,c+2,c+1,c+1,c+2,c+3)}build(){let e=new gt;e.setAttribute("position",new Xe(this.pos,3)),e.setAttribute("color",new Xe(this.col,3)),e.setAttribute("aFix",new Xe(this.fix,1)),e.setIndex(this.idx),e.computeVertexNormals();let t=e.attributes.normal.array,n=this.nrm;for(let s=0;s<n.length;s+=3)Number.isNaN(n[s])||(t[s]=n[s],t[s+1]=n[s+1],t[s+2]=n[s+2]);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Ne=O,rt={leaf:x(5016122),dark:x(2909748),light:x(10275934),stem:x(5934908),gray:x(8363132),blue:x(7315596),wood:x(7227955),woodDark:x(5190692),lime:x(7976264),deep:x(2381102)},Vn=2.39996323,Yv=x(16777215),ai=(i,e)=>Array.isArray(i)?Me(i[0],i[1],e):i,u1={a:.75,b:.75,cup:0,fold:.35,curl:.5,curlPow:1.3,nu:4,nv:2,vein:.3};function vt(i,e,t,n){let s=kn(n.c??rt.leaf,t,.05);i.petal(e,{...u1,...n,cols:[st(s,.7),s,et(s,n.tip??rt.light,n.tipMix??.3)]})}function Rc(i,e,t,n){let s=n.n;for(let a=0;a<s;a++){let h=Me(n.t0??.15,n.t1??.85,(a+t()*.6)/s),{p:o}=Lt(e,h),l=(n.az0??0)+a*(n.azStep??Vn)+t.range(-.3,.3),r=(1-(n.taper??.3)*h)*(.85+t()*.3),c=se(ie(o.x,o.y,o.z),me(l),fe((n.tilt??1)+t.range(-.2,.2)));vt(i,c,t,{...n,L:n.L*r,W:n.W*r})}}function Sn(i,e,t){for(let n=0;n<t.n;n++){let s=n*Vn+e.range(-.25,.25),a=.75+e()*.4,h=se(me(s),ie(0,0,t.r??.005),fe((t.tilt??.9)+e.range(-.2,.2)));vt(i,h,e,{...t,L:t.L*a,W:t.W*a})}}function Zs(i,e,t,n){let s=n.n;for(let a=0;a<s;a++){let h=s>1?a/(s-1)-.5:0,o=1-Math.abs(h)*(n.sideShrink??.5);vt(i,se(e,yt(-h*(n.spread??2.2))),t,{...n,L:n.L*o,W:n.W*o})}}function an(i,e,t,n,s=.06,a=6){let h=Math.cos(n),o=Math.sin(n);return wt(new Ne(0,0,0),new Ne(h*t*.2+i.range(-s,s)*e,e*.55,o*t*.2+i.range(-s,s)*e),new Ne(h*t,e,o*t),a)}function f1(i,e=0,t=0){let{p:n,d:s}=Lt(i,1),a=xt(n,s);return e?se(ie(n.x,n.y,n.z),me(-t+Math.PI/2),fe(e)):a}function St(i,e,t,n,s,a=1){if(s=Ge(s,0,1),n.sepals){let l=n.sepals;for(let r=0;r<l.n;r++){let c=se(e,me(r/l.n*we+.3),ie(0,0,(l.r??.002)*a),fe(Me(.25,l.tilt??1.3,s)));i.petal(c,{L:l.L*a,W:l.W*a,a:.8,b:.8,cup:.5,curl:.3,nu:3,nv:2,cols:[st(l.c??rt.leaf,.8),l.c??rt.leaf,l.c??rt.leaf]})}}let h=t()*we;for(let l of n.layers){l.azList&&(h=h);let r=l.n;for(let c=0;c<r;c++){let u=r>1?c/(r-1):1,d=h+(l.azList?l.azList[c]:l.golden?c*Vn:c/r*we)+t.range(-1,1)*(l.jit??.06)+(l.az??0),f=Me(ai(l.tiltC??.1,u),ai(l.tilt,u),s)+t.range(-1,1)*(l.tj??.05),g=Me(ai(l.curlC??-.2,u),ai(l.curl??0,u),s),v=Me(l.closedScale??.6,1,s)*a*(1+t.range(-.07,.07)),m=se(e,me(d),ie(0,ai(l.y??0,u)*a,ai(l.r??.002,u)*a),fe(f)),p=l.cols;l.cols2&&(p=p.map((y,b)=>et(y,l.cols2[b],u))),l.pick&&(p=l.pick);let _=l.cj??.035;i.petal(m,{L:ai(l.L,u)*v,W:ai(l.W,u)*v,a:l.a??1.2,b:l.b??.55,cup:Me(ai(l.cupC??l.cup??.4,u),ai(l.cup??.4,u),s),curl:g,curlPow:l.curlPow??1.6,ruffle:l.ruffle??0,rf:l.rf??2,phase:t()*6,twist:l.twist?t.range(-l.twist,l.twist):0,nu:l.nu??5,nv:l.nv??4,vein:l.vein??.12,tipNotch:l.notch??0,base:l.base??0,cols:[kn(p[0],t,_),kn(p[1],t,_),kn(p[2],t,_)]})}h+=l.azStep??Math.PI/Math.max(1,r)}let o=n.center;if(o){if(o.type==="dome"&&i.blob(se(e,ie(0,(o.y??0)*a,0)),o.r*a,o.h*a,o.cols[0],o.cols[1],o.seg??10,5,o.cols[2]),o.stamens&&s>.35){let l=o.stamens;for(let r=0;r<l.n;r++){let c=r/l.n*we+t()*.3,u=(l.spread??.4)*(.6+t()*.6),d=l.len*a*(.8+t()*.3),f=wt(new Ne(0,0,0),new Ne(Math.cos(c)*u*d*.3,d*.6,Math.sin(c)*u*d*.3),new Ne(Math.cos(c)*u*d,d*(1-u*.3),Math.sin(c)*u*d),3);i.tube(e,f,.0012*a*(l.thick??1),.001*a*(l.thick??1),l.c,l.c,3);let g=f[3];i.blob(se(e,ie(g.x,g.y,g.z)),(l.tipR??.004)*a,(l.tipR??.004)*a*1.4,l.tip,l.tip,4,3)}}if(o.type==="trumpet"){let l=Me(.55,1,s),r=[[o.r0*.6,0],[o.r0,o.L*.3],[Me(o.r0,o.r1,.5)*l,o.L*.75],[o.r1*l,o.L],[o.r1*l*1.12,o.L*1.03]].map(([c,u])=>[c*a,u*a]);i.lathe(e,r,o.cols[0],o.cols[1],o.seg??12,null,o.ruffle??.1,o.rf??6)}if(o.type==="column"&&s>.3){let l=wt(new Ne(0,0,0),new Ne(0,o.L*.5*a,.004),new Ne(0,o.L*a,.012*a),4);i.tube(e,l,.004*a,.003*a,o.cols[0],o.cols[1],4);for(let c=0;c<10;c++){let u=.55+t()*.4,d=Lt(l,u).p,f=t()*we;i.blob(se(e,ie(d.x+Math.cos(f)*.008*a,d.y,d.z+Math.sin(f)*.008*a)),.0035*a,.0035*a,o.dots,o.dots,4,3)}let r=l[4];i.blob(se(e,ie(r.x,r.y,r.z)),.006*a,.005*a,o.cols[1],o.cols[1],5,3)}o.type==="spadix"&&i.blob(se(e,ie(0,o.L*.5*a,0)),o.r*a,o.L*.5*a,o.cols[0],o.cols[1],6,5)}}function To(i,e,t,n,s){let a=Math.round(n.n*Me(.5,1,s)),h=n.r*Me(.55,1,s);for(let o=0;o<a;o++){let l=1-(o+.5)/a*(1+(n.cover??.6)),r=Math.sqrt(Math.max(0,1-l*l)),c=o*Vn,u=Math.cos(c)*r,d=Math.sin(c)*r,f=s<.3?et(n.bud??rt.lime,t.pick(n.cols),s*2):kn(t.pick(n.cols),t,.05),g=et(f,x(16777215),.25),v=se(e,xt(new Ne(u*h,l*h*(n.squash??.8),d*h),new Ne(u,l,d)),me(t()*we)),m=n.fs*(.8+t()*.4),p=n.np??4,_=1.25;for(let y=0;y<p;y++)i.card(se(v,me(y/p*we),fe(_)),m*.9,m,f,g,0,Math.cos(_),-Math.sin(_),.15)}}function Cc(i,e,t=rt.lime){let n=an(e,.06,.01,e()*we,.05,3);i.tube(null,n,.004,.003,et(t,x(16777215),.3),t,4);let s=n[3];for(let a=0;a<2;a++)vt(i,se(ie(s.x,s.y,s.z),me(a*Math.PI+.4),fe(1)),e,{L:.05,W:.03,c:t,a:.9,b:.6,fold:.2,curl:.4});vt(i,se(ie(s.x,s.y,s.z),me(1.9),fe(.3)),e,{L:.028,W:.014,c:t,a:.9,b:.7})}function qt(i,e,t,n,s){let a=Math.round(e.range(t.stems[0],t.stems[1]));t.basal&&Sn(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n,n:Math.round(t.basal.n*(.5+n*.5))});for(let h=0;h<a;h++){let o=t.faceZ?Math.PI/2+e.range(-.5,.5):h*Vn+e.range(-.4,.4),l=a>1?(t.spread??.06)*Math.sqrt((h+.5)/a):0,r=t.H*n*e.range(.78,1.08),c=(t.lean??.08)*r*e.range(.4,1.3)+l,u=an(e,r,c,o,t.wob??.05,7),d=ie(Math.cos(o)*l*.5,0,Math.sin(o)*l*.5);for(let g of u)g.applyMatrix4(d);let f=(t.stemR??.004)*(.6+.4*n);if(i.tube(null,u,f,f*.65,t.stemC??rt.stem,et(t.stemC??rt.stem,rt.light,.2),5),t.leaf&&Rc(i,u,e,{...t.leaf,L:t.leaf.L*(.5+.5*n),W:t.leaf.W*(.5+.5*n),n:Math.max(1,Math.round(t.leaf.n*n))}),s>=0&&t.head){let g=Ge(s+e.range(-.12,.12)*(s>.9?0:1),0,1),v=t.headsPer??1;for(let m=0;m<v;m++){let p=u,_=o;if(v>1){let{p:T}=Lt(u,.86+.14*(m/v));_=o+m*2.1+e();let A=t.pedicel??.08;p=wt(T,new Ne(T.x+Math.cos(_)*A*.3,T.y+A*.7,T.z+Math.sin(_)*A*.3),new Ne(T.x+Math.cos(_)*A,T.y+A,T.z+Math.sin(_)*A),3),i.tube(null,p,f*.5,f*.4,rt.stem,rt.stem,4)}let y=typeof t.head=="function"?t.head(e):t.head,b=(t.headTilt??0)*(.7+.3*g)+e.range(-.1,.1);St(i,f1(p,b,_),e,y,g,t.headK??1)}}}}function ft(i,e,t,n,s){let a=t.R*n,h=t.H*n,o=Math.max(3,Math.round(t.branches*(.5+.5*n))),l=[];for(let r=0;r<o;r++){let c=r*Vn+e.range(-.3,.3),u=(r+.5)/o,d=Me(.15,1,Math.sqrt(u))*(t.splay??1),f=Me(h,Math.hypot(a,h*.6),u)*e.range(.85,1.05),g=new Ne(Math.cos(c)*Math.sin(d)*f,Math.cos(d)*f,Math.sin(c)*Math.sin(d)*f);g.x=Ge(g.x,-a,a),g.z=Ge(g.z,-a,a);let v=wt(new Ne(0,0,0),new Ne(g.x*.35,g.y*.75,g.z*.35),g,6);i.tube(null,v,(t.stemR??.006)*(.5+.5*n),.002,t.wood??rt.wood,t.stemC??rt.stem,4),Rc(i,v,e,{...t.leaf,n:Math.round(t.leaf.n*(.6+.4*n)),t0:.25,t1:1,taper:.1}),t.leafTip&&Zs(i,se(ie(g.x,g.y,g.z),me(c),fe(.7)),e,t.leafTip),l.push({pts:v,az:c})}for(let r=0;r<Math.round((t.fill??24)*n);r++){let c=e()*we,u=Math.acos(e())*(t.splay??1),d=e.range(.5,.92),f=new Ne(Math.cos(c)*Math.sin(u),Math.cos(u),Math.sin(c)*Math.sin(u)),g=new Ne(f.x*a*d,f.y*h*d*1.05,f.z*a*d);vt(i,xt(g,f.clone().add(new Ne(0,.5,0)).normalize()),e,{...t.leaf,L:t.leaf.L*e.range(.9,1.3),W:t.leaf.W*e.range(.9,1.3)})}if(s>=0&&t.head){let r=Math.max(1,Math.round(t.heads*(.6+.4*n)));for(let c=0;c<r;c++){let u=l[c%l.length],d=c>=l.length,f=u.pts,g=u.az;if(d||t.stalk){g=c*Vn*1.3+e();let b=e.range(.2,.95),T=b*.95*(t.splay??1),A=Me(h,Math.hypot(a,h*.6),b)*(1+(t.stalk??.06)),P=new Ne(Math.cos(g)*Math.sin(T)*A,Math.cos(T)*A,Math.sin(g)*Math.sin(T)*A);f=wt(new Ne(0,0,0),new Ne(P.x*.3,P.y*.8,P.z*.3),P,5),i.tube(null,f,.003,.002,t.stemC??rt.stem,t.stemC??rt.stem,4)}let v=Ge(s+(s>.9?0:e.range(-.1,.1)),0,1),m=typeof t.head=="function"?t.head(e):t.head,{p,d:_}=Lt(f,1),y=_.clone().lerp(new Ne(0,1,0),t.headUp??.45).normalize();m.ball?To(i,xt(p,y),e,m.ball,v):St(i,xt(p,y),e,m,v,t.headK??1)}}}function yn(i,e,t,n,s){if(t.basal&&Sn(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n}),t.basalFan)for(let h=0;h<t.basalFan.count;h++){let o=h*Vn,l=t.basalFan.stalk*n*e.range(.7,1.1),r=wt(new Ne(0,0,0),new Ne(Math.cos(o)*l*.3,l*.7,Math.sin(o)*l*.3),new Ne(Math.cos(o)*l*.8,l*.8,Math.sin(o)*l*.8),4);i.tube(null,r,.003,.002,rt.stem,rt.stem,4);let c=r[4];Zs(i,se(ie(c.x,c.y,c.z),me(-o+Math.PI/2),fe(1.2)),e,{...t.basalFan,L:t.basalFan.L*n,W:t.basalFan.W*n})}let a=Math.round(e.range(t.stems[0],t.stems[1])*(.5+.5*n));for(let h=0;h<a;h++){let o=h*Vn+e(),l=t.H*n*e.range(.75,1.1),r=an(e,l,(t.lean??.18)*l*Math.sqrt((h+.3)/a),o,.03,8);if(i.tube(null,r,t.stemR??.004,.002,t.stemC??rt.stem,t.stemC??rt.stem,4),t.leaf&&Rc(i,r,e,{...t.leaf,n:Math.round(t.leaf.n*n),t0:.05,t1:t.from??.5}),s<0)continue;let c=Math.round(t.florets*(.6+.4*n)),u=t.from??.55;for(let d=0;d<c;d++){let f=d/(c-1),g=Me(u,1,f),{p:v,d:m}=Lt(r,g),p=d*(t.whorl??Vn)+e()*.3,_=Ge(s*1.6-f*.6,0,1),y=(1-f*(t.taper??.5))*Me(.45,1,_),b=et(t.cols[0],t.cols[1],f*.8+e()*.2),T=et(t.bud??rt.lime,b,Ge(_*1.5,0,1)),A=se(xt(v,m),me(p),ie(0,0,t.off??.006));if(t.type==="card")for(let P=0;P<2;P++)i.card(se(A,me(P*.9-.45),fe(Me(.5,1,_))),t.fs*y,t.fs*1.5*y,st(T,.75),et(T,x(16777215),.2),0,.5,.86,.3);else if(t.type==="bell"){let P=t.fs*y,k=se(A,fe(2));i.lathe(k,[[P*.18,0],[P*.3,P*.35],[P*.36,P*.8],[P*.5,P]],st(T,.85),et(T,x(16777215),.25),6,null,.1,5)}else St(i,se(A,fe(1.25)),e,{layers:[{n:5,L:t.fs,W:t.fs*.85,a:1.2,b:.5,tilt:1.15,tiltC:.15,cup:.5,curl:.2,nu:2,nv:2,cols:[st(T,.8),T,et(T,x(16777215),.15)]}],center:t.eye?{type:"dome",r:t.fs*.22,h:t.fs*.15,cols:[t.eye,t.eye],seg:5}:null},_,y)}}}function Gn(i,e,t,n,s){let a=Math.round(t.stems*(.5+.5*n));for(let h=0;h<a;h++){let o=h*Vn+e.range(-.2,.2),l=(h+.5)/a,r=t.L*n*e.range(.7,1.1),c=t.up*(1-l*(t.upFall??.6)),u=t.out*e.range(.7,1.1),d=t.drop*l*e.range(.6,1.2),f=Math.cos(o),g=Math.sin(o),v=wt(new Ne(f*.02,0,g*.02),new Ne(f*u*r*.6,c*r,g*u*r*.6),new Ne(f*u*r,(c*.4-d)*r,g*u*r),9);if(i.tube(null,v,t.stemR??.003,.0015,t.stemC??rt.stem,t.stemC??rt.stem,4),t.frond){let m=t.frond.pairs;for(let p=1;p<=m;p++){let _=p/(m+1),{p:y,d:b}=Lt(v,_),T=Math.sin(Math.PI*Math.pow(_,.7))*t.frond.L*n+.01,A=new Ne(-b.z,0,b.x).normalize();for(let P of[-1,1]){let k=A.clone().multiplyScalar(P).add(b.clone().multiplyScalar(.45)).add(new Ne(0,-.25,0)).normalize();vt(i,xt(y,k),e,{L:T,W:T*t.frond.wr,c:t.frond.c,a:.7,b:.8,nu:2,nv:1,fold:.2,curl:.3,vein:.2})}}}else{let m=Math.round(t.leaf.n*(.5+.5*n));for(let p=0;p<m;p++){let _=Me(.12,1,(p+e()*.5)/m),{p:y,d:b}=Lt(v,_),T=new Ne(e.range(-1,1),e.range(.1,1),e.range(-1,1)).add(b.clone().multiplyScalar(.5)).normalize();vt(i,xt(y,T),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.15),W:t.leaf.W*e.range(.7,1.15)})}}if(s>=0&&t.flower){let m=t.flower.per;for(let p=0;p<m;p++){let _=Me(.35,1,(p+e())/m),{p:y,d:b}=Lt(v,_),T=new Ne(f*.7,.55,g*.7).add(new Ne(e.range(-.4,.4),e.range(-.1,.4),e.range(-.4,.4))).normalize(),A=y.clone().add(T.clone().multiplyScalar(.025));t.flower.make(i,xt(A,T),e,Ge(s+e.range(-.15,.1),0,1))}}}}function as(i,e,t,n,s){let a=t.H*n,h=t.R*n,o=a+h*.55,l=t.bark??rt.wood,r=st(l,.75),c=e.range(-.08,.08)*a,u=wt(new Ne(0,0,0),new Ne(c,a*.5,e.range(-.05,.05)*a),new Ne(c*.5,a,0),6),d=t.trunkR*(.35+.65*n);i.tube(null,u,B=>d*(1.25-.55*B+.5*Math.pow(1-B,6)),0,r,l,8);let f=u[6],g=Math.max(3,Math.round(t.limbs*(.5+.5*n))),v=[];for(let B=0;B<g;B++){let X=B*Vn+e.range(-.3,.3),C=Me(.25,1.25,(B+.5)/g),E=h*e.range(.75,1.05),S=Lt(u,e.range(.7,1)).p,L=new Ne(S.x+Math.cos(X)*Math.sin(C)*E,f.y+Math.cos(C)*E*.9+h*.15,S.z+Math.sin(X)*Math.sin(C)*E),R=wt(S,new Ne(Me(S.x,L.x,.4),Me(S.y,L.y,.75),Me(S.z,L.z,.4)),L,5);i.tube(null,R,d*.42,d*.1,l,l,5),v.push(L,Lt(R,.6).p);for(let F=0;F<2;F++){let $=Lt(R,e.range(.35,.8)).p,V=X+e.range(-1.2,1.2),j=E*e.range(.35,.6),q=new Ne($.x+Math.cos(V)*j,$.y+j*e.range(.2,.8),$.z+Math.sin(V)*j);i.tube(null,[$,$.clone().lerp(q,.5).add(new Ne(0,j*.1,0)),q],d*.16,d*.05,l,l,4),v.push(q)}}let m=new Ne(c*.5,o,0),p=new Ne,_=new Ne,y=new Ne,b=new Ne,T=new Ne,A=s<0?0:s,P=Me(1,t.foliage??1,A),k=t.leafCols??[rt.leaf,rt.dark,rt.lime],M=v.map(B=>({c:B.clone().add(new Ne(0,h*.08,0)),r:h*e.range(.27,.4)}));M.push({c:new Ne(f.x,f.y+h*.75,f.z),r:h*.45});let w=t.blossom&&A>.5&&P<.6?st(t.blossom.cols[0],.9):st(k[0],.6);for(let B of M)i.blob(se(ie(B.c.x,B.c.y,B.c.z),me(e()*3)),B.r*.66,B.r*.52,st(w,.62),st(w,1.05),7,5);let U=(B,X,C,E,S)=>{for(let L=0;L<B;L++){let R=M[Math.floor(e()*M.length)];y.set(e.range(-1,1),e.range(-.75,1),e.range(-1,1)).normalize(),_.copy(y).multiplyScalar(R.r*e.range(.66,1.04)+S),_.y*=.8,_.add(R.c),p.copy(_).sub(m).normalize().lerp(y,.45),p.y+=.3,p.normalize(),b.set(e.range(-1,1),e.range(-1,1),e.range(-1,1)),T.crossVectors(y,b).normalize(),b.crossVectors(T,y).normalize(),_.addScaledVector(T,-X*.4);let F=new Ye().makeBasis(b,T,y.clone().addScaledVector(T,e.range(-.5,.5)).normalize()).setPosition(_),$=kn(e.pick(C),e,.05),V=X*(1-E+e()*E*2),j=p.clone().applyMatrix3(new je().setFromMatrix4(F).invert()).normalize();i.card(F,V*.52,V*1.12,st($,.74),$,j.x,j.y,j.z,.25)}};if(U(Math.round((t.leaves??800)*1.35*n*P),(t.leafSize??.19)*(.6+.4*n),k,.3,0),A>0&&t.blossom&&U(Math.round(t.blossom.n*1.3*n*Me(.3,1,A)),t.blossom.size*Me(.55,1,A),A<.3?t.blossom.buds??t.blossom.cols:t.blossom.cols,.3,.02),A>.6&&t.fruit)for(let B=0;B<t.fruit.n;B++){let X=M[Math.floor(e()*M.length)];y.set(e.range(-1,1),e.range(-.9,.2),e.range(-1,1)).normalize();let C=y.clone().multiplyScalar(X.r*.92).add(X.c);if(C.clone().sub(m).dot(y)<0){B--,e()<.2&&B++;continue}i.blob(ie(C.x,C.y,C.z),t.fruit.r,t.fruit.r*(t.fruit.tall??1.1),st(t.fruit.c,.8),t.fruit.c,7,5,et(t.fruit.c,x(16777215),.2))}}function Lc(i=1.5,e=2.15){let t=[],n=i/2,s=e-n;for(let a=0;a<=6;a++)t.push(new Ne(-n,s*a/6,0));for(let a=1;a<=12;a++){let h=Math.PI-a/12*Math.PI;t.push(new Ne(Math.cos(h)*n,s+Math.sin(h)*n,0))}for(let a=1;a<=6;a++)t.push(new Ne(n,s*(1-a/6),0));return t}function Ao(i,e,t,n,s){let a=Lc(),h=Ge(n*.56,.05,.56),o=(l,r)=>Lt(a,l<0?r:1-r);for(let l of[-1,1])for(let r=0;r<(t.strands??3);r++){let c=[],u=e()*we,d=Math.round(40*h)+3,f=h*e.range(.8,1);for(let v=0;v<=d;v++){let m=v/d*f,{p}=o(l,m),_=u+m*38;c.push(new Ne(p.x+Math.cos(_)*.07,p.y+Math.sin(_*.7)*.03,p.z+Math.sin(_)*.09))}i.tube(null,c,.008,.003,t.wood??rt.wood,rt.stem,4);let g=Math.round(t.leaf.n*f*2);for(let v=0;v<g;v++){let{p:m}=Lt(c,e()),p=new Ne(e.range(-1,1),e.range(-.2,1),e.range(-1,1)).normalize(),_=m.clone().add(p.clone().multiplyScalar(.03));vt(i,xt(_,p),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.2),W:t.leaf.W*e.range(.7,1.2)})}if(s>=0&&t.flower){let v=Math.round(t.flower.n*f*2/(t.strands??3));for(let m=0;m<v;m++){let p=e.range(t.flower.t0??.1,1),{p:_}=Lt(c,p);t.flower.make(i,_,e,Ge(s+e.range(-.15,.1),0,1))}}}}var ot=O,ri=class{constructor(e=1){this.g=[],this.rng=Xt(e)}add(e,t,n,s=.03,a){e=e.index?e.toNonIndexed():e,t&&e.applyMatrix4(t);let h=e.attributes.position.count,o=new Float32Array(h*3),l=new de(n),r=1+this.rng.range(-s,s)*2;if(l.multiplyScalar(r),a){let c=new de(a).multiplyScalar(r),u=e.attributes.position;e.computeBoundingBox();let d=e.boundingBox.min.y,f=e.boundingBox.max.y,g=new de;for(let v=0;v<h;v++)g.copy(l).lerp(c,(u.getY(v)-d)/(f-d+1e-6)),o[v*3]=g.r,o[v*3+1]=g.g,o[v*3+2]=g.b}else for(let c=0;c<h;c++)o[c*3]=l.r,o[c*3+1]=l.g,o[c*3+2]=l.b;return e.setAttribute("color",new Dt(o,3)),e.deleteAttribute("uv"),this.g.push(e),this}box(e,t,n,s,a,h,o,l,r){return this.add(new Cn(e,t,n),se(ie(s,a,h),l??new Ye),o,r)}cyl(e,t,n,s,a,h,o,l=10,r,c,u){return this.add(new vn(e,t,n,l),se(ie(s,a,h),r??new Ye),o,c,u)}sph(e,t,n,s,a,h=1,o=1,l=1,r=10,c,u){return this.add(new zt(e,r,Math.max(4,r-3)),se(ie(t,n,s),Mi(h,o,l)),a,c,u)}lathe(e,t,n,s,a,h=16,o,l){return this.add(new zi(e.map(([r,c])=>new ce(r,c)),h),ie(t,n,s),a,l,o)}mesh(e,t=!0){let n=new Ve(So(this.g),e);return n.castShadow=t,n.receiveShadow=!0,n}},rs=new Wt({vertexColors:!0,roughness:.86}),d1=new Wt({vertexColors:!0,roughness:.86,side:Ct}),un=.18,ei=[{id:0,name:"Jardim da frente",cost:0,rect:[-5,5,-4.6,3.5],tag:[0,0]},{id:1,name:"Varanda",cost:120,rect:[-4.8,4.8,-6.9,-4.9],tag:[0,-5.6],h:2.6,desc:"Vasos suspensos, jardineiras nas janelas e vasos na varanda."},{id:2,name:"Canteiros do leste",cost:500,rect:[5,12.3,-8.6,3.5],tag:[8.7,-1.5],desc:"Dois canteiros, vasos e o lugar da sua primeira \xE1rvore."},{id:3,name:"Laguinho",cost:1200,rect:[-12.3,-5,-8.6,3.5],tag:[-8.6,-1.5],desc:"Um lago para ninfeias e l\xF3tus, com canteiro em volta."},{id:4,name:"Alameda dos arcos",cost:2800,rect:[-5,5,5,14.3],tag:[0,9.3],desc:"Arcos para trepadeiras e quatro canteiros floridos."},{id:5,name:"Pomar",cost:5500,rect:[5,12.3,5,14.3],tag:[8.7,9.6],desc:"Espa\xE7o para tr\xEAs \xE1rvores e canteiros \xE0 sombra."},{id:6,name:"Prado das flores",cost:9e3,rect:[-12.3,-5,5,14.3],tag:[-8.7,9.6],desc:"Canteiros grandes para um mar de flores."},{id:7,name:"Horta",cost:350,rect:[-9.45,-5.2,-8.75,-5.2],tag:[-7.3,-6.9],desc:"Oito canteirinhos para hortali\xE7as, temperos e morangos."},{id:8,name:"Estufa",cost:3200,rect:[5.45,9.25,-8.75,-5.5],tag:[7.35,-5.9],desc:"Seis vasos onde tudo cresce em dobro, sem regar e em qualquer esta\xE7\xE3o. S\xF3 aqui nascem as plantas mais raras."}],Ha={x:-8.6,z:-.6,rx:2.5,rz:1.9},Pc=[{z:0,x:-2.9,zc:-1.3,cols:3,rows:2},{z:0,x:2.9,zc:-1.3,cols:3,rows:2},{z:2,x:8.7,zc:.4,cols:3,rows:2},{z:2,x:8.7,zc:-3.2,cols:3,rows:2},{z:3,x:-8.6,zc:-4.3,cols:5,rows:1},{z:4,x:-2.9,zc:7.6,cols:3,rows:2},{z:4,x:2.9,zc:7.6,cols:3,rows:2},{z:4,x:-2.9,zc:11.6,cols:3,rows:2},{z:4,x:2.9,zc:11.6,cols:3,rows:2},{z:5,x:10.4,zc:6.6,cols:3,rows:1},{z:5,x:10.2,zc:13,cols:3,rows:1},{z:7,x:-7.3,zc:-5.95,cols:4,rows:1,veg:!0},{z:7,x:-7.3,zc:-7.85,cols:4,rows:1,veg:!0},{z:6,x:-8.7,zc:7.2,cols:4,rows:2},{z:6,x:-8.7,zc:10.5,cols:4,rows:2},{z:6,x:-8.7,zc:13.3,cols:4,rows:1}],Ro=.82,Ic=[{z:0,x:-1.35,zc:-4.1},{z:0,x:1.35,zc:-4.1},{z:1,x:-4.05,zc:-5.75,porch:!0},{z:1,x:4.05,zc:-5.75,porch:!0},{z:2,x:6.1,zc:2.5},{z:2,x:11.4,zc:2.5},{z:3,x:-6,zc:2.5},{z:3,x:-11.4,zc:2.5},{z:4,x:-1.25,zc:5.6},{z:4,x:1.25,zc:5.6},{z:5,x:6,zc:5.9},{z:6,x:-5.9,zc:5.9},{z:6,x:-5.9,zc:13.6}],Dc=[{z:2,x:10.4,zc:-6.6},{z:3,x:-10.6,zc:-6.9},{z:5,x:7.3,zc:7.9},{z:5,x:10.6,zc:9.9},{z:5,x:7.2,zc:12.3},{z:6,x:-11.4,zc:5.9+0}],pf=[{z:4,x:0,zc:7.4},{z:4,x:0,zc:11.4}],p1=[-3.4,-1.55,1.55,3.4],m1=[-2.75,2.75],Js=[{id:"lanternas",name:"Lanternas do caminho",price:150,beauty:15,desc:"Luz quentinha para as noites no jardim."},{id:"banco",name:"Banco de madeira",price:240,beauty:15,desc:"Um cantinho para admirar as flores."},{id:"bebedouro",name:"Banho de passarinho",price:380,beauty:20,desc:"Os p\xE1ssaros agradecem a \xE1gua fresca."},{id:"casinha",name:"Casinha de passarinho",price:480,beauty:20,desc:"Um lar colorido no alto de um poste."},{id:"carrinho",name:"Carrinho de m\xE3o florido",price:700,beauty:30,desc:"Um velho carrinho transbordando flores."},{id:"anao",name:"An\xE3o de jardim",price:600,beauty:25,desc:"O guardi\xE3o simp\xE1tico dos canteiros."}];function g1(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=Xt(5);e.fillStyle="#6f9a50",e.fillRect(0,0,512,512);for(let s=0;s<2600;s++){let a=t()*512,h=t()*512,o=t.range(6,34);e.fillStyle=`hsla(${t.range(78,106)},${t.range(30,46)}%,${t.range(32,46)}%,${t.range(.05,.16)})`;for(let l of[-512,0,512])for(let r of[-512,0,512])e.beginPath(),e.ellipse(a+l,h+r,o,o*t.range(.5,1),t()*3,0,we),e.fill()}let n=new On(i);return n.wrapS=n.wrapT=zs,n.repeat.set(36,36),n.colorSpace=_t,n.anisotropy=4,n}function x1(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=Xt(9),a=[];for(let l=0;l<9;l++)a.push([Math.round(s.range(1,5))*s.sign(),Math.round(s.range(1,5))*s.sign(),s()*6,s.range(.4,1)]);let h=(l,r)=>{let c=0;for(let[u,d,f,g]of a)c+=Math.sin((l*u+r*d)*we/256+f)*g;return c};for(let l=0;l<256;l++)for(let r=0;r<256;r++){let c=h(r+1,l)-h(r-1,l),u=h(r,l+1)-h(r,l-1),d=(l*256+r)*4,f=new ot(-c*.8,-u*.8,1).normalize();n.data[d]=(f.x*.5+.5)*255,n.data[d+1]=(f.y*.5+.5)*255,n.data[d+2]=(f.z*.5+.5)*255,n.data[d+3]=255}t.putImageData(n,0,0);let o=new On(e);return o.wrapS=o.wrapT=zs,o.repeat.set(2.2,2.2),o}var Va=(i,e,t,n=0)=>i>t[0]-n&&i<t[1]+n&&e>t[2]-n&&e<t[3]+n,Uc=i=>{let e=i.cols*Ro+.3,t=i.rows*Ro+.3;return[i.x-e/2,i.x+e/2,i.zc-t/2,i.zc+t/2]},Nc=[5.7,9,-8.35,-5.85],mf=(i,e,t=0)=>((i-Ha.x)/(Ha.rx+t))**2+((e-Ha.z)/(Ha.rz+t))**2<1,Ga=(i,e)=>{for(let t=ei.length-1;t>=0;t--)if(t!==1&&Va(i,e,ei[t].rect))return t;return-1},v1=(i,e)=>Math.abs(i)<.75&&e>-4.6&&e<15.5||e>3.6&&e<4.9&&Math.abs(i)<12.3,zc=(i,e)=>e<-4.95&&Math.abs(i)<4.9?un:e<-4.6&&Math.abs(i)<1.4?Me(0,un,Ge((-4.6-e)/.35,0,1)):0;function gf(i,e,t){let n={spots:[],zones:ei,decor:{},zoneGroups:[],lockGroups:[],nightMats:[],lamps:[],tickers:[]},s=Xt(77),a=new Ve(new es(260,48),new Wt({map:g1(),roughness:1,color:14543052}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a),n.ground=a;{let m=new Kt,p=Xt(3),_=(P,k,M,w,U,B)=>{let C=m.n,E=[B,B*1.7,B*2.9];for(let S=0;S<=3;S++)for(let L=0;L<=72;L++){let R=L/72*we,F=S/3,$=Me(P,k,F),V=(Math.sin(R*3+E[0])*.5+Math.sin(R*7+E[1])*.3+Math.sin(R*13+E[2])*.2+1.1)*M*Math.sin(F*Math.PI*.85);m.vert(Math.cos(R)*$,V-.3,Math.sin(R)*$,new de().copy(w).lerp(U,F))}m.quadGrid(C,3,72,!1)};_(60,150,9,x(8301652),x(6986842),1.3),_(120,240,22,x(6986850),x(6262650),4.1);let y=new Ve(m.build(),new Wt({vertexColors:!0,roughness:1}));i.add(y);let b=Qn({sway:.03,glow:.06});n.bgTreeMat=b;let T=[{H:1.6,R:1.9,trunkR:.14,limbs:6,leaves:520,leafSize:.42,leafCols:[x(5016122),x(3832372),x(6987850)]},{H:2.4,R:1.6,trunkR:.13,limbs:6,leaves:480,leafSize:.4,leafCols:[x(3832388),x(3107386),x(5937738)]},{H:1.3,R:2.3,trunkR:.16,limbs:7,leaves:600,leafSize:.45,leafCols:[x(5936192),x(6989384),x(4883512)]}].map((P,k)=>{let M=new Kt;return as(M,Xt(20+k),P,1,-1),M.build()}),A=[];for(let P=0;P<46;P++){let k=P%4,M,w;if(k===0)M=p.range(-24,24),w=p.range(-28,-16);else if(k===1)M=p.range(15.5,30)*(p()<.5?-1:1),w=p.range(-22,22);else if(k===2)M=p.range(-30,30),w=p.range(19.5,34),Math.abs(M)<4&&(M+=8);else{let U=p()*we,B=p.range(34,58);M=Math.cos(U)*B,w=Math.sin(U)*B}A.push([M,w])}T.forEach((P,k)=>{let M=A.filter((B,X)=>X%3===k),w=new Vs(P,b,M.length),U=new Gt;M.forEach(([B,X],C)=>{U.position.set(B,0,X),U.rotation.y=p()*6,U.scale.setScalar(p.range(1.5,2.6)),U.updateMatrix(),w.setMatrixAt(C,U.matrix)}),w.castShadow=!0,w.receiveShadow=!0,i.add(w)})}{let m=new ri(11),p=Xt(12),_=(b,T,A,P)=>{let k=new Ni(T-b,P-A,1,1);k.rotateX(-Math.PI/2),m.add(k,ie((b+T)/2,.012,(A+P)/2),14207138,0)};_(-.8,.8,-4.6,16.2),_(-12.3,12.3,3.55,4.95);let y=(b,T,A)=>m.add(new vn(A,A*1.06,.05,7),se(ie(b,.03,T),me(p()*6),Mi(1,1,p.range(.7,.95))),p.pick([13222324,12432806,14077632,12103844]),.04);for(let b=-4.2;b<16;b+=.86)y(p.range(-.12,.12),b,p.range(.3,.38));for(let b=-11.8;b<12;b+=.86)Math.abs(b)>.7&&y(b,4.25+p.range(-.1,.1),p.range(.3,.38));for(let b=0;b<150;b++){let T=p()<.55,A=T?p.range(-.78,.78):p.range(-12.2,12.2),P=T?p.range(-4.5,16):p.range(3.6,4.9);m.sph(p.range(.02,.05),A,.02,P,p.pick([12103324,14998731,11050636]),1,.5,1,5)}i.add(m.mesh(rs,!1))}_1(i,n);{let m=new ri(21),p=15986146,_=(y,b,T,A)=>{let P=Math.hypot(T-y,A-b),k=Math.round(P/.24),M=Math.atan2(T-y,A-b),w=me(M);for(let U=0;U<=k;U++){let B=U/k,X=Me(y,T,B),C=Me(b,A,B);U%8===0?(m.box(.11,1,.11,X,.5,C,p,w),m.sph(.07,X,1.03,C,p,1,1,1,6)):(m.box(.085,.72,.025,X,.42,C,p,se(w,me(Math.PI/2))),m.add(new ts(.06,.09,4),se(ie(X,.825,C),w,me(Math.PI/4),Mi(1,1,.3)),p))}m.box(.035,.07,P,(y+T)/2,.3,(b+A)/2,p,w),m.box(.035,.07,P,(y+T)/2,.64,(b+A)/2,p,w)};_(-12.6,-9.2,-12.6,14.7),_(12.6,-9.2,12.6,14.7),_(-12.6,14.7,-1.2,14.7),_(1.2,14.7,12.6,14.7),_(-12.6,-9.2,-4.6,-9.2),_(4.6,-9.2,12.6,-9.2);for(let y of[-1,1])m.box(.14,2.2,.14,y*1.2,1.1,14.7,p);m.box(2.7,.12,.16,0,2.2,14.7,p),m.box(2.9,.06,.3,0,2.29,14.7,p),m.box(.08,1,.08,2,.5,15.3,8018496),m.box(.24,.2,.36,2,1.08,15.3,13125690),m.box(.02,.14,.1,2.13,1.14,15.2,15986146),i.add(m.mesh(rs))}let h=[[.001,0],[.17,0],[.19,.04],[.25,.36],[.285,.38],[.285,.43],[.25,.43],[.235,.4]],o=new Wt({color:5914672,roughness:1}),l=m=>(m.id=n.spots.length,m.soil=null,n.spots.push(m),m),r=(m,p,_,y,b,T=.35)=>{let A=new Ve(new zt(b,9,5,0,we,0,Math.PI/2),o.clone());return A.scale.y=T,A.position.set(p,_,y),A.receiveShadow=!0,m.add(A),A};for(let m of ei){let p=new Vt,_=new ri(100+m.id),y=Xt(200+m.id);n.zoneGroups[m.id]=p,i.add(p);for(let b of Pc.filter(T=>T.z===m.id)){let[T,A,P,k]=Uc(b),M=A-T,w=k-P,U=b.x,B=b.zc,X=b.veg?[13150328,12360812,13808772]:[9070152,8215616,9728078];_.box(M+.16,.2,.09,U,.1,P,y.pick(X)),_.box(M+.16,.2,.09,U,.1,k,y.pick(X)),_.box(.09,.2,w,T,.1,B,y.pick(X)),_.box(.09,.2,w,A,.1,B,y.pick(X));for(let[S,L]of[[T,P],[A,P],[T,k],[A,k]])_.box(.12,.27,.12,S,.135,L,7229496);let C=new Ni(M,w,Math.round(M*4),Math.round(w*4));C.rotateX(-Math.PI/2);let E=C.attributes.position;for(let S=0;S<E.count;S++)E.setY(S,y.range(-.012,.02));C.computeVertexNormals(),_.add(C,ie(U,.15,B),6177843,.02);for(let S=0;S<b.rows;S++)for(let L=0;L<b.cols;L++){let R=U+(L-(b.cols-1)/2)*Ro,F=B+(S-(b.rows-1)/2)*Ro,$=b.rows===1||S===b.rows-1,V=l({type:b.veg?"veg":"bed",zone:m.id,pos:new ot(R,.16,F),stand:new ot(R,0,$?k+.5:P-.5),scale:1.75,pickR:.36,pickH:.5});V.soil=r(p,R,.15,F,.26)}}for(let b of Ic.filter(T=>T.z===m.id)){let T=b.porch?un:0,A=1.25;_.lathe(h.map(([k,M])=>[k*A,M*A]),b.x,T,b.zc,y.pick([13004616,12149311,13597266]),18,void 0,.02);let P=l({type:"pot",zone:m.id,pos:new ot(b.x,T+.5,b.zc),stand:new ot(b.x+(b.porch?b.x>0?-.85:.85:0),0,b.zc+(b.porch?.1:.85)),scale:1.55,pickR:.42,pickH:.9,pickY:-.4});P.soil=r(p,b.x,T+.47,b.zc,.3,.2)}for(let b of Dc.filter(T=>T.z===m.id)){for(let A=0;A<13;A++){let P=A/13*we;_.sph(y.range(.1,.14),b.x+Math.cos(P)*.72,.03,b.zc+Math.sin(P)*.72,y.pick([12432806,11116949,13617080]),1,.7,1,6)}let T=l({type:"tree",zone:m.id,pos:new ot(b.x,.03,b.zc),stand:new ot(b.x+.35,0,b.zc+1.05),scale:1.45,pickR:.7,pickH:1.9});T.soil=r(p,b.x,0,b.zc,.66,.12)}for(let b of pf.filter(T=>T.z===m.id)){let T=Lc(),A=15986146;for(let k of[-.24,.24]){let M=new Ea(T.map(w=>new ot(w.x,w.y,w.z+k)));_.add(new lo(M,40,.028,6),ie(b.x,0,b.zc),A,0)}for(let k=1;k<T.length-1;k+=2){let M=T[k];_.cyl(.014,.014,.48,b.x+M.x,M.y,b.zc,A,5,fe(Math.PI/2),0)}let P=l({type:"arch",zone:m.id,pos:new ot(b.x,0,b.zc),stand:new ot(b.x-1.35,0,b.zc+.55),scale:1,pickR:.95,pickH:2.4});P.soil=r(p,b.x-.75,0,b.zc,.3,.25),r(p,b.x+.75,0,b.zc,.3,.25).material=P.soil.material}if(m.id===1){for(let b of p1){_.add(new zt(.22,12,6,0,we,Math.PI/2,Math.PI/2),ie(b,2.02,-5.05),9071176,.03),_.add(new bi(.22,.018,5,14),se(ie(b,2.02,-5.05),fe(Math.PI/2)),7229496);for(let k=0;k<3;k++){let M=k/3*we+.5;_.cyl(.005,.005,.55,b+Math.cos(M)*.1,2.02+.26,-5.05+Math.sin(M)*.1,4868682,4,se(me(-M),yt(.4)),0)}let P=l({type:"hang",zone:1,pos:new ot(b,2.02,-5.05),stand:new ot(b,0,-4.35),scale:1.35,pickR:.4,pickH:.9,pickY:-.5,high:!0});P.soil=r(p,b,2.02-.03,-5.05,.2,.2)}for(let b of m1){_.box(1.5,.2,.26,b,1,-6.78,8297100),_.box(1.56,.03,.3,b,1.1,-6.78,7244412);for(let T of[-.6,.6])_.box(.05,.14,.2,b+T,.86,-6.84,5917242);for(let T=-1;T<=1;T++){let A=l({type:"window",zone:1,pos:new ot(b+T*.46,1.1,-6.76),stand:new ot(b+T*.46,0,-6.05),scale:1.2,pickR:.24,pickH:.6,pickY:-.1});A.soil=r(p,b+T*.46,1.09,-6.76,.17,.2)}}}if(m.id===3&&y1(p,_,n,l,y),m.id===7&&M1(_,-9.55,-6.9),m.id===8&&w1(p,_,n,l,r),_.g.length&&p.add(_.mesh(rs)),m.cost>0){let b=new Vt,T=new ri(300+m.id),[A,P]=m.tag;m.id===1?(T.box(.7,.36,.05,A,1.75,-4.92,12095592),T.cyl(.01,.01,.4,A-.28,2.05,-4.92,5592405,4),T.cyl(.01,.01,.4,A+.28,2.05,-4.92,5592405,4)):(T.box(.09,1.25,.09,A,.62,P,8018496),T.box(.95,.5,.06,A,1.25,P+.06,12884588,yt(.04)),T.box(.8,.07,.065,A,1.33,P+.07,9070152,yt(.04)),T.box(.6,.07,.065,A-.08,1.17,P+.07,9070152,yt(.04))),b.add(T.mesh(rs)),i.add(b),n.lockGroups[m.id]=b}}S1(i,n),b1(i,n),E1(i,n,e,t);let c=new Fn({visible:!1});n.pickables=[];for(let m of n.spots){let p=new Ve(new vn(m.pickR,m.pickR,m.pickH,8),c);p.position.copy(m.pos),p.position.y+=m.pickH/2+(m.pickY??0),p.userData.spot=m,i.add(p),n.pickables.push(p),m.pick=p}n.setZone=(m,p)=>{n.zoneGroups[m].visible=p,n.lockGroups[m]&&(n.lockGroups[m].visible=!p);for(let _ of n.spots)_.zone===m&&(_.pick.visible=p)},n.setDecor=(m,p)=>{n.decor[m]&&(n.decor[m].visible=p)},n.setNight=m=>{for(let p of n.nightMats)p.emissiveIntensity=p.userData.e*m;for(let p of n.lamps)p.intensity=p.userData.i*m*(p.parent.visible?1:0),p.visible=m>.02};let u=[[[1,1,1],[1,1,1]],[[.93,1,.84],[.88,1,.82]],[[1.22,.98,.6],[1.6,.86,.4]],[[.86,.96,.92],[.78,.9,.8]]],d=new de(1,1,1),f=new de(1,1,1),g=new de(14543052),v=new de;return n.setSeason=(m,p)=>{d.setRGB(...u[m][0]),f.setRGB(...u[m][1]),p&&(n.grass.material.color.copy(d),n.bgTreeMat.color.copy(f),n.ground.material.color.copy(v.copy(g).multiply(d)))},n.tickers.push(m=>{let p=Math.min(1,m*.6);n.grass.material.color.lerp(d,p),n.bgTreeMat.color.lerp(f,p),n.ground.material.color.lerp(v.copy(g).multiply(d),p)}),n.update=(m,p)=>{for(let _ of n.tickers)_(m,p)},n.blocked=(m,p)=>{if(Math.abs(m)>12.2||p>14.4||p<-8.9)return!0;if(Math.abs(m)<4.95&&p<-4.95)return p<-6.55||Math.abs(m)>4.6||Math.abs(Math.abs(m)-4.05)<.45&&p<-5.3;for(let _ of Pc)if(Va(m,p,Uc(_),.22))return!0;if(mf(m,p,.35)||Va(m,p,Nc,.15))return!0;for(let _ of Ic)if(!_.porch&&(m-_.x)**2+(p-_.zc)**2<.5**2)return!0;for(let _ of Dc)if((m-_.x)**2+(p-_.zc)**2<.62**2)return!0;for(let _ of pf)for(let y of[-.75,.75])if((m-_.x-y)**2+(p-_.zc)**2<.3**2)return!0;for(let _ in n.things){let y=n.things[_];if((m-y.pos.x)**2+(p-y.pos.z)**2<y.r**2)return!0}for(let _ of n.decorBlocks)if(n.decor[_.id].visible&&(m-_.x)**2+(p-_.z)**2<_.r**2)return!0;return!1},n}function _1(i,e){let t=new ri(31),n=Xt(32),s=16182489,a=7228468,h=16512748,o=[12146746,12870722,11423796,13397578,12082240],l=-10,r=9,c=6.2,u=3,d=-6.9;t.box(r,u,c,0,u/2,l,s,null,0),t.box(r+.12,.5,c+.12,0,.25,l,11904662,null,0);let f=2.5,g=r/2;for(let M of[-1,1]){let w=new gt,U=M*g,B=l-c/2,X=l+c/2,C=M>0?[U,u,X,U,u,B,U,u+f,l]:[U,u,B,U,u,X,U,u+f,l];w.setAttribute("position",new Xe(C,3)),w.computeVertexNormals(),t.add(w,null,s,0),t.cyl(.42,.42,.06,U+M*.02,u+.85,l,10274013,16,yt(Math.PI/2),0),t.add(new bi(.44,.05,6,20),se(ie(U+M*.03,u+.85,l),me(Math.PI/2)),h,0)}let v=Math.atan2(f,c/2),m=Math.hypot(f,c/2),p=(M,w,U,B,X,C,E,S,L)=>{let R=(w-M)/L,F=Math.sin(C),$=Math.cos(C);for(let V=0;V<S;V++)for(let j=0;j<L;j++){let q=(V+.5)/S*E,W=M+(j+.5)*R+(V%2-.5)*R*.5;t.add(new vn(R*.52,R*.52,E/S*1.3,6,1,!0,0,Math.PI),se(ie(W,U-F*q+.04+V*.002,B+X*$*q),fe(X*(Math.PI/2+C)),me(X*Math.PI/2),Mi(.45,1,1)),o[Math.floor(n()*o.length)],.05)}t.box(w-M-.1,.08,E,(M+w)/2,U-F*E/2-.03,B+X*$*E/2,9061936,fe(X*C),0)};p(-(r+1.1)/2,(r+1.1)/2,u+f,l,-1,v,m+.75,11,26),p(-(r+1.1)/2,(r+1.1)/2,u+f,l,1,v,m+.12,10,26),t.cyl(.16,.16,r+1.2,0,u+f+.1,l,11030066,8,yt(Math.PI/2));for(let M of[-1,1])for(let w of[-1,1])t.box(.2,u,.2,M*g,u/2,l+w*c/2,a);t.box(r+.1,.18,.16,0,u-.05,d,a),t.box(.7,1.9,.7,2.6,u+f-.3,l-1,11036494),t.box(.84,.14,.84,2.6,u+f+.68,l-1,9327936),e.chimney=new ot(2.6,u+f+.8,l-1),t.box(1.24,2.28,.1,0,1.14+un,d+.03,h,null,0),t.box(1.04,2.14,.1,0,1.09+un,d+.06,6262666,null,0);for(let[M,w]of[[-.24,.55],[.24,.55],[-.24,1.3],[.24,1.3]])t.box(.36,.6,.03,M,w+un,d+.115,5670272,null,0);t.sph(.045,.38,1.1+un,d+.14,14727258,1,1,1,8,0),t.add(new es(.2,16),ie(0,1.86+un,d+.115),16179104,0);let _=new Wt({color:10275040,roughness:.15,metalness:.1,emissive:16761962,emissiveIntensity:0});_.userData.e=1.6,e.nightMats.push(_);let y=[];for(let M of[-2.75,2.75]){t.box(1.5,1.42,.1,M,1.85,d+.02,h,null,0);let U=new Ni(1.3,1.22);U.translate(M,1.85,d+.075),y.push(U),t.box(.05,1.22,.04,M,1.85,d+.09,h,null,0),t.box(1.3,.05,.04,M,1.85,d+.09,h,null,0);for(let B of[-1,1]){t.box(.5,1.42,.05,M+B*1.02,1.85,d+.04,7312296);for(let X=0;X<6;X++)t.box(.4,.03,.02,M+B*1.02,1.85-.55+X*.22,d+.075,6456728,null,0)}t.box(1.7,.07,.2,M,1.85-.75,d+.08,h,null,0)}for(let M of[-1,1]){let w=new es(.4,16);w.rotateY(M*Math.PI/2),w.translate(M*(g+.055),u+.85,l),y.push(w)}let b=new Ve(So(y),_);i.add(b),t.box(9.8,un,2.05,0,un/2,-5.93,11108956,null,0);for(let M=0;M<20;M++)t.box(.46,.02,2.05,-4.66+M*.49,un+.005,-5.93,n.pick([11766370,10911320,12226664]),null,.03);t.box(2.4,.09,.4,0,.045,-4.75,10911320);for(let M of[-4.7,-1.45,1.45,4.7])t.box(.15,2.35,.15,M,un+1.17,-5,h),t.box(.24,.1,.24,M,un+.05,-5,h),t.box(.26,.08,.26,M,2.5,-5,h);t.box(9.8,.16,.16,0,2.6,-5,h);for(let[M,w]of[[-4.7,-1.45],[1.45,4.7]]){t.box(w-M,.06,.07,(M+w)/2,un+.78,-5,h);for(let U=M+.2;U<w;U+=.2)t.box(.04,.7,.04,U,un+.42,-5,h,null,0)}p(-5.15,5.15,u+.1,d-.02,1,.19,2.5,5,30),t.box(.12,.2,.12,.95,2.1,d+.12,3815994);let T=new Wt({color:16773320,emissive:16760944,emissiveIntensity:0,roughness:.4});T.userData.e=4,e.nightMats.push(T);let A=new Ve(new zt(.07,8,6),T);A.position.set(.95,2.02,d+.14),i.add(A);let P=new Da(16758886,0,11,1.6);P.position.set(0,2.3,-5.6),P.userData.i=14,i.add(P),e.lamps.push(P),t.box(.9,.02,.5,0,un+.012,-6.4,12087370),t.lathe([[.001,0],[.26,0],[.3,.3],[.26,.62],[.24,.62],[.24,.56]],5.6,0,-6.5,8018496,12),t.cyl(.24,.24,.02,5.6,.55,-6.5,6987968,12);let k=t.mesh(d1);i.add(k)}function y1(i,e,t,n,s){let{x:a,z:h,rx:o,rz:l}=Ha,r=new Aa,c=40;for(let y=0;y<=c;y++){let b=y/c*we,T=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5),A=Math.cos(b)*o*T,P=Math.sin(b)*l*T;y===0?r.moveTo(A,P):r.lineTo(A,P)}let u=new oo(r,24);u.rotateX(Math.PI/2);let d=x1(),f=new Ve(u,new Wt({color:4165526,roughness:.06,metalness:.35,normalMap:d,normalScale:new ce(.35,.35),transparent:!0,opacity:.86,side:Ct}));f.position.set(a,.035,h),f.receiveShadow=!0,i.add(f),t.water=f;let g=new Ve(u.clone(),new Wt({color:2771524,roughness:1,side:Ct}));g.position.set(a,.008,h),i.add(g),t.tickers.push((y,b)=>{d.offset.set(b*.012,b*.018)});let v=[12432806,11116949,13617080,10261898,11906204];for(let y=0;y<46;y++){let b=y/46*we+s.range(-.04,.04),T=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5)+s.range(0,.07),A=s.range(.13,.25);e.add(new zt(A,7,5),se(ie(a+Math.cos(b)*o*T,.04,h+Math.sin(b)*l*T),me(s()*6),Mi(1,s.range(.5,.8),s.range(.7,1.1))),s.pick(v),.04)}let m=new Kt;for(let y=0;y<26;y++){let b=s.range(2.4,4.4),T=Math.cos(b)*o*.86+s.range(-.15,.15),A=Math.sin(b)*l*.86+s.range(-.1,.1),P=s.range(.5,1);m.petal(se(ie(T,0,A),me(s()*6),fe(s.range(.02,.2))),{L:P,W:.03,a:.6,b:.4,curl:.4,fold:.4,nu:4,nv:1,cols:[x(4160058),x(5937736),x(9091168)]}),y%4===0&&(m.tube(ie(T,0,A),[new ot(0,0,0),new ot(.02,P*.6,0),new ot(.03,P*1.1,0)],.006,.005,x(5933626),x(6982202),4),m.blob(ie(T+.03,P*1.1,A),.02,.07,x(6965802),x(5913122),6,4))}let p=new Ve(m.build(),Qn({sway:.25}));p.position.set(a,0,h),p.castShadow=!0,i.add(p);for(let[y,b]of[[-1,.45],[.85,-.5],[.15,.75],[1.35,.5]]){let T=a+y,A=h+b,P=Math.hypot(y/o,b/l),k=a+y/P*1*(1+.32/o),M=h+b/P*(1+.42/l),w=Math.atan2(b/l,y/o);n({type:"pond",zone:3,pos:new ot(T,.04,A),stand:new ot(a+Math.cos(w)*(o+.75),0,h+Math.sin(w)*(l+.75)),scale:1.7,pickR:.5,pickH:.5})}let _=[];for(let y=0;y<4;y++){let b=new Kt,T=s.pick([x(15759914),x(16052456),x(15222826),x(16232490)]);b.blob(se(yt(Math.PI/2),Mi(1,1,.5)),.05,.14,T,s()<.5?x(16052456):T,6,5),b.petal(se(ie(-.12,0,0),yt(Math.PI/2),fe(Math.PI/2)),{L:.1,W:.09,a:1.6,b:.5,nu:2,nv:2,cols:[T,T,T]});let A=new Ve(b.build(),new Wt({vertexColors:!0,roughness:.5,side:Ct}));A.userData={a:s()*6,r:s.range(.45,.8),v:s.range(.25,.45)*s.sign(),o:s()*6},i.add(A),_.push(A)}t.tickers.push((y,b)=>{for(let T of _){let A=T.userData,P=A.a+b*A.v,k=A.r+.12*Math.sin(b*.5+A.o);T.position.set(a+Math.cos(P)*o*k,-.03,h+Math.sin(P)*l*k),T.rotation.y=-P-Math.sign(A.v)*Math.PI/2+Math.sin(b*5+A.o)*.15}})}function b1(i,e){e.things={};let t=new Fn({visible:!1}),n=(s,a,h,o,l,r,c)=>{let u=new Ve(new vn(o,o,l,8),t);return u.position.set(a,l/2,h),u.userData.thing=s,i.add(u),e.things[s]={kind:s,pos:new ot(a,0,h),r:o*.85,stand:new ot(a+r[0],0,h+r[1]),top:c,pick:u},u};{let h=new ri(61),o=me(Math.PI/2),l=(m,p,_)=>new ot(m,p,_).applyMatrix4(o).add(new ot(-1.85,0,2.75)),r=(m,p,_,y,b,T,A,P)=>{let k=l(y,b,T);h.box(m,p,_,k.x,k.y,k.z,A,P?se(o,P):o)};r(1,.05,.56,0,.66,0,12159582),r(.94,.3,.5,0,.5,0,11041360);for(let m of[-.44,.44])for(let p of[-.22,.22])r(.06,.66,.06,m,.33,p,8215616);for(let m of[-.47,.47])r(.045,1.25,.045,m,1.28,-.24,8215616);for(let m=0;m<6;m++)r(.18,.03,.7,-.45+m*.18,1.88-0,.02,m%2?16183266:14837855,fe(.22));let c=l(-.22,.69,.02);h.lathe([[.001,0],[.13,0],[.17,.14],[.175,.16],[.16,.16]],c.x,c.y,c.z,12884572,12),c=l(.26,.69,0),h.lathe([[.001,0],[.09,0],[.1,.2],[.085,.2]],c.x,c.y,c.z,8366272,10),r(.34,.26,.03,0,.36,.3,4016708,fe(-.18)),r(.38,.03,.035,0,.5,.275,12159582,fe(-.18));let u=h.mesh(rs);i.add(u);let d=new Kt,f=Xt(62),g=[15760036,16238666,16777215,11832048,14829626].map(x);for(let m=0;m<16;m++){let p=m<10,_=p?l(-.22+f.range(-.1,.1),.82,.02+f.range(-.1,.1)):l(.26+f.range(-.04,.04),.88,f.range(-.04,.04)),y=p?f.range(.06,.16):f.range(.14,.26),b=f.pick(g);d.tube(ie(_.x,_.y,_.z),[new ot(0,0,0),new ot(.01,y*.5,0),new ot(f.range(-.05,.05),y,f.range(-.05,.05))],.004,.003,x(4885050),x(5937732),4);for(let T=0;T<6;T++)d.petal(se(ie(_.x,_.y+y,_.z),me(T*1.05),fe(1.15)),{L:.04,W:.028,nu:2,nv:2,cup:.3,cols:[b,b,b]})}let v=new Ve(d.build(),Qn({sway:.3}));v.castShadow=!0,i.add(v),n("orders",-1.85,2.75,.62,2,[1.05,0],2.15)}{let h=new ri(63);h.cyl(.04,.05,1.05,1.7,.52,2.95,9071178,6),h.box(.3,.2,.44,1.7,1.14,2.95,7314872),h.cyl(.15,.15,.44,1.7,1.24,2.95,7314872,12,fe(Math.PI/2)),h.box(.02,.2,.02,1.7-.165,1.2,2.95+.24,5209496),h.cyl(.13,.13,.012,1.7,1.2,2.95+.226,5999270,12,fe(Math.PI/2)),i.add(h.mesh(rs));let o=new Vt;o.position.set(1.7+.16,1.16,2.95-.05);let l=new Ve(new Cn(.015,.26,.03),new Wt({color:14829626,roughness:.6}));l.position.y=.13,o.add(l);let r=new Ve(new Cn(.015,.09,.12),l.material);r.position.set(0,.22,.06),o.add(r),l.castShadow=r.castShadow=!0,i.add(o),e.mailFlag=o,n("mail",1.7,2.95,.36,1.6,[0,.8],1.75)}}function M1(i,e,t){i.cyl(.03,.035,1.5,e,.75,t,9071178,6),i.box(1,.05,.05,e,1.12,t,9071178),i.box(.36,.44,.16,e,.98,t,13129802),i.box(.3,.1,.12,e-.34,1.12,t,13129802),i.box(.3,.1,.12,e+.34,1.12,t,13129802);for(let n of[-.5,.5])for(let s=0;s<4;s++)i.box(.012,.11,.012,e+n+(s-1.5)*.02*Math.sign(n),1.07,t,15257466,yt(n*(.2+s*.2)));i.sph(.13,e,1.36,t,15520922,1,1.05,1,10),i.add(new ts(.2,.2,10),ie(e,1.53,t),12159566),i.cyl(.27,.27,.02,e,1.44,t,12159566,12);for(let n of[-.045,.045])i.sph(.016,e+n,1.38,t+.12,3811870,1,1,1,6);i.sph(.02,e,1.34,t+.128,15238202,1,1,1,6);for(let n=0;n<7;n++)i.box(.014,.16,.014,e-.15+n*.05,.72,t,15257466,yt((n-3)*.08))}function w1(i,e,t,n,s){let[a,h,o,l]=Nc,r=(a+h)/2,c=h-a,u=l-o,d=1.9,f=.8,g=16184040,v=new Wt({color:13626098,roughness:.08,metalness:.1,transparent:!0,opacity:.2,side:Ct,depthWrite:!1}),m=[],p=(T,A,P,k,M,w=0,U=0)=>{let B=new Ni(T,A);B.applyMatrix4(se(ie(P,k,M),me(w),fe(U))),m.push(B)};e.box(c+.1,.05,u+.1,r,.025,(o+l)/2,12563618,null,.02);for(let[T,A,P,k]of[[r,o,c,.1],[a,(o+l)/2,.1,u],[h,(o+l)/2,.1,u],[r-c/4-.25,l,c/2-.5,.1],[r+c/4+.25,l,c/2-.5,.1]])e.box(P,.36,k,T,.18,A,11891802,null,.04);for(let T of[a,h])for(let A of[o,l])e.box(.07,d,.07,T,d/2,A,g,null,0);for(let T=1;T<4;T++){let A=a+c*T/4;e.box(.045,d,.045,A,d/2,o,g,null,0),Math.abs(A-r)>.6&&e.box(.045,d,.045,A,d/2,l,g,null,0)}for(let T of[r-.5,r+.5])e.box(.055,d,.055,T,d/2,l,g,null,0);for(let T of[o,l])e.box(c,.06,.06,r,d,T,g,null,0);for(let T of[a,h])e.box(.06,.06,u,T,d,(o+l)/2,g,null,0),e.box(.045,d,.045,T,d/2,(o+l)/2,g,null,0);e.box(c+.1,.06,.06,r,d+f,(o+l)/2,g,null,0);let _=Math.hypot(f,u/2),y=Math.atan2(f,u/2);for(let T=0;T<=4;T++)for(let A of[-1,1])e.box(.045,.045,_,a+c*T/4,d+f/2,(o+l)/2+A*u/4,g,fe(A*y),0);p(c,d-.36,r,.36+(d-.36)/2,o),p(u,d-.36,a,.36+(d-.36)/2,(o+l)/2,Math.PI/2),p(u,d-.36,h,.36+(d-.36)/2,(o+l)/2,Math.PI/2),p(c/2-.5,d-.36,r-c/4-.25,.36+(d-.36)/2,l),p(c/2-.5,d-.36,r+c/4+.25,.36+(d-.36)/2,l);for(let T of[-1,1])p(c,_,r,d+f/2,(o+l)/2+T*u/4,0,T*y-Math.PI/2);let b=new Ve(So(m),v);b.renderOrder=4,i.add(b),e.box(c-.5,.05,.5,r,.72,o+.42,12159582);for(let T of[a+.4,h-.4])for(let A of[o+.24,o+.6])e.box(.05,.7,.05,T,.35,A,9070152);for(let T=0;T<6;T++){let A=a+.45+T*((c-.9)/5),P=.745,k=o+.42;e.lathe([[.001,0],[.11,0],[.12,.03],[.16,.24],[.18,.25],[.18,.28],[.155,.28],[.15,.26]],A,P,k,[13004616,8366240,14200938][T%3],14,void 0,.02);let M=n({type:"green",zone:8,pos:new ot(A,P+.27,k),stand:new ot(r+(T-2.5)*.12,0,l+.45),scale:1.15,pickR:.2,pickH:.8,pickY:-.25});M.soil=s(i,A,P+.255,k,.15,.2)}}function S1(i,e){e.decorBlocks=[];let t=(n,s,a)=>{let h=new ri(400+n.length),o=new Vt;s(h,o),h.g.length&&o.add(h.mesh(rs)),o.visible=!1,i.add(o),e.decor[n]=o,a&&e.decorBlocks.push({id:n,...a})};t("lanternas",(n,s)=>{let a=new Wt({color:16773320,emissive:16758880,emissiveIntensity:0,roughness:.4});a.userData.e=5,e.nightMats.push(a);let h=[[-1,-2.6],[1,.6],[-1,6.2],[1,9.4],[-1,12.8],[5.6,4.25],[-5.6,4.25]];for(let[o,l]of h){n.cyl(.025,.035,.8,o,.4,l,3815994,6),n.box(.16,.03,.16,o,.8,l,3815994),n.add(new ts(.14,.1,4),se(ie(o,1.05,l),me(Math.PI/4)),3815994);let r=new Ve(new Cn(.11,.18,.11),a);r.position.set(o,.905,l),s.add(r)}for(let[o,l]of[[0,-1],[0,7.8],[0,4.25]]){let r=new Da(16756832,0,9,1.5);r.position.set(o,1.1,l),r.userData.i=9,s.add(r),e.lamps.push(r)}}),t("banco",n=>{for(let o=0;o<4;o++)n.box(1.5,.04,.1,-3.4,.45,2.7-.18+o*.12,10778704,null,.04);for(let o=0;o<3;o++)n.box(1.5,.1,.035,-3.4,.62+o*.14,2.7-.27,10778704,fe(-.15),.04);for(let o of[-.68,.68])n.box(.07,.45,.07,-3.4+o,.22,2.7+.2,4868682),n.box(.07,.98,.07,-3.4+o,.49,2.7-.25,4868682,fe(-.1)),n.box(.07,.05,.5,-3.4+o,.62,2.7-.02,4868682)},{x:-3.4,z:2.7,r:.85}),t("bebedouro",(n,s)=>{n.lathe([[.001,0],[.24,0],[.22,.06],[.09,.12],[.07,.62],[.12,.7],[.42,.78],[.44,.84],[.4,.84],[.36,.78],[.001,.76]],2.6,0,2.5,13617340,18);let l=new Ve(new es(.385,18),new Wt({color:6992064,roughness:.05,metalness:.3,transparent:!0,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.set(2.6,.815,2.5),s.add(l)},{x:2.6,z:2.5,r:.55}),t("casinha",n=>{n.cyl(.04,.05,2.1,4.6,1.05,-3.7,9071178,6),n.box(.36,.34,.32,4.6,2.2,-3.7,8038592),n.box(.3,.03,.4,4.6-.12,2.45,-3.7,13129802,yt(.7)),n.box(.3,.03,.4,4.6+.12,2.45,-3.7,13129802,yt(-.7)),n.cyl(.06,.06,.02,4.6,2.22,-3.7+.165,2763306,10,fe(Math.PI/2)),n.cyl(.012,.012,.12,4.6,2.1,-3.7+.2,9071178,5,fe(Math.PI/2))}),t("carrinho",(n,s)=>{let o=me(.6),l=(g,v,m)=>new ot(g,v,m).applyMatrix4(o).add(new ot(4.2,0,1.95)),r=l(0,.42,0);n.box(.9,.28,.56,r.x,r.y,r.z,5933690,o),r=l(0,.56,0),n.box(.82,.04,.48,r.x,r.y,r.z,4863014,o),r=l(.55,.2,0),n.cyl(.2,.2,.07,r.x,r.y,r.z,3815994,14,se(o,fe(Math.PI/2)));for(let g of[-.24,.24])r=l(-.75,.48,g),n.box(.7,.04,.04,r.x,r.y,r.z,9071178,se(o,yt(-.12))),r=l(-.35,.14,g),n.box(.05,.3,.05,r.x,r.y,r.z,9071178,o);let c=new Kt,u=Xt(8),d=[15755930,16238622,16777215,10124008,15888410].map(x);for(let g=0;g<26;g++){let v=l(u.range(-.36,.36),.58,u.range(-.2,.2)),m=u.range(.1,.24),p=u.pick(d);c.tube(ie(v.x,v.y,v.z),[new ot(0,0,0),new ot(.01,m*.5,0),new ot(u.range(-.04,.04),m,u.range(-.04,.04))],.004,.003,x(4885050),x(5937732),4);for(let _=0;_<6;_++)c.petal(se(ie(v.x,v.y+m,v.z),me(_*1.05),fe(1.2)),{L:.045,W:.03,nu:2,nv:2,cup:.3,cols:[p,p,p]});for(let _=0;_<3;_++)c.petal(se(ie(v.x,v.y,v.z),me(u()*6),fe(u.range(.5,1.1))),{L:.1,W:.04,nu:2,nv:2,fold:.3,cols:[x(3832372),x(5016122),x(6987850)]})}let f=new Ve(c.build(),Qn({sway:.4}));f.castShadow=!0,s.add(f)},{x:4.2,z:1.95,r:.75}),t("anao",n=>{n.sph(.15,-4.3,.17,-.1,3828392,1,1.1,1,10),n.sph(.11,-4.3,.4,-.1,15911076,1,1,1,10),n.add(new ts(.115,.3,10),ie(-4.3,.6,-.1),14170158),n.sph(.09,-4.3,.33,-.1+.07,16053488,1,1.1,.7,8),n.sph(.025,-4.3,.41,-.1+.105,15247496,1,1,1,6);for(let h of[-.07,.07])n.sph(.05,-4.3+h,.03,-.1+.06,4863014,1,.7,1.4,6)})}function E1(i,e,t,n){let s=[],a=[],h=[],o=[];for(let E=0;E<3;E++){let S=E/3*Math.PI+.3,L=Math.cos(S),R=Math.sin(S),F=(E-1)*.02,$=E%2*.02,V=(E-1)*.03,j=s.length/3,q=[[-.5,0,0],[.5,0,0],[-.32,.55,.5],[.32,.55,.5],[0,1,1]];for(let[W,re,be]of q){s.push(F+L*W*.026+V*be,re,$+R*W*.026+V*be*.5),h.push(0,1,0);let Te=.68+re*.4;a.push(Te*.82,Te,Te*.6)}o.push(j,j+1,j+2,j+1,j+3,j+2,j+2,j+3,j+4)}let l=new gt;l.setAttribute("position",new Xe(s,3)),l.setAttribute("normal",new Xe(h,3)),l.setAttribute("color",new Xe(a,3)),l.setIndex(o);let r=new ho({vertexColors:!0,side:Ct});r.onBeforeCompile=E=>{Object.assign(E.uniforms,Hn),E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); float h = position.y * position.y;
          float ph = ip.x * 0.55 + ip.z * 0.4; float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ip.x * 0.15 + ip.z * 0.11);
          transformed.x += (sin(uTime * 1.5 + ph) * 0.09 + sin(uTime * 3.3 + ph * 2.1) * 0.03) * h * uWind * gust;
          transformed.z += cos(uTime * 1.2 + ph * 1.3) * 0.07 * h * uWind * gust; }`)};let c=Xt(55),u=[],d=Pc.map(Uc),f=(E,S)=>{if(Math.abs(E)<4.95&&S<-4.75||v1(E,S))return!1;for(let L of d)if(Va(E,S,L,.1))return!1;if(mf(E,S,.28)||Va(E,S,Nc,.05))return!1;for(let L of Ic)if((E-L.x)**2+(S-L.zc)**2<.1)return!1;for(let L of Dc)if((E-L.x)**2+(S-L.zc)**2<.45)return!1;return!0},g=78e3,v=ei.map(()=>[]),m=new Gt,p=new de,_=[];for(let E=0;E<g;E++){let S=E<g*.74,L,R;if(S)L=c.range(-12.5,12.5),R=c.range(-9.1,14.6);else{let $=c()*we,V=13+Math.pow(c(),1.6)*22;if(L=Math.cos($)*V*1.1,R=3+Math.sin($)*V,Math.abs(L)<12.6&&R>-9.2&&R<14.7||Math.abs(L)<5.2&&R<-6||Math.abs(L)<.9&&R>14)continue}if(S&&!f(L,R))continue;let F=S?Ga(L,R):-1;_.push({x:L,z:R,zn:F,s:c.range(.75,1.25),rot:c()*we,hue:c(),wild:c.range(1.7,2.8)})}for(let E=_.length-1;E>0;E--){let S=Math.floor(c()*(E+1)),L=_[E];_[E]=_[S],_[S]=L}let y=new Vs(l,r,_.length),b=E=>{let S=_[E],L=S.zn>0&&!n.has(S.zn),R=S.zn===-1||L;m.position.set(S.x,zc(S.x,S.z),S.z),m.rotation.set(0,S.rot,0);let F=(R?.12*S.wild:.09)*S.s;m.scale.set(S.s*(R?1.25:1),F,S.s*(R?1.25:1)),m.updateMatrix(),y.setMatrixAt(E,m.matrix),R?p.setHSL(.19+S.hue*.08,.36+S.hue*.1,.34+S.hue*.1):p.setHSL(.225+S.hue*.05,.37,.33+S.hue*.07),y.setColorAt(E,p)};_.forEach((E,S)=>{b(S),E.zn>0&&v[E.zn].push(S)}),y.receiveShadow=!0,y.frustumCulled=!1,i.add(y),e.grass=y,e.setGrass=E=>{y.count=Math.max(1e3,Math.round(_.length*E))},e.setGrass(t.grass),e.mowZone=E=>{for(let S of v[E])b(S);y.instanceMatrix.needsUpdate=!0,y.instanceColor.needsUpdate=!0};let T=new gt,A=[],P=[],k=[],M=[];for(let E=0;E<6;E++){let S=E/6*we,L=A.length/3;A.push(0,1,0,Math.cos(S-.4)*.5,1.06,Math.sin(S-.4)*.5,Math.cos(S+.4)*.5,1.06,Math.sin(S+.4)*.5),P.push(1,.9,.3,1,1,1,1,1,1),M.push(0,1,0,0,1,0,0,1,0),k.push(L,L+2,L+1)}{let E=A.length/3;A.push(-.05,0,0,.05,0,0,0,1,0),P.push(.25,.5,.2,.25,.5,.2,.3,.6,.25),M.push(0,1,0,0,1,0,0,1,0),k.push(E,E+1,E+2)}T.setAttribute("position",new Xe(A,3)),T.setAttribute("color",new Xe(P,3)),T.setAttribute("normal",new Xe(M,3)),T.setIndex(k);let w=_.map((E,S)=>[E,S]).filter(([E])=>(E.zn===-1||E.zn>0)&&E.hue>.93),U=new Vs(T,r,w.length),B=[16777215,16242762,16228552,12099824,16222810,16773792],X=E=>{let[S]=w[E],L=S.zn===-1||!n.has(S.zn);m.position.set(S.x+.05,0,S.z),m.rotation.set(0,S.rot,0);let R=L?.09*S.s:1e-4;m.scale.set(R,L?.3*S.wild*.55:1e-4,R),m.updateMatrix(),U.setMatrixAt(E,m.matrix),U.setColorAt(E,p.set(B[Math.floor(S.rot*7)%B.length]))};w.forEach((E,S)=>X(S)),U.frustumCulled=!1,i.add(U);let C=e.mowZone;e.mowZone=E=>{C(E),w.forEach(([S],L)=>{S.zn===E&&X(L)}),U.instanceMatrix.needsUpdate=!0}}var T1=16507084,A1=[8150084,10122840,12360312],R1=8364170,C1=7114360,L1=16511972,P1=14656828,I1=15520922,xf=15233898;function Fc(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle="#fbe0cc",t.fillRect(0,0,1024,512);let n=256,s=276,a=1.62;t.translate(n,s),t.scale(a,a),t.translate(-n,-s);for(let o of[-1,1]){let l=t.createRadialGradient(n+o*58,s+30,2,n+o*58,s+30,26);l.addColorStop(0,"rgba(244,128,128,0.5)"),l.addColorStop(1,"rgba(244,128,128,0)"),t.fillStyle=l,t.fillRect(n+o*58-30,s,60,62)}for(let o of[-1,1]){let l=n+o*36;if(i==="open"){t.save(),t.beginPath(),t.ellipse(l,s,16.5,20,0,0,we),t.clip(),t.fillStyle="#fffdfa",t.fillRect(l-20,s-24,40,48);let r=t.createRadialGradient(l,s+5,2,l,s+1,16);r.addColorStop(0,"#d9c27a"),r.addColorStop(.42,"#a9a45e"),r.addColorStop(.85,"#6f7a44"),r.addColorStop(1,"#4a5230"),t.fillStyle=r,t.beginPath(),t.ellipse(l,s+2,13.5,16.5,0,0,we),t.fill(),t.fillStyle="#1e2a2c",t.beginPath(),t.ellipse(l,s+2,5.6,7.6,0,0,we),t.fill(),t.fillStyle="rgba(60,40,30,0.26)",t.fillRect(l-20,s-24,40,9),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(l-5,s-6,4.4,5.2,0,0,we),t.fill(),t.beginPath(),t.ellipse(l+5,s+9,2.1,2.5,0,0,we),t.fill(),t.restore(),t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(l-18,s-9),t.quadraticCurveTo(l,s-27,l+18,s-9),t.stroke(),t.lineWidth=2.6,t.beginPath(),t.moveTo(l+o*17,s-10),t.lineTo(l+o*23,s-15),t.stroke(),t.beginPath(),t.moveTo(l+o*14,s-14),t.lineTo(l+o*18,s-21),t.stroke()}else t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(l-16,s+5),t.quadraticCurveTo(l,s-13,l+16,s+5)):(t.moveTo(l-16,s+1),t.quadraticCurveTo(l,s+12,l+16,s+1)),t.stroke();t.strokeStyle="#7c5a40",t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(l-15,s-35+o*0),t.quadraticCurveTo(l,s-42,l+15,s-35),t.stroke()}t.fillStyle="rgba(220,150,120,0.45)",t.beginPath(),t.ellipse(n,s+28,3.4,2.4,0,0,we),t.fill(),t.strokeStyle="#c4605c",t.lineWidth=3,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(n-11,s+43),t.quadraticCurveTo(n,s+58,n+11,s+43),t.closePath(),t.fillStyle="#d8706a",t.fill()):(t.moveTo(n-12,s+44),t.quadraticCurveTo(n,s+47.5,n+12,s+44),t.quadraticCurveTo(n,s+58,n-12,s+44),t.closePath(),t.fillStyle="#fffaf4",t.fill(),t.lineJoin="round",t.lineWidth=2.6),t.stroke();let h=new On(e);return h.colorSpace=_t,h.anisotropy=8,h}var bn=(i,e=.7,t={})=>new Wt({color:i,roughness:e,...t});function ht(i,e,t,n=0,s=0,a=0){let h=new Ve(i,e);return h.position.set(n,s,a),h.castShadow=!0,h.receiveShadow=!0,t.add(h),h}function Wn(i,e,t,n){let s=new Vt;return s.position.set(e,t,n),i.add(s),s}var Wa=(i,e=20)=>new zi(i.map(([t,n])=>new ce(t,n)),e);function vf(){let i=new Vt,e=Wn(i,0,0,0),t=bn(T1,.62),n=bn(R1,.8,{side:Ct}),s=bn(L1,.8),a=bn(P1,.45),h=bn(I1,.9,{side:Ct}),o={};o.hips=Wn(e,0,.87,0),o.spine=Wn(o.hips,0,.1,0),ht(Wa([[.001,-.02],[.118,0],[.108,.1],[.125,.24],[.138,.32],[.11,.4],[.05,.43],[.045,.5]]),s,o.spine).scale.z=.82;{let S=new zi([[.122,0],[.112,.1],[.128,.22],[.139,.3]].map(([L,R])=>new ce(L*1.04,R)),10,-.6,1.2);ht(S,n,o.spine).scale.z=.84}for(let S of[-1,1])ht(new Cn(.032,.17,.014),n,o.spine,S*.075,.365,.092).rotation.x=-.5,ht(new Cn(.035,.34,.016),n,o.spine,S*.075,.26,-.1).rotation.x=.2,ht(new zt(.014,8,6),bn(15918784,.4),o.spine,S*.075,.285,.123);o.skirt=Wn(o.hips,0,.11,0);let l=Wa([[.112,.02],[.122,0],[.146,-.1],[.2,-.25],[.262,-.4],[.296,-.5],[.301,-.52]],28);{let S=l.attributes.position;for(let L=0;L<S.count;L++){let R=S.getY(L),F=Math.atan2(S.getZ(L),S.getX(L)),$=1+.07*Math.sin(F*9)*Ge(-R/.5,0,1);S.setX(L,S.getX(L)*$),S.setZ(L,S.getZ(L)*$*.92)}l.computeVertexNormals()}ht(l,n,o.skirt).receiveShadow=!1,ht(new bi(.119,.014,6,24),bn(C1,.8),o.skirt,0,.012,0).rotation.x=Math.PI/2;for(let S of[-1,1]){let L=Wn(o.hips,S*.075,0,0),R=Wn(L,0,-.4,0);ht(new yi(.06,.3,4,10),t,L,0,-.2,0),ht(new yi(.05,.2,4,10),t,R,0,-.12,0),ht(new zt(.061,10,8),t,R,0,0,0),ht(Wa([[.001,-.455],[.066,-.45],[.062,-.3],[.066,-.17],[.072,-.165],[.072,-.15],[.058,-.15]],14),a,R),ht(new zt(.068,12,8),a,R,0,-.415,.045).scale.set(1,.72,1.7),o[S<0?"hipL":"hipR"]=L,o[S<0?"kneeL":"kneeR"]=R}for(let S of[-1,1]){let L=Wn(o.spine,S*.15,.345,0),R=Wn(L,0,-.23,0);ht(new zt(.062,12,9),s,L,S*.005,-.03,0).scale.set(1,1.15,1),ht(new yi(.036,.16,4,8),t,L,0,-.14,0),ht(new yi(.032,.17,4,8),t,R,0,-.095,0),ht(new zt(.037,10,8),t,R,0,0,0);let $=Wn(R,0,-.215,0);ht(new zt(.04,10,8),t,$).scale.set(.85,1.1,1),o[S<0?"shL":"shR"]=L,o[S<0?"elL":"elR"]=R,o[S<0?"handL":"handR"]=$}o.neck=Wn(o.spine,0,.46,0),o.head=Wn(o.neck,0,.135,.005);let r=.158,c={open:Fc("open"),closed:Fc("closed"),happy:Fc("happy")},u=bn(16777215,.62,{map:c.open,emissive:16777215,emissiveMap:c.open,emissiveIntensity:.16});ht(new zt(r,40,28),u,o.head).scale.set(.97,1.04,.96),ht(new zt(.012,8,6),t,o.head,0,-.03,r*.955).scale.set(1,.75,.6);for(let S of[-1,1])ht(new zt(.03,8,6),t,o.head,S*r*.95,-.01,0).scale.set(.4,1,.7);for(let S of[-1,1])ht(new zt(.011,8,6),bn(3116894,.3,{metalness:.4,emissive:997922}),o.head,S*r*.975,-.045,.004);let f=new Kt,g=Xt(4),v=A1.map(x),m=r*1.07,p=(S,L,R,F,$={})=>f.petal(se(ie(0,m*.98,-.012),me(S),fe(Math.PI/2-.04)),{L,W:R,a:.6,b:.42,cup:.16,nu:$.nu??10,nv:3,vein:.2,base:.6,phase:g()*6,angFn:V=>{let j=V*L,q=F*m;return j<q?j/m:F+($.flare??0)*Math.sin((j-q)/Math.max(.01,L-q)*Math.PI*($.waves??1))},cols:v.map(V=>V.clone().multiplyScalar(g.range(.9,1.1))),...$});f.blob(ie(0,.034,-.05),r*1,r*1,v[0],v[1],16,9);for(let S=0;S<15;S++){let L=S/14-.5,R=Math.abs(L+.17);p(L*2.6+.1+g.range(-.04,.04),m*(.62+R*1.35+g.range(0,.08)),.125,9,{nu:6,b:.3,twist:(L+.17)*.5})}for(let S of[-1,1])for(let L=0;L<4;L++)p(S*(1.42+L*.2),.42+L*.07,.1,1.5,{flare:-.14,waves:1.6,ruffle:.05,rf:1.2});for(let S=0;S<17;S++){let L=S/16-.5;p(Math.PI+L*2.9,.62+g.range(-.04,.06)-Math.abs(L)*.1,.105,1.62,{flare:-.16,waves:1.5,ruffle:.06,rf:1.2,nu:12})}let _=Qn({sway:.16,glow:.07,roughness:.48}),y=new Ve(f.build(),_);y.castShadow=!0,y.receiveShadow=!0,o.head.add(y),o.hat=Wn(o.head,0,r*.7,-.03),o.hat.rotation.x=-.36;let b=Wa([[.13,.012],[.19,.004],[.25,-.012],[.292,-.036],[.297,-.042]],36);{let S=b.attributes.position;for(let L=0;L<S.count;L++){let R=Math.atan2(S.getZ(L),S.getX(L)),F=Math.hypot(S.getX(L),S.getZ(L));S.setY(L,S.getY(L)+Math.sin(R*2+.5)*.02*(F/.3)**2+Math.sin(R*5)*.005*(F/.3))}b.computeVertexNormals()}ht(b,h,o.hat).receiveShadow=!1,ht(Wa([[.146,0],[.143,.05],[.128,.1],[.09,.128],[.001,.134]],28),h,o.hat),ht(new vn(.1445,.148,.038,28,1,!0),bn(xf,.7,{side:Ct}),o.hat,0,.024,0);for(let S of[-1,1])ht(new zt(.03,8,6),bn(xf,.7),o.hat,-.12+0,.03,S*.035-.07).scale.set(.5,1.2,1.5);{let S=new Kt;for(let R=0;R<6;R++)S.petal(se(me(R*1.047),fe(1.25)),{L:.034,W:.026,nu:2,nv:2,cup:.3,cols:[x(16774880),x(16777215),x(16777215)]});S.blob(ie(0,.004,0),.01,.006,x(15905308),x(16306240),6,3);let L=new Ve(S.build(),bn(16777215,.7,{vertexColors:!0,side:Ct}));L.position.set(.108,.045,.103),L.rotation.set(1.1,0,-.75),o.hat.add(L)}let T=new Vt,A=bn(7317408,.35,{metalness:.35});ht(new vn(.075,.085,.15,16),A,T,0,0,0);let P=ht(new vn(.014,.024,.2,8),A,T,0,.03,.14);P.rotation.x=.95;let k=ht(new vn(.034,.016,.03,10),A,T,0,.092,.225);k.rotation.x=.95;let M=ht(new bi(.06,.009,6,14,Math.PI*1.1),A,T,0,.05,-.07);M.rotation.y=Math.PI/2,M.rotation.z=0;let w=ht(new bi(.055,.008,6,12,Math.PI),A,T,0,.075,0);w.rotation.y=Math.PI/2,T.position.set(0,-.11,.03),T.visible=!1,o.handR.add(T);let U=new Vt;ht(new vn(.013,.013,.09,6),bn(9067064),U,0,0,0),ht(new zt(.035,8,6),bn(12107972,.3,{metalness:.6}),U,0,-.085,0).scale.set(.8,1.5,.25),U.position.set(0,-.05,.02),U.visible=!1,o.handR.add(U);let X={by:0,lean:0,twist:0,spine:0,headX:0,headY:0,headZ:0,shLx:0,shLz:.2,shRx:0,shRz:-.2,elL:-.1,elR:-.1,hipL:0,hipR:0,kneeL:0,kneeR:0,skirtX:0,skirtS:1,handRx:0},C={...X},E={group:i,J:o,state:"idle",t:0,phase:0,speed:0,heading:0,targetHeading:0,blinkT:2,face:"open",faceHold:0,actionT:0,actionDur:0,action:null,high:!1,lookAt:null,onStep:null,spoutWorld:new O,idleSeed:0};return E.setFace=(S,L=0)=>{E.face=S,E.faceHold=L,u.map=c[S],u.emissiveMap=c[S]},E.play=(S,L,R={})=>{E.state=S,E.actionT=0,E.actionDur=L,E.high=!!R.high,T.visible=S==="water",U.visible=S==="plant",S==="cheer"&&E.setFace("happy",L+.4)},E.stop=()=>{E.state="idle",T.visible=!1,U.visible=!1},E.faceTo=(S,L)=>{E.targetHeading=Math.atan2(S-i.position.x,L-i.position.z)},E.update=(S,L)=>{E.t+=S;let R=X,F=10,$=Math.sin(L*1.7);if(R.by=$*.004,R.lean=0,R.twist=Math.sin(L*.45)*.03,R.spine=$*.012,R.headX=Math.sin(L*.6+1)*.04,R.headY=Math.sin(L*.33)*.22+Math.sin(L*.71)*.08,R.headZ=Math.sin(L*.5)*.03,R.shLx=Math.sin(L*.9)*.03,R.shRx=-Math.sin(L*.9)*.03,R.shLz=.2,R.shRz=-.2,R.elL=-.2,R.elR=-.2,R.hipL=0,R.hipR=0,R.kneeL=0,R.kneeR=0,R.skirtX=0,R.skirtS=1,R.handRx=0,E.state==="walk"){E.phase+=S*E.speed*3.5;let q=Math.sin(E.phase),W=Math.cos(E.phase),re=Ge(E.speed/2.4,.3,1);R.hipL=-q*.62*re,R.hipR=q*.62*re,R.kneeL=Math.max(0,W)*.95*re+.08,R.kneeR=Math.max(0,-W)*.95*re+.08,R.shLx=q*.5*re,R.shRx=-q*.5*re,R.elL=-.3-Math.max(0,q)*.3,R.elR=-.3-Math.max(0,-q)*.3,R.shLz=.2,R.shRz=-.2,R.by=Math.abs(W)*.035*re-.02,R.lean=.07*re,R.twist=-q*.1*re,R.headY=q*.05,R.headX=-.03,R.headZ=W*.03,R.skirtX=-.05+W*.04;let be=Math.floor(E.phase/Math.PI);be!==E._step&&(E._step=be,E.onStep&&E.onStep()),F=16}else if(E.state==="water"){E.actionT+=S;let q=Ge(E.actionT/E.actionDur,0,1),W=_n(q/.18)*_n((1-q)/.15),re=_n((q-.16)/.12)*_n((1-q)/.14),be=E.high?1:0;R.shRx=-(1+be*1.25)*W,R.shRz=-.1-.12*W,R.elR=-(.55-be*.3)*W,R.handRx=(.75+Math.sin(L*5)*.06)*re-be*.3*W,R.shLx=.15*W,R.shLz=.3*W+.1,R.elL=-.9*W,R.lean=(.14-be*.2)*W,R.headX=(.3-be*.75)*W,R.headY=0,R.twist=.12*W,R.kneeL=.12*W,R.hipL=-.06*W}else if(E.state==="plant"){E.actionT+=S;let q=Ge(E.actionT/E.actionDur,0,1),W=_n(q/.22)*_n((1-q)/.2),re=Math.sin(L*9)*.5+.5;R.by=-.36*W,R.hipL=-1.5*W,R.kneeL=2.25*W,R.hipR=-.55*W,R.kneeR=2.1*W,R.lean=.55*W,R.spine=.15*W,R.skirtX=-.5*W,R.skirtS=1-.3*W,R.shRx=-(1.05+re*.3)*W,R.elR=-(.5+re*.45)*W,R.shRz=-.05,R.shLx=-.9*W,R.elL=-.7*W,R.shLz=.25*W,R.headX=.35*W,R.headY=0,R.handRx=.6*W,F=12}else if(E.state==="collect"){E.actionT+=S;let q=Ge(E.actionT/E.actionDur,0,1),W=_n(q/.3)*_n((1-q)/.3);R.lean=.4*W,R.shRx=-1.25*W,R.shLx=-1.2*W,R.elR=-.4*W,R.elL=-.45*W,R.shRz=-.25*W,R.shLz=.25*W,R.kneeL=.3*W,R.kneeR=.3*W,R.hipL=-.3*W,R.hipR=-.3*W,R.by=-.04*W,R.headX=.3*W,R.headY=0}else if(E.state==="cheer"){E.actionT+=S;let q=Ge(E.actionT/E.actionDur,0,1),W=_n(q/.2)*_n((1-q)/.25),re=Math.abs(Math.sin(q*Math.PI*3))*W;R.by=re*.11,R.shLx=-2.45*W,R.shRx=-2.45*W,R.shLz=.95*W+.1,R.shRz=-.95*W-.1,R.elL=-.25,R.elR=-.25,R.headX=-.2*W,R.headY=0,R.kneeL=(1-re)*.3*W,R.kneeR=(1-re)*.3*W,R.hipL=-(1-re)*.15*W,R.hipR=-(1-re)*.15*W,R.spine=-.08*W,F=18}else if(E.state==="admire"){E.actionT+=S;let q=Ge(E.actionT/E.actionDur,0,1),W=_n(q/.25)*_n((1-q)/.25);R.lean=.25*W,R.shLx=-.5*W,R.shRx=-.5*W,R.elL=-1.7*W,R.elR=-1.7*W,R.shLz=-.25*W,R.shRz=.25*W,R.headX=.22*W,R.headZ=.12*W,R.headY=0,R.kneeL=.15*W,R.kneeR=.15*W,R.hipL=-.1*W,R.hipR=-.1*W}E.state!=="idle"&&E.state!=="walk"&&E.actionT>=E.actionDur&&E.stop();let V=1-Math.exp(-F*S);for(let q in C)C[q]+=(X[q]-C[q])*V;e.position.y=C.by,e.rotation.x=C.lean*.22,e.position.z=-C.lean*.1,o.spine.rotation.set(C.spine+C.lean*.95,C.twist,0),o.hips.rotation.y=-C.twist*.4,o.head.rotation.set(C.headX-C.lean*.75,C.headY-C.twist,C.headZ),o.shL.rotation.set(C.shLx,0,-C.shLz),o.shR.rotation.set(C.shRx,0,-C.shRz),o.hipL.rotation.x=C.hipL,o.hipR.rotation.x=C.hipR,o.kneeL.rotation.x=C.kneeL,o.kneeR.rotation.x=C.kneeR,o.skirt.rotation.x=C.skirtX,o.skirt.scale.set(1+(1-C.skirtS)*.5,C.skirtS,1+(1-C.skirtS)*.8),_.userData.u.uSway.value=.14+E.speed*.12;let j=E.targetHeading-E.heading;j=Math.atan2(Math.sin(j),Math.cos(j)),E.heading+=j*(1-Math.exp(-9*S)),i.rotation.y=E.heading,E.faceHold>0?(E.faceHold-=S,E.faceHold<=0&&E.setFace("open")):(E.blinkT-=S,E.blinkT<0&&(E.face==="open"?(E.setFace("closed"),E.blinkT=.11):(E.setFace("open"),E.blinkT=1.8+Math.random()*3.5))),k.getWorldPosition(E.spoutWorld)},E}var Bi=900;function _f(i){let e=new Float32Array(Bi*3),t=new Float32Array(Bi*3),n=new Float32Array(Bi),s=new Float32Array(Bi),a=[];for(let M=0;M<Bi;M++)a.push({life:0});let h=new gt;h.setAttribute("position",new Dt(e,3)),h.setAttribute("color",new Dt(t,3)),h.setAttribute("aSize",new Dt(n,1)),h.setAttribute("aAlpha",new Dt(s,1));let o=new Ot({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / -mv.z; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.15, r) * vA; gl_FragColor = vec4(vC, a); }"}),l=new to(h,o);l.frustumCulled=!1,l.renderOrder=5,i.add(l);let r=0,c=new de,u=M=>{for(let U=0;U<Bi&&(r=(r+1)%Bi,!(a[r].life<=0));U++);let w=a[r];w.x=M.x,w.y=M.y,w.z=M.z,w.vx=M.vx??0,w.vy=M.vy??0,w.vz=M.vz??0,w.g=M.g??0,w.drag=M.drag??0,w.life=w.max=M.life??1,w.size=M.size??.05,w.grow=M.grow??0,c.set(M.color??16777215),w.r=c.r,w.gc=c.g,w.b=c.b,w.a=M.alpha??1,w.floor=M.floor??-1,w.sway=M.sway??0,w.tw=M.twinkle??0,w.seed=Math.random()*10},d={emit:u},f=(M,w)=>M+Math.random()*(w-M);d.water=(M,w,U=5)=>{for(let B=0;B<U;B++){let X=.42+Math.random()*.1,C=w.x+f(-.2,.2),E=w.z+f(-.2,.2),S=w.y+f(0,.15);u({x:M.x,y:M.y,z:M.z,vx:(C-M.x)/X,vz:(E-M.z)/X,vy:(S-M.y)/X+4.9*X,g:-9.8,life:X+.05,size:f(.025,.045),color:Math.random()<.5?12576511:15267583,alpha:.85})}},d.splash=(M,w=6)=>{for(let U=0;U<w;U++)u({x:M.x+f(-.12,.12),y:M.y+.05,z:M.z+f(-.12,.12),vx:f(-.5,.5),vy:f(.6,1.4),vz:f(-.5,.5),g:-5,life:.4,size:.03,color:14217471,alpha:.7})},d.sparkle=(M,w=14,U=16770688,B=.3)=>{for(let X=0;X<w;X++)u({x:M.x+f(-B,B),y:M.y+f(0,B*1.5),z:M.z+f(-B,B),vx:f(-.3,.3),vy:f(.3,1),vz:f(-.3,.3),drag:1.5,life:f(.6,1.2),size:f(.04,.09),color:U,twinkle:12})},d.dust=(M,w=10)=>{for(let U=0;U<w;U++)u({x:M.x+f(-.1,.1),y:M.y+.03,z:M.z+f(-.1,.1),vx:f(-.6,.6),vy:f(.2,.7),vz:f(-.6,.6),drag:3,life:f(.4,.8),size:f(.07,.14),grow:.2,color:9071184,alpha:.5})},d.hearts=(M,w=5)=>{for(let U=0;U<w;U++)u({x:M.x+f(-.2,.2),y:M.y,z:M.z+f(-.2,.2),vx:f(-.15,.15),vy:f(.5,.9),vz:f(-.15,.15),drag:.8,life:f(.9,1.5),size:f(.07,.11),color:U%2?16751288:16762584,sway:1})},d.burst=(M,w,U=40,B=1.2)=>{for(let X=0;X<U;X++){let C=Math.random()*we,E=f(.5,2.2);u({x:M.x,y:M.y+f(.2,1),z:M.z,vx:Math.cos(C)*E*B,vy:f(1.2,3.2),vz:Math.sin(C)*E*B,g:-3.2,drag:1.2,life:f(1.2,2.4),size:f(.06,.12),color:w[X%w.length],sway:1.5})}},d.petalFall=(M,w,U)=>u({x:M.x+f(-U,U),y:M.y+f(-.3,.5),z:M.z+f(-U,U),vx:f(-.1,.25),vy:-f(.25,.5),vz:f(-.1,.1),life:f(4,7),size:f(.05,.08),color:w,sway:2,floor:.03,alpha:.95}),d.smoke=M=>u({x:M.x+f(-.08,.08),y:M.y,z:M.z+f(-.08,.08),vx:.18+f(-.05,.05),vy:f(.35,.55),vz:f(-.05,.05),life:f(5,8),size:.3,grow:.22,color:15262942,alpha:.22,drag:.1});let g=[],v=new Fn({vertexColors:!0,side:Ct}),m=(M,w)=>{let U=new Kt;return U.petal(se(yt(-1.15),fe(0)),{L:.085,W:.075,a:1.5,b:.45,nu:3,nv:2,cols:[x(2760728),M,w]}),U.petal(se(yt(-2.05),fe(0)),{L:.06,W:.06,a:1.4,b:.45,nu:3,nv:2,cols:[x(2760728),M,w]}),U.build()},p=[[16228894,16503386],[6990064,12574975],[16249048,16777215],[15755930,16564440],[16242762,16773792],[11832048,14733567]];for(let M=0;M<9;M++){let w=new Vt,[U,B]=p[M%p.length],X=m(x(U),x(B)),C=new Ve(X,v),E=new Ve(X,v);E.scale.x=-1,w.add(C,E);let S=new Ve(new yi(.006,.05,2,5),new Fn({color:2760728}));S.rotation.x=Math.PI/2,w.add(S),w.visible=!1,i.add(w),g.push({g:w,wr:C,wl:E,pos:new O(Math.random()*6-3,1,Math.random()*6),target:new O(0,1,0),t:Math.random()*10,rest:0,seed:Math.random()*100,speed:f(.8,1.4)})}d.butterflyTargets=[],d.butterflyCount=0;let _=[];for(let M=0;M<46;M++)_.push({x:f(-12,12),z:f(-8,14),y:f(.3,1.8),s:Math.random()*100});let y=500,b=new Float32Array(y*6),T=new gt;T.setAttribute("position",new Dt(b,3));let A=new eo(T,new wa({color:13624564,transparent:!0,opacity:0}));A.frustumCulled=!1,i.add(A);let P=[];for(let M=0;M<y;M++)P.push({x:f(-16,16),y:f(0,14),z:f(-12,18),v:f(11,15)});d.rain=0,d.season=-1;let k=0;return d.update=(M,w,U,B,X)=>{o.uniforms.uScale.value=innerHeight*1.9*(B.fov?1/Math.tan(B.fov*Math.PI/360)/3.4:1);for(let S=0;S<Bi;S++){let L=a[S];if(L.life<=0){s[S]=0,n[S]=0;continue}L.life-=M;let R=1-L.life/L.max;L.vy+=L.g*M;let F=Math.exp(-L.drag*M);L.vx*=F,L.vy*=L.g?1:F,L.vz*=F,L.x+=(L.vx+(L.sway?Math.sin(w*2.2+L.seed)*.25*L.sway:0))*M,L.y+=L.vy*M,L.z+=(L.vz+(L.sway?Math.cos(w*1.7+L.seed)*.2*L.sway:0))*M,L.floor>=0&&L.y<L.floor&&(L.y=L.floor,L.vy=0,L.vx=0,L.vz=0,L.sway=0),e[S*3]=L.x,e[S*3+1]=L.y,e[S*3+2]=L.z,t[S*3]=L.r,t[S*3+1]=L.gc,t[S*3+2]=L.b,n[S]=L.size+L.grow*R*L.max,s[S]=L.a*Math.min(1,R*8)*Math.min(1,(1-R)*3)*(L.tw?.6+.4*Math.sin(w*L.tw+L.seed*7):1)}let C=U.night;if(C>.3)for(let S of _)Math.random()<M*.55&&u({x:S.x+Math.sin(w*.3+S.s)*1.5,y:S.y+Math.sin(w*.5+S.s*2)*.3,z:S.z+Math.cos(w*.27+S.s)*1.5,vx:f(-.1,.1),vy:f(-.03,.08),vz:f(-.1,.1),life:f(1.2,2.4),size:.07,color:15269754,alpha:C,sway:.4});if(h.attributes.position.needsUpdate=!0,h.attributes.color.needsUpdate=!0,h.attributes.aSize.needsUpdate=!0,h.attributes.aAlpha.needsUpdate=!0,d.season===0&&Math.random()<M*1.1&&d.petalFall({x:f(-12,12),y:f(2.5,4.5),z:f(-8,14)},Math.random()<.6?16566492:16777215,.5),d.season===2&&Math.random()<M*3.2){let S=[15238202,14196778,13127722,15910986];u({x:f(-13,13),y:f(3,6),z:f(-9,15),vx:f(.1,.5),vy:-f(.35,.6),vz:f(-.15,.15),life:f(6,10),size:f(.07,.11),color:S[Math.floor(Math.random()*4)],sway:2.4,floor:.03,alpha:.95})}d.season===3&&U.night<.5&&Math.random()<M*1.5&&u({x:f(-12,12),y:f(.05,.4),z:f(-8,14),life:f(.8,1.6),size:.05,color:15398655,twinkle:9,alpha:.8}),k-=M,k<0&&X&&(k=.45,d.smoke(X));let E=C>.5||d.rain>.3?0:d.butterflyCount;if(g.forEach((S,L)=>{let R=L<E;if(!R&&!S.g.visible)return;if(R&&!S.g.visible&&(S.g.visible=!0,S.pos.set(f(-13,13),2.5,15),S.rest=0),S.t+=M,!R)S.target.set(S.pos.x*1.2+4,5,22);else if(S.rest>0&&(S.rest-=M,S.rest<=0)){let j=d.butterflyTargets;if(j.length){let q=j[Math.floor(Math.random()*j.length)];S.target.set(q.x+f(-.1,.1),q.y,q.z+f(-.1,.1))}else S.target.set(f(-4,4),.8,f(-3,3))}let F=S.target.clone().sub(S.pos),$=F.length();if(S.rest<=0)if($<.08)S.rest=R?f(1.5,4):0,R||(S.g.visible=!1);else{F.normalize();let j=Math.min(1,$);S.pos.addScaledVector(F,S.speed*M*Math.min(1,$*2+.3)),S.pos.x+=Math.sin(S.t*3.1+S.seed)*.5*M*j,S.pos.y+=Math.sin(S.t*5.3+S.seed)*.6*M*j,S.pos.z+=Math.cos(S.t*2.7+S.seed)*.5*M*j,S.g.rotation.y=Math.atan2(F.x,F.z)}S.g.position.copy(S.pos);let V=S.rest>0?.25+Math.sin(S.t*2.5)*.25:Math.sin(S.t*26)*.9+.1;S.wr.rotation.z=V,S.wl.rotation.z=-V}),A.material.opacity=d.rain*.4,A.visible=d.rain>.01,A.visible){for(let S=0;S<y;S++){let L=P[S];L.y-=L.v*M,L.y<0&&(L.y=14,L.x=B.position.x*.3+f(-16,16),L.z=f(-12,18)),b[S*6]=L.x,b[S*6+1]=L.y,b[S*6+2]=L.z,b[S*6+3]=L.x+.03,b[S*6+4]=L.y+.38,b[S*6+5]=L.z}T.attributes.position.needsUpdate=!0}},d}function yf(){let i=r=>{let c=document.createElement("canvas");c.width=c.height=128;let u=c.getContext("2d");u.shadowColor="rgba(40,60,40,0.35)",u.shadowBlur=8,u.shadowOffsetY=3,u.fillStyle="#ffffff",u.beginPath(),u.arc(64,60,46,0,we),u.fill(),u.beginPath(),u.moveTo(52,100),u.lineTo(64,122),u.lineTo(76,100),u.fill(),u.shadowColor="transparent",r(u);let d=new On(c);return d.colorSpace=_t,d},e=i(r=>{let c=r.createLinearGradient(0,28,0,92);c.addColorStop(0,"#8fd3ff"),c.addColorStop(1,"#2f8fe0"),r.fillStyle=c,r.beginPath(),r.moveTo(64,24),r.bezierCurveTo(64,24,38,58,38,70),r.arc(64,70,26,Math.PI,0,!0),r.bezierCurveTo(90,58,64,24,64,24),r.fill(),r.fillStyle="rgba(255,255,255,0.75)",r.beginPath(),r.ellipse(54,66,5,9,.4,0,we),r.fill()}),t=i(r=>{r.fillStyle="#f7b92a",r.beginPath(),r.arc(64,60,30,0,we),r.fill(),r.fillStyle="#ffd95a",r.beginPath(),r.arc(64,60,24,0,we),r.fill(),r.fillStyle="#f29a1a";for(let c=0;c<5;c++){let u=c/5*we-Math.PI/2;r.beginPath(),r.ellipse(64+Math.cos(u)*11,60+Math.sin(u)*11,8,8,0,0,we),r.fill()}r.fillStyle="#fff2b0",r.beginPath(),r.arc(64,60,6,0,we),r.fill()}),n=(()=>{let r=document.createElement("canvas");r.width=r.height=96;let c=r.getContext("2d");c.fillStyle="rgba(255,255,255,0.92)",c.beginPath(),c.arc(48,48,36,0,we),c.fill(),c.strokeStyle="#6aa85a",c.lineWidth=9,c.lineCap="round",c.beginPath(),c.moveTo(48,30),c.lineTo(48,66),c.moveTo(30,48),c.lineTo(66,48),c.stroke();let u=new On(r);return u.colorSpace=_t,u})(),s=i(r=>{r.strokeStyle="#5a8f3a",r.lineWidth=7,r.lineCap="round",r.beginPath(),r.moveTo(64,88),r.lineTo(64,56),r.stroke(),r.fillStyle="#7fb24a";for(let[c,u]of[[-.9,30],[.9,30],[-.25,36],[.3,34]])r.save(),r.translate(64,70),r.rotate(c),r.beginPath(),r.ellipse(0,-u*.6,7,u*.55,0,0,we),r.fill(),r.restore();r.fillStyle="#f7d23a",r.beginPath(),r.arc(64,34,9,0,we),r.fill()}),a=i(r=>{r.strokeStyle="#8a97a0",r.lineWidth=8,r.lineCap="round",r.beginPath(),r.moveTo(42,30),r.lineTo(76,70),r.moveTo(86,30),r.lineTo(52,70),r.stroke(),r.strokeStyle="#e2685f",r.lineWidth=7,r.beginPath(),r.arc(46,82,10,0,we),r.stroke(),r.beginPath(),r.arc(82,82,10,0,we),r.stroke(),r.fillStyle="#5d6b72",r.beginPath(),r.arc(64,56,4,0,we),r.fill()}),h=i(r=>{r.strokeStyle="#9a6a3a",r.lineWidth=6,r.beginPath(),r.arc(64,62,24,Math.PI,0),r.stroke(),r.fillStyle="#c08a4e",r.beginPath(),r.moveTo(36,60),r.lineTo(92,60),r.lineTo(84,90),r.lineTo(44,90),r.closePath(),r.fill(),r.strokeStyle="#9a6a3a",r.lineWidth=3;for(let c of[70,80])r.beginPath(),r.moveTo(40,c),r.lineTo(88,c),r.stroke();for(let[c,u,d]of[[50,52,"#f07aa4"],[64,46,"#f7c84a"],[78,52,"#b48af0"]])r.fillStyle=d,r.beginPath(),r.arc(c,u,9,0,we),r.fill(),r.fillStyle="#fff6c8",r.beginPath(),r.arc(c,u,3.5,0,we),r.fill()}),o=i(r=>{r.fillStyle="#e2685f",r.fillRect(36,52,56,38),r.fillStyle="#ee7f76",r.fillRect(32,40,64,14),r.fillStyle="#f7c84a",r.fillRect(58,40,12,50),r.strokeStyle="#f7c84a",r.lineWidth=6,r.beginPath(),r.ellipse(52,32,11,8,-.5,0,we),r.stroke(),r.beginPath(),r.ellipse(76,32,11,8,.5,0,we),r.stroke()}),l=i(r=>{r.fillStyle="#8a5a34",r.beginPath(),r.ellipse(64,64,15,22,.5,0,we),r.fill(),r.fillStyle="#b07a4a",r.beginPath(),r.ellipse(59,58,5,10,.5,0,we),r.fill(),r.fillStyle="#f7c84a";for(let[c,u,d]of[[36,40,7],[92,46,6],[88,84,8],[40,86,5]]){r.beginPath();for(let f=0;f<8;f++){let g=f/8*we,v=f%2?d*.4:d;r.lineTo(c+Math.cos(g)*v,u+Math.sin(g)*v)}r.fill()}});return{water:e,gift:t,plus:n,weed:s,prune:a,order:h,daily:o,seed:l}}var D1=["water","plant","pop","bloom","coin","buy","click","levelup","expand","step","error"];function bf(i="audio/"){let e={ctx:null,ready:!1,musicVol:.6,sfxVol:.8,buffers:{},night:0,rain:0},t,n,s,a,h=null,o=[],l={},r=!1,c=null,u=async g=>{if(e.buffers[g])return e.buffers[g];try{let v,m=window.__AUDIO&&window.__AUDIO[g];if(m){let _=atob(m),y=new Uint8Array(_.length);for(let b=0;b<_.length;b++)y[b]=_.charCodeAt(b);v=y.buffer}else{let _=await fetch(i+g+".mp3");if(!_.ok)return null;v=await _.arrayBuffer()}let p=await e.ctx.decodeAudioData(v);return e.buffers[g]=p,p}catch{return null}};e.unlock=()=>{if(e.ctx){e.ctx.resume&&e.ctx.resume();return}let g=window.AudioContext||window.webkitAudioContext;if(g){e.ctx=new g,t=e.ctx.createGain(),t.connect(e.ctx.destination),n=e.ctx.createGain(),n.gain.value=e.musicVol,n.connect(t),s=e.ctx.createGain(),s.gain.value=e.sfxVol,s.connect(t),a=e.ctx.createGain(),a.gain.value=Math.min(1,e.sfxVol*1.1),a.connect(t);for(let v of D1)u("sfx_"+v);e.ready=!0,d(),f()}};let d=async()=>{for(let g of["day","night","rain"]){let v=await u("amb_"+g);if(!v)continue;let m=e.ctx.createBufferSource(),p=e.ctx.createGain();m.buffer=v,m.loop=!0,p.gain.value=0,m.connect(p),p.connect(a),m.start(),l[g]=p}},f=async()=>{if(!e.ready)return;let g=e.night>.6?["music4"]:["music1","music2","music3"];o.length||(o=g.slice().sort(()=>Math.random()-.5));let v=o.shift();g.includes(v)||(o=[],v=g[Math.floor(Math.random()*g.length)]),h&&h.name===v&&g.length>1&&(v=g[(g.indexOf(v)+1)%g.length]);let m=await u(v);if(!m){c=setTimeout(f,8e3);return}let p=e.ctx.currentTime,_=e.ctx.createBufferSource(),y=e.ctx.createGain();if(_.buffer=m,_.connect(y),y.connect(n),y.gain.setValueAtTime(0,p),y.gain.linearRampToValueAtTime(1,p+3),_.start(),h){let b=h;b.g.gain.cancelScheduledValues(p),b.g.gain.setValueAtTime(b.g.gain.value,p),b.g.gain.linearRampToValueAtTime(0,p+4),setTimeout(()=>{try{b.src.stop()}catch{}},4500)}h={src:_,g:y,name:v,night:e.night>.6},clearTimeout(c),c=setTimeout(f,Math.max(5,m.duration-4+2.5)*1e3)};return e.sfx=(g,v=1,m=1)=>{if(!e.ready)return;let p=e.buffers["sfx_"+g];if(!p)return;let _=e.ctx.createBufferSource(),y=e.ctx.createGain();_.buffer=p,_.playbackRate.value=m*(.96+Math.random()*.08),y.gain.value=v,_.connect(y),y.connect(s),_.start()},e.setVolumes=(g,v)=>{e.musicVol=g,e.sfxVol=v,e.ready&&(n.gain.value=g,s.gain.value=v,a.gain.value=Math.min(1,v*1.1))},e.update=(g,v)=>{if(e.night=g,e.rain=v,!e.ready)return;let m=e.ctx.currentTime,p=(_,y)=>_&&_.gain.setTargetAtTime(y,m,1.2);p(l.day,(1-g)*(1-v*.7)*.9),p(l.night,g*.9),p(l.rain,v*.9),h&&h.night!==g>.6&&Math.abs(g-.6)>.25&&(o=[],f())},e.pause=g=>{e.ctx&&(g?e.ctx.suspend():e.ctx.resume())},e}function Mf(i){let e=null,t=()=>{e=new Uint8Array(3780);for(let l=0;l<60;l++)for(let r=0;r<63;r++)e[l*63+r]=i(-12.4+r*.4,-8.8+l*.4)?1:0},n=(l,r)=>[Math.max(0,Math.min(62,Math.round((l- -12.4)/.4))),Math.max(0,Math.min(59,Math.round((r- -8.8)/.4)))],s=(l,r)=>l>=0&&r>=0&&l<63&&r<60&&!e[r*63+l],a=(l,r)=>{if(s(l,r))return[l,r];for(let c=1;c<14;c++){let u=null,d=1e9;for(let f=-c;f<=c;f++)for(let g=-c;g<=c;g++)if(Math.max(Math.abs(g),Math.abs(f))===c&&s(l+g,r+f)){let v=g*g+f*f;v<d&&(d=v,u=[l+g,r+f])}if(u)return u}return[l,r]},h=(l,r,c,u)=>{let d=Math.hypot(c-l,u-r),f=Math.ceil(d/.15);for(let g=0;g<=f;g++){let v=g/f;if(i(l+(c-l)*v,r+(u-r)*v))return!1}return!0},o={invalidate:()=>{e=null}};return o.path=(l,r,c,u)=>{e||t();let[d,f]=a(...n(l,r)),[g,v]=a(...n(c,u)),m=3780,p=new Float32Array(m).fill(1e9),_=new Int32Array(m).fill(-1),y=new Uint8Array(m),b=[],T=f*63+d,A=v*63+g;p[T]=0,b.push([0,T]);let P=X=>{let C=X%63,E=X/63|0;return Math.hypot(C-g,E-v)},k=!1,M=0;for(;b.length&&M++<6e3;){let X=0;for(let L=1;L<b.length;L++)b[L][0]<b[X][0]&&(X=L);let[,C]=b.splice(X,1)[0];if(y[C])continue;if(y[C]=1,C===A){k=!0;break}let E=C%63,S=C/63|0;for(let L=-1;L<=1;L++)for(let R=-1;R<=1;R++){if(!R&&!L)continue;let F=E+R,$=S+L;if(!s(F,$)||R&&L&&(!s(E+R,S)||!s(E,S+L)))continue;let V=$*63+F,j=p[C]+(R&&L?1.414:1);j<p[V]&&(p[V]=j,_[V]=C,b.push([j+P(V),V]))}}let w=[];if(k){let X=A;for(;X!==-1;)w.push([-12.4+X%63*.4,-8.8+(X/63|0)*.4]),X=_[X];w.reverse()}else w.push([l,r]);w[0]=[l,r],i(c,u)||w.push([c,u]);let U=[w[0]],B=0;for(;B<w.length-1;){let X=w.length-1;for(;X>B+1&&!h(w[B][0],w[B][1],w[X][0],w[X][1]);)X--;U.push(w[X]),B=X}return U.slice(1)},o}var Ce=O,Mn=x(16777215),Oc={type:"dome",r:.012,h:.007,cols:[x(14258191),x(16107048),x(16374869)]},Xa=(i,e,t,n={})=>({sepals:{n:8,L:.012,W:.006},layers:[{n:n.n??17,L:n.L??.05,W:n.W??.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[i,e,t],nu:4,nv:2},{n:(n.n??17)-2,L:(n.L??.05)*.9,W:n.W??.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[i,e,t],nu:4,nv:2}],center:{...Oc,r:n.cr??.016,h:.009,cols:n.cc??Oc.cols}}),qa=(i,e,t,n={})=>({layers:[{n:n.n??5,L:n.L??.03,W:n.W??.03,a:1.4,b:.42,tilt:1.35,tiltC:.2,cup:.2,ruffle:n.ruffle??0,cols:[t??st(i,.8),i,e],nu:3,nv:2,notch:n.notch??0}],center:{type:"dome",r:.004,h:.003,cols:[x(16107048),x(16374869)],seg:5}});var $a=(i,e,t,n,s,a)=>{for(let h=0;h<t;h++){let o=e()*we,l=e.range(.5,1.25),r=e.range(.55,.95),c=new Ce(Math.cos(o)*Math.sin(l)*n*r,Math.cos(l)*s*r+(a.y??0),Math.sin(o)*Math.sin(l)*n*r),u=a.r*e.range(.8,1.15),d=a.ripe<1?et(a.green,a.c,Ge(a.ripe*1.2-e()*.3,0,1)):kn(a.c,e,.04);i.blob(se(ie(c.x,c.y,c.z),yt(e.range(-.3,.3))),u,u*(a.tall??1),st(d,.78),d,7,5,et(d,Mn,.22))}};function wf(i,e){let t=l=>i({spots:["bed","pot"],...l});t({id:"onze_horas",name:"Onze-horas",lvl:1,price:9,grow:55,gift:6,spots:["bed","pot","window","hang"],h:.14,loves:[1],info:"Abre com o sol do fim da manh\xE3.",build:(l,r,c,u)=>{let d=[[15745162,16222904],[16228894,16502874],[16244810,16773792],[16777215,16773366]];Gn(l,r,{stems:12,L:.2,up:.25,out:.9,drop:.25,stemC:x(12085866),leaf:{n:10,L:.022,W:.006,c:x(5939274),fold:0},flower:{per:2,make:(f,g,v,m)=>{let p=v.pick(d);St(f,g,v,e.camellia(x(p[0]),x(p[1])),m,.6)}}},c,u)}}),t({id:"calendula",name:"Cal\xEAndula",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.34,loves:[0,2],info:"Solzinhos alaranjados que curam e alegram.",build:(l,r,c,u)=>ft(l,r,{R:.15,H:.26,branches:9,heads:7,stalk:.14,leaf:{n:7,L:.07,W:.022,c:x(5937732),tilt:1},head:d=>d()<.5?Xa(x(15235084),x(16226846),x(16496698),{cc:[x(9062924),x(12085780),x(14256670)]}):Xa(x(15905306),x(16371514),x(16639082)),headK:1.05},c,u)}),t({id:"maria_sem_vergonha",name:"Maria-sem-vergonha",lvl:2,price:12,grow:60,gift:8,spots:["bed","pot","window","hang"],h:.26,loves:[0,1],info:"Floresce sem parar, at\xE9 na sombra.",build:(l,r,c,u)=>{let d=[[15755930,16361668],[16218202,16494746],[16446710,16777215],[14170762,15760052],[12085984,14199024]];ft(l,r,{R:.17,H:.2,branches:10,heads:14,headUp:.4,leaf:{n:8,L:.05,W:.028,c:x(4165444),tilt:1.1},head:f=>{let g=f.pick(d);return qa(x(g[0]),x(g[1]),null,{L:.028,W:.03,notch:.1})},headK:1.1},c,u)}}),t({id:"miosotis",name:"Mios\xF3tis",lvl:2,price:12,grow:60,gift:8,spots:["bed","pot","window"],h:.22,loves:[0],info:"Azulzinho de c\xE9u: \u201Cn\xE3o te esque\xE7as de mim\u201D.",build:(l,r,c,u)=>ft(l,r,{R:.16,H:.18,branches:11,heads:26,headUp:.5,stalk:.2,leaf:{n:8,L:.045,W:.014,c:x(4886608)},head:e.small5(x(6990064),x(11063551),x(16777215)),headK:.75},c,u)}),t({id:"begonia",name:"Beg\xF4nia",lvl:2,price:13,grow:65,gift:9,spots:["pot","window","hang","bed"],h:.26,loves:[1,2],info:"Folhas lustrosas e flores de cera.",build:(l,r,c,u)=>{let d=r.pick([[15218762,16022150],[16222896,16565464],[16446704,16777215]]);ft(l,r,{R:.16,H:.2,branches:9,heads:10,headUp:.5,leaf:{n:6,L:.06,W:.055,c:x(3832380),tip:x(10115658),tipMix:.35,a:.9,b:.4,tilt:1.15},head:e.camellia(x(d[0]),x(d[1])),headK:.6},c,u)}}),t({id:"violeta",name:"Violeta",lvl:2,price:14,grow:70,gift:9,spots:["pot","window"],h:.16,loves:[3,0],info:"Pequenina, de folhas aveludadas.",build:(l,r,c,u)=>{if(Sn(l,r,{n:Math.round(8+8*c),L:.085*c,W:.07*c,a:1.3,b:.4,tilt:1.25,curl:.4,fold:.15,c:x(4160068),nu:4,nv:3}),u>=0){let d=r.pick([[6963136,10123496],[15227560,16228560],[16052479,16777215]]);for(let f=0;f<9;f++){let g=f*2.4,v=r.range(.01,.045);St(l,se(ie(Math.cos(g)*v,.06*c+r()*.02,Math.sin(g)*v),me(g),fe(.3)),r,qa(x(d[0]),x(d[1]),null,{L:.02,W:.021}),Ge(u+r.range(-.2,.1),0,1),1.1)}}}}),t({id:"kalanchoe",name:"Calancho\xEA",lvl:3,price:15,grow:70,gift:10,spots:["pot","window"],h:.24,thirst:.5,loves:[3],info:"Flor-da-fortuna: buqu\xEAs que duram meses.",build:(l,r,c,u)=>{let d=r.pick([[15216670,16017994],[16228894,16500826],[15751834,16359620],[16244810,16773280]]).map(x);ft(l,r,{R:.14,H:.17,branches:8,heads:5,stalk:.4,headUp:.8,leaf:{n:6,L:.06,W:.045,c:x(3833928),a:.9,b:.45,cup:.4,fold:.1,tilt:1.15},head:{ball:{n:22,r:.04,fs:.016,cols:d,squash:.5,cover:.1}}},c,u)}}),t({id:"aster",name:"\xC1ster",lvl:3,price:16,grow:70,gift:11,h:.45,loves:[2],info:"Estrelinhas lilases do outono.",build:(l,r,c,u)=>ft(l,r,{R:.2,H:.38,branches:10,heads:14,stalk:.1,leaf:{n:9,L:.06,W:.014,c:x(4885064)},head:d=>d()<.6?Xa(x(8018632),x(10125024),x(12626160),{n:19,L:.036,W:.008,cr:.011}):Xa(x(14178976),x(15764160),x(16365784),{n:19,L:.036,W:.008,cr:.011})},c,u)}),t({id:"capuchinha",name:"Capuchinha",lvl:3,price:16,grow:70,gift:11,spots:["bed","hang","window","pot"],h:.26,loves:[1],info:"Folhas redondinhas e flores que se comem.",build:(l,r,c,u)=>{let d=[[15888410,16228922],[16238622,16507754],[14166046,15749178]];Gn(l,r,{stems:11,L:.42,up:.4,out:.8,drop:.9,stemC:x(9091176),leaf:{n:8,L:.06,W:.07,c:x(5941328),a:1,b:.3,fold:.05,curl:.15},flower:{per:2,make:(f,g,v,m)=>{let p=v.pick(d);St(f,g,v,qa(x(p[0]),x(p[1]),x(9054732),{L:.034,W:.034,ruffle:.15}),m,1.1)}}},c,u)}}),t({id:"lobelia",name:"Lob\xE9lia",lvl:3,price:15,grow:65,gift:10,spots:["hang","window","pot"],h:.2,loves:[0,1],info:"Uma cascata de azul mi\xFAdo.",build:(l,r,c,u)=>Gn(l,r,{stems:16,L:.36,up:.35,out:.7,drop:1.3,stemC:x(5933642),stemR:.002,leaf:{n:8,L:.02,W:.008,c:x(4886596),fold:0},flower:{per:5,make:(d,f,g,v)=>St(d,f,g,e.small5(x(3824352),x(8035064),x(16777215)),v,.75)}},c,u)}),t({id:"jacinto",name:"Jacinto",lvl:3,price:18,grow:75,gift:13,spots:["bed","pot","window"],h:.3,loves:[0],season:0,info:"S\xF3 na primavera: cachos perfumad\xEDssimos.",build:(l,r,c,u)=>{let d=r.pick([[6970080,10128116],[15760048,16363728],[16052479,16777215]]).map(x);yn(l,r,{stems:[3,4],H:.28,lean:.12,stemR:.008,stemC:x(6987864),florets:26,from:.35,type:"flower",fs:.022,off:.012,taper:.25,cols:d,bud:x(9091194),basal:{n:10,L:.24,W:.03,a:.7,b:.5,tilt:.35,curl:.5,fold:.45,c:x(4889168)}},c,u)}}),t({id:"gerbera",name:"G\xE9rbera",lvl:4,price:22,grow:80,gift:15,h:.45,loves:[0,1],info:"Margaridona de cores vibrantes.",build:(l,r,c,u)=>{let d=[[14690922,16018074],[15888410,16228922],[15214622,16013386],[16238622,16507754]];qt(l,r,{stems:[5,6],H:.4,lean:.2,spread:.07,stemR:.004,basal:{n:12,L:.2,W:.06,a:1.1,b:.7,tilt:.95,ruffle:.2,rf:3,nv:3,c:x(4164160)},head:f=>{let g=f.pick(d);return Xa(x(g[0]),x(g[0]),x(g[1]),{n:22,L:.058,W:.012,cr:.02,cc:[x(3811860),x(6965788),x(14262302)]})},headTilt:.2,headK:1.15},c,u)}}),t({id:"cravo",name:"Cravo",lvl:4,price:22,grow:85,gift:15,h:.5,loves:[0,3],info:"P\xE9talas franjadas com cheiro de especiaria.",build:(l,r,c,u)=>{let d=[[14690890,16015482],[16026288,16566492],[16447220,16777215],[16238666,16640160]];qt(l,r,{stems:[7,9],H:.46,lean:.24,spread:.07,stemR:.003,stemC:x(9087120),leaf:{n:7,L:.09,W:.008,c:x(8034952),tilt:.7,fold:0},head:f=>{let g=f.pick(d);return e.marigold(x(g[0]),x(g[1]))},headK:1.35},c,u)}}),t({id:"boca_de_leao",name:"Boca-de-le\xE3o",lvl:4,price:22,grow:85,gift:15,h:.6,loves:[0,3],info:"Aperta de ladinho e a florzinha \u201Cfala\u201D.",build:(l,r,c,u)=>{let d=r.pick([[15751818,16503370],[15216670,16228922],[16238622,16773792],[16446710,16361668]]).map(x);yn(l,r,{stems:[5,6],H:.55,lean:.2,stemR:.004,florets:20,from:.4,type:"bell",fs:.036,off:.006,whorl:1.9,taper:.5,cols:d,bud:x(9091194),leaf:{n:10,L:.06,W:.014,c:x(4885060)}},c,u)}}),t({id:"salvia",name:"S\xE1lvia",lvl:4,price:20,grow:80,gift:14,h:.5,loves:[1,2],info:"Espigas vermelhas que chamam beija-flores.",build:(l,r,c,u)=>{Sn(l,r,{n:Math.round(18*c),L:.1*c,W:.045,c:x(4885064),tilt:1}),yn(l,r,{stems:[8,10],H:.46,lean:.3,stemR:.003,florets:20,from:.5,type:"card",fs:.013,off:.005,whorl:1.4,taper:.4,cols:[x(14163998),x(15749178)],bud:x(9062970),leaf:{n:6,L:.06,W:.028,c:x(4885064)}},c,u)}}),t({id:"lirio_da_paz",name:"L\xEDrio-da-paz",lvl:4,price:24,grow:90,gift:16,spots:["pot","bed"],h:.5,loves:[1],info:"Bandeirinhas brancas entre folhas brilhantes.",build:(l,r,c,u)=>{if(Sn(l,r,{n:Math.round(8+8*c),L:.34*c,W:.085,a:.7,b:.6,tilt:.65,curl:.7,fold:.35,c:x(2452018),nu:5,nv:3,r:.01}),u>=0)for(let d=0;d<4;d++){let f=an(r,.46*c*r.range(.85,1.05),.08,d*1.7+r(),.03,6);l.tube(null,f,.004,.003,x(4885060),x(5937744),4);let g=f[6],v=se(ie(g.x,g.y,g.z),me(r()*6),fe(.2));l.petal(v,{L:.1*Me(.5,1,u),W:.06*Me(.4,1,u),a:.75,b:.6,cup:.9,curl:-.3,cols:[x(14282688),Mn,Mn]}),l.blob(se(v,ie(0,.035,-.008)),.006,.03,x(15918752),x(16446664),5,4)}}}),t({id:"alho_ornamental",name:"Alho-ornamental",lvl:5,price:26,grow:90,gift:18,h:.75,loves:[0],info:"Pompons roxos equilibrados em hastes finas.",build:(l,r,c,u)=>{Sn(l,r,{n:8,L:.26*c,W:.03,a:.7,b:.5,tilt:.55,curl:.8,c:x(5937754)});for(let d=0;d<4;d++){let f=an(r,.7*c*r.range(.75,1.05),.1,d*1.6+r(),.02,6);l.tube(null,f,.005,.004,x(6987864),x(8040552),5),u>=0&&To(l,xt(f[6],new Ce(0,1,0)),r,{n:60,r:.07,fs:.022,np:6,cols:[x(9067224),x(11041512),x(8014528)],squash:1,cover:.95},u)}}}),t({id:"anemona",name:"An\xEAmona",lvl:5,price:26,grow:85,gift:18,h:.4,loves:[0],season:0,info:"S\xF3 na primavera: olho escuro e p\xE9talas de papel.",build:(l,r,c,u)=>{let d=[[16447222,16777215],[6965960,10126056],[14166078,15751274],[15760048,16365780]];qt(l,r,{stems:[6,8],H:.36,lean:.24,spread:.07,stemR:.003,basal:{n:10,L:.1,W:.06,c:x(4885064),ruffle:.3,rf:4,nv:3,tilt:.9},head:f=>{let g=f.pick(d);return{layers:[{n:7,L:.045,W:.036,a:1.4,b:.45,tilt:1.25,tiltC:.15,cup:.35,ruffle:.1,cols:[et(x(g[0]),x(2759226),.5),x(g[0]),x(g[1])]}],center:{type:"dome",r:.011,h:.01,y:.004,cols:[x(1709088),x(2760752),x(3813440)],seg:8,stamens:{n:14,len:.012,spread:.9,c:x(2760752),tip:x(3813446),tipR:.0025}}}},headTilt:.25,headK:1.15},c,u)}}),t({id:"lupino",name:"Lupino",lvl:5,price:26,grow:90,gift:18,spots:["bed"],h:.8,loves:[0,1],info:"Torres em degrad\xEA, do rosa ao azul.",build:(l,r,c,u)=>{let d=r.pick([[15760048,8018656],[16238666,15888410],[10124008,4872920],[16445686,15755930]]).map(x);yn(l,r,{stems:[4,5],H:.74,lean:.14,stemR:.006,florets:34,from:.4,type:"card",fs:.02,off:.012,whorl:1.25,taper:.55,cols:d,bud:x(9089162),basalFan:{count:9,stalk:.2,n:7,L:.085,W:.022,c:x(4886600),spread:3}},c,u)}}),t({id:"ranunculo",name:"Ran\xFAnculo",lvl:6,price:30,grow:95,gift:21,h:.42,loves:[0,3],info:"Camadas e mais camadas, como papel crepom.",build:(l,r,c,u)=>{let d=[[16228922,16502922],[15755914,16498892],[16446700,16777215],[15222826,16225402],[16242762,16642224]];qt(l,r,{stems:[6,8],H:.38,lean:.2,spread:.07,stemR:.0035,basal:{n:12,L:.11,W:.05,c:x(4886344),ruffle:.3,rf:4,nv:3,tilt:.9},head:f=>{let g=f.pick(d);return e.camellia(x(g[0]),x(g[1]))},headK:1.3,headTilt:.15},c,u)}}),t({id:"amarilis",name:"Amar\xEDlis",lvl:6,price:32,grow:100,gift:22,spots:["pot","bed"],h:.6,loves:[3],season:3,info:"S\xF3 no inverno: trombetas enormes numa haste s\xF3.",build:(l,r,c,u)=>{let d=r.pick([[14163998,15749194,9047834],[16446708,16777215,14282928],[15760010,16568534,16445664]]);qt(l,r,{stems:[2,2],H:.52,lean:.05,spread:.06,stemR:.011,stemC:x(6987864),wob:.02,basal:{n:7,L:.34,W:.04,a:.7,b:.45,tilt:.45,curl:.7,fold:.4,c:x(4165448)},head:e.lily(x(d[0]),x(d[1]),x(d[2])),headsPer:3,pedicel:.04,headTilt:1.2,headK:1.25},c,u)}}),t({id:"agapanto",name:"Agapanto",lvl:6,price:32,grow:100,gift:22,h:.75,loves:[1],info:"Fogos de artif\xEDcio azuis no ver\xE3o.",build:(l,r,c,u)=>{Sn(l,r,{n:Math.round(12+8*c),L:.36*c,W:.03,a:.7,b:.45,tilt:.6,curl:.9,fold:.4,c:x(4164168),nu:5});for(let d=0;d<4;d++){let f=an(r,.68*c*r.range(.8,1.05),.14,d*1.7+r(),.02,6);l.tube(null,f,.005,.004,x(5937744),x(6989920),5),u>=0&&To(l,xt(f[6],new Ce(0,1,0)),r,{n:34,r:.075,fs:.036,np:6,cols:[x(5929704),x(9085172),x(4874968)],squash:.85,cover:.55},u)}}}),t({id:"gladiolo",name:"Glad\xEDolo",lvl:6,price:32,grow:100,gift:22,spots:["bed"],h:.95,loves:[1],season:1,info:"S\xF3 no ver\xE3o: a palma-de-santa-rita.",build:(l,r,c,u)=>{let d=r.pick([[15216670,16022106],[15760048,16499932],[16242762,16642208],[10115800,13148400]]).map(x);yn(l,r,{stems:[4,5],H:.9,lean:.1,stemR:.006,florets:12,from:.42,type:"flower",fs:.05,off:.014,whorl:.35,taper:.5,cols:d,bud:x(9091194),basal:{n:10,L:.5,W:.03,a:.7,b:.4,tilt:.2,curl:.3,fold:.5,c:x(4889168)}},c,u)}}),t({id:"iris",name:"\xCDris",lvl:7,price:36,grow:110,gift:25,h:.65,loves:[0],info:"Tr\xEAs p\xE9talas para cima, tr\xEAs para baixo.",build:(l,r,c,u)=>{let d=r.pick([[5914560,9073384],[16242762,16642208],[16052479,16777215]]),f=x(d[0]),g=x(d[1]);qt(l,r,{stems:[4,5],H:.58,lean:.1,spread:.07,stemR:.005,basal:{n:12,L:.46,W:.035,a:.7,b:.4,tilt:.18,curl:.25,fold:.5,c:x(5937776)},head:{layers:[{n:3,L:.06,W:.042,a:1.2,b:.5,tilt:.25,tiltC:.1,curl:-.5,cup:.9,ruffle:.12,cols:[g,f,g]},{n:3,L:.07,W:.048,a:1.2,b:.5,tilt:1.1,tiltC:.2,curl:1.2,curlPow:2,cup:.3,ruffle:.12,cols:[x(16242762),f,st(f,.85)]}]},headK:1.2},c,u)}}),t({id:"anturio",name:"Ant\xFArio",lvl:7,price:38,grow:115,gift:26,spots:["pot","green"],h:.5,loves:[1],info:"Cora\xE7\xF5es vermelhos de verniz.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(5+4*c);d++){let f=d*2.4,g=.3*c*r.range(.7,1.1),v=r.range(.25,.6),m=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*v*.2,g*.7,Math.sin(f)*g*v*.2),new Ce(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.004,.003,x(4160058),x(4160058),4),vt(l,se(ie(m[5].x,m[5].y,m[5].z),me(-f+Math.PI/2),fe(.9+r()*.3)),r,{L:.19*c,W:.12*c,a:.6,b:.6,c:x(2056240),fold:.25,curl:.5,nu:5,nv:4})}if(u>=0)for(let d=0;d<4;d++){let f=an(r,.42*c*r.range(.8,1.05),.1,d*1.9+1,.03,6);l.tube(null,f,.004,.003,x(9062970),x(11033156),4);let g=f[6],v=se(ie(g.x,g.y,g.z),me(r()*6),fe(.75)),m=r.pick([x(14161966),x(15755914),x(16445680)]);l.petal(v,{L:.1*Me(.4,1,u),W:.095*Me(.4,1,u),a:.62,b:.55,cup:.25,curl:.3,cols:[st(m,.85),m,et(m,Mn,.2)],nv:4}),l.blob(se(v,ie(0,.03,-.012),fe(-.5)),.006,.032,x(15913546),x(16445600),5,4)}}}),t({id:"malva_rosa",name:"Malva-rosa",lvl:7,price:36,grow:115,gift:25,spots:["bed"],h:1.3,loves:[1],info:"Alt\xEDssima, encostada no muro das av\xF3s.",build:(l,r,c,u)=>{let d=r.pick([[15755930,16498900],[14166078,15753338],[16244874,16774864],[6957642,10111594]]).map(x);yn(l,r,{stems:[3,3],H:1.25,lean:.06,stemR:.009,florets:14,from:.3,type:"flower",fs:.055,off:.02,whorl:2.1,taper:.4,cols:d,bud:x(9091194),eye:x(16244874),leaf:{n:8,L:.13,W:.12,a:.8,b:.4,c:x(4885060),tilt:1.2}},c,u)}}),t({id:"fucsia",name:"Brinco-de-princesa",lvl:6,price:32,grow:100,gift:22,spots:["hang","pot"],h:.3,loves:[0,2],info:"Bailarinas penduradas, rosa e roxo.",build:(l,r,c,u)=>Gn(l,r,{stems:13,L:.46,up:.4,out:.7,drop:1.4,stemC:x(9062986),leaf:{n:9,L:.04,W:.02,c:x(4164164)},flower:{per:3,make:(d,f,g,v)=>{let m=new Ce().setFromMatrixPosition(f),p=Me(.5,1,v),_=se(ie(m.x,m.y-.01,m.z),fe(Math.PI),me(g()*6));for(let y=0;y<4;y++)d.petal(se(_,me(y*1.57),fe(1)),{L:.03*p,W:.011,a:.8,b:.8,curl:-.9,cols:[x(15214698),x(15749258),x(16222896)],nu:3,nv:1});d.lathe(se(_,ie(0,.004,0)),[[.004,0],[.011*p,.012],[.013*p,.03*p]],x(6957744),x(9063120),6,null,.1,4)}}},c,u)}),t({id:"crisantemo",name:"Cris\xE2ntemo",lvl:4,price:24,grow:90,gift:16,h:.5,loves:[2],season:2,info:"S\xF3 no outono: pompons dourados e cor de vinho.",build:(l,r,c,u)=>{let d=[[15905306,16506986],[12075050,15769674],[16446694,16777215],[10107498,14715568]];ft(l,r,{R:.24,H:.4,branches:10,heads:9,stalk:.08,leaf:{n:9,L:.07,W:.04,c:x(4160064),ruffle:.3,rf:4,nv:3},head:f=>{let g=f.pick(d);return e.dahlia(x(g[0]),x(g[1]))},headK:1,headUp:.5},c,u)}}),t({id:"estrelicia",name:"Estrel\xEDcia",lvl:9,price:48,grow:150,gift:34,spots:["bed","pot","green"],h:.95,loves:[1],info:"Ave-do-para\xEDso: uma flor que parece p\xE1ssaro.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(5+4*c);d++){let f=d*2.4+r()*.3,g=.6*c*r.range(.75,1.1),v=r.range(.15,.4),m=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*v*.2,g*.6,Math.sin(f)*g*v*.2),new Ce(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.008,.005,x(4885072),x(4885072),5),vt(l,se(ie(m[5].x,m[5].y,m[5].z),me(-f+Math.PI/2),fe(.35+r()*.3)),r,{L:.34*c,W:.13*c,a:.75,b:.5,c:x(3832408),fold:.3,curl:.4,nu:5,nv:3})}if(u>=0)for(let d=0;d<3;d++){let f=d*2.1+.6,g=an(r,.85*c*r.range(.85,1.05),.14,f,.02,6);l.tube(null,g,.007,.006,x(5933656),x(6982248),5);let v=g[6],m=se(ie(v.x,v.y,v.z),me(-f+Math.PI/2)),p=Me(.4,1,u);l.petal(se(m,fe(1.45)),{L:.14*p,W:.035,a:.6,b:.8,cup:1.2,cols:[x(6978152),x(9071224),x(12081770)],nu:4,nv:2});for(let _=0;_<4;_++)l.petal(se(m,ie(0,.005,.02+_*.022),fe(.25+_*.2)),{L:.1*p,W:.026,a:.7,b:.9,cup:.6,cols:[x(15896602),x(16230430),x(16500794)],nu:3,nv:2});l.petal(se(m,ie(0,.005,.045),fe(.7)),{L:.075*p,W:.014,a:.7,b:.9,cols:[x(3816136),x(4868832),x(6974192)],nu:3,nv:1})}}}),t({id:"heliconia",name:"Helic\xF4nia",lvl:10,price:54,grow:160,gift:38,spots:["bed","green"],h:1.2,loves:[1],info:"Bico-de-papagaio das matas tropicais.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(4+3*c);d++){let f=d*2.4+r()*.3,g=.85*c*r.range(.75,1.1),v=r.range(.1,.3),m=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*v*.2,g*.6,Math.sin(f)*g*v*.2),new Ce(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.01,.006,x(4885060),x(4885060),5),vt(l,se(ie(m[5].x,m[5].y,m[5].z),me(-f+Math.PI/2),fe(.5+r()*.4)),r,{L:.42*c,W:.14*c,a:.75,b:.5,c:x(3111484),fold:.3,curl:.7,nu:5,nv:3})}if(u>=0)for(let d=0;d<2;d++){let f=d*3+.8,g=wt(new Ce(0,0,0),new Ce(Math.cos(f)*.05,.9*c,Math.sin(f)*.05),new Ce(Math.cos(f)*.3*c,.75*c,Math.sin(f)*.3*c),8);l.tube(null,g,.007,.005,x(5933636),x(13117498),5);let v=g[8],m=Me(.4,1,u);for(let p=0;p<7;p++){let _=-p*.045*m,y=p%2?1:-1;l.petal(se(ie(v.x,v.y+_,v.z),me(-f+(y>0?0:Math.PI)),fe(1.25)),{L:.085*m,W:.034,a:.6,b:.8,cup:1.4,cols:[x(14163502),x(15612474),x(16238634)],nu:3,nv:2})}}}}),t({id:"espada",name:"Espada-de-s\xE3o-jorge",lvl:2,price:14,grow:70,gift:9,spots:["pot","bed"],h:.5,thirst:.35,foliage:!0,loves:[1],info:"Protege a casa e quase n\xE3o pede \xE1gua.",build:(l,r,c)=>{for(let u=0;u<Math.round(6+6*c);u++){let d=u*2.4,f=.02+r()*.04;l.petal(se(ie(Math.cos(d)*f,0,Math.sin(d)*f),me(d+r()),fe(r.range(.02,.2))),{L:.5*c*r.range(.6,1.1),W:.05,a:.62,b:.32,base:.7,fold:.25,twist:r.range(-.6,.6),nu:6,nv:2,vein:.5,cols:[x(3828288),x(4880976),x(14207050)]})}}}),t({id:"jiboia",name:"Jiboia",lvl:2,price:13,grow:65,gift:9,spots:["hang","pot","window"],h:.3,foliage:!0,loves:[1],info:"Cora\xE7\xF5es verdes que escorrem do vaso.",build:(l,r,c)=>Gn(l,r,{stems:11,L:.7,up:.25,out:.55,drop:1.7,upFall:.3,stemC:x(6982212),leaf:{n:11,L:.075,W:.06,c:x(4889160),tip:x(15261834),tipMix:.5,a:.62,b:.5,fold:.2,curl:.3}},c,-1)}),t({id:"zamioculca",name:"Zamioculca",lvl:5,price:26,grow:90,gift:18,spots:["pot"],h:.55,thirst:.4,foliage:!0,loves:[1],info:"Brilhante como se fosse encerada.",build:(l,r,c)=>Gn(l,r,{stems:9,L:.55,up:1.5,out:.5,drop:.2,upFall:.3,stemC:x(3832384),stemR:.007,frond:{pairs:9,L:.085,wr:.48,c:x(2058800)}},c,-1)}),t({id:"areca",name:"Palmeira-areca",lvl:8,price:42,grow:130,gift:30,spots:["pot","bed"],h:1.2,foliage:!0,loves:[1],info:"Leques que fazem sombra de praia.",build:(l,r,c)=>{for(let u=0;u<5;u++)l.tube(null,an(r,.5*c,.1,u*1.3,.03,4),.012,.009,x(12099658),x(9087050),5);Gn(l,r,{stems:12,L:1.05,up:1.1,out:.75,drop:.5,upFall:.4,stemC:x(9087050),stemR:.006,frond:{pairs:18,L:.2,wr:.1,c:x(4889156)}},c,-1)}}),i({id:"dioneia",name:"Dioneia",lvl:5,price:34,grow:90,gift:24,spots:["green"],h:.16,info:"A planta carn\xEDvora mais simp\xE1tica do mundo.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+6*c);d++){let f=d*2.4,g=.1*c*r.range(.7,1.15),v=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*.5,g*.5,Math.sin(f)*g*.5),new Ce(Math.cos(f)*g,g*.55,Math.sin(f)*g),4);l.tube(null,v,.004,.003,x(6989898),x(9091162),4);let m=v[4],p=.35+r()*.5;for(let _ of[-1,1])l.petal(se(ie(m.x,m.y,m.z),me(-f+Math.PI/2),yt(_*p),fe(.2)),{L:.04*c,W:.034*c,a:1,b:.45,cup:.9*_,cols:[x(9091162),x(12109914),x(14172234)],nu:3,nv:3})}}}),i({id:"bonsai",name:"Bonsai",lvl:9,price:60,grow:170,gift:42,spots:["green","pot"],h:.45,foliage:!0,thirst:.6,info:"Uma \xE1rvore inteira que cabe no colo.",build:(l,r,c)=>as(l,r,{H:.16,R:.2,trunkR:.028,limbs:5,bark:x(5916214),leaves:260,leafSize:.05,leafCols:[x(3111482),x(4164164),x(2452016)]},c,-1)}),i({id:"orquidea_azul",name:"Orqu\xEDdea-azul",lvl:12,price:80,grow:200,gift:58,spots:["green"],h:.6,info:"S\xF3 a estufa consegue criar uma dessas.",build:(l,r,c,u)=>{if(Sn(l,r,{n:6,L:.2*c,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:x(3111486),nu:5,base:.6,r:.01}),!(u<0))for(let d=0;d<2;d++){let f=d*2.6+r(),g=.55*c,v=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*.1,g*.95,Math.sin(f)*g*.1),new Ce(Math.cos(f)*g*.75,g*.7,Math.sin(f)*g*.75),10);l.tube(null,v,.004,.0025,x(5929540),x(6982218),4);for(let m=0;m<7;m++){let p=Lt(v,.5+m*.075).p,_=m%2?1:-1,y=new Ce(Math.cos(f+_*1.2)*.8,.25,Math.sin(f+_*1.2)*.8).normalize();St(l,xt(p.clone().add(y.clone().multiplyScalar(.02)),y),r,e.orchid(x(4877032),x(10138872),x(2763418)),Ge(u*1.5-m*.07,0,1),1.3)}}}}),i({id:"vitoria_regia",name:"Vit\xF3ria-r\xE9gia",lvl:12,price:70,grow:190,gift:50,spots:["pond"],h:.14,thirst:0,loves:[1],info:"A rainha das \xE1guas da Amaz\xF4nia.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d*2.2+r(),g=d?.42*c:0,v=.34*c*(d?.8:1),m=se(ie(Math.cos(f)*g,.012+d*.002,Math.sin(f)*g),me(r()*6)),p=l.n,_=20,y=x(4165448);l.vert(0,0,0,st(y,.85),m);for(let b=0;b<=_;b++){let T=b/_*we;l.vert(Math.cos(T)*v,0,Math.sin(T)*v,b%2?y:et(y,rt.light,.25),m)}for(let b=0;b<_;b++)l.idx.push(p,p+b+2,p+b+1);l.lathe(m,[[v,0],[v*1.02,.035*c]],x(4889168),x(11033194),_)}u>=0&&St(l,ie(.3*c,.03,.25*c),r,e.waterlily(x(16773364),x(16228544)),u,1.7*c)}});let n=(l,r,c,u,d,f,g={})=>i({id:l,name:r,lvl:c,price:u,gift:Math.round(u*.58),grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,info:d,...g,build:(v,m,p,_)=>as(v,m,f,p,_)});n("macieira","Macieira",6,90,"Flores brancas e ma\xE7\xE3s coradas.",{H:1.05,R:1.05,trunkR:.075,limbs:7,bark:x(6244922),foliage:1,leaves:2600,leafSize:.15,leafCols:[x(3836476),x(4889156),x(3111476)],blossom:{n:300,size:.08,cols:[Mn,x(16572650)]},fruit:{n:18,r:.05,tall:.95,c:x(14166062)}},{loves:[2]}),n("pitangueira","Pitangueira",7,100,"Frutinhas vermelhas com gosto de inf\xE2ncia.",{H:.95,R:1,trunkR:.065,limbs:8,bark:x(9071184),foliage:1,leaves:2800,leafSize:.12,leafCols:[x(3836480),x(5937736),x(9067066)],blossom:{n:320,size:.06,cols:[Mn]},fruit:{n:34,r:.026,tall:.85,c:x(14690846)}},{loves:[0]}),n("ipe_rosa","Ip\xEA-rosa",8,115,"Uma nuvem cor-de-rosa no meio do inverno.",{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:x(6969930),foliage:.06,leaves:900,leafCols:[x(4885050),x(5937732)],blossom:{n:3300,size:.125,cols:[x(15760048),x(16228552),x(15227546),x(16566496)],buds:[x(14176394)]}},{petal:16228552,loves:[3]}),n("jabuticabeira","Jabuticabeira",9,125,"Bolinhas pretas doces grudadas no tronco.",{H:1,R:1.15,trunkR:.085,limbs:9,bark:x(11573892),foliage:1,leaves:3e3,leafSize:.11,leafCols:[x(3111480),x(2452016),x(4885056)],blossom:{n:300,size:.05,cols:[Mn,x(16775392)]},fruit:{n:46,r:.03,tall:1,c:x(2759220)}},{loves:[0]}),n("magnolia","Magn\xF3lia",10,135,"Ta\xE7as brancas e rosadas, grandes como m\xE3os.",{H:1.2,R:1.2,trunkR:.08,limbs:7,bark:x(8022618),foliage:.5,leaves:1800,leafSize:.16,leafCols:[x(3107380),x(3832380)],blossom:{n:900,size:.2,cols:[x(16774390),x(16503006),x(16232648)],buds:[x(15239856)]}},{petal:16572650,loves:[0]}),n("mangueira","Mangueira",11,150,"Sombra larga e mangas maduras.",{H:1.3,R:1.5,trunkR:.11,limbs:9,bark:x(5917244),foliage:1,leaves:3200,leafSize:.17,leafCols:[x(2452016),x(3111480),x(9067066)],blossom:{n:260,size:.07,cols:[x(16246944),x(16445632)]},fruit:{n:16,r:.06,tall:1.35,c:x(15902762)}},{loves:[1]}),n("flamboyant","Flamboyant",12,165,"A copa que pega fogo no ver\xE3o.",{H:1.3,R:1.7,trunkR:.1,limbs:9,bark:x(8022618),foliage:.45,leaves:1800,leafSize:.13,leafCols:[x(4889156),x(5941328)],blossom:{n:3e3,size:.13,cols:[x(15216670),x(15880222),x(16218142),x(14163486)],buds:[x(12068894)]}},{petal:15880222,loves:[1]});let s=(l,r,c,u,d,f,g={})=>i({id:l,name:r,lvl:c,price:u,gift:Math.round(u*.6),grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,info:d,...g,build:(v,m,p,_)=>Ao(v,m,f,p,_)}),a=l=>new Ce(l.range(-.6,.6),l.range(0,1),l()>.5?1:-1).normalize();s("ipomeia","Ipomeia",5,60,"Bons-dias azuis que abrem cedinho.",{leaf:{n:70,L:.06,W:.055,c:x(4165444),a:.62,b:.5},flower:{n:54,make:(l,r,c,u)=>{let d=a(c),f=Me(.4,1,u);l.lathe(xt(r.clone().add(d.clone().multiplyScalar(.06)),d),[[.004,0],[.008,.025],[.03*f,.045],[.05*f,.05]],null,null,12,(g,v)=>v.copy(x(16447231)).lerp(x(4877032),Ge(g*1.6,0,1)),.08,5)}}},{loves:[1]}),s("maracuja","Maracuj\xE1",7,85,"Flor de coroa lil\xE1s e fruta para suco.",{leaf:{n:70,L:.07,W:.06,c:x(3836476),a:.6,b:.5},flower:{n:40,make:(l,r,c,u)=>{let d=a(c),f=r.clone().add(d.clone().multiplyScalar(.07));if(u>.7&&c()<.35){l.blob(ie(r.x+c.range(-.08,.08),r.y-.09,r.z+c.range(-.1,.1)),.04,.045,x(14196766),x(15910970),7,5);return}St(l,xt(f,d),c,{layers:[{n:10,L:.034,W:.014,a:.9,b:.7,tilt:1.4,tiltC:.2,cup:.3,cols:[Mn,x(16052479),Mn],nu:3,nv:2},{n:26,L:.026,W:.003,a:.8,b:.9,tilt:1.3,tiltC:.2,y:.003,cols:[x(4860554),x(8018632),x(15261951)],nu:2,nv:1}],center:{type:"dome",r:.007,h:.012,y:.006,cols:[x(9089098),x(12109914)],seg:6}},u,1.3)}}},{loves:[1]}),s("madressilva","Madressilva",9,100,"Perfume doce de fim de tarde.",{leaf:{n:80,L:.05,W:.026,c:x(4164168)},flower:{n:80,make:(l,r,c,u)=>{let d=a(c),f=xt(r.clone().add(d.clone().multiplyScalar(.05)),d),g=c()<.5?x(16773808):x(16228528),v=Me(.4,1,u);for(let m=0;m<5;m++)l.petal(se(f,me(m*1.25),fe(.55)),{L:.04*v,W:.007,a:.8,b:.9,curl:1.2,curlPow:2.5,cols:[x(16244874),g,Mn],nu:3,nv:1})}}},{loves:[0,1]}),s("clematis","Clematis",11,118,"Estrelas roxas do tamanho de um pires.",{leaf:{n:60,L:.06,W:.03,c:x(3836484)},flower:{n:42,make:(l,r,c,u)=>{let d=a(c),f=c.pick([[6963136,10123496],[14178984,16228560],[16052479,16777215]]);St(l,xt(r.clone().add(d.clone().multiplyScalar(.07)),d),c,{layers:[{n:6,L:.058,W:.03,a:1,b:.6,tilt:1.4,tiltC:.2,cup:.25,vein:.3,cols:[st(x(f[0]),.8),x(f[0]),x(f[1])],nu:4,nv:2}],center:{stamens:{n:12,len:.014,spread:.7,c:x(16052432),tip:x(16244874),tipR:.003}}},u,1.1)}}},{loves:[0,1]});let h=l=>i({spots:["veg"],veg:!0,...l});h({id:"rabanete",name:"Rabanete",lvl:1,price:8,grow:45,gift:6,h:.18,loves:[0,2],info:"O mais apressado da horta.",build:(l,r,c,u)=>{for(let d=0;d<4;d++){let f=d*1.6+r(),g=d?.07:0,v=Math.cos(f)*g,m=Math.sin(f)*g;for(let p=0;p<5;p++)vt(l,se(ie(v,.01,m),me(p*1.3+r()),fe(r.range(.3,.8))),r,{L:.13*c,W:.05,a:1.2,b:.6,c:x(4889156),ruffle:.2,rf:3,nv:3});u>0&&l.blob(ie(v,.012*c,m),.022*c*Me(.5,1,u),.022*c,x(16445680),x(14690906),7,5)}}}),h({id:"cebolinha",name:"Cebolinha",lvl:1,price:8,grow:50,gift:6,spots:["veg","pot","window"],h:.3,loves:[0,2],info:"Um punhadinho verde para qualquer prato.",build:(l,r,c)=>{for(let u=0;u<Math.round(14+14*c);u++){let d=r()*we,f=r()*.07;l.tube(ie(Math.cos(d)*f,0,Math.sin(d)*f),an(r,.3*c*r.range(.6,1.1),.09,d,.08,4),.004,.002,x(13623472),x(4889160),4)}},foliage:!0}),h({id:"salsinha",name:"Salsinha",lvl:1,price:8,grow:50,gift:6,spots:["veg","pot","window"],h:.24,foliage:!0,loves:[0,2],info:"Cheirinho-verde, par da cebolinha.",build:(l,r,c)=>{for(let u=0;u<Math.round(10+10*c);u++){let d=u*2.4,f=.2*c*r.range(.6,1.1),g=wt(new Ce(0,0,0),new Ce(Math.cos(d)*f*.2,f*.7,Math.sin(d)*f*.2),new Ce(Math.cos(d)*f*.5,f,Math.sin(d)*f*.5),4);l.tube(null,g,.002,.0015,x(6991952),x(6991952),3),Zs(l,se(ie(g[4].x,g[4].y,g[4].z),me(-d+Math.PI/2),fe(.9)),r,{n:5,L:.04,W:.03,c:x(4890692),spread:2.6,ruffle:.4,rf:4,nv:3})}}}),h({id:"alface",name:"Alface",lvl:2,price:10,grow:55,gift:7,h:.2,loves:[0,2,3],info:"Crespa, fresquinha, colhida na hora.",build:(l,r,c)=>St(l,ie(0,.012,0),r,{layers:[{n:26,golden:!0,L:[.04,.15],W:[.05,.16],a:1.3,b:.4,tilt:[.12,1.2],tiltC:[.12,1.2],curl:[-.6,.15],curlC:[-.6,.15],cup:[1,.4],ruffle:.35,rf:4,r:[.001,.01],y:[.03,0],cols:[x(15134904),x(10145888),x(6993992)],cols2:[x(14216384),x(8044624),x(5810240)],nu:4,nv:4,closedScale:1,vein:.05}]},1,c),foliage:!0}),h({id:"couve",name:"Couve",lvl:2,price:10,grow:60,gift:7,h:.4,foliage:!0,loves:[2,3],info:"Folhonas para o refogado de domingo.",build:(l,r,c)=>{l.tube(null,[new Ce(0,0,0),new Ce(.005,.07*c,0),new Ce(0,.14*c,0)],.012,.01,x(9091192),x(9091192),5);for(let u=0;u<Math.round(7+6*c);u++)vt(l,se(ie(0,.04+u*.01*c,0),me(u*2.4),fe(r.range(.5,1.15))),r,{L:.3*c*r.range(.7,1.1),W:.16*c,a:1.1,b:.5,c:x(4160090),tip:x(9091216),ruffle:.25,rf:4,nu:5,nv:4,curl:.6,vein:.4})}}),h({id:"cenoura",name:"Cenoura",lvl:2,price:11,grow:60,gift:8,h:.3,loves:[2,3],info:"Um tesouro laranja escondido na terra.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d*2.1+r(),g=d?.085:0,v=Math.cos(f)*g,m=Math.sin(f)*g;for(let p=0;p<7;p++){let _=p*.9+r(),y=.24*c*r.range(.6,1.1),b=wt(new Ce(v,0,m),new Ce(v+Math.cos(_)*y*.15,y*.7,m+Math.sin(_)*y*.15),new Ce(v+Math.cos(_)*y*.45,y,m+Math.sin(_)*y*.45),5);l.tube(null,b,.002,.001,x(5939272),x(5939272),3);for(let T=1;T<6;T++){let{p:A,d:P}=Lt(b,T/6);for(let k of[-1,1])vt(l,xt(A,new Ce(-P.z*k,.4,P.x*k).normalize()),r,{L:.035*c*(1-T/9),W:.012,c:x(4889152),nu:2,nv:1,fold:0})}}u>0&&l.lathe(ie(v,-.01,m),[[.012,0],[.02*c*Me(.5,1,u),.028],[.012,.04]],x(15892510),x(16226874),8)}}}),h({id:"hortela",name:"Hortel\xE3",lvl:2,price:10,grow:55,gift:7,spots:["veg","pot","window"],h:.26,loves:[0,1],info:"Refrescante: para o ch\xE1 e para o suco.",build:(l,r,c,u)=>{ft(l,r,{R:.16,H:.22,branches:11,heads:0,stemC:x(9071242),leaf:{n:10,L:.045,W:.03,c:x(4892752),a:.85,b:.6,ruffle:.25,rf:5,nv:3}},c,-1),u>.2&&yn(l,r,{stems:[5,6],H:.28,lean:.4,florets:9,from:.78,type:"card",fs:.008,cols:[x(13150448),x(15259903)],stemC:x(6986330)},c,u)}}),h({id:"morango",name:"Morango",lvl:3,price:16,grow:70,gift:12,spots:["veg","pot","hang","window"],h:.2,loves:[0,3],info:"Vermelhinho, doce, dif\xEDcil n\xE3o beliscar.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(8+6*c);d++){let f=d*2.4,g=.14*c*r.range(.6,1.1),v=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*.3,g*.8,Math.sin(f)*g*.3),new Ce(Math.cos(f)*g,g*.8,Math.sin(f)*g),4);l.tube(null,v,.002,.0015,x(8040544),x(8040544),3),Zs(l,se(ie(v[4].x,v[4].y,v[4].z),me(-f+Math.PI/2),fe(1.1)),r,{n:3,L:.05,W:.042,c:x(4165440),spread:2.2,a:1.1,b:.45,sideShrink:.1})}if(u>=0)for(let d=0;d<7;d++){let f=d*2.4+1,g=r.range(.07,.17)*c,v=Math.cos(f)*g,m=Math.sin(f)*g;if(u<.5||d%3===0)St(l,se(ie(v,.06*c,m),me(f)),r,e.small5(Mn,Mn,x(16244874)),Ge(u*2,0,1),1);else{let p=se(ie(v,.03*c,m),fe(Math.PI));l.lathe(p,[[.004,-.004],[.017,.004],[.014,.02],[.002,.032]],x(15212586),x(14162474),7);for(let _=0;_<5;_++)l.petal(se(ie(v,.034*c,m),me(_*1.25),fe(1.3)),{L:.012,W:.006,cols:[x(4889152),x(4889152),x(6991952)],nu:2,nv:1})}}}}),h({id:"tomate",name:"Tomate",lvl:3,price:18,grow:80,gift:13,spots:["veg","pot"],h:.7,loves:[1],info:"Vai do verde ao vermelho, um cacho de cada vez.",build:(l,r,c,u)=>{l.tube(null,[new Ce(.02,0,0),new Ce(.02,.4*c,0),new Ce(.02,.8*c,0)],.008,.008,x(11043930),x(12096618),5),ft(l,r,{R:.2,H:.62,branches:9,heads:0,splay:.5,fill:30,stemC:x(5937736),leaf:{n:9,L:.075,W:.04,c:x(3836476),ruffle:.3,rf:4,nv:3}},c,-1),u>=0&&$a(l,r,Math.round(11*c),.2*c,.55*c,{r:.03,tall:.9,c:x(14690334),green:x(9091146),ripe:u,y:.08})}}),h({id:"beterraba",name:"Beterraba",lvl:4,price:18,grow:80,gift:13,h:.3,loves:[2,3],info:"Folhas de veias roxas, raiz doce.",build:(l,r,c,u)=>{for(let d=0;d<2;d++){let f=d?.09:-.03,g=d?.05:-.02;for(let v=0;v<6;v++){let m=v*1.1+r(),p=se(ie(f,.01,g),me(m),fe(r.range(.25,.75)));l.tube(p,[new Ce(0,0,0),new Ce(0,.07*c,0)],.003,.003,x(12068954),x(12068954),3),vt(l,se(p,ie(0,.06*c,0)),r,{L:.18*c,W:.075,a:.9,b:.6,c:x(4160068),tip:x(9058906),tipMix:.2,ruffle:.2,rf:3,nv:3,vein:.5})}u>0&&l.blob(ie(f,.01,g),.035*c*Me(.5,1,u),.03*c,x(5903414),x(9051722),7,5)}}}),h({id:"milho",name:"Milho",lvl:4,price:20,grow:90,gift:14,h:1.3,fixedRot:!0,loves:[1],info:"Para a pamonha e a pipoca da festa junina.",build:(l,r,c,u)=>{for(let d=0;d<2;d++){let f=d?.1:-.08,g=1.25*c*r.range(.9,1.05),v=an(r,g,.03,d*3,.01,8);for(let m of v)m.x+=f;l.tube(null,v,.014,.008,x(6989898),x(9091162),6);for(let m=0;m<Math.round(8*c);m++){let{p}=Lt(v,.12+m*.1);vt(l,se(ie(p.x,p.y,p.z),me(m*Math.PI+d+r()*.4),fe(.7)),r,{L:.42*c,W:.05,a:.7,b:.4,c:x(4889156),curl:1.3,curlPow:1.8,fold:.4,nu:6,nv:2})}if(u>=0){let m=v[8];for(let b=0;b<7;b++)l.tube(ie(m.x,m.y,m.z),an(r,.14*c,.07,b*.9,.05,3),.002,.001,x(14207098),x(15259786),3);let{p}=Lt(v,.5),_=se(ie(p.x,p.y,p.z),me(d*2.5+.8),fe(.5)),y=Me(.4,1,u);l.blob(se(_,ie(0,.08*y,.02)),.028*y,.085*y,x(9091146),u>.6?x(16242762):x(11061338),7,5);for(let b=0;b<3;b++)l.petal(se(_,ie(0,0,.02),me(b*2.1),fe(.1)),{L:.15*y,W:.04,a:.7,b:.5,cup:1.4,cols:[x(9091146),x(11061338),x(14211210)],nu:4,nv:2})}}}}),h({id:"ervilha",name:"Ervilha",lvl:4,price:18,grow:80,gift:13,h:.8,fixedRot:!0,loves:[0,3],info:"Sobe pelos gravetos e enche de vagens.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d/3*we;l.tube(null,[new Ce(Math.cos(f)*.16,0,Math.sin(f)*.16),new Ce(Math.cos(f)*.08,.42,Math.sin(f)*.08),new Ce(0,.85,0)],.006,.005,x(11043930),x(12096618),4);let g=Math.round(22*c),v=[];for(let m=0;m<=g;m++){let p=m/g*c,_=f+p*7;v.push(new Ce(Math.cos(f)*.16*(1-p)+Math.cos(_)*.025,p*.85,Math.sin(f)*.16*(1-p)+Math.sin(_)*.025))}l.tube(null,v,.003,.002,x(6989904),x(8042592),3);for(let m=2;m<g;m+=1){let p=v[m],_=new Ce(r.range(-1,1),r.range(0,.6),r.range(-1,1)).normalize();vt(l,xt(p,_),r,{L:.045,W:.03,c:x(5941322),a:.9,b:.5}),u>=0&&m%3===0&&(u<.5?St(l,xt(p.clone().add(_.clone().multiplyScalar(.03)),_),r,e.small5(Mn,Mn,x(15269840)),u*2,1):l.blob(se(ie(p.x+_.x*.03,p.y-.03,p.z+_.z*.03),yt(r.range(-.3,.3))),.008,.034,x(6991946),x(9095258),5,4))}}}}),h({id:"pimentao",name:"Piment\xE3o",lvl:5,price:22,grow:90,gift:16,spots:["veg","pot"],h:.5,loves:[1],info:"Verde, amarelo ou vermelho, conforme a paci\xEAncia.",build:(l,r,c,u)=>{ft(l,r,{R:.2,H:.42,branches:9,heads:0,splay:.6,fill:26,leaf:{n:8,L:.08,W:.045,c:x(3113016)}},c,-1),u>=0&&$a(l,r,Math.round(6*c),.19*c,.36*c,{r:.034,tall:1.5,c:r.pick([x(14690334),x(16238622),x(15888410)]),green:x(4889146),ripe:u,y:.04})}}),h({id:"pimenta",name:"Pimenta",lvl:5,price:22,grow:90,gift:16,spots:["veg","pot","window"],h:.4,loves:[1],info:"Pequena no tamanho, brava no tempero.",build:(l,r,c,u)=>{ft(l,r,{R:.17,H:.34,branches:10,heads:0,splay:.7,fill:22,leaf:{n:9,L:.05,W:.022,c:x(3113016)}},c,-1),u>=0&&$a(l,r,Math.round(18*c),.17*c,.34*c,{r:.009,tall:4,c:x(14687774),green:x(5941306),ripe:u,y:.06})}}),h({id:"repolho",name:"Repolho",lvl:5,price:22,grow:95,gift:16,h:.26,foliage:!0,loves:[2,3],info:"Uma bola de folhas bem apertadinhas.",build:(l,r,c)=>{l.blob(ie(0,.085*c,0),.085*c,.08*c,x(13164712),x(11063432),10,7),St(l,ie(0,.01,0),r,{layers:[{n:12,golden:!0,L:[.13,.2],W:[.14,.2],a:1.2,b:.4,tilt:[.3,1.2],tiltC:[.3,1.2],curl:[-.9,-.1],curlC:[-.9,-.1],cup:[1.2,.5],ruffle:.15,rf:3,r:[.01,.02],y:[.01,0],cols:[x(13164712),x(8042616),x(5937776)],nu:5,nv:4,closedScale:1,vein:.3}]},1,c)}}),h({id:"abobrinha",name:"Abobrinha",lvl:5,price:22,grow:90,gift:16,h:.4,loves:[1],info:"Flor amarela que vira legume.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+4*c);d++){let f=d*2.4,g=.3*c*r.range(.7,1.1),v=wt(new Ce(0,0,0),new Ce(Math.cos(f)*g*.4,g*.8,Math.sin(f)*g*.4),new Ce(Math.cos(f)*g,g*.75,Math.sin(f)*g),5);l.tube(null,v,.006,.004,x(8040544),x(8040544),5),vt(l,se(ie(v[5].x,v[5].y,v[5].z),me(-f+Math.PI/2),fe(1.15)),r,{L:.17*c,W:.17*c,a:.85,b:.35,c:x(4164160),tip:x(12112032),tipMix:.2,ruffle:.2,rf:5,nu:4,nv:4})}if(u>=0)for(let d=0;d<3;d++){let f=d*2.1+.5;u<.6?St(l,se(ie(Math.cos(f)*.08,.05,Math.sin(f)*.08),me(f),fe(.5)),r,qa(x(15905306),x(16373834),null,{L:.05,W:.04}),u*1.6,1):l.blob(se(ie(Math.cos(f)*.12*c,.03,Math.sin(f)*.12*c),me(-f),yt(Math.PI/2)),.026*c,.1*c,x(4164154),x(5939272),7,5,x(9091168))}}});let o=(l,r,c,u,d)=>{for(let f=0;f<Math.round(4+3*c);f++){let g=f*2.4+r()*.4,v=.42*c*r.range(.7,1.1),m=[];for(let p=0;p<=8;p++){let _=p/8;m.push(new Ce(Math.cos(g+Math.sin(_*4+f)*.4)*v*_,.015+Math.sin(_*6)*.012,Math.sin(g+Math.sin(_*4+f)*.4)*v*_))}l.tube(null,m,.006,.003,x(6987856),x(8040544),4);for(let p=2;p<=8;p+=2){let _=m[p],y=r()*6;l.tube(ie(_.x,_.y,_.z),[new Ce(0,0,0),new Ce(0,.07*c,0)],.003,.003,x(8040544),x(8040544),3),vt(l,se(ie(_.x,_.y+.07*c,_.z),me(y),fe(1.25)),r,{L:.13*c,W:.14*c,a:.85,b:.35,c:d.leaf,ruffle:.2,rf:5,nu:4,nv:4})}}if(u>=0)for(let f=0;f<d.n;f++){let g=f*2.6+.9,v=(.12+f*.1)*c,m=Me(.3,1,u);d.fruit(se(ie(Math.cos(g)*v,d.r*m*.8,Math.sin(g)*v),me(r()*6)),m)}};h({id:"abobora",name:"Ab\xF3bora",lvl:6,price:28,grow:110,gift:20,h:.3,loves:[2],season:2,info:"S\xF3 no outono: rama comprida e moranga gorda.",build:(l,r,c,u)=>o(l,r,c,u,{leaf:x(4164160),n:2,r:.1,fruit:(d,f)=>{let g=[];for(let v=0;v<=8;v++){let m=v/8;g.push([Math.sin(m*Math.PI)**.6*.105*f,(m-.5)*.15*f])}l.lathe(d,g,x(14184474),x(16226858),24,null,0,8),l.tube(se(d,ie(0,.075*f,0)),[new Ce(0,0,0),new Ce(.01,.03,0)],.008,.006,x(6982202),x(8034890),5)}})}),h({id:"brocolis",name:"Br\xF3colis",lvl:6,price:26,grow:100,gift:19,h:.36,loves:[2,3],info:"Uma arvorezinha que vai para a panela.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+4*c);d++)vt(l,se(ie(0,.02,0),me(d*2.4),fe(r.range(.6,1.2))),r,{L:.26*c,W:.1*c,a:1,b:.5,c:x(4885104),tip:x(10141864),ruffle:.25,rf:4,nu:5,nv:3,curl:.5,vein:.4});if(l.tube(null,[new Ce(0,0,0),new Ce(0,.12*c,0)],.016,.014,x(9091192),x(9091192),6),u>=0)for(let d=0;d<22;d++){let f=1-(d+.5)/22*1.1,g=Math.sqrt(Math.max(0,1-f*f)),v=d*2.4,m=.07*c*Me(.4,1,u);l.blob(ie(Math.cos(v)*g*m,.15*c+f*m*.6,Math.sin(v)*g*m),.026*c*Me(.5,1,u),.022*c,x(3107380),x(4885060),6,4)}}}),h({id:"berinjela",name:"Berinjela",lvl:7,price:30,grow:110,gift:22,spots:["veg","pot"],h:.55,loves:[1],info:"Roxo brilhante entre flores lilases.",build:(l,r,c,u)=>{ft(l,r,{R:.22,H:.46,branches:9,heads:u>=0&&u<.6?6:0,splay:.65,fill:24,stemC:x(6969978),leaf:{n:8,L:.1,W:.065,c:x(4885080),tip:x(9075360),tipMix:.15},head:qa(x(10124e3),x(13152500),null,{L:.022,W:.02})},c,u),u>=.6&&$a(l,r,Math.round(5*c),.2*c,.34*c,{r:.034,tall:2.3,c:x(3807826),green:x(6965898),ripe:u,y:.03})}}),h({id:"couve_flor",name:"Couve-flor",lvl:7,price:30,grow:110,gift:22,h:.34,loves:[3],season:3,info:"S\xF3 no inverno: uma nuvem branca na horta.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(7+4*c);d++)vt(l,se(ie(0,.02,0),me(d*2.4),fe(r.range(.45,1.05))),r,{L:.24*c,W:.11*c,a:1,b:.5,c:x(4885088),tip:x(11061408),ruffle:.25,rf:4,nu:5,nv:3,curl:.3,cup:.5,vein:.4});if(u>=0)for(let d=0;d<20;d++){let f=1-(d+.5)/20*1.05,g=Math.sqrt(Math.max(0,1-f*f)),v=d*2.4,m=.075*c*Me(.4,1,u);l.blob(ie(Math.cos(v)*g*m,.07*c+f*m*.55,Math.sin(v)*g*m),.028*c*Me(.5,1,u),.024*c,x(15261896),x(16512746),6,4)}}}),h({id:"melancia",name:"Melancia",lvl:8,price:36,grow:125,gift:26,h:.32,loves:[1],season:1,info:"S\xF3 no ver\xE3o: listrada por fora, festa por dentro.",build:(l,r,c,u)=>o(l,r,c,u,{leaf:x(4886608),n:2,r:.11,fruit:(d,f)=>{let g=l.n,v=12,m=7,p=new de;for(let _=0;_<=m;_++){let y=_/m*Math.PI,b=-Math.cos(y),T=Math.sin(y);for(let A=0;A<=v;A++){let P=A/v*we;p.set(A%2?2779700:6991946),l.vert(Math.cos(P)*T*.105*f,b*.1*f,Math.sin(P)*T*.135*f,p,d)}}l.quadGrid(g,m,v,!1)}})})}function Sf(i,e){let t=o=>i({spots:["bed","pot"],rare:!0,...o}),n={...e.sunflower,layers:e.sunflower.layers.map(o=>({...o,cols:[x(8002068),x(12070942),x(15235114)]}))},s=(o,l,r)=>({sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[o,l,r],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[o,l,r],nu:4,nv:2}],center:{...Oc,r:.016,h:.009}}),a=(o,l,r)=>(c,u,d,f)=>ft(c,u,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:x(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:x(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:e.rose(x(o),x(l),x(r)),headK:1.25,headUp:.5},d,f);t({id:"margarida_rosa",name:"Margarida-rosa",hybrid:["margarida","amor_perfeito"],lvl:2,price:20,grow:55,gift:14,h:.4,spots:["bed","pot","window"],loves:[0],info:"A margarida ficou corada de tanto olhar o amor-perfeito.",build:(o,l,r,c)=>qt(o,l,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:s(x(15227546),x(16222904),x(16564442))},r,c)}),t({id:"tulipa_rajada",name:"Tulipa rajada",hybrid:["tulipa_vermelha","tulipa_amarela"],lvl:2,price:26,grow:70,gift:18,h:.45,spots:["bed","pot","window"],loves:[0],info:"Chamas vermelhas lambendo o amarelo.",build:(o,l,r,c)=>qt(o,l,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:x(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:x(6265450),r:.02},head:e.tulip(x(16242762),x(15216670),x(16506954))},r,c)}),t({id:"lavanda_branca",name:"Lavanda-branca",hybrid:["lavanda","margarida"],lvl:3,price:28,grow:80,gift:20,h:.55,loves:[1],info:"O perfume \xE9 o mesmo, a cor \xE9 de nuvem.",build:(o,l,r,c)=>{Sn(o,l,{n:Math.round(40*r),L:.16*r,W:.012,c:x(9086348),tip:x(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),yn(o,l,{stems:[16,20],H:.5,lean:.4,stemC:x(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[x(16052479),Mn],bud:x(12108984)},r,c)}}),t({id:"amor_perfeito_azul",name:"Amor-perfeito-azul",hybrid:["amor_perfeito","miosotis"],lvl:3,price:28,grow:65,gift:20,h:.2,spots:["bed","pot","window","hang"],loves:[3,0],info:"Carinhas cor de c\xE9u de inverno.",build:(o,l,r,c)=>ft(o,l,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:x(4164159),a:.9,b:.6,tilt:1.1},head:e.pansy(x(3828448),x(10141944),x(1319002)),headK:1.15},r,c)}),t({id:"cosmos_chocolate",name:"Cosmos-chocolate",hybrid:["cosmos","papoula"],lvl:5,price:40,grow:75,gift:28,h:.65,loves:[1,2],info:"Vinho escuro, com cheirinho de cacau.",build:(o,l,r,c)=>qt(o,l,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:x(5937736),fold:0},head:e.cosmos(x(5903392),x(9054772)),headTilt:.35},r,c)}),t({id:"girassol_rubro",name:"Girassol-rubro",hybrid:["girassol","papoula"],lvl:5,price:44,grow:110,gift:31,spots:["bed"],h:1.6,fixedRot:!0,loves:[1],info:"Um p\xF4r do sol inteiro numa flor.",build:(o,l,r,c)=>qt(o,l,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:x(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:x(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:n,headTilt:1.15},r,c)}),t({id:"rosa_mesclada",name:"Rosa mesclada",hybrid:["rosa_vermelha","rosa_branca"],lvl:7,price:60,grow:130,gift:42,h:.75,loves:[0,1],info:"Branca por dentro, com as pontas beijadas de vermelho.",build:a(16446186,16643824,14692426)}),t({id:"rosa_azul",name:"Rosa azul",hybrid:["rosa_branca","lavanda"],lvl:7,price:70,grow:130,gift:50,h:.75,loves:[0,1],info:"A flor que diziam ser imposs\xEDvel.",build:a(4872904,8030952,12109048)}),t({id:"lirio_tigre",name:"L\xEDrio-tigre",hybrid:["lirio","zinia"],lvl:6,price:54,grow:120,gift:38,h:.8,loves:[1],info:"Laranja vivo, recurvado como uma coroa.",build:(o,l,r,c)=>qt(o,l,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:x(4164164),t0:.08,t1:.82,taper:.5},head:e.lily(x(15888410),x(16226874),x(9054732)),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},r,c)}),t({id:"hortensia_lilas",name:"Hort\xEAnsia lil\xE1s",hybrid:["hortensia_azul","hortensia_rosa"],lvl:8,price:66,grow:150,gift:46,h:.7,loves:[1],info:"Nem azul nem rosa: as duas se abra\xE7aram.",build:(o,l,r,c)=>ft(o,l,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:x(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:[11040992,12886256,10119896,14205176].map(x),squash:.75,cover:.35}},headUp:.6},r,c)}),t({id:"dalia_negra",name:"D\xE1lia-negra",hybrid:["dalia","rosa_vermelha"],lvl:7,price:64,grow:130,gift:45,h:.7,loves:[1,2],info:"Bord\xF4 t\xE3o fundo que parece veludo.",build:(o,l,r,c)=>ft(o,l,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:x(3103290),tilt:1.1},head:e.dahlia(x(3803672),x(8002094)),headK:1.5,headUp:.35},r,c)}),t({id:"peonia_coral",name:"Pe\xF4nia coral",hybrid:["peonia","rosa_pessego"],lvl:10,price:80,grow:160,gift:56,h:.7,loves:[0],info:"Abre coral e desbota para creme, dia ap\xF3s dia.",build:(o,l,r,c)=>ft(o,l,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:x(3108410),tilt:1.1},head:e.peony(x(15888474),x(16498848)),headK:1.45,headUp:.45},r,c)});let h=o=>i({spots:["veg"],veg:!0,rare:!0,...o});h({id:"cenoura_roxa",name:"Cenoura roxa",hybrid:["cenoura","beterraba"],lvl:4,price:24,grow:60,gift:17,h:.3,loves:[2,3],info:"Como eram as cenouras de antigamente.",build:(o,l,r,c)=>{for(let u=0;u<3;u++){let d=u*2.1+l(),f=u?.085:0,g=Math.cos(d)*f,v=Math.sin(d)*f;for(let m=0;m<7;m++)vt(o,se(ie(g,.01,v),me(m*.9+l()),fe(l.range(.25,.8))),l,{L:.22*r,W:.03,c:x(4885072),tip:x(9067146),tipMix:.2,ruffle:.4,rf:6,nv:3});c>0&&o.lathe(ie(g,-.01,v),[[.012,0],[.02*r*Me(.5,1,c),.028],[.012,.04]],x(5906042),x(8010394),8)}}}),h({id:"tomate_amarelo",name:"Tomate-amarelo",hybrid:["tomate","pimentao"],lvl:5,price:34,grow:80,gift:24,spots:["veg","pot"],h:.7,loves:[1],info:"Docinho, parece um cacho de s\xF3is.",build:(o,l,r,c)=>{o.tube(null,[new Ce(.02,0,0),new Ce(.02,.4*r,0),new Ce(.02,.8*r,0)],.008,.008,x(11043930),x(12096618),5),ft(o,l,{R:.2,H:.62,branches:9,heads:0,splay:.5,fill:30,stemC:x(5937736),leaf:{n:9,L:.075,W:.04,c:x(3836476),ruffle:.3,rf:4,nv:3}},r,-1),c>=0&&$a(o,l,Math.round(14*r),.2*r,.55*r,{r:.024,tall:1.2,c:x(16238622),green:x(9091146),ripe:c,y:.08})}}),h({id:"morango_branco",name:"Morango-branco",hybrid:["morango","alface"],lvl:4,price:30,grow:70,gift:21,spots:["veg","pot","hang","window"],h:.2,loves:[0,3],info:"Branquinho com sementes vermelhas e gosto de abacaxi.",build:(o,l,r,c)=>{for(let u=0;u<Math.round(8+6*r);u++){let d=u*2.4,f=.14*r*l.range(.6,1.1),g=wt(new Ce(0,0,0),new Ce(Math.cos(d)*f*.3,f*.8,Math.sin(d)*f*.3),new Ce(Math.cos(d)*f,f*.8,Math.sin(d)*f),4);o.tube(null,g,.002,.0015,x(8040544),x(8040544),3),Zs(o,se(ie(g[4].x,g[4].y,g[4].z),me(-d+Math.PI/2),fe(1.1)),l,{n:3,L:.05,W:.042,c:x(4889160),spread:2.2,a:1.1,b:.45,sideShrink:.1})}if(c>=0)for(let u=0;u<7;u++){let d=u*2.4+1,f=l.range(.07,.17)*r,g=Math.cos(d)*f,v=Math.sin(d)*f;o.lathe(se(ie(g,.03*r,v),fe(Math.PI)),[[.004,-.004],[.017,.004],[.014,.02],[.002,.032]],x(16774380),x(16507096),7)}}})}var Bc={margarida:[0],tagetes:[1,2],tulipa_vermelha:[0],tulipa_amarela:[0],tulipa_rosa:[0],tulipa_roxa:[0],amor_perfeito:[3,0],lavanda:[1],petunia:[1],suculenta:[1],geranio:[0,1],samambaia:[1],cosmos:[1,2],girassol:[1],narciso:[0,3],manjericao:[1],cacto:[1],hera:[3],papoula:[0],zinia:[1],rosa_vermelha:[0,1],rosa_rosa:[0,1],rosa_branca:[0,1],rosa_amarela:[0,1],rosa_pessego:[0,1],lirio:[1],costela:[1],hortensia_azul:[1],hortensia_rosa:[1],dalia:[1,2],bromelia:[1],peonia:[0],delfinio:[1],dedaleira:[0],hibisco:[1],copo_de_leite:[0,3],azaleia:[3,0],orquidea:[3],camelia:[3],ninfeia:[1],lotus:[1],cerejeira:[0],limoeiro:[3],ipe_amarelo:[3],laranjeira:[3],jacaranda:[0],rosa_trepadeira:[0,1],glicinia:[0],primavera:[1],jasmim:[1],alecrim:[0,1]};var kt=O,Bt=x(16777215),Ya={type:"dome",r:.012,h:.007,cols:[x(14258191),x(16107048),x(16374869)]},Et={daisy:{sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[x(15855325),Bt,Bt],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[x(15657691),Bt,Bt],nu:4,nv:2}],center:{...Ya,r:.016,h:.009}},tulip:(i,e,t)=>({layers:[{n:3,L:.075,W:.058,a:1.05,b:.6,tilt:.42,tiltC:.3,curl:-.6,curlC:-.78,cup:.95,r:.006,cols:[i,e,t],closedScale:.7,vein:.2},{n:3,L:.072,W:.056,a:1.05,b:.6,tilt:.34,tiltC:.25,curl:-.58,curlC:-.75,cup:.95,r:.004,cols:[i,e,t],closedScale:.7,vein:.2}]}),sunflower:{sepals:{n:13,L:.05,W:.03,tilt:1.5},layers:[{n:21,L:.115,W:.034,a:.8,b:.6,tilt:1.45,tiltC:.4,curl:.25,cup:.6,r:.07,cols:[x(15243788),x(16302620),x(16767294)],nu:4,nv:2,tj:.1},{n:21,L:.1,W:.032,a:.8,b:.6,tilt:1.3,tiltC:.3,curl:.2,cup:.6,r:.066,cols:[x(15243788),x(16103701),x(16766266)],nu:4,nv:2,tj:.1}],center:{type:"dome",r:.078,h:.022,y:.004,cols:[x(8014356),x(3809800),x(7035422)],seg:16}},rose:(i,e,t)=>({sepals:{n:5,L:.03,W:.011},layers:[{n:24,golden:!0,L:[.024,.055],W:[.024,.062],a:1.35,b:.48,tilt:[.04,1.2],tiltC:[.02,.22],curl:[-.6,.85],curlC:[-.7,-.5],cup:[1.4,.45],cupC:1.2,r:[.001,.009],y:[.014,0],cols:[st(i,.8),i,et(i,t,.5)],cols2:[st(e,.9),e,t],closedScale:.6,vein:.06}]}),peony:(i,e)=>({sepals:{n:5,L:.03,W:.02},layers:[{n:38,golden:!0,L:[.026,.07],W:[.026,.07],a:1.4,b:.42,tilt:[.08,1.3],tiltC:[.02,.2],curl:[-.7,.25],curlC:-.8,cup:[1.3,.6],ruffle:.22,rf:3,r:[.001,.01],y:[.02,0],cols:[i,et(i,e,.4),e],cols2:[et(i,e,.5),e,et(e,Bt,.5)],closedScale:.55}]}),dahlia:(i,e)=>({sepals:{n:8,L:.02,W:.01},layers:[{n:58,golden:!0,L:[.018,.062],W:[.011,.024],a:.95,b:.85,tilt:[.06,1.55],tiltC:[.02,.3],curl:[-.5,.15],curlC:-.5,cup:[1.6,.9],r:[.001,.006],y:[.016,-.004],cols:[st(i,.85),i,e],cols2:[i,et(i,e,.5),et(e,Bt,.3)],nu:4,nv:2,closedScale:.5}]}),marigold:(i,e)=>({sepals:{n:6,L:.018,W:.012},layers:[{n:34,golden:!0,L:[.012,.032],W:[.014,.032],a:1.5,b:.4,tilt:[.05,1.35],tiltC:[.02,.2],curl:[-.4,.3],cup:[1,.3],ruffle:.4,rf:3,r:[.001,.006],y:[.012,0],cols:[st(i,.85),i,e],nu:4,nv:3,closedScale:.5}]}),zinnia:(i,e)=>({sepals:{n:8,L:.014,W:.01},layers:[{n:14,L:.042,W:.02,a:1,b:.5,tilt:1.45,tiltC:.2,curl:.15,cup:.4,cols:[st(i,.85),i,e],nu:4,nv:2},{n:12,L:.032,W:.018,a:1,b:.5,tilt:1.25,tiltC:.15,curl:.1,cup:.4,y:.003,cols:[st(i,.85),i,e],nu:4,nv:2},{n:9,L:.022,W:.014,a:1,b:.5,tilt:1,tiltC:.1,curl:.1,cup:.5,y:.006,cols:[i,i,e],nu:3,nv:2}],center:{...Ya,r:.009,h:.008,y:.008}}),cosmos:(i,e)=>({sepals:{n:8,L:.012,W:.005},layers:[{n:8,L:.048,W:.032,a:1.5,b:.5,tilt:1.35,tiltC:.2,curl:.1,cup:.35,notch:.12,ruffle:.08,rf:3,cols:[st(i,.8),i,e],vein:.2}],center:{...Ya,r:.009,h:.006}}),poppy:{layers:[{n:4,L:.06,W:.078,a:1.5,b:.42,tilt:1,tiltC:.15,curl:-.35,curlC:-.7,cup:.7,ruffle:.28,rf:2.5,cols:[x(1838354),x(14428696),x(15747622)],closedScale:.5},{n:2,L:.055,W:.07,a:1.5,b:.42,tilt:.8,tiltC:.1,curl:-.4,curlC:-.7,cup:.8,ruffle:.28,rf:2.5,cols:[x(1838354),x(14166042),x(15615012)],closedScale:.5}],center:{type:"dome",r:.01,h:.012,y:.006,cols:[x(5661498),x(7306568),x(4015398)],seg:8,stamens:{n:16,len:.016,spread:.9,c:x(2759714),tip:x(1708566),tipR:.0028}}},pansy:(i,e,t)=>({layers:[{n:2,L:.036,W:.046,a:1.5,b:.4,tilt:1.3,tiltC:.3,cup:.15,azList:[-.55,.55],azStep:0,jit:0,cols:[st(i,.7),i,e],vein:.25},{n:3,L:.036,W:.048,a:1.5,b:.4,tilt:1.42,tiltC:.3,cup:.15,azList:[-1.9,1.9,Math.PI],jit:0,cols:[t,et(t,i,.75),e],vein:.25}],center:{...Ya,r:.005,h:.004}}),lily:(i,e,t)=>({layers:[{n:3,L:.095,W:.036,a:.9,b:.7,tilt:.78,tiltC:.12,curl:1.4,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75},{n:3,L:.09,W:.03,a:.9,b:.7,tilt:.85,tiltC:.1,curl:1.5,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75}],center:{stamens:{n:6,len:.065,spread:.45,c:x(13623456),tip:x(11883802),tipR:.005}}}),hibiscus:(i,e,t)=>({sepals:{n:5,L:.025,W:.012},layers:[{n:5,L:.075,W:.08,a:1.4,b:.42,tilt:1.2,tiltC:.12,curl:.35,curlC:-.5,cup:.3,ruffle:.18,rf:3,twist:.3,cols:[t,i,e],vein:.22,closedScale:.6}],center:{type:"column",L:.075,cols:[i,x(13637688)],dots:x(16241226)}}),daffodil:{layers:[{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.42,tiltC:.3,curl:.1,cup:.35,cols:[x(15980878),x(16508530),x(16774054)]},{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.5,tiltC:.3,curl:.1,cup:.35,cols:[x(15980878),x(16508530),x(16774054)]}],center:{type:"trumpet",L:.032,r0:.01,r1:.019,cols:[x(15905308),x(16091666)],ruffle:.12,rf:7}},azalea:(i,e)=>({layers:[{n:5,L:.03,W:.026,a:1.3,b:.5,tilt:1.05,tiltC:.15,curl:.3,cup:.4,ruffle:.15,cols:[st(i,.75),i,e],nu:3,nv:2}],center:{stamens:{n:5,len:.028,spread:.3,c:e,tip:x(8006218),tipR:.0025}}}),camellia:(i,e)=>({sepals:{n:5,L:.02,W:.014},layers:[{n:26,golden:!0,L:[.018,.048],W:[.02,.05],a:1.4,b:.45,tilt:[.08,1.35],tiltC:[.02,.2],curl:[-.5,.2],cup:[1.2,.35],r:[.001,.007],y:[.012,0],cols:[st(i,.9),i,e],nu:4,nv:3,closedScale:.55}],center:{...Ya,r:.005,h:.006,y:.012}}),waterlily:(i,e)=>({layers:[{n:26,golden:!0,L:[.03,.075],W:[.012,.03],a:.9,b:.75,tilt:[.25,1.3],tiltC:[.05,.3],curl:[-.3,-.2],cup:[1.2,.8],r:[.006,.012],y:[.01,0],cols:[et(i,Bt,.3),i,e],cols2:[Bt,et(i,Bt,.6),et(e,Bt,.5)],nu:4,nv:2,closedScale:.6}],center:{type:"dome",r:.012,h:.008,y:.008,cols:[x(15247384),x(16240442),x(16374869)],stamens:{n:14,len:.02,spread:.6,c:x(15909424),tip:x(16242778),tipR:.003}}}),lotus:(i,e)=>({layers:[{n:18,golden:!0,L:[.06,.11],W:[.04,.065],a:1,b:.62,tilt:[.2,1.15],tiltC:[.04,.2],curl:[-.5,-.25],curlC:-.7,cup:[1.3,.9],r:[.012,.02],y:[.012,0],cols:[x(16774894),i,e],cols2:[Bt,et(i,Bt,.4),e],closedScale:.7,vein:.2}],center:{type:"dome",r:.022,h:.016,y:.012,cols:[x(12108874),x(14275146),x(15326818)],stamens:{n:22,len:.028,spread:.85,c:x(15909424),tip:x(16244858),tipR:.003}}}),orchid:(i,e,t)=>({layers:[{n:3,L:.036,W:.02,a:.9,b:.6,tilt:1.4,tiltC:.3,cup:.2,jit:0,azList:[0,2.35,-2.35],azStep:0,cols:[et(i,t,.2),i,e],nu:3,nv:2},{n:2,L:.04,W:.046,a:1.3,b:.42,tilt:1.45,tiltC:.3,cup:.15,jit:0,azList:[-1.2,1.2],azStep:0,cols:[et(i,t,.25),i,e],nu:4,nv:3},{n:1,L:.022,W:.022,a:1.2,b:.5,tilt:1,tiltC:.3,cup:1.2,curl:-.6,jit:0,azList:[Math.PI],cols:[x(16241226),t,st(t,.85)],nu:3,nv:2}],center:{type:"dome",r:.004,h:.005,y:.004,cols:[x(16247200),Bt],seg:5}}),succulent:(i,e,t)=>({layers:[{n:34,golden:!0,L:[.014,.06],W:[.012,.036],a:1.25,b:.7,tilt:[.12,1.28],tiltC:[.12,1.28],curl:[-.5,-.2],curlC:[-.5,-.2],cup:[1,.7],r:[.001,.008],y:[.02,0],cols:[st(i,.8),i,et(e,t,.6)],cols2:[st(i,.75),e,t],nu:4,nv:3,closedScale:1,vein:.05}]}),cactusFlower:(i,e)=>({layers:[{n:12,L:.04,W:.016,a:1,b:.7,tilt:1.15,tiltC:.1,curl:.3,cup:.6,cols:[et(i,Bt,.3),i,e],nu:3,nv:2},{n:10,L:.034,W:.015,a:1,b:.7,tilt:.8,tiltC:.1,curl:.2,cup:.6,cols:[et(i,Bt,.4),i,e],nu:3,nv:2}],center:{stamens:{n:12,len:.018,spread:.5,c:x(16244858),tip:x(16107048),tipR:.003}}}),small5:(i,e,t)=>({layers:[{n:5,L:.02,W:.016,a:1.3,b:.5,tilt:1.3,tiltC:.2,cup:.3,cols:[t??st(i,.8),i,e],nu:3,nv:2}],center:{type:"dome",r:.003,h:.003,cols:[x(16107048),x(16374869)],seg:5}})},U1=(i,e,t)=>(n,s,a,h)=>{let o=Me(.35,1,h),l=1+a.range(-.1,.1),r=[[.004,0],[.006,.02],[.012*o,.034],[.03*o,.043],[.041*o,.045]].map(([u,d])=>[u*l,d*l]),c=new de;n.lathe(s,r,null,null,15,(u,d)=>{u<.5?d.copy(t).lerp(i,u*2):d.copy(i).lerp(e,u*2-1)},.1,5)};var U_={L:.055,W:.034,c:x(3107382),n:3,tilt:1,a:.85,b:.7,fold:.3},js=[],at=i=>js.push(i);at({id:"margarida",name:"Margarida",lvl:1,price:8,grow:50,gift:6,spots:["bed","pot","window"],h:.4,info:"Simples e alegre, cresce rapidinho.",build:(i,e,t,n)=>qt(i,e,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:Et.daisy},t,n)});at({id:"tagetes",name:"Cravo-de-defunto",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.32,info:"Pompons alaranjados que espantam pragas.",build:(i,e,t,n)=>ft(i,e,{R:.15,H:.24,branches:9,heads:8,stalk:.12,leaf:{n:8,L:.05,W:.012,c:x(4160826),tilt:1.1},head:s=>s()<.5?Et.marigold(x(15895052),x(16299578)):Et.marigold(x(16101914),x(16569162)),headK:1.25},t,n)});var N1=[["tulipa_vermelha","Tulipa vermelha",1,12,[15779386,13901864,15222842]],["tulipa_amarela","Tulipa amarela",2,14,[14278762,16240414,16507994]],["tulipa_rosa","Tulipa rosa",3,16,[16445664,15764144,16233676]],["tulipa_roxa","Tulipa roxa",5,22,[15325424,8011688,10117064]]];for(let[i,e,t,n,s]of N1)at({id:i,name:e,lvl:t,price:n,grow:70,gift:Math.round(n*.7),spots:["bed","pot","window"],h:.45,info:"Elegante, de p\xE9talas em ta\xE7a.",build:(a,h,o,l)=>qt(a,h,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:x(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:x(6265450),r:.02},head:Et.tulip(x(s[0]),x(s[1]),x(s[2]))},o,l)});at({id:"amor_perfeito",name:"Amor-perfeito",lvl:2,price:12,grow:65,gift:8,spots:["bed","pot","window","hang"],h:.2,info:"Carinhas coloridas que adoram sombra fresca.",build:(i,e,t,n)=>{let s=[[6959008,11565782,2756410],[16238622,16507754,4856336],[16052479,13219056,4923258],[15229980,16229434,3805704]];ft(i,e,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:x(4164159),a:.9,b:.6,tilt:1.1},head:a=>{let h=a.pick(s);return Et.pansy(x(h[0]),x(h[1]),x(h[2]))},headK:1.15},t,n)}});at({id:"lavanda",name:"Lavanda",lvl:2,price:15,grow:80,gift:10,spots:["bed","pot"],h:.55,info:"Perfumada, atrai abelhas e borboletas.",build:(i,e,t,n)=>{Sn(i,e,{n:Math.round(40*t),L:.16*t,W:.012,c:x(9086348),tip:x(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),yn(i,e,{stems:[16,20],H:.5,lean:.4,stemC:x(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[x(7755970),x(10322662)],bud:x(9410232)},t,n)}});at({id:"petunia",name:"Pet\xFAnia",lvl:2,price:14,grow:70,gift:9,spots:["hang","window","pot"],h:.25,info:"Cai em cascata, perfeita para vasos suspensos.",build:(i,e,t,n)=>{let s=e.pick([[8007600,11034582,2755146],[15220874,16222904,9048136],[16052479,16777215,14272586]]);Gn(i,e,{stems:13,L:.36,up:.45,out:.75,drop:1,leaf:{n:9,L:.04,W:.022,c:x(4887616),a:.9,b:.65},flower:{per:3,make:U1(x(s[0]),x(s[1]),x(s[2]))}},t,n)}});at({id:"suculenta",name:"Suculenta",lvl:2,price:16,grow:90,gift:11,spots:["pot","window"],h:.14,thirst:.4,info:"Roseta carnuda que quase n\xE3o pede \xE1gua.",build:(i,e,t,n)=>{let s=Et.succulent(x(7316876),x(10275508),x(15241380));St(i,ie(0,.01,0),e,s,1,1.6*t);for(let a=0;a<3;a++){let h=a*2.2+e();St(i,se(ie(Math.cos(h)*.1*t,.005,Math.sin(h)*.1*t),fe(.25),me(h)),e,s,1,.6*t)}if(n>.2)for(let a=0;a<2;a++){let h=an(e,.2,.09,a*3+e(),.05,6);i.tube(null,h,.003,.002,x(14191242),x(15245450),4);for(let o=0;o<6;o++){let{p:l,d:r}=Lt(h,.6+o*.08),c=.016*Me(.5,1,n);i.lathe(se(xt(l,r),me(o*2.4),fe(1.9)),[[c*.2,0],[c*.4,c*.5],[c*.5,c]],x(15764058),x(16238666),5)}}}});at({id:"geranio",name:"Ger\xE2nio",lvl:3,price:18,grow:85,gift:12,spots:["window","pot","hang","bed"],h:.34,info:"Cl\xE1ssico das janelas, floresce o ano todo.",build:(i,e,t,n)=>{let s=e.pick([[14688815,15747658],[15755930,16228544],[15921906,16777215]]).map(x);ft(i,e,{R:.17,H:.2,branches:10,heads:5,stalk:.45,headUp:.7,leaf:{n:5,L:.06,W:.07,c:x(4033082),a:1,b:.32,fold:.15,curl:.3,tilt:1.15},head:{ball:{n:16,r:.04,fs:.022,np:5,cols:s,squash:.7,cover:.2}}},t,n)}});at({id:"samambaia",name:"Samambaia",lvl:3,price:20,grow:95,gift:13,spots:["hang","pot"],h:.4,foliage:!0,info:"Folhagem farta que balan\xE7a com a brisa.",build:(i,e,t)=>Gn(i,e,{stems:18,L:.5,up:.55,out:.85,drop:1.1,upFall:.5,stemC:x(5933626),stemR:.0025,frond:{pairs:15,L:.07,wr:.3,c:x(5020220)}},t,-1)});at({id:"cosmos",name:"Cosmos",lvl:3,price:18,grow:75,gift:12,spots:["bed","pot"],h:.65,info:"Leve como o vento, em tons de rosa.",build:(i,e,t,n)=>qt(i,e,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:x(5937736),fold:0},head:s=>s()<.6?Et.cosmos(x(14833820),x(16228556)):Et.cosmos(x(16046312),x(16777215)),headTilt:.35},t,n)});at({id:"girassol",name:"Girassol",lvl:3,price:22,grow:110,gift:16,spots:["bed"],h:1.6,fixedRot:!0,info:"Alto e radiante, sempre olhando o sol.",build:(i,e,t,n)=>qt(i,e,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:x(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:x(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:Et.sunflower,headTilt:1.15},t,n)});at({id:"narciso",name:"Narciso",lvl:4,price:22,grow:80,gift:14,spots:["bed","pot","window"],h:.4,info:"Trombetinhas douradas que anunciam a primavera.",build:(i,e,t,n)=>qt(i,e,{stems:[5,7],H:.36,lean:.14,spread:.08,stemR:.004,basal:{n:12,L:.3,W:.022,a:.7,b:.5,tilt:.25,curl:.5,fold:.3,c:x(5937754)},head:Et.daffodil,headTilt:1.2},t,n)});at({id:"manjericao",name:"Manjeric\xE3o",lvl:4,price:15,grow:60,gift:10,spots:["pot","window","bed"],h:.3,info:"Cheiroso e vi\xE7oso, bom de ter perto da cozinha.",build:(i,e,t,n)=>{ft(i,e,{R:.15,H:.24,branches:10,heads:0,leaf:{n:9,L:.055,W:.04,c:x(5744700),a:.85,b:.6,fold:-.25,cup:.5,curl:.5,tilt:1}},t,-1),n>.2&&yn(i,e,{stems:[6,7],H:.34,lean:.35,florets:10,from:.75,type:"card",fs:.009,cols:[Bt,x(15788287)],stemC:x(6986314)},t,n)}});at({id:"cacto",name:"Cacto florido",lvl:4,price:24,grow:120,gift:17,spots:["pot","window"],h:.3,thirst:.35,info:"Espinhudo por fora, uma flor delicada no topo.",build:(i,e,t,n)=>{let s=(a,h,o,l)=>{let r=[];for(let c=0;c<=8;c++){let u=c/8;r.push([h*Math.pow(Math.sin(Math.PI*(.08+u*.92)*.5+(u>.6?(u-.6)*1.5:0)),.7)*(u>.85?(1-u)/.15*.6+.4:1)*(.75+.25*Math.sin(u*3.1)),o*u])}r.push([.001,o*1.005]),i.lathe(a,r,x(3832388),x(6267738),40,null,.09,10);for(let c=0;c<10;c++)for(let u=1;u<6;u++){let d=u/6.2,f=(c+.25)/10*we,g=r[Math.round(d*8)];i.blob(se(a,ie(Math.cos(f)*g[0]*1.07,g[1],Math.sin(f)*g[0]*1.07)),.006,.006,x(16051922),x(16776168),4,3)}l&&n>.02&&St(i,se(a,ie(0,o*.98,0)),e,Et.cactusFlower(x(15755944),x(16230092)),n,1.5)};s(ie(0,0,0),.085*t,.2*t,!0),t>.5&&(s(se(ie(.085*t,.03,.02),yt(-.5)),.04*t,.09*t,n>.8),s(se(ie(-.07*t,.02,-.04),yt(.6)),.032*t,.07*t,!1))}});at({id:"hera",name:"Hera",lvl:4,price:18,grow:85,gift:12,spots:["hang","window","pot"],h:.3,foliage:!0,info:"Verde pendente que veste qualquer cantinho.",build:(i,e,t)=>Gn(i,e,{stems:12,L:.62,up:.3,out:.6,drop:1.6,upFall:.3,stemC:x(6978106),leaf:{n:15,L:.05,W:.05,c:x(3836488),tip:x(14477472),tipMix:.45,a:.7,b:.5,fold:.15,curl:.2}},t,-1)});at({id:"papoula",name:"Papoula",lvl:5,price:24,grow:85,gift:16,spots:["bed","pot"],h:.5,info:"P\xE9talas de seda vermelha, delicadas ao vento.",build:(i,e,t,n)=>qt(i,e,{stems:[6,8],H:.46,lean:.28,spread:.08,stemR:.0028,stemC:x(8034922),wob:.1,basal:{n:12,L:.16,W:.045,a:.8,b:.9,tilt:.8,c:x(6986360),ruffle:.3,rf:4,nv:4},head:Et.poppy,headTilt:.3,headK:1.1},t,n)});at({id:"zinia",name:"Z\xEDnia",lvl:5,price:22,grow:80,gift:15,spots:["bed","pot","window"],h:.45,info:"Colorida e resistente, a favorita das borboletas.",build:(i,e,t,n)=>{let s=[[14690922,16018074],[15888410,16228922],[16238622,16507754],[14166090,15749226]];qt(i,e,{stems:[6,8],H:.42,lean:.25,spread:.08,stemR:.0035,leaf:{n:5,L:.08,W:.035,tilt:1,c:x(4885052),azStep:Math.PI/2},head:a=>{let h=a.pick(s);return Et.zinnia(x(h[0]),x(h[1]))},headK:1.15},t,n)}});var z1=[["rosa_vermelha","Rosa vermelha",5,30,10096418,13113390,14694984],["rosa_rosa","Rosa cor-de-rosa",6,32,15231638,16095928,16568542],["rosa_branca","Rosa branca",7,34,15918792,16446694,16777215],["rosa_amarela","Rosa amarela",8,36,15774234,16306762,16641696],["rosa_pessego","Rosa p\xEAssego",10,42,15764058,16299146,16638152]];for(let[i,e,t,n,s,a,h]of z1)at({id:i,name:e,lvl:t,price:n,grow:130,gift:Math.round(n*.72),spots:["bed","pot"],h:.75,info:"A rainha do jardim, de perfume inesquec\xEDvel.",build:(o,l,r,c)=>ft(o,l,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:x(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:x(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:Et.rose(x(s),x(a),x(h)),headK:1.25,headUp:.5},r,c)});at({id:"lirio",name:"L\xEDrio",lvl:6,price:34,grow:120,gift:24,spots:["bed","pot"],h:.8,info:"Trombetas recurvadas com perfume doce.",build:(i,e,t,n)=>{let s=e.pick([[16777215,16775408,14282928],[16027569,16573676,16249024],[16225310,16498778,16244874]]);qt(i,e,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:x(4164164),t0:.08,t1:.82,taper:.5},head:Et.lily(x(s[0]),x(s[1]),x(s[2])),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},t,n)}});at({id:"costela",name:"Costela-de-ad\xE3o",lvl:6,price:38,grow:140,gift:26,spots:["pot"],h:.75,foliage:!0,info:"Folhas enormes e recortadas, puro charme tropical.",build:(i,e,t)=>{let n=Math.round(4+5*t);for(let s=0;s<n;s++){let a=s*2.4+e.range(-.2,.2),h=.5*t*e.range(.65,1.1),o=e.range(.3,.75),l=wt(new kt(0,0,0),new kt(Math.cos(a)*h*o*.3,h*.8,Math.sin(a)*h*o*.3),new kt(Math.cos(a)*h*o,h*(1-o*.3),Math.sin(a)*h*o),6);i.tube(null,l,.007,.004,x(4160058),x(5016132),5);let r=l[6],c=.3*t*e.range(.7,1.1),u=x(2779704),d=se(ie(r.x,r.y,r.z),me(-a+Math.PI/2),fe(1+e.range(-.2,.3)));vt(i,d,e,{L:c,W:c*.2,c:u,a:.8,b:.6,fold:.3,curl:.5,nu:5});for(let f=0;f<6;f++){let g=.08+f*.14,v=c*.52*Math.sin(Math.PI*Math.pow(g+.12,.8))+c*.1;for(let m of[-1,1])vt(i,se(d,ie(0,c*g,0),yt(m*(1.15-g*.5)),fe(.12)),e,{L:v,W:c*.115,c:u,a:.5,b:.45,base:.9,fold:.1,curl:.25,nu:3,vein:.15,tipMix:.1})}}}});var F1=[["hortensia_azul","Hort\xEAnsia azul",7,40,[6259430,8824050,10128104,8038640]],["hortensia_rosa","Hort\xEAnsia rosa",8,42,[15760048,16229576,15231648,16367832]]];for(let[i,e,t,n,s]of F1)at({id:i,name:e,lvl:t,price:n,grow:150,gift:Math.round(n*.72),spots:["bed","pot"],h:.7,info:"Buqu\xEAs redondos que mudam de cor com a terra.",build:(a,h,o,l)=>ft(a,h,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:x(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:s.map(x),squash:.75,cover:.35}},headUp:.6},o,l)});at({id:"dalia",name:"D\xE1lia",lvl:7,price:40,grow:130,gift:28,spots:["bed","pot"],h:.7,info:"P\xE9talas em espiral perfeita, obra de geometria.",build:(i,e,t,n)=>{let s=e.pick([[13117502,16091738],[15227546,16503008],[15900698,16507754],[9054858,15245536]]);ft(i,e,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:x(3503674),tilt:1.1},head:Et.dahlia(x(s[0]),x(s[1])),headK:1.5,headUp:.35},t,n)}});at({id:"bromelia",name:"Brom\xE9lia",lvl:8,price:45,grow:150,gift:31,spots:["pot","bed"],h:.5,thirst:.6,info:"Joia das matas brasileiras, com espiga vermelha.",build:(i,e,t,n)=>{if(Sn(i,e,{n:Math.round(10+10*t),L:.34*t,W:.05,a:.55,b:.45,tilt:.75,curl:1,curlPow:2,fold:.5,c:x(4164176),tip:x(9093232),nu:5,base:.5,r:.012}),n>=0){let s=.3*t*Me(.5,1,n);i.tube(null,[new kt(0,0,0),new kt(0,s*.5,0),new kt(0,s,0)],.008,.005,x(13117498),x(15217210),5),St(i,ie(0,s*.45,0),e,{layers:[{n:20,golden:!0,L:[.07,.035],W:[.03,.018],a:.8,b:.7,tilt:[.75,.25],tiltC:[.3,.1],curl:.3,cup:.9,y:[0,s*.6],r:.006,cols:[x(14163514),x(15612484),x(16232490)],closedScale:.6,nu:3,nv:2}]},n,1)}}});at({id:"peonia",name:"Pe\xF4nia",lvl:8,price:48,grow:160,gift:34,spots:["bed","pot"],h:.7,info:"Nuvens de p\xE9talas macias, puro romantismo.",build:(i,e,t,n)=>{let s=e.pick([[15895220,16638186],[16503004,16774902],[14170730,16091816]]);ft(i,e,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:x(3108410),tilt:1.1},leafTip:{n:3,L:.09,W:.035,c:x(3108410),spread:1.6},head:Et.peony(x(s[0]),x(s[1])),headK:1.45,headUp:.45},t,n)}});at({id:"delfinio",name:"Delf\xEDnio",lvl:9,price:46,grow:140,gift:32,spots:["bed"],h:1,info:"Torres de flores azuis, altivas e elegantes.",build:(i,e,t,n)=>yn(i,e,{stems:[4,5],H:.95,lean:.12,stemR:.006,florets:26,from:.42,type:"flower",fs:.03,off:.012,taper:.55,cols:[x(3823320),x(6978288)],bud:x(8034954),eye:x(16052479),basalFan:{count:8,stalk:.22,n:5,L:.11,W:.04,c:x(4164164),spread:2.4},leaf:{n:5,L:.07,W:.03,c:x(4164164)}},t,n)});at({id:"dedaleira",name:"Dedaleira",lvl:9,price:44,grow:140,gift:31,spots:["bed"],h:1,info:"Sininhos pintados em hastes altas.",build:(i,e,t,n)=>yn(i,e,{stems:[3,4],H:.95,lean:.1,stemR:.006,florets:22,from:.4,type:"bell",fs:.05,off:.006,whorl:.55,taper:.5,cols:[x(14178984),x(15769808)],bud:x(10139786),basal:{n:12,L:.2,W:.075,a:.75,b:.65,tilt:1.05,c:x(4885064)},leaf:{n:6,L:.1,W:.04,c:x(4885064)}},t,n)});at({id:"hibisco",name:"Hibisco",lvl:9,price:50,grow:160,gift:35,spots:["bed","pot"],h:.85,info:"Flor tropical de um dia, sempre renovada.",build:(i,e,t,n)=>{let s=e.pick([[14819390,16011370,6949410],[16228394,16502874,13115422],[16026292,16568544,12065354]]);ft(i,e,{R:.34,H:.68,branches:10,heads:6,stalk:.04,fill:44,wood:x(5917236),stemR:.008,leaf:{n:10,L:.085,W:.06,c:x(2318382),a:.8,b:.6,tilt:1.1},head:Et.hibiscus(x(s[0]),x(s[1]),x(s[2])),headK:1.35,headUp:.15},t,n)}});at({id:"copo_de_leite",name:"Copo-de-leite",lvl:10,price:52,grow:150,gift:37,spots:["bed","pot"],h:.65,info:"C\xE1lice branco de linhas puras.",build:(i,e,t,n)=>{for(let s=0;s<Math.round(5+4*t);s++){let a=s*2.4,h=.34*t*e.range(.7,1.1),o=e.range(.25,.6),l=wt(new kt(0,0,0),new kt(Math.cos(a)*h*o*.2,h*.7,Math.sin(a)*h*o*.2),new kt(Math.cos(a)*h*o,h,Math.sin(a)*h*o),5);i.tube(null,l,.006,.004,x(4885066),x(4885066),5);let r=l[5];vt(i,se(ie(r.x,r.y,r.z),me(-a+Math.PI/2),fe(.8+e()*.3)),e,{L:.24*t,W:.13*t,a:.6,b:.7,c:x(3111488),fold:.3,curl:.5,nu:5,nv:4})}if(n>=0)for(let s=0;s<4;s++){let a=an(e,.55*t*e.range(.8,1.05),.08,s*2.1+1,.03,6);i.tube(null,a,.006,.005,x(5937744),x(6989920),5);let h=se(O1(a),fe(.25)),o=Me(.35,1,n),l=new de,r=[[.007,0],[.01,.035],[.02*o,.075],[.04*o,.105],[.052*o,.112]];i.lathe(se(h,Mi(1,1,1.25)),r,null,null,12,(c,u)=>u.copy(x(13625008)).lerp(Bt,Ge(c*2.5,0,1)),0,1),St(i,h,e,{layers:[],center:{type:"spadix",L:.07,r:.007,cols:[x(15906846),x(16373834)]}},n)}}});function O1(i){let{p:e,d:t}=Lt(i,1);return xt(e,t)}at({id:"azaleia",name:"Azaleia",lvl:10,price:50,grow:160,gift:35,spots:["bed","pot"],h:.55,info:"Arbusto que se cobre inteiro de flores.",build:(i,e,t,n)=>{let s=e.pick([[14696586,16222904],[16052468,16777215],[15224890,16226938]]);ft(i,e,{R:.34,H:.42,branches:14,heads:34,fill:70,wood:x(5916212),leaf:{n:12,L:.05,W:.024,c:x(2909748),tilt:1},head:Et.azalea(x(s[0]),x(s[1])),headK:1.5,headUp:.5},t,n)}});at({id:"orquidea",name:"Orqu\xEDdea",lvl:11,price:60,grow:190,gift:44,spots:["pot","hang"],h:.6,thirst:.6,info:"Rara e paciente; cada flor dura semanas.",build:(i,e,t,n)=>{if(Sn(i,e,{n:6,L:.2*t,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:x(3111486),nu:5,base:.6,r:.01}),n<0)return;let s=e.pick([[16777215,16643322,12726394],[15231664,16232662,10099290],[16244874,16643264,12068922]]);for(let a=0;a<2;a++){let h=a*2.6+e(),o=.55*t,l=wt(new kt(0,0,0),new kt(Math.cos(h)*o*.1,o*.95,Math.sin(h)*o*.1),new kt(Math.cos(h)*o*.75,o*.7,Math.sin(h)*o*.75),10);i.tube(null,l,.004,.0025,x(5929540),x(6982218),4);for(let r=0;r<7;r++){let c=.5+r*.075,u=Lt(l,c).p,d=r%2?1:-1,f=new kt(Math.cos(h+d*1.2)*.8,.25,Math.sin(h+d*1.2)*.8).normalize(),g=u.clone().add(f.clone().multiplyScalar(.02));St(i,se(xt(g,f),me(e()*.4)),e,Et.orchid(x(s[0]),x(s[1]),x(s[2])),Ge(n*1.5-r*.07,0,1),1.3)}}}});at({id:"camelia",name:"Cam\xE9lia",lvl:11,price:58,grow:180,gift:42,spots:["bed","pot"],h:.8,info:"Flores de porcelana entre folhas brilhantes.",build:(i,e,t,n)=>{let s=e.pick([[15760030,16365772],[16446704,16777215],[13114942,15223390]]);ft(i,e,{R:.33,H:.66,branches:11,heads:9,fill:50,wood:x(5916212),stemR:.008,leaf:{n:11,L:.075,W:.045,c:x(2054700),a:.85,b:.65,tilt:1.1},head:Et.camellia(x(s[0]),x(s[1])),headK:1.45,headUp:.3},t,n)}});at({id:"ninfeia",name:"Ninfeia",lvl:6,price:36,grow:120,gift:26,spots:["pond"],h:.12,thirst:0,info:"Estrela branca que flutua sobre a \xE1gua.",build:(i,e,t,n)=>kc(i,e,t,n,Et.waterlily(x(16507116),x(16026288)),0,.17,1.25)});at({id:"lotus",name:"L\xF3tus",lvl:10,price:56,grow:170,gift:40,spots:["pond"],h:.5,thirst:0,info:"Nasce da lama e se abre imaculada.",build:(i,e,t,n)=>kc(i,e,t,n,Et.lotus(x(16361668),x(15227540)),.36,.21,1.25)});function kc(i,e,t,n,s,a,h,o){let l=Math.round(3+4*t);for(let r=0;r<l;r++){let c=r*2.4+e(),u=(.12+.3*Math.sqrt((r+.5)/l))*(.6+.4*t),d=h*t*e.range(.7,1.15),f=a&&r%3===0?a*.55*t*e.range(.6,1):0,g=Math.cos(c)*u,v=Math.sin(c)*u;f&&i.tube(null,[new kt(g,-.1,v),new kt(g,f*.5,v),new kt(g,f,v)],.005,.004,x(5933642),x(5933642),4);let m=kn(x(4164168),e,.05),p=se(ie(g,f+.012+r*.0015,v),me(e()*we)),_=14,y=i.n,b=et(m,rt.light,.3);i.vert(0,f?-.02:0,0,st(m,.8),p);for(let T=0;T<=_;T++){let A=.18+T/_*(we-.36),P=d*(1+.04*Math.sin(A*7));i.vert(Math.cos(A)*P,f?.02:.003*Math.sin(A*5),Math.sin(A)*P,T%2?m:b,p)}for(let T=0;T<_;T++)i.idx.push(y,y+T+2,y+T+1)}if(n>=0)for(let r=0;r<Math.round(1+2*t);r++){let c=r*2.2+.7,u=r===0?0:.2,d=a?a*t*(r===0?1:.7):.02;a&&i.tube(null,[new kt(Math.cos(c)*u,-.1,Math.sin(c)*u),new kt(Math.cos(c)*u,d*.5,Math.sin(c)*u+.01),new kt(Math.cos(c)*u,d,Math.sin(c)*u)],.006,.005,x(5933642),x(6986324),4),St(i,se(ie(Math.cos(c)*u,d,Math.sin(c)*u),me(e()*3)),e,s,Ge(n-r*.1,0,1),o*(.75+.25*t))}}var B1=[{id:"cerejeira",name:"Cerejeira",lvl:5,price:80,gift:45,info:"Nuvem cor-de-rosa que chove p\xE9talas.",petal:16368856,P:{H:1.25,R:1.25,trunkR:.085,limbs:7,bark:x(5914424),foliage:.18,leaves:700,leafCols:[x(5937732),x(8042586)],blossom:{n:3200,size:.125,cols:[x(16366802),x(16570598),x(16164034),x(16777215)],buds:[x(15239342),x(14250126)]}}},{id:"limoeiro",name:"Limoeiro",lvl:7,price:95,gift:55,info:"Flores perfumadas e lim\xF5es amarelinhos.",P:{H:.95,R:1,trunkR:.07,limbs:7,bark:x(6969924),foliage:1,leaves:2800,leafSize:.15,leafCols:[x(3111480),x(4164160),x(2452016)],blossom:{n:260,size:.075,cols:[Bt,x(16775400)]},fruit:{n:18,r:.045,tall:1.25,c:x(16241182)}}},{id:"ipe_amarelo",name:"Ip\xEA-amarelo",lvl:9,price:120,gift:70,info:"S\xEDmbolo do Brasil: ouro puro no inverno.",petal:16240414,P:{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:x(6969930),foliage:.06,leaves:900,leafCols:[x(4885050),x(5937732)],blossom:{n:3300,size:.125,cols:[x(16240414),x(16505914),x(15906831),x(16640106)],buds:[x(14264335),x(12107850)]}}},{id:"laranjeira",name:"Laranjeira",lvl:11,price:130,gift:76,info:"Flor de laranjeira e frutos doces.",P:{H:1,R:1.1,trunkR:.075,limbs:7,bark:x(6246204),foliage:1,leaves:2900,leafSize:.15,leafCols:[x(2452016),x(3111480),x(2054698)],blossom:{n:240,size:.075,cols:[Bt]},fruit:{n:20,r:.055,tall:1,c:x(16091678)}}},{id:"jacaranda",name:"Jacarand\xE1",lvl:13,price:160,gift:95,info:"Copa lil\xE1s que tinge o ch\xE3o de roxo.",petal:11045102,P:{H:1.6,R:1.45,trunkR:.09,limbs:8,bark:x(5917248),foliage:.15,leaves:900,leafCols:[x(5937732),x(6989904)],blossom:{n:3500,size:.125,cols:[x(10124008),x(12098290),x(9071320),x(13153526)],buds:[x(8018632)]}}}];for(let i of B1)at({...i,price:i.price,grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,build:(e,t,n,s)=>as(e,t,i.P,n,s)});var k1=Et.rose(x(15227530),x(16091824),x(16568542)),H1=[{id:"rosa_trepadeira",name:"Rosa trepadeira",lvl:6,price:70,gift:42,info:"Cobre o arco de rosas mi\xFAdas.",P:{leaf:{n:60,L:.06,W:.038,c:x(2909748)},flower:{n:46,make:(i,e,t,n)=>{let s=new kt(t.range(-.6,.6),t.range(.1,1),t.range(-1,1)>0?1:-1).normalize();St(i,xt(e.clone().add(s.clone().multiplyScalar(.07)),s),t,k1,n,1.05)}}}},{id:"glicinia",name:"Glic\xEDnia",lvl:8,price:90,gift:54,info:"Cachos lilases que pendem como cortinas.",P:{leaf:{n:70,L:.07,W:.025,c:x(4887620)},flower:{n:30,t0:.5,make:(i,e,t,n)=>{let s=.36*Me(.4,1,n)*t.range(.7,1.15),a=26,h=t.range(-.06,.06),o=t.range(-.1,.1);for(let l=0;l<a;l++){let r=l/a,c=.05*(1-r*.85),u=l*2.4,d=et(x(9071328),x(13482232),r*.6+t()*.3),f=se(ie(e.x+h+Math.cos(u)*c,e.y-.03-r*s,e.z+o+Math.sin(u)*c),me(-u+Math.PI/2),fe(1.9));i.card(f,.034,.042,st(d,.8),et(d,Bt,.25),0,-.3,.95,.3)}}}}},{id:"primavera",name:"Primavera",lvl:10,price:105,gift:64,info:"Buganv\xEDlia: uma explos\xE3o de magenta.",P:{leaf:{n:50,L:.055,W:.035,c:x(3506240)},flower:{n:260,make:(i,e,t,n)=>{let s=kn(t.pick([x(14688394),x(15747744),x(13113464)]),t,.05),a=new kt(t.range(-1,1),t.range(-.2,1),t.range(-1,1)).normalize(),h=e.clone().add(a.clone().multiplyScalar(t.range(.03,.16)));for(let o=0;o<3;o++)i.card(se(xt(h,a),me(o*2.1),fe(.9)),.04*Me(.5,1,n),.05*Me(.5,1,n),st(s,.8),et(s,Bt,.15),0,.62,-.78,.35)}}}},{id:"jasmim",name:"Jasmim",lvl:12,price:115,gift:70,info:"Estrelinhas brancas de perfume noturno.",P:{leaf:{n:80,L:.05,W:.022,c:x(3111482)},flower:{n:110,make:(i,e,t,n)=>{let s=new kt(t.range(-1,1),t.range(-.1,1),t.range(-1,1)).normalize();St(i,xt(e.clone().add(s.clone().multiplyScalar(.06)),s),t,Et.small5(x(16776692),Bt,x(16248e3)),n,1.5)}}}}];for(let i of H1)at({...i,grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,build:(e,t,n,s)=>Ao(e,t,i.P,n,s)});at({id:"alecrim",name:"Alecrim",lvl:3,price:14,grow:65,gift:9,spots:["pot","window","bed"],h:.35,info:"Raminhos arom\xE1ticos com florzinhas azuis.",build:(i,e,t,n)=>yn(i,e,{stems:[16,18],H:.34,lean:.45,stemC:x(6978132),stemR:.003,florets:n>.2?12:2,from:.55,type:"card",fs:.007,off:.006,cols:[x(8030952),x(11188472)],bud:x(8034938),leaf:{n:26,L:.026,W:.004,c:x(5208664),fold:0,tilt:.8,t0:.08,t1:.98,taper:.2},from2:1},t,Math.max(n,0))});wf(at,Et);Sf(at,Et);for(let i of js)!i.loves&&Bc[i.id]&&(i.loves=Bc[i.id]);var V1=[0,9,18,28,40,55,70,85,100,115,130,150,150,150];for(let i of js)i.grow=Math.round(i.grow*V1[Math.min(i.lvl,13)]*(i.tree?2:i.climber?1.5:1)),i.every=300+i.lvl*90;var dt={};js.sort((i,e)=>i.lvl-e.lvl||i.price-e.price);for(let i of js)dt[i.id]=i;var rn=js;var G1=[null,null,[.55,-1],[.85,.12],[1,1]];function Co(i,e,t){let n=dt[i],s=new Kt,a=Xt(e*7919+13);if(t<=1)if(n.tree){s.tube(null,an(a,.3,.02,1,.05,4),.012,.005,rt.wood,rt.stem,5);for(let h=0;h<6;h++)vt(s,se(ie(0,.12+h*.035,0),me(h*2.4),fe(1)),a,{L:.09,W:.04,c:rt.lime})}else if(n.spots[0]==="pond")kc(s,a,.3,-1,null,0,.14,1);else if(n.climber)for(let h of[-.75,.75]){let o=new Kt;Cc(o,a);let l=s.n;for(let r=0;r<o.pos.length;r+=3)s.vert(o.pos[r]+h,o.pos[r+1],o.pos[r+2],new de(o.col[r],o.col[r+1],o.col[r+2]));for(let r of o.idx)s.idx.push(r+l)}else Cc(s,a);else{let[h,o]=G1[t],l=n.tree?[0,0,.45,.78,1][t]:n.climber?[0,0,.4,.8,1][t]:h;n.build(s,a,l,n.foliage?-1:o)}return s.build()}function Lo(i){let e=dt[i];return Qn({sway:e.tree?.04:e.climber?.05:e.id==="cacto"||e.id==="suculenta"?.02:e.h>1?.16:.5,glow:e.tree?.1:.12,phase:Math.random()*6})}var W1=[{id:0,name:"Primavera",icon:"spring",line:"Tudo quer brotar."},{id:1,name:"Ver\xE3o",icon:"summer",line:"Dias longos e quentes."},{id:2,name:"Outono",icon:"autumn",line:"Folhas douradas pelo ch\xE3o."},{id:3,name:"Inverno",icon:"winter",line:"Manh\xE3s frescas e c\xE9u limpo."}],Ks=3,X1=[{n:"Dona L\xFAcia",l:["quer enfeitar a mesa do caf\xE9.","vai receber as netas no domingo.","est\xE1 montando um arranjo para a igreja."]},{n:"Seu Ant\xF4nio",l:["quer fazer uma surpresa para a esposa.","vai visitar um velho amigo.","precisa alegrar a barbearia."]},{n:"Bia",l:["est\xE1 decorando a festa de anivers\xE1rio.","quer um buqu\xEA para a professora.","vai fazer uma coroa de flores."]},{n:"Padaria da pra\xE7a",l:["quer flores frescas no balc\xE3o.","vai enfeitar a vitrine."]},{n:"Tia Zez\xE9",l:["est\xE1 preparando um ch\xE1 da tarde.","quer perfumar a sala.","vai presentear a vizinha nova."]},{n:"Professor Henrique",l:["quer mostrar as flores para a turma.","est\xE1 montando um herb\xE1rio."]},{n:"Marina",l:["vai se casar no s\xE1bado!","quer flores para o ateli\xEA.","est\xE1 fazendo sabonetes artesanais."]},{n:"Seu Joaquim da feira",l:["quer vender buqu\xEAs na barraca.","precisa de enfeite para a banca."]}],fn=(i,e,t,n,s)=>n.map(([a,h],o)=>({id:i+o,name:n.length>1?`${e} ${["I","II","III","IV"][o]}`:e,desc:t.replace("#",a),goal:a,r:h,v:s})),Qs=[...fn("plant","M\xE3os na terra","Plante # mudas",[[10,40],[60,150],[250,500]],i=>i.stats.planted),...fn("water","Regador amigo","Regue # vezes",[[25,40],[200,150],[800,500]],i=>i.stats.watered),...fn("bloom","Jardim em flor","Veja # plantas florirem",[[10,50],[80,200],[400,700]],i=>i.stats.blooms),...fn("gift","Colheita de mimos","Recolha # presentes",[[20,40],[250,200],[1200,700]],i=>i.stats.collected),...fn("album","Colecionadora","Tenha # esp\xE9cies no \xE1lbum",[[5,50],[15,150],[30,400],[45,900]],i=>i.album.length),...fn("order","Querida da vizinhan\xE7a","Entregue # pedidos",[[1,30],[12,200],[50,600],[150,1500]],i=>i.stats.orders||0),...fn("weed","Canteiro limpinho","Arranque # matinhos",[[5,30],[50,180],[200,500]],i=>i.stats.weeds||0),...fn("prune","Tesoura afiada","Fa\xE7a # podas",[[5,30],[50,180],[200,500]],i=>i.stats.prunes||0),...fn("fert","Dedo verde","Use adubo # vezes",[[3,30],[30,200]],i=>i.stats.fert||0),...fn("streak","Visita querida","Abra a caixa de correio em # dias",[[3,60],[7,200],[21,800]],i=>i.daily.streak||0),...fn("zone","Jardim que cresce","Abra # \xE1reas novas",[[2,80],[4,300],[6,1e3]],i=>i.zones.length-1),...fn("decor","Capricho","Tenha # decora\xE7\xF5es",[[2,60],[6,400]],i=>i.decor.length),...fn("beauty","Encanto","Chegue a # de beleza",[[150,60],[600,250],[2e3,900]],(i,e)=>e.beauty()),...fn("hybrid","Jardineira curiosa","Descubra # raridades",[[1,80],[5,400],[14,1500]],i=>(i.hybrids||[]).length),...fn("visit","Amiga dos bichos","Receba # visitantes diferentes",[[3,80],[7,400],[10,1e3]],i=>(i.seen||[]).length),...fn("season","O ano inteiro","Cuide do jardim em # esta\xE7\xF5es",[[2,100],[4,500]],i=>(i.seasonsSeen||[]).length)],Ef=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,Hc=[{coins:30},{adubo:1},{coins:60},{adubo:2},{coins:110},{adubo:3},{coins:260,adubo:2,big:!0}];function Tf(i,{S:e,world:t,fx:n,audio:s,gardener:a,ui:h,addCoins:o,addXp:l,level:r,save:c}){let u={},d=(w,U)=>w+Math.random()*(U-w),f=w=>w[Math.floor(Math.random()*w.length)],g=()=>Math.floor((Date.now()-e.t0)/864e5),v=new URLSearchParams(location.search).get("season");u.season=()=>{let w=v!=null?+v*Ks:g(),U=Math.floor(w/Ks)%4;return{...W1[U],day:w%Ks+1,of:Ks,left:Ks-w%Ks}},u.inSeason=w=>w.loves!=null&&w.loves.includes(u.season().id),u.growMul=(w,U)=>(u.inSeason(U)?1.5:1)*(t.spots[w].type==="green"?2:1),u.giftMul=w=>u.inSeason(w)?1.5:1;let m=rn.filter(w=>w.hybrid);u.afterGift=w=>{let U=e.plants[w],B=t.spots[w];if(!(!U||e.rare[w]))for(let X in e.plants){if(X===String(w))continue;let C=e.plants[X],E=t.spots[X];if(C.sp===U.sp||C.grown<dt[C.sp].grow||E.pos.distanceTo(B.pos)>1.25)continue;let S=m.find(L=>!e.hybrids.includes(L.id)&&L.hybrid.includes(U.sp)&&L.hybrid.includes(C.sp)&&!Object.values(e.rare).includes(L.id));if(S&&Math.random()<.3){e.rare[w]=S.id,h.toast("Uma semente diferente apareceu entre as flores!","good"),s.sfx("bloom",.7,1.3);return}}},u.takeRare=w=>{let U=e.rare[w];delete e.rare[w];let B=dt[U];!B||e.hybrids.includes(U)||(e.hybrids.push(U),l(25),s.sfx("levelup"),n.burst(t.spots[w].pos,[16770688,16751288,11832048,16777215],50,1.4),h.rare(B),u.log(`Descobri uma raridade: ${B.name}.`),c())},u.hybrids=m,u.log=w=>{e.log.push({d:g()+1,t:w}),e.log.length>60&&e.log.shift()};let p=()=>{let w=r(),U=new Set(t.spots.filter(X=>e.zones.includes(X.zone)).map(X=>X.type)),B=u.season().id;return rn.filter(X=>X.lvl<=w&&X.spots.some(C=>U.has(C))&&(X.season==null||X.season===B)&&(!X.hybrid||e.hybrids.includes(X.id)))};u.available=p;let _=()=>{let w=r(),U=p(),B=U.filter(R=>Object.values(e.plants).some(F=>F.sp===R.id));if(!U.length)return null;let X=w<3?1:w<6?Math.random()<.5?1:2:Math.random()<.4?2:Math.random()<.6?3:1,C=[],E=new Set;for(let R=0;R<X;R++){let F=B.length&&Math.random()<.7?B:U,$=f(F.filter(V=>!E.has(V.id)).length?F.filter(V=>!E.has(V.id)):U);E.has($.id)||(E.add($.id),C.push({sp:$.id,n:1+Math.floor(Math.random()*Math.min(4,1.5+w/3))}))}let S=f(X1),L=C.reduce((R,F)=>R+F.n*dt[F.sp].gift,0);return{id:Date.now()+Math.floor(Math.random()*1e3),who:S.n,why:f(S.l),items:C,coins:Math.round(L*2.4+12),xp:C.reduce((R,F)=>R+F.n,0)*5,adubo:Math.random()<.35?1:0}};u.canDeliver=w=>w.items.every(U=>(e.basket[U.sp]||0)>=U.n),u.anyDeliverable=()=>e.orders.some(u.canDeliver),u.deliver=w=>{let U=e.orders.find(B=>B.id===w);if(!U||!u.canDeliver(U))return!1;for(let B of U.items)e.basket[B.sp]-=B.n;return e.orders=e.orders.filter(B=>B!==U),e.stats.orders=(e.stats.orders||0)+1,e.adubo+=U.adubo,o(U.coins),l(U.xp),s.sfx("levelup",.7),a.play("cheer",1.4),n.burst(t.things.orders.pos,[16770688,16751288,16777215,12120224],40,1.4),h.toast(`${U.who} adorou! +${U.coins} moedas${U.adubo?" e 1 adubo":""}`,"good"),u.log(`Entreguei flores para ${U.who}.`),e.orderT=Math.min(e.orderT||1/0,Date.now()+5*6e4),c(),!0},u.dismiss=w=>{e.orders=e.orders.filter(U=>U.id!==w),e.orderT=Date.now()+3*6e4,c()},u.dailyReady=()=>e.daily.last!==Ef(),u.claimDaily=()=>{if(!u.dailyReady())return null;e.daily.streak+=1,e.daily.last=Ef();let w=Hc[(e.daily.streak-1)%7],U=w.coins?Math.round(w.coins*(1+r()*.2)):0;return U&&o(U),w.adubo&&(e.adubo+=w.adubo),s.sfx(w.big?"levelup":"bloom"),n.burst(t.things.mail.pos,[16770688,16751288,10148095],w.big?60:24,1.2),u.log(`Presente do dia ${e.daily.streak}: ${U?U+" moedas":""}${U&&w.adubo?" e ":""}${w.adubo?w.adubo+" adubo":""}.`),c(),{streak:e.daily.streak,coins:U,adubo:w.adubo||0}};let y=d(70,130),b=d(120,200),T=w=>Object.keys(w).length,A=()=>{let w=Object.keys(e.plants).filter(U=>!e.weeds[U]&&["bed","pot","tree","veg"].includes(t.spots[U].type));w.length&&T(e.weeds)<4&&(e.weeds[f(w)]=1)},P=()=>{let w=Object.keys(e.plants).filter(U=>{let B=e.plants[U],X=dt[B.sp];return!e.wilt[U]&&!B.ready&&B.grown>=X.grow&&!X.tree&&!X.foliage&&t.spots[U].type!=="pond"});w.length&&T(e.wilt)<3&&(e.wilt[f(w)]=1)},k=2,M=()=>{for(let w of Qs)if(!e.ach[w.id]&&w.v(e,i)>=w.goal){e.ach[w.id]=1,o(w.r),s.sfx("levelup",.8),h.achievement(w),u.log(`Conquista: ${w.name}.`),c();break}};return u.tick=w=>{if(e.stats.collected>0&&e.orders.length<3&&Date.now()>=(e.orderT||0)){let B=_();B&&(e.orders.push(B),e.orders.length===1&&!e.tips.order&&(e.tips.order=1,h.toast("Chegou um pedido na banquinha de flores!","info"))),e.orderT=Date.now()+12*6e4}y-=w,y<0&&(y=d(150,260),A()),b-=w,b<0&&(b=d(200,320),P()),k-=w,k<0&&(k=1.5,M());let U=u.season();e.seasonsSeen.includes(U.id)||(e.seasonsSeen.push(U.id),e.seasonsSeen.length>1&&(h.toast(`Chegou ${U.id===1||U.id===2||U.id===3?"o":"a"} ${U.name.toLowerCase()}! ${U.line}`,"good"),u.log(`Come\xE7ou ${U.name.toLowerCase()}.`)))},u.init=w=>{for(let U in e.weeds)e.plants[U]||delete e.weeds[U];for(let U in e.wilt)e.plants[U]||delete e.wilt[U];for(let U=0;U<(w>8*3600?3:w>3*3600?2:w>1800?1:0);U++)A();if(w>1800)for(;e.stats.collected>0&&e.orders.length<3;){let U=_();if(!U)break;e.orders.push(U)}},i.sys=u,u}var Vc="jardim-do-sossego-v1",q1=2*3600,Ja=[0,60,180,380,680,1100,1650,2350,3200,4200,5400,6800,8500,10500,13e3,16e3,2e4,25e3],Gc=[{id:"can1",name:"Regador de cobre",price:450,desc:"Rega uma \xE1rea maior de uma s\xF3 vez.",need:null},{id:"can2",name:"Regador dourado",price:1800,desc:"Rega longe e a \xE1gua dura o dobro.",need:"can1"},{id:"sprinkler",name:"Aspersores autom\xE1ticos",price:7500,desc:"O jardim inteiro se rega sozinho.",need:"can2"}],Af=["","Brotinho","Crescendo","Em bot\xE3o","Em flor"],$1=[{t:"Plante sua primeira flor",goal:1,v:i=>i.stats.planted,r:15},{t:"Regue a plantinha para ela brotar",goal:1,v:i=>i.stats.watered,r:10},{t:"Plante 3 flores no canteiro",goal:3,v:(i,e)=>e.count(),r:20},{t:"Veja uma flor desabrochar",goal:1,v:i=>i.stats.blooms,r:25},{t:"Recolha o presente de uma flor",goal:1,v:i=>i.stats.collected,r:20},{t:"Tenha 8 plantas no jardim",goal:8,v:(i,e)=>e.count(),r:30},{t:"Abra a Varanda",goal:1,v:i=>+i.zones.includes(1),r:40},{t:"Plante num vaso suspenso",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="hang"),r:30},{t:"Tenha 3 esp\xE9cies diferentes em flor",goal:3,v:(i,e)=>e.bloomSpecies(),r:40},{t:"Compre uma decora\xE7\xE3o na loja",goal:1,v:i=>i.decor.length,r:40},{t:"Abra os Canteiros do leste",goal:1,v:i=>+i.zones.includes(2),r:60},{t:"Plante uma \xE1rvore",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="tree"),r:60},{t:"Tenha 12 plantas em flor ao mesmo tempo",goal:12,v:(i,e)=>e.blooming(),r:80},{t:"Abra o Laguinho",goal:1,v:i=>+i.zones.includes(3),r:100},{t:"Plante uma ninfeia no lago",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="pond"),r:60},{t:"\xC1lbum: veja 12 esp\xE9cies florirem",goal:12,v:i=>i.album.length,r:120},{t:"Abra a Alameda dos arcos",goal:1,v:i=>+i.zones.includes(4),r:150},{t:"Cubra um arco com uma trepadeira em flor",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="arch"&&t.grown>=dt[t.sp].grow),r:150},{t:"Tenha 30 plantas em flor",goal:30,v:(i,e)=>e.blooming(),r:200},{t:"Abra o Pomar",goal:1,v:i=>+i.zones.includes(5),r:200},{t:"Tenha 3 \xE1rvores em flor",goal:3,v:(i,e)=>e.count((t,n)=>n.type==="tree"&&t.grown>=dt[t.sp].grow),r:250},{t:"Abra o Prado das flores",goal:1,v:i=>+i.zones.includes(6),r:300},{t:"\xC1lbum: veja 30 esp\xE9cies florirem",goal:30,v:i=>i.album.length,r:400},{t:"Tenha 60 plantas em flor",goal:60,v:(i,e)=>e.blooming(),r:600},{t:"Complete o \xE1lbum de flores",goal:rn.length,v:i=>i.album.length,r:1e3}],Za=()=>({v:1,coins:45,xp:0,zones:[0],decor:[],upg:[],plants:{},quest:0,album:[],stats:{planted:0,watered:0,collected:0,blooms:0,orders:0,weeds:0,prunes:0,fert:0},hour:8.6,last:Date.now(),t0:Date.now(),tips:{},basket:{},orders:[],orderT:0,adubo:0,daily:{last:"",streak:0,best:0},weeds:{},wilt:{},ach:{},log:[],hybrids:[],seen:[],seasonsSeen:[],rare:{},paint:{},outfit:{},settings:{music:.6,sfx:.8,quality:"auto",time:"auto"}});function Rf(){let i=e=>Object.assign(Za(),e,{settings:Object.assign(Za().settings,e.settings),stats:Object.assign(Za().stats,e.stats),daily:Object.assign(Za().daily,e.daily)});try{let e=localStorage.getItem(Vc);if(e){let t=JSON.parse(e);if(t&&t.v===1)return i(t)}}catch{}try{let e=window.__SAVE;if(e&&e.v===1)return i(JSON.parse(JSON.stringify(e)))}catch{}return Za()}function Cf({scene:i,world:e,fx:t,audio:n,gardener:s,nav:a,env:h,ui:o,state:l}){let r={state:l,tasks:[],cur:null,time:0,rainT:240+Math.random()*200,raining:0},c=l,u={},d=yf(),f={water:new wn({map:d.water,depthTest:!1,transparent:!0}),gift:new wn({map:d.gift,depthTest:!1,transparent:!0}),weed:new wn({map:d.weed,depthTest:!1,transparent:!0}),prune:new wn({map:d.prune,depthTest:!1,transparent:!0}),seed:new wn({map:d.seed,depthTest:!1,transparent:!0}),order:new wn({map:d.order,depthTest:!1,transparent:!0}),daily:new wn({map:d.daily,depthTest:!1,transparent:!0}),plus:new wn({map:d.plus,transparent:!0,opacity:.85,depthWrite:!1})},g=new de(7032378),v=new de(3811358);r.save=()=>{c.last=Date.now();try{localStorage.setItem(Vc,JSON.stringify(c))}catch{}};let m=()=>r.save();r.reset=()=>{try{localStorage.removeItem(Vc)}catch{}};let p=()=>{let N=1;for(;N<Ja.length&&c.xp>=Ja[N];)N++;return N};r.level=p;let _=N=>c.upg.includes(N),y=()=>q1*(_("can2")?2:1),b=()=>_("can2")?3.3:_("can1")?2.2:1.35,T=N=>{let G=N.grown/dt[N.sp].grow;return G>=1?4:G>=.45?3:G>=.12?2:1};r.count=N=>{let G=0;for(let H in c.plants)(!N||N(c.plants[H],e.spots[H]))&&G++;return G},r.blooming=()=>r.count(N=>N.grown>=dt[N.sp].grow),r.bloomSpecies=()=>{let N=new Set;for(let G in c.plants){let H=c.plants[G];H.grown>=dt[H.sp].grow&&N.add(H.sp)}return N.size},r.beauty=()=>{let N=0;for(let G in c.plants){let H=c.plants[G],D=dt[H.sp];N+=Math.round(D.price*(H.grown>=D.grow?.5:.12))}for(let G of c.decor)N+=Js.find(H=>H.id===G)?.beauty??0;return N};let A=(N,G)=>{let H=new Hs(N);return H.scale.setScalar(G),H.renderOrder=10,H.visible=!1,i.add(H),H};for(let N of e.spots){let G=N.type==="hang"?-.02:N.type==="tree"?.5:N.type==="arch"?1.1:.3;u[N.id]={mesh:null,stage:0,pop:1,droop:0,plus:A(f.plus,N.type==="window"?.2:.3),bubble:A(f.water,.42),top:G},u[N.id].plus.position.copy(N.pos).y+=G,N.type==="arch"&&(u[N.id].plus.position.x-=.75)}let P=N=>{let G=u[N.id],H=c.plants[N.id];if(G.mesh&&(i.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh.material.dispose(),G.mesh=null),!H){G.stage=0;return}let D=dt[H.sp],I=T(H),Z=new Ve(Co(H.sp,H.seed,I),Lo(H.sp));Z.castShadow=!0,Z.receiveShadow=!0,Z.position.copy(N.pos),D.fixedRot||(Z.rotation.y=H.seed*1.7),i.add(Z),G.mesh=Z,G.stage=I,G.h=D.h*N.scale*(D.tree?[0,.15,.5,.8,1][I]:[0,.15,.6,.9,1][I])},k=(()=>{let N=new Kt,G=Xt(91);for(let H=0;H<7;H++)N.petal(se(me(H*.9+G()),fe(G.range(.25,.95))),{L:G.range(.1,.19),W:.035,a:.7,b:.5,fold:.4,curl:.5,ruffle:.25,rf:4,nu:4,nv:2,cols:[x(6195758),x(8826940),x(11979866)]});N.tube(null,[new O(0,0,0),new O(.01,.09,0),new O(.02,.17,.01)],.004,.003,x(8826940),x(10272842),4);for(let H=0;H<9;H++)N.petal(se(ie(.02,.17,.01),me(H*.7),fe(1.2)),{L:.03,W:.012,nu:2,nv:1,cols:[x(15909406),x(16241210),x(16507754)]});return N.build()})(),M=Qn({sway:.6}),w=(N,G)=>{let H=u[N];if(G&&!H.weed){let D=e.spots[N],I=new Ve(k,M);I.castShadow=!0;let Z=N*2.4,oe=D.type==="tree"?.5:D.type==="pot"?.2:.27;I.position.set(D.pos.x+Math.cos(Z)*oe,D.pos.y,D.pos.z+Math.sin(Z)*oe),I.rotation.y=Z,I.scale.setScalar(.01),i.add(I),H.weed=I}else!G&&H.weed&&(i.remove(H.weed),H.weed=null)},U={};for(let N in e.things){let G=e.things[N],H=A(N==="orders"?f.order:f.daily,.5);H.position.set(G.pos.x,G.top+.25,G.pos.z),U[N]=H}let B=(N,G)=>G.type==="green"?0:N.thirst??1,X=(N,G)=>N.season!=null&&G.type!=="green"&&N.season!==r.sys.season().id,C=(N,G)=>{c.coins+=N,G&&o.floatText(G,(N>0?"+":"")+N,"coin"),o.hud()},E=N=>{let G=p();c.xp+=N;let H=p();H>G&&(n.sfx("levelup"),s.play("cheer",1.6),t.burst(s.group.position,[16770688,16751288,10148095,12120224],50),o.levelUp(H,rn.filter(D=>D.lvl>G&&D.lvl<=H))),o.hud()},S=()=>{let N=$1[c.quest];if(!N){o.quest(null);return}let G=Math.min(N.goal,N.v(c,r));if(G>=N.goal){c.quest++,C(N.r),n.sfx("buy"),o.toast(`Miss\xE3o cumprida! +${N.r} moedas`,"good"),S(),m();return}o.quest({text:N.t,val:G,goal:N.goal,reward:N.r})};r.checkQuest=S;let L=(N,G)=>{let H=s.group.position;return a.path(H.x,H.z,N,G)},R=(N,G,H={})=>{r.tasks.some(D=>D.kind===N&&D.spot===G)||r.cur&&r.cur.kind===N&&r.cur.spot===G||r.tasks.length>=8||r.tasks.push({kind:N,spot:G,...H})},F=()=>{for(let N of r.tasks)N.kind==="plant"&&(c.coins+=dt[N.sp].price,N.spot.pending=null);r.tasks.length=0,o.hud()};r.tapGround=(N,G)=>{F(),!(r.cur&&r.cur.phase==="act")&&(r.cur&&r.cur.kind==="plant"&&(c.coins+=dt[r.cur.sp].price,r.cur.spot.pending=null,o.hud()),r.cur={kind:"move",path:L(N,G),phase:"walk"},o.closeCards())},r.tapSpot=N=>{if(!c.zones.includes(N.zone)){r.offerZone(N.zone);return}let G=c.plants[N.id];if(!G){if(N.pending)return;n.sfx("click",.35),o.picker(N,V(N));return}let H=dt[G.sp];G.ready||c.rare[N.id]?(R("collect",N),o.closeCards()):c.wilt[N.id]?(R("prune",N),o.closeCards()):c.weeds[N.id]?(R("weed",N),o.closeCards()):B(H,N)!==0&&G.wet<y()*.4&&!_("sprinkler")?(R("water",N),o.closeCards()):(n.sfx("click",.35),r.showCard(N),R("admire",N))},r.showCard=N=>{c.plants[N.id]&&o.plantCard(N,()=>{let H=c.plants[N.id];if(!H)return null;let D=dt[H.sp];return{sp:D,stage:T(H),grow:Ge(H.grown/D.grow,0,1),water:B(D,N)===0?1:Ge(H.wet/y(),0,1),noWater:B(D,N)===0,green:N.type==="green",gift:H.grown>=D.grow?Ge(H.giftT/D.every,0,1):0,ready:H.ready,left:Math.max(0,D.grow-H.grown),adubo:c.adubo,inSeason:r.sys.inSeason(D),weed:!!c.weeds[N.id]}},{water:()=>R("water",N),remove:()=>R("remove",N),fert:()=>r.fertilize(N)})};let $=(N,G)=>N.spots.includes(G.type)||G.type==="green"&&N.spots.includes("pot"),V=N=>rn.filter(G=>$(G,N)&&(!G.hybrid||c.hybrids.includes(G.id))).map(G=>({sp:G,locked:G.lvl>p(),off:X(G,N),afford:c.coins>=G.price}));r.choose=(N,G)=>{let H=dt[G];return H.lvl>p()?(n.sfx("error"),o.toast(`${H.name} chega no n\xEDvel ${H.lvl}`,"warn"),!1):X(H,N)?(n.sfx("error"),o.toast(`${H.name} s\xF3 nasce ${["na primavera","no ver\xE3o","no outono","no inverno"][H.season]} (ou na estufa)`,"warn"),!1):c.coins<H.price?(n.sfx("error"),o.toast("Faltam moedas. Recolha os presentes das flores!","warn"),!1):c.plants[N.id]||N.pending?!1:(c.coins-=H.price,N.pending=G,o.hud(),n.sfx("buy",.7),R("plant",N,{sp:G}),B(H,N)!==0&&!_("sprinkler")&&R("water",N),!0)},r.offerZone=N=>{let G=ei[N];c.zones.includes(N)||o.zoneOffer(G,c.coins>=G.cost,()=>{if(c.coins<G.cost){n.sfx("error"),o.toast(`Faltam ${G.cost-c.coins} moedas para abrir ${G.name}`,"warn");return}c.coins-=G.cost,c.zones.push(N),e.setZone(N,!0),e.mowZone(N),a.invalidate(),n.sfx("expand");let[H,D]=G.tag;t.burst(new O(H,.3,D),[16770688,12120224,16777215,16762584],70,2.2),o.toast(`${G.name} agora faz parte do seu jardim!`,"good"),o.hud(),E(20+N*10),S(),m(),j(),o.focus(H,D)})},r.buyDecor=N=>{let G=Js.find(H=>H.id===N);if(!(!G||c.decor.includes(N))){if(c.coins<G.price){n.sfx("error"),o.toast("Faltam moedas para esta decora\xE7\xE3o","warn");return}c.coins-=G.price,c.decor.push(N),e.setDecor(N,!0),a.invalidate(),n.sfx("buy"),o.toast(`${G.name} colocado no jardim`,"good"),E(15),o.hud(),S(),m()}},r.buyUpgrade=N=>{let G=Gc.find(H=>H.id===N);if(!(!G||_(N))){if(G.need&&!_(G.need)){n.sfx("error"),o.toast("Compre a melhoria anterior primeiro","warn");return}if(c.coins<G.price){n.sfx("error"),o.toast("Faltam moedas para esta melhoria","warn");return}c.coins-=G.price,c.upg.push(N),n.sfx("levelup"),o.toast(`${G.name}: ${G.desc}`,"good"),o.hud(),m()}};let j=()=>{for(let N of e.spots)u[N.id].plus.visible=c.zones.includes(N.zone)&&!c.plants[N.id]&&!N.pending},q=N=>{let G=b(),H=y(),D=0;for(let I in c.plants){let Z=e.spots[I];if(Z.pos.distanceTo(N.pos)<=G+.01&&Math.abs(Z.pos.y-N.pos.y)<1.2){let oe=c.plants[I];if(B(dt[oe.sp],Z)===0)continue;oe.wet=H,D++,t.splash(Z.pos,5)}}c.stats.watered+=Math.max(1,D),E(1),S()},W=N=>{let G=N.spot;G.pending=null,c.plants[G.id]={sp:N.sp,seed:1+Math.floor(Math.random()*9999),grown:0,wet:0,giftT:0,ready:!1},c.stats.planted++,P(G),u[G.id].pop=0,t.dust(G.pos,12),n.sfx("plant"),E(3),S(),j(),m()},re=N=>{let G=0;for(let H in c.rare){let D=e.spots[H];!D||D.pos.distanceTo(N.pos)>Math.max(1.4,b())+.01||r.sys.takeRare&&r.sys.takeRare(H)}for(let H in c.plants){let D=e.spots[H],I=c.plants[H];if(!I.ready||D.pos.distanceTo(N.pos)>Math.max(1.4,b())+.01)continue;let Z=dt[I.sp],oe=Math.round(Z.gift*r.sys.giftMul(Z));I.ready=!1,I.giftT=0,G+=oe,c.stats.collected++,c.basket[I.sp]=Math.min(99,(c.basket[I.sp]||0)+1);let ae=D.pos.clone();ae.y+=u[H].h*.7+.2,t.sparkle(ae,12),o.floatText(ae,"+"+oe,"coin"),r.sys.afterGift&&r.sys.afterGift(H)}G&&(c.coins+=G,n.sfx("coin",.6),E(Math.ceil(G/3)),o.hud(),S(),m())},be=N=>{if(!c.weeds[N.id])return;delete c.weeds[N.id],c.stats.weeds=(c.stats.weeds||0)+1,t.dust(u[N.id].weed?u[N.id].weed.position:N.pos,10),n.sfx("plant",.7,1.25);let G=N.pos.clone();G.y+=.4,c.coins+=3,o.floatText(G,"+3","coin"),E(2),o.hud()},Te=N=>{let G=c.plants[N.id];if(!G||!c.wilt[N.id])return;delete c.wilt[N.id],c.stats.prunes=(c.stats.prunes||0)+1;let H=dt[G.sp],D=Math.round(H.gift*1.5*r.sys.giftMul(H));G.giftT=0,c.coins+=D,c.basket[G.sp]=Math.min(99,(c.basket[G.sp]||0)+2),c.stats.collected++;let I=N.pos.clone();I.y+=u[N.id].h*.7+.2,t.sparkle(I,18,16765152),o.floatText(I,"+"+D,"coin"),n.sfx("coin",.6,1.15),E(Math.ceil(D/3)),o.hud(),r.sys.afterGift(N.id),m()};r.fertilize=N=>{let G=c.plants[N.id];if(!G||c.adubo<1)return;let H=dt[G.sp];if(G.grown>=H.grow){o.toast("Esta planta j\xE1 est\xE1 adulta","info");return}c.adubo--,c.stats.fert=(c.stats.fert||0)+1,G.grown=Math.min(H.grow,G.grown+H.grow*.25);let D=N.pos.clone();D.y+=.3,t.sparkle(D,20,12120202,.3),n.sfx("bloom",.6,1.2),E(2),m()},r.tapThing=N=>{n.sfx("click",.35),N==="orders"?o.orders():N==="mail"&&o.daily()};let Oe=N=>{delete c.weeds[N.id],delete c.wilt[N.id],delete c.rare[N.id],delete c.plants[N.id],P(N),t.dust(N.pos,14),n.sfx("plant",.8,.8),j(),o.closeCards(),S(),m()},ke={water:2.1,plant:1.9,collect:1.1,admire:1.6,remove:1.7,weed:1.5,prune:1.2},ze=()=>{let N=r.tasks.shift();if(!N){r.cur=null;return}if(N.kind!=="plant"&&!c.plants[N.spot.id]||N.kind==="collect"&&!c.plants[N.spot.id].ready&&!c.rare[N.spot.id]||N.kind==="weed"&&!c.weeds[N.spot.id]||N.kind==="prune"&&!c.wilt[N.spot.id])return ze();N.path=L(N.spot.stand.x,N.spot.stand.z),N.phase="walk",r.cur=N},tt=0,K=0,Yt=0,le=0,ue=0;return s.onStep=()=>{n.sfx("step",.3,(ue^=1)?1:1.12)},r.update=N=>{r.time+=N;let G=s.group.position,H=r.cur;if(!H)s.state==="walk"&&s.stop(),s.speed=0,ze();else if(H.phase==="walk"){let pe=H.path[0];if(!pe)s.speed=0,H.kind==="move"?(s.stop(),r.cur=null):(H.phase="act",H.t=0,H.done=!1,s.faceTo(H.spot.pos.x+(H.spot.type==="arch"?-.75:0),H.spot.pos.z),s.play(H.kind==="remove"||H.kind==="weed"?"plant":H.kind==="prune"?"collect":H.kind,ke[H.kind],{high:H.spot.high||H.spot.type==="arch"&&H.kind==="water"&&!1}),H.kind==="water"&&n.sfx("water"));else{let ne=pe[0]-G.x,$e=pe[1]-G.z,Pe=Math.hypot(ne,$e),Ae=Pe;for(let Ue=1;Ue<H.path.length;Ue++)Ae+=Math.hypot(H.path[Ue][0]-H.path[Ue-1][0],H.path[Ue][1]-H.path[Ue-1][1]);let Ie=Ge(Ae*2.2+.7,.9,Ae>6?3.5:2.5);s.speed+=(Ie-s.speed)*Math.min(1,N*6),s.state="walk";let Se=s.speed*N;Pe<=Se?(G.x=pe[0],G.z=pe[1],H.path.shift()):(G.x+=ne/Pe*Se,G.z+=$e/Pe*Se,s.targetHeading=Math.atan2(ne,$e))}}else if(H.phase==="act"){H.t+=N;let pe=H.t/ke[H.kind],ne=H.spot.pos;H.kind==="water"?(pe>.26&&pe<.84&&t.water(s.spoutWorld,H.spot.type==="arch"?new O(ne.x-.75,.1,ne.z):ne,3),!H.done&&pe>.5&&(H.done=!0,q(H.spot))):H.kind==="plant"?!H.done&&pe>.55&&(H.done=!0,W(H)):H.kind==="remove"?!H.done&&pe>.55&&(H.done=!0,Oe(H.spot)):H.kind==="collect"?!H.done&&pe>.45&&(H.done=!0,re(H.spot)):H.kind==="weed"?!H.done&&pe>.55&&(H.done=!0,be(H.spot)):H.kind==="prune"?!H.done&&pe>.5&&(H.done=!0,Te(H.spot)):H.kind==="admire"&&!H.done&&pe>.4&&(H.done=!0,t.hearts(new O(G.x,1.7,G.z),4)),pe>=1&&(r.cur=null)}G.y=zc(G.x,G.z);let D=c.settings.time;if(D==="auto")c.hour=(c.hour+N*(c.hour>6&&c.hour<19?13/540:11/150))%24;else if(D!=="fixo"){let ne={dia:10,tarde:17.3,noite:22}[D]-c.hour;ne>12&&(ne-=24),ne<-12&&(ne+=24),c.hour=(c.hour+ne*Math.min(1,N*.8)+24)%24}if(r.rainT-=N,r.rainT<0&&r.rainT>-50){if(r.rainOn||(r.rainOn=!0,r.count()>0&&o.toast("Uma chuvinha! As plantas agradecem.","info")),r.raining=Math.min(1,r.raining+N*.3),r.raining>.6)for(let pe in c.plants)c.plants[pe].wet=Math.max(c.plants[pe].wet,y()*.9)}else r.raining=Math.max(0,r.raining-N*.25),r.rainT<=-50&&(r.rainT=420+Math.random()*300,r.rainOn=!1);t.rain=r.raining;let I=_("sprinkler"),Z=y(),oe=c.stats.blooms===0?8:1,ae=c.stats.collected===0?12:1,he=t.butterflyTargets;he.length=0;let Le=0;for(let pe in c.plants){let ne=c.plants[pe],$e=dt[ne.sp],Pe=e.spots[pe],Ae=u[pe],Ie=B($e,Pe);I&&(ne.wet=Z);let Se=Ie===0||ne.wet>0;Ie>0&&(ne.wet=Math.max(0,ne.wet-N*Ie)),Se&&(ne.grown<$e.grow?ne.grown=Math.min($e.grow,ne.grown+N*oe*r.sys.growMul(pe,$e)):ne.ready||(ne.giftT+=N*ae,ne.giftT>=$e.every&&(ne.ready=!0,n.sfx("pop",.35,1.3))));let Ue=T(ne);if(!Ae.mesh||Ue!==Ae.stage){let Be=Ae.mesh&&Ue>Ae.stage;if(P(Pe),Be){u[pe].pop=0;let pt=Pe.pos.clone();pt.y+=u[pe].h*.6,Ue===4?(n.sfx("bloom"),t.sparkle(pt,26,16773280,.4*Pe.scale),c.stats.blooms++,c.album.includes(ne.sp)||(c.album.push(ne.sp),o.toast(`Nova flor no \xE1lbum: ${$e.name}`,"good")),E(8),!r.cur&&s.state==="idle"&&s.play("cheer",1.4),m()):(n.sfx("pop",.6),t.sparkle(pt,8,14221232,.25)),K=0}}Ae.pop=Math.min(1,Ae.pop+N*1.6);let ut=ne.grown/$e.grow,Tt=[0,0,.12,.45,1][Ue],Ke=[0,.12,.45,1,1][Ue],ge=Ke>Tt?(ut-Tt)/(Ke-Tt):1,Y=Pe.scale*Me(.82,1,ge)*(.55+.45*uf(Ae.pop));Ae.mesh.scale.setScalar(Y);let ye=Se?0:.85;Ae.droop+=(ye-Ae.droop)*Math.min(1,N*1.5),Ae.mesh.material.userData.u.uDroop.value=Ae.droop,Pe.soil&&Pe.soil.material.color.copy(g).lerp(v,Ie===0?1:Ge(ne.wet/Z*2,0,1));let ve=c.rare[pe]?"seed":ne.ready?"gift":c.wilt[pe]?"prune":c.weeds[pe]?"weed":Se?null:"water",Fe=Ae.bubble;w(pe,!!c.weeds[pe]),Ae.weed&&Ae.weed.scale.setScalar(Math.min(1,Ae.weed.scale.x+N*2)*1),ve?(Fe.visible=!0,Fe.material=f[ve],Fe.position.copy(Pe.pos),Fe.position.y+=Math.max(.5,Ae.h+.25)+Math.sin(r.time*2.4+Pe.id)*.04,Pe.type==="arch"&&(Fe.position.y=2.6)):Fe.visible=!1,Ue===4&&(Le++,!$e.tree&&!$e.climber&&he.length<24&&he.push({x:Pe.pos.x,y:Pe.pos.y+Ae.h*.85,z:Pe.pos.z}),$e.petal&&Math.random()<N*1.6&&t.petalFall(new O(Pe.pos.x,Pe.pos.y+3.2,Pe.pos.z),$e.petal,1.6))}for(let pe of e.spots){c.plants[pe.id]||(u[pe.id].bubble.visible=!1,u[pe.id].weed&&w(pe.id,!1),pe.soil&&!pe.pending&&pe.soil.material.color.lerp(g,N));let ne=u[pe.id].plus;ne.visible&&(ne.material.opacity=.7+.2*Math.sin(r.time*2))}t.butterflyCount=Math.min(9,Math.floor(Le/2)+(Le>0?1:0));let _e=U.orders,Re=U.mail,He=Math.sin(r.time*2.4)*.04;if(_e&&(_e.visible=r.sys.anyDeliverable(),_e.position.y=e.things.orders.top+.25+He),Re){let pe=r.sys.dailyReady();Re.visible=pe,Re.position.y=e.things.mail.top+.25+He,e.mailFlag&&(e.mailFlag.rotation.x+=((pe?0:-1.5)-e.mailFlag.rotation.x)*Math.min(1,N*4))}r.sys.tick(N),K-=N,K<0&&(K=1,S()),tt+=N,tt>10&&(tt=0,m())},r.init=()=>{for(let G of ei)e.setZone(G.id,c.zones.includes(G.id));for(let G of Js)e.setDecor(G.id,c.decor.includes(G.id));let N=Ge((Date.now()-(c.last||Date.now()))/1e3,0,48*3600);for(let G in c.plants){let H=c.plants[G],D=dt[H.sp];if(!D||!e.spots[G]){delete c.plants[G];continue}let I=B(D,e.spots[G]),Z=I===0||_("sprinkler")?N:Math.min(N,H.wet/I),oe=r.sys.growMul(G,D),ae=Math.min(Z,Math.max(0,D.grow-H.grown)/oe);H.grown=Math.min(D.grow,H.grown+ae*oe),H.grown>=D.grow&&(c.album.includes(H.sp)||c.album.push(H.sp),H.giftT+=Z-ae,H.giftT>=D.every&&(H.ready=!0,H.giftT=D.every)),I>0&&(H.wet=Math.max(0,H.wet-N*I)),P(e.spots[G])}r.away=N,r.sys.init(N),j(),o.hud(),S()},r.zoneAt=Ga,r.refreshMarkers=j,r.rebuild=P,r.V=u,Tf(r,{S:c,world:e,fx:t,audio:n,gardener:s,ui:o,scene:i,addCoins:C,addXp:E,level:p,save:m}),r}var lt=i=>document.querySelector(i),ja=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},ct=i=>`<svg class="ic" aria-hidden="true"><use href="#i-${i}"/></svg>`,Y1={bed:"canteiro",pot:"vaso",hang:"vaso suspenso",window:"jardineira",pond:"lago",tree:"\xE1rvore",arch:"arco",veg:"horta",green:"estufa"},Lf=i=>{if(i>=3600){let e=Math.floor(i/3600),t=Math.round(i%3600/60/5)*5;return t>=60?`${e+1} h`:t?`${e} h ${t}`:`${e} h`}return i>=60?`${Math.ceil(i/60)} min`:`${Math.max(1,Math.ceil(i))} s`};function Pf({project:i,thumbs:e,audio:t}){let n={game:null,open:null},s=lt("#coins"),a=lt("#lvl"),h=lt("#lvlbar"),o=lt("#beauty"),l=lt("#toasts"),r=lt("#floats"),c=lt("#tags"),u=lt("#sheet"),d=lt("#card"),f=lt("#modal"),g=lt("#quest"),v=null,m=null,p=null,_=()=>t.sfx("click",.35);n.hud=()=>{let C=n.game,E=C.state,S=C.level();p!==null&&E.coins!==p&&(s.parentElement.classList.remove("bump"),s.offsetWidth,s.parentElement.classList.add("bump")),p=E.coins,s.textContent=E.coins,a.textContent=S;let L=Ja[S-1]??0,R=Ja[S]??L+1;h.style.width=Math.round(Math.min(1,(E.xp-L)/(R-L))*100)+"%",o.textContent=C.beauty();let F=C.sys.season(),$=lt("#season");$.dataset.k!==F.id+":"+F.day&&($.dataset.k=F.id+":"+F.day,$.innerHTML=`${ct(F.icon)}<span>${F.name}</span>`,$.title=`${F.name}, dia ${F.day} de ${F.of}`),n.open==="picker"&&T()},n.toast=(C,E="info")=>{let S=ja("div","toast "+E,C);for(l.appendChild(S);l.children.length>3;)l.firstChild.remove();setTimeout(()=>S.classList.add("out"),3400),setTimeout(()=>S.remove(),3900)},n.floatText=(C,E,S)=>{let L=i(C);if(!L.vis)return;let R=ja("div","float "+S,(S==="coin"?ct("coin"):"")+E);R.style.left=L.x+"px",R.style.top=L.y+"px",r.appendChild(R),setTimeout(()=>R.remove(),1500)},n.quest=C=>{if(!C){g.innerHTML='<div class="q-t">Seu jardim est\xE1 completo. Aproveite o sossego!</div>';return}let E=C.text+C.val;g.dataset.k!==E&&(g.dataset.k=E,g.innerHTML=`<div class="q-h">Pr\xF3ximo passo</div><div class="q-t">${C.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round(C.val/C.goal*100)}%"></i></div><span>${C.val}/${C.goal}</span><b>${ct("coin")}${C.reward}</b></div>`)};let y=null,b=null,T=()=>{if(!y)return;let C=n.game,E=C.level();u.querySelectorAll(".seed").forEach(S=>{let L=rn.find(R=>R.id===S.dataset.id);S.classList.toggle("poor",C.state.coins<L.price&&L.lvl<=E)})};n.picker=(C,E)=>{n.closeCards(),y=C,b=E,n.open="picker";let S=n.game.level();u.innerHTML=`<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${Y1[C.type]}</span></div><button class="x" aria-label="Fechar">${ct("x")}</button></div><div class="seeds"></div>`;let L=u.querySelector(".seeds"),R=E.filter(V=>!V.locked&&!V.off),F=E.filter(V=>V.locked||V.off);for(let{sp:V,locked:j,off:q}of[...R.reverse(),...F.filter(W=>W.off&&!W.locked),...F.filter(W=>W.locked).slice(0,6)]){let W=ja("button","seed"+(j||q?" locked":""));W.dataset.id=V.id,W.innerHTML=`<div class="th"><img alt="" src="${e[V.id]||""}">${j?`<em>N\xEDvel ${V.lvl}</em>`:q?`<em>${["Primavera","Ver\xE3o","Outono","Inverno"][V.season]}</em>`:""}${!j&&!q&&n.game.sys.inSeason(V)?'<i class="fav">na esta\xE7\xE3o</i>':""}</div><b>${V.name}</b><small>${V.info}</small><div class="meta"><span class="price">${ct("coin")}${V.price}</span><span>${ct("clock")}${Lf(V.grow)}</span></div>`,W.onclick=()=>{n.game.choose(C,V.id)&&n.closeCards()},L.appendChild(W)}u.querySelector(".x").onclick=()=>{_(),n.closeCards()},u.classList.add("on"),T(),L.querySelector(".seed:not(.locked)")&&(L.scrollLeft=0)},n.plantCard=(C,E,S)=>{n.closeCards(),m=C,n.open="card";let L=()=>{let R=E();if(!R){n.closeCards();return}let F=R.stage===4?R.ready?"Presente pronto!":"Em flor":Af[R.stage];d.innerHTML=`<img class="c-th" alt="" src="${e[R.sp.id]||""}"><div class="c-b"><div class="c-n"><b>${R.sp.name}</b><span>${F}</span></div>
        <div class="c-row">${ct("leaf")}<div class="bar g"><i style="width:${Math.round(R.grow*100)}%"></i></div><small>${R.stage===4?"adulta":"faltam "+Lf(R.left)}</small></div>
        <div class="c-row">${ct("drop")}<div class="bar w"><i style="width:${Math.round(R.water*100)}%"></i></div><small>${R.green?"ar \xFAmido da estufa":R.noWater?"vive na \xE1gua":R.water<=0?"com sede!":"regada"}</small></div>
        ${R.stage===4?`<div class="c-row">${ct("coin")}<div class="bar c"><i style="width:${Math.round((R.ready?1:R.gift)*100)}%"></i></div><small>pr\xF3ximo presente</small></div>`:""}
        ${R.inSeason?`<div class="c-note">${ct("flower")}Est\xE1 na esta\xE7\xE3o dela: cresce e rende mais.</div>`:""}
        <div class="c-act">${R.noWater?"":`<button class="btn" data-a="water">${ct("drop")}Regar</button>`}${R.stage<4&&R.adubo>0?`<button class="btn honey" data-a="fert">Adubar (${R.adubo})</button>`:""}<button class="btn ghost" data-a="remove">Retirar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`,d.querySelectorAll("button").forEach($=>$.onclick=()=>{_();let V=$.dataset.a;V==="remove"?$.dataset.sure?(S.remove(),n.closeCards()):($.dataset.sure=1,$.textContent="Tem certeza?",$.classList.add("danger"),v=null):V==="fert"?(S.fert(),L()):(V==="water"&&S.water(),n.closeCards())})};L(),v=L,d.classList.add("on")},n.closeCards=()=>{u.classList.remove("on"),d.classList.remove("on"),y=null,v=null,m=null,(n.open==="picker"||n.open==="card")&&(n.open=null)};let A=(C,E="")=>{n.closeCards(),f.innerHTML=`<div class="panel ${E}">${C}</div>`,f.classList.add("on"),n.open="modal",f.querySelectorAll("[data-close]").forEach(S=>S.onclick=()=>{_(),P()})},P=()=>{f.classList.remove("on"),n.open==="modal"&&(n.open=null)};f.addEventListener("pointerdown",C=>{C.target===f&&P()}),n.closeModal=P,n.zoneOffer=(C,E,S)=>{A(`<h2>${C.name}</h2><p>${C.desc||""}</p><div class="offer"><span class="bigprice">${ct("coin")}${C.cost}</span>${E?"":`<small>Voc\xEA tem ${n.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora n\xE3o</button><button class="btn big" id="buyz" ${E?"":"disabled"}>Abrir esta \xE1rea</button></div>`,"small"),lt("#buyz").onclick=()=>{P(),S()}},n.levelUp=(C,E)=>{let S=E.map(L=>`<div class="unl"><img alt="" src="${e[L.id]||""}"><span>${L.name}</span></div>`).join("");setTimeout(()=>A(`<div class="lv-badge">${C}</div><h2>N\xEDvel ${C}!</h2><p>${E.length?"Novas plantas chegaram \xE0 sua cole\xE7\xE3o de sementes:":"Voc\xEA est\xE1 cada vez melhor com as plantas."}</p><div class="unls">${S}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`,"small center"),900)};let k=(C="decor")=>{let E=n.game,S=E.state,L=Js.map(F=>{let $=S.decor.includes(F.id);return`<div class="item ${$?"own":""}"><div><b>${F.name}</b><small>${F.desc}</small></div>${$?'<span class="tagok">No jardim</span>':`<button class="btn" data-buy="d:${F.id}" ${S.coins>=F.price?"":"disabled"}>${ct("coin")}${F.price}</button>`}</div>`}).join(""),R=Gc.map(F=>{let $=S.upg.includes(F.id),V=F.need&&!S.upg.includes(F.need);return`<div class="item ${$?"own":""}"><div><b>${F.name}</b><small>${F.desc}</small></div>${$?'<span class="tagok">Comprado</span>':V?'<span class="taglock">Depois do anterior</span>':`<button class="btn" data-buy="u:${F.id}" ${S.coins>=F.price?"":"disabled"}>${ct("coin")}${F.price}</button>`}</div>`}).join("");A(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${ct("coin")}${S.coins}</span><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <div class="tabs"><button class="${C==="decor"?"on":""}" data-tab="decor">Decora\xE7\xE3o</button><button class="${C==="upg"?"on":""}" data-tab="upg">Melhorias</button></div>
      <div class="list">${C==="decor"?L:R}</div><p class="hint">Sementes e mudas voc\xEA escolhe tocando num lugar vazio do jardim.</p>`),f.querySelectorAll("[data-tab]").forEach(F=>F.onclick=()=>{_(),k(F.dataset.tab)}),f.querySelectorAll("[data-buy]").forEach(F=>F.onclick=()=>{let[$,V]=F.dataset.buy.split(":");$==="d"?E.buyDecor(V):E.buyUpgrade(V),k(C)})},M=(C="flores")=>{let E=n.game,S=E.state,L=E.level(),R=[["flores","Flores"],["raras","Raridades"],["bichos","Visitantes"],["conq","Conquistas"],["diario","Di\xE1rio"]].filter(([V])=>(V!=="raras"||n.rareTab)&&(V!=="bichos"||n.critterTab)),F="",$="";if(C==="flores"){let V=rn.filter(j=>!j.hybrid);$=`${V.filter(j=>S.album.includes(j.id)).length}/${V.length}`,F=`<p class="hint">Cada esp\xE9cie entra no \xE1lbum quando floresce pela primeira vez.</p><div class="albgrid">${V.map(j=>{let q=S.album.includes(j.id);return`<div class="alb ${q?"got":""}"><img alt="" src="${e[j.id]||""}"><b>${q?j.name:j.lvl>L?"N\xEDvel "+j.lvl:j.name}</b>${j.season!=null?`<em>${["primavera","ver\xE3o","outono","inverno"][j.season]}</em>`:""}</div>`}).join("")}</div>`}else if(C==="raras"&&n.rareTab){let V=n.rareTab();$=V.count,F=V.html}else if(C==="bichos"&&n.critterTab){let V=n.critterTab();$=V.count,F=V.html}else C==="conq"?($=`${Qs.filter(q=>S.ach[q.id]).length}/${Qs.length}`,F=`<div class="list">${Qs.filter((q,W)=>S.ach[q.id]||!Qs.slice(0,W).some(re=>re.id.replace(/\d+$/,"")===q.id.replace(/\d+$/,"")&&!S.ach[re.id])).map(q=>{let W=Math.min(q.goal,q.v(S,E)),re=!!S.ach[q.id];return`<div class="item ach ${re?"own":""}"><div class="a-ic">${ct(re?"trophy":"trophy-off")}</div><div class="a-b"><b>${q.name}</b><small>${q.desc}</small><div class="q-r"><div class="bar ${re?"c":""}"><i style="width:${Math.round(W/q.goal*100)}%"></i></div><span>${W}/${q.goal}</span><b>${ct("coin")}${q.r}</b></div></div></div>`}).join("")}</div>`):($=`dia ${Math.floor((Date.now()-S.t0)/864e5)+1}`,F=S.log.length?`<div class="diary">${S.log.slice().reverse().map(V=>`<div><span>Dia ${V.d}</span>${V.t}</div>`).join("")}</div>`:'<p class="hint">O di\xE1rio da Eliane se escreve sozinho, conforme o jardim cresce.</p>');A(`<div class="p-h"><h2>${C==="diario"?"Di\xE1rio da Eliane":"\xC1lbum do jardim"}</h2><span class="wallet">${$}</span><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <div class="tabs">${R.map(([V,j])=>`<button class="${C===V?"on":""}" data-tab="${V}">${j}</button>`).join("")}</div>${F}`,"wide"),f.querySelectorAll("[data-tab]").forEach(V=>V.onclick=()=>{_(),M(V.dataset.tab)})};n.album=M,n.rareTab=()=>{let C=n.game.state,E=n.game.sys.hybrids;return{count:`${E.filter(S=>C.hybrids.includes(S.id)).length}/${E.length}`,html:`<p class="hint">Quando duas flores diferentes florescem lado a lado, \xE0s vezes deixam uma semente especial. Recolha os presentes delas e fique de olho.</p><div class="list">${E.map(S=>{let L=C.hybrids.includes(S.id),[R,F]=S.hybrid.map($=>dt[$]);return`<div class="item rare ${L?"own":""}"><img class="r-th ${L?"":"q"}" alt="" src="${e[S.id]||""}"><div><b>${L?S.name:"? ? ?"}</b><small>${L?S.info:`Dizem que <i>${R.name}</i> e <i>${F.name}</i>, lado a lado, guardam um segredo.`}</small></div><div class="r-par"><img alt="" src="${e[R.id]||""}"><span>+</span><img alt="" src="${e[F.id]||""}"></div></div>`}).join("")}</div>`}},n.rare=C=>setTimeout(()=>A(`<div class="rare-hero"><img alt="" src="${e[C.id]||""}"></div><h2>Raridade descoberta!</h2><p><b>${C.name}</b>. ${C.info}</p><p class="hint">Ela j\xE1 est\xE1 entre as suas sementes.</p><div class="row"><button class="btn big" data-close>Que maravilha!</button></div>`,"small center"),600),n.seasonInfo=()=>{let C=n.game,E=C.sys.season(),S=C.level(),L=rn.filter($=>$.loves&&$.loves.includes(E.id)&&$.lvl<=S&&(!$.hybrid||C.state.hybrids.includes($.id))),R=rn.filter($=>$.season===E.id),F=$=>`<span class="chip"><img alt="" src="${e[$.id]||""}">${$.name}</span>`;A(`<div class="p-h"><h2>${ct(E.icon)} ${E.name}</h2><span class="wallet">dia ${E.day} de ${E.of}</span><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <p>${E.line} ${E.left===1?"Amanh\xE3 a esta\xE7\xE3o muda.":`Faltam ${E.left} dias para a pr\xF3xima esta\xE7\xE3o.`}</p>
      ${R.length?`<div class="sgroup"><b>S\xF3 nascem agora</b><div class="chips">${R.map(F).join("")}</div></div>`:""}
      <div class="sgroup"><b>Crescem mais r\xE1pido e rendem mais agora</b><div class="chips">${L.length?L.slice(0,18).map(F).join(""):"<small>Suba de n\xEDvel para conhecer as flores desta esta\xE7\xE3o.</small>"}</div></div>
      <p class="hint">Nenhuma planta sofre fora da esta\xE7\xE3o; ela s\xF3 fica no ritmo normal.</p>`)},n.orders=()=>{let C=n.game,E=C.state,S=C.sys,L=Object.keys(E.basket).filter(F=>E.basket[F]>0&&dt[F]).sort((F,$)=>E.basket[$]-E.basket[F]),R=E.orders.map(F=>{let $=S.canDeliver(F);return`<div class="order ${$?"ok":""}"><div class="o-h"><b>${F.who}</b><span>${F.why}</span></div>
        <div class="o-items">${F.items.map(V=>{let j=Math.min(V.n,E.basket[V.sp]||0);return`<div class="o-it ${j>=V.n?"full":""}"><img alt="" src="${e[V.sp]||""}"><b>${j}/${V.n}</b><small>${dt[V.sp].name}</small></div>`}).join("")}</div>
        <div class="o-f"><span class="rew">${ct("coin")}${F.coins}${F.adubo?` <i>+ ${F.adubo} adubo</i>`:""}</span><button class="btn ghost" data-no="${F.id}">Dispensar</button><button class="btn" data-go="${F.id}" ${$?"":"disabled"}>Entregar</button></div></div>`}).join("");A(`<div class="p-h"><h2>Banquinha de flores</h2><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <p>Cada presente recolhido p\xF5e uma flor na cesta. Junte as que os vizinhos pedem e entregue.</p>
      ${R?`<div class="orders">${R}</div>`:`<p class="hint empty">${E.stats.collected?"Nenhum pedido agora. Os vizinhos passam por aqui de tempos em tempos.":"Recolha o primeiro presente de uma flor e os vizinhos come\xE7am a aparecer."}</p>`}
      <div class="basket"><b>Sua cesta</b>${L.length?L.map(F=>`<span class="chip"><img alt="" src="${e[F]||""}">${E.basket[F]}</span>`).join(""):"<small>vazia por enquanto</small>"}<span class="chip adubo" title="Adubo">${ct("leaf")}${E.adubo} adubo</span></div>`),f.querySelectorAll("[data-go]").forEach(F=>F.onclick=()=>{S.deliver(+F.dataset.go)&&(n.hud(),n.orders())}),f.querySelectorAll("[data-no]").forEach(F=>F.onclick=()=>{_(),F.dataset.sure?(S.dismiss(+F.dataset.no),n.orders()):(F.dataset.sure=1,F.textContent="Dispensar mesmo?")})},n.daily=()=>{let C=n.game,E=C.state,S=C.sys,L=S.dailyReady(),R=L?E.daily.streak%7:(E.daily.streak-1)%7,F=Hc.map((V,j)=>`<div class="day ${j<R||!L&&j===R?"done":""} ${L&&j===R?"now":""} ${V.big?"big":""}"><small>Dia ${j+1}</small>${V.coins?ct("coin"):ct("leaf")}<b>${V.coins?"\xD7"+Math.round(V.coins*(1+C.level()*.2)):V.adubo+" adubo"}</b></div>`).join("");A(`<h2>Caixa de correio</h2><p>${L?"Tem uma surpresa esperando por voc\xEA hoje!":"A surpresa de hoje j\xE1 foi aberta. Amanh\xE3 tem mais."}</p><div class="days">${F}</div>
      <p class="hint">Voc\xEA j\xE1 abriu ${E.daily.streak} ${E.daily.streak===1?"surpresa":"surpresas"}. A cada sete visitas vem um presente grande, sem pressa.</p>
      <div class="row"><button class="btn ghost" data-close>${L?"Depois":"Fechar"}</button>${L?'<button class="btn big" id="d-open">Abrir a surpresa</button>':""}</div>`,"small center");let $=lt("#d-open");$&&($.onclick=()=>{let V=S.claimDaily();V&&(n.toast(`Surpresa do dia ${V.streak}: ${V.coins?"+"+V.coins+" moedas":""}${V.coins&&V.adubo?" e ":""}${V.adubo?"+"+V.adubo+" adubo":""}`,"good"),n.hud(),n.daily())})},n.achievement=C=>{let E=ja("div","toast ach",`${ct("trophy")}<span><small>Conquista</small><b>${C.name}</b></span><i>${ct("coin")}${C.r}</i>`);for(l.appendChild(E);l.children.length>3;)l.firstChild.remove();setTimeout(()=>E.classList.add("out"),4600),setTimeout(()=>E.remove(),5100)};let w=()=>{let C=n.game.state.settings,E=(L,R,F)=>`<option value="${L}" ${F===L?"selected":""}>${R}</option>`;A(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <label class="set" for="s-music"><span>M\xFAsica</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${C.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${C.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${E("auto","O dia passa sozinho",C.time)}${E("dia","Sempre manh\xE3",C.time)}${E("tarde","Sempre entardecer",C.time)}${E("noite","Sempre noite",C.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${E("auto","Autom\xE1tica",C.quality)}${E("alta","Alta",C.quality)}${E("media","M\xE9dia",C.quality)}${E("baixa","Leve (para aparelhos simples)",C.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recome\xE7ar o jardim</button><button class="btn" data-close>Pronto</button></div>`,"small");let S=()=>{C.music=+lt("#s-music").value,C.sfx=+lt("#s-sfx").value,C.time=lt("#s-time").value;let L=lt("#s-q").value;L!==C.quality&&(C.quality=L,n.onQuality&&n.onQuality(L)),t.setVolumes(C.music,C.sfx),n.game.save()};["#s-music","#s-sfx","#s-time","#s-q"].forEach(L=>lt(L).oninput=lt(L).onchange=S),lt("#s-reset").onclick=L=>{let R=L.currentTarget;R.dataset.sure?(n.game.reset(),n.onReset&&n.onReset()):(R.dataset.sure=1,R.textContent="Apagar tudo e recome\xE7ar?")}},U=()=>{A(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na \xE1rea de trabalho e no menu Iniciar. Baixa um .zip: abra e d\xEA dois cliques em \u201CInstalar Jardim do Sossego\u201D. Come\xE7a um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo s\xF3: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirma\xE7\xE3o antes de salvar.</p>`,"small");let C=E=>{let S=lt("#dl-msg");S&&(S.textContent=E)};f.querySelectorAll("[data-dl]").forEach(E=>E.onclick=async()=>{_();let S=f.querySelectorAll("[data-dl]");S.forEach(L=>L.disabled=!0),C("Preparando o arquivo\u2026");try{let L=window.claude&&window.claude.use?await window.claude.use("downloads"):null;if(!L){C("Por aqui n\xE3o d\xE1 para baixar. Abra o jogo pelo link, no navegador do computador.");return}let R,F;if(E.dataset.dl==="win"){let $=await fetch("instalar/Jardim-do-Sossego-Windows.zip");if(!$.ok)throw new Error("fetch");R=await $.blob(),F="Jardim-do-Sossego-Windows.zip"}else{let $=await fetch("instalar/Jardim-do-Sossego.html");if(!$.ok)throw new Error("fetch");let V=await $.text();n.game.save();let j="window.__SAVE="+JSON.stringify(n.game.state).replace(/</g,"\\u003c")+";";R=new Blob([V.replace("/*__SAVE__*/",()=>j)]),F="Jardim-do-Sossego.html"}await L.save({filename:F,data:R}),C(E.dataset.dl==="win"?"Salvo! Abra o .zip e d\xEA dois cliques no instalador.":"Salvo! Dois cliques no arquivo e o jardim abre.")}catch(L){C(L&&L.code==="declined"?"Tudo bem, fica para depois.":L&&L.code==="rate_limited"?"J\xE1 existe um pedido de download aberto. Confirme ou feche-o primeiro.":"N\xE3o foi poss\xEDvel baixar agora. Tente de novo em instantes.")}finally{S.forEach(L=>L.disabled=!1)}})},B=()=>{let C=/iPhone|iPad|iPod/i.test(navigator.userAgent),E=matchMedia("(display-mode: standalone)").matches||navigator.standalone,S=/Windows/i.test(navigator.userAgent);A(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${ct("x")}</button></div>
      <p>${E?"O jogo j\xE1 est\xE1 instalado neste aparelho.":"Instalado, o jogo ganha um \xEDcone pr\xF3prio, funciona sem internet e recebe as novidades sozinho."}</p>
      <div class="list">
        ${E?"":`<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${C?"No iPhone ou iPad: toque em Compartilhar e depois em \u201CAdicionar \xE0 Tela de In\xEDcio\u201D.":"Instala como aplicativo, no celular ou no computador."}</small></div>${C?"":'<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${S&&!E?'<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na \xE1rea de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>':""}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`,"small");let L=lt("#pwa-go");L&&(L.onclick=async()=>{_();let R=window.__pwaPrompt;if(R){R.prompt();try{await R.userChoice}catch{}window.__pwaPrompt=null,P()}else lt("#pwa-how").textContent="Abra o menu do navegador (os tr\xEAs pontinhos) e escolha \u201CInstalar aplicativo\u201D ou \u201CAdicionar \xE0 tela inicial\u201D."})};window.__WEB?lt("#b-install").onclick=()=>{_(),B()}:window.__APP||!window.__INSTALL?lt("#b-install").hidden=!0:lt("#b-install").onclick=()=>{_(),U()},lt("#b-shop").onclick=()=>{_(),k()},lt("#b-album").onclick=()=>{_(),M()},lt("#season").onclick=()=>{_();let C=n.game.sys.season();n.seasonInfo?n.seasonInfo():n.toast(`${C.name}, dia ${C.day} de ${C.of}. ${C.line}`,"info")},lt("#b-set").onclick=()=>{_(),w()},lt("#b-photo").onclick=()=>{_(),document.body.classList.add("photo"),n.closeCards()},lt("#photo-exit").onclick=()=>document.body.classList.remove("photo");let X={};return n.initTags=C=>{for(let E of C){if(!E.cost)continue;let S=ja("button","ztag",`${ct("lock")}<small>${ct("coin")}${E.cost}</small>`);S.title=E.name,S.setAttribute("aria-label",`${E.name}: ${E.cost} moedas`),S.onclick=()=>{_(),n.game.offerZone(E.id)},c.appendChild(S),X[E.id]=S}},n.frame=(C,E)=>{let S=n.game.state;for(let L of C){let R=X[L.id];if(!R)continue;if(S.zones.includes(L.id)){R.hidden=!0;continue}let F=i(new E(L.tag[0],L.id===1?2.25:1.75,L.tag[1]));R.hidden=!F.vis,F.vis&&(R.style.transform=`translate(-50%,-100%) translate(${F.x.toFixed(1)}px,${F.y.toFixed(1)}px)`,R.classList.toggle("can",S.coins>=L.cost))}v&&(n._ct=(n._ct||0)+1)%20===0&&v()},n.focus=()=>{},n}var wi=O,Po=i=>document.querySelector(i),ki=new URLSearchParams(location.search);async function Z1(i,e){let t={},s=new Zt(168,168,{samples:4});s.texture.colorSpace=_t;let a=new ya;a.add(new Ws(16777215,12109984,1.5));let h=new Xs(16774368,1.7);h.position.set(2,4,3),a.add(h);let o=new sn(26,1,.05,60),l=new Uint8Array(28224*4),r=document.createElement("canvas");r.width=r.height=168;let c=r.getContext("2d"),u=Hn.uDay.value;Hn.uDay.value=.5;for(let d=0;d<rn.length;d++){let f=rn[d],g=Co(f.id,11,4),v=Lo(f.id);v.userData.u.uSway.value=0;let m=new Ve(g,v);a.add(m);let p=g.boundingBox,_=p.getCenter(new wi),y=p.getSize(new wi),b=Math.max(y.x,y.y,y.z)*.62+.03,T=b/Math.tan(13*Math.PI/180);o.position.set(_.x+T*.25,_.y+T*.5,_.z+T*.83),o.lookAt(_),o.near=T*.1,o.far=T*4,o.updateProjectionMatrix(),i.setRenderTarget(s),i.setClearColor(0,0),i.clear(),i.render(a,o),i.readRenderTargetPixels(s,0,0,168,168,l),i.setRenderTarget(null);let A=c.createImageData(168,168);for(let P=0;P<168;P++)A.data.set(l.subarray((167-P)*168*4,(168-P)*168*4),P*168*4);c.putImageData(A,0,0),t[f.id]=r.toDataURL("image/png"),a.remove(m),g.dispose(),v.dispose(),e((d+1)/rn.length),d%3===2&&await new Promise(P=>setTimeout(P,0))}return Hn.uDay.value=u,s.dispose(),t}var Wc=null;if(window.__WEB&&"serviceWorker"in navigator){let i=!!navigator.serviceWorker.controller;navigator.serviceWorker.register("sw.js").then(e=>{setInterval(()=>e.update().catch(()=>{}),1800*1e3)}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{i&&Wc&&Wc()}),addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.__pwaPrompt=e})}async function J1(){let i=Rf(),e=ki.get("demo");e&&(i.zones=[0,1,2,3,4,5,6,7,8],i.decor=["lanternas","banco","bebedouro","casinha","carrinho","anao"],i.coins=999,i.xp=3e3,i.settings.time="fixo",i.hour=+(ki.get("h")||16.8));let t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820,n=ki.get("q")||(i.settings.quality!=="auto"?i.settings.quality:t?"media":"alta"),s=Po("#stage"),a=hf(s,za[n]),h=new ya,o=new sn(32,1,.3,900),l=ff(h,a.renderer,za.alta),r=gf(h,za[n],new Set(i.zones)),c=vf();c.group.position.set(.3,0,1.6),c.heading=c.targetHeading=.2,h.add(c.group);let u=_f(h),d=bf("audio/");d.setVolumes(i.settings.music,i.settings.sfx);let f=Mf(r.blocked);a.setup(h,o);let g=le=>{let ue=l.sun.shadow;ue.mapSize.x!==le.shadows&&(ue.mapSize.set(le.shadows,le.shadows),ue.map&&(ue.map.dispose(),ue.map=null))},v=le=>{n=le;let ue=za[le];a.setQuality(ue),r.setGrass(ue.grass),g(ue)},m=()=>{let le=s.clientWidth||innerWidth,ue=s.clientHeight||innerHeight;o.aspect=le/ue,o.fov=le<ue?44:32,o.updateProjectionMatrix(),a.resize(le,ue)};a.w=innerWidth,a.h=innerHeight,v(n),m(),addEventListener("resize",m);let p={yaw:0,pitch:.6,dist:12.5,target:new wi(0,.9,.5),focusT:0,focus:new wi},_=new wi,y=le=>(_.copy(le).project(o),{x:(_.x*.5+.5)*a.w,y:(-_.y*.5+.5)*a.h,vis:_.z<1&&Math.abs(_.x)<1.15&&Math.abs(_.y)<1.15}),b=Po("#load i"),T=Po("#start");a.render(h,o);let A=await Z1(a.renderer,le=>{b.style.width=Math.round(le*100)+"%"}),P=Pf({project:y,thumbs:A,audio:d}),k=Cf({scene:h,world:r,fx:u,audio:d,gardener:c,nav:f,env:l,ui:P,state:i});e&&(k.save=()=>{},r.spots.forEach((le,ue)=>{if(e==="2"&&ue%3===0)return;let N=rn.filter(H=>H.spots.includes(le.type)),G=N[(ue*7+3)%N.length];i.plants[le.id]={sp:G.id,seed:ue+5,grown:e==="2"&&ue%4===1?G.grow*.6:G.grow,wet:ue%9===4?0:300,giftT:ue%6===2?80:0,ready:!1}})),P.game=k,P.initTags(ei),P.onQuality=le=>v(le==="auto"?t?"media":"alta":le),P.onReset=()=>{k.save=()=>{},location.reload()},P.focus=(le,ue)=>{p.focus.set(le,.8,ue),p.focusT=3.2},k.init();let M=k.count()>0||i.stats.planted>0;T.textContent=M?"Voltar ao meu jardim":"Come\xE7ar",Po("#load").hidden=!0,T.hidden=!1;let w=!1,U=0,B=0,X=0,C=!1,E=()=>{w||(w=!0,d.unlock(),document.body.classList.add("playing"),U=0,k.away>120&&k.count()>0?setTimeout(()=>P.toast("Que bom te ver de volta! Veja quem est\xE1 com sede.","info"),1800):M||setTimeout(()=>P.toast("Toque num + do canteiro para plantar sua primeira flor","info"),1500))};T.onclick=E,Wc=()=>{w?P.toast("Chegaram novidades! Elas aparecem na pr\xF3xima vez que voc\xEA abrir o jogo.","good"):location.reload()},ki.get("autostart")&&E();let S=new Map,L=0,R=0,F=0,$=0,V=new po,j=new ce,q=new Yn(new wi(0,1,0),0),W=new wi,re=(le,ue)=>{let N=s.getBoundingClientRect();j.set((le-N.left)/N.width*2-1,-((ue-N.top)/N.height)*2+1),V.setFromCamera(j,o);let G=V.intersectObjects(r.pickables.filter(D=>D.visible||!i.zones.includes(D.userData.spot.zone)),!1),H=V.intersectObjects(Object.values(r.things).map(D=>D.pick),!1);return H.length&&(!G.length||H[0].distance<G[0].distance)?{thing:H[0].object.userData.thing}:G.length?{spot:G[0].object.userData.spot}:V.ray.intersectPlane(q,W)?{ground:W.clone()}:{}};s.addEventListener("pointerdown",le=>{if(s.setPointerCapture(le.pointerId),S.set(le.pointerId,{x:le.clientX,y:le.clientY}),S.size===1)L=performance.now(),R=0;else if(S.size===2){let[ue,N]=[...S.values()];F=Math.hypot(ue.x-N.x,ue.y-N.y),$=p.dist,R=99}}),s.addEventListener("pointermove",le=>{let ue=S.get(le.pointerId);if(!ue){if(le.pointerType==="mouse"&&w){let H=re(le.clientX,le.clientY);s.style.cursor=H.spot||H.thing?"pointer":"grab"}return}let N=le.clientX-ue.x,G=le.clientY-ue.y;if(ue.x=le.clientX,ue.y=le.clientY,S.size===1)R+=Math.abs(N)+Math.abs(G),R>8&&(p.yaw-=N*.006,p.pitch=Ge(p.pitch+G*.004,.16,1.3));else if(S.size===2){let[H,D]=[...S.values()],I=Math.hypot(H.x-D.x,H.y-D.y);F>0&&(p.dist=Ge($*(F/I),3.5,34))}});let be=le=>{if(S.delete(le.pointerId)&&S.size===0&&R<=8&&performance.now()-L<600&&w){if(document.body.classList.contains("photo")||P.open==="modal")return;let N=re(le.clientX,le.clientY);if(N.thing)k.tapThing(N.thing);else if(N.spot)k.tapSpot(N.spot);else if(N.ground){let G=N.ground,H=Ga(G.x,G.z);if(P.open){P.closeCards();return}H>0&&!i.zones.includes(H)?k.offerZone(H):Math.abs(G.x)<12.4&&G.z>-9&&G.z<14.5&&(k.tapGround(G.x,G.z),u.sparkle(new wi(G.x,.05,G.z),4,16777215,.12))}}};s.addEventListener("pointerup",be),s.addEventListener("pointercancel",le=>S.delete(le.pointerId)),s.addEventListener("wheel",le=>{le.preventDefault(),p.dist=Ge(p.dist*Math.exp(le.deltaY*.0011),3.5,34)},{passive:!1}),addEventListener("keydown",le=>{le.key==="Escape"&&(P.closeCards(),P.closeModal(),document.body.classList.remove("photo"))}),document.addEventListener("visibilitychange",()=>{document.hidden?(k.save(),d.pause(!0)):d.pause(!1)}),addEventListener("pagehide",()=>k.save());let Te=performance.now(),Oe=0,ke=.5,ze=0,tt=0,K=+(ki.get("frames")||0),Yt=le=>{if(K&&w&&++tt>K){window.__frozen=!0;return}requestAnimationFrame(Yt);let ue=Math.min(.1,(le-Te)/1e3);if(Te=le,document.hidden)return;let N=+(ki.get("speed")||1);if(Oe+=ue,Hn.uTime.value=Oe,w){for(let ae=0;ae<N;ae++)k.update(ue);U+=ki.get("nointro")?9:ue}c.update(ue,Oe),l.setHour(i.hour),r.setNight(l.night),r.update(ue,Oe),l.update(ue,o.position);{let ae=k.sys.season().id;ae!==u.season&&(r.setSeason(ae,u.season===-1),u.season=ae)}u.update(ue,Oe,l,o,r.chimney),d.update(l.night,u.rain),Hn.uWind.value=1+u.rain*.8;let G=c.group.position,H=1-Math.exp(-3.2*ue);w?p.focusT>0?(p.focusT-=ue,p.target.lerp(p.focus,H)):(_.set(G.x,G.y+.95,G.z),p.target.lerp(_,H)):(p.yaw=Math.sin(Oe*.06)*.55,_.set(0,1,1.5),p.target.lerp(_,H));let D=w?_n(U/2.2):0,I=Me(27,p.dist,D),Z=Me(.5,p.pitch,D),oe=Math.cos(Z);if(o.position.set(p.target.x+Math.sin(p.yaw)*oe*I,p.target.y+Math.sin(Z)*I,p.target.z+Math.cos(p.yaw)*oe*I),o.lookAt(p.target),a.final&&(_.set(G.x,G.y+.8,G.z).project(o),ke+=((w?Ge(_.y*.5+.5,.3,.7):.5)-ke)*H,a.final.uniforms.uFocus.value=ke),a.render(h,o),w&&P.frame(ei,wi),w&&!C&&i.settings.quality==="auto"&&!ki.get("q")&&(B+=ue,X++,B>4)){let ae=B/X;C=!0,ae>.036&&(v(n==="alta"?"media":"baixa"),C=!1,B=0,X=0,n==="baixa"&&(C=!0))}++ze===3&&(document.title=document.title,window.__ready=!0)};requestAnimationFrame(Yt),window.__game={game:k,state:i,cam:p,gardener:c,world:r,env:l,ui:P,start:E,setQ:v,fx:u}}J1().catch(i=>{console.error(i);let e=document.querySelector("#err");e&&(e.hidden=!1,e.textContent="N\xE3o foi poss\xEDvel abrir o jardim neste aparelho: "+i.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
