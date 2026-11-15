(()=>{var W0=0,sh=1,X0=2;var Wu=1,yc=2,yi=3,Fi=0,mn=1,St=2;var ci=0,Us=1,Or=2,ah=3,rh=4,q0=5,Ki=100,$0=101,Y0=102,oh=103,lh=104,Z0=200,J0=201,j0=202,K0=203,Tl=204,Al=205,Q0=206,ef=207,tf=208,nf=209,sf=210,af=211,rf=212,of=213,lf=214,cf=0,hf=1,uf=2,Br=3,ff=4,df=5,pf=6,mf=7,_c=0,gf=1,xf=2,zi=0,bc=1,Mc=2,wc=3,ka=4,vf=5,Sc=6;var Xu=300,Fs=301,Os=302,Rl=303,Cl=304,_o=306,Bs=1e3,jn=1001,Ll=1002,bn=1003,ch=1004;var Vo=1005;var Fn=1006,yf=1007;var Ma=1008;var Ni=1009,_f=1010,bf=1011,Ec=1012,qu=1013,Di=1014,Ui=1015,Dn=1016,$u=1017,Yu=1018,ts=1020,Mf=1021,Kn=1023,wf=1024,Sf=1025,ns=1026,ks=1027,Ef=1028,Zu=1029,Tf=1030,Ju=1031,ju=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,hh=35840,uh=35841,fh=35842,dh=35843,Ku=36196,ph=37492,mh=37496,gh=37808,xh=37809,vh=37810,yh=37811,_h=37812,bh=37813,Mh=37814,wh=37815,Sh=37816,Eh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,$o=36492,Lh=36494,Ph=36495,Af=36283,Ih=36284,Dh=36285,Uh=36286;var kr=2300,Hr=2301,Yo=2302,zh=2400,Nh=2401,Fh=2402;var Qu=3e3,is=3001,Rf=3200,Cf=3201,Tc=0,Lf=1,On="",wt="srgb",wi="srgb-linear",Ac="display-p3",bo="display-p3-linear",Vr="linear",Et="srgb",Gr="rec709",Wr="p3";var hs=7680;var Oh=519,Pf=512,If=513,Df=514,e0=515,Uf=516,zf=517,Nf=518,Ff=519,Pl=35044;var Bh="300 es",Il=1035,bi=2e3,Xr=2001,Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,h=s.length;a<h;a++)s[a].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zo=Math.PI/180,Dl=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Of(i,e){return(i%e+e)%e}function Jo(i,e,t){return(1-t)*i+t*e}function kh(i){return(i&i-1)===0&&i!==0}function Ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,h=this.y-e.y;return this.x=a*n-h*s+e.x,this.y=a*s+h*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,s,a,h,o,l,r){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,h,o,l,r)}set(e,t,n,s,a,h,o,l,r){let c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=a,c[5]=l,c[6]=n,c[7]=h,c[8]=r,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,h=n[0],o=n[3],l=n[6],r=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],_=s[4],b=s[7],L=s[2],R=s[5],I=s[8];return a[0]=h*v+o*y+l*L,a[3]=h*m+o*_+l*R,a[6]=h*p+o*b+l*I,a[1]=r*v+c*y+u*L,a[4]=r*m+c*_+u*R,a[7]=r*p+c*b+u*I,a[2]=d*v+f*y+g*L,a[5]=d*m+f*_+g*R,a[8]=d*p+f*b+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8];return t*h*c-t*o*r-n*a*c+n*o*l+s*a*r-s*h*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8],u=c*h-o*r,d=o*l-c*a,f=r*a-h*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*r-c*n)*v,e[2]=(o*n-s*h)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=f*v,e[7]=(n*l-r*t)*v,e[8]=(h*t-n*a)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,h,o){let l=Math.cos(a),r=Math.sin(a);return this.set(n*l,n*r,-n*(l*h+r*o)+h+e,-s*r,s*l,-s*(-r*h+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jo.makeScale(e,t)),this}rotate(e){return this.premultiply(jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jo=new et;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=qr("canvas");return i.style.display="block",i}var Hh={};function xa(i){i in Hh||(Hh[i]=!0,console.warn(i))}var Vh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ar={[wi]:{transfer:Vr,primaries:Gr,toReference:i=>i,fromReference:i=>i},[wt]:{transfer:Et,primaries:Gr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bo]:{transfer:Vr,primaries:Wr,toReference:i=>i.applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh)},[Ac]:{transfer:Et,primaries:Wr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh).convertLinearToSRGB()}},kf=new Set([wi,bo]),vt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ar[e].toReference,s=ar[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ar[i].primaries},getTransfer:function(i){return i===On?Vr:ar[i].transfer}};function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,$r=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=qr("canvas")),us.width=e.width,us.height=e.height;let n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let h=0;h<a.length;h++)a[h]=zs(a[h]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,Yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let h=0,o=s.length;h<o;h++)s[h].isDataTexture?a.push(Qo(s[h].image)):a.push(Qo(s[h]))}else a=Qo(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,Bn=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,a=Fn,h=Ma,o=Kn,l=Ni,r=i.DEFAULT_ANISOTROPY,c=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Mi(),this.name="",this.source=new Yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=h,this.anisotropy=r,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===is?wt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?is:Qu}set encoding(e){xa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?wt:On}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Xu;Bn.DEFAULT_ANISOTROPY=1;var zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,h=e.elements;return this.x=h[0]*t+h[4]*n+h[8]*s+h[12]*a,this.y=h[1]*t+h[5]*n+h[9]*s+h[13]*a,this.z=h[2]*t+h[6]*n+h[10]*s+h[14]*a,this.w=h[3]*t+h[7]*n+h[11]*s+h[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,l=e.elements,r=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(r+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(r+1)/2,b=(f+1)/2,L=(p+1)/2,R=(c+d)/4,I=(u+v)/4,B=(g+m)/4;return _>b&&_>L?_<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(_),s=R/n,a=I/n):b>L?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=R/s,a=B/s):L<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(L),n=I/a,s=B/a),this.set(n,s,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-c)/y,this.w=Math.acos((r+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(xa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?wt:On),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Bn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Yr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nl=class extends Bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,h,o){let l=n[s+0],r=n[s+1],c=n[s+2],u=n[s+3],d=a[h+0],f=a[h+1],g=a[h+2],v=a[h+3];if(o===0){e[t+0]=l,e[t+1]=r,e[t+2]=c,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||r!==f||c!==g){let m=1-o,p=l*d+r*f+c*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),R=Math.atan2(L,p*y);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}let b=o*y;if(l=l*m+d*b,r=r*m+f*b,c=c*m+g*b,u=u*m+v*b,m===1-o){let L=1/Math.sqrt(l*l+r*r+c*c+u*u);l*=L,r*=L,c*=L,u*=L}}e[t]=l,e[t+1]=r,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,h){let o=n[s],l=n[s+1],r=n[s+2],c=n[s+3],u=a[h],d=a[h+1],f=a[h+2],g=a[h+3];return e[t]=o*g+c*u+l*f-r*d,e[t+1]=l*g+c*d+r*u-o*f,e[t+2]=r*g+c*f+o*d-l*u,e[t+3]=c*g-o*u-l*d-r*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,h=e._order,o=Math.cos,l=Math.sin,r=o(n/2),c=o(s/2),u=o(a/2),d=l(n/2),f=l(s/2),g=l(a/2);switch(h){case"XYZ":this._x=d*c*u+r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u+d*f*g;break;case"YZX":this._x=d*c*u+r*f*g,this._y=r*f*u+d*c*g,this._z=r*c*g-d*f*u,this._w=r*c*u-d*f*g;break;case"XZY":this._x=d*c*u-r*f*g,this._y=r*f*u-d*c*g,this._z=r*c*g+d*f*u,this._w=r*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],h=t[1],o=t[5],l=t[9],r=t[2],c=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(a-r)*f,this._z=(h-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+h)/f,this._z=(a+r)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(a-r)/f,this._x=(s+h)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(h-s)/f,this._x=(a+r)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,h=e._w,o=t._x,l=t._y,r=t._z,c=t._w;return this._x=n*c+h*o+s*r-a*l,this._y=s*c+h*l+a*o-n*r,this._z=a*c+h*r+n*l-s*o,this._w=h*c-n*o-s*l-a*r,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,a=this._z,h=this._w,o=h*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=h,this._x=n,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*h+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}let r=Math.sqrt(l),c=Math.atan2(r,o),u=Math.sin((1-t)*c)/r,d=Math.sin(t*c)/r;return this._w=h*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,h=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*h,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*h,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*h,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,h=e.y,o=e.z,l=e.w,r=2*(h*s-o*n),c=2*(o*t-a*s),u=2*(a*n-h*t);return this.x=t+l*r+h*u-o*c,this.y=n+l*c+o*r-a*u,this.z=s+l*u+a*c-h*r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,h=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*h-n*l,this.z=n*o-s*h,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new V,Wh=new hi,Qn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let h=0,o=a.count;h<o;h++)e.isMesh===!0?e.getVertexPosition(h,$n):$n.fromBufferAttribute(a,h),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let s=e.children;for(let a=0,h=s.length;a<h;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),or.subVectors(this.max,oa),fs.subVectors(e.a,oa),ds.subVectors(e.b,oa),ps.subVectors(e.c,oa),Ri.subVectors(ds,fs),Ci.subVectors(ps,ds),$i.subVectors(fs,ps);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-$i.z,$i.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,$i.z,0,-$i.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-$i.y,$i.x,0];return!tl(t,fs,ds,ps,or)||(t=[1,0,0,0,1,0,0,0,1],!tl(t,fs,ds,ps,or))?!1:(lr.crossVectors(Ri,Ci),t=[lr.x,lr.y,lr.z],tl(t,fs,ds,ps,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new V,new V,new V,new V,new V,new V,new V,new V],$n=new V,rr=new Qn,fs=new V,ds=new V,ps=new V,Ri=new V,Ci=new V,$i=new V,oa=new V,or=new V,lr=new V,Yi=new V;function tl(i,e,t,n,s){for(let a=0,h=i.length-3;a<=h;a+=3){Yi.fromArray(i,a);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),r=t.dot(Yi),c=n.dot(Yi);if(Math.max(-Math.max(l,r,c),Math.min(l,r,c))>o)return!1}return!0}var Gf=new Qn,la=new V,nl=new V,Si=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gf.setFromPoints(e).getCenter(n);let s=0;for(let a=0,h=e.length;a<h;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(nl)),this.expandByPoint(la.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new V,il=new V,cr=new V,Li=new V,sl=new V,hr=new V,al=new V,Hs=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){il.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(il);let a=e.distanceTo(t)*.5,h=-this.direction.dot(cr),o=Li.dot(this.direction),l=-Li.dot(cr),r=Li.lengthSq(),c=Math.abs(1-h*h),u,d,f,g;if(c>0)if(u=h*l-o,d=h*o-l,g=a*c,u>=0)if(d>=-g)if(d<=g){let v=1/c;u*=v,d*=v,f=u*(u+h*d+2*o)+d*(h*u+d+2*l)+r}else d=a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;else d=-a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;else d<=-g?(u=Math.max(0,-(-h*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+r):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),f=d*(d+2*l)+r):(u=Math.max(0,-(h*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),f=-u*u+d*(d+2*l)+r);else d=h>0?-a:a,u=Math.max(0,-(h*d+o)),f=-u*u+d*(d+2*l)+r;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(il).addScaledVector(cr,d),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,a=e.radius*e.radius;if(s>a)return null;let h=Math.sqrt(a-s),o=n-h,l=n+h;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,h,o,l,r=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return r>=0?(n=(e.min.x-d.x)*r,s=(e.max.x-d.x)*r):(n=(e.max.x-d.x)*r,s=(e.min.x-d.x)*r),c>=0?(a=(e.min.y-d.y)*c,h=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,h=(e.min.y-d.y)*c),n>h||a>s||((a>n||isNaN(n))&&(n=a),(h<s||isNaN(s))&&(s=h),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,s,a){sl.subVectors(t,e),hr.subVectors(n,e),al.crossVectors(sl,hr);let h=this.direction.dot(al),o;if(h>0){if(s)return null;o=1}else if(h<0)o=-1,h=-h;else return null;Li.subVectors(this.origin,e);let l=o*this.direction.dot(hr.crossVectors(Li,hr));if(l<0)return null;let r=o*this.direction.dot(sl.cross(Li));if(r<0||l+r>h)return null;let c=-o*Li.dot(al);return c<0?null:this.at(c/h,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m)}set(e,t,n,s,a,h,o,l,r,c,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=h,p[9]=o,p[13]=l,p[2]=r,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),a=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*h,t[9]=n[9]*h,t[10]=n[10]*h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,h=Math.cos(n),o=Math.sin(n),l=Math.cos(s),r=Math.sin(s),c=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=h*c,f=h*u,g=o*c,v=o*u;t[0]=l*c,t[4]=-l*u,t[8]=r,t[1]=f+g*r,t[5]=d-v*r,t[9]=-o*l,t[2]=v-d*r,t[6]=g+f*r,t[10]=h*l}else if(e.order==="YXZ"){let d=l*c,f=l*u,g=r*c,v=r*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=h*r,t[1]=h*u,t[5]=h*c,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=h*l}else if(e.order==="ZXY"){let d=l*c,f=l*u,g=r*c,v=r*u;t[0]=d-v*o,t[4]=-h*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=h*c,t[9]=v-d*o,t[2]=-h*r,t[6]=o,t[10]=h*l}else if(e.order==="ZYX"){let d=h*c,f=h*u,g=o*c,v=o*u;t[0]=l*c,t[4]=g*r-f,t[8]=d*r+v,t[1]=l*u,t[5]=v*r+d,t[9]=f*r-g,t[2]=-r,t[6]=o*l,t[10]=h*l}else if(e.order==="YZX"){let d=h*l,f=h*r,g=o*l,v=o*r;t[0]=l*c,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=h*c,t[9]=-o*c,t[2]=-r*c,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=h*l,f=h*r,g=o*l,v=o*r;t[0]=l*c,t[4]=-u,t[8]=r*c,t[1]=d*u+v,t[5]=h*c,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wf,e,Xf)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Pi.crossVectors(n,Pn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Pi.crossVectors(n,Pn)),Pi.normalize(),ur.crossVectors(Pn,Pi),s[0]=Pi.x,s[4]=ur.x,s[8]=Pn.x,s[1]=Pi.y,s[5]=ur.y,s[9]=Pn.y,s[2]=Pi.z,s[6]=ur.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,h=n[0],o=n[4],l=n[8],r=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],L=n[15],R=s[0],I=s[4],B=s[8],w=s[12],S=s[1],N=s[5],H=s[9],F=s[13],T=s[2],C=s[6],E=s[10],A=s[14],D=s[3],U=s[7],z=s[11],W=s[15];return a[0]=h*R+o*S+l*T+r*D,a[4]=h*I+o*N+l*C+r*U,a[8]=h*B+o*H+l*E+r*z,a[12]=h*w+o*F+l*A+r*W,a[1]=c*R+u*S+d*T+f*D,a[5]=c*I+u*N+d*C+f*U,a[9]=c*B+u*H+d*E+f*z,a[13]=c*w+u*F+d*A+f*W,a[2]=g*R+v*S+m*T+p*D,a[6]=g*I+v*N+m*C+p*U,a[10]=g*B+v*H+m*E+p*z,a[14]=g*w+v*F+m*A+p*W,a[3]=y*R+_*S+b*T+L*D,a[7]=y*I+_*N+b*C+L*U,a[11]=y*B+_*H+b*E+L*z,a[15]=y*w+_*F+b*A+L*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],h=e[1],o=e[5],l=e[9],r=e[13],c=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+a*l*u-s*r*u-a*o*d+n*r*d+s*o*f-n*l*f)+v*(+t*l*f-t*r*d+a*h*d-s*h*f+s*r*c-a*l*c)+m*(+t*r*u-t*o*f-a*h*u+n*h*f+a*o*c-n*r*c)+p*(-s*o*c-t*l*u+t*o*d+s*h*u-n*h*d+n*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],h=e[4],o=e[5],l=e[6],r=e[7],c=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*r-v*d*r+v*l*f-o*m*f-u*l*p+o*d*p,_=g*d*r-c*m*r-g*l*f+h*m*f+c*l*p-h*d*p,b=c*v*r-g*u*r+g*o*f-h*v*f-c*o*p+h*u*p,L=g*u*l-c*v*l-g*o*d+h*v*d+c*o*m-h*u*m,R=t*y+n*_+s*b+a*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=y*I,e[1]=(v*d*a-u*m*a-v*s*f+n*m*f+u*s*p-n*d*p)*I,e[2]=(o*m*a-v*l*a+v*s*r-n*m*r-o*s*p+n*l*p)*I,e[3]=(u*l*a-o*d*a-u*s*r+n*d*r+o*s*f-n*l*f)*I,e[4]=_*I,e[5]=(c*m*a-g*d*a+g*s*f-t*m*f-c*s*p+t*d*p)*I,e[6]=(g*l*a-h*m*a-g*s*r+t*m*r+h*s*p-t*l*p)*I,e[7]=(h*d*a-c*l*a+c*s*r-t*d*r-h*s*f+t*l*f)*I,e[8]=b*I,e[9]=(g*u*a-c*v*a-g*n*f+t*v*f+c*n*p-t*u*p)*I,e[10]=(h*v*a-g*o*a+g*n*r-t*v*r-h*n*p+t*o*p)*I,e[11]=(c*o*a-h*u*a-c*n*r+t*u*r+h*n*f-t*o*f)*I,e[12]=L*I,e[13]=(c*v*s-g*u*s+g*n*d-t*v*d-c*n*m+t*u*m)*I,e[14]=(g*o*s-h*v*s-g*n*l+t*v*l+h*n*m-t*o*m)*I,e[15]=(h*u*s-c*o*s+c*n*l-t*u*l-h*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,h=e.x,o=e.y,l=e.z,r=a*h,c=a*o;return this.set(r*h+n,r*o-s*l,r*l+s*o,0,r*o+s*l,c*o+n,c*l-s*h,0,r*l-s*o,c*l+s*h,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,h){return this.set(1,n,a,0,e,1,h,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,h=t._y,o=t._z,l=t._w,r=a+a,c=h+h,u=o+o,d=a*r,f=a*c,g=a*u,v=h*c,m=h*u,p=o*u,y=l*r,_=l*c,b=l*u,L=n.x,R=n.y,I=n.z;return s[0]=(1-(v+p))*L,s[1]=(f+b)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+_)*I,s[9]=(m-y)*I,s[10]=(1-(d+v))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,a=ms.set(s[0],s[1],s[2]).length(),h=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let r=1/a,c=1/h,u=1/o;return Yn.elements[0]*=r,Yn.elements[1]*=r,Yn.elements[2]*=r,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=a,n.y=h,n.z=o,this}makePerspective(e,t,n,s,a,h,o=bi){let l=this.elements,r=2*a/(t-e),c=2*a/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===bi)f=-(h+a)/(h-a),g=-2*h*a/(h-a);else if(o===Xr)f=-h/(h-a),g=-h*a/(h-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=r,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,h,o=bi){let l=this.elements,r=1/(t-e),c=1/(n-s),u=1/(h-a),d=(t+e)*r,f=(n+s)*c,g,v;if(o===bi)g=(h+a)*u,v=-2*u;else if(o===Xr)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*r,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new V,Yn=new $e,Wf=new V(0,0,0),Xf=new V(1,1,1),Pi=new V,ur=new V,Pn=new V,Xh=new $e,qh=new hi,Jr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],h=s[4],o=s[8],l=s[1],r=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(d,r),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,r)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-h,r)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-h,r));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,r),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,r),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jr.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qf=0,$h=new V,gs=new hi,gi=new $e,fr=new V,ca=new V,$f=new V,Yf=new hi,Yh=new V(1,0,0),Zh=new V(0,1,0),Jh=new V(0,0,1),Zf={type:"added"},Jf={type:"removed"},Yt=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Jr,n=new hi,s=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function h(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new et}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ca,fr,this.up):gi.lookAt(fr,ca,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(gi),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let h=this.children[n].getObjectByProperty(e,t);if(h!==void 0)return h}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,h=s.length;a<h;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,$f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let a=0,h=s.length;a<h;a++){let o=s[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let r=0,c=l.length;r<c;r++){let u=l[r];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,r=this.material.length;l<r;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=h(e.geometries),l=h(e.materials),r=h(e.textures),c=h(e.images),u=h(e.shapes),d=h(e.skeletons),f=h(e.animations),g=h(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),r.length>0&&(n.textures=r),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function h(o){let l=[];for(let r in o){let c=o[r];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new V(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new V,xi=new V,rl=new V,vi=new V,xs=new V,vs=new V,jh=new V,ol=new V,ll=new V,cl=new V,dr=!1,es=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Zn.subVectors(s,t),xi.subVectors(n,t),rl.subVectors(e,t);let h=Zn.dot(Zn),o=Zn.dot(xi),l=Zn.dot(rl),r=xi.dot(xi),c=xi.dot(rl),u=h*r-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,f=(r*l-o*c)*d,g=(h*c-o*l)*d;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,n,s,a,h,o,l){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(e,t,n,s,a,h,o,l)}static getInterpolation(e,t,n,s,a,h,o,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vi.x),l.addScaledVector(h,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),xi.subVectors(e,t),Zn.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Zn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,h,o;xs.subVectors(s,n),vs.subVectors(a,n),ol.subVectors(e,n);let l=xs.dot(ol),r=vs.dot(ol);if(l<=0&&r<=0)return t.copy(n);ll.subVectors(e,s);let c=xs.dot(ll),u=vs.dot(ll);if(c>=0&&u<=c)return t.copy(s);let d=l*u-c*r;if(d<=0&&l>=0&&c<=0)return h=l/(l-c),t.copy(n).addScaledVector(xs,h);cl.subVectors(e,a);let f=xs.dot(cl),g=vs.dot(cl);if(g>=0&&f<=g)return t.copy(a);let v=f*r-l*g;if(v<=0&&r>=0&&g<=0)return o=r/(r-g),t.copy(n).addScaledVector(vs,o);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return jh.subVectors(a,s),o=(u-c)/(u-c+(f-g)),t.copy(s).addScaledVector(jh,o);let p=1/(m+v+d);return h=v*p,o=d*p,t.copy(n).addScaledVector(xs,h).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},n0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},pr={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Of(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,h=2*n-a;this.r=hl(h,a,e+1/3),this.g=hl(h,a,e),this.b=hl(h,a,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,h=s[1],o=s[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],h=a.length;if(h===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(h===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=n0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return vt.fromWorkingColorSpace(pn.copy(this),e),Math.round(ln(pn.r*255,0,255))*65536+Math.round(ln(pn.g*255,0,255))*256+Math.round(ln(pn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,a=pn.b,h=Math.max(n,s,a),o=Math.min(n,s,a),l,r,c=(o+h)/2;if(o===h)l=0,r=0;else{let u=h-o;switch(r=c<=.5?u/(h+o):u/(2-h-o),h){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=r,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=wt){vt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(pr);let n=Jo(Ii.h,pr.h,t),s=Jo(Ii.s,pr.s,t),a=Jo(Ii.l,pr.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new de;de.NAMES=n0;var jf=0,ei=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Us,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let h=[];for(let o in a){let l=a[o];delete l.metadata,h.push(l)}return h}if(t){let a=s(e.textures),h=s(e.images);a.length>0&&(n.textures=a),h.length>0&&(n.images=h)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},en=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Kt=new V,mr=new he,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),a=Tt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}};var jr=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Kf=0,Nn=new $e,ul=new Yt,ys=new V,In=new Qn,ha=new Qn,rn=new V,yt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?Kr:jr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];In.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let a=0,h=t.length;a<h;a++){let o=t[a];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(In.min,ha.min),In.expandByPoint(rn),rn.addVectors(In.max,ha.max),In.expandByPoint(rn)):(In.expandByPoint(ha.min),In.expandByPoint(ha.max))}In.getCenter(n);let s=0;for(let a=0,h=e.count;a<h;a++)rn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let a=0,h=t.length;a<h;a++){let o=t[a],l=this.morphTargetsRelative;for(let r=0,c=o.count;r<c;r++)rn.fromBufferAttribute(o,r),l&&(ys.fromBufferAttribute(e,r),rn.add(ys)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,a=t.normal.array,h=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,r=[],c=[];for(let S=0;S<o;S++)r[S]=new V,c[S]=new V;let u=new V,d=new V,f=new V,g=new he,v=new he,m=new he,p=new V,y=new V;function _(S,N,H){u.fromArray(s,S*3),d.fromArray(s,N*3),f.fromArray(s,H*3),g.fromArray(h,S*2),v.fromArray(h,N*2),m.fromArray(h,H*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);let F=1/(v.x*m.y-m.x*v.y);isFinite(F)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(F),y.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(F),r[S].add(p),r[N].add(p),r[H].add(p),c[S].add(y),c[N].add(y),c[H].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,N=b.length;S<N;++S){let H=b[S],F=H.start,T=H.count;for(let C=F,E=F+T;C<E;C+=3)_(n[C+0],n[C+1],n[C+2])}let L=new V,R=new V,I=new V,B=new V;function w(S){I.fromArray(a,S*3),B.copy(I);let N=r[S];L.copy(N),L.sub(I.multiplyScalar(I.dot(N))).normalize(),R.crossVectors(B,N);let F=R.dot(c[S])<0?-1:1;l[S*4]=L.x,l[S*4+1]=L.y,l[S*4+2]=L.z,l[S*4+3]=F}for(let S=0,N=b.length;S<N;++S){let H=b[S],F=H.start,T=H.count;for(let C=F,E=F+T;C<E;C+=3)w(n[C+0]),w(n[C+1]),w(n[C+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new V,a=new V,h=new V,o=new V,l=new V,r=new V,c=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),h.fromBufferAttribute(t,m),c.subVectors(h,a),u.subVectors(s,a),c.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),r.fromBufferAttribute(n,m),o.add(c),l.add(c),r.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,r.x,r.y,r.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),h.fromBufferAttribute(t,d+2),c.subVectors(h,a),u.subVectors(s,a),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let r=o.array,c=o.itemSize,u=o.normalized,d=new r.constructor(l.length*c),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[g++]=r[f++]}return new Ft(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],r=e(l,n);t.setAttribute(o,r)}let a=this.morphAttributes;for(let o in a){let l=[],r=a[o];for(let c=0,u=r.length;c<u;c++){let d=r[c],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let h=this.groups;for(let o=0,l=h.length;o<l;o++){let r=h[o];t.addGroup(r.start,r.count,r.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let r in l)l[r]!==void 0&&(e[r]=l[r]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let r=n[l];e.data.attributes[l]=r.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let r=this.morphAttributes[l],c=[];for(let u=0,d=r.length;u<d;u++){let f=r[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let r in s){let c=s[r];this.setAttribute(r,c.clone(t))}let a=e.morphAttributes;for(let r in a){let c=[],u=a[r];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[r]=c}this.morphTargetsRelative=e.morphTargetsRelative;let h=e.groups;for(let r=0,c=h.length;r<c;r++){let u=h[r];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new $e,Zi=new Hs,gr=new Si,Qh=new V,_s=new V,bs=new V,Ms=new V,fl=new V,xr=new V,vr=new he,yr=new he,_r=new he,eu=new V,tu=new V,nu=new V,br=new V,Mr=new V,Le=class extends Yt{constructor(e=new yt,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,h=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){xr.set(0,0,0);for(let l=0,r=a.length;l<r;l++){let c=o[l],u=a[l];c!==0&&(fl.fromBufferAttribute(u,e),h?xr.addScaledVector(fl,c):xr.addScaledVector(fl.sub(t),c))}t.add(xr)}return t}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(a),Zi.copy(e.ray).recast(e.near),!(gr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(gr,Qh)===null||Zi.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Kh.copy(a).invert(),Zi.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,a=this.geometry,h=this.material,o=a.index,l=a.attributes.position,r=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(h))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=h[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=_;b<L;b+=3){let R=o.getX(b),I=o.getX(b+1),B=o.getX(b+2);s=wr(this,p,e,n,r,c,u,R,I,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=wr(this,h,e,n,r,c,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(h))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=h[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,L=_;b<L;b+=3){let R=b,I=b+1,B=b+2;s=wr(this,p,e,n,r,c,u,R,I,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let y=m,_=m+1,b=m+2;s=wr(this,h,e,n,r,c,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qf(i,e,t,n,s,a,h,o){let l;if(e.side===mn?l=n.intersectTriangle(h,a,s,!0,o):l=n.intersectTriangle(s,a,h,e.side===Fi,o),l===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);let r=t.ray.origin.distanceTo(Mr);return r<t.near||r>t.far?null:{distance:r,point:Mr.clone(),object:i}}function wr(i,e,t,n,s,a,h,o,l,r){i.getVertexPosition(o,_s),i.getVertexPosition(l,bs),i.getVertexPosition(r,Ms);let c=Qf(i,e,t,n,_s,bs,Ms,br);if(c){s&&(vr.fromBufferAttribute(s,o),yr.fromBufferAttribute(s,l),_r.fromBufferAttribute(s,r),c.uv=es.getInterpolation(br,_s,bs,Ms,vr,yr,_r,new he)),a&&(vr.fromBufferAttribute(a,o),yr.fromBufferAttribute(a,l),_r.fromBufferAttribute(a,r),c.uv1=es.getInterpolation(br,_s,bs,Ms,vr,yr,_r,new he),c.uv2=c.uv1),h&&(eu.fromBufferAttribute(h,o),tu.fromBufferAttribute(h,l),nu.fromBufferAttribute(h,r),c.normal=es.getInterpolation(br,_s,bs,Ms,eu,tu,nu,new V),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:r,normal:new V,materialIndex:0};es.getNormal(_s,bs,Ms,u.normal),c.face=u}return c}var Mn=class i extends yt{constructor(e=1,t=1,n=1,s=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:h};let o=this;s=Math.floor(s),a=Math.floor(a),h=Math.floor(h);let l=[],r=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,h,a,0),g("z","y","x",1,-1,n,t,-e,h,a,1),g("x","z","y",1,1,e,n,t,s,h,2),g("x","z","y",1,-1,e,n,-t,s,h,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2));function g(v,m,p,y,_,b,L,R,I,B,w){let S=b/I,N=L/B,H=b/2,F=L/2,T=R/2,C=I+1,E=B+1,A=0,D=0,U=new V;for(let z=0;z<E;z++){let W=z*N-F;for(let Y=0;Y<C;Y++){let $=Y*S-H;U[v]=$*y,U[m]=W*_,U[p]=T,r.push(U.x,U.y,U.z),U[v]=0,U[m]=0,U[p]=R>0?1:-1,c.push(U.x,U.y,U.z),u.push(Y/I),u.push(1-z/B),A+=1}}for(let z=0;z<B;z++)for(let W=0;W<I;W++){let Y=d+W+C*z,$=d+W+C*(z+1),K=d+(W+1)+C*(z+1),ae=d+(W+1)+C*z;l.push(Y,$,ae),l.push($,K,ae),D+=6}o.addGroup(f,D,w),f+=D,d+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=Vs(i[t]);for(let s in n)e[s]=n[s]}return e}function ed(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function i0(i){return i.getRenderTarget()===null?i.outputColorSpace:vt.workingColorSpace}var Hi={clone:Vs,merge:_n},td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=td,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let h=this.uniforms[s].value;h&&h.isTexture?t.uniforms[s]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?t.uniforms[s]={type:"c",value:h.getHex()}:h&&h.isVector2?t.uniforms[s]={type:"v2",value:h.toArray()}:h&&h.isVector3?t.uniforms[s]={type:"v3",value:h.toArray()}:h&&h.isVector4?t.uniforms[s]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?t.uniforms[s]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?t.uniforms[s]={type:"m4",value:h.toArray()}:t.uniforms[s]={value:h}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cn=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,h){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,h=this.view;if(this.view!==null&&this.view.enabled){let l=h.fullWidth,r=h.fullHeight;a+=h.offsetX*s/l,t-=h.offsetY*n/r,s*=h.width/l,n*=h.height/r}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Ss=1,Fl=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(ws,Ss,e,t);s.layers=this.layers,this.add(s);let a=new cn(ws,Ss,e,t);a.layers=this.layers,this.add(a);let h=new cn(ws,Ss,e,t);h.layers=this.layers,this.add(h);let o=new cn(ws,Ss,e,t);o.layers=this.layers,this.add(o);let l=new cn(ws,Ss,e,t);l.layers=this.layers,this.add(l);let r=new cn(ws,Ss,e,t);r.layers=this.layers,this.add(r)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,h,o,l]=t;for(let r of t)this.remove(r);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let r of t)this.add(r),r.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,h,o,l,r,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,h),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,r),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},eo=class extends Bn{constructor(e,t,n,s,a,h,o,l,r,c){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,a,h,o,l,r,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ol=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(xa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===is?wt:On),this.texture=new eo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mn(5,5,5),a=new Gt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ci});a.uniforms.tEquirect.value=t;let h=new Le(s,a),o=t.minFilter;return t.minFilter===Ma&&(t.minFilter=Fn),new Fl(1,10,this).update(e,h),t.minFilter=o,h.geometry.dispose(),h.material.dispose(),this}clear(e,t,n,s){let a=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(t,n,s);e.setRenderTarget(a)}},dl=new V,id=new V,sd=new et,Jn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dl.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sd.getNormalMatrix(e),s=this.coplanarPoint(dl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Si,Sr=new V,Sa=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,a=new Jn,h=new Jn){this.planes=[e,t,n,s,a,h]}set(e,t,n,s,a,h){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(h),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,s=e.elements,a=s[0],h=s[1],o=s[2],l=s[3],r=s[4],c=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-a,d-r,m-f,b-p).normalize(),n[1].setComponents(l+a,d+r,m+f,b+p).normalize(),n[2].setComponents(l+h,d+c,m+g,b+y).normalize(),n[3].setComponents(l-h,d-c,m-g,b-y).normalize(),n[4].setComponents(l-o,d-u,m-v,b-_).normalize(),t===bi)n[5].setComponents(l+o,d+u,m+v,b+_).normalize();else if(t===Xr)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sr.x=s.normal.x>0?e.max.x:e.min.x,Sr.y=s.normal.y>0?e.max.y:e.min.y,Sr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function s0(){let i=null,e=!1,t=null,n=null;function s(a,h){t(a,h),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ad(i,e){let t=e.isWebGL2,n=new WeakMap;function s(r,c){let u=r.array,d=r.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(c,g),i.bufferData(c,u,d),r.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(r.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:r.version,size:f}}function a(r,c,u){let d=c.array,f=c._updateRange,g=c.updateRanges;if(i.bindBuffer(u,r),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function h(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);let c=n.get(r);c&&(i.deleteBuffer(c.buffer),n.delete(r))}function l(r,c){if(r.isGLBufferAttribute){let d=n.get(r);(!d||d.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}r.isInterleavedBufferAttribute&&(r=r.data);let u=n.get(r);if(u===void 0)n.set(r,s(r,c));else if(u.version<r.version){if(u.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,r,c),u.version=r.version}}return{get:h,remove:o,update:l}}var Bi=class i extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,h=t/2,o=Math.floor(n),l=Math.floor(s),r=o+1,c=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<c;p++){let y=p*d-h;for(let _=0;_<r;_++){let b=_*u-a;g.push(b,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+r*p,b=y+r*(p+1),L=y+1+r*(p+1),R=y+1+r*p;f.push(_,b,R),f.push(b,L,R)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,_d=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`
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
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Mm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Sm=`#define MATCAP
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Im=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:rd,alphahash_pars_fragment:od,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:dd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:yd,bumpmap_pars_fragment:_d,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Sd,color_fragment:Ed,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Id,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:zd,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:kd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Qd,envmap_vertex:Vd,fog_vertex:Gd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:$d,lightmap_fragment:Yd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:jd,lights_pars_begin:Kd,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:fp,map_fragment:dp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphcolor_vertex:yp,morphnormal_vertex:_p,morphtarget_pars_vertex:bp,morphtarget_vertex:Mp,normal_fragment_begin:wp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:Tp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Ip,opaque_fragment:Dp,packing:Up,premultiplied_alpha_fragment:zp,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:$p,skinnormal_vertex:Yp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:jp,tonemapping_pars_fragment:Kp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:am,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:_m,meshlambert_vert:bm,meshlambert_frag:Mm,meshmatcap_vert:wm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Lm,meshtoon_vert:Pm,meshtoon_frag:Im,points_vert:Dm,points_frag:Um,shadow_vert:zm,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},ge={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},li={basic:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:_n([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:_n([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:_n([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new de(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:_n([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:_n([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:_n([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:_n([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:_n([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:_n([ge.common,ge.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:_n([ge.lights,ge.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Er={r:0,b:0,g:0};function Bm(i,e,t,n,s,a,h){let o=new de(0),l=a===!0?0:1,r,c,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,h):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,h),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===_o)?(c===void 0&&(c=new Le(new Mn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Vs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=vt.getTransfer(_.colorSpace)!==Et,(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(r===void 0&&(r=new Le(new Bi(2,2),new Gt({name:"BackgroundMaterial",uniforms:Vs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),r.geometry.deleteAttribute("normal"),Object.defineProperty(r.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(r)),r.material.uniforms.t2D.value=_,r.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,r.material.toneMapped=vt.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),r.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(r.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),r.layers.enableAll(),m.unshift(r,r.geometry,r.material,0,0,null))}function v(m,p){m.getRGB(Er,i0(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,p,h)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function km(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),h=n.isWebGL2||a!==null,o={},l=m(null),r=l,c=!1;function u(T,C,E,A,D){let U=!1;if(h){let z=v(A,E,C);r!==z&&(r=z,f(r.object)),U=p(T,A,E,D),U&&y(T,A,E,D)}else{let z=C.wireframe===!0;(r.geometry!==A.id||r.program!==E.id||r.wireframe!==z)&&(r.geometry=A.id,r.program=E.id,r.wireframe=z,U=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||c)&&(c=!1,B(T,C,E,A),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function f(T){return n.isWebGL2?i.bindVertexArray(T):a.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?i.deleteVertexArray(T):a.deleteVertexArrayOES(T)}function v(T,C,E){let A=E.wireframe===!0,D=o[T.id];D===void 0&&(D={},o[T.id]=D);let U=D[C.id];U===void 0&&(U={},D[C.id]=U);let z=U[A];return z===void 0&&(z=m(d()),U[A]=z),z}function m(T){let C=[],E=[],A=[];for(let D=0;D<s;D++)C[D]=0,E[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:E,attributeDivisors:A,object:T,attributes:{},index:null}}function p(T,C,E,A){let D=r.attributes,U=C.attributes,z=0,W=E.getAttributes();for(let Y in W)if(W[Y].location>=0){let K=D[Y],ae=U[Y];if(ae===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;z++}return r.attributesNum!==z||r.index!==A}function y(T,C,E,A){let D={},U=C.attributes,z=0,W=E.getAttributes();for(let Y in W)if(W[Y].location>=0){let K=U[Y];K===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),D[Y]=ae,z++}r.attributes=D,r.attributesNum=z,r.index=A}function _(){let T=r.newAttributes;for(let C=0,E=T.length;C<E;C++)T[C]=0}function b(T){L(T,0)}function L(T,C){let E=r.newAttributes,A=r.enabledAttributes,D=r.attributeDivisors;E[T]=1,A[T]===0&&(i.enableVertexAttribArray(T),A[T]=1),D[T]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,C),D[T]=C)}function R(){let T=r.newAttributes,C=r.enabledAttributes;for(let E=0,A=C.length;E<A;E++)C[E]!==T[E]&&(i.disableVertexAttribArray(E),C[E]=0)}function I(T,C,E,A,D,U,z){z===!0?i.vertexAttribIPointer(T,C,E,D,U):i.vertexAttribPointer(T,C,E,A,D,U)}function B(T,C,E,A){if(n.isWebGL2===!1&&(T.isInstancedMesh||A.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let D=A.attributes,U=E.getAttributes(),z=C.defaultAttributeValues;for(let W in U){let Y=U[W];if(Y.location>=0){let $=D[W];if($===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){let K=$.normalized,ae=$.itemSize,J=t.get($);if(J===void 0)continue;let ue=J.buffer,Te=J.type,Be=J.bytesPerElement,Ie=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||$.gpuType===qu);if($.isInterleavedBufferAttribute){let Ze=$.data,j=Ze.stride,Ht=$.offset;if(Ze.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Y.locationSize;Ne++)L(Y.location+Ne,Ze.meshPerAttribute);T.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let Ne=0;Ne<Y.locationSize;Ne++)b(Y.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Ne=0;Ne<Y.locationSize;Ne++)I(Y.location+Ne,ae/Y.locationSize,Te,K,j*Be,(Ht+ae/Y.locationSize*Ne)*Be,Ie)}else{if($.isInstancedBufferAttribute){for(let Ze=0;Ze<Y.locationSize;Ze++)L(Y.location+Ze,$.meshPerAttribute);T.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ze=0;Ze<Y.locationSize;Ze++)b(Y.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Ze=0;Ze<Y.locationSize;Ze++)I(Y.location+Ze,ae/Y.locationSize,Te,K,ae*Be,ae/Y.locationSize*Ze*Be,Ie)}}else if(z!==void 0){let K=z[W];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(Y.location,K);break;case 3:i.vertexAttrib3fv(Y.location,K);break;case 4:i.vertexAttrib4fv(Y.location,K);break;default:i.vertexAttrib1fv(Y.location,K)}}}}R()}function w(){H();for(let T in o){let C=o[T];for(let E in C){let A=C[E];for(let D in A)g(A[D].object),delete A[D];delete C[E]}delete o[T]}}function S(T){if(o[T.id]===void 0)return;let C=o[T.id];for(let E in C){let A=C[E];for(let D in A)g(A[D].object),delete A[D];delete C[E]}delete o[T.id]}function N(T){for(let C in o){let E=o[C];if(E[T.id]===void 0)continue;let A=E[T.id];for(let D in A)g(A[D].object),delete A[D];delete E[T.id]}}function H(){F(),c=!0,r!==l&&(r=l,f(r.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:b,disableUnusedAttributes:R}}function Hm(i,e,t,n){let s=n.isWebGL2,a;function h(c){a=c}function o(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,c,u,d),t.update(u,a,d)}function r(c,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{f.multiDrawArraysWEBGL(a,c,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,a,1)}}this.setMode=h,this.render=o,this.renderInstances=l,this.renderMultiDraw=r}function Vm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let r=h||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=h||e.has("OES_texture_float"),L=_&&b,R=h?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:r,getMaxAnisotropy:s,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:R}}function Gm(i){let e=this,t=null,n=0,s=!1,a=!1,h=new Jn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?c(null):r();else{let y=a?0:n,_=y*4,b=p.clippingState||null;l.value=b,b=c(g,d,_,f);for(let L=0;L!==_;++L)b[L]=t[L];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function r(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==v;++_,b+=4)h.copy(u[_]).applyMatrix4(y,o),h.normal.toArray(m,b),m[b+3]=h.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Wm(i){let e=new WeakMap;function t(h,o){return o===Rl?h.mapping=Fs:o===Cl&&(h.mapping=Os),h}function n(h){if(h&&h.isTexture){let o=h.mapping;if(o===Rl||o===Cl)if(e.has(h)){let l=e.get(h).texture;return t(l,h.mapping)}else{let l=h.image;if(l&&l.height>0){let r=new Ol(l.height/2);return r.fromEquirectangularTexture(i,h),e.set(h,r),h.addEventListener("dispose",s),t(r.texture,h.mapping)}else return null}}return h}function s(h){let o=h.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var Gs=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,h=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let r=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=r*this.view.offsetX,h=a+r*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,h,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ps=4,iu=[.125,.215,.35,.446,.526,.582],Qi=20,pl=new Gs,su=new de,ml=null,gl=0,xl=0,ji=(1+Math.sqrt(5))/2,Es=1/ji,au=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ji,Es),new V(0,ji,-Es),new V(Es,0,ji),new V(-Es,0,ji),new V(ji,Es,0),new V(-ji,Es,0)],to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,xl),e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Dn,format:Kn,colorSpace:wi,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(a)),this._blurMaterial=qm(a,e,t)}return s}_compileMaterial(e){let t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s){let o=new cn(90,1,t,n),l=[1,-1,1,1,1,1],r=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(su),c.toneMapping=zi,c.autoClear=!1;let f=new en({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Le(new Mn,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(su),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(r[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,r[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,r[p]));let _=this._cubeSize;Tr(s,y*_,p>2?_:0,_,_),c.setRenderTarget(s),v&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let a=s?this._cubemapMaterial:this._equirectMaterial,h=new Le(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(h,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),h=au[(s-1)%au.length];this._blur(e,s-1,s,a,h)}t.autoClear=n}_blur(e,t,n,s,a){let h=this._pingPongRenderTarget;this._halfBlur(e,h,t,n,s,"latitudinal",a),this._halfBlur(h,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,h,o){let l=this._renderer,r=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Le(this._lodPlanes[s],r),d=r.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),v=a/g,m=isFinite(a)?1+Math.floor(c*v):Qi;m>Qi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);let p=[],y=0;for(let I=0;I<Qi;++I){let B=I/v,w=Math.exp(-B*B/2);p.push(w),I===0?y+=w:I<m&&(y+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=h==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],L=3*b*(s>_-Ps?s-_+Ps:0),R=4*(this._cubeSize-b);Tr(t,L,R,3*b,2*b),l.setRenderTarget(t),l.render(u,pl)}};function Xm(i){let e=[],t=[],n=[],s=i,a=i-Ps+1+iu.length;for(let h=0;h<a;h++){let o=Math.pow(2,s);t.push(o);let l=1/o;h>i-Ps?l=iu[h-i+Ps-1]:h===0&&(l=0),n.push(l);let r=1/(o-2),c=-r,u=1+r,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,B=R>2?0:-1,w=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];y.set(w,v*g*R),_.set(d,m*g*R);let S=[R,R,R,R,R,R];b.set(S,p*g*R)}let L=new yt;L.setAttribute("position",new Ft(y,v)),L.setAttribute("uv",new Ft(_,m)),L.setAttribute("faceIndex",new Ft(b,p)),e.push(L),s>Ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qm(i,e,t){let n=new Float32Array(Qi),s=new V(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ou(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function lu(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,r=l===Rl||l===Cl,c=l===Fs||l===Os;if(r||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new to(i)),u=r?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(r&&u&&u.height>0||c&&u&&s(u)){t===null&&(t=new to(i));let d=r?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function s(o){let l=0,r=6;for(let c=0;c<r;c++)o[c]!==void 0&&l++;return l===r}function a(o){let l=o.target;l.removeEventListener("dispose",a);let r=e.get(l);r!==void 0&&(e.delete(l),r.dispose())}function h(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:h}}function Ym(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){let s={},a=new WeakMap;function h(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",h),delete s[d.id];let f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",h),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function r(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let y=f.array;v=f.version;for(let _=0,b=y.length;_<b;_+=3){let L=y[_+0],R=y[_+1],I=y[_+2];d.push(L,R,R,I,I,L)}}else if(g!==void 0){let y=g.array;v=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let L=_+0,R=_+1,I=_+2;d.push(L,R,R,I,I,L)}}else return;let m=new(t0(d)?Kr:jr)(d,1);m.version=v;let p=a.get(u);p&&e.remove(p),a.set(u,m)}function c(u){let d=a.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&r(u)}else r(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Jm(i,e,t,n){let s=n.isWebGL2,a;function h(f){a=f}let o,l;function r(f){o=f.type,l=f.bytesPerElement}function c(f,g){i.drawElements(a,g,o,f*l),t.update(g,a,1)}function u(f,g,v){if(v===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](a,g,o,f*l,v),t.update(g,a,v)}function d(f,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(a,g,0,o,f,0,v);let p=0;for(let y=0;y<v;y++)p+=g[y];t.update(p,a,1)}}this.setMode=h,this.setIndex=r,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function jm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,h,o){switch(t.calls++,h){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,e){return i[0]-e[0]}function Qm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eg(i,e,t){let n={},s=new Float32Array(8),a=new WeakMap,h=new zt,o=[];for(let r=0;r<8;r++)o[r]=[r,0];function l(r,c,u){let d=r.morphTargetInfluences;if(e.isWebGL2===!0){let f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=f!==void 0?f.length:0,v=a.get(c);if(v===void 0||v.count!==g){let T=function(){H.dispose(),a.delete(c),c.removeEventListener("dispose",T)};v!==void 0&&v.texture.dispose();let y=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],I=c.morphAttributes.color||[],B=0;y===!0&&(B=1),_===!0&&(B=2),b===!0&&(B=3);let w=c.attributes.position.count*B,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let N=new Float32Array(w*S*4*g),H=new Zr(N,w,S,g);H.type=Ui,H.needsUpdate=!0;let F=B*4;for(let C=0;C<g;C++){let E=L[C],A=R[C],D=I[C],U=w*S*4*C;for(let z=0;z<E.count;z++){let W=z*F;y===!0&&(h.fromBufferAttribute(E,z),N[U+W+0]=h.x,N[U+W+1]=h.y,N[U+W+2]=h.z,N[U+W+3]=0),_===!0&&(h.fromBufferAttribute(A,z),N[U+W+4]=h.x,N[U+W+5]=h.y,N[U+W+6]=h.z,N[U+W+7]=0),b===!0&&(h.fromBufferAttribute(D,z),N[U+W+8]=h.x,N[U+W+9]=h.y,N[U+W+10]=h.z,N[U+W+11]=D.itemSize===4?h.w:1)}}v={count:g,texture:H,size:new he(w,S)},a.set(c,v),c.addEventListener("dispose",T)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,g=n[c.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[c.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(Qm);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Km);let v=c.morphAttributes.position,m=c.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=o[_],L=b[0],R=b[1];L!==Number.MAX_SAFE_INTEGER&&R?(v&&c.getAttribute("morphTarget"+_)!==v[L]&&c.setAttribute("morphTarget"+_,v[L]),m&&c.getAttribute("morphNormal"+_)!==m[L]&&c.setAttribute("morphNormal"+_,m[L]),s[_]=R,p+=R):(v&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),m&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),s[_]=0)}let y=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function tg(i,e,t,n){let s=new WeakMap;function a(l){let r=n.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==r&&(e.update(u),s.set(u,r)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==r&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,r))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==r&&(d.update(),s.set(d,r))}return u}function h(){s=new WeakMap}function o(l){let r=l.target;r.removeEventListener("dispose",o),t.remove(r.instanceMatrix),r.instanceColor!==null&&t.remove(r.instanceColor)}return{update:a,dispose:h}}var no=class extends Bn{constructor(e,t,n,s,a,h,o,l,r,c){if(c=c!==void 0?c:ns,c!==ns&&c!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ns&&(n=Di),n===void 0&&c===ks&&(n=ts),super(null,s,a,h,o,l,c,n,r),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},a0=new Bn,r0=new no(1,1);r0.compareFunction=e0;var o0=new Zr,l0=new Nl,c0=new eo,cu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=cu[s];if(a===void 0&&(a=new Float32Array(s),cu[s]=a),e!==0){n.toArray(a,0);for(let h=1,o=0;h!==e;++h)o+=t,i[h].toArray(a,o)}return a}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;du.set(n),i.uniformMatrix2fv(this.addr,!1,du),nn(t,n)}}function og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),nn(t,n)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),nn(t,n)}}function cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a=this.type===i.SAMPLER_2D_SHADOW?r0:a0;t.setTexture2D(e||a,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||l0,s)}function yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||c0,s)}function _g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||o0,s)}function bg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return ag;case 35674:return rg;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return _g}}function Mg(i,e){i.uniform1fv(this.addr,e)}function wg(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function Sg(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Eg(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function Tg(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ag(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rg(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cg(i,e){i.uniform1iv(this.addr,e)}function Lg(i,e){i.uniform2iv(this.addr,e)}function Pg(i,e){i.uniform3iv(this.addr,e)}function Ig(i,e){i.uniform4iv(this.addr,e)}function Dg(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function zg(i,e){i.uniform3uiv(this.addr,e)}function Ng(i,e){i.uniform4uiv(this.addr,e)}function Fg(i,e,t){let n=this.cache,s=e.length,a=Mo(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let h=0;h!==s;++h)t.setTexture2D(e[h]||a0,a[h])}function Og(i,e,t){let n=this.cache,s=e.length,a=Mo(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let h=0;h!==s;++h)t.setTexture3D(e[h]||l0,a[h])}function Bg(i,e,t){let n=this.cache,s=e.length,a=Mo(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let h=0;h!==s;++h)t.setTextureCube(e[h]||c0,a[h])}function kg(i,e,t){let n=this.cache,s=e.length,a=Mo(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let h=0;h!==s;++h)t.setTexture2DArray(e[h]||o0,a[h])}function Hg(i){switch(i){case 5126:return Mg;case 35664:return wg;case 35665:return Sg;case 35666:return Eg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Lg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ug;case 36295:return zg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}var Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}},kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,h=s.length;a!==h;++a){let o=s[a];o.setValue(e,t[o.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function Vg(i,e,t){let n=i.name,s=n.length;for(vl.lastIndex=0;;){let a=vl.exec(n),h=vl.lastIndex,o=a[1],l=a[2]==="]",r=a[3];if(l&&(o=o|0),r===void 0||r==="["&&h+2===s){pu(t,r===void 0?new Bl(o,i,e):new kl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Hl(o),pu(t,u)),t=u}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),h=e.getUniformLocation(t,a.name);Vg(a,h,this)}}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,h=t.length;a!==h;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let h=e[s];h.id in t&&n.push(h)}return n}};function mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gg=37297,Wg=0;function Xg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let h=s;h<a;h++){let o=h+1;n.push(`${o===e?">":" "} ${o}: ${t[h]}`)}return n.join(`
`)}function qg(i){let e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i),n;switch(e===t?n="":e===Wr&&t===Gr?n="LinearDisplayP3ToLinearSRGB":e===Gr&&t===Wr&&(n="LinearSRGBToLinearDisplayP3"),i){case wi:case bo:return[n,"LinearTransferOETF"];case wt:case Ac:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let h=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xg(i.getShaderSource(e),h)}else return s}function $g(i,e){let t=qg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yg(i,e){let t;switch(e){case bc:t="Linear";break;case Mc:t="Reinhard";break;case wc:t="OptimizedCineon";break;case ka:t="ACESFilmic";break;case Sc:t="AgX";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function jg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),h=a.name,o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[h]={type:a.type,location:i.getAttribLocation(e,h),locationSize:o}}return t}function Is(i){return i!==""}function xu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(Qg,tx)}var ex=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tx(i,e){let t=Qe[e];if(t===void 0){let n=ex.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(nx,ix)}function ix(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function _u(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function ox(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case xf:e="ENVMAP_BLENDING_ADD";break}return e}function lx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cx(i,e,t,n){let s=i.getContext(),a=t.defines,h=t.vertexShader,o=t.fragmentShader,l=sx(t),r=ax(t),c=rx(t),u=ox(t),d=lx(t),f=t.isWebGL2?"":Zg(t),g=Jg(t),v=jg(a),m=s.createProgram(),p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Is).join(`
`),y.length>0&&(y+=`
`)):(p=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),y=[f,_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+r:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==zi?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),h=Vl(h),h=xu(h,t),h=vu(h,t),o=Vl(o),o=xu(o,t),o=vu(o,t),h=yu(h),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+p+h,L=_+y+o,R=mu(s,s.VERTEX_SHADER,b),I=mu(s,s.FRAGMENT_SHADER,L);s.attachShader(m,R),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function B(H){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(m).trim(),T=s.getShaderInfoLog(R).trim(),C=s.getShaderInfoLog(I).trim(),E=!0,A=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(E=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,I);else{let D=gu(s,R,"vertex"),U=gu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+D+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(T===""||C==="")&&(A=!1);A&&(H.diagnostics={runnable:E,programLog:F,vertexShader:{log:T,prefix:p},fragmentShader:{log:C,prefix:y}})}s.deleteShader(R),s.deleteShader(I),w=new Ns(s,m),S=Kg(s,m)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let S;this.getAttributes=function(){return S===void 0&&B(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,Gg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=I,this}var hx=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),h=this._getShaderCacheForMaterial(e);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}};function ux(i,e,t,n,s,a,h){let o=new wa,l=new Gl,r=[],c=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,S,N,H,F){let T=H.fog,C=F.geometry,E=w.isMeshStandardMaterial?H.environment:null,A=(w.isMeshStandardMaterial?t:e).get(w.envMap||E),D=A&&A.mapping===_o?A.image.height:null,U=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,W=z!==void 0?z.length:0,Y=0;C.morphAttributes.position!==void 0&&(Y=1),C.morphAttributes.normal!==void 0&&(Y=2),C.morphAttributes.color!==void 0&&(Y=3);let $,K,ae,J;if(U){let xn=li[U];$=xn.vertexShader,K=xn.fragmentShader}else $=w.vertexShader,K=w.fragmentShader,l.update(w),ae=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let ue=i.getRenderTarget(),Te=F.isInstancedMesh===!0,Be=F.isBatchedMesh===!0,Ie=!!w.map,Ze=!!w.matcap,j=!!A,Ht=!!w.aoMap,Ne=!!w.lightMap,Xe=!!w.bumpMap,oe=!!w.normalMap,O=!!w.displacementMap,G=!!w.emissiveMap,M=!!w.metalnessMap,P=!!w.roughnessMap,q=w.anisotropy>0,ie=w.clearcoat>0,le=w.iridescence>0,ce=w.sheen>0,we=w.transmission>0,xe=q&&!!w.anisotropyMap,Ae=ie&&!!w.clearcoatMap,Oe=ie&&!!w.clearcoatNormalMap,Je=ie&&!!w.clearcoatRoughnessMap,ee=le&&!!w.iridescenceMap,Ce=le&&!!w.iridescenceThicknessMap,Fe=ce&&!!w.sheenColorMap,Re=ce&&!!w.sheenRoughnessMap,_e=!!w.specularMap,Se=!!w.specularColorMap,Ve=!!w.specularIntensityMap,Ye=we&&!!w.transmissionMap,Dt=we&&!!w.thicknessMap,je=!!w.gradientMap,me=!!w.alphaMap,X=w.alphaTest>0,ve=!!w.alphaHash,ye=!!w.extensions,ke=!!C.attributes.uv1,De=!!C.attributes.uv2,Mt=!!C.attributes.uv3,xt=zi;return w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(xt=i.toneMapping),{isWebGL2:c,shaderID:U,shaderType:w.type,shaderName:w.name,vertexShader:$,fragmentShader:K,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Be,instancing:Te,instancingColor:Te&&F.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:wi,map:Ie,matcap:Ze,envMap:j,envMapMode:j&&A.mapping,envMapCubeUVHeight:D,aoMap:Ht,lightMap:Ne,bumpMap:Xe,normalMap:oe,displacementMap:d&&O,emissiveMap:G,normalMapObjectSpace:oe&&w.normalMapType===Lf,normalMapTangentSpace:oe&&w.normalMapType===Tc,metalnessMap:M,roughnessMap:P,anisotropy:q,anisotropyMap:xe,clearcoat:ie,clearcoatMap:Ae,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Je,iridescence:le,iridescenceMap:ee,iridescenceThicknessMap:Ce,sheen:ce,sheenColorMap:Fe,sheenRoughnessMap:Re,specularMap:_e,specularColorMap:Se,specularIntensityMap:Ve,transmission:we,transmissionMap:Ye,thicknessMap:Dt,gradientMap:je,opaque:w.transparent===!1&&w.blending===Us,alphaMap:me,alphaTest:X,alphaHash:ve,combine:w.combine,mapUv:Ie&&v(w.map.channel),aoMapUv:Ht&&v(w.aoMap.channel),lightMapUv:Ne&&v(w.lightMap.channel),bumpMapUv:Xe&&v(w.bumpMap.channel),normalMapUv:oe&&v(w.normalMap.channel),displacementMapUv:O&&v(w.displacementMap.channel),emissiveMapUv:G&&v(w.emissiveMap.channel),metalnessMapUv:M&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:xe&&v(w.anisotropyMap.channel),clearcoatMapUv:Ae&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(w.sheenRoughnessMap.channel),specularMapUv:_e&&v(w.specularMap.channel),specularColorMapUv:Se&&v(w.specularColorMap.channel),specularIntensityMapUv:Ve&&v(w.specularIntensityMap.channel),transmissionMapUv:Ye&&v(w.transmissionMap.channel),thicknessMapUv:Dt&&v(w.thicknessMap.channel),alphaMapUv:me&&v(w.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(oe||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:De,vertexUv3s:Mt,pointsUvs:F.isPoints===!0&&!!C.attributes.uv&&(Ie||me),fog:!!T,useFog:w.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Y,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ie&&w.map.isVideoTexture===!0&&vt.getTransfer(w.map.colorSpace)===Et,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===St,flipSided:w.side===mn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:ye&&w.extensions.derivatives===!0,extensionFragDepth:ye&&w.extensions.fragDepth===!0,extensionDrawBuffers:ye&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:ye&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ye&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)S.push(N),S.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(S,w),_(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function y(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function b(w){let S=g[w.type],N;if(S){let H=li[S];N=Hi.clone(H.uniforms)}else N=w.uniforms;return N}function L(w,S){let N;for(let H=0,F=r.length;H<F;H++){let T=r[H];if(T.cacheKey===S){N=T,++N.usedTimes;break}}return N===void 0&&(N=new cx(i,S,w,a),r.push(N)),N}function R(w){if(--w.usedTimes===0){let S=r.indexOf(w);r[S]=r[r.length-1],r.pop(),w.destroy()}}function I(w){l.remove(w)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:I,programs:r,dispose:B}}function fx(){let i=new WeakMap;function e(a){let h=i.get(a);return h===void 0&&(h={},i.set(a,h)),h}function t(a){i.delete(a)}function n(a,h,o){i.get(a)[h]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mu(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function h(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){let p=h(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,v,m){let p=h(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function r(u,d){t.length>1&&t.sort(u||dx),n.length>1&&n.sort(d||bu),s.length>1&&s.sort(d||bu)}function c(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:c,sort:r}}function px(){let i=new WeakMap;function e(n,s){let a=i.get(n),h;return a===void 0?(h=new Mu,i.set(n,[h])):s>=a.length?(h=new Mu,a.push(h)):h=a[s],h}function t(){i=new WeakMap}return{get:e,dispose:t}}function mx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new de};break;case"SpotLight":t={position:new V,direction:new V,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xx=0;function vx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yx(i,e){let t=new mx,n=gx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new V);let a=new V,h=new $e,o=new $e;function l(c,u){let d=0,f=0,g=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,b=0,L=0,R=0,I=0,B=0,w=0;c.sort(vx);let S=u===!0?Math.PI:1;for(let H=0,F=c.length;H<F;H++){let T=c[H],C=T.color,E=T.intensity,A=T.distance,D=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=C.r*E*S,f+=C.g*E*S,g+=C.b*E*S;else if(T.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(T.sh.coefficients[U],E);w++}else if(T.isDirectionalLight){let U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity*S),T.castShadow){let z=T.shadow,W=n.get(T);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.directionalShadow[v]=W,s.directionalShadowMap[v]=D,s.directionalShadowMatrix[v]=T.shadow.matrix,b++}s.directional[v]=U,v++}else if(T.isSpotLight){let U=t.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(C).multiplyScalar(E*S),U.distance=A,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,s.spot[p]=U;let z=T.shadow;if(T.map&&(s.spotLightMap[I]=T.map,I++,z.updateMatrices(T),T.castShadow&&B++),s.spotLightMatrix[p]=z.matrix,T.castShadow){let W=n.get(T);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.spotShadow[p]=W,s.spotShadowMap[p]=D,R++}p++}else if(T.isRectAreaLight){let U=t.get(T);U.color.copy(C).multiplyScalar(E),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),s.rectArea[y]=U,y++}else if(T.isPointLight){let U=t.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity*S),U.distance=T.distance,U.decay=T.decay,T.castShadow){let z=T.shadow,W=n.get(T);W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,s.pointShadow[m]=W,s.pointShadowMap[m]=D,s.pointShadowMatrix[m]=T.shadow.matrix,L++}s.point[m]=U,m++}else if(T.isHemisphereLight){let U=t.get(T);U.skyColor.copy(T.color).multiplyScalar(E*S),U.groundColor.copy(T.groundColor).multiplyScalar(E*S),s.hemi[_]=U,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==b||N.numPointShadows!==L||N.numSpotShadows!==R||N.numSpotMaps!==I||N.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=w,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=b,N.numPointShadows=L,N.numSpotShadows=R,N.numSpotMaps=I,N.numLightProbes=w,s.version=xx++)}function r(c,u){let d=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let b=c[y];if(b.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(p),d++}else if(b.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let L=s.rectArea[v];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),o.identity(),h.copy(b.matrixWorld),h.premultiply(p),o.extractRotation(h),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let L=s.point[f];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:r,state:s}}function wu(i,e){let t=new yx(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function h(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function r(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:r,pushLight:h,pushShadow:o}}function _x(i,e){let t=new WeakMap;function n(a,h=0){let o=t.get(a),l;return o===void 0?(l=new wu(i,e),t.set(a,[l])):h>=o.length?(l=new wu(i,e),o.push(l)):l=o[h],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Xl=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
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
}`;function wx(i,e,t){let n=new Sa,s=new he,a=new he,h=new zt,o=new Xl({depthPacking:Cf}),l=new ql,r={},c=t.maxTextureSize,u={[Fi]:mn,[mn]:Fi,[St]:St},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:bx,fragmentShader:Mx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let p=this.type;this.render=function(R,I,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(ci),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let F=p!==yi&&this.type===yi,T=p===yi&&this.type!==yi;for(let C=0,E=R.length;C<E;C++){let A=R[C],D=A.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let U=D.getFrameExtents();if(s.multiply(U),a.copy(D.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(a.x=Math.floor(c/U.x),s.x=a.x*U.x,D.mapSize.x=a.x),s.y>c&&(a.y=Math.floor(c/U.y),s.y=a.y*U.y,D.mapSize.y=a.y)),D.map===null||F===!0||T===!0){let W=this.type!==yi?{minFilter:bn,magFilter:bn}:{};D.map!==null&&D.map.dispose(),D.map=new Qt(s.x,s.y,W),D.map.texture.name=A.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let z=D.getViewportCount();for(let W=0;W<z;W++){let Y=D.getViewport(W);h.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),H.viewport(h),D.updateMatrices(A,W),n=D.getFrustum(),b(I,B,D.camera,A,this.type)}D.isPointLightShadow!==!0&&this.type===yi&&y(D,B),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,N)};function y(R,I){let B=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,B,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,B,f,v,null)}function _(R,I,B,w){let S=null,N=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)S=N;else if(S=B.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let H=S.uuid,F=I.uuid,T=r[H];T===void 0&&(T={},r[H]=T);let C=T[F];C===void 0&&(C=S.clone(),T[F]=C,I.addEventListener("dispose",L)),S=C}if(S.visible=I.visible,S.wireframe=I.wireframe,w===yi?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=B}return S}function b(R,I,B,w,S){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===yi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let F=e.update(R),T=R.material;if(Array.isArray(T)){let C=F.groups;for(let E=0,A=C.length;E<A;E++){let D=C[E],U=T[D.materialIndex];if(U&&U.visible){let z=_(R,U,w,S);R.onBeforeShadow(i,R,I,B,F,z,D),i.renderBufferDirect(B,null,F,z,R,D),R.onAfterShadow(i,R,I,B,F,z,D)}}}else if(T.visible){let C=_(R,T,w,S);R.onBeforeShadow(i,R,I,B,F,C,null),i.renderBufferDirect(B,null,F,C,R,null),R.onAfterShadow(i,R,I,B,F,C,null)}}let H=R.children;for(let F=0,T=H.length;F<T;F++)b(H[F],I,B,w,S)}function L(R){R.target.removeEventListener("dispose",L);for(let B in r){let w=r[B],S=R.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}function Sx(i,e,t){let n=t.isWebGL2;function s(){let X=!1,ve=new zt,ye=null,ke=new zt(0,0,0,0);return{setMask:function(De){ye!==De&&!X&&(i.colorMask(De,De,De,De),ye=De)},setLocked:function(De){X=De},setClear:function(De,Mt,xt,sn,xn){xn===!0&&(De*=sn,Mt*=sn,xt*=sn),ve.set(De,Mt,xt,sn),ke.equals(ve)===!1&&(i.clearColor(De,Mt,xt,sn),ke.copy(ve))},reset:function(){X=!1,ye=null,ke.set(-1,0,0,0)}}}function a(){let X=!1,ve=null,ye=null,ke=null;return{setTest:function(De){De?Be(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(De){ve!==De&&!X&&(i.depthMask(De),ve=De)},setFunc:function(De){if(ye!==De){switch(De){case cf:i.depthFunc(i.NEVER);break;case hf:i.depthFunc(i.ALWAYS);break;case uf:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case ff:i.depthFunc(i.EQUAL);break;case df:i.depthFunc(i.GEQUAL);break;case pf:i.depthFunc(i.GREATER);break;case mf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=De}},setLocked:function(De){X=De},setClear:function(De){ke!==De&&(i.clearDepth(De),ke=De)},reset:function(){X=!1,ve=null,ye=null,ke=null}}}function h(){let X=!1,ve=null,ye=null,ke=null,De=null,Mt=null,xt=null,sn=null,xn=null;return{setTest:function(Lt){X||(Lt?Be(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Lt){ve!==Lt&&!X&&(i.stencilMask(Lt),ve=Lt)},setFunc:function(Lt,vn,oi){(ye!==Lt||ke!==vn||De!==oi)&&(i.stencilFunc(Lt,vn,oi),ye=Lt,ke=vn,De=oi)},setOp:function(Lt,vn,oi){(Mt!==Lt||xt!==vn||sn!==oi)&&(i.stencilOp(Lt,vn,oi),Mt=Lt,xt=vn,sn=oi)},setLocked:function(Lt){X=Lt},setClear:function(Lt){xn!==Lt&&(i.clearStencil(Lt),xn=Lt)},reset:function(){X=!1,ve=null,ye=null,ke=null,De=null,Mt=null,xt=null,sn=null,xn=null}}}let o=new s,l=new a,r=new h,c=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,b=null,L=null,R=null,I=null,B=null,w=new de(0,0,0),S=0,N=!1,H=null,F=null,T=null,C=null,E=null,A=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,U=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=U>=2);let W=null,Y={},$=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ae=new zt().fromArray($),J=new zt().fromArray(K);function ue(X,ve,ye,ke){let De=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(X,Mt),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<ye;xt++)n&&(X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ve+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Mt}let Te={};Te[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),r.setClear(0),Be(i.DEPTH_TEST),l.setFunc(Br),G(!1),M(sh),Be(i.CULL_FACE),oe(ci);function Be(X){d[X]!==!0&&(i.enable(X),d[X]=!0)}function Ie(X){d[X]!==!1&&(i.disable(X),d[X]=!1)}function Ze(X,ve){return f[X]!==ve?(i.bindFramebuffer(X,ve),f[X]=ve,n&&(X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ve),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function j(X,ve){let ye=v,ke=!1;if(X)if(ye=g.get(ve),ye===void 0&&(ye=[],g.set(ve,ye)),X.isWebGLMultipleRenderTargets){let De=X.texture;if(ye.length!==De.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,xt=De.length;Mt<xt;Mt++)ye[Mt]=i.COLOR_ATTACHMENT0+Mt;ye.length=De.length,ke=!0}}else ye[0]!==i.COLOR_ATTACHMENT0&&(ye[0]=i.COLOR_ATTACHMENT0,ke=!0);else ye[0]!==i.BACK&&(ye[0]=i.BACK,ke=!0);ke&&(t.isWebGL2?i.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Ht(X){return m!==X?(i.useProgram(X),m=X,!0):!1}let Ne={[Ki]:i.FUNC_ADD,[$0]:i.FUNC_SUBTRACT,[Y0]:i.FUNC_REVERSE_SUBTRACT};if(n)Ne[oh]=i.MIN,Ne[lh]=i.MAX;else{let X=e.get("EXT_blend_minmax");X!==null&&(Ne[oh]=X.MIN_EXT,Ne[lh]=X.MAX_EXT)}let Xe={[Z0]:i.ZERO,[J0]:i.ONE,[j0]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[sf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Q0]:i.DST_ALPHA,[K0]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[af]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[of]:i.CONSTANT_ALPHA,[lf]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(X,ve,ye,ke,De,Mt,xt,sn,xn,Lt){if(X===ci){p===!0&&(Ie(i.BLEND),p=!1);return}if(p===!1&&(Be(i.BLEND),p=!0),X!==q0){if(X!==y||Lt!==N){if((_!==Ki||R!==Ki)&&(i.blendEquation(i.FUNC_ADD),_=Ki,R=Ki),Lt)switch(X){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Or:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Or:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,L=null,I=null,B=null,w.set(0,0,0),S=0,y=X,N=Lt}return}De=De||ve,Mt=Mt||ye,xt=xt||ke,(ve!==_||De!==R)&&(i.blendEquationSeparate(Ne[ve],Ne[De]),_=ve,R=De),(ye!==b||ke!==L||Mt!==I||xt!==B)&&(i.blendFuncSeparate(Xe[ye],Xe[ke],Xe[Mt],Xe[xt]),b=ye,L=ke,I=Mt,B=xt),(sn.equals(w)===!1||xn!==S)&&(i.blendColor(sn.r,sn.g,sn.b,xn),w.copy(sn),S=xn),y=X,N=!1}function O(X,ve){X.side===St?Ie(i.CULL_FACE):Be(i.CULL_FACE);let ye=X.side===mn;ve&&(ye=!ye),G(ye),X.blending===Us&&X.transparent===!1?oe(ci):oe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),o.setMask(X.colorWrite);let ke=X.stencilWrite;r.setTest(ke),ke&&(r.setMask(X.stencilWriteMask),r.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),r.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),q(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(X){H!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),H=X)}function M(X){X!==W0?(Be(i.CULL_FACE),X!==F&&(X===sh?i.cullFace(i.BACK):X===X0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),F=X}function P(X){X!==T&&(D&&i.lineWidth(X),T=X)}function q(X,ve,ye){X?(Be(i.POLYGON_OFFSET_FILL),(C!==ve||E!==ye)&&(i.polygonOffset(ve,ye),C=ve,E=ye)):Ie(i.POLYGON_OFFSET_FILL)}function ie(X){X?Be(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function le(X){X===void 0&&(X=i.TEXTURE0+A-1),W!==X&&(i.activeTexture(X),W=X)}function ce(X,ve,ye){ye===void 0&&(W===null?ye=i.TEXTURE0+A-1:ye=W);let ke=Y[ye];ke===void 0&&(ke={type:void 0,texture:void 0},Y[ye]=ke),(ke.type!==X||ke.texture!==ve)&&(W!==ye&&(i.activeTexture(ye),W=ye),i.bindTexture(X,ve||Te[X]),ke.type=X,ke.texture=ve)}function we(){let X=Y[W];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(X){ae.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ae.copy(X))}function Ye(X){J.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Dt(X,ve){let ye=u.get(ve);ye===void 0&&(ye=new WeakMap,u.set(ve,ye));let ke=ye.get(X);ke===void 0&&(ke=i.getUniformBlockIndex(ve,X.name),ye.set(X,ke))}function je(X,ve){let ke=u.get(ve).get(X);c.get(ve)!==ke&&(i.uniformBlockBinding(ve,ke,X.__bindingPointIndex),c.set(ve,ke))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},W=null,Y={},f={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,b=null,L=null,R=null,I=null,B=null,w=new de(0,0,0),S=0,N=!1,H=null,F=null,T=null,C=null,E=null,ae.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),r.reset()}return{buffers:{color:o,depth:l,stencil:r},enable:Be,disable:Ie,bindFramebuffer:Ze,drawBuffers:j,useProgram:Ht,setBlending:oe,setMaterial:O,setFlipSided:G,setCullFace:M,setLineWidth:P,setPolygonOffset:q,setScissorTest:ie,activeTexture:le,bindTexture:ce,unbindTexture:we,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:_e,texImage3D:Se,updateUBOMapping:Dt,uniformBlockBinding:je,texStorage2D:Fe,texStorage3D:Re,texSubImage2D:Oe,texSubImage3D:Je,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ce,scissor:Ve,viewport:Ye,reset:me}}function Ex(i,e,t,n,s,a,h){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,P){return f?new OffscreenCanvas(M,P):qr("canvas")}function v(M,P,q,ie){let le=1;if((M.width>ie||M.height>ie)&&(le=ie/Math.max(M.width,M.height)),le<1||P===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let ce=P?Ul:Math.floor,we=ce(le*M.width),xe=ce(le*M.height);u===void 0&&(u=g(we,xe));let Ae=q?g(we,xe):u;return Ae.width=we,Ae.height=xe,Ae.getContext("2d").drawImage(M,0,0,we,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+we+"x"+xe+")."),Ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return kh(M.width)&&kh(M.height)}function p(M){return o?!1:M.wrapS!==jn||M.wrapT!==jn||M.minFilter!==bn&&M.minFilter!==Fn}function y(M,P){return M.generateMipmaps&&P&&M.minFilter!==bn&&M.minFilter!==Fn}function _(M){i.generateMipmap(M)}function b(M,P,q,ie,le=!1){if(o===!1)return P;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce=P;if(P===i.RED&&(q===i.FLOAT&&(ce=i.R32F),q===i.HALF_FLOAT&&(ce=i.R16F),q===i.UNSIGNED_BYTE&&(ce=i.R8)),P===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ce=i.R8UI),q===i.UNSIGNED_SHORT&&(ce=i.R16UI),q===i.UNSIGNED_INT&&(ce=i.R32UI),q===i.BYTE&&(ce=i.R8I),q===i.SHORT&&(ce=i.R16I),q===i.INT&&(ce=i.R32I)),P===i.RG&&(q===i.FLOAT&&(ce=i.RG32F),q===i.HALF_FLOAT&&(ce=i.RG16F),q===i.UNSIGNED_BYTE&&(ce=i.RG8)),P===i.RGBA){let we=le?Vr:vt.getTransfer(ie);q===i.FLOAT&&(ce=i.RGBA32F),q===i.HALF_FLOAT&&(ce=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ce=we===Et?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(M,P,q){return y(M,q)===!0||M.isFramebufferTexture&&M.minFilter!==bn&&M.minFilter!==Fn?Math.log2(Math.max(P.width,P.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?P.mipmaps.length:1}function R(M){return M===bn||M===ch||M===Vo?i.NEAREST:i.LINEAR}function I(M){let P=M.target;P.removeEventListener("dispose",I),w(P),P.isVideoTexture&&c.delete(P)}function B(M){let P=M.target;P.removeEventListener("dispose",B),N(P)}function w(M){let P=n.get(M);if(P.__webglInit===void 0)return;let q=M.source,ie=d.get(q);if(ie){let le=ie[P.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(M),Object.keys(ie).length===0&&d.delete(q)}n.remove(M)}function S(M){let P=n.get(M);i.deleteTexture(P.__webglTexture);let q=M.source,ie=d.get(q);delete ie[P.__cacheKey],h.memory.textures--}function N(M){let P=M.texture,q=n.get(M),ie=n.get(P);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),h.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(q.__webglFramebuffer[le]))for(let ce=0;ce<q.__webglFramebuffer[le].length;ce++)i.deleteFramebuffer(q.__webglFramebuffer[le][ce]);else i.deleteFramebuffer(q.__webglFramebuffer[le]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[le])}else{if(Array.isArray(q.__webglFramebuffer))for(let le=0;le<q.__webglFramebuffer.length;le++)i.deleteFramebuffer(q.__webglFramebuffer[le]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let le=0;le<q.__webglColorRenderbuffer.length;le++)q.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[le]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let le=0,ce=P.length;le<ce;le++){let we=n.get(P[le]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),h.memory.textures--),n.remove(P[le])}n.remove(P),n.remove(M)}let H=0;function F(){H=0}function T(){let M=H;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),H+=1,M}function C(M){let P=[];return P.push(M.wrapS),P.push(M.wrapT),P.push(M.wrapR||0),P.push(M.magFilter),P.push(M.minFilter),P.push(M.anisotropy),P.push(M.internalFormat),P.push(M.format),P.push(M.type),P.push(M.generateMipmaps),P.push(M.premultiplyAlpha),P.push(M.flipY),P.push(M.unpackAlignment),P.push(M.colorSpace),P.join()}function E(M,P){let q=n.get(M);if(M.isVideoTexture&&O(M),M.isRenderTargetTexture===!1&&M.version>0&&q.__version!==M.version){let ie=M.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(q,M,P);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+P)}function A(M,P){let q=n.get(M);if(M.version>0&&q.__version!==M.version){ae(q,M,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+P)}function D(M,P){let q=n.get(M);if(M.version>0&&q.__version!==M.version){ae(q,M,P);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+P)}function U(M,P){let q=n.get(M);if(M.version>0&&q.__version!==M.version){J(q,M,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+P)}let z={[Bs]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Ll]:i.MIRRORED_REPEAT},W={[bn]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[yf]:i.LINEAR_MIPMAP_NEAREST,[Ma]:i.LINEAR_MIPMAP_LINEAR},Y={[Pf]:i.NEVER,[Ff]:i.ALWAYS,[If]:i.LESS,[e0]:i.LEQUAL,[Df]:i.EQUAL,[Nf]:i.GEQUAL,[Uf]:i.GREATER,[zf]:i.NOTEQUAL};function $(M,P,q){if(q?(i.texParameteri(M,i.TEXTURE_WRAP_S,z[P.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,z[P.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,z[P.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,W[P.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,W[P.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==jn||P.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,R(P.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,R(P.minFilter)),P.minFilter!==bn&&P.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Y[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===bn||P.minFilter!==Vo&&P.minFilter!==Ma||P.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&P.type===Dn&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(M,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function K(M,P){let q=!1;M.__webglInit===void 0&&(M.__webglInit=!0,P.addEventListener("dispose",I));let ie=P.source,le=d.get(ie);le===void 0&&(le={},d.set(ie,le));let ce=C(P);if(ce!==M.__cacheKey){le[ce]===void 0&&(le[ce]={texture:i.createTexture(),usedTimes:0},h.memory.textures++,q=!0),le[ce].usedTimes++;let we=le[M.__cacheKey];we!==void 0&&(le[M.__cacheKey].usedTimes--,we.usedTimes===0&&S(P)),M.__cacheKey=ce,M.__webglTexture=le[ce].texture}return q}function ae(M,P,q){let ie=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ie=i.TEXTURE_3D);let le=K(M,P),ce=P.source;t.bindTexture(ie,M.__webglTexture,i.TEXTURE0+q);let we=n.get(ce);if(ce.version!==we.__version||le===!0){t.activeTexture(i.TEXTURE0+q);let xe=vt.getPrimaries(vt.workingColorSpace),Ae=P.colorSpace===On?null:vt.getPrimaries(P.colorSpace),Oe=P.colorSpace===On||xe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Je=p(P)&&m(P.image)===!1,ee=v(P.image,Je,!1,s.maxTextureSize);ee=G(P,ee);let Ce=m(ee)||o,Fe=a.convert(P.format,P.colorSpace),Re=a.convert(P.type),_e=b(P.internalFormat,Fe,Re,P.colorSpace,P.isVideoTexture);$(ie,P,Ce);let Se,Ve=P.mipmaps,Ye=o&&P.isVideoTexture!==!0&&_e!==Ku,Dt=we.__version===void 0||le===!0,je=L(P,ee,Ce);if(P.isDepthTexture)_e=i.DEPTH_COMPONENT,o?P.type===Ui?_e=i.DEPTH_COMPONENT32F:P.type===Di?_e=i.DEPTH_COMPONENT24:P.type===ts?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:P.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ns&&_e===i.DEPTH_COMPONENT&&P.type!==Ec&&P.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Di,Re=a.convert(P.type)),P.format===ks&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,P.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=ts,Re=a.convert(P.type))),Dt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,Fe,Re,null));else if(P.isDataTexture)if(Ve.length>0&&Ce){Ye&&Dt&&t.texStorage2D(i.TEXTURE_2D,je,_e,Ve[0].width,Ve[0].height);for(let me=0,X=Ve.length;me<X;me++)Se=Ve[me],Ye?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Fe,Re,Se.data):t.texImage2D(i.TEXTURE_2D,me,_e,Se.width,Se.height,0,Fe,Re,Se.data);P.generateMipmaps=!1}else Ye?(Dt&&t.texStorage2D(i.TEXTURE_2D,je,_e,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,Fe,Re,ee.data)):t.texImage2D(i.TEXTURE_2D,0,_e,ee.width,ee.height,0,Fe,Re,ee.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ye&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,_e,Ve[0].width,Ve[0].height,ee.depth);for(let me=0,X=Ve.length;me<X;me++)Se=Ve[me],P.format!==Kn?Fe!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,ee.depth,Fe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,_e,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,ee.depth,Fe,Re,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,_e,Se.width,Se.height,ee.depth,0,Fe,Re,Se.data)}else{Ye&&Dt&&t.texStorage2D(i.TEXTURE_2D,je,_e,Ve[0].width,Ve[0].height);for(let me=0,X=Ve.length;me<X;me++)Se=Ve[me],P.format!==Kn?Fe!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Fe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,me,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Fe,Re,Se.data):t.texImage2D(i.TEXTURE_2D,me,_e,Se.width,Se.height,0,Fe,Re,Se.data)}else if(P.isDataArrayTexture)Ye?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Fe,Re,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,Fe,Re,ee.data);else if(P.isData3DTexture)Ye?(Dt&&t.texStorage3D(i.TEXTURE_3D,je,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Fe,Re,ee.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,Fe,Re,ee.data);else if(P.isFramebufferTexture){if(Dt)if(Ye)t.texStorage2D(i.TEXTURE_2D,je,_e,ee.width,ee.height);else{let me=ee.width,X=ee.height;for(let ve=0;ve<je;ve++)t.texImage2D(i.TEXTURE_2D,ve,_e,me,X,0,Fe,Re,null),me>>=1,X>>=1}}else if(Ve.length>0&&Ce){Ye&&Dt&&t.texStorage2D(i.TEXTURE_2D,je,_e,Ve[0].width,Ve[0].height);for(let me=0,X=Ve.length;me<X;me++)Se=Ve[me],Ye?t.texSubImage2D(i.TEXTURE_2D,me,0,0,Fe,Re,Se):t.texImage2D(i.TEXTURE_2D,me,_e,Fe,Re,Se);P.generateMipmaps=!1}else Ye?(Dt&&t.texStorage2D(i.TEXTURE_2D,je,_e,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Re,ee)):t.texImage2D(i.TEXTURE_2D,0,_e,Fe,Re,ee);y(P,Ce)&&_(ie),we.__version=ce.version,P.onUpdate&&P.onUpdate(P)}M.__version=P.version}function J(M,P,q){if(P.image.length!==6)return;let ie=K(M,P),le=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+q);let ce=n.get(le);if(le.version!==ce.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);let we=vt.getPrimaries(vt.workingColorSpace),xe=P.colorSpace===On?null:vt.getPrimaries(P.colorSpace),Ae=P.colorSpace===On||we===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let Oe=P.isCompressedTexture||P.image[0].isCompressedTexture,Je=P.image[0]&&P.image[0].isDataTexture,ee=[];for(let me=0;me<6;me++)!Oe&&!Je?ee[me]=v(P.image[me],!1,!0,s.maxCubemapSize):ee[me]=Je?P.image[me].image:P.image[me],ee[me]=G(P,ee[me]);let Ce=ee[0],Fe=m(Ce)||o,Re=a.convert(P.format,P.colorSpace),_e=a.convert(P.type),Se=b(P.internalFormat,Re,_e,P.colorSpace),Ve=o&&P.isVideoTexture!==!0,Ye=ce.__version===void 0||ie===!0,Dt=L(P,Ce,Fe);$(i.TEXTURE_CUBE_MAP,P,Fe);let je;if(Oe){Ve&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Se,Ce.width,Ce.height);for(let me=0;me<6;me++){je=ee[me].mipmaps;for(let X=0;X<je.length;X++){let ve=je[X];P.format!==Kn?Re!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X,0,0,ve.width,ve.height,Re,_e,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X,Se,ve.width,ve.height,0,Re,_e,ve.data)}}}else{je=P.mipmaps,Ve&&Ye&&(je.length>0&&Dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Se,ee[0].width,ee[0].height));for(let me=0;me<6;me++)if(Je){Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ee[me].width,ee[me].height,Re,_e,ee[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Se,ee[me].width,ee[me].height,0,Re,_e,ee[me].data);for(let X=0;X<je.length;X++){let ye=je[X].image[me].image;Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X+1,0,0,ye.width,ye.height,Re,_e,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X+1,Se,ye.width,ye.height,0,Re,_e,ye.data)}}else{Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Re,_e,ee[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Se,Re,_e,ee[me]);for(let X=0;X<je.length;X++){let ve=je[X];Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X+1,0,0,Re,_e,ve.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,X+1,Se,Re,_e,ve.image[me])}}}y(P,Fe)&&_(i.TEXTURE_CUBE_MAP),ce.__version=le.version,P.onUpdate&&P.onUpdate(P)}M.__version=P.version}function ue(M,P,q,ie,le,ce){let we=a.convert(q.format,q.colorSpace),xe=a.convert(q.type),Ae=b(q.internalFormat,we,xe,q.colorSpace);if(!n.get(P).__hasExternalTextures){let Je=Math.max(1,P.width>>ce),ee=Math.max(1,P.height>>ce);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ce,Ae,Je,ee,P.depth,0,we,xe,null):t.texImage2D(le,ce,Ae,Je,ee,0,we,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,le,n.get(q).__webglTexture,0,Xe(P)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,le,n.get(q).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(M,P,q){if(i.bindRenderbuffer(i.RENDERBUFFER,M),P.depthBuffer&&!P.stencilBuffer){let ie=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||oe(P)){let le=P.depthTexture;le&&le.isDepthTexture&&(le.type===Ui?ie=i.DEPTH_COMPONENT32F:le.type===Di&&(ie=i.DEPTH_COMPONENT24));let ce=Xe(P);oe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ie,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ie,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(P.depthBuffer&&P.stencilBuffer){let ie=Xe(P);q&&oe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,P.width,P.height):oe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let ie=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0;le<ie.length;le++){let ce=ie[le],we=a.convert(ce.format,ce.colorSpace),xe=a.convert(ce.type),Ae=b(ce.internalFormat,we,xe,ce.colorSpace),Oe=Xe(P);q&&oe(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,P.width,P.height):oe(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Ae,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(M,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),E(P.depthTexture,0);let ie=n.get(P.depthTexture).__webglTexture,le=Xe(P);if(P.depthTexture.format===ns)oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(P.depthTexture.format===ks)oe(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ie(M){let P=n.get(M),q=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!P.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Be(P.__webglFramebuffer,M)}else if(q){P.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ie]),P.__webglDepthbuffer[ie]=i.createRenderbuffer(),Te(P.__webglDepthbuffer[ie],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Te(P.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(M,P,q){let ie=n.get(M);P!==void 0&&ue(ie.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ie(M)}function j(M){let P=M.texture,q=n.get(M),ie=n.get(P);M.addEventListener("dispose",B),M.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=P.version,h.memory.textures++);let le=M.isWebGLCubeRenderTarget===!0,ce=M.isWebGLMultipleRenderTargets===!0,we=m(M)||o;if(le){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(o&&P.mipmaps&&P.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<P.mipmaps.length;Ae++)q.__webglFramebuffer[xe][Ae]=i.createFramebuffer()}else q.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(o&&P.mipmaps&&P.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<P.mipmaps.length;xe++)q.__webglFramebuffer[xe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let xe=M.texture;for(let Ae=0,Oe=xe.length;Ae<Oe;Ae++){let Je=n.get(xe[Ae]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&oe(M)===!1){let xe=ce?P:[P];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){let Oe=xe[Ae];q.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ae]);let Je=a.convert(Oe.format,Oe.colorSpace),ee=a.convert(Oe.type),Ce=b(Oe.internalFormat,Je,ee,Oe.colorSpace,M.isXRRenderTarget===!0),Fe=Xe(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ce,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),$(i.TEXTURE_CUBE_MAP,P,we);for(let xe=0;xe<6;xe++)if(o&&P.mipmaps&&P.mipmaps.length>0)for(let Ae=0;Ae<P.mipmaps.length;Ae++)ue(q.__webglFramebuffer[xe][Ae],M,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else ue(q.__webglFramebuffer[xe],M,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(P,we)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let xe=M.texture;for(let Ae=0,Oe=xe.length;Ae<Oe;Ae++){let Je=xe[Ae],ee=n.get(Je);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),$(i.TEXTURE_2D,Je,we),ue(q.__webglFramebuffer,M,Je,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),y(Je,we)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?xe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ie.__webglTexture),$(xe,P,we),o&&P.mipmaps&&P.mipmaps.length>0)for(let Ae=0;Ae<P.mipmaps.length;Ae++)ue(q.__webglFramebuffer[Ae],M,P,i.COLOR_ATTACHMENT0,xe,Ae);else ue(q.__webglFramebuffer,M,P,i.COLOR_ATTACHMENT0,xe,0);y(P,we)&&_(xe),t.unbindTexture()}M.depthBuffer&&Ie(M)}function Ht(M){let P=m(M)||o,q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0,le=q.length;ie<le;ie++){let ce=q[ie];if(y(ce,P)){let we=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(ce).__webglTexture;t.bindTexture(we,xe),_(we),t.unbindTexture()}}}function Ne(M){if(o&&M.samples>0&&oe(M)===!1){let P=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],q=M.width,ie=M.height,le=i.COLOR_BUFFER_BIT,ce=[],we=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(M),Ae=M.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Oe=0;Oe<P.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Oe=0;Oe<P.length;Oe++){ce.push(i.COLOR_ATTACHMENT0+Oe),M.depthBuffer&&ce.push(we);let Je=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Je===!1&&(M.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]),Je===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[we]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[we])),Ae){let ee=n.get(P[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,le,i.NEAREST),r&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Oe=0;Oe<P.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Oe]);let Je=n.get(P[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Xe(M){return Math.min(s.maxSamples,M.samples)}function oe(M){let P=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function O(M){let P=h.render.frame;c.get(M)!==P&&(c.set(M,P),M.update())}function G(M,P){let q=M.colorSpace,ie=M.format,le=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Il||q!==wi&&q!==On&&(vt.getTransfer(q)===Et?o===!1?e.has("EXT_sRGB")===!0&&ie===Kn?(M.format=Il,M.minFilter=Fn,M.generateMipmaps=!1):P=$r.sRGBToLinear(P):(ie!==Kn||le!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),P}this.allocateTextureUnit=T,this.resetTextureUnits=F,this.setTexture2D=E,this.setTexture2DArray=A,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=Ze,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=oe}function Tx(i,e,t){let n=t.isWebGL2;function s(a,h=On){let o,l=vt.getTransfer(h);if(a===Ni)return i.UNSIGNED_BYTE;if(a===$u)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Yu)return i.UNSIGNED_SHORT_5_5_5_1;if(a===_f)return i.BYTE;if(a===bf)return i.SHORT;if(a===Ec)return i.UNSIGNED_SHORT;if(a===qu)return i.INT;if(a===Di)return i.UNSIGNED_INT;if(a===Ui)return i.FLOAT;if(a===Dn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Mf)return i.ALPHA;if(a===Kn)return i.RGBA;if(a===wf)return i.LUMINANCE;if(a===Sf)return i.LUMINANCE_ALPHA;if(a===ns)return i.DEPTH_COMPONENT;if(a===ks)return i.DEPTH_STENCIL;if(a===Il)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Ef)return i.RED;if(a===Zu)return i.RED_INTEGER;if(a===Tf)return i.RG;if(a===Ju)return i.RG_INTEGER;if(a===ju)return i.RGBA_INTEGER;if(a===Go||a===Wo||a===Xo||a===qo)if(l===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===hh||a===uh||a===fh||a===dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ku)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ph||a===mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ph)return l===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===mh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===gh||a===xh||a===vh||a===yh||a===_h||a===bh||a===Mh||a===wh||a===Sh||a===Eh||a===Th||a===Ah||a===Rh||a===Ch)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===gh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===vh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===yh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===_h)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===bh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Mh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Sh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Eh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Th)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ah)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Rh)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ch)return l===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$o||a===Lh||a===Ph)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===$o)return l===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ph)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Af||a===Ih||a===Dh||a===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ts?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}var $l=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Nt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ax={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,h=null,o=this._targetRay,l=this._grip,r=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(r&&e.hand){h=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(r,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=r.joints["index-finger-tip"],u=r.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;r.inputState.pinching&&d>f+g?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&d<=f-g&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ax)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),r!==null&&(r.visible=h!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yl=class extends Oi{constructor(e,t){super();let n=this,s=null,a=1,h=null,o="local-floor",l=1,r=null,c=null,u=null,d=null,f=null,g=null,v=t.getContextAttributes(),m=null,p=null,y=[],_=[],b=new he,L=null,R=new cn;R.layers.enable(1),R.viewport=new zt;let I=new cn;I.layers.enable(2),I.viewport=new zt;let B=[R,I],w=new $l;w.layers.enable(1),w.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=y[$];return K===void 0&&(K=new va,y[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=y[$];return K===void 0&&(K=new va,y[$]=K),K.getGripSpace()},this.getHand=function($){let K=y[$];return K===void 0&&(K=new va,y[$]=K),K.getHandSpace()};function H($){let K=_.indexOf($.inputSource);if(K===-1)return;let ae=y[K];ae!==void 0&&(ae.update($.inputSource,$.frame,r||h),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",T);for(let $=0;$<y.length;$++){let K=_[$];K!==null&&(_[$]=null,y[$].disconnect(K))}S=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,Y.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return r||h},this.setReferenceSpace=function($){r=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",F),s.addEventListener("inputsourceschange",T),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Qt(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let K=null,ae=null,J=null;v.depth&&(J=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=v.stencil?ks:ns,ae=v.stencil?ts:Di);let ue={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:a};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Qt(d.textureWidth,d.textureHeight,{format:Kn,type:Ni,depthTexture:new no(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Te=e.properties.get(p);Te.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),r=null,h=await s.requestReferenceSpace(o),Y.setContext(s),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T($){for(let K=0;K<$.removed.length;K++){let ae=$.removed[K],J=_.indexOf(ae);J>=0&&(_[J]=null,y[J].disconnect(ae))}for(let K=0;K<$.added.length;K++){let ae=$.added[K],J=_.indexOf(ae);if(J===-1){for(let Te=0;Te<y.length;Te++)if(Te>=_.length){_.push(ae),J=Te;break}else if(_[Te]===null){_[Te]=ae,J=Te;break}if(J===-1)break}let ue=y[J];ue&&ue.connect(ae)}}let C=new V,E=new V;function A($,K,ae){C.setFromMatrixPosition(K.matrixWorld),E.setFromMatrixPosition(ae.matrixWorld);let J=C.distanceTo(E),ue=K.projectionMatrix.elements,Te=ae.projectionMatrix.elements,Be=ue[14]/(ue[10]-1),Ie=ue[14]/(ue[10]+1),Ze=(ue[9]+1)/ue[5],j=(ue[9]-1)/ue[5],Ht=(ue[8]-1)/ue[0],Ne=(Te[8]+1)/Te[0],Xe=Be*Ht,oe=Be*Ne,O=J/(-Ht+Ne),G=O*-Ht;K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(G),$.translateZ(O),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let M=Be+O,P=Ie+O,q=Xe-G,ie=oe+(J-G),le=Ze*Ie/P*M,ce=j*Ie/P*M;$.projectionMatrix.makePerspective(q,ie,le,ce,M,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function D($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;w.near=I.near=R.near=$.near,w.far=I.far=R.far=$.far,(S!==w.near||N!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,N=w.far);let K=$.parent,ae=w.cameras;D(w,K);for(let J=0;J<ae.length;J++)D(ae[J],K);ae.length===2?A(w,R,I):w.projectionMatrix.copy(R.projectionMatrix),U($,w,K)};function U($,K,ae){ae===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Dl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)};let z=null;function W($,K){if(c=K.getViewerPose(r||h),g=K,c!==null){let ae=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let J=!1;ae.length!==w.cameras.length&&(w.cameras.length=0,J=!0);for(let ue=0;ue<ae.length;ue++){let Te=ae[ue],Be=null;if(f!==null)Be=f.getViewport(Te);else{let Ze=u.getViewSubImage(d,Te);Be=Ze.viewport,ue===0&&(e.setRenderTargetTextures(p,Ze.colorTexture,d.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(p))}let Ie=B[ue];Ie===void 0&&(Ie=new cn,Ie.layers.enable(ue),Ie.viewport=new zt,B[ue]=Ie),Ie.matrix.fromArray(Te.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Te.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Be.x,Be.y,Be.width,Be.height),ue===0&&(w.matrix.copy(Ie.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),J===!0&&w.cameras.push(Ie)}}for(let ae=0;ae<y.length;ae++){let J=_[ae],ue=y[ae];J!==null&&ue!==void 0&&ue.update(J,K,r||h)}z&&z($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Y=new s0;Y.setAnimationLoop(W),this.setAnimationLoop=function($){z=$},this.dispose=function(){}}};function Rx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,i0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),c(m,p)):p.isMeshStandardMaterial?(a(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(h(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?r(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,e,t,n){let s={},a={},h=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function r(y,_){let b=s[y.id];b===void 0&&(g(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(y,L);let R=e.render.frame;a[y.id]!==R&&(d(y),a[y.id]=R)}function c(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),L=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(h.indexOf(y)===-1)return h.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,I=b.length;R<I;R++){let B=Array.isArray(b[R])?b[R]:[b[R]];for(let w=0,S=B.length;w<S;w++){let N=B[w];if(f(N,R,w,L)===!0){let H=N.__offset,F=Array.isArray(N.value)?N.value:[N.value],T=0;for(let C=0;C<F.length;C++){let E=F[C],A=v(E);typeof E=="number"||typeof E=="boolean"?(N.__data[0]=E,i.bufferSubData(i.UNIFORM_BUFFER,H+T,N.__data)):E.isMatrix3?(N.__data[0]=E.elements[0],N.__data[1]=E.elements[1],N.__data[2]=E.elements[2],N.__data[3]=0,N.__data[4]=E.elements[3],N.__data[5]=E.elements[4],N.__data[6]=E.elements[5],N.__data[7]=0,N.__data[8]=E.elements[6],N.__data[9]=E.elements[7],N.__data[10]=E.elements[8],N.__data[11]=0):(E.toArray(N.__data,T),T+=A.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,L){let R=y.value,I=_+"_"+b;if(L[I]===void 0)return typeof R=="number"||typeof R=="boolean"?L[I]=R:L[I]=R.clone(),!0;{let B=L[I];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return L[I]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(y){let _=y.uniforms,b=0,L=16;for(let I=0,B=_.length;I<B;I++){let w=Array.isArray(_[I])?_[I]:[_[I]];for(let S=0,N=w.length;S<N;S++){let H=w[S],F=Array.isArray(H.value)?H.value:[H.value];for(let T=0,C=F.length;T<C;T++){let E=F[T],A=v(E),D=b%L;D!==0&&L-D<A.boundary&&(b+=L-D),H.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=A.storage}}}let R=b%L;return R>0&&(b+=L-R),y.__size=b,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=h.indexOf(_.__bindingPointIndex);h.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);h=[],s={},a={}}return{bind:l,update:r,dispose:p}}var Ea=class{constructor(e={}){let{canvas:t=Bf(),context:n=null,depth:s=!0,stencil:a=!0,alpha:h=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:r=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=h;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;let _=this,b=!1,L=0,R=0,I=null,B=-1,w=null,S=new zt,N=new zt,H=null,F=new de(0),T=0,C=t.width,E=t.height,A=1,D=null,U=null,z=new zt(0,0,C,E),W=new zt(0,0,C,E),Y=!1,$=new Sa,K=!1,ae=!1,J=null,ue=new $e,Te=new he,Be=new V,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ze(){return I===null?A:1}let j=n;function Ht(k,Z){for(let te=0;te<k.length;te++){let ne=k[te],Q=t.getContext(ne,Z);if(Q!==null)return Q}return null}try{let k={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ve,!1),j===null){let Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),j=Ht(Z,k),j===null)throw Ht(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let Ne,Xe,oe,O,G,M,P,q,ie,le,ce,we,xe,Ae,Oe,Je,ee,Ce,Fe,Re,_e,Se,Ve,Ye;function Dt(){Ne=new Ym(j),Xe=new Vm(j,Ne,e),Ne.init(Xe),Se=new Tx(j,Ne,Xe),oe=new Sx(j,Ne,Xe),O=new jm(j),G=new fx,M=new Ex(j,Ne,oe,G,Xe,Se,O),P=new Wm(_),q=new $m(_),ie=new ad(j,Xe),Ve=new km(j,Ne,ie,Xe),le=new Zm(j,ie,O,Ve),ce=new tg(j,le,ie,O),Fe=new eg(j,Xe,M),Je=new Gm(G),we=new ux(_,P,q,Ne,Xe,Ve,Je),xe=new Rx(_,G),Ae=new px,Oe=new _x(Ne,Xe),Ce=new Bm(_,P,q,oe,ce,d,l),ee=new wx(_,ce,Xe),Ye=new Cx(j,O,Xe,oe),Re=new Hm(j,Ne,O,Xe),_e=new Jm(j,Ne,O,Xe),O.programs=we.programs,_.capabilities=Xe,_.extensions=Ne,_.properties=G,_.renderLists=Ae,_.shadowMap=ee,_.state=oe,_.info=O}Dt();let je=new Yl(_,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let k=Ne.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=Ne.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(k){k!==void 0&&(A=k,this.setSize(C,E,!1))},this.getSize=function(k){return k.set(C,E)},this.setSize=function(k,Z,te=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=k,E=Z,t.width=Math.floor(k*A),t.height=Math.floor(Z*A),te===!0&&(t.style.width=k+"px",t.style.height=Z+"px"),this.setViewport(0,0,k,Z)},this.getDrawingBufferSize=function(k){return k.set(C*A,E*A).floor()},this.setDrawingBufferSize=function(k,Z,te){C=k,E=Z,A=te,t.width=Math.floor(k*te),t.height=Math.floor(Z*te),this.setViewport(0,0,k,Z)},this.getCurrentViewport=function(k){return k.copy(S)},this.getViewport=function(k){return k.copy(z)},this.setViewport=function(k,Z,te,ne){k.isVector4?z.set(k.x,k.y,k.z,k.w):z.set(k,Z,te,ne),oe.viewport(S.copy(z).multiplyScalar(A).floor())},this.getScissor=function(k){return k.copy(W)},this.setScissor=function(k,Z,te,ne){k.isVector4?W.set(k.x,k.y,k.z,k.w):W.set(k,Z,te,ne),oe.scissor(N.copy(W).multiplyScalar(A).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(k){oe.setScissorTest(Y=k)},this.setOpaqueSort=function(k){D=k},this.setTransparentSort=function(k){U=k},this.getClearColor=function(k){return k.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(k=!0,Z=!0,te=!0){let ne=0;if(k){let Q=!1;if(I!==null){let Ee=I.texture.format;Q=Ee===ju||Ee===Ju||Ee===Zu}if(Q){let Ee=I.texture.type,Ue=Ee===Ni||Ee===Di||Ee===Ec||Ee===ts||Ee===$u||Ee===Yu,Ge=Ce.getClearColor(),qe=Ce.getClearAlpha(),it=Ge.r,Ke=Ge.g,tt=Ge.b;Ue?(f[0]=it,f[1]=Ke,f[2]=tt,f[3]=qe,j.clearBufferuiv(j.COLOR,0,f)):(g[0]=it,g[1]=Ke,g[2]=tt,g[3]=qe,j.clearBufferiv(j.COLOR,0,g))}else ne|=j.COLOR_BUFFER_BIT}Z&&(ne|=j.DEPTH_BUFFER_BIT),te&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ae.dispose(),Oe.dispose(),G.dispose(),P.dispose(),q.dispose(),ce.dispose(),Ve.dispose(),Ye.dispose(),we.dispose(),je.dispose(),je.removeEventListener("sessionstart",xn),je.removeEventListener("sessionend",Lt),J&&(J.dispose(),J=null),vn.stop()};function me(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let k=O.autoReset,Z=ee.enabled,te=ee.autoUpdate,ne=ee.needsUpdate,Q=ee.type;Dt(),O.autoReset=k,ee.enabled=Z,ee.autoUpdate=te,ee.needsUpdate=ne,ee.type=Q}function ve(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ye(k){let Z=k.target;Z.removeEventListener("dispose",ye),ke(Z)}function ke(k){De(k),G.remove(k)}function De(k){let Z=G.get(k).programs;Z!==void 0&&(Z.forEach(function(te){we.releaseProgram(te)}),k.isShaderMaterial&&we.releaseShaderCache(k))}this.renderBufferDirect=function(k,Z,te,ne,Q,Ee){Z===null&&(Z=Ie);let Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=k0(k,Z,te,ne,Q);oe.setMaterial(ne,Ue);let qe=te.index,it=1;if(ne.wireframe===!0){if(qe=le.getWireframeAttribute(te),qe===void 0)return;it=2}let Ke=te.drawRange,tt=te.attributes.position,$t=Ke.start*it,Ln=(Ke.start+Ke.count)*it;Ee!==null&&($t=Math.max($t,Ee.start*it),Ln=Math.min(Ln,(Ee.start+Ee.count)*it)),qe!==null?($t=Math.max($t,0),Ln=Math.min(Ln,qe.count)):tt!=null&&($t=Math.max($t,0),Ln=Math.min(Ln,tt.count));let an=Ln-$t;if(an<0||an===1/0)return;Ve.setup(Q,ne,Ge,te,qe);let di,Ot=Re;if(qe!==null&&(di=ie.get(qe),Ot=_e,Ot.setIndex(di)),Q.isMesh)ne.wireframe===!0?(oe.setLineWidth(ne.wireframeLinewidth*Ze()),Ot.setMode(j.LINES)):Ot.setMode(j.TRIANGLES);else if(Q.isLine){let st=ne.linewidth;st===void 0&&(st=1),oe.setLineWidth(st*Ze()),Q.isLineSegments?Ot.setMode(j.LINES):Q.isLineLoop?Ot.setMode(j.LINE_LOOP):Ot.setMode(j.LINE_STRIP)}else Q.isPoints?Ot.setMode(j.POINTS):Q.isSprite&&Ot.setMode(j.TRIANGLES);if(Q.isBatchedMesh)Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Ot.renderInstances($t,an,Q.count);else if(te.isInstancedBufferGeometry){let st=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oo=Math.min(te.instanceCount,st);Ot.renderInstances($t,an,Oo)}else Ot.render($t,an)};function Mt(k,Z,te){k.transparent===!0&&k.side===St&&k.forceSinglePass===!1?(k.side=mn,k.needsUpdate=!0,sr(k,Z,te),k.side=Fi,k.needsUpdate=!0,sr(k,Z,te),k.side=St):sr(k,Z,te)}this.compile=function(k,Z,te=null){te===null&&(te=k),m=Oe.get(te),m.init(),y.push(m),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),k!==te&&k.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(_._useLegacyLights);let ne=new Set;return k.traverse(function(Q){let Ee=Q.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){let Ge=Ee[Ue];Mt(Ge,te,Q),ne.add(Ge)}else Mt(Ee,te,Q),ne.add(Ee)}),y.pop(),m=null,ne},this.compileAsync=function(k,Z,te=null){let ne=this.compile(k,Z,te);return new Promise(Q=>{function Ee(){if(ne.forEach(function(Ue){G.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){Q(k);return}setTimeout(Ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xt=null;function sn(k){xt&&xt(k)}function xn(){vn.stop()}function Lt(){vn.start()}let vn=new s0;vn.setAnimationLoop(sn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(k){xt=k,je.setAnimationLoop(k),k===null?vn.stop():vn.start()},je.addEventListener("sessionstart",xn),je.addEventListener("sessionend",Lt),this.render=function(k,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(Z),Z=je.getCamera()),k.isScene===!0&&k.onBeforeRender(_,k,Z,I),m=Oe.get(k,y.length),m.init(),y.push(m),ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(ue),ae=this.localClippingEnabled,K=Je.init(this.clippingPlanes,ae),v=Ae.get(k,p.length),v.init(),p.push(v),oi(k,Z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,U),this.info.render.frame++,K===!0&&Je.beginShadows();let te=m.state.shadowsArray;if(ee.render(te,k,Z),K===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(v,k),m.setupLights(_._useLegacyLights),Z.isArrayCamera){let ne=Z.cameras;for(let Q=0,Ee=ne.length;Q<Ee;Q++){let Ue=ne[Q];Kc(v,k,Ue,Ue.viewport)}}else Kc(v,k,Z);I!==null&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),k.isScene===!0&&k.onAfterRender(_,k,Z),Ve.resetDefaultState(),B=-1,w=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function oi(k,Z,te,ne){if(k.visible===!1)return;if(k.layers.test(Z.layers)){if(k.isGroup)te=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(Z);else if(k.isLight)m.pushLight(k),k.castShadow&&m.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||$.intersectsSprite(k)){ne&&Be.setFromMatrixPosition(k.matrixWorld).applyMatrix4(ue);let Ue=ce.update(k),Ge=k.material;Ge.visible&&v.push(k,Ue,Ge,te,Be.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||$.intersectsObject(k))){let Ue=ce.update(k),Ge=k.material;if(ne&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Be.copy(k.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Be.copy(Ue.boundingSphere.center)),Be.applyMatrix4(k.matrixWorld).applyMatrix4(ue)),Array.isArray(Ge)){let qe=Ue.groups;for(let it=0,Ke=qe.length;it<Ke;it++){let tt=qe[it],$t=Ge[tt.materialIndex];$t&&$t.visible&&v.push(k,Ue,$t,te,Be.z,tt)}}else Ge.visible&&v.push(k,Ue,Ge,te,Be.z,null)}}let Ee=k.children;for(let Ue=0,Ge=Ee.length;Ue<Ge;Ue++)oi(Ee[Ue],Z,te,ne)}function Kc(k,Z,te,ne){let Q=k.opaque,Ee=k.transmissive,Ue=k.transparent;m.setupLightsView(te),K===!0&&Je.setGlobalState(_.clippingPlanes,te),Ee.length>0&&B0(Q,Ee,Z,te),ne&&oe.viewport(S.copy(ne)),Q.length>0&&ir(Q,Z,te),Ee.length>0&&ir(Ee,Z,te),Ue.length>0&&ir(Ue,Z,te),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function B0(k,Z,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Ee=Xe.isWebGL2;J===null&&(J=new Qt(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?Dn:Ni,minFilter:Ma,samples:Ee?4:0})),_.getDrawingBufferSize(Te),Ee?J.setSize(Te.x,Te.y):J.setSize(Ul(Te.x),Ul(Te.y));let Ue=_.getRenderTarget();_.setRenderTarget(J),_.getClearColor(F),T=_.getClearAlpha(),T<1&&_.setClearColor(16777215,.5),_.clear();let Ge=_.toneMapping;_.toneMapping=zi,ir(k,te,ne),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J);let qe=!1;for(let it=0,Ke=Z.length;it<Ke;it++){let tt=Z[it],$t=tt.object,Ln=tt.geometry,an=tt.material,di=tt.group;if(an.side===St&&$t.layers.test(ne.layers)){let Ot=an.side;an.side=mn,an.needsUpdate=!0,Qc($t,te,ne,Ln,an,di),an.side=Ot,an.needsUpdate=!0,qe=!0}}qe===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J)),_.setRenderTarget(Ue),_.setClearColor(F,T),_.toneMapping=Ge}function ir(k,Z,te){let ne=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ee=k.length;Q<Ee;Q++){let Ue=k[Q],Ge=Ue.object,qe=Ue.geometry,it=ne===null?Ue.material:ne,Ke=Ue.group;Ge.layers.test(te.layers)&&Qc(Ge,Z,te,qe,it,Ke)}}function Qc(k,Z,te,ne,Q,Ee){k.onBeforeRender(_,Z,te,ne,Q,Ee),k.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),Q.onBeforeRender(_,Z,te,ne,k,Ee),Q.transparent===!0&&Q.side===St&&Q.forceSinglePass===!1?(Q.side=mn,Q.needsUpdate=!0,_.renderBufferDirect(te,Z,ne,Q,k,Ee),Q.side=Fi,Q.needsUpdate=!0,_.renderBufferDirect(te,Z,ne,Q,k,Ee),Q.side=St):_.renderBufferDirect(te,Z,ne,Q,k,Ee),k.onAfterRender(_,Z,te,ne,Q,Ee)}function sr(k,Z,te){Z.isScene!==!0&&(Z=Ie);let ne=G.get(k),Q=m.state.lights,Ee=m.state.shadowsArray,Ue=Q.state.version,Ge=we.getParameters(k,Q.state,Ee,Z,te),qe=we.getProgramCacheKey(Ge),it=ne.programs;ne.environment=k.isMeshStandardMaterial?Z.environment:null,ne.fog=Z.fog,ne.envMap=(k.isMeshStandardMaterial?q:P).get(k.envMap||ne.environment),it===void 0&&(k.addEventListener("dispose",ye),it=new Map,ne.programs=it);let Ke=it.get(qe);if(Ke!==void 0){if(ne.currentProgram===Ke&&ne.lightsStateVersion===Ue)return th(k,Ge),Ke}else Ge.uniforms=we.getUniforms(k),k.onBuild(te,Ge,_),k.onBeforeCompile(Ge,_),Ke=we.acquireProgram(Ge,qe),it.set(qe,Ke),ne.uniforms=Ge.uniforms;let tt=ne.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(tt.clippingPlanes=Je.uniform),th(k,Ge),ne.needsLights=V0(k),ne.lightsStateVersion=Ue,ne.needsLights&&(tt.ambientLightColor.value=Q.state.ambient,tt.lightProbe.value=Q.state.probe,tt.directionalLights.value=Q.state.directional,tt.directionalLightShadows.value=Q.state.directionalShadow,tt.spotLights.value=Q.state.spot,tt.spotLightShadows.value=Q.state.spotShadow,tt.rectAreaLights.value=Q.state.rectArea,tt.ltc_1.value=Q.state.rectAreaLTC1,tt.ltc_2.value=Q.state.rectAreaLTC2,tt.pointLights.value=Q.state.point,tt.pointLightShadows.value=Q.state.pointShadow,tt.hemisphereLights.value=Q.state.hemi,tt.directionalShadowMap.value=Q.state.directionalShadowMap,tt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,tt.spotShadowMap.value=Q.state.spotShadowMap,tt.spotLightMatrix.value=Q.state.spotLightMatrix,tt.spotLightMap.value=Q.state.spotLightMap,tt.pointShadowMap.value=Q.state.pointShadowMap,tt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=Ke,ne.uniformsList=null,Ke}function eh(k){if(k.uniformsList===null){let Z=k.currentProgram.getUniforms();k.uniformsList=Ns.seqWithValue(Z.seq,k.uniforms)}return k.uniformsList}function th(k,Z){let te=G.get(k);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}function k0(k,Z,te,ne,Q){Z.isScene!==!0&&(Z=Ie),M.resetTextureUnits();let Ee=Z.fog,Ue=ne.isMeshStandardMaterial?Z.environment:null,Ge=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wi,qe=(ne.isMeshStandardMaterial?q:P).get(ne.envMap||Ue),it=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!te.morphAttributes.position,$t=!!te.morphAttributes.normal,Ln=!!te.morphAttributes.color,an=zi;ne.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(an=_.toneMapping);let di=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ot=di!==void 0?di.length:0,st=G.get(ne),Oo=m.state.lights;if(K===!0&&(ae===!0||k!==w)){let zn=k===w&&ne.id===B;Je.setState(ne,k,zn)}let Vt=!1;ne.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Oo.state.version||st.outputColorSpace!==Ge||Q.isBatchedMesh&&st.batching===!1||!Q.isBatchedMesh&&st.batching===!0||Q.isInstancedMesh&&st.instancing===!1||!Q.isInstancedMesh&&st.instancing===!0||Q.isSkinnedMesh&&st.skinning===!1||!Q.isSkinnedMesh&&st.skinning===!0||Q.isInstancedMesh&&st.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&st.instancingColor===!1&&Q.instanceColor!==null||st.envMap!==qe||ne.fog===!0&&st.fog!==Ee||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Je.numPlanes||st.numIntersection!==Je.numIntersection)||st.vertexAlphas!==it||st.vertexTangents!==Ke||st.morphTargets!==tt||st.morphNormals!==$t||st.morphColors!==Ln||st.toneMapping!==an||Xe.isWebGL2===!0&&st.morphTargetsCount!==Ot)&&(Vt=!0):(Vt=!0,st.__version=ne.version);let Xi=st.currentProgram;Vt===!0&&(Xi=sr(ne,Z,Q));let nh=!1,ra=!1,Bo=!1,fn=Xi.getUniforms(),qi=st.uniforms;if(oe.useProgram(Xi.program)&&(nh=!0,ra=!0,Bo=!0),ne.id!==B&&(B=ne.id,ra=!0),nh||w!==k){fn.setValue(j,"projectionMatrix",k.projectionMatrix),fn.setValue(j,"viewMatrix",k.matrixWorldInverse);let zn=fn.map.cameraPosition;zn!==void 0&&zn.setValue(j,Be.setFromMatrixPosition(k.matrixWorld)),Xe.logarithmicDepthBuffer&&fn.setValue(j,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&fn.setValue(j,"isOrthographic",k.isOrthographicCamera===!0),w!==k&&(w=k,ra=!0,Bo=!0)}if(Q.isSkinnedMesh){fn.setOptional(j,Q,"bindMatrix"),fn.setOptional(j,Q,"bindMatrixInverse");let zn=Q.skeleton;zn&&(Xe.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),fn.setValue(j,"boneTexture",zn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(fn.setOptional(j,Q,"batchingTexture"),fn.setValue(j,"batchingTexture",Q._matricesTexture,M));let ko=te.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0&&Xe.isWebGL2===!0)&&Fe.update(Q,te,Xi),(ra||st.receiveShadow!==Q.receiveShadow)&&(st.receiveShadow=Q.receiveShadow,fn.setValue(j,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(qi.envMap.value=qe,qi.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ra&&(fn.setValue(j,"toneMappingExposure",_.toneMappingExposure),st.needsLights&&H0(qi,Bo),Ee&&ne.fog===!0&&xe.refreshFogUniforms(qi,Ee),xe.refreshMaterialUniforms(qi,ne,A,E,J),Ns.upload(j,eh(st),qi,M)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ns.upload(j,eh(st),qi,M),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&fn.setValue(j,"center",Q.center),fn.setValue(j,"modelViewMatrix",Q.modelViewMatrix),fn.setValue(j,"normalMatrix",Q.normalMatrix),fn.setValue(j,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let zn=ne.uniformsGroups;for(let Ho=0,G0=zn.length;Ho<G0;Ho++)if(Xe.isWebGL2){let ih=zn[Ho];Ye.update(ih,Xi),Ye.bind(ih,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function H0(k,Z){k.ambientLightColor.needsUpdate=Z,k.lightProbe.needsUpdate=Z,k.directionalLights.needsUpdate=Z,k.directionalLightShadows.needsUpdate=Z,k.pointLights.needsUpdate=Z,k.pointLightShadows.needsUpdate=Z,k.spotLights.needsUpdate=Z,k.spotLightShadows.needsUpdate=Z,k.rectAreaLights.needsUpdate=Z,k.hemisphereLights.needsUpdate=Z}function V0(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(k,Z,te){G.get(k.texture).__webglTexture=Z,G.get(k.depthTexture).__webglTexture=te;let ne=G.get(k);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(k,Z){let te=G.get(k);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(k,Z=0,te=0){I=k,L=Z,R=te;let ne=!0,Q=null,Ee=!1,Ue=!1;if(k){let qe=G.get(k);qe.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(j.FRAMEBUFFER,null),ne=!1):qe.__webglFramebuffer===void 0?M.setupRenderTarget(k):qe.__hasExternalTextures&&M.rebindTextures(k,G.get(k.texture).__webglTexture,G.get(k.depthTexture).__webglTexture);let it=k.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ue=!0);let Ke=G.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?Q=Ke[Z][te]:Q=Ke[Z],Ee=!0):Xe.isWebGL2&&k.samples>0&&M.useMultisampledRTT(k)===!1?Q=G.get(k).__webglMultisampledFramebuffer:Array.isArray(Ke)?Q=Ke[te]:Q=Ke,S.copy(k.viewport),N.copy(k.scissor),H=k.scissorTest}else S.copy(z).multiplyScalar(A).floor(),N.copy(W).multiplyScalar(A).floor(),H=Y;if(oe.bindFramebuffer(j.FRAMEBUFFER,Q)&&Xe.drawBuffers&&ne&&oe.drawBuffers(k,Q),oe.viewport(S),oe.scissor(N),oe.setScissorTest(H),Ee){let qe=G.get(k.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,qe.__webglTexture,te)}else if(Ue){let qe=G.get(k.texture),it=Z||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,qe.__webglTexture,te||0,it)}B=-1},this.readRenderTargetPixels=function(k,Z,te,ne,Q,Ee,Ue){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=G.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){oe.bindFramebuffer(j.FRAMEBUFFER,Ge);try{let qe=k.texture,it=qe.format,Ke=qe.type;if(it!==Kn&&Se.convert(it)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=Ke===Dn&&(Ne.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ke!==Ni&&Se.convert(Ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Ui&&(Xe.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=k.width-ne&&te>=0&&te<=k.height-Q&&j.readPixels(Z,te,ne,Q,Se.convert(it),Se.convert(Ke),Ee)}finally{let qe=I!==null?G.get(I).__webglFramebuffer:null;oe.bindFramebuffer(j.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(k,Z,te=0){let ne=Math.pow(2,-te),Q=Math.floor(Z.image.width*ne),Ee=Math.floor(Z.image.height*ne);M.setTexture2D(Z,0),j.copyTexSubImage2D(j.TEXTURE_2D,te,0,0,k.x,k.y,Q,Ee),oe.unbindTexture()},this.copyTextureToTexture=function(k,Z,te,ne=0){let Q=Z.image.width,Ee=Z.image.height,Ue=Se.convert(te.format),Ge=Se.convert(te.type);M.setTexture2D(te,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,te.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,te.unpackAlignment),Z.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ne,k.x,k.y,Q,Ee,Ue,Ge,Z.image.data):Z.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ne,k.x,k.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ue,Z.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ne,k.x,k.y,Ue,Ge,Z.image),ne===0&&te.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),oe.unbindTexture()},this.copyTextureToTexture3D=function(k,Z,te,ne,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ee=k.max.x-k.min.x+1,Ue=k.max.y-k.min.y+1,Ge=k.max.z-k.min.z+1,qe=Se.convert(ne.format),it=Se.convert(ne.type),Ke;if(ne.isData3DTexture)M.setTexture3D(ne,0),Ke=j.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)M.setTexture2DArray(ne,0),Ke=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ne.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ne.unpackAlignment);let tt=j.getParameter(j.UNPACK_ROW_LENGTH),$t=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Ln=j.getParameter(j.UNPACK_SKIP_PIXELS),an=j.getParameter(j.UNPACK_SKIP_ROWS),di=j.getParameter(j.UNPACK_SKIP_IMAGES),Ot=te.isCompressedTexture?te.mipmaps[Q]:te.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Ot.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ot.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,k.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,k.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,k.min.z),te.isDataTexture||te.isData3DTexture?j.texSubImage3D(Ke,Q,Z.x,Z.y,Z.z,Ee,Ue,Ge,qe,it,Ot.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ke,Q,Z.x,Z.y,Z.z,Ee,Ue,Ge,qe,Ot.data)):j.texSubImage3D(Ke,Q,Z.x,Z.y,Z.z,Ee,Ue,Ge,qe,it,Ot),j.pixelStorei(j.UNPACK_ROW_LENGTH,tt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,$t),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ln),j.pixelStorei(j.UNPACK_SKIP_ROWS,an),j.pixelStorei(j.UNPACK_SKIP_IMAGES,di),Q===0&&ne.generateMipmaps&&j.generateMipmap(Ke),oe.unbindTexture()},this.initTexture=function(k){k.isCubeTexture?M.setTextureCube(k,0):k.isData3DTexture?M.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?M.setTexture2DArray(k,0):M.setTexture2D(k,0),oe.unbindTexture()},this.resetState=function(){L=0,R=0,I=null,oe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ac?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===bo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?is:Qu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?wt:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Zl=class extends Ea{};Zl.prototype.isWebGL1Renderer=!0;var io=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ta=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},so=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new V,Aa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),a=Tt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tn=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,ua=new V,As=new V,Rs=new V,Cs=new he,fa=new he,h0=new $e,Ar=new V,da=new V,Rr=new V,Su=new he,yl=new he,Eu=new he,Ws=class extends Yt{constructor(e=new Tn){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new so(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Aa(n,3,0,!1)),Ts.setAttribute("uv",new Aa(n,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),h0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));let h=this.center;Cr(Ar.set(-.5,-.5,0),Rs,h,As,s,a),Cr(da.set(.5,-.5,0),Rs,h,As,s,a),Cr(Rr.set(.5,.5,0),Rs,h,As,s,a),Su.set(0,0),yl.set(1,0),Eu.set(1,1);let o=e.ray.intersectTriangle(Ar,da,Rr,!1,ua);if(o===null&&(Cr(da.set(-.5,.5,0),Rs,h,As,s,a),yl.set(0,1),o=e.ray.intersectTriangle(Ar,Rr,da,!1,ua),o===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:es.getInterpolation(ua,Ar,da,Rr,Su,yl,Eu,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Cr(i,e,t,n,s,a){Cs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fa.x=a*Cs.x-s*Cs.y,fa.y=s*Cs.x+a*Cs.y):fa.copy(Cs),i.copy(e),i.x+=fa.x,i.y+=fa.y,i.applyMatrix4(h0)}var Ra=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new $e,Tu=new $e,Lr=[],Au=new Qn,Lx=new $e,pa=new Le,ma=new Si,Xs=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ra(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Au.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),ma.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ls),Tu.multiplyMatrices(n,Ls),pa.matrixWorld=Tu,pa.raycast(e,Lr);for(let h=0,o=Lr.length;h<o;h++){let l=Lr[h];l.instanceId=a,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ra(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ca=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ru=new V,Cu=new V,Lu=new $e,_l=new Hs,Pr=new Si,Jl=class extends Yt{constructor(e=new yt,t=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Ru.fromBufferAttribute(t,s-1),Cu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ru.distanceTo(Cu);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,h=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=a,e.ray.intersectsSphere(Pr)===!1)return;Lu.copy(s).invert(),_l.copy(e.ray).applyMatrix4(Lu);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,r=new V,c=new V,u=new V,d=new V,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let _=p,b=y-1;_<b;_+=f){let L=g.getX(_),R=g.getX(_+1);if(r.fromBufferAttribute(m,L),c.fromBufferAttribute(m,R),_l.distanceSqToSegment(r,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,h.start),y=Math.min(m.count,h.start+h.count);for(let _=p,b=y-1;_<b;_+=f){if(r.fromBufferAttribute(m,_),c.fromBufferAttribute(m,_+1),_l.distanceSqToSegment(r,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}},Pu=new V,Iu=new V,ao=class extends Jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Pu.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pu.distanceTo(Iu);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jl=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Du=new $e,Kl=new Hs,Ir=new Si,Dr=new V,ro=class extends Yt{constructor(e=new yt,t=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,h=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=a,e.ray.intersectsSphere(Ir)===!1)return;Du.copy(s).invert(),Kl.copy(e.ray).applyMatrix4(Du);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,r=n.index,u=n.attributes.position;if(r!==null){let d=Math.max(0,h.start),f=Math.min(r.count,h.start+h.count);for(let g=d,v=f;g<v;g++){let m=r.getX(g);Dr.fromBufferAttribute(u,m),Uu(Dr,m,l,s,e,t,this)}}else{let d=Math.max(0,h.start),f=Math.min(u.count,h.start+h.count);for(let g=d,v=f;g<v;g++)Dr.fromBufferAttribute(u,g),Uu(Dr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Uu(i,e,t,n,s,a,h){let o=Kl.distanceSqToPoint(i);if(o<t){let l=new V;Kl.closestPointToPoint(i,l),l.applyMatrix4(n);let r=s.ray.origin.distanceTo(l);if(r<s.near||r>s.far)return;a.push({distance:r,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:h})}}var kn=class extends Bn{constructor(e,t,n,s,a,h,o,l,r){super(e,t,n,s,a,h,o,l,r),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let h=1;h<=e;h++)n=this.getPoint(h/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,a=n.length,h;t?h=t:h=e*n[a-1];let o=0,l=a-1,r;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),r=n[s]-h,r<0)o=s+1;else if(r>0)l=s-1;else{l=s;break}if(s=l,n[s]===h)return s/(a-1);let c=n[s],d=n[s+1]-c,f=(h-c)/d;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let h=this.getPoint(s),o=this.getPoint(a),l=t||(h.isVector2?new he:new V);return l.copy(o).sub(h).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,s=[],a=[],h=[],o=new V,l=new $e;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new V)}a[0]=new V,h[0]=new V;let r=Number.MAX_VALUE,c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=r&&(r=c,n.set(1,0,0)),u<=r&&(r=u,n.set(0,1,0)),d<=r&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),h[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),h[f]=h[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ln(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}h[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(ln(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),h[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},La=class extends Hn{constructor(e=0,t=0,n=1,s=1,a=0,h=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=h,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new he,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,h=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(h?a=0:a=s),this.aClockwise===!0&&!h&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),r=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=r-this.aY;l=d*c-f*u+this.aX,r=d*u+f*c+this.aY}return n.set(l,r)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ql=class extends La{constructor(e,t,n,s,a,h){super(e,t,n,n,s,a,h),this.isArcCurve=!0,this.type="ArcCurve"}};function Cc(){let i=0,e=0,t=0,n=0;function s(a,h,o,l){i=a,e=o,t=-3*a+3*h-2*o-l,n=2*a-2*h+o+l}return{initCatmullRom:function(a,h,o,l,r){s(h,o,r*(o-a),r*(l-h))},initNonuniformCatmullRom:function(a,h,o,l,r,c,u){let d=(h-a)/r-(o-a)/(r+c)+(o-h)/c,f=(o-h)/c-(l-h)/(c+u)+(l-o)/u;d*=c,f*=c,s(h,o,d,f)},calc:function(a){let h=a*a,o=h*a;return i+e*a+t*h+n*o}}}var Ur=new V,bl=new Cc,Ml=new Cc,wl=new Cc,Pa=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){let n=t,s=this.points,a=s.length,h=(a-(this.closed?0:1))*e,o=Math.floor(h),l=h-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let r,c;this.closed||o>0?r=s[(o-1)%a]:(Ur.subVectors(s[0],s[1]).add(s[0]),r=Ur);let u=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?c=s[(o+2)%a]:(Ur.subVectors(s[a-1],s[a-2]).add(s[a-1]),c=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(r.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),bl.initNonuniformCatmullRom(r.x,u.x,d.x,c.x,g,v,m),Ml.initNonuniformCatmullRom(r.y,u.y,d.y,c.y,g,v,m),wl.initNonuniformCatmullRom(r.z,u.z,d.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(r.x,u.x,d.x,c.x,this.tension),Ml.initCatmullRom(r.y,u.y,d.y,c.y,this.tension),wl.initCatmullRom(r.z,u.z,d.z,c.z,this.tension));return n.set(bl.calc(l),Ml.calc(l),wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zu(i,e,t,n,s){let a=(n-e)*.5,h=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+h)*l+(-3*t+3*n-2*a-h)*o+a*i+t}function Px(i,e){let t=1-i;return t*t*e}function Ix(i,e){return 2*(1-i)*i*e}function Dx(i,e){return i*i*e}function ya(i,e,t,n){return Px(i,e)+Ix(i,t)+Dx(i,n)}function Ux(i,e){let t=1-i;return t*t*t*e}function zx(i,e){let t=1-i;return 3*t*t*i*e}function Nx(i,e){return 3*(1-i)*i*i*e}function Fx(i,e){return i*i*i*e}function _a(i,e,t,n,s){return Ux(i,e)+zx(i,t)+Nx(i,n)+Fx(i,s)}var oo=class extends Hn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,a=this.v1,h=this.v2,o=this.v3;return n.set(_a(e,s.x,a.x,h.x,o.x),_a(e,s.y,a.y,h.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Hn{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){let n=t,s=this.v0,a=this.v1,h=this.v2,o=this.v3;return n.set(_a(e,s.x,a.x,h.x,o.x),_a(e,s.y,a.y,h.y,o.y),_a(e,s.z,a.z,h.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends Hn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Hn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Hn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,a=this.v1,h=this.v2;return n.set(ya(e,s.x,a.x,h.x),ya(e,s.y,a.y,h.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends Hn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,s=this.v0,a=this.v1,h=this.v2;return n.set(ya(e,s.x,a.x,h.x),ya(e,s.y,a.y,h.y),ya(e,s.z,a.z,h.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,a=(s.length-1)*e,h=Math.floor(a),o=a-h,l=s[h===0?h:h-1],r=s[h],c=s[h>s.length-2?s.length-1:h+1],u=s[h>s.length-3?s.length-1:h+2];return n.set(zu(o,l.x,r.x,c.x,u.x),zu(o,l.y,r.y,c.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},nc=Object.freeze({__proto__:null,ArcCurve:Ql,CatmullRomCurve3:Pa,CubicBezierCurve:oo,CubicBezierCurve3:ec,EllipseCurve:La,LineCurve:lo,LineCurve3:tc,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),ic=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let h=s[a]-n,o=this.curves[a],l=o.getLength(),r=l===0?0:1-h/l;return o.getPointAt(r,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let h=a[s],o=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,l=h.getPoints(o);for(let r=0;r<l.length;r++){let c=l[r];n&&n.equals(c)||(t.push(c),n=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nc[s.type]().fromJSON(s))}return this}},Ia=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lo(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new co(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,h){let o=new oo(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(a,h));return this.curves.push(o),this.currentPoint.set(a,h),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,h){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,h),this}absarc(e,t,n,s,a,h){return this.absellipse(e,t,n,n,s,a,h),this}ellipse(e,t,n,s,a,h,o,l){let r=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+r,t+c,n,s,a,h,o,l),this}absellipse(e,t,n,s,a,h,o,l){let r=new La(e,t,n,s,a,h,o,l);if(this.curves.length>0){let u=r.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(r);let c=r.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ki=class i extends yt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ln(s,0,Math.PI*2);let a=[],h=[],o=[],l=[],r=[],c=1/t,u=new V,d=new he,f=new V,g=new V,v=new V,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){let _=n+y*c*s,b=Math.sin(_),L=Math.cos(_);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*b,u.y=e[R].y,u.z=e[R].x*L,h.push(u.x,u.y,u.z),d.x=y/t,d.y=R/(e.length-1),o.push(d.x,d.y);let I=l[3*R+0]*b,B=l[3*R+1],w=l[3*R+0]*L;r.push(I,B,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let b=_+y*e.length,L=b,R=b+e.length,I=b+e.length+1,B=b+1;a.push(L,R,B),a.push(I,B,R)}this.setIndex(a),this.setAttribute("position",new We(h,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(r,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ei=class i extends ki{constructor(e=1,t=1,n=4,s=8){let a=new Ia;a.absarc(0,-t/2,e,Math.PI*1.5,0),a.absarc(0,t/2,e,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Ti=class i extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let a=[],h=[],o=[],l=[],r=new V,c=new he;h.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;r.x=e*Math.cos(f),r.y=e*Math.sin(f),h.push(r.x,r.y,r.z),o.push(0,0,1),c.x=(h[d]/e+1)/2,c.y=(h[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class i extends yt{constructor(e=1,t=1,n=1,s=32,a=1,h=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:h,thetaStart:o,thetaLength:l};let r=this;s=Math.floor(s),a=Math.floor(a);let c=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;y(),h===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function y(){let b=new V,L=new V,R=0,I=(t-e)/n;for(let B=0;B<=a;B++){let w=[],S=B/a,N=S*(t-e)+e;for(let H=0;H<=s;H++){let F=H/s,T=F*l+o,C=Math.sin(T),E=Math.cos(T);L.x=N*C,L.y=-S*n+m,L.z=N*E,u.push(L.x,L.y,L.z),b.set(C,I,E).normalize(),d.push(b.x,b.y,b.z),f.push(F,1-S),w.push(g++)}v.push(w)}for(let B=0;B<s;B++)for(let w=0;w<a;w++){let S=v[w][B],N=v[w+1][B],H=v[w+1][B+1],F=v[w][B+1];c.push(S,N,F),c.push(N,H,F),R+=6}r.addGroup(p,R,0),p+=R}function _(b){let L=g,R=new he,I=new V,B=0,w=b===!0?e:t,S=b===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let H=0;H<=s;H++){let T=H/s*l+o,C=Math.cos(T),E=Math.sin(T);I.x=w*E,I.y=m*S,I.z=w*C,u.push(I.x,I.y,I.z),d.push(0,S,0),R.x=C*.5+.5,R.y=E*.5*S+.5,f.push(R.x,R.y),g++}for(let H=0;H<s;H++){let F=L+H,T=N+H;b===!0?c.push(T,T+1,F):c.push(T+1,T,F),B+=3}r.addGroup(p,B,b===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class i extends Zt{constructor(e=1,t=1,n=32,s=1,a=!1,h=0,o=Math.PI*2){super(0,e,t,n,s,a,h,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:h,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Da=class extends Ia{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ia().fromJSON(s))}return this}},Ox={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,a=u0(i,0,s,t,!0),h=[];if(!a||a.next===a.prev)return h;let o,l,r,c,u,d,f;if(n&&(a=Gx(i,e,a,t)),i.length>80*t){o=r=i[0],l=c=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>r&&(r=u),d>c&&(c=d);f=Math.max(r-o,c-l),f=f!==0?32767/f:0}return Ua(a,h,t,o,l,f,0),h}};function u0(i,e,t,n,s){let a,h;if(s===e1(i,e,t,n)>0)for(a=e;a<t;a+=n)h=Nu(a,i[a],i[a+1],h);else for(a=t-n;a>=e;a-=n)h=Nu(a,i[a],i[a+1],h);return h&&wo(h,h.next)&&(Na(h),h=h.next),h}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wo(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ua(i,e,t,n,s,a,h){if(!i)return;!h&&a&&Yx(i,n,s,a);let o=i,l,r;for(;i.prev!==i.next;){if(l=i.prev,r=i.next,a?kx(i,n,s,a):Bx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Na(i),i=r.next,o=r.next;continue}if(i=r,i===o){h?h===1?(i=Hx(ss(i),e,t),Ua(i,e,t,n,s,a,2)):h===2&&Vx(i,e,t,n,s,a):Ua(ss(i),e,t,n,s,a,1);break}}}function Bx(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,a=t.x,h=n.x,o=e.y,l=t.y,r=n.y,c=s<a?s<h?s:h:a<h?a:h,u=o<l?o<r?o:r:l<r?l:r,d=s>a?s>h?s:h:a>h?a:h,f=o>l?o>r?o:r:l>r?l:r,g=n.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Ds(s,o,a,l,h,r,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kx(i,e,t,n){let s=i.prev,a=i,h=i.next;if(Bt(s,a,h)>=0)return!1;let o=s.x,l=a.x,r=h.x,c=s.y,u=a.y,d=h.y,f=o<l?o<r?o:r:l<r?l:r,g=c<u?c<d?c:d:u<d?u:d,v=o>l?o>r?o:r:l>r?l:r,m=c>u?c>d?c:d:u>d?u:d,p=sc(f,g,e,t,n),y=sc(v,m,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==h&&Ds(o,c,l,u,r,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==h&&Ds(o,c,l,u,r,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==h&&Ds(o,c,l,u,r,d,_.x,_.y)&&Bt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==h&&Ds(o,c,l,u,r,d,b.x,b.y)&&Bt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Hx(i,e,t){let n=i;do{let s=n.prev,a=n.next.next;!wo(s,a)&&f0(s,n,n.next,a)&&za(s,a)&&za(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Na(n),Na(n.next),n=i=a),n=n.next}while(n!==i);return ss(n)}function Vx(i,e,t,n,s,a){let h=i;do{let o=h.next.next;for(;o!==h.prev;){if(h.i!==o.i&&jx(h,o)){let l=d0(h,o);h=ss(h,h.next),l=ss(l,l.next),Ua(h,e,t,n,s,a,0),Ua(l,e,t,n,s,a,0);return}o=o.next}h=h.next}while(h!==i)}function Gx(i,e,t,n){let s=[],a,h,o,l,r;for(a=0,h=e.length;a<h;a++)o=e[a]*n,l=a<h-1?e[a+1]*n:i.length,r=u0(i,o,l,n,!1),r===r.next&&(r.steiner=!0),s.push(Jx(r));for(s.sort(Wx),a=0;a<s.length;a++)t=Xx(s[a],t);return t}function Wx(i,e){return i.x-e.x}function Xx(i,e){let t=qx(i,e);if(!t)return e;let n=d0(t,i);return ss(n,n.next),ss(t,t.next)}function qx(i,e){let t=e,n=-1/0,s,a=i.x,h=i.y;do{if(h<=t.y&&h>=t.next.y&&t.next.y!==t.y){let d=t.x+(h-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===a))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,r=s.y,c=1/0,u;t=s;do a>=t.x&&t.x>=l&&a!==t.x&&Ds(h<r?a:n,h,l,r,h<r?n:a,h,t.x,t.y)&&(u=Math.abs(h-t.y)/(a-t.x),za(t,i)&&(u<c||u===c&&(t.x>s.x||t.x===s.x&&$x(s,t)))&&(s=t,c=u)),t=t.next;while(t!==o);return s}function $x(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function Yx(i,e,t,n){let s=i;do s.z===0&&(s.z=sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zx(s)}function Zx(i){let e,t,n,s,a,h,o,l,r=1;do{for(t=i,i=null,a=null,h=0;t;){for(h++,n=t,o=0,e=0;e<r&&(o++,n=n.nextZ,!!n);e++);for(l=r;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,r*=2}while(h>1);return i}function sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ds(i,e,t,n,s,a,h,o){return(s-h)*(e-o)>=(i-h)*(a-o)&&(i-h)*(n-o)>=(t-h)*(e-o)&&(t-h)*(a-o)>=(s-h)*(n-o)}function jx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kx(i,e)&&(za(i,e)&&za(e,i)&&Qx(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||wo(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wo(i,e){return i.x===e.x&&i.y===e.y}function f0(i,e,t,n){let s=Nr(Bt(i,e,t)),a=Nr(Bt(i,e,n)),h=Nr(Bt(t,n,i)),o=Nr(Bt(t,n,e));return!!(s!==a&&h!==o||s===0&&zr(i,t,e)||a===0&&zr(i,n,e)||h===0&&zr(t,i,n)||o===0&&zr(t,e,n))}function zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Nr(i){return i>0?1:i<0?-1:0}function Kx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&f0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function za(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function Qx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function d0(i,e){let t=new ac(i.i,i.x,i.y),n=new ac(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Nu(i,e,t,n){let s=new ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Na(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function e1(i,e,t,n){let s=0;for(let a=e,h=t-n;a<t;a+=n)s+=(i[h]-i[a])*(i[a+1]+i[h+1]),h=a;return s}var ba=class i{static area(e){let t=e.length,n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],a=[];Fu(e),Ou(n,e);let h=e.length;t.forEach(Fu);for(let l=0;l<t.length;l++)s.push(h),h+=t[l].length,Ou(n,t[l]);let o=Ox.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Fu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fo=class i extends yt{constructor(e=new Da([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],a=[],h=[],o=0,l=0;if(Array.isArray(e)===!1)r(e);else for(let c=0;c<e.length;c++)r(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(h,2));function r(c){let u=s.length/3,d=c.extractPoints(t),f=d.shape,g=d.holes;ba.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];ba.isClockWise(y)===!0&&(g[m]=y.reverse())}let v=ba.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),a.push(0,0,1),h.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){let y=v[m],_=y[0]+u,b=y[1]+u,L=y[2]+u;n.push(_,b,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return t1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let h=t[e.shapes[s]];n.push(h)}return new i(n,e.curveSegments)}};function t1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Pt=class i extends yt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,h=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:h,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(h+o,Math.PI),r=0,c=[],u=new V,d=new V,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,b=0;p===0&&h===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){let R=L/t;u.x=-e*Math.cos(s+R*a)*Math.sin(h+_*o),u.y=e*Math.cos(h+_*o),u.z=e*Math.sin(s+R*a)*Math.sin(h+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+b,1-_),y.push(r++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=c[p][y+1],b=c[p][y],L=c[p+1][y],R=c[p+1][y+1];(p!==0||h>0)&&f.push(_,b,R),(p!==n-1||l<Math.PI)&&f.push(b,L,R)}this.setIndex(f),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ni=class i extends yt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);let h=[],o=[],l=[],r=[],c=new V,u=new V,d=new V;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*a,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),r.push(g/s),r.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;h.push(v,m,y),h.push(m,p,y)}this.setIndex(h),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(r,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var po=class i extends yt{constructor(e=new ho(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,s=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:a};let h=e.computeFrenetFrames(t,a);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;let o=new V,l=new V,r=new he,c=new V,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new We(u,3)),this.setAttribute("normal",new We(d,3)),this.setAttribute("uv",new We(f,2));function v(){for(let _=0;_<t;_++)m(_);m(a===!1?t:0),y(),p()}function m(_){c=e.getPointAt(_/t,c);let b=h.normals[_],L=h.binormals[_];for(let R=0;R<=s;R++){let I=R/s*Math.PI*2,B=Math.sin(I),w=-Math.cos(I);l.x=w*b.x+B*L.x,l.y=w*b.y+B*L.y,l.z=w*b.z+B*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+n*l.x,o.y=c.y+n*l.y,o.z=c.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let b=1;b<=s;b++){let L=(s+1)*(_-1)+(b-1),R=(s+1)*_+(b-1),I=(s+1)*_+b,B=(s+1)*(_-1)+b;g.push(L,R,B),g.push(R,I,B)}}function y(){for(let _=0;_<=t;_++)for(let b=0;b<=s;b++)r.x=_/t,r.y=b/s,f.push(r.x,r.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new nc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var mo=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var go=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function n1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let h;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}h=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}h=n,n=0;break t}break n}for(;n<h;){let o=n+h>>>1;e<t[o]?h=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let h=0;h!==s;++h)t[h]=n[a+h];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,h=e+1,o=s[a],l=s[h];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:a=e,o=2*t-n;break;case Fh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:h=e,l=2*n-t;break;case Fh:h=1,l=n+s[1]-s[0];break;default:h=e-1,l=t}let r=(n-t)*.5,c=this.valueSize;this._weightPrev=r/(t-o),this._weightNext=r/(l-n),this._offsetPrev=a*c,this._offsetNext=h*c}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=e*o,r=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let L=0;L!==o;++L)a[L]=p*h[c+L]+y*h[r+L]+_*h[l+L]+b*h[u+L];return a}},oc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=e*o,r=l-o,c=(n-t)/(s-t),u=1-c;for(let d=0;d!==o;++d)a[d]=h[r+d]*u+h[l+d]*c;return a}},lc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ii=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,a=0,h=s-1;for(;a!==s&&n[a]<e;)++a;for(;h!==-1&&n[h]>t;)--h;if(++h,a!==0||h!==s){a>=h&&(h=Math.max(h,1),a=h-1);let o=this.getValueSize();this.times=n.slice(a,h),this.values=this.values.slice(a*o,h*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let h=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(h!==null&&h>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,h),e=!1;break}h=l}if(s!==void 0&&n1(s))for(let o=0,l=s.length;o!==l;++o){let r=s[o];if(isNaN(r)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,r),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,a=e.length-1,h=1;for(let o=1;o<a;++o){let l=!1,r=e[o],c=e[o+1];if(r!==c&&(o!==1||r!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==h){e[h]=e[o];let u=o*n,d=h*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++h}}if(a>0){e[h]=e[a];for(let o=a*n,l=h*n,r=0;r!==n;++r)t[l+r]=t[o+r];++h}return h!==e.length?(this.times=e.slice(0,h),this.values=t.slice(0,h*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Hr;var as=class extends ii{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=kr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends ii{};cc.prototype.ValueTypeName="color";var hc=class extends ii{};hc.prototype.ValueTypeName="number";var uc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,h=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),r=e*o;for(let c=r+o;r!==c;r+=4)hi.slerpFlat(a,0,h,r-o,h,r,l);return a}},Fa=class extends ii{InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.DefaultInterpolation=Hr;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends ii{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=kr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends ii{};fc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,n){let s=this,a=!1,h=0,o=0,l,r=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){o++,a===!1&&s.onStart!==void 0&&s.onStart(c,h,o),a=!0},this.itemEnd=function(c){h++,s.onProgress!==void 0&&s.onProgress(c,h,o),h===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return r.push(c,u),this},this.removeHandler=function(c){let u=r.indexOf(c);return u!==-1&&r.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=r.length;u<d;u+=2){let f=r[u],g=r[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},i1=new dc,pc=class{constructor(e){this.manager=e!==void 0?e:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$s=class extends Oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sl=new $e,Bu=new V,ku=new V,xo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Hu=new $e,ga=new V,El=new V,mc=class extends xo{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(ga),El.copy(n.position),El.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(El),n.updateMatrixWorld(),s.makeTranslation(-ga.x,-ga.y,-ga.z),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}},Ba=class extends Oa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gc=class extends xo{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends Oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var vo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vu(){return(typeof performance>"u"?Date:performance).now()}var Lc="\\[\\]\\.:\\/",s1=new RegExp("["+Lc+"]","g"),Pc="[^"+Lc+"]",a1="[^"+Lc.replace("\\.","")+"]",r1=/((?:WC+[\/:])*)/.source.replace("WC",Pc),o1=/(WCOD+)?/.source.replace("WCOD",a1),l1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pc),c1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pc),h1=new RegExp("^"+r1+o1+l1+c1+"$"),u1=["material","materials","bones","map"],xc=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s1,"")}static parseTrackName(e){let t=h1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);u1.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let h=0;h<a.length;h++){let o=a[h];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let r=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===r){r=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(r!==void 0){if(e[r]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[r]}}let h=e[s];if(h===void 0){let r=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+r+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=a}else h.fromArray!==void 0&&h.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=h):Array.isArray(h)?(l=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=xc;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);var yo=class{constructor(e,t,n=0,s=1/0){this.ray=new Hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return vc(e,this,n,t),n.sort(Gu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)vc(e[s],this,n,t);return n.sort(Gu),n}};function Gu(i,e){return i.distance-e.distance}function vc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let a=0,h=s.length;a<h;a++)vc(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var So={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},f1=new Gs(-1,1,1,-1,0,1),Ic=class extends yt{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},d1=new Ic,Vi=class{constructor(e){this._mesh=new Le(d1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Js=class extends Un{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hi.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ha=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let h,o;this.inverse?(h=0,o=1):(h=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,h,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Eo=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var To=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Js(So),this.copyPass.material.blending=ci,this.clock=new vo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,a=this.passes.length;s<a;s++){let h=this.passes[s];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),h.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ha!==void 0&&(h instanceof Ha?n=!0:h instanceof Eo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ao=class extends Un{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let a,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=s}};var p0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var js=class i extends Un{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(a,h,{type:Dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qt(a,h,{type:Dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qt(a,h,{type:Dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),h=Math.round(h/2)}let o=p0;this.highPassUniforms=Hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/a,1/h),a=Math.round(a/2),h=Math.round(h/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let r=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=r,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=So;this.copyUniforms=Hi.clone(c.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Or,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new en,this.fsQuad=new Vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new he(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=h}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};js.BlurDirectionX=new he(1,0);js.BlurDirectionY=new he(0,1);var m0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ro=class extends Un{constructor(){super();let e=m0;this.uniforms=Hi.clone(e.uniforms),this.material=new mo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Va={alta:{dpr:2,shadows:2048,grass:1,post:!0,blur:!0},media:{dpr:1.5,shadows:1536,grass:.65,post:!0,blur:!1},baixa:{dpr:1,shadows:1024,grass:.35,post:!1,blur:!1}},p1={uniforms:{tDiffuse:{value:null},uRes:{value:new he(1,1)},uBlur:{value:1},uFocus:{value:.52},uWarm:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uBlur, uFocus, uWarm; varying vec2 vUv;
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
    }`};function g0(i,e){let t=new Ea({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.toneMapping=ka,t.shadowMap.enabled=e.shadows>0,t.shadowMap.type=yc;let n={renderer:t,composer:null,q:e},s,a;return n.setup=(h,o)=>{let l=new Qt(4,4,{samples:4,type:Dn}),r=new To(t,l);r.addPass(new Ao(h,o)),s=new js(new he(256,256),.22,.7,.92),r.addPass(s),r.addPass(new Ro),a=new Js(p1),a.uniforms.uBlur.value=n.q.blur?1:0,r.addPass(a),n.composer=r,n.final=a,n.bloom=s},n.resize=(h,o)=>{n.w=h,n.h=o;let l=Math.min(window.devicePixelRatio||1,n.q.dpr);t.setPixelRatio(l),t.setSize(h,o,!1),n.composer&&(n.composer.setPixelRatio(l),n.composer.setSize(h,o),a.uniforms.uRes.value.set(h*l,o*l))},n.render=(h,o)=>{n.composer&&n.q.post?n.composer.render():t.render(h,o)},n.setQuality=h=>{n.q=h,a&&(a.uniforms.uBlur.value=h.blur?1:0),n.resize(n.w,n.h)},n}function Jt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.pick=n=>n[Math.floor(t()*n.length)],t.sign=()=>t()<.5?-1:1,t}var He=(i,e,t)=>Math.min(t,Math.max(e,i)),be=(i,e,t)=>i+(e-i)*t,wn=i=>(i=He(i,0,1),i*i*(3-2*i)),x0=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2);var Me=Math.PI*2,Gv=new $e,se=(i,e,t)=>new $e().makeTranslation(i,e,t),fe=i=>new $e().makeRotationX(i),pe=i=>new $e().makeRotationY(i),mt=i=>new $e().makeRotationZ(i),Ai=(i,e=i,t=i)=>new $e().makeScale(i,e,t),re=(...i)=>{let e=new $e;for(let t of i)e.multiply(t);return e},m1=new V(0,1,0);function _t(i,e){let t=new hi().setFromUnitVectors(m1,e.clone().normalize());return new $e().compose(i,t,new V(1,1,1))}var x=i=>new de(i);function nt(i,e,t){return i.clone().lerp(e,t)}function at(i,e){return i.clone().multiplyScalar(e)}function Vn(i,e,t=.06){let n={};return i.getHSL(n),new de().setHSL((n.h+e.range(-t,t)*.25+1)%1,He(n.s+e.range(-t,t),0,1),He(n.l+e.range(-t,t),0,1))}function At(i,e,t,n){let s=[];for(let a=0;a<=n;a++){let h=a/n,o=(1-h)*(1-h),l=2*(1-h)*h,r=h*h;s.push(new V(i.x*o+e.x*l+t.x*r,i.y*o+e.y*l+t.y*r,i.z*o+e.z*l+t.z*r))}return s}function It(i,e){let t=He(e,0,1)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,a=i[n].clone().lerp(i[n+1],s),h=i[n+1].clone().sub(i[n]).normalize();return{p:a,d:h}}var Gn={uTime:{value:0},uWind:{value:1},uDay:{value:1}},g1=Qe.normal_fragment_begin.replace("normal *= faceDirection;","normal *= mix(faceDirection, 1.0, vFix);");function si(i={}){let e=new kt({vertexColors:!0,side:St,roughness:i.roughness??.62,metalness:0});return e.userData.u={uSway:{value:i.sway??.5},uDroop:{value:0},uGlow:{value:i.glow??.1},uPhase:{value:i.phase??0}},e.onBeforeCompile=t=>{Object.assign(t.uniforms,Gn,e.userData.u),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        uniform float uGlow, uDroop, uDay; varying float vFix;`).replace("#include <normal_fragment_begin>",g1).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(l * 1.05, l * 0.95, l * 0.62), uDroop * 0.55);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * uGlow * (0.25 + 0.75 * uDay);`)},e.customProgramCacheKey=()=>"plant-v1",e}var Ga=[{h:0,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1},{h:4.8,top:989240,hor:3358830,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1976908,exp:.95,cloud:4148600,night:1},{h:5.9,top:3688574,hor:15769724,sun:16751206,si:.5,sky:8423608,gnd:4866640,hi:.7,fog:11047072,exp:.98,cloud:15902864,night:.3},{h:7.2,top:6267612,hor:16571572,sun:16766624,si:2.3,sky:13623547,gnd:10127464,hi:.95,fog:15523012,exp:1,cloud:16773344,night:0},{h:10,top:5019868,hor:13887734,sun:16773852,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14280944,exp:1,cloud:16777215,night:0},{h:14.5,top:5019868,hor:14084338,sun:16773334,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14412014,exp:1,cloud:16777215,night:0},{h:16.8,top:5936847,hor:16374958,sun:16763264,si:2.6,sky:13950196,gnd:11045476,hi:.95,fog:15785152,exp:1.02,cloud:16771272,night:0},{h:18.1,top:4872860,hor:16357990,sun:16745544,si:1.7,sky:11051212,gnd:8413784,hi:.8,fog:15246472,exp:1.02,cloud:16294008,night:.1},{h:19,top:2240096,hor:11561608,sun:13142704,si:.45,sky:6318248,gnd:3551306,hi:.66,fog:6969984,exp:.98,cloud:8018568,night:.65},{h:20,top:923446,hor:2899052,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1845320,exp:.95,cloud:3820152,night:1},{h:24,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1}];for(let i of Ga)for(let e of["top","hor","sun","sky","gnd","fog","cloud"])i[e]=new de(i[e]);function x1(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.45,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new kn(i);return n.colorSpace=wt,n}function v0(i,e,t){let n={hour:9,night:0,sunDir:new V,cur:{}},s={top:new de,hor:new de,sun:new de,sky:new de,gnd:new de,fog:new de,cloud:new de},a={uTop:{value:new de},uHor:{value:new de},uSunDir:{value:new V(0,1,0)},uSunCol:{value:new de},uNight:{value:0},uTime:Gn.uTime},h=new Le(new Pt(400,32,20),new Gt({side:mn,depthWrite:!1,fog:!1,uniforms:a,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uTop, uHor, uSunDir, uSunCol; uniform float uNight, uTime; varying vec3 vDir;
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
      }`}));h.renderOrder=-10,h.frustumCulled=!1,i.add(h);let o=new $s(16777215,8947848,1);i.add(o);let l=new Ys(16777215,2.5);l.castShadow=t.shadows>0,l.shadow.mapSize.set(t.shadows||512,t.shadows||512);let r=l.shadow.camera;r.left=-19,r.right=19,r.top=19,r.bottom=-19,r.near=1,r.far=90,l.shadow.bias=-4e-4,l.shadow.normalBias=.03,l.shadow.radius=3,i.add(l),i.add(l.target),i.fog=new io(16777215,38,230);let c=x1(),u=new Nt,d=[],f=Jt(42);for(let g=0;g<16;g++){let v=new Nt,m=f.range(22,46),p=new Tn({map:c,transparent:!0,depthWrite:!1,fog:!1,opacity:f.range(.55,.9)});d.push(p);for(let b=0;b<7;b++){let L=new Ws(p),R=f.range(.4,1);L.scale.set(m*R*.7,m*R*.34,1),L.position.set(f.range(-.5,.5)*m,f.range(-.06,.1)*m,f.range(-3,3)),v.add(L)}let y=f()*Me,_=f.range(120,300);v.position.set(Math.cos(y)*_,f.range(46,110),Math.sin(y)*_),v.userData.v=f.range(.4,1.1),u.add(v)}return u.renderOrder=-5,i.add(u),n.setHour=g=>{g=(g%24+24)%24,n.hour=g;let v=0;for(;v<Ga.length-2&&Ga[v+1].h<=g;)v++;let m=Ga[v],p=Ga[v+1],y=He((g-m.h)/(p.h-m.h),0,1);for(let w in s)s[w].copy(m[w]).lerp(p[w],y);let _=be(m.si,p.si,y),b=be(m.hi,p.hi,y);n.night=be(m.night,p.night,y);let L=g>5.6&&g<18.9,R=L?(g-5.6)/13.3:(g+24-18.9)%24/10.7,I=Math.sin(R*Math.PI)*(L?1:.75)+.16,B=be(-1.15,1.15,R);n.sunDir.set(-Math.sin(B)*Math.cos(I),Math.sin(I),Math.cos(B)*Math.cos(I)*.75+.12).normalize(),l.position.copy(n.sunDir).multiplyScalar(48).add(l.target.position),l.color.copy(s.sun),l.intensity=_,o.color.copy(s.sky),o.groundColor.copy(s.gnd),o.intensity=b,i.fog.color.copy(s.fog),a.uTop.value.copy(s.top),a.uHor.value.copy(s.hor),a.uSunDir.value.copy(n.sunDir),a.uSunCol.value.copy(s.sun),a.uNight.value=n.night,e.toneMappingExposure=be(m.exp,p.exp,y);for(let w of d)w.color.copy(s.cloud);Gn.uDay.value=1-n.night*.8,n.cur=s,n.sunI=_},n.update=(g,v)=>{h.position.copy(v);for(let m of u.children)m.position.x+=m.userData.v*g,m.position.x>320&&(m.position.x=-320)},n.sun=l,n.hemi=o,n.setHour(9),n}function Co(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},h={},o=i[0].morphTargetsRelative,l=new yt,r=0;for(let c=0;c<i.length;++c){let u=i[c],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;h[f]===void 0&&(h[f]=[]),h[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(r,f,c),r+=f}}if(t){let c=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}l.setIndex(u)}for(let c in a){let u=y0(a[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in h){let u=h[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<h[c].length;++v)f.push(h[c][v][d]);let g=y0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function y0(i){let e,t,n,s=-1,a=0;for(let r=0;r<i.length;++r){let c=i[r];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=c.array.length}let h=new e(a),o=0;for(let r=0;r<i.length;++r)h.set(i[r].array,o),o+=i[r].array.length;let l=new Ft(h,t,n);return s!==void 0&&(l.gpuType=s),l}var Wa=new V,v1=new et,Xa=new V,Dc=new V,qa=new V,Lo=new V,Wt=class{constructor(){this.pos=[],this.col=[],this.nrm=[],this.fix=[],this.idx=[],this.n=0}vert(e,t,n,s,a,h,o,l){return Wa.set(e,t,n),a&&Wa.applyMatrix4(a),this.pos.push(Wa.x,Wa.y,Wa.z),this.col.push(s.r,s.g,s.b),this.fix.push(h===void 0?0:1),h===void 0?this.nrm.push(NaN,0,0):(Xa.set(h,o,l),a&&Xa.applyMatrix3(v1.setFromMatrix4(a)).normalize(),this.nrm.push(Xa.x,Xa.y,Xa.z)),this.n++}quadGrid(e,t,n,s){let a=n+1;for(let h=0;h<t;h++)for(let o=0;o<n;o++){let l=e+h*a+o,r=l+1,c=l+a,u=c+1;s?this.idx.push(l,r,c,r,u,c):this.idx.push(l,c,r,r,c,u)}}petal(e,t){let n=t.nu??5,s=t.nv??4,a=t.L,h=t.W/2,o=t.a??1,l=t.b??.6,r=t.cup??0,c=t.curl??0,u=t.curlPow??1.6,d=t.ruffle??0,f=t.rf??2,g=t.twist??0,v=t.fold??0,m=t.base??0,[p,y,_]=t.cols,b=t.vein??0,L=t.phase??0,R=t.tipNotch??0,I=this.n,B=new de,w=0,S=0;for(let N=0;N<=n;N++){let H=N/n,F=t.angFn?t.angFn(H):(t.curl0??0)+c*Math.pow(H,u);if(N>0){let $=(N-.5)/n,K=t.angFn?t.angFn($):(t.curl0??0)+c*Math.pow($,u);w+=Math.cos(K)*a/n,S+=Math.sin(K)*a/n}let T=-Math.sin(F),C=Math.cos(F),E=Math.cos(F),A=Math.sin(F),D=Math.pow(Math.sin(Math.PI*Math.pow(Math.min(H,.999),o)),l);D=Math.max(D,m*(1-H));let U=h*D,z=g*H,W=Math.cos(z),Y=Math.sin(z);for(let $=0;$<=s;$++){let K=$/s*2-1,ae=K*U,J=-r*U*K*K-v*U*Math.abs(K)+d*h*Math.sin(K*Math.PI*f+L+H*5)*H*H,ue=R?-R*a*(1-Math.abs(K))*Math.pow(H,6):0,Te=ae*W-J*Y,Be=ae*Y+J*W;H<.5?B.copy(p).lerp(y,H*2):B.copy(y).lerp(_,(H-.5)*2),b&&B.multiplyScalar(1-b*(1-Math.abs(K))*(1-H*.5)+b*.4),this.vert(Te,w+T*Be+E*ue,S+C*Be+A*ue,B,e)}}this.quadGrid(I,n,s,!1)}tube(e,t,n,s,a,h,o=5,l=!1){let r=this.n,c=new de,u=t.length,d=new V(.13,.2,.97);for(let f=0;f<u;f++){let g=f/(u-1);Dc.copy(t[Math.min(u-1,f+1)]).sub(t[Math.max(0,f-1)]).normalize(),qa.crossVectors(Dc,d).normalize(),Lo.crossVectors(qa,Dc).normalize();let v=typeof n=="function"?n(g):n+(s-n)*g;c.copy(a).lerp(h,g);for(let m=0;m<=o;m++){let p=m/o*Me,y=Math.cos(p)*v,_=Math.sin(p)*v;this.vert(t[f].x+qa.x*y+Lo.x*_,t[f].y+qa.y*y+Lo.y*_,t[f].z+qa.z*y+Lo.z*_,c,e)}}if(this.quadGrid(r,u-1,o,!0),l){let f=t[u-1];this.blob(new $e().copy(e||new $e).multiply(new $e().makeTranslation(f.x,f.y,f.z)),typeof n=="function"?n(1):s,typeof n=="function"?n(1):s,h,h,5,3)}}blob(e,t,n,s,a,h=7,o=5,l){let r=this.n,c=new de;for(let u=0;u<=o;u++){let d=u/o*Math.PI,f=-Math.cos(d),g=Math.sin(d),v=u/o;l?v<.5?c.copy(s).lerp(a,v*2):c.copy(a).lerp(l,v*2-1):c.copy(s).lerp(a,v);for(let m=0;m<=h;m++){let p=m/h*Me;this.vert(Math.cos(p)*g*t,f*n,Math.sin(p)*g*t,c,e)}}this.quadGrid(r,o,h,!1)}lathe(e,t,n,s,a=10,h,o=0,l=5){let r=this.n,c=new de,u=t.length;for(let d=0;d<u;d++){let f=d/(u-1);h?h(f,c):c.copy(n).lerp(s,f);for(let g=0;g<=a;g++){let v=g/a*Me,m=t[d][0]*(1+o*f*f*Math.sin(v*l));this.vert(Math.cos(v)*m,t[d][1],Math.sin(v)*m,c,e)}}this.quadGrid(r,u-1,a,!1)}card(e,t,n,s,a,h,o,l,r=.25){let c=this.n;this.vert(0,0,0,s,e,h,o,l),this.vert(-t/2,n*.5,r*t,a,e,h,o,l),this.vert(t/2,n*.5,r*t,a,e,h,o,l),this.vert(0,n,0,a,e,h,o,l),this.idx.push(c,c+2,c+1,c+1,c+2,c+3)}build(){let e=new yt;e.setAttribute("position",new We(this.pos,3)),e.setAttribute("color",new We(this.col,3)),e.setAttribute("aFix",new We(this.fix,1)),e.setIndex(this.idx),e.computeVertexNormals();let t=e.attributes.normal.array,n=this.nrm;for(let s=0;s<n.length;s+=3)Number.isNaN(n[s])||(t[s]=n[s],t[s+1]=n[s+1],t[s+2]=n[s+2]);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var ze=V,ot={leaf:x(5016122),dark:x(2909748),light:x(10275934),stem:x(5934908),gray:x(8363132),blue:x(7315596),wood:x(7227955),woodDark:x(5190692),lime:x(7976264),deep:x(2381102)},Wn=2.39996323,sy=x(16777215),ui=(i,e)=>Array.isArray(i)?be(i[0],i[1],e):i,y1={a:.75,b:.75,cup:0,fold:.35,curl:.5,curlPow:1.3,nu:4,nv:2,vein:.3};function bt(i,e,t,n){let s=Vn(n.c??ot.leaf,t,.05);i.petal(e,{...y1,...n,cols:[at(s,.7),s,nt(s,n.tip??ot.light,n.tipMix??.3)]})}function Uc(i,e,t,n){let s=n.n;for(let a=0;a<s;a++){let h=be(n.t0??.15,n.t1??.85,(a+t()*.6)/s),{p:o}=It(e,h),l=(n.az0??0)+a*(n.azStep??Wn)+t.range(-.3,.3),r=(1-(n.taper??.3)*h)*(.85+t()*.3),c=re(se(o.x,o.y,o.z),pe(l),fe((n.tilt??1)+t.range(-.2,.2)));bt(i,c,t,{...n,L:n.L*r,W:n.W*r})}}function Rn(i,e,t){for(let n=0;n<t.n;n++){let s=n*Wn+e.range(-.25,.25),a=.75+e()*.4,h=re(pe(s),se(0,0,t.r??.005),fe((t.tilt??.9)+e.range(-.2,.2)));bt(i,h,e,{...t,L:t.L*a,W:t.W*a})}}function Ks(i,e,t,n){let s=n.n;for(let a=0;a<s;a++){let h=s>1?a/(s-1)-.5:0,o=1-Math.abs(h)*(n.sideShrink??.5);bt(i,re(e,mt(-h*(n.spread??2.2))),t,{...n,L:n.L*o,W:n.W*o})}}function hn(i,e,t,n,s=.06,a=6){let h=Math.cos(n),o=Math.sin(n);return At(new ze(0,0,0),new ze(h*t*.2+i.range(-s,s)*e,e*.55,o*t*.2+i.range(-s,s)*e),new ze(h*t,e,o*t),a)}function _1(i,e=0,t=0){let{p:n,d:s}=It(i,1),a=_t(n,s);return e?re(se(n.x,n.y,n.z),pe(-t+Math.PI/2),fe(e)):a}function Rt(i,e,t,n,s,a=1){if(s=He(s,0,1),n.sepals){let l=n.sepals;for(let r=0;r<l.n;r++){let c=re(e,pe(r/l.n*Me+.3),se(0,0,(l.r??.002)*a),fe(be(.25,l.tilt??1.3,s)));i.petal(c,{L:l.L*a,W:l.W*a,a:.8,b:.8,cup:.5,curl:.3,nu:3,nv:2,cols:[at(l.c??ot.leaf,.8),l.c??ot.leaf,l.c??ot.leaf]})}}let h=t()*Me;for(let l of n.layers){l.azList&&(h=h);let r=l.n;for(let c=0;c<r;c++){let u=r>1?c/(r-1):1,d=h+(l.azList?l.azList[c]:l.golden?c*Wn:c/r*Me)+t.range(-1,1)*(l.jit??.06)+(l.az??0),f=be(ui(l.tiltC??.1,u),ui(l.tilt,u),s)+t.range(-1,1)*(l.tj??.05),g=be(ui(l.curlC??-.2,u),ui(l.curl??0,u),s),v=be(l.closedScale??.6,1,s)*a*(1+t.range(-.07,.07)),m=re(e,pe(d),se(0,ui(l.y??0,u)*a,ui(l.r??.002,u)*a),fe(f)),p=l.cols;l.cols2&&(p=p.map((_,b)=>nt(_,l.cols2[b],u))),l.pick&&(p=l.pick);let y=l.cj??.035;i.petal(m,{L:ui(l.L,u)*v,W:ui(l.W,u)*v,a:l.a??1.2,b:l.b??.55,cup:be(ui(l.cupC??l.cup??.4,u),ui(l.cup??.4,u),s),curl:g,curlPow:l.curlPow??1.6,ruffle:l.ruffle??0,rf:l.rf??2,phase:t()*6,twist:l.twist?t.range(-l.twist,l.twist):0,nu:l.nu??5,nv:l.nv??4,vein:l.vein??.12,tipNotch:l.notch??0,base:l.base??0,cols:[Vn(p[0],t,y),Vn(p[1],t,y),Vn(p[2],t,y)]})}h+=l.azStep??Math.PI/Math.max(1,r)}let o=n.center;if(o){if(o.type==="dome"&&i.blob(re(e,se(0,(o.y??0)*a,0)),o.r*a,o.h*a,o.cols[0],o.cols[1],o.seg??10,5,o.cols[2]),o.stamens&&s>.35){let l=o.stamens;for(let r=0;r<l.n;r++){let c=r/l.n*Me+t()*.3,u=(l.spread??.4)*(.6+t()*.6),d=l.len*a*(.8+t()*.3),f=At(new ze(0,0,0),new ze(Math.cos(c)*u*d*.3,d*.6,Math.sin(c)*u*d*.3),new ze(Math.cos(c)*u*d,d*(1-u*.3),Math.sin(c)*u*d),3);i.tube(e,f,.0012*a*(l.thick??1),.001*a*(l.thick??1),l.c,l.c,3);let g=f[3];i.blob(re(e,se(g.x,g.y,g.z)),(l.tipR??.004)*a,(l.tipR??.004)*a*1.4,l.tip,l.tip,4,3)}}if(o.type==="trumpet"){let l=be(.55,1,s),r=[[o.r0*.6,0],[o.r0,o.L*.3],[be(o.r0,o.r1,.5)*l,o.L*.75],[o.r1*l,o.L],[o.r1*l*1.12,o.L*1.03]].map(([c,u])=>[c*a,u*a]);i.lathe(e,r,o.cols[0],o.cols[1],o.seg??12,null,o.ruffle??.1,o.rf??6)}if(o.type==="column"&&s>.3){let l=At(new ze(0,0,0),new ze(0,o.L*.5*a,.004),new ze(0,o.L*a,.012*a),4);i.tube(e,l,.004*a,.003*a,o.cols[0],o.cols[1],4);for(let c=0;c<10;c++){let u=.55+t()*.4,d=It(l,u).p,f=t()*Me;i.blob(re(e,se(d.x+Math.cos(f)*.008*a,d.y,d.z+Math.sin(f)*.008*a)),.0035*a,.0035*a,o.dots,o.dots,4,3)}let r=l[4];i.blob(re(e,se(r.x,r.y,r.z)),.006*a,.005*a,o.cols[1],o.cols[1],5,3)}o.type==="spadix"&&i.blob(re(e,se(0,o.L*.5*a,0)),o.r*a,o.L*.5*a,o.cols[0],o.cols[1],6,5)}}function Po(i,e,t,n,s){let a=Math.round(n.n*be(.5,1,s)),h=n.r*be(.55,1,s);for(let o=0;o<a;o++){let l=1-(o+.5)/a*(1+(n.cover??.6)),r=Math.sqrt(Math.max(0,1-l*l)),c=o*Wn,u=Math.cos(c)*r,d=Math.sin(c)*r,f=s<.3?nt(n.bud??ot.lime,t.pick(n.cols),s*2):Vn(t.pick(n.cols),t,.05),g=nt(f,x(16777215),.25),v=re(e,_t(new ze(u*h,l*h*(n.squash??.8),d*h),new ze(u,l,d)),pe(t()*Me)),m=n.fs*(.8+t()*.4),p=n.np??4,y=1.25;for(let _=0;_<p;_++)i.card(re(v,pe(_/p*Me),fe(y)),m*.9,m,f,g,0,Math.cos(y),-Math.sin(y),.15)}}function zc(i,e,t=ot.lime){let n=hn(e,.06,.01,e()*Me,.05,3);i.tube(null,n,.004,.003,nt(t,x(16777215),.3),t,4);let s=n[3];for(let a=0;a<2;a++)bt(i,re(se(s.x,s.y,s.z),pe(a*Math.PI+.4),fe(1)),e,{L:.05,W:.03,c:t,a:.9,b:.6,fold:.2,curl:.4});bt(i,re(se(s.x,s.y,s.z),pe(1.9),fe(.3)),e,{L:.028,W:.014,c:t,a:.9,b:.7})}function jt(i,e,t,n,s){let a=Math.round(e.range(t.stems[0],t.stems[1]));t.basal&&Rn(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n,n:Math.round(t.basal.n*(.5+n*.5))});for(let h=0;h<a;h++){let o=t.faceZ?Math.PI/2+e.range(-.5,.5):h*Wn+e.range(-.4,.4),l=a>1?(t.spread??.06)*Math.sqrt((h+.5)/a):0,r=t.H*n*e.range(.78,1.08),c=(t.lean??.08)*r*e.range(.4,1.3)+l,u=hn(e,r,c,o,t.wob??.05,7),d=se(Math.cos(o)*l*.5,0,Math.sin(o)*l*.5);for(let g of u)g.applyMatrix4(d);let f=(t.stemR??.004)*(.6+.4*n);if(i.tube(null,u,f,f*.65,t.stemC??ot.stem,nt(t.stemC??ot.stem,ot.light,.2),5),t.leaf&&Uc(i,u,e,{...t.leaf,L:t.leaf.L*(.5+.5*n),W:t.leaf.W*(.5+.5*n),n:Math.max(1,Math.round(t.leaf.n*n))}),s>=0&&t.head){let g=He(s+e.range(-.12,.12)*(s>.9?0:1),0,1),v=t.headsPer??1;for(let m=0;m<v;m++){let p=u,y=o;if(v>1){let{p:L}=It(u,.86+.14*(m/v));y=o+m*2.1+e();let R=t.pedicel??.08;p=At(L,new ze(L.x+Math.cos(y)*R*.3,L.y+R*.7,L.z+Math.sin(y)*R*.3),new ze(L.x+Math.cos(y)*R,L.y+R,L.z+Math.sin(y)*R),3),i.tube(null,p,f*.5,f*.4,ot.stem,ot.stem,4)}let _=typeof t.head=="function"?t.head(e):t.head,b=(t.headTilt??0)*(.7+.3*g)+e.range(-.1,.1);Rt(i,_1(p,b,y),e,_,g,t.headK??1)}}}}function gt(i,e,t,n,s){let a=t.R*n,h=t.H*n,o=Math.max(3,Math.round(t.branches*(.5+.5*n))),l=[];for(let r=0;r<o;r++){let c=r*Wn+e.range(-.3,.3),u=(r+.5)/o,d=be(.15,1,Math.sqrt(u))*(t.splay??1),f=be(h,Math.hypot(a,h*.6),u)*e.range(.85,1.05),g=new ze(Math.cos(c)*Math.sin(d)*f,Math.cos(d)*f,Math.sin(c)*Math.sin(d)*f);g.x=He(g.x,-a,a),g.z=He(g.z,-a,a);let v=At(new ze(0,0,0),new ze(g.x*.35,g.y*.75,g.z*.35),g,6);i.tube(null,v,(t.stemR??.006)*(.5+.5*n),.002,t.wood??ot.wood,t.stemC??ot.stem,4),Uc(i,v,e,{...t.leaf,n:Math.round(t.leaf.n*(.6+.4*n)),t0:.25,t1:1,taper:.1}),t.leafTip&&Ks(i,re(se(g.x,g.y,g.z),pe(c),fe(.7)),e,t.leafTip),l.push({pts:v,az:c})}for(let r=0;r<Math.round((t.fill??24)*n);r++){let c=e()*Me,u=Math.acos(e())*(t.splay??1),d=e.range(.5,.92),f=new ze(Math.cos(c)*Math.sin(u),Math.cos(u),Math.sin(c)*Math.sin(u)),g=new ze(f.x*a*d,f.y*h*d*1.05,f.z*a*d);bt(i,_t(g,f.clone().add(new ze(0,.5,0)).normalize()),e,{...t.leaf,L:t.leaf.L*e.range(.9,1.3),W:t.leaf.W*e.range(.9,1.3)})}if(s>=0&&t.head){let r=Math.max(1,Math.round(t.heads*(.6+.4*n)));for(let c=0;c<r;c++){let u=l[c%l.length],d=c>=l.length,f=u.pts,g=u.az;if(d||t.stalk){g=c*Wn*1.3+e();let b=e.range(.2,.95),L=b*.95*(t.splay??1),R=be(h,Math.hypot(a,h*.6),b)*(1+(t.stalk??.06)),I=new ze(Math.cos(g)*Math.sin(L)*R,Math.cos(L)*R,Math.sin(g)*Math.sin(L)*R);f=At(new ze(0,0,0),new ze(I.x*.3,I.y*.8,I.z*.3),I,5),i.tube(null,f,.003,.002,t.stemC??ot.stem,t.stemC??ot.stem,4)}let v=He(s+(s>.9?0:e.range(-.1,.1)),0,1),m=typeof t.head=="function"?t.head(e):t.head,{p,d:y}=It(f,1),_=y.clone().lerp(new ze(0,1,0),t.headUp??.45).normalize();m.ball?Po(i,_t(p,_),e,m.ball,v):Rt(i,_t(p,_),e,m,v,t.headK??1)}}}function Sn(i,e,t,n,s){if(t.basal&&Rn(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n}),t.basalFan)for(let h=0;h<t.basalFan.count;h++){let o=h*Wn,l=t.basalFan.stalk*n*e.range(.7,1.1),r=At(new ze(0,0,0),new ze(Math.cos(o)*l*.3,l*.7,Math.sin(o)*l*.3),new ze(Math.cos(o)*l*.8,l*.8,Math.sin(o)*l*.8),4);i.tube(null,r,.003,.002,ot.stem,ot.stem,4);let c=r[4];Ks(i,re(se(c.x,c.y,c.z),pe(-o+Math.PI/2),fe(1.2)),e,{...t.basalFan,L:t.basalFan.L*n,W:t.basalFan.W*n})}let a=Math.round(e.range(t.stems[0],t.stems[1])*(.5+.5*n));for(let h=0;h<a;h++){let o=h*Wn+e(),l=t.H*n*e.range(.75,1.1),r=hn(e,l,(t.lean??.18)*l*Math.sqrt((h+.3)/a),o,.03,8);if(i.tube(null,r,t.stemR??.004,.002,t.stemC??ot.stem,t.stemC??ot.stem,4),t.leaf&&Uc(i,r,e,{...t.leaf,n:Math.round(t.leaf.n*n),t0:.05,t1:t.from??.5}),s<0)continue;let c=Math.round(t.florets*(.6+.4*n)),u=t.from??.55;for(let d=0;d<c;d++){let f=d/(c-1),g=be(u,1,f),{p:v,d:m}=It(r,g),p=d*(t.whorl??Wn)+e()*.3,y=He(s*1.6-f*.6,0,1),_=(1-f*(t.taper??.5))*be(.45,1,y),b=nt(t.cols[0],t.cols[1],f*.8+e()*.2),L=nt(t.bud??ot.lime,b,He(y*1.5,0,1)),R=re(_t(v,m),pe(p),se(0,0,t.off??.006));if(t.type==="card")for(let I=0;I<2;I++)i.card(re(R,pe(I*.9-.45),fe(be(.5,1,y))),t.fs*_,t.fs*1.5*_,at(L,.75),nt(L,x(16777215),.2),0,.5,.86,.3);else if(t.type==="bell"){let I=t.fs*_,B=re(R,fe(2));i.lathe(B,[[I*.18,0],[I*.3,I*.35],[I*.36,I*.8],[I*.5,I]],at(L,.85),nt(L,x(16777215),.25),6,null,.1,5)}else Rt(i,re(R,fe(1.25)),e,{layers:[{n:5,L:t.fs,W:t.fs*.85,a:1.2,b:.5,tilt:1.15,tiltC:.15,cup:.5,curl:.2,nu:2,nv:2,cols:[at(L,.8),L,nt(L,x(16777215),.15)]}],center:t.eye?{type:"dome",r:t.fs*.22,h:t.fs*.15,cols:[t.eye,t.eye],seg:5}:null},y,_)}}}function Xn(i,e,t,n,s){let a=Math.round(t.stems*(.5+.5*n));for(let h=0;h<a;h++){let o=h*Wn+e.range(-.2,.2),l=(h+.5)/a,r=t.L*n*e.range(.7,1.1),c=t.up*(1-l*(t.upFall??.6)),u=t.out*e.range(.7,1.1),d=t.drop*l*e.range(.6,1.2),f=Math.cos(o),g=Math.sin(o),v=At(new ze(f*.02,0,g*.02),new ze(f*u*r*.6,c*r,g*u*r*.6),new ze(f*u*r,(c*.4-d)*r,g*u*r),9);if(i.tube(null,v,t.stemR??.003,.0015,t.stemC??ot.stem,t.stemC??ot.stem,4),t.frond){let m=t.frond.pairs;for(let p=1;p<=m;p++){let y=p/(m+1),{p:_,d:b}=It(v,y),L=Math.sin(Math.PI*Math.pow(y,.7))*t.frond.L*n+.01,R=new ze(-b.z,0,b.x).normalize();for(let I of[-1,1]){let B=R.clone().multiplyScalar(I).add(b.clone().multiplyScalar(.45)).add(new ze(0,-.25,0)).normalize();bt(i,_t(_,B),e,{L,W:L*t.frond.wr,c:t.frond.c,a:.7,b:.8,nu:2,nv:1,fold:.2,curl:.3,vein:.2})}}}else{let m=Math.round(t.leaf.n*(.5+.5*n));for(let p=0;p<m;p++){let y=be(.12,1,(p+e()*.5)/m),{p:_,d:b}=It(v,y),L=new ze(e.range(-1,1),e.range(.1,1),e.range(-1,1)).add(b.clone().multiplyScalar(.5)).normalize();bt(i,_t(_,L),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.15),W:t.leaf.W*e.range(.7,1.15)})}}if(s>=0&&t.flower){let m=t.flower.per;for(let p=0;p<m;p++){let y=be(.35,1,(p+e())/m),{p:_,d:b}=It(v,y),L=new ze(f*.7,.55,g*.7).add(new ze(e.range(-.4,.4),e.range(-.1,.4),e.range(-.4,.4))).normalize(),R=_.clone().add(L.clone().multiplyScalar(.025));t.flower.make(i,_t(R,L),e,He(s+e.range(-.15,.1),0,1))}}}}function os(i,e,t,n,s){let a=t.H*n,h=t.R*n,o=a+h*.55,l=t.bark??ot.wood,r=at(l,.75),c=e.range(-.08,.08)*a,u=At(new ze(0,0,0),new ze(c,a*.5,e.range(-.05,.05)*a),new ze(c*.5,a,0),6),d=t.trunkR*(.35+.65*n);i.tube(null,u,H=>d*(1.25-.55*H+.5*Math.pow(1-H,6)),0,r,l,8);let f=u[6],g=Math.max(3,Math.round(t.limbs*(.5+.5*n))),v=[];for(let H=0;H<g;H++){let F=H*Wn+e.range(-.3,.3),T=be(.25,1.25,(H+.5)/g),C=h*e.range(.75,1.05),E=It(u,e.range(.7,1)).p,A=new ze(E.x+Math.cos(F)*Math.sin(T)*C,f.y+Math.cos(T)*C*.9+h*.15,E.z+Math.sin(F)*Math.sin(T)*C),D=At(E,new ze(be(E.x,A.x,.4),be(E.y,A.y,.75),be(E.z,A.z,.4)),A,5);i.tube(null,D,d*.42,d*.1,l,l,5),v.push(A,It(D,.6).p);for(let U=0;U<2;U++){let z=It(D,e.range(.35,.8)).p,W=F+e.range(-1.2,1.2),Y=C*e.range(.35,.6),$=new ze(z.x+Math.cos(W)*Y,z.y+Y*e.range(.2,.8),z.z+Math.sin(W)*Y);i.tube(null,[z,z.clone().lerp($,.5).add(new ze(0,Y*.1,0)),$],d*.16,d*.05,l,l,4),v.push($)}}let m=new ze(c*.5,o,0),p=new ze,y=new ze,_=new ze,b=new ze,L=new ze,R=s<0?0:s,I=be(1,t.foliage??1,R),B=t.leafCols??[ot.leaf,ot.dark,ot.lime],w=v.map(H=>({c:H.clone().add(new ze(0,h*.08,0)),r:h*e.range(.27,.4)}));w.push({c:new ze(f.x,f.y+h*.75,f.z),r:h*.45});let S=t.blossom&&R>.5&&I<.6?at(t.blossom.cols[0],.9):at(B[0],.6);for(let H of w)i.blob(re(se(H.c.x,H.c.y,H.c.z),pe(e()*3)),H.r*.66,H.r*.52,at(S,.62),at(S,1.05),7,5);let N=(H,F,T,C,E)=>{for(let A=0;A<H;A++){let D=w[Math.floor(e()*w.length)];_.set(e.range(-1,1),e.range(-.75,1),e.range(-1,1)).normalize(),y.copy(_).multiplyScalar(D.r*e.range(.66,1.04)+E),y.y*=.8,y.add(D.c),p.copy(y).sub(m).normalize().lerp(_,.45),p.y+=.3,p.normalize(),b.set(e.range(-1,1),e.range(-1,1),e.range(-1,1)),L.crossVectors(_,b).normalize(),b.crossVectors(L,_).normalize(),y.addScaledVector(L,-F*.4);let U=new $e().makeBasis(b,L,_.clone().addScaledVector(L,e.range(-.5,.5)).normalize()).setPosition(y),z=Vn(e.pick(T),e,.05),W=F*(1-C+e()*C*2),Y=p.clone().applyMatrix3(new et().setFromMatrix4(U).invert()).normalize();i.card(U,W*.52,W*1.12,at(z,.74),z,Y.x,Y.y,Y.z,.25)}};if(N(Math.round((t.leaves??800)*1.35*n*I),(t.leafSize??.19)*(.6+.4*n),B,.3,0),R>0&&t.blossom&&N(Math.round(t.blossom.n*1.3*n*be(.3,1,R)),t.blossom.size*be(.55,1,R),R<.3?t.blossom.buds??t.blossom.cols:t.blossom.cols,.3,.02),R>.6&&t.fruit)for(let H=0;H<t.fruit.n;H++){let F=w[Math.floor(e()*w.length)];_.set(e.range(-1,1),e.range(-.9,.2),e.range(-1,1)).normalize();let T=_.clone().multiplyScalar(F.r*.92).add(F.c);if(T.clone().sub(m).dot(_)<0){H--,e()<.2&&H++;continue}i.blob(se(T.x,T.y,T.z),t.fruit.r,t.fruit.r*(t.fruit.tall??1.1),at(t.fruit.c,.8),t.fruit.c,7,5,nt(t.fruit.c,x(16777215),.2))}}function Nc(i=1.5,e=2.15){let t=[],n=i/2,s=e-n;for(let a=0;a<=6;a++)t.push(new ze(-n,s*a/6,0));for(let a=1;a<=12;a++){let h=Math.PI-a/12*Math.PI;t.push(new ze(Math.cos(h)*n,s+Math.sin(h)*n,0))}for(let a=1;a<=6;a++)t.push(new ze(n,s*(1-a/6),0));return t}function Io(i,e,t,n,s){let a=Nc(),h=He(n*.56,.05,.56),o=(l,r)=>It(a,l<0?r:1-r);for(let l of[-1,1])for(let r=0;r<(t.strands??3);r++){let c=[],u=e()*Me,d=Math.round(40*h)+3,f=h*e.range(.8,1);for(let v=0;v<=d;v++){let m=v/d*f,{p}=o(l,m),y=u+m*38;c.push(new ze(p.x+Math.cos(y)*.07,p.y+Math.sin(y*.7)*.03,p.z+Math.sin(y)*.09))}i.tube(null,c,.008,.003,t.wood??ot.wood,ot.stem,4);let g=Math.round(t.leaf.n*f*2);for(let v=0;v<g;v++){let{p:m}=It(c,e()),p=new ze(e.range(-1,1),e.range(-.2,1),e.range(-1,1)).normalize(),y=m.clone().add(p.clone().multiplyScalar(.03));bt(i,_t(y,p),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.2),W:t.leaf.W*e.range(.7,1.2)})}if(s>=0&&t.flower){let v=Math.round(t.flower.n*f*2/(t.strands??3));for(let m=0;m<v;m++){let p=e.range(t.flower.t0??.1,1),{p:y}=It(c,p);t.flower.make(i,y,e,He(s+e.range(-.15,.1),0,1))}}}}var ct=V,fi=class{constructor(e=1){this.g=[],this.rng=Jt(e)}add(e,t,n,s=.03,a){e=e.index?e.toNonIndexed():e,t&&e.applyMatrix4(t);let h=e.attributes.position.count,o=new Float32Array(h*3),l=new de(n),r=1+this.rng.range(-s,s)*2;if(l.multiplyScalar(r),a){let c=new de(a).multiplyScalar(r),u=e.attributes.position;e.computeBoundingBox();let d=e.boundingBox.min.y,f=e.boundingBox.max.y,g=new de;for(let v=0;v<h;v++)g.copy(l).lerp(c,(u.getY(v)-d)/(f-d+1e-6)),o[v*3]=g.r,o[v*3+1]=g.g,o[v*3+2]=g.b}else for(let c=0;c<h;c++)o[c*3]=l.r,o[c*3+1]=l.g,o[c*3+2]=l.b;return e.setAttribute("color",new Ft(o,3)),e.deleteAttribute("uv"),this.g.push(e),this}box(e,t,n,s,a,h,o,l,r){return this.add(new Mn(e,t,n),re(se(s,a,h),l??new $e),o,r)}cyl(e,t,n,s,a,h,o,l=10,r,c,u){return this.add(new Zt(e,t,n,l),re(se(s,a,h),r??new $e),o,c,u)}sph(e,t,n,s,a,h=1,o=1,l=1,r=10,c,u){return this.add(new Pt(e,r,Math.max(4,r-3)),re(se(t,n,s),Ai(h,o,l)),a,c,u)}lathe(e,t,n,s,a,h=16,o,l){return this.add(new ki(e.map(([r,c])=>new he(r,c)),h),se(t,n,s),a,l,o)}mesh(e,t=!0){let n=new Le(Co(this.g),e);return n.castShadow=t,n.receiveShadow=!0,n}},ls=new kt({vertexColors:!0,roughness:.86}),b1=new kt({vertexColors:!0,roughness:.86,side:St}),on=.18,ai=[{id:0,name:"Jardim da frente",cost:0,rect:[-5,5,-4.6,3.5],tag:[0,0]},{id:1,name:"Varanda",cost:120,rect:[-4.8,4.8,-6.9,-4.9],tag:[0,-5.6],h:2.6,desc:"Vasos suspensos, jardineiras nas janelas e vasos na varanda."},{id:2,name:"Canteiros do leste",cost:500,rect:[5,12.3,-8.6,3.5],tag:[8.7,-1.5],desc:"Dois canteiros, vasos e o lugar da sua primeira \xE1rvore."},{id:3,name:"Laguinho",cost:1200,rect:[-12.3,-5,-8.6,3.5],tag:[-8.6,-1.5],desc:"Um lago para ninfeias e l\xF3tus, com canteiro em volta."},{id:4,name:"Alameda dos arcos",cost:2800,rect:[-5,5,5,14.3],tag:[0,9.3],desc:"Arcos para trepadeiras e quatro canteiros floridos."},{id:5,name:"Pomar",cost:5500,rect:[5,12.3,5,14.3],tag:[8.7,9.6],desc:"Espa\xE7o para tr\xEAs \xE1rvores e canteiros \xE0 sombra."},{id:6,name:"Prado das flores",cost:9e3,rect:[-12.3,-5,5,14.3],tag:[-8.7,9.6],desc:"Canteiros grandes para um mar de flores."},{id:7,name:"Horta",cost:350,rect:[-9.45,-5.2,-8.75,-5.2],tag:[-7.3,-6.9],desc:"Oito canteirinhos para hortali\xE7as, temperos e morangos."},{id:8,name:"Estufa",cost:3200,rect:[5.45,9.25,-8.75,-5.5],tag:[7.35,-5.9],desc:"Seis vasos onde tudo cresce em dobro, sem regar e em qualquer esta\xE7\xE3o. S\xF3 aqui nascem as plantas mais raras."}],Qs={x:-8.6,z:-.6,rx:2.5,rz:1.9},Fc=[{z:0,x:-2.9,zc:-1.3,cols:3,rows:2},{z:0,x:2.9,zc:-1.3,cols:3,rows:2},{z:2,x:8.7,zc:.4,cols:3,rows:2},{z:2,x:8.7,zc:-3.2,cols:3,rows:2},{z:3,x:-8.6,zc:-4.3,cols:5,rows:1},{z:4,x:-2.9,zc:7.6,cols:3,rows:2},{z:4,x:2.9,zc:7.6,cols:3,rows:2},{z:4,x:-2.9,zc:11.6,cols:3,rows:2},{z:4,x:2.9,zc:11.6,cols:3,rows:2},{z:5,x:10.4,zc:6.6,cols:3,rows:1},{z:5,x:10.2,zc:13,cols:3,rows:1},{z:7,x:-7.3,zc:-5.95,cols:4,rows:1,veg:!0},{z:7,x:-7.3,zc:-7.85,cols:4,rows:1,veg:!0},{z:6,x:-8.7,zc:7.2,cols:4,rows:2},{z:6,x:-8.7,zc:10.5,cols:4,rows:2},{z:6,x:-8.7,zc:13.3,cols:4,rows:1}],Do=.82,Oc=[{z:0,x:-1.35,zc:-4.1},{z:0,x:1.35,zc:-4.1},{z:1,x:-4.05,zc:-5.75,porch:!0},{z:1,x:4.05,zc:-5.75,porch:!0},{z:2,x:6.1,zc:2.5},{z:2,x:11.4,zc:2.5},{z:3,x:-6,zc:2.5},{z:3,x:-11.4,zc:2.5},{z:4,x:-1.25,zc:5.6},{z:4,x:1.25,zc:5.6},{z:5,x:6,zc:5.9},{z:6,x:-5.9,zc:5.9},{z:6,x:-5.9,zc:13.6}],Bc=[{z:2,x:10.4,zc:-6.6},{z:3,x:-10.6,zc:-6.9},{z:5,x:7.3,zc:7.9},{z:5,x:10.6,zc:9.9},{z:5,x:7.2,zc:12.3},{z:6,x:-11.4,zc:5.9+0}],_0=[{z:4,x:0,zc:7.4},{z:4,x:0,zc:11.4}],M1=[-3.4,-1.55,1.55,3.4],w1=[-2.75,2.75],ea=[{id:"lanternas",name:"Lanternas do caminho",price:150,beauty:15,desc:"Luz quentinha para as noites no jardim."},{id:"banco",name:"Banco de madeira",price:240,beauty:15,desc:"Um cantinho para admirar as flores."},{id:"bebedouro",name:"Banho de passarinho",price:380,beauty:20,desc:"Os p\xE1ssaros agradecem a \xE1gua fresca."},{id:"casinha",name:"Casinha de passarinho",price:480,beauty:20,desc:"Um lar colorido no alto de um poste."},{id:"carrinho",name:"Carrinho de m\xE3o florido",price:700,beauty:30,desc:"Um velho carrinho transbordando flores."},{id:"anao",name:"An\xE3o de jardim",price:600,beauty:25,desc:"O guardi\xE3o simp\xE1tico dos canteiros."}];function S1(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=Jt(5);e.fillStyle="#6f9a50",e.fillRect(0,0,512,512);for(let s=0;s<2600;s++){let a=t()*512,h=t()*512,o=t.range(6,34);e.fillStyle=`hsla(${t.range(78,106)},${t.range(30,46)}%,${t.range(32,46)}%,${t.range(.05,.16)})`;for(let l of[-512,0,512])for(let r of[-512,0,512])e.beginPath(),e.ellipse(a+l,h+r,o,o*t.range(.5,1),t()*3,0,Me),e.fill()}let n=new kn(i);return n.wrapS=n.wrapT=Bs,n.repeat.set(36,36),n.colorSpace=wt,n.anisotropy=4,n}function E1(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=Jt(9),a=[];for(let l=0;l<9;l++)a.push([Math.round(s.range(1,5))*s.sign(),Math.round(s.range(1,5))*s.sign(),s()*6,s.range(.4,1)]);let h=(l,r)=>{let c=0;for(let[u,d,f,g]of a)c+=Math.sin((l*u+r*d)*Me/256+f)*g;return c};for(let l=0;l<256;l++)for(let r=0;r<256;r++){let c=h(r+1,l)-h(r-1,l),u=h(r,l+1)-h(r,l-1),d=(l*256+r)*4,f=new ct(-c*.8,-u*.8,1).normalize();n.data[d]=(f.x*.5+.5)*255,n.data[d+1]=(f.y*.5+.5)*255,n.data[d+2]=(f.z*.5+.5)*255,n.data[d+3]=255}t.putImageData(n,0,0);let o=new kn(e);return o.wrapS=o.wrapT=Bs,o.repeat.set(2.2,2.2),o}var $a=(i,e,t,n=0)=>i>t[0]-n&&i<t[1]+n&&e>t[2]-n&&e<t[3]+n,kc=i=>{let e=i.cols*Do+.3,t=i.rows*Do+.3;return[i.x-e/2,i.x+e/2,i.zc-t/2,i.zc+t/2]},Hc=[5.7,9,-8.35,-5.85],M0=(i,e,t=0)=>((i-Qs.x)/(Qs.rx+t))**2+((e-Qs.z)/(Qs.rz+t))**2<1,Ya=(i,e)=>{for(let t=ai.length-1;t>=0;t--)if(t!==1&&$a(i,e,ai[t].rect))return t;return-1},T1=(i,e)=>Math.abs(i)<.75&&e>-4.6&&e<15.5||e>3.6&&e<4.9&&Math.abs(i)<12.3,Vc=(i,e)=>e<-4.95&&Math.abs(i)<4.9?on:e<-4.6&&Math.abs(i)<1.4?be(0,on,He((-4.6-e)/.35,0,1)):0;function w0(i,e,t){let n={pond:Qs,spots:[],zones:ai,decor:{},zoneGroups:[],lockGroups:[],nightMats:[],lamps:[],tickers:[]},s=Jt(77),a=new Le(new Ti(260,48),new kt({map:S1(),roughness:1,color:14543052}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,i.add(a),n.ground=a;{let m=new Wt,p=Jt(3),y=(I,B,w,S,N,H)=>{let T=m.n,C=[H,H*1.7,H*2.9];for(let E=0;E<=3;E++)for(let A=0;A<=72;A++){let D=A/72*Me,U=E/3,z=be(I,B,U),W=(Math.sin(D*3+C[0])*.5+Math.sin(D*7+C[1])*.3+Math.sin(D*13+C[2])*.2+1.1)*w*Math.sin(U*Math.PI*.85);m.vert(Math.cos(D)*z,W-.3,Math.sin(D)*z,new de().copy(S).lerp(N,U))}m.quadGrid(T,3,72,!1)};y(60,150,9,x(8301652),x(6986842),1.3),y(120,240,22,x(6986850),x(6262650),4.1);let _=new Le(m.build(),new kt({vertexColors:!0,roughness:1}));i.add(_);let b=si({sway:.03,glow:.06});n.bgTreeMat=b;let L=[{H:1.6,R:1.9,trunkR:.14,limbs:6,leaves:520,leafSize:.42,leafCols:[x(5016122),x(3832372),x(6987850)]},{H:2.4,R:1.6,trunkR:.13,limbs:6,leaves:480,leafSize:.4,leafCols:[x(3832388),x(3107386),x(5937738)]},{H:1.3,R:2.3,trunkR:.16,limbs:7,leaves:600,leafSize:.45,leafCols:[x(5936192),x(6989384),x(4883512)]}].map((I,B)=>{let w=new Wt;return os(w,Jt(20+B),I,1,-1),w.build()}),R=[];for(let I=0;I<46;I++){let B=I%4,w,S;if(B===0)w=p.range(-24,24),S=p.range(-28,-16);else if(B===1)w=p.range(15.5,30)*(p()<.5?-1:1),S=p.range(-22,22);else if(B===2)w=p.range(-30,30),S=p.range(19.5,34),Math.abs(w)<4&&(w+=8);else{let N=p()*Me,H=p.range(34,58);w=Math.cos(N)*H,S=Math.sin(N)*H}R.push([w,S])}L.forEach((I,B)=>{let w=R.filter((H,F)=>F%3===B),S=new Xs(I,b,w.length),N=new Yt;w.forEach(([H,F],T)=>{N.position.set(H,0,F),N.rotation.y=p()*6,N.scale.setScalar(p.range(1.5,2.6)),N.updateMatrix(),S.setMatrixAt(T,N.matrix)}),S.castShadow=!0,S.receiveShadow=!0,i.add(S)})}{let m=new fi(11),p=Jt(12),y=(b,L,R,I)=>{let B=new Bi(L-b,I-R,1,1);B.rotateX(-Math.PI/2),m.add(B,se((b+L)/2,.012,(R+I)/2),14207138,0)};y(-.8,.8,-4.6,16.2),y(-12.3,12.3,3.55,4.95);let _=(b,L,R)=>m.add(new Zt(R,R*1.06,.05,7),re(se(b,.03,L),pe(p()*6),Ai(1,1,p.range(.7,.95))),p.pick([13222324,12432806,14077632,12103844]),.04);for(let b=-4.2;b<16;b+=.86)_(p.range(-.12,.12),b,p.range(.3,.38));for(let b=-11.8;b<12;b+=.86)Math.abs(b)>.7&&_(b,4.25+p.range(-.1,.1),p.range(.3,.38));for(let b=0;b<150;b++){let L=p()<.55,R=L?p.range(-.78,.78):p.range(-12.2,12.2),I=L?p.range(-4.5,16):p.range(3.6,4.9);m.sph(p.range(.02,.05),R,.02,I,p.pick([12103324,14998731,11050636]),1,.5,1,5)}i.add(m.mesh(ls,!1))}b0(i,n),n.paintHouse=m=>b0(i,n,m),n.paintFence=(m=15986146)=>{let p=new fi(21),y=m,_=(b,L,R,I)=>{let B=Math.hypot(R-b,I-L),w=Math.round(B/.24),S=Math.atan2(R-b,I-L),N=pe(S);for(let H=0;H<=w;H++){let F=H/w,T=be(b,R,F),C=be(L,I,F);H%8===0?(p.box(.11,1,.11,T,.5,C,y,N),p.sph(.07,T,1.03,C,y,1,1,1,6)):(p.box(.085,.72,.025,T,.42,C,y,re(N,pe(Math.PI/2))),p.add(new ti(.06,.09,4),re(se(T,.825,C),N,pe(Math.PI/4),Ai(1,1,.3)),y))}p.box(.035,.07,B,(b+R)/2,.3,(L+I)/2,y,N),p.box(.035,.07,B,(b+R)/2,.64,(L+I)/2,y,N)};_(-12.6,-9.2,-12.6,14.7),_(12.6,-9.2,12.6,14.7),_(-12.6,14.7,-1.2,14.7),_(1.2,14.7,12.6,14.7),_(-12.6,-9.2,-4.6,-9.2),_(4.6,-9.2,12.6,-9.2);for(let b of[-1,1])p.box(.14,2.2,.14,b*1.2,1.1,14.7,y);p.box(2.7,.12,.16,0,2.2,14.7,y),p.box(2.9,.06,.3,0,2.29,14.7,y),p.box(.08,1,.08,2,.5,15.3,8018496),p.box(.24,.2,.36,2,1.08,15.3,13125690),p.box(.02,.14,.1,2.13,1.14,15.2,15986146),n.fenceMesh&&(i.remove(n.fenceMesh),n.fenceMesh.geometry.dispose()),n.fenceMesh=p.mesh(ls),i.add(n.fenceMesh)},n.paintFence();let h=[[.001,0],[.17,0],[.19,.04],[.25,.36],[.285,.38],[.285,.43],[.25,.43],[.235,.4]],o=new kt({color:5914672,roughness:1}),l=m=>(m.id=n.spots.length,m.soil=null,n.spots.push(m),m),r=(m,p,y,_,b,L=.35)=>{let R=new Le(new Pt(b,9,5,0,Me,0,Math.PI/2),o.clone());return R.scale.y=L,R.position.set(p,y,_),R.receiveShadow=!0,m.add(R),R};for(let m of ai){let p=new Nt,y=new fi(100+m.id),_=Jt(200+m.id);n.zoneGroups[m.id]=p,i.add(p);for(let b of Fc.filter(L=>L.z===m.id)){let[L,R,I,B]=kc(b),w=R-L,S=B-I,N=b.x,H=b.zc,F=b.veg?[13150328,12360812,13808772]:[9070152,8215616,9728078];y.box(w+.16,.2,.09,N,.1,I,_.pick(F)),y.box(w+.16,.2,.09,N,.1,B,_.pick(F)),y.box(.09,.2,S,L,.1,H,_.pick(F)),y.box(.09,.2,S,R,.1,H,_.pick(F));for(let[E,A]of[[L,I],[R,I],[L,B],[R,B]])y.box(.12,.27,.12,E,.135,A,7229496);let T=new Bi(w,S,Math.round(w*4),Math.round(S*4));T.rotateX(-Math.PI/2);let C=T.attributes.position;for(let E=0;E<C.count;E++)C.setY(E,_.range(-.012,.02));T.computeVertexNormals(),y.add(T,se(N,.15,H),6177843,.02);for(let E=0;E<b.rows;E++)for(let A=0;A<b.cols;A++){let D=N+(A-(b.cols-1)/2)*Do,U=H+(E-(b.rows-1)/2)*Do,z=b.rows===1||E===b.rows-1,W=l({type:b.veg?"veg":"bed",zone:m.id,pos:new ct(D,.16,U),stand:new ct(D,0,z?B+.5:I-.5),scale:1.75,pickR:.36,pickH:.5});W.soil=r(p,D,.15,U,.26)}}for(let b of Oc.filter(L=>L.z===m.id)){let L=b.porch?on:0,R=1.25;y.lathe(h.map(([B,w])=>[B*R,w*R]),b.x,L,b.zc,_.pick([13004616,12149311,13597266]),18,void 0,.02);let I=l({type:"pot",zone:m.id,pos:new ct(b.x,L+.5,b.zc),stand:new ct(b.x+(b.porch?b.x>0?-.85:.85:0),0,b.zc+(b.porch?.1:.85)),scale:1.55,pickR:.42,pickH:.9,pickY:-.4});I.soil=r(p,b.x,L+.47,b.zc,.3,.2)}for(let b of Bc.filter(L=>L.z===m.id)){for(let R=0;R<13;R++){let I=R/13*Me;y.sph(_.range(.1,.14),b.x+Math.cos(I)*.72,.03,b.zc+Math.sin(I)*.72,_.pick([12432806,11116949,13617080]),1,.7,1,6)}let L=l({type:"tree",zone:m.id,pos:new ct(b.x,.03,b.zc),stand:new ct(b.x+.35,0,b.zc+1.05),scale:1.45,pickR:.7,pickH:1.9});L.soil=r(p,b.x,0,b.zc,.66,.12)}for(let b of _0.filter(L=>L.z===m.id)){let L=Nc(),R=15986146;for(let B of[-.24,.24]){let w=new Pa(L.map(S=>new ct(S.x,S.y,S.z+B)));y.add(new po(w,40,.028,6),se(b.x,0,b.zc),R,0)}for(let B=1;B<L.length-1;B+=2){let w=L[B];y.cyl(.014,.014,.48,b.x+w.x,w.y,b.zc,R,5,fe(Math.PI/2),0)}let I=l({type:"arch",zone:m.id,pos:new ct(b.x,0,b.zc),stand:new ct(b.x-1.35,0,b.zc+.55),scale:1,pickR:.95,pickH:2.4});I.soil=r(p,b.x-.75,0,b.zc,.3,.25),r(p,b.x+.75,0,b.zc,.3,.25).material=I.soil.material}if(m.id===1){for(let b of M1){y.add(new Pt(.22,12,6,0,Me,Math.PI/2,Math.PI/2),se(b,2.02,-5.05),9071176,.03),y.add(new ni(.22,.018,5,14),re(se(b,2.02,-5.05),fe(Math.PI/2)),7229496);for(let B=0;B<3;B++){let w=B/3*Me+.5;y.cyl(.005,.005,.55,b+Math.cos(w)*.1,2.02+.26,-5.05+Math.sin(w)*.1,4868682,4,re(pe(-w),mt(.4)),0)}let I=l({type:"hang",zone:1,pos:new ct(b,2.02,-5.05),stand:new ct(b,0,-4.35),scale:1.35,pickR:.4,pickH:.9,pickY:-.5,high:!0});I.soil=r(p,b,2.02-.03,-5.05,.2,.2)}for(let b of w1){y.box(1.5,.2,.26,b,1,-6.78,8297100),y.box(1.56,.03,.3,b,1.1,-6.78,7244412);for(let L of[-.6,.6])y.box(.05,.14,.2,b+L,.86,-6.84,5917242);for(let L=-1;L<=1;L++){let R=l({type:"window",zone:1,pos:new ct(b+L*.46,1.1,-6.76),stand:new ct(b+L*.46,0,-6.05),scale:1.2,pickR:.24,pickH:.6,pickY:-.1});R.soil=r(p,b+L*.46,1.09,-6.76,.17,.2)}}}if(m.id===3&&A1(p,y,n,l,_),m.id===7&&C1(y,-9.55,-6.9),m.id===8&&L1(p,y,n,l,r),y.g.length&&p.add(y.mesh(ls)),m.cost>0){let b=new Nt,L=new fi(300+m.id),[R,I]=m.tag;m.id===1?(L.box(.7,.36,.05,R,1.75,-4.92,12095592),L.cyl(.01,.01,.4,R-.28,2.05,-4.92,5592405,4),L.cyl(.01,.01,.4,R+.28,2.05,-4.92,5592405,4)):(L.box(.09,1.25,.09,R,.62,I,8018496),L.box(.95,.5,.06,R,1.25,I+.06,12884588,mt(.04)),L.box(.8,.07,.065,R,1.33,I+.07,9070152,mt(.04)),L.box(.6,.07,.065,R-.08,1.17,I+.07,9070152,mt(.04))),b.add(L.mesh(ls)),i.add(b),n.lockGroups[m.id]=b}}P1(i,n),R1(i,n),I1(i,n,e,t);let c=new en({visible:!1});n.pickables=[];for(let m of n.spots){let p=new Le(new Zt(m.pickR,m.pickR,m.pickH,8),c);p.position.copy(m.pos),p.position.y+=m.pickH/2+(m.pickY??0),p.userData.spot=m,i.add(p),n.pickables.push(p),m.pick=p}n.setZone=(m,p)=>{n.zoneGroups[m].visible=p,n.lockGroups[m]&&(n.lockGroups[m].visible=!p);for(let y of n.spots)y.zone===m&&(y.pick.visible=p)},n.setDecor=(m,p)=>{n.decor[m]&&(n.decor[m].visible=p)},n.setNight=m=>{for(let p of n.nightMats)p.emissiveIntensity=p.userData.e*m;for(let p of n.lamps)p.intensity=p.userData.i*m*(p.parent.visible?1:0),p.visible=m>.02};let u=[[[1,1,1],[1,1,1]],[[.93,1,.84],[.88,1,.82]],[[1.22,.98,.6],[1.6,.86,.4]],[[.86,.96,.92],[.78,.9,.8]]],d=new de(1,1,1),f=new de(1,1,1),g=new de(14543052),v=new de;return n.setSeason=(m,p)=>{d.setRGB(...u[m][0]),f.setRGB(...u[m][1]),p&&(n.grass.material.color.copy(d),n.bgTreeMat.color.copy(f),n.ground.material.color.copy(v.copy(g).multiply(d)))},n.tickers.push(m=>{let p=Math.min(1,m*.6);n.grass.material.color.lerp(d,p),n.bgTreeMat.color.lerp(f,p),n.ground.material.color.lerp(v.copy(g).multiply(d),p)}),n.update=(m,p)=>{for(let y of n.tickers)y(m,p)},n.blocked=(m,p)=>{if(Math.abs(m)>12.2||p>14.4||p<-8.9)return!0;if(Math.abs(m)<4.95&&p<-4.95)return p<-6.55||Math.abs(m)>4.6||Math.abs(Math.abs(m)-4.05)<.45&&p<-5.3;for(let y of Fc)if($a(m,p,kc(y),.22))return!0;if(M0(m,p,.35)||$a(m,p,Hc,.15))return!0;for(let y of Oc)if(!y.porch&&(m-y.x)**2+(p-y.zc)**2<.5**2)return!0;for(let y of Bc)if((m-y.x)**2+(p-y.zc)**2<.62**2)return!0;for(let y of _0)for(let _ of[-.75,.75])if((m-y.x-_)**2+(p-y.zc)**2<.3**2)return!0;for(let y in n.things){let _=n.things[y];if((m-_.pos.x)**2+(p-_.pos.z)**2<_.r**2)return!0}for(let y of n.decorBlocks)if(n.decor[y.id].visible&&(m-y.x)**2+(p-y.z)**2<y.r**2)return!0;return!1},n}function b0(i,e,t={}){let n=!e.houseMesh,s=t.door??6262666,a=t.shut??7312296,h=T=>new de(T).multiplyScalar(.9).getHex(),o=new fi(31),l=Jt(32),r=t.wall??16182489,c=7228468,u=16512748,d=[12146746,12870722,11423796,13397578,12082240],f=-10,g=9,v=6.2,m=3,p=-6.9;o.box(g,m,v,0,m/2,f,r,null,0),o.box(g+.12,.5,v+.12,0,.25,f,11904662,null,0);let y=2.5,_=g/2;for(let T of[-1,1]){let C=new yt,E=T*_,A=f-v/2,D=f+v/2,U=T>0?[E,m,D,E,m,A,E,m+y,f]:[E,m,A,E,m,D,E,m+y,f];C.setAttribute("position",new We(U,3)),C.computeVertexNormals(),o.add(C,null,r,0),o.cyl(.42,.42,.06,E+T*.02,m+.85,f,10274013,16,mt(Math.PI/2),0),o.add(new ni(.44,.05,6,20),re(se(E+T*.03,m+.85,f),pe(Math.PI/2)),u,0)}let b=Math.atan2(y,v/2),L=Math.hypot(y,v/2),R=(T,C,E,A,D,U,z,W,Y)=>{let $=(C-T)/Y,K=Math.sin(U),ae=Math.cos(U);for(let J=0;J<W;J++)for(let ue=0;ue<Y;ue++){let Te=(J+.5)/W*z,Be=T+(ue+.5)*$+(J%2-.5)*$*.5;o.add(new Zt($*.52,$*.52,z/W*1.3,6,1,!0,0,Math.PI),re(se(Be,E-K*Te+.04+J*.002,A+D*ae*Te),fe(D*(Math.PI/2+U)),pe(D*Math.PI/2),Ai(.45,1,1)),d[Math.floor(l()*d.length)],.05)}o.box(C-T-.1,.08,z,(T+C)/2,E-K*z/2-.03,A+D*ae*z/2,9061936,fe(D*U),0)};R(-(g+1.1)/2,(g+1.1)/2,m+y,f,-1,b,L+.75,11,26),R(-(g+1.1)/2,(g+1.1)/2,m+y,f,1,b,L+.12,10,26),o.cyl(.16,.16,g+1.2,0,m+y+.1,f,11030066,8,mt(Math.PI/2));for(let T of[-1,1])for(let C of[-1,1])o.box(.2,m,.2,T*_,m/2,f+C*v/2,c);o.box(g+.1,.18,.16,0,m-.05,p,c),o.box(.7,1.9,.7,2.6,m+y-.3,f-1,11036494),o.box(.84,.14,.84,2.6,m+y+.68,f-1,9327936),e.chimney=new ct(2.6,m+y+.8,f-1),o.box(1.24,2.28,.1,0,1.14+on,p+.03,u,null,0),o.box(1.04,2.14,.1,0,1.09+on,p+.06,s,null,0);for(let[T,C]of[[-.24,.55],[.24,.55],[-.24,1.3],[.24,1.3]])o.box(.36,.6,.03,T,C+on,p+.115,h(s),null,0);o.sph(.045,.38,1.1+on,p+.14,14727258,1,1,1,8,0),o.add(new Ti(.2,16),se(0,1.86+on,p+.115),16179104,0);let I=new kt({color:10275040,roughness:.15,metalness:.1,emissive:16761962,emissiveIntensity:0});I.userData.e=1.6,n&&e.nightMats.push(I);let B=[];for(let T of[-2.75,2.75]){o.box(1.5,1.42,.1,T,1.85,p+.02,u,null,0);let E=new Bi(1.3,1.22);E.translate(T,1.85,p+.075),B.push(E),o.box(.05,1.22,.04,T,1.85,p+.09,u,null,0),o.box(1.3,.05,.04,T,1.85,p+.09,u,null,0);for(let A of[-1,1]){o.box(.5,1.42,.05,T+A*1.02,1.85,p+.04,a);for(let D=0;D<6;D++)o.box(.4,.03,.02,T+A*1.02,1.85-.55+D*.22,p+.075,h(a),null,0)}o.box(1.7,.07,.2,T,1.85-.75,p+.08,u,null,0)}for(let T of[-1,1]){let C=new Ti(.4,16);C.rotateY(T*Math.PI/2),C.translate(T*(_+.055),m+.85,f),B.push(C)}let w=new Le(Co(B),I);n&&i.add(w),o.box(9.8,on,2.05,0,on/2,-5.93,11108956,null,0);for(let T=0;T<20;T++)o.box(.46,.02,2.05,-4.66+T*.49,on+.005,-5.93,l.pick([11766370,10911320,12226664]),null,.03);o.box(2.4,.09,.4,0,.045,-4.75,10911320);for(let T of[-4.7,-1.45,1.45,4.7])o.box(.15,2.35,.15,T,on+1.17,-5,u),o.box(.24,.1,.24,T,on+.05,-5,u),o.box(.26,.08,.26,T,2.5,-5,u);o.box(9.8,.16,.16,0,2.6,-5,u);for(let[T,C]of[[-4.7,-1.45],[1.45,4.7]]){o.box(C-T,.06,.07,(T+C)/2,on+.78,-5,u);for(let E=T+.2;E<C;E+=.2)o.box(.04,.7,.04,E,on+.42,-5,u,null,0)}R(-5.15,5.15,m+.1,p-.02,1,.19,2.5,5,30),o.box(.12,.2,.12,.95,2.1,p+.12,3815994);let S=new kt({color:16773320,emissive:16760944,emissiveIntensity:0,roughness:.4});S.userData.e=4,n&&e.nightMats.push(S);let N=new Le(new Pt(.07,8,6),S);N.position.set(.95,2.02,p+.14),n&&i.add(N);let H=new Ba(16758886,0,11,1.6);H.position.set(0,2.3,-5.6),H.userData.i=14,n&&(i.add(H),e.lamps.push(H)),o.box(.9,.02,.5,0,on+.012,-6.4,12087370),o.lathe([[.001,0],[.26,0],[.3,.3],[.26,.62],[.24,.62],[.24,.56]],5.6,0,-6.5,8018496,12),o.cyl(.24,.24,.02,5.6,.55,-6.5,6987968,12),e.houseMesh&&(i.remove(e.houseMesh),e.houseMesh.geometry.dispose());let F=o.mesh(b1);i.add(F),e.houseMesh=F}function A1(i,e,t,n,s){let{x:a,z:h,rx:o,rz:l}=Qs,r=new Da,c=40;for(let _=0;_<=c;_++){let b=_/c*Me,L=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5),R=Math.cos(b)*o*L,I=Math.sin(b)*l*L;_===0?r.moveTo(R,I):r.lineTo(R,I)}let u=new fo(r,24);u.rotateX(Math.PI/2);let d=E1(),f=new Le(u,new kt({color:4165526,roughness:.06,metalness:.35,normalMap:d,normalScale:new he(.35,.35),transparent:!0,opacity:.86,side:St}));f.position.set(a,.035,h),f.receiveShadow=!0,i.add(f),t.water=f;let g=new Le(u.clone(),new kt({color:2771524,roughness:1,side:St}));g.position.set(a,.008,h),i.add(g),t.tickers.push((_,b)=>{d.offset.set(b*.012,b*.018)});let v=[12432806,11116949,13617080,10261898,11906204];for(let _=0;_<46;_++){let b=_/46*Me+s.range(-.04,.04),L=1+.05*Math.sin(b*3+1)+.03*Math.sin(b*5)+s.range(0,.07),R=s.range(.13,.25);e.add(new Pt(R,7,5),re(se(a+Math.cos(b)*o*L,.04,h+Math.sin(b)*l*L),pe(s()*6),Ai(1,s.range(.5,.8),s.range(.7,1.1))),s.pick(v),.04)}let m=new Wt;for(let _=0;_<26;_++){let b=s.range(2.4,4.4),L=Math.cos(b)*o*.86+s.range(-.15,.15),R=Math.sin(b)*l*.86+s.range(-.1,.1),I=s.range(.5,1);m.petal(re(se(L,0,R),pe(s()*6),fe(s.range(.02,.2))),{L:I,W:.03,a:.6,b:.4,curl:.4,fold:.4,nu:4,nv:1,cols:[x(4160058),x(5937736),x(9091168)]}),_%4===0&&(m.tube(se(L,0,R),[new ct(0,0,0),new ct(.02,I*.6,0),new ct(.03,I*1.1,0)],.006,.005,x(5933626),x(6982202),4),m.blob(se(L+.03,I*1.1,R),.02,.07,x(6965802),x(5913122),6,4))}let p=new Le(m.build(),si({sway:.25}));p.position.set(a,0,h),p.castShadow=!0,i.add(p);for(let[_,b]of[[-1,.45],[.85,-.5],[.15,.75],[1.35,.5]]){let L=a+_,R=h+b,I=Math.hypot(_/o,b/l),B=a+_/I*1*(1+.32/o),w=h+b/I*(1+.42/l),S=Math.atan2(b/l,_/o);n({type:"pond",zone:3,pos:new ct(L,.04,R),stand:new ct(a+Math.cos(S)*(o+.75),0,h+Math.sin(S)*(l+.75)),scale:1.7,pickR:.5,pickH:.5})}let y=[];for(let _=0;_<4;_++){let b=new Wt,L=s.pick([x(15759914),x(16052456),x(15222826),x(16232490)]);b.blob(re(mt(Math.PI/2),Ai(1,1,.5)),.05,.14,L,s()<.5?x(16052456):L,6,5),b.petal(re(se(-.12,0,0),mt(Math.PI/2),fe(Math.PI/2)),{L:.1,W:.09,a:1.6,b:.5,nu:2,nv:2,cols:[L,L,L]});let R=new Le(b.build(),new kt({vertexColors:!0,roughness:.5,side:St}));R.userData={a:s()*6,r:s.range(.45,.8),v:s.range(.25,.45)*s.sign(),o:s()*6},i.add(R),y.push(R)}t.tickers.push((_,b)=>{for(let L of y){let R=L.userData,I=R.a+b*R.v,B=R.r+.12*Math.sin(b*.5+R.o);L.position.set(a+Math.cos(I)*o*B,-.03,h+Math.sin(I)*l*B),L.rotation.y=-I-Math.sign(R.v)*Math.PI/2+Math.sin(b*5+R.o)*.15}})}function R1(i,e){e.things={};let t=new en({visible:!1}),n=(s,a,h,o,l,r,c)=>{let u=new Le(new Zt(o,o,l,8),t);return u.position.set(a,l/2,h),u.userData.thing=s,i.add(u),e.things[s]={kind:s,pos:new ct(a,0,h),r:o*.85,stand:new ct(a+r[0],0,h+r[1]),top:c,pick:u},u};{let h=new fi(61),o=pe(Math.PI/2),l=(m,p,y)=>new ct(m,p,y).applyMatrix4(o).add(new ct(-1.85,0,2.75)),r=(m,p,y,_,b,L,R,I)=>{let B=l(_,b,L);h.box(m,p,y,B.x,B.y,B.z,R,I?re(o,I):o)};r(1,.05,.56,0,.66,0,12159582),r(.94,.3,.5,0,.5,0,11041360);for(let m of[-.44,.44])for(let p of[-.22,.22])r(.06,.66,.06,m,.33,p,8215616);for(let m of[-.47,.47])r(.045,1.25,.045,m,1.28,-.24,8215616);for(let m=0;m<6;m++)r(.18,.03,.7,-.45+m*.18,1.88-0,.02,m%2?16183266:14837855,fe(.22));let c=l(-.22,.69,.02);h.lathe([[.001,0],[.13,0],[.17,.14],[.175,.16],[.16,.16]],c.x,c.y,c.z,12884572,12),c=l(.26,.69,0),h.lathe([[.001,0],[.09,0],[.1,.2],[.085,.2]],c.x,c.y,c.z,8366272,10),r(.34,.26,.03,0,.36,.3,4016708,fe(-.18)),r(.38,.03,.035,0,.5,.275,12159582,fe(-.18));let u=h.mesh(ls);i.add(u);let d=new Wt,f=Jt(62),g=[15760036,16238666,16777215,11832048,14829626].map(x);for(let m=0;m<16;m++){let p=m<10,y=p?l(-.22+f.range(-.1,.1),.82,.02+f.range(-.1,.1)):l(.26+f.range(-.04,.04),.88,f.range(-.04,.04)),_=p?f.range(.06,.16):f.range(.14,.26),b=f.pick(g);d.tube(se(y.x,y.y,y.z),[new ct(0,0,0),new ct(.01,_*.5,0),new ct(f.range(-.05,.05),_,f.range(-.05,.05))],.004,.003,x(4885050),x(5937732),4);for(let L=0;L<6;L++)d.petal(re(se(y.x,y.y+_,y.z),pe(L*1.05),fe(1.15)),{L:.04,W:.028,nu:2,nv:2,cup:.3,cols:[b,b,b]})}let v=new Le(d.build(),si({sway:.3}));v.castShadow=!0,i.add(v),n("orders",-1.85,2.75,.62,2,[1.05,0],2.15)}{let h=new fi(63);h.cyl(.04,.05,1.05,1.7,.52,2.95,9071178,6),h.box(.3,.2,.44,1.7,1.14,2.95,7314872),h.cyl(.15,.15,.44,1.7,1.24,2.95,7314872,12,fe(Math.PI/2)),h.box(.02,.2,.02,1.7-.165,1.2,2.95+.24,5209496),h.cyl(.13,.13,.012,1.7,1.2,2.95+.226,5999270,12,fe(Math.PI/2)),i.add(h.mesh(ls));let o=new Nt;o.position.set(1.7+.16,1.16,2.95-.05);let l=new Le(new Mn(.015,.26,.03),new kt({color:14829626,roughness:.6}));l.position.y=.13,o.add(l);let r=new Le(new Mn(.015,.09,.12),l.material);r.position.set(0,.22,.06),o.add(r),l.castShadow=r.castShadow=!0,i.add(o),e.mailFlag=o,n("mail",1.7,2.95,.36,1.6,[0,.8],1.75)}n("house",0,-6.8,.6,2.5,[0,1.2],2.7)}function C1(i,e,t){i.cyl(.03,.035,1.5,e,.75,t,9071178,6),i.box(1,.05,.05,e,1.12,t,9071178),i.box(.36,.44,.16,e,.98,t,13129802),i.box(.3,.1,.12,e-.34,1.12,t,13129802),i.box(.3,.1,.12,e+.34,1.12,t,13129802);for(let n of[-.5,.5])for(let s=0;s<4;s++)i.box(.012,.11,.012,e+n+(s-1.5)*.02*Math.sign(n),1.07,t,15257466,mt(n*(.2+s*.2)));i.sph(.13,e,1.36,t,15520922,1,1.05,1,10),i.add(new ti(.2,.2,10),se(e,1.53,t),12159566),i.cyl(.27,.27,.02,e,1.44,t,12159566,12);for(let n of[-.045,.045])i.sph(.016,e+n,1.38,t+.12,3811870,1,1,1,6);i.sph(.02,e,1.34,t+.128,15238202,1,1,1,6);for(let n=0;n<7;n++)i.box(.014,.16,.014,e-.15+n*.05,.72,t,15257466,mt((n-3)*.08))}function L1(i,e,t,n,s){let[a,h,o,l]=Hc,r=(a+h)/2,c=h-a,u=l-o,d=1.9,f=.8,g=16184040,v=new kt({color:13626098,roughness:.08,metalness:.1,transparent:!0,opacity:.2,side:St,depthWrite:!1}),m=[],p=(L,R,I,B,w,S=0,N=0)=>{let H=new Bi(L,R);H.applyMatrix4(re(se(I,B,w),pe(S),fe(N))),m.push(H)};e.box(c+.1,.05,u+.1,r,.025,(o+l)/2,12563618,null,.02);for(let[L,R,I,B]of[[r,o,c,.1],[a,(o+l)/2,.1,u],[h,(o+l)/2,.1,u],[r-c/4-.25,l,c/2-.5,.1],[r+c/4+.25,l,c/2-.5,.1]])e.box(I,.36,B,L,.18,R,11891802,null,.04);for(let L of[a,h])for(let R of[o,l])e.box(.07,d,.07,L,d/2,R,g,null,0);for(let L=1;L<4;L++){let R=a+c*L/4;e.box(.045,d,.045,R,d/2,o,g,null,0),Math.abs(R-r)>.6&&e.box(.045,d,.045,R,d/2,l,g,null,0)}for(let L of[r-.5,r+.5])e.box(.055,d,.055,L,d/2,l,g,null,0);for(let L of[o,l])e.box(c,.06,.06,r,d,L,g,null,0);for(let L of[a,h])e.box(.06,.06,u,L,d,(o+l)/2,g,null,0),e.box(.045,d,.045,L,d/2,(o+l)/2,g,null,0);e.box(c+.1,.06,.06,r,d+f,(o+l)/2,g,null,0);let y=Math.hypot(f,u/2),_=Math.atan2(f,u/2);for(let L=0;L<=4;L++)for(let R of[-1,1])e.box(.045,.045,y,a+c*L/4,d+f/2,(o+l)/2+R*u/4,g,fe(R*_),0);p(c,d-.36,r,.36+(d-.36)/2,o),p(u,d-.36,a,.36+(d-.36)/2,(o+l)/2,Math.PI/2),p(u,d-.36,h,.36+(d-.36)/2,(o+l)/2,Math.PI/2),p(c/2-.5,d-.36,r-c/4-.25,.36+(d-.36)/2,l),p(c/2-.5,d-.36,r+c/4+.25,.36+(d-.36)/2,l);for(let L of[-1,1])p(c,y,r,d+f/2,(o+l)/2+L*u/4,0,L*_-Math.PI/2);let b=new Le(Co(m),v);b.renderOrder=4,i.add(b),e.box(c-.5,.05,.5,r,.72,o+.42,12159582);for(let L of[a+.4,h-.4])for(let R of[o+.24,o+.6])e.box(.05,.7,.05,L,.35,R,9070152);for(let L=0;L<6;L++){let R=a+.45+L*((c-.9)/5),I=.745,B=o+.42;e.lathe([[.001,0],[.11,0],[.12,.03],[.16,.24],[.18,.25],[.18,.28],[.155,.28],[.15,.26]],R,I,B,[13004616,8366240,14200938][L%3],14,void 0,.02);let w=n({type:"green",zone:8,pos:new ct(R,I+.27,B),stand:new ct(r+(L-2.5)*.12,0,l+.45),scale:1.15,pickR:.2,pickH:.8,pickY:-.25});w.soil=s(i,R,I+.255,B,.15,.2)}}function P1(i,e){e.decorBlocks=[];let t=(n,s,a)=>{let h=new fi(400+n.length),o=new Nt;s(h,o),h.g.length&&o.add(h.mesh(ls)),o.visible=!1,i.add(o),e.decor[n]=o,a&&e.decorBlocks.push({id:n,...a})};t("lanternas",(n,s)=>{let a=new kt({color:16773320,emissive:16758880,emissiveIntensity:0,roughness:.4});a.userData.e=5,e.nightMats.push(a);let h=[[-1,-2.6],[1,.6],[-1,6.2],[1,9.4],[-1,12.8],[5.6,4.25],[-5.6,4.25]];for(let[o,l]of h){n.cyl(.025,.035,.8,o,.4,l,3815994,6),n.box(.16,.03,.16,o,.8,l,3815994),n.add(new ti(.14,.1,4),re(se(o,1.05,l),pe(Math.PI/4)),3815994);let r=new Le(new Mn(.11,.18,.11),a);r.position.set(o,.905,l),s.add(r)}for(let[o,l]of[[0,-1],[0,7.8],[0,4.25]]){let r=new Ba(16756832,0,9,1.5);r.position.set(o,1.1,l),r.userData.i=9,s.add(r),e.lamps.push(r)}}),t("banco",n=>{for(let o=0;o<4;o++)n.box(1.5,.04,.1,-3.4,.45,2.7-.18+o*.12,10778704,null,.04);for(let o=0;o<3;o++)n.box(1.5,.1,.035,-3.4,.62+o*.14,2.7-.27,10778704,fe(-.15),.04);for(let o of[-.68,.68])n.box(.07,.45,.07,-3.4+o,.22,2.7+.2,4868682),n.box(.07,.98,.07,-3.4+o,.49,2.7-.25,4868682,fe(-.1)),n.box(.07,.05,.5,-3.4+o,.62,2.7-.02,4868682)},{x:-3.4,z:2.7,r:.85}),t("bebedouro",(n,s)=>{n.lathe([[.001,0],[.24,0],[.22,.06],[.09,.12],[.07,.62],[.12,.7],[.42,.78],[.44,.84],[.4,.84],[.36,.78],[.001,.76]],2.6,0,2.5,13617340,18);let l=new Le(new Ti(.385,18),new kt({color:6992064,roughness:.05,metalness:.3,transparent:!0,opacity:.85}));l.rotation.x=-Math.PI/2,l.position.set(2.6,.815,2.5),s.add(l)},{x:2.6,z:2.5,r:.55}),t("casinha",n=>{n.cyl(.04,.05,2.1,4.6,1.05,-3.7,9071178,6),n.box(.36,.34,.32,4.6,2.2,-3.7,8038592),n.box(.3,.03,.4,4.6-.12,2.45,-3.7,13129802,mt(.7)),n.box(.3,.03,.4,4.6+.12,2.45,-3.7,13129802,mt(-.7)),n.cyl(.06,.06,.02,4.6,2.22,-3.7+.165,2763306,10,fe(Math.PI/2)),n.cyl(.012,.012,.12,4.6,2.1,-3.7+.2,9071178,5,fe(Math.PI/2))}),t("carrinho",(n,s)=>{let o=pe(.6),l=(g,v,m)=>new ct(g,v,m).applyMatrix4(o).add(new ct(4.2,0,1.95)),r=l(0,.42,0);n.box(.9,.28,.56,r.x,r.y,r.z,5933690,o),r=l(0,.56,0),n.box(.82,.04,.48,r.x,r.y,r.z,4863014,o),r=l(.55,.2,0),n.cyl(.2,.2,.07,r.x,r.y,r.z,3815994,14,re(o,fe(Math.PI/2)));for(let g of[-.24,.24])r=l(-.75,.48,g),n.box(.7,.04,.04,r.x,r.y,r.z,9071178,re(o,mt(-.12))),r=l(-.35,.14,g),n.box(.05,.3,.05,r.x,r.y,r.z,9071178,o);let c=new Wt,u=Jt(8),d=[15755930,16238622,16777215,10124008,15888410].map(x);for(let g=0;g<26;g++){let v=l(u.range(-.36,.36),.58,u.range(-.2,.2)),m=u.range(.1,.24),p=u.pick(d);c.tube(se(v.x,v.y,v.z),[new ct(0,0,0),new ct(.01,m*.5,0),new ct(u.range(-.04,.04),m,u.range(-.04,.04))],.004,.003,x(4885050),x(5937732),4);for(let y=0;y<6;y++)c.petal(re(se(v.x,v.y+m,v.z),pe(y*1.05),fe(1.2)),{L:.045,W:.03,nu:2,nv:2,cup:.3,cols:[p,p,p]});for(let y=0;y<3;y++)c.petal(re(se(v.x,v.y,v.z),pe(u()*6),fe(u.range(.5,1.1))),{L:.1,W:.04,nu:2,nv:2,fold:.3,cols:[x(3832372),x(5016122),x(6987850)]})}let f=new Le(c.build(),si({sway:.4}));f.castShadow=!0,s.add(f)},{x:4.2,z:1.95,r:.75}),t("anao",n=>{n.sph(.15,-4.3,.17,-.1,3828392,1,1.1,1,10),n.sph(.11,-4.3,.4,-.1,15911076,1,1,1,10),n.add(new ti(.115,.3,10),se(-4.3,.6,-.1),14170158),n.sph(.09,-4.3,.33,-.1+.07,16053488,1,1.1,.7,8),n.sph(.025,-4.3,.41,-.1+.105,15247496,1,1,1,6);for(let h of[-.07,.07])n.sph(.05,-4.3+h,.03,-.1+.06,4863014,1,.7,1.4,6)})}function I1(i,e,t,n){let s=[],a=[],h=[],o=[];for(let C=0;C<3;C++){let E=C/3*Math.PI+.3,A=Math.cos(E),D=Math.sin(E),U=(C-1)*.02,z=C%2*.02,W=(C-1)*.03,Y=s.length/3,$=[[-.5,0,0],[.5,0,0],[-.32,.55,.5],[.32,.55,.5],[0,1,1]];for(let[K,ae,J]of $){s.push(U+A*K*.026+W*J,ae,z+D*K*.026+W*J*.5),h.push(0,1,0);let ue=.68+ae*.4;a.push(ue*.82,ue,ue*.6)}o.push(Y,Y+1,Y+2,Y+1,Y+3,Y+2,Y+2,Y+3,Y+4)}let l=new yt;l.setAttribute("position",new We(s,3)),l.setAttribute("normal",new We(h,3)),l.setAttribute("color",new We(a,3)),l.setIndex(o);let r=new go({vertexColors:!0,side:St});r.onBeforeCompile=C=>{Object.assign(C.uniforms,Gn),C.vertexShader=C.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); float h = position.y * position.y;
          float ph = ip.x * 0.55 + ip.z * 0.4; float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ip.x * 0.15 + ip.z * 0.11);
          transformed.x += (sin(uTime * 1.5 + ph) * 0.09 + sin(uTime * 3.3 + ph * 2.1) * 0.03) * h * uWind * gust;
          transformed.z += cos(uTime * 1.2 + ph * 1.3) * 0.07 * h * uWind * gust; }`)};let c=Jt(55),u=[],d=Fc.map(kc),f=(C,E)=>{if(Math.abs(C)<4.95&&E<-4.75||T1(C,E))return!1;for(let A of d)if($a(C,E,A,.1))return!1;if(M0(C,E,.28)||$a(C,E,Hc,.05))return!1;for(let A of Oc)if((C-A.x)**2+(E-A.zc)**2<.1)return!1;for(let A of Bc)if((C-A.x)**2+(E-A.zc)**2<.45)return!1;return!0},g=78e3,v=ai.map(()=>[]),m=new Yt,p=new de,y=[];for(let C=0;C<g;C++){let E=C<g*.74,A,D;if(E)A=c.range(-12.5,12.5),D=c.range(-9.1,14.6);else{let z=c()*Me,W=13+Math.pow(c(),1.6)*22;if(A=Math.cos(z)*W*1.1,D=3+Math.sin(z)*W,Math.abs(A)<12.6&&D>-9.2&&D<14.7||Math.abs(A)<5.2&&D<-6||Math.abs(A)<.9&&D>14)continue}if(E&&!f(A,D))continue;let U=E?Ya(A,D):-1;y.push({x:A,z:D,zn:U,s:c.range(.75,1.25),rot:c()*Me,hue:c(),wild:c.range(1.7,2.8)})}for(let C=y.length-1;C>0;C--){let E=Math.floor(c()*(C+1)),A=y[C];y[C]=y[E],y[E]=A}let _=new Xs(l,r,y.length),b=C=>{let E=y[C],A=E.zn>0&&!n.has(E.zn),D=E.zn===-1||A;m.position.set(E.x,Vc(E.x,E.z),E.z),m.rotation.set(0,E.rot,0);let U=(D?.12*E.wild:.09)*E.s;m.scale.set(E.s*(D?1.25:1),U,E.s*(D?1.25:1)),m.updateMatrix(),_.setMatrixAt(C,m.matrix),D?p.setHSL(.19+E.hue*.08,.36+E.hue*.1,.34+E.hue*.1):p.setHSL(.225+E.hue*.05,.37,.33+E.hue*.07),_.setColorAt(C,p)};y.forEach((C,E)=>{b(E),C.zn>0&&v[C.zn].push(E)}),_.receiveShadow=!0,_.frustumCulled=!1,i.add(_),e.grass=_,e.setGrass=C=>{_.count=Math.max(1e3,Math.round(y.length*C))},e.setGrass(t.grass),e.mowZone=C=>{for(let E of v[C])b(E);_.instanceMatrix.needsUpdate=!0,_.instanceColor.needsUpdate=!0};let L=new yt,R=[],I=[],B=[],w=[];for(let C=0;C<6;C++){let E=C/6*Me,A=R.length/3;R.push(0,1,0,Math.cos(E-.4)*.5,1.06,Math.sin(E-.4)*.5,Math.cos(E+.4)*.5,1.06,Math.sin(E+.4)*.5),I.push(1,.9,.3,1,1,1,1,1,1),w.push(0,1,0,0,1,0,0,1,0),B.push(A,A+2,A+1)}{let C=R.length/3;R.push(-.05,0,0,.05,0,0,0,1,0),I.push(.25,.5,.2,.25,.5,.2,.3,.6,.25),w.push(0,1,0,0,1,0,0,1,0),B.push(C,C+1,C+2)}L.setAttribute("position",new We(R,3)),L.setAttribute("color",new We(I,3)),L.setAttribute("normal",new We(w,3)),L.setIndex(B);let S=y.map((C,E)=>[C,E]).filter(([C])=>(C.zn===-1||C.zn>0)&&C.hue>.93),N=new Xs(L,r,S.length),H=[16777215,16242762,16228552,12099824,16222810,16773792],F=C=>{let[E]=S[C],A=E.zn===-1||!n.has(E.zn);m.position.set(E.x+.05,0,E.z),m.rotation.set(0,E.rot,0);let D=A?.09*E.s:1e-4;m.scale.set(D,A?.3*E.wild*.55:1e-4,D),m.updateMatrix(),N.setMatrixAt(C,m.matrix),N.setColorAt(C,p.set(H[Math.floor(E.rot*7)%H.length]))};S.forEach((C,E)=>F(E)),N.frustumCulled=!1,i.add(N);let T=e.mowZone;e.mowZone=C=>{T(C),S.forEach(([E],A)=>{E.zn===C&&F(A)}),N.instanceMatrix.needsUpdate=!0}}var D1=16507084,U1=[8150084,10122840,12360312],z1=8364170,N1=7114360,F1=16511972,O1=14656828,B1=15520922,k1=15233898;function Gc(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle="#fbe0cc",t.fillRect(0,0,1024,512);let n=256,s=276,a=1.62;t.translate(n,s),t.scale(a,a),t.translate(-n,-s);for(let o of[-1,1]){let l=t.createRadialGradient(n+o*58,s+30,2,n+o*58,s+30,26);l.addColorStop(0,"rgba(244,128,128,0.5)"),l.addColorStop(1,"rgba(244,128,128,0)"),t.fillStyle=l,t.fillRect(n+o*58-30,s,60,62)}for(let o of[-1,1]){let l=n+o*36;if(i==="open"){t.save(),t.beginPath(),t.ellipse(l,s,16.5,20,0,0,Me),t.clip(),t.fillStyle="#fffdfa",t.fillRect(l-20,s-24,40,48);let r=t.createRadialGradient(l,s+5,2,l,s+1,16);r.addColorStop(0,"#d9c27a"),r.addColorStop(.42,"#a9a45e"),r.addColorStop(.85,"#6f7a44"),r.addColorStop(1,"#4a5230"),t.fillStyle=r,t.beginPath(),t.ellipse(l,s+2,13.5,16.5,0,0,Me),t.fill(),t.fillStyle="#1e2a2c",t.beginPath(),t.ellipse(l,s+2,5.6,7.6,0,0,Me),t.fill(),t.fillStyle="rgba(60,40,30,0.26)",t.fillRect(l-20,s-24,40,9),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(l-5,s-6,4.4,5.2,0,0,Me),t.fill(),t.beginPath(),t.ellipse(l+5,s+9,2.1,2.5,0,0,Me),t.fill(),t.restore(),t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(l-18,s-9),t.quadraticCurveTo(l,s-27,l+18,s-9),t.stroke(),t.lineWidth=2.6,t.beginPath(),t.moveTo(l+o*17,s-10),t.lineTo(l+o*23,s-15),t.stroke(),t.beginPath(),t.moveTo(l+o*14,s-14),t.lineTo(l+o*18,s-21),t.stroke()}else t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(l-16,s+5),t.quadraticCurveTo(l,s-13,l+16,s+5)):(t.moveTo(l-16,s+1),t.quadraticCurveTo(l,s+12,l+16,s+1)),t.stroke();t.strokeStyle="#7c5a40",t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(l-15,s-35+o*0),t.quadraticCurveTo(l,s-42,l+15,s-35),t.stroke()}t.fillStyle="rgba(220,150,120,0.45)",t.beginPath(),t.ellipse(n,s+28,3.4,2.4,0,0,Me),t.fill(),t.strokeStyle="#c4605c",t.lineWidth=3,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(n-11,s+43),t.quadraticCurveTo(n,s+58,n+11,s+43),t.closePath(),t.fillStyle="#d8706a",t.fill()):(t.moveTo(n-12,s+44),t.quadraticCurveTo(n,s+47.5,n+12,s+44),t.quadraticCurveTo(n,s+58,n-12,s+44),t.closePath(),t.fillStyle="#fffaf4",t.fill(),t.lineJoin="round",t.lineWidth=2.6),t.stroke();let h=new kn(e);return h.colorSpace=wt,h.anisotropy=8,h}var Cn=(i,e=.7,t={})=>new kt({color:i,roughness:e,...t});function ft(i,e,t,n=0,s=0,a=0){let h=new Le(i,e);return h.position.set(n,s,a),h.castShadow=!0,h.receiveShadow=!0,t.add(h),h}function qn(i,e,t,n){let s=new Nt;return s.position.set(e,t,n),i.add(s),s}var Za=(i,e=20)=>new ki(i.map(([t,n])=>new he(t,n)),e);function S0(){let i=new Nt,e=qn(i,0,0,0),t=Cn(D1,.62),n=Cn(z1,.8,{side:St}),s=Cn(F1,.8),a=Cn(O1,.45),h=Cn(N1,.8),o=Cn(k1,.7,{side:St}),l=Cn(B1,.9,{side:St}),r={};r.hips=qn(e,0,.87,0),r.spine=qn(r.hips,0,.1,0),ft(Za([[.001,-.02],[.118,0],[.108,.1],[.125,.24],[.138,.32],[.11,.4],[.05,.43],[.045,.5]]),s,r.spine).scale.z=.82;{let D=new ki([[.122,0],[.112,.1],[.128,.22],[.139,.3]].map(([U,z])=>new he(U*1.04,z)),10,-.6,1.2);ft(D,n,r.spine).scale.z=.84}for(let D of[-1,1])ft(new Mn(.032,.17,.014),n,r.spine,D*.075,.365,.092).rotation.x=-.5,ft(new Mn(.035,.34,.016),n,r.spine,D*.075,.26,-.1).rotation.x=.2,ft(new Pt(.014,8,6),Cn(15918784,.4),r.spine,D*.075,.285,.123);r.skirt=qn(r.hips,0,.11,0);let c=Za([[.112,.02],[.122,0],[.146,-.1],[.2,-.25],[.262,-.4],[.296,-.5],[.301,-.52]],28);{let D=c.attributes.position;for(let U=0;U<D.count;U++){let z=D.getY(U),W=Math.atan2(D.getZ(U),D.getX(U)),Y=1+.07*Math.sin(W*9)*He(-z/.5,0,1);D.setX(U,D.getX(U)*Y),D.setZ(U,D.getZ(U)*Y*.92)}c.computeVertexNormals()}ft(c,n,r.skirt).receiveShadow=!1,ft(new ni(.119,.014,6,24),h,r.skirt,0,.012,0).rotation.x=Math.PI/2;for(let D of[-1,1]){let U=qn(r.hips,D*.075,0,0),z=qn(U,0,-.4,0);ft(new Ei(.06,.3,4,10),t,U,0,-.2,0),ft(new Ei(.05,.2,4,10),t,z,0,-.12,0),ft(new Pt(.061,10,8),t,z,0,0,0),ft(Za([[.001,-.455],[.066,-.45],[.062,-.3],[.066,-.17],[.072,-.165],[.072,-.15],[.058,-.15]],14),a,z),ft(new Pt(.068,12,8),a,z,0,-.415,.045).scale.set(1,.72,1.7),r[D<0?"hipL":"hipR"]=U,r[D<0?"kneeL":"kneeR"]=z}for(let D of[-1,1]){let U=qn(r.spine,D*.15,.345,0),z=qn(U,0,-.23,0);ft(new Pt(.062,12,9),s,U,D*.005,-.03,0).scale.set(1,1.15,1),ft(new Ei(.036,.16,4,8),t,U,0,-.14,0),ft(new Ei(.032,.17,4,8),t,z,0,-.095,0),ft(new Pt(.037,10,8),t,z,0,0,0);let Y=qn(z,0,-.215,0);ft(new Pt(.04,10,8),t,Y).scale.set(.85,1.1,1),r[D<0?"shL":"shR"]=U,r[D<0?"elL":"elR"]=z,r[D<0?"handL":"handR"]=Y}r.neck=qn(r.spine,0,.46,0),r.head=qn(r.neck,0,.135,.005);let u=.158,d={open:Gc("open"),closed:Gc("closed"),happy:Gc("happy")},f=Cn(16777215,.62,{map:d.open,emissive:16777215,emissiveMap:d.open,emissiveIntensity:.16});ft(new Pt(u,40,28),f,r.head).scale.set(.97,1.04,.96),ft(new Pt(.012,8,6),t,r.head,0,-.03,u*.955).scale.set(1,.75,.6);for(let D of[-1,1])ft(new Pt(.03,8,6),t,r.head,D*u*.95,-.01,0).scale.set(.4,1,.7);for(let D of[-1,1])ft(new Pt(.011,8,6),Cn(3116894,.3,{metalness:.4,emissive:997922}),r.head,D*u*.975,-.045,.004);let v=new Wt,m=Jt(4),p=U1.map(x),y=u*1.07,_=(D,U,z,W,Y={})=>v.petal(re(se(0,y*.98,-.012),pe(D),fe(Math.PI/2-.04)),{L:U,W:z,a:.6,b:.42,cup:.16,nu:Y.nu??10,nv:3,vein:.2,base:.6,phase:m()*6,angFn:$=>{let K=$*U,ae=W*y;return K<ae?K/y:W+(Y.flare??0)*Math.sin((K-ae)/Math.max(.01,U-ae)*Math.PI*(Y.waves??1))},cols:p.map($=>$.clone().multiplyScalar(m.range(.9,1.1))),...Y});v.blob(se(0,.034,-.05),u*1,u*1,p[0],p[1],16,9);for(let D=0;D<15;D++){let U=D/14-.5,z=Math.abs(U+.17);_(U*2.6+.1+m.range(-.04,.04),y*(.62+z*1.35+m.range(0,.08)),.125,9,{nu:6,b:.3,twist:(U+.17)*.5})}for(let D of[-1,1])for(let U=0;U<4;U++)_(D*(1.42+U*.2),.42+U*.07,.1,1.5,{flare:-.14,waves:1.6,ruffle:.05,rf:1.2});for(let D=0;D<17;D++){let U=D/16-.5;_(Math.PI+U*2.9,.62+m.range(-.04,.06)-Math.abs(U)*.1,.105,1.62,{flare:-.16,waves:1.5,ruffle:.06,rf:1.2,nu:12})}let b=si({sway:.16,glow:.07,roughness:.48}),L=new Le(v.build(),b);L.castShadow=!0,L.receiveShadow=!0,r.head.add(L),r.hat=qn(r.head,0,u*.7,-.03),r.hat.rotation.x=-.36;let R=Za([[.13,.012],[.19,.004],[.25,-.012],[.292,-.036],[.297,-.042]],36);{let D=R.attributes.position;for(let U=0;U<D.count;U++){let z=Math.atan2(D.getZ(U),D.getX(U)),W=Math.hypot(D.getX(U),D.getZ(U));D.setY(U,D.getY(U)+Math.sin(z*2+.5)*.02*(W/.3)**2+Math.sin(z*5)*.005*(W/.3))}R.computeVertexNormals()}ft(R,l,r.hat).receiveShadow=!1,ft(Za([[.146,0],[.143,.05],[.128,.1],[.09,.128],[.001,.134]],28),l,r.hat),ft(new Zt(.1445,.148,.038,28,1,!0),o,r.hat,0,.024,0);for(let D of[-1,1])ft(new Pt(.03,8,6),o,r.hat,-.12+0,.03,D*.035-.07).scale.set(.5,1.2,1.5);{let D=new Wt;for(let z=0;z<6;z++)D.petal(re(pe(z*1.047),fe(1.25)),{L:.034,W:.026,nu:2,nv:2,cup:.3,cols:[x(16774880),x(16777215),x(16777215)]});D.blob(se(0,.004,0),.01,.006,x(15905308),x(16306240),6,3);let U=new Le(D.build(),Cn(16777215,.7,{vertexColors:!0,side:St}));U.position.set(.108,.045,.103),U.rotation.set(1.1,0,-.75),r.hat.add(U)}let I=new Nt,B=Cn(7317408,.35,{metalness:.35});ft(new Zt(.075,.085,.15,16),B,I,0,0,0);let w=ft(new Zt(.014,.024,.2,8),B,I,0,.03,.14);w.rotation.x=.95;let S=ft(new Zt(.034,.016,.03,10),B,I,0,.092,.225);S.rotation.x=.95;let N=ft(new ni(.06,.009,6,14,Math.PI*1.1),B,I,0,.05,-.07);N.rotation.y=Math.PI/2,N.rotation.z=0;let H=ft(new ni(.055,.008,6,12,Math.PI),B,I,0,.075,0);H.rotation.y=Math.PI/2,I.position.set(0,-.11,.03),I.visible=!1,r.handR.add(I);let F=new Nt;ft(new Zt(.013,.013,.09,6),Cn(9067064),F,0,0,0),ft(new Pt(.035,8,6),Cn(12107972,.3,{metalness:.6}),F,0,-.085,0).scale.set(.8,1.5,.25),F.position.set(0,-.05,.02),F.visible=!1,r.handR.add(F);let C={by:0,lean:0,twist:0,spine:0,headX:0,headY:0,headZ:0,shLx:0,shLz:.2,shRx:0,shRz:-.2,elL:-.1,elR:-.1,hipL:0,hipR:0,kneeL:0,kneeR:0,skirtX:0,skirtS:1,handRx:0},E={...C},A={group:i,J:r,state:"idle",t:0,phase:0,speed:0,heading:0,targetHeading:0,blinkT:2,face:"open",faceHold:0,actionT:0,actionDur:0,action:null,high:!1,lookAt:null,onStep:null,spoutWorld:new V,idleSeed:0};return A.setFace=(D,U=0)=>{A.face=D,A.faceHold=U,f.map=d[D],f.emissiveMap=d[D]},A.play=(D,U,z={})=>{A.state=D,A.actionT=0,A.actionDur=U,A.high=!!z.high,I.visible=D==="water",F.visible=D==="plant",D==="cheer"&&A.setFace("happy",U+.4)},A.stop=()=>{A.state="idle",I.visible=!1,F.visible=!1},A.faceTo=(D,U)=>{A.targetHeading=Math.atan2(D-i.position.x,U-i.position.z)},A.setOutfit=(D={})=>{D.dress!=null&&(n.color.setHex(D.dress),h.color.setHex(D.dress).multiplyScalar(.82)),D.ribbon!=null&&o.color.setHex(D.ribbon),D.boots!=null&&a.color.setHex(D.boots)},A.update=(D,U)=>{A.t+=D;let z=C,W=10,Y=Math.sin(U*1.7);if(z.by=Y*.004,z.lean=0,z.twist=Math.sin(U*.45)*.03,z.spine=Y*.012,z.headX=Math.sin(U*.6+1)*.04,z.headY=Math.sin(U*.33)*.22+Math.sin(U*.71)*.08,z.headZ=Math.sin(U*.5)*.03,z.shLx=Math.sin(U*.9)*.03,z.shRx=-Math.sin(U*.9)*.03,z.shLz=.2,z.shRz=-.2,z.elL=-.2,z.elR=-.2,z.hipL=0,z.hipR=0,z.kneeL=0,z.kneeR=0,z.skirtX=0,z.skirtS=1,z.handRx=0,A.state==="walk"){A.phase+=D*A.speed*3.5;let ae=Math.sin(A.phase),J=Math.cos(A.phase),ue=He(A.speed/2.4,.3,1);z.hipL=-ae*.62*ue,z.hipR=ae*.62*ue,z.kneeL=Math.max(0,J)*.95*ue+.08,z.kneeR=Math.max(0,-J)*.95*ue+.08,z.shLx=ae*.5*ue,z.shRx=-ae*.5*ue,z.elL=-.3-Math.max(0,ae)*.3,z.elR=-.3-Math.max(0,-ae)*.3,z.shLz=.2,z.shRz=-.2,z.by=Math.abs(J)*.035*ue-.02,z.lean=.07*ue,z.twist=-ae*.1*ue,z.headY=ae*.05,z.headX=-.03,z.headZ=J*.03,z.skirtX=-.05+J*.04;let Te=Math.floor(A.phase/Math.PI);Te!==A._step&&(A._step=Te,A.onStep&&A.onStep()),W=16}else if(A.state==="water"){A.actionT+=D;let ae=He(A.actionT/A.actionDur,0,1),J=wn(ae/.18)*wn((1-ae)/.15),ue=wn((ae-.16)/.12)*wn((1-ae)/.14),Te=A.high?1:0;z.shRx=-(1+Te*1.25)*J,z.shRz=-.1-.12*J,z.elR=-(.55-Te*.3)*J,z.handRx=(.75+Math.sin(U*5)*.06)*ue-Te*.3*J,z.shLx=.15*J,z.shLz=.3*J+.1,z.elL=-.9*J,z.lean=(.14-Te*.2)*J,z.headX=(.3-Te*.75)*J,z.headY=0,z.twist=.12*J,z.kneeL=.12*J,z.hipL=-.06*J}else if(A.state==="plant"){A.actionT+=D;let ae=He(A.actionT/A.actionDur,0,1),J=wn(ae/.22)*wn((1-ae)/.2),ue=Math.sin(U*9)*.5+.5;z.by=-.36*J,z.hipL=-1.5*J,z.kneeL=2.25*J,z.hipR=-.55*J,z.kneeR=2.1*J,z.lean=.55*J,z.spine=.15*J,z.skirtX=-.5*J,z.skirtS=1-.3*J,z.shRx=-(1.05+ue*.3)*J,z.elR=-(.5+ue*.45)*J,z.shRz=-.05,z.shLx=-.9*J,z.elL=-.7*J,z.shLz=.25*J,z.headX=.35*J,z.headY=0,z.handRx=.6*J,W=12}else if(A.state==="collect"){A.actionT+=D;let ae=He(A.actionT/A.actionDur,0,1),J=wn(ae/.3)*wn((1-ae)/.3);z.lean=.4*J,z.shRx=-1.25*J,z.shLx=-1.2*J,z.elR=-.4*J,z.elL=-.45*J,z.shRz=-.25*J,z.shLz=.25*J,z.kneeL=.3*J,z.kneeR=.3*J,z.hipL=-.3*J,z.hipR=-.3*J,z.by=-.04*J,z.headX=.3*J,z.headY=0}else if(A.state==="cheer"){A.actionT+=D;let ae=He(A.actionT/A.actionDur,0,1),J=wn(ae/.2)*wn((1-ae)/.25),ue=Math.abs(Math.sin(ae*Math.PI*3))*J;z.by=ue*.11,z.shLx=-2.45*J,z.shRx=-2.45*J,z.shLz=.95*J+.1,z.shRz=-.95*J-.1,z.elL=-.25,z.elR=-.25,z.headX=-.2*J,z.headY=0,z.kneeL=(1-ue)*.3*J,z.kneeR=(1-ue)*.3*J,z.hipL=-(1-ue)*.15*J,z.hipR=-(1-ue)*.15*J,z.spine=-.08*J,W=18}else if(A.state==="admire"){A.actionT+=D;let ae=He(A.actionT/A.actionDur,0,1),J=wn(ae/.25)*wn((1-ae)/.25);z.lean=.25*J,z.shLx=-.5*J,z.shRx=-.5*J,z.elL=-1.7*J,z.elR=-1.7*J,z.shLz=-.25*J,z.shRz=.25*J,z.headX=.22*J,z.headZ=.12*J,z.headY=0,z.kneeL=.15*J,z.kneeR=.15*J,z.hipL=-.1*J,z.hipR=-.1*J}A.state!=="idle"&&A.state!=="walk"&&A.actionT>=A.actionDur&&A.stop();let $=1-Math.exp(-W*D);for(let ae in E)E[ae]+=(C[ae]-E[ae])*$;e.position.y=E.by,e.rotation.x=E.lean*.22,e.position.z=-E.lean*.1,r.spine.rotation.set(E.spine+E.lean*.95,E.twist,0),r.hips.rotation.y=-E.twist*.4,r.head.rotation.set(E.headX-E.lean*.75,E.headY-E.twist,E.headZ),r.shL.rotation.set(E.shLx,0,-E.shLz),r.shR.rotation.set(E.shRx,0,-E.shRz),r.hipL.rotation.x=E.hipL,r.hipR.rotation.x=E.hipR,r.kneeL.rotation.x=E.kneeL,r.kneeR.rotation.x=E.kneeR,r.skirt.rotation.x=E.skirtX,r.skirt.scale.set(1+(1-E.skirtS)*.5,E.skirtS,1+(1-E.skirtS)*.8),b.userData.u.uSway.value=.14+A.speed*.12;let K=A.targetHeading-A.heading;K=Math.atan2(Math.sin(K),Math.cos(K)),A.heading+=K*(1-Math.exp(-9*D)),i.rotation.y=A.heading,A.faceHold>0?(A.faceHold-=D,A.faceHold<=0&&A.setFace("open")):(A.blinkT-=D,A.blinkT<0&&(A.face==="open"?(A.setFace("closed"),A.blinkT=.11):(A.setFace("open"),A.blinkT=1.8+Math.random()*3.5))),S.getWorldPosition(A.spoutWorld)},A}var Gi=900;function E0(i){let e=new Float32Array(Gi*3),t=new Float32Array(Gi*3),n=new Float32Array(Gi),s=new Float32Array(Gi),a=[];for(let w=0;w<Gi;w++)a.push({life:0});let h=new yt;h.setAttribute("position",new Ft(e,3)),h.setAttribute("color",new Ft(t,3)),h.setAttribute("aSize",new Ft(n,1)),h.setAttribute("aAlpha",new Ft(s,1));let o=new Gt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / -mv.z; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.15, r) * vA; gl_FragColor = vec4(vC, a); }"}),l=new ro(h,o);l.frustumCulled=!1,l.renderOrder=5,i.add(l);let r=0,c=new de,u=w=>{for(let N=0;N<Gi&&(r=(r+1)%Gi,!(a[r].life<=0));N++);let S=a[r];S.x=w.x,S.y=w.y,S.z=w.z,S.vx=w.vx??0,S.vy=w.vy??0,S.vz=w.vz??0,S.g=w.g??0,S.drag=w.drag??0,S.life=S.max=w.life??1,S.size=w.size??.05,S.grow=w.grow??0,c.set(w.color??16777215),S.r=c.r,S.gc=c.g,S.b=c.b,S.a=w.alpha??1,S.floor=w.floor??-1,S.sway=w.sway??0,S.tw=w.twinkle??0,S.seed=Math.random()*10},d={emit:u},f=(w,S)=>w+Math.random()*(S-w);d.water=(w,S,N=5)=>{for(let H=0;H<N;H++){let F=.42+Math.random()*.1,T=S.x+f(-.2,.2),C=S.z+f(-.2,.2),E=S.y+f(0,.15);u({x:w.x,y:w.y,z:w.z,vx:(T-w.x)/F,vz:(C-w.z)/F,vy:(E-w.y)/F+4.9*F,g:-9.8,life:F+.05,size:f(.025,.045),color:Math.random()<.5?12576511:15267583,alpha:.85})}},d.splash=(w,S=6)=>{for(let N=0;N<S;N++)u({x:w.x+f(-.12,.12),y:w.y+.05,z:w.z+f(-.12,.12),vx:f(-.5,.5),vy:f(.6,1.4),vz:f(-.5,.5),g:-5,life:.4,size:.03,color:14217471,alpha:.7})},d.sparkle=(w,S=14,N=16770688,H=.3)=>{for(let F=0;F<S;F++)u({x:w.x+f(-H,H),y:w.y+f(0,H*1.5),z:w.z+f(-H,H),vx:f(-.3,.3),vy:f(.3,1),vz:f(-.3,.3),drag:1.5,life:f(.6,1.2),size:f(.04,.09),color:N,twinkle:12})},d.dust=(w,S=10)=>{for(let N=0;N<S;N++)u({x:w.x+f(-.1,.1),y:w.y+.03,z:w.z+f(-.1,.1),vx:f(-.6,.6),vy:f(.2,.7),vz:f(-.6,.6),drag:3,life:f(.4,.8),size:f(.07,.14),grow:.2,color:9071184,alpha:.5})},d.hearts=(w,S=5)=>{for(let N=0;N<S;N++)u({x:w.x+f(-.2,.2),y:w.y,z:w.z+f(-.2,.2),vx:f(-.15,.15),vy:f(.5,.9),vz:f(-.15,.15),drag:.8,life:f(.9,1.5),size:f(.07,.11),color:N%2?16751288:16762584,sway:1})},d.burst=(w,S,N=40,H=1.2)=>{for(let F=0;F<N;F++){let T=Math.random()*Me,C=f(.5,2.2);u({x:w.x,y:w.y+f(.2,1),z:w.z,vx:Math.cos(T)*C*H,vy:f(1.2,3.2),vz:Math.sin(T)*C*H,g:-3.2,drag:1.2,life:f(1.2,2.4),size:f(.06,.12),color:S[F%S.length],sway:1.5})}},d.petalFall=(w,S,N)=>u({x:w.x+f(-N,N),y:w.y+f(-.3,.5),z:w.z+f(-N,N),vx:f(-.1,.25),vy:-f(.25,.5),vz:f(-.1,.1),life:f(4,7),size:f(.05,.08),color:S,sway:2,floor:.03,alpha:.95}),d.smoke=w=>u({x:w.x+f(-.08,.08),y:w.y,z:w.z+f(-.08,.08),vx:.18+f(-.05,.05),vy:f(.35,.55),vz:f(-.05,.05),life:f(5,8),size:.3,grow:.22,color:15262942,alpha:.22,drag:.1});let g=[],v=new en({vertexColors:!0,side:St}),m=(w,S)=>{let N=new Wt;return N.petal(re(mt(-1.15),fe(0)),{L:.085,W:.075,a:1.5,b:.45,nu:3,nv:2,cols:[x(2760728),w,S]}),N.petal(re(mt(-2.05),fe(0)),{L:.06,W:.06,a:1.4,b:.45,nu:3,nv:2,cols:[x(2760728),w,S]}),N.build()},p=[[16228894,16503386],[6990064,12574975],[16249048,16777215],[15755930,16564440],[16242762,16773792],[11832048,14733567]];for(let w=0;w<9;w++){let S=new Nt,[N,H]=p[w%p.length],F=m(x(N),x(H)),T=new Le(F,v),C=new Le(F,v);C.scale.x=-1,S.add(T,C);let E=new Le(new Ei(.006,.05,2,5),new en({color:2760728}));E.rotation.x=Math.PI/2,S.add(E),S.visible=!1,i.add(S),g.push({g:S,wr:T,wl:C,pos:new V(Math.random()*6-3,1,Math.random()*6),target:new V(0,1,0),t:Math.random()*10,rest:0,seed:Math.random()*100,speed:f(.8,1.4)})}d.butterflyTargets=[],d.butterflyCount=0;let y=[];for(let w=0;w<46;w++)y.push({x:f(-12,12),z:f(-8,14),y:f(.3,1.8),s:Math.random()*100});let _=500,b=new Float32Array(_*6),L=new yt;L.setAttribute("position",new Ft(b,3));let R=new ao(L,new Ca({color:13624564,transparent:!0,opacity:0}));R.frustumCulled=!1,i.add(R);let I=[];for(let w=0;w<_;w++)I.push({x:f(-16,16),y:f(0,14),z:f(-12,18),v:f(11,15)});d.rain=0,d.season=-1;let B=0;return d.update=(w,S,N,H,F)=>{o.uniforms.uScale.value=innerHeight*1.9*(H.fov?1/Math.tan(H.fov*Math.PI/360)/3.4:1);for(let E=0;E<Gi;E++){let A=a[E];if(A.life<=0){s[E]=0,n[E]=0;continue}A.life-=w;let D=1-A.life/A.max;A.vy+=A.g*w;let U=Math.exp(-A.drag*w);A.vx*=U,A.vy*=A.g?1:U,A.vz*=U,A.x+=(A.vx+(A.sway?Math.sin(S*2.2+A.seed)*.25*A.sway:0))*w,A.y+=A.vy*w,A.z+=(A.vz+(A.sway?Math.cos(S*1.7+A.seed)*.2*A.sway:0))*w,A.floor>=0&&A.y<A.floor&&(A.y=A.floor,A.vy=0,A.vx=0,A.vz=0,A.sway=0),e[E*3]=A.x,e[E*3+1]=A.y,e[E*3+2]=A.z,t[E*3]=A.r,t[E*3+1]=A.gc,t[E*3+2]=A.b,n[E]=A.size+A.grow*D*A.max,s[E]=A.a*Math.min(1,D*8)*Math.min(1,(1-D)*3)*(A.tw?.6+.4*Math.sin(S*A.tw+A.seed*7):1)}let T=N.night;if(T>.3)for(let E of y)Math.random()<w*.55&&u({x:E.x+Math.sin(S*.3+E.s)*1.5,y:E.y+Math.sin(S*.5+E.s*2)*.3,z:E.z+Math.cos(S*.27+E.s)*1.5,vx:f(-.1,.1),vy:f(-.03,.08),vz:f(-.1,.1),life:f(1.2,2.4),size:.07,color:15269754,alpha:T,sway:.4});if(h.attributes.position.needsUpdate=!0,h.attributes.color.needsUpdate=!0,h.attributes.aSize.needsUpdate=!0,h.attributes.aAlpha.needsUpdate=!0,d.season===0&&Math.random()<w*1.1&&d.petalFall({x:f(-12,12),y:f(2.5,4.5),z:f(-8,14)},Math.random()<.6?16566492:16777215,.5),d.season===2&&Math.random()<w*3.2){let E=[15238202,14196778,13127722,15910986];u({x:f(-13,13),y:f(3,6),z:f(-9,15),vx:f(.1,.5),vy:-f(.35,.6),vz:f(-.15,.15),life:f(6,10),size:f(.07,.11),color:E[Math.floor(Math.random()*4)],sway:2.4,floor:.03,alpha:.95})}d.season===3&&N.night<.5&&Math.random()<w*1.5&&u({x:f(-12,12),y:f(.05,.4),z:f(-8,14),life:f(.8,1.6),size:.05,color:15398655,twinkle:9,alpha:.8}),B-=w,B<0&&F&&(B=.45,d.smoke(F));let C=T>.5||d.rain>.3?0:d.butterflyCount;if(g.forEach((E,A)=>{let D=A<C;if(!D&&!E.g.visible)return;if(D&&!E.g.visible&&(E.g.visible=!0,E.pos.set(f(-13,13),2.5,15),E.rest=0),E.t+=w,!D)E.target.set(E.pos.x*1.2+4,5,22);else if(E.rest>0&&(E.rest-=w,E.rest<=0)){let Y=d.butterflyTargets;if(Y.length){let $=Y[Math.floor(Math.random()*Y.length)];E.target.set($.x+f(-.1,.1),$.y,$.z+f(-.1,.1))}else E.target.set(f(-4,4),.8,f(-3,3))}let U=E.target.clone().sub(E.pos),z=U.length();if(E.rest<=0)if(z<.08)E.rest=D?f(1.5,4):0,D||(E.g.visible=!1);else{U.normalize();let Y=Math.min(1,z);E.pos.addScaledVector(U,E.speed*w*Math.min(1,z*2+.3)),E.pos.x+=Math.sin(E.t*3.1+E.seed)*.5*w*Y,E.pos.y+=Math.sin(E.t*5.3+E.seed)*.6*w*Y,E.pos.z+=Math.cos(E.t*2.7+E.seed)*.5*w*Y,E.g.rotation.y=Math.atan2(U.x,U.z)}E.g.position.copy(E.pos);let W=E.rest>0?.25+Math.sin(E.t*2.5)*.25:Math.sin(E.t*26)*.9+.1;E.wr.rotation.z=W,E.wl.rotation.z=-W}),R.material.opacity=d.rain*.4,R.visible=d.rain>.01,R.visible){for(let E=0;E<_;E++){let A=I[E];A.y-=A.v*w,A.y<0&&(A.y=14,A.x=H.position.x*.3+f(-16,16),A.z=f(-12,18)),b[E*6]=A.x,b[E*6+1]=A.y,b[E*6+2]=A.z,b[E*6+3]=A.x+.03,b[E*6+4]=A.y+.38,b[E*6+5]=A.z}L.attributes.position.needsUpdate=!0}},d}function T0(){let i=r=>{let c=document.createElement("canvas");c.width=c.height=128;let u=c.getContext("2d");u.shadowColor="rgba(40,60,40,0.35)",u.shadowBlur=8,u.shadowOffsetY=3,u.fillStyle="#ffffff",u.beginPath(),u.arc(64,60,46,0,Me),u.fill(),u.beginPath(),u.moveTo(52,100),u.lineTo(64,122),u.lineTo(76,100),u.fill(),u.shadowColor="transparent",r(u);let d=new kn(c);return d.colorSpace=wt,d},e=i(r=>{let c=r.createLinearGradient(0,28,0,92);c.addColorStop(0,"#8fd3ff"),c.addColorStop(1,"#2f8fe0"),r.fillStyle=c,r.beginPath(),r.moveTo(64,24),r.bezierCurveTo(64,24,38,58,38,70),r.arc(64,70,26,Math.PI,0,!0),r.bezierCurveTo(90,58,64,24,64,24),r.fill(),r.fillStyle="rgba(255,255,255,0.75)",r.beginPath(),r.ellipse(54,66,5,9,.4,0,Me),r.fill()}),t=i(r=>{r.fillStyle="#f7b92a",r.beginPath(),r.arc(64,60,30,0,Me),r.fill(),r.fillStyle="#ffd95a",r.beginPath(),r.arc(64,60,24,0,Me),r.fill(),r.fillStyle="#f29a1a";for(let c=0;c<5;c++){let u=c/5*Me-Math.PI/2;r.beginPath(),r.ellipse(64+Math.cos(u)*11,60+Math.sin(u)*11,8,8,0,0,Me),r.fill()}r.fillStyle="#fff2b0",r.beginPath(),r.arc(64,60,6,0,Me),r.fill()}),n=(()=>{let r=document.createElement("canvas");r.width=r.height=96;let c=r.getContext("2d");c.fillStyle="rgba(255,255,255,0.92)",c.beginPath(),c.arc(48,48,36,0,Me),c.fill(),c.strokeStyle="#6aa85a",c.lineWidth=9,c.lineCap="round",c.beginPath(),c.moveTo(48,30),c.lineTo(48,66),c.moveTo(30,48),c.lineTo(66,48),c.stroke();let u=new kn(r);return u.colorSpace=wt,u})(),s=i(r=>{r.strokeStyle="#5a8f3a",r.lineWidth=7,r.lineCap="round",r.beginPath(),r.moveTo(64,88),r.lineTo(64,56),r.stroke(),r.fillStyle="#7fb24a";for(let[c,u]of[[-.9,30],[.9,30],[-.25,36],[.3,34]])r.save(),r.translate(64,70),r.rotate(c),r.beginPath(),r.ellipse(0,-u*.6,7,u*.55,0,0,Me),r.fill(),r.restore();r.fillStyle="#f7d23a",r.beginPath(),r.arc(64,34,9,0,Me),r.fill()}),a=i(r=>{r.strokeStyle="#8a97a0",r.lineWidth=8,r.lineCap="round",r.beginPath(),r.moveTo(42,30),r.lineTo(76,70),r.moveTo(86,30),r.lineTo(52,70),r.stroke(),r.strokeStyle="#e2685f",r.lineWidth=7,r.beginPath(),r.arc(46,82,10,0,Me),r.stroke(),r.beginPath(),r.arc(82,82,10,0,Me),r.stroke(),r.fillStyle="#5d6b72",r.beginPath(),r.arc(64,56,4,0,Me),r.fill()}),h=i(r=>{r.strokeStyle="#9a6a3a",r.lineWidth=6,r.beginPath(),r.arc(64,62,24,Math.PI,0),r.stroke(),r.fillStyle="#c08a4e",r.beginPath(),r.moveTo(36,60),r.lineTo(92,60),r.lineTo(84,90),r.lineTo(44,90),r.closePath(),r.fill(),r.strokeStyle="#9a6a3a",r.lineWidth=3;for(let c of[70,80])r.beginPath(),r.moveTo(40,c),r.lineTo(88,c),r.stroke();for(let[c,u,d]of[[50,52,"#f07aa4"],[64,46,"#f7c84a"],[78,52,"#b48af0"]])r.fillStyle=d,r.beginPath(),r.arc(c,u,9,0,Me),r.fill(),r.fillStyle="#fff6c8",r.beginPath(),r.arc(c,u,3.5,0,Me),r.fill()}),o=i(r=>{r.fillStyle="#e2685f",r.fillRect(36,52,56,38),r.fillStyle="#ee7f76",r.fillRect(32,40,64,14),r.fillStyle="#f7c84a",r.fillRect(58,40,12,50),r.strokeStyle="#f7c84a",r.lineWidth=6,r.beginPath(),r.ellipse(52,32,11,8,-.5,0,Me),r.stroke(),r.beginPath(),r.ellipse(76,32,11,8,.5,0,Me),r.stroke()}),l=i(r=>{r.fillStyle="#8a5a34",r.beginPath(),r.ellipse(64,64,15,22,.5,0,Me),r.fill(),r.fillStyle="#b07a4a",r.beginPath(),r.ellipse(59,58,5,10,.5,0,Me),r.fill(),r.fillStyle="#f7c84a";for(let[c,u,d]of[[36,40,7],[92,46,6],[88,84,8],[40,86,5]]){r.beginPath();for(let f=0;f<8;f++){let g=f/8*Me,v=f%2?d*.4:d;r.lineTo(c+Math.cos(g)*v,u+Math.sin(g)*v)}r.fill()}});return{water:e,gift:t,plus:n,weed:s,prune:a,order:h,daily:o,seed:l}}var H1=["water","plant","pop","bloom","coin","buy","click","levelup","expand","step","error"];function A0(i="audio/"){let e={ctx:null,ready:!1,musicVol:.6,sfxVol:.8,buffers:{},night:0,rain:0},t,n,s,a,h=null,o=[],l={},r=!1,c=null,u=async g=>{if(e.buffers[g])return e.buffers[g];try{let v,m=window.__AUDIO&&window.__AUDIO[g];if(m){let y=atob(m),_=new Uint8Array(y.length);for(let b=0;b<y.length;b++)_[b]=y.charCodeAt(b);v=_.buffer}else{let y=await fetch(i+g+".mp3");if(!y.ok)return null;v=await y.arrayBuffer()}let p=await e.ctx.decodeAudioData(v);return e.buffers[g]=p,p}catch{return null}};e.unlock=()=>{if(e.ctx){e.ctx.resume&&e.ctx.resume();return}let g=window.AudioContext||window.webkitAudioContext;if(g){e.ctx=new g,t=e.ctx.createGain(),t.connect(e.ctx.destination),n=e.ctx.createGain(),n.gain.value=e.musicVol,n.connect(t),s=e.ctx.createGain(),s.gain.value=e.sfxVol,s.connect(t),a=e.ctx.createGain(),a.gain.value=Math.min(1,e.sfxVol*1.1),a.connect(t);for(let v of H1)u("sfx_"+v);e.ready=!0,d(),f()}};let d=async()=>{for(let g of["day","night","rain"]){let v=await u("amb_"+g);if(!v)continue;let m=e.ctx.createBufferSource(),p=e.ctx.createGain();m.buffer=v,m.loop=!0,p.gain.value=0,m.connect(p),p.connect(a),m.start(),l[g]=p}},f=async()=>{if(!e.ready)return;let g=e.night>.6?["music4"]:["music1","music2","music3"];o.length||(o=g.slice().sort(()=>Math.random()-.5));let v=o.shift();g.includes(v)||(o=[],v=g[Math.floor(Math.random()*g.length)]),h&&h.name===v&&g.length>1&&(v=g[(g.indexOf(v)+1)%g.length]);let m=await u(v);if(!m){c=setTimeout(f,8e3);return}let p=e.ctx.currentTime,y=e.ctx.createBufferSource(),_=e.ctx.createGain();if(y.buffer=m,y.connect(_),_.connect(n),_.gain.setValueAtTime(0,p),_.gain.linearRampToValueAtTime(1,p+3),y.start(),h){let b=h;b.g.gain.cancelScheduledValues(p),b.g.gain.setValueAtTime(b.g.gain.value,p),b.g.gain.linearRampToValueAtTime(0,p+4),setTimeout(()=>{try{b.src.stop()}catch{}},4500)}h={src:y,g:_,name:v,night:e.night>.6},clearTimeout(c),c=setTimeout(f,Math.max(5,m.duration-4+2.5)*1e3)};return e.sfx=(g,v=1,m=1)=>{if(!e.ready)return;let p=e.buffers["sfx_"+g];if(!p)return;let y=e.ctx.createBufferSource(),_=e.ctx.createGain();y.buffer=p,y.playbackRate.value=m*(.96+Math.random()*.08),_.gain.value=v,y.connect(_),_.connect(s),y.start()},e.setVolumes=(g,v)=>{e.musicVol=g,e.sfxVol=v,e.ready&&(n.gain.value=g,s.gain.value=v,a.gain.value=Math.min(1,v*1.1))},e.update=(g,v)=>{if(e.night=g,e.rain=v,!e.ready)return;let m=e.ctx.currentTime,p=(y,_)=>y&&y.gain.setTargetAtTime(_,m,1.2);p(l.day,(1-g)*(1-v*.7)*.9),p(l.night,g*.9),p(l.rain,v*.9),h&&h.night!==g>.6&&Math.abs(g-.6)>.25&&(o=[],f())},e.pause=g=>{e.ctx&&(g?e.ctx.suspend():e.ctx.resume())},e}function R0(i){let e=null,t=()=>{e=new Uint8Array(3780);for(let l=0;l<60;l++)for(let r=0;r<63;r++)e[l*63+r]=i(-12.4+r*.4,-8.8+l*.4)?1:0},n=(l,r)=>[Math.max(0,Math.min(62,Math.round((l- -12.4)/.4))),Math.max(0,Math.min(59,Math.round((r- -8.8)/.4)))],s=(l,r)=>l>=0&&r>=0&&l<63&&r<60&&!e[r*63+l],a=(l,r)=>{if(s(l,r))return[l,r];for(let c=1;c<14;c++){let u=null,d=1e9;for(let f=-c;f<=c;f++)for(let g=-c;g<=c;g++)if(Math.max(Math.abs(g),Math.abs(f))===c&&s(l+g,r+f)){let v=g*g+f*f;v<d&&(d=v,u=[l+g,r+f])}if(u)return u}return[l,r]},h=(l,r,c,u)=>{let d=Math.hypot(c-l,u-r),f=Math.ceil(d/.15);for(let g=0;g<=f;g++){let v=g/f;if(i(l+(c-l)*v,r+(u-r)*v))return!1}return!0},o={invalidate:()=>{e=null}};return o.path=(l,r,c,u)=>{e||t();let[d,f]=a(...n(l,r)),[g,v]=a(...n(c,u)),m=3780,p=new Float32Array(m).fill(1e9),y=new Int32Array(m).fill(-1),_=new Uint8Array(m),b=[],L=f*63+d,R=v*63+g;p[L]=0,b.push([0,L]);let I=F=>{let T=F%63,C=F/63|0;return Math.hypot(T-g,C-v)},B=!1,w=0;for(;b.length&&w++<6e3;){let F=0;for(let A=1;A<b.length;A++)b[A][0]<b[F][0]&&(F=A);let[,T]=b.splice(F,1)[0];if(_[T])continue;if(_[T]=1,T===R){B=!0;break}let C=T%63,E=T/63|0;for(let A=-1;A<=1;A++)for(let D=-1;D<=1;D++){if(!D&&!A)continue;let U=C+D,z=E+A;if(!s(U,z)||D&&A&&(!s(C+D,E)||!s(C,E+A)))continue;let W=z*63+U,Y=p[T]+(D&&A?1.414:1);Y<p[W]&&(p[W]=Y,y[W]=T,b.push([Y+I(W),W]))}}let S=[];if(B){let F=R;for(;F!==-1;)S.push([-12.4+F%63*.4,-8.8+(F/63|0)*.4]),F=y[F];S.reverse()}else S.push([l,r]);S[0]=[l,r],i(c,u)||S.push([c,u]);let N=[S[0]],H=0;for(;H<S.length-1;){let F=S.length-1;for(;F>H+1&&!h(S[H][0],S[H][1],S[F][0],S[F][1]);)F--;N.push(S[F]),H=F}return N.slice(1)},o}var Pe=V,En=x(16777215),Wc={type:"dome",r:.012,h:.007,cols:[x(14258191),x(16107048),x(16374869)]},Ja=(i,e,t,n={})=>({sepals:{n:8,L:.012,W:.006},layers:[{n:n.n??17,L:n.L??.05,W:n.W??.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[i,e,t],nu:4,nv:2},{n:(n.n??17)-2,L:(n.L??.05)*.9,W:n.W??.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[i,e,t],nu:4,nv:2}],center:{...Wc,r:n.cr??.016,h:.009,cols:n.cc??Wc.cols}}),ja=(i,e,t,n={})=>({layers:[{n:n.n??5,L:n.L??.03,W:n.W??.03,a:1.4,b:.42,tilt:1.35,tiltC:.2,cup:.2,ruffle:n.ruffle??0,cols:[t??at(i,.8),i,e],nu:3,nv:2,notch:n.notch??0}],center:{type:"dome",r:.004,h:.003,cols:[x(16107048),x(16374869)],seg:5}});var Ka=(i,e,t,n,s,a)=>{for(let h=0;h<t;h++){let o=e()*Me,l=e.range(.5,1.25),r=e.range(.55,.95),c=new Pe(Math.cos(o)*Math.sin(l)*n*r,Math.cos(l)*s*r+(a.y??0),Math.sin(o)*Math.sin(l)*n*r),u=a.r*e.range(.8,1.15),d=a.ripe<1?nt(a.green,a.c,He(a.ripe*1.2-e()*.3,0,1)):Vn(a.c,e,.04);i.blob(re(se(c.x,c.y,c.z),mt(e.range(-.3,.3))),u,u*(a.tall??1),at(d,.78),d,7,5,nt(d,En,.22))}};function C0(i,e){let t=l=>i({spots:["bed","pot"],...l});t({id:"onze_horas",name:"Onze-horas",lvl:1,price:9,grow:55,gift:6,spots:["bed","pot","window","hang"],h:.14,loves:[1],info:"Abre com o sol do fim da manh\xE3.",build:(l,r,c,u)=>{let d=[[15745162,16222904],[16228894,16502874],[16244810,16773792],[16777215,16773366]];Xn(l,r,{stems:12,L:.2,up:.25,out:.9,drop:.25,stemC:x(12085866),leaf:{n:10,L:.022,W:.006,c:x(5939274),fold:0},flower:{per:2,make:(f,g,v,m)=>{let p=v.pick(d);Rt(f,g,v,e.camellia(x(p[0]),x(p[1])),m,.6)}}},c,u)}}),t({id:"calendula",name:"Cal\xEAndula",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.34,loves:[0,2],info:"Solzinhos alaranjados que curam e alegram.",build:(l,r,c,u)=>gt(l,r,{R:.15,H:.26,branches:9,heads:7,stalk:.14,leaf:{n:7,L:.07,W:.022,c:x(5937732),tilt:1},head:d=>d()<.5?Ja(x(15235084),x(16226846),x(16496698),{cc:[x(9062924),x(12085780),x(14256670)]}):Ja(x(15905306),x(16371514),x(16639082)),headK:1.05},c,u)}),t({id:"maria_sem_vergonha",name:"Maria-sem-vergonha",lvl:2,price:12,grow:60,gift:8,spots:["bed","pot","window","hang"],h:.26,loves:[0,1],info:"Floresce sem parar, at\xE9 na sombra.",build:(l,r,c,u)=>{let d=[[15755930,16361668],[16218202,16494746],[16446710,16777215],[14170762,15760052],[12085984,14199024]];gt(l,r,{R:.17,H:.2,branches:10,heads:14,headUp:.4,leaf:{n:8,L:.05,W:.028,c:x(4165444),tilt:1.1},head:f=>{let g=f.pick(d);return ja(x(g[0]),x(g[1]),null,{L:.028,W:.03,notch:.1})},headK:1.1},c,u)}}),t({id:"miosotis",name:"Mios\xF3tis",lvl:2,price:12,grow:60,gift:8,spots:["bed","pot","window"],h:.22,loves:[0],info:"Azulzinho de c\xE9u: \u201Cn\xE3o te esque\xE7as de mim\u201D.",build:(l,r,c,u)=>gt(l,r,{R:.16,H:.18,branches:11,heads:26,headUp:.5,stalk:.2,leaf:{n:8,L:.045,W:.014,c:x(4886608)},head:e.small5(x(6990064),x(11063551),x(16777215)),headK:.75},c,u)}),t({id:"begonia",name:"Beg\xF4nia",lvl:2,price:13,grow:65,gift:9,spots:["pot","window","hang","bed"],h:.26,loves:[1,2],info:"Folhas lustrosas e flores de cera.",build:(l,r,c,u)=>{let d=r.pick([[15218762,16022150],[16222896,16565464],[16446704,16777215]]);gt(l,r,{R:.16,H:.2,branches:9,heads:10,headUp:.5,leaf:{n:6,L:.06,W:.055,c:x(3832380),tip:x(10115658),tipMix:.35,a:.9,b:.4,tilt:1.15},head:e.camellia(x(d[0]),x(d[1])),headK:.6},c,u)}}),t({id:"violeta",name:"Violeta",lvl:2,price:14,grow:70,gift:9,spots:["pot","window"],h:.16,loves:[3,0],info:"Pequenina, de folhas aveludadas.",build:(l,r,c,u)=>{if(Rn(l,r,{n:Math.round(8+8*c),L:.085*c,W:.07*c,a:1.3,b:.4,tilt:1.25,curl:.4,fold:.15,c:x(4160068),nu:4,nv:3}),u>=0){let d=r.pick([[6963136,10123496],[15227560,16228560],[16052479,16777215]]);for(let f=0;f<9;f++){let g=f*2.4,v=r.range(.01,.045);Rt(l,re(se(Math.cos(g)*v,.06*c+r()*.02,Math.sin(g)*v),pe(g),fe(.3)),r,ja(x(d[0]),x(d[1]),null,{L:.02,W:.021}),He(u+r.range(-.2,.1),0,1),1.1)}}}}),t({id:"kalanchoe",name:"Calancho\xEA",lvl:3,price:15,grow:70,gift:10,spots:["pot","window"],h:.24,thirst:.5,loves:[3],info:"Flor-da-fortuna: buqu\xEAs que duram meses.",build:(l,r,c,u)=>{let d=r.pick([[15216670,16017994],[16228894,16500826],[15751834,16359620],[16244810,16773280]]).map(x);gt(l,r,{R:.14,H:.17,branches:8,heads:5,stalk:.4,headUp:.8,leaf:{n:6,L:.06,W:.045,c:x(3833928),a:.9,b:.45,cup:.4,fold:.1,tilt:1.15},head:{ball:{n:22,r:.04,fs:.016,cols:d,squash:.5,cover:.1}}},c,u)}}),t({id:"aster",name:"\xC1ster",lvl:3,price:16,grow:70,gift:11,h:.45,loves:[2],info:"Estrelinhas lilases do outono.",build:(l,r,c,u)=>gt(l,r,{R:.2,H:.38,branches:10,heads:14,stalk:.1,leaf:{n:9,L:.06,W:.014,c:x(4885064)},head:d=>d()<.6?Ja(x(8018632),x(10125024),x(12626160),{n:19,L:.036,W:.008,cr:.011}):Ja(x(14178976),x(15764160),x(16365784),{n:19,L:.036,W:.008,cr:.011})},c,u)}),t({id:"capuchinha",name:"Capuchinha",lvl:3,price:16,grow:70,gift:11,spots:["bed","hang","window","pot"],h:.26,loves:[1],info:"Folhas redondinhas e flores que se comem.",build:(l,r,c,u)=>{let d=[[15888410,16228922],[16238622,16507754],[14166046,15749178]];Xn(l,r,{stems:11,L:.42,up:.4,out:.8,drop:.9,stemC:x(9091176),leaf:{n:8,L:.06,W:.07,c:x(5941328),a:1,b:.3,fold:.05,curl:.15},flower:{per:2,make:(f,g,v,m)=>{let p=v.pick(d);Rt(f,g,v,ja(x(p[0]),x(p[1]),x(9054732),{L:.034,W:.034,ruffle:.15}),m,1.1)}}},c,u)}}),t({id:"lobelia",name:"Lob\xE9lia",lvl:3,price:15,grow:65,gift:10,spots:["hang","window","pot"],h:.2,loves:[0,1],info:"Uma cascata de azul mi\xFAdo.",build:(l,r,c,u)=>Xn(l,r,{stems:16,L:.36,up:.35,out:.7,drop:1.3,stemC:x(5933642),stemR:.002,leaf:{n:8,L:.02,W:.008,c:x(4886596),fold:0},flower:{per:5,make:(d,f,g,v)=>Rt(d,f,g,e.small5(x(3824352),x(8035064),x(16777215)),v,.75)}},c,u)}),t({id:"jacinto",name:"Jacinto",lvl:3,price:18,grow:75,gift:13,spots:["bed","pot","window"],h:.3,loves:[0],season:0,info:"S\xF3 na primavera: cachos perfumad\xEDssimos.",build:(l,r,c,u)=>{let d=r.pick([[6970080,10128116],[15760048,16363728],[16052479,16777215]]).map(x);Sn(l,r,{stems:[3,4],H:.28,lean:.12,stemR:.008,stemC:x(6987864),florets:26,from:.35,type:"flower",fs:.022,off:.012,taper:.25,cols:d,bud:x(9091194),basal:{n:10,L:.24,W:.03,a:.7,b:.5,tilt:.35,curl:.5,fold:.45,c:x(4889168)}},c,u)}}),t({id:"gerbera",name:"G\xE9rbera",lvl:4,price:22,grow:80,gift:15,h:.45,loves:[0,1],info:"Margaridona de cores vibrantes.",build:(l,r,c,u)=>{let d=[[14690922,16018074],[15888410,16228922],[15214622,16013386],[16238622,16507754]];jt(l,r,{stems:[5,6],H:.4,lean:.2,spread:.07,stemR:.004,basal:{n:12,L:.2,W:.06,a:1.1,b:.7,tilt:.95,ruffle:.2,rf:3,nv:3,c:x(4164160)},head:f=>{let g=f.pick(d);return Ja(x(g[0]),x(g[0]),x(g[1]),{n:22,L:.058,W:.012,cr:.02,cc:[x(3811860),x(6965788),x(14262302)]})},headTilt:.2,headK:1.15},c,u)}}),t({id:"cravo",name:"Cravo",lvl:4,price:22,grow:85,gift:15,h:.5,loves:[0,3],info:"P\xE9talas franjadas com cheiro de especiaria.",build:(l,r,c,u)=>{let d=[[14690890,16015482],[16026288,16566492],[16447220,16777215],[16238666,16640160]];jt(l,r,{stems:[7,9],H:.46,lean:.24,spread:.07,stemR:.003,stemC:x(9087120),leaf:{n:7,L:.09,W:.008,c:x(8034952),tilt:.7,fold:0},head:f=>{let g=f.pick(d);return e.marigold(x(g[0]),x(g[1]))},headK:1.35},c,u)}}),t({id:"boca_de_leao",name:"Boca-de-le\xE3o",lvl:4,price:22,grow:85,gift:15,h:.6,loves:[0,3],info:"Aperta de ladinho e a florzinha \u201Cfala\u201D.",build:(l,r,c,u)=>{let d=r.pick([[15751818,16503370],[15216670,16228922],[16238622,16773792],[16446710,16361668]]).map(x);Sn(l,r,{stems:[5,6],H:.55,lean:.2,stemR:.004,florets:20,from:.4,type:"bell",fs:.036,off:.006,whorl:1.9,taper:.5,cols:d,bud:x(9091194),leaf:{n:10,L:.06,W:.014,c:x(4885060)}},c,u)}}),t({id:"salvia",name:"S\xE1lvia",lvl:4,price:20,grow:80,gift:14,h:.5,loves:[1,2],info:"Espigas vermelhas que chamam beija-flores.",build:(l,r,c,u)=>{Rn(l,r,{n:Math.round(18*c),L:.1*c,W:.045,c:x(4885064),tilt:1}),Sn(l,r,{stems:[8,10],H:.46,lean:.3,stemR:.003,florets:20,from:.5,type:"card",fs:.013,off:.005,whorl:1.4,taper:.4,cols:[x(14163998),x(15749178)],bud:x(9062970),leaf:{n:6,L:.06,W:.028,c:x(4885064)}},c,u)}}),t({id:"lirio_da_paz",name:"L\xEDrio-da-paz",lvl:4,price:24,grow:90,gift:16,spots:["pot","bed"],h:.5,loves:[1],info:"Bandeirinhas brancas entre folhas brilhantes.",build:(l,r,c,u)=>{if(Rn(l,r,{n:Math.round(8+8*c),L:.34*c,W:.085,a:.7,b:.6,tilt:.65,curl:.7,fold:.35,c:x(2452018),nu:5,nv:3,r:.01}),u>=0)for(let d=0;d<4;d++){let f=hn(r,.46*c*r.range(.85,1.05),.08,d*1.7+r(),.03,6);l.tube(null,f,.004,.003,x(4885060),x(5937744),4);let g=f[6],v=re(se(g.x,g.y,g.z),pe(r()*6),fe(.2));l.petal(v,{L:.1*be(.5,1,u),W:.06*be(.4,1,u),a:.75,b:.6,cup:.9,curl:-.3,cols:[x(14282688),En,En]}),l.blob(re(v,se(0,.035,-.008)),.006,.03,x(15918752),x(16446664),5,4)}}}),t({id:"alho_ornamental",name:"Alho-ornamental",lvl:5,price:26,grow:90,gift:18,h:.75,loves:[0],info:"Pompons roxos equilibrados em hastes finas.",build:(l,r,c,u)=>{Rn(l,r,{n:8,L:.26*c,W:.03,a:.7,b:.5,tilt:.55,curl:.8,c:x(5937754)});for(let d=0;d<4;d++){let f=hn(r,.7*c*r.range(.75,1.05),.1,d*1.6+r(),.02,6);l.tube(null,f,.005,.004,x(6987864),x(8040552),5),u>=0&&Po(l,_t(f[6],new Pe(0,1,0)),r,{n:60,r:.07,fs:.022,np:6,cols:[x(9067224),x(11041512),x(8014528)],squash:1,cover:.95},u)}}}),t({id:"anemona",name:"An\xEAmona",lvl:5,price:26,grow:85,gift:18,h:.4,loves:[0],season:0,info:"S\xF3 na primavera: olho escuro e p\xE9talas de papel.",build:(l,r,c,u)=>{let d=[[16447222,16777215],[6965960,10126056],[14166078,15751274],[15760048,16365780]];jt(l,r,{stems:[6,8],H:.36,lean:.24,spread:.07,stemR:.003,basal:{n:10,L:.1,W:.06,c:x(4885064),ruffle:.3,rf:4,nv:3,tilt:.9},head:f=>{let g=f.pick(d);return{layers:[{n:7,L:.045,W:.036,a:1.4,b:.45,tilt:1.25,tiltC:.15,cup:.35,ruffle:.1,cols:[nt(x(g[0]),x(2759226),.5),x(g[0]),x(g[1])]}],center:{type:"dome",r:.011,h:.01,y:.004,cols:[x(1709088),x(2760752),x(3813440)],seg:8,stamens:{n:14,len:.012,spread:.9,c:x(2760752),tip:x(3813446),tipR:.0025}}}},headTilt:.25,headK:1.15},c,u)}}),t({id:"lupino",name:"Lupino",lvl:5,price:26,grow:90,gift:18,spots:["bed"],h:.8,loves:[0,1],info:"Torres em degrad\xEA, do rosa ao azul.",build:(l,r,c,u)=>{let d=r.pick([[15760048,8018656],[16238666,15888410],[10124008,4872920],[16445686,15755930]]).map(x);Sn(l,r,{stems:[4,5],H:.74,lean:.14,stemR:.006,florets:34,from:.4,type:"card",fs:.02,off:.012,whorl:1.25,taper:.55,cols:d,bud:x(9089162),basalFan:{count:9,stalk:.2,n:7,L:.085,W:.022,c:x(4886600),spread:3}},c,u)}}),t({id:"ranunculo",name:"Ran\xFAnculo",lvl:6,price:30,grow:95,gift:21,h:.42,loves:[0,3],info:"Camadas e mais camadas, como papel crepom.",build:(l,r,c,u)=>{let d=[[16228922,16502922],[15755914,16498892],[16446700,16777215],[15222826,16225402],[16242762,16642224]];jt(l,r,{stems:[6,8],H:.38,lean:.2,spread:.07,stemR:.0035,basal:{n:12,L:.11,W:.05,c:x(4886344),ruffle:.3,rf:4,nv:3,tilt:.9},head:f=>{let g=f.pick(d);return e.camellia(x(g[0]),x(g[1]))},headK:1.3,headTilt:.15},c,u)}}),t({id:"amarilis",name:"Amar\xEDlis",lvl:6,price:32,grow:100,gift:22,spots:["pot","bed"],h:.6,loves:[3],season:3,info:"S\xF3 no inverno: trombetas enormes numa haste s\xF3.",build:(l,r,c,u)=>{let d=r.pick([[14163998,15749194,9047834],[16446708,16777215,14282928],[15760010,16568534,16445664]]);jt(l,r,{stems:[2,2],H:.52,lean:.05,spread:.06,stemR:.011,stemC:x(6987864),wob:.02,basal:{n:7,L:.34,W:.04,a:.7,b:.45,tilt:.45,curl:.7,fold:.4,c:x(4165448)},head:e.lily(x(d[0]),x(d[1]),x(d[2])),headsPer:3,pedicel:.04,headTilt:1.2,headK:1.25},c,u)}}),t({id:"agapanto",name:"Agapanto",lvl:6,price:32,grow:100,gift:22,h:.75,loves:[1],info:"Fogos de artif\xEDcio azuis no ver\xE3o.",build:(l,r,c,u)=>{Rn(l,r,{n:Math.round(12+8*c),L:.36*c,W:.03,a:.7,b:.45,tilt:.6,curl:.9,fold:.4,c:x(4164168),nu:5});for(let d=0;d<4;d++){let f=hn(r,.68*c*r.range(.8,1.05),.14,d*1.7+r(),.02,6);l.tube(null,f,.005,.004,x(5937744),x(6989920),5),u>=0&&Po(l,_t(f[6],new Pe(0,1,0)),r,{n:34,r:.075,fs:.036,np:6,cols:[x(5929704),x(9085172),x(4874968)],squash:.85,cover:.55},u)}}}),t({id:"gladiolo",name:"Glad\xEDolo",lvl:6,price:32,grow:100,gift:22,spots:["bed"],h:.95,loves:[1],season:1,info:"S\xF3 no ver\xE3o: a palma-de-santa-rita.",build:(l,r,c,u)=>{let d=r.pick([[15216670,16022106],[15760048,16499932],[16242762,16642208],[10115800,13148400]]).map(x);Sn(l,r,{stems:[4,5],H:.9,lean:.1,stemR:.006,florets:12,from:.42,type:"flower",fs:.05,off:.014,whorl:.35,taper:.5,cols:d,bud:x(9091194),basal:{n:10,L:.5,W:.03,a:.7,b:.4,tilt:.2,curl:.3,fold:.5,c:x(4889168)}},c,u)}}),t({id:"iris",name:"\xCDris",lvl:7,price:36,grow:110,gift:25,h:.65,loves:[0],info:"Tr\xEAs p\xE9talas para cima, tr\xEAs para baixo.",build:(l,r,c,u)=>{let d=r.pick([[5914560,9073384],[16242762,16642208],[16052479,16777215]]),f=x(d[0]),g=x(d[1]);jt(l,r,{stems:[4,5],H:.58,lean:.1,spread:.07,stemR:.005,basal:{n:12,L:.46,W:.035,a:.7,b:.4,tilt:.18,curl:.25,fold:.5,c:x(5937776)},head:{layers:[{n:3,L:.06,W:.042,a:1.2,b:.5,tilt:.25,tiltC:.1,curl:-.5,cup:.9,ruffle:.12,cols:[g,f,g]},{n:3,L:.07,W:.048,a:1.2,b:.5,tilt:1.1,tiltC:.2,curl:1.2,curlPow:2,cup:.3,ruffle:.12,cols:[x(16242762),f,at(f,.85)]}]},headK:1.2},c,u)}}),t({id:"anturio",name:"Ant\xFArio",lvl:7,price:38,grow:115,gift:26,spots:["pot","green"],h:.5,loves:[1],info:"Cora\xE7\xF5es vermelhos de verniz.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(5+4*c);d++){let f=d*2.4,g=.3*c*r.range(.7,1.1),v=r.range(.25,.6),m=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*v*.2,g*.7,Math.sin(f)*g*v*.2),new Pe(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.004,.003,x(4160058),x(4160058),4),bt(l,re(se(m[5].x,m[5].y,m[5].z),pe(-f+Math.PI/2),fe(.9+r()*.3)),r,{L:.19*c,W:.12*c,a:.6,b:.6,c:x(2056240),fold:.25,curl:.5,nu:5,nv:4})}if(u>=0)for(let d=0;d<4;d++){let f=hn(r,.42*c*r.range(.8,1.05),.1,d*1.9+1,.03,6);l.tube(null,f,.004,.003,x(9062970),x(11033156),4);let g=f[6],v=re(se(g.x,g.y,g.z),pe(r()*6),fe(.75)),m=r.pick([x(14161966),x(15755914),x(16445680)]);l.petal(v,{L:.1*be(.4,1,u),W:.095*be(.4,1,u),a:.62,b:.55,cup:.25,curl:.3,cols:[at(m,.85),m,nt(m,En,.2)],nv:4}),l.blob(re(v,se(0,.03,-.012),fe(-.5)),.006,.032,x(15913546),x(16445600),5,4)}}}),t({id:"malva_rosa",name:"Malva-rosa",lvl:7,price:36,grow:115,gift:25,spots:["bed"],h:1.3,loves:[1],info:"Alt\xEDssima, encostada no muro das av\xF3s.",build:(l,r,c,u)=>{let d=r.pick([[15755930,16498900],[14166078,15753338],[16244874,16774864],[6957642,10111594]]).map(x);Sn(l,r,{stems:[3,3],H:1.25,lean:.06,stemR:.009,florets:14,from:.3,type:"flower",fs:.055,off:.02,whorl:2.1,taper:.4,cols:d,bud:x(9091194),eye:x(16244874),leaf:{n:8,L:.13,W:.12,a:.8,b:.4,c:x(4885060),tilt:1.2}},c,u)}}),t({id:"fucsia",name:"Brinco-de-princesa",lvl:6,price:32,grow:100,gift:22,spots:["hang","pot"],h:.3,loves:[0,2],info:"Bailarinas penduradas, rosa e roxo.",build:(l,r,c,u)=>Xn(l,r,{stems:13,L:.46,up:.4,out:.7,drop:1.4,stemC:x(9062986),leaf:{n:9,L:.04,W:.02,c:x(4164164)},flower:{per:3,make:(d,f,g,v)=>{let m=new Pe().setFromMatrixPosition(f),p=be(.5,1,v),y=re(se(m.x,m.y-.01,m.z),fe(Math.PI),pe(g()*6));for(let _=0;_<4;_++)d.petal(re(y,pe(_*1.57),fe(1)),{L:.03*p,W:.011,a:.8,b:.8,curl:-.9,cols:[x(15214698),x(15749258),x(16222896)],nu:3,nv:1});d.lathe(re(y,se(0,.004,0)),[[.004,0],[.011*p,.012],[.013*p,.03*p]],x(6957744),x(9063120),6,null,.1,4)}}},c,u)}),t({id:"crisantemo",name:"Cris\xE2ntemo",lvl:4,price:24,grow:90,gift:16,h:.5,loves:[2],season:2,info:"S\xF3 no outono: pompons dourados e cor de vinho.",build:(l,r,c,u)=>{let d=[[15905306,16506986],[12075050,15769674],[16446694,16777215],[10107498,14715568]];gt(l,r,{R:.24,H:.4,branches:10,heads:9,stalk:.08,leaf:{n:9,L:.07,W:.04,c:x(4160064),ruffle:.3,rf:4,nv:3},head:f=>{let g=f.pick(d);return e.dahlia(x(g[0]),x(g[1]))},headK:1,headUp:.5},c,u)}}),t({id:"estrelicia",name:"Estrel\xEDcia",lvl:9,price:48,grow:150,gift:34,spots:["bed","pot","green"],h:.95,loves:[1],info:"Ave-do-para\xEDso: uma flor que parece p\xE1ssaro.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(5+4*c);d++){let f=d*2.4+r()*.3,g=.6*c*r.range(.75,1.1),v=r.range(.15,.4),m=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*v*.2,g*.6,Math.sin(f)*g*v*.2),new Pe(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.008,.005,x(4885072),x(4885072),5),bt(l,re(se(m[5].x,m[5].y,m[5].z),pe(-f+Math.PI/2),fe(.35+r()*.3)),r,{L:.34*c,W:.13*c,a:.75,b:.5,c:x(3832408),fold:.3,curl:.4,nu:5,nv:3})}if(u>=0)for(let d=0;d<3;d++){let f=d*2.1+.6,g=hn(r,.85*c*r.range(.85,1.05),.14,f,.02,6);l.tube(null,g,.007,.006,x(5933656),x(6982248),5);let v=g[6],m=re(se(v.x,v.y,v.z),pe(-f+Math.PI/2)),p=be(.4,1,u);l.petal(re(m,fe(1.45)),{L:.14*p,W:.035,a:.6,b:.8,cup:1.2,cols:[x(6978152),x(9071224),x(12081770)],nu:4,nv:2});for(let y=0;y<4;y++)l.petal(re(m,se(0,.005,.02+y*.022),fe(.25+y*.2)),{L:.1*p,W:.026,a:.7,b:.9,cup:.6,cols:[x(15896602),x(16230430),x(16500794)],nu:3,nv:2});l.petal(re(m,se(0,.005,.045),fe(.7)),{L:.075*p,W:.014,a:.7,b:.9,cols:[x(3816136),x(4868832),x(6974192)],nu:3,nv:1})}}}),t({id:"heliconia",name:"Helic\xF4nia",lvl:10,price:54,grow:160,gift:38,spots:["bed","green"],h:1.2,loves:[1],info:"Bico-de-papagaio das matas tropicais.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(4+3*c);d++){let f=d*2.4+r()*.3,g=.85*c*r.range(.75,1.1),v=r.range(.1,.3),m=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*v*.2,g*.6,Math.sin(f)*g*v*.2),new Pe(Math.cos(f)*g*v,g,Math.sin(f)*g*v),5);l.tube(null,m,.01,.006,x(4885060),x(4885060),5),bt(l,re(se(m[5].x,m[5].y,m[5].z),pe(-f+Math.PI/2),fe(.5+r()*.4)),r,{L:.42*c,W:.14*c,a:.75,b:.5,c:x(3111484),fold:.3,curl:.7,nu:5,nv:3})}if(u>=0)for(let d=0;d<2;d++){let f=d*3+.8,g=At(new Pe(0,0,0),new Pe(Math.cos(f)*.05,.9*c,Math.sin(f)*.05),new Pe(Math.cos(f)*.3*c,.75*c,Math.sin(f)*.3*c),8);l.tube(null,g,.007,.005,x(5933636),x(13117498),5);let v=g[8],m=be(.4,1,u);for(let p=0;p<7;p++){let y=-p*.045*m,_=p%2?1:-1;l.petal(re(se(v.x,v.y+y,v.z),pe(-f+(_>0?0:Math.PI)),fe(1.25)),{L:.085*m,W:.034,a:.6,b:.8,cup:1.4,cols:[x(14163502),x(15612474),x(16238634)],nu:3,nv:2})}}}}),t({id:"espada",name:"Espada-de-s\xE3o-jorge",lvl:2,price:14,grow:70,gift:9,spots:["pot","bed"],h:.5,thirst:.35,foliage:!0,loves:[1],info:"Protege a casa e quase n\xE3o pede \xE1gua.",build:(l,r,c)=>{for(let u=0;u<Math.round(6+6*c);u++){let d=u*2.4,f=.02+r()*.04;l.petal(re(se(Math.cos(d)*f,0,Math.sin(d)*f),pe(d+r()),fe(r.range(.02,.2))),{L:.5*c*r.range(.6,1.1),W:.05,a:.62,b:.32,base:.7,fold:.25,twist:r.range(-.6,.6),nu:6,nv:2,vein:.5,cols:[x(3828288),x(4880976),x(14207050)]})}}}),t({id:"jiboia",name:"Jiboia",lvl:2,price:13,grow:65,gift:9,spots:["hang","pot","window"],h:.3,foliage:!0,loves:[1],info:"Cora\xE7\xF5es verdes que escorrem do vaso.",build:(l,r,c)=>Xn(l,r,{stems:11,L:.7,up:.25,out:.55,drop:1.7,upFall:.3,stemC:x(6982212),leaf:{n:11,L:.075,W:.06,c:x(4889160),tip:x(15261834),tipMix:.5,a:.62,b:.5,fold:.2,curl:.3}},c,-1)}),t({id:"zamioculca",name:"Zamioculca",lvl:5,price:26,grow:90,gift:18,spots:["pot"],h:.55,thirst:.4,foliage:!0,loves:[1],info:"Brilhante como se fosse encerada.",build:(l,r,c)=>Xn(l,r,{stems:9,L:.55,up:1.5,out:.5,drop:.2,upFall:.3,stemC:x(3832384),stemR:.007,frond:{pairs:9,L:.085,wr:.48,c:x(2058800)}},c,-1)}),t({id:"areca",name:"Palmeira-areca",lvl:8,price:42,grow:130,gift:30,spots:["pot","bed"],h:1.2,foliage:!0,loves:[1],info:"Leques que fazem sombra de praia.",build:(l,r,c)=>{for(let u=0;u<5;u++)l.tube(null,hn(r,.5*c,.1,u*1.3,.03,4),.012,.009,x(12099658),x(9087050),5);Xn(l,r,{stems:12,L:1.05,up:1.1,out:.75,drop:.5,upFall:.4,stemC:x(9087050),stemR:.006,frond:{pairs:18,L:.2,wr:.1,c:x(4889156)}},c,-1)}}),i({id:"dioneia",name:"Dioneia",lvl:5,price:34,grow:90,gift:24,spots:["green"],h:.16,info:"A planta carn\xEDvora mais simp\xE1tica do mundo.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+6*c);d++){let f=d*2.4,g=.1*c*r.range(.7,1.15),v=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*.5,g*.5,Math.sin(f)*g*.5),new Pe(Math.cos(f)*g,g*.55,Math.sin(f)*g),4);l.tube(null,v,.004,.003,x(6989898),x(9091162),4);let m=v[4],p=.35+r()*.5;for(let y of[-1,1])l.petal(re(se(m.x,m.y,m.z),pe(-f+Math.PI/2),mt(y*p),fe(.2)),{L:.04*c,W:.034*c,a:1,b:.45,cup:.9*y,cols:[x(9091162),x(12109914),x(14172234)],nu:3,nv:3})}}}),i({id:"bonsai",name:"Bonsai",lvl:9,price:60,grow:170,gift:42,spots:["green","pot"],h:.45,foliage:!0,thirst:.6,info:"Uma \xE1rvore inteira que cabe no colo.",build:(l,r,c)=>os(l,r,{H:.16,R:.2,trunkR:.028,limbs:5,bark:x(5916214),leaves:260,leafSize:.05,leafCols:[x(3111482),x(4164164),x(2452016)]},c,-1)}),i({id:"orquidea_azul",name:"Orqu\xEDdea-azul",lvl:12,price:80,grow:200,gift:58,spots:["green"],h:.6,info:"S\xF3 a estufa consegue criar uma dessas.",build:(l,r,c,u)=>{if(Rn(l,r,{n:6,L:.2*c,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:x(3111486),nu:5,base:.6,r:.01}),!(u<0))for(let d=0;d<2;d++){let f=d*2.6+r(),g=.55*c,v=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*.1,g*.95,Math.sin(f)*g*.1),new Pe(Math.cos(f)*g*.75,g*.7,Math.sin(f)*g*.75),10);l.tube(null,v,.004,.0025,x(5929540),x(6982218),4);for(let m=0;m<7;m++){let p=It(v,.5+m*.075).p,y=m%2?1:-1,_=new Pe(Math.cos(f+y*1.2)*.8,.25,Math.sin(f+y*1.2)*.8).normalize();Rt(l,_t(p.clone().add(_.clone().multiplyScalar(.02)),_),r,e.orchid(x(4877032),x(10138872),x(2763418)),He(u*1.5-m*.07,0,1),1.3)}}}}),i({id:"vitoria_regia",name:"Vit\xF3ria-r\xE9gia",lvl:12,price:70,grow:190,gift:50,spots:["pond"],h:.14,thirst:0,loves:[1],info:"A rainha das \xE1guas da Amaz\xF4nia.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d*2.2+r(),g=d?.42*c:0,v=.34*c*(d?.8:1),m=re(se(Math.cos(f)*g,.012+d*.002,Math.sin(f)*g),pe(r()*6)),p=l.n,y=20,_=x(4165448);l.vert(0,0,0,at(_,.85),m);for(let b=0;b<=y;b++){let L=b/y*Me;l.vert(Math.cos(L)*v,0,Math.sin(L)*v,b%2?_:nt(_,ot.light,.25),m)}for(let b=0;b<y;b++)l.idx.push(p,p+b+2,p+b+1);l.lathe(m,[[v,0],[v*1.02,.035*c]],x(4889168),x(11033194),y)}u>=0&&Rt(l,se(.3*c,.03,.25*c),r,e.waterlily(x(16773364),x(16228544)),u,1.7*c)}});let n=(l,r,c,u,d,f,g={})=>i({id:l,name:r,lvl:c,price:u,gift:Math.round(u*.58),grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,info:d,...g,build:(v,m,p,y)=>os(v,m,f,p,y)});n("macieira","Macieira",6,90,"Flores brancas e ma\xE7\xE3s coradas.",{H:1.05,R:1.05,trunkR:.075,limbs:7,bark:x(6244922),foliage:1,leaves:2600,leafSize:.15,leafCols:[x(3836476),x(4889156),x(3111476)],blossom:{n:300,size:.08,cols:[En,x(16572650)]},fruit:{n:18,r:.05,tall:.95,c:x(14166062)}},{loves:[2]}),n("pitangueira","Pitangueira",7,100,"Frutinhas vermelhas com gosto de inf\xE2ncia.",{H:.95,R:1,trunkR:.065,limbs:8,bark:x(9071184),foliage:1,leaves:2800,leafSize:.12,leafCols:[x(3836480),x(5937736),x(9067066)],blossom:{n:320,size:.06,cols:[En]},fruit:{n:34,r:.026,tall:.85,c:x(14690846)}},{loves:[0]}),n("ipe_rosa","Ip\xEA-rosa",8,115,"Uma nuvem cor-de-rosa no meio do inverno.",{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:x(6969930),foliage:.06,leaves:900,leafCols:[x(4885050),x(5937732)],blossom:{n:3300,size:.125,cols:[x(15760048),x(16228552),x(15227546),x(16566496)],buds:[x(14176394)]}},{petal:16228552,loves:[3]}),n("jabuticabeira","Jabuticabeira",9,125,"Bolinhas pretas doces grudadas no tronco.",{H:1,R:1.15,trunkR:.085,limbs:9,bark:x(11573892),foliage:1,leaves:3e3,leafSize:.11,leafCols:[x(3111480),x(2452016),x(4885056)],blossom:{n:300,size:.05,cols:[En,x(16775392)]},fruit:{n:46,r:.03,tall:1,c:x(2759220)}},{loves:[0]}),n("magnolia","Magn\xF3lia",10,135,"Ta\xE7as brancas e rosadas, grandes como m\xE3os.",{H:1.2,R:1.2,trunkR:.08,limbs:7,bark:x(8022618),foliage:.5,leaves:1800,leafSize:.16,leafCols:[x(3107380),x(3832380)],blossom:{n:900,size:.2,cols:[x(16774390),x(16503006),x(16232648)],buds:[x(15239856)]}},{petal:16572650,loves:[0]}),n("mangueira","Mangueira",11,150,"Sombra larga e mangas maduras.",{H:1.3,R:1.5,trunkR:.11,limbs:9,bark:x(5917244),foliage:1,leaves:3200,leafSize:.17,leafCols:[x(2452016),x(3111480),x(9067066)],blossom:{n:260,size:.07,cols:[x(16246944),x(16445632)]},fruit:{n:16,r:.06,tall:1.35,c:x(15902762)}},{loves:[1]}),n("flamboyant","Flamboyant",12,165,"A copa que pega fogo no ver\xE3o.",{H:1.3,R:1.7,trunkR:.1,limbs:9,bark:x(8022618),foliage:.45,leaves:1800,leafSize:.13,leafCols:[x(4889156),x(5941328)],blossom:{n:3e3,size:.13,cols:[x(15216670),x(15880222),x(16218142),x(14163486)],buds:[x(12068894)]}},{petal:15880222,loves:[1]});let s=(l,r,c,u,d,f,g={})=>i({id:l,name:r,lvl:c,price:u,gift:Math.round(u*.6),grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,info:d,...g,build:(v,m,p,y)=>Io(v,m,f,p,y)}),a=l=>new Pe(l.range(-.6,.6),l.range(0,1),l()>.5?1:-1).normalize();s("ipomeia","Ipomeia",5,60,"Bons-dias azuis que abrem cedinho.",{leaf:{n:70,L:.06,W:.055,c:x(4165444),a:.62,b:.5},flower:{n:54,make:(l,r,c,u)=>{let d=a(c),f=be(.4,1,u);l.lathe(_t(r.clone().add(d.clone().multiplyScalar(.06)),d),[[.004,0],[.008,.025],[.03*f,.045],[.05*f,.05]],null,null,12,(g,v)=>v.copy(x(16447231)).lerp(x(4877032),He(g*1.6,0,1)),.08,5)}}},{loves:[1]}),s("maracuja","Maracuj\xE1",7,85,"Flor de coroa lil\xE1s e fruta para suco.",{leaf:{n:70,L:.07,W:.06,c:x(3836476),a:.6,b:.5},flower:{n:40,make:(l,r,c,u)=>{let d=a(c),f=r.clone().add(d.clone().multiplyScalar(.07));if(u>.7&&c()<.35){l.blob(se(r.x+c.range(-.08,.08),r.y-.09,r.z+c.range(-.1,.1)),.04,.045,x(14196766),x(15910970),7,5);return}Rt(l,_t(f,d),c,{layers:[{n:10,L:.034,W:.014,a:.9,b:.7,tilt:1.4,tiltC:.2,cup:.3,cols:[En,x(16052479),En],nu:3,nv:2},{n:26,L:.026,W:.003,a:.8,b:.9,tilt:1.3,tiltC:.2,y:.003,cols:[x(4860554),x(8018632),x(15261951)],nu:2,nv:1}],center:{type:"dome",r:.007,h:.012,y:.006,cols:[x(9089098),x(12109914)],seg:6}},u,1.3)}}},{loves:[1]}),s("madressilva","Madressilva",9,100,"Perfume doce de fim de tarde.",{leaf:{n:80,L:.05,W:.026,c:x(4164168)},flower:{n:80,make:(l,r,c,u)=>{let d=a(c),f=_t(r.clone().add(d.clone().multiplyScalar(.05)),d),g=c()<.5?x(16773808):x(16228528),v=be(.4,1,u);for(let m=0;m<5;m++)l.petal(re(f,pe(m*1.25),fe(.55)),{L:.04*v,W:.007,a:.8,b:.9,curl:1.2,curlPow:2.5,cols:[x(16244874),g,En],nu:3,nv:1})}}},{loves:[0,1]}),s("clematis","Clematis",11,118,"Estrelas roxas do tamanho de um pires.",{leaf:{n:60,L:.06,W:.03,c:x(3836484)},flower:{n:42,make:(l,r,c,u)=>{let d=a(c),f=c.pick([[6963136,10123496],[14178984,16228560],[16052479,16777215]]);Rt(l,_t(r.clone().add(d.clone().multiplyScalar(.07)),d),c,{layers:[{n:6,L:.058,W:.03,a:1,b:.6,tilt:1.4,tiltC:.2,cup:.25,vein:.3,cols:[at(x(f[0]),.8),x(f[0]),x(f[1])],nu:4,nv:2}],center:{stamens:{n:12,len:.014,spread:.7,c:x(16052432),tip:x(16244874),tipR:.003}}},u,1.1)}}},{loves:[0,1]});let h=l=>i({spots:["veg"],veg:!0,...l});h({id:"rabanete",name:"Rabanete",lvl:1,price:8,grow:45,gift:6,h:.18,loves:[0,2],info:"O mais apressado da horta.",build:(l,r,c,u)=>{for(let d=0;d<4;d++){let f=d*1.6+r(),g=d?.07:0,v=Math.cos(f)*g,m=Math.sin(f)*g;for(let p=0;p<5;p++)bt(l,re(se(v,.01,m),pe(p*1.3+r()),fe(r.range(.3,.8))),r,{L:.13*c,W:.05,a:1.2,b:.6,c:x(4889156),ruffle:.2,rf:3,nv:3});u>0&&l.blob(se(v,.012*c,m),.022*c*be(.5,1,u),.022*c,x(16445680),x(14690906),7,5)}}}),h({id:"cebolinha",name:"Cebolinha",lvl:1,price:8,grow:50,gift:6,spots:["veg","pot","window"],h:.3,loves:[0,2],info:"Um punhadinho verde para qualquer prato.",build:(l,r,c)=>{for(let u=0;u<Math.round(14+14*c);u++){let d=r()*Me,f=r()*.07;l.tube(se(Math.cos(d)*f,0,Math.sin(d)*f),hn(r,.3*c*r.range(.6,1.1),.09,d,.08,4),.004,.002,x(13623472),x(4889160),4)}},foliage:!0}),h({id:"salsinha",name:"Salsinha",lvl:1,price:8,grow:50,gift:6,spots:["veg","pot","window"],h:.24,foliage:!0,loves:[0,2],info:"Cheirinho-verde, par da cebolinha.",build:(l,r,c)=>{for(let u=0;u<Math.round(10+10*c);u++){let d=u*2.4,f=.2*c*r.range(.6,1.1),g=At(new Pe(0,0,0),new Pe(Math.cos(d)*f*.2,f*.7,Math.sin(d)*f*.2),new Pe(Math.cos(d)*f*.5,f,Math.sin(d)*f*.5),4);l.tube(null,g,.002,.0015,x(6991952),x(6991952),3),Ks(l,re(se(g[4].x,g[4].y,g[4].z),pe(-d+Math.PI/2),fe(.9)),r,{n:5,L:.04,W:.03,c:x(4890692),spread:2.6,ruffle:.4,rf:4,nv:3})}}}),h({id:"alface",name:"Alface",lvl:2,price:10,grow:55,gift:7,h:.2,loves:[0,2,3],info:"Crespa, fresquinha, colhida na hora.",build:(l,r,c)=>Rt(l,se(0,.012,0),r,{layers:[{n:26,golden:!0,L:[.04,.15],W:[.05,.16],a:1.3,b:.4,tilt:[.12,1.2],tiltC:[.12,1.2],curl:[-.6,.15],curlC:[-.6,.15],cup:[1,.4],ruffle:.35,rf:4,r:[.001,.01],y:[.03,0],cols:[x(15134904),x(10145888),x(6993992)],cols2:[x(14216384),x(8044624),x(5810240)],nu:4,nv:4,closedScale:1,vein:.05}]},1,c),foliage:!0}),h({id:"couve",name:"Couve",lvl:2,price:10,grow:60,gift:7,h:.4,foliage:!0,loves:[2,3],info:"Folhonas para o refogado de domingo.",build:(l,r,c)=>{l.tube(null,[new Pe(0,0,0),new Pe(.005,.07*c,0),new Pe(0,.14*c,0)],.012,.01,x(9091192),x(9091192),5);for(let u=0;u<Math.round(7+6*c);u++)bt(l,re(se(0,.04+u*.01*c,0),pe(u*2.4),fe(r.range(.5,1.15))),r,{L:.3*c*r.range(.7,1.1),W:.16*c,a:1.1,b:.5,c:x(4160090),tip:x(9091216),ruffle:.25,rf:4,nu:5,nv:4,curl:.6,vein:.4})}}),h({id:"cenoura",name:"Cenoura",lvl:2,price:11,grow:60,gift:8,h:.3,loves:[2,3],info:"Um tesouro laranja escondido na terra.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d*2.1+r(),g=d?.085:0,v=Math.cos(f)*g,m=Math.sin(f)*g;for(let p=0;p<7;p++){let y=p*.9+r(),_=.24*c*r.range(.6,1.1),b=At(new Pe(v,0,m),new Pe(v+Math.cos(y)*_*.15,_*.7,m+Math.sin(y)*_*.15),new Pe(v+Math.cos(y)*_*.45,_,m+Math.sin(y)*_*.45),5);l.tube(null,b,.002,.001,x(5939272),x(5939272),3);for(let L=1;L<6;L++){let{p:R,d:I}=It(b,L/6);for(let B of[-1,1])bt(l,_t(R,new Pe(-I.z*B,.4,I.x*B).normalize()),r,{L:.035*c*(1-L/9),W:.012,c:x(4889152),nu:2,nv:1,fold:0})}}u>0&&l.lathe(se(v,-.01,m),[[.012,0],[.02*c*be(.5,1,u),.028],[.012,.04]],x(15892510),x(16226874),8)}}}),h({id:"hortela",name:"Hortel\xE3",lvl:2,price:10,grow:55,gift:7,spots:["veg","pot","window"],h:.26,loves:[0,1],info:"Refrescante: para o ch\xE1 e para o suco.",build:(l,r,c,u)=>{gt(l,r,{R:.16,H:.22,branches:11,heads:0,stemC:x(9071242),leaf:{n:10,L:.045,W:.03,c:x(4892752),a:.85,b:.6,ruffle:.25,rf:5,nv:3}},c,-1),u>.2&&Sn(l,r,{stems:[5,6],H:.28,lean:.4,florets:9,from:.78,type:"card",fs:.008,cols:[x(13150448),x(15259903)],stemC:x(6986330)},c,u)}}),h({id:"morango",name:"Morango",lvl:3,price:16,grow:70,gift:12,spots:["veg","pot","hang","window"],h:.2,loves:[0,3],info:"Vermelhinho, doce, dif\xEDcil n\xE3o beliscar.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(8+6*c);d++){let f=d*2.4,g=.14*c*r.range(.6,1.1),v=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*.3,g*.8,Math.sin(f)*g*.3),new Pe(Math.cos(f)*g,g*.8,Math.sin(f)*g),4);l.tube(null,v,.002,.0015,x(8040544),x(8040544),3),Ks(l,re(se(v[4].x,v[4].y,v[4].z),pe(-f+Math.PI/2),fe(1.1)),r,{n:3,L:.05,W:.042,c:x(4165440),spread:2.2,a:1.1,b:.45,sideShrink:.1})}if(u>=0)for(let d=0;d<7;d++){let f=d*2.4+1,g=r.range(.07,.17)*c,v=Math.cos(f)*g,m=Math.sin(f)*g;if(u<.5||d%3===0)Rt(l,re(se(v,.06*c,m),pe(f)),r,e.small5(En,En,x(16244874)),He(u*2,0,1),1);else{let p=re(se(v,.03*c,m),fe(Math.PI));l.lathe(p,[[.004,-.004],[.017,.004],[.014,.02],[.002,.032]],x(15212586),x(14162474),7);for(let y=0;y<5;y++)l.petal(re(se(v,.034*c,m),pe(y*1.25),fe(1.3)),{L:.012,W:.006,cols:[x(4889152),x(4889152),x(6991952)],nu:2,nv:1})}}}}),h({id:"tomate",name:"Tomate",lvl:3,price:18,grow:80,gift:13,spots:["veg","pot"],h:.7,loves:[1],info:"Vai do verde ao vermelho, um cacho de cada vez.",build:(l,r,c,u)=>{l.tube(null,[new Pe(.02,0,0),new Pe(.02,.4*c,0),new Pe(.02,.8*c,0)],.008,.008,x(11043930),x(12096618),5),gt(l,r,{R:.2,H:.62,branches:9,heads:0,splay:.5,fill:30,stemC:x(5937736),leaf:{n:9,L:.075,W:.04,c:x(3836476),ruffle:.3,rf:4,nv:3}},c,-1),u>=0&&Ka(l,r,Math.round(11*c),.2*c,.55*c,{r:.03,tall:.9,c:x(14690334),green:x(9091146),ripe:u,y:.08})}}),h({id:"beterraba",name:"Beterraba",lvl:4,price:18,grow:80,gift:13,h:.3,loves:[2,3],info:"Folhas de veias roxas, raiz doce.",build:(l,r,c,u)=>{for(let d=0;d<2;d++){let f=d?.09:-.03,g=d?.05:-.02;for(let v=0;v<6;v++){let m=v*1.1+r(),p=re(se(f,.01,g),pe(m),fe(r.range(.25,.75)));l.tube(p,[new Pe(0,0,0),new Pe(0,.07*c,0)],.003,.003,x(12068954),x(12068954),3),bt(l,re(p,se(0,.06*c,0)),r,{L:.18*c,W:.075,a:.9,b:.6,c:x(4160068),tip:x(9058906),tipMix:.2,ruffle:.2,rf:3,nv:3,vein:.5})}u>0&&l.blob(se(f,.01,g),.035*c*be(.5,1,u),.03*c,x(5903414),x(9051722),7,5)}}}),h({id:"milho",name:"Milho",lvl:4,price:20,grow:90,gift:14,h:1.3,fixedRot:!0,loves:[1],info:"Para a pamonha e a pipoca da festa junina.",build:(l,r,c,u)=>{for(let d=0;d<2;d++){let f=d?.1:-.08,g=1.25*c*r.range(.9,1.05),v=hn(r,g,.03,d*3,.01,8);for(let m of v)m.x+=f;l.tube(null,v,.014,.008,x(6989898),x(9091162),6);for(let m=0;m<Math.round(8*c);m++){let{p}=It(v,.12+m*.1);bt(l,re(se(p.x,p.y,p.z),pe(m*Math.PI+d+r()*.4),fe(.7)),r,{L:.42*c,W:.05,a:.7,b:.4,c:x(4889156),curl:1.3,curlPow:1.8,fold:.4,nu:6,nv:2})}if(u>=0){let m=v[8];for(let b=0;b<7;b++)l.tube(se(m.x,m.y,m.z),hn(r,.14*c,.07,b*.9,.05,3),.002,.001,x(14207098),x(15259786),3);let{p}=It(v,.5),y=re(se(p.x,p.y,p.z),pe(d*2.5+.8),fe(.5)),_=be(.4,1,u);l.blob(re(y,se(0,.08*_,.02)),.028*_,.085*_,x(9091146),u>.6?x(16242762):x(11061338),7,5);for(let b=0;b<3;b++)l.petal(re(y,se(0,0,.02),pe(b*2.1),fe(.1)),{L:.15*_,W:.04,a:.7,b:.5,cup:1.4,cols:[x(9091146),x(11061338),x(14211210)],nu:4,nv:2})}}}}),h({id:"ervilha",name:"Ervilha",lvl:4,price:18,grow:80,gift:13,h:.8,fixedRot:!0,loves:[0,3],info:"Sobe pelos gravetos e enche de vagens.",build:(l,r,c,u)=>{for(let d=0;d<3;d++){let f=d/3*Me;l.tube(null,[new Pe(Math.cos(f)*.16,0,Math.sin(f)*.16),new Pe(Math.cos(f)*.08,.42,Math.sin(f)*.08),new Pe(0,.85,0)],.006,.005,x(11043930),x(12096618),4);let g=Math.round(22*c),v=[];for(let m=0;m<=g;m++){let p=m/g*c,y=f+p*7;v.push(new Pe(Math.cos(f)*.16*(1-p)+Math.cos(y)*.025,p*.85,Math.sin(f)*.16*(1-p)+Math.sin(y)*.025))}l.tube(null,v,.003,.002,x(6989904),x(8042592),3);for(let m=2;m<g;m+=1){let p=v[m],y=new Pe(r.range(-1,1),r.range(0,.6),r.range(-1,1)).normalize();bt(l,_t(p,y),r,{L:.045,W:.03,c:x(5941322),a:.9,b:.5}),u>=0&&m%3===0&&(u<.5?Rt(l,_t(p.clone().add(y.clone().multiplyScalar(.03)),y),r,e.small5(En,En,x(15269840)),u*2,1):l.blob(re(se(p.x+y.x*.03,p.y-.03,p.z+y.z*.03),mt(r.range(-.3,.3))),.008,.034,x(6991946),x(9095258),5,4))}}}}),h({id:"pimentao",name:"Piment\xE3o",lvl:5,price:22,grow:90,gift:16,spots:["veg","pot"],h:.5,loves:[1],info:"Verde, amarelo ou vermelho, conforme a paci\xEAncia.",build:(l,r,c,u)=>{gt(l,r,{R:.2,H:.42,branches:9,heads:0,splay:.6,fill:26,leaf:{n:8,L:.08,W:.045,c:x(3113016)}},c,-1),u>=0&&Ka(l,r,Math.round(6*c),.19*c,.36*c,{r:.034,tall:1.5,c:r.pick([x(14690334),x(16238622),x(15888410)]),green:x(4889146),ripe:u,y:.04})}}),h({id:"pimenta",name:"Pimenta",lvl:5,price:22,grow:90,gift:16,spots:["veg","pot","window"],h:.4,loves:[1],info:"Pequena no tamanho, brava no tempero.",build:(l,r,c,u)=>{gt(l,r,{R:.17,H:.34,branches:10,heads:0,splay:.7,fill:22,leaf:{n:9,L:.05,W:.022,c:x(3113016)}},c,-1),u>=0&&Ka(l,r,Math.round(18*c),.17*c,.34*c,{r:.009,tall:4,c:x(14687774),green:x(5941306),ripe:u,y:.06})}}),h({id:"repolho",name:"Repolho",lvl:5,price:22,grow:95,gift:16,h:.26,foliage:!0,loves:[2,3],info:"Uma bola de folhas bem apertadinhas.",build:(l,r,c)=>{l.blob(se(0,.085*c,0),.085*c,.08*c,x(13164712),x(11063432),10,7),Rt(l,se(0,.01,0),r,{layers:[{n:12,golden:!0,L:[.13,.2],W:[.14,.2],a:1.2,b:.4,tilt:[.3,1.2],tiltC:[.3,1.2],curl:[-.9,-.1],curlC:[-.9,-.1],cup:[1.2,.5],ruffle:.15,rf:3,r:[.01,.02],y:[.01,0],cols:[x(13164712),x(8042616),x(5937776)],nu:5,nv:4,closedScale:1,vein:.3}]},1,c)}}),h({id:"abobrinha",name:"Abobrinha",lvl:5,price:22,grow:90,gift:16,h:.4,loves:[1],info:"Flor amarela que vira legume.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+4*c);d++){let f=d*2.4,g=.3*c*r.range(.7,1.1),v=At(new Pe(0,0,0),new Pe(Math.cos(f)*g*.4,g*.8,Math.sin(f)*g*.4),new Pe(Math.cos(f)*g,g*.75,Math.sin(f)*g),5);l.tube(null,v,.006,.004,x(8040544),x(8040544),5),bt(l,re(se(v[5].x,v[5].y,v[5].z),pe(-f+Math.PI/2),fe(1.15)),r,{L:.17*c,W:.17*c,a:.85,b:.35,c:x(4164160),tip:x(12112032),tipMix:.2,ruffle:.2,rf:5,nu:4,nv:4})}if(u>=0)for(let d=0;d<3;d++){let f=d*2.1+.5;u<.6?Rt(l,re(se(Math.cos(f)*.08,.05,Math.sin(f)*.08),pe(f),fe(.5)),r,ja(x(15905306),x(16373834),null,{L:.05,W:.04}),u*1.6,1):l.blob(re(se(Math.cos(f)*.12*c,.03,Math.sin(f)*.12*c),pe(-f),mt(Math.PI/2)),.026*c,.1*c,x(4164154),x(5939272),7,5,x(9091168))}}});let o=(l,r,c,u,d)=>{for(let f=0;f<Math.round(4+3*c);f++){let g=f*2.4+r()*.4,v=.42*c*r.range(.7,1.1),m=[];for(let p=0;p<=8;p++){let y=p/8;m.push(new Pe(Math.cos(g+Math.sin(y*4+f)*.4)*v*y,.015+Math.sin(y*6)*.012,Math.sin(g+Math.sin(y*4+f)*.4)*v*y))}l.tube(null,m,.006,.003,x(6987856),x(8040544),4);for(let p=2;p<=8;p+=2){let y=m[p],_=r()*6;l.tube(se(y.x,y.y,y.z),[new Pe(0,0,0),new Pe(0,.07*c,0)],.003,.003,x(8040544),x(8040544),3),bt(l,re(se(y.x,y.y+.07*c,y.z),pe(_),fe(1.25)),r,{L:.13*c,W:.14*c,a:.85,b:.35,c:d.leaf,ruffle:.2,rf:5,nu:4,nv:4})}}if(u>=0)for(let f=0;f<d.n;f++){let g=f*2.6+.9,v=(.12+f*.1)*c,m=be(.3,1,u);d.fruit(re(se(Math.cos(g)*v,d.r*m*.8,Math.sin(g)*v),pe(r()*6)),m)}};h({id:"abobora",name:"Ab\xF3bora",lvl:6,price:28,grow:110,gift:20,h:.3,loves:[2],season:2,info:"S\xF3 no outono: rama comprida e moranga gorda.",build:(l,r,c,u)=>o(l,r,c,u,{leaf:x(4164160),n:2,r:.1,fruit:(d,f)=>{let g=[];for(let v=0;v<=8;v++){let m=v/8;g.push([Math.sin(m*Math.PI)**.6*.105*f,(m-.5)*.15*f])}l.lathe(d,g,x(14184474),x(16226858),24,null,0,8),l.tube(re(d,se(0,.075*f,0)),[new Pe(0,0,0),new Pe(.01,.03,0)],.008,.006,x(6982202),x(8034890),5)}})}),h({id:"brocolis",name:"Br\xF3colis",lvl:6,price:26,grow:100,gift:19,h:.36,loves:[2,3],info:"Uma arvorezinha que vai para a panela.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(6+4*c);d++)bt(l,re(se(0,.02,0),pe(d*2.4),fe(r.range(.6,1.2))),r,{L:.26*c,W:.1*c,a:1,b:.5,c:x(4885104),tip:x(10141864),ruffle:.25,rf:4,nu:5,nv:3,curl:.5,vein:.4});if(l.tube(null,[new Pe(0,0,0),new Pe(0,.12*c,0)],.016,.014,x(9091192),x(9091192),6),u>=0)for(let d=0;d<22;d++){let f=1-(d+.5)/22*1.1,g=Math.sqrt(Math.max(0,1-f*f)),v=d*2.4,m=.07*c*be(.4,1,u);l.blob(se(Math.cos(v)*g*m,.15*c+f*m*.6,Math.sin(v)*g*m),.026*c*be(.5,1,u),.022*c,x(3107380),x(4885060),6,4)}}}),h({id:"berinjela",name:"Berinjela",lvl:7,price:30,grow:110,gift:22,spots:["veg","pot"],h:.55,loves:[1],info:"Roxo brilhante entre flores lilases.",build:(l,r,c,u)=>{gt(l,r,{R:.22,H:.46,branches:9,heads:u>=0&&u<.6?6:0,splay:.65,fill:24,stemC:x(6969978),leaf:{n:8,L:.1,W:.065,c:x(4885080),tip:x(9075360),tipMix:.15},head:ja(x(10124e3),x(13152500),null,{L:.022,W:.02})},c,u),u>=.6&&Ka(l,r,Math.round(5*c),.2*c,.34*c,{r:.034,tall:2.3,c:x(3807826),green:x(6965898),ripe:u,y:.03})}}),h({id:"couve_flor",name:"Couve-flor",lvl:7,price:30,grow:110,gift:22,h:.34,loves:[3],season:3,info:"S\xF3 no inverno: uma nuvem branca na horta.",build:(l,r,c,u)=>{for(let d=0;d<Math.round(7+4*c);d++)bt(l,re(se(0,.02,0),pe(d*2.4),fe(r.range(.45,1.05))),r,{L:.24*c,W:.11*c,a:1,b:.5,c:x(4885088),tip:x(11061408),ruffle:.25,rf:4,nu:5,nv:3,curl:.3,cup:.5,vein:.4});if(u>=0)for(let d=0;d<20;d++){let f=1-(d+.5)/20*1.05,g=Math.sqrt(Math.max(0,1-f*f)),v=d*2.4,m=.075*c*be(.4,1,u);l.blob(se(Math.cos(v)*g*m,.07*c+f*m*.55,Math.sin(v)*g*m),.028*c*be(.5,1,u),.024*c,x(15261896),x(16512746),6,4)}}}),h({id:"melancia",name:"Melancia",lvl:8,price:36,grow:125,gift:26,h:.32,loves:[1],season:1,info:"S\xF3 no ver\xE3o: listrada por fora, festa por dentro.",build:(l,r,c,u)=>o(l,r,c,u,{leaf:x(4886608),n:2,r:.11,fruit:(d,f)=>{let g=l.n,v=12,m=7,p=new de;for(let y=0;y<=m;y++){let _=y/m*Math.PI,b=-Math.cos(_),L=Math.sin(_);for(let R=0;R<=v;R++){let I=R/v*Me;p.set(R%2?2779700:6991946),l.vert(Math.cos(I)*L*.105*f,b*.1*f,Math.sin(I)*L*.135*f,p,d)}}l.quadGrid(g,m,v,!1)}})})}function L0(i,e){let t=o=>i({spots:["bed","pot"],rare:!0,...o}),n={...e.sunflower,layers:e.sunflower.layers.map(o=>({...o,cols:[x(8002068),x(12070942),x(15235114)]}))},s=(o,l,r)=>({sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[o,l,r],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[o,l,r],nu:4,nv:2}],center:{...Wc,r:.016,h:.009}}),a=(o,l,r)=>(c,u,d,f)=>gt(c,u,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:x(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:x(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:e.rose(x(o),x(l),x(r)),headK:1.25,headUp:.5},d,f);t({id:"margarida_rosa",name:"Margarida-rosa",hybrid:["margarida","amor_perfeito"],lvl:2,price:20,grow:55,gift:14,h:.4,spots:["bed","pot","window"],loves:[0],info:"A margarida ficou corada de tanto olhar o amor-perfeito.",build:(o,l,r,c)=>jt(o,l,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:s(x(15227546),x(16222904),x(16564442))},r,c)}),t({id:"tulipa_rajada",name:"Tulipa rajada",hybrid:["tulipa_vermelha","tulipa_amarela"],lvl:2,price:26,grow:70,gift:18,h:.45,spots:["bed","pot","window"],loves:[0],info:"Chamas vermelhas lambendo o amarelo.",build:(o,l,r,c)=>jt(o,l,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:x(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:x(6265450),r:.02},head:e.tulip(x(16242762),x(15216670),x(16506954))},r,c)}),t({id:"lavanda_branca",name:"Lavanda-branca",hybrid:["lavanda","margarida"],lvl:3,price:28,grow:80,gift:20,h:.55,loves:[1],info:"O perfume \xE9 o mesmo, a cor \xE9 de nuvem.",build:(o,l,r,c)=>{Rn(o,l,{n:Math.round(40*r),L:.16*r,W:.012,c:x(9086348),tip:x(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),Sn(o,l,{stems:[16,20],H:.5,lean:.4,stemC:x(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[x(16052479),En],bud:x(12108984)},r,c)}}),t({id:"amor_perfeito_azul",name:"Amor-perfeito-azul",hybrid:["amor_perfeito","miosotis"],lvl:3,price:28,grow:65,gift:20,h:.2,spots:["bed","pot","window","hang"],loves:[3,0],info:"Carinhas cor de c\xE9u de inverno.",build:(o,l,r,c)=>gt(o,l,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:x(4164159),a:.9,b:.6,tilt:1.1},head:e.pansy(x(3828448),x(10141944),x(1319002)),headK:1.15},r,c)}),t({id:"cosmos_chocolate",name:"Cosmos-chocolate",hybrid:["cosmos","papoula"],lvl:5,price:40,grow:75,gift:28,h:.65,loves:[1,2],info:"Vinho escuro, com cheirinho de cacau.",build:(o,l,r,c)=>jt(o,l,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:x(5937736),fold:0},head:e.cosmos(x(5903392),x(9054772)),headTilt:.35},r,c)}),t({id:"girassol_rubro",name:"Girassol-rubro",hybrid:["girassol","papoula"],lvl:5,price:44,grow:110,gift:31,spots:["bed"],h:1.6,fixedRot:!0,loves:[1],info:"Um p\xF4r do sol inteiro numa flor.",build:(o,l,r,c)=>jt(o,l,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:x(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:x(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:n,headTilt:1.15},r,c)}),t({id:"rosa_mesclada",name:"Rosa mesclada",hybrid:["rosa_vermelha","rosa_branca"],lvl:7,price:60,grow:130,gift:42,h:.75,loves:[0,1],info:"Branca por dentro, com as pontas beijadas de vermelho.",build:a(16446186,16643824,14692426)}),t({id:"rosa_azul",name:"Rosa azul",hybrid:["rosa_branca","lavanda"],lvl:7,price:70,grow:130,gift:50,h:.75,loves:[0,1],info:"A flor que diziam ser imposs\xEDvel.",build:a(4872904,8030952,12109048)}),t({id:"lirio_tigre",name:"L\xEDrio-tigre",hybrid:["lirio","zinia"],lvl:6,price:54,grow:120,gift:38,h:.8,loves:[1],info:"Laranja vivo, recurvado como uma coroa.",build:(o,l,r,c)=>jt(o,l,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:x(4164164),t0:.08,t1:.82,taper:.5},head:e.lily(x(15888410),x(16226874),x(9054732)),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},r,c)}),t({id:"hortensia_lilas",name:"Hort\xEAnsia lil\xE1s",hybrid:["hortensia_azul","hortensia_rosa"],lvl:8,price:66,grow:150,gift:46,h:.7,loves:[1],info:"Nem azul nem rosa: as duas se abra\xE7aram.",build:(o,l,r,c)=>gt(o,l,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:x(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:[11040992,12886256,10119896,14205176].map(x),squash:.75,cover:.35}},headUp:.6},r,c)}),t({id:"dalia_negra",name:"D\xE1lia-negra",hybrid:["dalia","rosa_vermelha"],lvl:7,price:64,grow:130,gift:45,h:.7,loves:[1,2],info:"Bord\xF4 t\xE3o fundo que parece veludo.",build:(o,l,r,c)=>gt(o,l,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:x(3103290),tilt:1.1},head:e.dahlia(x(3803672),x(8002094)),headK:1.5,headUp:.35},r,c)}),t({id:"peonia_coral",name:"Pe\xF4nia coral",hybrid:["peonia","rosa_pessego"],lvl:10,price:80,grow:160,gift:56,h:.7,loves:[0],info:"Abre coral e desbota para creme, dia ap\xF3s dia.",build:(o,l,r,c)=>gt(o,l,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:x(3108410),tilt:1.1},head:e.peony(x(15888474),x(16498848)),headK:1.45,headUp:.45},r,c)});let h=o=>i({spots:["veg"],veg:!0,rare:!0,...o});h({id:"cenoura_roxa",name:"Cenoura roxa",hybrid:["cenoura","beterraba"],lvl:4,price:24,grow:60,gift:17,h:.3,loves:[2,3],info:"Como eram as cenouras de antigamente.",build:(o,l,r,c)=>{for(let u=0;u<3;u++){let d=u*2.1+l(),f=u?.085:0,g=Math.cos(d)*f,v=Math.sin(d)*f;for(let m=0;m<7;m++)bt(o,re(se(g,.01,v),pe(m*.9+l()),fe(l.range(.25,.8))),l,{L:.22*r,W:.03,c:x(4885072),tip:x(9067146),tipMix:.2,ruffle:.4,rf:6,nv:3});c>0&&o.lathe(se(g,-.01,v),[[.012,0],[.02*r*be(.5,1,c),.028],[.012,.04]],x(5906042),x(8010394),8)}}}),h({id:"tomate_amarelo",name:"Tomate-amarelo",hybrid:["tomate","pimentao"],lvl:5,price:34,grow:80,gift:24,spots:["veg","pot"],h:.7,loves:[1],info:"Docinho, parece um cacho de s\xF3is.",build:(o,l,r,c)=>{o.tube(null,[new Pe(.02,0,0),new Pe(.02,.4*r,0),new Pe(.02,.8*r,0)],.008,.008,x(11043930),x(12096618),5),gt(o,l,{R:.2,H:.62,branches:9,heads:0,splay:.5,fill:30,stemC:x(5937736),leaf:{n:9,L:.075,W:.04,c:x(3836476),ruffle:.3,rf:4,nv:3}},r,-1),c>=0&&Ka(o,l,Math.round(14*r),.2*r,.55*r,{r:.024,tall:1.2,c:x(16238622),green:x(9091146),ripe:c,y:.08})}}),h({id:"morango_branco",name:"Morango-branco",hybrid:["morango","alface"],lvl:4,price:30,grow:70,gift:21,spots:["veg","pot","hang","window"],h:.2,loves:[0,3],info:"Branquinho com sementes vermelhas e gosto de abacaxi.",build:(o,l,r,c)=>{for(let u=0;u<Math.round(8+6*r);u++){let d=u*2.4,f=.14*r*l.range(.6,1.1),g=At(new Pe(0,0,0),new Pe(Math.cos(d)*f*.3,f*.8,Math.sin(d)*f*.3),new Pe(Math.cos(d)*f,f*.8,Math.sin(d)*f),4);o.tube(null,g,.002,.0015,x(8040544),x(8040544),3),Ks(o,re(se(g[4].x,g[4].y,g[4].z),pe(-d+Math.PI/2),fe(1.1)),l,{n:3,L:.05,W:.042,c:x(4889160),spread:2.2,a:1.1,b:.45,sideShrink:.1})}if(c>=0)for(let u=0;u<7;u++){let d=u*2.4+1,f=l.range(.07,.17)*r,g=Math.cos(d)*f,v=Math.sin(d)*f;o.lathe(re(se(g,.03*r,v),fe(Math.PI)),[[.004,-.004],[.017,.004],[.014,.02],[.002,.032]],x(16774380),x(16507096),7)}}})}var Xc={margarida:[0],tagetes:[1,2],tulipa_vermelha:[0],tulipa_amarela:[0],tulipa_rosa:[0],tulipa_roxa:[0],amor_perfeito:[3,0],lavanda:[1],petunia:[1],suculenta:[1],geranio:[0,1],samambaia:[1],cosmos:[1,2],girassol:[1],narciso:[0,3],manjericao:[1],cacto:[1],hera:[3],papoula:[0],zinia:[1],rosa_vermelha:[0,1],rosa_rosa:[0,1],rosa_branca:[0,1],rosa_amarela:[0,1],rosa_pessego:[0,1],lirio:[1],costela:[1],hortensia_azul:[1],hortensia_rosa:[1],dalia:[1,2],bromelia:[1],peonia:[0],delfinio:[1],dedaleira:[0],hibisco:[1],copo_de_leite:[0,3],azaleia:[3,0],orquidea:[3],camelia:[3],ninfeia:[1],lotus:[1],cerejeira:[0],limoeiro:[3],ipe_amarelo:[3],laranjeira:[3],jacaranda:[0],rosa_trepadeira:[0,1],glicinia:[0],primavera:[1],jasmim:[1],alecrim:[0,1]};var qt=V,Xt=x(16777215),Qa={type:"dome",r:.012,h:.007,cols:[x(14258191),x(16107048),x(16374869)]},Ct={daisy:{sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[x(15855325),Xt,Xt],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[x(15657691),Xt,Xt],nu:4,nv:2}],center:{...Qa,r:.016,h:.009}},tulip:(i,e,t)=>({layers:[{n:3,L:.075,W:.058,a:1.05,b:.6,tilt:.42,tiltC:.3,curl:-.6,curlC:-.78,cup:.95,r:.006,cols:[i,e,t],closedScale:.7,vein:.2},{n:3,L:.072,W:.056,a:1.05,b:.6,tilt:.34,tiltC:.25,curl:-.58,curlC:-.75,cup:.95,r:.004,cols:[i,e,t],closedScale:.7,vein:.2}]}),sunflower:{sepals:{n:13,L:.05,W:.03,tilt:1.5},layers:[{n:21,L:.115,W:.034,a:.8,b:.6,tilt:1.45,tiltC:.4,curl:.25,cup:.6,r:.07,cols:[x(15243788),x(16302620),x(16767294)],nu:4,nv:2,tj:.1},{n:21,L:.1,W:.032,a:.8,b:.6,tilt:1.3,tiltC:.3,curl:.2,cup:.6,r:.066,cols:[x(15243788),x(16103701),x(16766266)],nu:4,nv:2,tj:.1}],center:{type:"dome",r:.078,h:.022,y:.004,cols:[x(8014356),x(3809800),x(7035422)],seg:16}},rose:(i,e,t)=>({sepals:{n:5,L:.03,W:.011},layers:[{n:24,golden:!0,L:[.024,.055],W:[.024,.062],a:1.35,b:.48,tilt:[.04,1.2],tiltC:[.02,.22],curl:[-.6,.85],curlC:[-.7,-.5],cup:[1.4,.45],cupC:1.2,r:[.001,.009],y:[.014,0],cols:[at(i,.8),i,nt(i,t,.5)],cols2:[at(e,.9),e,t],closedScale:.6,vein:.06}]}),peony:(i,e)=>({sepals:{n:5,L:.03,W:.02},layers:[{n:38,golden:!0,L:[.026,.07],W:[.026,.07],a:1.4,b:.42,tilt:[.08,1.3],tiltC:[.02,.2],curl:[-.7,.25],curlC:-.8,cup:[1.3,.6],ruffle:.22,rf:3,r:[.001,.01],y:[.02,0],cols:[i,nt(i,e,.4),e],cols2:[nt(i,e,.5),e,nt(e,Xt,.5)],closedScale:.55}]}),dahlia:(i,e)=>({sepals:{n:8,L:.02,W:.01},layers:[{n:58,golden:!0,L:[.018,.062],W:[.011,.024],a:.95,b:.85,tilt:[.06,1.55],tiltC:[.02,.3],curl:[-.5,.15],curlC:-.5,cup:[1.6,.9],r:[.001,.006],y:[.016,-.004],cols:[at(i,.85),i,e],cols2:[i,nt(i,e,.5),nt(e,Xt,.3)],nu:4,nv:2,closedScale:.5}]}),marigold:(i,e)=>({sepals:{n:6,L:.018,W:.012},layers:[{n:34,golden:!0,L:[.012,.032],W:[.014,.032],a:1.5,b:.4,tilt:[.05,1.35],tiltC:[.02,.2],curl:[-.4,.3],cup:[1,.3],ruffle:.4,rf:3,r:[.001,.006],y:[.012,0],cols:[at(i,.85),i,e],nu:4,nv:3,closedScale:.5}]}),zinnia:(i,e)=>({sepals:{n:8,L:.014,W:.01},layers:[{n:14,L:.042,W:.02,a:1,b:.5,tilt:1.45,tiltC:.2,curl:.15,cup:.4,cols:[at(i,.85),i,e],nu:4,nv:2},{n:12,L:.032,W:.018,a:1,b:.5,tilt:1.25,tiltC:.15,curl:.1,cup:.4,y:.003,cols:[at(i,.85),i,e],nu:4,nv:2},{n:9,L:.022,W:.014,a:1,b:.5,tilt:1,tiltC:.1,curl:.1,cup:.5,y:.006,cols:[i,i,e],nu:3,nv:2}],center:{...Qa,r:.009,h:.008,y:.008}}),cosmos:(i,e)=>({sepals:{n:8,L:.012,W:.005},layers:[{n:8,L:.048,W:.032,a:1.5,b:.5,tilt:1.35,tiltC:.2,curl:.1,cup:.35,notch:.12,ruffle:.08,rf:3,cols:[at(i,.8),i,e],vein:.2}],center:{...Qa,r:.009,h:.006}}),poppy:{layers:[{n:4,L:.06,W:.078,a:1.5,b:.42,tilt:1,tiltC:.15,curl:-.35,curlC:-.7,cup:.7,ruffle:.28,rf:2.5,cols:[x(1838354),x(14428696),x(15747622)],closedScale:.5},{n:2,L:.055,W:.07,a:1.5,b:.42,tilt:.8,tiltC:.1,curl:-.4,curlC:-.7,cup:.8,ruffle:.28,rf:2.5,cols:[x(1838354),x(14166042),x(15615012)],closedScale:.5}],center:{type:"dome",r:.01,h:.012,y:.006,cols:[x(5661498),x(7306568),x(4015398)],seg:8,stamens:{n:16,len:.016,spread:.9,c:x(2759714),tip:x(1708566),tipR:.0028}}},pansy:(i,e,t)=>({layers:[{n:2,L:.036,W:.046,a:1.5,b:.4,tilt:1.3,tiltC:.3,cup:.15,azList:[-.55,.55],azStep:0,jit:0,cols:[at(i,.7),i,e],vein:.25},{n:3,L:.036,W:.048,a:1.5,b:.4,tilt:1.42,tiltC:.3,cup:.15,azList:[-1.9,1.9,Math.PI],jit:0,cols:[t,nt(t,i,.75),e],vein:.25}],center:{...Qa,r:.005,h:.004}}),lily:(i,e,t)=>({layers:[{n:3,L:.095,W:.036,a:.9,b:.7,tilt:.78,tiltC:.12,curl:1.4,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75},{n:3,L:.09,W:.03,a:.9,b:.7,tilt:.85,tiltC:.1,curl:1.5,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75}],center:{stamens:{n:6,len:.065,spread:.45,c:x(13623456),tip:x(11883802),tipR:.005}}}),hibiscus:(i,e,t)=>({sepals:{n:5,L:.025,W:.012},layers:[{n:5,L:.075,W:.08,a:1.4,b:.42,tilt:1.2,tiltC:.12,curl:.35,curlC:-.5,cup:.3,ruffle:.18,rf:3,twist:.3,cols:[t,i,e],vein:.22,closedScale:.6}],center:{type:"column",L:.075,cols:[i,x(13637688)],dots:x(16241226)}}),daffodil:{layers:[{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.42,tiltC:.3,curl:.1,cup:.35,cols:[x(15980878),x(16508530),x(16774054)]},{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.5,tiltC:.3,curl:.1,cup:.35,cols:[x(15980878),x(16508530),x(16774054)]}],center:{type:"trumpet",L:.032,r0:.01,r1:.019,cols:[x(15905308),x(16091666)],ruffle:.12,rf:7}},azalea:(i,e)=>({layers:[{n:5,L:.03,W:.026,a:1.3,b:.5,tilt:1.05,tiltC:.15,curl:.3,cup:.4,ruffle:.15,cols:[at(i,.75),i,e],nu:3,nv:2}],center:{stamens:{n:5,len:.028,spread:.3,c:e,tip:x(8006218),tipR:.0025}}}),camellia:(i,e)=>({sepals:{n:5,L:.02,W:.014},layers:[{n:26,golden:!0,L:[.018,.048],W:[.02,.05],a:1.4,b:.45,tilt:[.08,1.35],tiltC:[.02,.2],curl:[-.5,.2],cup:[1.2,.35],r:[.001,.007],y:[.012,0],cols:[at(i,.9),i,e],nu:4,nv:3,closedScale:.55}],center:{...Qa,r:.005,h:.006,y:.012}}),waterlily:(i,e)=>({layers:[{n:26,golden:!0,L:[.03,.075],W:[.012,.03],a:.9,b:.75,tilt:[.25,1.3],tiltC:[.05,.3],curl:[-.3,-.2],cup:[1.2,.8],r:[.006,.012],y:[.01,0],cols:[nt(i,Xt,.3),i,e],cols2:[Xt,nt(i,Xt,.6),nt(e,Xt,.5)],nu:4,nv:2,closedScale:.6}],center:{type:"dome",r:.012,h:.008,y:.008,cols:[x(15247384),x(16240442),x(16374869)],stamens:{n:14,len:.02,spread:.6,c:x(15909424),tip:x(16242778),tipR:.003}}}),lotus:(i,e)=>({layers:[{n:18,golden:!0,L:[.06,.11],W:[.04,.065],a:1,b:.62,tilt:[.2,1.15],tiltC:[.04,.2],curl:[-.5,-.25],curlC:-.7,cup:[1.3,.9],r:[.012,.02],y:[.012,0],cols:[x(16774894),i,e],cols2:[Xt,nt(i,Xt,.4),e],closedScale:.7,vein:.2}],center:{type:"dome",r:.022,h:.016,y:.012,cols:[x(12108874),x(14275146),x(15326818)],stamens:{n:22,len:.028,spread:.85,c:x(15909424),tip:x(16244858),tipR:.003}}}),orchid:(i,e,t)=>({layers:[{n:3,L:.036,W:.02,a:.9,b:.6,tilt:1.4,tiltC:.3,cup:.2,jit:0,azList:[0,2.35,-2.35],azStep:0,cols:[nt(i,t,.2),i,e],nu:3,nv:2},{n:2,L:.04,W:.046,a:1.3,b:.42,tilt:1.45,tiltC:.3,cup:.15,jit:0,azList:[-1.2,1.2],azStep:0,cols:[nt(i,t,.25),i,e],nu:4,nv:3},{n:1,L:.022,W:.022,a:1.2,b:.5,tilt:1,tiltC:.3,cup:1.2,curl:-.6,jit:0,azList:[Math.PI],cols:[x(16241226),t,at(t,.85)],nu:3,nv:2}],center:{type:"dome",r:.004,h:.005,y:.004,cols:[x(16247200),Xt],seg:5}}),succulent:(i,e,t)=>({layers:[{n:34,golden:!0,L:[.014,.06],W:[.012,.036],a:1.25,b:.7,tilt:[.12,1.28],tiltC:[.12,1.28],curl:[-.5,-.2],curlC:[-.5,-.2],cup:[1,.7],r:[.001,.008],y:[.02,0],cols:[at(i,.8),i,nt(e,t,.6)],cols2:[at(i,.75),e,t],nu:4,nv:3,closedScale:1,vein:.05}]}),cactusFlower:(i,e)=>({layers:[{n:12,L:.04,W:.016,a:1,b:.7,tilt:1.15,tiltC:.1,curl:.3,cup:.6,cols:[nt(i,Xt,.3),i,e],nu:3,nv:2},{n:10,L:.034,W:.015,a:1,b:.7,tilt:.8,tiltC:.1,curl:.2,cup:.6,cols:[nt(i,Xt,.4),i,e],nu:3,nv:2}],center:{stamens:{n:12,len:.018,spread:.5,c:x(16244858),tip:x(16107048),tipR:.003}}}),small5:(i,e,t)=>({layers:[{n:5,L:.02,W:.016,a:1.3,b:.5,tilt:1.3,tiltC:.2,cup:.3,cols:[t??at(i,.8),i,e],nu:3,nv:2}],center:{type:"dome",r:.003,h:.003,cols:[x(16107048),x(16374869)],seg:5}})},V1=(i,e,t)=>(n,s,a,h)=>{let o=be(.35,1,h),l=1+a.range(-.1,.1),r=[[.004,0],[.006,.02],[.012*o,.034],[.03*o,.043],[.041*o,.045]].map(([u,d])=>[u*l,d*l]),c=new de;n.lathe(s,r,null,null,15,(u,d)=>{u<.5?d.copy(t).lerp(i,u*2):d.copy(i).lerp(e,u*2-1)},.1,5)};var Wy={L:.055,W:.034,c:x(3107382),n:3,tilt:1,a:.85,b:.7,fold:.3},ta=[],rt=i=>ta.push(i);rt({id:"margarida",name:"Margarida",lvl:1,price:8,grow:50,gift:6,spots:["bed","pot","window"],h:.4,info:"Simples e alegre, cresce rapidinho.",build:(i,e,t,n)=>jt(i,e,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:Ct.daisy},t,n)});rt({id:"tagetes",name:"Cravo-de-defunto",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.32,info:"Pompons alaranjados que espantam pragas.",build:(i,e,t,n)=>gt(i,e,{R:.15,H:.24,branches:9,heads:8,stalk:.12,leaf:{n:8,L:.05,W:.012,c:x(4160826),tilt:1.1},head:s=>s()<.5?Ct.marigold(x(15895052),x(16299578)):Ct.marigold(x(16101914),x(16569162)),headK:1.25},t,n)});var G1=[["tulipa_vermelha","Tulipa vermelha",1,12,[15779386,13901864,15222842]],["tulipa_amarela","Tulipa amarela",2,14,[14278762,16240414,16507994]],["tulipa_rosa","Tulipa rosa",3,16,[16445664,15764144,16233676]],["tulipa_roxa","Tulipa roxa",5,22,[15325424,8011688,10117064]]];for(let[i,e,t,n,s]of G1)rt({id:i,name:e,lvl:t,price:n,grow:70,gift:Math.round(n*.7),spots:["bed","pot","window"],h:.45,info:"Elegante, de p\xE9talas em ta\xE7a.",build:(a,h,o,l)=>jt(a,h,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:x(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:x(6265450),r:.02},head:Ct.tulip(x(s[0]),x(s[1]),x(s[2]))},o,l)});rt({id:"amor_perfeito",name:"Amor-perfeito",lvl:2,price:12,grow:65,gift:8,spots:["bed","pot","window","hang"],h:.2,info:"Carinhas coloridas que adoram sombra fresca.",build:(i,e,t,n)=>{let s=[[6959008,11565782,2756410],[16238622,16507754,4856336],[16052479,13219056,4923258],[15229980,16229434,3805704]];gt(i,e,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:x(4164159),a:.9,b:.6,tilt:1.1},head:a=>{let h=a.pick(s);return Ct.pansy(x(h[0]),x(h[1]),x(h[2]))},headK:1.15},t,n)}});rt({id:"lavanda",name:"Lavanda",lvl:2,price:15,grow:80,gift:10,spots:["bed","pot"],h:.55,info:"Perfumada, atrai abelhas e borboletas.",build:(i,e,t,n)=>{Rn(i,e,{n:Math.round(40*t),L:.16*t,W:.012,c:x(9086348),tip:x(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),Sn(i,e,{stems:[16,20],H:.5,lean:.4,stemC:x(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[x(7755970),x(10322662)],bud:x(9410232)},t,n)}});rt({id:"petunia",name:"Pet\xFAnia",lvl:2,price:14,grow:70,gift:9,spots:["hang","window","pot"],h:.25,info:"Cai em cascata, perfeita para vasos suspensos.",build:(i,e,t,n)=>{let s=e.pick([[8007600,11034582,2755146],[15220874,16222904,9048136],[16052479,16777215,14272586]]);Xn(i,e,{stems:13,L:.36,up:.45,out:.75,drop:1,leaf:{n:9,L:.04,W:.022,c:x(4887616),a:.9,b:.65},flower:{per:3,make:V1(x(s[0]),x(s[1]),x(s[2]))}},t,n)}});rt({id:"suculenta",name:"Suculenta",lvl:2,price:16,grow:90,gift:11,spots:["pot","window"],h:.14,thirst:.4,info:"Roseta carnuda que quase n\xE3o pede \xE1gua.",build:(i,e,t,n)=>{let s=Ct.succulent(x(7316876),x(10275508),x(15241380));Rt(i,se(0,.01,0),e,s,1,1.6*t);for(let a=0;a<3;a++){let h=a*2.2+e();Rt(i,re(se(Math.cos(h)*.1*t,.005,Math.sin(h)*.1*t),fe(.25),pe(h)),e,s,1,.6*t)}if(n>.2)for(let a=0;a<2;a++){let h=hn(e,.2,.09,a*3+e(),.05,6);i.tube(null,h,.003,.002,x(14191242),x(15245450),4);for(let o=0;o<6;o++){let{p:l,d:r}=It(h,.6+o*.08),c=.016*be(.5,1,n);i.lathe(re(_t(l,r),pe(o*2.4),fe(1.9)),[[c*.2,0],[c*.4,c*.5],[c*.5,c]],x(15764058),x(16238666),5)}}}});rt({id:"geranio",name:"Ger\xE2nio",lvl:3,price:18,grow:85,gift:12,spots:["window","pot","hang","bed"],h:.34,info:"Cl\xE1ssico das janelas, floresce o ano todo.",build:(i,e,t,n)=>{let s=e.pick([[14688815,15747658],[15755930,16228544],[15921906,16777215]]).map(x);gt(i,e,{R:.17,H:.2,branches:10,heads:5,stalk:.45,headUp:.7,leaf:{n:5,L:.06,W:.07,c:x(4033082),a:1,b:.32,fold:.15,curl:.3,tilt:1.15},head:{ball:{n:16,r:.04,fs:.022,np:5,cols:s,squash:.7,cover:.2}}},t,n)}});rt({id:"samambaia",name:"Samambaia",lvl:3,price:20,grow:95,gift:13,spots:["hang","pot"],h:.4,foliage:!0,info:"Folhagem farta que balan\xE7a com a brisa.",build:(i,e,t)=>Xn(i,e,{stems:18,L:.5,up:.55,out:.85,drop:1.1,upFall:.5,stemC:x(5933626),stemR:.0025,frond:{pairs:15,L:.07,wr:.3,c:x(5020220)}},t,-1)});rt({id:"cosmos",name:"Cosmos",lvl:3,price:18,grow:75,gift:12,spots:["bed","pot"],h:.65,info:"Leve como o vento, em tons de rosa.",build:(i,e,t,n)=>jt(i,e,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:x(5937736),fold:0},head:s=>s()<.6?Ct.cosmos(x(14833820),x(16228556)):Ct.cosmos(x(16046312),x(16777215)),headTilt:.35},t,n)});rt({id:"girassol",name:"Girassol",lvl:3,price:22,grow:110,gift:16,spots:["bed"],h:1.6,fixedRot:!0,info:"Alto e radiante, sempre olhando o sol.",build:(i,e,t,n)=>jt(i,e,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:x(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:x(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:Ct.sunflower,headTilt:1.15},t,n)});rt({id:"narciso",name:"Narciso",lvl:4,price:22,grow:80,gift:14,spots:["bed","pot","window"],h:.4,info:"Trombetinhas douradas que anunciam a primavera.",build:(i,e,t,n)=>jt(i,e,{stems:[5,7],H:.36,lean:.14,spread:.08,stemR:.004,basal:{n:12,L:.3,W:.022,a:.7,b:.5,tilt:.25,curl:.5,fold:.3,c:x(5937754)},head:Ct.daffodil,headTilt:1.2},t,n)});rt({id:"manjericao",name:"Manjeric\xE3o",lvl:4,price:15,grow:60,gift:10,spots:["pot","window","bed"],h:.3,info:"Cheiroso e vi\xE7oso, bom de ter perto da cozinha.",build:(i,e,t,n)=>{gt(i,e,{R:.15,H:.24,branches:10,heads:0,leaf:{n:9,L:.055,W:.04,c:x(5744700),a:.85,b:.6,fold:-.25,cup:.5,curl:.5,tilt:1}},t,-1),n>.2&&Sn(i,e,{stems:[6,7],H:.34,lean:.35,florets:10,from:.75,type:"card",fs:.009,cols:[Xt,x(15788287)],stemC:x(6986314)},t,n)}});rt({id:"cacto",name:"Cacto florido",lvl:4,price:24,grow:120,gift:17,spots:["pot","window"],h:.3,thirst:.35,info:"Espinhudo por fora, uma flor delicada no topo.",build:(i,e,t,n)=>{let s=(a,h,o,l)=>{let r=[];for(let c=0;c<=8;c++){let u=c/8;r.push([h*Math.pow(Math.sin(Math.PI*(.08+u*.92)*.5+(u>.6?(u-.6)*1.5:0)),.7)*(u>.85?(1-u)/.15*.6+.4:1)*(.75+.25*Math.sin(u*3.1)),o*u])}r.push([.001,o*1.005]),i.lathe(a,r,x(3832388),x(6267738),40,null,.09,10);for(let c=0;c<10;c++)for(let u=1;u<6;u++){let d=u/6.2,f=(c+.25)/10*Me,g=r[Math.round(d*8)];i.blob(re(a,se(Math.cos(f)*g[0]*1.07,g[1],Math.sin(f)*g[0]*1.07)),.006,.006,x(16051922),x(16776168),4,3)}l&&n>.02&&Rt(i,re(a,se(0,o*.98,0)),e,Ct.cactusFlower(x(15755944),x(16230092)),n,1.5)};s(se(0,0,0),.085*t,.2*t,!0),t>.5&&(s(re(se(.085*t,.03,.02),mt(-.5)),.04*t,.09*t,n>.8),s(re(se(-.07*t,.02,-.04),mt(.6)),.032*t,.07*t,!1))}});rt({id:"hera",name:"Hera",lvl:4,price:18,grow:85,gift:12,spots:["hang","window","pot"],h:.3,foliage:!0,info:"Verde pendente que veste qualquer cantinho.",build:(i,e,t)=>Xn(i,e,{stems:12,L:.62,up:.3,out:.6,drop:1.6,upFall:.3,stemC:x(6978106),leaf:{n:15,L:.05,W:.05,c:x(3836488),tip:x(14477472),tipMix:.45,a:.7,b:.5,fold:.15,curl:.2}},t,-1)});rt({id:"papoula",name:"Papoula",lvl:5,price:24,grow:85,gift:16,spots:["bed","pot"],h:.5,info:"P\xE9talas de seda vermelha, delicadas ao vento.",build:(i,e,t,n)=>jt(i,e,{stems:[6,8],H:.46,lean:.28,spread:.08,stemR:.0028,stemC:x(8034922),wob:.1,basal:{n:12,L:.16,W:.045,a:.8,b:.9,tilt:.8,c:x(6986360),ruffle:.3,rf:4,nv:4},head:Ct.poppy,headTilt:.3,headK:1.1},t,n)});rt({id:"zinia",name:"Z\xEDnia",lvl:5,price:22,grow:80,gift:15,spots:["bed","pot","window"],h:.45,info:"Colorida e resistente, a favorita das borboletas.",build:(i,e,t,n)=>{let s=[[14690922,16018074],[15888410,16228922],[16238622,16507754],[14166090,15749226]];jt(i,e,{stems:[6,8],H:.42,lean:.25,spread:.08,stemR:.0035,leaf:{n:5,L:.08,W:.035,tilt:1,c:x(4885052),azStep:Math.PI/2},head:a=>{let h=a.pick(s);return Ct.zinnia(x(h[0]),x(h[1]))},headK:1.15},t,n)}});var W1=[["rosa_vermelha","Rosa vermelha",5,30,10096418,13113390,14694984],["rosa_rosa","Rosa cor-de-rosa",6,32,15231638,16095928,16568542],["rosa_branca","Rosa branca",7,34,15918792,16446694,16777215],["rosa_amarela","Rosa amarela",8,36,15774234,16306762,16641696],["rosa_pessego","Rosa p\xEAssego",10,42,15764058,16299146,16638152]];for(let[i,e,t,n,s,a,h]of W1)rt({id:i,name:e,lvl:t,price:n,grow:130,gift:Math.round(n*.72),spots:["bed","pot"],h:.75,info:"A rainha do jardim, de perfume inesquec\xEDvel.",build:(o,l,r,c)=>gt(o,l,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:x(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:x(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:Ct.rose(x(s),x(a),x(h)),headK:1.25,headUp:.5},r,c)});rt({id:"lirio",name:"L\xEDrio",lvl:6,price:34,grow:120,gift:24,spots:["bed","pot"],h:.8,info:"Trombetas recurvadas com perfume doce.",build:(i,e,t,n)=>{let s=e.pick([[16777215,16775408,14282928],[16027569,16573676,16249024],[16225310,16498778,16244874]]);jt(i,e,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:x(4164164),t0:.08,t1:.82,taper:.5},head:Ct.lily(x(s[0]),x(s[1]),x(s[2])),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},t,n)}});rt({id:"costela",name:"Costela-de-ad\xE3o",lvl:6,price:38,grow:140,gift:26,spots:["pot"],h:.75,foliage:!0,info:"Folhas enormes e recortadas, puro charme tropical.",build:(i,e,t)=>{let n=Math.round(4+5*t);for(let s=0;s<n;s++){let a=s*2.4+e.range(-.2,.2),h=.5*t*e.range(.65,1.1),o=e.range(.3,.75),l=At(new qt(0,0,0),new qt(Math.cos(a)*h*o*.3,h*.8,Math.sin(a)*h*o*.3),new qt(Math.cos(a)*h*o,h*(1-o*.3),Math.sin(a)*h*o),6);i.tube(null,l,.007,.004,x(4160058),x(5016132),5);let r=l[6],c=.3*t*e.range(.7,1.1),u=x(2779704),d=re(se(r.x,r.y,r.z),pe(-a+Math.PI/2),fe(1+e.range(-.2,.3)));bt(i,d,e,{L:c,W:c*.2,c:u,a:.8,b:.6,fold:.3,curl:.5,nu:5});for(let f=0;f<6;f++){let g=.08+f*.14,v=c*.52*Math.sin(Math.PI*Math.pow(g+.12,.8))+c*.1;for(let m of[-1,1])bt(i,re(d,se(0,c*g,0),mt(m*(1.15-g*.5)),fe(.12)),e,{L:v,W:c*.115,c:u,a:.5,b:.45,base:.9,fold:.1,curl:.25,nu:3,vein:.15,tipMix:.1})}}}});var X1=[["hortensia_azul","Hort\xEAnsia azul",7,40,[6259430,8824050,10128104,8038640]],["hortensia_rosa","Hort\xEAnsia rosa",8,42,[15760048,16229576,15231648,16367832]]];for(let[i,e,t,n,s]of X1)rt({id:i,name:e,lvl:t,price:n,grow:150,gift:Math.round(n*.72),spots:["bed","pot"],h:.7,info:"Buqu\xEAs redondos que mudam de cor com a terra.",build:(a,h,o,l)=>gt(a,h,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:x(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:s.map(x),squash:.75,cover:.35}},headUp:.6},o,l)});rt({id:"dalia",name:"D\xE1lia",lvl:7,price:40,grow:130,gift:28,spots:["bed","pot"],h:.7,info:"P\xE9talas em espiral perfeita, obra de geometria.",build:(i,e,t,n)=>{let s=e.pick([[13117502,16091738],[15227546,16503008],[15900698,16507754],[9054858,15245536]]);gt(i,e,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:x(3503674),tilt:1.1},head:Ct.dahlia(x(s[0]),x(s[1])),headK:1.5,headUp:.35},t,n)}});rt({id:"bromelia",name:"Brom\xE9lia",lvl:8,price:45,grow:150,gift:31,spots:["pot","bed"],h:.5,thirst:.6,info:"Joia das matas brasileiras, com espiga vermelha.",build:(i,e,t,n)=>{if(Rn(i,e,{n:Math.round(10+10*t),L:.34*t,W:.05,a:.55,b:.45,tilt:.75,curl:1,curlPow:2,fold:.5,c:x(4164176),tip:x(9093232),nu:5,base:.5,r:.012}),n>=0){let s=.3*t*be(.5,1,n);i.tube(null,[new qt(0,0,0),new qt(0,s*.5,0),new qt(0,s,0)],.008,.005,x(13117498),x(15217210),5),Rt(i,se(0,s*.45,0),e,{layers:[{n:20,golden:!0,L:[.07,.035],W:[.03,.018],a:.8,b:.7,tilt:[.75,.25],tiltC:[.3,.1],curl:.3,cup:.9,y:[0,s*.6],r:.006,cols:[x(14163514),x(15612484),x(16232490)],closedScale:.6,nu:3,nv:2}]},n,1)}}});rt({id:"peonia",name:"Pe\xF4nia",lvl:8,price:48,grow:160,gift:34,spots:["bed","pot"],h:.7,info:"Nuvens de p\xE9talas macias, puro romantismo.",build:(i,e,t,n)=>{let s=e.pick([[15895220,16638186],[16503004,16774902],[14170730,16091816]]);gt(i,e,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:x(3108410),tilt:1.1},leafTip:{n:3,L:.09,W:.035,c:x(3108410),spread:1.6},head:Ct.peony(x(s[0]),x(s[1])),headK:1.45,headUp:.45},t,n)}});rt({id:"delfinio",name:"Delf\xEDnio",lvl:9,price:46,grow:140,gift:32,spots:["bed"],h:1,info:"Torres de flores azuis, altivas e elegantes.",build:(i,e,t,n)=>Sn(i,e,{stems:[4,5],H:.95,lean:.12,stemR:.006,florets:26,from:.42,type:"flower",fs:.03,off:.012,taper:.55,cols:[x(3823320),x(6978288)],bud:x(8034954),eye:x(16052479),basalFan:{count:8,stalk:.22,n:5,L:.11,W:.04,c:x(4164164),spread:2.4},leaf:{n:5,L:.07,W:.03,c:x(4164164)}},t,n)});rt({id:"dedaleira",name:"Dedaleira",lvl:9,price:44,grow:140,gift:31,spots:["bed"],h:1,info:"Sininhos pintados em hastes altas.",build:(i,e,t,n)=>Sn(i,e,{stems:[3,4],H:.95,lean:.1,stemR:.006,florets:22,from:.4,type:"bell",fs:.05,off:.006,whorl:.55,taper:.5,cols:[x(14178984),x(15769808)],bud:x(10139786),basal:{n:12,L:.2,W:.075,a:.75,b:.65,tilt:1.05,c:x(4885064)},leaf:{n:6,L:.1,W:.04,c:x(4885064)}},t,n)});rt({id:"hibisco",name:"Hibisco",lvl:9,price:50,grow:160,gift:35,spots:["bed","pot"],h:.85,info:"Flor tropical de um dia, sempre renovada.",build:(i,e,t,n)=>{let s=e.pick([[14819390,16011370,6949410],[16228394,16502874,13115422],[16026292,16568544,12065354]]);gt(i,e,{R:.34,H:.68,branches:10,heads:6,stalk:.04,fill:44,wood:x(5917236),stemR:.008,leaf:{n:10,L:.085,W:.06,c:x(2318382),a:.8,b:.6,tilt:1.1},head:Ct.hibiscus(x(s[0]),x(s[1]),x(s[2])),headK:1.35,headUp:.15},t,n)}});rt({id:"copo_de_leite",name:"Copo-de-leite",lvl:10,price:52,grow:150,gift:37,spots:["bed","pot"],h:.65,info:"C\xE1lice branco de linhas puras.",build:(i,e,t,n)=>{for(let s=0;s<Math.round(5+4*t);s++){let a=s*2.4,h=.34*t*e.range(.7,1.1),o=e.range(.25,.6),l=At(new qt(0,0,0),new qt(Math.cos(a)*h*o*.2,h*.7,Math.sin(a)*h*o*.2),new qt(Math.cos(a)*h*o,h,Math.sin(a)*h*o),5);i.tube(null,l,.006,.004,x(4885066),x(4885066),5);let r=l[5];bt(i,re(se(r.x,r.y,r.z),pe(-a+Math.PI/2),fe(.8+e()*.3)),e,{L:.24*t,W:.13*t,a:.6,b:.7,c:x(3111488),fold:.3,curl:.5,nu:5,nv:4})}if(n>=0)for(let s=0;s<4;s++){let a=hn(e,.55*t*e.range(.8,1.05),.08,s*2.1+1,.03,6);i.tube(null,a,.006,.005,x(5937744),x(6989920),5);let h=re(q1(a),fe(.25)),o=be(.35,1,n),l=new de,r=[[.007,0],[.01,.035],[.02*o,.075],[.04*o,.105],[.052*o,.112]];i.lathe(re(h,Ai(1,1,1.25)),r,null,null,12,(c,u)=>u.copy(x(13625008)).lerp(Xt,He(c*2.5,0,1)),0,1),Rt(i,h,e,{layers:[],center:{type:"spadix",L:.07,r:.007,cols:[x(15906846),x(16373834)]}},n)}}});function q1(i){let{p:e,d:t}=It(i,1);return _t(e,t)}rt({id:"azaleia",name:"Azaleia",lvl:10,price:50,grow:160,gift:35,spots:["bed","pot"],h:.55,info:"Arbusto que se cobre inteiro de flores.",build:(i,e,t,n)=>{let s=e.pick([[14696586,16222904],[16052468,16777215],[15224890,16226938]]);gt(i,e,{R:.34,H:.42,branches:14,heads:34,fill:70,wood:x(5916212),leaf:{n:12,L:.05,W:.024,c:x(2909748),tilt:1},head:Ct.azalea(x(s[0]),x(s[1])),headK:1.5,headUp:.5},t,n)}});rt({id:"orquidea",name:"Orqu\xEDdea",lvl:11,price:60,grow:190,gift:44,spots:["pot","hang"],h:.6,thirst:.6,info:"Rara e paciente; cada flor dura semanas.",build:(i,e,t,n)=>{if(Rn(i,e,{n:6,L:.2*t,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:x(3111486),nu:5,base:.6,r:.01}),n<0)return;let s=e.pick([[16777215,16643322,12726394],[15231664,16232662,10099290],[16244874,16643264,12068922]]);for(let a=0;a<2;a++){let h=a*2.6+e(),o=.55*t,l=At(new qt(0,0,0),new qt(Math.cos(h)*o*.1,o*.95,Math.sin(h)*o*.1),new qt(Math.cos(h)*o*.75,o*.7,Math.sin(h)*o*.75),10);i.tube(null,l,.004,.0025,x(5929540),x(6982218),4);for(let r=0;r<7;r++){let c=.5+r*.075,u=It(l,c).p,d=r%2?1:-1,f=new qt(Math.cos(h+d*1.2)*.8,.25,Math.sin(h+d*1.2)*.8).normalize(),g=u.clone().add(f.clone().multiplyScalar(.02));Rt(i,re(_t(g,f),pe(e()*.4)),e,Ct.orchid(x(s[0]),x(s[1]),x(s[2])),He(n*1.5-r*.07,0,1),1.3)}}}});rt({id:"camelia",name:"Cam\xE9lia",lvl:11,price:58,grow:180,gift:42,spots:["bed","pot"],h:.8,info:"Flores de porcelana entre folhas brilhantes.",build:(i,e,t,n)=>{let s=e.pick([[15760030,16365772],[16446704,16777215],[13114942,15223390]]);gt(i,e,{R:.33,H:.66,branches:11,heads:9,fill:50,wood:x(5916212),stemR:.008,leaf:{n:11,L:.075,W:.045,c:x(2054700),a:.85,b:.65,tilt:1.1},head:Ct.camellia(x(s[0]),x(s[1])),headK:1.45,headUp:.3},t,n)}});rt({id:"ninfeia",name:"Ninfeia",lvl:6,price:36,grow:120,gift:26,spots:["pond"],h:.12,thirst:0,info:"Estrela branca que flutua sobre a \xE1gua.",build:(i,e,t,n)=>qc(i,e,t,n,Ct.waterlily(x(16507116),x(16026288)),0,.17,1.25)});rt({id:"lotus",name:"L\xF3tus",lvl:10,price:56,grow:170,gift:40,spots:["pond"],h:.5,thirst:0,info:"Nasce da lama e se abre imaculada.",build:(i,e,t,n)=>qc(i,e,t,n,Ct.lotus(x(16361668),x(15227540)),.36,.21,1.25)});function qc(i,e,t,n,s,a,h,o){let l=Math.round(3+4*t);for(let r=0;r<l;r++){let c=r*2.4+e(),u=(.12+.3*Math.sqrt((r+.5)/l))*(.6+.4*t),d=h*t*e.range(.7,1.15),f=a&&r%3===0?a*.55*t*e.range(.6,1):0,g=Math.cos(c)*u,v=Math.sin(c)*u;f&&i.tube(null,[new qt(g,-.1,v),new qt(g,f*.5,v),new qt(g,f,v)],.005,.004,x(5933642),x(5933642),4);let m=Vn(x(4164168),e,.05),p=re(se(g,f+.012+r*.0015,v),pe(e()*Me)),y=14,_=i.n,b=nt(m,ot.light,.3);i.vert(0,f?-.02:0,0,at(m,.8),p);for(let L=0;L<=y;L++){let R=.18+L/y*(Me-.36),I=d*(1+.04*Math.sin(R*7));i.vert(Math.cos(R)*I,f?.02:.003*Math.sin(R*5),Math.sin(R)*I,L%2?m:b,p)}for(let L=0;L<y;L++)i.idx.push(_,_+L+2,_+L+1)}if(n>=0)for(let r=0;r<Math.round(1+2*t);r++){let c=r*2.2+.7,u=r===0?0:.2,d=a?a*t*(r===0?1:.7):.02;a&&i.tube(null,[new qt(Math.cos(c)*u,-.1,Math.sin(c)*u),new qt(Math.cos(c)*u,d*.5,Math.sin(c)*u+.01),new qt(Math.cos(c)*u,d,Math.sin(c)*u)],.006,.005,x(5933642),x(6986324),4),Rt(i,re(se(Math.cos(c)*u,d,Math.sin(c)*u),pe(e()*3)),e,s,He(n-r*.1,0,1),o*(.75+.25*t))}}var $1=[{id:"cerejeira",name:"Cerejeira",lvl:5,price:80,gift:45,info:"Nuvem cor-de-rosa que chove p\xE9talas.",petal:16368856,P:{H:1.25,R:1.25,trunkR:.085,limbs:7,bark:x(5914424),foliage:.18,leaves:700,leafCols:[x(5937732),x(8042586)],blossom:{n:3200,size:.125,cols:[x(16366802),x(16570598),x(16164034),x(16777215)],buds:[x(15239342),x(14250126)]}}},{id:"limoeiro",name:"Limoeiro",lvl:7,price:95,gift:55,info:"Flores perfumadas e lim\xF5es amarelinhos.",P:{H:.95,R:1,trunkR:.07,limbs:7,bark:x(6969924),foliage:1,leaves:2800,leafSize:.15,leafCols:[x(3111480),x(4164160),x(2452016)],blossom:{n:260,size:.075,cols:[Xt,x(16775400)]},fruit:{n:18,r:.045,tall:1.25,c:x(16241182)}}},{id:"ipe_amarelo",name:"Ip\xEA-amarelo",lvl:9,price:120,gift:70,info:"S\xEDmbolo do Brasil: ouro puro no inverno.",petal:16240414,P:{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:x(6969930),foliage:.06,leaves:900,leafCols:[x(4885050),x(5937732)],blossom:{n:3300,size:.125,cols:[x(16240414),x(16505914),x(15906831),x(16640106)],buds:[x(14264335),x(12107850)]}}},{id:"laranjeira",name:"Laranjeira",lvl:11,price:130,gift:76,info:"Flor de laranjeira e frutos doces.",P:{H:1,R:1.1,trunkR:.075,limbs:7,bark:x(6246204),foliage:1,leaves:2900,leafSize:.15,leafCols:[x(2452016),x(3111480),x(2054698)],blossom:{n:240,size:.075,cols:[Xt]},fruit:{n:20,r:.055,tall:1,c:x(16091678)}}},{id:"jacaranda",name:"Jacarand\xE1",lvl:13,price:160,gift:95,info:"Copa lil\xE1s que tinge o ch\xE3o de roxo.",petal:11045102,P:{H:1.6,R:1.45,trunkR:.09,limbs:8,bark:x(5917248),foliage:.15,leaves:900,leafCols:[x(5937732),x(6989904)],blossom:{n:3500,size:.125,cols:[x(10124008),x(12098290),x(9071320),x(13153526)],buds:[x(8018632)]}}}];for(let i of $1)rt({...i,price:i.price,grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,build:(e,t,n,s)=>os(e,t,i.P,n,s)});var Y1=Ct.rose(x(15227530),x(16091824),x(16568542)),Z1=[{id:"rosa_trepadeira",name:"Rosa trepadeira",lvl:6,price:70,gift:42,info:"Cobre o arco de rosas mi\xFAdas.",P:{leaf:{n:60,L:.06,W:.038,c:x(2909748)},flower:{n:46,make:(i,e,t,n)=>{let s=new qt(t.range(-.6,.6),t.range(.1,1),t.range(-1,1)>0?1:-1).normalize();Rt(i,_t(e.clone().add(s.clone().multiplyScalar(.07)),s),t,Y1,n,1.05)}}}},{id:"glicinia",name:"Glic\xEDnia",lvl:8,price:90,gift:54,info:"Cachos lilases que pendem como cortinas.",P:{leaf:{n:70,L:.07,W:.025,c:x(4887620)},flower:{n:30,t0:.5,make:(i,e,t,n)=>{let s=.36*be(.4,1,n)*t.range(.7,1.15),a=26,h=t.range(-.06,.06),o=t.range(-.1,.1);for(let l=0;l<a;l++){let r=l/a,c=.05*(1-r*.85),u=l*2.4,d=nt(x(9071328),x(13482232),r*.6+t()*.3),f=re(se(e.x+h+Math.cos(u)*c,e.y-.03-r*s,e.z+o+Math.sin(u)*c),pe(-u+Math.PI/2),fe(1.9));i.card(f,.034,.042,at(d,.8),nt(d,Xt,.25),0,-.3,.95,.3)}}}}},{id:"primavera",name:"Primavera",lvl:10,price:105,gift:64,info:"Buganv\xEDlia: uma explos\xE3o de magenta.",P:{leaf:{n:50,L:.055,W:.035,c:x(3506240)},flower:{n:260,make:(i,e,t,n)=>{let s=Vn(t.pick([x(14688394),x(15747744),x(13113464)]),t,.05),a=new qt(t.range(-1,1),t.range(-.2,1),t.range(-1,1)).normalize(),h=e.clone().add(a.clone().multiplyScalar(t.range(.03,.16)));for(let o=0;o<3;o++)i.card(re(_t(h,a),pe(o*2.1),fe(.9)),.04*be(.5,1,n),.05*be(.5,1,n),at(s,.8),nt(s,Xt,.15),0,.62,-.78,.35)}}}},{id:"jasmim",name:"Jasmim",lvl:12,price:115,gift:70,info:"Estrelinhas brancas de perfume noturno.",P:{leaf:{n:80,L:.05,W:.022,c:x(3111482)},flower:{n:110,make:(i,e,t,n)=>{let s=new qt(t.range(-1,1),t.range(-.1,1),t.range(-1,1)).normalize();Rt(i,_t(e.clone().add(s.clone().multiplyScalar(.06)),s),t,Ct.small5(x(16776692),Xt,x(16248e3)),n,1.5)}}}}];for(let i of Z1)rt({...i,grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,build:(e,t,n,s)=>Io(e,t,i.P,n,s)});rt({id:"alecrim",name:"Alecrim",lvl:3,price:14,grow:65,gift:9,spots:["pot","window","bed"],h:.35,info:"Raminhos arom\xE1ticos com florzinhas azuis.",build:(i,e,t,n)=>Sn(i,e,{stems:[16,18],H:.34,lean:.45,stemC:x(6978132),stemR:.003,florets:n>.2?12:2,from:.55,type:"card",fs:.007,off:.006,cols:[x(8030952),x(11188472)],bud:x(8034938),leaf:{n:26,L:.026,W:.004,c:x(5208664),fold:0,tilt:.8,t0:.08,t1:.98,taper:.2},from2:1},t,Math.max(n,0))});C0(rt,Ct);L0(rt,Ct);for(let i of ta)!i.loves&&Xc[i.id]&&(i.loves=Xc[i.id]);var J1=[0,9,18,28,40,55,70,85,100,115,130,150,150,150];for(let i of ta)i.grow=Math.round(i.grow*J1[Math.min(i.lvl,13)]*(i.tree?2:i.climber?1.5:1)),i.every=300+i.lvl*90;var ht={};ta.sort((i,e)=>i.lvl-e.lvl||i.price-e.price);for(let i of ta)ht[i.id]=i;var un=ta;var j1=[null,null,[.55,-1],[.85,.12],[1,1]];function Uo(i,e,t){let n=ht[i],s=new Wt,a=Jt(e*7919+13);if(t<=1)if(n.tree){s.tube(null,hn(a,.3,.02,1,.05,4),.012,.005,ot.wood,ot.stem,5);for(let h=0;h<6;h++)bt(s,re(se(0,.12+h*.035,0),pe(h*2.4),fe(1)),a,{L:.09,W:.04,c:ot.lime})}else if(n.spots[0]==="pond")qc(s,a,.3,-1,null,0,.14,1);else if(n.climber)for(let h of[-.75,.75]){let o=new Wt;zc(o,a);let l=s.n;for(let r=0;r<o.pos.length;r+=3)s.vert(o.pos[r]+h,o.pos[r+1],o.pos[r+2],new de(o.col[r],o.col[r+1],o.col[r+2]));for(let r of o.idx)s.idx.push(r+l)}else zc(s,a);else{let[h,o]=j1[t],l=n.tree?[0,0,.45,.78,1][t]:n.climber?[0,0,.4,.8,1][t]:h;n.build(s,a,l,n.foliage?-1:o)}return s.build()}function zo(i){let e=ht[i];return si({sway:e.tree?.04:e.climber?.05:e.id==="cacto"||e.id==="suculenta"?.02:e.h>1?.16:.5,glow:e.tree?.1:.12,phase:Math.random()*6})}var K1=[{id:0,name:"Primavera",icon:"spring",line:"Tudo quer brotar."},{id:1,name:"Ver\xE3o",icon:"summer",line:"Dias longos e quentes."},{id:2,name:"Outono",icon:"autumn",line:"Folhas douradas pelo ch\xE3o."},{id:3,name:"Inverno",icon:"winter",line:"Manh\xE3s frescas e c\xE9u limpo."}],na=3,Q1=[{n:"Dona L\xFAcia",l:["quer enfeitar a mesa do caf\xE9.","vai receber as netas no domingo.","est\xE1 montando um arranjo para a igreja."]},{n:"Seu Ant\xF4nio",l:["quer fazer uma surpresa para a esposa.","vai visitar um velho amigo.","precisa alegrar a barbearia."]},{n:"Bia",l:["est\xE1 decorando a festa de anivers\xE1rio.","quer um buqu\xEA para a professora.","vai fazer uma coroa de flores."]},{n:"Padaria da pra\xE7a",l:["quer flores frescas no balc\xE3o.","vai enfeitar a vitrine."]},{n:"Tia Zez\xE9",l:["est\xE1 preparando um ch\xE1 da tarde.","quer perfumar a sala.","vai presentear a vizinha nova."]},{n:"Professor Henrique",l:["quer mostrar as flores para a turma.","est\xE1 montando um herb\xE1rio."]},{n:"Marina",l:["vai se casar no s\xE1bado!","quer flores para o ateli\xEA.","est\xE1 fazendo sabonetes artesanais."]},{n:"Seu Joaquim da feira",l:["quer vender buqu\xEAs na barraca.","precisa de enfeite para a banca."]}],gn=(i,e,t,n,s)=>n.map(([a,h],o)=>({id:i+o,name:n.length>1?`${e} ${["I","II","III","IV"][o]}`:e,desc:t.replace("#",a),goal:a,r:h,v:s})),ia=[...gn("plant","M\xE3os na terra","Plante # mudas",[[10,40],[60,150],[250,500]],i=>i.stats.planted),...gn("water","Regador amigo","Regue # vezes",[[25,40],[200,150],[800,500]],i=>i.stats.watered),...gn("bloom","Jardim em flor","Veja # plantas florirem",[[10,50],[80,200],[400,700]],i=>i.stats.blooms),...gn("gift","Colheita de mimos","Recolha # presentes",[[20,40],[250,200],[1200,700]],i=>i.stats.collected),...gn("album","Colecionadora","Tenha # esp\xE9cies no \xE1lbum",[[5,50],[15,150],[30,400],[45,900]],i=>i.album.length),...gn("order","Querida da vizinhan\xE7a","Entregue # pedidos",[[1,30],[12,200],[50,600],[150,1500]],i=>i.stats.orders||0),...gn("weed","Canteiro limpinho","Arranque # matinhos",[[5,30],[50,180],[200,500]],i=>i.stats.weeds||0),...gn("prune","Tesoura afiada","Fa\xE7a # podas",[[5,30],[50,180],[200,500]],i=>i.stats.prunes||0),...gn("fert","Dedo verde","Use adubo # vezes",[[3,30],[30,200]],i=>i.stats.fert||0),...gn("streak","Visita querida","Abra a caixa de correio em # dias",[[3,60],[7,200],[21,800]],i=>i.daily.streak||0),...gn("zone","Jardim que cresce","Abra # \xE1reas novas",[[2,80],[4,300],[6,1e3]],i=>i.zones.length-1),...gn("decor","Capricho","Tenha # decora\xE7\xF5es",[[2,60],[6,400]],i=>i.decor.length),...gn("beauty","Encanto","Chegue a # de beleza",[[150,60],[600,250],[2e3,900]],(i,e)=>e.beauty()),...gn("hybrid","Jardineira curiosa","Descubra # raridades",[[1,80],[5,400],[14,1500]],i=>(i.hybrids||[]).length),...gn("visit","Amiga dos bichos","Receba # visitantes diferentes",[[3,80],[7,400],[10,1e3]],i=>(i.seen||[]).length),...gn("season","O ano inteiro","Cuide do jardim em # esta\xE7\xF5es",[[2,100],[4,500]],i=>(i.seasonsSeen||[]).length)],P0=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,$c=[{coins:30},{adubo:1},{coins:60},{adubo:2},{coins:110},{adubo:3},{coins:260,adubo:2,big:!0}];function I0(i,{S:e,world:t,fx:n,audio:s,gardener:a,ui:h,addCoins:o,addXp:l,level:r,save:c}){let u={},d=(S,N)=>S+Math.random()*(N-S),f=S=>S[Math.floor(Math.random()*S.length)],g=()=>Math.floor((Date.now()-e.t0)/864e5),v=new URLSearchParams(location.search).get("season");u.season=()=>{let S=v!=null?+v*na:g(),N=Math.floor(S/na)%4;return{...K1[N],day:S%na+1,of:na,left:na-S%na}},u.inSeason=S=>S.loves!=null&&S.loves.includes(u.season().id),u.growMul=(S,N)=>(u.inSeason(N)?1.5:1)*(t.spots[S].type==="green"?2:1),u.giftMul=S=>u.inSeason(S)?1.5:1;let m=un.filter(S=>S.hybrid);u.afterGift=S=>{let N=e.plants[S],H=t.spots[S];if(!(!N||e.rare[S]))for(let F in e.plants){if(F===String(S))continue;let T=e.plants[F],C=t.spots[F];if(T.sp===N.sp||T.grown<ht[T.sp].grow||C.pos.distanceTo(H.pos)>1.25)continue;let E=m.find(A=>!e.hybrids.includes(A.id)&&A.hybrid.includes(N.sp)&&A.hybrid.includes(T.sp)&&!Object.values(e.rare).includes(A.id));if(E&&Math.random()<.3){e.rare[S]=E.id,h.toast("Uma semente diferente apareceu entre as flores!","good"),s.sfx("bloom",.7,1.3);return}}},u.takeRare=S=>{let N=e.rare[S];delete e.rare[S];let H=ht[N];!H||e.hybrids.includes(N)||(e.hybrids.push(N),l(25),s.sfx("levelup"),n.burst(t.spots[S].pos,[16770688,16751288,11832048,16777215],50,1.4),h.rare(H),u.log(`Descobri uma raridade: ${H.name}.`),c())},u.hybrids=m,u.log=S=>{e.log.push({d:g()+1,t:S}),e.log.length>60&&e.log.shift()};let p=()=>{let S=r(),N=new Set(t.spots.filter(F=>e.zones.includes(F.zone)).map(F=>F.type)),H=u.season().id;return un.filter(F=>F.lvl<=S&&F.spots.some(T=>N.has(T))&&(F.season==null||F.season===H)&&(!F.hybrid||e.hybrids.includes(F.id)))};u.available=p;let y=()=>{let S=r(),N=p(),H=N.filter(D=>Object.values(e.plants).some(U=>U.sp===D.id));if(!N.length)return null;let F=S<3?1:S<6?Math.random()<.5?1:2:Math.random()<.4?2:Math.random()<.6?3:1,T=[],C=new Set;for(let D=0;D<F;D++){let U=H.length&&Math.random()<.7?H:N,z=f(U.filter(W=>!C.has(W.id)).length?U.filter(W=>!C.has(W.id)):N);C.has(z.id)||(C.add(z.id),T.push({sp:z.id,n:1+Math.floor(Math.random()*Math.min(4,1.5+S/3))}))}let E=f(Q1),A=T.reduce((D,U)=>D+U.n*ht[U.sp].gift,0);return{id:Date.now()+Math.floor(Math.random()*1e3),who:E.n,why:f(E.l),items:T,coins:Math.round(A*2.4+12),xp:T.reduce((D,U)=>D+U.n,0)*5,adubo:Math.random()<.35?1:0}};u.canDeliver=S=>S.items.every(N=>(e.basket[N.sp]||0)>=N.n),u.anyDeliverable=()=>e.orders.some(u.canDeliver),u.deliver=S=>{let N=e.orders.find(H=>H.id===S);if(!N||!u.canDeliver(N))return!1;for(let H of N.items)e.basket[H.sp]-=H.n;return e.orders=e.orders.filter(H=>H!==N),e.stats.orders=(e.stats.orders||0)+1,e.adubo+=N.adubo,o(N.coins),l(N.xp),s.sfx("levelup",.7),a.play("cheer",1.4),n.burst(t.things.orders.pos,[16770688,16751288,16777215,12120224],40,1.4),h.toast(`${N.who} adorou! +${N.coins} moedas${N.adubo?" e 1 adubo":""}`,"good"),u.log(`Entreguei flores para ${N.who}.`),e.orderT=Math.min(e.orderT||1/0,Date.now()+5*6e4),c(),!0},u.dismiss=S=>{e.orders=e.orders.filter(N=>N.id!==S),e.orderT=Date.now()+3*6e4,c()},u.dailyReady=()=>e.daily.last!==P0(),u.claimDaily=()=>{if(!u.dailyReady())return null;e.daily.streak+=1,e.daily.last=P0();let S=$c[(e.daily.streak-1)%7],N=S.coins?Math.round(S.coins*(1+r()*.2)):0;return N&&o(N),S.adubo&&(e.adubo+=S.adubo),s.sfx(S.big?"levelup":"bloom"),n.burst(t.things.mail.pos,[16770688,16751288,10148095],S.big?60:24,1.2),u.log(`Presente do dia ${e.daily.streak}: ${N?N+" moedas":""}${N&&S.adubo?" e ":""}${S.adubo?S.adubo+" adubo":""}.`),c(),{streak:e.daily.streak,coins:N,adubo:S.adubo||0}};let _=d(70,130),b=d(120,200),L=S=>Object.keys(S).length,R=()=>{let S=Object.keys(e.plants).filter(N=>!e.weeds[N]&&["bed","pot","tree","veg"].includes(t.spots[N].type));S.length&&L(e.weeds)<4&&(e.weeds[f(S)]=1)},I=()=>{let S=Object.keys(e.plants).filter(N=>{let H=e.plants[N],F=ht[H.sp];return!e.wilt[N]&&!H.ready&&H.grown>=F.grow&&!F.tree&&!F.foliage&&t.spots[N].type!=="pond"});S.length&&L(e.wilt)<3&&(e.wilt[f(S)]=1)},B=2,w=()=>{for(let S of ia)if(!e.ach[S.id]&&S.v(e,i)>=S.goal){e.ach[S.id]=1,o(S.r),s.sfx("levelup",.8),h.achievement(S),u.log(`Conquista: ${S.name}.`),c();break}};return u.tick=S=>{if(e.stats.collected>0&&e.orders.length<3&&Date.now()>=(e.orderT||0)){let H=y();H&&(e.orders.push(H),e.orders.length===1&&!e.tips.order&&(e.tips.order=1,h.toast("Chegou um pedido na banquinha de flores!","info"))),e.orderT=Date.now()+12*6e4}_-=S,_<0&&(_=d(150,260),R()),b-=S,b<0&&(b=d(200,320),I()),B-=S,B<0&&(B=1.5,w());let N=u.season();e.seasonsSeen.includes(N.id)||(e.seasonsSeen.push(N.id),e.seasonsSeen.length>1&&(h.toast(`Chegou ${N.id===1||N.id===2||N.id===3?"o":"a"} ${N.name.toLowerCase()}! ${N.line}`,"good"),u.log(`Come\xE7ou ${N.name.toLowerCase()}.`)))},u.init=S=>{for(let N in e.weeds)e.plants[N]||delete e.weeds[N];for(let N in e.wilt)e.plants[N]||delete e.wilt[N];for(let N=0;N<(S>8*3600?3:S>3*3600?2:S>1800?1:0);N++)R();if(S>1800)for(;e.stats.collected>0&&e.orders.length<3;){let N=y();if(!N)break;e.orders.push(N)}},i.sys=u,u}var Yc="jardim-do-sossego-v1",ev=2*3600,tr=[0,60,180,380,680,1100,1650,2350,3200,4200,5400,6800,8500,10500,13e3,16e3,2e4,25e3],Zc=[{id:"can1",name:"Regador de cobre",price:450,desc:"Rega uma \xE1rea maior de uma s\xF3 vez.",need:null},{id:"can2",name:"Regador dourado",price:1800,desc:"Rega longe e a \xE1gua dura o dobro.",need:"can1"},{id:"sprinkler",name:"Aspersores autom\xE1ticos",price:7500,desc:"O jardim inteiro se rega sozinho.",need:"can2"}],sa={dress:{name:"Vestido",price:200,opts:[["salvia","Verde-s\xE1lvia",8364170],["ceu","Azul-c\xE9u",8366280],["rosa","Rosa-antigo",14195364],["manteiga","Amarelo-manteiga",15257466],["lilas","Lil\xE1s",11048136],["cereja","Cereja",13127754]]},ribbon:{name:"Fita do chap\xE9u",price:120,opts:[["coral","Coral",15233898],["azul","Azul",5933768],["sol","Amarelo",15910986],["lilas","Lil\xE1s",10123976],["branca","Branca",16446700]]},boots:{name:"Galochas",price:150,opts:[["mostarda","Mostarda",14656828],["vermelha","Vermelhas",14174266],["verde","Verdes",5937754],["azul","Azuis",4881080],["rosa","Rosa",15239848]]},wall:{name:"Paredes da casa",price:400,house:!0,opts:[["creme","Creme",16182489],["amarela","Amarelinha",16245664],["rosa","Rosada",15911106],["azul","Azul-clarinha",13623530],["verde","Verde-clarinha",13952712]]},trim:{name:"Porta e janelas",price:300,house:!0,opts:[["mar","Verde-mar",6262666,7312296],["vermelha","Vermelhas",12077114,11032650],["marinho","Azul-marinho",4153226,4876952],["sol","Amarelas",14198842,13146682],["lilas","Lilases",9071272,10123960]]},fence:{name:"Cerca",price:350,house:!0,opts:[["branca","Branca",15986146],["madeira","Madeira",12159582],["verde","Verde-menta",11061416],["azul","Azul-claro",11585756]]}},D0=["","Brotinho","Crescendo","Em bot\xE3o","Em flor"],tv=[{t:"Plante sua primeira flor",goal:1,v:i=>i.stats.planted,r:15},{t:"Regue a plantinha para ela brotar",goal:1,v:i=>i.stats.watered,r:10},{t:"Plante 3 flores no canteiro",goal:3,v:(i,e)=>e.count(),r:20},{t:"Veja uma flor desabrochar",goal:1,v:i=>i.stats.blooms,r:25},{t:"Recolha o presente de uma flor",goal:1,v:i=>i.stats.collected,r:20},{t:"Abra a caixa de correio azul",goal:1,v:i=>i.daily.streak,r:15},{t:"Tenha 8 plantas no jardim",goal:8,v:(i,e)=>e.count(),r:30},{t:"Entregue um pedido na banquinha de flores",goal:1,v:i=>i.stats.orders||0,r:30},{t:"Abra a Varanda",goal:1,v:i=>+i.zones.includes(1),r:40},{t:"Plante num vaso suspenso",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="hang"),r:30},{t:"Abra a Horta",goal:1,v:i=>+i.zones.includes(7),r:40},{t:"Plante uma hortali\xE7a",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="veg"),r:30},{t:"Tenha 3 esp\xE9cies diferentes em flor",goal:3,v:(i,e)=>e.bloomSpecies(),r:40},{t:"Compre uma decora\xE7\xE3o na loja",goal:1,v:i=>i.decor.length,r:40},{t:"Abra os Canteiros do leste",goal:1,v:i=>+i.zones.includes(2),r:60},{t:"Plante uma \xE1rvore",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="tree"),r:60},{t:"Tenha 12 plantas em flor ao mesmo tempo",goal:12,v:(i,e)=>e.blooming(),r:80},{t:"Abra o Laguinho",goal:1,v:i=>+i.zones.includes(3),r:100},{t:"Plante uma ninfeia no lago",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="pond"),r:60},{t:"\xC1lbum: veja 12 esp\xE9cies florirem",goal:12,v:i=>i.album.length,r:120},{t:"Abra a Alameda dos arcos",goal:1,v:i=>+i.zones.includes(4),r:150},{t:"Cubra um arco com uma trepadeira em flor",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="arch"&&t.grown>=ht[t.sp].grow),r:150},{t:"Descubra uma raridade (veja o \xE1lbum)",goal:1,v:i=>i.hybrids.length,r:200},{t:"Tenha 30 plantas em flor",goal:30,v:(i,e)=>e.blooming(),r:200},{t:"Abra o Pomar",goal:1,v:i=>+i.zones.includes(5),r:200},{t:"Tenha 3 \xE1rvores em flor",goal:3,v:(i,e)=>e.count((t,n)=>n.type==="tree"&&t.grown>=ht[t.sp].grow),r:250},{t:"Abra o Prado das flores",goal:1,v:i=>+i.zones.includes(6),r:300},{t:"\xC1lbum: veja 30 esp\xE9cies florirem",goal:30,v:i=>i.album.length,r:400},{t:"Tenha 60 plantas em flor",goal:60,v:(i,e)=>e.blooming(),r:600},{t:"Construa a Estufa",goal:1,v:i=>+i.zones.includes(8),r:500},{t:"Complete o \xE1lbum de flores",goal:un.length,v:i=>i.album.length,r:1e3}],er=()=>({v:1,coins:45,xp:0,zones:[0],decor:[],upg:[],plants:{},quest:0,album:[],stats:{planted:0,watered:0,collected:0,blooms:0,orders:0,weeds:0,prunes:0,fert:0},hour:8.6,last:Date.now(),t0:Date.now(),tips:{},style:{own:[]},basket:{},orders:[],orderT:0,adubo:0,daily:{last:"",streak:0,best:0},weeds:{},wilt:{},ach:{},log:[],hybrids:[],seen:[],seasonsSeen:[],rare:{},paint:{},outfit:{},settings:{music:.6,sfx:.8,quality:"auto",time:"auto"}});function U0(){let i=e=>Object.assign(er(),e,{settings:Object.assign(er().settings,e.settings),stats:Object.assign(er().stats,e.stats),daily:Object.assign(er().daily,e.daily)});try{let e=localStorage.getItem(Yc);if(e){let t=JSON.parse(e);if(t&&t.v===1)return i(t)}}catch{}try{let e=window.__SAVE;if(e&&e.v===1)return i(JSON.parse(JSON.stringify(e)))}catch{}return er()}function z0({scene:i,world:e,fx:t,audio:n,gardener:s,nav:a,env:h,ui:o,state:l}){let r={state:l,tasks:[],cur:null,time:0,rainT:240+Math.random()*200,raining:0},c=l,u={},d=T0(),f={water:new Tn({map:d.water,depthTest:!1,transparent:!0}),gift:new Tn({map:d.gift,depthTest:!1,transparent:!0}),weed:new Tn({map:d.weed,depthTest:!1,transparent:!0}),prune:new Tn({map:d.prune,depthTest:!1,transparent:!0}),seed:new Tn({map:d.seed,depthTest:!1,transparent:!0}),order:new Tn({map:d.order,depthTest:!1,transparent:!0}),daily:new Tn({map:d.daily,depthTest:!1,transparent:!0}),plus:new Tn({map:d.plus,transparent:!0,opacity:.85,depthWrite:!1})},g=new de(7032378),v=new de(3811358);r.save=()=>{c.last=Date.now();try{localStorage.setItem(Yc,JSON.stringify(c))}catch{}};let m=()=>r.save();r.reset=()=>{try{localStorage.removeItem(Yc)}catch{}};let p=()=>{let O=1;for(;O<tr.length&&c.xp>=tr[O];)O++;return O};r.level=p;let y=O=>c.upg.includes(O),_=()=>ev*(y("can2")?2:1),b=()=>y("can2")?3.3:y("can1")?2.2:1.35,L=O=>{let G=O.grown/ht[O.sp].grow;return G>=1?4:G>=.45?3:G>=.12?2:1};r.count=O=>{let G=0;for(let M in c.plants)(!O||O(c.plants[M],e.spots[M]))&&G++;return G},r.blooming=()=>r.count(O=>O.grown>=ht[O.sp].grow),r.bloomSpecies=()=>{let O=new Set;for(let G in c.plants){let M=c.plants[G];M.grown>=ht[M.sp].grow&&O.add(M.sp)}return O.size},r.beauty=()=>{let O=0;for(let G in c.plants){let M=c.plants[G],P=ht[M.sp];O+=Math.round(P.price*(M.grown>=P.grow?.5:.12))}for(let G of c.decor)O+=ea.find(M=>M.id===G)?.beauty??0;return O};let R=(O,G)=>{let M=new Ws(O);return M.scale.setScalar(G),M.renderOrder=10,M.visible=!1,i.add(M),M};for(let O of e.spots){let G=O.type==="hang"?-.02:O.type==="tree"?.5:O.type==="arch"?1.1:.3;u[O.id]={mesh:null,stage:0,pop:1,droop:0,plus:R(f.plus,O.type==="window"?.2:.3),bubble:R(f.water,.42),top:G},u[O.id].plus.position.copy(O.pos).y+=G,O.type==="arch"&&(u[O.id].plus.position.x-=.75)}let I=O=>{let G=u[O.id],M=c.plants[O.id];if(G.mesh&&(i.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh.material.dispose(),G.mesh=null),!M){G.stage=0;return}let P=ht[M.sp],q=L(M),ie=new Le(Uo(M.sp,M.seed,q),zo(M.sp));ie.castShadow=!0,ie.receiveShadow=!0,ie.position.copy(O.pos),P.fixedRot||(ie.rotation.y=M.seed*1.7),i.add(ie),G.mesh=ie,G.stage=q,G.h=P.h*O.scale*(P.tree?[0,.15,.5,.8,1][q]:[0,.15,.6,.9,1][q])},B=(()=>{let O=new Wt,G=Jt(91);for(let M=0;M<7;M++)O.petal(re(pe(M*.9+G()),fe(G.range(.25,.95))),{L:G.range(.1,.19),W:.035,a:.7,b:.5,fold:.4,curl:.5,ruffle:.25,rf:4,nu:4,nv:2,cols:[x(6195758),x(8826940),x(11979866)]});O.tube(null,[new V(0,0,0),new V(.01,.09,0),new V(.02,.17,.01)],.004,.003,x(8826940),x(10272842),4);for(let M=0;M<9;M++)O.petal(re(se(.02,.17,.01),pe(M*.7),fe(1.2)),{L:.03,W:.012,nu:2,nv:1,cols:[x(15909406),x(16241210),x(16507754)]});return O.build()})(),w=si({sway:.6}),S=(O,G)=>{let M=u[O];if(G&&!M.weed){let P=e.spots[O],q=new Le(B,w);q.castShadow=!0;let ie=O*2.4,le=P.type==="tree"?.5:P.type==="pot"?.2:.27;q.position.set(P.pos.x+Math.cos(ie)*le,P.pos.y,P.pos.z+Math.sin(ie)*le),q.rotation.y=ie,q.scale.setScalar(.01),i.add(q),M.weed=q}else!G&&M.weed&&(i.remove(M.weed),M.weed=null)},N={};for(let O in e.things){let G=e.things[O],M=R(O==="orders"?f.order:f.daily,.5);M.position.set(G.pos.x,G.top+.25,G.pos.z),N[O]=M}let H=(O,G)=>G.type==="green"?0:O.thirst??1,F=(O,G)=>O.season!=null&&G.type!=="green"&&O.season!==r.sys.season().id,T=(O,G)=>{c.coins+=O,G&&o.floatText(G,(O>0?"+":"")+O,"coin"),o.hud()},C=O=>{let G=p();c.xp+=O;let M=p();M>G&&(n.sfx("levelup"),s.play("cheer",1.6),t.burst(s.group.position,[16770688,16751288,10148095,12120224],50),o.levelUp(M,un.filter(P=>P.lvl>G&&P.lvl<=M))),o.hud()},E=()=>{let O=tv[c.quest];if(!O){o.quest(null);return}let G=Math.min(O.goal,O.v(c,r));if(G>=O.goal){c.quest++,T(O.r),n.sfx("buy"),o.toast(`Miss\xE3o cumprida! +${O.r} moedas`,"good"),E(),m();return}o.quest({text:O.t,val:G,goal:O.goal,reward:O.r})};r.checkQuest=E;let A=(O,G)=>{let M=s.group.position;return a.path(M.x,M.z,O,G)},D=(O,G,M={})=>{r.tasks.some(P=>P.kind===O&&P.spot===G)||r.cur&&r.cur.kind===O&&r.cur.spot===G||r.tasks.length>=8||r.tasks.push({kind:O,spot:G,...M})},U=()=>{for(let O of r.tasks)O.kind==="plant"&&(c.coins+=ht[O.sp].price,O.spot.pending=null);r.tasks.length=0,o.hud()};r.tapGround=(O,G)=>{U(),!(r.cur&&r.cur.phase==="act")&&(r.cur&&r.cur.kind==="plant"&&(c.coins+=ht[r.cur.sp].price,r.cur.spot.pending=null,o.hud()),r.cur={kind:"move",path:A(O,G),phase:"walk"},o.closeCards())},r.tapSpot=O=>{if(!c.zones.includes(O.zone)){r.offerZone(O.zone);return}let G=c.plants[O.id];if(!G){if(O.pending)return;n.sfx("click",.35),o.picker(O,W(O));return}let M=ht[G.sp];G.ready||c.rare[O.id]?(D("collect",O),o.closeCards()):c.wilt[O.id]?(D("prune",O),o.closeCards()):c.weeds[O.id]?(D("weed",O),o.closeCards()):H(M,O)!==0&&G.wet<_()*.4&&!y("sprinkler")?(D("water",O),o.closeCards()):(n.sfx("click",.35),r.showCard(O),D("admire",O))},r.showCard=O=>{c.plants[O.id]&&o.plantCard(O,()=>{let M=c.plants[O.id];if(!M)return null;let P=ht[M.sp];return{sp:P,stage:L(M),grow:He(M.grown/P.grow,0,1),water:H(P,O)===0?1:He(M.wet/_(),0,1),noWater:H(P,O)===0,green:O.type==="green",gift:M.grown>=P.grow?He(M.giftT/P.every,0,1):0,ready:M.ready,left:Math.max(0,P.grow-M.grown),adubo:c.adubo,inSeason:r.sys.inSeason(P),weed:!!c.weeds[O.id]}},{water:()=>D("water",O),remove:()=>D("remove",O),fert:()=>r.fertilize(O)})};let z=(O,G)=>O.spots.includes(G.type)||G.type==="green"&&O.spots.includes("pot"),W=O=>un.filter(G=>z(G,O)&&(!G.hybrid||c.hybrids.includes(G.id))).map(G=>({sp:G,locked:G.lvl>p(),off:F(G,O),afford:c.coins>=G.price}));r.choose=(O,G)=>{let M=ht[G];return M.lvl>p()?(n.sfx("error"),o.toast(`${M.name} chega no n\xEDvel ${M.lvl}`,"warn"),!1):F(M,O)?(n.sfx("error"),o.toast(`${M.name} s\xF3 nasce ${["na primavera","no ver\xE3o","no outono","no inverno"][M.season]} (ou na estufa)`,"warn"),!1):c.coins<M.price?(n.sfx("error"),o.toast("Faltam moedas. Recolha os presentes das flores!","warn"),!1):c.plants[O.id]||O.pending?!1:(c.coins-=M.price,O.pending=G,o.hud(),n.sfx("buy",.7),D("plant",O,{sp:G}),H(M,O)!==0&&!y("sprinkler")&&D("water",O),!0)},r.offerZone=O=>{let G=ai[O];c.zones.includes(O)||o.zoneOffer(G,c.coins>=G.cost,()=>{if(c.coins<G.cost){n.sfx("error"),o.toast(`Faltam ${G.cost-c.coins} moedas para abrir ${G.name}`,"warn");return}c.coins-=G.cost,c.zones.push(O),e.setZone(O,!0),e.mowZone(O),a.invalidate(),n.sfx("expand");let[M,P]=G.tag;t.burst(new V(M,.3,P),[16770688,12120224,16777215,16762584],70,2.2),o.toast(`${G.name} agora faz parte do seu jardim!`,"good"),o.hud(),C(20+O*10),E(),m(),Y(),o.focus(M,P)})},r.buyDecor=O=>{let G=ea.find(M=>M.id===O);if(!(!G||c.decor.includes(O))){if(c.coins<G.price){n.sfx("error"),o.toast("Faltam moedas para esta decora\xE7\xE3o","warn");return}c.coins-=G.price,c.decor.push(O),e.setDecor(O,!0),a.invalidate(),n.sfx("buy"),o.toast(`${G.name} colocado no jardim`,"good"),C(15),o.hud(),E(),m()}},r.buyUpgrade=O=>{let G=Zc.find(M=>M.id===O);if(!(!G||y(O))){if(G.need&&!y(G.need)){n.sfx("error"),o.toast("Compre a melhoria anterior primeiro","warn");return}if(c.coins<G.price){n.sfx("error"),o.toast("Faltam moedas para esta melhoria","warn");return}c.coins-=G.price,c.upg.push(O),n.sfx("levelup"),o.toast(`${G.name}: ${G.desc}`,"good"),o.hud(),m()}};let Y=()=>{for(let O of e.spots)u[O.id].plus.visible=c.zones.includes(O.zone)&&!c.plants[O.id]&&!O.pending},$=O=>{let G=b(),M=_(),P=0;for(let q in c.plants){let ie=e.spots[q];if(ie.pos.distanceTo(O.pos)<=G+.01&&Math.abs(ie.pos.y-O.pos.y)<1.2){let le=c.plants[q];if(H(ht[le.sp],ie)===0)continue;le.wet=M,P++,t.splash(ie.pos,5)}}c.stats.watered+=Math.max(1,P),C(1),E()},K=O=>{let G=O.spot;G.pending=null,c.plants[G.id]={sp:O.sp,seed:1+Math.floor(Math.random()*9999),grown:0,wet:0,giftT:0,ready:!1},c.stats.planted++,I(G),u[G.id].pop=0,t.dust(G.pos,12),n.sfx("plant"),C(3),E(),Y(),m()},ae=O=>{let G=0;for(let M in c.rare){let P=e.spots[M];!P||P.pos.distanceTo(O.pos)>Math.max(1.4,b())+.01||r.sys.takeRare&&r.sys.takeRare(M)}for(let M in c.plants){let P=e.spots[M],q=c.plants[M];if(!q.ready||P.pos.distanceTo(O.pos)>Math.max(1.4,b())+.01)continue;let ie=ht[q.sp],le=Math.round(ie.gift*r.sys.giftMul(ie));q.ready=!1,q.giftT=0,G+=le,c.stats.collected++,c.basket[q.sp]=Math.min(99,(c.basket[q.sp]||0)+1);let ce=P.pos.clone();ce.y+=u[M].h*.7+.2,t.sparkle(ce,12),o.floatText(ce,"+"+le,"coin"),r.sys.afterGift&&r.sys.afterGift(M)}G&&(c.coins+=G,n.sfx("coin",.6),C(Math.ceil(G/3)),o.hud(),E(),m())},J=O=>{if(!c.weeds[O.id])return;delete c.weeds[O.id],c.stats.weeds=(c.stats.weeds||0)+1,t.dust(u[O.id].weed?u[O.id].weed.position:O.pos,10),n.sfx("plant",.7,1.25);let G=O.pos.clone();G.y+=.4,c.coins+=3,o.floatText(G,"+3","coin"),C(2),o.hud()},ue=O=>{let G=c.plants[O.id];if(!G||!c.wilt[O.id])return;delete c.wilt[O.id],c.stats.prunes=(c.stats.prunes||0)+1;let M=ht[G.sp],P=Math.round(M.gift*1.5*r.sys.giftMul(M));G.giftT=0,c.coins+=P,c.basket[G.sp]=Math.min(99,(c.basket[G.sp]||0)+2),c.stats.collected++;let q=O.pos.clone();q.y+=u[O.id].h*.7+.2,t.sparkle(q,18,16765152),o.floatText(q,"+"+P,"coin"),n.sfx("coin",.6,1.15),C(Math.ceil(P/3)),o.hud(),r.sys.afterGift(O.id),m()};r.fertilize=O=>{let G=c.plants[O.id];if(!G||c.adubo<1)return;let M=ht[G.sp];if(G.grown>=M.grow){o.toast("Esta planta j\xE1 est\xE1 adulta","info");return}c.adubo--,c.stats.fert=(c.stats.fert||0)+1,G.grown=Math.min(M.grow,G.grown+M.grow*.25);let P=O.pos.clone();P.y+=.3,t.sparkle(P,20,12120202,.3),n.sfx("bloom",.6,1.2),C(2),m()},r.tapThing=O=>{n.sfx("click",.35),O==="orders"?o.orders():O==="mail"?o.daily():O==="eliane"?o.style("roupas"):O==="house"&&o.style("casa")};let Te=O=>{let G=sa[O].opts;return G.find(M=>M[0]===c.style[O])||G[0]};r.applyStyle=()=>{s.setOutfit({dress:Te("dress")[2],ribbon:Te("ribbon")[2],boots:Te("boots")[2]});let O=Te("trim"),G=[Te("wall")[0],O[0],Te("fence")[0]].join();r._painted!==G&&((r._painted||G!=="creme,mar,branca")&&(e.paintHouse({wall:Te("wall")[2],door:O[2],shut:O[3]}),e.paintFence(Te("fence")[2])),r._painted=G)},r.pickStyle=(O,G)=>{let M=sa[O],P=M.opts.find(ie=>ie[0]===G);if(!P)return!1;if(G===M.opts[0][0]||c.style.own.includes(O+":"+G))n.sfx("click",.5);else{if(c.coins<M.price)return n.sfx("error"),o.toast(`Faltam ${M.price-c.coins} moedas para esta cor`,"warn"),!1;c.coins-=M.price,c.style.own.push(O+":"+G),n.sfx("buy"),t.burst(s.group.position,[P[2],16777215,16770688],26,1),o.hud()}return c.style[O]=G,r.applyStyle(),M.house||s.play("cheer",1.2),m(),!0};let Be=O=>{delete c.weeds[O.id],delete c.wilt[O.id],delete c.rare[O.id],delete c.plants[O.id],I(O),t.dust(O.pos,14),n.sfx("plant",.8,.8),Y(),o.closeCards(),E(),m()},Ie={water:2.1,plant:1.9,collect:1.1,admire:1.6,remove:1.7,weed:1.5,prune:1.2},Ze=()=>{let O=r.tasks.shift();if(!O){r.cur=null;return}if(O.kind!=="plant"&&!c.plants[O.spot.id]||O.kind==="collect"&&!c.plants[O.spot.id].ready&&!c.rare[O.spot.id]||O.kind==="weed"&&!c.weeds[O.spot.id]||O.kind==="prune"&&!c.wilt[O.spot.id])return Ze();O.path=A(O.spot.stand.x,O.spot.stand.z),O.phase="walk",r.cur=O},j=0,Ht=0,Ne=0,Xe=0,oe=0;return s.onStep=()=>{n.sfx("step",.3,(oe^=1)?1:1.12)},r.update=O=>{r.time+=O;let G=s.group.position,M=r.cur;if(!M)s.state==="walk"&&s.stop(),s.speed=0,Ze();else if(M.phase==="walk"){let ee=M.path[0];if(!ee)s.speed=0,M.kind==="move"?(s.stop(),r.cur=null):(M.phase="act",M.t=0,M.done=!1,s.faceTo(M.spot.pos.x+(M.spot.type==="arch"?-.75:0),M.spot.pos.z),s.play(M.kind==="remove"||M.kind==="weed"?"plant":M.kind==="prune"?"collect":M.kind,Ie[M.kind],{high:M.spot.high||M.spot.type==="arch"&&M.kind==="water"&&!1}),M.kind==="water"&&n.sfx("water"));else{let Ce=ee[0]-G.x,Fe=ee[1]-G.z,Re=Math.hypot(Ce,Fe),_e=Re;for(let Ye=1;Ye<M.path.length;Ye++)_e+=Math.hypot(M.path[Ye][0]-M.path[Ye-1][0],M.path[Ye][1]-M.path[Ye-1][1]);let Se=He(_e*2.2+.7,.9,_e>6?3.5:2.5);s.speed+=(Se-s.speed)*Math.min(1,O*6),s.state="walk";let Ve=s.speed*O;Re<=Ve?(G.x=ee[0],G.z=ee[1],M.path.shift()):(G.x+=Ce/Re*Ve,G.z+=Fe/Re*Ve,s.targetHeading=Math.atan2(Ce,Fe))}}else if(M.phase==="act"){M.t+=O;let ee=M.t/Ie[M.kind],Ce=M.spot.pos;M.kind==="water"?(ee>.26&&ee<.84&&t.water(s.spoutWorld,M.spot.type==="arch"?new V(Ce.x-.75,.1,Ce.z):Ce,3),!M.done&&ee>.5&&(M.done=!0,$(M.spot))):M.kind==="plant"?!M.done&&ee>.55&&(M.done=!0,K(M)):M.kind==="remove"?!M.done&&ee>.55&&(M.done=!0,Be(M.spot)):M.kind==="collect"?!M.done&&ee>.45&&(M.done=!0,ae(M.spot)):M.kind==="weed"?!M.done&&ee>.55&&(M.done=!0,J(M.spot)):M.kind==="prune"?!M.done&&ee>.5&&(M.done=!0,ue(M.spot)):M.kind==="admire"&&!M.done&&ee>.4&&(M.done=!0,t.hearts(new V(G.x,1.7,G.z),4)),ee>=1&&(r.cur=null)}G.y=Vc(G.x,G.z);let P=c.settings.time;if(P==="auto")c.hour=(c.hour+O*(c.hour>6&&c.hour<19?13/540:11/150))%24;else if(P!=="fixo"){let Ce={dia:10,tarde:17.3,noite:22}[P]-c.hour;Ce>12&&(Ce-=24),Ce<-12&&(Ce+=24),c.hour=(c.hour+Ce*Math.min(1,O*.8)+24)%24}if(r.rainT-=O,r.rainT<0&&r.rainT>-50){if(r.rainOn||(r.rainOn=!0,r.count()>0&&o.toast("Uma chuvinha! As plantas agradecem.","info")),r.raining=Math.min(1,r.raining+O*.3),r.raining>.6)for(let ee in c.plants)c.plants[ee].wet=Math.max(c.plants[ee].wet,_()*.9)}else r.raining=Math.max(0,r.raining-O*.25),r.rainT<=-50&&(r.rainT=420+Math.random()*300,r.rainOn=!1);t.rain=r.raining;let q=y("sprinkler"),ie=_(),le=c.stats.blooms===0?8:1,ce=c.stats.collected===0?12:1,we=t.butterflyTargets;we.length=0;let xe=0;for(let ee in c.plants){let Ce=c.plants[ee],Fe=ht[Ce.sp],Re=e.spots[ee],_e=u[ee],Se=H(Fe,Re);q&&(Ce.wet=ie);let Ve=Se===0||Ce.wet>0;Se>0&&(Ce.wet=Math.max(0,Ce.wet-O*Se)),Ve&&(Ce.grown<Fe.grow?Ce.grown=Math.min(Fe.grow,Ce.grown+O*le*r.sys.growMul(ee,Fe)):Ce.ready||(Ce.giftT+=O*ce,Ce.giftT>=Fe.every&&(Ce.ready=!0,n.sfx("pop",.35,1.3))));let Ye=L(Ce);if(!_e.mesh||Ye!==_e.stage){let Mt=_e.mesh&&Ye>_e.stage;if(I(Re),Mt){u[ee].pop=0;let xt=Re.pos.clone();xt.y+=u[ee].h*.6,Ye===4?(n.sfx("bloom"),t.sparkle(xt,26,16773280,.4*Re.scale),c.stats.blooms++,c.album.includes(Ce.sp)||(c.album.push(Ce.sp),o.toast(`Nova flor no \xE1lbum: ${Fe.name}`,"good")),C(8),!r.cur&&s.state==="idle"&&s.play("cheer",1.4),m()):(n.sfx("pop",.6),t.sparkle(xt,8,14221232,.25)),Ht=0}}_e.pop=Math.min(1,_e.pop+O*1.6);let Dt=Ce.grown/Fe.grow,je=[0,0,.12,.45,1][Ye],me=[0,.12,.45,1,1][Ye],X=me>je?(Dt-je)/(me-je):1,ve=Re.scale*be(.82,1,X)*(.55+.45*x0(_e.pop));_e.mesh.scale.setScalar(ve);let ye=Ve?0:.85;_e.droop+=(ye-_e.droop)*Math.min(1,O*1.5),_e.mesh.material.userData.u.uDroop.value=_e.droop,Re.soil&&Re.soil.material.color.copy(g).lerp(v,Se===0?1:He(Ce.wet/ie*2,0,1));let ke=c.rare[ee]?"seed":Ce.ready?"gift":c.wilt[ee]?"prune":c.weeds[ee]?"weed":Ve?null:"water",De=_e.bubble;S(ee,!!c.weeds[ee]),_e.weed&&_e.weed.scale.setScalar(Math.min(1,_e.weed.scale.x+O*2)*1),ke?(De.visible=!0,De.material=f[ke],De.position.copy(Re.pos),De.position.y+=Math.max(.5,_e.h+.25)+Math.sin(r.time*2.4+Re.id)*.04,Re.type==="arch"&&(De.position.y=2.6)):De.visible=!1,Ye===4&&(xe++,!Fe.tree&&!Fe.climber&&we.length<24&&we.push({x:Re.pos.x,y:Re.pos.y+_e.h*.85,z:Re.pos.z}),Fe.petal&&Math.random()<O*1.6&&t.petalFall(new V(Re.pos.x,Re.pos.y+3.2,Re.pos.z),Fe.petal,1.6))}for(let ee of e.spots){c.plants[ee.id]||(u[ee.id].bubble.visible=!1,u[ee.id].weed&&S(ee.id,!1),ee.soil&&!ee.pending&&ee.soil.material.color.lerp(g,O));let Ce=u[ee.id].plus;Ce.visible&&(Ce.material.opacity=.7+.2*Math.sin(r.time*2))}t.butterflyCount=Math.min(9,Math.floor(xe/2)+(xe>0?1:0));let Ae=N.orders,Oe=N.mail,Je=Math.sin(r.time*2.4)*.04;if(Ae&&(Ae.visible=r.sys.anyDeliverable(),Ae.position.y=e.things.orders.top+.25+Je),Oe){let ee=r.sys.dailyReady();Oe.visible=ee,Oe.position.y=e.things.mail.top+.25+Je,e.mailFlag&&(e.mailFlag.rotation.x+=((ee?0:-1.5)-e.mailFlag.rotation.x)*Math.min(1,O*4))}r.sys.tick(O),Ht-=O,Ht<0&&(Ht=1,E()),j+=O,j>10&&(j=0,m())},r.init=()=>{for(let G of ai)e.setZone(G.id,c.zones.includes(G.id));for(let G of ea)e.setDecor(G.id,c.decor.includes(G.id));let O=He((Date.now()-(c.last||Date.now()))/1e3,0,48*3600);for(let G in c.plants){let M=c.plants[G],P=ht[M.sp];if(!P||!e.spots[G]){delete c.plants[G];continue}let q=H(P,e.spots[G]),ie=q===0||y("sprinkler")?O:Math.min(O,M.wet/q),le=r.sys.growMul(G,P),ce=Math.min(ie,Math.max(0,P.grow-M.grown)/le);M.grown=Math.min(P.grow,M.grown+ce*le),M.grown>=P.grow&&(c.album.includes(M.sp)||c.album.push(M.sp),M.giftT+=ie-ce,M.giftT>=P.every&&(M.ready=!0,M.giftT=P.every)),q>0&&(M.wet=Math.max(0,M.wet-O*q)),I(e.spots[G])}r.away=O,r.sys.init(O),(!c.style||!c.style.own)&&(c.style={own:[]}),r.applyStyle(),Y(),o.hud(),E()},r.zoneAt=Ya,r.refreshMarkers=Y,r.rebuild=I,r.V=u,I0(r,{S:c,world:e,fx:t,audio:n,gardener:s,ui:o,scene:i,addCoins:T,addXp:C,level:p,save:m}),r}var cs=V,aa=[{id:"borboleta",name:"Borboletas",hint:"Aparecem quando h\xE1 flores abertas."},{id:"abelha",name:"Abelhas",hint:"Adoram lavanda, alecrim, s\xE1lvia e girassol em flor."},{id:"joaninha",name:"Joaninha",hint:"Passeia quando o jardim tem pelo menos seis plantas."},{id:"beija_flor",name:"Beija-flor",hint:"Vem beber no hibisco, na s\xE1lvia, na dedaleira ou no brinco-de-princesa."},{id:"passarinho",name:"Sabi\xE1",hint:"Pousa onde h\xE1 banho de passarinho ou casinha."},{id:"sapo",name:"Sapinho",hint:"Mora no laguinho quando h\xE1 flor na \xE1gua."},{id:"libelula",name:"Lib\xE9lula",hint:"Sobrevoa o lago quando h\xE1 duas plantas aqu\xE1ticas."},{id:"caracol",name:"Caracol",hint:"Sai para passear depois da chuva."},{id:"gato",name:"Gato",hint:"Vem cochilar na varanda de um jardim com banco e muitas flores."},{id:"vagalume",name:"Vaga-lumes",hint:"Piscam nas noites do jardim."}],nv=["lavanda","lavanda_branca","alecrim","salvia","girassol","girassol_rubro","manjericao","hortela","alho_ornamental"],iv=["hibisco","salvia","dedaleira","fucsia","estrelicia","heliconia","boca_de_leao","malva_rosa","madressilva"],dt=(i,e={})=>new kt({color:i,roughness:.6,...e}),pt=(i,e,t=1,n=1,s=1,a=0,h=0,o=0)=>{let l=new Le(new Pt(i,10,8),e);return l.scale.set(t,n,s),l.position.set(a,h,o),l.castShadow=!0,l},No=(i,e,t,n=.55)=>{let s=new Ti(1,10);return s.scale(i,e,1),s.translate(0,e,0),new Le(s,new en({color:t,transparent:!0,opacity:n,side:St,depthWrite:!1}))};function Jc(i){var t,n,s;let e=new Nt;if(e.userData.parts={},i==="abelha"){e.add(pt(.016,dt(15905822),1,.9,1.5),pt(.0165,dt(2760728),1.02,.92,.28,0,0,.004),pt(.0165,dt(2760728),1,.9,.24,0,0,-.012),pt(.011,dt(2760728),1,1,1,0,.002,.024));for(let a of[-1,1]){let h=No(.012,.014,16777215);h.rotation.set(-1.2,0,a*.9),h.position.set(a*.008,.012,0),e.add(h),((t=e.userData.parts).wings??(t.wings=[])).push(h)}}else if(i==="joaninha"){let a=new Le(new Pt(.022,12,8,0,Math.PI*2,0,Math.PI/2),dt(14166046,{roughness:.3}));a.castShadow=!0,e.add(a,pt(.011,dt(1710618),1,.8,1,0,.004,.02));for(let[h,o]of[[.009,.004],[-.009,.004],[.006,-.01],[-.006,-.01],[0,.012]])e.add(pt(.004,dt(1710618),1,.4,1,h,.0195-Math.hypot(h,o)*.35,o))}else if(i==="beija_flor"){e.add(pt(.022,dt(2792042,{roughness:.25,metalness:.4}),.9,.9,1.7),pt(.016,dt(3115696,{roughness:.25,metalness:.4}),1,1,1,0,.014,.034),pt(.015,dt(15789280),.8,.7,1.3,0,-.008,.012));let a=new Le(new ti(.003,.045,5),dt(2760728));a.rotation.x=Math.PI/2,a.position.set(0,.014,.07),e.add(a);let h=No(.012,.02,2058826,1);h.rotation.x=Math.PI/2+.3,h.position.set(0,0,-.03),h.scale.y=-1,e.add(h);for(let o of[-1,1]){let l=No(.014,.03,10148032,.5);l.rotation.set(-1.4,0,o*1.1),l.position.set(o*.012,.008,.004),e.add(l),((n=e.userData.parts).wings??(n.wings=[])).push(l)}}else if(i==="passarinho"){let a=dt(6968388),h=dt(14187066);e.add(pt(.05,a,.85,.85,1.25,0,.05,0),pt(.042,h,.78,.74,1,0,.04,.014),pt(.032,a,1,1,1,0,.095,.04));let o=new Le(new ti(.009,.03,5),dt(15249466));o.rotation.x=Math.PI/2,o.position.set(0,.093,.08),e.add(o);for(let r of[-1,1])e.add(pt(.005,dt(1710618),1,1,1,r*.018,.103,.062));let l=new Le(new Mn(.03,.008,.07),a);l.position.set(0,.06,-.085),l.rotation.x=.4,e.add(l);for(let r of[-1,1]){let c=new Le(new Zt(.003,.003,.03,4),dt(13146714));c.position.set(r*.015,.005,.005),e.add(c)}}else if(i==="sapo"){let a=dt(5941306,{roughness:.35});e.add(pt(.05,a,1.1,.7,1.25,0,.035,0),pt(.035,dt(13623450),.9,.5,.9,0,.022,.03));for(let h of[-1,1])e.add(pt(.016,a,1,1,1,h*.026,.068,.034),pt(.007,dt(1710618),1,1,.6,h*.028,.072,.047),pt(.022,a,1.4,.5,1.2,h*.05,.012,-.02),pt(.012,a,1,.5,1.6,h*.035,.008,.055))}else if(i==="libelula"){let a=new Le(new Zt(.004,.002,.09,6),dt(2788056,{metalness:.5,roughness:.3}));a.rotation.x=Math.PI/2,e.add(a,pt(.008,dt(2788056,{metalness:.5,roughness:.3}),1,1,1,0,0,.05));for(let h of[-1,1])for(let o of[.022,.004]){let l=No(.008,.028,14217471,.45);l.rotation.set(-Math.PI/2,0,h*1.45),l.position.set(h*.004,.004,o),e.add(l),((s=e.userData.parts).wings??(s.wings=[])).push(l)}}else if(i==="caracol"){e.add(pt(.018,dt(14207136),.7,.55,2.2,0,.01,.008),pt(.026,dt(12092234,{roughness:.4}),.75,1,1,0,.034,-.008),pt(.017,dt(14198890,{roughness:.4}),.8,1,1,0,.036,-.006));for(let a of[-1,1]){let h=new Le(new Zt(.0015,.0015,.022,4),dt(14207136));h.position.set(a*.007,.026,.044),h.rotation.x=.5,e.add(h,pt(.003,dt(2760728),1,1,1,a*.007,.037,.05))}}else if(i==="gato"){let a=dt(15243850,{roughness:.9}),h=dt(16312012,{roughness:.9}),o=pt(.17,a,1.25,.72,.9,0,.115,0);e.add(o,pt(.1,h,1,.6,.8,.07,.09,.05)),e.userData.parts.body=o;let l=new Nt;l.position.set(.2,.15,.04),l.add(pt(.085,a,1,.9,.95),pt(.04,h,1.2,.7,.8,.02,-.03,.055));for(let d of[-1,1]){let f=new Le(new ti(.03,.05,4),a);f.position.set(d*.05,.075,0),f.castShadow=!0,l.add(f);let g=new Le(new ni(.012,.003,4,8,Math.PI),dt(3811870));g.position.set(d*.03+.012,0,.08),g.rotation.z=Math.PI,l.add(g)}l.add(pt(.008,dt(15239818),1,.7,1,.02,-.022,.085)),l.rotation.y=.5,e.add(l),e.userData.parts.head=l;let r=new Wt,c=[];for(let d=0;d<=8;d++){let f=d/8;c.push(new cs(-.19-Math.sin(f*1.6)*.1,.06+f*.02,.05+f*.2))}r.tube(null,c,.026,.02,x(15243850),x(13138474),6,!0);let u=new Le(r.build(),dt(16777215,{vertexColors:!0,roughness:.9}));u.castShadow=!0,e.add(u),e.userData.parts.tail=u}else if(i==="borboleta"){let a=new Wt;for(let o of[-1,1])a.petal(re(mt(o*-1.15)),{L:.085,W:.075,a:1.5,b:.45,nu:3,nv:2,cols:[x(2760728),x(16228894),x(16503386)]}),a.petal(re(mt(o*-2.05)),{L:.06,W:.06,a:1.4,b:.45,nu:3,nv:2,cols:[x(2760728),x(16228894),x(16503386)]});let h=new Le(a.build(),new en({vertexColors:!0,side:St}));h.rotation.x=-.9,e.add(h)}else i==="vagalume"&&e.add(pt(.012,new en({color:15794058})),pt(.03,new en({color:15269754,transparent:!0,opacity:.35})),pt(.008,dt(3815978),1,1,1.6,0,.004,.014));return e}function N0(i,e,{S:t,G:n,env:s,fx:a,ui:h,audio:o}){let l={},r=e.pond,c=(B,w)=>B+Math.random()*(w-B),u=B=>B[Math.floor(Math.random()*B.length)],d=(B,w=1)=>{let S=[];for(let N=0;N<w;N++){let H=Jc(B);H.visible=!1,i.add(H),S.push({g:H,parts:H.userData.parts,pos:new cs(0,1,0),tgt:new cs(0,1,0),t:Math.random()*9,wait:0,seed:Math.random()*100})}l[B]=S};d("abelha",3),d("joaninha"),d("beija_flor"),d("passarinho"),d("sapo"),d("libelula"),d("caracol"),d("gato");let f=[],g=[],v=[],m=0,p=0,y=0,_=0,b={},L=()=>{f=[],g=[],v=[],m=0,p=0;for(let B in t.plants){let w=t.plants[B],S=ht[w.sp],N=e.spots[B],H=n.V[B];if(!S||!N||(N.type==="pond"&&(p++,w.grown>=S.grow&&m++),w.grown<S.grow))continue;let F=new cs(N.pos.x,N.pos.y+(H.h||.3)*.85,N.pos.z);nv.includes(w.sp)&&f.push(F),iv.includes(w.sp)&&g.push(F),!S.tree&&!S.climber&&N.type!=="pond"&&N.type!=="green"&&v.push({at:F,spot:N})}},R=(B,w,S)=>{if(!(!w||t.seen.includes(B))&&(b[B]=(b[B]||0)+S,b[B]>2.5)){t.seen.push(B);let N=aa.find(H=>H.id===B);o.sfx("bloom",.7,1.1),h.toast(`Novo visitante no jardim: ${N.name}!`,"good"),n.sys.log(`Recebi a visita de: ${N.name}.`),n.save()}},I=(B,w,S,N,H)=>{let F=B.tgt.clone().sub(B.pos),T=F.length();return T>.04&&(F.normalize(),B.pos.addScaledVector(F,Math.min(T,S*w*Math.min(1,T*3+.25))),B.g.rotation.y=Math.atan2(F.x,F.z)),B.g.position.copy(B.pos),B.g.position.x+=Math.sin(B.t*7+B.seed)*N,B.g.position.y+=Math.sin(B.t*9+B.seed*2)*N+(H?Math.sin(B.t*3)*.01:0),B.g.position.z+=Math.cos(B.t*6+B.seed)*N,T};return l.update=(B,w)=>{y-=B,y<0&&(y=1.2,L());let S=s.night<.5,N=a.rain<.3;a.rain>.6&&(_=300),_-=B;let H=S&&N&&f.length>0;l.abelha.forEach((F,T)=>{let C=H&&T<Math.min(3,f.length+1);if(C&&!F.g.visible&&(F.pos.set(c(-8,8),2.5,16),F.wait=0),F.g.visible=C,!C)return;if(F.t+=B,F.wait-=B,F.wait<=0){let A=u(f);F.tgt.set(A.x+c(-.08,.08),A.y+c(0,.06),A.z+c(-.08,.08)),F.wait=c(2,5)}I(F,B,1.3,.012,!0);let E=Math.sin(F.t*70)*.5;F.parts.wings[0].rotation.z=-.9+E,F.parts.wings[1].rotation.z=.9-E}),R("abelha",H,B);{let F=l.beija_flor[0],T=S&&N&&g.length>0;if(T&&!F.g.visible&&(F.pos.set(14,3,c(-4,10)),F.wait=0),F.g.visible=T,T){if(F.t+=B,F.wait-=B,F.wait<=0){let A=u(g),D=Math.random()*6.28;F.look=A,F.tgt.set(A.x+Math.cos(D)*.13,A.y+.03,A.z+Math.sin(D)*.13),F.wait=c(2.5,5.5)}I(F,B,3.2,.004,!0)<.06&&F.look&&(F.g.rotation.y=Math.atan2(F.look.x-F.pos.x,F.look.z-F.pos.z));let E=Math.sin(F.t*90)*.7;F.parts.wings[0].rotation.z=-1.1+E,F.parts.wings[1].rotation.z=1.1-E}R("beija_flor",T,B)}{let F=l.joaninha[0],T=S&&N&&v.length>0&&n.count()>=6;if(F.g.visible=T,T){F.t+=B,(!F.home||!t.plants[F.home.spot.id]||F.t>40)&&(F.home=u(v),F.t=0);let C=F.home.spot,E=F.t*.25+F.seed,A=C.type==="pot"?.2:.27;F.g.position.set(C.pos.x+Math.cos(E)*A,C.pos.y+.012,C.pos.z+Math.sin(E)*A),F.g.rotation.y=-E}R("joaninha",T,B)}{let F=l.passarinho[0],T=[];t.decor.includes("bebedouro")&&T.push(new cs(2.6+.36,.84,2.5)),t.decor.includes("casinha")&&T.push(new cs(4.6,2.56,-3.7));let C=S&&N&&T.length>0;if(C&&!F.g.visible&&(F.pos.set(-15,5,6),F.wait=0),F.g.visible=C,C){if(F.t+=B,F.wait-=B,F.wait<=0){F.wait=c(9,18);let D=Math.random()<.35;F.perch=D?null:u(T),F.tgt.copy(D?new cs(c(-11,11),.98,14.7):F.perch),F.hop=0}let E=F.tgt.clone().sub(F.pos),A=E.length();A>.05?(E.normalize(),F.pos.addScaledVector(E,Math.min(A,4.2*B)),F.g.rotation.set(0,Math.atan2(E.x,E.z),0),F.g.position.copy(F.pos),F.g.position.y+=Math.sin(Math.min(1,A/3)*Math.PI)*.6):(F.g.position.copy(F.pos),F.g.rotation.x=Math.max(0,Math.sin(F.t*2.2))>.92?.7:0,F.g.rotation.y+=Math.sin(F.t*.7)*B*.8)}R("passarinho",C,B)}{let F=l.sapo[0],T=t.zones.includes(3)&&m>0&&!!r;if(F.g.visible=T,T){F.t+=B;let A=.75;F.g.position.set(r.x+Math.cos(A)*r.rx*1.04,.13,r.z+Math.sin(A)*r.rz*1.04),F.g.rotation.y=A+Math.PI+.3,F.wait-=B,F.wait<=0&&(F.wait=c(5,11),F.hop=.5),F.hop>0&&(F.hop-=B,F.g.position.y+=Math.sin((1-F.hop/.5)*Math.PI)*.12),F.g.scale.setScalar(1.4*(1+Math.sin(F.t*2.4)*.03))}R("sapo",T,B);let C=l.libelula[0],E=t.zones.includes(3)&&p>=2&&S&&N&&!!r;if(C.g.visible=E,E){C.t+=B;let A=C.t*.7;C.g.position.set(r.x+Math.sin(A)*r.rx*.8,.45+Math.sin(C.t*1.7)*.12,r.z+Math.sin(A*2)*r.rz*.6),C.g.rotation.y=Math.atan2(Math.cos(A)*r.rx*.8,Math.cos(A*2)*2*r.rz*.6);let D=Math.sin(C.t*60)*.25;C.parts.wings.forEach((U,z)=>{U.rotation.z=(z<2?-1:1)*(1.45+D*(z%2?1:-1))}),C.g.scale.setScalar(1.6)}R("libelula",E,B)}{let F=l.caracol[0],T=_>0&&a.rain<.5;T&&!F.g.visible&&F.pos.set(.95,.02,c(-3,2)),F.g.visible=T,T&&(F.pos.z+=B*.012,F.g.position.copy(F.pos),F.g.scale.setScalar(1.5)),R("caracol",T,B)}{let F=l.gato[0],T=t.decor.includes("banco")&&n.blooming()>=12;if(F.g.visible=T,T){F.t+=B,F.g.position.set(2.3,on+.005,-6.15),F.g.rotation.y=-.5;let C=1+Math.sin(F.t*1.3)*.025;F.parts.body.scale.set(1.25,.72*C,.9),F.parts.tail.rotation.y=Math.sin(F.t*.9)*.12+(Math.sin(F.t*.23)>.9?Math.sin(F.t*9)*.15:0),F.parts.head.rotation.x=Math.sin(F.t*.31)>.96?-.25:0}R("gato",T,B)}R("borboleta",a.butterflyCount>0&&S&&N,B),R("vagalume",s.night>.6,B)},l}var ut=i=>document.querySelector(i),nr=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},lt=i=>`<svg class="ic" aria-hidden="true"><use href="#i-${i}"/></svg>`,sv={bed:"canteiro",pot:"vaso",hang:"vaso suspenso",window:"jardineira",pond:"lago",tree:"\xE1rvore",arch:"arco",veg:"horta",green:"estufa"},F0=i=>{if(i>=3600){let e=Math.floor(i/3600),t=Math.round(i%3600/60/5)*5;return t>=60?`${e+1} h`:t?`${e} h ${t}`:`${e} h`}return i>=60?`${Math.ceil(i/60)} min`:`${Math.max(1,Math.ceil(i))} s`};function O0({project:i,thumbs:e,audio:t}){let n={game:null,open:null},s=ut("#coins"),a=ut("#lvl"),h=ut("#lvlbar"),o=ut("#beauty"),l=ut("#toasts"),r=ut("#floats"),c=ut("#tags"),u=ut("#sheet"),d=ut("#card"),f=ut("#modal"),g=ut("#quest"),v=null,m=null,p=null,y=()=>t.sfx("click",.35);n.hud=()=>{let T=n.game,C=T.state,E=T.level();p!==null&&C.coins!==p&&(s.parentElement.classList.remove("bump"),s.offsetWidth,s.parentElement.classList.add("bump")),p=C.coins,s.textContent=C.coins,a.textContent=E;let A=tr[E-1]??0,D=tr[E]??A+1;h.style.width=Math.round(Math.min(1,(C.xp-A)/(D-A))*100)+"%",o.textContent=T.beauty();let U=T.sys.season(),z=ut("#season");z.dataset.k!==U.id+":"+U.day&&(z.dataset.k=U.id+":"+U.day,z.innerHTML=`${lt(U.icon)}<span>${U.name}</span>`,z.title=`${U.name}, dia ${U.day} de ${U.of}`),n.open==="picker"&&L()},n.toast=(T,C="info")=>{let E=nr("div","toast "+C,T);for(l.appendChild(E);l.children.length>3;)l.firstChild.remove();setTimeout(()=>E.classList.add("out"),3400),setTimeout(()=>E.remove(),3900)},n.floatText=(T,C,E)=>{let A=i(T);if(!A.vis)return;let D=nr("div","float "+E,(E==="coin"?lt("coin"):"")+C);D.style.left=A.x+"px",D.style.top=A.y+"px",r.appendChild(D),setTimeout(()=>D.remove(),1500)},n.quest=T=>{if(!T){g.innerHTML='<div class="q-t">Seu jardim est\xE1 completo. Aproveite o sossego!</div>';return}let C=T.text+T.val;g.dataset.k!==C&&(g.dataset.k=C,g.innerHTML=`<div class="q-h">Pr\xF3ximo passo</div><div class="q-t">${T.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round(T.val/T.goal*100)}%"></i></div><span>${T.val}/${T.goal}</span><b>${lt("coin")}${T.reward}</b></div>`)};let _=null,b=null,L=()=>{if(!_)return;let T=n.game,C=T.level();u.querySelectorAll(".seed").forEach(E=>{let A=un.find(D=>D.id===E.dataset.id);E.classList.toggle("poor",T.state.coins<A.price&&A.lvl<=C)})};n.picker=(T,C)=>{n.closeCards(),_=T,b=C,n.open="picker";let E=n.game.level();u.innerHTML=`<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${sv[T.type]}</span></div><button class="x" aria-label="Fechar">${lt("x")}</button></div><div class="seeds"></div>`;let A=u.querySelector(".seeds"),D=C.filter(W=>!W.locked&&!W.off),U=C.filter(W=>W.locked||W.off);for(let{sp:W,locked:Y,off:$}of[...D.reverse(),...U.filter(K=>K.off&&!K.locked),...U.filter(K=>K.locked).slice(0,6)]){let K=nr("button","seed"+(Y||$?" locked":""));K.dataset.id=W.id,K.innerHTML=`<div class="th"><img alt="" src="${e[W.id]||""}">${Y?`<em>N\xEDvel ${W.lvl}</em>`:$?`<em>${["Primavera","Ver\xE3o","Outono","Inverno"][W.season]}</em>`:""}${!Y&&!$&&n.game.sys.inSeason(W)?'<i class="fav">na esta\xE7\xE3o</i>':""}</div><b>${W.name}</b><small>${W.info}</small><div class="meta"><span class="price">${lt("coin")}${W.price}</span><span>${lt("clock")}${F0(W.grow)}</span></div>`,K.onclick=()=>{n.game.choose(T,W.id)&&n.closeCards()},A.appendChild(K)}u.querySelector(".x").onclick=()=>{y(),n.closeCards()},u.classList.add("on"),L(),A.querySelector(".seed:not(.locked)")&&(A.scrollLeft=0)},n.plantCard=(T,C,E)=>{n.closeCards(),m=T,n.open="card";let A=()=>{let D=C();if(!D){n.closeCards();return}let U=D.stage===4?D.ready?"Presente pronto!":"Em flor":D0[D.stage];d.innerHTML=`<img class="c-th" alt="" src="${e[D.sp.id]||""}"><div class="c-b"><div class="c-n"><b>${D.sp.name}</b><span>${U}</span></div>
        <div class="c-row">${lt("leaf")}<div class="bar g"><i style="width:${Math.round(D.grow*100)}%"></i></div><small>${D.stage===4?"adulta":"faltam "+F0(D.left)}</small></div>
        <div class="c-row">${lt("drop")}<div class="bar w"><i style="width:${Math.round(D.water*100)}%"></i></div><small>${D.green?"ar \xFAmido da estufa":D.noWater?"vive na \xE1gua":D.water<=0?"com sede!":"regada"}</small></div>
        ${D.stage===4?`<div class="c-row">${lt("coin")}<div class="bar c"><i style="width:${Math.round((D.ready?1:D.gift)*100)}%"></i></div><small>pr\xF3ximo presente</small></div>`:""}
        ${D.inSeason?`<div class="c-note">${lt("flower")}Est\xE1 na esta\xE7\xE3o dela: cresce e rende mais.</div>`:""}
        <div class="c-act">${D.noWater?"":`<button class="btn" data-a="water">${lt("drop")}Regar</button>`}${D.stage<4&&D.adubo>0?`<button class="btn honey" data-a="fert">Adubar (${D.adubo})</button>`:""}<button class="btn ghost" data-a="remove">Retirar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`,d.querySelectorAll("button").forEach(z=>z.onclick=()=>{y();let W=z.dataset.a;W==="remove"?z.dataset.sure?(E.remove(),n.closeCards()):(z.dataset.sure=1,z.textContent="Tem certeza?",z.classList.add("danger"),v=null):W==="fert"?(E.fert(),A()):(W==="water"&&E.water(),n.closeCards())})};A(),v=A,d.classList.add("on")},n.closeCards=()=>{u.classList.remove("on"),d.classList.remove("on"),_=null,v=null,m=null,(n.open==="picker"||n.open==="card")&&(n.open=null)};let R=(T,C="")=>{n.closeCards(),f.innerHTML=`<div class="panel ${C}">${T}</div>`,f.classList.add("on"),n.open="modal",f.querySelectorAll("[data-close]").forEach(E=>E.onclick=()=>{y(),I()})},I=()=>{f.classList.remove("on"),n.open==="modal"&&(n.open=null)};f.addEventListener("pointerdown",T=>{T.target===f&&I()}),n.closeModal=I,n.zoneOffer=(T,C,E)=>{R(`<h2>${T.name}</h2><p>${T.desc||""}</p><div class="offer"><span class="bigprice">${lt("coin")}${T.cost}</span>${C?"":`<small>Voc\xEA tem ${n.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora n\xE3o</button><button class="btn big" id="buyz" ${C?"":"disabled"}>Abrir esta \xE1rea</button></div>`,"small"),ut("#buyz").onclick=()=>{I(),E()}},n.levelUp=(T,C)=>{let E=C.map(A=>`<div class="unl"><img alt="" src="${e[A.id]||""}"><span>${A.name}</span></div>`).join("");setTimeout(()=>R(`<div class="lv-badge">${T}</div><h2>N\xEDvel ${T}!</h2><p>${C.length?"Novas plantas chegaram \xE0 sua cole\xE7\xE3o de sementes:":"Voc\xEA est\xE1 cada vez melhor com as plantas."}</p><div class="unls">${E}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`,"small center"),900)};let B=(T="decor")=>{let C=n.game,E=C.state,A=ea.map(U=>{let z=E.decor.includes(U.id);return`<div class="item ${z?"own":""}"><div><b>${U.name}</b><small>${U.desc}</small></div>${z?'<span class="tagok">No jardim</span>':`<button class="btn" data-buy="d:${U.id}" ${E.coins>=U.price?"":"disabled"}>${lt("coin")}${U.price}</button>`}</div>`}).join(""),D=Zc.map(U=>{let z=E.upg.includes(U.id),W=U.need&&!E.upg.includes(U.need);return`<div class="item ${z?"own":""}"><div><b>${U.name}</b><small>${U.desc}</small></div>${z?'<span class="tagok">Comprado</span>':W?'<span class="taglock">Depois do anterior</span>':`<button class="btn" data-buy="u:${U.id}" ${E.coins>=U.price?"":"disabled"}>${lt("coin")}${U.price}</button>`}</div>`}).join("");R(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${lt("coin")}${E.coins}</span><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <div class="tabs"><button class="${T==="decor"?"on":""}" data-tab="decor">Decora\xE7\xE3o</button><button class="${T==="upg"?"on":""}" data-tab="upg">Melhorias</button><button data-style>Cores e roupas</button></div>
      <div class="list">${T==="decor"?A:D}</div><p class="hint">Sementes e mudas voc\xEA escolhe tocando num lugar vazio do jardim.</p>`),f.querySelectorAll("[data-tab]").forEach(U=>U.onclick=()=>{y(),B(U.dataset.tab)}),f.querySelectorAll("[data-style]").forEach(U=>U.onclick=()=>{y(),n.style("roupas")}),f.querySelectorAll("[data-buy]").forEach(U=>U.onclick=()=>{let[z,W]=U.dataset.buy.split(":");z==="d"?C.buyDecor(W):C.buyUpgrade(W),B(T)})},w=(T="flores")=>{let C=n.game,E=C.state,A=C.level(),D=[["flores","Flores"],["raras","Raridades"],["bichos","Visitantes"],["conq","Conquistas"],["diario","Di\xE1rio"]].filter(([W])=>(W!=="raras"||n.rareTab)&&(W!=="bichos"||n.critterTab)),U="",z="";if(T==="flores"){let W=un.filter(Y=>!Y.hybrid);z=`${W.filter(Y=>E.album.includes(Y.id)).length}/${W.length}`,U=`<p class="hint">Cada esp\xE9cie entra no \xE1lbum quando floresce pela primeira vez.</p><div class="albgrid">${W.map(Y=>{let $=E.album.includes(Y.id);return`<div class="alb ${$?"got":""}"><img alt="" src="${e[Y.id]||""}"><b>${$?Y.name:Y.lvl>A?"N\xEDvel "+Y.lvl:Y.name}</b>${Y.season!=null?`<em>${["primavera","ver\xE3o","outono","inverno"][Y.season]}</em>`:""}</div>`}).join("")}</div>`}else if(T==="raras"&&n.rareTab){let W=n.rareTab();z=W.count,U=W.html}else if(T==="bichos"&&n.critterTab){let W=n.critterTab();z=W.count,U=W.html}else T==="conq"?(z=`${ia.filter($=>E.ach[$.id]).length}/${ia.length}`,U=`<div class="list">${ia.filter(($,K)=>E.ach[$.id]||!ia.slice(0,K).some(ae=>ae.id.replace(/\d+$/,"")===$.id.replace(/\d+$/,"")&&!E.ach[ae.id])).map($=>{let K=Math.min($.goal,$.v(E,C)),ae=!!E.ach[$.id];return`<div class="item ach ${ae?"own":""}"><div class="a-ic">${lt(ae?"trophy":"trophy-off")}</div><div class="a-b"><b>${$.name}</b><small>${$.desc}</small><div class="q-r"><div class="bar ${ae?"c":""}"><i style="width:${Math.round(K/$.goal*100)}%"></i></div><span>${K}/${$.goal}</span><b>${lt("coin")}${$.r}</b></div></div></div>`}).join("")}</div>`):(z=`dia ${Math.floor((Date.now()-E.t0)/864e5)+1}`,U=E.log.length?`<div class="diary">${E.log.slice().reverse().map(W=>`<div><span>Dia ${W.d}</span>${W.t}</div>`).join("")}</div>`:'<p class="hint">O di\xE1rio da Eliane se escreve sozinho, conforme o jardim cresce.</p>');R(`<div class="p-h"><h2>${T==="diario"?"Di\xE1rio da Eliane":"\xC1lbum do jardim"}</h2><span class="wallet">${z}</span><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <div class="tabs">${D.map(([W,Y])=>`<button class="${T===W?"on":""}" data-tab="${W}">${Y}</button>`).join("")}</div>${U}`,"wide"),f.querySelectorAll("[data-tab]").forEach(W=>W.onclick=()=>{y(),w(W.dataset.tab)})};n.album=w,n.rareTab=()=>{let T=n.game.state,C=n.game.sys.hybrids;return{count:`${C.filter(E=>T.hybrids.includes(E.id)).length}/${C.length}`,html:`<p class="hint">Quando duas flores diferentes florescem lado a lado, \xE0s vezes deixam uma semente especial. Recolha os presentes delas e fique de olho.</p><div class="list">${C.map(E=>{let A=T.hybrids.includes(E.id),[D,U]=E.hybrid.map(z=>ht[z]);return`<div class="item rare ${A?"own":""}"><img class="r-th ${A?"":"q"}" alt="" src="${e[E.id]||""}"><div><b>${A?E.name:"? ? ?"}</b><small>${A?E.info:`Dizem que <i>${D.name}</i> e <i>${U.name}</i>, lado a lado, guardam um segredo.`}</small></div><div class="r-par"><img alt="" src="${e[D.id]||""}"><span>+</span><img alt="" src="${e[U.id]||""}"></div></div>`}).join("")}</div>`}},n.critterTab=()=>{let T=n.game.state;return{count:`${T.seen.length}/${aa.length}`,html:`<p class="hint">Cada visitante chega sozinho quando o jardim tem aquilo de que ele gosta.</p><div class="albgrid crit">${aa.map(C=>{let E=T.seen.includes(C.id);return`<div class="alb ${E?"got":""}"><img alt="" src="${e["c:"+C.id]||""}"><b>${E?C.name:"? ? ?"}</b><small>${C.hint}</small></div>`}).join("")}</div>`}},n.rare=T=>setTimeout(()=>R(`<div class="rare-hero"><img alt="" src="${e[T.id]||""}"></div><h2>Raridade descoberta!</h2><p><b>${T.name}</b>. ${T.info}</p><p class="hint">Ela j\xE1 est\xE1 entre as suas sementes.</p><div class="row"><button class="btn big" data-close>Que maravilha!</button></div>`,"small center"),600),n.seasonInfo=()=>{let T=n.game,C=T.sys.season(),E=T.level(),A=un.filter(z=>z.loves&&z.loves.includes(C.id)&&z.lvl<=E&&(!z.hybrid||T.state.hybrids.includes(z.id))),D=un.filter(z=>z.season===C.id),U=z=>`<span class="chip"><img alt="" src="${e[z.id]||""}">${z.name}</span>`;R(`<div class="p-h"><h2>${lt(C.icon)} ${C.name}</h2><span class="wallet">dia ${C.day} de ${C.of}</span><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <p>${C.line} ${C.left===1?"Amanh\xE3 a esta\xE7\xE3o muda.":`Faltam ${C.left} dias para a pr\xF3xima esta\xE7\xE3o.`}</p>
      ${D.length?`<div class="sgroup"><b>S\xF3 nascem agora</b><div class="chips">${D.map(U).join("")}</div></div>`:""}
      <div class="sgroup"><b>Crescem mais r\xE1pido e rendem mais agora</b><div class="chips">${A.length?A.slice(0,18).map(U).join(""):"<small>Suba de n\xEDvel para conhecer as flores desta esta\xE7\xE3o.</small>"}</div></div>
      <p class="hint">Nenhuma planta sofre fora da esta\xE7\xE3o; ela s\xF3 fica no ritmo normal.</p>`)},n.style=(T="roupas")=>{let C=n.game,E=C.state,A=U=>"#"+U.toString(16).padStart(6,"0"),D=Object.keys(sa).filter(U=>!!sa[U].house==(T==="casa")).map(U=>{let z=sa[U],W=E.style[U]||z.opts[0][0];return`<div class="sgroup"><b>${z.name}</b><div class="swatches">${z.opts.map((Y,$)=>{let K=$===0||E.style.own.includes(U+":"+Y[0]);return`<button class="sw ${W===Y[0]?"on":""}" data-k="${U}" data-id="${Y[0]}" title="${Y[1]}" aria-label="${Y[1]}"><i style="background:${A(Y[2])}"></i><small>${K?Y[1]:`${lt("coin")}${z.price}`}</small></button>`}).join("")}</div></div>`}).join("");R(`<div class="p-h"><h2>Do seu jeito</h2><span class="wallet">${lt("coin")}${E.coins}</span><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <div class="tabs"><button class="${T==="roupas"?"on":""}" data-tab="roupas">Roupas da Eliane</button><button class="${T==="casa"?"on":""}" data-tab="casa">Casa e cerca</button></div>${D}
      <p class="hint">Cada cor nova \xE9 comprada uma vez s\xF3; depois \xE9 s\xF3 trocar quando quiser.</p>`,"style"),f.querySelectorAll("[data-tab]").forEach(U=>U.onclick=()=>{y(),n.style(U.dataset.tab)}),f.querySelectorAll(".sw").forEach(U=>U.onclick=()=>{C.pickStyle(U.dataset.k,U.dataset.id),n.style(T)})},n.orders=()=>{let T=n.game,C=T.state,E=T.sys,A=Object.keys(C.basket).filter(U=>C.basket[U]>0&&ht[U]).sort((U,z)=>C.basket[z]-C.basket[U]),D=C.orders.map(U=>{let z=E.canDeliver(U);return`<div class="order ${z?"ok":""}"><div class="o-h"><b>${U.who}</b><span>${U.why}</span></div>
        <div class="o-items">${U.items.map(W=>{let Y=Math.min(W.n,C.basket[W.sp]||0);return`<div class="o-it ${Y>=W.n?"full":""}"><img alt="" src="${e[W.sp]||""}"><b>${Y}/${W.n}</b><small>${ht[W.sp].name}</small></div>`}).join("")}</div>
        <div class="o-f"><span class="rew">${lt("coin")}${U.coins}${U.adubo?` <i>+ ${U.adubo} adubo</i>`:""}</span><button class="btn ghost" data-no="${U.id}">Dispensar</button><button class="btn" data-go="${U.id}" ${z?"":"disabled"}>Entregar</button></div></div>`}).join("");R(`<div class="p-h"><h2>Banquinha de flores</h2><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <p>Cada presente recolhido p\xF5e uma flor na cesta. Junte as que os vizinhos pedem e entregue.</p>
      ${D?`<div class="orders">${D}</div>`:`<p class="hint empty">${C.stats.collected?"Nenhum pedido agora. Os vizinhos passam por aqui de tempos em tempos.":"Recolha o primeiro presente de uma flor e os vizinhos come\xE7am a aparecer."}</p>`}
      <div class="basket"><b>Sua cesta</b>${A.length?A.map(U=>`<span class="chip"><img alt="" src="${e[U]||""}">${C.basket[U]}</span>`).join(""):"<small>vazia por enquanto</small>"}<span class="chip adubo" title="Adubo">${lt("leaf")}${C.adubo} adubo</span></div>`),f.querySelectorAll("[data-go]").forEach(U=>U.onclick=()=>{E.deliver(+U.dataset.go)&&(n.hud(),n.orders())}),f.querySelectorAll("[data-no]").forEach(U=>U.onclick=()=>{y(),U.dataset.sure?(E.dismiss(+U.dataset.no),n.orders()):(U.dataset.sure=1,U.textContent="Dispensar mesmo?")})},n.daily=()=>{let T=n.game,C=T.state,E=T.sys,A=E.dailyReady(),D=A?C.daily.streak%7:(C.daily.streak-1)%7,U=$c.map((W,Y)=>`<div class="day ${Y<D||!A&&Y===D?"done":""} ${A&&Y===D?"now":""} ${W.big?"big":""}"><small>Dia ${Y+1}</small>${W.coins?lt("coin"):lt("leaf")}<b>${W.coins?"\xD7"+Math.round(W.coins*(1+T.level()*.2)):W.adubo+" adubo"}</b></div>`).join("");R(`<h2>Caixa de correio</h2><p>${A?"Tem uma surpresa esperando por voc\xEA hoje!":"A surpresa de hoje j\xE1 foi aberta. Amanh\xE3 tem mais."}</p><div class="days">${U}</div>
      <p class="hint">Voc\xEA j\xE1 abriu ${C.daily.streak} ${C.daily.streak===1?"surpresa":"surpresas"}. A cada sete visitas vem um presente grande, sem pressa.</p>
      <div class="row"><button class="btn ghost" data-close>${A?"Depois":"Fechar"}</button>${A?'<button class="btn big" id="d-open">Abrir a surpresa</button>':""}</div>`,"small center");let z=ut("#d-open");z&&(z.onclick=()=>{let W=E.claimDaily();W&&(n.toast(`Surpresa do dia ${W.streak}: ${W.coins?"+"+W.coins+" moedas":""}${W.coins&&W.adubo?" e ":""}${W.adubo?"+"+W.adubo+" adubo":""}`,"good"),n.hud(),n.daily())})},n.achievement=T=>{let C=nr("div","toast ach",`${lt("trophy")}<span><small>Conquista</small><b>${T.name}</b></span><i>${lt("coin")}${T.r}</i>`);for(l.appendChild(C);l.children.length>3;)l.firstChild.remove();setTimeout(()=>C.classList.add("out"),4600),setTimeout(()=>C.remove(),5100)};let S=()=>{let T=n.game.state.settings,C=(A,D,U)=>`<option value="${A}" ${U===A?"selected":""}>${D}</option>`;R(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <label class="set" for="s-music"><span>M\xFAsica</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${T.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${T.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${C("auto","O dia passa sozinho",T.time)}${C("dia","Sempre manh\xE3",T.time)}${C("tarde","Sempre entardecer",T.time)}${C("noite","Sempre noite",T.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${C("auto","Autom\xE1tica",T.quality)}${C("alta","Alta",T.quality)}${C("media","M\xE9dia",T.quality)}${C("baixa","Leve (para aparelhos simples)",T.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recome\xE7ar o jardim</button><button class="btn" data-close>Pronto</button></div>`,"small");let E=()=>{T.music=+ut("#s-music").value,T.sfx=+ut("#s-sfx").value,T.time=ut("#s-time").value;let A=ut("#s-q").value;A!==T.quality&&(T.quality=A,n.onQuality&&n.onQuality(A)),t.setVolumes(T.music,T.sfx),n.game.save()};["#s-music","#s-sfx","#s-time","#s-q"].forEach(A=>ut(A).oninput=ut(A).onchange=E),ut("#s-reset").onclick=A=>{let D=A.currentTarget;D.dataset.sure?(n.game.reset(),n.onReset&&n.onReset()):(D.dataset.sure=1,D.textContent="Apagar tudo e recome\xE7ar?")}},N=()=>{R(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na \xE1rea de trabalho e no menu Iniciar. Baixa um .zip: abra e d\xEA dois cliques em \u201CInstalar Jardim do Sossego\u201D. Come\xE7a um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo s\xF3: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirma\xE7\xE3o antes de salvar.</p>`,"small");let T=C=>{let E=ut("#dl-msg");E&&(E.textContent=C)};f.querySelectorAll("[data-dl]").forEach(C=>C.onclick=async()=>{y();let E=f.querySelectorAll("[data-dl]");E.forEach(A=>A.disabled=!0),T("Preparando o arquivo\u2026");try{let A=window.claude&&window.claude.use?await window.claude.use("downloads"):null;if(!A){T("Por aqui n\xE3o d\xE1 para baixar. Abra o jogo pelo link, no navegador do computador.");return}let D,U;if(C.dataset.dl==="win"){let z=await fetch("instalar/Jardim-do-Sossego-Windows.zip");if(!z.ok)throw new Error("fetch");D=await z.blob(),U="Jardim-do-Sossego-Windows.zip"}else{let z=await fetch("instalar/Jardim-do-Sossego.html");if(!z.ok)throw new Error("fetch");let W=await z.text();n.game.save();let Y="window.__SAVE="+JSON.stringify(n.game.state).replace(/</g,"\\u003c")+";";D=new Blob([W.replace("/*__SAVE__*/",()=>Y)]),U="Jardim-do-Sossego.html"}await A.save({filename:U,data:D}),T(C.dataset.dl==="win"?"Salvo! Abra o .zip e d\xEA dois cliques no instalador.":"Salvo! Dois cliques no arquivo e o jardim abre.")}catch(A){T(A&&A.code==="declined"?"Tudo bem, fica para depois.":A&&A.code==="rate_limited"?"J\xE1 existe um pedido de download aberto. Confirme ou feche-o primeiro.":"N\xE3o foi poss\xEDvel baixar agora. Tente de novo em instantes.")}finally{E.forEach(A=>A.disabled=!1)}})},H=()=>{let T=/iPhone|iPad|iPod/i.test(navigator.userAgent),C=matchMedia("(display-mode: standalone)").matches||navigator.standalone,E=/Windows/i.test(navigator.userAgent);R(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${lt("x")}</button></div>
      <p>${C?"O jogo j\xE1 est\xE1 instalado neste aparelho.":"Instalado, o jogo ganha um \xEDcone pr\xF3prio, funciona sem internet e recebe as novidades sozinho."}</p>
      <div class="list">
        ${C?"":`<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${T?"No iPhone ou iPad: toque em Compartilhar e depois em \u201CAdicionar \xE0 Tela de In\xEDcio\u201D.":"Instala como aplicativo, no celular ou no computador."}</small></div>${T?"":'<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${E&&!C?'<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na \xE1rea de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>':""}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`,"small");let A=ut("#pwa-go");A&&(A.onclick=async()=>{y();let D=window.__pwaPrompt;if(D){D.prompt();try{await D.userChoice}catch{}window.__pwaPrompt=null,I()}else ut("#pwa-how").textContent="Abra o menu do navegador (os tr\xEAs pontinhos) e escolha \u201CInstalar aplicativo\u201D ou \u201CAdicionar \xE0 tela inicial\u201D."})};window.__WEB?ut("#b-install").onclick=()=>{y(),H()}:window.__APP||!window.__INSTALL?ut("#b-install").hidden=!0:ut("#b-install").onclick=()=>{y(),N()},ut("#b-shop").onclick=()=>{y(),B()},ut("#b-album").onclick=()=>{y(),w()},ut("#season").onclick=()=>{y();let T=n.game.sys.season();n.seasonInfo?n.seasonInfo():n.toast(`${T.name}, dia ${T.day} de ${T.of}. ${T.line}`,"info")},ut("#b-set").onclick=()=>{y(),S()},ut("#b-photo").onclick=()=>{y(),document.body.classList.add("photo"),n.closeCards()},ut("#photo-exit").onclick=()=>document.body.classList.remove("photo");let F={};return n.initTags=T=>{for(let C of T){if(!C.cost)continue;let E=nr("button","ztag",`${lt("lock")}<small>${lt("coin")}${C.cost}</small>`);E.title=C.name,E.setAttribute("aria-label",`${C.name}: ${C.cost} moedas`),E.onclick=()=>{y(),n.game.offerZone(C.id)},c.appendChild(E),F[C.id]=E}},n.frame=(T,C)=>{let E=n.game.state;for(let A of T){let D=F[A.id];if(!D)continue;if(E.zones.includes(A.id)){D.hidden=!0;continue}let U=i(new C(A.tag[0],A.id===1?2.25:1.75,A.tag[1]));D.hidden=!U.vis,U.vis&&(D.style.transform=`translate(-50%,-100%) translate(${U.x.toFixed(1)}px,${U.y.toFixed(1)}px)`,D.classList.toggle("can",E.coins>=A.cost))}v&&(n._ct=(n._ct||0)+1)%20===0&&v()},n.focus=()=>{},n}var ri=V,Fo=i=>document.querySelector(i),Wi=new URLSearchParams(location.search);async function av(i,e){let t={},s=new Qt(168,168,{samples:4});s.texture.colorSpace=wt;let a=new Ta;a.add(new $s(16777215,12109984,1.5));let h=new Ys(16774368,1.7);h.position.set(2,4,3),a.add(h);let o=new cn(26,1,.05,60),l=new Uint8Array(28224*4),r=document.createElement("canvas");r.width=r.height=168;let c=r.getContext("2d"),u=Gn.uDay.value;Gn.uDay.value=.5;for(let d=0;d<un.length;d++){let f=un[d],g=Uo(f.id,11,4),v=zo(f.id);v.userData.u.uSway.value=0;let m=new Le(g,v);a.add(m);let p=g.boundingBox,y=p.getCenter(new ri),_=p.getSize(new ri),b=Math.max(_.x,_.y,_.z)*.62+.03,L=b/Math.tan(13*Math.PI/180);o.position.set(y.x+L*.25,y.y+L*.5,y.z+L*.83),o.lookAt(y),o.near=L*.1,o.far=L*4,o.updateProjectionMatrix(),i.setRenderTarget(s),i.setClearColor(0,0),i.clear(),i.render(a,o),i.readRenderTargetPixels(s,0,0,168,168,l),i.setRenderTarget(null);let R=c.createImageData(168,168);for(let I=0;I<168;I++)R.data.set(l.subarray((167-I)*168*4,(168-I)*168*4),I*168*4);c.putImageData(R,0,0),t[f.id]=r.toDataURL("image/png"),a.remove(m),g.dispose(),v.dispose(),e((d+1)/un.length),d%3===2&&await new Promise(I=>setTimeout(I,0))}for(let d of aa){let f=Jc(d.id);a.add(f),f.updateMatrixWorld(!0);let g=new Qn().setFromObject(f),v=g.getCenter(new ri),m=g.getSize(new ri),p=Math.max(m.x,m.y,m.z)*.7+.005,y=p/Math.tan(13*Math.PI/180);o.position.set(v.x+y*.55,v.y+y*.45,v.z+y*.7),o.lookAt(v),o.near=y*.1,o.far=y*4,o.updateProjectionMatrix(),i.setRenderTarget(s),i.setClearColor(0,0),i.clear(),i.render(a,o),i.readRenderTargetPixels(s,0,0,168,168,l),i.setRenderTarget(null);let _=c.createImageData(168,168);for(let b=0;b<168;b++)_.data.set(l.subarray((167-b)*168*4,(168-b)*168*4),b*168*4);c.putImageData(_,0,0),t["c:"+d.id]=r.toDataURL("image/png"),a.remove(f)}return Gn.uDay.value=u,s.dispose(),t}var jc=null;if(window.__WEB&&"serviceWorker"in navigator){let i=!!navigator.serviceWorker.controller;navigator.serviceWorker.register("sw.js").then(e=>{setInterval(()=>e.update().catch(()=>{}),1800*1e3)}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{i&&jc&&jc()}),addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.__pwaPrompt=e})}async function rv(){let i=U0(),e=Wi.get("demo");e&&(i.zones=[0,1,2,3,4,5,6,7,8],i.decor=["lanternas","banco","bebedouro","casinha","carrinho","anao"],i.coins=999,i.xp=3e3,i.settings.time="fixo",i.hour=+(Wi.get("h")||16.8));let t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820,n=Wi.get("q")||(i.settings.quality!=="auto"?i.settings.quality:t?"media":"alta"),s=Fo("#stage"),a=g0(s,Va[n]),h=new Ta,o=new cn(32,1,.3,900),l=v0(h,a.renderer,Va.alta),r=w0(h,Va[n],new Set(i.zones)),c=S0();c.group.position.set(.3,0,1.6),c.heading=c.targetHeading=.2,h.add(c.group);let u=E0(h),d=A0("audio/");d.setVolumes(i.settings.music,i.settings.sfx);let f=R0(r.blocked);a.setup(h,o);let g=oe=>{let O=l.sun.shadow;O.mapSize.x!==oe.shadows&&(O.mapSize.set(oe.shadows,oe.shadows),O.map&&(O.map.dispose(),O.map=null))},v=oe=>{n=oe;let O=Va[oe];a.setQuality(O),r.setGrass(O.grass),g(O)},m=()=>{let oe=s.clientWidth||innerWidth,O=s.clientHeight||innerHeight;o.aspect=oe/O,o.fov=oe<O?44:32,o.updateProjectionMatrix(),a.resize(oe,O)};a.w=innerWidth,a.h=innerHeight,v(n),m(),addEventListener("resize",m);let p={yaw:0,pitch:.6,dist:12.5,target:new ri(0,.9,.5),focusT:0,focus:new ri},y=new ri,_=oe=>(y.copy(oe).project(o),{x:(y.x*.5+.5)*a.w,y:(-y.y*.5+.5)*a.h,vis:y.z<1&&Math.abs(y.x)<1.15&&Math.abs(y.y)<1.15}),b=Fo("#load i"),L=Fo("#start");a.render(h,o);let R=await av(a.renderer,oe=>{b.style.width=Math.round(oe*100)+"%"}),I=O0({project:_,thumbs:R,audio:d}),B=z0({scene:h,world:r,fx:u,audio:d,gardener:c,nav:f,env:l,ui:I,state:i});e&&(B.save=()=>{},r.spots.forEach((oe,O)=>{if(e==="2"&&O%3===0)return;let G=un.filter(P=>P.spots.includes(oe.type)),M=G[(O*7+3)%G.length];i.plants[oe.id]={sp:M.id,seed:O+5,grown:e==="2"&&O%4===1?M.grow*.6:M.grow,wet:O%9===4?0:300,giftT:O%6===2?80:0,ready:!1}})),I.game=B,I.initTags(ai),I.onQuality=oe=>v(oe==="auto"?t?"media":"alta":oe),I.onReset=()=>{B.save=()=>{},location.reload()},I.focus=(oe,O)=>{p.focus.set(oe,.8,O),p.focusT=3.2};let w=N0(h,r,{S:i,G:B,env:l,fx:u,ui:I,audio:d});B.init();let S=B.count()>0||i.stats.planted>0;L.textContent=S?"Voltar ao meu jardim":"Come\xE7ar",Fo("#load").hidden=!0,L.hidden=!1;let N=!1,H=0,F=0,T=0,C=!1,E=()=>{N||(N=!0,d.unlock(),document.body.classList.add("playing"),H=0,B.away>120&&B.count()>0?setTimeout(()=>I.toast("Que bom te ver de volta! Veja quem est\xE1 com sede.","info"),1800):S||setTimeout(()=>I.toast("Toque num + do canteiro para plantar sua primeira flor","info"),1500))};L.onclick=E,jc=()=>{N?I.toast("Chegaram novidades! Elas aparecem na pr\xF3xima vez que voc\xEA abrir o jogo.","good"):location.reload()},Wi.get("autostart")&&E();let A=new Map,D=0,U=0,z=0,W=0,Y=new yo,$=new he,K=new Jn(new ri(0,1,0),0),ae=new ri,J=new Le(new Zt(.3,.3,1.75,8),new en({visible:!1}));J.position.y=.875,c.group.add(J);let ue=(oe,O)=>{let G=s.getBoundingClientRect();$.set((oe-G.left)/G.width*2-1,-((O-G.top)/G.height)*2+1),Y.setFromCamera($,o);let M=Y.intersectObjects(r.pickables.filter(ie=>ie.visible||!i.zones.includes(ie.userData.spot.zone)),!1),P=Y.intersectObjects(Object.values(r.things).map(ie=>ie.pick),!1),q=Y.intersectObject(J,!1);return q.length&&(!M.length||q[0].distance<M[0].distance)&&(!P.length||q[0].distance<P[0].distance)&&c.state==="idle"?{thing:"eliane"}:P.length&&(!M.length||P[0].distance<M[0].distance)?{thing:P[0].object.userData.thing}:M.length?{spot:M[0].object.userData.spot}:Y.ray.intersectPlane(K,ae)?{ground:ae.clone()}:{}};s.addEventListener("pointerdown",oe=>{if(s.setPointerCapture(oe.pointerId),A.set(oe.pointerId,{x:oe.clientX,y:oe.clientY}),A.size===1)D=performance.now(),U=0;else if(A.size===2){let[O,G]=[...A.values()];z=Math.hypot(O.x-G.x,O.y-G.y),W=p.dist,U=99}}),s.addEventListener("pointermove",oe=>{let O=A.get(oe.pointerId);if(!O){if(oe.pointerType==="mouse"&&N){let P=ue(oe.clientX,oe.clientY);s.style.cursor=P.spot||P.thing?"pointer":"grab"}return}let G=oe.clientX-O.x,M=oe.clientY-O.y;if(O.x=oe.clientX,O.y=oe.clientY,A.size===1)U+=Math.abs(G)+Math.abs(M),U>8&&(p.yaw-=G*.006,p.pitch=He(p.pitch+M*.004,.16,1.3));else if(A.size===2){let[P,q]=[...A.values()],ie=Math.hypot(P.x-q.x,P.y-q.y);z>0&&(p.dist=He(W*(z/ie),3.5,34))}});let Te=oe=>{if(A.delete(oe.pointerId)&&A.size===0&&U<=8&&performance.now()-D<600&&N){if(document.body.classList.contains("photo")||I.open==="modal")return;let G=ue(oe.clientX,oe.clientY);if(G.thing)B.tapThing(G.thing);else if(G.spot)B.tapSpot(G.spot);else if(G.ground){let M=G.ground,P=Ya(M.x,M.z);if(I.open){I.closeCards();return}P>0&&!i.zones.includes(P)?B.offerZone(P):Math.abs(M.x)<12.4&&M.z>-9&&M.z<14.5&&(B.tapGround(M.x,M.z),u.sparkle(new ri(M.x,.05,M.z),4,16777215,.12))}}};s.addEventListener("pointerup",Te),s.addEventListener("pointercancel",oe=>A.delete(oe.pointerId)),s.addEventListener("wheel",oe=>{oe.preventDefault(),p.dist=He(p.dist*Math.exp(oe.deltaY*.0011),3.5,34)},{passive:!1}),addEventListener("keydown",oe=>{oe.key==="Escape"&&(I.closeCards(),I.closeModal(),document.body.classList.remove("photo"))}),document.addEventListener("visibilitychange",()=>{document.hidden?(B.save(),d.pause(!0)):d.pause(!1)}),addEventListener("pagehide",()=>B.save());let Be=performance.now(),Ie=0,Ze=.5,j=0,Ht=0,Ne=+(Wi.get("frames")||0),Xe=oe=>{if(Ne&&N&&++Ht>Ne){window.__frozen=!0;return}requestAnimationFrame(Xe);let O=Math.min(.1,(oe-Be)/1e3);if(Be=oe,document.hidden)return;let G=+(Wi.get("speed")||1);if(Ie+=O,Gn.uTime.value=Ie,N){for(let we=0;we<G;we++)B.update(O);H+=Wi.get("nointro")?9:O}c.update(O,Ie),l.setHour(i.hour),r.setNight(l.night),r.update(O,Ie),l.update(O,o.position);{let we=B.sys.season().id;we!==u.season&&(r.setSeason(we,u.season===-1),u.season=we)}N&&w.update(O,Ie),u.update(O,Ie,l,o,r.chimney),d.update(l.night,u.rain),Gn.uWind.value=1+u.rain*.8;let M=c.group.position,P=1-Math.exp(-3.2*O);N?p.focusT>0?(p.focusT-=O,p.target.lerp(p.focus,P)):(y.set(M.x,M.y+.95,M.z),p.target.lerp(y,P)):(p.yaw=Math.sin(Ie*.06)*.55,y.set(0,1,1.5),p.target.lerp(y,P));let q=N?wn(H/2.2):0,ie=be(27,p.dist,q),le=be(.5,p.pitch,q),ce=Math.cos(le);if(o.position.set(p.target.x+Math.sin(p.yaw)*ce*ie,p.target.y+Math.sin(le)*ie,p.target.z+Math.cos(p.yaw)*ce*ie),o.lookAt(p.target),a.final&&(y.set(M.x,M.y+.8,M.z).project(o),Ze+=((N?He(y.y*.5+.5,.3,.7):.5)-Ze)*P,a.final.uniforms.uFocus.value=Ze),a.render(h,o),N&&I.frame(ai,ri),N&&!C&&i.settings.quality==="auto"&&!Wi.get("q")&&(F+=O,T++,F>4)){let we=F/T;C=!0,we>.036&&(v(n==="alta"?"media":"baixa"),C=!1,F=0,T=0,n==="baixa"&&(C=!0))}++j===3&&(document.title=document.title,window.__ready=!0)};requestAnimationFrame(Xe),window.__game={game:B,state:i,cam:p,gardener:c,world:r,env:l,ui:I,start:E,setQ:v,fx:u}}rv().catch(i=>{console.error(i);let e=document.querySelector("#err");e&&(e.hidden=!1,e.textContent="N\xE3o foi poss\xEDvel abrir o jardim neste aparelho: "+i.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
