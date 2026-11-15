(()=>{var yf=0,zc=1,Mf=2;var bu=1,Ql=2,ni=3,wi=0,en=1,bt=2;var Xn=0,bs=1,va=2,Fc=3,Oc=4,bf=5,Hi=100,Sf=101,wf=102,Bc=103,Hc=104,Ef=200,Tf=201,Af=202,Rf=203,al=204,ol=205,Cf=206,Lf=207,Pf=208,If=209,Df=210,Uf=211,Nf=212,zf=213,Ff=214,Of=0,Bf=1,Hf=2,ya=3,kf=4,Vf=5,Gf=6,Wf=7,ec=0,Xf=1,qf=2,bi=0,tc=1,nc=2,ic=3,wr=4,Yf=5,sc=6;var Su=300,Es=301,Ts=302,ll=303,cl=304,eo=306,As=1e3,Fn=1001,hl=1002,ln=1003,kc=1004;var bo=1005;var Sn=1006,$f=1007;var ar=1008;var Si=1009,Zf=1010,Jf=1011,rc=1012,wu=1013,yi=1014,Mi=1015,xn=1016,Eu=1017,Tu=1018,Gi=1020,Kf=1021,On=1023,jf=1024,Qf=1025,Wi=1026,Rs=1027,ed=1028,Au=1029,td=1030,Ru=1031,Cu=1033,So=33776,wo=33777,Eo=33778,To=33779,Vc=35840,Gc=35841,Wc=35842,Xc=35843,Lu=36196,qc=37492,Yc=37496,$c=37808,Zc=37809,Jc=37810,Kc=37811,jc=37812,Qc=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,ah=37820,oh=37821,Ao=36492,lh=36494,ch=36495,nd=36283,hh=36284,uh=36285,fh=36286;var Ma=2300,ba=2301,Ro=2302,dh=2400,ph=2401,mh=2402;var Pu=3e3,Xi=3001,id=3200,sd=3201,ac=0,rd=1,wn="",ft="srgb",ai="srgb-linear",oc="display-p3",to="display-p3-linear",Sa="linear",dt="srgb",wa="rec709",Ea="p3";var ji=7680;var gh=519,ad=512,od=513,ld=514,Iu=515,cd=516,hd=517,ud=518,fd=519,ul=35044;var xh="300 es",fl=1035,si=2e3,Ta=2001,Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Co=Math.PI/180,dl=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function dd(i,e){return(i%e+e)%e}function Lo(i,e,t){return(1-t)*i+t*e}function _h(i){return(i&i-1)===0&&i!==0}function pl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],_=s[4],b=s[7],L=s[2],A=s[5],P=s[8];return r[0]=o*x+a*v+l*L,r[3]=o*m+a*_+l*A,r[6]=o*p+a*b+l*P,r[1]=c*x+h*v+u*L,r[4]=c*m+h*_+u*A,r[7]=c*p+h*b+u*P,r[2]=d*x+f*v+g*L,r[5]=d*m+f*_+g*A,r[8]=d*p+f*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Po=new Ye;function Du(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=Aa("canvas");return i.style.display="block",i}var vh={};function tr(i){i in vh||(vh[i]=!0,console.warn(i))}var yh=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[ai]:{transfer:Sa,primaries:wa,toReference:i=>i,fromReference:i=>i},[ft]:{transfer:dt,primaries:wa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[to]:{transfer:Sa,primaries:Ea,toReference:i=>i.applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh)},[oc]:{transfer:dt,primaries:Ea,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mh),fromReference:i=>i.applyMatrix3(yh).convertLinearToSRGB()}},md=new Set([ai,to]),lt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!md.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Hr[e].toReference,s=Hr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===wn?Sa:Hr[i].transfer}};function Ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Aa("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gd=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ri(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,En=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Sn,o=ar,a=On,l=Si,c=i.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=ri(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xi?ft:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ft?Xi:Pu}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xi?ft:wn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Su;En.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(f+1)/2,L=(p+1)/2,A=(h+d)/4,P=(u+x)/4,k=(g+m)/4;return _>b&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=P/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=k/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=P/r,s=k/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends Ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xi?ft:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},La=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gl=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),A=Math.atan2(L,p*v);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}let b=a*v;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new N,bh=new qn,oi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Vr.subVectors(this.max,Xs),es.subVectors(e.a,Xs),ts.subVectors(e.b,Xs),ns.subVectors(e.c,Xs),mi.subVectors(ts,es),gi.subVectors(ns,ts),Ni.subVectors(es,ns);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ni.z,Ni.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ni.z,0,-Ni.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ni.y,Ni.x,0];return!No(t,es,ts,ns,Vr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,es,ts,ns,Vr))?!1:(Gr.crossVectors(mi,gi),t=[Gr.x,Gr.y,Gr.z],No(t,es,ts,ns,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,kr=new oi,es=new N,ts=new N,ns=new N,mi=new N,gi=new N,Ni=new N,Xs=new N,Vr=new N,Gr=new N,zi=new N;function No(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var _d=new oi,qs=new N,zo=new N,li=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(zo)),this.expandByPoint(qs.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new N,Fo=new N,Wr=new N,xi=new N,Oo=new N,Xr=new N,Bo=new N,Cs=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Fo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=xi.dot(this.direction),l=-xi.dot(Wr),c=xi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fo).addScaledVector(Wr,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){Oo.subVectors(t,e),Xr.subVectors(n,e),Bo.crossVectors(Oo,Xr);let o=this.direction.dot(Bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);let l=a*this.direction.dot(Xr.crossVectors(xi,Xr));if(l<0)return null;let c=a*this.direction.dot(Oo.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(Bo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,yd)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),_i.crossVectors(n,mn),_i.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),_i.crossVectors(n,mn)),_i.normalize(),qr.crossVectors(mn,_i),s[0]=_i.x,s[4]=qr.x,s[8]=mn.x,s[1]=_i.y,s[5]=qr.y,s[9]=mn.y,s[2]=_i.z,s[6]=qr.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],b=n[11],L=n[15],A=s[0],P=s[4],k=s[8],y=s[12],S=s[1],z=s[5],B=s[9],W=s[13],R=s[2],w=s[6],M=s[10],T=s[14],E=s[3],O=s[7],Z=s[11],K=s[15];return r[0]=o*A+a*S+l*R+c*E,r[4]=o*P+a*z+l*w+c*O,r[8]=o*k+a*B+l*M+c*Z,r[12]=o*y+a*W+l*T+c*K,r[1]=h*A+u*S+d*R+f*E,r[5]=h*P+u*z+d*w+f*O,r[9]=h*k+u*B+d*M+f*Z,r[13]=h*y+u*W+d*T+f*K,r[2]=g*A+x*S+m*R+p*E,r[6]=g*P+x*z+m*w+p*O,r[10]=g*k+x*B+m*M+p*Z,r[14]=g*y+x*W+m*T+p*K,r[3]=v*A+_*S+b*R+L*E,r[7]=v*P+_*z+b*w+L*O,r[11]=v*k+_*B+b*M+L*Z,r[15]=v*y+_*W+b*T+L*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,_=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,b=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,A=t*v+n*_+s*b+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=v*P,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*P,e[4]=_*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*P,e[8]=b*P,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*P,e[12]=L*P,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,_=l*h,b=l*u,L=n.x,A=n.y,P=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+b)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+_)*P,s[9]=(m-v)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=si){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ta)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=si){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,g,x;if(a===si)g=(o+r)*u,x=-2*u;else if(a===Ta)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},is=new N,Un=new He,vd=new N(0,0,0),yd=new N(1,1,1),_i=new N,qr=new N,mn=new N,Sh=new He,wh=new qn,Pa=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pa.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Md=0,Eh=new N,ss=new qn,Qn=new He,Yr=new N,Ys=new N,bd=new N,Sd=new qn,Th=new N(1,0,0),Ah=new N(0,1,0),Rh=new N(0,0,1),wd={type:"added"},Ed={type:"removed"},Dt=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Pa,n=new qn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ye}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ys,Yr,this.up):Qn.lookAt(Yr,Ys,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new N,ei=new N,Ho=new N,ti=new N,rs=new N,as=new N,Ch=new N,ko=new N,Vo=new N,Go=new N,$r=!1,Vi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),ei.subVectors(n,t),Ho.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ei),l=Nn.dot(Ho),c=ei.dot(ei),h=ei.dot(Ho),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,s,r,o,a,l){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),ei.subVectors(e,t),Nn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Nn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return $r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$r=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),as.subVectors(r,n),ko.subVectors(e,n);let l=rs.dot(ko),c=as.dot(ko);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,s);let h=rs.dot(Vo),u=as.dot(Vo);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(rs,o);Go.subVectors(e,r);let f=rs.dot(Go),g=as.dot(Go);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(as,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ch.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ch,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(rs,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=dd(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wo(o,r,e+1/3),this.g=Wo(o,r,e),this.b=Wo(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return lt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Zt(Qt.r*255,0,255))*65536+Math.round(Zt(Qt.g*255,0,255))*256+Math.round(Zt(Qt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=ft){lt.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Zr);let n=Lo(vi.h,Zr.h,t),s=Lo(vi.s,Zr.s,t),r=Lo(vi.l,Zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new ue;ue.NAMES=Uu;var Td=0,Bn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=bs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hn=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new N,Jr=new oe,St=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}};var Ia=class extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Fe=class extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ad=0,bn=new He,Xo=new Dt,os=new N,gn=new oi,$s=new oi,qt=new N,ct=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?Da:Ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(gn.min,$s.min),gn.expandByPoint(qt),qt.addVectors(gn.max,$s.max),gn.expandByPoint(qt)):(gn.expandByPoint($s.min),gn.expandByPoint($s.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),qt.add(os)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new N,h[S]=new N;let u=new N,d=new N,f=new N,g=new oe,x=new oe,m=new oe,p=new N,v=new N;function _(S,z,B){u.fromArray(s,S*3),d.fromArray(s,z*3),f.fromArray(s,B*3),g.fromArray(o,S*2),x.fromArray(o,z*2),m.fromArray(o,B*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(W),v.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(W),c[S].add(p),c[z].add(p),c[B].add(p),h[S].add(v),h[z].add(v),h[B].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,z=b.length;S<z;++S){let B=b[S],W=B.start,R=B.count;for(let w=W,M=W+R;w<M;w+=3)_(n[w+0],n[w+1],n[w+2])}let L=new N,A=new N,P=new N,k=new N;function y(S){P.fromArray(r,S*3),k.copy(P);let z=c[S];L.copy(z),L.sub(P.multiplyScalar(P.dot(z))).normalize(),A.crossVectors(k,z);let W=A.dot(h[S])<0?-1:1;l[S*4]=L.x,l[S*4+1]=L.y,l[S*4+2]=L.z,l[S*4+3]=W}for(let S=0,z=b.length;S<z;++S){let B=b[S],W=B.start,R=B.count;for(let w=W,M=W+R;w<M;w+=3)y(n[w+0]),y(n[w+1]),y(n[w+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new He,Fi=new Cs,Kr=new li,Ph=new N,ls=new N,cs=new N,hs=new N,qo=new N,jr=new N,Qr=new oe,ea=new oe,ta=new oe,Ih=new N,Dh=new N,Uh=new N,na=new N,ia=new N,Ge=class extends Dt{constructor(e=new ct,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,e),o?jr.addScaledVector(qo,h):jr.addScaledVector(qo.sub(t),h))}t.add(jr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(Kr.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Kr,Ph)===null||Fi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,L=_;b<L;b+=3){let A=a.getX(b),P=a.getX(b+1),k=a.getX(b+2);s=sa(this,p,e,n,c,h,u,A,P,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=sa(this,o,e,n,c,h,u,v,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,L=_;b<L;b+=3){let A=b,P=b+1,k=b+2;s=sa(this,p,e,n,c,h,u,A,P,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,b=m+2;s=sa(this,o,e,n,c,h,u,v,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rd(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ls),i.getVertexPosition(l,cs),i.getVertexPosition(c,hs);let h=Rd(i,e,t,n,ls,cs,hs,na);if(h){s&&(Qr.fromBufferAttribute(s,a),ea.fromBufferAttribute(s,l),ta.fromBufferAttribute(s,c),h.uv=Vi.getInterpolation(na,ls,cs,hs,Qr,ea,ta,new oe)),r&&(Qr.fromBufferAttribute(r,a),ea.fromBufferAttribute(r,l),ta.fromBufferAttribute(r,c),h.uv1=Vi.getInterpolation(na,ls,cs,hs,Qr,ea,ta,new oe),h.uv2=h.uv1),o&&(Ih.fromBufferAttribute(o,a),Dh.fromBufferAttribute(o,l),Uh.fromBufferAttribute(o,c),h.normal=Vi.getInterpolation(na,ls,cs,hs,Ih,Dh,Uh,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};Vi.getNormal(ls,cs,hs,u.normal),h.face=u}return h}var kn=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(u,2));function g(x,m,p,v,_,b,L,A,P,k,y){let S=b/P,z=L/k,B=b/2,W=L/2,R=A/2,w=P+1,M=k+1,T=0,E=0,O=new N;for(let Z=0;Z<M;Z++){let K=Z*z-W;for(let te=0;te<w;te++){let G=te*S-B;O[x]=G*v,O[m]=K*_,O[p]=R,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=A>0?1:-1,h.push(O.x,O.y,O.z),u.push(te/P),u.push(1-Z/k),T+=1}}for(let Z=0;Z<k;Z++)for(let K=0;K<P;K++){let te=d+K+w*Z,G=d+K+w*(Z+1),V=d+(K+1)+w*(Z+1),re=d+(K+1)+w*Z;l.push(te,G,re),l.push(G,V,re),E+=6}a.addGroup(f,E,y),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Ls(i[t]);for(let s in n)e[s]=n[s]}return e}function Cd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){return i.getRenderTarget()===null?i.outputColorSpace:lt.workingColorSpace}var Ai={clone:Ls,merge:on},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ua=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends Ua{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=-90,fs=1,xl=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(us,fs,e,t);s.layers=this.layers,this.add(s);let r=new Jt(us,fs,e,t);r.layers=this.layers,this.add(r);let o=new Jt(us,fs,e,t);o.layers=this.layers,this.add(o);let a=new Jt(us,fs,e,t);a.layers=this.layers,this.add(a);let l=new Jt(us,fs,e,t);l.layers=this.layers,this.add(l);let c=new Jt(us,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_l=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xi?ft:wn),this.texture=new Na(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Xn});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=Sn),new xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Yo=new N,Id=new N,Dd=new Ye,zn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Yo.subVectors(n,t).cross(Id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dd.getNormalMatrix(e),s=this.coplanarPoint(Yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new li,ra=new N,lr=class{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+h,m+g,b+v).normalize(),n[3].setComponents(l-o,d-h,m-g,b-v).normalize(),n[4].setComponents(l-a,d-u,m-x,b-_).normalize(),t===si)n[5].setComponents(l+a,d+u,m+x,b+_).normalize();else if(t===Ta)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ud(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var qi=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let _=0;_<c;_++){let b=_*u-r;g.push(b,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,b=v+c*(p+1),L=v+1+c*(p+1),A=v+1+c*p;f.push(_,b,A),f.push(b,L,A)}this.setIndex(f),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
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
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Zd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`
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
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Up=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,em=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,nm=`#define PHONG
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
}`,im=`#define PHONG
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
}`,sm=`#define STANDARD
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
}`,rm=`#define STANDARD
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
}`,am=`#define TOON
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
}`,om=`#define TOON
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
}`,lm=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 color;
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
}`,fm=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Nd,alphahash_pars_fragment:zd,alphamap_fragment:Fd,alphamap_pars_fragment:Od,alphatest_fragment:Bd,alphatest_pars_fragment:Hd,aomap_fragment:kd,aomap_pars_fragment:Vd,batching_pars_vertex:Gd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:$d,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:Qd,color_fragment:ep,color_pars_fragment:tp,color_pars_vertex:np,color_vertex:ip,common:sp,cube_uv_reflection_fragment:rp,defaultnormal_vertex:ap,displacementmap_pars_vertex:op,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:fp,envmap_fragment:dp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Rp,envmap_vertex:xp,fog_vertex:_p,fog_pars_vertex:vp,fog_fragment:yp,fog_pars_fragment:Mp,gradientmap_pars_fragment:bp,lightmap_fragment:Sp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Cp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:zp,lights_fragment_end:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:kp,map_fragment:Vp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphcolor_vertex:$p,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Kp,normal_fragment_begin:jp,normal_fragment_maps:Qp,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:_0,shadowmask_pars_fragment:v0,skinbase_vertex:y0,skinning_pars_vertex:M0,skinning_vertex:b0,skinnormal_vertex:S0,specularmap_fragment:w0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:L0,uv_pars_vertex:P0,uv_vertex:I0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:z0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:B0,depth_vert:H0,depth_frag:k0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:$0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:am,meshtoon_frag:om,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:fm,sprite_frag:dm},pe={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Wn={basic:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ue(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:on([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:on([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:on([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:on([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:on([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:on([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:on([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:on([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:on([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:on([pe.lights,pe.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var aa={r:0,b:0,g:0};function pm(i,e,t,n,s,r,o){let a=new ue(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===eo)?(h===void 0&&(h=new Ge(new kn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ls(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=lt.getTransfer(_.colorSpace)!==dt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ge(new qi(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ls(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(aa,Nu(i)),n.buffers.color.setClear(aa.r,aa.g,aa.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:g}}function mm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(R,w,M,T,E){let O=!1;if(o){let Z=x(T,M,w);c!==Z&&(c=Z,f(c.object)),O=p(R,T,M,E),O&&v(R,T,M,E)}else{let Z=w.wireframe===!0;(c.geometry!==T.id||c.program!==M.id||c.wireframe!==Z)&&(c.geometry=T.id,c.program=M.id,c.wireframe=Z,O=!0)}E!==null&&t.update(E,i.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,k(R,w,M,T),E!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function x(R,w,M){let T=M.wireframe===!0,E=a[R.id];E===void 0&&(E={},a[R.id]=E);let O=E[w.id];O===void 0&&(O={},E[w.id]=O);let Z=O[T];return Z===void 0&&(Z=m(d()),O[T]=Z),Z}function m(R){let w=[],M=[],T=[];for(let E=0;E<s;E++)w[E]=0,M[E]=0,T[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:M,attributeDivisors:T,object:R,attributes:{},index:null}}function p(R,w,M,T){let E=c.attributes,O=w.attributes,Z=0,K=M.getAttributes();for(let te in K)if(K[te].location>=0){let V=E[te],re=O[te];if(re===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),V===void 0||V.attribute!==re||re&&V.data!==re.data)return!0;Z++}return c.attributesNum!==Z||c.index!==T}function v(R,w,M,T){let E={},O=w.attributes,Z=0,K=M.getAttributes();for(let te in K)if(K[te].location>=0){let V=O[te];V===void 0&&(te==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),te==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));let re={};re.attribute=V,V&&V.data&&(re.data=V.data),E[te]=re,Z++}c.attributes=E,c.attributesNum=Z,c.index=T}function _(){let R=c.newAttributes;for(let w=0,M=R.length;w<M;w++)R[w]=0}function b(R){L(R,0)}function L(R,w){let M=c.newAttributes,T=c.enabledAttributes,E=c.attributeDivisors;M[R]=1,T[R]===0&&(i.enableVertexAttribArray(R),T[R]=1),E[R]!==w&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,w),E[R]=w)}function A(){let R=c.newAttributes,w=c.enabledAttributes;for(let M=0,T=w.length;M<T;M++)w[M]!==R[M]&&(i.disableVertexAttribArray(M),w[M]=0)}function P(R,w,M,T,E,O,Z){Z===!0?i.vertexAttribIPointer(R,w,M,E,O):i.vertexAttribPointer(R,w,M,T,E,O)}function k(R,w,M,T){if(n.isWebGL2===!1&&(R.isInstancedMesh||T.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let E=T.attributes,O=M.getAttributes(),Z=w.defaultAttributeValues;for(let K in O){let te=O[K];if(te.location>=0){let G=E[K];if(G===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){let V=G.normalized,re=G.itemSize,ve=t.get(G);if(ve===void 0)continue;let Se=ve.buffer,F=ve.type,q=ve.bytesPerElement,X=n.isWebGL2===!0&&(F===i.INT||F===i.UNSIGNED_INT||G.gpuType===wu);if(G.isInterleavedBufferAttribute){let me=G.data,Y=me.stride,Qe=G.offset;if(me.isInstancedInterleavedBuffer){for(let ne=0;ne<te.locationSize;ne++)L(te.location+ne,me.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ne=0;ne<te.locationSize;ne++)b(te.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ne=0;ne<te.locationSize;ne++)P(te.location+ne,re/te.locationSize,F,V,Y*q,(Qe+re/te.locationSize*ne)*q,X)}else{if(G.isInstancedBufferAttribute){for(let me=0;me<te.locationSize;me++)L(te.location+me,G.meshPerAttribute);R.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let me=0;me<te.locationSize;me++)b(te.location+me);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let me=0;me<te.locationSize;me++)P(te.location+me,re/te.locationSize,F,V,re*q,re/te.locationSize*me*q,X)}}else if(Z!==void 0){let V=Z[K];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(te.location,V);break;case 3:i.vertexAttrib3fv(te.location,V);break;case 4:i.vertexAttrib4fv(te.location,V);break;default:i.vertexAttrib1fv(te.location,V)}}}}A()}function y(){B();for(let R in a){let w=a[R];for(let M in w){let T=w[M];for(let E in T)g(T[E].object),delete T[E];delete w[M]}delete a[R]}}function S(R){if(a[R.id]===void 0)return;let w=a[R.id];for(let M in w){let T=w[M];for(let E in T)g(T[E].object),delete T[E];delete w[M]}delete a[R.id]}function z(R){for(let w in a){let M=a[w];if(M[R.id]===void 0)continue;let T=M[R.id];for(let E in T)g(T[E].object),delete T[E];delete M[R.id]}}function B(){W(),h=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:W,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function gm(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||e.has("OES_texture_float"),L=_&&b,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:A}}function _m(i){let e=this,t=null,n=0,s=!1,r=!1,o=new zn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,b=p.clippingState||null;l.value=b,b=h(g,d,_,f);for(let L=0;L!==_;++L)b[L]=t[L];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vm(i){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Es:a===cl&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ll||a===cl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _l(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ps=class extends Ua{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vs=4,Nh=[.125,.215,.35,.446,.526,.582],ki=20,$o=new Ps,zh=new ue,Zo=null,Jo=0,Ko=0,Bi=(1+Math.sqrt(5))/2,ds=1/Bi,Fh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Bi,ds),new N(0,Bi,-ds),new N(ds,0,Bi),new N(-ds,0,Bi),new N(Bi,ds,0),new N(-Bi,ds,0)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Jo,Ko),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:xn,format:On,colorSpace:ai,depthBuffer:!1},s=Oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ym(r)),this._blurMaterial=Mm(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s){let a=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zh),h.toneMapping=bi,h.autoClear=!1;let f=new Hn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ge(new kn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(zh),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;oa(s,v*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Es||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fh[(s-1)%Fh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ge(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],v=0;for(let P=0;P<ki;++P){let k=P/x,y=Math.exp(-k*k/2);p.push(y),P===0?v+=y:P<m&&(v+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],L=3*b*(s>_-vs?s-_+vs:0),A=4*(this._cubeSize-b);oa(t,L,A,3*b,2*b),l.setRenderTarget(t),l.render(u,$o)}};function ym(i){let e=[],t=[],n=[],s=i,r=i-vs+1+Nh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-vs?l=Nh[o-i+vs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,k=A>2?0:-1,y=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];v.set(y,x*g*A),_.set(d,m*g*A);let S=[A,A,A,A,A,A];b.set(S,p*g*A)}let L=new ct;L.setAttribute("position",new St(v,x)),L.setAttribute("uv",new St(_,m)),L.setAttribute("faceIndex",new St(b,p)),e.push(L),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oh(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mm(i,e,t){let n=new Float32Array(ki),s=new N(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Bh(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Hh(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function bm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ll||l===cl,h=l===Es||l===Ts;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new za(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new za(i));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Sm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,b=v.length;_<b;_+=3){let L=v[_+0],A=v[_+1],P=v[_+2];d.push(L,A,A,P,P,L)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,b=v.length/3-1;_<b;_+=3){let L=_+0,A=_+1,P=_+2;d.push(L,A,A,P,P,L)}}else return;let m=new(Du(d)?Da:Ia)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Em(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Tm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Am(i,e){return i[0]-e[0]}function Rm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let R=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],k=0;v===!0&&(k=1),_===!0&&(k=2),b===!0&&(k=3);let y=h.attributes.position.count*k,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let z=new Float32Array(y*S*4*g),B=new La(z,y,S,g);B.type=Mi,B.needsUpdate=!0;let W=k*4;for(let w=0;w<g;w++){let M=L[w],T=A[w],E=P[w],O=y*S*4*w;for(let Z=0;Z<M.count;Z++){let K=Z*W;v===!0&&(o.fromBufferAttribute(M,Z),z[O+K+0]=o.x,z[O+K+1]=o.y,z[O+K+2]=o.z,z[O+K+3]=0),_===!0&&(o.fromBufferAttribute(T,Z),z[O+K+4]=o.x,z[O+K+5]=o.y,z[O+K+6]=o.z,z[O+K+7]=0),b===!0&&(o.fromBufferAttribute(E,Z),z[O+K+8]=o.x,z[O+K+9]=o.y,z[O+K+10]=o.z,z[O+K+11]=E.itemSize===4?o.w:1)}}x={count:g,texture:B,size:new oe(y,S)},r.set(h,x),h.addEventListener("dispose",R)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(Rm);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Am);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=a[_],L=b[0],A=b[1];L!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=A,p+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Lm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Fa=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Wi,h!==Wi&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=yi),n===void 0&&h===Rs&&(n=Gi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fu=new En,Ou=new Fa(1,1);Ou.compareFunction=Iu;var Bu=new La,Hu=new gl,ku=new Na,kh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Nm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Vt(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Vt(t,n)}}function Fm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,n))return;Gh.set(n),i.uniformMatrix4fv(this.addr,!1,Gh),Vt(t,n)}}function Om(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ou:Fu;t.setTexture2D(e||r,s)}function Ym(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hu,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ku,s)}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bu,s)}function Jm(i){switch(i){case 5126:return Pm;case 35664:return Im;case 35665:return Dm;case 35666:return Um;case 35674:return Nm;case 35675:return zm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return Hm;case 35669:case 35673:return km;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}function Km(i,e){i.uniform1fv(this.addr,e)}function jm(i,e){let t=Os(e,this.size,2);i.uniform2fv(this.addr,t)}function Qm(i,e){let t=Os(e,this.size,3);i.uniform3fv(this.addr,t)}function eg(i,e){let t=Os(e,this.size,4);i.uniform4fv(this.addr,t)}function tg(i,e){let t=Os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ng(i,e){let t=Os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ig(i,e){let t=Os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sg(i,e){i.uniform1iv(this.addr,e)}function rg(i,e){i.uniform2iv(this.addr,e)}function ag(i,e){i.uniform3iv(this.addr,e)}function og(i,e){i.uniform4iv(this.addr,e)}function lg(i,e){i.uniform1uiv(this.addr,e)}function cg(i,e){i.uniform2uiv(this.addr,e)}function hg(i,e){i.uniform3uiv(this.addr,e)}function ug(i,e){i.uniform4uiv(this.addr,e)}function fg(i,e,t){let n=this.cache,s=e.length,r=no(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fu,r[o])}function dg(i,e,t){let n=this.cache,s=e.length,r=no(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hu,r[o])}function pg(i,e,t){let n=this.cache,s=e.length,r=no(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ku,r[o])}function mg(i,e,t){let n=this.cache,s=e.length,r=no(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bu,r[o])}function gg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gg(t.type)}},Ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function qh(i,e){i.seq.push(e),i.map[e.id]=e}function xg(i,e,t){let n=i.name,s=n.length;for(jo.lastIndex=0;;){let r=jo.exec(n),o=jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(t,c===void 0?new vl(a,i,e):new yl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ml(a),qh(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Yh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _g=37297,vg=0;function yg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Mg(i){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(i),n;switch(e===t?n="":e===Ea&&t===wa?n="LinearDisplayP3ToLinearSRGB":e===wa&&t===Ea&&(n="LinearSRGBToLinearDisplayP3"),i){case ai:case to:return[n,"LinearTransferOETF"];case ft:case oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $h(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(e),o)}else return s}function bg(i,e){let t=Mg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sg(i,e){let t;switch(e){case tc:t="Linear";break;case nc:t="Reinhard";break;case ic:t="OptimizedCineon";break;case wr:t="ACESFilmic";break;case sc:t="AgX";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function Tg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ag(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ys(i){return i!==""}function Zh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(i){return i.replace(Rg,Lg)}var Cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lg(i,e){let t=qe[e];if(t===void 0){let n=Cg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(Pg,Ig)}function Ig(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Ug(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ng(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function zg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case qf:e="ENVMAP_BLENDING_ADD";break}return e}function Fg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Og(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Dg(t),c=Ug(t),h=Ng(t),u=zg(t),d=Fg(t),f=t.isWebGL2?"":wg(t),g=Eg(t),x=Tg(r),m=s.createProgram(),p,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ys).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ys).join(`
`),v.length>0&&(v+=`
`)):(p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),v=[f,jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?qe.tonemapping_pars_fragment:"",t.toneMapping!==bi?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=bl(o),o=Zh(o,t),o=Jh(o,t),a=bl(a),a=Zh(a,t),a=Jh(a,t),o=Kh(o),a=Kh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let b=_+p+o,L=_+v+a,A=Yh(s,s.VERTEX_SHADER,b),P=Yh(s,s.FRAGMENT_SHADER,L);s.attachShader(m,A),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(B){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(A).trim(),w=s.getShaderInfoLog(P).trim(),M=!0,T=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(M=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,P);else{let E=$h(s,A,"vertex"),O=$h(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+E+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(R===""||w==="")&&(T=!1);T&&(B.diagnostics={runnable:M,programLog:W,vertexShader:{log:R,prefix:p},fragmentShader:{log:w,prefix:v}})}s.deleteShader(A),s.deleteShader(P),y=new ws(s,m),S=Ag(s,m)}let y;this.getUniforms=function(){return y===void 0&&k(this),y};let S;this.getAttributes=function(){return S===void 0&&k(this),S};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,_g)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=P,this}var Bg=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wl(e),t.set(e,n)),n}},wl=class{constructor(e){this.id=Bg++,this.code=e,this.usedTimes=0}};function Hg(i,e,t,n,s,r,o){let a=new or,l=new Sl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,S,z,B,W){let R=B.fog,w=W.geometry,M=y.isMeshStandardMaterial?B.environment:null,T=(y.isMeshStandardMaterial?t:e).get(y.envMap||M),E=T&&T.mapping===eo?T.image.height:null,O=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Z=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,K=Z!==void 0?Z.length:0,te=0;w.morphAttributes.position!==void 0&&(te=1),w.morphAttributes.normal!==void 0&&(te=2),w.morphAttributes.color!==void 0&&(te=3);let G,V,re,ve;if(O){let sn=Wn[O];G=sn.vertexShader,V=sn.fragmentShader}else G=y.vertexShader,V=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);let Se=i.getRenderTarget(),F=W.isInstancedMesh===!0,q=W.isBatchedMesh===!0,X=!!y.map,me=!!y.matcap,Y=!!T,Qe=!!y.aoMap,ne=!!y.lightMap,ce=!!y.bumpMap,fe=!!y.normalMap,Re=!!y.displacementMap,he=!!y.emissiveMap,I=!!y.metalnessMap,C=!!y.roughnessMap,$=y.anisotropy>0,ie=y.clearcoat>0,se=y.iridescence>0,ae=y.sheen>0,ye=y.transmission>0,ge=$&&!!y.anisotropyMap,we=ie&&!!y.clearcoatMap,De=ie&&!!y.clearcoatNormalMap,$e=ie&&!!y.clearcoatRoughnessMap,le=se&&!!y.iridescenceMap,ot=se&&!!y.iridescenceThicknessMap,Je=ae&&!!y.sheenColorMap,Ue=ae&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Ee=!!y.specularColorMap,Ke=!!y.specularIntensityMap,ut=ye&&!!y.transmissionMap,Tt=ye&&!!y.thicknessMap,et=!!y.gradientMap,de=!!y.alphaMap,H=y.alphaTest>0,xe=!!y.alphaHash,_e=!!y.extensions,Oe=!!w.attributes.uv1,Ne=!!w.attributes.uv2,mt=!!w.attributes.uv3,gt=bi;return y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(gt=i.toneMapping),{isWebGL2:h,shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:V,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:q,instancing:F,instancingColor:F&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:ai,map:X,matcap:me,envMap:Y,envMapMode:Y&&T.mapping,envMapCubeUVHeight:E,aoMap:Qe,lightMap:ne,bumpMap:ce,normalMap:fe,displacementMap:d&&Re,emissiveMap:he,normalMapObjectSpace:fe&&y.normalMapType===rd,normalMapTangentSpace:fe&&y.normalMapType===ac,metalnessMap:I,roughnessMap:C,anisotropy:$,anisotropyMap:ge,clearcoat:ie,clearcoatMap:we,clearcoatNormalMap:De,clearcoatRoughnessMap:$e,iridescence:se,iridescenceMap:le,iridescenceThicknessMap:ot,sheen:ae,sheenColorMap:Je,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:Ee,specularIntensityMap:Ke,transmission:ye,transmissionMap:ut,thicknessMap:Tt,gradientMap:et,opaque:y.transparent===!1&&y.blending===bs,alphaMap:de,alphaTest:H,alphaHash:xe,combine:y.combine,mapUv:X&&x(y.map.channel),aoMapUv:Qe&&x(y.aoMap.channel),lightMapUv:ne&&x(y.lightMap.channel),bumpMapUv:ce&&x(y.bumpMap.channel),normalMapUv:fe&&x(y.normalMap.channel),displacementMapUv:Re&&x(y.displacementMap.channel),emissiveMapUv:he&&x(y.emissiveMap.channel),metalnessMapUv:I&&x(y.metalnessMap.channel),roughnessMapUv:C&&x(y.roughnessMap.channel),anisotropyMapUv:ge&&x(y.anisotropyMap.channel),clearcoatMapUv:we&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(y.sheenRoughnessMap.channel),specularMapUv:Le&&x(y.specularMap.channel),specularColorMapUv:Ee&&x(y.specularColorMap.channel),specularIntensityMapUv:Ke&&x(y.specularIntensityMap.channel),transmissionMapUv:ut&&x(y.transmissionMap.channel),thicknessMapUv:Tt&&x(y.thicknessMap.channel),alphaMapUv:de&&x(y.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(fe||$),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ne,vertexUv3s:mt,pointsUvs:W.isPoints===!0&&!!w.attributes.uv&&(X||de),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:X&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bt,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:_e&&y.extensions.derivatives===!0,extensionFragDepth:_e&&y.extensions.fragDepth===!0,extensionDrawBuffers:_e&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)S.push(z),S.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(v(S,y),_(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function _(y,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){let S=g[y.type],z;if(S){let B=Wn[S];z=Ai.clone(B.uniforms)}else z=y.uniforms;return z}function L(y,S){let z;for(let B=0,W=c.length;B<W;B++){let R=c[B];if(R.cacheKey===S){z=R,++z.usedTimes;break}}return z===void 0&&(z=new Og(i,S,y,r),c.push(z)),z}function A(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:A,releaseShaderCache:P,programs:c,dispose:k}}function kg(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Vg),n.length>1&&n.sort(d||Qh),s.length>1&&s.sort(d||Qh)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new eu,i.set(n,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ue};break;case"SpotLight":t={position:new N,direction:new N,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Xg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qg=0;function Yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $g(i,e){let t=new Wg,n=Xg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new He,a=new He;function l(h,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,b=0,L=0,A=0,P=0,k=0,y=0;h.sort(Yg);let S=u===!0?Math.PI:1;for(let B=0,W=h.length;B<W;B++){let R=h[B],w=R.color,M=R.intensity,T=R.distance,E=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=w.r*M*S,f+=w.g*M*S,g+=w.b*M*S;else if(R.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(R.sh.coefficients[O],M);y++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*S),R.castShadow){let Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[x]=K,s.directionalShadowMap[x]=E,s.directionalShadowMatrix[x]=R.shadow.matrix,b++}s.directional[x]=O,x++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(w).multiplyScalar(M*S),O.distance=T,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,s.spot[p]=O;let Z=R.shadow;if(R.map&&(s.spotLightMap[P]=R.map,P++,Z.updateMatrices(R),R.castShadow&&k++),s.spotLightMatrix[p]=Z.matrix,R.castShadow){let K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[p]=K,s.spotShadowMap[p]=E,A++}p++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(w).multiplyScalar(M),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),s.rectArea[v]=O,v++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity*S),O.distance=R.distance,O.decay=R.decay,R.castShadow){let Z=R.shadow,K=n.get(R);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[m]=K,s.pointShadowMap[m]=E,s.pointShadowMatrix[m]=R.shadow.matrix,L++}s.point[m]=O,m++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(M*S),O.groundColor.copy(R.groundColor).multiplyScalar(M*S),s.hemi[_]=O,_++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==x||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==v||z.hemiLength!==_||z.numDirectionalShadows!==b||z.numPointShadows!==L||z.numSpotShadows!==A||z.numSpotMaps!==P||z.numLightProbes!==y)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+P-k,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=y,z.directionalLength=x,z.pointLength=m,z.spotLength=p,z.rectAreaLength=v,z.hemiLength=_,z.numDirectionalShadows=b,z.numPointShadows=L,z.numSpotShadows=A,z.numSpotMaps=P,z.numLightProbes=y,s.version=qg++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let b=h[v];if(b.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),d++}else if(b.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let L=s.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function tu(i,e){let t=new $g(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zg(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new tu(i,e),t.set(r,[l])):o>=a.length?(l=new tu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var El=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kg=`uniform sampler2D shadow_pass;
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
}`;function jg(i,e,t){let n=new lr,s=new oe,r=new oe,o=new Mt,a=new El({depthPacking:sd}),l=new Tl,c={},h=t.maxTextureSize,u={[wi]:en,[en]:wi,[bt]:bt},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Jg,fragmentShader:Kg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let p=this.type;this.render=function(A,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),S=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Xn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=p!==ni&&this.type===ni,R=p===ni&&this.type!==ni;for(let w=0,M=A.length;w<M;w++){let T=A[w],E=T.shadow;if(E===void 0){console.warn("THREE.WebGLShadowMap:",T,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;s.copy(E.mapSize);let O=E.getFrameExtents();if(s.multiply(O),r.copy(E.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,E.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,E.mapSize.y=r.y)),E.map===null||W===!0||R===!0){let K=this.type!==ni?{minFilter:ln,magFilter:ln}:{};E.map!==null&&E.map.dispose(),E.map=new Ht(s.x,s.y,K),E.map.texture.name=T.name+".shadowMap",E.camera.updateProjectionMatrix()}i.setRenderTarget(E.map),i.clear();let Z=E.getViewportCount();for(let K=0;K<Z;K++){let te=E.getViewport(K);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),B.viewport(o),E.updateMatrices(T,K),n=E.getFrustum(),b(P,k,E.camera,T,this.type)}E.isPointLightShadow!==!0&&this.type===ni&&v(E,k),E.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,z)};function v(A,P){let k=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ht(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,k,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,k,f,x,null)}function _(A,P,k,y){let S=null,z=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)S=z;else if(S=k.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let B=S.uuid,W=P.uuid,R=c[B];R===void 0&&(R={},c[B]=R);let w=R[W];w===void 0&&(w=S.clone(),R[W]=w,P.addEventListener("dispose",L)),S=w}if(S.visible=P.visible,S.wireframe=P.wireframe,y===ni?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,k.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=k}return S}function b(A,P,k,y,S){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ni)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let W=e.update(A),R=A.material;if(Array.isArray(R)){let w=W.groups;for(let M=0,T=w.length;M<T;M++){let E=w[M],O=R[E.materialIndex];if(O&&O.visible){let Z=_(A,O,y,S);A.onBeforeShadow(i,A,P,k,W,Z,E),i.renderBufferDirect(k,null,W,Z,A,E),A.onAfterShadow(i,A,P,k,W,Z,E)}}}else if(R.visible){let w=_(A,R,y,S);A.onBeforeShadow(i,A,P,k,W,w,null),i.renderBufferDirect(k,null,W,w,A,null),A.onAfterShadow(i,A,P,k,W,w,null)}}let B=A.children;for(let W=0,R=B.length;W<R;W++)b(B[W],P,k,y,S)}function L(A){A.target.removeEventListener("dispose",L);for(let k in c){let y=c[k],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Qg(i,e,t){let n=t.isWebGL2;function s(){let H=!1,xe=new Mt,_e=null,Oe=new Mt(0,0,0,0);return{setMask:function(Ne){_e!==Ne&&!H&&(i.colorMask(Ne,Ne,Ne,Ne),_e=Ne)},setLocked:function(Ne){H=Ne},setClear:function(Ne,mt,gt,Wt,sn){sn===!0&&(Ne*=Wt,mt*=Wt,gt*=Wt),xe.set(Ne,mt,gt,Wt),Oe.equals(xe)===!1&&(i.clearColor(Ne,mt,gt,Wt),Oe.copy(xe))},reset:function(){H=!1,_e=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,xe=null,_e=null,Oe=null;return{setTest:function(Ne){Ne?q(i.DEPTH_TEST):X(i.DEPTH_TEST)},setMask:function(Ne){xe!==Ne&&!H&&(i.depthMask(Ne),xe=Ne)},setFunc:function(Ne){if(_e!==Ne){switch(Ne){case Of:i.depthFunc(i.NEVER);break;case Bf:i.depthFunc(i.ALWAYS);break;case Hf:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case kf:i.depthFunc(i.EQUAL);break;case Vf:i.depthFunc(i.GEQUAL);break;case Gf:i.depthFunc(i.GREATER);break;case Wf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Ne}},setLocked:function(Ne){H=Ne},setClear:function(Ne){Oe!==Ne&&(i.clearDepth(Ne),Oe=Ne)},reset:function(){H=!1,xe=null,_e=null,Oe=null}}}function o(){let H=!1,xe=null,_e=null,Oe=null,Ne=null,mt=null,gt=null,Wt=null,sn=null;return{setTest:function(xt){H||(xt?q(i.STENCIL_TEST):X(i.STENCIL_TEST))},setMask:function(xt){xe!==xt&&!H&&(i.stencilMask(xt),xe=xt)},setFunc:function(xt,rn,Gn){(_e!==xt||Oe!==rn||Ne!==Gn)&&(i.stencilFunc(xt,rn,Gn),_e=xt,Oe=rn,Ne=Gn)},setOp:function(xt,rn,Gn){(mt!==xt||gt!==rn||Wt!==Gn)&&(i.stencilOp(xt,rn,Gn),mt=xt,gt=rn,Wt=Gn)},setLocked:function(xt){H=xt},setClear:function(xt){sn!==xt&&(i.clearStencil(xt),sn=xt)},reset:function(){H=!1,xe=null,_e=null,Oe=null,Ne=null,mt=null,gt=null,Wt=null,sn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,b=null,L=null,A=null,P=null,k=null,y=new ue(0,0,0),S=0,z=!1,B=null,W=null,R=null,w=null,M=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,O=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),E=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),E=O>=2);let K=null,te={},G=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),re=new Mt().fromArray(G),ve=new Mt().fromArray(V);function Se(H,xe,_e,Oe){let Ne=new Uint8Array(4),mt=i.createTexture();i.bindTexture(H,mt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<_e;gt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(xe+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return mt}let F={};F[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(F[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),q(i.DEPTH_TEST),l.setFunc(ya),he(!1),I(zc),q(i.CULL_FACE),fe(Xn);function q(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function X(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function me(H,xe){return f[H]!==xe?(i.bindFramebuffer(H,xe),f[H]=xe,n&&(H===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),H===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function Y(H,xe){let _e=x,Oe=!1;if(H)if(_e=g.get(xe),_e===void 0&&(_e=[],g.set(xe,_e)),H.isWebGLMultipleRenderTargets){let Ne=H.texture;if(_e.length!==Ne.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,gt=Ne.length;mt<gt;mt++)_e[mt]=i.COLOR_ATTACHMENT0+mt;_e.length=Ne.length,Oe=!0}}else _e[0]!==i.COLOR_ATTACHMENT0&&(_e[0]=i.COLOR_ATTACHMENT0,Oe=!0);else _e[0]!==i.BACK&&(_e[0]=i.BACK,Oe=!0);Oe&&(t.isWebGL2?i.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function Qe(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let ne={[Hi]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[wf]:i.FUNC_REVERSE_SUBTRACT};if(n)ne[Bc]=i.MIN,ne[Hc]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(ne[Bc]=H.MIN_EXT,ne[Hc]=H.MAX_EXT)}let ce={[Ef]:i.ZERO,[Tf]:i.ONE,[Af]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Pf]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[zf]:i.CONSTANT_ALPHA,[Ff]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(H,xe,_e,Oe,Ne,mt,gt,Wt,sn,xt){if(H===Xn){p===!0&&(X(i.BLEND),p=!1);return}if(p===!1&&(q(i.BLEND),p=!0),H!==bf){if(H!==v||xt!==z){if((_!==Hi||A!==Hi)&&(i.blendEquation(i.FUNC_ADD),_=Hi,A=Hi),xt)switch(H){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,L=null,P=null,k=null,y.set(0,0,0),S=0,v=H,z=xt}return}Ne=Ne||xe,mt=mt||_e,gt=gt||Oe,(xe!==_||Ne!==A)&&(i.blendEquationSeparate(ne[xe],ne[Ne]),_=xe,A=Ne),(_e!==b||Oe!==L||mt!==P||gt!==k)&&(i.blendFuncSeparate(ce[_e],ce[Oe],ce[mt],ce[gt]),b=_e,L=Oe,P=mt,k=gt),(Wt.equals(y)===!1||sn!==S)&&(i.blendColor(Wt.r,Wt.g,Wt.b,sn),y.copy(Wt),S=sn),v=H,z=!1}function Re(H,xe){H.side===bt?X(i.CULL_FACE):q(i.CULL_FACE);let _e=H.side===en;xe&&(_e=!_e),he(_e),H.blending===bs&&H.transparent===!1?fe(Xn):fe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Oe=H.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):X(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(H){B!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),B=H)}function I(H){H!==yf?(q(i.CULL_FACE),H!==W&&(H===zc?i.cullFace(i.BACK):H===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):X(i.CULL_FACE),W=H}function C(H){H!==R&&(E&&i.lineWidth(H),R=H)}function $(H,xe,_e){H?(q(i.POLYGON_OFFSET_FILL),(w!==xe||M!==_e)&&(i.polygonOffset(xe,_e),w=xe,M=_e)):X(i.POLYGON_OFFSET_FILL)}function ie(H){H?q(i.SCISSOR_TEST):X(i.SCISSOR_TEST)}function se(H){H===void 0&&(H=i.TEXTURE0+T-1),K!==H&&(i.activeTexture(H),K=H)}function ae(H,xe,_e){_e===void 0&&(K===null?_e=i.TEXTURE0+T-1:_e=K);let Oe=te[_e];Oe===void 0&&(Oe={type:void 0,texture:void 0},te[_e]=Oe),(Oe.type!==H||Oe.texture!==xe)&&(K!==_e&&(i.activeTexture(_e),K=_e),i.bindTexture(H,xe||F[H]),Oe.type=H,Oe.texture=xe)}function ye(){let H=te[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ke(H){re.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),re.copy(H))}function ut(H){ve.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ve.copy(H))}function Tt(H,xe){let _e=u.get(xe);_e===void 0&&(_e=new WeakMap,u.set(xe,_e));let Oe=_e.get(H);Oe===void 0&&(Oe=i.getUniformBlockIndex(xe,H.name),_e.set(H,Oe))}function et(H,xe){let Oe=u.get(xe).get(H);h.get(xe)!==Oe&&(i.uniformBlockBinding(xe,Oe,H.__bindingPointIndex),h.set(xe,Oe))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},K=null,te={},f={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,b=null,L=null,A=null,P=null,k=null,y=new ue(0,0,0),S=0,z=!1,B=null,W=null,R=null,w=null,M=null,re.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:q,disable:X,bindFramebuffer:me,drawBuffers:Y,useProgram:Qe,setBlending:fe,setMaterial:Re,setFlipSided:he,setCullFace:I,setLineWidth:C,setPolygonOffset:$,setScissorTest:ie,activeTexture:se,bindTexture:ae,unbindTexture:ye,compressedTexImage2D:ge,compressedTexImage3D:we,texImage2D:Le,texImage3D:Ee,updateUBOMapping:Tt,uniformBlockBinding:et,texStorage2D:Je,texStorage3D:Ue,texSubImage2D:De,texSubImage3D:$e,compressedTexSubImage2D:le,compressedTexSubImage3D:ot,scissor:Ke,viewport:ut,reset:de}}function ex(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return f?new OffscreenCanvas(I,C):Aa("canvas")}function x(I,C,$,ie){let se=1;if((I.width>ie||I.height>ie)&&(se=ie/Math.max(I.width,I.height)),se<1||C===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ae=C?pl:Math.floor,ye=ae(se*I.width),ge=ae(se*I.height);u===void 0&&(u=g(ye,ge));let we=$?g(ye,ge):u;return we.width=ye,we.height=ge,we.getContext("2d").drawImage(I,0,0,ye,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ye+"x"+ge+")."),we}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return _h(I.width)&&_h(I.height)}function p(I){return a?!1:I.wrapS!==Fn||I.wrapT!==Fn||I.minFilter!==ln&&I.minFilter!==Sn}function v(I,C){return I.generateMipmaps&&C&&I.minFilter!==ln&&I.minFilter!==Sn}function _(I){i.generateMipmap(I)}function b(I,C,$,ie,se=!1){if(a===!1)return C;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=C;if(C===i.RED&&($===i.FLOAT&&(ae=i.R32F),$===i.HALF_FLOAT&&(ae=i.R16F),$===i.UNSIGNED_BYTE&&(ae=i.R8)),C===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ae=i.R8UI),$===i.UNSIGNED_SHORT&&(ae=i.R16UI),$===i.UNSIGNED_INT&&(ae=i.R32UI),$===i.BYTE&&(ae=i.R8I),$===i.SHORT&&(ae=i.R16I),$===i.INT&&(ae=i.R32I)),C===i.RG&&($===i.FLOAT&&(ae=i.RG32F),$===i.HALF_FLOAT&&(ae=i.RG16F),$===i.UNSIGNED_BYTE&&(ae=i.RG8)),C===i.RGBA){let ye=se?Sa:lt.getTransfer(ie);$===i.FLOAT&&(ae=i.RGBA32F),$===i.HALF_FLOAT&&(ae=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ae=ye===dt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function L(I,C,$){return v(I,$)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==Sn?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function A(I){return I===ln||I===kc||I===bo?i.NEAREST:i.LINEAR}function P(I){let C=I.target;C.removeEventListener("dispose",P),y(C),C.isVideoTexture&&h.delete(C)}function k(I){let C=I.target;C.removeEventListener("dispose",k),z(C)}function y(I){let C=n.get(I);if(C.__webglInit===void 0)return;let $=I.source,ie=d.get($);if(ie){let se=ie[C.__cacheKey];se.usedTimes--,se.usedTimes===0&&S(I),Object.keys(ie).length===0&&d.delete($)}n.remove(I)}function S(I){let C=n.get(I);i.deleteTexture(C.__webglTexture);let $=I.source,ie=d.get($);delete ie[C.__cacheKey],o.memory.textures--}function z(I){let C=I.texture,$=n.get(I),ie=n.get(C);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray($.__webglFramebuffer[se]))for(let ae=0;ae<$.__webglFramebuffer[se].length;ae++)i.deleteFramebuffer($.__webglFramebuffer[se][ae]);else i.deleteFramebuffer($.__webglFramebuffer[se]);$.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer[se])}else{if(Array.isArray($.__webglFramebuffer))for(let se=0;se<$.__webglFramebuffer.length;se++)i.deleteFramebuffer($.__webglFramebuffer[se]);else i.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&i.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&i.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let se=0;se<$.__webglColorRenderbuffer.length;se++)$.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer($.__webglColorRenderbuffer[se]);$.__webglDepthRenderbuffer&&i.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let se=0,ae=C.length;se<ae;se++){let ye=n.get(C[se]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(C[se])}n.remove(C),n.remove(I)}let B=0;function W(){B=0}function R(){let I=B;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),B+=1,I}function w(I){let C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function M(I,C){let $=n.get(I);if(I.isVideoTexture&&Re(I),I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){let ie=I.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re($,I,C);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+C)}function T(I,C){let $=n.get(I);if(I.version>0&&$.__version!==I.version){re($,I,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+C)}function E(I,C){let $=n.get(I);if(I.version>0&&$.__version!==I.version){re($,I,C);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+C)}function O(I,C){let $=n.get(I);if(I.version>0&&$.__version!==I.version){ve($,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+C)}let Z={[As]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[hl]:i.MIRRORED_REPEAT},K={[ln]:i.NEAREST,[kc]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[$f]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},te={[ad]:i.NEVER,[fd]:i.ALWAYS,[od]:i.LESS,[Iu]:i.LEQUAL,[ld]:i.EQUAL,[ud]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function G(I,C,$){if($?(i.texParameteri(I,i.TEXTURE_WRAP_S,Z[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,K[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,K[C.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==Fn||C.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,A(C.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,A(C.minFilter)),C.minFilter!==ln&&C.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===ln||C.minFilter!==bo&&C.minFilter!==ar||C.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===xn&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function V(I,C){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",P));let ie=C.source,se=d.get(ie);se===void 0&&(se={},d.set(ie,se));let ae=w(C);if(ae!==I.__cacheKey){se[ae]===void 0&&(se[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[ae].usedTimes++;let ye=se[I.__cacheKey];ye!==void 0&&(se[I.__cacheKey].usedTimes--,ye.usedTimes===0&&S(C)),I.__cacheKey=ae,I.__webglTexture=se[ae].texture}return $}function re(I,C,$){let ie=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=i.TEXTURE_3D);let se=V(I,C),ae=C.source;t.bindTexture(ie,I.__webglTexture,i.TEXTURE0+$);let ye=n.get(ae);if(ae.version!==ye.__version||se===!0){t.activeTexture(i.TEXTURE0+$);let ge=lt.getPrimaries(lt.workingColorSpace),we=C.colorSpace===wn?null:lt.getPrimaries(C.colorSpace),De=C.colorSpace===wn||ge===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let $e=p(C)&&m(C.image)===!1,le=x(C.image,$e,!1,s.maxTextureSize);le=he(C,le);let ot=m(le)||a,Je=r.convert(C.format,C.colorSpace),Ue=r.convert(C.type),Le=b(C.internalFormat,Je,Ue,C.colorSpace,C.isVideoTexture);G(ie,C,ot);let Ee,Ke=C.mipmaps,ut=a&&C.isVideoTexture!==!0&&Le!==Lu,Tt=ye.__version===void 0||se===!0,et=L(C,le,ot);if(C.isDepthTexture)Le=i.DEPTH_COMPONENT,a?C.type===Mi?Le=i.DEPTH_COMPONENT32F:C.type===yi?Le=i.DEPTH_COMPONENT24:C.type===Gi?Le=i.DEPTH24_STENCIL8:Le=i.DEPTH_COMPONENT16:C.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Wi&&Le===i.DEPTH_COMPONENT&&C.type!==rc&&C.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=yi,Ue=r.convert(C.type)),C.format===Rs&&Le===i.DEPTH_COMPONENT&&(Le=i.DEPTH_STENCIL,C.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Gi,Ue=r.convert(C.type))),Tt&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,Je,Ue,null));else if(C.isDataTexture)if(Ke.length>0&&ot){ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,et,Le,Ke[0].width,Ke[0].height);for(let de=0,H=Ke.length;de<H;de++)Ee=Ke[de],ut?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Je,Ue,Ee.data):t.texImage2D(i.TEXTURE_2D,de,Le,Ee.width,Ee.height,0,Je,Ue,Ee.data);C.generateMipmaps=!1}else ut?(Tt&&t.texStorage2D(i.TEXTURE_2D,et,Le,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Je,Ue,le.data)):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,Je,Ue,le.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Le,Ke[0].width,Ke[0].height,le.depth);for(let de=0,H=Ke.length;de<H;de++)Ee=Ke[de],C.format!==On?Je!==null?ut?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,le.depth,Je,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Le,Ee.width,Ee.height,le.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,le.depth,Je,Ue,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Le,Ee.width,Ee.height,le.depth,0,Je,Ue,Ee.data)}else{ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,et,Le,Ke[0].width,Ke[0].height);for(let de=0,H=Ke.length;de<H;de++)Ee=Ke[de],C.format!==On?Je!==null?ut?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Je,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Je,Ue,Ee.data):t.texImage2D(i.TEXTURE_2D,de,Le,Ee.width,Ee.height,0,Je,Ue,Ee.data)}else if(C.isDataArrayTexture)ut?(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Le,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Je,Ue,le.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,Je,Ue,le.data);else if(C.isData3DTexture)ut?(Tt&&t.texStorage3D(i.TEXTURE_3D,et,Le,le.width,le.height,le.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Je,Ue,le.data)):t.texImage3D(i.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,Je,Ue,le.data);else if(C.isFramebufferTexture){if(Tt)if(ut)t.texStorage2D(i.TEXTURE_2D,et,Le,le.width,le.height);else{let de=le.width,H=le.height;for(let xe=0;xe<et;xe++)t.texImage2D(i.TEXTURE_2D,xe,Le,de,H,0,Je,Ue,null),de>>=1,H>>=1}}else if(Ke.length>0&&ot){ut&&Tt&&t.texStorage2D(i.TEXTURE_2D,et,Le,Ke[0].width,Ke[0].height);for(let de=0,H=Ke.length;de<H;de++)Ee=Ke[de],ut?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Je,Ue,Ee):t.texImage2D(i.TEXTURE_2D,de,Le,Je,Ue,Ee);C.generateMipmaps=!1}else ut?(Tt&&t.texStorage2D(i.TEXTURE_2D,et,Le,le.width,le.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,Ue,le)):t.texImage2D(i.TEXTURE_2D,0,Le,Je,Ue,le);v(C,ot)&&_(ie),ye.__version=ae.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function ve(I,C,$){if(C.image.length!==6)return;let ie=V(I,C),se=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);let ae=n.get(se);if(se.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+$);let ye=lt.getPrimaries(lt.workingColorSpace),ge=C.colorSpace===wn?null:lt.getPrimaries(C.colorSpace),we=C.colorSpace===wn||ye===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let De=C.isCompressedTexture||C.image[0].isCompressedTexture,$e=C.image[0]&&C.image[0].isDataTexture,le=[];for(let de=0;de<6;de++)!De&&!$e?le[de]=x(C.image[de],!1,!0,s.maxCubemapSize):le[de]=$e?C.image[de].image:C.image[de],le[de]=he(C,le[de]);let ot=le[0],Je=m(ot)||a,Ue=r.convert(C.format,C.colorSpace),Le=r.convert(C.type),Ee=b(C.internalFormat,Ue,Le,C.colorSpace),Ke=a&&C.isVideoTexture!==!0,ut=ae.__version===void 0||ie===!0,Tt=L(C,ot,Je);G(i.TEXTURE_CUBE_MAP,C,Je);let et;if(De){Ke&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Ee,ot.width,ot.height);for(let de=0;de<6;de++){et=le[de].mipmaps;for(let H=0;H<et.length;H++){let xe=et[H];C.format!==On?Ue!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H,0,0,xe.width,xe.height,Ue,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H,0,0,xe.width,xe.height,Ue,Le,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H,Ee,xe.width,xe.height,0,Ue,Le,xe.data)}}}else{et=C.mipmaps,Ke&&ut&&(et.length>0&&Tt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Ee,le[0].width,le[0].height));for(let de=0;de<6;de++)if($e){Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,le[de].width,le[de].height,Ue,Le,le[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,le[de].width,le[de].height,0,Ue,Le,le[de].data);for(let H=0;H<et.length;H++){let _e=et[H].image[de].image;Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H+1,0,0,_e.width,_e.height,Ue,Le,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H+1,Ee,_e.width,_e.height,0,Ue,Le,_e.data)}}else{Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ue,Le,le[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,Ue,Le,le[de]);for(let H=0;H<et.length;H++){let xe=et[H];Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H+1,0,0,Ue,Le,xe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,H+1,Ee,Ue,Le,xe.image[de])}}}v(C,Je)&&_(i.TEXTURE_CUBE_MAP),ae.__version=se.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Se(I,C,$,ie,se,ae){let ye=r.convert($.format,$.colorSpace),ge=r.convert($.type),we=b($.internalFormat,ye,ge,$.colorSpace);if(!n.get(C).__hasExternalTextures){let $e=Math.max(1,C.width>>ae),le=Math.max(1,C.height>>ae);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ae,we,$e,le,C.depth,0,ye,ge,null):t.texImage2D(se,ae,we,$e,le,0,ye,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),fe(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,se,n.get($).__webglTexture,0,ce(C)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,se,n.get($).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(I,C,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer&&!C.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if($||fe(C)){let se=C.depthTexture;se&&se.isDepthTexture&&(se.type===Mi?ie=i.DEPTH_COMPONENT32F:se.type===yi&&(ie=i.DEPTH_COMPONENT24));let ae=ce(C);fe(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,ie,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ie,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(C.depthBuffer&&C.stencilBuffer){let ie=ce(C);$&&fe(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,C.width,C.height):fe(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{let ie=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0;se<ie.length;se++){let ae=ie[se],ye=r.convert(ae.format,ae.colorSpace),ge=r.convert(ae.type),we=b(ae.internalFormat,ye,ge,ae.colorSpace),De=ce(C);$&&fe(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,we,C.width,C.height):fe(C)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,we,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,we,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),M(C.depthTexture,0);let ie=n.get(C.depthTexture).__webglTexture,se=ce(C);if(C.depthTexture.format===Wi)fe(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(C.depthTexture.format===Rs)fe(C)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function X(I){let C=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");q(C.__webglFramebuffer,I)}else if($){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]=i.createRenderbuffer(),F(C.__webglDepthbuffer[ie],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),F(C.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(I,C,$){let ie=n.get(I);C!==void 0&&Se(ie.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&X(I)}function Y(I){let C=I.texture,$=n.get(I),ie=n.get(C);I.addEventListener("dispose",k),I.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=C.version,o.memory.textures++);let se=I.isWebGLCubeRenderTarget===!0,ae=I.isWebGLMultipleRenderTargets===!0,ye=m(I)||a;if(se){$.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[ge]=[];for(let we=0;we<C.mipmaps.length;we++)$.__webglFramebuffer[ge][we]=i.createFramebuffer()}else $.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let ge=0;ge<C.mipmaps.length;ge++)$.__webglFramebuffer[ge]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(ae)if(s.drawBuffers){let ge=I.texture;for(let we=0,De=ge.length;we<De;we++){let $e=n.get(ge[we]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&fe(I)===!1){let ge=ae?C:[C];$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){let De=ge[we];$.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[we]);let $e=r.convert(De.format,De.colorSpace),le=r.convert(De.type),ot=b(De.internalFormat,$e,le,De.colorSpace,I.isXRRenderTarget===!0),Je=ce(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,$.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),F($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),G(i.TEXTURE_CUBE_MAP,C,ye);for(let ge=0;ge<6;ge++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)Se($.__webglFramebuffer[ge][we],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we);else Se($.__webglFramebuffer[ge],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(C,ye)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let ge=I.texture;for(let we=0,De=ge.length;we<De;we++){let $e=ge[we],le=n.get($e);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),G(i.TEXTURE_2D,$e,ye),Se($.__webglFramebuffer,I,$e,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),v($e,ye)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ie.__webglTexture),G(ge,C,ye),a&&C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)Se($.__webglFramebuffer[we],I,C,i.COLOR_ATTACHMENT0,ge,we);else Se($.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ge,0);v(C,ye)&&_(ge),t.unbindTexture()}I.depthBuffer&&X(I)}function Qe(I){let C=m(I)||a,$=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ie=0,se=$.length;ie<se;ie++){let ae=$[ie];if(v(ae,C)){let ye=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(ae).__webglTexture;t.bindTexture(ye,ge),_(ye),t.unbindTexture()}}}function ne(I){if(a&&I.samples>0&&fe(I)===!1){let C=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],$=I.width,ie=I.height,se=i.COLOR_BUFFER_BIT,ae=[],ye=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(I),we=I.isWebGLMultipleRenderTargets===!0;if(we)for(let De=0;De<C.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<C.length;De++){ae.push(i.COLOR_ATTACHMENT0+De),I.depthBuffer&&ae.push(ye);let $e=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if($e===!1&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]),$e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),we){let le=n.get(C[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,$,ie,0,0,$,ie,se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let De=0;De<C.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);let $e=n.get(C[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ce(I){return Math.min(s.maxSamples,I.samples)}function fe(I){let C=n.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Re(I){let C=o.render.frame;h.get(I)!==C&&(h.set(I,C),I.update())}function he(I,C){let $=I.colorSpace,ie=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===fl||$!==ai&&$!==wn&&(lt.getTransfer($)===dt?a===!1?e.has("EXT_sRGB")===!0&&ie===On?(I.format=fl,I.minFilter=Sn,I.generateMipmaps=!1):C=Ra.sRGBToLinear(C):(ie!==On||se!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}this.allocateTextureUnit=R,this.resetTextureUnits=W,this.setTexture2D=M,this.setTexture2DArray=T,this.setTexture3D=E,this.setTextureCube=O,this.rebindTextures=me,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=fe}function tx(i,e,t){let n=t.isWebGL2;function s(r,o=wn){let a,l=lt.getTransfer(o);if(r===Si)return i.UNSIGNED_BYTE;if(r===Eu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Tu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Zf)return i.BYTE;if(r===Jf)return i.SHORT;if(r===rc)return i.UNSIGNED_SHORT;if(r===wu)return i.INT;if(r===yi)return i.UNSIGNED_INT;if(r===Mi)return i.FLOAT;if(r===xn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kf)return i.ALPHA;if(r===On)return i.RGBA;if(r===jf)return i.LUMINANCE;if(r===Qf)return i.LUMINANCE_ALPHA;if(r===Wi)return i.DEPTH_COMPONENT;if(r===Rs)return i.DEPTH_STENCIL;if(r===fl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ed)return i.RED;if(r===Au)return i.RED_INTEGER;if(r===td)return i.RG;if(r===Ru)return i.RG_INTEGER;if(r===Cu)return i.RGBA_INTEGER;if(r===So||r===wo||r===Eo||r===To)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===So)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===To)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===So)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===To)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vc||r===Gc||r===Wc||r===Xc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Vc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qc||r===Yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qc)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$c||r===Zc||r===Jc||r===Kc||r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$c)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qc)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ah)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ao||r===lh||r===ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ao)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nd||r===hh||r===uh||r===fh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ao)return a.COMPRESSED_RED_RGTC1_EXT;if(r===hh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Al=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ft=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},nx={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rl=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,v=[],_=[],b=new oe,L=null,A=new Jt;A.layers.enable(1),A.viewport=new Mt;let P=new Jt;P.layers.enable(2),P.viewport=new Mt;let k=[A,P],y=new Al;y.layers.enable(1),y.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let V=v[G];return V===void 0&&(V=new nr,v[G]=V),V.getTargetRaySpace()},this.getControllerGrip=function(G){let V=v[G];return V===void 0&&(V=new nr,v[G]=V),V.getGripSpace()},this.getHand=function(G){let V=v[G];return V===void 0&&(V=new nr,v[G]=V),V.getHandSpace()};function B(G){let V=_.indexOf(G.inputSource);if(V===-1)return;let re=v[V];re!==void 0&&(re.update(G.inputSource,G.frame,c||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",R);for(let G=0;G<v.length;G++){let V=_[G];V!==null&&(_[G]=null,v[G].disconnect(V))}S=null,z=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",R),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ht(f.framebufferWidth,f.framebufferHeight,{format:On,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,re=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=x.stencil?Rs:Wi,re=x.stencil?Gi:yi);let Se={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Ht(d.textureWidth,d.textureHeight,{format:On,type:Si,depthTexture:new Fa(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let F=e.properties.get(p);F.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(G){for(let V=0;V<G.removed.length;V++){let re=G.removed[V],ve=_.indexOf(re);ve>=0&&(_[ve]=null,v[ve].disconnect(re))}for(let V=0;V<G.added.length;V++){let re=G.added[V],ve=_.indexOf(re);if(ve===-1){for(let F=0;F<v.length;F++)if(F>=_.length){_.push(re),ve=F;break}else if(_[F]===null){_[F]=re,ve=F;break}if(ve===-1)break}let Se=v[ve];Se&&Se.connect(re)}}let w=new N,M=new N;function T(G,V,re){w.setFromMatrixPosition(V.matrixWorld),M.setFromMatrixPosition(re.matrixWorld);let ve=w.distanceTo(M),Se=V.projectionMatrix.elements,F=re.projectionMatrix.elements,q=Se[14]/(Se[10]-1),X=Se[14]/(Se[10]+1),me=(Se[9]+1)/Se[5],Y=(Se[9]-1)/Se[5],Qe=(Se[8]-1)/Se[0],ne=(F[8]+1)/F[0],ce=q*Qe,fe=q*ne,Re=ve/(-Qe+ne),he=Re*-Qe;V.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(he),G.translateZ(Re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let I=q+Re,C=X+Re,$=ce-he,ie=fe+(ve-he),se=me*X/C*I,ae=Y*X/C*I;G.projectionMatrix.makePerspective($,ie,se,ae,I,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function E(G,V){V===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(V.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;y.near=P.near=A.near=G.near,y.far=P.far=A.far=G.far,(S!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,z=y.far);let V=G.parent,re=y.cameras;E(y,V);for(let ve=0;ve<re.length;ve++)E(re[ve],V);re.length===2?T(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),O(G,y,V)};function O(G,V,re){re===null?G.matrix.copy(V.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(V.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(V.projectionMatrix),G.projectionMatrixInverse.copy(V.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=dl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Z=null;function K(G,V){if(h=V.getViewerPose(c||o),g=V,h!==null){let re=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;re.length!==y.cameras.length&&(y.cameras.length=0,ve=!0);for(let Se=0;Se<re.length;Se++){let F=re[Se],q=null;if(f!==null)q=f.getViewport(F);else{let me=u.getViewSubImage(d,F);q=me.viewport,Se===0&&(e.setRenderTargetTextures(p,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(p))}let X=k[Se];X===void 0&&(X=new Jt,X.layers.enable(Se),X.viewport=new Mt,k[Se]=X),X.matrix.fromArray(F.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(F.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(q.x,q.y,q.width,q.height),Se===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ve===!0&&y.cameras.push(X)}}for(let re=0;re<v.length;re++){let ve=_[re],Se=v[re];ve!==null&&Se!==void 0&&Se.update(ve,V,c||o)}Z&&Z(G,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}let te=new zu;te.setAnimationLoop(K),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}};function ix(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let b=_.program;n.uniformBlockBinding(v,b)}function c(v,_){let b=s[v.id];b===void 0&&(g(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(v,L);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let _=u();v.__bindingPointIndex=_;let b=i.createBuffer(),L=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],b=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,P=b.length;A<P;A++){let k=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,S=k.length;y<S;y++){let z=k[y];if(f(z,A,y,L)===!0){let B=z.__offset,W=Array.isArray(z.value)?z.value:[z.value],R=0;for(let w=0;w<W.length;w++){let M=W[w],T=x(M);typeof M=="number"||typeof M=="boolean"?(z.__data[0]=M,i.bufferSubData(i.UNIFORM_BUFFER,B+R,z.__data)):M.isMatrix3?(z.__data[0]=M.elements[0],z.__data[1]=M.elements[1],z.__data[2]=M.elements[2],z.__data[3]=0,z.__data[4]=M.elements[3],z.__data[5]=M.elements[4],z.__data[6]=M.elements[5],z.__data[7]=0,z.__data[8]=M.elements[6],z.__data[9]=M.elements[7],z.__data[10]=M.elements[8],z.__data[11]=0):(M.toArray(z.__data,R),R+=T.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,b,L){let A=v.value,P=_+"_"+b;if(L[P]===void 0)return typeof A=="number"||typeof A=="boolean"?L[P]=A:L[P]=A.clone(),!0;{let k=L[P];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return L[P]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(v){let _=v.uniforms,b=0,L=16;for(let P=0,k=_.length;P<k;P++){let y=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,z=y.length;S<z;S++){let B=y[S],W=Array.isArray(B.value)?B.value:[B.value];for(let R=0,w=W.length;R<w;R++){let M=W[R],T=x(M),E=b%L;E!==0&&L-E<T.boundary&&(b+=L-E),B.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=T.storage}}}let A=b%L;return A>0&&(b+=L-A),v.__size=b,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var cr=class{constructor(e={}){let{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;let _=this,b=!1,L=0,A=0,P=null,k=-1,y=null,S=new Mt,z=new Mt,B=null,W=new ue(0),R=0,w=t.width,M=t.height,T=1,E=null,O=null,Z=new Mt(0,0,w,M),K=new Mt(0,0,w,M),te=!1,G=new lr,V=!1,re=!1,ve=null,Se=new He,F=new oe,q=new N,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return P===null?T:1}let Y=n;function Qe(U,J){for(let Q=0;Q<U.length;Q++){let ee=U[Q],j=t.getContext(ee,J);if(j!==null)return j}return null}try{let U={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",xe,!1),Y===null){let J=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&J.shift(),Y=Qe(J,U),Y===null)throw Qe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ne,ce,fe,Re,he,I,C,$,ie,se,ae,ye,ge,we,De,$e,le,ot,Je,Ue,Le,Ee,Ke,ut;function Tt(){ne=new Sm(Y),ce=new xm(Y,ne,e),ne.init(ce),Ee=new tx(Y,ne,ce),fe=new Qg(Y,ne,ce),Re=new Tm(Y),he=new kg,I=new ex(Y,ne,fe,he,ce,Ee,Re),C=new vm(_),$=new bm(_),ie=new Ud(Y,ce),Ke=new mm(Y,ne,ie,ce),se=new wm(Y,ie,Re,Ke),ae=new Lm(Y,se,ie,Re),Je=new Cm(Y,ce,I),$e=new _m(he),ye=new Hg(_,C,$,ne,ce,Ke,$e),ge=new ix(_,he),we=new Gg,De=new Zg(ne,ce),ot=new pm(_,C,$,fe,ae,d,l),le=new jg(_,ae,ce),ut=new sx(Y,Re,ce,fe),Ue=new gm(Y,ne,Re,ce),Le=new Em(Y,ne,Re,ce),Re.programs=ye.programs,_.capabilities=ce,_.extensions=ne,_.properties=he,_.renderLists=we,_.shadowMap=le,_.state=fe,_.info=Re}Tt();let et=new Rl(_,Y);this.xr=et,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let U=ne.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=ne.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(U){U!==void 0&&(T=U,this.setSize(w,M,!1))},this.getSize=function(U){return U.set(w,M)},this.setSize=function(U,J,Q=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=U,M=J,t.width=Math.floor(U*T),t.height=Math.floor(J*T),Q===!0&&(t.style.width=U+"px",t.style.height=J+"px"),this.setViewport(0,0,U,J)},this.getDrawingBufferSize=function(U){return U.set(w*T,M*T).floor()},this.setDrawingBufferSize=function(U,J,Q){w=U,M=J,T=Q,t.width=Math.floor(U*Q),t.height=Math.floor(J*Q),this.setViewport(0,0,U,J)},this.getCurrentViewport=function(U){return U.copy(S)},this.getViewport=function(U){return U.copy(Z)},this.setViewport=function(U,J,Q,ee){U.isVector4?Z.set(U.x,U.y,U.z,U.w):Z.set(U,J,Q,ee),fe.viewport(S.copy(Z).multiplyScalar(T).floor())},this.getScissor=function(U){return U.copy(K)},this.setScissor=function(U,J,Q,ee){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,J,Q,ee),fe.scissor(z.copy(K).multiplyScalar(T).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(U){fe.setScissorTest(te=U)},this.setOpaqueSort=function(U){E=U},this.setTransparentSort=function(U){O=U},this.getClearColor=function(U){return U.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(U=!0,J=!0,Q=!0){let ee=0;if(U){let j=!1;if(P!==null){let Me=P.texture.format;j=Me===Cu||Me===Ru||Me===Au}if(j){let Me=P.texture.type,Ae=Me===Si||Me===yi||Me===rc||Me===Gi||Me===Eu||Me===Tu,ze=ot.getClearColor(),Be=ot.getClearAlpha(),je=ze.r,Xe=ze.g,Ze=ze.b;Ae?(f[0]=je,f[1]=Xe,f[2]=Ze,f[3]=Be,Y.clearBufferuiv(Y.COLOR,0,f)):(g[0]=je,g[1]=Xe,g[2]=Ze,g[3]=Be,Y.clearBufferiv(Y.COLOR,0,g))}else ee|=Y.COLOR_BUFFER_BIT}J&&(ee|=Y.DEPTH_BUFFER_BIT),Q&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),we.dispose(),De.dispose(),he.dispose(),C.dispose(),$.dispose(),ae.dispose(),Ke.dispose(),ut.dispose(),ye.dispose(),et.dispose(),et.removeEventListener("sessionstart",sn),et.removeEventListener("sessionend",xt),ve&&(ve.dispose(),ve=null),rn.stop()};function de(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let U=Re.autoReset,J=le.enabled,Q=le.autoUpdate,ee=le.needsUpdate,j=le.type;Tt(),Re.autoReset=U,le.enabled=J,le.autoUpdate=Q,le.needsUpdate=ee,le.type=j}function xe(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function _e(U){let J=U.target;J.removeEventListener("dispose",_e),Oe(J)}function Oe(U){Ne(U),he.remove(U)}function Ne(U){let J=he.get(U).programs;J!==void 0&&(J.forEach(function(Q){ye.releaseProgram(Q)}),U.isShaderMaterial&&ye.releaseShaderCache(U))}this.renderBufferDirect=function(U,J,Q,ee,j,Me){J===null&&(J=X);let Ae=j.isMesh&&j.matrixWorld.determinant()<0,ze=gf(U,J,Q,ee,j);fe.setMaterial(ee,Ae);let Be=Q.index,je=1;if(ee.wireframe===!0){if(Be=se.getWireframeAttribute(Q),Be===void 0)return;je=2}let Xe=Q.drawRange,Ze=Q.attributes.position,It=Xe.start*je,pn=(Xe.start+Xe.count)*je;Me!==null&&(It=Math.max(It,Me.start*je),pn=Math.min(pn,(Me.start+Me.count)*je)),Be!==null?(It=Math.max(It,0),pn=Math.min(pn,Be.count)):Ze!=null&&(It=Math.max(It,0),pn=Math.min(pn,Ze.count));let Xt=pn-It;if(Xt<0||Xt===1/0)return;Ke.setup(j,ee,ze,Q,Be);let Jn,wt=Ue;if(Be!==null&&(Jn=ie.get(Be),wt=Le,wt.setIndex(Jn)),j.isMesh)ee.wireframe===!0?(fe.setLineWidth(ee.wireframeLinewidth*me()),wt.setMode(Y.LINES)):wt.setMode(Y.TRIANGLES);else if(j.isLine){let tt=ee.linewidth;tt===void 0&&(tt=1),fe.setLineWidth(tt*me()),j.isLineSegments?wt.setMode(Y.LINES):j.isLineLoop?wt.setMode(Y.LINE_LOOP):wt.setMode(Y.LINE_STRIP)}else j.isPoints?wt.setMode(Y.POINTS):j.isSprite&&wt.setMode(Y.TRIANGLES);if(j.isBatchedMesh)wt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)wt.renderInstances(It,Xt,j.count);else if(Q.isInstancedBufferGeometry){let tt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,_o=Math.min(Q.instanceCount,tt);wt.renderInstances(It,Xt,_o)}else wt.render(It,Xt)};function mt(U,J,Q){U.transparent===!0&&U.side===bt&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,Br(U,J,Q),U.side=wi,U.needsUpdate=!0,Br(U,J,Q),U.side=bt):Br(U,J,Q)}this.compile=function(U,J,Q=null){Q===null&&(Q=U),m=De.get(Q),m.init(),v.push(m),Q.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),U!==Q&&U.traverseVisible(function(j){j.isLight&&j.layers.test(J.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_._useLegacyLights);let ee=new Set;return U.traverse(function(j){let Me=j.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){let ze=Me[Ae];mt(ze,Q,j),ee.add(ze)}else mt(Me,Q,j),ee.add(Me)}),v.pop(),m=null,ee},this.compileAsync=function(U,J,Q=null){let ee=this.compile(U,J,Q);return new Promise(j=>{function Me(){if(ee.forEach(function(Ae){he.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){j(U);return}setTimeout(Me,10)}ne.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let gt=null;function Wt(U){gt&&gt(U)}function sn(){rn.stop()}function xt(){rn.start()}let rn=new zu;rn.setAnimationLoop(Wt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(U){gt=U,et.setAnimationLoop(U),U===null?rn.stop():rn.start()},et.addEventListener("sessionstart",sn),et.addEventListener("sessionend",xt),this.render=function(U,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(J),J=et.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,J,P),m=De.get(U,v.length),m.init(),v.push(m),Se.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G.setFromProjectionMatrix(Se),re=this.localClippingEnabled,V=$e.init(this.clippingPlanes,re),x=we.get(U,p.length),x.init(),p.push(x),Gn(U,J,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(E,O),this.info.render.frame++,V===!0&&$e.beginShadows();let Q=m.state.shadowsArray;if(le.render(Q,U,J),V===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(x,U),m.setupLights(_._useLegacyLights),J.isArrayCamera){let ee=J.cameras;for(let j=0,Me=ee.length;j<Me;j++){let Ae=ee[j];Lc(x,U,Ae,Ae.viewport)}}else Lc(x,U,J);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),U.isScene===!0&&U.onAfterRender(_,U,J),Ke.resetDefaultState(),k=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Gn(U,J,Q,ee){if(U.visible===!1)return;if(U.layers.test(J.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(J);else if(U.isLight)m.pushLight(U),U.castShadow&&m.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||G.intersectsSprite(U)){ee&&q.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Se);let Ae=ae.update(U),ze=U.material;ze.visible&&x.push(U,Ae,ze,Q,q.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||G.intersectsObject(U))){let Ae=ae.update(U),ze=U.material;if(ee&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),q.copy(U.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),q.copy(Ae.boundingSphere.center)),q.applyMatrix4(U.matrixWorld).applyMatrix4(Se)),Array.isArray(ze)){let Be=Ae.groups;for(let je=0,Xe=Be.length;je<Xe;je++){let Ze=Be[je],It=ze[Ze.materialIndex];It&&It.visible&&x.push(U,Ae,It,Q,q.z,Ze)}}else ze.visible&&x.push(U,Ae,ze,Q,q.z,null)}}let Me=U.children;for(let Ae=0,ze=Me.length;Ae<ze;Ae++)Gn(Me[Ae],J,Q,ee)}function Lc(U,J,Q,ee){let j=U.opaque,Me=U.transmissive,Ae=U.transparent;m.setupLightsView(Q),V===!0&&$e.setGlobalState(_.clippingPlanes,Q),Me.length>0&&mf(j,Me,J,Q),ee&&fe.viewport(S.copy(ee)),j.length>0&&Or(j,J,Q),Me.length>0&&Or(Me,J,Q),Ae.length>0&&Or(Ae,J,Q),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function mf(U,J,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Me=ce.isWebGL2;ve===null&&(ve=new Ht(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?xn:Si,minFilter:ar,samples:Me?4:0})),_.getDrawingBufferSize(F),Me?ve.setSize(F.x,F.y):ve.setSize(pl(F.x),pl(F.y));let Ae=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(W),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();let ze=_.toneMapping;_.toneMapping=bi,Or(U,Q,ee),I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve);let Be=!1;for(let je=0,Xe=J.length;je<Xe;je++){let Ze=J[je],It=Ze.object,pn=Ze.geometry,Xt=Ze.material,Jn=Ze.group;if(Xt.side===bt&&It.layers.test(ee.layers)){let wt=Xt.side;Xt.side=en,Xt.needsUpdate=!0,Pc(It,Q,ee,pn,Xt,Jn),Xt.side=wt,Xt.needsUpdate=!0,Be=!0}}Be===!0&&(I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve)),_.setRenderTarget(Ae),_.setClearColor(W,R),_.toneMapping=ze}function Or(U,J,Q){let ee=J.isScene===!0?J.overrideMaterial:null;for(let j=0,Me=U.length;j<Me;j++){let Ae=U[j],ze=Ae.object,Be=Ae.geometry,je=ee===null?Ae.material:ee,Xe=Ae.group;ze.layers.test(Q.layers)&&Pc(ze,J,Q,Be,je,Xe)}}function Pc(U,J,Q,ee,j,Me){U.onBeforeRender(_,J,Q,ee,j,Me),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),j.onBeforeRender(_,J,Q,ee,U,Me),j.transparent===!0&&j.side===bt&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,_.renderBufferDirect(Q,J,ee,j,U,Me),j.side=wi,j.needsUpdate=!0,_.renderBufferDirect(Q,J,ee,j,U,Me),j.side=bt):_.renderBufferDirect(Q,J,ee,j,U,Me),U.onAfterRender(_,J,Q,ee,j,Me)}function Br(U,J,Q){J.isScene!==!0&&(J=X);let ee=he.get(U),j=m.state.lights,Me=m.state.shadowsArray,Ae=j.state.version,ze=ye.getParameters(U,j.state,Me,J,Q),Be=ye.getProgramCacheKey(ze),je=ee.programs;ee.environment=U.isMeshStandardMaterial?J.environment:null,ee.fog=J.fog,ee.envMap=(U.isMeshStandardMaterial?$:C).get(U.envMap||ee.environment),je===void 0&&(U.addEventListener("dispose",_e),je=new Map,ee.programs=je);let Xe=je.get(Be);if(Xe!==void 0){if(ee.currentProgram===Xe&&ee.lightsStateVersion===Ae)return Dc(U,ze),Xe}else ze.uniforms=ye.getUniforms(U),U.onBuild(Q,ze,_),U.onBeforeCompile(ze,_),Xe=ye.acquireProgram(ze,Be),je.set(Be,Xe),ee.uniforms=ze.uniforms;let Ze=ee.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=$e.uniform),Dc(U,ze),ee.needsLights=_f(U),ee.lightsStateVersion=Ae,ee.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=Xe,ee.uniformsList=null,Xe}function Ic(U){if(U.uniformsList===null){let J=U.currentProgram.getUniforms();U.uniformsList=ws.seqWithValue(J.seq,U.uniforms)}return U.uniformsList}function Dc(U,J){let Q=he.get(U);Q.outputColorSpace=J.outputColorSpace,Q.batching=J.batching,Q.instancing=J.instancing,Q.instancingColor=J.instancingColor,Q.skinning=J.skinning,Q.morphTargets=J.morphTargets,Q.morphNormals=J.morphNormals,Q.morphColors=J.morphColors,Q.morphTargetsCount=J.morphTargetsCount,Q.numClippingPlanes=J.numClippingPlanes,Q.numIntersection=J.numClipIntersection,Q.vertexAlphas=J.vertexAlphas,Q.vertexTangents=J.vertexTangents,Q.toneMapping=J.toneMapping}function gf(U,J,Q,ee,j){J.isScene!==!0&&(J=X),I.resetTextureUnits();let Me=J.fog,Ae=ee.isMeshStandardMaterial?J.environment:null,ze=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ai,Be=(ee.isMeshStandardMaterial?$:C).get(ee.envMap||Ae),je=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!Q.morphAttributes.position,It=!!Q.morphAttributes.normal,pn=!!Q.morphAttributes.color,Xt=bi;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Xt=_.toneMapping);let Jn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,wt=Jn!==void 0?Jn.length:0,tt=he.get(ee),_o=m.state.lights;if(V===!0&&(re===!0||U!==y)){let Mn=U===y&&ee.id===k;$e.setState(ee,U,Mn)}let At=!1;ee.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==_o.state.version||tt.outputColorSpace!==ze||j.isBatchedMesh&&tt.batching===!1||!j.isBatchedMesh&&tt.batching===!0||j.isInstancedMesh&&tt.instancing===!1||!j.isInstancedMesh&&tt.instancing===!0||j.isSkinnedMesh&&tt.skinning===!1||!j.isSkinnedMesh&&tt.skinning===!0||j.isInstancedMesh&&tt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&tt.instancingColor===!1&&j.instanceColor!==null||tt.envMap!==Be||ee.fog===!0&&tt.fog!==Me||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==$e.numPlanes||tt.numIntersection!==$e.numIntersection)||tt.vertexAlphas!==je||tt.vertexTangents!==Xe||tt.morphTargets!==Ze||tt.morphNormals!==It||tt.morphColors!==pn||tt.toneMapping!==Xt||ce.isWebGL2===!0&&tt.morphTargetsCount!==wt)&&(At=!0):(At=!0,tt.__version=ee.version);let Di=tt.currentProgram;At===!0&&(Di=Br(ee,J,j));let Uc=!1,Ws=!1,vo=!1,Kt=Di.getUniforms(),Ui=tt.uniforms;if(fe.useProgram(Di.program)&&(Uc=!0,Ws=!0,vo=!0),ee.id!==k&&(k=ee.id,Ws=!0),Uc||y!==U){Kt.setValue(Y,"projectionMatrix",U.projectionMatrix),Kt.setValue(Y,"viewMatrix",U.matrixWorldInverse);let Mn=Kt.map.cameraPosition;Mn!==void 0&&Mn.setValue(Y,q.setFromMatrixPosition(U.matrixWorld)),ce.logarithmicDepthBuffer&&Kt.setValue(Y,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Kt.setValue(Y,"isOrthographic",U.isOrthographicCamera===!0),y!==U&&(y=U,Ws=!0,vo=!0)}if(j.isSkinnedMesh){Kt.setOptional(Y,j,"bindMatrix"),Kt.setOptional(Y,j,"bindMatrixInverse");let Mn=j.skeleton;Mn&&(ce.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Kt.setValue(Y,"boneTexture",Mn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Kt.setOptional(Y,j,"batchingTexture"),Kt.setValue(Y,"batchingTexture",j._matricesTexture,I));let yo=Q.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0&&ce.isWebGL2===!0)&&Je.update(j,Q,Di),(Ws||tt.receiveShadow!==j.receiveShadow)&&(tt.receiveShadow=j.receiveShadow,Kt.setValue(Y,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ui.envMap.value=Be,Ui.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ws&&(Kt.setValue(Y,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&xf(Ui,vo),Me&&ee.fog===!0&&ge.refreshFogUniforms(Ui,Me),ge.refreshMaterialUniforms(Ui,ee,T,M,ve),ws.upload(Y,Ic(tt),Ui,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ws.upload(Y,Ic(tt),Ui,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Kt.setValue(Y,"center",j.center),Kt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),Kt.setValue(Y,"normalMatrix",j.normalMatrix),Kt.setValue(Y,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Mn=ee.uniformsGroups;for(let Mo=0,vf=Mn.length;Mo<vf;Mo++)if(ce.isWebGL2){let Nc=Mn[Mo];ut.update(Nc,Di),ut.bind(Nc,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function xf(U,J){U.ambientLightColor.needsUpdate=J,U.lightProbe.needsUpdate=J,U.directionalLights.needsUpdate=J,U.directionalLightShadows.needsUpdate=J,U.pointLights.needsUpdate=J,U.pointLightShadows.needsUpdate=J,U.spotLights.needsUpdate=J,U.spotLightShadows.needsUpdate=J,U.rectAreaLights.needsUpdate=J,U.hemisphereLights.needsUpdate=J}function _f(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(U,J,Q){he.get(U.texture).__webglTexture=J,he.get(U.depthTexture).__webglTexture=Q;let ee=he.get(U);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,J){let Q=he.get(U);Q.__webglFramebuffer=J,Q.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(U,J=0,Q=0){P=U,L=J,A=Q;let ee=!0,j=null,Me=!1,Ae=!1;if(U){let Be=he.get(U);Be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(Y.FRAMEBUFFER,null),ee=!1):Be.__webglFramebuffer===void 0?I.setupRenderTarget(U):Be.__hasExternalTextures&&I.rebindTextures(U,he.get(U.texture).__webglTexture,he.get(U.depthTexture).__webglTexture);let je=U.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ae=!0);let Xe=he.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Xe[J])?j=Xe[J][Q]:j=Xe[J],Me=!0):ce.isWebGL2&&U.samples>0&&I.useMultisampledRTT(U)===!1?j=he.get(U).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[Q]:j=Xe,S.copy(U.viewport),z.copy(U.scissor),B=U.scissorTest}else S.copy(Z).multiplyScalar(T).floor(),z.copy(K).multiplyScalar(T).floor(),B=te;if(fe.bindFramebuffer(Y.FRAMEBUFFER,j)&&ce.drawBuffers&&ee&&fe.drawBuffers(U,j),fe.viewport(S),fe.scissor(z),fe.setScissorTest(B),Me){let Be=he.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+J,Be.__webglTexture,Q)}else if(Ae){let Be=he.get(U.texture),je=J||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,je)}k=-1},this.readRenderTargetPixels=function(U,J,Q,ee,j,Me,Ae){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=he.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ae!==void 0&&(ze=ze[Ae]),ze){fe.bindFramebuffer(Y.FRAMEBUFFER,ze);try{let Be=U.texture,je=Be.format,Xe=Be.type;if(je!==On&&Ee.convert(je)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ze=Xe===xn&&(ne.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Xe!==Si&&Ee.convert(Xe)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Mi&&(ce.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=U.width-ee&&Q>=0&&Q<=U.height-j&&Y.readPixels(J,Q,ee,j,Ee.convert(je),Ee.convert(Xe),Me)}finally{let Be=P!==null?he.get(P).__webglFramebuffer:null;fe.bindFramebuffer(Y.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(U,J,Q=0){let ee=Math.pow(2,-Q),j=Math.floor(J.image.width*ee),Me=Math.floor(J.image.height*ee);I.setTexture2D(J,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Q,0,0,U.x,U.y,j,Me),fe.unbindTexture()},this.copyTextureToTexture=function(U,J,Q,ee=0){let j=J.image.width,Me=J.image.height,Ae=Ee.convert(Q.format),ze=Ee.convert(Q.type);I.setTexture2D(Q,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment),J.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ee,U.x,U.y,j,Me,Ae,ze,J.image.data):J.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ee,U.x,U.y,J.mipmaps[0].width,J.mipmaps[0].height,Ae,J.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,ee,U.x,U.y,Ae,ze,J.image),ee===0&&Q.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(U,J,Q,ee,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=U.max.x-U.min.x+1,Ae=U.max.y-U.min.y+1,ze=U.max.z-U.min.z+1,Be=Ee.convert(ee.format),je=Ee.convert(ee.type),Xe;if(ee.isData3DTexture)I.setTexture3D(ee,0),Xe=Y.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)I.setTexture2DArray(ee,0),Xe=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ee.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ee.unpackAlignment);let Ze=Y.getParameter(Y.UNPACK_ROW_LENGTH),It=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),pn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Xt=Y.getParameter(Y.UNPACK_SKIP_ROWS),Jn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),wt=Q.isCompressedTexture?Q.mipmaps[j]:Q.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,wt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,U.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,U.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,U.min.z),Q.isDataTexture||Q.isData3DTexture?Y.texSubImage3D(Xe,j,J.x,J.y,J.z,Me,Ae,ze,Be,je,wt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Xe,j,J.x,J.y,J.z,Me,Ae,ze,Be,wt.data)):Y.texSubImage3D(Xe,j,J.x,J.y,J.z,Me,Ae,ze,Be,je,wt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ze),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,It),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,pn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Xt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Jn),j===0&&ee.generateMipmaps&&Y.generateMipmap(Xe),fe.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?I.setTextureCube(U,0):U.isData3DTexture?I.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?I.setTexture2DArray(U,0):I.setTexture2D(U,0),fe.unbindTexture()},this.resetState=function(){L=0,A=0,P=null,fe.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===oc?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===to?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ft?Xi:Pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xi?ft:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Cl=class extends cr{};Cl.prototype.isWebGL1Renderer=!0;var Oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ba=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new N,ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ci=class extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,Zs=new N,ms=new N,gs=new N,xs=new oe,Js=new oe,Vu=new He,la=new N,Ks=new N,ca=new N,nu=new oe,Qo=new oe,iu=new oe,Is=class extends Dt{constructor(e=new ci){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ba(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new ur(n,3,0,!1)),ps.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ha(la.set(-.5,-.5,0),gs,o,ms,s,r),ha(Ks.set(.5,-.5,0),gs,o,ms,s,r),ha(ca.set(.5,.5,0),gs,o,ms,s,r),nu.set(0,0),Qo.set(1,0),iu.set(1,1);let a=e.ray.intersectTriangle(la,Ks,ca,!1,Zs);if(a===null&&(ha(Ks.set(-.5,.5,0),gs,o,ms,s,r),Qo.set(0,1),a=e.ray.intersectTriangle(la,ca,Ks,!1,Zs),a===null))return;let l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:Vi.getInterpolation(Zs,la,Ks,ca,nu,Qo,iu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(i,e,t,n,s,r){xs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*xs.x-s*xs.y,Js.y=s*xs.x+r*xs.y):Js.copy(xs),i.copy(e),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Vu)}var fr=class extends St{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_s=new He,su=new He,ua=[],ru=new oi,rx=new He,js=new Ge,Qs=new li,Ds=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),ru.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_s),Qs.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),su.multiplyMatrices(n,_s),js.matrixWorld=su,js.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){let l=ua[o];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},au=new N,ou=new N,lu=new He,el=new Cs,fa=new li,Ll=class extends Dt{constructor(e=new ct,t=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)au.fromBufferAttribute(t,s-1),ou.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=au.distanceTo(ou);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;lu.copy(s).invert(),el.copy(e.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,u=new N,d=new N,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let _=p,b=v-1;_<b;_+=f){let L=g.getX(_),A=g.getX(_+1);if(c.fromBufferAttribute(m,L),h.fromBufferAttribute(m,A),el.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=p,b=v-1;_<b;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),el.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},cu=new N,hu=new N,Ha=class extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cu.fromBufferAttribute(t,s),hu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cu.distanceTo(hu);e.setAttribute("lineDistance",new Fe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pl=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uu=new He,Il=new Cs,da=new li,pa=new N,ka=class extends Dt{constructor(e=new ct,t=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;uu.copy(s).invert(),Il.copy(e.ray).applyMatrix4(uu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);pa.fromBufferAttribute(u,m),fu(pa,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)pa.fromBufferAttribute(u,g),fu(pa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fu(i,e,t,n,s,r,o){let a=Il.distanceSqToPoint(i);if(a<t){let l=new N;Il.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Tn=class extends En{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new N,s=[],r=[],o=[],a=new N,l=new He;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Zt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pr=class extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dl=class extends pr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ma=new N,tl=new cc,nl=new cc,il=new cc,mr=class extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),nl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),il.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),il.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(tl.calc(l),nl.calc(l),il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function du(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ax(i,e){let t=1-i;return t*t*e}function ox(i,e){return 2*(1-i)*i*e}function lx(i,e){return i*i*e}function ir(i,e,t,n){return ax(i,e)+ox(i,t)+lx(i,n)}function cx(i,e){let t=1-i;return t*t*t*e}function hx(i,e){let t=1-i;return 3*t*t*i*e}function ux(i,e){return 3*(1-i)*i*i*e}function fx(i,e){return i*i*i*e}function sr(i,e,t,n,s){return cx(i,e)+hx(i,t)+ux(i,n)+fx(i,s)}var Va=class extends An{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ul=class extends An{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y),sr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends An{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends An{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends An{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends An{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y),ir(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(du(a,l.x,c.x,h.x,u.x),du(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},zl=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:mr,CubicBezierCurve:Va,CubicBezierCurve3:Ul,EllipseCurve:pr,LineCurve:Ga,LineCurve3:Nl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Xa,SplineCurve:qa}),Fl=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new zl[s.type]().fromJSON(s))}return this}},gr=class extends Fl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ga(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Va(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new pr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ti=class i extends ct{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Zt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new N,d=new oe,f=new N,g=new N,x=new N,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let _=n+v*h*s,b=Math.sin(_),L=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*L,o.push(u.x,u.y,u.z),d.x=v/t,d.y=A/(e.length-1),a.push(d.x,d.y);let P=l[3*A+0]*b,k=l[3*A+1],y=l[3*A+0]*L;c.push(P,k,y)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let b=_+v*e.length,L=b,A=b+e.length,P=b+e.length+1,k=b+1;r.push(L,A,k),r.push(P,k,A)}this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("uv",new Fe(a,2)),this.setAttribute("normal",new Fe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},hi=class i extends Ti{constructor(e=1,t=1,n=4,s=8){let r=new gr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Yi=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Fe(o,3)),this.setAttribute("normal",new Fe(a,3)),this.setAttribute("uv",new Fe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},un=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function v(){let b=new N,L=new N,A=0,P=(t-e)/n;for(let k=0;k<=r;k++){let y=[],S=k/r,z=S*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,R=W*l+a,w=Math.sin(R),M=Math.cos(R);L.x=z*w,L.y=-S*n+m,L.z=z*M,u.push(L.x,L.y,L.z),b.set(w,P,M).normalize(),d.push(b.x,b.y,b.z),f.push(W,1-S),y.push(g++)}x.push(y)}for(let k=0;k<s;k++)for(let y=0;y<r;y++){let S=x[y][k],z=x[y+1][k],B=x[y+1][k+1],W=x[y][k+1];h.push(S,z,W),h.push(z,B,W),A+=6}c.addGroup(p,A,0),p+=A}function _(b){let L=g,A=new oe,P=new N,k=0,y=b===!0?e:t,S=b===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let z=g;for(let B=0;B<=s;B++){let R=B/s*l+a,w=Math.cos(R),M=Math.sin(R);P.x=y*M,P.y=m*S,P.z=y*w,u.push(P.x,P.y,P.z),d.push(0,S,0),A.x=w*.5+.5,A.y=M*.5*S+.5,f.push(A.x,A.y),g++}for(let B=0;B<s;B++){let W=L+B,R=z+B;b===!0?h.push(R,R+1,W):h.push(R+1,R,W),k+=3}c.addGroup(p,k,b===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Us=class i extends un{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xr=class extends gr{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new gr().fromJSON(s))}return this}},dx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Gu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=_x(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return _r(r,o,t,a,l,f,0),o}};function Gu(i,e,t,n,s){let r,o;if(s===Cx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=pu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=pu(r,i[r],i[r+1],o);return o&&io(o,o.next)&&(yr(o),o=o.next),o}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(io(t,t.next)||Et(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _r(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Sx(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?mx(i,n,s,r):px(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gx($i(i),e,t),_r(i,e,t,n,s,r,2)):o===2&&xx(i,e,t,n,s,r):_r($i(i),e,t,n,s,r,1);break}}}function px(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ms(s,a,r,l,o,c,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Et(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Ol(f,g,e,t,n),v=Ol(x,m,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ms(a,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ms(a,h,l,u,c,d,b.x,b.y)&&Et(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ms(a,h,l,u,c,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Ms(a,h,l,u,c,d,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!io(s,r)&&Wu(s,n,n.next,r)&&vr(s,r)&&vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),yr(n),yr(n.next),n=i=r),n=n.next}while(n!==i);return $i(n)}function xx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tx(o,a)){let l=Xu(o,a);o=$i(o,o.next),l=$i(l,l.next),_r(o,e,t,n,s,r,0),_r(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _x(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Gu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ex(c));for(s.sort(vx),r=0;r<s.length;r++)t=yx(s[r],t);return t}function vx(i,e){return i.x-e.x}function yx(i,e){let t=Mx(i,e);if(!t)return e;let n=Xu(t,i);return $i(n,n.next),$i(t,t.next)}function Mx(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ms(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),vr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&bx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function bx(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function Sx(i,e,t,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wx(s)}function wx(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ol(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ex(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ms(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Tx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ax(i,e)&&(vr(i,e)&&vr(e,i)&&Rx(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||io(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function io(i,e){return i.x===e.x&&i.y===e.y}function Wu(i,e,t,n){let s=xa(Et(i,e,t)),r=xa(Et(i,e,n)),o=xa(Et(t,n,i)),a=xa(Et(t,n,e));return!!(s!==r&&o!==a||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||o===0&&ga(t,i,n)||a===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xa(i){return i>0?1:i<0?-1:0}function Ax(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vr(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Rx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xu(i,e){let t=new Bl(i.i,i.x,i.y),n=new Bl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pu(i,e,t,n){let s=new Bl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var rr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];mu(e),gu(n,e);let o=e.length;t.forEach(mu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gu(n,t[l]);let a=dx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function mu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ya=class i extends ct{constructor(e=new xr([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;rr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];rr.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=rr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],_=v[0]+u,b=v[1]+u,L=v[2]+u;n.push(_,b,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Lx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Lx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ct=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){let A=L/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],b=h[p][v],L=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(_,b,A),(p!==n-1||l<Math.PI)&&f.push(b,L,A)}this.setIndex(f),this.setAttribute("position",new Fe(g,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ui=class i extends ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(l,3)),this.setAttribute("uv",new Fe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $a=class i extends ct{constructor(e=new Xa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new oe,h=new N,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Fe(u,3)),this.setAttribute("normal",new Fe(d,3)),this.setAttribute("uv",new Fe(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){h=e.getPointAt(_/t,h);let b=o.normals[_],L=o.binormals[_];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,k=Math.sin(P),y=-Math.cos(P);l.x=y*b.x+k*L.x,l.y=y*b.y+k*L.y,l.z=y*b.z+k*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let b=1;b<=s;b++){let L=(s+1)*(_-1)+(b-1),A=(s+1)*_+(b-1),P=(s+1)*_+b,k=(s+1)*(_-1)+b;g.push(L,A,k),g.push(A,P,k)}}function v(){for(let _=0;_<=t;_++)for(let b=0;b<=s;b++)c.x=_/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new zl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Za=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ja=class extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function _a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Px(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=e,a=2*t-n;break;case mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:o=e,l=2*n-t;break;case mh:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+v*o[c+L]+_*o[l+L]+b*o[u+L];return r}},kl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Vl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Px(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=ba;var Zi=class extends Vn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Ma;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Vn{};Gl.prototype.ValueTypeName="color";var Wl=class extends Vn{};Wl.prototype.ValueTypeName="number";var Xl=class extends Ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)qn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Mr=class extends Vn{InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.DefaultInterpolation=ba;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Vn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ma;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends Vn{};ql.prototype.ValueTypeName="vector";var Yl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ix=new Yl,$l=class{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$l.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},zs=class extends br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sl=new He,xu=new N,_u=new N,Ka=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vu=new He,er=new N,rl=new N,Zl=class extends Ka{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),s.makeTranslation(-er.x,-er.y,-er.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}},Sr=class extends br{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jl=class extends Ka{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fs=class extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yu(){return(typeof performance>"u"?Date:performance).now()}var hc="\\[\\]\\.:\\/",Dx=new RegExp("["+hc+"]","g"),uc="[^"+hc+"]",Ux="[^"+hc.replace("\\.","")+"]",Nx=/((?:WC+[\/:])*)/.source.replace("WC",uc),zx=/(WCOD+)?/.source.replace("WCOD",Ux),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),Bx=new RegExp("^"+Nx+zx+Fx+Ox+"$"),Hx=["material","materials","bones","map"],Kl=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(e){let t=Bx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Kl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var Qa=class{constructor(e,t,n=0,s=1/0){this.ray=new Cs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return jl(e,this,n,t),n.sort(Mu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jl(e[s],this,n,t);return n.sort(Mu),n}};function Mu(i,e){return i.distance-e.distance}function jl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)jl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kx=new Ps(-1,1,1,-1,0,1),fc=class extends ct{constructor(){super(),this.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Fe([0,2,0,0,2,0],2))}},Vx=new fc,Ri=class{constructor(e){this._mesh=new Ge(Vx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Bs=class extends _n{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ai.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Er=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ro=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bs(so),this.copyPass.material.blending=Xn,this.clock=new ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Er!==void 0&&(o instanceof Er?n=!0:o instanceof ro&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oo=class extends _n{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Hs=class i extends _n{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ht(r,o,{type:xn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ht(r,o,{type:xn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=qu;this.highPassUniforms=Ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=so;this.copyUniforms=Ai.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:va,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ue,this.oldClearAlpha=1,this.basic=new Hn,this.fsQuad=new Ri(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Hs.BlurDirectionX=new oe(1,0);Hs.BlurDirectionY=new oe(0,1);var Yu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var lo=class extends _n{constructor(){super();let e=Yu;this.uniforms=Ai.clone(e.uniforms),this.material=new Za({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Tr={alta:{dpr:2,shadows:2048,grass:1,post:!0,blur:!0},media:{dpr:1.5,shadows:1536,grass:.65,post:!0,blur:!1},baixa:{dpr:1,shadows:1024,grass:.35,post:!1,blur:!1}},Gx={uniforms:{tDiffuse:{value:null},uRes:{value:new oe(1,1)},uBlur:{value:1},uFocus:{value:.52},uWarm:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uBlur, uFocus, uWarm; varying vec2 vUv;
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
    }`};function $u(i,e){let t=new cr({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.toneMapping=wr,t.shadowMap.enabled=e.shadows>0,t.shadowMap.type=Ql;let n={renderer:t,composer:null,q:e},s,r;return n.setup=(o,a)=>{let l=new Ht(4,4,{samples:4,type:xn}),c=new ao(t,l);c.addPass(new oo(o,a)),s=new Hs(new oe(256,256),.22,.7,.92),c.addPass(s),c.addPass(new lo),r=new Bs(Gx),r.uniforms.uBlur.value=n.q.blur?1:0,c.addPass(r),n.composer=c,n.final=r,n.bloom=s},n.resize=(o,a)=>{n.w=o,n.h=a;let l=Math.min(window.devicePixelRatio||1,n.q.dpr);t.setPixelRatio(l),t.setSize(o,a,!1),n.composer&&(n.composer.setPixelRatio(l),n.composer.setSize(o,a),r.uniforms.uRes.value.set(o*l,a*l))},n.render=(o,a)=>{n.composer&&n.q.post?n.composer.render():t.render(o,a)},n.setQuality=o=>{n.q=o,r&&(r.uniforms.uBlur.value=o.blur?1:0),n.resize(n.w,n.h)},n}function Yt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.pick=n=>n[Math.floor(t()*n.length)],t.sign=()=>t()<.5?-1:1,t}var ke=(i,e,t)=>Math.min(t,Math.max(e,i)),Ie=(i,e,t)=>i+(e-i)*t,cn=i=>(i=ke(i,0,1),i*i*(3-2*i)),Zu=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2);var Pe=Math.PI*2,fv=new He,Te=(i,e,t)=>new He().makeTranslation(i,e,t),Ve=i=>new He().makeRotationX(i),We=i=>new He().makeRotationY(i),Ut=i=>new He().makeRotationZ(i),fi=(i,e=i,t=i)=>new He().makeScale(i,e,t),be=(...i)=>{let e=new He;for(let t of i)e.multiply(t);return e},Wx=new N(0,1,0);function $t(i,e){let t=new qn().setFromUnitVectors(Wx,e.clone().normalize());return new He().compose(i,t,new N(1,1,1))}var D=i=>new ue(i);function it(i,e,t){return i.clone().lerp(e,t)}function rt(i,e){return i.clone().multiplyScalar(e)}function Yn(i,e,t=.06){let n={};return i.getHSL(n),new ue().setHSL((n.h+e.range(-t,t)*.25+1)%1,ke(n.s+e.range(-t,t),0,1),ke(n.l+e.range(-t,t),0,1))}function hn(i,e,t,n){let s=[];for(let r=0;r<=n;r++){let o=r/n,a=(1-o)*(1-o),l=2*(1-o)*o,c=o*o;s.push(new N(i.x*a+e.x*l+t.x*c,i.y*a+e.y*l+t.y*c,i.z*a+e.z*l+t.z*c))}return s}function Ot(i,e){let t=ke(e,0,1)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n].clone().lerp(i[n+1],s),o=i[n+1].clone().sub(i[n]).normalize();return{p:r,d:o}}var Cn={uTime:{value:0},uWind:{value:1},uDay:{value:1}},Xx=qe.normal_fragment_begin.replace("normal *= faceDirection;","normal *= mix(faceDirection, 1.0, vFix);");function Ci(i={}){let e=new Gt({vertexColors:!0,side:bt,roughness:i.roughness??.62,metalness:0});return e.userData.u={uSway:{value:i.sway??.5},uDroop:{value:0},uGlow:{value:i.glow??.1},uPhase:{value:i.phase??0}},e.onBeforeCompile=t=>{Object.assign(t.uniforms,Cn,e.userData.u),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        uniform float uGlow, uDroop, uDay; varying float vFix;`).replace("#include <normal_fragment_begin>",Xx).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(l * 1.05, l * 0.95, l * 0.62), uDroop * 0.55);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * uGlow * (0.25 + 0.75 * uDay);`)},e.customProgramCacheKey=()=>"plant-v1",e}var Ar=[{h:0,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1},{h:4.8,top:989240,hor:3358830,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1976908,exp:.95,cloud:4148600,night:1},{h:5.9,top:3688574,hor:15769724,sun:16751206,si:.5,sky:8423608,gnd:4866640,hi:.7,fog:11047072,exp:.98,cloud:15902864,night:.3},{h:7.2,top:6267612,hor:16571572,sun:16766624,si:2.3,sky:13623547,gnd:10127464,hi:.95,fog:15523012,exp:1,cloud:16773344,night:0},{h:10,top:5019868,hor:13887734,sun:16773852,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14280944,exp:1,cloud:16777215,night:0},{h:14.5,top:5019868,hor:14084338,sun:16773334,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14412014,exp:1,cloud:16777215,night:0},{h:16.8,top:5936847,hor:16374958,sun:16763264,si:2.6,sky:13950196,gnd:11045476,hi:.95,fog:15785152,exp:1.02,cloud:16771272,night:0},{h:18.1,top:4872860,hor:16357990,sun:16745544,si:1.7,sky:11051212,gnd:8413784,hi:.8,fog:15246472,exp:1.02,cloud:16294008,night:.1},{h:19,top:2240096,hor:11561608,sun:13142704,si:.45,sky:6318248,gnd:3551306,hi:.66,fog:6969984,exp:.98,cloud:8018568,night:.65},{h:20,top:923446,hor:2899052,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1845320,exp:.95,cloud:3820152,night:1},{h:24,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1}];for(let i of Ar)for(let e of["top","hor","sun","sky","gnd","fog","cloud"])i[e]=new ue(i[e]);function qx(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.45,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Tn(i);return n.colorSpace=ft,n}function Ju(i,e,t){let n={hour:9,night:0,sunDir:new N,cur:{}},s={top:new ue,hor:new ue,sun:new ue,sky:new ue,gnd:new ue,fog:new ue,cloud:new ue},r={uTop:{value:new ue},uHor:{value:new ue},uSunDir:{value:new N(0,1,0)},uSunCol:{value:new ue},uNight:{value:0},uTime:Cn.uTime},o=new Ge(new Ct(400,32,20),new Rt({side:en,depthWrite:!1,fog:!1,uniforms:r,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uTop, uHor, uSunDir, uSunCol; uniform float uNight, uTime; varying vec3 vDir;
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
      }`}));o.renderOrder=-10,o.frustumCulled=!1,i.add(o);let a=new zs(16777215,8947848,1);i.add(a);let l=new Fs(16777215,2.5);l.castShadow=t.shadows>0,l.shadow.mapSize.set(t.shadows||512,t.shadows||512);let c=l.shadow.camera;c.left=-19,c.right=19,c.top=19,c.bottom=-19,c.near=1,c.far=90,l.shadow.bias=-4e-4,l.shadow.normalBias=.03,l.shadow.radius=3,i.add(l),i.add(l.target),i.fog=new Oa(16777215,38,230);let h=qx(),u=new Ft,d=[],f=Yt(42);for(let g=0;g<16;g++){let x=new Ft,m=f.range(22,46),p=new ci({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:f.range(.55,.9)});d.push(p);for(let b=0;b<7;b++){let L=new Is(p),A=f.range(.4,1);L.scale.set(m*A*.7,m*A*.34,1),L.position.set(f.range(-.5,.5)*m,f.range(-.06,.1)*m,f.range(-3,3)),x.add(L)}let v=f()*Pe,_=f.range(120,300);x.position.set(Math.cos(v)*_,f.range(46,110),Math.sin(v)*_),x.userData.v=f.range(.4,1.1),u.add(x)}return u.renderOrder=-5,i.add(u),n.setHour=g=>{g=(g%24+24)%24,n.hour=g;let x=0;for(;x<Ar.length-2&&Ar[x+1].h<=g;)x++;let m=Ar[x],p=Ar[x+1],v=ke((g-m.h)/(p.h-m.h),0,1);for(let y in s)s[y].copy(m[y]).lerp(p[y],v);let _=Ie(m.si,p.si,v),b=Ie(m.hi,p.hi,v);n.night=Ie(m.night,p.night,v);let L=g>5.6&&g<18.9,A=L?(g-5.6)/13.3:(g+24-18.9)%24/10.7,P=Math.sin(A*Math.PI)*(L?1:.75)+.16,k=Ie(-1.15,1.15,A);n.sunDir.set(-Math.sin(k)*Math.cos(P),Math.sin(P),Math.cos(k)*Math.cos(P)*.75+.12).normalize(),l.position.copy(n.sunDir).multiplyScalar(48).add(l.target.position),l.color.copy(s.sun),l.intensity=_,a.color.copy(s.sky),a.groundColor.copy(s.gnd),a.intensity=b,i.fog.color.copy(s.fog),r.uTop.value.copy(s.top),r.uHor.value.copy(s.hor),r.uSunDir.value.copy(n.sunDir),r.uSunCol.value.copy(s.sun),r.uNight.value=n.night,e.toneMappingExposure=Ie(m.exp,p.exp,v);for(let y of d)y.color.copy(s.cloud);Cn.uDay.value=1-n.night*.8,n.cur=s,n.sunI=_},n.update=(g,x)=>{o.position.copy(x);for(let m of u.children)m.position.x+=m.userData.v*g,m.position.x>320&&(m.position.x=-320)},n.sun=l,n.hemi=a,n.setHour(9),n}function dc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ct,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ku(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Ku(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ku(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new St(o,t,n);return s!==void 0&&(l.gpuType=s),l}var Rr=new N,Yx=new Ye,Cr=new N,pc=new N,Lr=new N,co=new N,tn=class{constructor(){this.pos=[],this.col=[],this.nrm=[],this.fix=[],this.idx=[],this.n=0}vert(e,t,n,s,r,o,a,l){return Rr.set(e,t,n),r&&Rr.applyMatrix4(r),this.pos.push(Rr.x,Rr.y,Rr.z),this.col.push(s.r,s.g,s.b),this.fix.push(o===void 0?0:1),o===void 0?this.nrm.push(NaN,0,0):(Cr.set(o,a,l),r&&Cr.applyMatrix3(Yx.setFromMatrix4(r)).normalize(),this.nrm.push(Cr.x,Cr.y,Cr.z)),this.n++}quadGrid(e,t,n,s){let r=n+1;for(let o=0;o<t;o++)for(let a=0;a<n;a++){let l=e+o*r+a,c=l+1,h=l+r,u=h+1;s?this.idx.push(l,c,h,c,u,h):this.idx.push(l,h,c,c,h,u)}}petal(e,t){let n=t.nu??5,s=t.nv??4,r=t.L,o=t.W/2,a=t.a??1,l=t.b??.6,c=t.cup??0,h=t.curl??0,u=t.curlPow??1.6,d=t.ruffle??0,f=t.rf??2,g=t.twist??0,x=t.fold??0,m=t.base??0,[p,v,_]=t.cols,b=t.vein??0,L=t.phase??0,A=t.tipNotch??0,P=this.n,k=new ue,y=0,S=0;for(let z=0;z<=n;z++){let B=z/n,W=t.angFn?t.angFn(B):(t.curl0??0)+h*Math.pow(B,u);if(z>0){let G=(z-.5)/n,V=t.angFn?t.angFn(G):(t.curl0??0)+h*Math.pow(G,u);y+=Math.cos(V)*r/n,S+=Math.sin(V)*r/n}let R=-Math.sin(W),w=Math.cos(W),M=Math.cos(W),T=Math.sin(W),E=Math.pow(Math.sin(Math.PI*Math.pow(Math.min(B,.999),a)),l);E=Math.max(E,m*(1-B));let O=o*E,Z=g*B,K=Math.cos(Z),te=Math.sin(Z);for(let G=0;G<=s;G++){let V=G/s*2-1,re=V*O,ve=-c*O*V*V-x*O*Math.abs(V)+d*o*Math.sin(V*Math.PI*f+L+B*5)*B*B,Se=A?-A*r*(1-Math.abs(V))*Math.pow(B,6):0,F=re*K-ve*te,q=re*te+ve*K;B<.5?k.copy(p).lerp(v,B*2):k.copy(v).lerp(_,(B-.5)*2),b&&k.multiplyScalar(1-b*(1-Math.abs(V))*(1-B*.5)+b*.4),this.vert(F,y+R*q+M*Se,S+w*q+T*Se,k,e)}}this.quadGrid(P,n,s,!1)}tube(e,t,n,s,r,o,a=5,l=!1){let c=this.n,h=new ue,u=t.length,d=new N(.13,.2,.97);for(let f=0;f<u;f++){let g=f/(u-1);pc.copy(t[Math.min(u-1,f+1)]).sub(t[Math.max(0,f-1)]).normalize(),Lr.crossVectors(pc,d).normalize(),co.crossVectors(Lr,pc).normalize();let x=typeof n=="function"?n(g):n+(s-n)*g;h.copy(r).lerp(o,g);for(let m=0;m<=a;m++){let p=m/a*Pe,v=Math.cos(p)*x,_=Math.sin(p)*x;this.vert(t[f].x+Lr.x*v+co.x*_,t[f].y+Lr.y*v+co.y*_,t[f].z+Lr.z*v+co.z*_,h,e)}}if(this.quadGrid(c,u-1,a,!0),l){let f=t[u-1];this.blob(new He().copy(e||new He).multiply(new He().makeTranslation(f.x,f.y,f.z)),typeof n=="function"?n(1):s,typeof n=="function"?n(1):s,o,o,5,3)}}blob(e,t,n,s,r,o=7,a=5,l){let c=this.n,h=new ue;for(let u=0;u<=a;u++){let d=u/a*Math.PI,f=-Math.cos(d),g=Math.sin(d),x=u/a;l?x<.5?h.copy(s).lerp(r,x*2):h.copy(r).lerp(l,x*2-1):h.copy(s).lerp(r,x);for(let m=0;m<=o;m++){let p=m/o*Pe;this.vert(Math.cos(p)*g*t,f*n,Math.sin(p)*g*t,h,e)}}this.quadGrid(c,a,o,!1)}lathe(e,t,n,s,r=10,o,a=0,l=5){let c=this.n,h=new ue,u=t.length;for(let d=0;d<u;d++){let f=d/(u-1);o?o(f,h):h.copy(n).lerp(s,f);for(let g=0;g<=r;g++){let x=g/r*Pe,m=t[d][0]*(1+a*f*f*Math.sin(x*l));this.vert(Math.cos(x)*m,t[d][1],Math.sin(x)*m,h,e)}}this.quadGrid(c,u-1,r,!1)}card(e,t,n,s,r,o,a,l,c=.25){let h=this.n;this.vert(0,0,0,s,e,o,a,l),this.vert(-t/2,n*.5,c*t,r,e,o,a,l),this.vert(t/2,n*.5,c*t,r,e,o,a,l),this.vert(0,n,0,r,e,o,a,l),this.idx.push(h,h+2,h+1,h+1,h+2,h+3)}build(){let e=new ct;e.setAttribute("position",new Fe(this.pos,3)),e.setAttribute("color",new Fe(this.col,3)),e.setAttribute("aFix",new Fe(this.fix,1)),e.setIndex(this.idx),e.computeVertexNormals();let t=e.attributes.normal.array,n=this.nrm;for(let s=0;s<n.length;s+=3)Number.isNaN(n[s])||(t[s]=n[s],t[s+1]=n[s+1],t[s+2]=n[s+2]);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Ce=N,st={leaf:D(5016122),dark:D(2909748),light:D(10275934),stem:D(5934908),gray:D(8363132),blue:D(7315596),wood:D(7227955),woodDark:D(5190692),lime:D(7976264),deep:D(2381102)},Ln=2.39996323,Av=D(16777215),$n=(i,e)=>Array.isArray(i)?Ie(i[0],i[1],e):i,$x={a:.75,b:.75,cup:0,fold:.35,curl:.5,curlPow:1.3,nu:4,nv:2,vein:.3};function fn(i,e,t,n){let s=Yn(n.c??st.leaf,t,.05);i.petal(e,{...$x,...n,cols:[rt(s,.7),s,it(s,n.tip??st.light,n.tipMix??.3)]})}function mc(i,e,t,n){let s=n.n;for(let r=0;r<s;r++){let o=Ie(n.t0??.15,n.t1??.85,(r+t()*.6)/s),{p:a}=Ot(e,o),l=(n.az0??0)+r*(n.azStep??Ln)+t.range(-.3,.3),c=(1-(n.taper??.3)*o)*(.85+t()*.3),h=be(Te(a.x,a.y,a.z),We(l),Ve((n.tilt??1)+t.range(-.2,.2)));fn(i,h,t,{...n,L:n.L*c,W:n.W*c})}}function ks(i,e,t){for(let n=0;n<t.n;n++){let s=n*Ln+e.range(-.25,.25),r=.75+e()*.4,o=be(We(s),Te(0,0,t.r??.005),Ve((t.tilt??.9)+e.range(-.2,.2)));fn(i,o,e,{...t,L:t.L*r,W:t.W*r})}}function ju(i,e,t,n){let s=n.n;for(let r=0;r<s;r++){let o=s>1?r/(s-1)-.5:0,a=1-Math.abs(o)*(n.sideShrink??.5);fn(i,be(e,Ut(-o*(n.spread??2.2))),t,{...n,L:n.L*a,W:n.W*a})}}function Ki(i,e,t,n,s=.06,r=6){let o=Math.cos(n),a=Math.sin(n);return hn(new Ce(0,0,0),new Ce(o*t*.2+i.range(-s,s)*e,e*.55,a*t*.2+i.range(-s,s)*e),new Ce(o*t,e,a*t),r)}function Zx(i,e=0,t=0){let{p:n,d:s}=Ot(i,1),r=$t(n,s);return e?be(Te(n.x,n.y,n.z),We(-t+Math.PI/2),Ve(e)):r}function vn(i,e,t,n,s,r=1){if(s=ke(s,0,1),n.sepals){let l=n.sepals;for(let c=0;c<l.n;c++){let h=be(e,We(c/l.n*Pe+.3),Te(0,0,(l.r??.002)*r),Ve(Ie(.25,l.tilt??1.3,s)));i.petal(h,{L:l.L*r,W:l.W*r,a:.8,b:.8,cup:.5,curl:.3,nu:3,nv:2,cols:[rt(l.c??st.leaf,.8),l.c??st.leaf,l.c??st.leaf]})}}let o=t()*Pe;for(let l of n.layers){l.azList&&(o=o);let c=l.n;for(let h=0;h<c;h++){let u=c>1?h/(c-1):1,d=o+(l.azList?l.azList[h]:l.golden?h*Ln:h/c*Pe)+t.range(-1,1)*(l.jit??.06)+(l.az??0),f=Ie($n(l.tiltC??.1,u),$n(l.tilt,u),s)+t.range(-1,1)*(l.tj??.05),g=Ie($n(l.curlC??-.2,u),$n(l.curl??0,u),s),x=Ie(l.closedScale??.6,1,s)*r*(1+t.range(-.07,.07)),m=be(e,We(d),Te(0,$n(l.y??0,u)*r,$n(l.r??.002,u)*r),Ve(f)),p=l.cols;l.cols2&&(p=p.map((_,b)=>it(_,l.cols2[b],u))),l.pick&&(p=l.pick);let v=l.cj??.035;i.petal(m,{L:$n(l.L,u)*x,W:$n(l.W,u)*x,a:l.a??1.2,b:l.b??.55,cup:Ie($n(l.cupC??l.cup??.4,u),$n(l.cup??.4,u),s),curl:g,curlPow:l.curlPow??1.6,ruffle:l.ruffle??0,rf:l.rf??2,phase:t()*6,twist:l.twist?t.range(-l.twist,l.twist):0,nu:l.nu??5,nv:l.nv??4,vein:l.vein??.12,tipNotch:l.notch??0,base:l.base??0,cols:[Yn(p[0],t,v),Yn(p[1],t,v),Yn(p[2],t,v)]})}o+=l.azStep??Math.PI/Math.max(1,c)}let a=n.center;if(a){if(a.type==="dome"&&i.blob(be(e,Te(0,(a.y??0)*r,0)),a.r*r,a.h*r,a.cols[0],a.cols[1],a.seg??10,5,a.cols[2]),a.stamens&&s>.35){let l=a.stamens;for(let c=0;c<l.n;c++){let h=c/l.n*Pe+t()*.3,u=(l.spread??.4)*(.6+t()*.6),d=l.len*r*(.8+t()*.3),f=hn(new Ce(0,0,0),new Ce(Math.cos(h)*u*d*.3,d*.6,Math.sin(h)*u*d*.3),new Ce(Math.cos(h)*u*d,d*(1-u*.3),Math.sin(h)*u*d),3);i.tube(e,f,.0012*r*(l.thick??1),.001*r*(l.thick??1),l.c,l.c,3);let g=f[3];i.blob(be(e,Te(g.x,g.y,g.z)),(l.tipR??.004)*r,(l.tipR??.004)*r*1.4,l.tip,l.tip,4,3)}}if(a.type==="trumpet"){let l=Ie(.55,1,s),c=[[a.r0*.6,0],[a.r0,a.L*.3],[Ie(a.r0,a.r1,.5)*l,a.L*.75],[a.r1*l,a.L],[a.r1*l*1.12,a.L*1.03]].map(([h,u])=>[h*r,u*r]);i.lathe(e,c,a.cols[0],a.cols[1],a.seg??12,null,a.ruffle??.1,a.rf??6)}if(a.type==="column"&&s>.3){let l=hn(new Ce(0,0,0),new Ce(0,a.L*.5*r,.004),new Ce(0,a.L*r,.012*r),4);i.tube(e,l,.004*r,.003*r,a.cols[0],a.cols[1],4);for(let h=0;h<10;h++){let u=.55+t()*.4,d=Ot(l,u).p,f=t()*Pe;i.blob(be(e,Te(d.x+Math.cos(f)*.008*r,d.y,d.z+Math.sin(f)*.008*r)),.0035*r,.0035*r,a.dots,a.dots,4,3)}let c=l[4];i.blob(be(e,Te(c.x,c.y,c.z)),.006*r,.005*r,a.cols[1],a.cols[1],5,3)}a.type==="spadix"&&i.blob(be(e,Te(0,a.L*.5*r,0)),a.r*r,a.L*.5*r,a.cols[0],a.cols[1],6,5)}}function Jx(i,e,t,n,s){let r=Math.round(n.n*Ie(.5,1,s)),o=n.r*Ie(.55,1,s);for(let a=0;a<r;a++){let l=1-(a+.5)/r*(1+(n.cover??.6)),c=Math.sqrt(Math.max(0,1-l*l)),h=a*Ln,u=Math.cos(h)*c,d=Math.sin(h)*c,f=s<.3?it(n.bud??st.lime,t.pick(n.cols),s*2):Yn(t.pick(n.cols),t,.05),g=it(f,D(16777215),.25),x=be(e,$t(new Ce(u*o,l*o*(n.squash??.8),d*o),new Ce(u,l,d)),We(t()*Pe)),m=n.fs*(.8+t()*.4),p=n.np??4,v=1.25;for(let _=0;_<p;_++)i.card(be(x,We(_/p*Pe),Ve(v)),m*.9,m,f,g,0,Math.cos(v),-Math.sin(v),.15)}}function gc(i,e,t=st.lime){let n=Ki(e,.06,.01,e()*Pe,.05,3);i.tube(null,n,.004,.003,it(t,D(16777215),.3),t,4);let s=n[3];for(let r=0;r<2;r++)fn(i,be(Te(s.x,s.y,s.z),We(r*Math.PI+.4),Ve(1)),e,{L:.05,W:.03,c:t,a:.9,b:.6,fold:.2,curl:.4});fn(i,be(Te(s.x,s.y,s.z),We(1.9),Ve(.3)),e,{L:.028,W:.014,c:t,a:.9,b:.7})}function di(i,e,t,n,s){let r=Math.round(e.range(t.stems[0],t.stems[1]));t.basal&&ks(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n,n:Math.round(t.basal.n*(.5+n*.5))});for(let o=0;o<r;o++){let a=t.faceZ?Math.PI/2+e.range(-.5,.5):o*Ln+e.range(-.4,.4),l=r>1?(t.spread??.06)*Math.sqrt((o+.5)/r):0,c=t.H*n*e.range(.78,1.08),h=(t.lean??.08)*c*e.range(.4,1.3)+l,u=Ki(e,c,h,a,t.wob??.05,7),d=Te(Math.cos(a)*l*.5,0,Math.sin(a)*l*.5);for(let g of u)g.applyMatrix4(d);let f=(t.stemR??.004)*(.6+.4*n);if(i.tube(null,u,f,f*.65,t.stemC??st.stem,it(t.stemC??st.stem,st.light,.2),5),t.leaf&&mc(i,u,e,{...t.leaf,L:t.leaf.L*(.5+.5*n),W:t.leaf.W*(.5+.5*n),n:Math.max(1,Math.round(t.leaf.n*n))}),s>=0&&t.head){let g=ke(s+e.range(-.12,.12)*(s>.9?0:1),0,1),x=t.headsPer??1;for(let m=0;m<x;m++){let p=u,v=a;if(x>1){let{p:L}=Ot(u,.86+.14*(m/x));v=a+m*2.1+e();let A=t.pedicel??.08;p=hn(L,new Ce(L.x+Math.cos(v)*A*.3,L.y+A*.7,L.z+Math.sin(v)*A*.3),new Ce(L.x+Math.cos(v)*A,L.y+A,L.z+Math.sin(v)*A),3),i.tube(null,p,f*.5,f*.4,st.stem,st.stem,4)}let _=typeof t.head=="function"?t.head(e):t.head,b=(t.headTilt??0)*(.7+.3*g)+e.range(-.1,.1);vn(i,Zx(p,b,v),e,_,g,t.headK??1)}}}}function Pn(i,e,t,n,s){let r=t.R*n,o=t.H*n,a=Math.max(3,Math.round(t.branches*(.5+.5*n))),l=[];for(let c=0;c<a;c++){let h=c*Ln+e.range(-.3,.3),u=(c+.5)/a,d=Ie(.15,1,Math.sqrt(u))*(t.splay??1),f=Ie(o,Math.hypot(r,o*.6),u)*e.range(.85,1.05),g=new Ce(Math.cos(h)*Math.sin(d)*f,Math.cos(d)*f,Math.sin(h)*Math.sin(d)*f);g.x=ke(g.x,-r,r),g.z=ke(g.z,-r,r);let x=hn(new Ce(0,0,0),new Ce(g.x*.35,g.y*.75,g.z*.35),g,6);i.tube(null,x,(t.stemR??.006)*(.5+.5*n),.002,t.wood??st.wood,t.stemC??st.stem,4),mc(i,x,e,{...t.leaf,n:Math.round(t.leaf.n*(.6+.4*n)),t0:.25,t1:1,taper:.1}),t.leafTip&&ju(i,be(Te(g.x,g.y,g.z),We(h),Ve(.7)),e,t.leafTip),l.push({pts:x,az:h})}for(let c=0;c<Math.round((t.fill??24)*n);c++){let h=e()*Pe,u=Math.acos(e())*(t.splay??1),d=e.range(.5,.92),f=new Ce(Math.cos(h)*Math.sin(u),Math.cos(u),Math.sin(h)*Math.sin(u)),g=new Ce(f.x*r*d,f.y*o*d*1.05,f.z*r*d);fn(i,$t(g,f.clone().add(new Ce(0,.5,0)).normalize()),e,{...t.leaf,L:t.leaf.L*e.range(.9,1.3),W:t.leaf.W*e.range(.9,1.3)})}if(s>=0&&t.head){let c=Math.max(1,Math.round(t.heads*(.6+.4*n)));for(let h=0;h<c;h++){let u=l[h%l.length],d=h>=l.length,f=u.pts,g=u.az;if(d||t.stalk){g=h*Ln*1.3+e();let b=e.range(.2,.95),L=b*.95*(t.splay??1),A=Ie(o,Math.hypot(r,o*.6),b)*(1+(t.stalk??.06)),P=new Ce(Math.cos(g)*Math.sin(L)*A,Math.cos(L)*A,Math.sin(g)*Math.sin(L)*A);f=hn(new Ce(0,0,0),new Ce(P.x*.3,P.y*.8,P.z*.3),P,5),i.tube(null,f,.003,.002,t.stemC??st.stem,t.stemC??st.stem,4)}let x=ke(s+(s>.9?0:e.range(-.1,.1)),0,1),m=typeof t.head=="function"?t.head(e):t.head,{p,d:v}=Ot(f,1),_=v.clone().lerp(new Ce(0,1,0),t.headUp??.45).normalize();m.ball?Jx(i,$t(p,_),e,m.ball,x):vn(i,$t(p,_),e,m,x,t.headK??1)}}}function Vs(i,e,t,n,s){if(t.basal&&ks(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n}),t.basalFan)for(let o=0;o<t.basalFan.count;o++){let a=o*Ln,l=t.basalFan.stalk*n*e.range(.7,1.1),c=hn(new Ce(0,0,0),new Ce(Math.cos(a)*l*.3,l*.7,Math.sin(a)*l*.3),new Ce(Math.cos(a)*l*.8,l*.8,Math.sin(a)*l*.8),4);i.tube(null,c,.003,.002,st.stem,st.stem,4);let h=c[4];ju(i,be(Te(h.x,h.y,h.z),We(-a+Math.PI/2),Ve(1.2)),e,{...t.basalFan,L:t.basalFan.L*n,W:t.basalFan.W*n})}let r=Math.round(e.range(t.stems[0],t.stems[1])*(.5+.5*n));for(let o=0;o<r;o++){let a=o*Ln+e(),l=t.H*n*e.range(.75,1.1),c=Ki(e,l,(t.lean??.18)*l*Math.sqrt((o+.3)/r),a,.03,8);if(i.tube(null,c,t.stemR??.004,.002,t.stemC??st.stem,t.stemC??st.stem,4),t.leaf&&mc(i,c,e,{...t.leaf,n:Math.round(t.leaf.n*n),t0:.05,t1:t.from??.5}),s<0)continue;let h=Math.round(t.florets*(.6+.4*n)),u=t.from??.55;for(let d=0;d<h;d++){let f=d/(h-1),g=Ie(u,1,f),{p:x,d:m}=Ot(c,g),p=d*(t.whorl??Ln)+e()*.3,v=ke(s*1.6-f*.6,0,1),_=(1-f*(t.taper??.5))*Ie(.45,1,v),b=it(t.cols[0],t.cols[1],f*.8+e()*.2),L=it(t.bud??st.lime,b,ke(v*1.5,0,1)),A=be($t(x,m),We(p),Te(0,0,t.off??.006));if(t.type==="card")for(let P=0;P<2;P++)i.card(be(A,We(P*.9-.45),Ve(Ie(.5,1,v))),t.fs*_,t.fs*1.5*_,rt(L,.75),it(L,D(16777215),.2),0,.5,.86,.3);else if(t.type==="bell"){let P=t.fs*_,k=be(A,Ve(2));i.lathe(k,[[P*.18,0],[P*.3,P*.35],[P*.36,P*.8],[P*.5,P]],rt(L,.85),it(L,D(16777215),.25),6,null,.1,5)}else vn(i,be(A,Ve(1.25)),e,{layers:[{n:5,L:t.fs,W:t.fs*.85,a:1.2,b:.5,tilt:1.15,tiltC:.15,cup:.5,curl:.2,nu:2,nv:2,cols:[rt(L,.8),L,it(L,D(16777215),.15)]}],center:t.eye?{type:"dome",r:t.fs*.22,h:t.fs*.15,cols:[t.eye,t.eye],seg:5}:null},v,_)}}}function ho(i,e,t,n,s){let r=Math.round(t.stems*(.5+.5*n));for(let o=0;o<r;o++){let a=o*Ln+e.range(-.2,.2),l=(o+.5)/r,c=t.L*n*e.range(.7,1.1),h=t.up*(1-l*(t.upFall??.6)),u=t.out*e.range(.7,1.1),d=t.drop*l*e.range(.6,1.2),f=Math.cos(a),g=Math.sin(a),x=hn(new Ce(f*.02,0,g*.02),new Ce(f*u*c*.6,h*c,g*u*c*.6),new Ce(f*u*c,(h*.4-d)*c,g*u*c),9);if(i.tube(null,x,t.stemR??.003,.0015,t.stemC??st.stem,t.stemC??st.stem,4),t.frond){let m=t.frond.pairs;for(let p=1;p<=m;p++){let v=p/(m+1),{p:_,d:b}=Ot(x,v),L=Math.sin(Math.PI*Math.pow(v,.7))*t.frond.L*n+.01,A=new Ce(-b.z,0,b.x).normalize();for(let P of[-1,1]){let k=A.clone().multiplyScalar(P).add(b.clone().multiplyScalar(.45)).add(new Ce(0,-.25,0)).normalize();fn(i,$t(_,k),e,{L,W:L*t.frond.wr,c:t.frond.c,a:.7,b:.8,nu:2,nv:1,fold:.2,curl:.3,vein:.2})}}}else{let m=Math.round(t.leaf.n*(.5+.5*n));for(let p=0;p<m;p++){let v=Ie(.12,1,(p+e()*.5)/m),{p:_,d:b}=Ot(x,v),L=new Ce(e.range(-1,1),e.range(.1,1),e.range(-1,1)).add(b.clone().multiplyScalar(.5)).normalize();fn(i,$t(_,L),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.15),W:t.leaf.W*e.range(.7,1.15)})}}if(s>=0&&t.flower){let m=t.flower.per;for(let p=0;p<m;p++){let v=Ie(.35,1,(p+e())/m),{p:_,d:b}=Ot(x,v),L=new Ce(f*.7,.55,g*.7).add(new Ce(e.range(-.4,.4),e.range(-.1,.4),e.range(-.4,.4))).normalize(),A=_.clone().add(L.clone().multiplyScalar(.025));t.flower.make(i,$t(A,L),e,ke(s+e.range(-.15,.1),0,1))}}}}function uo(i,e,t,n,s){let r=t.H*n,o=t.R*n,a=r+o*.55,l=t.bark??st.wood,c=rt(l,.75),h=e.range(-.08,.08)*r,u=hn(new Ce(0,0,0),new Ce(h,r*.5,e.range(-.05,.05)*r),new Ce(h*.5,r,0),6),d=t.trunkR*(.35+.65*n);i.tube(null,u,B=>d*(1.25-.55*B+.5*Math.pow(1-B,6)),0,c,l,8);let f=u[6],g=Math.max(3,Math.round(t.limbs*(.5+.5*n))),x=[];for(let B=0;B<g;B++){let W=B*Ln+e.range(-.3,.3),R=Ie(.25,1.25,(B+.5)/g),w=o*e.range(.75,1.05),M=Ot(u,e.range(.7,1)).p,T=new Ce(M.x+Math.cos(W)*Math.sin(R)*w,f.y+Math.cos(R)*w*.9+o*.15,M.z+Math.sin(W)*Math.sin(R)*w),E=hn(M,new Ce(Ie(M.x,T.x,.4),Ie(M.y,T.y,.75),Ie(M.z,T.z,.4)),T,5);i.tube(null,E,d*.42,d*.1,l,l,5),x.push(T,Ot(E,.6).p);for(let O=0;O<2;O++){let Z=Ot(E,e.range(.35,.8)).p,K=W+e.range(-1.2,1.2),te=w*e.range(.35,.6),G=new Ce(Z.x+Math.cos(K)*te,Z.y+te*e.range(.2,.8),Z.z+Math.sin(K)*te);i.tube(null,[Z,Z.clone().lerp(G,.5).add(new Ce(0,te*.1,0)),G],d*.16,d*.05,l,l,4),x.push(G)}}let m=new Ce(h*.5,a,0),p=new Ce,v=new Ce,_=new Ce,b=new Ce,L=new Ce,A=s<0?0:s,P=Ie(1,t.foliage??1,A),k=t.leafCols??[st.leaf,st.dark,st.lime],y=x.map(B=>({c:B.clone().add(new Ce(0,o*.08,0)),r:o*e.range(.27,.4)}));y.push({c:new Ce(f.x,f.y+o*.75,f.z),r:o*.45});let S=t.blossom?it(rt(k[0],.6),rt(t.blossom.cols[0],.8),ke(A*1.4,0,1)*(1-P*.8)):rt(k[0],.6);for(let B of y)i.blob(be(Te(B.c.x,B.c.y,B.c.z),We(e()*3)),B.r*.66,B.r*.52,rt(S,.62),rt(S,1.05),7,5);let z=(B,W,R,w,M)=>{for(let T=0;T<B;T++){let E=y[Math.floor(e()*y.length)];_.set(e.range(-1,1),e.range(-.75,1),e.range(-1,1)).normalize(),v.copy(_).multiplyScalar(E.r*e.range(.66,1.04)+M),v.y*=.8,v.add(E.c),p.copy(v).sub(m).normalize().lerp(_,.45),p.y+=.3,p.normalize(),b.set(e.range(-1,1),e.range(-1,1),e.range(-1,1)),L.crossVectors(_,b).normalize(),b.crossVectors(L,_).normalize(),v.addScaledVector(L,-W*.4);let O=new He().makeBasis(b,L,_.clone().addScaledVector(L,e.range(-.5,.5)).normalize()).setPosition(v),Z=Yn(e.pick(R),e,.05),K=W*(1-w+e()*w*2),te=p.clone().applyMatrix3(new Ye().setFromMatrix4(O).invert()).normalize();i.card(O,K*.8,K,rt(Z,.74),Z,te.x,te.y,te.z,.25)}};if(z(Math.round((t.leaves??800)*n*P),(t.leafSize??.19)*(.6+.4*n),k,.3,0),A>0&&t.blossom&&z(Math.round(t.blossom.n*n*Ie(.3,1,A)),t.blossom.size*Ie(.55,1,A),A<.3?t.blossom.buds??t.blossom.cols:t.blossom.cols,.3,.02),A>.6&&t.fruit)for(let B=0;B<t.fruit.n;B++){let W=y[Math.floor(e()*y.length)];_.set(e.range(-1,1),e.range(-.9,.2),e.range(-1,1)).normalize();let R=_.clone().multiplyScalar(W.r*.92).add(W.c);if(R.clone().sub(m).dot(_)<0){B--,e()<.2&&B++;continue}i.blob(Te(R.x,R.y,R.z),t.fruit.r,t.fruit.r*(t.fruit.tall??1.1),rt(t.fruit.c,.8),t.fruit.c,7,5,it(t.fruit.c,D(16777215),.2))}}function xc(i=1.5,e=2.15){let t=[],n=i/2,s=e-n;for(let r=0;r<=6;r++)t.push(new Ce(-n,s*r/6,0));for(let r=1;r<=12;r++){let o=Math.PI-r/12*Math.PI;t.push(new Ce(Math.cos(o)*n,s+Math.sin(o)*n,0))}for(let r=1;r<=6;r++)t.push(new Ce(n,s*(1-r/6),0));return t}function Qu(i,e,t,n,s){let r=xc(),o=ke(n*.56,.05,.56),a=(l,c)=>Ot(r,l<0?c:1-c);for(let l of[-1,1])for(let c=0;c<(t.strands??3);c++){let h=[],u=e()*Pe,d=Math.round(40*o)+3,f=o*e.range(.8,1);for(let x=0;x<=d;x++){let m=x/d*f,{p}=a(l,m),v=u+m*38;h.push(new Ce(p.x+Math.cos(v)*.07,p.y+Math.sin(v*.7)*.03,p.z+Math.sin(v)*.09))}i.tube(null,h,.008,.003,t.wood??st.wood,st.stem,4);let g=Math.round(t.leaf.n*f*2);for(let x=0;x<g;x++){let{p:m}=Ot(h,e()),p=new Ce(e.range(-1,1),e.range(-.2,1),e.range(-1,1)).normalize(),v=m.clone().add(p.clone().multiplyScalar(.03));fn(i,$t(v,p),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.2),W:t.leaf.W*e.range(.7,1.2)})}if(s>=0&&t.flower){let x=Math.round(t.flower.n*f*2/(t.strands??3));for(let m=0;m<x;m++){let p=e.range(t.flower.t0??.1,1),{p:v}=Ot(h,p);t.flower.make(i,v,e,ke(s+e.range(-.15,.1),0,1))}}}}var _t=N,Li=class{constructor(e=1){this.g=[],this.rng=Yt(e)}add(e,t,n,s=.03,r){e=e.index?e.toNonIndexed():e,t&&e.applyMatrix4(t);let o=e.attributes.position.count,a=new Float32Array(o*3),l=new ue(n),c=1+this.rng.range(-s,s)*2;if(l.multiplyScalar(c),r){let h=new ue(r).multiplyScalar(c),u=e.attributes.position;e.computeBoundingBox();let d=e.boundingBox.min.y,f=e.boundingBox.max.y,g=new ue;for(let x=0;x<o;x++)g.copy(l).lerp(h,(u.getY(x)-d)/(f-d+1e-6)),a[x*3]=g.r,a[x*3+1]=g.g,a[x*3+2]=g.b}else for(let h=0;h<o;h++)a[h*3]=l.r,a[h*3+1]=l.g,a[h*3+2]=l.b;return e.setAttribute("color",new St(a,3)),e.deleteAttribute("uv"),this.g.push(e),this}box(e,t,n,s,r,o,a,l,c){return this.add(new kn(e,t,n),be(Te(s,r,o),l??new He),a,c)}cyl(e,t,n,s,r,o,a,l=10,c,h,u){return this.add(new un(e,t,n,l),be(Te(s,r,o),c??new He),a,h,u)}sph(e,t,n,s,r,o=1,a=1,l=1,c=10,h,u){return this.add(new Ct(e,c,Math.max(4,c-3)),be(Te(t,n,s),fi(o,a,l)),r,h,u)}lathe(e,t,n,s,r,o=16,a,l){return this.add(new Ti(e.map(([c,h])=>new oe(c,h)),o),Te(t,n,s),r,l,a)}mesh(e,t=!0){let n=new Ge(dc(this.g),e);return n.castShadow=t,n.receiveShadow=!0,n}},Pr=new Gt({vertexColors:!0,roughness:.86}),Kx=new Gt({vertexColors:!0,roughness:.86,side:bt}),nn=.18,Zn=[{id:0,name:"Jardim da frente",cost:0,rect:[-5,5,-4.6,3.5],tag:[0,0]},{id:1,name:"Varanda",cost:120,rect:[-4.8,4.8,-6.9,-4.9],tag:[0,-5.6],h:2.6,desc:"Vasos suspensos, jardineiras nas janelas e vasos na varanda."},{id:2,name:"Canteiros do leste",cost:500,rect:[5,12.3,-8.6,3.5],tag:[8.7,-1.5],desc:"Dois canteiros, vasos e o lugar da sua primeira \xE1rvore."},{id:3,name:"Laguinho",cost:1200,rect:[-12.3,-5,-8.6,3.5],tag:[-8.6,-1.5],desc:"Um lago para ninfeias e l\xF3tus, com canteiro em volta."},{id:4,name:"Alameda dos arcos",cost:2800,rect:[-5,5,5,14.3],tag:[0,9.3],desc:"Arcos para trepadeiras e quatro canteiros floridos."},{id:5,name:"Pomar",cost:5500,rect:[5,12.3,5,14.3],tag:[8.7,9.6],desc:"Espa\xE7o para tr\xEAs \xE1rvores e canteiros \xE0 sombra."},{id:6,name:"Prado das flores",cost:9e3,rect:[-12.3,-5,5,14.3],tag:[-8.7,9.6],desc:"Canteiros grandes para um mar de flores."}],Ir={x:-8.6,z:-.6,rx:2.5,rz:1.9},_c=[{z:0,x:-2.9,zc:-1.3,cols:3,rows:2},{z:0,x:2.9,zc:-1.3,cols:3,rows:2},{z:2,x:8.7,zc:.4,cols:3,rows:2},{z:2,x:8.7,zc:-3.2,cols:3,rows:2},{z:3,x:-8.6,zc:-4.3,cols:5,rows:1},{z:4,x:-2.9,zc:7.6,cols:3,rows:2},{z:4,x:2.9,zc:7.6,cols:3,rows:2},{z:4,x:-2.9,zc:11.6,cols:3,rows:2},{z:4,x:2.9,zc:11.6,cols:3,rows:2},{z:5,x:10.4,zc:6.6,cols:3,rows:1},{z:5,x:10.2,zc:13,cols:3,rows:1},{z:6,x:-8.7,zc:7.2,cols:4,rows:2},{z:6,x:-8.7,zc:10.5,cols:4,rows:2},{z:6,x:-8.7,zc:13.3,cols:4,rows:1}],fo=.82,vc=[{z:0,x:-1.35,zc:-4.1},{z:0,x:1.35,zc:-4.1},{z:1,x:-4.05,zc:-5.75,porch:!0},{z:1,x:4.05,zc:-5.75,porch:!0},{z:2,x:6.1,zc:2.5},{z:2,x:11.4,zc:2.5},{z:3,x:-6,zc:2.5},{z:3,x:-11.4,zc:2.5},{z:4,x:-1.25,zc:5.6},{z:4,x:1.25,zc:5.6},{z:5,x:6,zc:5.9},{z:6,x:-5.9,zc:5.9},{z:6,x:-5.9,zc:13.6}],yc=[{z:2,x:10.4,zc:-6.6},{z:3,x:-10.6,zc:-6.9},{z:5,x:7.3,zc:7.9},{z:5,x:10.6,zc:9.9},{z:5,x:7.2,zc:12.3},{z:6,x:-11.4,zc:5.9+0}],ef=[{z:4,x:0,zc:7.4},{z:4,x:0,zc:11.4}],jx=[-3.4,-1.55,1.55,3.4],Qx=[-2.75,2.75],Gs=[{id:"lanternas",name:"Lanternas do caminho",price:150,beauty:15,desc:"Luz quentinha para as noites no jardim."},{id:"banco",name:"Banco de madeira",price:240,beauty:15,desc:"Um cantinho para admirar as flores."},{id:"bebedouro",name:"Banho de passarinho",price:380,beauty:20,desc:"Os p\xE1ssaros agradecem a \xE1gua fresca."},{id:"casinha",name:"Casinha de passarinho",price:480,beauty:20,desc:"Um lar colorido no alto de um poste."},{id:"carrinho",name:"Carrinho de m\xE3o florido",price:700,beauty:30,desc:"Um velho carrinho transbordando flores."},{id:"anao",name:"An\xE3o de jardim",price:600,beauty:25,desc:"O guardi\xE3o simp\xE1tico dos canteiros."}];function e_(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=Yt(5);e.fillStyle="#6f9a50",e.fillRect(0,0,512,512);for(let s=0;s<2600;s++){let r=t()*512,o=t()*512,a=t.range(6,34);e.fillStyle=`hsla(${t.range(78,106)},${t.range(30,46)}%,${t.range(32,46)}%,${t.range(.05,.16)})`;for(let l of[-512,0,512])for(let c of[-512,0,512])e.beginPath(),e.ellipse(r+l,o+c,a,a*t.range(.5,1),t()*3,0,Pe),e.fill()}let n=new Tn(i);return n.wrapS=n.wrapT=As,n.repeat.set(36,36),n.colorSpace=ft,n.anisotropy=4,n}function t_(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=Yt(9),r=[];for(let l=0;l<9;l++)r.push([Math.round(s.range(1,5))*s.sign(),Math.round(s.range(1,5))*s.sign(),s()*6,s.range(.4,1)]);let o=(l,c)=>{let h=0;for(let[u,d,f,g]of r)h+=Math.sin((l*u+c*d)*Pe/256+f)*g;return h};for(let l=0;l<256;l++)for(let c=0;c<256;c++){let h=o(c+1,l)-o(c-1,l),u=o(c,l+1)-o(c,l-1),d=(l*256+c)*4,f=new _t(-h*.8,-u*.8,1).normalize();n.data[d]=(f.x*.5+.5)*255,n.data[d+1]=(f.y*.5+.5)*255,n.data[d+2]=(f.z*.5+.5)*255,n.data[d+3]=255}t.putImageData(n,0,0);let a=new Tn(e);return a.wrapS=a.wrapT=As,a.repeat.set(2.2,2.2),a}var bc=(i,e,t,n=0)=>i>t[0]-n&&i<t[1]+n&&e>t[2]-n&&e<t[3]+n,Mc=i=>{let e=i.cols*fo+.3,t=i.rows*fo+.3;return[i.x-e/2,i.x+e/2,i.zc-t/2,i.zc+t/2]},tf=(i,e,t=0)=>((i-Ir.x)/(Ir.rx+t))**2+((e-Ir.z)/(Ir.rz+t))**2<1,Dr=(i,e)=>{for(let t=Zn.length-1;t>=0;t--)if(t!==1&&bc(i,e,Zn[t].rect))return t;return-1},n_=(i,e)=>Math.abs(i)<.75&&e>-4.6&&e<15.5||e>3.6&&e<4.9&&Math.abs(i)<12.3,Sc=(i,e)=>e<-4.95&&Math.abs(i)<4.9?nn:e<-4.6&&Math.abs(i)<1.4?Ie(0,nn,ke((-4.6-e)/.35,0,1)):0;function nf(i,e,t){let n={spots:[],zones:Zn,decor:{},zoneGroups:[],lockGroups:[],nightMats:[],lamps:[],tickers:[]},s=Yt(77),r=new Ge(new Yi(260,48),new Gt({map:e_(),roughness:1,color:14543052}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r),n.ground=r;{let u=new tn,d=Yt(3),f=(v,_,b,L,A,P)=>{let y=u.n,S=[P,P*1.7,P*2.9];for(let z=0;z<=3;z++)for(let B=0;B<=72;B++){let W=B/72*Pe,R=z/3,w=Ie(v,_,R),M=(Math.sin(W*3+S[0])*.5+Math.sin(W*7+S[1])*.3+Math.sin(W*13+S[2])*.2+1.1)*b*Math.sin(R*Math.PI*.85);u.vert(Math.cos(W)*w,M-.3,Math.sin(W)*w,new ue().copy(L).lerp(A,R))}u.quadGrid(y,3,72,!1)};f(60,150,9,D(8301652),D(6986842),1.3),f(120,240,22,D(6986850),D(6262650),4.1);let g=new Ge(u.build(),new Gt({vertexColors:!0,roughness:1}));i.add(g);let x=Ci({sway:.03,glow:.06}),m=[{H:1.6,R:1.9,trunkR:.14,limbs:6,leaves:520,leafSize:.42,leafCols:[D(5016122),D(3832372),D(6987850)]},{H:2.4,R:1.6,trunkR:.13,limbs:6,leaves:480,leafSize:.4,leafCols:[D(3832388),D(3107386),D(5937738)]},{H:1.3,R:2.3,trunkR:.16,limbs:7,leaves:600,leafSize:.45,leafCols:[D(5936192),D(6989384),D(4883512)]}].map((v,_)=>{let b=new tn;return uo(b,Yt(20+_),v,1,-1),b.build()}),p=[];for(let v=0;v<46;v++){let _=v%4,b,L;if(_===0)b=d.range(-24,24),L=d.range(-28,-16);else if(_===1)b=d.range(15.5,30)*(d()<.5?-1:1),L=d.range(-22,22);else if(_===2)b=d.range(-30,30),L=d.range(19.5,34),Math.abs(b)<4&&(b+=8);else{let A=d()*Pe,P=d.range(34,58);b=Math.cos(A)*P,L=Math.sin(A)*P}p.push([b,L])}m.forEach((v,_)=>{let b=p.filter((P,k)=>k%3===_),L=new Ds(v,x,b.length),A=new Dt;b.forEach(([P,k],y)=>{A.position.set(P,0,k),A.rotation.y=d()*6,A.scale.setScalar(d.range(1.5,2.6)),A.updateMatrix(),L.setMatrixAt(y,A.matrix)}),L.castShadow=!0,L.receiveShadow=!0,i.add(L)})}{let u=new Li(11),d=Yt(12),f=(x,m,p,v)=>{let _=new qi(m-x,v-p,1,1);_.rotateX(-Math.PI/2),u.add(_,Te((x+m)/2,.012,(p+v)/2),14207138,0)};f(-.8,.8,-4.6,16.2),f(-12.3,12.3,3.55,4.95);let g=(x,m,p)=>u.add(new un(p,p*1.06,.05,7),be(Te(x,.03,m),We(d()*6),fi(1,1,d.range(.7,.95))),d.pick([13222324,12432806,14077632,12103844]),.04);for(let x=-4.2;x<16;x+=.86)g(d.range(-.12,.12),x,d.range(.3,.38));for(let x=-11.8;x<12;x+=.86)Math.abs(x)>.7&&g(x,4.25+d.range(-.1,.1),d.range(.3,.38));for(let x=0;x<150;x++){let m=d()<.55,p=m?d.range(-.78,.78):d.range(-12.2,12.2),v=m?d.range(-4.5,16):d.range(3.6,4.9);u.sph(d.range(.02,.05),p,.02,v,d.pick([12103324,14998731,11050636]),1,.5,1,5)}i.add(u.mesh(Pr,!1))}i_(i,n);{let u=new Li(21),d=15986146,f=(g,x,m,p)=>{let v=Math.hypot(m-g,p-x),_=Math.round(v/.24),b=Math.atan2(m-g,p-x),L=We(b);for(let A=0;A<=_;A++){let P=A/_,k=Ie(g,m,P),y=Ie(x,p,P);A%8===0?(u.box(.11,1,.11,k,.5,y,d,L),u.sph(.07,k,1.03,y,d,1,1,1,6)):(u.box(.085,.72,.025,k,.42,y,d,be(L,We(Math.PI/2))),u.add(new Us(.06,.09,4),be(Te(k,.825,y),L,We(Math.PI/4),fi(1,1,.3)),d))}u.box(.035,.07,v,(g+m)/2,.3,(x+p)/2,d,L),u.box(.035,.07,v,(g+m)/2,.64,(x+p)/2,d,L)};f(-12.6,-9.2,-12.6,14.7),f(12.6,-9.2,12.6,14.7),f(-12.6,14.7,-1.2,14.7),f(1.2,14.7,12.6,14.7),f(-12.6,-9.2,-4.6,-9.2),f(4.6,-9.2,12.6,-9.2);for(let g of[-1,1])u.box(.14,2.2,.14,g*1.2,1.1,14.7,d);u.box(2.7,.12,.16,0,2.2,14.7,d),u.box(2.9,.06,.3,0,2.29,14.7,d),u.box(.08,1,.08,2,.5,15.3,8018496),u.box(.24,.2,.36,2,1.08,15.3,13125690),u.box(.02,.14,.1,2.13,1.14,15.2,15986146),i.add(u.mesh(Pr))}let o=[[.001,0],[.17,0],[.19,.04],[.25,.36],[.285,.38],[.285,.43],[.25,.43],[.235,.4]],a=new Gt({color:5914672,roughness:1}),l=u=>(u.id=n.spots.length,u.soil=null,n.spots.push(u),u),c=(u,d,f,g,x,m=.35)=>{let p=new Ge(new Ct(x,9,5,0,Pe,0,Math.PI/2),a.clone());return p.scale.y=m,p.position.set(d,f,g),p.receiveShadow=!0,u.add(p),p};for(let u of Zn){let d=new Ft,f=new Li(100+u.id),g=Yt(200+u.id);n.zoneGroups[u.id]=d,i.add(d);for(let x of _c.filter(m=>m.z===u.id)){let[m,p,v,_]=Mc(x),b=p-m,L=_-v,A=x.x,P=x.zc,k=[9070152,8215616,9728078];f.box(b+.16,.2,.09,A,.1,v,g.pick(k)),f.box(b+.16,.2,.09,A,.1,_,g.pick(k)),f.box(.09,.2,L,m,.1,P,g.pick(k)),f.box(.09,.2,L,p,.1,P,g.pick(k));for(let[z,B]of[[m,v],[p,v],[m,_],[p,_]])f.box(.12,.27,.12,z,.135,B,7229496);let y=new qi(b,L,Math.round(b*4),Math.round(L*4));y.rotateX(-Math.PI/2);let S=y.attributes.position;for(let z=0;z<S.count;z++)S.setY(z,g.range(-.012,.02));y.computeVertexNormals(),f.add(y,Te(A,.15,P),6177843,.02);for(let z=0;z<x.rows;z++)for(let B=0;B<x.cols;B++){let W=A+(B-(x.cols-1)/2)*fo,R=P+(z-(x.rows-1)/2)*fo,w=x.rows===1||z===x.rows-1,M=l({type:"bed",zone:u.id,pos:new _t(W,.16,R),stand:new _t(W,0,w?_+.5:v-.5),scale:1.75,pickR:.36,pickH:.5});M.soil=c(d,W,.15,R,.26)}}for(let x of vc.filter(m=>m.z===u.id)){let m=x.porch?nn:0,p=1.25;f.lathe(o.map(([_,b])=>[_*p,b*p]),x.x,m,x.zc,g.pick([13004616,12149311,13597266]),18,void 0,.02);let v=l({type:"pot",zone:u.id,pos:new _t(x.x,m+.5,x.zc),stand:new _t(x.x+(x.porch?x.x>0?-.85:.85:0),0,x.zc+(x.porch?.1:.85)),scale:1.55,pickR:.42,pickH:.9,pickY:-.4});v.soil=c(d,x.x,m+.47,x.zc,.3,.2)}for(let x of yc.filter(m=>m.z===u.id)){for(let p=0;p<13;p++){let v=p/13*Pe;f.sph(g.range(.1,.14),x.x+Math.cos(v)*.72,.03,x.zc+Math.sin(v)*.72,g.pick([12432806,11116949,13617080]),1,.7,1,6)}let m=l({type:"tree",zone:u.id,pos:new _t(x.x,.03,x.zc),stand:new _t(x.x+.35,0,x.zc+1.05),scale:1.45,pickR:.7,pickH:1.9});m.soil=c(d,x.x,0,x.zc,.66,.12)}for(let x of ef.filter(m=>m.z===u.id)){let m=xc(),p=15986146;for(let _ of[-.24,.24]){let b=new mr(m.map(L=>new _t(L.x,L.y,L.z+_)));f.add(new $a(b,40,.028,6),Te(x.x,0,x.zc),p,0)}for(let _=1;_<m.length-1;_+=2){let b=m[_];f.cyl(.014,.014,.48,x.x+b.x,b.y,x.zc,p,5,Ve(Math.PI/2),0)}let v=l({type:"arch",zone:u.id,pos:new _t(x.x,0,x.zc),stand:new _t(x.x-1.35,0,x.zc+.55),scale:1,pickR:.95,pickH:2.4});v.soil=c(d,x.x-.75,0,x.zc,.3,.25),c(d,x.x+.75,0,x.zc,.3,.25).material=v.soil.material}if(u.id===1){for(let x of jx){f.add(new Ct(.22,12,6,0,Pe,Math.PI/2,Math.PI/2),Te(x,2.02,-5.05),9071176,.03),f.add(new ui(.22,.018,5,14),be(Te(x,2.02,-5.05),Ve(Math.PI/2)),7229496);for(let _=0;_<3;_++){let b=_/3*Pe+.5;f.cyl(.005,.005,.55,x+Math.cos(b)*.1,2.02+.26,-5.05+Math.sin(b)*.1,4868682,4,be(We(-b),Ut(.4)),0)}let v=l({type:"hang",zone:1,pos:new _t(x,2.02,-5.05),stand:new _t(x,0,-4.35),scale:1.35,pickR:.4,pickH:.9,pickY:-.5,high:!0});v.soil=c(d,x,2.02-.03,-5.05,.2,.2)}for(let x of Qx){f.box(1.5,.2,.26,x,1,-6.78,8297100),f.box(1.56,.03,.3,x,1.1,-6.78,7244412);for(let m of[-.6,.6])f.box(.05,.14,.2,x+m,.86,-6.84,5917242);for(let m=-1;m<=1;m++){let p=l({type:"window",zone:1,pos:new _t(x+m*.46,1.1,-6.76),stand:new _t(x+m*.46,0,-6.05),scale:1.2,pickR:.24,pickH:.6,pickY:-.1});p.soil=c(d,x+m*.46,1.09,-6.76,.17,.2)}}}if(u.id===3&&s_(d,f,n,l,g),f.g.length&&d.add(f.mesh(Pr)),u.cost>0){let x=new Ft,m=new Li(300+u.id),[p,v]=u.tag;u.id===1?(m.box(.7,.36,.05,p,1.75,-4.92,12095592),m.cyl(.01,.01,.4,p-.28,2.05,-4.92,5592405,4),m.cyl(.01,.01,.4,p+.28,2.05,-4.92,5592405,4)):(m.box(.09,1.25,.09,p,.62,v,8018496),m.box(.95,.5,.06,p,1.25,v+.06,12884588,Ut(.04)),m.box(.8,.07,.065,p,1.33,v+.07,9070152,Ut(.04)),m.box(.6,.07,.065,p-.08,1.17,v+.07,9070152,Ut(.04))),x.add(m.mesh(Pr)),i.add(x),n.lockGroups[u.id]=x}}r_(i,n),a_(i,n,e,t);let h=new Hn({visible:!1});n.pickables=[];for(let u of n.spots){let d=new Ge(new un(u.pickR,u.pickR,u.pickH,8),h);d.position.copy(u.pos),d.position.y+=u.pickH/2+(u.pickY??0),d.userData.spot=u,i.add(d),n.pickables.push(d),u.pick=d}return n.setZone=(u,d)=>{n.zoneGroups[u].visible=d,n.lockGroups[u]&&(n.lockGroups[u].visible=!d);for(let f of n.spots)f.zone===u&&(f.pick.visible=d)},n.setDecor=(u,d)=>{n.decor[u]&&(n.decor[u].visible=d)},n.setNight=u=>{for(let d of n.nightMats)d.emissiveIntensity=d.userData.e*u;for(let d of n.lamps)d.intensity=d.userData.i*u*(d.parent.visible?1:0),d.visible=u>.02},n.update=(u,d)=>{for(let f of n.tickers)f(u,d)},n.blocked=(u,d)=>{if(Math.abs(u)>12.2||d>14.4||d<-8.9)return!0;if(Math.abs(u)<4.95&&d<-4.95)return d<-6.55||Math.abs(u)>4.6||Math.abs(Math.abs(u)-4.05)<.45&&d<-5.3;for(let f of _c)if(bc(u,d,Mc(f),.22))return!0;if(tf(u,d,.35))return!0;for(let f of vc)if(!f.porch&&(u-f.x)**2+(d-f.zc)**2<.5**2)return!0;for(let f of yc)if((u-f.x)**2+(d-f.zc)**2<.62**2)return!0;for(let f of ef)for(let g of[-.75,.75])if((u-f.x-g)**2+(d-f.zc)**2<.3**2)return!0;for(let f of n.decorBlocks)if(n.decor[f.id].visible&&(u-f.x)**2+(d-f.z)**2<f.r**2)return!0;return!1},n}function i_(i,e){let t=new Li(31),n=Yt(32),s=16182489,r=7228468,o=16512748,a=[12146746,12870722,11423796,13397578,12082240],l=-10,c=9,h=6.2,u=3,d=-6.9;t.box(c,u,h,0,u/2,l,s,null,0),t.box(c+.12,.5,h+.12,0,.25,l,11904662,null,0);let f=2.5,g=c/2;for(let y of[-1,1]){let S=new ct,z=y*g,B=l-h/2,W=l+h/2,R=y>0?[z,u,W,z,u,B,z,u+f,l]:[z,u,B,z,u,W,z,u+f,l];S.setAttribute("position",new Fe(R,3)),S.computeVertexNormals(),t.add(S,null,s,0),t.cyl(.42,.42,.06,z+y*.02,u+.85,l,10274013,16,Ut(Math.PI/2),0),t.add(new ui(.44,.05,6,20),be(Te(z+y*.03,u+.85,l),We(Math.PI/2)),o,0)}let x=Math.atan2(f,h/2),m=Math.hypot(f,h/2),p=(y,S,z,B,W,R,w,M,T)=>{let E=(S-y)/T,O=Math.sin(R),Z=Math.cos(R);for(let K=0;K<M;K++)for(let te=0;te<T;te++){let G=(K+.5)/M*w,V=y+(te+.5)*E+(K%2-.5)*E*.5;t.add(new un(E*.52,E*.52,w/M*1.3,6,1,!0,0,Math.PI),be(Te(V,z-O*G+.04+K*.002,B+W*Z*G),Ve(W*(Math.PI/2+R)),We(W*Math.PI/2),fi(.45,1,1)),a[Math.floor(n()*a.length)],.05)}t.box(S-y-.1,.08,w,(y+S)/2,z-O*w/2-.03,B+W*Z*w/2,9061936,Ve(W*R),0)};p(-(c+1.1)/2,(c+1.1)/2,u+f,l,-1,x,m+.75,11,26),p(-(c+1.1)/2,(c+1.1)/2,u+f,l,1,x,m+.12,10,26),t.cyl(.16,.16,c+1.2,0,u+f+.1,l,11030066,8,Ut(Math.PI/2));for(let y of[-1,1])for(let S of[-1,1])t.box(.2,u,.2,y*g,u/2,l+S*h/2,r);t.box(c+.1,.18,.16,0,u-.05,d,r),t.box(.7,1.9,.7,2.6,u+f-.3,l-1,11036494),t.box(.84,.14,.84,2.6,u+f+.68,l-1,9327936),e.chimney=new _t(2.6,u+f+.8,l-1),t.box(1.24,2.28,.1,0,1.14+nn,d+.03,o,null,0),t.box(1.04,2.14,.1,0,1.09+nn,d+.06,6262666,null,0);for(let[y,S]of[[-.24,.55],[.24,.55],[-.24,1.3],[.24,1.3]])t.box(.36,.6,.03,y,S+nn,d+.115,5670272,null,0);t.sph(.045,.38,1.1+nn,d+.14,14727258,1,1,1,8,0),t.add(new Yi(.2,16),Te(0,1.86+nn,d+.115),16179104,0);let v=new Gt({color:10275040,roughness:.15,metalness:.1,emissive:16761962,emissiveIntensity:0});v.userData.e=1.6,e.nightMats.push(v);let _=[];for(let y of[-2.75,2.75]){t.box(1.5,1.42,.1,y,1.85,d+.02,o,null,0);let z=new qi(1.3,1.22);z.translate(y,1.85,d+.075),_.push(z),t.box(.05,1.22,.04,y,1.85,d+.09,o,null,0),t.box(1.3,.05,.04,y,1.85,d+.09,o,null,0);for(let B of[-1,1]){t.box(.5,1.42,.05,y+B*1.02,1.85,d+.04,7312296);for(let W=0;W<6;W++)t.box(.4,.03,.02,y+B*1.02,1.85-.55+W*.22,d+.075,6456728,null,0)}t.box(1.7,.07,.2,y,1.85-.75,d+.08,o,null,0)}for(let y of[-1,1]){let S=new Yi(.4,16);S.rotateY(y*Math.PI/2),S.translate(y*(g+.055),u+.85,l),_.push(S)}let b=new Ge(dc(_),v);i.add(b),t.box(9.8,nn,2.05,0,nn/2,-5.93,11108956,null,0);for(let y=0;y<20;y++)t.box(.46,.02,2.05,-4.66+y*.49,nn+.005,-5.93,n.pick([11766370,10911320,12226664]),null,.03);t.box(2.4,.09,.4,0,.045,-4.75,10911320);for(let y of[-4.7,-1.45,1.45,4.7])t.box(.15,2.35,.15,y,nn+1.17,-5,o),t.box(.24,.1,.24,y,nn+.05,-5,o),t.box(.26,.08,.26,y,2.5,-5,o);t.box(9.8,.16,.16,0,2.6,-5,o);for(let[y,S]of[[-4.7,-1.45],[1.45,4.7]]){t.box(S-y,.06,.07,(y+S)/2,nn+.78,-5,o);for(let z=y+.2;z<S;z+=.2)t.box(.04,.7,.04,z,nn+.42,-5,o,null,0)}p(-5.15,5.15,u+.1,d-.02,1,.19,2.5,5,30),t.box(.12,.2,.12,.95,2.1,d+.12,3815994);let L=new Gt({color:16773320,emissive:16760944,emissiveIntensity:0,roughness:.4});L.userData.e=4,e.nightMats.push(L);let A=new Ge(new Ct(.07,8,6),L);A.position.set(.95,2.02,d+.14),i.add(A);let P=new Sr(16758886,0,11,1.6);P.position.set(0,2.3,-5.6),P.userData.i=14,i.add(P),e.lamps.push(P),t.box(.9,.02,.5,0,nn+.012,-6.4,12087370),t.lathe([[.001,0],[.26,0],[.3,.3],[.26,.62],[.24,.62],[.24,.56]],5.6,0,-6.5,8018496,12),t.cyl(.24,.24,.02,5.6,.55,-6.5,6987968,12);let k=t.mesh(Kx);i.add(k)}function s_(i,e,t,n,s){let{x:r,z:o,rx:a,rz:l}=Ir,c=new xr,h=40;for(let _=0;_<=h;_++){let b=_/h*Pe,L=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5),A=Math.cos(b)*a*L,P=Math.sin(b)*l*L;_===0?c.moveTo(A,P):c.lineTo(A,P)}let u=new Ya(c,24);u.rotateX(Math.PI/2);let d=t_(),f=new Ge(u,new Gt({color:4165526,roughness:.06,metalness:.35,normalMap:d,normalScale:new oe(.35,.35),transparent:!0,opacity:.86,side:bt}));f.position.set(r,.035,o),f.receiveShadow=!0,i.add(f),t.water=f;let g=new Ge(u.clone(),new Gt({color:2771524,roughness:1,side:bt}));g.position.set(r,.008,o),i.add(g),t.tickers.push((_,b)=>{d.offset.set(b*.012,b*.018)});let x=[12432806,11116949,13617080,10261898,11906204];for(let _=0;_<46;_++){let b=_/46*Pe+s.range(-.04,.04),L=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5)+s.range(0,.07),A=s.range(.13,.25);e.add(new Ct(A,7,5),be(Te(r+Math.cos(b)*a*L,.04,o+Math.sin(b)*l*L),We(s()*6),fi(1,s.range(.5,.8),s.range(.7,1.1))),s.pick(x),.04)}let m=new tn;for(let _=0;_<26;_++){let b=s.range(2.4,4.4),L=Math.cos(b)*a*.86+s.range(-.15,.15),A=Math.sin(b)*l*.86+s.range(-.1,.1),P=s.range(.5,1);m.petal(be(Te(L,0,A),We(s()*6),Ve(s.range(.02,.2))),{L:P,W:.03,a:.6,b:.4,curl:.4,fold:.4,nu:4,nv:1,cols:[D(4160058),D(5937736),D(9091168)]}),_%4===0&&(m.tube(Te(L,0,A),[new _t(0,0,0),new _t(.02,P*.6,0),new _t(.03,P*1.1,0)],.006,.005,D(5933626),D(6982202),4),m.blob(Te(L+.03,P*1.1,A),.02,.07,D(6965802),D(5913122),6,4))}let p=new Ge(m.build(),Ci({sway:.25}));p.position.set(r,0,o),p.castShadow=!0,i.add(p);for(let[_,b]of[[-1,.45],[.85,-.5],[.15,.75],[1.35,.5]]){let L=r+_,A=o+b,P=Math.hypot(_/a,b/l),k=r+_/P*1*(1+.32/a),y=o+b/P*(1+.42/l),S=Math.atan2(b/l,_/a);n({type:"pond",zone:3,pos:new _t(L,.04,A),stand:new _t(r+Math.cos(S)*(a+.75),0,o+Math.sin(S)*(l+.75)),scale:1.7,pickR:.5,pickH:.5})}let v=[];for(let _=0;_<4;_++){let b=new tn,L=s.pick([D(15759914),D(16052456),D(15222826),D(16232490)]);b.blob(be(Ut(Math.PI/2),fi(1,1,.5)),.05,.14,L,s()<.5?D(16052456):L,6,5),b.petal(be(Te(-.12,0,0),Ut(Math.PI/2),Ve(Math.PI/2)),{L:.1,W:.09,a:1.6,b:.5,nu:2,nv:2,cols:[L,L,L]});let A=new Ge(b.build(),new Gt({vertexColors:!0,roughness:.5,side:bt}));A.userData={a:s()*6,r:s.range(.45,.8),v:s.range(.25,.45)*s.sign(),o:s()*6},i.add(A),v.push(A)}t.tickers.push((_,b)=>{for(let L of v){let A=L.userData,P=A.a+b*A.v,k=A.r+.12*Math.sin(b*.5+A.o);L.position.set(r+Math.cos(P)*a*k,-.03,o+Math.sin(P)*l*k),L.rotation.y=-P-Math.sign(A.v)*Math.PI/2+Math.sin(b*5+A.o)*.15}})}function r_(i,e){e.decorBlocks=[];let t=(n,s,r)=>{let o=new Li(400+n.length),a=new Ft;s(o,a),o.g.length&&a.add(o.mesh(Pr)),a.visible=!1,i.add(a),e.decor[n]=a,r&&e.decorBlocks.push({id:n,...r})};t("lanternas",(n,s)=>{let r=new Gt({color:16773320,emissive:16758880,emissiveIntensity:0,roughness:.4});r.userData.e=5,e.nightMats.push(r);let o=[[-1,-2.6],[1,.6],[-1,6.2],[1,9.4],[-1,12.8],[5.6,4.25],[-5.6,4.25]];for(let[a,l]of o){n.cyl(.025,.035,.8,a,.4,l,3815994,6),n.box(.16,.03,.16,a,.8,l,3815994),n.add(new Us(.14,.1,4),be(Te(a,1.05,l),We(Math.PI/4)),3815994);let c=new Ge(new kn(.11,.18,.11),r);c.position.set(a,.905,l),s.add(c)}for(let[a,l]of[[0,-1],[0,7.8],[0,4.25]]){let c=new Sr(16756832,0,9,1.5);c.position.set(a,1.1,l),c.userData.i=9,s.add(c),e.lamps.push(c)}}),t("banco",n=>{for(let a=0;a<4;a++)n.box(1.5,.04,.1,-3.4,.45,2.7-.18+a*.12,10778704,null,.04);for(let a=0;a<3;a++)n.box(1.5,.1,.035,-3.4,.62+a*.14,2.7-.27,10778704,Ve(-.15),.04);for(let a of[-.68,.68])n.box(.07,.45,.07,-3.4+a,.22,2.7+.2,4868682),n.box(.07,.98,.07,-3.4+a,.49,2.7-.25,4868682,Ve(-.1)),n.box(.07,.05,.5,-3.4+a,.62,2.7-.02,4868682)},{x:-3.4,z:2.7,r:.85}),t("bebedouro",(n,s)=>{n.lathe([[.001,0],[.24,0],[.22,.06],[.09,.12],[.07,.62],[.12,.7],[.42,.78],[.44,.84],[.4,.84],[.36,.78],[.001,.76]],2.6,0,2.5,13617340,18);let l=new Ge(new Yi(.385,18),new Gt({color:6992064,roughness:.05,metalness:.3,transparent:!0,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.set(2.6,.815,2.5),s.add(l)},{x:2.6,z:2.5,r:.55}),t("casinha",n=>{n.cyl(.04,.05,2.1,4.6,1.05,-3.7,9071178,6),n.box(.36,.34,.32,4.6,2.2,-3.7,8038592),n.box(.3,.03,.4,4.6-.12,2.45,-3.7,13129802,Ut(.7)),n.box(.3,.03,.4,4.6+.12,2.45,-3.7,13129802,Ut(-.7)),n.cyl(.06,.06,.02,4.6,2.22,-3.7+.165,2763306,10,Ve(Math.PI/2)),n.cyl(.012,.012,.12,4.6,2.1,-3.7+.2,9071178,5,Ve(Math.PI/2))}),t("carrinho",(n,s)=>{let a=We(.6),l=(g,x,m)=>new _t(g,x,m).applyMatrix4(a).add(new _t(4.2,0,1.95)),c=l(0,.42,0);n.box(.9,.28,.56,c.x,c.y,c.z,5933690,a),c=l(0,.56,0),n.box(.82,.04,.48,c.x,c.y,c.z,4863014,a),c=l(.55,.2,0),n.cyl(.2,.2,.07,c.x,c.y,c.z,3815994,14,be(a,Ve(Math.PI/2)));for(let g of[-.24,.24])c=l(-.75,.48,g),n.box(.7,.04,.04,c.x,c.y,c.z,9071178,be(a,Ut(-.12))),c=l(-.35,.14,g),n.box(.05,.3,.05,c.x,c.y,c.z,9071178,a);let h=new tn,u=Yt(8),d=[15755930,16238622,16777215,10124008,15888410].map(D);for(let g=0;g<26;g++){let x=l(u.range(-.36,.36),.58,u.range(-.2,.2)),m=u.range(.1,.24),p=u.pick(d);h.tube(Te(x.x,x.y,x.z),[new _t(0,0,0),new _t(.01,m*.5,0),new _t(u.range(-.04,.04),m,u.range(-.04,.04))],.004,.003,D(4885050),D(5937732),4);for(let v=0;v<6;v++)h.petal(be(Te(x.x,x.y+m,x.z),We(v*1.05),Ve(1.2)),{L:.045,W:.03,nu:2,nv:2,cup:.3,cols:[p,p,p]});for(let v=0;v<3;v++)h.petal(be(Te(x.x,x.y,x.z),We(u()*6),Ve(u.range(.5,1.1))),{L:.1,W:.04,nu:2,nv:2,fold:.3,cols:[D(3832372),D(5016122),D(6987850)]})}let f=new Ge(h.build(),Ci({sway:.4}));f.castShadow=!0,s.add(f)},{x:4.2,z:1.95,r:.75}),t("anao",n=>{n.sph(.15,-4.3,.17,-.1,3828392,1,1.1,1,10),n.sph(.11,-4.3,.4,-.1,15911076,1,1,1,10),n.add(new Us(.115,.3,10),Te(-4.3,.6,-.1),14170158),n.sph(.09,-4.3,.33,-.1+.07,16053488,1,1.1,.7,8),n.sph(.025,-4.3,.41,-.1+.105,15247496,1,1,1,6);for(let o of[-.07,.07])n.sph(.05,-4.3+o,.03,-.1+.06,4863014,1,.7,1.4,6)})}function a_(i,e,t,n){let s=[],r=[],o=[],a=[];for(let w=0;w<3;w++){let M=w/3*Math.PI+.3,T=Math.cos(M),E=Math.sin(M),O=(w-1)*.02,Z=w%2*.02,K=(w-1)*.03,te=s.length/3,G=[[-.5,0,0],[.5,0,0],[-.32,.55,.5],[.32,.55,.5],[0,1,1]];for(let[V,re,ve]of G){s.push(O+T*V*.026+K*ve,re,Z+E*V*.026+K*ve*.5),o.push(0,1,0);let Se=.68+re*.4;r.push(Se*.82,Se,Se*.6)}a.push(te,te+1,te+2,te+1,te+3,te+2,te+2,te+3,te+4)}let l=new ct;l.setAttribute("position",new Fe(s,3)),l.setAttribute("normal",new Fe(o,3)),l.setAttribute("color",new Fe(r,3)),l.setIndex(a);let c=new Ja({vertexColors:!0,side:bt});c.onBeforeCompile=w=>{Object.assign(w.uniforms,Cn),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); float h = position.y * position.y;
          float ph = ip.x * 0.55 + ip.z * 0.4; float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ip.x * 0.15 + ip.z * 0.11);
          transformed.x += (sin(uTime * 1.5 + ph) * 0.09 + sin(uTime * 3.3 + ph * 2.1) * 0.03) * h * uWind * gust;
          transformed.z += cos(uTime * 1.2 + ph * 1.3) * 0.07 * h * uWind * gust; }`)};let h=Yt(55),u=[],d=_c.map(Mc),f=(w,M)=>{if(Math.abs(w)<4.95&&M<-4.75||n_(w,M))return!1;for(let T of d)if(bc(w,M,T,.1))return!1;if(tf(w,M,.28))return!1;for(let T of vc)if((w-T.x)**2+(M-T.zc)**2<.1)return!1;for(let T of yc)if((w-T.x)**2+(M-T.zc)**2<.45)return!1;return!0},g=78e3,x=[[],[],[],[],[],[],[]],m=new Dt,p=new ue,v=[];for(let w=0;w<g;w++){let M=w<g*.74,T,E;if(M)T=h.range(-12.5,12.5),E=h.range(-9.1,14.6);else{let Z=h()*Pe,K=13+Math.pow(h(),1.6)*22;if(T=Math.cos(Z)*K*1.1,E=3+Math.sin(Z)*K,Math.abs(T)<12.6&&E>-9.2&&E<14.7||Math.abs(T)<5.2&&E<-6||Math.abs(T)<.9&&E>14)continue}if(M&&!f(T,E))continue;let O=M?Dr(T,E):-1;v.push({x:T,z:E,zn:O,s:h.range(.75,1.25),rot:h()*Pe,hue:h(),wild:h.range(1.7,2.8)})}for(let w=v.length-1;w>0;w--){let M=Math.floor(h()*(w+1)),T=v[w];v[w]=v[M],v[M]=T}let _=new Ds(l,c,v.length),b=w=>{let M=v[w],T=M.zn>0&&!n.has(M.zn),E=M.zn===-1||T;m.position.set(M.x,Sc(M.x,M.z),M.z),m.rotation.set(0,M.rot,0);let O=(E?.12*M.wild:.09)*M.s;m.scale.set(M.s*(E?1.25:1),O,M.s*(E?1.25:1)),m.updateMatrix(),_.setMatrixAt(w,m.matrix),E?p.setHSL(.19+M.hue*.08,.36+M.hue*.1,.34+M.hue*.1):p.setHSL(.225+M.hue*.05,.37,.33+M.hue*.07),_.setColorAt(w,p)};v.forEach((w,M)=>{b(M),w.zn>0&&x[w.zn].push(M)}),_.receiveShadow=!0,_.frustumCulled=!1,i.add(_),e.grass=_,e.setGrass=w=>{_.count=Math.max(1e3,Math.round(v.length*w))},e.setGrass(t.grass),e.mowZone=w=>{for(let M of x[w])b(M);_.instanceMatrix.needsUpdate=!0,_.instanceColor.needsUpdate=!0};let L=new ct,A=[],P=[],k=[],y=[];for(let w=0;w<6;w++){let M=w/6*Pe,T=A.length/3;A.push(0,1,0,Math.cos(M-.4)*.5,1.06,Math.sin(M-.4)*.5,Math.cos(M+.4)*.5,1.06,Math.sin(M+.4)*.5),P.push(1,.9,.3,1,1,1,1,1,1),y.push(0,1,0,0,1,0,0,1,0),k.push(T,T+2,T+1)}{let w=A.length/3;A.push(-.05,0,0,.05,0,0,0,1,0),P.push(.25,.5,.2,.25,.5,.2,.3,.6,.25),y.push(0,1,0,0,1,0,0,1,0),k.push(w,w+1,w+2)}L.setAttribute("position",new Fe(A,3)),L.setAttribute("color",new Fe(P,3)),L.setAttribute("normal",new Fe(y,3)),L.setIndex(k);let S=v.map((w,M)=>[w,M]).filter(([w])=>(w.zn===-1||w.zn>0)&&w.hue>.93),z=new Ds(L,c,S.length),B=[16777215,16242762,16228552,12099824,16222810,16773792],W=w=>{let[M]=S[w],T=M.zn===-1||!n.has(M.zn);m.position.set(M.x+.05,0,M.z),m.rotation.set(0,M.rot,0);let E=T?.09*M.s:1e-4;m.scale.set(E,T?.3*M.wild*.55:1e-4,E),m.updateMatrix(),z.setMatrixAt(w,m.matrix),z.setColorAt(w,p.set(B[Math.floor(M.rot*7)%B.length]))};S.forEach((w,M)=>W(M)),z.frustumCulled=!1,i.add(z);let R=e.mowZone;e.mowZone=w=>{R(w),S.forEach(([M],T)=>{M.zn===w&&W(T)}),z.instanceMatrix.needsUpdate=!0}}var o_=16507084,l_=[9857343,11896143,13935982],c_=8364170,h_=7114360,u_=16511972,f_=14656828,d_=15520922,sf=15233898;function wc(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle="#fbe0cc",t.fillRect(0,0,1024,512);let n=256,s=276,r=1.62;t.translate(n,s),t.scale(r,r),t.translate(-n,-s);for(let a of[-1,1]){let l=t.createRadialGradient(n+a*58,s+30,2,n+a*58,s+30,26);l.addColorStop(0,"rgba(244,128,128,0.5)"),l.addColorStop(1,"rgba(244,128,128,0)"),t.fillStyle=l,t.fillRect(n+a*58-30,s,60,62)}for(let a of[-1,1]){let l=n+a*36;if(i==="open"){t.save(),t.beginPath(),t.ellipse(l,s,16.5,20,0,0,Pe),t.clip(),t.fillStyle="#fffdfa",t.fillRect(l-20,s-24,40,48);let c=t.createRadialGradient(l,s+5,2,l,s+1,16);c.addColorStop(0,"#b4f0d6"),c.addColorStop(.5,"#6cc4ae"),c.addColorStop(.88,"#32867e"),c.addColorStop(1,"#245f5e"),t.fillStyle=c,t.beginPath(),t.ellipse(l,s+2,13.5,16.5,0,0,Pe),t.fill(),t.fillStyle="#1e2a2c",t.beginPath(),t.ellipse(l,s+2,5.6,7.6,0,0,Pe),t.fill(),t.fillStyle="rgba(60,40,30,0.26)",t.fillRect(l-20,s-24,40,9),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(l-5,s-6,4.4,5.2,0,0,Pe),t.fill(),t.beginPath(),t.ellipse(l+5,s+9,2.1,2.5,0,0,Pe),t.fill(),t.restore(),t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(l-18,s-9),t.quadraticCurveTo(l,s-27,l+18,s-9),t.stroke(),t.lineWidth=2.6,t.beginPath(),t.moveTo(l+a*17,s-10),t.lineTo(l+a*23,s-15),t.stroke(),t.beginPath(),t.moveTo(l+a*14,s-14),t.lineTo(l+a*18,s-21),t.stroke()}else t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(l-16,s+5),t.quadraticCurveTo(l,s-13,l+16,s+5)):(t.moveTo(l-16,s+1),t.quadraticCurveTo(l,s+12,l+16,s+1)),t.stroke();t.strokeStyle="#96683f",t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(l-15,s-35+a*0),t.quadraticCurveTo(l,s-42,l+15,s-35),t.stroke()}t.fillStyle="rgba(220,150,120,0.45)",t.beginPath(),t.ellipse(n,s+28,3.4,2.4,0,0,Pe),t.fill(),t.strokeStyle="#c4605c",t.lineWidth=3,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(n-11,s+43),t.quadraticCurveTo(n,s+58,n+11,s+43),t.closePath(),t.fillStyle="#d8706a",t.fill()):(t.moveTo(n-9.5,s+45),t.quadraticCurveTo(n,s+53,n+9.5,s+45)),t.stroke();let o=new Tn(e);return o.colorSpace=ft,o.anisotropy=8,o}var dn=(i,e=.7,t={})=>new Gt({color:i,roughness:e,...t});function at(i,e,t,n=0,s=0,r=0){let o=new Ge(i,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}function In(i,e,t,n){let s=new Ft;return s.position.set(e,t,n),i.add(s),s}var Ur=(i,e=20)=>new Ti(i.map(([t,n])=>new oe(t,n)),e);function rf(){let i=new Ft,e=In(i,0,0,0),t=dn(o_,.62),n=dn(c_,.8,{side:bt}),s=dn(u_,.8),r=dn(f_,.45),o=dn(d_,.9,{side:bt}),a={};a.hips=In(e,0,.87,0),a.spine=In(a.hips,0,.1,0),at(Ur([[.001,-.02],[.118,0],[.108,.1],[.125,.24],[.138,.32],[.11,.4],[.05,.43],[.045,.5]]),s,a.spine).scale.z=.82;{let M=new Ti([[.122,0],[.112,.1],[.128,.22],[.139,.3]].map(([T,E])=>new oe(T*1.04,E)),10,-.6,1.2);at(M,n,a.spine).scale.z=.84}for(let M of[-1,1])at(new kn(.032,.17,.014),n,a.spine,M*.075,.365,.092).rotation.x=-.5,at(new kn(.035,.34,.016),n,a.spine,M*.075,.26,-.1).rotation.x=.2,at(new Ct(.014,8,6),dn(15918784,.4),a.spine,M*.075,.285,.123);a.skirt=In(a.hips,0,.11,0);let l=Ur([[.112,.02],[.122,0],[.146,-.1],[.2,-.25],[.262,-.4],[.296,-.5],[.301,-.52]],28);{let M=l.attributes.position;for(let T=0;T<M.count;T++){let E=M.getY(T),O=Math.atan2(M.getZ(T),M.getX(T)),Z=1+.07*Math.sin(O*9)*ke(-E/.5,0,1);M.setX(T,M.getX(T)*Z),M.setZ(T,M.getZ(T)*Z*.92)}l.computeVertexNormals()}at(l,n,a.skirt).receiveShadow=!1,at(new ui(.119,.014,6,24),dn(h_,.8),a.skirt,0,.012,0).rotation.x=Math.PI/2;for(let M of[-1,1]){let T=In(a.hips,M*.075,0,0),E=In(T,0,-.4,0);at(new hi(.06,.3,4,10),t,T,0,-.2,0),at(new hi(.05,.2,4,10),t,E,0,-.12,0),at(new Ct(.061,10,8),t,E,0,0,0),at(Ur([[.001,-.455],[.066,-.45],[.062,-.3],[.066,-.17],[.072,-.165],[.072,-.15],[.058,-.15]],14),r,E),at(new Ct(.068,12,8),r,E,0,-.415,.045).scale.set(1,.72,1.7),a[M<0?"hipL":"hipR"]=T,a[M<0?"kneeL":"kneeR"]=E}for(let M of[-1,1]){let T=In(a.spine,M*.15,.345,0),E=In(T,0,-.23,0);at(new Ct(.062,12,9),s,T,M*.005,-.03,0).scale.set(1,1.15,1),at(new hi(.036,.16,4,8),t,T,0,-.14,0),at(new hi(.032,.17,4,8),t,E,0,-.095,0),at(new Ct(.037,10,8),t,E,0,0,0);let Z=In(E,0,-.215,0);at(new Ct(.04,10,8),t,Z).scale.set(.85,1.1,1),a[M<0?"shL":"shR"]=T,a[M<0?"elL":"elR"]=E,a[M<0?"handL":"handR"]=Z}a.neck=In(a.spine,0,.46,0),a.head=In(a.neck,0,.135,.005);let c=.158,h={open:wc("open"),closed:wc("closed"),happy:wc("happy")},u=dn(16777215,.62,{map:h.open,emissive:16777215,emissiveMap:h.open,emissiveIntensity:.16});at(new Ct(c,40,28),u,a.head).scale.set(.97,1.04,.96),at(new Ct(.012,8,6),t,a.head,0,-.03,c*.955).scale.set(1,.75,.6);for(let M of[-1,1])at(new Ct(.03,8,6),t,a.head,M*c*.95,-.01,0).scale.set(.4,1,.7);let f=new tn,g=Yt(4),x=l_.map(D),m=c*1.07,p=(M,T,E,O,Z={})=>f.petal(be(Te(0,m*.98,-.012),We(M),Ve(Math.PI/2-.04)),{L:T,W:E,a:.6,b:.42,cup:.16,nu:Z.nu??10,nv:3,vein:.2,base:.6,phase:g()*6,angFn:K=>{let te=K*T,G=O*m;return te<G?te/m:O+(Z.flare??0)*Math.sin((te-G)/Math.max(.01,T-G)*Math.PI*(Z.waves??1))},cols:x.map(K=>K.clone().multiplyScalar(g.range(.9,1.1))),...Z});f.blob(Te(0,.034,-.05),c*1,c*1,x[0],x[1],16,9);for(let M=0;M<15;M++){let T=M/14-.5;p(T*2.5+.12+g.range(-.04,.04),m*(.98+Math.abs(T)*.6+g.range(0,.1)),.125,9,{nu:6,b:.3})}for(let M of[-1,1])for(let T=0;T<4;T++)p(M*(1.42+T*.2),.42+T*.07,.1,1.5,{flare:-.14,waves:1.6,ruffle:.05,rf:1.2});for(let M=0;M<17;M++){let T=M/16-.5;p(Math.PI+T*2.9,.62+g.range(-.04,.06)-Math.abs(T)*.1,.105,1.62,{flare:-.16,waves:1.5,ruffle:.06,rf:1.2,nu:12})}let v=Ci({sway:.16,glow:.07,roughness:.48}),_=new Ge(f.build(),v);_.castShadow=!0,_.receiveShadow=!0,a.head.add(_),a.hat=In(a.head,0,c*.7,-.03),a.hat.rotation.x=-.36;let b=Ur([[.13,.012],[.19,.004],[.25,-.012],[.292,-.036],[.297,-.042]],36);{let M=b.attributes.position;for(let T=0;T<M.count;T++){let E=Math.atan2(M.getZ(T),M.getX(T)),O=Math.hypot(M.getX(T),M.getZ(T));M.setY(T,M.getY(T)+Math.sin(E*2+.5)*.02*(O/.3)**2+Math.sin(E*5)*.005*(O/.3))}b.computeVertexNormals()}at(b,o,a.hat).receiveShadow=!1,at(Ur([[.146,0],[.143,.05],[.128,.1],[.09,.128],[.001,.134]],28),o,a.hat),at(new un(.1445,.148,.038,28,1,!0),dn(sf,.7,{side:bt}),a.hat,0,.024,0);for(let M of[-1,1])at(new Ct(.03,8,6),dn(sf,.7),a.hat,-.12+0,.03,M*.035-.07).scale.set(.5,1.2,1.5);{let M=new tn;for(let E=0;E<6;E++)M.petal(be(We(E*1.047),Ve(1.25)),{L:.034,W:.026,nu:2,nv:2,cup:.3,cols:[D(16774880),D(16777215),D(16777215)]});M.blob(Te(0,.004,0),.01,.006,D(15905308),D(16306240),6,3);let T=new Ge(M.build(),dn(16777215,.7,{vertexColors:!0,side:bt}));T.position.set(.108,.045,.103),T.rotation.set(1.1,0,-.75),a.hat.add(T)}let L=new Ft,A=dn(7317408,.35,{metalness:.35});at(new un(.075,.085,.15,16),A,L,0,0,0);let P=at(new un(.014,.024,.2,8),A,L,0,.03,.14);P.rotation.x=.95;let k=at(new un(.034,.016,.03,10),A,L,0,.092,.225);k.rotation.x=.95;let y=at(new ui(.06,.009,6,14,Math.PI*1.1),A,L,0,.05,-.07);y.rotation.y=Math.PI/2,y.rotation.z=0;let S=at(new ui(.055,.008,6,12,Math.PI),A,L,0,.075,0);S.rotation.y=Math.PI/2,L.position.set(0,-.11,.03),L.visible=!1,a.handR.add(L);let z=new Ft;at(new un(.013,.013,.09,6),dn(9067064),z,0,0,0),at(new Ct(.035,8,6),dn(12107972,.3,{metalness:.6}),z,0,-.085,0).scale.set(.8,1.5,.25),z.position.set(0,-.05,.02),z.visible=!1,a.handR.add(z);let W={by:0,lean:0,twist:0,spine:0,headX:0,headY:0,headZ:0,shLx:0,shLz:.2,shRx:0,shRz:-.2,elL:-.1,elR:-.1,hipL:0,hipR:0,kneeL:0,kneeR:0,skirtX:0,skirtS:1,handRx:0},R={...W},w={group:i,J:a,state:"idle",t:0,phase:0,speed:0,heading:0,targetHeading:0,blinkT:2,face:"open",faceHold:0,actionT:0,actionDur:0,action:null,high:!1,lookAt:null,onStep:null,spoutWorld:new N,idleSeed:0};return w.setFace=(M,T=0)=>{w.face=M,w.faceHold=T,u.map=h[M],u.emissiveMap=h[M]},w.play=(M,T,E={})=>{w.state=M,w.actionT=0,w.actionDur=T,w.high=!!E.high,L.visible=M==="water",z.visible=M==="plant",M==="cheer"&&w.setFace("happy",T+.4)},w.stop=()=>{w.state="idle",L.visible=!1,z.visible=!1},w.faceTo=(M,T)=>{w.targetHeading=Math.atan2(M-i.position.x,T-i.position.z)},w.update=(M,T)=>{w.t+=M;let E=W,O=10,Z=Math.sin(T*1.7);if(E.by=Z*.004,E.lean=0,E.twist=Math.sin(T*.45)*.03,E.spine=Z*.012,E.headX=Math.sin(T*.6+1)*.04,E.headY=Math.sin(T*.33)*.22+Math.sin(T*.71)*.08,E.headZ=Math.sin(T*.5)*.03,E.shLx=Math.sin(T*.9)*.03,E.shRx=-Math.sin(T*.9)*.03,E.shLz=.2,E.shRz=-.2,E.elL=-.2,E.elR=-.2,E.hipL=0,E.hipR=0,E.kneeL=0,E.kneeR=0,E.skirtX=0,E.skirtS=1,E.handRx=0,w.state==="walk"){w.phase+=M*w.speed*3.5;let G=Math.sin(w.phase),V=Math.cos(w.phase),re=ke(w.speed/2.4,.3,1);E.hipL=-G*.62*re,E.hipR=G*.62*re,E.kneeL=Math.max(0,V)*.95*re+.08,E.kneeR=Math.max(0,-V)*.95*re+.08,E.shLx=G*.5*re,E.shRx=-G*.5*re,E.elL=-.3-Math.max(0,G)*.3,E.elR=-.3-Math.max(0,-G)*.3,E.shLz=.2,E.shRz=-.2,E.by=Math.abs(V)*.035*re-.02,E.lean=.07*re,E.twist=-G*.1*re,E.headY=G*.05,E.headX=-.03,E.headZ=V*.03,E.skirtX=-.05+V*.04;let ve=Math.floor(w.phase/Math.PI);ve!==w._step&&(w._step=ve,w.onStep&&w.onStep()),O=16}else if(w.state==="water"){w.actionT+=M;let G=ke(w.actionT/w.actionDur,0,1),V=cn(G/.18)*cn((1-G)/.15),re=cn((G-.16)/.12)*cn((1-G)/.14),ve=w.high?1:0;E.shRx=-(1+ve*1.25)*V,E.shRz=-.1-.12*V,E.elR=-(.55-ve*.3)*V,E.handRx=(.75+Math.sin(T*5)*.06)*re-ve*.3*V,E.shLx=.15*V,E.shLz=.3*V+.1,E.elL=-.9*V,E.lean=(.14-ve*.2)*V,E.headX=(.3-ve*.75)*V,E.headY=0,E.twist=.12*V,E.kneeL=.12*V,E.hipL=-.06*V}else if(w.state==="plant"){w.actionT+=M;let G=ke(w.actionT/w.actionDur,0,1),V=cn(G/.22)*cn((1-G)/.2),re=Math.sin(T*9)*.5+.5;E.by=-.36*V,E.hipL=-1.5*V,E.kneeL=2.25*V,E.hipR=-.55*V,E.kneeR=2.1*V,E.lean=.55*V,E.spine=.15*V,E.skirtX=-.5*V,E.skirtS=1-.3*V,E.shRx=-(1.05+re*.3)*V,E.elR=-(.5+re*.45)*V,E.shRz=-.05,E.shLx=-.9*V,E.elL=-.7*V,E.shLz=.25*V,E.headX=.35*V,E.headY=0,E.handRx=.6*V,O=12}else if(w.state==="collect"){w.actionT+=M;let G=ke(w.actionT/w.actionDur,0,1),V=cn(G/.3)*cn((1-G)/.3);E.lean=.4*V,E.shRx=-1.25*V,E.shLx=-1.2*V,E.elR=-.4*V,E.elL=-.45*V,E.shRz=-.25*V,E.shLz=.25*V,E.kneeL=.3*V,E.kneeR=.3*V,E.hipL=-.3*V,E.hipR=-.3*V,E.by=-.04*V,E.headX=.3*V,E.headY=0}else if(w.state==="cheer"){w.actionT+=M;let G=ke(w.actionT/w.actionDur,0,1),V=cn(G/.2)*cn((1-G)/.25),re=Math.abs(Math.sin(G*Math.PI*3))*V;E.by=re*.11,E.shLx=-2.45*V,E.shRx=-2.45*V,E.shLz=.95*V+.1,E.shRz=-.95*V-.1,E.elL=-.25,E.elR=-.25,E.headX=-.2*V,E.headY=0,E.kneeL=(1-re)*.3*V,E.kneeR=(1-re)*.3*V,E.hipL=-(1-re)*.15*V,E.hipR=-(1-re)*.15*V,E.spine=-.08*V,O=18}else if(w.state==="admire"){w.actionT+=M;let G=ke(w.actionT/w.actionDur,0,1),V=cn(G/.25)*cn((1-G)/.25);E.lean=.25*V,E.shLx=-.5*V,E.shRx=-.5*V,E.elL=-1.7*V,E.elR=-1.7*V,E.shLz=-.25*V,E.shRz=.25*V,E.headX=.22*V,E.headZ=.12*V,E.headY=0,E.kneeL=.15*V,E.kneeR=.15*V,E.hipL=-.1*V,E.hipR=-.1*V}w.state!=="idle"&&w.state!=="walk"&&w.actionT>=w.actionDur&&w.stop();let K=1-Math.exp(-O*M);for(let G in R)R[G]+=(W[G]-R[G])*K;e.position.y=R.by,e.rotation.x=R.lean*.22,e.position.z=-R.lean*.1,a.spine.rotation.set(R.spine+R.lean*.95,R.twist,0),a.hips.rotation.y=-R.twist*.4,a.head.rotation.set(R.headX-R.lean*.75,R.headY-R.twist,R.headZ),a.shL.rotation.set(R.shLx,0,-R.shLz),a.shR.rotation.set(R.shRx,0,-R.shRz),a.hipL.rotation.x=R.hipL,a.hipR.rotation.x=R.hipR,a.kneeL.rotation.x=R.kneeL,a.kneeR.rotation.x=R.kneeR,a.skirt.rotation.x=R.skirtX,a.skirt.scale.set(1+(1-R.skirtS)*.5,R.skirtS,1+(1-R.skirtS)*.8),v.userData.u.uSway.value=.14+w.speed*.12;let te=w.targetHeading-w.heading;te=Math.atan2(Math.sin(te),Math.cos(te)),w.heading+=te*(1-Math.exp(-9*M)),i.rotation.y=w.heading,w.faceHold>0?(w.faceHold-=M,w.faceHold<=0&&w.setFace("open")):(w.blinkT-=M,w.blinkT<0&&(w.face==="open"?(w.setFace("closed"),w.blinkT=.11):(w.setFace("open"),w.blinkT=1.8+Math.random()*3.5))),k.getWorldPosition(w.spoutWorld)},w}var Pi=900;function af(i){let e=new Float32Array(Pi*3),t=new Float32Array(Pi*3),n=new Float32Array(Pi),s=new Float32Array(Pi),r=[];for(let y=0;y<Pi;y++)r.push({life:0});let o=new ct;o.setAttribute("position",new St(e,3)),o.setAttribute("color",new St(t,3)),o.setAttribute("aSize",new St(n,1)),o.setAttribute("aAlpha",new St(s,1));let a=new Rt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / -mv.z; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.15, r) * vA; gl_FragColor = vec4(vC, a); }"}),l=new ka(o,a);l.frustumCulled=!1,l.renderOrder=5,i.add(l);let c=0,h=new ue,u=y=>{for(let z=0;z<Pi&&(c=(c+1)%Pi,!(r[c].life<=0));z++);let S=r[c];S.x=y.x,S.y=y.y,S.z=y.z,S.vx=y.vx??0,S.vy=y.vy??0,S.vz=y.vz??0,S.g=y.g??0,S.drag=y.drag??0,S.life=S.max=y.life??1,S.size=y.size??.05,S.grow=y.grow??0,h.set(y.color??16777215),S.r=h.r,S.gc=h.g,S.b=h.b,S.a=y.alpha??1,S.floor=y.floor??-1,S.sway=y.sway??0,S.tw=y.twinkle??0,S.seed=Math.random()*10},d={emit:u},f=(y,S)=>y+Math.random()*(S-y);d.water=(y,S,z=5)=>{for(let B=0;B<z;B++){let W=.42+Math.random()*.1,R=S.x+f(-.2,.2),w=S.z+f(-.2,.2),M=S.y+f(0,.15);u({x:y.x,y:y.y,z:y.z,vx:(R-y.x)/W,vz:(w-y.z)/W,vy:(M-y.y)/W+4.9*W,g:-9.8,life:W+.05,size:f(.025,.045),color:Math.random()<.5?12576511:15267583,alpha:.85})}},d.splash=(y,S=6)=>{for(let z=0;z<S;z++)u({x:y.x+f(-.12,.12),y:y.y+.05,z:y.z+f(-.12,.12),vx:f(-.5,.5),vy:f(.6,1.4),vz:f(-.5,.5),g:-5,life:.4,size:.03,color:14217471,alpha:.7})},d.sparkle=(y,S=14,z=16770688,B=.3)=>{for(let W=0;W<S;W++)u({x:y.x+f(-B,B),y:y.y+f(0,B*1.5),z:y.z+f(-B,B),vx:f(-.3,.3),vy:f(.3,1),vz:f(-.3,.3),drag:1.5,life:f(.6,1.2),size:f(.04,.09),color:z,twinkle:12})},d.dust=(y,S=10)=>{for(let z=0;z<S;z++)u({x:y.x+f(-.1,.1),y:y.y+.03,z:y.z+f(-.1,.1),vx:f(-.6,.6),vy:f(.2,.7),vz:f(-.6,.6),drag:3,life:f(.4,.8),size:f(.07,.14),grow:.2,color:9071184,alpha:.5})},d.hearts=(y,S=5)=>{for(let z=0;z<S;z++)u({x:y.x+f(-.2,.2),y:y.y,z:y.z+f(-.2,.2),vx:f(-.15,.15),vy:f(.5,.9),vz:f(-.15,.15),drag:.8,life:f(.9,1.5),size:f(.07,.11),color:z%2?16751288:16762584,sway:1})},d.burst=(y,S,z=40,B=1.2)=>{for(let W=0;W<z;W++){let R=Math.random()*Pe,w=f(.5,2.2);u({x:y.x,y:y.y+f(.2,1),z:y.z,vx:Math.cos(R)*w*B,vy:f(1.2,3.2),vz:Math.sin(R)*w*B,g:-3.2,drag:1.2,life:f(1.2,2.4),size:f(.06,.12),color:S[W%S.length],sway:1.5})}},d.petalFall=(y,S,z)=>u({x:y.x+f(-z,z),y:y.y+f(-.3,.5),z:y.z+f(-z,z),vx:f(-.1,.25),vy:-f(.25,.5),vz:f(-.1,.1),life:f(4,7),size:f(.05,.08),color:S,sway:2,floor:.03,alpha:.95}),d.smoke=y=>u({x:y.x+f(-.08,.08),y:y.y,z:y.z+f(-.08,.08),vx:.18+f(-.05,.05),vy:f(.35,.55),vz:f(-.05,.05),life:f(5,8),size:.3,grow:.22,color:15262942,alpha:.22,drag:.1});let g=[],x=new Hn({vertexColors:!0,side:bt}),m=(y,S)=>{let z=new tn;return z.petal(be(Ut(-1.15),Ve(0)),{L:.085,W:.075,a:1.5,b:.45,nu:3,nv:2,cols:[D(2760728),y,S]}),z.petal(be(Ut(-2.05),Ve(0)),{L:.06,W:.06,a:1.4,b:.45,nu:3,nv:2,cols:[D(2760728),y,S]}),z.build()},p=[[16228894,16503386],[6990064,12574975],[16249048,16777215],[15755930,16564440],[16242762,16773792],[11832048,14733567]];for(let y=0;y<9;y++){let S=new Ft,[z,B]=p[y%p.length],W=m(D(z),D(B)),R=new Ge(W,x),w=new Ge(W,x);w.scale.x=-1,S.add(R,w);let M=new Ge(new hi(.006,.05,2,5),new Hn({color:2760728}));M.rotation.x=Math.PI/2,S.add(M),S.visible=!1,i.add(S),g.push({g:S,wr:R,wl:w,pos:new N(Math.random()*6-3,1,Math.random()*6),target:new N(0,1,0),t:Math.random()*10,rest:0,seed:Math.random()*100,speed:f(.8,1.4)})}d.butterflyTargets=[],d.butterflyCount=0;let v=[];for(let y=0;y<46;y++)v.push({x:f(-12,12),z:f(-8,14),y:f(.3,1.8),s:Math.random()*100});let _=500,b=new Float32Array(_*6),L=new ct;L.setAttribute("position",new St(b,3));let A=new Ha(L,new dr({color:13624564,transparent:!0,opacity:0}));A.frustumCulled=!1,i.add(A);let P=[];for(let y=0;y<_;y++)P.push({x:f(-16,16),y:f(0,14),z:f(-12,18),v:f(11,15)});d.rain=0;let k=0;return d.update=(y,S,z,B,W)=>{a.uniforms.uScale.value=innerHeight*1.9*(B.fov?1/Math.tan(B.fov*Math.PI/360)/3.4:1);for(let M=0;M<Pi;M++){let T=r[M];if(T.life<=0){s[M]=0,n[M]=0;continue}T.life-=y;let E=1-T.life/T.max;T.vy+=T.g*y;let O=Math.exp(-T.drag*y);T.vx*=O,T.vy*=T.g?1:O,T.vz*=O,T.x+=(T.vx+(T.sway?Math.sin(S*2.2+T.seed)*.25*T.sway:0))*y,T.y+=T.vy*y,T.z+=(T.vz+(T.sway?Math.cos(S*1.7+T.seed)*.2*T.sway:0))*y,T.floor>=0&&T.y<T.floor&&(T.y=T.floor,T.vy=0,T.vx=0,T.vz=0,T.sway=0),e[M*3]=T.x,e[M*3+1]=T.y,e[M*3+2]=T.z,t[M*3]=T.r,t[M*3+1]=T.gc,t[M*3+2]=T.b,n[M]=T.size+T.grow*E*T.max,s[M]=T.a*Math.min(1,E*8)*Math.min(1,(1-E)*3)*(T.tw?.6+.4*Math.sin(S*T.tw+T.seed*7):1)}let R=z.night;if(R>.3)for(let M of v)Math.random()<y*.55&&u({x:M.x+Math.sin(S*.3+M.s)*1.5,y:M.y+Math.sin(S*.5+M.s*2)*.3,z:M.z+Math.cos(S*.27+M.s)*1.5,vx:f(-.1,.1),vy:f(-.03,.08),vz:f(-.1,.1),life:f(1.2,2.4),size:.07,color:15269754,alpha:R,sway:.4});o.attributes.position.needsUpdate=!0,o.attributes.color.needsUpdate=!0,o.attributes.aSize.needsUpdate=!0,o.attributes.aAlpha.needsUpdate=!0,k-=y,k<0&&W&&(k=.45,d.smoke(W));let w=R>.5||d.rain>.3?0:d.butterflyCount;if(g.forEach((M,T)=>{let E=T<w;if(!E&&!M.g.visible)return;if(E&&!M.g.visible&&(M.g.visible=!0,M.pos.set(f(-13,13),2.5,15),M.rest=0),M.t+=y,!E)M.target.set(M.pos.x*1.2+4,5,22);else if(M.rest>0&&(M.rest-=y,M.rest<=0)){let te=d.butterflyTargets;if(te.length){let G=te[Math.floor(Math.random()*te.length)];M.target.set(G.x+f(-.1,.1),G.y,G.z+f(-.1,.1))}else M.target.set(f(-4,4),.8,f(-3,3))}let O=M.target.clone().sub(M.pos),Z=O.length();if(M.rest<=0)if(Z<.08)M.rest=E?f(1.5,4):0,E||(M.g.visible=!1);else{O.normalize();let te=Math.min(1,Z);M.pos.addScaledVector(O,M.speed*y*Math.min(1,Z*2+.3)),M.pos.x+=Math.sin(M.t*3.1+M.seed)*.5*y*te,M.pos.y+=Math.sin(M.t*5.3+M.seed)*.6*y*te,M.pos.z+=Math.cos(M.t*2.7+M.seed)*.5*y*te,M.g.rotation.y=Math.atan2(O.x,O.z)}M.g.position.copy(M.pos);let K=M.rest>0?.25+Math.sin(M.t*2.5)*.25:Math.sin(M.t*26)*.9+.1;M.wr.rotation.z=K,M.wl.rotation.z=-K}),A.material.opacity=d.rain*.4,A.visible=d.rain>.01,A.visible){for(let M=0;M<_;M++){let T=P[M];T.y-=T.v*y,T.y<0&&(T.y=14,T.x=B.position.x*.3+f(-16,16),T.z=f(-12,18)),b[M*6]=T.x,b[M*6+1]=T.y,b[M*6+2]=T.z,b[M*6+3]=T.x+.03,b[M*6+4]=T.y+.38,b[M*6+5]=T.z}L.attributes.position.needsUpdate=!0}},d}function of(){let i=s=>{let r=document.createElement("canvas");r.width=r.height=128;let o=r.getContext("2d");o.shadowColor="rgba(40,60,40,0.35)",o.shadowBlur=8,o.shadowOffsetY=3,o.fillStyle="#ffffff",o.beginPath(),o.arc(64,60,46,0,Pe),o.fill(),o.beginPath(),o.moveTo(52,100),o.lineTo(64,122),o.lineTo(76,100),o.fill(),o.shadowColor="transparent",s(o);let a=new Tn(r);return a.colorSpace=ft,a},e=i(s=>{let r=s.createLinearGradient(0,28,0,92);r.addColorStop(0,"#8fd3ff"),r.addColorStop(1,"#2f8fe0"),s.fillStyle=r,s.beginPath(),s.moveTo(64,24),s.bezierCurveTo(64,24,38,58,38,70),s.arc(64,70,26,Math.PI,0,!0),s.bezierCurveTo(90,58,64,24,64,24),s.fill(),s.fillStyle="rgba(255,255,255,0.75)",s.beginPath(),s.ellipse(54,66,5,9,.4,0,Pe),s.fill()}),t=i(s=>{s.fillStyle="#f7b92a",s.beginPath(),s.arc(64,60,30,0,Pe),s.fill(),s.fillStyle="#ffd95a",s.beginPath(),s.arc(64,60,24,0,Pe),s.fill(),s.fillStyle="#f29a1a";for(let r=0;r<5;r++){let o=r/5*Pe-Math.PI/2;s.beginPath(),s.ellipse(64+Math.cos(o)*11,60+Math.sin(o)*11,8,8,0,0,Pe),s.fill()}s.fillStyle="#fff2b0",s.beginPath(),s.arc(64,60,6,0,Pe),s.fill()}),n=(()=>{let s=document.createElement("canvas");s.width=s.height=96;let r=s.getContext("2d");r.fillStyle="rgba(255,255,255,0.92)",r.beginPath(),r.arc(48,48,36,0,Pe),r.fill(),r.strokeStyle="#6aa85a",r.lineWidth=9,r.lineCap="round",r.beginPath(),r.moveTo(48,30),r.lineTo(48,66),r.moveTo(30,48),r.lineTo(66,48),r.stroke();let o=new Tn(s);return o.colorSpace=ft,o})();return{water:e,gift:t,plus:n}}var p_=["water","plant","pop","bloom","coin","buy","click","levelup","expand","step","error"];function lf(i="audio/"){let e={ctx:null,ready:!1,musicVol:.6,sfxVol:.8,buffers:{},night:0,rain:0},t,n,s,r,o=null,a=[],l={},c=!1,h=null,u=async g=>{if(e.buffers[g])return e.buffers[g];try{let x,m=window.__AUDIO&&window.__AUDIO[g];if(m){let v=atob(m),_=new Uint8Array(v.length);for(let b=0;b<v.length;b++)_[b]=v.charCodeAt(b);x=_.buffer}else{let v=await fetch(i+g+".mp3");if(!v.ok)return null;x=await v.arrayBuffer()}let p=await e.ctx.decodeAudioData(x);return e.buffers[g]=p,p}catch{return null}};e.unlock=()=>{if(e.ctx){e.ctx.resume&&e.ctx.resume();return}let g=window.AudioContext||window.webkitAudioContext;if(g){e.ctx=new g,t=e.ctx.createGain(),t.connect(e.ctx.destination),n=e.ctx.createGain(),n.gain.value=e.musicVol,n.connect(t),s=e.ctx.createGain(),s.gain.value=e.sfxVol,s.connect(t),r=e.ctx.createGain(),r.gain.value=Math.min(1,e.sfxVol*1.1),r.connect(t);for(let x of p_)u("sfx_"+x);e.ready=!0,d(),f()}};let d=async()=>{for(let g of["day","night","rain"]){let x=await u("amb_"+g);if(!x)continue;let m=e.ctx.createBufferSource(),p=e.ctx.createGain();m.buffer=x,m.loop=!0,p.gain.value=0,m.connect(p),p.connect(r),m.start(),l[g]=p}},f=async()=>{if(!e.ready)return;let g=e.night>.6?["music4"]:["music1","music2","music3"];a.length||(a=g.slice().sort(()=>Math.random()-.5));let x=a.shift();g.includes(x)||(a=[],x=g[Math.floor(Math.random()*g.length)]),o&&o.name===x&&g.length>1&&(x=g[(g.indexOf(x)+1)%g.length]);let m=await u(x);if(!m){h=setTimeout(f,8e3);return}let p=e.ctx.currentTime,v=e.ctx.createBufferSource(),_=e.ctx.createGain();if(v.buffer=m,v.connect(_),_.connect(n),_.gain.setValueAtTime(0,p),_.gain.linearRampToValueAtTime(1,p+3),v.start(),o){let b=o;b.g.gain.cancelScheduledValues(p),b.g.gain.setValueAtTime(b.g.gain.value,p),b.g.gain.linearRampToValueAtTime(0,p+4),setTimeout(()=>{try{b.src.stop()}catch{}},4500)}o={src:v,g:_,name:x,night:e.night>.6},clearTimeout(h),h=setTimeout(f,Math.max(5,m.duration-4+2.5)*1e3)};return e.sfx=(g,x=1,m=1)=>{if(!e.ready)return;let p=e.buffers["sfx_"+g];if(!p)return;let v=e.ctx.createBufferSource(),_=e.ctx.createGain();v.buffer=p,v.playbackRate.value=m*(.96+Math.random()*.08),_.gain.value=x,v.connect(_),_.connect(s),v.start()},e.setVolumes=(g,x)=>{e.musicVol=g,e.sfxVol=x,e.ready&&(n.gain.value=g,s.gain.value=x,r.gain.value=Math.min(1,x*1.1))},e.update=(g,x)=>{if(e.night=g,e.rain=x,!e.ready)return;let m=e.ctx.currentTime,p=(v,_)=>v&&v.gain.setTargetAtTime(_,m,1.2);p(l.day,(1-g)*(1-x*.7)*.9),p(l.night,g*.9),p(l.rain,x*.9),o&&o.night!==g>.6&&Math.abs(g-.6)>.25&&(a=[],f())},e.pause=g=>{e.ctx&&(g?e.ctx.suspend():e.ctx.resume())},e}function cf(i){let e=null,t=()=>{e=new Uint8Array(3780);for(let l=0;l<60;l++)for(let c=0;c<63;c++)e[l*63+c]=i(-12.4+c*.4,-8.8+l*.4)?1:0},n=(l,c)=>[Math.max(0,Math.min(62,Math.round((l- -12.4)/.4))),Math.max(0,Math.min(59,Math.round((c- -8.8)/.4)))],s=(l,c)=>l>=0&&c>=0&&l<63&&c<60&&!e[c*63+l],r=(l,c)=>{if(s(l,c))return[l,c];for(let h=1;h<14;h++){let u=null,d=1e9;for(let f=-h;f<=h;f++)for(let g=-h;g<=h;g++)if(Math.max(Math.abs(g),Math.abs(f))===h&&s(l+g,c+f)){let x=g*g+f*f;x<d&&(d=x,u=[l+g,c+f])}if(u)return u}return[l,c]},o=(l,c,h,u)=>{let d=Math.hypot(h-l,u-c),f=Math.ceil(d/.15);for(let g=0;g<=f;g++){let x=g/f;if(i(l+(h-l)*x,c+(u-c)*x))return!1}return!0},a={invalidate:()=>{e=null}};return a.path=(l,c,h,u)=>{e||t();let[d,f]=r(...n(l,c)),[g,x]=r(...n(h,u)),m=3780,p=new Float32Array(m).fill(1e9),v=new Int32Array(m).fill(-1),_=new Uint8Array(m),b=[],L=f*63+d,A=x*63+g;p[L]=0,b.push([0,L]);let P=W=>{let R=W%63,w=W/63|0;return Math.hypot(R-g,w-x)},k=!1,y=0;for(;b.length&&y++<6e3;){let W=0;for(let T=1;T<b.length;T++)b[T][0]<b[W][0]&&(W=T);let[,R]=b.splice(W,1)[0];if(_[R])continue;if(_[R]=1,R===A){k=!0;break}let w=R%63,M=R/63|0;for(let T=-1;T<=1;T++)for(let E=-1;E<=1;E++){if(!E&&!T)continue;let O=w+E,Z=M+T;if(!s(O,Z)||E&&T&&(!s(w+E,M)||!s(w,M+T)))continue;let K=Z*63+O,te=p[R]+(E&&T?1.414:1);te<p[K]&&(p[K]=te,v[K]=R,b.push([te+P(K),K]))}}let S=[];if(k){let W=A;for(;W!==-1;)S.push([-12.4+W%63*.4,-8.8+(W/63|0)*.4]),W=v[W];S.reverse()}else S.push([l,c]);S[0]=[l,c],i(h,u)||S.push([h,u]);let z=[S[0]],B=0;for(;B<S.length-1;){let W=S.length-1;for(;W>B+1&&!o(S[B][0],S[B][1],S[W][0],S[W][1]);)W--;z.push(S[W]),B=W}return z.slice(1)},a}var Pt=N,Lt=D(16777215),Nr={type:"dome",r:.012,h:.007,cols:[D(14258191),D(16107048),D(16374869)]},vt={daisy:{sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[D(15855325),Lt,Lt],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[D(15657691),Lt,Lt],nu:4,nv:2}],center:{...Nr,r:.016,h:.009}},tulip:(i,e,t)=>({layers:[{n:3,L:.075,W:.058,a:1.05,b:.6,tilt:.42,tiltC:.3,curl:-.6,curlC:-.78,cup:.95,r:.006,cols:[i,e,t],closedScale:.7,vein:.2},{n:3,L:.072,W:.056,a:1.05,b:.6,tilt:.34,tiltC:.25,curl:-.58,curlC:-.75,cup:.95,r:.004,cols:[i,e,t],closedScale:.7,vein:.2}]}),sunflower:{sepals:{n:13,L:.05,W:.03,tilt:1.5},layers:[{n:21,L:.115,W:.034,a:.8,b:.6,tilt:1.45,tiltC:.4,curl:.25,cup:.6,r:.07,cols:[D(15243788),D(16302620),D(16767294)],nu:4,nv:2,tj:.1},{n:21,L:.1,W:.032,a:.8,b:.6,tilt:1.3,tiltC:.3,curl:.2,cup:.6,r:.066,cols:[D(15243788),D(16103701),D(16766266)],nu:4,nv:2,tj:.1}],center:{type:"dome",r:.078,h:.022,y:.004,cols:[D(8014356),D(3809800),D(7035422)],seg:16}},rose:(i,e,t)=>({sepals:{n:5,L:.03,W:.011},layers:[{n:24,golden:!0,L:[.024,.055],W:[.024,.062],a:1.35,b:.48,tilt:[.04,1.2],tiltC:[.02,.22],curl:[-.6,.85],curlC:[-.7,-.5],cup:[1.4,.45],cupC:1.2,r:[.001,.009],y:[.014,0],cols:[rt(i,.8),i,it(i,t,.5)],cols2:[rt(e,.9),e,t],closedScale:.6,vein:.06}]}),peony:(i,e)=>({sepals:{n:5,L:.03,W:.02},layers:[{n:38,golden:!0,L:[.026,.07],W:[.026,.07],a:1.4,b:.42,tilt:[.08,1.3],tiltC:[.02,.2],curl:[-.7,.25],curlC:-.8,cup:[1.3,.6],ruffle:.22,rf:3,r:[.001,.01],y:[.02,0],cols:[i,it(i,e,.4),e],cols2:[it(i,e,.5),e,it(e,Lt,.5)],closedScale:.55}]}),dahlia:(i,e)=>({sepals:{n:8,L:.02,W:.01},layers:[{n:58,golden:!0,L:[.018,.062],W:[.011,.024],a:.95,b:.85,tilt:[.06,1.55],tiltC:[.02,.3],curl:[-.5,.15],curlC:-.5,cup:[1.6,.9],r:[.001,.006],y:[.016,-.004],cols:[rt(i,.85),i,e],cols2:[i,it(i,e,.5),it(e,Lt,.3)],nu:4,nv:2,closedScale:.5}]}),marigold:(i,e)=>({sepals:{n:6,L:.018,W:.012},layers:[{n:34,golden:!0,L:[.012,.032],W:[.014,.032],a:1.5,b:.4,tilt:[.05,1.35],tiltC:[.02,.2],curl:[-.4,.3],cup:[1,.3],ruffle:.4,rf:3,r:[.001,.006],y:[.012,0],cols:[rt(i,.85),i,e],nu:4,nv:3,closedScale:.5}]}),zinnia:(i,e)=>({sepals:{n:8,L:.014,W:.01},layers:[{n:14,L:.042,W:.02,a:1,b:.5,tilt:1.45,tiltC:.2,curl:.15,cup:.4,cols:[rt(i,.85),i,e],nu:4,nv:2},{n:12,L:.032,W:.018,a:1,b:.5,tilt:1.25,tiltC:.15,curl:.1,cup:.4,y:.003,cols:[rt(i,.85),i,e],nu:4,nv:2},{n:9,L:.022,W:.014,a:1,b:.5,tilt:1,tiltC:.1,curl:.1,cup:.5,y:.006,cols:[i,i,e],nu:3,nv:2}],center:{...Nr,r:.009,h:.008,y:.008}}),cosmos:(i,e)=>({sepals:{n:8,L:.012,W:.005},layers:[{n:8,L:.048,W:.032,a:1.5,b:.5,tilt:1.35,tiltC:.2,curl:.1,cup:.35,notch:.12,ruffle:.08,rf:3,cols:[rt(i,.8),i,e],vein:.2}],center:{...Nr,r:.009,h:.006}}),poppy:{layers:[{n:4,L:.06,W:.078,a:1.5,b:.42,tilt:1,tiltC:.15,curl:-.35,curlC:-.7,cup:.7,ruffle:.28,rf:2.5,cols:[D(1838354),D(14428696),D(15747622)],closedScale:.5},{n:2,L:.055,W:.07,a:1.5,b:.42,tilt:.8,tiltC:.1,curl:-.4,curlC:-.7,cup:.8,ruffle:.28,rf:2.5,cols:[D(1838354),D(14166042),D(15615012)],closedScale:.5}],center:{type:"dome",r:.01,h:.012,y:.006,cols:[D(5661498),D(7306568),D(4015398)],seg:8,stamens:{n:16,len:.016,spread:.9,c:D(2759714),tip:D(1708566),tipR:.0028}}},pansy:(i,e,t)=>({layers:[{n:2,L:.036,W:.046,a:1.5,b:.4,tilt:1.3,tiltC:.3,cup:.15,azList:[-.55,.55],azStep:0,jit:0,cols:[rt(i,.7),i,e],vein:.25},{n:3,L:.036,W:.048,a:1.5,b:.4,tilt:1.42,tiltC:.3,cup:.15,azList:[-1.9,1.9,Math.PI],jit:0,cols:[t,it(t,i,.75),e],vein:.25}],center:{...Nr,r:.005,h:.004}}),lily:(i,e,t)=>({layers:[{n:3,L:.095,W:.036,a:.9,b:.7,tilt:.78,tiltC:.12,curl:1.4,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75},{n:3,L:.09,W:.03,a:.9,b:.7,tilt:.85,tiltC:.1,curl:1.5,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75}],center:{stamens:{n:6,len:.065,spread:.45,c:D(13623456),tip:D(11883802),tipR:.005}}}),hibiscus:(i,e,t)=>({sepals:{n:5,L:.025,W:.012},layers:[{n:5,L:.075,W:.08,a:1.4,b:.42,tilt:1.2,tiltC:.12,curl:.35,curlC:-.5,cup:.3,ruffle:.18,rf:3,twist:.3,cols:[t,i,e],vein:.22,closedScale:.6}],center:{type:"column",L:.075,cols:[i,D(13637688)],dots:D(16241226)}}),daffodil:{layers:[{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.42,tiltC:.3,curl:.1,cup:.35,cols:[D(15980878),D(16508530),D(16774054)]},{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.5,tiltC:.3,curl:.1,cup:.35,cols:[D(15980878),D(16508530),D(16774054)]}],center:{type:"trumpet",L:.032,r0:.01,r1:.019,cols:[D(15905308),D(16091666)],ruffle:.12,rf:7}},azalea:(i,e)=>({layers:[{n:5,L:.03,W:.026,a:1.3,b:.5,tilt:1.05,tiltC:.15,curl:.3,cup:.4,ruffle:.15,cols:[rt(i,.75),i,e],nu:3,nv:2}],center:{stamens:{n:5,len:.028,spread:.3,c:e,tip:D(8006218),tipR:.0025}}}),camellia:(i,e)=>({sepals:{n:5,L:.02,W:.014},layers:[{n:26,golden:!0,L:[.018,.048],W:[.02,.05],a:1.4,b:.45,tilt:[.08,1.35],tiltC:[.02,.2],curl:[-.5,.2],cup:[1.2,.35],r:[.001,.007],y:[.012,0],cols:[rt(i,.9),i,e],nu:4,nv:3,closedScale:.55}],center:{...Nr,r:.005,h:.006,y:.012}}),waterlily:(i,e)=>({layers:[{n:26,golden:!0,L:[.03,.075],W:[.012,.03],a:.9,b:.75,tilt:[.25,1.3],tiltC:[.05,.3],curl:[-.3,-.2],cup:[1.2,.8],r:[.006,.012],y:[.01,0],cols:[it(i,Lt,.3),i,e],cols2:[Lt,it(i,Lt,.6),it(e,Lt,.5)],nu:4,nv:2,closedScale:.6}],center:{type:"dome",r:.012,h:.008,y:.008,cols:[D(15247384),D(16240442),D(16374869)],stamens:{n:14,len:.02,spread:.6,c:D(15909424),tip:D(16242778),tipR:.003}}}),lotus:(i,e)=>({layers:[{n:18,golden:!0,L:[.06,.11],W:[.04,.065],a:1,b:.62,tilt:[.2,1.15],tiltC:[.04,.2],curl:[-.5,-.25],curlC:-.7,cup:[1.3,.9],r:[.012,.02],y:[.012,0],cols:[D(16774894),i,e],cols2:[Lt,it(i,Lt,.4),e],closedScale:.7,vein:.2}],center:{type:"dome",r:.022,h:.016,y:.012,cols:[D(12108874),D(14275146),D(15326818)],stamens:{n:22,len:.028,spread:.85,c:D(15909424),tip:D(16244858),tipR:.003}}}),orchid:(i,e,t)=>({layers:[{n:3,L:.036,W:.02,a:.9,b:.6,tilt:1.4,tiltC:.3,cup:.2,jit:0,azList:[0,2.35,-2.35],azStep:0,cols:[it(i,t,.2),i,e],nu:3,nv:2},{n:2,L:.04,W:.046,a:1.3,b:.42,tilt:1.45,tiltC:.3,cup:.15,jit:0,azList:[-1.2,1.2],azStep:0,cols:[it(i,t,.25),i,e],nu:4,nv:3},{n:1,L:.022,W:.022,a:1.2,b:.5,tilt:1,tiltC:.3,cup:1.2,curl:-.6,jit:0,azList:[Math.PI],cols:[D(16241226),t,rt(t,.85)],nu:3,nv:2}],center:{type:"dome",r:.004,h:.005,y:.004,cols:[D(16247200),Lt],seg:5}}),succulent:(i,e,t)=>({layers:[{n:34,golden:!0,L:[.014,.06],W:[.012,.036],a:1.25,b:.7,tilt:[.12,1.28],tiltC:[.12,1.28],curl:[-.5,-.2],curlC:[-.5,-.2],cup:[1,.7],r:[.001,.008],y:[.02,0],cols:[rt(i,.8),i,it(e,t,.6)],cols2:[rt(i,.75),e,t],nu:4,nv:3,closedScale:1,vein:.05}]}),cactusFlower:(i,e)=>({layers:[{n:12,L:.04,W:.016,a:1,b:.7,tilt:1.15,tiltC:.1,curl:.3,cup:.6,cols:[it(i,Lt,.3),i,e],nu:3,nv:2},{n:10,L:.034,W:.015,a:1,b:.7,tilt:.8,tiltC:.1,curl:.2,cup:.6,cols:[it(i,Lt,.4),i,e],nu:3,nv:2}],center:{stamens:{n:12,len:.018,spread:.5,c:D(16244858),tip:D(16107048),tipR:.003}}}),small5:(i,e,t)=>({layers:[{n:5,L:.02,W:.016,a:1.3,b:.5,tilt:1.3,tiltC:.2,cup:.3,cols:[t??rt(i,.8),i,e],nu:3,nv:2}],center:{type:"dome",r:.003,h:.003,cols:[D(16107048),D(16374869)],seg:5}})},m_=(i,e,t)=>(n,s,r,o)=>{let a=Ie(.35,1,o),l=1+r.range(-.1,.1),c=[[.004,0],[.006,.02],[.012*a,.034],[.03*a,.043],[.041*a,.045]].map(([u,d])=>[u*l,d*l]),h=new ue;n.lathe(s,c,null,null,15,(u,d)=>{u<.5?d.copy(t).lerp(i,u*2):d.copy(i).lerp(e,u*2-1)},.1,5)};var oy={L:.055,W:.034,c:D(3107382),n:3,tilt:1,a:.85,b:.7,fold:.3},zr=[],nt=i=>zr.push(i);nt({id:"margarida",name:"Margarida",lvl:1,price:8,grow:50,gift:6,spots:["bed","pot","window"],h:.4,info:"Simples e alegre, cresce rapidinho.",build:(i,e,t,n)=>di(i,e,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:vt.daisy},t,n)});nt({id:"tagetes",name:"Cravo-de-defunto",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.32,info:"Pompons alaranjados que espantam pragas.",build:(i,e,t,n)=>Pn(i,e,{R:.15,H:.24,branches:9,heads:8,stalk:.12,leaf:{n:8,L:.05,W:.012,c:D(4160826),tilt:1.1},head:s=>s()<.5?vt.marigold(D(15895052),D(16299578)):vt.marigold(D(16101914),D(16569162)),headK:1.25},t,n)});var g_=[["tulipa_vermelha","Tulipa vermelha",1,12,[15779386,13901864,15222842]],["tulipa_amarela","Tulipa amarela",2,14,[14278762,16240414,16507994]],["tulipa_rosa","Tulipa rosa",3,16,[16445664,15764144,16233676]],["tulipa_roxa","Tulipa roxa",5,22,[15325424,8011688,10117064]]];for(let[i,e,t,n,s]of g_)nt({id:i,name:e,lvl:t,price:n,grow:70,gift:Math.round(n*.7),spots:["bed","pot","window"],h:.45,info:"Elegante, de p\xE9talas em ta\xE7a.",build:(r,o,a,l)=>di(r,o,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:D(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:D(6265450),r:.02},head:vt.tulip(D(s[0]),D(s[1]),D(s[2]))},a,l)});nt({id:"amor_perfeito",name:"Amor-perfeito",lvl:2,price:12,grow:65,gift:8,spots:["bed","pot","window","hang"],h:.2,info:"Carinhas coloridas que adoram sombra fresca.",build:(i,e,t,n)=>{let s=[[6959008,11565782,2756410],[16238622,16507754,4856336],[16052479,13219056,4923258],[15229980,16229434,3805704]];Pn(i,e,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:D(4164159),a:.9,b:.6,tilt:1.1},head:r=>{let o=r.pick(s);return vt.pansy(D(o[0]),D(o[1]),D(o[2]))},headK:1.15},t,n)}});nt({id:"lavanda",name:"Lavanda",lvl:2,price:15,grow:80,gift:10,spots:["bed","pot"],h:.55,info:"Perfumada, atrai abelhas e borboletas.",build:(i,e,t,n)=>{ks(i,e,{n:Math.round(40*t),L:.16*t,W:.012,c:D(9086348),tip:D(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),Vs(i,e,{stems:[16,20],H:.5,lean:.4,stemC:D(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[D(7755970),D(10322662)],bud:D(9410232)},t,n)}});nt({id:"petunia",name:"Pet\xFAnia",lvl:2,price:14,grow:70,gift:9,spots:["hang","window","pot"],h:.25,info:"Cai em cascata, perfeita para vasos suspensos.",build:(i,e,t,n)=>{let s=e.pick([[8007600,11034582,2755146],[15220874,16222904,9048136],[16052479,16777215,14272586]]);ho(i,e,{stems:13,L:.36,up:.45,out:.75,drop:1,leaf:{n:9,L:.04,W:.022,c:D(4887616),a:.9,b:.65},flower:{per:3,make:m_(D(s[0]),D(s[1]),D(s[2]))}},t,n)}});nt({id:"suculenta",name:"Suculenta",lvl:2,price:16,grow:90,gift:11,spots:["pot","window"],h:.14,thirst:.4,info:"Roseta carnuda que quase n\xE3o pede \xE1gua.",build:(i,e,t,n)=>{let s=vt.succulent(D(7316876),D(10275508),D(15241380));vn(i,Te(0,.01,0),e,s,1,1.6*t);for(let r=0;r<3;r++){let o=r*2.2+e();vn(i,be(Te(Math.cos(o)*.1*t,.005,Math.sin(o)*.1*t),Ve(.25),We(o)),e,s,1,.6*t)}if(n>.2)for(let r=0;r<2;r++){let o=Ki(e,.2,.09,r*3+e(),.05,6);i.tube(null,o,.003,.002,D(14191242),D(15245450),4);for(let a=0;a<6;a++){let{p:l,d:c}=Ot(o,.6+a*.08),h=.016*Ie(.5,1,n);i.lathe(be($t(l,c),We(a*2.4),Ve(1.9)),[[h*.2,0],[h*.4,h*.5],[h*.5,h]],D(15764058),D(16238666),5)}}}});nt({id:"geranio",name:"Ger\xE2nio",lvl:3,price:18,grow:85,gift:12,spots:["window","pot","hang","bed"],h:.34,info:"Cl\xE1ssico das janelas, floresce o ano todo.",build:(i,e,t,n)=>{let s=e.pick([[14688815,15747658],[15755930,16228544],[15921906,16777215]]).map(D);Pn(i,e,{R:.17,H:.2,branches:10,heads:5,stalk:.45,headUp:.7,leaf:{n:5,L:.06,W:.07,c:D(4033082),a:1,b:.32,fold:.15,curl:.3,tilt:1.15},head:{ball:{n:16,r:.04,fs:.022,np:5,cols:s,squash:.7,cover:.2}}},t,n)}});nt({id:"samambaia",name:"Samambaia",lvl:3,price:20,grow:95,gift:13,spots:["hang","pot"],h:.4,foliage:!0,info:"Folhagem farta que balan\xE7a com a brisa.",build:(i,e,t)=>ho(i,e,{stems:18,L:.5,up:.55,out:.85,drop:1.1,upFall:.5,stemC:D(5933626),stemR:.0025,frond:{pairs:15,L:.07,wr:.3,c:D(5020220)}},t,-1)});nt({id:"cosmos",name:"Cosmos",lvl:3,price:18,grow:75,gift:12,spots:["bed","pot"],h:.65,info:"Leve como o vento, em tons de rosa.",build:(i,e,t,n)=>di(i,e,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:D(5937736),fold:0},head:s=>s()<.6?vt.cosmos(D(14833820),D(16228556)):vt.cosmos(D(16046312),D(16777215)),headTilt:.35},t,n)});nt({id:"girassol",name:"Girassol",lvl:3,price:22,grow:110,gift:16,spots:["bed"],h:1.6,fixedRot:!0,info:"Alto e radiante, sempre olhando o sol.",build:(i,e,t,n)=>di(i,e,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:D(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:D(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:vt.sunflower,headTilt:1.15},t,n)});nt({id:"narciso",name:"Narciso",lvl:4,price:22,grow:80,gift:14,spots:["bed","pot","window"],h:.4,info:"Trombetinhas douradas que anunciam a primavera.",build:(i,e,t,n)=>di(i,e,{stems:[5,7],H:.36,lean:.14,spread:.08,stemR:.004,basal:{n:12,L:.3,W:.022,a:.7,b:.5,tilt:.25,curl:.5,fold:.3,c:D(5937754)},head:vt.daffodil,headTilt:1.2},t,n)});nt({id:"manjericao",name:"Manjeric\xE3o",lvl:4,price:15,grow:60,gift:10,spots:["pot","window","bed"],h:.3,info:"Cheiroso e vi\xE7oso, bom de ter perto da cozinha.",build:(i,e,t,n)=>{Pn(i,e,{R:.15,H:.24,branches:10,heads:0,leaf:{n:9,L:.055,W:.04,c:D(5744700),a:.85,b:.6,fold:-.25,cup:.5,curl:.5,tilt:1}},t,-1),n>.2&&Vs(i,e,{stems:[6,7],H:.34,lean:.35,florets:10,from:.75,type:"card",fs:.009,cols:[Lt,D(15788287)],stemC:D(6986314)},t,n)}});nt({id:"cacto",name:"Cacto florido",lvl:4,price:24,grow:120,gift:17,spots:["pot","window"],h:.3,thirst:.35,info:"Espinhudo por fora, uma flor delicada no topo.",build:(i,e,t,n)=>{let s=(r,o,a,l)=>{let c=[];for(let h=0;h<=8;h++){let u=h/8;c.push([o*Math.pow(Math.sin(Math.PI*(.08+u*.92)*.5+(u>.6?(u-.6)*1.5:0)),.7)*(u>.85?(1-u)/.15*.6+.4:1)*(.75+.25*Math.sin(u*3.1)),a*u])}c.push([.001,a*1.005]),i.lathe(r,c,D(3832388),D(6267738),40,null,.09,10);for(let h=0;h<10;h++)for(let u=1;u<6;u++){let d=u/6.2,f=(h+.25)/10*Pe,g=c[Math.round(d*8)];i.blob(be(r,Te(Math.cos(f)*g[0]*1.07,g[1],Math.sin(f)*g[0]*1.07)),.006,.006,D(16051922),D(16776168),4,3)}l&&n>.02&&vn(i,be(r,Te(0,a*.98,0)),e,vt.cactusFlower(D(15755944),D(16230092)),n,1.5)};s(Te(0,0,0),.085*t,.2*t,!0),t>.5&&(s(be(Te(.085*t,.03,.02),Ut(-.5)),.04*t,.09*t,n>.8),s(be(Te(-.07*t,.02,-.04),Ut(.6)),.032*t,.07*t,!1))}});nt({id:"hera",name:"Hera",lvl:4,price:18,grow:85,gift:12,spots:["hang","window","pot"],h:.3,foliage:!0,info:"Verde pendente que veste qualquer cantinho.",build:(i,e,t)=>ho(i,e,{stems:12,L:.62,up:.3,out:.6,drop:1.6,upFall:.3,stemC:D(6978106),leaf:{n:15,L:.05,W:.05,c:D(3836488),tip:D(14477472),tipMix:.45,a:.7,b:.5,fold:.15,curl:.2}},t,-1)});nt({id:"papoula",name:"Papoula",lvl:5,price:24,grow:85,gift:16,spots:["bed","pot"],h:.5,info:"P\xE9talas de seda vermelha, delicadas ao vento.",build:(i,e,t,n)=>di(i,e,{stems:[6,8],H:.46,lean:.28,spread:.08,stemR:.0028,stemC:D(8034922),wob:.1,basal:{n:12,L:.16,W:.045,a:.8,b:.9,tilt:.8,c:D(6986360),ruffle:.3,rf:4,nv:4},head:vt.poppy,headTilt:.3,headK:1.1},t,n)});nt({id:"zinia",name:"Z\xEDnia",lvl:5,price:22,grow:80,gift:15,spots:["bed","pot","window"],h:.45,info:"Colorida e resistente, a favorita das borboletas.",build:(i,e,t,n)=>{let s=[[14690922,16018074],[15888410,16228922],[16238622,16507754],[14166090,15749226]];di(i,e,{stems:[6,8],H:.42,lean:.25,spread:.08,stemR:.0035,leaf:{n:5,L:.08,W:.035,tilt:1,c:D(4885052),azStep:Math.PI/2},head:r=>{let o=r.pick(s);return vt.zinnia(D(o[0]),D(o[1]))},headK:1.15},t,n)}});var x_=[["rosa_vermelha","Rosa vermelha",5,30,10096418,13113390,14694984],["rosa_rosa","Rosa cor-de-rosa",6,32,15231638,16095928,16568542],["rosa_branca","Rosa branca",7,34,15918792,16446694,16777215],["rosa_amarela","Rosa amarela",8,36,15774234,16306762,16641696],["rosa_pessego","Rosa p\xEAssego",10,42,15764058,16299146,16638152]];for(let[i,e,t,n,s,r,o]of x_)nt({id:i,name:e,lvl:t,price:n,grow:130,gift:Math.round(n*.72),spots:["bed","pot"],h:.75,info:"A rainha do jardim, de perfume inesquec\xEDvel.",build:(a,l,c,h)=>Pn(a,l,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:D(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:D(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:vt.rose(D(s),D(r),D(o)),headK:1.25,headUp:.5},c,h)});nt({id:"lirio",name:"L\xEDrio",lvl:6,price:34,grow:120,gift:24,spots:["bed","pot"],h:.8,info:"Trombetas recurvadas com perfume doce.",build:(i,e,t,n)=>{let s=e.pick([[16777215,16775408,14282928],[16027569,16573676,16249024],[16225310,16498778,16244874]]);di(i,e,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:D(4164164),t0:.08,t1:.82,taper:.5},head:vt.lily(D(s[0]),D(s[1]),D(s[2])),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},t,n)}});nt({id:"costela",name:"Costela-de-ad\xE3o",lvl:6,price:38,grow:140,gift:26,spots:["pot"],h:.75,foliage:!0,info:"Folhas enormes e recortadas, puro charme tropical.",build:(i,e,t)=>{let n=Math.round(4+5*t);for(let s=0;s<n;s++){let r=s*2.4+e.range(-.2,.2),o=.5*t*e.range(.65,1.1),a=e.range(.3,.75),l=hn(new Pt(0,0,0),new Pt(Math.cos(r)*o*a*.3,o*.8,Math.sin(r)*o*a*.3),new Pt(Math.cos(r)*o*a,o*(1-a*.3),Math.sin(r)*o*a),6);i.tube(null,l,.007,.004,D(4160058),D(5016132),5);let c=l[6],h=.3*t*e.range(.7,1.1),u=D(2779704),d=be(Te(c.x,c.y,c.z),We(-r+Math.PI/2),Ve(1+e.range(-.2,.3)));fn(i,d,e,{L:h,W:h*.2,c:u,a:.8,b:.6,fold:.3,curl:.5,nu:5});for(let f=0;f<6;f++){let g=.08+f*.14,x=h*.52*Math.sin(Math.PI*Math.pow(g+.12,.8))+h*.1;for(let m of[-1,1])fn(i,be(d,Te(0,h*g,0),Ut(m*(1.15-g*.5)),Ve(.12)),e,{L:x,W:h*.115,c:u,a:.5,b:.45,base:.9,fold:.1,curl:.25,nu:3,vein:.15,tipMix:.1})}}}});var __=[["hortensia_azul","Hort\xEAnsia azul",7,40,[6259430,8824050,10128104,8038640]],["hortensia_rosa","Hort\xEAnsia rosa",8,42,[15760048,16229576,15231648,16367832]]];for(let[i,e,t,n,s]of __)nt({id:i,name:e,lvl:t,price:n,grow:150,gift:Math.round(n*.72),spots:["bed","pot"],h:.7,info:"Buqu\xEAs redondos que mudam de cor com a terra.",build:(r,o,a,l)=>Pn(r,o,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:D(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:s.map(D),squash:.75,cover:.35}},headUp:.6},a,l)});nt({id:"dalia",name:"D\xE1lia",lvl:7,price:40,grow:130,gift:28,spots:["bed","pot"],h:.7,info:"P\xE9talas em espiral perfeita, obra de geometria.",build:(i,e,t,n)=>{let s=e.pick([[13117502,16091738],[15227546,16503008],[15900698,16507754],[9054858,15245536]]);Pn(i,e,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:D(3503674),tilt:1.1},head:vt.dahlia(D(s[0]),D(s[1])),headK:1.5,headUp:.35},t,n)}});nt({id:"bromelia",name:"Brom\xE9lia",lvl:8,price:45,grow:150,gift:31,spots:["pot","bed"],h:.5,thirst:.6,info:"Joia das matas brasileiras, com espiga vermelha.",build:(i,e,t,n)=>{if(ks(i,e,{n:Math.round(10+10*t),L:.34*t,W:.05,a:.55,b:.45,tilt:.75,curl:1,curlPow:2,fold:.5,c:D(4164176),tip:D(9093232),nu:5,base:.5,r:.012}),n>=0){let s=.3*t*Ie(.5,1,n);i.tube(null,[new Pt(0,0,0),new Pt(0,s*.5,0),new Pt(0,s,0)],.008,.005,D(13117498),D(15217210),5),vn(i,Te(0,s*.45,0),e,{layers:[{n:20,golden:!0,L:[.07,.035],W:[.03,.018],a:.8,b:.7,tilt:[.75,.25],tiltC:[.3,.1],curl:.3,cup:.9,y:[0,s*.6],r:.006,cols:[D(14163514),D(15612484),D(16232490)],closedScale:.6,nu:3,nv:2}]},n,1)}}});nt({id:"peonia",name:"Pe\xF4nia",lvl:8,price:48,grow:160,gift:34,spots:["bed","pot"],h:.7,info:"Nuvens de p\xE9talas macias, puro romantismo.",build:(i,e,t,n)=>{let s=e.pick([[15895220,16638186],[16503004,16774902],[14170730,16091816]]);Pn(i,e,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:D(3108410),tilt:1.1},leafTip:{n:3,L:.09,W:.035,c:D(3108410),spread:1.6},head:vt.peony(D(s[0]),D(s[1])),headK:1.45,headUp:.45},t,n)}});nt({id:"delfinio",name:"Delf\xEDnio",lvl:9,price:46,grow:140,gift:32,spots:["bed"],h:1,info:"Torres de flores azuis, altivas e elegantes.",build:(i,e,t,n)=>Vs(i,e,{stems:[4,5],H:.95,lean:.12,stemR:.006,florets:26,from:.42,type:"flower",fs:.03,off:.012,taper:.55,cols:[D(3823320),D(6978288)],bud:D(8034954),eye:D(16052479),basalFan:{count:8,stalk:.22,n:5,L:.11,W:.04,c:D(4164164),spread:2.4},leaf:{n:5,L:.07,W:.03,c:D(4164164)}},t,n)});nt({id:"dedaleira",name:"Dedaleira",lvl:9,price:44,grow:140,gift:31,spots:["bed"],h:1,info:"Sininhos pintados em hastes altas.",build:(i,e,t,n)=>Vs(i,e,{stems:[3,4],H:.95,lean:.1,stemR:.006,florets:22,from:.4,type:"bell",fs:.05,off:.006,whorl:.55,taper:.5,cols:[D(14178984),D(15769808)],bud:D(10139786),basal:{n:12,L:.2,W:.075,a:.75,b:.65,tilt:1.05,c:D(4885064)},leaf:{n:6,L:.1,W:.04,c:D(4885064)}},t,n)});nt({id:"hibisco",name:"Hibisco",lvl:9,price:50,grow:160,gift:35,spots:["bed","pot"],h:.85,info:"Flor tropical de um dia, sempre renovada.",build:(i,e,t,n)=>{let s=e.pick([[14819390,16011370,6949410],[16228394,16502874,13115422],[16026292,16568544,12065354]]);Pn(i,e,{R:.34,H:.68,branches:10,heads:6,stalk:.04,fill:44,wood:D(5917236),stemR:.008,leaf:{n:10,L:.085,W:.06,c:D(2318382),a:.8,b:.6,tilt:1.1},head:vt.hibiscus(D(s[0]),D(s[1]),D(s[2])),headK:1.35,headUp:.15},t,n)}});nt({id:"copo_de_leite",name:"Copo-de-leite",lvl:10,price:52,grow:150,gift:37,spots:["bed","pot"],h:.65,info:"C\xE1lice branco de linhas puras.",build:(i,e,t,n)=>{for(let s=0;s<Math.round(5+4*t);s++){let r=s*2.4,o=.34*t*e.range(.7,1.1),a=e.range(.25,.6),l=hn(new Pt(0,0,0),new Pt(Math.cos(r)*o*a*.2,o*.7,Math.sin(r)*o*a*.2),new Pt(Math.cos(r)*o*a,o,Math.sin(r)*o*a),5);i.tube(null,l,.006,.004,D(4885066),D(4885066),5);let c=l[5];fn(i,be(Te(c.x,c.y,c.z),We(-r+Math.PI/2),Ve(.8+e()*.3)),e,{L:.24*t,W:.13*t,a:.6,b:.7,c:D(3111488),fold:.3,curl:.5,nu:5,nv:4})}if(n>=0)for(let s=0;s<4;s++){let r=Ki(e,.55*t*e.range(.8,1.05),.08,s*2.1+1,.03,6);i.tube(null,r,.006,.005,D(5937744),D(6989920),5);let o=be(v_(r),Ve(.25)),a=Ie(.35,1,n),l=new ue,c=[[.007,0],[.01,.035],[.02*a,.075],[.04*a,.105],[.052*a,.112]];i.lathe(be(o,fi(1,1,1.25)),c,null,null,12,(h,u)=>u.copy(D(13625008)).lerp(Lt,ke(h*2.5,0,1)),0,1),vn(i,o,e,{layers:[],center:{type:"spadix",L:.07,r:.007,cols:[D(15906846),D(16373834)]}},n)}}});function v_(i){let{p:e,d:t}=Ot(i,1);return $t(e,t)}nt({id:"azaleia",name:"Azaleia",lvl:10,price:50,grow:160,gift:35,spots:["bed","pot"],h:.55,info:"Arbusto que se cobre inteiro de flores.",build:(i,e,t,n)=>{let s=e.pick([[14696586,16222904],[16052468,16777215],[15224890,16226938]]);Pn(i,e,{R:.34,H:.42,branches:14,heads:34,fill:70,wood:D(5916212),leaf:{n:12,L:.05,W:.024,c:D(2909748),tilt:1},head:vt.azalea(D(s[0]),D(s[1])),headK:1.5,headUp:.5},t,n)}});nt({id:"orquidea",name:"Orqu\xEDdea",lvl:11,price:60,grow:190,gift:44,spots:["pot","hang"],h:.6,thirst:.6,info:"Rara e paciente; cada flor dura semanas.",build:(i,e,t,n)=>{if(ks(i,e,{n:6,L:.2*t,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:D(3111486),nu:5,base:.6,r:.01}),n<0)return;let s=e.pick([[16777215,16643322,12726394],[15231664,16232662,10099290],[16244874,16643264,12068922]]);for(let r=0;r<2;r++){let o=r*2.6+e(),a=.55*t,l=hn(new Pt(0,0,0),new Pt(Math.cos(o)*a*.1,a*.95,Math.sin(o)*a*.1),new Pt(Math.cos(o)*a*.75,a*.7,Math.sin(o)*a*.75),10);i.tube(null,l,.004,.0025,D(5929540),D(6982218),4);for(let c=0;c<7;c++){let h=.5+c*.075,u=Ot(l,h).p,d=c%2?1:-1,f=new Pt(Math.cos(o+d*1.2)*.8,.25,Math.sin(o+d*1.2)*.8).normalize(),g=u.clone().add(f.clone().multiplyScalar(.02));vn(i,be($t(g,f),We(e()*.4)),e,vt.orchid(D(s[0]),D(s[1]),D(s[2])),ke(n*1.5-c*.07,0,1),1.3)}}}});nt({id:"camelia",name:"Cam\xE9lia",lvl:11,price:58,grow:180,gift:42,spots:["bed","pot"],h:.8,info:"Flores de porcelana entre folhas brilhantes.",build:(i,e,t,n)=>{let s=e.pick([[15760030,16365772],[16446704,16777215],[13114942,15223390]]);Pn(i,e,{R:.33,H:.66,branches:11,heads:9,fill:50,wood:D(5916212),stemR:.008,leaf:{n:11,L:.075,W:.045,c:D(2054700),a:.85,b:.65,tilt:1.1},head:vt.camellia(D(s[0]),D(s[1])),headK:1.45,headUp:.3},t,n)}});nt({id:"ninfeia",name:"Ninfeia",lvl:6,price:36,grow:120,gift:26,spots:["pond"],h:.12,thirst:0,info:"Estrela branca que flutua sobre a \xE1gua.",build:(i,e,t,n)=>Ec(i,e,t,n,vt.waterlily(D(16507116),D(16026288)),0,.17,1.25)});nt({id:"lotus",name:"L\xF3tus",lvl:10,price:56,grow:170,gift:40,spots:["pond"],h:.5,thirst:0,info:"Nasce da lama e se abre imaculada.",build:(i,e,t,n)=>Ec(i,e,t,n,vt.lotus(D(16361668),D(15227540)),.36,.21,1.25)});function Ec(i,e,t,n,s,r,o,a){let l=Math.round(3+4*t);for(let c=0;c<l;c++){let h=c*2.4+e(),u=(.12+.3*Math.sqrt((c+.5)/l))*(.6+.4*t),d=o*t*e.range(.7,1.15),f=r&&c%3===0?r*.55*t*e.range(.6,1):0,g=Math.cos(h)*u,x=Math.sin(h)*u;f&&i.tube(null,[new Pt(g,-.1,x),new Pt(g,f*.5,x),new Pt(g,f,x)],.005,.004,D(5933642),D(5933642),4);let m=Yn(D(4164168),e,.05),p=be(Te(g,f+.012+c*.0015,x),We(e()*Pe)),v=14,_=i.n,b=it(m,st.light,.3);i.vert(0,f?-.02:0,0,rt(m,.8),p);for(let L=0;L<=v;L++){let A=.18+L/v*(Pe-.36),P=d*(1+.04*Math.sin(A*7));i.vert(Math.cos(A)*P,f?.02:.003*Math.sin(A*5),Math.sin(A)*P,L%2?m:b,p)}for(let L=0;L<v;L++)i.idx.push(_,_+L+2,_+L+1)}if(n>=0)for(let c=0;c<Math.round(1+2*t);c++){let h=c*2.2+.7,u=c===0?0:.2,d=r?r*t*(c===0?1:.7):.02;r&&i.tube(null,[new Pt(Math.cos(h)*u,-.1,Math.sin(h)*u),new Pt(Math.cos(h)*u,d*.5,Math.sin(h)*u+.01),new Pt(Math.cos(h)*u,d,Math.sin(h)*u)],.006,.005,D(5933642),D(6986324),4),vn(i,be(Te(Math.cos(h)*u,d,Math.sin(h)*u),We(e()*3)),e,s,ke(n-c*.1,0,1),a*(.75+.25*t))}}var y_=[{id:"cerejeira",name:"Cerejeira",lvl:5,price:80,gift:45,info:"Nuvem cor-de-rosa que chove p\xE9talas.",petal:16368856,P:{H:1.25,R:1.25,trunkR:.085,limbs:7,bark:D(5914424),foliage:.18,leaves:700,leafCols:[D(5937732),D(8042586)],blossom:{n:3200,size:.125,cols:[D(16366802),D(16570598),D(16164034),D(16777215)],buds:[D(15239342),D(14250126)]}}},{id:"limoeiro",name:"Limoeiro",lvl:7,price:95,gift:55,info:"Flores perfumadas e lim\xF5es amarelinhos.",P:{H:.95,R:1,trunkR:.07,limbs:7,bark:D(6969924),foliage:1,leaves:2800,leafSize:.15,leafCols:[D(3111480),D(4164160),D(2452016)],blossom:{n:260,size:.075,cols:[Lt,D(16775400)]},fruit:{n:18,r:.045,tall:1.25,c:D(16241182)}}},{id:"ipe_amarelo",name:"Ip\xEA-amarelo",lvl:9,price:120,gift:70,info:"S\xEDmbolo do Brasil: ouro puro no inverno.",petal:16240414,P:{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:D(6969930),foliage:.06,leaves:900,leafCols:[D(4885050),D(5937732)],blossom:{n:3300,size:.125,cols:[D(16240414),D(16505914),D(15906831),D(16640106)],buds:[D(14264335),D(12107850)]}}},{id:"laranjeira",name:"Laranjeira",lvl:11,price:130,gift:76,info:"Flor de laranjeira e frutos doces.",P:{H:1,R:1.1,trunkR:.075,limbs:7,bark:D(6246204),foliage:1,leaves:2900,leafSize:.15,leafCols:[D(2452016),D(3111480),D(2054698)],blossom:{n:240,size:.075,cols:[Lt]},fruit:{n:20,r:.055,tall:1,c:D(16091678)}}},{id:"jacaranda",name:"Jacarand\xE1",lvl:13,price:160,gift:95,info:"Copa lil\xE1s que tinge o ch\xE3o de roxo.",petal:11045102,P:{H:1.6,R:1.45,trunkR:.09,limbs:8,bark:D(5917248),foliage:.15,leaves:900,leafCols:[D(5937732),D(6989904)],blossom:{n:3500,size:.125,cols:[D(10124008),D(12098290),D(9071320),D(13153526)],buds:[D(8018632)]}}}];for(let i of y_)nt({...i,price:i.price,grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,build:(e,t,n,s)=>uo(e,t,i.P,n,s)});var M_=vt.rose(D(15227530),D(16091824),D(16568542)),b_=[{id:"rosa_trepadeira",name:"Rosa trepadeira",lvl:6,price:70,gift:42,info:"Cobre o arco de rosas mi\xFAdas.",P:{leaf:{n:60,L:.06,W:.038,c:D(2909748)},flower:{n:46,make:(i,e,t,n)=>{let s=new Pt(t.range(-.6,.6),t.range(.1,1),t.range(-1,1)>0?1:-1).normalize();vn(i,$t(e.clone().add(s.clone().multiplyScalar(.07)),s),t,M_,n,1.05)}}}},{id:"glicinia",name:"Glic\xEDnia",lvl:8,price:90,gift:54,info:"Cachos lilases que pendem como cortinas.",P:{leaf:{n:70,L:.07,W:.025,c:D(4887620)},flower:{n:30,t0:.5,make:(i,e,t,n)=>{let s=.36*Ie(.4,1,n)*t.range(.7,1.15),r=26,o=t.range(-.06,.06),a=t.range(-.1,.1);for(let l=0;l<r;l++){let c=l/r,h=.05*(1-c*.85),u=l*2.4,d=it(D(9071328),D(13482232),c*.6+t()*.3),f=be(Te(e.x+o+Math.cos(u)*h,e.y-.03-c*s,e.z+a+Math.sin(u)*h),We(-u+Math.PI/2),Ve(1.9));i.card(f,.034,.042,rt(d,.8),it(d,Lt,.25),0,-.3,.95,.3)}}}}},{id:"primavera",name:"Primavera",lvl:10,price:105,gift:64,info:"Buganv\xEDlia: uma explos\xE3o de magenta.",P:{leaf:{n:50,L:.055,W:.035,c:D(3506240)},flower:{n:260,make:(i,e,t,n)=>{let s=Yn(t.pick([D(14688394),D(15747744),D(13113464)]),t,.05),r=new Pt(t.range(-1,1),t.range(-.2,1),t.range(-1,1)).normalize(),o=e.clone().add(r.clone().multiplyScalar(t.range(.03,.16)));for(let a=0;a<3;a++)i.card(be($t(o,r),We(a*2.1),Ve(.9)),.04*Ie(.5,1,n),.05*Ie(.5,1,n),rt(s,.8),it(s,Lt,.15),0,.62,-.78,.35)}}}},{id:"jasmim",name:"Jasmim",lvl:12,price:115,gift:70,info:"Estrelinhas brancas de perfume noturno.",P:{leaf:{n:80,L:.05,W:.022,c:D(3111482)},flower:{n:110,make:(i,e,t,n)=>{let s=new Pt(t.range(-1,1),t.range(-.1,1),t.range(-1,1)).normalize();vn(i,$t(e.clone().add(s.clone().multiplyScalar(.06)),s),t,vt.small5(D(16776692),Lt,D(16248e3)),n,1.5)}}}}];for(let i of b_)nt({...i,grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,build:(e,t,n,s)=>Qu(e,t,i.P,n,s)});nt({id:"alecrim",name:"Alecrim",lvl:3,price:14,grow:65,gift:9,spots:["pot","window","bed"],h:.35,info:"Raminhos arom\xE1ticos com florzinhas azuis.",build:(i,e,t,n)=>Vs(i,e,{stems:[16,18],H:.34,lean:.45,stemC:D(6978132),stemR:.003,florets:n>.2?12:2,from:.55,type:"card",fs:.007,off:.006,cols:[D(8030952),D(11188472)],bud:D(8034938),leaf:{n:26,L:.026,W:.004,c:D(5208664),fold:0,tilt:.8,t0:.08,t1:.98,taper:.2},from2:1},t,Math.max(n,0))});var S_=[0,9,18,28,40,55,70,85,100,115,130,150,150,150];for(let i of zr)i.grow=Math.round(i.grow*S_[Math.min(i.lvl,13)]*(i.tree?2:i.climber?1.5:1)),i.every=300+i.lvl*90;var Nt={};zr.sort((i,e)=>i.lvl-e.lvl||i.price-e.price);for(let i of zr)Nt[i.id]=i;var yn=zr;var w_=[null,null,[.55,-1],[.85,.12],[1,1]];function po(i,e,t){let n=Nt[i],s=new tn,r=Yt(e*7919+13);if(t<=1)if(n.tree){s.tube(null,Ki(r,.3,.02,1,.05,4),.012,.005,st.wood,st.stem,5);for(let o=0;o<6;o++)fn(s,be(Te(0,.12+o*.035,0),We(o*2.4),Ve(1)),r,{L:.09,W:.04,c:st.lime})}else if(n.spots[0]==="pond")Ec(s,r,.3,-1,null,0,.14,1);else if(n.climber)for(let o of[-.75,.75]){let a=new tn;gc(a,r);let l=s.n;for(let c=0;c<a.pos.length;c+=3)s.vert(a.pos[c]+o,a.pos[c+1],a.pos[c+2],new ue(a.col[c],a.col[c+1],a.col[c+2]));for(let c of a.idx)s.idx.push(c+l)}else gc(s,r);else{let[o,a]=w_[t],l=n.tree?[0,0,.45,.78,1][t]:n.climber?[0,0,.4,.8,1][t]:o;n.build(s,r,l,n.foliage?-1:a)}return s.build()}function mo(i){let e=Nt[i];return Ci({sway:e.tree?.04:e.climber?.05:e.id==="cacto"||e.id==="suculenta"?.02:e.h>1?.16:.5,glow:e.tree?.1:.12,phase:Math.random()*6})}var Ac="jardim-do-sossego-v1",E_=2*3600,Fr=[0,60,180,380,680,1100,1650,2350,3200,4200,5400,6800,8500,10500,13e3,16e3,2e4,25e3],Rc=[{id:"can1",name:"Regador de cobre",price:450,desc:"Rega uma \xE1rea maior de uma s\xF3 vez.",need:null},{id:"can2",name:"Regador dourado",price:1800,desc:"Rega longe e a \xE1gua dura o dobro.",need:"can1"},{id:"sprinkler",name:"Aspersores autom\xE1ticos",price:7500,desc:"O jardim inteiro se rega sozinho.",need:"can2"}],hf=["","Brotinho","Crescendo","Em bot\xE3o","Em flor"],T_=[{t:"Plante sua primeira flor",goal:1,v:i=>i.stats.planted,r:15},{t:"Regue a plantinha para ela brotar",goal:1,v:i=>i.stats.watered,r:10},{t:"Plante 3 flores no canteiro",goal:3,v:(i,e)=>e.count(),r:20},{t:"Veja uma flor desabrochar",goal:1,v:i=>i.stats.blooms,r:25},{t:"Recolha o presente de uma flor",goal:1,v:i=>i.stats.collected,r:20},{t:"Tenha 8 plantas no jardim",goal:8,v:(i,e)=>e.count(),r:30},{t:"Abra a Varanda",goal:1,v:i=>+i.zones.includes(1),r:40},{t:"Plante num vaso suspenso",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="hang"),r:30},{t:"Tenha 3 esp\xE9cies diferentes em flor",goal:3,v:(i,e)=>e.bloomSpecies(),r:40},{t:"Compre uma decora\xE7\xE3o na loja",goal:1,v:i=>i.decor.length,r:40},{t:"Abra os Canteiros do leste",goal:1,v:i=>+i.zones.includes(2),r:60},{t:"Plante uma \xE1rvore",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="tree"),r:60},{t:"Tenha 12 plantas em flor ao mesmo tempo",goal:12,v:(i,e)=>e.blooming(),r:80},{t:"Abra o Laguinho",goal:1,v:i=>+i.zones.includes(3),r:100},{t:"Plante uma ninfeia no lago",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="pond"),r:60},{t:"\xC1lbum: veja 12 esp\xE9cies florirem",goal:12,v:i=>i.album.length,r:120},{t:"Abra a Alameda dos arcos",goal:1,v:i=>+i.zones.includes(4),r:150},{t:"Cubra um arco com uma trepadeira em flor",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="arch"&&t.grown>=Nt[t.sp].grow),r:150},{t:"Tenha 30 plantas em flor",goal:30,v:(i,e)=>e.blooming(),r:200},{t:"Abra o Pomar",goal:1,v:i=>+i.zones.includes(5),r:200},{t:"Tenha 3 \xE1rvores em flor",goal:3,v:(i,e)=>e.count((t,n)=>n.type==="tree"&&t.grown>=Nt[t.sp].grow),r:250},{t:"Abra o Prado das flores",goal:1,v:i=>+i.zones.includes(6),r:300},{t:"\xC1lbum: veja 30 esp\xE9cies florirem",goal:30,v:i=>i.album.length,r:400},{t:"Tenha 60 plantas em flor",goal:60,v:(i,e)=>e.blooming(),r:600},{t:"Complete o \xE1lbum de flores",goal:yn.length,v:i=>i.album.length,r:1e3}],Tc=()=>({v:1,coins:45,xp:0,zones:[0],decor:[],upg:[],plants:{},quest:0,album:[],stats:{planted:0,watered:0,collected:0,blooms:0},hour:8.6,last:Date.now(),tips:{},settings:{music:.6,sfx:.8,quality:"auto",time:"auto"}});function uf(){let i=e=>Object.assign(Tc(),e,{settings:Object.assign(Tc().settings,e.settings)});try{let e=localStorage.getItem(Ac);if(e){let t=JSON.parse(e);if(t&&t.v===1)return i(t)}}catch{}try{let e=window.__SAVE;if(e&&e.v===1)return i(JSON.parse(JSON.stringify(e)))}catch{}return Tc()}function ff({scene:i,world:e,fx:t,audio:n,gardener:s,nav:r,env:o,ui:a,state:l}){let c={state:l,tasks:[],cur:null,time:0,rainT:240+Math.random()*200,raining:0},h=l,u={},d=of(),f={water:new ci({map:d.water,depthTest:!1,transparent:!0}),gift:new ci({map:d.gift,depthTest:!1,transparent:!0}),plus:new ci({map:d.plus,transparent:!0,opacity:.85,depthWrite:!1})},g=new ue(7032378),x=new ue(3811358);c.save=()=>{h.last=Date.now();try{localStorage.setItem(Ac,JSON.stringify(h))}catch{}};let m=()=>c.save();c.reset=()=>{try{localStorage.removeItem(Ac)}catch{}};let p=()=>{let F=1;for(;F<Fr.length&&h.xp>=Fr[F];)F++;return F};c.level=p;let v=F=>h.upg.includes(F),_=()=>E_*(v("can2")?2:1),b=()=>v("can2")?3.3:v("can1")?2.2:1.35,L=F=>{let q=F.grown/Nt[F.sp].grow;return q>=1?4:q>=.45?3:q>=.12?2:1};c.count=F=>{let q=0;for(let X in h.plants)(!F||F(h.plants[X],e.spots[X]))&&q++;return q},c.blooming=()=>c.count(F=>F.grown>=Nt[F.sp].grow),c.bloomSpecies=()=>{let F=new Set;for(let q in h.plants){let X=h.plants[q];X.grown>=Nt[X.sp].grow&&F.add(X.sp)}return F.size},c.beauty=()=>{let F=0;for(let q in h.plants){let X=h.plants[q],me=Nt[X.sp];F+=Math.round(me.price*(X.grown>=me.grow?.5:.12))}for(let q of h.decor)F+=Gs.find(X=>X.id===q)?.beauty??0;return F};let A=(F,q)=>{let X=new Is(F);return X.scale.setScalar(q),X.renderOrder=10,X.visible=!1,i.add(X),X};for(let F of e.spots){let q=F.type==="hang"?-.02:F.type==="tree"?.5:F.type==="arch"?1.1:.3;u[F.id]={mesh:null,stage:0,pop:1,droop:0,plus:A(f.plus,F.type==="window"?.2:.3),bubble:A(f.water,.42),top:q},u[F.id].plus.position.copy(F.pos).y+=q,F.type==="arch"&&(u[F.id].plus.position.x-=.75)}let P=F=>{let q=u[F.id],X=h.plants[F.id];if(q.mesh&&(i.remove(q.mesh),q.mesh.geometry.dispose(),q.mesh.material.dispose(),q.mesh=null),!X){q.stage=0;return}let me=Nt[X.sp],Y=L(X),Qe=new Ge(po(X.sp,X.seed,Y),mo(X.sp));Qe.castShadow=!0,Qe.receiveShadow=!0,Qe.position.copy(F.pos),me.fixedRot||(Qe.rotation.y=X.seed*1.7),i.add(Qe),q.mesh=Qe,q.stage=Y,q.h=me.h*F.scale*(me.tree?[0,.15,.5,.8,1][Y]:[0,.15,.6,.9,1][Y])},k=F=>Nt[F.sp].thirst===0?!0:F.wet>0,y=(F,q)=>{h.coins+=F,q&&a.floatText(q,(F>0?"+":"")+F,"coin"),a.hud()},S=F=>{let q=p();h.xp+=F;let X=p();X>q&&(n.sfx("levelup"),s.play("cheer",1.6),t.burst(s.group.position,[16770688,16751288,10148095,12120224],50),a.levelUp(X,yn.filter(me=>me.lvl>q&&me.lvl<=X))),a.hud()},z=()=>{let F=T_[h.quest];if(!F){a.quest(null);return}let q=Math.min(F.goal,F.v(h,c));if(q>=F.goal){h.quest++,y(F.r),n.sfx("buy"),a.toast(`Miss\xE3o cumprida! +${F.r} moedas`,"good"),z(),m();return}a.quest({text:F.t,val:q,goal:F.goal,reward:F.r})};c.checkQuest=z;let B=(F,q)=>{let X=s.group.position;return r.path(X.x,X.z,F,q)},W=(F,q,X={})=>{c.tasks.some(me=>me.kind===F&&me.spot===q)||c.cur&&c.cur.kind===F&&c.cur.spot===q||c.tasks.length>=8||c.tasks.push({kind:F,spot:q,...X})},R=()=>{for(let F of c.tasks)F.kind==="plant"&&(h.coins+=Nt[F.sp].price,F.spot.pending=null);c.tasks.length=0,a.hud()};c.tapGround=(F,q)=>{R(),!(c.cur&&c.cur.phase==="act")&&(c.cur&&c.cur.kind==="plant"&&(h.coins+=Nt[c.cur.sp].price,c.cur.spot.pending=null,a.hud()),c.cur={kind:"move",path:B(F,q),phase:"walk"},a.closeCards())},c.tapSpot=F=>{if(!h.zones.includes(F.zone)){c.offerZone(F.zone);return}let q=h.plants[F.id];if(!q){if(F.pending)return;n.sfx("click",.35),a.picker(F,w(F));return}let X=Nt[q.sp];q.ready?(W("collect",F),a.closeCards()):X.thirst!==0&&q.wet<_()*.4&&!v("sprinkler")?(W("water",F),a.closeCards()):(n.sfx("click",.35),c.showCard(F),W("admire",F))},c.showCard=F=>{h.plants[F.id]&&a.plantCard(F,()=>{let X=h.plants[F.id];if(!X)return null;let me=Nt[X.sp];return{sp:me,stage:L(X),grow:ke(X.grown/me.grow,0,1),water:me.thirst===0?1:ke(X.wet/_(),0,1),noWater:me.thirst===0,gift:X.grown>=me.grow?ke(X.giftT/me.every,0,1):0,ready:X.ready,left:Math.max(0,me.grow-X.grown)}},{water:()=>W("water",F),remove:()=>W("remove",F)})};let w=F=>yn.filter(q=>q.spots.includes(F.type)).map(q=>({sp:q,locked:q.lvl>p(),afford:h.coins>=q.price}));c.choose=(F,q)=>{let X=Nt[q];return X.lvl>p()?(n.sfx("error"),a.toast(`${X.name} chega no n\xEDvel ${X.lvl}`,"warn"),!1):h.coins<X.price?(n.sfx("error"),a.toast("Faltam moedas. Recolha os presentes das flores!","warn"),!1):h.plants[F.id]||F.pending?!1:(h.coins-=X.price,F.pending=q,a.hud(),n.sfx("buy",.7),W("plant",F,{sp:q}),X.thirst!==0&&!v("sprinkler")&&W("water",F),!0)},c.offerZone=F=>{let q=Zn[F];h.zones.includes(F)||a.zoneOffer(q,h.coins>=q.cost,()=>{if(h.coins<q.cost){n.sfx("error"),a.toast(`Faltam ${q.cost-h.coins} moedas para abrir ${q.name}`,"warn");return}h.coins-=q.cost,h.zones.push(F),e.setZone(F,!0),e.mowZone(F),r.invalidate(),n.sfx("expand");let[X,me]=q.tag;t.burst(new N(X,.3,me),[16770688,12120224,16777215,16762584],70,2.2),a.toast(`${q.name} agora faz parte do seu jardim!`,"good"),a.hud(),S(20+F*10),z(),m(),M(),a.focus(X,me)})},c.buyDecor=F=>{let q=Gs.find(X=>X.id===F);if(!(!q||h.decor.includes(F))){if(h.coins<q.price){n.sfx("error"),a.toast("Faltam moedas para esta decora\xE7\xE3o","warn");return}h.coins-=q.price,h.decor.push(F),e.setDecor(F,!0),r.invalidate(),n.sfx("buy"),a.toast(`${q.name} colocado no jardim`,"good"),S(15),a.hud(),z(),m()}},c.buyUpgrade=F=>{let q=Rc.find(X=>X.id===F);if(!(!q||v(F))){if(q.need&&!v(q.need)){n.sfx("error"),a.toast("Compre a melhoria anterior primeiro","warn");return}if(h.coins<q.price){n.sfx("error"),a.toast("Faltam moedas para esta melhoria","warn");return}h.coins-=q.price,h.upg.push(F),n.sfx("levelup"),a.toast(`${q.name}: ${q.desc}`,"good"),a.hud(),m()}};let M=()=>{for(let F of e.spots)u[F.id].plus.visible=h.zones.includes(F.zone)&&!h.plants[F.id]&&!F.pending},T=F=>{let q=b(),X=_(),me=0;for(let Y in h.plants){let Qe=e.spots[Y];if(Qe.pos.distanceTo(F.pos)<=q+.01&&Math.abs(Qe.pos.y-F.pos.y)<1.2){let ne=h.plants[Y];if(Nt[ne.sp].thirst===0)continue;ne.wet=X,me++,t.splash(Qe.pos,5)}}h.stats.watered+=Math.max(1,me),S(1),z()},E=F=>{let q=F.spot;q.pending=null,h.plants[q.id]={sp:F.sp,seed:1+Math.floor(Math.random()*9999),grown:0,wet:0,giftT:0,ready:!1},h.stats.planted++,P(q),u[q.id].pop=0,t.dust(q.pos,12),n.sfx("plant"),S(3),z(),M(),m()},O=F=>{let q=0;for(let X in h.plants){let me=e.spots[X],Y=h.plants[X];if(!Y.ready||me.pos.distanceTo(F.pos)>Math.max(1.4,b())+.01)continue;let Qe=Nt[Y.sp];Y.ready=!1,Y.giftT=0,q+=Qe.gift,h.stats.collected++;let ne=me.pos.clone();ne.y+=u[X].h*.7+.2,t.sparkle(ne,12),a.floatText(ne,"+"+Qe.gift,"coin")}q&&(h.coins+=q,n.sfx("coin",.6),S(Math.ceil(q/3)),a.hud(),z(),m())},Z=F=>{delete h.plants[F.id],P(F),t.dust(F.pos,14),n.sfx("plant",.8,.8),M(),a.closeCards(),z(),m()},K={water:2.1,plant:1.9,collect:1.1,admire:1.6,remove:1.7},te=()=>{let F=c.tasks.shift();if(!F){c.cur=null;return}if((F.kind==="water"||F.kind==="collect"||F.kind==="admire"||F.kind==="remove")&&!h.plants[F.spot.id]||F.kind==="collect"&&!h.plants[F.spot.id].ready)return te();F.path=B(F.spot.stand.x,F.spot.stand.z),F.phase="walk",c.cur=F},G=0,V=0,re=0,ve=0,Se=0;return s.onStep=()=>{n.sfx("step",.3,(Se^=1)?1:1.12)},c.update=F=>{c.time+=F;let q=s.group.position,X=c.cur;if(!X)s.state==="walk"&&s.stop(),s.speed=0,te();else if(X.phase==="walk"){let he=X.path[0];if(!he)s.speed=0,X.kind==="move"?(s.stop(),c.cur=null):(X.phase="act",X.t=0,X.done=!1,s.faceTo(X.spot.pos.x+(X.spot.type==="arch"?-.75:0),X.spot.pos.z),s.play(X.kind==="remove"?"plant":X.kind,K[X.kind],{high:X.spot.high||X.spot.type==="arch"&&X.kind==="water"&&!1}),X.kind==="water"&&n.sfx("water"));else{let I=he[0]-q.x,C=he[1]-q.z,$=Math.hypot(I,C),ie=$;for(let ye=1;ye<X.path.length;ye++)ie+=Math.hypot(X.path[ye][0]-X.path[ye-1][0],X.path[ye][1]-X.path[ye-1][1]);let se=ke(ie*2.2+.7,.9,ie>6?3.5:2.5);s.speed+=(se-s.speed)*Math.min(1,F*6),s.state="walk";let ae=s.speed*F;$<=ae?(q.x=he[0],q.z=he[1],X.path.shift()):(q.x+=I/$*ae,q.z+=C/$*ae,s.targetHeading=Math.atan2(I,C))}}else if(X.phase==="act"){X.t+=F;let he=X.t/K[X.kind],I=X.spot.pos;X.kind==="water"?(he>.26&&he<.84&&t.water(s.spoutWorld,X.spot.type==="arch"?new N(I.x-.75,.1,I.z):I,3),!X.done&&he>.5&&(X.done=!0,T(X.spot))):X.kind==="plant"?!X.done&&he>.55&&(X.done=!0,E(X)):X.kind==="remove"?!X.done&&he>.55&&(X.done=!0,Z(X.spot)):X.kind==="collect"?!X.done&&he>.45&&(X.done=!0,O(X.spot)):X.kind==="admire"&&!X.done&&he>.4&&(X.done=!0,t.hearts(new N(q.x,1.7,q.z),4)),he>=1&&(c.cur=null)}q.y=Sc(q.x,q.z);let me=h.settings.time;if(me==="auto")h.hour=(h.hour+F*(h.hour>6&&h.hour<19?13/540:11/150))%24;else if(me!=="fixo"){let I={dia:10,tarde:17.3,noite:22}[me]-h.hour;I>12&&(I-=24),I<-12&&(I+=24),h.hour=(h.hour+I*Math.min(1,F*.8)+24)%24}if(c.rainT-=F,c.rainT<0&&c.rainT>-50){if(c.rainOn||(c.rainOn=!0,c.count()>0&&a.toast("Uma chuvinha! As plantas agradecem.","info")),c.raining=Math.min(1,c.raining+F*.3),c.raining>.6)for(let he in h.plants)h.plants[he].wet=Math.max(h.plants[he].wet,_()*.9)}else c.raining=Math.max(0,c.raining-F*.25),c.rainT<=-50&&(c.rainT=420+Math.random()*300,c.rainOn=!1);t.rain=c.raining;let Y=v("sprinkler"),Qe=_(),ne=h.stats.blooms===0?8:1,ce=h.stats.collected===0?12:1,fe=t.butterflyTargets;fe.length=0;let Re=0;for(let he in h.plants){let I=h.plants[he],C=Nt[I.sp],$=e.spots[he],ie=u[he],se=C.thirst??1;Y&&(I.wet=Qe);let ae=se===0||I.wet>0;se>0&&(I.wet=Math.max(0,I.wet-F*se)),ae&&(I.grown<C.grow?I.grown=Math.min(C.grow,I.grown+F*ne):I.ready||(I.giftT+=F*ce,I.giftT>=C.every&&(I.ready=!0,n.sfx("pop",.35,1.3))));let ye=L(I);if(!ie.mesh||ye!==ie.stage){let Le=ie.mesh&&ye>ie.stage;if(P($),Le){u[he].pop=0;let Ee=$.pos.clone();Ee.y+=u[he].h*.6,ye===4?(n.sfx("bloom"),t.sparkle(Ee,26,16773280,.4*$.scale),h.stats.blooms++,h.album.includes(I.sp)||(h.album.push(I.sp),a.toast(`Nova flor no \xE1lbum: ${C.name}`,"good")),S(8),!c.cur&&s.state==="idle"&&s.play("cheer",1.4),m()):(n.sfx("pop",.6),t.sparkle(Ee,8,14221232,.25)),V=0}}ie.pop=Math.min(1,ie.pop+F*1.6);let ge=I.grown/C.grow,we=[0,0,.12,.45,1][ye],De=[0,.12,.45,1,1][ye],$e=De>we?(ge-we)/(De-we):1,le=$.scale*Ie(.82,1,$e)*(.55+.45*Zu(ie.pop));ie.mesh.scale.setScalar(le);let ot=ae?0:.85;ie.droop+=(ot-ie.droop)*Math.min(1,F*1.5),ie.mesh.material.userData.u.uDroop.value=ie.droop,$.soil&&$.soil.material.color.copy(g).lerp(x,se===0?1:ke(I.wet/Qe*2,0,1));let Je=I.ready?"gift":ae?null:"water",Ue=ie.bubble;Je?(Ue.visible=!0,Ue.material=f[Je],Ue.position.copy($.pos),Ue.position.y+=Math.max(.5,ie.h+.25)+Math.sin(c.time*2.4+$.id)*.04,$.type==="arch"&&(Ue.position.y=2.6)):Ue.visible=!1,ye===4&&(Re++,!C.tree&&!C.climber&&fe.length<24&&fe.push({x:$.pos.x,y:$.pos.y+ie.h*.85,z:$.pos.z}),C.petal&&Math.random()<F*1.6&&t.petalFall(new N($.pos.x,$.pos.y+3.2,$.pos.z),C.petal,1.6))}for(let he of e.spots){h.plants[he.id]||(u[he.id].bubble.visible=!1,he.soil&&!he.pending&&he.soil.material.color.lerp(g,F));let I=u[he.id].plus;I.visible&&(I.material.opacity=.7+.2*Math.sin(c.time*2))}t.butterflyCount=Math.min(9,Math.floor(Re/2)+(Re>0?1:0)),V-=F,V<0&&(V=1,z()),G+=F,G>10&&(G=0,m())},c.init=()=>{for(let q of Zn)e.setZone(q.id,h.zones.includes(q.id));for(let q of Gs)e.setDecor(q.id,h.decor.includes(q.id));let F=ke((Date.now()-(h.last||Date.now()))/1e3,0,48*3600);for(let q in h.plants){let X=h.plants[q],me=Nt[X.sp];if(!me||!e.spots[q]){delete h.plants[q];continue}let Y=me.thirst??1,Qe=Y===0||v("sprinkler")?F:Math.min(F,X.wet/Y),ne=Math.min(Qe,Math.max(0,me.grow-X.grown));X.grown+=ne,X.grown>=me.grow&&(h.album.includes(X.sp)||h.album.push(X.sp),X.giftT+=Qe-ne,X.giftT>=me.every&&(X.ready=!0,X.giftT=me.every)),Y>0&&(X.wet=Math.max(0,X.wet-F*Y)),P(e.spots[q])}c.away=F,M(),a.hud(),z()},c.zoneAt=Dr,c}var ht=i=>document.querySelector(i),go=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},Bt=i=>`<svg class="ic" aria-hidden="true"><use href="#i-${i}"/></svg>`,A_={bed:"canteiro",pot:"vaso",hang:"vaso suspenso",window:"jardineira",pond:"lago",tree:"\xE1rvore",arch:"arco"},df=i=>{if(i>=3600){let e=Math.floor(i/3600),t=Math.round(i%3600/60/5)*5;return t>=60?`${e+1} h`:t?`${e} h ${t}`:`${e} h`}return i>=60?`${Math.ceil(i/60)} min`:`${Math.max(1,Math.ceil(i))} s`};function pf({project:i,thumbs:e,audio:t}){let n={game:null,open:null},s=ht("#coins"),r=ht("#lvl"),o=ht("#lvlbar"),a=ht("#beauty"),l=ht("#toasts"),c=ht("#floats"),h=ht("#tags"),u=ht("#sheet"),d=ht("#card"),f=ht("#modal"),g=ht("#quest"),x=null,m=null,p=null,v=()=>t.sfx("click",.35);n.hud=()=>{let R=n.game,w=R.state,M=R.level();p!==null&&w.coins!==p&&(s.parentElement.classList.remove("bump"),s.offsetWidth,s.parentElement.classList.add("bump")),p=w.coins,s.textContent=w.coins,r.textContent=M;let T=Fr[M-1]??0,E=Fr[M]??T+1;o.style.width=Math.round(Math.min(1,(w.xp-T)/(E-T))*100)+"%",a.textContent=R.beauty(),n.open==="picker"&&L()},n.toast=(R,w="info")=>{let M=go("div","toast "+w,R);for(l.appendChild(M);l.children.length>3;)l.firstChild.remove();setTimeout(()=>M.classList.add("out"),3400),setTimeout(()=>M.remove(),3900)},n.floatText=(R,w,M)=>{let T=i(R);if(!T.vis)return;let E=go("div","float "+M,(M==="coin"?Bt("coin"):"")+w);E.style.left=T.x+"px",E.style.top=T.y+"px",c.appendChild(E),setTimeout(()=>E.remove(),1500)},n.quest=R=>{if(!R){g.innerHTML='<div class="q-t">Seu jardim est\xE1 completo. Aproveite o sossego!</div>';return}let w=R.text+R.val;g.dataset.k!==w&&(g.dataset.k=w,g.innerHTML=`<div class="q-h">Pr\xF3ximo passo</div><div class="q-t">${R.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round(R.val/R.goal*100)}%"></i></div><span>${R.val}/${R.goal}</span><b>${Bt("coin")}${R.reward}</b></div>`)};let _=null,b=null,L=()=>{if(!_)return;let R=n.game,w=R.level();u.querySelectorAll(".seed").forEach(M=>{let T=yn.find(E=>E.id===M.dataset.id);M.classList.toggle("poor",R.state.coins<T.price&&T.lvl<=w)})};n.picker=(R,w)=>{n.closeCards(),_=R,b=w,n.open="picker";let M=n.game.level();u.innerHTML=`<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${A_[R.type]}</span></div><button class="x" aria-label="Fechar">${Bt("x")}</button></div><div class="seeds"></div>`;let T=u.querySelector(".seeds");for(let{sp:O,locked:Z}of w){let K=go("button","seed"+(Z?" locked":""));K.dataset.id=O.id,K.innerHTML=`<div class="th"><img alt="" src="${e[O.id]||""}">${Z?`<em>N\xEDvel ${O.lvl}</em>`:""}</div><b>${O.name}</b><small>${O.info}</small><div class="meta"><span class="price">${Bt("coin")}${O.price}</span><span>${Bt("clock")}${df(O.grow)}</span></div>`,K.onclick=()=>{n.game.choose(R,O.id)&&n.closeCards()},T.appendChild(K)}u.querySelector(".x").onclick=()=>{v(),n.closeCards()},u.classList.add("on"),L(),T.querySelector(".seed:not(.locked)")&&(T.scrollLeft=0)},n.plantCard=(R,w,M)=>{n.closeCards(),m=R,n.open="card";let T=()=>{let E=w();if(!E){n.closeCards();return}let O=E.stage===4?E.ready?"Presente pronto!":"Em flor":hf[E.stage];d.innerHTML=`<img class="c-th" alt="" src="${e[E.sp.id]||""}"><div class="c-b"><div class="c-n"><b>${E.sp.name}</b><span>${O}</span></div>
        <div class="c-row">${Bt("leaf")}<div class="bar g"><i style="width:${Math.round(E.grow*100)}%"></i></div><small>${E.stage===4?"adulta":"faltam "+df(E.left)}</small></div>
        <div class="c-row">${Bt("drop")}<div class="bar w"><i style="width:${Math.round(E.water*100)}%"></i></div><small>${E.noWater?"vive na \xE1gua":E.water<=0?"com sede!":"regada"}</small></div>
        ${E.stage===4?`<div class="c-row">${Bt("coin")}<div class="bar c"><i style="width:${Math.round((E.ready?1:E.gift)*100)}%"></i></div><small>pr\xF3ximo presente</small></div>`:""}
        <div class="c-act">${E.noWater?"":`<button class="btn" data-a="water">${Bt("drop")}Regar</button>`}<button class="btn ghost" data-a="remove">Retirar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`,d.querySelectorAll("button").forEach(Z=>Z.onclick=()=>{v();let K=Z.dataset.a;K==="remove"?Z.dataset.sure?(M.remove(),n.closeCards()):(Z.dataset.sure=1,Z.textContent="Tem certeza?",Z.classList.add("danger"),x=null):(K==="water"&&M.water(),n.closeCards())})};T(),x=T,d.classList.add("on")},n.closeCards=()=>{u.classList.remove("on"),d.classList.remove("on"),_=null,x=null,m=null,(n.open==="picker"||n.open==="card")&&(n.open=null)};let A=(R,w="")=>{n.closeCards(),f.innerHTML=`<div class="panel ${w}">${R}</div>`,f.classList.add("on"),n.open="modal",f.querySelectorAll("[data-close]").forEach(M=>M.onclick=()=>{v(),P()})},P=()=>{f.classList.remove("on"),n.open==="modal"&&(n.open=null)};f.addEventListener("pointerdown",R=>{R.target===f&&P()}),n.closeModal=P,n.zoneOffer=(R,w,M)=>{A(`<h2>${R.name}</h2><p>${R.desc||""}</p><div class="offer"><span class="bigprice">${Bt("coin")}${R.cost}</span>${w?"":`<small>Voc\xEA tem ${n.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora n\xE3o</button><button class="btn big" id="buyz" ${w?"":"disabled"}>Abrir esta \xE1rea</button></div>`,"small"),ht("#buyz").onclick=()=>{P(),M()}},n.levelUp=(R,w)=>{let M=w.map(T=>`<div class="unl"><img alt="" src="${e[T.id]||""}"><span>${T.name}</span></div>`).join("");setTimeout(()=>A(`<div class="lv-badge">${R}</div><h2>N\xEDvel ${R}!</h2><p>${w.length?"Novas plantas chegaram \xE0 sua cole\xE7\xE3o de sementes:":"Voc\xEA est\xE1 cada vez melhor com as plantas."}</p><div class="unls">${M}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`,"small center"),900)};let k=(R="decor")=>{let w=n.game,M=w.state,T=Gs.map(O=>{let Z=M.decor.includes(O.id);return`<div class="item ${Z?"own":""}"><div><b>${O.name}</b><small>${O.desc}</small></div>${Z?'<span class="tagok">No jardim</span>':`<button class="btn" data-buy="d:${O.id}" ${M.coins>=O.price?"":"disabled"}>${Bt("coin")}${O.price}</button>`}</div>`}).join(""),E=Rc.map(O=>{let Z=M.upg.includes(O.id),K=O.need&&!M.upg.includes(O.need);return`<div class="item ${Z?"own":""}"><div><b>${O.name}</b><small>${O.desc}</small></div>${Z?'<span class="tagok">Comprado</span>':K?'<span class="taglock">Depois do anterior</span>':`<button class="btn" data-buy="u:${O.id}" ${M.coins>=O.price?"":"disabled"}>${Bt("coin")}${O.price}</button>`}</div>`}).join("");A(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${Bt("coin")}${M.coins}</span><button class="x" data-close aria-label="Fechar">${Bt("x")}</button></div>
      <div class="tabs"><button class="${R==="decor"?"on":""}" data-tab="decor">Decora\xE7\xE3o</button><button class="${R==="upg"?"on":""}" data-tab="upg">Melhorias</button></div>
      <div class="list">${R==="decor"?T:E}</div><p class="hint">Sementes e mudas voc\xEA escolhe tocando num lugar vazio do jardim.</p>`),f.querySelectorAll("[data-tab]").forEach(O=>O.onclick=()=>{v(),k(O.dataset.tab)}),f.querySelectorAll("[data-buy]").forEach(O=>O.onclick=()=>{let[Z,K]=O.dataset.buy.split(":");Z==="d"?w.buyDecor(K):w.buyUpgrade(K),k(R)})},y=()=>{let R=n.game.state,w=n.game.level(),M=yn.map(T=>{let E=R.album.includes(T.id);return`<div class="alb ${E?"got":""}"><img alt="" src="${e[T.id]||""}"><b>${E?T.name:T.lvl>w?"N\xEDvel "+T.lvl:T.name}</b></div>`}).join("");A(`<div class="p-h"><h2>\xC1lbum de flores</h2><span class="wallet">${R.album.length}/${yn.length}</span><button class="x" data-close aria-label="Fechar">${Bt("x")}</button></div><p class="hint">Cada esp\xE9cie entra no \xE1lbum quando floresce pela primeira vez.</p><div class="albgrid">${M}</div>`,"wide")},S=()=>{let R=n.game.state.settings,w=(T,E,O)=>`<option value="${T}" ${O===T?"selected":""}>${E}</option>`;A(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${Bt("x")}</button></div>
      <label class="set" for="s-music"><span>M\xFAsica</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${R.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${R.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${w("auto","O dia passa sozinho",R.time)}${w("dia","Sempre manh\xE3",R.time)}${w("tarde","Sempre entardecer",R.time)}${w("noite","Sempre noite",R.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${w("auto","Autom\xE1tica",R.quality)}${w("alta","Alta",R.quality)}${w("media","M\xE9dia",R.quality)}${w("baixa","Leve (para aparelhos simples)",R.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recome\xE7ar o jardim</button><button class="btn" data-close>Pronto</button></div>`,"small");let M=()=>{R.music=+ht("#s-music").value,R.sfx=+ht("#s-sfx").value,R.time=ht("#s-time").value;let T=ht("#s-q").value;T!==R.quality&&(R.quality=T,n.onQuality&&n.onQuality(T)),t.setVolumes(R.music,R.sfx),n.game.save()};["#s-music","#s-sfx","#s-time","#s-q"].forEach(T=>ht(T).oninput=ht(T).onchange=M),ht("#s-reset").onclick=T=>{let E=T.currentTarget;E.dataset.sure?(n.game.reset(),n.onReset&&n.onReset()):(E.dataset.sure=1,E.textContent="Apagar tudo e recome\xE7ar?")}},z=()=>{A(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${Bt("x")}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na \xE1rea de trabalho e no menu Iniciar. Baixa um .zip: abra e d\xEA dois cliques em \u201CInstalar Jardim do Sossego\u201D. Come\xE7a um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo s\xF3: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirma\xE7\xE3o antes de salvar.</p>`,"small");let R=w=>{let M=ht("#dl-msg");M&&(M.textContent=w)};f.querySelectorAll("[data-dl]").forEach(w=>w.onclick=async()=>{v();let M=f.querySelectorAll("[data-dl]");M.forEach(T=>T.disabled=!0),R("Preparando o arquivo\u2026");try{let T=window.claude&&window.claude.use?await window.claude.use("downloads"):null;if(!T){R("Por aqui n\xE3o d\xE1 para baixar. Abra o jogo pelo link, no navegador do computador.");return}let E,O;if(w.dataset.dl==="win"){let Z=await fetch("instalar/Jardim-do-Sossego-Windows.zip");if(!Z.ok)throw new Error("fetch");E=await Z.blob(),O="Jardim-do-Sossego-Windows.zip"}else{let Z=await fetch("instalar/Jardim-do-Sossego.html");if(!Z.ok)throw new Error("fetch");let K=await Z.text();n.game.save();let te="window.__SAVE="+JSON.stringify(n.game.state).replace(/</g,"\\u003c")+";";E=new Blob([K.replace("/*__SAVE__*/",()=>te)]),O="Jardim-do-Sossego.html"}await T.save({filename:O,data:E}),R(w.dataset.dl==="win"?"Salvo! Abra o .zip e d\xEA dois cliques no instalador.":"Salvo! Dois cliques no arquivo e o jardim abre.")}catch(T){R(T&&T.code==="declined"?"Tudo bem, fica para depois.":T&&T.code==="rate_limited"?"J\xE1 existe um pedido de download aberto. Confirme ou feche-o primeiro.":"N\xE3o foi poss\xEDvel baixar agora. Tente de novo em instantes.")}finally{M.forEach(T=>T.disabled=!1)}})},B=()=>{let R=/iPhone|iPad|iPod/i.test(navigator.userAgent),w=matchMedia("(display-mode: standalone)").matches||navigator.standalone,M=/Windows/i.test(navigator.userAgent);A(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${Bt("x")}</button></div>
      <p>${w?"O jogo j\xE1 est\xE1 instalado neste aparelho.":"Instalado, o jogo ganha um \xEDcone pr\xF3prio, funciona sem internet e recebe as novidades sozinho."}</p>
      <div class="list">
        ${w?"":`<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${R?"No iPhone ou iPad: toque em Compartilhar e depois em \u201CAdicionar \xE0 Tela de In\xEDcio\u201D.":"Instala como aplicativo, no celular ou no computador."}</small></div>${R?"":'<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${M&&!w?'<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na \xE1rea de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>':""}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`,"small");let T=ht("#pwa-go");T&&(T.onclick=async()=>{v();let E=window.__pwaPrompt;if(E){E.prompt();try{await E.userChoice}catch{}window.__pwaPrompt=null,P()}else ht("#pwa-how").textContent="Abra o menu do navegador (os tr\xEAs pontinhos) e escolha \u201CInstalar aplicativo\u201D ou \u201CAdicionar \xE0 tela inicial\u201D."})};window.__WEB?ht("#b-install").onclick=()=>{v(),B()}:window.__APP||!window.__INSTALL?ht("#b-install").hidden=!0:ht("#b-install").onclick=()=>{v(),z()},ht("#b-shop").onclick=()=>{v(),k()},ht("#b-album").onclick=()=>{v(),y()},ht("#b-set").onclick=()=>{v(),S()},ht("#b-photo").onclick=()=>{v(),document.body.classList.add("photo"),n.closeCards()},ht("#photo-exit").onclick=()=>document.body.classList.remove("photo");let W={};return n.initTags=R=>{for(let w of R){if(!w.cost)continue;let M=go("button","ztag",`${Bt("lock")}<small>${Bt("coin")}${w.cost}</small>`);M.title=w.name,M.setAttribute("aria-label",`${w.name}: ${w.cost} moedas`),M.onclick=()=>{v(),n.game.offerZone(w.id)},h.appendChild(M),W[w.id]=M}},n.frame=(R,w)=>{let M=n.game.state;for(let T of R){let E=W[T.id];if(!E)continue;if(M.zones.includes(T.id)){E.hidden=!0;continue}let O=i(new w(T.tag[0],T.id===1?2.25:1.75,T.tag[1]));E.hidden=!O.vis,O.vis&&(E.style.transform=`translate(-50%,-100%) translate(${O.x.toFixed(1)}px,${O.y.toFixed(1)}px)`,E.classList.toggle("can",M.coins>=T.cost))}x&&(n._ct=(n._ct||0)+1)%20===0&&x()},n.focus=()=>{},n}var pi=N,xo=i=>document.querySelector(i),Ii=new URLSearchParams(location.search);async function R_(i,e){let t={},s=new Ht(168,168,{samples:4});s.texture.colorSpace=ft;let r=new hr;r.add(new zs(16777215,12109984,1.5));let o=new Fs(16774368,1.7);o.position.set(2,4,3),r.add(o);let a=new Jt(26,1,.05,60),l=new Uint8Array(28224*4),c=document.createElement("canvas");c.width=c.height=168;let h=c.getContext("2d"),u=Cn.uDay.value;Cn.uDay.value=.5;for(let d=0;d<yn.length;d++){let f=yn[d],g=po(f.id,11,4),x=mo(f.id);x.userData.u.uSway.value=0;let m=new Ge(g,x);r.add(m);let p=g.boundingBox,v=p.getCenter(new pi),_=p.getSize(new pi),b=Math.max(_.x,_.y,_.z)*.62+.03,L=b/Math.tan(13*Math.PI/180);a.position.set(v.x+L*.25,v.y+L*.5,v.z+L*.83),a.lookAt(v),a.near=L*.1,a.far=L*4,a.updateProjectionMatrix(),i.setRenderTarget(s),i.setClearColor(0,0),i.clear(),i.render(r,a),i.readRenderTargetPixels(s,0,0,168,168,l),i.setRenderTarget(null);let A=h.createImageData(168,168);for(let P=0;P<168;P++)A.data.set(l.subarray((167-P)*168*4,(168-P)*168*4),P*168*4);h.putImageData(A,0,0),t[f.id]=c.toDataURL("image/png"),r.remove(m),g.dispose(),x.dispose(),e((d+1)/yn.length),d%3===2&&await new Promise(P=>setTimeout(P,0))}return Cn.uDay.value=u,s.dispose(),t}var Cc=null;if(window.__WEB&&"serviceWorker"in navigator){let i=!!navigator.serviceWorker.controller;navigator.serviceWorker.register("sw.js").then(e=>{setInterval(()=>e.update().catch(()=>{}),1800*1e3)}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{i&&Cc&&Cc()}),addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.__pwaPrompt=e})}async function C_(){let i=uf(),e=Ii.get("demo");e&&(i.zones=[0,1,2,3,4,5,6],i.decor=["lanternas","banco","bebedouro","casinha","carrinho","anao"],i.coins=999,i.xp=3e3,i.settings.time="fixo",i.hour=+(Ii.get("h")||16.8));let t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820,n=Ii.get("q")||(i.settings.quality!=="auto"?i.settings.quality:t?"media":"alta"),s=xo("#stage"),r=$u(s,Tr[n]),o=new hr,a=new Jt(32,1,.3,900),l=Ju(o,r.renderer,Tr.alta),c=nf(o,Tr[n],new Set(i.zones)),h=rf();h.group.position.set(.3,0,1.6),h.heading=h.targetHeading=.2,o.add(h.group);let u=af(o),d=lf("audio/");d.setVolumes(i.settings.music,i.settings.sfx);let f=cf(c.blocked);r.setup(o,a);let g=ne=>{let ce=l.sun.shadow;ce.mapSize.x!==ne.shadows&&(ce.mapSize.set(ne.shadows,ne.shadows),ce.map&&(ce.map.dispose(),ce.map=null))},x=ne=>{n=ne;let ce=Tr[ne];r.setQuality(ce),c.setGrass(ce.grass),g(ce)},m=()=>{let ne=s.clientWidth||innerWidth,ce=s.clientHeight||innerHeight;a.aspect=ne/ce,a.fov=ne<ce?44:32,a.updateProjectionMatrix(),r.resize(ne,ce)};r.w=innerWidth,r.h=innerHeight,x(n),m(),addEventListener("resize",m);let p={yaw:0,pitch:.6,dist:12.5,target:new pi(0,.9,.5),focusT:0,focus:new pi},v=new pi,_=ne=>(v.copy(ne).project(a),{x:(v.x*.5+.5)*r.w,y:(-v.y*.5+.5)*r.h,vis:v.z<1&&Math.abs(v.x)<1.15&&Math.abs(v.y)<1.15}),b=xo("#load i"),L=xo("#start");r.render(o,a);let A=await R_(r.renderer,ne=>{b.style.width=Math.round(ne*100)+"%"}),P=pf({project:_,thumbs:A,audio:d}),k=ff({scene:o,world:c,fx:u,audio:d,gardener:h,nav:f,env:l,ui:P,state:i});e&&(k.save=()=>{},c.spots.forEach((ne,ce)=>{if(e==="2"&&ce%3===0)return;let fe=yn.filter(he=>he.spots.includes(ne.type)),Re=fe[(ce*7+3)%fe.length];i.plants[ne.id]={sp:Re.id,seed:ce+5,grown:e==="2"&&ce%4===1?Re.grow*.6:Re.grow,wet:ce%9===4?0:300,giftT:ce%6===2?80:0,ready:!1}})),P.game=k,P.initTags(Zn),P.onQuality=ne=>x(ne==="auto"?t?"media":"alta":ne),P.onReset=()=>{k.save=()=>{},location.reload()},P.focus=(ne,ce)=>{p.focus.set(ne,.8,ce),p.focusT=3.2},k.init();let y=k.count()>0||i.stats.planted>0;L.textContent=y?"Voltar ao meu jardim":"Come\xE7ar",xo("#load").hidden=!0,L.hidden=!1;let S=!1,z=0,B=0,W=0,R=!1,w=()=>{S||(S=!0,d.unlock(),document.body.classList.add("playing"),z=0,k.away>120&&k.count()>0?setTimeout(()=>P.toast("Que bom te ver de volta! Veja quem est\xE1 com sede.","info"),1800):y||setTimeout(()=>P.toast("Toque num + do canteiro para plantar sua primeira flor","info"),1500))};L.onclick=w,Cc=()=>{S?P.toast("Chegaram novidades! Elas aparecem na pr\xF3xima vez que voc\xEA abrir o jogo.","good"):location.reload()},Ii.get("autostart")&&w();let M=new Map,T=0,E=0,O=0,Z=0,K=new Qa,te=new oe,G=new zn(new pi(0,1,0),0),V=new pi,re=(ne,ce)=>{let fe=s.getBoundingClientRect();te.set((ne-fe.left)/fe.width*2-1,-((ce-fe.top)/fe.height)*2+1),K.setFromCamera(te,a);let Re=K.intersectObjects(c.pickables.filter(he=>he.visible||!i.zones.includes(he.userData.spot.zone)),!1);return Re.length?{spot:Re[0].object.userData.spot}:K.ray.intersectPlane(G,V)?{ground:V.clone()}:{}};s.addEventListener("pointerdown",ne=>{if(s.setPointerCapture(ne.pointerId),M.set(ne.pointerId,{x:ne.clientX,y:ne.clientY}),M.size===1)T=performance.now(),E=0;else if(M.size===2){let[ce,fe]=[...M.values()];O=Math.hypot(ce.x-fe.x,ce.y-fe.y),Z=p.dist,E=99}}),s.addEventListener("pointermove",ne=>{let ce=M.get(ne.pointerId);if(!ce){if(ne.pointerType==="mouse"&&S){let he=re(ne.clientX,ne.clientY);s.style.cursor=he.spot?"pointer":"grab"}return}let fe=ne.clientX-ce.x,Re=ne.clientY-ce.y;if(ce.x=ne.clientX,ce.y=ne.clientY,M.size===1)E+=Math.abs(fe)+Math.abs(Re),E>8&&(p.yaw-=fe*.006,p.pitch=ke(p.pitch+Re*.004,.16,1.3));else if(M.size===2){let[he,I]=[...M.values()],C=Math.hypot(he.x-I.x,he.y-I.y);O>0&&(p.dist=ke(Z*(O/C),3.5,34))}});let ve=ne=>{if(M.delete(ne.pointerId)&&M.size===0&&E<=8&&performance.now()-T<600&&S){if(document.body.classList.contains("photo")||P.open==="modal")return;let fe=re(ne.clientX,ne.clientY);if(fe.spot)k.tapSpot(fe.spot);else if(fe.ground){let Re=fe.ground,he=Dr(Re.x,Re.z);if(P.open){P.closeCards();return}he>0&&!i.zones.includes(he)?k.offerZone(he):Math.abs(Re.x)<12.4&&Re.z>-9&&Re.z<14.5&&(k.tapGround(Re.x,Re.z),u.sparkle(new pi(Re.x,.05,Re.z),4,16777215,.12))}}};s.addEventListener("pointerup",ve),s.addEventListener("pointercancel",ne=>M.delete(ne.pointerId)),s.addEventListener("wheel",ne=>{ne.preventDefault(),p.dist=ke(p.dist*Math.exp(ne.deltaY*.0011),3.5,34)},{passive:!1}),addEventListener("keydown",ne=>{ne.key==="Escape"&&(P.closeCards(),P.closeModal(),document.body.classList.remove("photo"))}),document.addEventListener("visibilitychange",()=>{document.hidden?(k.save(),d.pause(!0)):d.pause(!1)}),addEventListener("pagehide",()=>k.save());let Se=performance.now(),F=0,q=.5,X=0,me=0,Y=+(Ii.get("frames")||0),Qe=ne=>{if(Y&&S&&++me>Y){window.__frozen=!0;return}requestAnimationFrame(Qe);let ce=Math.min(.1,(ne-Se)/1e3);if(Se=ne,document.hidden)return;let fe=+(Ii.get("speed")||1);if(F+=ce,Cn.uTime.value=F,S){for(let se=0;se<fe;se++)k.update(ce);z+=Ii.get("nointro")?9:ce}h.update(ce,F),l.setHour(i.hour),c.setNight(l.night),c.update(ce,F),l.update(ce,a.position),u.update(ce,F,l,a,c.chimney),d.update(l.night,u.rain),Cn.uWind.value=1+u.rain*.8;let Re=h.group.position,he=1-Math.exp(-3.2*ce);S?p.focusT>0?(p.focusT-=ce,p.target.lerp(p.focus,he)):(v.set(Re.x,Re.y+.95,Re.z),p.target.lerp(v,he)):(p.yaw=Math.sin(F*.06)*.55,v.set(0,1,1.5),p.target.lerp(v,he));let I=S?cn(z/2.2):0,C=Ie(27,p.dist,I),$=Ie(.5,p.pitch,I),ie=Math.cos($);if(a.position.set(p.target.x+Math.sin(p.yaw)*ie*C,p.target.y+Math.sin($)*C,p.target.z+Math.cos(p.yaw)*ie*C),a.lookAt(p.target),r.final&&(v.set(Re.x,Re.y+.8,Re.z).project(a),q+=((S?ke(v.y*.5+.5,.3,.7):.5)-q)*he,r.final.uniforms.uFocus.value=q),r.render(o,a),S&&P.frame(Zn,pi),S&&!R&&i.settings.quality==="auto"&&!Ii.get("q")&&(B+=ce,W++,B>4)){let se=B/W;R=!0,se>.036&&(x(n==="alta"?"media":"baixa"),R=!1,B=0,W=0,n==="baixa"&&(R=!0))}++X===3&&(document.title=document.title,window.__ready=!0)};requestAnimationFrame(Qe),window.__game={game:k,state:i,cam:p,gardener:h,world:c,env:l,ui:P,start:w,setQ:x,fx:u}}C_().catch(i=>{console.error(i);let e=document.querySelector("#err");e&&(e.hidden=!1,e.textContent="N\xE3o foi poss\xEDvel abrir o jardim neste aparelho: "+i.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
