(()=>{var Tf=0,kc=1,Af=2;var Tu=1,ic=2,ai=3,Ai=0,tn=1,wt=2;var Yn=0,ws=1,wa=2,Hc=3,Vc=4,Rf=5,Hi=100,Cf=101,Lf=102,Gc=103,Wc=104,Pf=200,If=201,Df=202,Uf=203,hl=204,ul=205,Nf=206,zf=207,Ff=208,Of=209,Bf=210,kf=211,Hf=212,Vf=213,Gf=214,Wf=0,Xf=1,qf=2,Ea=3,$f=4,Yf=5,Zf=6,Jf=7,sc=0,Kf=1,jf=2,Ei=0,rc=1,ac=2,oc=3,Ar=4,Qf=5,lc=6;var Au=300,As=301,Rs=302,fl=303,dl=304,ro=306,Cs=1e3,Hn=1001,pl=1002,cn=1003,Xc=1004;var To=1005;var Tn=1006,ed=1007;var cr=1008;var Ti=1009,td=1010,nd=1011,cc=1012,Ru=1013,Si=1014,wi=1015,yn=1016,Cu=1017,Lu=1018,Wi=1020,id=1021,Vn=1023,sd=1024,rd=1025,Xi=1026,Ls=1027,ad=1028,Pu=1029,od=1030,Iu=1031,Du=1033,Ao=33776,Ro=33777,Co=33778,Lo=33779,qc=35840,$c=35841,Yc=35842,Zc=35843,Uu=36196,Jc=37492,Kc=37496,jc=37808,Qc=37809,eh=37810,th=37811,nh=37812,ih=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,Po=36492,fh=36494,dh=36495,ld=36283,ph=36284,mh=36285,gh=36286;var Ta=2300,Aa=2301,Io=2302,xh=2400,vh=2401,_h=2402;var Nu=3e3,qi=3001,cd=3200,hd=3201,hc=0,ud=1,An="",pt="srgb",hi="srgb-linear",uc="display-p3",ao="display-p3-linear",Ra="linear",mt="srgb",Ca="rec709",La="p3";var es=7680;var yh=519,fd=512,dd=513,pd=514,zu=515,md=516,gd=517,xd=518,vd=519,ml=35044;var bh="300 es",gl=1035,li=2e3,Pa=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Do=Math.PI/180,xl=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}function _d(i,e){return(i%e+e)%e}function Uo(i,e,t){return(1-t)*i+t*e}function Mh(i){return(i&i-1)===0&&i!==0}function vl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],M=s[7],C=s[2],R=s[5],P=s[8];return r[0]=o*x+a*y+c*C,r[3]=o*m+a*v+c*R,r[6]=o*p+a*M+c*P,r[1]=l*x+h*y+u*C,r[4]=l*m+h*v+u*R,r[7]=l*p+h*M+u*P,r[2]=d*x+f*y+g*C,r[5]=d*m+f*v+g*R,r[8]=d*p+f*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Je;function Fu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yd(){let i=Ia("canvas");return i.style.display="block",i}var Sh={};function sr(i){i in Sh||(Sh[i]=!0,console.warn(i))}var wh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[hi]:{transfer:Ra,primaries:Ca,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:mt,primaries:Ca,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:Ra,primaries:La,toReference:i=>i.applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(wh)},[uc]:{transfer:mt,primaries:La,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(wh).convertLinearToSRGB()}},bd=new Set([hi,ao]),ut={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Xr[e].toReference,s=Xr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===An?Ra:Xr[i].transfer}};function Es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Da=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Ia("canvas")),ts.width=e.width,ts.height=e.height;let n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Es(t[n]/255)*255):t[n]=Es(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Md=0,Ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sd=0,Rn=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Tn,o=cr,a=Vn,c=Ti,l=i.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ci(),this.name="",this.source=new Ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qi?pt:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?qi:Nu}set encoding(e){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?pt:An}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Au;Rn.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(f+1)/2,C=(p+1)/2,R=(h+d)/4,P=(u+x)/4,z=(g+m)/4;return v>M&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=z/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=z/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?pt:An),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yl=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),R=Math.atan2(C,p*y);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}let M=a*y;if(c=c*m+d*M,l=l*m+f*M,h=h*m+g*M,u=u*m+x*M,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oo=new O,Th=new Zn,ui=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),$r.subVectors(this.max,Ys),ns.subVectors(e.a,Ys),is.subVectors(e.b,Ys),ss.subVectors(e.c,Ys),vi.subVectors(is,ns),_i.subVectors(ss,is),zi.subVectors(ns,ss);let t=[0,-vi.z,vi.y,0,-_i.z,_i.y,0,-zi.z,zi.y,vi.z,0,-vi.x,_i.z,0,-_i.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-_i.y,_i.x,0,-zi.y,zi.x,0];return!Bo(t,ns,is,ss,$r)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,ns,is,ss,$r))?!1:(Yr.crossVectors(vi,_i),t=[Yr.x,Yr.y,Yr.z],Bo(t,ns,is,ss,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti=[new O,new O,new O,new O,new O,new O,new O,new O],Fn=new O,qr=new ui,ns=new O,is=new O,ss=new O,vi=new O,_i=new O,zi=new O,Ys=new O,$r=new O,Yr=new O,Fi=new O;function Bo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var wd=new ui,Zs=new O,ko=new O,fi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);let t=Zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ko)),this.expandByPoint(Zs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new O,Ho=new O,Zr=new O,yi=new O,Vo=new O,Jr=new O,Go=new O,Ps=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=yi.dot(this.direction),c=-yi.dot(Zr),l=yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ho).addScaledVector(Zr,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){Vo.subVectors(t,e),Jr.subVectors(n,e),Go.crossVectors(Vo,Jr);let o=this.direction.dot(Go),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);let c=a*this.direction.dot(Jr.crossVectors(yi,Jr));if(c<0)return null;let l=a*this.direction.dot(Vo.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(Go);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ed,e,Td)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),bi.crossVectors(n,vn),bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),bi.crossVectors(n,vn)),bi.normalize(),Kr.crossVectors(vn,bi),s[0]=bi.x,s[4]=Kr.x,s[8]=vn.x,s[1]=bi.y,s[5]=Kr.y,s[9]=vn.y,s[2]=bi.z,s[6]=Kr.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],M=n[11],C=n[15],R=s[0],P=s[4],z=s[8],_=s[12],w=s[1],B=s[5],V=s[9],Y=s[13],T=s[2],S=s[6],b=s[10],E=s[14],A=s[3],F=s[7],$=s[11],q=s[15];return r[0]=o*R+a*w+c*T+l*A,r[4]=o*P+a*B+c*S+l*F,r[8]=o*z+a*V+c*b+l*$,r[12]=o*_+a*Y+c*E+l*q,r[1]=h*R+u*w+d*T+f*A,r[5]=h*P+u*B+d*S+f*F,r[9]=h*z+u*V+d*b+f*$,r[13]=h*_+u*Y+d*E+f*q,r[2]=g*R+x*w+m*T+p*A,r[6]=g*P+x*B+m*S+p*F,r[10]=g*z+x*V+m*b+p*$,r[14]=g*_+x*Y+m*E+p*q,r[3]=y*R+v*w+M*T+C*A,r[7]=y*P+v*B+M*S+C*F,r[11]=y*z+v*V+M*b+C*$,r[15]=y*_+v*Y+M*E+C*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,M=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,R=t*y+n*v+s*M+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=y*P,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*P,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*P,e[4]=v*P,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=M*P,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*P,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*P,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*P,e[12]=C*P,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,v=c*h,M=c*u,C=n.x,R=n.y,P=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+M)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-M)*R,s[5]=(1-(d+p))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+v)*P,s[9]=(m-y)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);let l=1/r,h=1/o,u=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=li){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,x;if(a===li)g=(o+r)*u,x=-2*u;else if(a===Pa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rs=new O,On=new qe,Ed=new O(0,0,0),Td=new O(1,1,1),bi=new O,Kr=new O,vn=new O,Ah=new qe,Rh=new Zn,za=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};za.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ad=0,Ch=new O,as=new Zn,ii=new qe,jr=new O,Js=new O,Rd=new O,Cd=new Zn,Lh=new O(1,0,0),Ph=new O(0,1,0),Ih=new O(0,0,1),Ld={type:"added"},Pd={type:"removed"},Nt=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new za,n=new Zn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Je}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Js,jr,this.up):ii.lookAt(jr,Js,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ii),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new O,si=new O,Wo=new O,ri=new O,os=new O,ls=new O,Dh=new O,Xo=new O,qo=new O,$o=new O,Qr=!1,Gi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),si.subVectors(n,t),Wo.subVectors(e,t);let o=Bn.dot(Bn),a=Bn.dot(si),c=Bn.dot(Wo),l=si.dot(si),h=si.dot(Wo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,n,s,r,o,a,c){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),si.subVectors(e,t),Bn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Bn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Qr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,n),ls.subVectors(r,n),Xo.subVectors(e,n);let c=os.dot(Xo),l=ls.dot(Xo);if(c<=0&&l<=0)return t.copy(n);qo.subVectors(e,s);let h=os.dot(qo),u=ls.dot(qo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(os,o);$o.subVectors(e,r);let f=os.dot($o),g=ls.dot($o);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ls,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Dh,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(os,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=_d(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Yo(o,r,e+1/3),this.g=Yo(o,r,e),this.b=Yo(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ut.fromWorkingColorSpace(en.copy(this),e),Math.round(Jt(en.r*255,0,255))*65536+Math.round(Jt(en.g*255,0,255))*256+Math.round(Jt(en.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=pt){ut.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(ea);let n=Uo(Mi.h,ea.h,t),s=Uo(Mi.s,ea.s,t),r=Uo(Mi.l,ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new fe;fe.NAMES=Ou;var Id=0,Gn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ws,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new O,ta=new le,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}};var Fa=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Dd=0,En=new qe,Zo=new Nt,cs=new O,_n=new ui,Ks=new ui,Yt=new O,ft=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Oa:Fa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(_n.min,Ks.min),_n.expandByPoint(Yt),Yt.addVectors(_n.max,Ks.max),_n.expandByPoint(Yt)):(_n.expandByPoint(Ks.min),_n.expandByPoint(Ks.max))}_n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),Yt.add(cs)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new O,h[w]=new O;let u=new O,d=new O,f=new O,g=new le,x=new le,m=new le,p=new O,y=new O;function v(w,B,V){u.fromArray(s,w*3),d.fromArray(s,B*3),f.fromArray(s,V*3),g.fromArray(o,w*2),x.fromArray(o,B*2),m.fromArray(o,V*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let Y=1/(x.x*m.y-m.x*x.y);isFinite(Y)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(Y),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(Y),l[w].add(p),l[B].add(p),l[V].add(p),h[w].add(y),h[B].add(y),h[V].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let w=0,B=M.length;w<B;++w){let V=M[w],Y=V.start,T=V.count;for(let S=Y,b=Y+T;S<b;S+=3)v(n[S+0],n[S+1],n[S+2])}let C=new O,R=new O,P=new O,z=new O;function _(w){P.fromArray(r,w*3),z.copy(P);let B=l[w];C.copy(B),C.sub(P.multiplyScalar(P.dot(B))).normalize(),R.crossVectors(z,B);let Y=R.dot(h[w])<0?-1:1;c[w*4]=C.x,c[w*4+1]=C.y,c[w*4+2]=C.z,c[w*4+3]=Y}for(let w=0,B=M.length;w<B;++w){let V=M[w],Y=V.start,T=V.count;for(let S=Y,b=Y+T;S<b;S+=3)_(n[S+0]),_(n[S+1]),_(n[S+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new qe,Oi=new Ps,na=new fi,Nh=new O,hs=new O,us=new O,fs=new O,Jo=new O,ia=new O,sa=new le,ra=new le,aa=new le,zh=new O,Fh=new O,Oh=new O,oa=new O,la=new O,ke=class extends Nt{constructor(e=new ft,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Jo.fromBufferAttribute(u,e),o?ia.addScaledVector(Jo,h):ia.addScaledVector(Jo.sub(t),h))}t.add(ia)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(na.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(na,Nh)===null||Oi.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,C=v;M<C;M+=3){let R=a.getX(M),P=a.getX(M+1),z=a.getX(M+2);s=ca(this,p,e,n,l,h,u,R,P,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=ca(this,o,e,n,l,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,C=v;M<C;M+=3){let R=M,P=M+1,z=M+2;s=ca(this,p,e,n,l,h,u,R,P,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,M=m+2;s=ca(this,o,e,n,l,h,u,y,v,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ud(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ai,a),c===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,hs),i.getVertexPosition(c,us),i.getVertexPosition(l,fs);let h=Ud(i,e,t,n,hs,us,fs,oa);if(h){s&&(sa.fromBufferAttribute(s,a),ra.fromBufferAttribute(s,c),aa.fromBufferAttribute(s,l),h.uv=Gi.getInterpolation(oa,hs,us,fs,sa,ra,aa,new le)),r&&(sa.fromBufferAttribute(r,a),ra.fromBufferAttribute(r,c),aa.fromBufferAttribute(r,l),h.uv1=Gi.getInterpolation(oa,hs,us,fs,sa,ra,aa,new le),h.uv2=h.uv1),o&&(zh.fromBufferAttribute(o,a),Fh.fromBufferAttribute(o,c),Oh.fromBufferAttribute(o,l),h.normal=Gi.getInterpolation(oa,hs,us,fs,zh,Fh,Oh,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new O,materialIndex:0};Gi.getNormal(hs,us,fs,u.normal),h.face=u}return h}var bn=class i extends ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(x,m,p,y,v,M,C,R,P,z,_){let w=M/P,B=C/z,V=M/2,Y=C/2,T=R/2,S=P+1,b=z+1,E=0,A=0,F=new O;for(let $=0;$<b;$++){let q=$*B-Y;for(let j=0;j<S;j++){let W=j*w-V;F[x]=W*y,F[m]=q*v,F[p]=T,l.push(F.x,F.y,F.z),F[x]=0,F[m]=0,F[p]=R>0?1:-1,h.push(F.x,F.y,F.z),u.push(j/P),u.push(1-$/z),E+=1}}for(let $=0;$<z;$++)for(let q=0;q<P;q++){let j=d+q+S*$,W=d+q+S*($+1),X=d+(q+1)+S*($+1),se=d+(q+1)+S*$;c.push(j,W,se),c.push(W,X,se),A+=6}a.addGroup(f,A,_),f+=A,d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function Nd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bu(i){return i.getRenderTarget()===null?i.outputColorSpace:ut.workingColorSpace}var Li={clone:Is,merge:ln},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ba=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kt=class extends Ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Do*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,ps=1,bl=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(ds,ps,e,t);s.layers=this.layers,this.add(s);let r=new Kt(ds,ps,e,t);r.layers=this.layers,this.add(r);let o=new Kt(ds,ps,e,t);o.layers=this.layers,this.add(o);let a=new Kt(ds,ps,e,t);a.layers=this.layers,this.add(a);let c=new Kt(ds,ps,e,t);c.layers=this.layers,this.add(c);let l=new Kt(ds,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ka=class extends Rn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qi?pt:An),this.texture=new ka(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Yn});r.uniforms.tEquirect.value=t;let o=new ke(s,r),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=Tn),new bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ko=new O,Od=new O,Bd=new Je,kn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ko.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bd.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new fi,ha=new O,ur=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+o,d+h,m+g,M+y).normalize(),n[3].setComponents(c-o,d-h,m-g,M-y).normalize(),n[4].setComponents(c-a,d-u,m-x,M-v).normalize(),t===li)n[5].setComponents(c+a,d+u,m+x,M+v).normalize();else if(t===Pa)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ku(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kd(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var $i=class i extends ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<l;v++){let M=v*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,M=y+l*(p+1),C=y+1+l*(p+1),R=y+1+l*p;f.push(v,M,R),f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,tp=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`
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
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bp=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
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
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,dm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,xm=`uniform vec3 color;
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
}`,vm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:$d,aomap_pars_fragment:Yd,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:Kd,beginnormal_vertex:jd,bsdfs:Qd,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:yp,envmap_pars_fragment:bp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Up,envmap_vertex:Sp,fog_vertex:wp,fog_pars_vertex:Ep,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_fragment:Cp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Dp,lights_toon_fragment:Np,lights_toon_pars_fragment:zp,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:Bp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:$p,map_fragment:Yp,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:Kp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Qp,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:x0,dithering_fragment:v0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:S0,shadowmap_vertex:w0,shadowmask_pars_fragment:E0,skinbase_vertex:T0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:L0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:D0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:z0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:k0,background_frag:H0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:$0,distanceRGBA_vert:Y0,distanceRGBA_frag:Z0,equirect_vert:J0,equirect_frag:K0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:em,meshbasic_frag:tm,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:fm,meshtoon_frag:dm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:xm,sprite_vert:vm,sprite_frag:_m},me={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},$n={basic:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:ln([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:ln([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:ln([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:ln([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:ln([me.lights,me.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ua={r:0,b:0,g:0};function ym(i,e,t,n,s,r,o){let a=new fe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ro)?(h===void 0&&(h=new ke(new bn(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Is($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new $i(2,2),new Lt({name:"BackgroundMaterial",uniforms:Is($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(ua,Bu(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function bm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(T,S,b,E,A){let F=!1;if(o){let $=x(E,b,S);l!==$&&(l=$,f(l.object)),F=p(T,E,b,A),F&&y(T,E,b,A)}else{let $=S.wireframe===!0;(l.geometry!==E.id||l.program!==b.id||l.wireframe!==$)&&(l.geometry=E.id,l.program=b.id,l.wireframe=$,F=!0)}A!==null&&t.update(A,i.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,z(T,S,b,E),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(T){return n.isWebGL2?i.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?i.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function x(T,S,b){let E=b.wireframe===!0,A=a[T.id];A===void 0&&(A={},a[T.id]=A);let F=A[S.id];F===void 0&&(F={},A[S.id]=F);let $=F[E];return $===void 0&&($=m(d()),F[E]=$),$}function m(T){let S=[],b=[],E=[];for(let A=0;A<s;A++)S[A]=0,b[A]=0,E[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:b,attributeDivisors:E,object:T,attributes:{},index:null}}function p(T,S,b,E){let A=l.attributes,F=S.attributes,$=0,q=b.getAttributes();for(let j in q)if(q[j].location>=0){let X=A[j],se=F[j];if(se===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;$++}return l.attributesNum!==$||l.index!==E}function y(T,S,b,E){let A={},F=S.attributes,$=0,q=b.getAttributes();for(let j in q)if(q[j].location>=0){let X=F[j];X===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(X=T.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),A[j]=se,$++}l.attributes=A,l.attributesNum=$,l.index=E}function v(){let T=l.newAttributes;for(let S=0,b=T.length;S<b;S++)T[S]=0}function M(T){C(T,0)}function C(T,S){let b=l.newAttributes,E=l.enabledAttributes,A=l.attributeDivisors;b[T]=1,E[T]===0&&(i.enableVertexAttribArray(T),E[T]=1),A[T]!==S&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,S),A[T]=S)}function R(){let T=l.newAttributes,S=l.enabledAttributes;for(let b=0,E=S.length;b<E;b++)S[b]!==T[b]&&(i.disableVertexAttribArray(b),S[b]=0)}function P(T,S,b,E,A,F,$){$===!0?i.vertexAttribIPointer(T,S,b,A,F):i.vertexAttribPointer(T,S,b,E,A,F)}function z(T,S,b,E){if(n.isWebGL2===!1&&(T.isInstancedMesh||E.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let A=E.attributes,F=b.getAttributes(),$=S.defaultAttributeValues;for(let q in F){let j=F[q];if(j.location>=0){let W=A[q];if(W===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(W=T.instanceColor)),W!==void 0){let X=W.normalized,se=W.itemSize,ve=t.get(W);if(ve===void 0)continue;let be=ve.buffer,Ae=ve.type,De=ve.bytesPerElement,Pe=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||W.gpuType===Ru);if(W.isInterleavedBufferAttribute){let tt=W.data,K=tt.stride,Ot=W.offset;if(tt.isInstancedInterleavedBuffer){for(let D=0;D<j.locationSize;D++)C(j.location+D,tt.meshPerAttribute);T.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let D=0;D<j.locationSize;D++)M(j.location+D);i.bindBuffer(i.ARRAY_BUFFER,be);for(let D=0;D<j.locationSize;D++)P(j.location+D,se/j.locationSize,Ae,X,K*De,(Ot+se/j.locationSize*D)*De,Pe)}else{if(W.isInstancedBufferAttribute){for(let tt=0;tt<j.locationSize;tt++)C(j.location+tt,W.meshPerAttribute);T.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let tt=0;tt<j.locationSize;tt++)M(j.location+tt);i.bindBuffer(i.ARRAY_BUFFER,be);for(let tt=0;tt<j.locationSize;tt++)P(j.location+tt,se/j.locationSize,Ae,X,se*De,se/j.locationSize*tt*De,Pe)}}else if($!==void 0){let X=$[q];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(j.location,X);break;case 3:i.vertexAttrib3fv(j.location,X);break;case 4:i.vertexAttrib4fv(j.location,X);break;default:i.vertexAttrib1fv(j.location,X)}}}}R()}function _(){V();for(let T in a){let S=a[T];for(let b in S){let E=S[b];for(let A in E)g(E[A].object),delete E[A];delete S[b]}delete a[T]}}function w(T){if(a[T.id]===void 0)return;let S=a[T.id];for(let b in S){let E=S[b];for(let A in E)g(E[A].object),delete E[A];delete S[b]}delete a[T.id]}function B(T){for(let S in a){let b=a[S];if(b[T.id]===void 0)continue;let E=b[T.id];for(let A in E)g(E[A].object),delete E[A];delete b[T.id]}}function V(){Y(),h=!0,l!==c&&(l=c,f(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:Y,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function Mm(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Sm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=o||e.has("OES_texture_float"),C=v&&M,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:R}}function wm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,v,f);for(let C=0;C!==v;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Em(i){let e=new WeakMap;function t(o,a){return a===fl?o.mapping=As:a===dl&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fl||a===dl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ml(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ds=class extends Ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bs=4,Bh=[.125,.215,.35,.446,.526,.582],Vi=20,jo=new Ds,kh=new fe,Qo=null,el=0,tl=0,ki=(1+Math.sqrt(5))/2,ms=1/ki,Hh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ki,ms),new O(0,ki,-ms),new O(ms,0,ki),new O(-ms,0,ki),new O(ki,ms,0),new O(-ki,ms,0)],Ha=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:yn,format:Vn,colorSpace:hi,depthBuffer:!1},s=Vh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(r)),this._blurMaterial=Am(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,n,s){let a=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kh),h.toneMapping=Ei,h.autoClear=!1;let f=new Cn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ke(new bn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(kh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;fa(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;fa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hh[(s-1)%Hh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let p=[],y=0;for(let P=0;P<Vi;++P){let z=P/x,_=Math.exp(-z*z/2);p.push(_),P===0?y+=_:P<m&&(y+=2*_)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let M=this._sizeLods[s],C=3*M*(s>v-bs?s-v+bs:0),R=4*(this._cubeSize-M);fa(t,C,R,3*M,2*M),c.setRenderTarget(t),c.render(u,jo)}};function Tm(i){let e=[],t=[],n=[],s=i,r=i-bs+1+Bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-bs?c=Bh[o-i+bs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){let P=R%3*2/3-1,z=R>2?0:-1,_=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];y.set(_,x*g*R),v.set(d,m*g*R);let w=[R,R,R,R,R,R];M.set(w,p*g*R)}let C=new ft;C.setAttribute("position",new Et(y,x)),C.setAttribute("uv",new Et(v,m)),C.setAttribute("faceIndex",new Et(M,p)),e.push(C),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vh(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Am(i,e,t){let n=new Float32Array(Vi),s=new O(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Gh(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Wh(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function Rm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===fl||c===dl,h=c===As||c===Rs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ha(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ha(i));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lm(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,M=y.length;v<M;v+=3){let C=y[v+0],R=y[v+1],P=y[v+2];d.push(C,R,R,P,P,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let C=v+0,R=v+1,P=v+2;d.push(C,R,R,P,P,C)}}else return;let m=new(Fu(d)?Oa:Fa)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pm(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dm(i,e){return i[0]-e[0]}function Um(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Nm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new St,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let T=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",T)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],z=0;y===!0&&(z=1),v===!0&&(z=2),M===!0&&(z=3);let _=h.attributes.position.count*z,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let B=new Float32Array(_*w*4*g),V=new Na(B,_,w,g);V.type=wi,V.needsUpdate=!0;let Y=z*4;for(let S=0;S<g;S++){let b=C[S],E=R[S],A=P[S],F=_*w*4*S;for(let $=0;$<b.count;$++){let q=$*Y;y===!0&&(o.fromBufferAttribute(b,$),B[F+q+0]=o.x,B[F+q+1]=o.y,B[F+q+2]=o.z,B[F+q+3]=0),v===!0&&(o.fromBufferAttribute(E,$),B[F+q+4]=o.x,B[F+q+5]=o.y,B[F+q+6]=o.z,B[F+q+7]=0),M===!0&&(o.fromBufferAttribute(A,$),B[F+q+8]=o.x,B[F+q+9]=o.y,B[F+q+10]=o.z,B[F+q+11]=A.itemSize===4?o.w:1)}}x={count:g,texture:V,size:new le(_,w)},r.set(h,x),h.addEventListener("dispose",T)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){let M=g[v];M[0]=v,M[1]=d[v]}g.sort(Um);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Dm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=a[v],C=M[0],R=M[1];C!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+v)!==x[C]&&h.setAttribute("morphTarget"+v,x[C]),m&&h.getAttribute("morphNormal"+v)!==m[C]&&h.setAttribute("morphNormal"+v,m[C]),s[v]=R,p+=R):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function zm(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Va=class extends Rn{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Xi,h!==Xi&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Si),n===void 0&&h===Ls&&(n=Wi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hu=new Rn,Vu=new Va(1,1);Vu.compareFunction=zu;var Gu=new Na,Wu=new yl,Xu=new ka,Xh=[],qh=[],$h=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oo(i,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Wt(t,n)}}function Vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Wt(t,n)}}function Gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Wt(t,n)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Vu:Hu;t.setTexture2D(e||r,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wu,s)}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xu,s)}function tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gu,s)}function ng(i){switch(i){case 5126:return Fm;case 35664:return Om;case 35665:return Bm;case 35666:return km;case 35674:return Hm;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return $m;case 5125:return Ym;case 36294:return Zm;case 36295:return Jm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return tg}}function ig(i,e){i.uniform1fv(this.addr,e)}function sg(i,e){let t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function rg(i,e){let t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){let t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function og(i,e){let t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lg(i,e){let t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cg(i,e){let t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function ug(i,e){i.uniform2iv(this.addr,e)}function fg(i,e){i.uniform3iv(this.addr,e)}function dg(i,e){i.uniform4iv(this.addr,e)}function pg(i,e){i.uniform1uiv(this.addr,e)}function mg(i,e){i.uniform2uiv(this.addr,e)}function gg(i,e){i.uniform3uiv(this.addr,e)}function xg(i,e){i.uniform4uiv(this.addr,e)}function vg(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hu,r[o])}function _g(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wu,r[o])}function yg(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xu,r[o])}function bg(i,e,t){let n=this.cache,s=e.length,r=oo(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gu,r[o])}function Mg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return fg;case 35669:case 35673:return dg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ng(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}},El=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function Sg(i,e,t){let n=i.name,s=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jh(t,l===void 0?new Sl(a,i,e):new wl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new El(a),Jh(t,u)),t=u}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Sg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wg=37297,Eg=0;function Tg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ag(i){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i),n;switch(e===t?n="":e===La&&t===Ca?n="LinearDisplayP3ToLinearSRGB":e===Ca&&t===La&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case ao:return[n,"LinearTransferOETF"];case pt:case uc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tg(i.getShaderSource(e),o)}else return s}function Rg(i,e){let t=Ag(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cg(i,e){let t;switch(e){case rc:t="Linear";break;case ac:t="Reinhard";break;case oc:t="OptimizedCineon";break;case Ar:t="ACESFilmic";break;case lc:t="AgX";break;case Qf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function Ig(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ms(i){return i!==""}function Qh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(Ug,zg)}var Ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zg(i,e){let t=Ze[e];if(t===void 0){let n=Ng.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Fg,Og)}function Og(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function kg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Rs&&(e="ENVMAP_MODE_REFRACTION"),e}function Vg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Kf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function Gg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Bg(t),l=kg(t),h=Hg(t),u=Vg(t),d=Gg(t),f=t.isWebGL2?"":Lg(t),g=Pg(t),x=Ig(r),m=s.createProgram(),p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[f,nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Tl(o),o=Qh(o,t),o=eu(o,t),a=Tl(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+p+o,C=v+y+a,R=Kh(s,s.VERTEX_SHADER,M),P=Kh(s,s.FRAGMENT_SHADER,C);s.attachShader(m,R),s.attachShader(m,P),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(V){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(m).trim(),T=s.getShaderInfoLog(R).trim(),S=s.getShaderInfoLog(P).trim(),b=!0,E=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(b=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,R,P);else{let A=jh(s,R,"vertex"),F=jh(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+A+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(T===""||S==="")&&(E=!1);E&&(V.diagnostics={runnable:b,programLog:Y,vertexShader:{log:T,prefix:p},fragmentShader:{log:S,prefix:y}})}s.deleteShader(R),s.deleteShader(P),_=new Ts(s,m),w=Dg(s,m)}let _;this.getUniforms=function(){return _===void 0&&z(this),_};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,wg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=P,this}var Xg=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rl(e),t.set(e,n)),n}},Rl=class{constructor(e){this.id=Xg++,this.code=e,this.usedTimes=0}};function qg(i,e,t,n,s,r,o){let a=new hr,c=new Al,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function m(_,w,B,V,Y){let T=V.fog,S=Y.geometry,b=_.isMeshStandardMaterial?V.environment:null,E=(_.isMeshStandardMaterial?t:e).get(_.envMap||b),A=E&&E.mapping===ro?E.image.height:null,F=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let $=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,q=$!==void 0?$.length:0,j=0;S.morphAttributes.position!==void 0&&(j=1),S.morphAttributes.normal!==void 0&&(j=2),S.morphAttributes.color!==void 0&&(j=3);let W,X,se,ve;if(F){let rn=$n[F];W=rn.vertexShader,X=rn.fragmentShader}else W=_.vertexShader,X=_.fragmentShader,c.update(_),se=c.getVertexShaderID(_),ve=c.getFragmentShaderID(_);let be=i.getRenderTarget(),Ae=Y.isInstancedMesh===!0,De=Y.isBatchedMesh===!0,Pe=!!_.map,tt=!!_.matcap,K=!!E,Ot=!!_.aoMap,D=!!_.lightMap,H=!!_.bumpMap,k=!!_.normalMap,ie=!!_.displacementMap,ce=!!_.emissiveMap,U=!!_.metalnessMap,L=!!_.roughnessMap,J=_.anisotropy>0,oe=_.clearcoat>0,ae=_.iridescence>0,he=_.sheen>0,Te=_.transmission>0,xe=J&&!!_.anisotropyMap,re=oe&&!!_.clearcoatMap,ue=oe&&!!_.clearcoatNormalMap,Re=oe&&!!_.clearcoatRoughnessMap,ne=ae&&!!_.iridescenceMap,Ue=ae&&!!_.iridescenceThicknessMap,We=he&&!!_.sheenColorMap,Ne=he&&!!_.sheenRoughnessMap,Se=!!_.specularMap,Ee=!!_.specularColorMap,Xe=!!_.specularIntensityMap,at=Te&&!!_.transmissionMap,bt=Te&&!!_.thicknessMap,je=!!_.gradientMap,de=!!_.alphaMap,G=_.alphaTest>0,pe=!!_.alphaHash,ge=!!_.extensions,Fe=!!S.attributes.uv1,Oe=!!S.attributes.uv2,xt=!!S.attributes.uv3,vt=Ei;return _.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(vt=i.toneMapping),{isWebGL2:h,shaderID:F,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:X,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:De,instancing:Ae,instancingColor:Ae&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:hi,map:Pe,matcap:tt,envMap:K,envMapMode:K&&E.mapping,envMapCubeUVHeight:A,aoMap:Ot,lightMap:D,bumpMap:H,normalMap:k,displacementMap:d&&ie,emissiveMap:ce,normalMapObjectSpace:k&&_.normalMapType===ud,normalMapTangentSpace:k&&_.normalMapType===hc,metalnessMap:U,roughnessMap:L,anisotropy:J,anisotropyMap:xe,clearcoat:oe,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,iridescence:ae,iridescenceMap:ne,iridescenceThicknessMap:Ue,sheen:he,sheenColorMap:We,sheenRoughnessMap:Ne,specularMap:Se,specularColorMap:Ee,specularIntensityMap:Xe,transmission:Te,transmissionMap:at,thicknessMap:bt,gradientMap:je,opaque:_.transparent===!1&&_.blending===ws,alphaMap:de,alphaTest:G,alphaHash:pe,combine:_.combine,mapUv:Pe&&x(_.map.channel),aoMapUv:Ot&&x(_.aoMap.channel),lightMapUv:D&&x(_.lightMap.channel),bumpMapUv:H&&x(_.bumpMap.channel),normalMapUv:k&&x(_.normalMap.channel),displacementMapUv:ie&&x(_.displacementMap.channel),emissiveMapUv:ce&&x(_.emissiveMap.channel),metalnessMapUv:U&&x(_.metalnessMap.channel),roughnessMapUv:L&&x(_.roughnessMap.channel),anisotropyMapUv:xe&&x(_.anisotropyMap.channel),clearcoatMapUv:re&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(_.sheenRoughnessMap.channel),specularMapUv:Se&&x(_.specularMap.channel),specularColorMapUv:Ee&&x(_.specularColorMap.channel),specularIntensityMapUv:Xe&&x(_.specularIntensityMap.channel),transmissionMapUv:at&&x(_.transmissionMap.channel),thicknessMapUv:bt&&x(_.thicknessMap.channel),alphaMapUv:de&&x(_.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(k||J),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Oe,vertexUv3s:xt,pointsUvs:Y.isPoints===!0&&!!S.attributes.uv&&(Pe||de),fog:!!T,useFog:_.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wt,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ge&&_.extensions.derivatives===!0,extensionFragDepth:ge&&_.extensions.fragDepth===!0,extensionDrawBuffers:ge&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)w.push(B),w.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(y(w,_),v(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function y(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function M(_){let w=g[_.type],B;if(w){let V=$n[w];B=Li.clone(V.uniforms)}else B=_.uniforms;return B}function C(_,w){let B;for(let V=0,Y=l.length;V<Y;V++){let T=l[V];if(T.cacheKey===w){B=T,++B.usedTimes;break}}return B===void 0&&(B=new Wg(i,w,_,r),l.push(B)),B}function R(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),_.destroy()}}function P(_){c.remove(_)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:z}}function $g(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Yg),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Zg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new fe};break;case"SpotLight":t={position:new O,direction:new O,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var jg=0;function Qg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ex(i,e){let t=new Jg,n=Kg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new qe,a=new qe;function c(h,u){let d=0,f=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let x=0,m=0,p=0,y=0,v=0,M=0,C=0,R=0,P=0,z=0,_=0;h.sort(Qg);let w=u===!0?Math.PI:1;for(let V=0,Y=h.length;V<Y;V++){let T=h[V],S=T.color,b=T.intensity,E=T.distance,A=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=S.r*b*w,f+=S.g*b*w,g+=S.b*b*w;else if(T.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(T.sh.coefficients[F],b);_++}else if(T.isDirectionalLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity*w),T.castShadow){let $=T.shadow,q=n.get(T);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.directionalShadow[x]=q,s.directionalShadowMap[x]=A,s.directionalShadowMatrix[x]=T.shadow.matrix,M++}s.directional[x]=F,x++}else if(T.isSpotLight){let F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(S).multiplyScalar(b*w),F.distance=E,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,s.spot[p]=F;let $=T.shadow;if(T.map&&(s.spotLightMap[P]=T.map,P++,$.updateMatrices(T),T.castShadow&&z++),s.spotLightMatrix[p]=$.matrix,T.castShadow){let q=n.get(T);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,s.spotShadow[p]=q,s.spotShadowMap[p]=A,R++}p++}else if(T.isRectAreaLight){let F=t.get(T);F.color.copy(S).multiplyScalar(b),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),s.rectArea[y]=F,y++}else if(T.isPointLight){let F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity*w),F.distance=T.distance,F.decay=T.decay,T.castShadow){let $=T.shadow,q=n.get(T);q.shadowBias=$.bias,q.shadowNormalBias=$.normalBias,q.shadowRadius=$.radius,q.shadowMapSize=$.mapSize,q.shadowCameraNear=$.camera.near,q.shadowCameraFar=$.camera.far,s.pointShadow[m]=q,s.pointShadowMap[m]=A,s.pointShadowMatrix[m]=T.shadow.matrix,C++}s.point[m]=F,m++}else if(T.isHemisphereLight){let F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(b*w),F.groundColor.copy(T.groundColor).multiplyScalar(b*w),s.hemi[v]=F,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==x||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==y||B.hemiLength!==v||B.numDirectionalShadows!==M||B.numPointShadows!==C||B.numSpotShadows!==R||B.numSpotMaps!==P||B.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+P-z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=_,B.directionalLength=x,B.pointLength=m,B.spotLength=p,B.rectAreaLength=y,B.hemiLength=v,B.numDirectionalShadows=M,B.numPointShadows=C,B.numSpotShadows=R,B.numSpotMaps=P,B.numLightProbes=_,s.version=jg++)}function l(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let M=h[y];if(M.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(M.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function ru(i,e){let t=new ex(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function tx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new ru(i,e),t.set(r,[c])):o>=a.length?(c=new ru(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Cl=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ll=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ix=`uniform sampler2D shadow_pass;
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
}`;function sx(i,e,t){let n=new ur,s=new le,r=new le,o=new St,a=new Cl({depthPacking:hd}),c=new Ll,l={},h=t.maxTextureSize,u={[Ai]:tn,[tn]:Ai,[wt]:wt},d=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:nx,fragmentShader:ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ft;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let p=this.type;this.render=function(R,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let _=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Yn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Y=p!==ai&&this.type===ai,T=p===ai&&this.type!==ai;for(let S=0,b=R.length;S<b;S++){let E=R[S],A=E.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",E,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);let F=A.getFrameExtents();if(s.multiply(F),r.copy(A.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/F.x),s.x=r.x*F.x,A.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/F.y),s.y=r.y*F.y,A.mapSize.y=r.y)),A.map===null||Y===!0||T===!0){let q=this.type!==ai?{minFilter:cn,magFilter:cn}:{};A.map!==null&&A.map.dispose(),A.map=new Vt(s.x,s.y,q),A.map.texture.name=E.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();let $=A.getViewportCount();for(let q=0;q<$;q++){let j=A.getViewport(q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),V.viewport(o),A.updateMatrices(E,q),n=A.getFrustum(),M(P,z,A.camera,E,this.type)}A.isPointLightShadow!==!0&&this.type===ai&&y(A,z),A.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,w,B)};function y(R,P){let z=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,z,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,z,f,x,null)}function v(R,P,z,_){let w=null,B=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)w=B;else if(w=z.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let V=w.uuid,Y=P.uuid,T=l[V];T===void 0&&(T={},l[V]=T);let S=T[Y];S===void 0&&(S=w.clone(),T[Y]=S,P.addEventListener("dispose",C)),w=S}if(w.visible=P.visible,w.wireframe=P.wireframe,_===ai?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let V=i.properties.get(w);V.light=z}return w}function M(R,P,z,_,w){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===ai)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let Y=e.update(R),T=R.material;if(Array.isArray(T)){let S=Y.groups;for(let b=0,E=S.length;b<E;b++){let A=S[b],F=T[A.materialIndex];if(F&&F.visible){let $=v(R,F,_,w);R.onBeforeShadow(i,R,P,z,Y,$,A),i.renderBufferDirect(z,null,Y,$,R,A),R.onAfterShadow(i,R,P,z,Y,$,A)}}}else if(T.visible){let S=v(R,T,_,w);R.onBeforeShadow(i,R,P,z,Y,S,null),i.renderBufferDirect(z,null,Y,S,R,null),R.onAfterShadow(i,R,P,z,Y,S,null)}}let V=R.children;for(let Y=0,T=V.length;Y<T;Y++)M(V[Y],P,z,_,w)}function C(R){R.target.removeEventListener("dispose",C);for(let z in l){let _=l[z],w=R.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}function rx(i,e,t){let n=t.isWebGL2;function s(){let G=!1,pe=new St,ge=null,Fe=new St(0,0,0,0);return{setMask:function(Oe){ge!==Oe&&!G&&(i.colorMask(Oe,Oe,Oe,Oe),ge=Oe)},setLocked:function(Oe){G=Oe},setClear:function(Oe,xt,vt,qt,rn){rn===!0&&(Oe*=qt,xt*=qt,vt*=qt),pe.set(Oe,xt,vt,qt),Fe.equals(pe)===!1&&(i.clearColor(Oe,xt,vt,qt),Fe.copy(pe))},reset:function(){G=!1,ge=null,Fe.set(-1,0,0,0)}}}function r(){let G=!1,pe=null,ge=null,Fe=null;return{setTest:function(Oe){Oe?De(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(Oe){pe!==Oe&&!G&&(i.depthMask(Oe),pe=Oe)},setFunc:function(Oe){if(ge!==Oe){switch(Oe){case Wf:i.depthFunc(i.NEVER);break;case Xf:i.depthFunc(i.ALWAYS);break;case qf:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case $f:i.depthFunc(i.EQUAL);break;case Yf:i.depthFunc(i.GEQUAL);break;case Zf:i.depthFunc(i.GREATER);break;case Jf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Oe}},setLocked:function(Oe){G=Oe},setClear:function(Oe){Fe!==Oe&&(i.clearDepth(Oe),Fe=Oe)},reset:function(){G=!1,pe=null,ge=null,Fe=null}}}function o(){let G=!1,pe=null,ge=null,Fe=null,Oe=null,xt=null,vt=null,qt=null,rn=null;return{setTest:function(_t){G||(_t?De(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(_t){pe!==_t&&!G&&(i.stencilMask(_t),pe=_t)},setFunc:function(_t,an,qn){(ge!==_t||Fe!==an||Oe!==qn)&&(i.stencilFunc(_t,an,qn),ge=_t,Fe=an,Oe=qn)},setOp:function(_t,an,qn){(xt!==_t||vt!==an||qt!==qn)&&(i.stencilOp(_t,an,qn),xt=_t,vt=an,qt=qn)},setLocked:function(_t){G=_t},setClear:function(_t){rn!==_t&&(i.clearStencil(_t),rn=_t)},reset:function(){G=!1,pe=null,ge=null,Fe=null,Oe=null,xt=null,vt=null,qt=null,rn=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,C=null,R=null,P=null,z=null,_=new fe(0,0,0),w=0,B=!1,V=null,Y=null,T=null,S=null,b=null,E=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,F=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec($)[1]),A=F>=1):$.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),A=F>=2);let q=null,j={},W=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),se=new St().fromArray(W),ve=new St().fromArray(X);function be(G,pe,ge,Fe){let Oe=new Uint8Array(4),xt=i.createTexture();i.bindTexture(G,xt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<ge;vt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(pe+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return xt}let Ae={};Ae[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(i.DEPTH_TEST),c.setFunc(Ea),ce(!1),U(kc),De(i.CULL_FACE),k(Yn);function De(G){d[G]!==!0&&(i.enable(G),d[G]=!0)}function Pe(G){d[G]!==!1&&(i.disable(G),d[G]=!1)}function tt(G,pe){return f[G]!==pe?(i.bindFramebuffer(G,pe),f[G]=pe,n&&(G===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),G===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function K(G,pe){let ge=x,Fe=!1;if(G)if(ge=g.get(pe),ge===void 0&&(ge=[],g.set(pe,ge)),G.isWebGLMultipleRenderTargets){let Oe=G.texture;if(ge.length!==Oe.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,vt=Oe.length;xt<vt;xt++)ge[xt]=i.COLOR_ATTACHMENT0+xt;ge.length=Oe.length,Fe=!0}}else ge[0]!==i.COLOR_ATTACHMENT0&&(ge[0]=i.COLOR_ATTACHMENT0,Fe=!0);else ge[0]!==i.BACK&&(ge[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Ot(G){return m!==G?(i.useProgram(G),m=G,!0):!1}let D={[Hi]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};if(n)D[Gc]=i.MIN,D[Wc]=i.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(D[Gc]=G.MIN_EXT,D[Wc]=G.MAX_EXT)}let H={[Pf]:i.ZERO,[If]:i.ONE,[Df]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Bf]:i.SRC_ALPHA_SATURATE,[Ff]:i.DST_COLOR,[Nf]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[Of]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[Gf]:i.ONE_MINUS_CONSTANT_ALPHA};function k(G,pe,ge,Fe,Oe,xt,vt,qt,rn,_t){if(G===Yn){p===!0&&(Pe(i.BLEND),p=!1);return}if(p===!1&&(De(i.BLEND),p=!0),G!==Rf){if(G!==y||_t!==B){if((v!==Hi||R!==Hi)&&(i.blendEquation(i.FUNC_ADD),v=Hi,R=Hi),_t)switch(G){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,C=null,P=null,z=null,_.set(0,0,0),w=0,y=G,B=_t}return}Oe=Oe||pe,xt=xt||ge,vt=vt||Fe,(pe!==v||Oe!==R)&&(i.blendEquationSeparate(D[pe],D[Oe]),v=pe,R=Oe),(ge!==M||Fe!==C||xt!==P||vt!==z)&&(i.blendFuncSeparate(H[ge],H[Fe],H[xt],H[vt]),M=ge,C=Fe,P=xt,z=vt),(qt.equals(_)===!1||rn!==w)&&(i.blendColor(qt.r,qt.g,qt.b,rn),_.copy(qt),w=rn),y=G,B=!1}function ie(G,pe){G.side===wt?Pe(i.CULL_FACE):De(i.CULL_FACE);let ge=G.side===tn;pe&&(ge=!ge),ce(ge),G.blending===ws&&G.transparent===!1?k(Yn):k(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let Fe=G.stencilWrite;l.setTest(Fe),Fe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),J(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){V!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),V=G)}function U(G){G!==Tf?(De(i.CULL_FACE),G!==Y&&(G===kc?i.cullFace(i.BACK):G===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),Y=G}function L(G){G!==T&&(A&&i.lineWidth(G),T=G)}function J(G,pe,ge){G?(De(i.POLYGON_OFFSET_FILL),(S!==pe||b!==ge)&&(i.polygonOffset(pe,ge),S=pe,b=ge)):Pe(i.POLYGON_OFFSET_FILL)}function oe(G){G?De(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function ae(G){G===void 0&&(G=i.TEXTURE0+E-1),q!==G&&(i.activeTexture(G),q=G)}function he(G,pe,ge){ge===void 0&&(q===null?ge=i.TEXTURE0+E-1:ge=q);let Fe=j[ge];Fe===void 0&&(Fe={type:void 0,texture:void 0},j[ge]=Fe),(Fe.type!==G||Fe.texture!==pe)&&(q!==ge&&(i.activeTexture(ge),q=ge),i.bindTexture(G,pe||Ae[G]),Fe.type=G,Fe.texture=pe)}function Te(){let G=j[q];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(G){se.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),se.copy(G))}function at(G){ve.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ve.copy(G))}function bt(G,pe){let ge=u.get(pe);ge===void 0&&(ge=new WeakMap,u.set(pe,ge));let Fe=ge.get(G);Fe===void 0&&(Fe=i.getUniformBlockIndex(pe,G.name),ge.set(G,Fe))}function je(G,pe){let Fe=u.get(pe).get(G);h.get(pe)!==Fe&&(i.uniformBlockBinding(pe,Fe,G.__bindingPointIndex),h.set(pe,Fe))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,j={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,v=null,M=null,C=null,R=null,P=null,z=null,_=new fe(0,0,0),w=0,B=!1,V=null,Y=null,T=null,S=null,b=null,se.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:Pe,bindFramebuffer:tt,drawBuffers:K,useProgram:Ot,setBlending:k,setMaterial:ie,setFlipSided:ce,setCullFace:U,setLineWidth:L,setPolygonOffset:J,setScissorTest:oe,activeTexture:ae,bindTexture:he,unbindTexture:Te,compressedTexImage2D:xe,compressedTexImage3D:re,texImage2D:Se,texImage3D:Ee,updateUBOMapping:bt,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Ne,texSubImage2D:ue,texSubImage3D:Re,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ue,scissor:Xe,viewport:at,reset:de}}function ax(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,L){return f?new OffscreenCanvas(U,L):Ia("canvas")}function x(U,L,J,oe){let ae=1;if((U.width>oe||U.height>oe)&&(ae=oe/Math.max(U.width,U.height)),ae<1||L===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){let he=L?vl:Math.floor,Te=he(ae*U.width),xe=he(ae*U.height);u===void 0&&(u=g(Te,xe));let re=J?g(Te,xe):u;return re.width=Te,re.height=xe,re.getContext("2d").drawImage(U,0,0,Te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Te+"x"+xe+")."),re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function m(U){return Mh(U.width)&&Mh(U.height)}function p(U){return a?!1:U.wrapS!==Hn||U.wrapT!==Hn||U.minFilter!==cn&&U.minFilter!==Tn}function y(U,L){return U.generateMipmaps&&L&&U.minFilter!==cn&&U.minFilter!==Tn}function v(U){i.generateMipmap(U)}function M(U,L,J,oe,ae=!1){if(a===!1)return L;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let he=L;if(L===i.RED&&(J===i.FLOAT&&(he=i.R32F),J===i.HALF_FLOAT&&(he=i.R16F),J===i.UNSIGNED_BYTE&&(he=i.R8)),L===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(he=i.R8UI),J===i.UNSIGNED_SHORT&&(he=i.R16UI),J===i.UNSIGNED_INT&&(he=i.R32UI),J===i.BYTE&&(he=i.R8I),J===i.SHORT&&(he=i.R16I),J===i.INT&&(he=i.R32I)),L===i.RG&&(J===i.FLOAT&&(he=i.RG32F),J===i.HALF_FLOAT&&(he=i.RG16F),J===i.UNSIGNED_BYTE&&(he=i.RG8)),L===i.RGBA){let Te=ae?Ra:ut.getTransfer(oe);J===i.FLOAT&&(he=i.RGBA32F),J===i.HALF_FLOAT&&(he=i.RGBA16F),J===i.UNSIGNED_BYTE&&(he=Te===mt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(U,L,J){return y(U,J)===!0||U.isFramebufferTexture&&U.minFilter!==cn&&U.minFilter!==Tn?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function R(U){return U===cn||U===Xc||U===To?i.NEAREST:i.LINEAR}function P(U){let L=U.target;L.removeEventListener("dispose",P),_(L),L.isVideoTexture&&h.delete(L)}function z(U){let L=U.target;L.removeEventListener("dispose",z),B(L)}function _(U){let L=n.get(U);if(L.__webglInit===void 0)return;let J=U.source,oe=d.get(J);if(oe){let ae=oe[L.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(U),Object.keys(oe).length===0&&d.delete(J)}n.remove(U)}function w(U){let L=n.get(U);i.deleteTexture(L.__webglTexture);let J=U.source,oe=d.get(J);delete oe[L.__cacheKey],o.memory.textures--}function B(U){let L=U.texture,J=n.get(U),oe=n.get(L);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(J.__webglFramebuffer[ae]))for(let he=0;he<J.__webglFramebuffer[ae].length;he++)i.deleteFramebuffer(J.__webglFramebuffer[ae][he]);else i.deleteFramebuffer(J.__webglFramebuffer[ae]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[ae])}else{if(Array.isArray(J.__webglFramebuffer))for(let ae=0;ae<J.__webglFramebuffer.length;ae++)i.deleteFramebuffer(J.__webglFramebuffer[ae]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ae=0;ae<J.__webglColorRenderbuffer.length;ae++)J.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[ae]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let ae=0,he=L.length;ae<he;ae++){let Te=n.get(L[ae]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(L[ae])}n.remove(L),n.remove(U)}let V=0;function Y(){V=0}function T(){let U=V;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),V+=1,U}function S(U){let L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function b(U,L){let J=n.get(U);if(U.isVideoTexture&&ie(U),U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){let oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(J,U,L);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+L)}function E(U,L){let J=n.get(U);if(U.version>0&&J.__version!==U.version){se(J,U,L);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+L)}function A(U,L){let J=n.get(U);if(U.version>0&&J.__version!==U.version){se(J,U,L);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+L)}function F(U,L){let J=n.get(U);if(U.version>0&&J.__version!==U.version){ve(J,U,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+L)}let $={[Cs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[pl]:i.MIRRORED_REPEAT},q={[cn]:i.NEAREST,[Xc]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[ed]:i.LINEAR_MIPMAP_NEAREST,[cr]:i.LINEAR_MIPMAP_LINEAR},j={[fd]:i.NEVER,[vd]:i.ALWAYS,[dd]:i.LESS,[zu]:i.LEQUAL,[pd]:i.EQUAL,[xd]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function W(U,L,J){if(J?(i.texParameteri(U,i.TEXTURE_WRAP_S,$[L.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,$[L.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,$[L.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,q[L.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,q[L.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==Hn||L.wrapT!==Hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,R(L.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,R(L.minFilter)),L.minFilter!==cn&&L.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,j[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===cn||L.minFilter!==To&&L.minFilter!==cr||L.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&L.type===yn&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function X(U,L){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",P));let oe=L.source,ae=d.get(oe);ae===void 0&&(ae={},d.set(oe,ae));let he=S(L);if(he!==U.__cacheKey){ae[he]===void 0&&(ae[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ae[he].usedTimes++;let Te=ae[U.__cacheKey];Te!==void 0&&(ae[U.__cacheKey].usedTimes--,Te.usedTimes===0&&w(L)),U.__cacheKey=he,U.__webglTexture=ae[he].texture}return J}function se(U,L,J){let oe=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(oe=i.TEXTURE_3D);let ae=X(U,L),he=L.source;t.bindTexture(oe,U.__webglTexture,i.TEXTURE0+J);let Te=n.get(he);if(he.version!==Te.__version||ae===!0){t.activeTexture(i.TEXTURE0+J);let xe=ut.getPrimaries(ut.workingColorSpace),re=L.colorSpace===An?null:ut.getPrimaries(L.colorSpace),ue=L.colorSpace===An||xe===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Re=p(L)&&m(L.image)===!1,ne=x(L.image,Re,!1,s.maxTextureSize);ne=ce(L,ne);let Ue=m(ne)||a,We=r.convert(L.format,L.colorSpace),Ne=r.convert(L.type),Se=M(L.internalFormat,We,Ne,L.colorSpace,L.isVideoTexture);W(oe,L,Ue);let Ee,Xe=L.mipmaps,at=a&&L.isVideoTexture!==!0&&Se!==Uu,bt=Te.__version===void 0||ae===!0,je=C(L,ne,Ue);if(L.isDepthTexture)Se=i.DEPTH_COMPONENT,a?L.type===wi?Se=i.DEPTH_COMPONENT32F:L.type===Si?Se=i.DEPTH_COMPONENT24:L.type===Wi?Se=i.DEPTH24_STENCIL8:Se=i.DEPTH_COMPONENT16:L.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Xi&&Se===i.DEPTH_COMPONENT&&L.type!==cc&&L.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=Si,Ne=r.convert(L.type)),L.format===Ls&&Se===i.DEPTH_COMPONENT&&(Se=i.DEPTH_STENCIL,L.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Wi,Ne=r.convert(L.type))),bt&&(at?t.texStorage2D(i.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Se,ne.width,ne.height,0,We,Ne,null));else if(L.isDataTexture)if(Xe.length>0&&Ue){at&&bt&&t.texStorage2D(i.TEXTURE_2D,je,Se,Xe[0].width,Xe[0].height);for(let de=0,G=Xe.length;de<G;de++)Ee=Xe[de],at?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,We,Ne,Ee.data):t.texImage2D(i.TEXTURE_2D,de,Se,Ee.width,Ee.height,0,We,Ne,Ee.data);L.generateMipmaps=!1}else at?(bt&&t.texStorage2D(i.TEXTURE_2D,je,Se,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,We,Ne,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Se,ne.width,ne.height,0,We,Ne,ne.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){at&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Se,Xe[0].width,Xe[0].height,ne.depth);for(let de=0,G=Xe.length;de<G;de++)Ee=Xe[de],L.format!==Vn?We!==null?at?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ne.depth,We,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Se,Ee.width,Ee.height,ne.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,ne.depth,We,Ne,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Se,Ee.width,Ee.height,ne.depth,0,We,Ne,Ee.data)}else{at&&bt&&t.texStorage2D(i.TEXTURE_2D,je,Se,Xe[0].width,Xe[0].height);for(let de=0,G=Xe.length;de<G;de++)Ee=Xe[de],L.format!==Vn?We!==null?at?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,We,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Se,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(i.TEXTURE_2D,de,0,0,Ee.width,Ee.height,We,Ne,Ee.data):t.texImage2D(i.TEXTURE_2D,de,Se,Ee.width,Ee.height,0,We,Ne,Ee.data)}else if(L.isDataArrayTexture)at?(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,We,Ne,ne.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,We,Ne,ne.data);else if(L.isData3DTexture)at?(bt&&t.texStorage3D(i.TEXTURE_3D,je,Se,ne.width,ne.height,ne.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,We,Ne,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,We,Ne,ne.data);else if(L.isFramebufferTexture){if(bt)if(at)t.texStorage2D(i.TEXTURE_2D,je,Se,ne.width,ne.height);else{let de=ne.width,G=ne.height;for(let pe=0;pe<je;pe++)t.texImage2D(i.TEXTURE_2D,pe,Se,de,G,0,We,Ne,null),de>>=1,G>>=1}}else if(Xe.length>0&&Ue){at&&bt&&t.texStorage2D(i.TEXTURE_2D,je,Se,Xe[0].width,Xe[0].height);for(let de=0,G=Xe.length;de<G;de++)Ee=Xe[de],at?t.texSubImage2D(i.TEXTURE_2D,de,0,0,We,Ne,Ee):t.texImage2D(i.TEXTURE_2D,de,Se,We,Ne,Ee);L.generateMipmaps=!1}else at?(bt&&t.texStorage2D(i.TEXTURE_2D,je,Se,ne.width,ne.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,Ne,ne)):t.texImage2D(i.TEXTURE_2D,0,Se,We,Ne,ne);y(L,Ue)&&v(oe),Te.__version=he.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function ve(U,L,J){if(L.image.length!==6)return;let oe=X(U,L),ae=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+J);let he=n.get(ae);if(ae.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+J);let Te=ut.getPrimaries(ut.workingColorSpace),xe=L.colorSpace===An?null:ut.getPrimaries(L.colorSpace),re=L.colorSpace===An||Te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ue=L.isCompressedTexture||L.image[0].isCompressedTexture,Re=L.image[0]&&L.image[0].isDataTexture,ne=[];for(let de=0;de<6;de++)!ue&&!Re?ne[de]=x(L.image[de],!1,!0,s.maxCubemapSize):ne[de]=Re?L.image[de].image:L.image[de],ne[de]=ce(L,ne[de]);let Ue=ne[0],We=m(Ue)||a,Ne=r.convert(L.format,L.colorSpace),Se=r.convert(L.type),Ee=M(L.internalFormat,Ne,Se,L.colorSpace),Xe=a&&L.isVideoTexture!==!0,at=he.__version===void 0||oe===!0,bt=C(L,Ue,We);W(i.TEXTURE_CUBE_MAP,L,We);let je;if(ue){Xe&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Ee,Ue.width,Ue.height);for(let de=0;de<6;de++){je=ne[de].mipmaps;for(let G=0;G<je.length;G++){let pe=je[G];L.format!==Vn?Ne!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G,0,0,pe.width,pe.height,Ne,Se,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G,Ee,pe.width,pe.height,0,Ne,Se,pe.data)}}}else{je=L.mipmaps,Xe&&at&&(je.length>0&&bt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Ee,ne[0].width,ne[0].height));for(let de=0;de<6;de++)if(Re){Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ne[de].width,ne[de].height,Ne,Se,ne[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,ne[de].width,ne[de].height,0,Ne,Se,ne[de].data);for(let G=0;G<je.length;G++){let ge=je[G].image[de].image;Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G+1,0,0,ge.width,ge.height,Ne,Se,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G+1,Ee,ge.width,ge.height,0,Ne,Se,ge.data)}}else{Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Se,ne[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ee,Ne,Se,ne[de]);for(let G=0;G<je.length;G++){let pe=je[G];Xe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G+1,0,0,Ne,Se,pe.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,G+1,Ee,Ne,Se,pe.image[de])}}}y(L,We)&&v(i.TEXTURE_CUBE_MAP),he.__version=ae.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function be(U,L,J,oe,ae,he){let Te=r.convert(J.format,J.colorSpace),xe=r.convert(J.type),re=M(J.internalFormat,Te,xe,J.colorSpace);if(!n.get(L).__hasExternalTextures){let Re=Math.max(1,L.width>>he),ne=Math.max(1,L.height>>he);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,he,re,Re,ne,L.depth,0,Te,xe,null):t.texImage2D(ae,he,re,Re,ne,0,Te,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),k(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ae,n.get(J).__webglTexture,0,H(L)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ae,n.get(J).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(U,L,J){if(i.bindRenderbuffer(i.RENDERBUFFER,U),L.depthBuffer&&!L.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||k(L)){let ae=L.depthTexture;ae&&ae.isDepthTexture&&(ae.type===wi?oe=i.DEPTH_COMPONENT32F:ae.type===Si&&(oe=i.DEPTH_COMPONENT24));let he=H(L);k(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,oe,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,oe,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(L.depthBuffer&&L.stencilBuffer){let oe=H(L);J&&k(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,L.width,L.height):k(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{let oe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ae=0;ae<oe.length;ae++){let he=oe[ae],Te=r.convert(he.format,he.colorSpace),xe=r.convert(he.type),re=M(he.internalFormat,Te,xe,he.colorSpace),ue=H(L);J&&k(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,re,L.width,L.height):k(L)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,re,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,re,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),b(L.depthTexture,0);let oe=n.get(L.depthTexture).__webglTexture,ae=H(L);if(L.depthTexture.format===Xi)k(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(L.depthTexture.format===Ls)k(L)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Pe(U){let L=n.get(U),J=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");De(L.__webglFramebuffer,U)}else if(J){L.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[oe]),L.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ae(L.__webglDepthbuffer[oe],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),Ae(L.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(U,L,J){let oe=n.get(U);L!==void 0&&be(oe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Pe(U)}function K(U){let L=U.texture,J=n.get(U),oe=n.get(L);U.addEventListener("dispose",z),U.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=L.version,o.memory.textures++);let ae=U.isWebGLCubeRenderTarget===!0,he=U.isWebGLMultipleRenderTargets===!0,Te=m(U)||a;if(ae){J.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer[xe]=[];for(let re=0;re<L.mipmaps.length;re++)J.__webglFramebuffer[xe][re]=i.createFramebuffer()}else J.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer=[];for(let xe=0;xe<L.mipmaps.length;xe++)J.__webglFramebuffer[xe]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let xe=U.texture;for(let re=0,ue=xe.length;re<ue;re++){let Re=n.get(xe[re]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&U.samples>0&&k(U)===!1){let xe=he?L:[L];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let re=0;re<xe.length;re++){let ue=xe[re];J.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[re]);let Re=r.convert(ue.format,ue.colorSpace),ne=r.convert(ue.type),Ue=M(ue.internalFormat,Re,ne,ue.colorSpace,U.isXRRenderTarget===!0),We=H(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Ue,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,J.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),W(i.TEXTURE_CUBE_MAP,L,Te);for(let xe=0;xe<6;xe++)if(a&&L.mipmaps&&L.mipmaps.length>0)for(let re=0;re<L.mipmaps.length;re++)be(J.__webglFramebuffer[xe][re],U,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,re);else be(J.__webglFramebuffer[xe],U,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(L,Te)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let xe=U.texture;for(let re=0,ue=xe.length;re<ue;re++){let Re=xe[re],ne=n.get(Re);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),W(i.TEXTURE_2D,Re,Te),be(J.__webglFramebuffer,U,Re,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),y(Re,Te)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(a?xe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,oe.__webglTexture),W(xe,L,Te),a&&L.mipmaps&&L.mipmaps.length>0)for(let re=0;re<L.mipmaps.length;re++)be(J.__webglFramebuffer[re],U,L,i.COLOR_ATTACHMENT0,xe,re);else be(J.__webglFramebuffer,U,L,i.COLOR_ATTACHMENT0,xe,0);y(L,Te)&&v(xe),t.unbindTexture()}U.depthBuffer&&Pe(U)}function Ot(U){let L=m(U)||a,J=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let oe=0,ae=J.length;oe<ae;oe++){let he=J[oe];if(y(he,L)){let Te=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(he).__webglTexture;t.bindTexture(Te,xe),v(Te),t.unbindTexture()}}}function D(U){if(a&&U.samples>0&&k(U)===!1){let L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],J=U.width,oe=U.height,ae=i.COLOR_BUFFER_BIT,he=[],Te=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(U),re=U.isWebGLMultipleRenderTargets===!0;if(re)for(let ue=0;ue<L.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<L.length;ue++){he.push(i.COLOR_ATTACHMENT0+ue),U.depthBuffer&&he.push(Te);let Re=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Re===!1&&(U.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]),Re===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),re){let ne=n.get(L[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,J,oe,0,0,J,oe,ae,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<L.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);let Re=n.get(L[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function H(U){return Math.min(s.maxSamples,U.samples)}function k(U){let L=n.get(U);return a&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function ie(U){let L=o.render.frame;h.get(U)!==L&&(h.set(U,L),U.update())}function ce(U,L){let J=U.colorSpace,oe=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===gl||J!==hi&&J!==An&&(ut.getTransfer(J)===mt?a===!1?e.has("EXT_sRGB")===!0&&oe===Vn?(U.format=gl,U.minFilter=Tn,U.generateMipmaps=!1):L=Da.sRGBToLinear(L):(oe!==Vn||ae!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),L}this.allocateTextureUnit=T,this.resetTextureUnits=Y,this.setTexture2D=b,this.setTexture2DArray=E,this.setTexture3D=A,this.setTextureCube=F,this.rebindTextures=tt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=k}function ox(i,e,t){let n=t.isWebGL2;function s(r,o=An){let a,c=ut.getTransfer(o);if(r===Ti)return i.UNSIGNED_BYTE;if(r===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===td)return i.BYTE;if(r===nd)return i.SHORT;if(r===cc)return i.UNSIGNED_SHORT;if(r===Ru)return i.INT;if(r===Si)return i.UNSIGNED_INT;if(r===wi)return i.FLOAT;if(r===yn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===id)return i.ALPHA;if(r===Vn)return i.RGBA;if(r===sd)return i.LUMINANCE;if(r===rd)return i.LUMINANCE_ALPHA;if(r===Xi)return i.DEPTH_COMPONENT;if(r===Ls)return i.DEPTH_STENCIL;if(r===gl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ad)return i.RED;if(r===Pu)return i.RED_INTEGER;if(r===od)return i.RG;if(r===Iu)return i.RG_INTEGER;if(r===Du)return i.RGBA_INTEGER;if(r===Ao||r===Ro||r===Co||r===Lo)if(c===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ao)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ao)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qc||r===$c||r===Yc||r===Zc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jc||r===Kc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Jc)return c===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kc)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh||r===ch||r===hh||r===uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jc)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qc)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return c===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Po||r===fh||r===dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Po)return c===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ld||r===ph||r===mh||r===gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Po)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Pl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ut=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Il=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],v=[],M=new le,C=null,R=new Kt;R.layers.enable(1),R.viewport=new St;let P=new Kt;P.layers.enable(2),P.viewport=new St;let z=[R,P],_=new Pl;_.layers.enable(1),_.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=y[W];return X===void 0&&(X=new rr,y[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=y[W];return X===void 0&&(X=new rr,y[W]=X),X.getGripSpace()},this.getHand=function(W){let X=y[W];return X===void 0&&(X=new rr,y[W]=X),X.getHandSpace()};function V(W){let X=v.indexOf(W.inputSource);if(X===-1)return;let se=y[X];se!==void 0&&(se.update(W.inputSource,W.frame,l||o),se.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",T);for(let W=0;W<y.length;W++){let X=v[W];X!==null&&(v[W]=null,y[W].disconnect(X))}w=null,B=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",T),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Vt(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,se=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?Ls:Xi,se=x.stencil?Wi:Si);let be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Vt(d.textureWidth,d.textureHeight,{format:Vn,type:Ti,depthTexture:new Va(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ae=e.properties.get(p);Ae.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function T(W){for(let X=0;X<W.removed.length;X++){let se=W.removed[X],ve=v.indexOf(se);ve>=0&&(v[ve]=null,y[ve].disconnect(se))}for(let X=0;X<W.added.length;X++){let se=W.added[X],ve=v.indexOf(se);if(ve===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=v.length){v.push(se),ve=Ae;break}else if(v[Ae]===null){v[Ae]=se,ve=Ae;break}if(ve===-1)break}let be=y[ve];be&&be.connect(se)}}let S=new O,b=new O;function E(W,X,se){S.setFromMatrixPosition(X.matrixWorld),b.setFromMatrixPosition(se.matrixWorld);let ve=S.distanceTo(b),be=X.projectionMatrix.elements,Ae=se.projectionMatrix.elements,De=be[14]/(be[10]-1),Pe=be[14]/(be[10]+1),tt=(be[9]+1)/be[5],K=(be[9]-1)/be[5],Ot=(be[8]-1)/be[0],D=(Ae[8]+1)/Ae[0],H=De*Ot,k=De*D,ie=ve/(-Ot+D),ce=ie*-Ot;X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ce),W.translateZ(ie),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let U=De+ie,L=Pe+ie,J=H-ce,oe=k+(ve-ce),ae=tt*Pe/L*U,he=K*Pe/L*U;W.projectionMatrix.makePerspective(J,oe,ae,he,U,L),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function A(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;_.near=P.near=R.near=W.near,_.far=P.far=R.far=W.far,(w!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,B=_.far);let X=W.parent,se=_.cameras;A(_,X);for(let ve=0;ve<se.length;ve++)A(se[ve],X);se.length===2?E(_,R,P):_.projectionMatrix.copy(R.projectionMatrix),F(W,_,X)};function F(W,X,se){se===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=xl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let $=null;function q(W,X){if(h=X.getViewerPose(l||o),g=X,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ve=!1;se.length!==_.cameras.length&&(_.cameras.length=0,ve=!0);for(let be=0;be<se.length;be++){let Ae=se[be],De=null;if(f!==null)De=f.getViewport(Ae);else{let tt=u.getViewSubImage(d,Ae);De=tt.viewport,be===0&&(e.setRenderTargetTextures(p,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),e.setRenderTarget(p))}let Pe=z[be];Pe===void 0&&(Pe=new Kt,Pe.layers.enable(be),Pe.viewport=new St,z[be]=Pe),Pe.matrix.fromArray(Ae.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ae.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(De.x,De.y,De.width,De.height),be===0&&(_.matrix.copy(Pe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ve===!0&&_.cameras.push(Pe)}}for(let se=0;se<y.length;se++){let ve=v[se],be=y[se];ve!==null&&be!==void 0&&be.update(ve,X,l||o)}$&&$(W,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let j=new ku;j.setAnimationLoop(q),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}};function cx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hx(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let M=v.program;n.uniformBlockBinding(y,M)}function l(y,v){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(y,C);let R=e.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function h(y){let v=u();y.__bindingPointIndex=v;let M=i.createBuffer(),C=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,P=M.length;R<P;R++){let z=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,w=z.length;_<w;_++){let B=z[_];if(f(B,R,_,C)===!0){let V=B.__offset,Y=Array.isArray(B.value)?B.value:[B.value],T=0;for(let S=0;S<Y.length;S++){let b=Y[S],E=x(b);typeof b=="number"||typeof b=="boolean"?(B.__data[0]=b,i.bufferSubData(i.UNIFORM_BUFFER,V+T,B.__data)):b.isMatrix3?(B.__data[0]=b.elements[0],B.__data[1]=b.elements[1],B.__data[2]=b.elements[2],B.__data[3]=0,B.__data[4]=b.elements[3],B.__data[5]=b.elements[4],B.__data[6]=b.elements[5],B.__data[7]=0,B.__data[8]=b.elements[6],B.__data[9]=b.elements[7],B.__data[10]=b.elements[8],B.__data[11]=0):(b.toArray(B.__data,T),T+=E.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,M,C){let R=y.value,P=v+"_"+M;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{let z=C[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[P]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(y){let v=y.uniforms,M=0,C=16;for(let P=0,z=v.length;P<z;P++){let _=Array.isArray(v[P])?v[P]:[v[P]];for(let w=0,B=_.length;w<B;w++){let V=_[w],Y=Array.isArray(V.value)?V.value:[V.value];for(let T=0,S=Y.length;T<S;T++){let b=Y[T],E=x(b),A=M%C;A!==0&&C-A<E.boundary&&(M+=C-A),V.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=E.storage}}}let R=M%C;return R>0&&(M+=C-R),y.__size=M,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var fr=class{constructor(e={}){let{canvas:t=yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;let v=this,M=!1,C=0,R=0,P=null,z=-1,_=null,w=new St,B=new St,V=null,Y=new fe(0),T=0,S=t.width,b=t.height,E=1,A=null,F=null,$=new St(0,0,S,b),q=new St(0,0,S,b),j=!1,W=new ur,X=!1,se=!1,ve=null,be=new qe,Ae=new le,De=new O,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return P===null?E:1}let K=n;function Ot(N,Z){for(let ee=0;ee<N.length;ee++){let te=N[ee],Q=t.getContext(te,Z);if(Q!==null)return Q}return null}try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",pe,!1),K===null){let Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),K=Ot(Z,N),K===null)throw Ot(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let D,H,k,ie,ce,U,L,J,oe,ae,he,Te,xe,re,ue,Re,ne,Ue,We,Ne,Se,Ee,Xe,at;function bt(){D=new Cm(K),H=new Sm(K,D,e),D.init(H),Ee=new ox(K,D,H),k=new rx(K,D,H),ie=new Im(K),ce=new $g,U=new ax(K,D,k,ce,H,Ee,ie),L=new Em(v),J=new Rm(v),oe=new kd(K,H),Xe=new bm(K,D,oe,H),ae=new Lm(K,oe,ie,Xe),he=new zm(K,ae,oe,ie),We=new Nm(K,H,U),Re=new wm(ce),Te=new qg(v,L,J,D,H,Xe,Re),xe=new cx(v,ce),re=new Zg,ue=new tx(D,H),Ue=new ym(v,L,J,k,he,d,c),ne=new sx(v,he,H),at=new hx(K,ie,H,k),Ne=new Mm(K,D,ie,H),Se=new Pm(K,D,ie,H),ie.programs=Te.programs,v.capabilities=H,v.extensions=D,v.properties=ce,v.renderLists=re,v.shadowMap=ne,v.state=k,v.info=ie}bt();let je=new Il(v,K);this.xr=je,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let N=D.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=D.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return E},this.setPixelRatio=function(N){N!==void 0&&(E=N,this.setSize(S,b,!1))},this.getSize=function(N){return N.set(S,b)},this.setSize=function(N,Z,ee=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=N,b=Z,t.width=Math.floor(N*E),t.height=Math.floor(Z*E),ee===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(S*E,b*E).floor()},this.setDrawingBufferSize=function(N,Z,ee){S=N,b=Z,E=ee,t.width=Math.floor(N*ee),t.height=Math.floor(Z*ee),this.setViewport(0,0,N,Z)},this.getCurrentViewport=function(N){return N.copy(w)},this.getViewport=function(N){return N.copy($)},this.setViewport=function(N,Z,ee,te){N.isVector4?$.set(N.x,N.y,N.z,N.w):$.set(N,Z,ee,te),k.viewport(w.copy($).multiplyScalar(E).floor())},this.getScissor=function(N){return N.copy(q)},this.setScissor=function(N,Z,ee,te){N.isVector4?q.set(N.x,N.y,N.z,N.w):q.set(N,Z,ee,te),k.scissor(B.copy(q).multiplyScalar(E).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(N){k.setScissorTest(j=N)},this.setOpaqueSort=function(N){A=N},this.setTransparentSort=function(N){F=N},this.getClearColor=function(N){return N.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(N=!0,Z=!0,ee=!0){let te=0;if(N){let Q=!1;if(P!==null){let Me=P.texture.format;Q=Me===Du||Me===Iu||Me===Pu}if(Q){let Me=P.texture.type,Ce=Me===Ti||Me===Si||Me===cc||Me===Wi||Me===Cu||Me===Lu,Be=Ue.getClearColor(),Ge=Ue.getClearAlpha(),Qe=Be.r,Ye=Be.g,Ke=Be.b;Ce?(f[0]=Qe,f[1]=Ye,f[2]=Ke,f[3]=Ge,K.clearBufferuiv(K.COLOR,0,f)):(g[0]=Qe,g[1]=Ye,g[2]=Ke,g[3]=Ge,K.clearBufferiv(K.COLOR,0,g))}else te|=K.COLOR_BUFFER_BIT}Z&&(te|=K.DEPTH_BUFFER_BIT),ee&&(te|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),re.dispose(),ue.dispose(),ce.dispose(),L.dispose(),J.dispose(),he.dispose(),Xe.dispose(),at.dispose(),Te.dispose(),je.dispose(),je.removeEventListener("sessionstart",rn),je.removeEventListener("sessionend",_t),ve&&(ve.dispose(),ve=null),an.stop()};function de(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let N=ie.autoReset,Z=ne.enabled,ee=ne.autoUpdate,te=ne.needsUpdate,Q=ne.type;bt(),ie.autoReset=N,ne.enabled=Z,ne.autoUpdate=ee,ne.needsUpdate=te,ne.type=Q}function pe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ge(N){let Z=N.target;Z.removeEventListener("dispose",ge),Fe(Z)}function Fe(N){Oe(N),ce.remove(N)}function Oe(N){let Z=ce.get(N).programs;Z!==void 0&&(Z.forEach(function(ee){Te.releaseProgram(ee)}),N.isShaderMaterial&&Te.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,ee,te,Q,Me){Z===null&&(Z=Pe);let Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Mf(N,Z,ee,te,Q);k.setMaterial(te,Ce);let Ge=ee.index,Qe=1;if(te.wireframe===!0){if(Ge=ae.getWireframeAttribute(ee),Ge===void 0)return;Qe=2}let Ye=ee.drawRange,Ke=ee.attributes.position,Dt=Ye.start*Qe,xn=(Ye.start+Ye.count)*Qe;Me!==null&&(Dt=Math.max(Dt,Me.start*Qe),xn=Math.min(xn,(Me.start+Me.count)*Qe)),Ge!==null?(Dt=Math.max(Dt,0),xn=Math.min(xn,Ge.count)):Ke!=null&&(Dt=Math.max(Dt,0),xn=Math.min(xn,Ke.count));let $t=xn-Dt;if($t<0||$t===1/0)return;Xe.setup(Q,te,Be,ee,Ge);let ei,Tt=Ne;if(Ge!==null&&(ei=oe.get(Ge),Tt=Se,Tt.setIndex(ei)),Q.isMesh)te.wireframe===!0?(k.setLineWidth(te.wireframeLinewidth*tt()),Tt.setMode(K.LINES)):Tt.setMode(K.TRIANGLES);else if(Q.isLine){let et=te.linewidth;et===void 0&&(et=1),k.setLineWidth(et*tt()),Q.isLineSegments?Tt.setMode(K.LINES):Q.isLineLoop?Tt.setMode(K.LINE_LOOP):Tt.setMode(K.LINE_STRIP)}else Q.isPoints?Tt.setMode(K.POINTS):Q.isSprite&&Tt.setMode(K.TRIANGLES);if(Q.isBatchedMesh)Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Tt.renderInstances(Dt,$t,Q.count);else if(ee.isInstancedBufferGeometry){let et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Mo=Math.min(ee.instanceCount,et);Tt.renderInstances(Dt,$t,Mo)}else Tt.render(Dt,$t)};function xt(N,Z,ee){N.transparent===!0&&N.side===wt&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,Wr(N,Z,ee),N.side=Ai,N.needsUpdate=!0,Wr(N,Z,ee),N.side=wt):Wr(N,Z,ee)}this.compile=function(N,Z,ee=null){ee===null&&(ee=N),m=ue.get(ee),m.init(),y.push(m),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),N!==ee&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(v._useLegacyLights);let te=new Set;return N.traverse(function(Q){let Me=Q.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){let Be=Me[Ce];xt(Be,ee,Q),te.add(Be)}else xt(Me,ee,Q),te.add(Me)}),y.pop(),m=null,te},this.compileAsync=function(N,Z,ee=null){let te=this.compile(N,Z,ee);return new Promise(Q=>{function Me(){if(te.forEach(function(Ce){ce.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){Q(N);return}setTimeout(Me,10)}D.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vt=null;function qt(N){vt&&vt(N)}function rn(){an.stop()}function _t(){an.start()}let an=new ku;an.setAnimationLoop(qt),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(N){vt=N,je.setAnimationLoop(N),N===null?an.stop():an.start()},je.addEventListener("sessionstart",rn),je.addEventListener("sessionend",_t),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(Z),Z=je.getCamera()),N.isScene===!0&&N.onBeforeRender(v,N,Z,P),m=ue.get(N,y.length),m.init(),y.push(m),be.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(be),se=this.localClippingEnabled,X=Re.init(this.clippingPlanes,se),x=re.get(N,p.length),x.init(),p.push(x),qn(N,Z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(A,F),this.info.render.frame++,X===!0&&Re.beginShadows();let ee=m.state.shadowsArray;if(ne.render(ee,N,Z),X===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ue.render(x,N),m.setupLights(v._useLegacyLights),Z.isArrayCamera){let te=Z.cameras;for(let Q=0,Me=te.length;Q<Me;Q++){let Ce=te[Q];Uc(x,N,Ce,Ce.viewport)}}else Uc(x,N,Z);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),N.isScene===!0&&N.onAfterRender(v,N,Z),Xe.resetDefaultState(),z=-1,_=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function qn(N,Z,ee,te){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)ee=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||W.intersectsSprite(N)){te&&De.setFromMatrixPosition(N.matrixWorld).applyMatrix4(be);let Ce=he.update(N),Be=N.material;Be.visible&&x.push(N,Ce,Be,ee,De.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||W.intersectsObject(N))){let Ce=he.update(N),Be=N.material;if(te&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),De.copy(N.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(N.matrixWorld).applyMatrix4(be)),Array.isArray(Be)){let Ge=Ce.groups;for(let Qe=0,Ye=Ge.length;Qe<Ye;Qe++){let Ke=Ge[Qe],Dt=Be[Ke.materialIndex];Dt&&Dt.visible&&x.push(N,Ce,Dt,ee,De.z,Ke)}}else Be.visible&&x.push(N,Ce,Be,ee,De.z,null)}}let Me=N.children;for(let Ce=0,Be=Me.length;Ce<Be;Ce++)qn(Me[Ce],Z,ee,te)}function Uc(N,Z,ee,te){let Q=N.opaque,Me=N.transmissive,Ce=N.transparent;m.setupLightsView(ee),X===!0&&Re.setGlobalState(v.clippingPlanes,ee),Me.length>0&&bf(Q,Me,Z,ee),te&&k.viewport(w.copy(te)),Q.length>0&&Gr(Q,Z,ee),Me.length>0&&Gr(Me,Z,ee),Ce.length>0&&Gr(Ce,Z,ee),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function bf(N,Z,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;let Me=H.isWebGL2;ve===null&&(ve=new Vt(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?yn:Ti,minFilter:cr,samples:Me?4:0})),v.getDrawingBufferSize(Ae),Me?ve.setSize(Ae.x,Ae.y):ve.setSize(vl(Ae.x),vl(Ae.y));let Ce=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(Y),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear();let Be=v.toneMapping;v.toneMapping=Ei,Gr(N,ee,te),U.updateMultisampleRenderTarget(ve),U.updateRenderTargetMipmap(ve);let Ge=!1;for(let Qe=0,Ye=Z.length;Qe<Ye;Qe++){let Ke=Z[Qe],Dt=Ke.object,xn=Ke.geometry,$t=Ke.material,ei=Ke.group;if($t.side===wt&&Dt.layers.test(te.layers)){let Tt=$t.side;$t.side=tn,$t.needsUpdate=!0,Nc(Dt,ee,te,xn,$t,ei),$t.side=Tt,$t.needsUpdate=!0,Ge=!0}}Ge===!0&&(U.updateMultisampleRenderTarget(ve),U.updateRenderTargetMipmap(ve)),v.setRenderTarget(Ce),v.setClearColor(Y,T),v.toneMapping=Be}function Gr(N,Z,ee){let te=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Me=N.length;Q<Me;Q++){let Ce=N[Q],Be=Ce.object,Ge=Ce.geometry,Qe=te===null?Ce.material:te,Ye=Ce.group;Be.layers.test(ee.layers)&&Nc(Be,Z,ee,Ge,Qe,Ye)}}function Nc(N,Z,ee,te,Q,Me){N.onBeforeRender(v,Z,ee,te,Q,Me),N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(v,Z,ee,te,N,Me),Q.transparent===!0&&Q.side===wt&&Q.forceSinglePass===!1?(Q.side=tn,Q.needsUpdate=!0,v.renderBufferDirect(ee,Z,te,Q,N,Me),Q.side=Ai,Q.needsUpdate=!0,v.renderBufferDirect(ee,Z,te,Q,N,Me),Q.side=wt):v.renderBufferDirect(ee,Z,te,Q,N,Me),N.onAfterRender(v,Z,ee,te,Q,Me)}function Wr(N,Z,ee){Z.isScene!==!0&&(Z=Pe);let te=ce.get(N),Q=m.state.lights,Me=m.state.shadowsArray,Ce=Q.state.version,Be=Te.getParameters(N,Q.state,Me,Z,ee),Ge=Te.getProgramCacheKey(Be),Qe=te.programs;te.environment=N.isMeshStandardMaterial?Z.environment:null,te.fog=Z.fog,te.envMap=(N.isMeshStandardMaterial?J:L).get(N.envMap||te.environment),Qe===void 0&&(N.addEventListener("dispose",ge),Qe=new Map,te.programs=Qe);let Ye=Qe.get(Ge);if(Ye!==void 0){if(te.currentProgram===Ye&&te.lightsStateVersion===Ce)return Fc(N,Be),Ye}else Be.uniforms=Te.getUniforms(N),N.onBuild(ee,Be,v),N.onBeforeCompile(Be,v),Ye=Te.acquireProgram(Be,Ge),Qe.set(Ge,Ye),te.uniforms=Be.uniforms;let Ke=te.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=Re.uniform),Fc(N,Be),te.needsLights=wf(N),te.lightsStateVersion=Ce,te.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Ye,te.uniformsList=null,Ye}function zc(N){if(N.uniformsList===null){let Z=N.currentProgram.getUniforms();N.uniformsList=Ts.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Fc(N,Z){let ee=ce.get(N);ee.outputColorSpace=Z.outputColorSpace,ee.batching=Z.batching,ee.instancing=Z.instancing,ee.instancingColor=Z.instancingColor,ee.skinning=Z.skinning,ee.morphTargets=Z.morphTargets,ee.morphNormals=Z.morphNormals,ee.morphColors=Z.morphColors,ee.morphTargetsCount=Z.morphTargetsCount,ee.numClippingPlanes=Z.numClippingPlanes,ee.numIntersection=Z.numClipIntersection,ee.vertexAlphas=Z.vertexAlphas,ee.vertexTangents=Z.vertexTangents,ee.toneMapping=Z.toneMapping}function Mf(N,Z,ee,te,Q){Z.isScene!==!0&&(Z=Pe),U.resetTextureUnits();let Me=Z.fog,Ce=te.isMeshStandardMaterial?Z.environment:null,Be=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hi,Ge=(te.isMeshStandardMaterial?J:L).get(te.envMap||Ce),Qe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ye=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!ee.morphAttributes.position,Dt=!!ee.morphAttributes.normal,xn=!!ee.morphAttributes.color,$t=Ei;te.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&($t=v.toneMapping);let ei=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=ei!==void 0?ei.length:0,et=ce.get(te),Mo=m.state.lights;if(X===!0&&(se===!0||N!==_)){let wn=N===_&&te.id===z;Re.setState(te,N,wn)}let Ct=!1;te.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Mo.state.version||et.outputColorSpace!==Be||Q.isBatchedMesh&&et.batching===!1||!Q.isBatchedMesh&&et.batching===!0||Q.isInstancedMesh&&et.instancing===!1||!Q.isInstancedMesh&&et.instancing===!0||Q.isSkinnedMesh&&et.skinning===!1||!Q.isSkinnedMesh&&et.skinning===!0||Q.isInstancedMesh&&et.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&et.instancingColor===!1&&Q.instanceColor!==null||et.envMap!==Ge||te.fog===!0&&et.fog!==Me||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Re.numPlanes||et.numIntersection!==Re.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==Ye||et.morphTargets!==Ke||et.morphNormals!==Dt||et.morphColors!==xn||et.toneMapping!==$t||H.isWebGL2===!0&&et.morphTargetsCount!==Tt)&&(Ct=!0):(Ct=!0,et.__version=te.version);let Ui=et.currentProgram;Ct===!0&&(Ui=Wr(te,Z,Q));let Oc=!1,$s=!1,So=!1,jt=Ui.getUniforms(),Ni=et.uniforms;if(k.useProgram(Ui.program)&&(Oc=!0,$s=!0,So=!0),te.id!==z&&(z=te.id,$s=!0),Oc||_!==N){jt.setValue(K,"projectionMatrix",N.projectionMatrix),jt.setValue(K,"viewMatrix",N.matrixWorldInverse);let wn=jt.map.cameraPosition;wn!==void 0&&wn.setValue(K,De.setFromMatrixPosition(N.matrixWorld)),H.logarithmicDepthBuffer&&jt.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&jt.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),_!==N&&(_=N,$s=!0,So=!0)}if(Q.isSkinnedMesh){jt.setOptional(K,Q,"bindMatrix"),jt.setOptional(K,Q,"bindMatrixInverse");let wn=Q.skeleton;wn&&(H.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),jt.setValue(K,"boneTexture",wn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(jt.setOptional(K,Q,"batchingTexture"),jt.setValue(K,"batchingTexture",Q._matricesTexture,U));let wo=ee.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0&&H.isWebGL2===!0)&&We.update(Q,ee,Ui),($s||et.receiveShadow!==Q.receiveShadow)&&(et.receiveShadow=Q.receiveShadow,jt.setValue(K,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ni.envMap.value=Ge,Ni.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$s&&(jt.setValue(K,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&Sf(Ni,So),Me&&te.fog===!0&&xe.refreshFogUniforms(Ni,Me),xe.refreshMaterialUniforms(Ni,te,E,b,ve),Ts.upload(K,zc(et),Ni,U)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ts.upload(K,zc(et),Ni,U),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&jt.setValue(K,"center",Q.center),jt.setValue(K,"modelViewMatrix",Q.modelViewMatrix),jt.setValue(K,"normalMatrix",Q.normalMatrix),jt.setValue(K,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let wn=te.uniformsGroups;for(let Eo=0,Ef=wn.length;Eo<Ef;Eo++)if(H.isWebGL2){let Bc=wn[Eo];at.update(Bc,Ui),at.bind(Bc,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function Sf(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function wf(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(N,Z,ee){ce.get(N.texture).__webglTexture=Z,ce.get(N.depthTexture).__webglTexture=ee;let te=ce.get(N);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,Z){let ee=ce.get(N);ee.__webglFramebuffer=Z,ee.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,ee=0){P=N,C=Z,R=ee;let te=!0,Q=null,Me=!1,Ce=!1;if(N){let Ge=ce.get(N);Ge.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(K.FRAMEBUFFER,null),te=!1):Ge.__webglFramebuffer===void 0?U.setupRenderTarget(N):Ge.__hasExternalTextures&&U.rebindTextures(N,ce.get(N.texture).__webglTexture,ce.get(N.depthTexture).__webglTexture);let Qe=N.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ce=!0);let Ye=ce.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?Q=Ye[Z][ee]:Q=Ye[Z],Me=!0):H.isWebGL2&&N.samples>0&&U.useMultisampledRTT(N)===!1?Q=ce.get(N).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[ee]:Q=Ye,w.copy(N.viewport),B.copy(N.scissor),V=N.scissorTest}else w.copy($).multiplyScalar(E).floor(),B.copy(q).multiplyScalar(E).floor(),V=j;if(k.bindFramebuffer(K.FRAMEBUFFER,Q)&&H.drawBuffers&&te&&k.drawBuffers(N,Q),k.viewport(w),k.scissor(B),k.setScissorTest(V),Me){let Ge=ce.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,ee)}else if(Ce){let Ge=ce.get(N.texture),Qe=Z||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ge.__webglTexture,ee||0,Qe)}z=-1},this.readRenderTargetPixels=function(N,Z,ee,te,Q,Me,Ce){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ce.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){k.bindFramebuffer(K.FRAMEBUFFER,Be);try{let Ge=N.texture,Qe=Ge.format,Ye=Ge.type;if(Qe!==Vn&&Ee.convert(Qe)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ke=Ye===yn&&(D.has("EXT_color_buffer_half_float")||H.isWebGL2&&D.has("EXT_color_buffer_float"));if(Ye!==Ti&&Ee.convert(Ye)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===wi&&(H.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-te&&ee>=0&&ee<=N.height-Q&&K.readPixels(Z,ee,te,Q,Ee.convert(Qe),Ee.convert(Ye),Me)}finally{let Ge=P!==null?ce.get(P).__webglFramebuffer:null;k.bindFramebuffer(K.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(N,Z,ee=0){let te=Math.pow(2,-ee),Q=Math.floor(Z.image.width*te),Me=Math.floor(Z.image.height*te);U.setTexture2D(Z,0),K.copyTexSubImage2D(K.TEXTURE_2D,ee,0,0,N.x,N.y,Q,Me),k.unbindTexture()},this.copyTextureToTexture=function(N,Z,ee,te=0){let Q=Z.image.width,Me=Z.image.height,Ce=Ee.convert(ee.format),Be=Ee.convert(ee.type);U.setTexture2D(ee,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ee.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ee.unpackAlignment),Z.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,te,N.x,N.y,Q,Me,Ce,Be,Z.image.data):Z.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,te,N.x,N.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ce,Z.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,te,N.x,N.y,Ce,Be,Z.image),te===0&&ee.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(N,Z,ee,te,Q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=N.max.x-N.min.x+1,Ce=N.max.y-N.min.y+1,Be=N.max.z-N.min.z+1,Ge=Ee.convert(te.format),Qe=Ee.convert(te.type),Ye;if(te.isData3DTexture)U.setTexture3D(te,0),Ye=K.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)U.setTexture2DArray(te,0),Ye=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,te.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,te.unpackAlignment);let Ke=K.getParameter(K.UNPACK_ROW_LENGTH),Dt=K.getParameter(K.UNPACK_IMAGE_HEIGHT),xn=K.getParameter(K.UNPACK_SKIP_PIXELS),$t=K.getParameter(K.UNPACK_SKIP_ROWS),ei=K.getParameter(K.UNPACK_SKIP_IMAGES),Tt=ee.isCompressedTexture?ee.mipmaps[Q]:ee.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Tt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Tt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,N.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,N.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,N.min.z),ee.isDataTexture||ee.isData3DTexture?K.texSubImage3D(Ye,Q,Z.x,Z.y,Z.z,Me,Ce,Be,Ge,Qe,Tt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ye,Q,Z.x,Z.y,Z.z,Me,Ce,Be,Ge,Tt.data)):K.texSubImage3D(Ye,Q,Z.x,Z.y,Z.z,Me,Ce,Be,Ge,Qe,Tt),K.pixelStorei(K.UNPACK_ROW_LENGTH,Ke),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Dt),K.pixelStorei(K.UNPACK_SKIP_PIXELS,xn),K.pixelStorei(K.UNPACK_SKIP_ROWS,$t),K.pixelStorei(K.UNPACK_SKIP_IMAGES,ei),Q===0&&te.generateMipmaps&&K.generateMipmap(Ye),k.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),k.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,k.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===ao?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?qi:Nu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?pt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Dl=class extends fr{};Dl.prototype.isWebGL1Renderer=!0;var Ga=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Wa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new O,pr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gs,js=new O,xs=new O,vs=new O,_s=new le,Qs=new le,qu=new qe,da=new O,er=new O,pa=new O,au=new le,il=new le,ou=new le,Us=class extends Nt{constructor(e=new pn){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new pr(n,3,0,!1)),gs.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=gs,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ma(da.set(-.5,-.5,0),vs,o,xs,s,r),ma(er.set(.5,-.5,0),vs,o,xs,s,r),ma(pa.set(.5,.5,0),vs,o,xs,s,r),au.set(0,0),il.set(1,0),ou.set(1,1);let a=e.ray.intersectTriangle(da,er,pa,!1,js);if(a===null&&(ma(er.set(-.5,.5,0),vs,o,xs,s,r),il.set(0,1),a=e.ray.intersectTriangle(da,pa,er,!1,js),a===null))return;let c=e.ray.origin.distanceTo(js);c<e.near||c>e.far||t.push({distance:c,point:js.clone(),uv:Gi.getInterpolation(js,da,er,pa,au,il,ou,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ma(i,e,t,n,s,r){_s.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qs.x=r*_s.x-s*_s.y,Qs.y=s*_s.x+r*_s.y):Qs.copy(_s),i.copy(e),i.x+=Qs.x,i.y+=Qs.y,i.applyMatrix4(qu)}var mr=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new qe,lu=new qe,ga=[],cu=new ui,ux=new qe,tr=new ke,nr=new fi,Ns=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ux)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),cu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),nr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),lu.multiplyMatrices(n,ys),tr.matrixWorld=lu,tr.raycast(e,ga);for(let o=0,a=ga.length;o<a;o++){let c=ga[o];c.instanceId=r,c.object=this,t.push(c)}ga.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var gr=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hu=new O,uu=new O,fu=new qe,sl=new Ps,xa=new fi,Ul=class extends Nt{constructor(e=new ft,t=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)hu.fromBufferAttribute(t,s-1),uu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=hu.distanceTo(uu);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;fu.copy(s).invert(),sl.copy(e.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,h=new O,u=new O,d=new O,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=f){let C=g.getX(v),R=g.getX(v+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,R),sl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=f){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),sl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},du=new O,pu=new O,Xa=class extends Ul{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)du.fromBufferAttribute(t,s),pu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+du.distanceTo(pu);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Nl=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mu=new qe,zl=new Ps,va=new fi,_a=new O,qa=class extends Nt{constructor(e=new ft,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;mu.copy(s).invert(),zl.copy(e.ray).applyMatrix4(mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);_a.fromBufferAttribute(u,m),gu(_a,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)_a.fromBufferAttribute(u,g),gu(_a,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gu(i,e,t,n,s,r,o){let a=zl.distanceSqToPoint(i);if(a<t){let c=new O;zl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ln=class extends Rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],o=[],a=new O,c=new qe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Jt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xr=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends xr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ya=new O,rl=new dc,al=new dc,ol=new dc,vr=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),l=ya);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),rl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),al.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),ol.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),al.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(rl.calc(c),al.calc(c),ol.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fx(i,e){let t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function px(i,e){return i*i*e}function ar(i,e,t,n){return fx(i,e)+dx(i,t)+px(i,n)}function mx(i,e){let t=1-i;return t*t*t*e}function gx(i,e){let t=1-i;return 3*t*t*i*e}function xx(i,e){return 3*(1-i)*i*i*e}function vx(i,e){return i*i*i*e}function or(i,e,t,n,s){return mx(i,e)+gx(i,t)+xx(i,n)+vx(i,s)}var $a=class extends Pn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends Pn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y),or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Pn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends Pn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Pn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,s.x,r.x,o.x),ar(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Pn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ar(e,s.x,r.x,o.x),ar(e,s.y,r.y,o.y),ar(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xu(a,c.x,l.x,h.x,u.x),xu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},kl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:vr,CubicBezierCurve:$a,CubicBezierCurve3:Ol,EllipseCurve:xr,LineCurve:Ya,LineCurve3:Bl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Ja,SplineCurve:Ka}),Hl=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new kl[s.type]().fromJSON(s))}return this}},_r=class extends Hl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Za(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new $a(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ka(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new xr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class i extends ft{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Jt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new O,d=new le,f=new O,g=new O,x=new O,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let v=n+y*h*s,M=Math.sin(v),C=Math.cos(v);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*M,u.y=e[R].y,u.z=e[R].x*C,o.push(u.x,u.y,u.z),d.x=y/t,d.y=R/(e.length-1),a.push(d.x,d.y);let P=c[3*R+0]*M,z=c[3*R+1],_=c[3*R+0]*C;l.push(P,z,_)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,C=M,R=M+e.length,P=M+e.length+1,z=M+1;r.push(C,R,z),r.push(P,z,R)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},di=class i extends Ci{constructor(e=1,t=1,n=4,s=8){let r=new _r;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Yi=class i extends ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new O,h=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hn=class i extends ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function y(){let M=new O,C=new O,R=0,P=(t-e)/n;for(let z=0;z<=r;z++){let _=[],w=z/r,B=w*(t-e)+e;for(let V=0;V<=s;V++){let Y=V/s,T=Y*c+a,S=Math.sin(T),b=Math.cos(T);C.x=B*S,C.y=-w*n+m,C.z=B*b,u.push(C.x,C.y,C.z),M.set(S,P,b).normalize(),d.push(M.x,M.y,M.z),f.push(Y,1-w),_.push(g++)}x.push(_)}for(let z=0;z<s;z++)for(let _=0;_<r;_++){let w=x[_][z],B=x[_+1][z],V=x[_+1][z+1],Y=x[_][z+1];h.push(w,B,Y),h.push(B,V,Y),R+=6}l.addGroup(p,R,0),p+=R}function v(M){let C=g,R=new le,P=new O,z=0,_=M===!0?e:t,w=M===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let B=g;for(let V=0;V<=s;V++){let T=V/s*c+a,S=Math.cos(T),b=Math.sin(T);P.x=_*b,P.y=m*w,P.z=_*S,u.push(P.x,P.y,P.z),d.push(0,w,0),R.x=S*.5+.5,R.y=b*.5*w+.5,f.push(R.x,R.y),g++}for(let V=0;V<s;V++){let Y=C+V,T=B+V;M===!0?h.push(T,T+1,Y):h.push(T+1,T,Y),z+=3}l.addGroup(p,z,M===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zs=class i extends hn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yr=class extends _r{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new _r().fromJSON(s))}return this}},_x={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$u(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=wx(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return br(r,o,t,a,c,f,0),o}};function $u(i,e,t,n,s){let r,o;if(s===Nx(i,e,t,n)>0)for(r=e;r<t;r+=n)o=vu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=vu(r,i[r],i[r+1],o);return o&&lo(o,o.next)&&(Sr(o),o=o.next),o}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(lo(t,t.next)||At(t.prev,t,t.next)===0)){if(Sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function br(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Cx(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?bx(i,n,s,r):yx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Sr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Mx(Zi(i),e,t),br(i,e,t,n,s,r,2)):o===2&&Sx(i,e,t,n,s,r):br(Zi(i),e,t,n,s,r,1);break}}}function yx(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(s,a,r,c,o,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Vl(f,g,e,t,n),y=Vl(x,m,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=p&&M&&M.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ss(a,h,c,u,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&At(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ss(a,h,c,u,l,d,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Ss(a,h,c,u,l,d,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Mx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!lo(s,r)&&Yu(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Sr(n),Sr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function Sx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ix(o,a)){let c=Zu(o,a);o=Zi(o,o.next),c=Zi(c,c.next),br(o,e,t,n,s,r,0),br(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wx(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=$u(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Px(l));for(s.sort(Ex),r=0;r<s.length;r++)t=Tx(s[r],t);return t}function Ex(i,e){return i.x-e.x}function Tx(i,e){let t=Ax(i,e);if(!t)return e;let n=Zu(t,i);return Zi(n,n.next),Zi(t,t.next)}function Ax(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Ss(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Rx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Rx(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function Cx(i,e,t,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Vl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Px(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ss(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ix(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dx(i,e)&&(Mr(i,e)&&Mr(e,i)&&Ux(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||lo(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function lo(i,e){return i.x===e.x&&i.y===e.y}function Yu(i,e,t,n){let s=Ma(At(i,e,t)),r=Ma(At(i,e,n)),o=Ma(At(t,n,i)),a=Ma(At(t,n,e));return!!(s!==r&&o!==a||s===0&&ba(i,t,e)||r===0&&ba(i,n,e)||o===0&&ba(t,i,n)||a===0&&ba(t,e,n))}function ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ma(i){return i>0?1:i<0?-1:0}function Dx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function Ux(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zu(i,e){let t=new Gl(i.i,i.x,i.y),n=new Gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vu(i,e,t,n){let s=new Gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var lr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];_u(e),yu(n,e);let o=e.length;t.forEach(_u);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,yu(n,t[c]);let a=_x.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _u(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ja=class i extends ft{constructor(e=new yr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;lr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];lr.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=lr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,M=y[1]+u,C=y[2]+u;n.push(v,M,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function zx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Rt=class i extends ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,d=new O,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let R=C/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+M,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=h[p][y+1],M=h[p][y],C=h[p+1][y],R=h[p+1][y+1];(p!==0||o>0)&&f.push(v,M,R),(p!==n-1||c<Math.PI)&&f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pi=class i extends ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new O,u=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qa=class i extends ft{constructor(e=new Ja(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new le,h=new O,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(f,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let M=o.normals[v],C=o.binormals[v];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,z=Math.sin(P),_=-Math.cos(P);c.x=_*M.x+z*C.x,c.y=_*M.y+z*C.y,c.z=_*M.z+z*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let C=(s+1)*(v-1)+(M-1),R=(s+1)*v+(M-1),P=(s+1)*v+M,z=(s+1)*(v-1)+M;g.push(C,R,z),g.push(R,P,z)}}function y(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)l.x=v/t,l.y=M/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new kl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var eo=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var to=class extends Gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Sa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Fs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=e,a=2*t-n;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case vh:o=e,c=2*n-t;break;case _h:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[l+C]+v*o[c+C]+M*o[u+C];return r}},Xl=class extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ql=class extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Fx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Aa;var Ji=class extends Wn{};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Ta;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Wn{};$l.prototype.ValueTypeName="color";var Yl=class extends Wn{};Yl.prototype.ValueTypeName="number";var Zl=class extends Fs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Zn.slerpFlat(r,0,o,l-a,o,l,c);return r}},wr=class extends Wn{InterpolantFactoryMethodLinear(e){return new Zl(this.times,this.values,this.getValueSize(),e)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=Aa;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Wn{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ta;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Wn{};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ox=new Kl,jl=class{constructor(e){this.manager=e!==void 0?e:Ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Os=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ll=new qe,bu=new O,Mu=new O,no=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Su=new qe,ir=new O,cl=new O,Ql=class extends no{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),cl.copy(n.position),cl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cl),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}},Tr=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ec=class extends no{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=wu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function wu(){return(typeof performance>"u"?Date:performance).now()}var pc="\\[\\]\\.:\\/",Bx=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",kx="[^"+pc.replace("\\.","")+"]",Hx=/((?:WC+[\/:])*)/.source.replace("WC",mc),Vx=/(WCOD+)?/.source.replace("WCOD",kx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Xx=new RegExp("^"+Hx+Vx+Gx+Wx+"$"),qx=["material","materials","bones","map"],tc=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=Xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=tc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bv=new Float32Array(1);var so=class{constructor(e,t,n=0,s=1/0){this.ray=new Ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(Eu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nc(e[s],this,n,t);return n.sort(Eu),n}};function Eu(i,e){return i.distance-e.distance}function nc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)nc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var co={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$x=new Ds(-1,1,1,-1,0,1),gc=class extends ft{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}},Yx=new gc,Pi=class{constructor(e){this._mesh=new ke(Yx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$x)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hs=class extends Mn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Rr=class extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ho=class extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var uo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(co),this.copyPass.material.blending=Yn,this.clock=new io}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rr!==void 0&&(o instanceof Rr?n=!0:o instanceof ho&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var fo=class extends Mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ju={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vs=class i extends Mn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Vt(r,o,{type:yn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Vt(r,o,{type:yn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ju;this.highPassUniforms=Li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=co;this.copyUniforms=Li.clone(h.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new Cn,this.fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vs.BlurDirectionX=new le(1,0);Vs.BlurDirectionY=new le(0,1);var Ku={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var po=class extends Mn{constructor(){super();let e=Ku;this.uniforms=Li.clone(e.uniforms),this.material=new eo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Cr={alta:{dpr:2,shadows:2048,grass:1,post:!0,blur:!0},media:{dpr:1.5,shadows:1536,grass:.65,post:!0,blur:!1},baixa:{dpr:1,shadows:1024,grass:.35,post:!1,blur:!1}},Zx={uniforms:{tDiffuse:{value:null},uRes:{value:new le(1,1)},uBlur:{value:1},uFocus:{value:.52},uWarm:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uBlur, uFocus, uWarm; varying vec2 vUv;
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
    }`};function ju(i,e){let t=new fr({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});t.toneMapping=Ar,t.shadowMap.enabled=e.shadows>0,t.shadowMap.type=ic;let n={renderer:t,composer:null,q:e},s,r;return n.setup=(o,a)=>{let c=new Vt(4,4,{samples:4,type:yn}),l=new uo(t,c);l.addPass(new fo(o,a)),s=new Vs(new le(256,256),.22,.7,.92),l.addPass(s),l.addPass(new po),r=new Hs(Zx),r.uniforms.uBlur.value=n.q.blur?1:0,l.addPass(r),n.composer=l,n.final=r,n.bloom=s},n.resize=(o,a)=>{n.w=o,n.h=a;let c=Math.min(window.devicePixelRatio||1,n.q.dpr);t.setPixelRatio(c),t.setSize(o,a,!1),n.composer&&(n.composer.setPixelRatio(c),n.composer.setSize(o,a),r.uniforms.uRes.value.set(o*c,a*c))},n.render=(o,a)=>{n.composer&&n.q.post?n.composer.render():t.render(o,a)},n.setQuality=o=>{n.q=o,r&&(r.uniforms.uBlur.value=o.blur?1:0),n.resize(n.w,n.h)},n}function zt(i){let e=i>>>0,t=()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+(s-n)*t(),t.pick=n=>n[Math.floor(t()*n.length)],t.sign=()=>t()<.5?-1:1,t}var $e=(i,e,t)=>Math.min(t,Math.max(e,i)),ze=(i,e,t)=>i+(e-i)*t,un=i=>(i=$e(i,0,1),i*i*(3-2*i)),Qu=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2);var we=Math.PI*2,b_=new qe,ye=(i,e,t)=>new qe().makeTranslation(i,e,t),Ie=i=>new qe().makeRotationX(i),Ve=i=>new qe().makeRotationY(i),Ft=i=>new qe().makeRotationZ(i),mi=(i,e=i,t=i)=>new qe().makeScale(i,e,t),_e=(...i)=>{let e=new qe;for(let t of i)e.multiply(t);return e},Jx=new O(0,1,0);function Zt(i,e){let t=new Zn().setFromUnitVectors(Jx,e.clone().normalize());return new qe().compose(i,t,new O(1,1,1))}var I=i=>new fe(i);function it(i,e,t){return i.clone().lerp(e,t)}function ot(i,e){return i.clone().multiplyScalar(e)}function Jn(i,e,t=.06){let n={};return i.getHSL(n),new fe().setHSL((n.h+e.range(-t,t)*.25+1)%1,$e(n.s+e.range(-t,t),0,1),$e(n.l+e.range(-t,t),0,1))}function fn(i,e,t,n){let s=[];for(let r=0;r<=n;r++){let o=r/n,a=(1-o)*(1-o),c=2*(1-o)*o,l=o*o;s.push(new O(i.x*a+e.x*c+t.x*l,i.y*a+e.y*c+t.y*l,i.z*a+e.z*c+t.z*l))}return s}function Ht(i,e){let t=$e(e,0,1)*(i.length-1),n=Math.min(i.length-2,Math.floor(t)),s=t-n,r=i[n].clone().lerp(i[n+1],s),o=i[n+1].clone().sub(i[n]).normalize();return{p:r,d:o}}var Dn={uTime:{value:0},uWind:{value:1},uDay:{value:1}},Kx=Ze.normal_fragment_begin.replace("normal *= faceDirection;","normal *= mix(faceDirection, 1.0, vFix);");function Xn(i={}){let e=new kt({vertexColors:!0,side:wt,roughness:i.roughness??.62,metalness:0});return e.userData.u={uSway:{value:i.sway??.5},uDroop:{value:0},uGlow:{value:i.glow??.1},uPhase:{value:i.phase??0}},e.onBeforeCompile=t=>{Object.assign(t.uniforms,Dn,e.userData.u),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        uniform float uGlow, uDroop, uDay; varying float vFix;`).replace("#include <normal_fragment_begin>",Kx).replace("#include <color_fragment>",`#include <color_fragment>
        {
          float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(l * 1.05, l * 0.95, l * 0.62), uDroop * 0.55);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * uGlow * (0.25 + 0.75 * uDay);`)},e.customProgramCacheKey=()=>"plant-v1",e}var Lr=[{h:0,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1},{h:4.8,top:989240,hor:3358830,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1976908,exp:.95,cloud:4148600,night:1},{h:5.9,top:3688574,hor:15769724,sun:16751206,si:.5,sky:8423608,gnd:4866640,hi:.7,fog:11047072,exp:.98,cloud:15902864,night:.3},{h:7.2,top:6267612,hor:16571572,sun:16766624,si:2.3,sky:13623547,gnd:10127464,hi:.95,fog:15523012,exp:1,cloud:16773344,night:0},{h:10,top:5019868,hor:13887734,sun:16773852,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14280944,exp:1,cloud:16777215,night:0},{h:14.5,top:5019868,hor:14084338,sun:16773334,si:2.9,sky:14215423,gnd:10523764,hi:1.05,fog:14412014,exp:1,cloud:16777215,night:0},{h:16.8,top:5936847,hor:16374958,sun:16763264,si:2.6,sky:13950196,gnd:11045476,hi:.95,fog:15785152,exp:1.02,cloud:16771272,night:0},{h:18.1,top:4872860,hor:16357990,sun:16745544,si:1.7,sky:11051212,gnd:8413784,hi:.8,fog:15246472,exp:1.02,cloud:16294008,night:.1},{h:19,top:2240096,hor:11561608,sun:13142704,si:.45,sky:6318248,gnd:3551306,hi:.66,fog:6969984,exp:.98,cloud:8018568,night:.65},{h:20,top:923446,hor:2899052,sun:9677552,si:.58,sky:4873372,gnd:1976384,hi:.78,fog:1845320,exp:.95,cloud:3820152,night:1},{h:24,top:725808,hor:2570346,sun:9677552,si:.62,sky:4873372,gnd:1976384,hi:.78,fog:1713736,exp:.95,cloud:3820152,night:1}];for(let i of Lr)for(let e of["top","hor","sun","sky","gnd","fog","cloud"])i[e]=new fe(i[e]);function jx(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.95)"),t.addColorStop(.45,"rgba(255,255,255,0.6)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Ln(i);return n.colorSpace=pt,n}function ef(i,e,t){let n={hour:9,night:0,sunDir:new O,cur:{}},s={top:new fe,hor:new fe,sun:new fe,sky:new fe,gnd:new fe,fog:new fe,cloud:new fe},r={uTop:{value:new fe},uHor:{value:new fe},uSunDir:{value:new O(0,1,0)},uSunCol:{value:new fe},uNight:{value:0},uTime:Dn.uTime},o=new ke(new Rt(400,32,20),new Lt({side:tn,depthWrite:!1,fog:!1,uniforms:r,vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 uTop, uHor, uSunDir, uSunCol; uniform float uNight, uTime; varying vec3 vDir;
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
      }`}));o.renderOrder=-10,o.frustumCulled=!1,i.add(o);let a=new Os(16777215,8947848,1);i.add(a);let c=new Bs(16777215,2.5);c.castShadow=t.shadows>0,c.shadow.mapSize.set(t.shadows||512,t.shadows||512);let l=c.shadow.camera;l.left=-19,l.right=19,l.top=19,l.bottom=-19,l.near=1,l.far=90,c.shadow.bias=-4e-4,c.shadow.normalBias=.03,c.shadow.radius=3,i.add(c),i.add(c.target),i.fog=new Ga(16777215,38,230);let h=jx(),u=new Ut,d=[],f=zt(42);for(let g=0;g<16;g++){let x=new Ut,m=f.range(22,46),p=new pn({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:f.range(.55,.9)});d.push(p);for(let M=0;M<7;M++){let C=new Us(p),R=f.range(.4,1);C.scale.set(m*R*.7,m*R*.34,1),C.position.set(f.range(-.5,.5)*m,f.range(-.06,.1)*m,f.range(-3,3)),x.add(C)}let y=f()*we,v=f.range(120,300);x.position.set(Math.cos(y)*v,f.range(46,110),Math.sin(y)*v),x.userData.v=f.range(.4,1.1),u.add(x)}return u.renderOrder=-5,i.add(u),n.setHour=g=>{g=(g%24+24)%24,n.hour=g;let x=0;for(;x<Lr.length-2&&Lr[x+1].h<=g;)x++;let m=Lr[x],p=Lr[x+1],y=$e((g-m.h)/(p.h-m.h),0,1);for(let _ in s)s[_].copy(m[_]).lerp(p[_],y);let v=ze(m.si,p.si,y),M=ze(m.hi,p.hi,y);n.night=ze(m.night,p.night,y);let C=g>5.6&&g<18.9,R=C?(g-5.6)/13.3:(g+24-18.9)%24/10.7,P=Math.sin(R*Math.PI)*(C?1:.75)+.16,z=ze(-1.15,1.15,R);n.sunDir.set(-Math.sin(z)*Math.cos(P),Math.sin(P),Math.cos(z)*Math.cos(P)*.75+.12).normalize(),c.position.copy(n.sunDir).multiplyScalar(48).add(c.target.position),c.color.copy(s.sun),c.intensity=v,a.color.copy(s.sky),a.groundColor.copy(s.gnd),a.intensity=M,i.fog.color.copy(s.fog),r.uTop.value.copy(s.top),r.uHor.value.copy(s.hor),r.uSunDir.value.copy(n.sunDir),r.uSunCol.value.copy(s.sun),r.uNight.value=n.night,e.toneMappingExposure=ze(m.exp,p.exp,y);for(let _ of d)_.color.copy(s.cloud);Dn.uDay.value=1-n.night*.8,n.cur=s,n.sunI=v},n.update=(g,x)=>{o.position.copy(x);for(let m of u.children)m.position.x+=m.userData.v*g,m.position.x>320&&(m.position.x=-320)},n.sun=c,n.hemi=a,n.setHour(9),n}function xc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ft,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=tf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=tf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function tf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new Et(o,t,n);return s!==void 0&&(c.gpuType=s),c}var Pr=new O,Qx=new Je,Ir=new O,vc=new O,Dr=new O,mo=new O,Xt=class{constructor(){this.pos=[],this.col=[],this.nrm=[],this.fix=[],this.idx=[],this.n=0}vert(e,t,n,s,r,o,a,c){return Pr.set(e,t,n),r&&Pr.applyMatrix4(r),this.pos.push(Pr.x,Pr.y,Pr.z),this.col.push(s.r,s.g,s.b),this.fix.push(o===void 0?0:1),o===void 0?this.nrm.push(NaN,0,0):(Ir.set(o,a,c),r&&Ir.applyMatrix3(Qx.setFromMatrix4(r)).normalize(),this.nrm.push(Ir.x,Ir.y,Ir.z)),this.n++}quadGrid(e,t,n,s){let r=n+1;for(let o=0;o<t;o++)for(let a=0;a<n;a++){let c=e+o*r+a,l=c+1,h=c+r,u=h+1;s?this.idx.push(c,l,h,l,u,h):this.idx.push(c,h,l,l,h,u)}}petal(e,t){let n=t.nu??5,s=t.nv??4,r=t.L,o=t.W/2,a=t.a??1,c=t.b??.6,l=t.cup??0,h=t.curl??0,u=t.curlPow??1.6,d=t.ruffle??0,f=t.rf??2,g=t.twist??0,x=t.fold??0,m=t.base??0,[p,y,v]=t.cols,M=t.vein??0,C=t.phase??0,R=t.tipNotch??0,P=this.n,z=new fe,_=0,w=0;for(let B=0;B<=n;B++){let V=B/n,Y=t.angFn?t.angFn(V):(t.curl0??0)+h*Math.pow(V,u);if(B>0){let W=(B-.5)/n,X=t.angFn?t.angFn(W):(t.curl0??0)+h*Math.pow(W,u);_+=Math.cos(X)*r/n,w+=Math.sin(X)*r/n}let T=-Math.sin(Y),S=Math.cos(Y),b=Math.cos(Y),E=Math.sin(Y),A=Math.pow(Math.sin(Math.PI*Math.pow(Math.min(V,.999),a)),c);A=Math.max(A,m*(1-V));let F=o*A,$=g*V,q=Math.cos($),j=Math.sin($);for(let W=0;W<=s;W++){let X=W/s*2-1,se=X*F,ve=-l*F*X*X-x*F*Math.abs(X)+d*o*Math.sin(X*Math.PI*f+C+V*5)*V*V,be=R?-R*r*(1-Math.abs(X))*Math.pow(V,6):0,Ae=se*q-ve*j,De=se*j+ve*q;V<.5?z.copy(p).lerp(y,V*2):z.copy(y).lerp(v,(V-.5)*2),M&&z.multiplyScalar(1-M*(1-Math.abs(X))*(1-V*.5)+M*.4),this.vert(Ae,_+T*De+b*be,w+S*De+E*be,z,e)}}this.quadGrid(P,n,s,!1)}tube(e,t,n,s,r,o,a=5,c=!1){let l=this.n,h=new fe,u=t.length,d=new O(.13,.2,.97);for(let f=0;f<u;f++){let g=f/(u-1);vc.copy(t[Math.min(u-1,f+1)]).sub(t[Math.max(0,f-1)]).normalize(),Dr.crossVectors(vc,d).normalize(),mo.crossVectors(Dr,vc).normalize();let x=typeof n=="function"?n(g):n+(s-n)*g;h.copy(r).lerp(o,g);for(let m=0;m<=a;m++){let p=m/a*we,y=Math.cos(p)*x,v=Math.sin(p)*x;this.vert(t[f].x+Dr.x*y+mo.x*v,t[f].y+Dr.y*y+mo.y*v,t[f].z+Dr.z*y+mo.z*v,h,e)}}if(this.quadGrid(l,u-1,a,!0),c){let f=t[u-1];this.blob(new qe().copy(e||new qe).multiply(new qe().makeTranslation(f.x,f.y,f.z)),typeof n=="function"?n(1):s,typeof n=="function"?n(1):s,o,o,5,3)}}blob(e,t,n,s,r,o=7,a=5,c){let l=this.n,h=new fe;for(let u=0;u<=a;u++){let d=u/a*Math.PI,f=-Math.cos(d),g=Math.sin(d),x=u/a;c?x<.5?h.copy(s).lerp(r,x*2):h.copy(r).lerp(c,x*2-1):h.copy(s).lerp(r,x);for(let m=0;m<=o;m++){let p=m/o*we;this.vert(Math.cos(p)*g*t,f*n,Math.sin(p)*g*t,h,e)}}this.quadGrid(l,a,o,!1)}lathe(e,t,n,s,r=10,o,a=0,c=5){let l=this.n,h=new fe,u=t.length;for(let d=0;d<u;d++){let f=d/(u-1);o?o(f,h):h.copy(n).lerp(s,f);for(let g=0;g<=r;g++){let x=g/r*we,m=t[d][0]*(1+a*f*f*Math.sin(x*c));this.vert(Math.cos(x)*m,t[d][1],Math.sin(x)*m,h,e)}}this.quadGrid(l,u-1,r,!1)}card(e,t,n,s,r,o,a,c,l=.25){let h=this.n;this.vert(0,0,0,s,e,o,a,c),this.vert(-t/2,n*.5,l*t,r,e,o,a,c),this.vert(t/2,n*.5,l*t,r,e,o,a,c),this.vert(0,n,0,r,e,o,a,c),this.idx.push(h,h+2,h+1,h+1,h+2,h+3)}build(){let e=new ft;e.setAttribute("position",new He(this.pos,3)),e.setAttribute("color",new He(this.col,3)),e.setAttribute("aFix",new He(this.fix,1)),e.setIndex(this.idx),e.computeVertexNormals();let t=e.attributes.normal.array,n=this.nrm;for(let s=0;s<n.length;s+=3)Number.isNaN(n[s])||(t[s]=n[s],t[s+1]=n[s+1],t[s+2]=n[s+2]);return e.computeBoundingSphere(),e.computeBoundingBox(),e}};var Le=O,st={leaf:I(5016122),dark:I(2909748),light:I(10275934),stem:I(5934908),gray:I(8363132),blue:I(7315596),wood:I(7227955),woodDark:I(5190692),lime:I(7976264),deep:I(2381102)},Un=2.39996323,z_=I(16777215),Kn=(i,e)=>Array.isArray(i)?ze(i[0],i[1],e):i,ev={a:.75,b:.75,cup:0,fold:.35,curl:.5,curlPow:1.3,nu:4,nv:2,vein:.3};function mn(i,e,t,n){let s=Jn(n.c??st.leaf,t,.05);i.petal(e,{...ev,...n,cols:[ot(s,.7),s,it(s,n.tip??st.light,n.tipMix??.3)]})}function _c(i,e,t,n){let s=n.n;for(let r=0;r<s;r++){let o=ze(n.t0??.15,n.t1??.85,(r+t()*.6)/s),{p:a}=Ht(e,o),c=(n.az0??0)+r*(n.azStep??Un)+t.range(-.3,.3),l=(1-(n.taper??.3)*o)*(.85+t()*.3),h=_e(ye(a.x,a.y,a.z),Ve(c),Ie((n.tilt??1)+t.range(-.2,.2)));mn(i,h,t,{...n,L:n.L*l,W:n.W*l})}}function Gs(i,e,t){for(let n=0;n<t.n;n++){let s=n*Un+e.range(-.25,.25),r=.75+e()*.4,o=_e(Ve(s),ye(0,0,t.r??.005),Ie((t.tilt??.9)+e.range(-.2,.2)));mn(i,o,e,{...t,L:t.L*r,W:t.W*r})}}function nf(i,e,t,n){let s=n.n;for(let r=0;r<s;r++){let o=s>1?r/(s-1)-.5:0,a=1-Math.abs(o)*(n.sideShrink??.5);mn(i,_e(e,Ft(-o*(n.spread??2.2))),t,{...n,L:n.L*a,W:n.W*a})}}function ji(i,e,t,n,s=.06,r=6){let o=Math.cos(n),a=Math.sin(n);return fn(new Le(0,0,0),new Le(o*t*.2+i.range(-s,s)*e,e*.55,a*t*.2+i.range(-s,s)*e),new Le(o*t,e,a*t),r)}function tv(i,e=0,t=0){let{p:n,d:s}=Ht(i,1),r=Zt(n,s);return e?_e(ye(n.x,n.y,n.z),Ve(-t+Math.PI/2),Ie(e)):r}function Sn(i,e,t,n,s,r=1){if(s=$e(s,0,1),n.sepals){let c=n.sepals;for(let l=0;l<c.n;l++){let h=_e(e,Ve(l/c.n*we+.3),ye(0,0,(c.r??.002)*r),Ie(ze(.25,c.tilt??1.3,s)));i.petal(h,{L:c.L*r,W:c.W*r,a:.8,b:.8,cup:.5,curl:.3,nu:3,nv:2,cols:[ot(c.c??st.leaf,.8),c.c??st.leaf,c.c??st.leaf]})}}let o=t()*we;for(let c of n.layers){c.azList&&(o=o);let l=c.n;for(let h=0;h<l;h++){let u=l>1?h/(l-1):1,d=o+(c.azList?c.azList[h]:c.golden?h*Un:h/l*we)+t.range(-1,1)*(c.jit??.06)+(c.az??0),f=ze(Kn(c.tiltC??.1,u),Kn(c.tilt,u),s)+t.range(-1,1)*(c.tj??.05),g=ze(Kn(c.curlC??-.2,u),Kn(c.curl??0,u),s),x=ze(c.closedScale??.6,1,s)*r*(1+t.range(-.07,.07)),m=_e(e,Ve(d),ye(0,Kn(c.y??0,u)*r,Kn(c.r??.002,u)*r),Ie(f)),p=c.cols;c.cols2&&(p=p.map((v,M)=>it(v,c.cols2[M],u))),c.pick&&(p=c.pick);let y=c.cj??.035;i.petal(m,{L:Kn(c.L,u)*x,W:Kn(c.W,u)*x,a:c.a??1.2,b:c.b??.55,cup:ze(Kn(c.cupC??c.cup??.4,u),Kn(c.cup??.4,u),s),curl:g,curlPow:c.curlPow??1.6,ruffle:c.ruffle??0,rf:c.rf??2,phase:t()*6,twist:c.twist?t.range(-c.twist,c.twist):0,nu:c.nu??5,nv:c.nv??4,vein:c.vein??.12,tipNotch:c.notch??0,base:c.base??0,cols:[Jn(p[0],t,y),Jn(p[1],t,y),Jn(p[2],t,y)]})}o+=c.azStep??Math.PI/Math.max(1,l)}let a=n.center;if(a){if(a.type==="dome"&&i.blob(_e(e,ye(0,(a.y??0)*r,0)),a.r*r,a.h*r,a.cols[0],a.cols[1],a.seg??10,5,a.cols[2]),a.stamens&&s>.35){let c=a.stamens;for(let l=0;l<c.n;l++){let h=l/c.n*we+t()*.3,u=(c.spread??.4)*(.6+t()*.6),d=c.len*r*(.8+t()*.3),f=fn(new Le(0,0,0),new Le(Math.cos(h)*u*d*.3,d*.6,Math.sin(h)*u*d*.3),new Le(Math.cos(h)*u*d,d*(1-u*.3),Math.sin(h)*u*d),3);i.tube(e,f,.0012*r*(c.thick??1),.001*r*(c.thick??1),c.c,c.c,3);let g=f[3];i.blob(_e(e,ye(g.x,g.y,g.z)),(c.tipR??.004)*r,(c.tipR??.004)*r*1.4,c.tip,c.tip,4,3)}}if(a.type==="trumpet"){let c=ze(.55,1,s),l=[[a.r0*.6,0],[a.r0,a.L*.3],[ze(a.r0,a.r1,.5)*c,a.L*.75],[a.r1*c,a.L],[a.r1*c*1.12,a.L*1.03]].map(([h,u])=>[h*r,u*r]);i.lathe(e,l,a.cols[0],a.cols[1],a.seg??12,null,a.ruffle??.1,a.rf??6)}if(a.type==="column"&&s>.3){let c=fn(new Le(0,0,0),new Le(0,a.L*.5*r,.004),new Le(0,a.L*r,.012*r),4);i.tube(e,c,.004*r,.003*r,a.cols[0],a.cols[1],4);for(let h=0;h<10;h++){let u=.55+t()*.4,d=Ht(c,u).p,f=t()*we;i.blob(_e(e,ye(d.x+Math.cos(f)*.008*r,d.y,d.z+Math.sin(f)*.008*r)),.0035*r,.0035*r,a.dots,a.dots,4,3)}let l=c[4];i.blob(_e(e,ye(l.x,l.y,l.z)),.006*r,.005*r,a.cols[1],a.cols[1],5,3)}a.type==="spadix"&&i.blob(_e(e,ye(0,a.L*.5*r,0)),a.r*r,a.L*.5*r,a.cols[0],a.cols[1],6,5)}}function nv(i,e,t,n,s){let r=Math.round(n.n*ze(.5,1,s)),o=n.r*ze(.55,1,s);for(let a=0;a<r;a++){let c=1-(a+.5)/r*(1+(n.cover??.6)),l=Math.sqrt(Math.max(0,1-c*c)),h=a*Un,u=Math.cos(h)*l,d=Math.sin(h)*l,f=s<.3?it(n.bud??st.lime,t.pick(n.cols),s*2):Jn(t.pick(n.cols),t,.05),g=it(f,I(16777215),.25),x=_e(e,Zt(new Le(u*o,c*o*(n.squash??.8),d*o),new Le(u,c,d)),Ve(t()*we)),m=n.fs*(.8+t()*.4),p=n.np??4,y=1.25;for(let v=0;v<p;v++)i.card(_e(x,Ve(v/p*we),Ie(y)),m*.9,m,f,g,0,Math.cos(y),-Math.sin(y),.15)}}function yc(i,e,t=st.lime){let n=ji(e,.06,.01,e()*we,.05,3);i.tube(null,n,.004,.003,it(t,I(16777215),.3),t,4);let s=n[3];for(let r=0;r<2;r++)mn(i,_e(ye(s.x,s.y,s.z),Ve(r*Math.PI+.4),Ie(1)),e,{L:.05,W:.03,c:t,a:.9,b:.6,fold:.2,curl:.4});mn(i,_e(ye(s.x,s.y,s.z),Ve(1.9),Ie(.3)),e,{L:.028,W:.014,c:t,a:.9,b:.7})}function gi(i,e,t,n,s){let r=Math.round(e.range(t.stems[0],t.stems[1]));t.basal&&Gs(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n,n:Math.round(t.basal.n*(.5+n*.5))});for(let o=0;o<r;o++){let a=t.faceZ?Math.PI/2+e.range(-.5,.5):o*Un+e.range(-.4,.4),c=r>1?(t.spread??.06)*Math.sqrt((o+.5)/r):0,l=t.H*n*e.range(.78,1.08),h=(t.lean??.08)*l*e.range(.4,1.3)+c,u=ji(e,l,h,a,t.wob??.05,7),d=ye(Math.cos(a)*c*.5,0,Math.sin(a)*c*.5);for(let g of u)g.applyMatrix4(d);let f=(t.stemR??.004)*(.6+.4*n);if(i.tube(null,u,f,f*.65,t.stemC??st.stem,it(t.stemC??st.stem,st.light,.2),5),t.leaf&&_c(i,u,e,{...t.leaf,L:t.leaf.L*(.5+.5*n),W:t.leaf.W*(.5+.5*n),n:Math.max(1,Math.round(t.leaf.n*n))}),s>=0&&t.head){let g=$e(s+e.range(-.12,.12)*(s>.9?0:1),0,1),x=t.headsPer??1;for(let m=0;m<x;m++){let p=u,y=a;if(x>1){let{p:C}=Ht(u,.86+.14*(m/x));y=a+m*2.1+e();let R=t.pedicel??.08;p=fn(C,new Le(C.x+Math.cos(y)*R*.3,C.y+R*.7,C.z+Math.sin(y)*R*.3),new Le(C.x+Math.cos(y)*R,C.y+R,C.z+Math.sin(y)*R),3),i.tube(null,p,f*.5,f*.4,st.stem,st.stem,4)}let v=typeof t.head=="function"?t.head(e):t.head,M=(t.headTilt??0)*(.7+.3*g)+e.range(-.1,.1);Sn(i,tv(p,M,y),e,v,g,t.headK??1)}}}}function Nn(i,e,t,n,s){let r=t.R*n,o=t.H*n,a=Math.max(3,Math.round(t.branches*(.5+.5*n))),c=[];for(let l=0;l<a;l++){let h=l*Un+e.range(-.3,.3),u=(l+.5)/a,d=ze(.15,1,Math.sqrt(u))*(t.splay??1),f=ze(o,Math.hypot(r,o*.6),u)*e.range(.85,1.05),g=new Le(Math.cos(h)*Math.sin(d)*f,Math.cos(d)*f,Math.sin(h)*Math.sin(d)*f);g.x=$e(g.x,-r,r),g.z=$e(g.z,-r,r);let x=fn(new Le(0,0,0),new Le(g.x*.35,g.y*.75,g.z*.35),g,6);i.tube(null,x,(t.stemR??.006)*(.5+.5*n),.002,t.wood??st.wood,t.stemC??st.stem,4),_c(i,x,e,{...t.leaf,n:Math.round(t.leaf.n*(.6+.4*n)),t0:.25,t1:1,taper:.1}),t.leafTip&&nf(i,_e(ye(g.x,g.y,g.z),Ve(h),Ie(.7)),e,t.leafTip),c.push({pts:x,az:h})}for(let l=0;l<Math.round((t.fill??24)*n);l++){let h=e()*we,u=Math.acos(e())*(t.splay??1),d=e.range(.5,.92),f=new Le(Math.cos(h)*Math.sin(u),Math.cos(u),Math.sin(h)*Math.sin(u)),g=new Le(f.x*r*d,f.y*o*d*1.05,f.z*r*d);mn(i,Zt(g,f.clone().add(new Le(0,.5,0)).normalize()),e,{...t.leaf,L:t.leaf.L*e.range(.9,1.3),W:t.leaf.W*e.range(.9,1.3)})}if(s>=0&&t.head){let l=Math.max(1,Math.round(t.heads*(.6+.4*n)));for(let h=0;h<l;h++){let u=c[h%c.length],d=h>=c.length,f=u.pts,g=u.az;if(d||t.stalk){g=h*Un*1.3+e();let M=e.range(.2,.95),C=M*.95*(t.splay??1),R=ze(o,Math.hypot(r,o*.6),M)*(1+(t.stalk??.06)),P=new Le(Math.cos(g)*Math.sin(C)*R,Math.cos(C)*R,Math.sin(g)*Math.sin(C)*R);f=fn(new Le(0,0,0),new Le(P.x*.3,P.y*.8,P.z*.3),P,5),i.tube(null,f,.003,.002,t.stemC??st.stem,t.stemC??st.stem,4)}let x=$e(s+(s>.9?0:e.range(-.1,.1)),0,1),m=typeof t.head=="function"?t.head(e):t.head,{p,d:y}=Ht(f,1),v=y.clone().lerp(new Le(0,1,0),t.headUp??.45).normalize();m.ball?nv(i,Zt(p,v),e,m.ball,x):Sn(i,Zt(p,v),e,m,x,t.headK??1)}}}function Ws(i,e,t,n,s){if(t.basal&&Gs(i,e,{...t.basal,L:t.basal.L*n,W:t.basal.W*n}),t.basalFan)for(let o=0;o<t.basalFan.count;o++){let a=o*Un,c=t.basalFan.stalk*n*e.range(.7,1.1),l=fn(new Le(0,0,0),new Le(Math.cos(a)*c*.3,c*.7,Math.sin(a)*c*.3),new Le(Math.cos(a)*c*.8,c*.8,Math.sin(a)*c*.8),4);i.tube(null,l,.003,.002,st.stem,st.stem,4);let h=l[4];nf(i,_e(ye(h.x,h.y,h.z),Ve(-a+Math.PI/2),Ie(1.2)),e,{...t.basalFan,L:t.basalFan.L*n,W:t.basalFan.W*n})}let r=Math.round(e.range(t.stems[0],t.stems[1])*(.5+.5*n));for(let o=0;o<r;o++){let a=o*Un+e(),c=t.H*n*e.range(.75,1.1),l=ji(e,c,(t.lean??.18)*c*Math.sqrt((o+.3)/r),a,.03,8);if(i.tube(null,l,t.stemR??.004,.002,t.stemC??st.stem,t.stemC??st.stem,4),t.leaf&&_c(i,l,e,{...t.leaf,n:Math.round(t.leaf.n*n),t0:.05,t1:t.from??.5}),s<0)continue;let h=Math.round(t.florets*(.6+.4*n)),u=t.from??.55;for(let d=0;d<h;d++){let f=d/(h-1),g=ze(u,1,f),{p:x,d:m}=Ht(l,g),p=d*(t.whorl??Un)+e()*.3,y=$e(s*1.6-f*.6,0,1),v=(1-f*(t.taper??.5))*ze(.45,1,y),M=it(t.cols[0],t.cols[1],f*.8+e()*.2),C=it(t.bud??st.lime,M,$e(y*1.5,0,1)),R=_e(Zt(x,m),Ve(p),ye(0,0,t.off??.006));if(t.type==="card")for(let P=0;P<2;P++)i.card(_e(R,Ve(P*.9-.45),Ie(ze(.5,1,y))),t.fs*v,t.fs*1.5*v,ot(C,.75),it(C,I(16777215),.2),0,.5,.86,.3);else if(t.type==="bell"){let P=t.fs*v,z=_e(R,Ie(2));i.lathe(z,[[P*.18,0],[P*.3,P*.35],[P*.36,P*.8],[P*.5,P]],ot(C,.85),it(C,I(16777215),.25),6,null,.1,5)}else Sn(i,_e(R,Ie(1.25)),e,{layers:[{n:5,L:t.fs,W:t.fs*.85,a:1.2,b:.5,tilt:1.15,tiltC:.15,cup:.5,curl:.2,nu:2,nv:2,cols:[ot(C,.8),C,it(C,I(16777215),.15)]}],center:t.eye?{type:"dome",r:t.fs*.22,h:t.fs*.15,cols:[t.eye,t.eye],seg:5}:null},y,v)}}}function go(i,e,t,n,s){let r=Math.round(t.stems*(.5+.5*n));for(let o=0;o<r;o++){let a=o*Un+e.range(-.2,.2),c=(o+.5)/r,l=t.L*n*e.range(.7,1.1),h=t.up*(1-c*(t.upFall??.6)),u=t.out*e.range(.7,1.1),d=t.drop*c*e.range(.6,1.2),f=Math.cos(a),g=Math.sin(a),x=fn(new Le(f*.02,0,g*.02),new Le(f*u*l*.6,h*l,g*u*l*.6),new Le(f*u*l,(h*.4-d)*l,g*u*l),9);if(i.tube(null,x,t.stemR??.003,.0015,t.stemC??st.stem,t.stemC??st.stem,4),t.frond){let m=t.frond.pairs;for(let p=1;p<=m;p++){let y=p/(m+1),{p:v,d:M}=Ht(x,y),C=Math.sin(Math.PI*Math.pow(y,.7))*t.frond.L*n+.01,R=new Le(-M.z,0,M.x).normalize();for(let P of[-1,1]){let z=R.clone().multiplyScalar(P).add(M.clone().multiplyScalar(.45)).add(new Le(0,-.25,0)).normalize();mn(i,Zt(v,z),e,{L:C,W:C*t.frond.wr,c:t.frond.c,a:.7,b:.8,nu:2,nv:1,fold:.2,curl:.3,vein:.2})}}}else{let m=Math.round(t.leaf.n*(.5+.5*n));for(let p=0;p<m;p++){let y=ze(.12,1,(p+e()*.5)/m),{p:v,d:M}=Ht(x,y),C=new Le(e.range(-1,1),e.range(.1,1),e.range(-1,1)).add(M.clone().multiplyScalar(.5)).normalize();mn(i,Zt(v,C),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.15),W:t.leaf.W*e.range(.7,1.15)})}}if(s>=0&&t.flower){let m=t.flower.per;for(let p=0;p<m;p++){let y=ze(.35,1,(p+e())/m),{p:v,d:M}=Ht(x,y),C=new Le(f*.7,.55,g*.7).add(new Le(e.range(-.4,.4),e.range(-.1,.4),e.range(-.4,.4))).normalize(),R=v.clone().add(C.clone().multiplyScalar(.025));t.flower.make(i,Zt(R,C),e,$e(s+e.range(-.15,.1),0,1))}}}}function xo(i,e,t,n,s){let r=t.H*n,o=t.R*n,a=r+o*.55,c=t.bark??st.wood,l=ot(c,.75),h=e.range(-.08,.08)*r,u=fn(new Le(0,0,0),new Le(h,r*.5,e.range(-.05,.05)*r),new Le(h*.5,r,0),6),d=t.trunkR*(.35+.65*n);i.tube(null,u,V=>d*(1.25-.55*V+.5*Math.pow(1-V,6)),0,l,c,8);let f=u[6],g=Math.max(3,Math.round(t.limbs*(.5+.5*n))),x=[];for(let V=0;V<g;V++){let Y=V*Un+e.range(-.3,.3),T=ze(.25,1.25,(V+.5)/g),S=o*e.range(.75,1.05),b=Ht(u,e.range(.7,1)).p,E=new Le(b.x+Math.cos(Y)*Math.sin(T)*S,f.y+Math.cos(T)*S*.9+o*.15,b.z+Math.sin(Y)*Math.sin(T)*S),A=fn(b,new Le(ze(b.x,E.x,.4),ze(b.y,E.y,.75),ze(b.z,E.z,.4)),E,5);i.tube(null,A,d*.42,d*.1,c,c,5),x.push(E,Ht(A,.6).p);for(let F=0;F<2;F++){let $=Ht(A,e.range(.35,.8)).p,q=Y+e.range(-1.2,1.2),j=S*e.range(.35,.6),W=new Le($.x+Math.cos(q)*j,$.y+j*e.range(.2,.8),$.z+Math.sin(q)*j);i.tube(null,[$,$.clone().lerp(W,.5).add(new Le(0,j*.1,0)),W],d*.16,d*.05,c,c,4),x.push(W)}}let m=new Le(h*.5,a,0),p=new Le,y=new Le,v=new Le,M=new Le,C=new Le,R=s<0?0:s,P=ze(1,t.foliage??1,R),z=t.leafCols??[st.leaf,st.dark,st.lime],_=x.map(V=>({c:V.clone().add(new Le(0,o*.08,0)),r:o*e.range(.27,.4)}));_.push({c:new Le(f.x,f.y+o*.75,f.z),r:o*.45});let w=t.blossom?it(ot(z[0],.6),ot(t.blossom.cols[0],.8),$e(R*1.4,0,1)*(1-P*.8)):ot(z[0],.6);for(let V of _)i.blob(_e(ye(V.c.x,V.c.y,V.c.z),Ve(e()*3)),V.r*.66,V.r*.52,ot(w,.62),ot(w,1.05),7,5);let B=(V,Y,T,S,b)=>{for(let E=0;E<V;E++){let A=_[Math.floor(e()*_.length)];v.set(e.range(-1,1),e.range(-.75,1),e.range(-1,1)).normalize(),y.copy(v).multiplyScalar(A.r*e.range(.66,1.04)+b),y.y*=.8,y.add(A.c),p.copy(y).sub(m).normalize().lerp(v,.45),p.y+=.3,p.normalize(),M.set(e.range(-1,1),e.range(-1,1),e.range(-1,1)),C.crossVectors(v,M).normalize(),M.crossVectors(C,v).normalize(),y.addScaledVector(C,-Y*.4);let F=new qe().makeBasis(M,C,v.clone().addScaledVector(C,e.range(-.5,.5)).normalize()).setPosition(y),$=Jn(e.pick(T),e,.05),q=Y*(1-S+e()*S*2),j=p.clone().applyMatrix3(new Je().setFromMatrix4(F).invert()).normalize();i.card(F,q*.8,q,ot($,.74),$,j.x,j.y,j.z,.25)}};if(B(Math.round((t.leaves??800)*n*P),(t.leafSize??.19)*(.6+.4*n),z,.3,0),R>0&&t.blossom&&B(Math.round(t.blossom.n*n*ze(.3,1,R)),t.blossom.size*ze(.55,1,R),R<.3?t.blossom.buds??t.blossom.cols:t.blossom.cols,.3,.02),R>.6&&t.fruit)for(let V=0;V<t.fruit.n;V++){let Y=_[Math.floor(e()*_.length)];v.set(e.range(-1,1),e.range(-.9,.2),e.range(-1,1)).normalize();let T=v.clone().multiplyScalar(Y.r*.92).add(Y.c);if(T.clone().sub(m).dot(v)<0){V--,e()<.2&&V++;continue}i.blob(ye(T.x,T.y,T.z),t.fruit.r,t.fruit.r*(t.fruit.tall??1.1),ot(t.fruit.c,.8),t.fruit.c,7,5,it(t.fruit.c,I(16777215),.2))}}function bc(i=1.5,e=2.15){let t=[],n=i/2,s=e-n;for(let r=0;r<=6;r++)t.push(new Le(-n,s*r/6,0));for(let r=1;r<=12;r++){let o=Math.PI-r/12*Math.PI;t.push(new Le(Math.cos(o)*n,s+Math.sin(o)*n,0))}for(let r=1;r<=6;r++)t.push(new Le(n,s*(1-r/6),0));return t}function sf(i,e,t,n,s){let r=bc(),o=$e(n*.56,.05,.56),a=(c,l)=>Ht(r,c<0?l:1-l);for(let c of[-1,1])for(let l=0;l<(t.strands??3);l++){let h=[],u=e()*we,d=Math.round(40*o)+3,f=o*e.range(.8,1);for(let x=0;x<=d;x++){let m=x/d*f,{p}=a(c,m),y=u+m*38;h.push(new Le(p.x+Math.cos(y)*.07,p.y+Math.sin(y*.7)*.03,p.z+Math.sin(y)*.09))}i.tube(null,h,.008,.003,t.wood??st.wood,st.stem,4);let g=Math.round(t.leaf.n*f*2);for(let x=0;x<g;x++){let{p:m}=Ht(h,e()),p=new Le(e.range(-1,1),e.range(-.2,1),e.range(-1,1)).normalize(),y=m.clone().add(p.clone().multiplyScalar(.03));mn(i,Zt(y,p),e,{...t.leaf,L:t.leaf.L*e.range(.7,1.2),W:t.leaf.W*e.range(.7,1.2)})}if(s>=0&&t.flower){let x=Math.round(t.flower.n*f*2/(t.strands??3));for(let m=0;m<x;m++){let p=e.range(t.flower.t0??.1,1),{p:y}=Ht(h,p);t.flower.make(i,y,e,$e(s+e.range(-.15,.1),0,1))}}}}var lt=O,jn=class{constructor(e=1){this.g=[],this.rng=zt(e)}add(e,t,n,s=.03,r){e=e.index?e.toNonIndexed():e,t&&e.applyMatrix4(t);let o=e.attributes.position.count,a=new Float32Array(o*3),c=new fe(n),l=1+this.rng.range(-s,s)*2;if(c.multiplyScalar(l),r){let h=new fe(r).multiplyScalar(l),u=e.attributes.position;e.computeBoundingBox();let d=e.boundingBox.min.y,f=e.boundingBox.max.y,g=new fe;for(let x=0;x<o;x++)g.copy(c).lerp(h,(u.getY(x)-d)/(f-d+1e-6)),a[x*3]=g.r,a[x*3+1]=g.g,a[x*3+2]=g.b}else for(let h=0;h<o;h++)a[h*3]=c.r,a[h*3+1]=c.g,a[h*3+2]=c.b;return e.setAttribute("color",new Et(a,3)),e.deleteAttribute("uv"),this.g.push(e),this}box(e,t,n,s,r,o,a,c,l){return this.add(new bn(e,t,n),_e(ye(s,r,o),c??new qe),a,l)}cyl(e,t,n,s,r,o,a,c=10,l,h,u){return this.add(new hn(e,t,n,c),_e(ye(s,r,o),l??new qe),a,h,u)}sph(e,t,n,s,r,o=1,a=1,c=1,l=10,h,u){return this.add(new Rt(e,l,Math.max(4,l-3)),_e(ye(t,n,s),mi(o,a,c)),r,h,u)}lathe(e,t,n,s,r,o=16,a,c){return this.add(new Ci(e.map(([l,h])=>new le(l,h)),o),ye(t,n,s),r,c,a)}mesh(e,t=!0){let n=new ke(xc(this.g),e);return n.castShadow=t,n.receiveShadow=!0,n}},Qi=new kt({vertexColors:!0,roughness:.86}),iv=new kt({vertexColors:!0,roughness:.86,side:wt}),nn=.18,Qn=[{id:0,name:"Jardim da frente",cost:0,rect:[-5,5,-4.6,3.5],tag:[0,0]},{id:1,name:"Varanda",cost:120,rect:[-4.8,4.8,-6.9,-4.9],tag:[0,-5.6],h:2.6,desc:"Vasos suspensos, jardineiras nas janelas e vasos na varanda."},{id:2,name:"Canteiros do leste",cost:500,rect:[5,12.3,-8.6,3.5],tag:[8.7,-1.5],desc:"Dois canteiros, vasos e o lugar da sua primeira \xE1rvore."},{id:3,name:"Laguinho",cost:1200,rect:[-12.3,-5,-8.6,3.5],tag:[-8.6,-1.5],desc:"Um lago para ninfeias e l\xF3tus, com canteiro em volta."},{id:4,name:"Alameda dos arcos",cost:2800,rect:[-5,5,5,14.3],tag:[0,9.3],desc:"Arcos para trepadeiras e quatro canteiros floridos."},{id:5,name:"Pomar",cost:5500,rect:[5,12.3,5,14.3],tag:[8.7,9.6],desc:"Espa\xE7o para tr\xEAs \xE1rvores e canteiros \xE0 sombra."},{id:6,name:"Prado das flores",cost:9e3,rect:[-12.3,-5,5,14.3],tag:[-8.7,9.6],desc:"Canteiros grandes para um mar de flores."}],Ur={x:-8.6,z:-.6,rx:2.5,rz:1.9},Mc=[{z:0,x:-2.9,zc:-1.3,cols:3,rows:2},{z:0,x:2.9,zc:-1.3,cols:3,rows:2},{z:2,x:8.7,zc:.4,cols:3,rows:2},{z:2,x:8.7,zc:-3.2,cols:3,rows:2},{z:3,x:-8.6,zc:-4.3,cols:5,rows:1},{z:4,x:-2.9,zc:7.6,cols:3,rows:2},{z:4,x:2.9,zc:7.6,cols:3,rows:2},{z:4,x:-2.9,zc:11.6,cols:3,rows:2},{z:4,x:2.9,zc:11.6,cols:3,rows:2},{z:5,x:10.4,zc:6.6,cols:3,rows:1},{z:5,x:10.2,zc:13,cols:3,rows:1},{z:6,x:-8.7,zc:7.2,cols:4,rows:2},{z:6,x:-8.7,zc:10.5,cols:4,rows:2},{z:6,x:-8.7,zc:13.3,cols:4,rows:1}],vo=.82,Sc=[{z:0,x:-1.35,zc:-4.1},{z:0,x:1.35,zc:-4.1},{z:1,x:-4.05,zc:-5.75,porch:!0},{z:1,x:4.05,zc:-5.75,porch:!0},{z:2,x:6.1,zc:2.5},{z:2,x:11.4,zc:2.5},{z:3,x:-6,zc:2.5},{z:3,x:-11.4,zc:2.5},{z:4,x:-1.25,zc:5.6},{z:4,x:1.25,zc:5.6},{z:5,x:6,zc:5.9},{z:6,x:-5.9,zc:5.9},{z:6,x:-5.9,zc:13.6}],wc=[{z:2,x:10.4,zc:-6.6},{z:3,x:-10.6,zc:-6.9},{z:5,x:7.3,zc:7.9},{z:5,x:10.6,zc:9.9},{z:5,x:7.2,zc:12.3},{z:6,x:-11.4,zc:5.9+0}],rf=[{z:4,x:0,zc:7.4},{z:4,x:0,zc:11.4}],sv=[-3.4,-1.55,1.55,3.4],rv=[-2.75,2.75],Xs=[{id:"lanternas",name:"Lanternas do caminho",price:150,beauty:15,desc:"Luz quentinha para as noites no jardim."},{id:"banco",name:"Banco de madeira",price:240,beauty:15,desc:"Um cantinho para admirar as flores."},{id:"bebedouro",name:"Banho de passarinho",price:380,beauty:20,desc:"Os p\xE1ssaros agradecem a \xE1gua fresca."},{id:"casinha",name:"Casinha de passarinho",price:480,beauty:20,desc:"Um lar colorido no alto de um poste."},{id:"carrinho",name:"Carrinho de m\xE3o florido",price:700,beauty:30,desc:"Um velho carrinho transbordando flores."},{id:"anao",name:"An\xE3o de jardim",price:600,beauty:25,desc:"O guardi\xE3o simp\xE1tico dos canteiros."}];function av(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d"),t=zt(5);e.fillStyle="#6f9a50",e.fillRect(0,0,512,512);for(let s=0;s<2600;s++){let r=t()*512,o=t()*512,a=t.range(6,34);e.fillStyle=`hsla(${t.range(78,106)},${t.range(30,46)}%,${t.range(32,46)}%,${t.range(.05,.16)})`;for(let c of[-512,0,512])for(let l of[-512,0,512])e.beginPath(),e.ellipse(r+c,o+l,a,a*t.range(.5,1),t()*3,0,we),e.fill()}let n=new Ln(i);return n.wrapS=n.wrapT=Cs,n.repeat.set(36,36),n.colorSpace=pt,n.anisotropy=4,n}function ov(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=t.createImageData(256,256),s=zt(9),r=[];for(let c=0;c<9;c++)r.push([Math.round(s.range(1,5))*s.sign(),Math.round(s.range(1,5))*s.sign(),s()*6,s.range(.4,1)]);let o=(c,l)=>{let h=0;for(let[u,d,f,g]of r)h+=Math.sin((c*u+l*d)*we/256+f)*g;return h};for(let c=0;c<256;c++)for(let l=0;l<256;l++){let h=o(l+1,c)-o(l-1,c),u=o(l,c+1)-o(l,c-1),d=(c*256+l)*4,f=new lt(-h*.8,-u*.8,1).normalize();n.data[d]=(f.x*.5+.5)*255,n.data[d+1]=(f.y*.5+.5)*255,n.data[d+2]=(f.z*.5+.5)*255,n.data[d+3]=255}t.putImageData(n,0,0);let a=new Ln(e);return a.wrapS=a.wrapT=Cs,a.repeat.set(2.2,2.2),a}var Tc=(i,e,t,n=0)=>i>t[0]-n&&i<t[1]+n&&e>t[2]-n&&e<t[3]+n,Ec=i=>{let e=i.cols*vo+.3,t=i.rows*vo+.3;return[i.x-e/2,i.x+e/2,i.zc-t/2,i.zc+t/2]},af=(i,e,t=0)=>((i-Ur.x)/(Ur.rx+t))**2+((e-Ur.z)/(Ur.rz+t))**2<1,Nr=(i,e)=>{for(let t=Qn.length-1;t>=0;t--)if(t!==1&&Tc(i,e,Qn[t].rect))return t;return-1},lv=(i,e)=>Math.abs(i)<.75&&e>-4.6&&e<15.5||e>3.6&&e<4.9&&Math.abs(i)<12.3,Ac=(i,e)=>e<-4.95&&Math.abs(i)<4.9?nn:e<-4.6&&Math.abs(i)<1.4?ze(0,nn,$e((-4.6-e)/.35,0,1)):0;function of(i,e,t){let n={spots:[],zones:Qn,decor:{},zoneGroups:[],lockGroups:[],nightMats:[],lamps:[],tickers:[]},s=zt(77),r=new ke(new Yi(260,48),new kt({map:av(),roughness:1,color:14543052}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,i.add(r),n.ground=r;{let u=new Xt,d=zt(3),f=(y,v,M,C,R,P)=>{let _=u.n,w=[P,P*1.7,P*2.9];for(let B=0;B<=3;B++)for(let V=0;V<=72;V++){let Y=V/72*we,T=B/3,S=ze(y,v,T),b=(Math.sin(Y*3+w[0])*.5+Math.sin(Y*7+w[1])*.3+Math.sin(Y*13+w[2])*.2+1.1)*M*Math.sin(T*Math.PI*.85);u.vert(Math.cos(Y)*S,b-.3,Math.sin(Y)*S,new fe().copy(C).lerp(R,T))}u.quadGrid(_,3,72,!1)};f(60,150,9,I(8301652),I(6986842),1.3),f(120,240,22,I(6986850),I(6262650),4.1);let g=new ke(u.build(),new kt({vertexColors:!0,roughness:1}));i.add(g);let x=Xn({sway:.03,glow:.06}),m=[{H:1.6,R:1.9,trunkR:.14,limbs:6,leaves:520,leafSize:.42,leafCols:[I(5016122),I(3832372),I(6987850)]},{H:2.4,R:1.6,trunkR:.13,limbs:6,leaves:480,leafSize:.4,leafCols:[I(3832388),I(3107386),I(5937738)]},{H:1.3,R:2.3,trunkR:.16,limbs:7,leaves:600,leafSize:.45,leafCols:[I(5936192),I(6989384),I(4883512)]}].map((y,v)=>{let M=new Xt;return xo(M,zt(20+v),y,1,-1),M.build()}),p=[];for(let y=0;y<46;y++){let v=y%4,M,C;if(v===0)M=d.range(-24,24),C=d.range(-28,-16);else if(v===1)M=d.range(15.5,30)*(d()<.5?-1:1),C=d.range(-22,22);else if(v===2)M=d.range(-30,30),C=d.range(19.5,34),Math.abs(M)<4&&(M+=8);else{let R=d()*we,P=d.range(34,58);M=Math.cos(R)*P,C=Math.sin(R)*P}p.push([M,C])}m.forEach((y,v)=>{let M=p.filter((P,z)=>z%3===v),C=new Ns(y,x,M.length),R=new Nt;M.forEach(([P,z],_)=>{R.position.set(P,0,z),R.rotation.y=d()*6,R.scale.setScalar(d.range(1.5,2.6)),R.updateMatrix(),C.setMatrixAt(_,R.matrix)}),C.castShadow=!0,C.receiveShadow=!0,i.add(C)})}{let u=new jn(11),d=zt(12),f=(x,m,p,y)=>{let v=new $i(m-x,y-p,1,1);v.rotateX(-Math.PI/2),u.add(v,ye((x+m)/2,.012,(p+y)/2),14207138,0)};f(-.8,.8,-4.6,16.2),f(-12.3,12.3,3.55,4.95);let g=(x,m,p)=>u.add(new hn(p,p*1.06,.05,7),_e(ye(x,.03,m),Ve(d()*6),mi(1,1,d.range(.7,.95))),d.pick([13222324,12432806,14077632,12103844]),.04);for(let x=-4.2;x<16;x+=.86)g(d.range(-.12,.12),x,d.range(.3,.38));for(let x=-11.8;x<12;x+=.86)Math.abs(x)>.7&&g(x,4.25+d.range(-.1,.1),d.range(.3,.38));for(let x=0;x<150;x++){let m=d()<.55,p=m?d.range(-.78,.78):d.range(-12.2,12.2),y=m?d.range(-4.5,16):d.range(3.6,4.9);u.sph(d.range(.02,.05),p,.02,y,d.pick([12103324,14998731,11050636]),1,.5,1,5)}i.add(u.mesh(Qi,!1))}cv(i,n);{let u=new jn(21),d=15986146,f=(g,x,m,p)=>{let y=Math.hypot(m-g,p-x),v=Math.round(y/.24),M=Math.atan2(m-g,p-x),C=Ve(M);for(let R=0;R<=v;R++){let P=R/v,z=ze(g,m,P),_=ze(x,p,P);R%8===0?(u.box(.11,1,.11,z,.5,_,d,C),u.sph(.07,z,1.03,_,d,1,1,1,6)):(u.box(.085,.72,.025,z,.42,_,d,_e(C,Ve(Math.PI/2))),u.add(new zs(.06,.09,4),_e(ye(z,.825,_),C,Ve(Math.PI/4),mi(1,1,.3)),d))}u.box(.035,.07,y,(g+m)/2,.3,(x+p)/2,d,C),u.box(.035,.07,y,(g+m)/2,.64,(x+p)/2,d,C)};f(-12.6,-9.2,-12.6,14.7),f(12.6,-9.2,12.6,14.7),f(-12.6,14.7,-1.2,14.7),f(1.2,14.7,12.6,14.7),f(-12.6,-9.2,-4.6,-9.2),f(4.6,-9.2,12.6,-9.2);for(let g of[-1,1])u.box(.14,2.2,.14,g*1.2,1.1,14.7,d);u.box(2.7,.12,.16,0,2.2,14.7,d),u.box(2.9,.06,.3,0,2.29,14.7,d),u.box(.08,1,.08,2,.5,15.3,8018496),u.box(.24,.2,.36,2,1.08,15.3,13125690),u.box(.02,.14,.1,2.13,1.14,15.2,15986146),i.add(u.mesh(Qi))}let o=[[.001,0],[.17,0],[.19,.04],[.25,.36],[.285,.38],[.285,.43],[.25,.43],[.235,.4]],a=new kt({color:5914672,roughness:1}),c=u=>(u.id=n.spots.length,u.soil=null,n.spots.push(u),u),l=(u,d,f,g,x,m=.35)=>{let p=new ke(new Rt(x,9,5,0,we,0,Math.PI/2),a.clone());return p.scale.y=m,p.position.set(d,f,g),p.receiveShadow=!0,u.add(p),p};for(let u of Qn){let d=new Ut,f=new jn(100+u.id),g=zt(200+u.id);n.zoneGroups[u.id]=d,i.add(d);for(let x of Mc.filter(m=>m.z===u.id)){let[m,p,y,v]=Ec(x),M=p-m,C=v-y,R=x.x,P=x.zc,z=[9070152,8215616,9728078];f.box(M+.16,.2,.09,R,.1,y,g.pick(z)),f.box(M+.16,.2,.09,R,.1,v,g.pick(z)),f.box(.09,.2,C,m,.1,P,g.pick(z)),f.box(.09,.2,C,p,.1,P,g.pick(z));for(let[B,V]of[[m,y],[p,y],[m,v],[p,v]])f.box(.12,.27,.12,B,.135,V,7229496);let _=new $i(M,C,Math.round(M*4),Math.round(C*4));_.rotateX(-Math.PI/2);let w=_.attributes.position;for(let B=0;B<w.count;B++)w.setY(B,g.range(-.012,.02));_.computeVertexNormals(),f.add(_,ye(R,.15,P),6177843,.02);for(let B=0;B<x.rows;B++)for(let V=0;V<x.cols;V++){let Y=R+(V-(x.cols-1)/2)*vo,T=P+(B-(x.rows-1)/2)*vo,S=x.rows===1||B===x.rows-1,b=c({type:"bed",zone:u.id,pos:new lt(Y,.16,T),stand:new lt(Y,0,S?v+.5:y-.5),scale:1.75,pickR:.36,pickH:.5});b.soil=l(d,Y,.15,T,.26)}}for(let x of Sc.filter(m=>m.z===u.id)){let m=x.porch?nn:0,p=1.25;f.lathe(o.map(([v,M])=>[v*p,M*p]),x.x,m,x.zc,g.pick([13004616,12149311,13597266]),18,void 0,.02);let y=c({type:"pot",zone:u.id,pos:new lt(x.x,m+.5,x.zc),stand:new lt(x.x+(x.porch?x.x>0?-.85:.85:0),0,x.zc+(x.porch?.1:.85)),scale:1.55,pickR:.42,pickH:.9,pickY:-.4});y.soil=l(d,x.x,m+.47,x.zc,.3,.2)}for(let x of wc.filter(m=>m.z===u.id)){for(let p=0;p<13;p++){let y=p/13*we;f.sph(g.range(.1,.14),x.x+Math.cos(y)*.72,.03,x.zc+Math.sin(y)*.72,g.pick([12432806,11116949,13617080]),1,.7,1,6)}let m=c({type:"tree",zone:u.id,pos:new lt(x.x,.03,x.zc),stand:new lt(x.x+.35,0,x.zc+1.05),scale:1.45,pickR:.7,pickH:1.9});m.soil=l(d,x.x,0,x.zc,.66,.12)}for(let x of rf.filter(m=>m.z===u.id)){let m=bc(),p=15986146;for(let v of[-.24,.24]){let M=new vr(m.map(C=>new lt(C.x,C.y,C.z+v)));f.add(new Qa(M,40,.028,6),ye(x.x,0,x.zc),p,0)}for(let v=1;v<m.length-1;v+=2){let M=m[v];f.cyl(.014,.014,.48,x.x+M.x,M.y,x.zc,p,5,Ie(Math.PI/2),0)}let y=c({type:"arch",zone:u.id,pos:new lt(x.x,0,x.zc),stand:new lt(x.x-1.35,0,x.zc+.55),scale:1,pickR:.95,pickH:2.4});y.soil=l(d,x.x-.75,0,x.zc,.3,.25),l(d,x.x+.75,0,x.zc,.3,.25).material=y.soil.material}if(u.id===1){for(let x of sv){f.add(new Rt(.22,12,6,0,we,Math.PI/2,Math.PI/2),ye(x,2.02,-5.05),9071176,.03),f.add(new pi(.22,.018,5,14),_e(ye(x,2.02,-5.05),Ie(Math.PI/2)),7229496);for(let v=0;v<3;v++){let M=v/3*we+.5;f.cyl(.005,.005,.55,x+Math.cos(M)*.1,2.02+.26,-5.05+Math.sin(M)*.1,4868682,4,_e(Ve(-M),Ft(.4)),0)}let y=c({type:"hang",zone:1,pos:new lt(x,2.02,-5.05),stand:new lt(x,0,-4.35),scale:1.35,pickR:.4,pickH:.9,pickY:-.5,high:!0});y.soil=l(d,x,2.02-.03,-5.05,.2,.2)}for(let x of rv){f.box(1.5,.2,.26,x,1,-6.78,8297100),f.box(1.56,.03,.3,x,1.1,-6.78,7244412);for(let m of[-.6,.6])f.box(.05,.14,.2,x+m,.86,-6.84,5917242);for(let m=-1;m<=1;m++){let p=c({type:"window",zone:1,pos:new lt(x+m*.46,1.1,-6.76),stand:new lt(x+m*.46,0,-6.05),scale:1.2,pickR:.24,pickH:.6,pickY:-.1});p.soil=l(d,x+m*.46,1.09,-6.76,.17,.2)}}}if(u.id===3&&hv(d,f,n,c,g),f.g.length&&d.add(f.mesh(Qi)),u.cost>0){let x=new Ut,m=new jn(300+u.id),[p,y]=u.tag;u.id===1?(m.box(.7,.36,.05,p,1.75,-4.92,12095592),m.cyl(.01,.01,.4,p-.28,2.05,-4.92,5592405,4),m.cyl(.01,.01,.4,p+.28,2.05,-4.92,5592405,4)):(m.box(.09,1.25,.09,p,.62,y,8018496),m.box(.95,.5,.06,p,1.25,y+.06,12884588,Ft(.04)),m.box(.8,.07,.065,p,1.33,y+.07,9070152,Ft(.04)),m.box(.6,.07,.065,p-.08,1.17,y+.07,9070152,Ft(.04))),x.add(m.mesh(Qi)),i.add(x),n.lockGroups[u.id]=x}}fv(i,n),uv(i,n),dv(i,n,e,t);let h=new Cn({visible:!1});n.pickables=[];for(let u of n.spots){let d=new ke(new hn(u.pickR,u.pickR,u.pickH,8),h);d.position.copy(u.pos),d.position.y+=u.pickH/2+(u.pickY??0),d.userData.spot=u,i.add(d),n.pickables.push(d),u.pick=d}return n.setZone=(u,d)=>{n.zoneGroups[u].visible=d,n.lockGroups[u]&&(n.lockGroups[u].visible=!d);for(let f of n.spots)f.zone===u&&(f.pick.visible=d)},n.setDecor=(u,d)=>{n.decor[u]&&(n.decor[u].visible=d)},n.setNight=u=>{for(let d of n.nightMats)d.emissiveIntensity=d.userData.e*u;for(let d of n.lamps)d.intensity=d.userData.i*u*(d.parent.visible?1:0),d.visible=u>.02},n.update=(u,d)=>{for(let f of n.tickers)f(u,d)},n.blocked=(u,d)=>{if(Math.abs(u)>12.2||d>14.4||d<-8.9)return!0;if(Math.abs(u)<4.95&&d<-4.95)return d<-6.55||Math.abs(u)>4.6||Math.abs(Math.abs(u)-4.05)<.45&&d<-5.3;for(let f of Mc)if(Tc(u,d,Ec(f),.22))return!0;if(af(u,d,.35))return!0;for(let f of Sc)if(!f.porch&&(u-f.x)**2+(d-f.zc)**2<.5**2)return!0;for(let f of wc)if((u-f.x)**2+(d-f.zc)**2<.62**2)return!0;for(let f of rf)for(let g of[-.75,.75])if((u-f.x-g)**2+(d-f.zc)**2<.3**2)return!0;for(let f in n.things){let g=n.things[f];if((u-g.pos.x)**2+(d-g.pos.z)**2<g.r**2)return!0}for(let f of n.decorBlocks)if(n.decor[f.id].visible&&(u-f.x)**2+(d-f.z)**2<f.r**2)return!0;return!1},n}function cv(i,e){let t=new jn(31),n=zt(32),s=16182489,r=7228468,o=16512748,a=[12146746,12870722,11423796,13397578,12082240],c=-10,l=9,h=6.2,u=3,d=-6.9;t.box(l,u,h,0,u/2,c,s,null,0),t.box(l+.12,.5,h+.12,0,.25,c,11904662,null,0);let f=2.5,g=l/2;for(let _ of[-1,1]){let w=new ft,B=_*g,V=c-h/2,Y=c+h/2,T=_>0?[B,u,Y,B,u,V,B,u+f,c]:[B,u,V,B,u,Y,B,u+f,c];w.setAttribute("position",new He(T,3)),w.computeVertexNormals(),t.add(w,null,s,0),t.cyl(.42,.42,.06,B+_*.02,u+.85,c,10274013,16,Ft(Math.PI/2),0),t.add(new pi(.44,.05,6,20),_e(ye(B+_*.03,u+.85,c),Ve(Math.PI/2)),o,0)}let x=Math.atan2(f,h/2),m=Math.hypot(f,h/2),p=(_,w,B,V,Y,T,S,b,E)=>{let A=(w-_)/E,F=Math.sin(T),$=Math.cos(T);for(let q=0;q<b;q++)for(let j=0;j<E;j++){let W=(q+.5)/b*S,X=_+(j+.5)*A+(q%2-.5)*A*.5;t.add(new hn(A*.52,A*.52,S/b*1.3,6,1,!0,0,Math.PI),_e(ye(X,B-F*W+.04+q*.002,V+Y*$*W),Ie(Y*(Math.PI/2+T)),Ve(Y*Math.PI/2),mi(.45,1,1)),a[Math.floor(n()*a.length)],.05)}t.box(w-_-.1,.08,S,(_+w)/2,B-F*S/2-.03,V+Y*$*S/2,9061936,Ie(Y*T),0)};p(-(l+1.1)/2,(l+1.1)/2,u+f,c,-1,x,m+.75,11,26),p(-(l+1.1)/2,(l+1.1)/2,u+f,c,1,x,m+.12,10,26),t.cyl(.16,.16,l+1.2,0,u+f+.1,c,11030066,8,Ft(Math.PI/2));for(let _ of[-1,1])for(let w of[-1,1])t.box(.2,u,.2,_*g,u/2,c+w*h/2,r);t.box(l+.1,.18,.16,0,u-.05,d,r),t.box(.7,1.9,.7,2.6,u+f-.3,c-1,11036494),t.box(.84,.14,.84,2.6,u+f+.68,c-1,9327936),e.chimney=new lt(2.6,u+f+.8,c-1),t.box(1.24,2.28,.1,0,1.14+nn,d+.03,o,null,0),t.box(1.04,2.14,.1,0,1.09+nn,d+.06,6262666,null,0);for(let[_,w]of[[-.24,.55],[.24,.55],[-.24,1.3],[.24,1.3]])t.box(.36,.6,.03,_,w+nn,d+.115,5670272,null,0);t.sph(.045,.38,1.1+nn,d+.14,14727258,1,1,1,8,0),t.add(new Yi(.2,16),ye(0,1.86+nn,d+.115),16179104,0);let y=new kt({color:10275040,roughness:.15,metalness:.1,emissive:16761962,emissiveIntensity:0});y.userData.e=1.6,e.nightMats.push(y);let v=[];for(let _ of[-2.75,2.75]){t.box(1.5,1.42,.1,_,1.85,d+.02,o,null,0);let B=new $i(1.3,1.22);B.translate(_,1.85,d+.075),v.push(B),t.box(.05,1.22,.04,_,1.85,d+.09,o,null,0),t.box(1.3,.05,.04,_,1.85,d+.09,o,null,0);for(let V of[-1,1]){t.box(.5,1.42,.05,_+V*1.02,1.85,d+.04,7312296);for(let Y=0;Y<6;Y++)t.box(.4,.03,.02,_+V*1.02,1.85-.55+Y*.22,d+.075,6456728,null,0)}t.box(1.7,.07,.2,_,1.85-.75,d+.08,o,null,0)}for(let _ of[-1,1]){let w=new Yi(.4,16);w.rotateY(_*Math.PI/2),w.translate(_*(g+.055),u+.85,c),v.push(w)}let M=new ke(xc(v),y);i.add(M),t.box(9.8,nn,2.05,0,nn/2,-5.93,11108956,null,0);for(let _=0;_<20;_++)t.box(.46,.02,2.05,-4.66+_*.49,nn+.005,-5.93,n.pick([11766370,10911320,12226664]),null,.03);t.box(2.4,.09,.4,0,.045,-4.75,10911320);for(let _ of[-4.7,-1.45,1.45,4.7])t.box(.15,2.35,.15,_,nn+1.17,-5,o),t.box(.24,.1,.24,_,nn+.05,-5,o),t.box(.26,.08,.26,_,2.5,-5,o);t.box(9.8,.16,.16,0,2.6,-5,o);for(let[_,w]of[[-4.7,-1.45],[1.45,4.7]]){t.box(w-_,.06,.07,(_+w)/2,nn+.78,-5,o);for(let B=_+.2;B<w;B+=.2)t.box(.04,.7,.04,B,nn+.42,-5,o,null,0)}p(-5.15,5.15,u+.1,d-.02,1,.19,2.5,5,30),t.box(.12,.2,.12,.95,2.1,d+.12,3815994);let C=new kt({color:16773320,emissive:16760944,emissiveIntensity:0,roughness:.4});C.userData.e=4,e.nightMats.push(C);let R=new ke(new Rt(.07,8,6),C);R.position.set(.95,2.02,d+.14),i.add(R);let P=new Tr(16758886,0,11,1.6);P.position.set(0,2.3,-5.6),P.userData.i=14,i.add(P),e.lamps.push(P),t.box(.9,.02,.5,0,nn+.012,-6.4,12087370),t.lathe([[.001,0],[.26,0],[.3,.3],[.26,.62],[.24,.62],[.24,.56]],5.6,0,-6.5,8018496,12),t.cyl(.24,.24,.02,5.6,.55,-6.5,6987968,12);let z=t.mesh(iv);i.add(z)}function hv(i,e,t,n,s){let{x:r,z:o,rx:a,rz:c}=Ur,l=new yr,h=40;for(let v=0;v<=h;v++){let M=v/h*we,C=1+.05*Math.sin(M*3+1)+.03*Math.sin(M*5),R=Math.cos(M)*a*C,P=Math.sin(M)*c*C;v===0?l.moveTo(R,P):l.lineTo(R,P)}let u=new ja(l,24);u.rotateX(Math.PI/2);let d=ov(),f=new ke(u,new kt({color:4165526,roughness:.06,metalness:.35,normalMap:d,normalScale:new le(.35,.35),transparent:!0,opacity:.86,side:wt}));f.position.set(r,.035,o),f.receiveShadow=!0,i.add(f),t.water=f;let g=new ke(u.clone(),new kt({color:2771524,roughness:1,side:wt}));g.position.set(r,.008,o),i.add(g),t.tickers.push((v,M)=>{d.offset.set(M*.012,M*.018)});let x=[12432806,11116949,13617080,10261898,11906204];for(let v=0;v<46;v++){let M=v/46*we+s.range(-.04,.04),C=1+.05*Math.sin(M*3+1)+.03*Math.sin(M*5)+s.range(0,.07),R=s.range(.13,.25);e.add(new Rt(R,7,5),_e(ye(r+Math.cos(M)*a*C,.04,o+Math.sin(M)*c*C),Ve(s()*6),mi(1,s.range(.5,.8),s.range(.7,1.1))),s.pick(x),.04)}let m=new Xt;for(let v=0;v<26;v++){let M=s.range(2.4,4.4),C=Math.cos(M)*a*.86+s.range(-.15,.15),R=Math.sin(M)*c*.86+s.range(-.1,.1),P=s.range(.5,1);m.petal(_e(ye(C,0,R),Ve(s()*6),Ie(s.range(.02,.2))),{L:P,W:.03,a:.6,b:.4,curl:.4,fold:.4,nu:4,nv:1,cols:[I(4160058),I(5937736),I(9091168)]}),v%4===0&&(m.tube(ye(C,0,R),[new lt(0,0,0),new lt(.02,P*.6,0),new lt(.03,P*1.1,0)],.006,.005,I(5933626),I(6982202),4),m.blob(ye(C+.03,P*1.1,R),.02,.07,I(6965802),I(5913122),6,4))}let p=new ke(m.build(),Xn({sway:.25}));p.position.set(r,0,o),p.castShadow=!0,i.add(p);for(let[v,M]of[[-1,.45],[.85,-.5],[.15,.75],[1.35,.5]]){let C=r+v,R=o+M,P=Math.hypot(v/a,M/c),z=r+v/P*1*(1+.32/a),_=o+M/P*(1+.42/c),w=Math.atan2(M/c,v/a);n({type:"pond",zone:3,pos:new lt(C,.04,R),stand:new lt(r+Math.cos(w)*(a+.75),0,o+Math.sin(w)*(c+.75)),scale:1.7,pickR:.5,pickH:.5})}let y=[];for(let v=0;v<4;v++){let M=new Xt,C=s.pick([I(15759914),I(16052456),I(15222826),I(16232490)]);M.blob(_e(Ft(Math.PI/2),mi(1,1,.5)),.05,.14,C,s()<.5?I(16052456):C,6,5),M.petal(_e(ye(-.12,0,0),Ft(Math.PI/2),Ie(Math.PI/2)),{L:.1,W:.09,a:1.6,b:.5,nu:2,nv:2,cols:[C,C,C]});let R=new ke(M.build(),new kt({vertexColors:!0,roughness:.5,side:wt}));R.userData={a:s()*6,r:s.range(.45,.8),v:s.range(.25,.45)*s.sign(),o:s()*6},i.add(R),y.push(R)}t.tickers.push((v,M)=>{for(let C of y){let R=C.userData,P=R.a+M*R.v,z=R.r+.12*Math.sin(M*.5+R.o);C.position.set(r+Math.cos(P)*a*z,-.03,o+Math.sin(P)*c*z),C.rotation.y=-P-Math.sign(R.v)*Math.PI/2+Math.sin(M*5+R.o)*.15}})}function uv(i,e){e.things={};let t=new Cn({visible:!1}),n=(s,r,o,a,c,l,h)=>{let u=new ke(new hn(a,a,c,8),t);return u.position.set(r,c/2,o),u.userData.thing=s,i.add(u),e.things[s]={kind:s,pos:new lt(r,0,o),r:a*.85,stand:new lt(r+l[0],0,o+l[1]),top:h,pick:u},u};{let o=new jn(61),a=Ve(Math.PI/2),c=(m,p,y)=>new lt(m,p,y).applyMatrix4(a).add(new lt(-1.85,0,2.75)),l=(m,p,y,v,M,C,R,P)=>{let z=c(v,M,C);o.box(m,p,y,z.x,z.y,z.z,R,P?_e(a,P):a)};l(1,.05,.56,0,.66,0,12159582),l(.94,.3,.5,0,.5,0,11041360);for(let m of[-.44,.44])for(let p of[-.22,.22])l(.06,.66,.06,m,.33,p,8215616);for(let m of[-.47,.47])l(.045,1.25,.045,m,1.28,-.24,8215616);for(let m=0;m<6;m++)l(.18,.03,.7,-.45+m*.18,1.88-0,.02,m%2?16183266:14837855,Ie(.22));let h=c(-.22,.69,.02);o.lathe([[.001,0],[.13,0],[.17,.14],[.175,.16],[.16,.16]],h.x,h.y,h.z,12884572,12),h=c(.26,.69,0),o.lathe([[.001,0],[.09,0],[.1,.2],[.085,.2]],h.x,h.y,h.z,8366272,10),l(.34,.26,.03,0,.36,.3,4016708,Ie(-.18)),l(.38,.03,.035,0,.5,.275,12159582,Ie(-.18));let u=o.mesh(Qi);i.add(u);let d=new Xt,f=zt(62),g=[15760036,16238666,16777215,11832048,14829626].map(I);for(let m=0;m<16;m++){let p=m<10,y=p?c(-.22+f.range(-.1,.1),.82,.02+f.range(-.1,.1)):c(.26+f.range(-.04,.04),.88,f.range(-.04,.04)),v=p?f.range(.06,.16):f.range(.14,.26),M=f.pick(g);d.tube(ye(y.x,y.y,y.z),[new lt(0,0,0),new lt(.01,v*.5,0),new lt(f.range(-.05,.05),v,f.range(-.05,.05))],.004,.003,I(4885050),I(5937732),4);for(let C=0;C<6;C++)d.petal(_e(ye(y.x,y.y+v,y.z),Ve(C*1.05),Ie(1.15)),{L:.04,W:.028,nu:2,nv:2,cup:.3,cols:[M,M,M]})}let x=new ke(d.build(),Xn({sway:.3}));x.castShadow=!0,i.add(x),n("orders",-1.85,2.75,.62,2,[1.05,0],2.15)}{let o=new jn(63);o.cyl(.04,.05,1.05,1.7,.52,2.95,9071178,6),o.box(.3,.2,.44,1.7,1.14,2.95,7314872),o.cyl(.15,.15,.44,1.7,1.24,2.95,7314872,12,Ie(Math.PI/2)),o.box(.02,.2,.02,1.7-.165,1.2,2.95+.24,5209496),o.cyl(.13,.13,.012,1.7,1.2,2.95+.226,5999270,12,Ie(Math.PI/2)),i.add(o.mesh(Qi));let a=new Ut;a.position.set(1.7+.16,1.16,2.95-.05);let c=new ke(new bn(.015,.26,.03),new kt({color:14829626,roughness:.6}));c.position.y=.13,a.add(c);let l=new ke(new bn(.015,.09,.12),c.material);l.position.set(0,.22,.06),a.add(l),c.castShadow=l.castShadow=!0,i.add(a),e.mailFlag=a,n("mail",1.7,2.95,.36,1.6,[0,.8],1.75)}}function fv(i,e){e.decorBlocks=[];let t=(n,s,r)=>{let o=new jn(400+n.length),a=new Ut;s(o,a),o.g.length&&a.add(o.mesh(Qi)),a.visible=!1,i.add(a),e.decor[n]=a,r&&e.decorBlocks.push({id:n,...r})};t("lanternas",(n,s)=>{let r=new kt({color:16773320,emissive:16758880,emissiveIntensity:0,roughness:.4});r.userData.e=5,e.nightMats.push(r);let o=[[-1,-2.6],[1,.6],[-1,6.2],[1,9.4],[-1,12.8],[5.6,4.25],[-5.6,4.25]];for(let[a,c]of o){n.cyl(.025,.035,.8,a,.4,c,3815994,6),n.box(.16,.03,.16,a,.8,c,3815994),n.add(new zs(.14,.1,4),_e(ye(a,1.05,c),Ve(Math.PI/4)),3815994);let l=new ke(new bn(.11,.18,.11),r);l.position.set(a,.905,c),s.add(l)}for(let[a,c]of[[0,-1],[0,7.8],[0,4.25]]){let l=new Tr(16756832,0,9,1.5);l.position.set(a,1.1,c),l.userData.i=9,s.add(l),e.lamps.push(l)}}),t("banco",n=>{for(let a=0;a<4;a++)n.box(1.5,.04,.1,-3.4,.45,2.7-.18+a*.12,10778704,null,.04);for(let a=0;a<3;a++)n.box(1.5,.1,.035,-3.4,.62+a*.14,2.7-.27,10778704,Ie(-.15),.04);for(let a of[-.68,.68])n.box(.07,.45,.07,-3.4+a,.22,2.7+.2,4868682),n.box(.07,.98,.07,-3.4+a,.49,2.7-.25,4868682,Ie(-.1)),n.box(.07,.05,.5,-3.4+a,.62,2.7-.02,4868682)},{x:-3.4,z:2.7,r:.85}),t("bebedouro",(n,s)=>{n.lathe([[.001,0],[.24,0],[.22,.06],[.09,.12],[.07,.62],[.12,.7],[.42,.78],[.44,.84],[.4,.84],[.36,.78],[.001,.76]],2.6,0,2.5,13617340,18);let c=new ke(new Yi(.385,18),new kt({color:6992064,roughness:.05,metalness:.3,transparent:!0,opacity:.85}));c.rotation.x=-Math.PI/2,c.position.set(2.6,.815,2.5),s.add(c)},{x:2.6,z:2.5,r:.55}),t("casinha",n=>{n.cyl(.04,.05,2.1,4.6,1.05,-3.7,9071178,6),n.box(.36,.34,.32,4.6,2.2,-3.7,8038592),n.box(.3,.03,.4,4.6-.12,2.45,-3.7,13129802,Ft(.7)),n.box(.3,.03,.4,4.6+.12,2.45,-3.7,13129802,Ft(-.7)),n.cyl(.06,.06,.02,4.6,2.22,-3.7+.165,2763306,10,Ie(Math.PI/2)),n.cyl(.012,.012,.12,4.6,2.1,-3.7+.2,9071178,5,Ie(Math.PI/2))}),t("carrinho",(n,s)=>{let a=Ve(.6),c=(g,x,m)=>new lt(g,x,m).applyMatrix4(a).add(new lt(4.2,0,1.95)),l=c(0,.42,0);n.box(.9,.28,.56,l.x,l.y,l.z,5933690,a),l=c(0,.56,0),n.box(.82,.04,.48,l.x,l.y,l.z,4863014,a),l=c(.55,.2,0),n.cyl(.2,.2,.07,l.x,l.y,l.z,3815994,14,_e(a,Ie(Math.PI/2)));for(let g of[-.24,.24])l=c(-.75,.48,g),n.box(.7,.04,.04,l.x,l.y,l.z,9071178,_e(a,Ft(-.12))),l=c(-.35,.14,g),n.box(.05,.3,.05,l.x,l.y,l.z,9071178,a);let h=new Xt,u=zt(8),d=[15755930,16238622,16777215,10124008,15888410].map(I);for(let g=0;g<26;g++){let x=c(u.range(-.36,.36),.58,u.range(-.2,.2)),m=u.range(.1,.24),p=u.pick(d);h.tube(ye(x.x,x.y,x.z),[new lt(0,0,0),new lt(.01,m*.5,0),new lt(u.range(-.04,.04),m,u.range(-.04,.04))],.004,.003,I(4885050),I(5937732),4);for(let y=0;y<6;y++)h.petal(_e(ye(x.x,x.y+m,x.z),Ve(y*1.05),Ie(1.2)),{L:.045,W:.03,nu:2,nv:2,cup:.3,cols:[p,p,p]});for(let y=0;y<3;y++)h.petal(_e(ye(x.x,x.y,x.z),Ve(u()*6),Ie(u.range(.5,1.1))),{L:.1,W:.04,nu:2,nv:2,fold:.3,cols:[I(3832372),I(5016122),I(6987850)]})}let f=new ke(h.build(),Xn({sway:.4}));f.castShadow=!0,s.add(f)},{x:4.2,z:1.95,r:.75}),t("anao",n=>{n.sph(.15,-4.3,.17,-.1,3828392,1,1.1,1,10),n.sph(.11,-4.3,.4,-.1,15911076,1,1,1,10),n.add(new zs(.115,.3,10),ye(-4.3,.6,-.1),14170158),n.sph(.09,-4.3,.33,-.1+.07,16053488,1,1.1,.7,8),n.sph(.025,-4.3,.41,-.1+.105,15247496,1,1,1,6);for(let o of[-.07,.07])n.sph(.05,-4.3+o,.03,-.1+.06,4863014,1,.7,1.4,6)})}function dv(i,e,t,n){let s=[],r=[],o=[],a=[];for(let S=0;S<3;S++){let b=S/3*Math.PI+.3,E=Math.cos(b),A=Math.sin(b),F=(S-1)*.02,$=S%2*.02,q=(S-1)*.03,j=s.length/3,W=[[-.5,0,0],[.5,0,0],[-.32,.55,.5],[.32,.55,.5],[0,1,1]];for(let[X,se,ve]of W){s.push(F+E*X*.026+q*ve,se,$+A*X*.026+q*ve*.5),o.push(0,1,0);let be=.68+se*.4;r.push(be*.82,be,be*.6)}a.push(j,j+1,j+2,j+1,j+3,j+2,j+2,j+3,j+4)}let c=new ft;c.setAttribute("position",new He(s,3)),c.setAttribute("normal",new He(o,3)),c.setAttribute("color",new He(r,3)),c.setIndex(a);let l=new to({vertexColors:!0,side:wt});l.onBeforeCompile=S=>{Object.assign(S.uniforms,Dn),S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        { vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); float h = position.y * position.y;
          float ph = ip.x * 0.55 + ip.z * 0.4; float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ip.x * 0.15 + ip.z * 0.11);
          transformed.x += (sin(uTime * 1.5 + ph) * 0.09 + sin(uTime * 3.3 + ph * 2.1) * 0.03) * h * uWind * gust;
          transformed.z += cos(uTime * 1.2 + ph * 1.3) * 0.07 * h * uWind * gust; }`)};let h=zt(55),u=[],d=Mc.map(Ec),f=(S,b)=>{if(Math.abs(S)<4.95&&b<-4.75||lv(S,b))return!1;for(let E of d)if(Tc(S,b,E,.1))return!1;if(af(S,b,.28))return!1;for(let E of Sc)if((S-E.x)**2+(b-E.zc)**2<.1)return!1;for(let E of wc)if((S-E.x)**2+(b-E.zc)**2<.45)return!1;return!0},g=78e3,x=[[],[],[],[],[],[],[]],m=new Nt,p=new fe,y=[];for(let S=0;S<g;S++){let b=S<g*.74,E,A;if(b)E=h.range(-12.5,12.5),A=h.range(-9.1,14.6);else{let $=h()*we,q=13+Math.pow(h(),1.6)*22;if(E=Math.cos($)*q*1.1,A=3+Math.sin($)*q,Math.abs(E)<12.6&&A>-9.2&&A<14.7||Math.abs(E)<5.2&&A<-6||Math.abs(E)<.9&&A>14)continue}if(b&&!f(E,A))continue;let F=b?Nr(E,A):-1;y.push({x:E,z:A,zn:F,s:h.range(.75,1.25),rot:h()*we,hue:h(),wild:h.range(1.7,2.8)})}for(let S=y.length-1;S>0;S--){let b=Math.floor(h()*(S+1)),E=y[S];y[S]=y[b],y[b]=E}let v=new Ns(c,l,y.length),M=S=>{let b=y[S],E=b.zn>0&&!n.has(b.zn),A=b.zn===-1||E;m.position.set(b.x,Ac(b.x,b.z),b.z),m.rotation.set(0,b.rot,0);let F=(A?.12*b.wild:.09)*b.s;m.scale.set(b.s*(A?1.25:1),F,b.s*(A?1.25:1)),m.updateMatrix(),v.setMatrixAt(S,m.matrix),A?p.setHSL(.19+b.hue*.08,.36+b.hue*.1,.34+b.hue*.1):p.setHSL(.225+b.hue*.05,.37,.33+b.hue*.07),v.setColorAt(S,p)};y.forEach((S,b)=>{M(b),S.zn>0&&x[S.zn].push(b)}),v.receiveShadow=!0,v.frustumCulled=!1,i.add(v),e.grass=v,e.setGrass=S=>{v.count=Math.max(1e3,Math.round(y.length*S))},e.setGrass(t.grass),e.mowZone=S=>{for(let b of x[S])M(b);v.instanceMatrix.needsUpdate=!0,v.instanceColor.needsUpdate=!0};let C=new ft,R=[],P=[],z=[],_=[];for(let S=0;S<6;S++){let b=S/6*we,E=R.length/3;R.push(0,1,0,Math.cos(b-.4)*.5,1.06,Math.sin(b-.4)*.5,Math.cos(b+.4)*.5,1.06,Math.sin(b+.4)*.5),P.push(1,.9,.3,1,1,1,1,1,1),_.push(0,1,0,0,1,0,0,1,0),z.push(E,E+2,E+1)}{let S=R.length/3;R.push(-.05,0,0,.05,0,0,0,1,0),P.push(.25,.5,.2,.25,.5,.2,.3,.6,.25),_.push(0,1,0,0,1,0,0,1,0),z.push(S,S+1,S+2)}C.setAttribute("position",new He(R,3)),C.setAttribute("color",new He(P,3)),C.setAttribute("normal",new He(_,3)),C.setIndex(z);let w=y.map((S,b)=>[S,b]).filter(([S])=>(S.zn===-1||S.zn>0)&&S.hue>.93),B=new Ns(C,l,w.length),V=[16777215,16242762,16228552,12099824,16222810,16773792],Y=S=>{let[b]=w[S],E=b.zn===-1||!n.has(b.zn);m.position.set(b.x+.05,0,b.z),m.rotation.set(0,b.rot,0);let A=E?.09*b.s:1e-4;m.scale.set(A,E?.3*b.wild*.55:1e-4,A),m.updateMatrix(),B.setMatrixAt(S,m.matrix),B.setColorAt(S,p.set(V[Math.floor(b.rot*7)%V.length]))};w.forEach((S,b)=>Y(b)),B.frustumCulled=!1,i.add(B);let T=e.mowZone;e.mowZone=S=>{T(S),w.forEach(([b],E)=>{b.zn===S&&Y(E)}),B.instanceMatrix.needsUpdate=!0}}var pv=16507084,mv=[8150084,10122840,12360312],gv=8364170,xv=7114360,vv=16511972,_v=14656828,yv=15520922,lf=15233898;function Rc(i){let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d");t.fillStyle="#fbe0cc",t.fillRect(0,0,1024,512);let n=256,s=276,r=1.62;t.translate(n,s),t.scale(r,r),t.translate(-n,-s);for(let a of[-1,1]){let c=t.createRadialGradient(n+a*58,s+30,2,n+a*58,s+30,26);c.addColorStop(0,"rgba(244,128,128,0.5)"),c.addColorStop(1,"rgba(244,128,128,0)"),t.fillStyle=c,t.fillRect(n+a*58-30,s,60,62)}for(let a of[-1,1]){let c=n+a*36;if(i==="open"){t.save(),t.beginPath(),t.ellipse(c,s,16.5,20,0,0,we),t.clip(),t.fillStyle="#fffdfa",t.fillRect(c-20,s-24,40,48);let l=t.createRadialGradient(c,s+5,2,c,s+1,16);l.addColorStop(0,"#d9c27a"),l.addColorStop(.42,"#a9a45e"),l.addColorStop(.85,"#6f7a44"),l.addColorStop(1,"#4a5230"),t.fillStyle=l,t.beginPath(),t.ellipse(c,s+2,13.5,16.5,0,0,we),t.fill(),t.fillStyle="#1e2a2c",t.beginPath(),t.ellipse(c,s+2,5.6,7.6,0,0,we),t.fill(),t.fillStyle="rgba(60,40,30,0.26)",t.fillRect(c-20,s-24,40,9),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(c-5,s-6,4.4,5.2,0,0,we),t.fill(),t.beginPath(),t.ellipse(c+5,s+9,2.1,2.5,0,0,we),t.fill(),t.restore(),t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(c-18,s-9),t.quadraticCurveTo(c,s-27,c+18,s-9),t.stroke(),t.lineWidth=2.6,t.beginPath(),t.moveTo(c+a*17,s-10),t.lineTo(c+a*23,s-15),t.stroke(),t.beginPath(),t.moveTo(c+a*14,s-14),t.lineTo(c+a*18,s-21),t.stroke()}else t.strokeStyle="#4a3022",t.lineWidth=4,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(c-16,s+5),t.quadraticCurveTo(c,s-13,c+16,s+5)):(t.moveTo(c-16,s+1),t.quadraticCurveTo(c,s+12,c+16,s+1)),t.stroke();t.strokeStyle="#7c5a40",t.lineWidth=3.4,t.lineCap="round",t.beginPath(),t.moveTo(c-15,s-35+a*0),t.quadraticCurveTo(c,s-42,c+15,s-35),t.stroke()}t.fillStyle="rgba(220,150,120,0.45)",t.beginPath(),t.ellipse(n,s+28,3.4,2.4,0,0,we),t.fill(),t.strokeStyle="#c4605c",t.lineWidth=3,t.lineCap="round",t.beginPath(),i==="happy"?(t.moveTo(n-11,s+43),t.quadraticCurveTo(n,s+58,n+11,s+43),t.closePath(),t.fillStyle="#d8706a",t.fill()):(t.moveTo(n-12,s+44),t.quadraticCurveTo(n,s+47.5,n+12,s+44),t.quadraticCurveTo(n,s+58,n-12,s+44),t.closePath(),t.fillStyle="#fffaf4",t.fill(),t.lineJoin="round",t.lineWidth=2.6),t.stroke();let o=new Ln(e);return o.colorSpace=pt,o.anisotropy=8,o}var dn=(i,e=.7,t={})=>new kt({color:i,roughness:e,...t});function ct(i,e,t,n=0,s=0,r=0){let o=new ke(i,e);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,t.add(o),o}function zn(i,e,t,n){let s=new Ut;return s.position.set(e,t,n),i.add(s),s}var zr=(i,e=20)=>new Ci(i.map(([t,n])=>new le(t,n)),e);function cf(){let i=new Ut,e=zn(i,0,0,0),t=dn(pv,.62),n=dn(gv,.8,{side:wt}),s=dn(vv,.8),r=dn(_v,.45),o=dn(yv,.9,{side:wt}),a={};a.hips=zn(e,0,.87,0),a.spine=zn(a.hips,0,.1,0),ct(zr([[.001,-.02],[.118,0],[.108,.1],[.125,.24],[.138,.32],[.11,.4],[.05,.43],[.045,.5]]),s,a.spine).scale.z=.82;{let b=new Ci([[.122,0],[.112,.1],[.128,.22],[.139,.3]].map(([E,A])=>new le(E*1.04,A)),10,-.6,1.2);ct(b,n,a.spine).scale.z=.84}for(let b of[-1,1])ct(new bn(.032,.17,.014),n,a.spine,b*.075,.365,.092).rotation.x=-.5,ct(new bn(.035,.34,.016),n,a.spine,b*.075,.26,-.1).rotation.x=.2,ct(new Rt(.014,8,6),dn(15918784,.4),a.spine,b*.075,.285,.123);a.skirt=zn(a.hips,0,.11,0);let c=zr([[.112,.02],[.122,0],[.146,-.1],[.2,-.25],[.262,-.4],[.296,-.5],[.301,-.52]],28);{let b=c.attributes.position;for(let E=0;E<b.count;E++){let A=b.getY(E),F=Math.atan2(b.getZ(E),b.getX(E)),$=1+.07*Math.sin(F*9)*$e(-A/.5,0,1);b.setX(E,b.getX(E)*$),b.setZ(E,b.getZ(E)*$*.92)}c.computeVertexNormals()}ct(c,n,a.skirt).receiveShadow=!1,ct(new pi(.119,.014,6,24),dn(xv,.8),a.skirt,0,.012,0).rotation.x=Math.PI/2;for(let b of[-1,1]){let E=zn(a.hips,b*.075,0,0),A=zn(E,0,-.4,0);ct(new di(.06,.3,4,10),t,E,0,-.2,0),ct(new di(.05,.2,4,10),t,A,0,-.12,0),ct(new Rt(.061,10,8),t,A,0,0,0),ct(zr([[.001,-.455],[.066,-.45],[.062,-.3],[.066,-.17],[.072,-.165],[.072,-.15],[.058,-.15]],14),r,A),ct(new Rt(.068,12,8),r,A,0,-.415,.045).scale.set(1,.72,1.7),a[b<0?"hipL":"hipR"]=E,a[b<0?"kneeL":"kneeR"]=A}for(let b of[-1,1]){let E=zn(a.spine,b*.15,.345,0),A=zn(E,0,-.23,0);ct(new Rt(.062,12,9),s,E,b*.005,-.03,0).scale.set(1,1.15,1),ct(new di(.036,.16,4,8),t,E,0,-.14,0),ct(new di(.032,.17,4,8),t,A,0,-.095,0),ct(new Rt(.037,10,8),t,A,0,0,0);let $=zn(A,0,-.215,0);ct(new Rt(.04,10,8),t,$).scale.set(.85,1.1,1),a[b<0?"shL":"shR"]=E,a[b<0?"elL":"elR"]=A,a[b<0?"handL":"handR"]=$}a.neck=zn(a.spine,0,.46,0),a.head=zn(a.neck,0,.135,.005);let l=.158,h={open:Rc("open"),closed:Rc("closed"),happy:Rc("happy")},u=dn(16777215,.62,{map:h.open,emissive:16777215,emissiveMap:h.open,emissiveIntensity:.16});ct(new Rt(l,40,28),u,a.head).scale.set(.97,1.04,.96),ct(new Rt(.012,8,6),t,a.head,0,-.03,l*.955).scale.set(1,.75,.6);for(let b of[-1,1])ct(new Rt(.03,8,6),t,a.head,b*l*.95,-.01,0).scale.set(.4,1,.7);for(let b of[-1,1])ct(new Rt(.011,8,6),dn(3116894,.3,{metalness:.4,emissive:997922}),a.head,b*l*.975,-.045,.004);let f=new Xt,g=zt(4),x=mv.map(I),m=l*1.07,p=(b,E,A,F,$={})=>f.petal(_e(ye(0,m*.98,-.012),Ve(b),Ie(Math.PI/2-.04)),{L:E,W:A,a:.6,b:.42,cup:.16,nu:$.nu??10,nv:3,vein:.2,base:.6,phase:g()*6,angFn:q=>{let j=q*E,W=F*m;return j<W?j/m:F+($.flare??0)*Math.sin((j-W)/Math.max(.01,E-W)*Math.PI*($.waves??1))},cols:x.map(q=>q.clone().multiplyScalar(g.range(.9,1.1))),...$});f.blob(ye(0,.034,-.05),l*1,l*1,x[0],x[1],16,9);for(let b=0;b<15;b++){let E=b/14-.5,A=Math.abs(E+.17);p(E*2.6+.1+g.range(-.04,.04),m*(.62+A*1.35+g.range(0,.08)),.125,9,{nu:6,b:.3,twist:(E+.17)*.5})}for(let b of[-1,1])for(let E=0;E<4;E++)p(b*(1.42+E*.2),.42+E*.07,.1,1.5,{flare:-.14,waves:1.6,ruffle:.05,rf:1.2});for(let b=0;b<17;b++){let E=b/16-.5;p(Math.PI+E*2.9,.62+g.range(-.04,.06)-Math.abs(E)*.1,.105,1.62,{flare:-.16,waves:1.5,ruffle:.06,rf:1.2,nu:12})}let y=Xn({sway:.16,glow:.07,roughness:.48}),v=new ke(f.build(),y);v.castShadow=!0,v.receiveShadow=!0,a.head.add(v),a.hat=zn(a.head,0,l*.7,-.03),a.hat.rotation.x=-.36;let M=zr([[.13,.012],[.19,.004],[.25,-.012],[.292,-.036],[.297,-.042]],36);{let b=M.attributes.position;for(let E=0;E<b.count;E++){let A=Math.atan2(b.getZ(E),b.getX(E)),F=Math.hypot(b.getX(E),b.getZ(E));b.setY(E,b.getY(E)+Math.sin(A*2+.5)*.02*(F/.3)**2+Math.sin(A*5)*.005*(F/.3))}M.computeVertexNormals()}ct(M,o,a.hat).receiveShadow=!1,ct(zr([[.146,0],[.143,.05],[.128,.1],[.09,.128],[.001,.134]],28),o,a.hat),ct(new hn(.1445,.148,.038,28,1,!0),dn(lf,.7,{side:wt}),a.hat,0,.024,0);for(let b of[-1,1])ct(new Rt(.03,8,6),dn(lf,.7),a.hat,-.12+0,.03,b*.035-.07).scale.set(.5,1.2,1.5);{let b=new Xt;for(let A=0;A<6;A++)b.petal(_e(Ve(A*1.047),Ie(1.25)),{L:.034,W:.026,nu:2,nv:2,cup:.3,cols:[I(16774880),I(16777215),I(16777215)]});b.blob(ye(0,.004,0),.01,.006,I(15905308),I(16306240),6,3);let E=new ke(b.build(),dn(16777215,.7,{vertexColors:!0,side:wt}));E.position.set(.108,.045,.103),E.rotation.set(1.1,0,-.75),a.hat.add(E)}let C=new Ut,R=dn(7317408,.35,{metalness:.35});ct(new hn(.075,.085,.15,16),R,C,0,0,0);let P=ct(new hn(.014,.024,.2,8),R,C,0,.03,.14);P.rotation.x=.95;let z=ct(new hn(.034,.016,.03,10),R,C,0,.092,.225);z.rotation.x=.95;let _=ct(new pi(.06,.009,6,14,Math.PI*1.1),R,C,0,.05,-.07);_.rotation.y=Math.PI/2,_.rotation.z=0;let w=ct(new pi(.055,.008,6,12,Math.PI),R,C,0,.075,0);w.rotation.y=Math.PI/2,C.position.set(0,-.11,.03),C.visible=!1,a.handR.add(C);let B=new Ut;ct(new hn(.013,.013,.09,6),dn(9067064),B,0,0,0),ct(new Rt(.035,8,6),dn(12107972,.3,{metalness:.6}),B,0,-.085,0).scale.set(.8,1.5,.25),B.position.set(0,-.05,.02),B.visible=!1,a.handR.add(B);let Y={by:0,lean:0,twist:0,spine:0,headX:0,headY:0,headZ:0,shLx:0,shLz:.2,shRx:0,shRz:-.2,elL:-.1,elR:-.1,hipL:0,hipR:0,kneeL:0,kneeR:0,skirtX:0,skirtS:1,handRx:0},T={...Y},S={group:i,J:a,state:"idle",t:0,phase:0,speed:0,heading:0,targetHeading:0,blinkT:2,face:"open",faceHold:0,actionT:0,actionDur:0,action:null,high:!1,lookAt:null,onStep:null,spoutWorld:new O,idleSeed:0};return S.setFace=(b,E=0)=>{S.face=b,S.faceHold=E,u.map=h[b],u.emissiveMap=h[b]},S.play=(b,E,A={})=>{S.state=b,S.actionT=0,S.actionDur=E,S.high=!!A.high,C.visible=b==="water",B.visible=b==="plant",b==="cheer"&&S.setFace("happy",E+.4)},S.stop=()=>{S.state="idle",C.visible=!1,B.visible=!1},S.faceTo=(b,E)=>{S.targetHeading=Math.atan2(b-i.position.x,E-i.position.z)},S.update=(b,E)=>{S.t+=b;let A=Y,F=10,$=Math.sin(E*1.7);if(A.by=$*.004,A.lean=0,A.twist=Math.sin(E*.45)*.03,A.spine=$*.012,A.headX=Math.sin(E*.6+1)*.04,A.headY=Math.sin(E*.33)*.22+Math.sin(E*.71)*.08,A.headZ=Math.sin(E*.5)*.03,A.shLx=Math.sin(E*.9)*.03,A.shRx=-Math.sin(E*.9)*.03,A.shLz=.2,A.shRz=-.2,A.elL=-.2,A.elR=-.2,A.hipL=0,A.hipR=0,A.kneeL=0,A.kneeR=0,A.skirtX=0,A.skirtS=1,A.handRx=0,S.state==="walk"){S.phase+=b*S.speed*3.5;let W=Math.sin(S.phase),X=Math.cos(S.phase),se=$e(S.speed/2.4,.3,1);A.hipL=-W*.62*se,A.hipR=W*.62*se,A.kneeL=Math.max(0,X)*.95*se+.08,A.kneeR=Math.max(0,-X)*.95*se+.08,A.shLx=W*.5*se,A.shRx=-W*.5*se,A.elL=-.3-Math.max(0,W)*.3,A.elR=-.3-Math.max(0,-W)*.3,A.shLz=.2,A.shRz=-.2,A.by=Math.abs(X)*.035*se-.02,A.lean=.07*se,A.twist=-W*.1*se,A.headY=W*.05,A.headX=-.03,A.headZ=X*.03,A.skirtX=-.05+X*.04;let ve=Math.floor(S.phase/Math.PI);ve!==S._step&&(S._step=ve,S.onStep&&S.onStep()),F=16}else if(S.state==="water"){S.actionT+=b;let W=$e(S.actionT/S.actionDur,0,1),X=un(W/.18)*un((1-W)/.15),se=un((W-.16)/.12)*un((1-W)/.14),ve=S.high?1:0;A.shRx=-(1+ve*1.25)*X,A.shRz=-.1-.12*X,A.elR=-(.55-ve*.3)*X,A.handRx=(.75+Math.sin(E*5)*.06)*se-ve*.3*X,A.shLx=.15*X,A.shLz=.3*X+.1,A.elL=-.9*X,A.lean=(.14-ve*.2)*X,A.headX=(.3-ve*.75)*X,A.headY=0,A.twist=.12*X,A.kneeL=.12*X,A.hipL=-.06*X}else if(S.state==="plant"){S.actionT+=b;let W=$e(S.actionT/S.actionDur,0,1),X=un(W/.22)*un((1-W)/.2),se=Math.sin(E*9)*.5+.5;A.by=-.36*X,A.hipL=-1.5*X,A.kneeL=2.25*X,A.hipR=-.55*X,A.kneeR=2.1*X,A.lean=.55*X,A.spine=.15*X,A.skirtX=-.5*X,A.skirtS=1-.3*X,A.shRx=-(1.05+se*.3)*X,A.elR=-(.5+se*.45)*X,A.shRz=-.05,A.shLx=-.9*X,A.elL=-.7*X,A.shLz=.25*X,A.headX=.35*X,A.headY=0,A.handRx=.6*X,F=12}else if(S.state==="collect"){S.actionT+=b;let W=$e(S.actionT/S.actionDur,0,1),X=un(W/.3)*un((1-W)/.3);A.lean=.4*X,A.shRx=-1.25*X,A.shLx=-1.2*X,A.elR=-.4*X,A.elL=-.45*X,A.shRz=-.25*X,A.shLz=.25*X,A.kneeL=.3*X,A.kneeR=.3*X,A.hipL=-.3*X,A.hipR=-.3*X,A.by=-.04*X,A.headX=.3*X,A.headY=0}else if(S.state==="cheer"){S.actionT+=b;let W=$e(S.actionT/S.actionDur,0,1),X=un(W/.2)*un((1-W)/.25),se=Math.abs(Math.sin(W*Math.PI*3))*X;A.by=se*.11,A.shLx=-2.45*X,A.shRx=-2.45*X,A.shLz=.95*X+.1,A.shRz=-.95*X-.1,A.elL=-.25,A.elR=-.25,A.headX=-.2*X,A.headY=0,A.kneeL=(1-se)*.3*X,A.kneeR=(1-se)*.3*X,A.hipL=-(1-se)*.15*X,A.hipR=-(1-se)*.15*X,A.spine=-.08*X,F=18}else if(S.state==="admire"){S.actionT+=b;let W=$e(S.actionT/S.actionDur,0,1),X=un(W/.25)*un((1-W)/.25);A.lean=.25*X,A.shLx=-.5*X,A.shRx=-.5*X,A.elL=-1.7*X,A.elR=-1.7*X,A.shLz=-.25*X,A.shRz=.25*X,A.headX=.22*X,A.headZ=.12*X,A.headY=0,A.kneeL=.15*X,A.kneeR=.15*X,A.hipL=-.1*X,A.hipR=-.1*X}S.state!=="idle"&&S.state!=="walk"&&S.actionT>=S.actionDur&&S.stop();let q=1-Math.exp(-F*b);for(let W in T)T[W]+=(Y[W]-T[W])*q;e.position.y=T.by,e.rotation.x=T.lean*.22,e.position.z=-T.lean*.1,a.spine.rotation.set(T.spine+T.lean*.95,T.twist,0),a.hips.rotation.y=-T.twist*.4,a.head.rotation.set(T.headX-T.lean*.75,T.headY-T.twist,T.headZ),a.shL.rotation.set(T.shLx,0,-T.shLz),a.shR.rotation.set(T.shRx,0,-T.shRz),a.hipL.rotation.x=T.hipL,a.hipR.rotation.x=T.hipR,a.kneeL.rotation.x=T.kneeL,a.kneeR.rotation.x=T.kneeR,a.skirt.rotation.x=T.skirtX,a.skirt.scale.set(1+(1-T.skirtS)*.5,T.skirtS,1+(1-T.skirtS)*.8),y.userData.u.uSway.value=.14+S.speed*.12;let j=S.targetHeading-S.heading;j=Math.atan2(Math.sin(j),Math.cos(j)),S.heading+=j*(1-Math.exp(-9*b)),i.rotation.y=S.heading,S.faceHold>0?(S.faceHold-=b,S.faceHold<=0&&S.setFace("open")):(S.blinkT-=b,S.blinkT<0&&(S.face==="open"?(S.setFace("closed"),S.blinkT=.11):(S.setFace("open"),S.blinkT=1.8+Math.random()*3.5))),z.getWorldPosition(S.spoutWorld)},S}var Ii=900;function hf(i){let e=new Float32Array(Ii*3),t=new Float32Array(Ii*3),n=new Float32Array(Ii),s=new Float32Array(Ii),r=[];for(let _=0;_<Ii;_++)r.push({life:0});let o=new ft;o.setAttribute("position",new Et(e,3)),o.setAttribute("color",new Et(t,3)),o.setAttribute("aSize",new Et(n,1)),o.setAttribute("aAlpha",new Et(s,1));let a=new Lt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:`attribute float aSize, aAlpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
      void main(){ vC = color; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / -mv.z; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float r = length(d); if (r > 0.5) discard; float a = smoothstep(0.5, 0.15, r) * vA; gl_FragColor = vec4(vC, a); }"}),c=new qa(o,a);c.frustumCulled=!1,c.renderOrder=5,i.add(c);let l=0,h=new fe,u=_=>{for(let B=0;B<Ii&&(l=(l+1)%Ii,!(r[l].life<=0));B++);let w=r[l];w.x=_.x,w.y=_.y,w.z=_.z,w.vx=_.vx??0,w.vy=_.vy??0,w.vz=_.vz??0,w.g=_.g??0,w.drag=_.drag??0,w.life=w.max=_.life??1,w.size=_.size??.05,w.grow=_.grow??0,h.set(_.color??16777215),w.r=h.r,w.gc=h.g,w.b=h.b,w.a=_.alpha??1,w.floor=_.floor??-1,w.sway=_.sway??0,w.tw=_.twinkle??0,w.seed=Math.random()*10},d={emit:u},f=(_,w)=>_+Math.random()*(w-_);d.water=(_,w,B=5)=>{for(let V=0;V<B;V++){let Y=.42+Math.random()*.1,T=w.x+f(-.2,.2),S=w.z+f(-.2,.2),b=w.y+f(0,.15);u({x:_.x,y:_.y,z:_.z,vx:(T-_.x)/Y,vz:(S-_.z)/Y,vy:(b-_.y)/Y+4.9*Y,g:-9.8,life:Y+.05,size:f(.025,.045),color:Math.random()<.5?12576511:15267583,alpha:.85})}},d.splash=(_,w=6)=>{for(let B=0;B<w;B++)u({x:_.x+f(-.12,.12),y:_.y+.05,z:_.z+f(-.12,.12),vx:f(-.5,.5),vy:f(.6,1.4),vz:f(-.5,.5),g:-5,life:.4,size:.03,color:14217471,alpha:.7})},d.sparkle=(_,w=14,B=16770688,V=.3)=>{for(let Y=0;Y<w;Y++)u({x:_.x+f(-V,V),y:_.y+f(0,V*1.5),z:_.z+f(-V,V),vx:f(-.3,.3),vy:f(.3,1),vz:f(-.3,.3),drag:1.5,life:f(.6,1.2),size:f(.04,.09),color:B,twinkle:12})},d.dust=(_,w=10)=>{for(let B=0;B<w;B++)u({x:_.x+f(-.1,.1),y:_.y+.03,z:_.z+f(-.1,.1),vx:f(-.6,.6),vy:f(.2,.7),vz:f(-.6,.6),drag:3,life:f(.4,.8),size:f(.07,.14),grow:.2,color:9071184,alpha:.5})},d.hearts=(_,w=5)=>{for(let B=0;B<w;B++)u({x:_.x+f(-.2,.2),y:_.y,z:_.z+f(-.2,.2),vx:f(-.15,.15),vy:f(.5,.9),vz:f(-.15,.15),drag:.8,life:f(.9,1.5),size:f(.07,.11),color:B%2?16751288:16762584,sway:1})},d.burst=(_,w,B=40,V=1.2)=>{for(let Y=0;Y<B;Y++){let T=Math.random()*we,S=f(.5,2.2);u({x:_.x,y:_.y+f(.2,1),z:_.z,vx:Math.cos(T)*S*V,vy:f(1.2,3.2),vz:Math.sin(T)*S*V,g:-3.2,drag:1.2,life:f(1.2,2.4),size:f(.06,.12),color:w[Y%w.length],sway:1.5})}},d.petalFall=(_,w,B)=>u({x:_.x+f(-B,B),y:_.y+f(-.3,.5),z:_.z+f(-B,B),vx:f(-.1,.25),vy:-f(.25,.5),vz:f(-.1,.1),life:f(4,7),size:f(.05,.08),color:w,sway:2,floor:.03,alpha:.95}),d.smoke=_=>u({x:_.x+f(-.08,.08),y:_.y,z:_.z+f(-.08,.08),vx:.18+f(-.05,.05),vy:f(.35,.55),vz:f(-.05,.05),life:f(5,8),size:.3,grow:.22,color:15262942,alpha:.22,drag:.1});let g=[],x=new Cn({vertexColors:!0,side:wt}),m=(_,w)=>{let B=new Xt;return B.petal(_e(Ft(-1.15),Ie(0)),{L:.085,W:.075,a:1.5,b:.45,nu:3,nv:2,cols:[I(2760728),_,w]}),B.petal(_e(Ft(-2.05),Ie(0)),{L:.06,W:.06,a:1.4,b:.45,nu:3,nv:2,cols:[I(2760728),_,w]}),B.build()},p=[[16228894,16503386],[6990064,12574975],[16249048,16777215],[15755930,16564440],[16242762,16773792],[11832048,14733567]];for(let _=0;_<9;_++){let w=new Ut,[B,V]=p[_%p.length],Y=m(I(B),I(V)),T=new ke(Y,x),S=new ke(Y,x);S.scale.x=-1,w.add(T,S);let b=new ke(new di(.006,.05,2,5),new Cn({color:2760728}));b.rotation.x=Math.PI/2,w.add(b),w.visible=!1,i.add(w),g.push({g:w,wr:T,wl:S,pos:new O(Math.random()*6-3,1,Math.random()*6),target:new O(0,1,0),t:Math.random()*10,rest:0,seed:Math.random()*100,speed:f(.8,1.4)})}d.butterflyTargets=[],d.butterflyCount=0;let y=[];for(let _=0;_<46;_++)y.push({x:f(-12,12),z:f(-8,14),y:f(.3,1.8),s:Math.random()*100});let v=500,M=new Float32Array(v*6),C=new ft;C.setAttribute("position",new Et(M,3));let R=new Xa(C,new gr({color:13624564,transparent:!0,opacity:0}));R.frustumCulled=!1,i.add(R);let P=[];for(let _=0;_<v;_++)P.push({x:f(-16,16),y:f(0,14),z:f(-12,18),v:f(11,15)});d.rain=0;let z=0;return d.update=(_,w,B,V,Y)=>{a.uniforms.uScale.value=innerHeight*1.9*(V.fov?1/Math.tan(V.fov*Math.PI/360)/3.4:1);for(let b=0;b<Ii;b++){let E=r[b];if(E.life<=0){s[b]=0,n[b]=0;continue}E.life-=_;let A=1-E.life/E.max;E.vy+=E.g*_;let F=Math.exp(-E.drag*_);E.vx*=F,E.vy*=E.g?1:F,E.vz*=F,E.x+=(E.vx+(E.sway?Math.sin(w*2.2+E.seed)*.25*E.sway:0))*_,E.y+=E.vy*_,E.z+=(E.vz+(E.sway?Math.cos(w*1.7+E.seed)*.2*E.sway:0))*_,E.floor>=0&&E.y<E.floor&&(E.y=E.floor,E.vy=0,E.vx=0,E.vz=0,E.sway=0),e[b*3]=E.x,e[b*3+1]=E.y,e[b*3+2]=E.z,t[b*3]=E.r,t[b*3+1]=E.gc,t[b*3+2]=E.b,n[b]=E.size+E.grow*A*E.max,s[b]=E.a*Math.min(1,A*8)*Math.min(1,(1-A)*3)*(E.tw?.6+.4*Math.sin(w*E.tw+E.seed*7):1)}let T=B.night;if(T>.3)for(let b of y)Math.random()<_*.55&&u({x:b.x+Math.sin(w*.3+b.s)*1.5,y:b.y+Math.sin(w*.5+b.s*2)*.3,z:b.z+Math.cos(w*.27+b.s)*1.5,vx:f(-.1,.1),vy:f(-.03,.08),vz:f(-.1,.1),life:f(1.2,2.4),size:.07,color:15269754,alpha:T,sway:.4});o.attributes.position.needsUpdate=!0,o.attributes.color.needsUpdate=!0,o.attributes.aSize.needsUpdate=!0,o.attributes.aAlpha.needsUpdate=!0,z-=_,z<0&&Y&&(z=.45,d.smoke(Y));let S=T>.5||d.rain>.3?0:d.butterflyCount;if(g.forEach((b,E)=>{let A=E<S;if(!A&&!b.g.visible)return;if(A&&!b.g.visible&&(b.g.visible=!0,b.pos.set(f(-13,13),2.5,15),b.rest=0),b.t+=_,!A)b.target.set(b.pos.x*1.2+4,5,22);else if(b.rest>0&&(b.rest-=_,b.rest<=0)){let j=d.butterflyTargets;if(j.length){let W=j[Math.floor(Math.random()*j.length)];b.target.set(W.x+f(-.1,.1),W.y,W.z+f(-.1,.1))}else b.target.set(f(-4,4),.8,f(-3,3))}let F=b.target.clone().sub(b.pos),$=F.length();if(b.rest<=0)if($<.08)b.rest=A?f(1.5,4):0,A||(b.g.visible=!1);else{F.normalize();let j=Math.min(1,$);b.pos.addScaledVector(F,b.speed*_*Math.min(1,$*2+.3)),b.pos.x+=Math.sin(b.t*3.1+b.seed)*.5*_*j,b.pos.y+=Math.sin(b.t*5.3+b.seed)*.6*_*j,b.pos.z+=Math.cos(b.t*2.7+b.seed)*.5*_*j,b.g.rotation.y=Math.atan2(F.x,F.z)}b.g.position.copy(b.pos);let q=b.rest>0?.25+Math.sin(b.t*2.5)*.25:Math.sin(b.t*26)*.9+.1;b.wr.rotation.z=q,b.wl.rotation.z=-q}),R.material.opacity=d.rain*.4,R.visible=d.rain>.01,R.visible){for(let b=0;b<v;b++){let E=P[b];E.y-=E.v*_,E.y<0&&(E.y=14,E.x=V.position.x*.3+f(-16,16),E.z=f(-12,18)),M[b*6]=E.x,M[b*6+1]=E.y,M[b*6+2]=E.z,M[b*6+3]=E.x+.03,M[b*6+4]=E.y+.38,M[b*6+5]=E.z}C.attributes.position.needsUpdate=!0}},d}function uf(){let i=l=>{let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d");u.shadowColor="rgba(40,60,40,0.35)",u.shadowBlur=8,u.shadowOffsetY=3,u.fillStyle="#ffffff",u.beginPath(),u.arc(64,60,46,0,we),u.fill(),u.beginPath(),u.moveTo(52,100),u.lineTo(64,122),u.lineTo(76,100),u.fill(),u.shadowColor="transparent",l(u);let d=new Ln(h);return d.colorSpace=pt,d},e=i(l=>{let h=l.createLinearGradient(0,28,0,92);h.addColorStop(0,"#8fd3ff"),h.addColorStop(1,"#2f8fe0"),l.fillStyle=h,l.beginPath(),l.moveTo(64,24),l.bezierCurveTo(64,24,38,58,38,70),l.arc(64,70,26,Math.PI,0,!0),l.bezierCurveTo(90,58,64,24,64,24),l.fill(),l.fillStyle="rgba(255,255,255,0.75)",l.beginPath(),l.ellipse(54,66,5,9,.4,0,we),l.fill()}),t=i(l=>{l.fillStyle="#f7b92a",l.beginPath(),l.arc(64,60,30,0,we),l.fill(),l.fillStyle="#ffd95a",l.beginPath(),l.arc(64,60,24,0,we),l.fill(),l.fillStyle="#f29a1a";for(let h=0;h<5;h++){let u=h/5*we-Math.PI/2;l.beginPath(),l.ellipse(64+Math.cos(u)*11,60+Math.sin(u)*11,8,8,0,0,we),l.fill()}l.fillStyle="#fff2b0",l.beginPath(),l.arc(64,60,6,0,we),l.fill()}),n=(()=>{let l=document.createElement("canvas");l.width=l.height=96;let h=l.getContext("2d");h.fillStyle="rgba(255,255,255,0.92)",h.beginPath(),h.arc(48,48,36,0,we),h.fill(),h.strokeStyle="#6aa85a",h.lineWidth=9,h.lineCap="round",h.beginPath(),h.moveTo(48,30),h.lineTo(48,66),h.moveTo(30,48),h.lineTo(66,48),h.stroke();let u=new Ln(l);return u.colorSpace=pt,u})(),s=i(l=>{l.strokeStyle="#5a8f3a",l.lineWidth=7,l.lineCap="round",l.beginPath(),l.moveTo(64,88),l.lineTo(64,56),l.stroke(),l.fillStyle="#7fb24a";for(let[h,u]of[[-.9,30],[.9,30],[-.25,36],[.3,34]])l.save(),l.translate(64,70),l.rotate(h),l.beginPath(),l.ellipse(0,-u*.6,7,u*.55,0,0,we),l.fill(),l.restore();l.fillStyle="#f7d23a",l.beginPath(),l.arc(64,34,9,0,we),l.fill()}),r=i(l=>{l.strokeStyle="#8a97a0",l.lineWidth=8,l.lineCap="round",l.beginPath(),l.moveTo(42,30),l.lineTo(76,70),l.moveTo(86,30),l.lineTo(52,70),l.stroke(),l.strokeStyle="#e2685f",l.lineWidth=7,l.beginPath(),l.arc(46,82,10,0,we),l.stroke(),l.beginPath(),l.arc(82,82,10,0,we),l.stroke(),l.fillStyle="#5d6b72",l.beginPath(),l.arc(64,56,4,0,we),l.fill()}),o=i(l=>{l.strokeStyle="#9a6a3a",l.lineWidth=6,l.beginPath(),l.arc(64,62,24,Math.PI,0),l.stroke(),l.fillStyle="#c08a4e",l.beginPath(),l.moveTo(36,60),l.lineTo(92,60),l.lineTo(84,90),l.lineTo(44,90),l.closePath(),l.fill(),l.strokeStyle="#9a6a3a",l.lineWidth=3;for(let h of[70,80])l.beginPath(),l.moveTo(40,h),l.lineTo(88,h),l.stroke();for(let[h,u,d]of[[50,52,"#f07aa4"],[64,46,"#f7c84a"],[78,52,"#b48af0"]])l.fillStyle=d,l.beginPath(),l.arc(h,u,9,0,we),l.fill(),l.fillStyle="#fff6c8",l.beginPath(),l.arc(h,u,3.5,0,we),l.fill()}),a=i(l=>{l.fillStyle="#e2685f",l.fillRect(36,52,56,38),l.fillStyle="#ee7f76",l.fillRect(32,40,64,14),l.fillStyle="#f7c84a",l.fillRect(58,40,12,50),l.strokeStyle="#f7c84a",l.lineWidth=6,l.beginPath(),l.ellipse(52,32,11,8,-.5,0,we),l.stroke(),l.beginPath(),l.ellipse(76,32,11,8,.5,0,we),l.stroke()}),c=i(l=>{l.fillStyle="#8a5a34",l.beginPath(),l.ellipse(64,64,15,22,.5,0,we),l.fill(),l.fillStyle="#b07a4a",l.beginPath(),l.ellipse(59,58,5,10,.5,0,we),l.fill(),l.fillStyle="#f7c84a";for(let[h,u,d]of[[36,40,7],[92,46,6],[88,84,8],[40,86,5]]){l.beginPath();for(let f=0;f<8;f++){let g=f/8*we,x=f%2?d*.4:d;l.lineTo(h+Math.cos(g)*x,u+Math.sin(g)*x)}l.fill()}});return{water:e,gift:t,plus:n,weed:s,prune:r,order:o,daily:a,seed:c}}var bv=["water","plant","pop","bloom","coin","buy","click","levelup","expand","step","error"];function ff(i="audio/"){let e={ctx:null,ready:!1,musicVol:.6,sfxVol:.8,buffers:{},night:0,rain:0},t,n,s,r,o=null,a=[],c={},l=!1,h=null,u=async g=>{if(e.buffers[g])return e.buffers[g];try{let x,m=window.__AUDIO&&window.__AUDIO[g];if(m){let y=atob(m),v=new Uint8Array(y.length);for(let M=0;M<y.length;M++)v[M]=y.charCodeAt(M);x=v.buffer}else{let y=await fetch(i+g+".mp3");if(!y.ok)return null;x=await y.arrayBuffer()}let p=await e.ctx.decodeAudioData(x);return e.buffers[g]=p,p}catch{return null}};e.unlock=()=>{if(e.ctx){e.ctx.resume&&e.ctx.resume();return}let g=window.AudioContext||window.webkitAudioContext;if(g){e.ctx=new g,t=e.ctx.createGain(),t.connect(e.ctx.destination),n=e.ctx.createGain(),n.gain.value=e.musicVol,n.connect(t),s=e.ctx.createGain(),s.gain.value=e.sfxVol,s.connect(t),r=e.ctx.createGain(),r.gain.value=Math.min(1,e.sfxVol*1.1),r.connect(t);for(let x of bv)u("sfx_"+x);e.ready=!0,d(),f()}};let d=async()=>{for(let g of["day","night","rain"]){let x=await u("amb_"+g);if(!x)continue;let m=e.ctx.createBufferSource(),p=e.ctx.createGain();m.buffer=x,m.loop=!0,p.gain.value=0,m.connect(p),p.connect(r),m.start(),c[g]=p}},f=async()=>{if(!e.ready)return;let g=e.night>.6?["music4"]:["music1","music2","music3"];a.length||(a=g.slice().sort(()=>Math.random()-.5));let x=a.shift();g.includes(x)||(a=[],x=g[Math.floor(Math.random()*g.length)]),o&&o.name===x&&g.length>1&&(x=g[(g.indexOf(x)+1)%g.length]);let m=await u(x);if(!m){h=setTimeout(f,8e3);return}let p=e.ctx.currentTime,y=e.ctx.createBufferSource(),v=e.ctx.createGain();if(y.buffer=m,y.connect(v),v.connect(n),v.gain.setValueAtTime(0,p),v.gain.linearRampToValueAtTime(1,p+3),y.start(),o){let M=o;M.g.gain.cancelScheduledValues(p),M.g.gain.setValueAtTime(M.g.gain.value,p),M.g.gain.linearRampToValueAtTime(0,p+4),setTimeout(()=>{try{M.src.stop()}catch{}},4500)}o={src:y,g:v,name:x,night:e.night>.6},clearTimeout(h),h=setTimeout(f,Math.max(5,m.duration-4+2.5)*1e3)};return e.sfx=(g,x=1,m=1)=>{if(!e.ready)return;let p=e.buffers["sfx_"+g];if(!p)return;let y=e.ctx.createBufferSource(),v=e.ctx.createGain();y.buffer=p,y.playbackRate.value=m*(.96+Math.random()*.08),v.gain.value=x,y.connect(v),v.connect(s),y.start()},e.setVolumes=(g,x)=>{e.musicVol=g,e.sfxVol=x,e.ready&&(n.gain.value=g,s.gain.value=x,r.gain.value=Math.min(1,x*1.1))},e.update=(g,x)=>{if(e.night=g,e.rain=x,!e.ready)return;let m=e.ctx.currentTime,p=(y,v)=>y&&y.gain.setTargetAtTime(v,m,1.2);p(c.day,(1-g)*(1-x*.7)*.9),p(c.night,g*.9),p(c.rain,x*.9),o&&o.night!==g>.6&&Math.abs(g-.6)>.25&&(a=[],f())},e.pause=g=>{e.ctx&&(g?e.ctx.suspend():e.ctx.resume())},e}function df(i){let e=null,t=()=>{e=new Uint8Array(3780);for(let c=0;c<60;c++)for(let l=0;l<63;l++)e[c*63+l]=i(-12.4+l*.4,-8.8+c*.4)?1:0},n=(c,l)=>[Math.max(0,Math.min(62,Math.round((c- -12.4)/.4))),Math.max(0,Math.min(59,Math.round((l- -8.8)/.4)))],s=(c,l)=>c>=0&&l>=0&&c<63&&l<60&&!e[l*63+c],r=(c,l)=>{if(s(c,l))return[c,l];for(let h=1;h<14;h++){let u=null,d=1e9;for(let f=-h;f<=h;f++)for(let g=-h;g<=h;g++)if(Math.max(Math.abs(g),Math.abs(f))===h&&s(c+g,l+f)){let x=g*g+f*f;x<d&&(d=x,u=[c+g,l+f])}if(u)return u}return[c,l]},o=(c,l,h,u)=>{let d=Math.hypot(h-c,u-l),f=Math.ceil(d/.15);for(let g=0;g<=f;g++){let x=g/f;if(i(c+(h-c)*x,l+(u-l)*x))return!1}return!0},a={invalidate:()=>{e=null}};return a.path=(c,l,h,u)=>{e||t();let[d,f]=r(...n(c,l)),[g,x]=r(...n(h,u)),m=3780,p=new Float32Array(m).fill(1e9),y=new Int32Array(m).fill(-1),v=new Uint8Array(m),M=[],C=f*63+d,R=x*63+g;p[C]=0,M.push([0,C]);let P=Y=>{let T=Y%63,S=Y/63|0;return Math.hypot(T-g,S-x)},z=!1,_=0;for(;M.length&&_++<6e3;){let Y=0;for(let E=1;E<M.length;E++)M[E][0]<M[Y][0]&&(Y=E);let[,T]=M.splice(Y,1)[0];if(v[T])continue;if(v[T]=1,T===R){z=!0;break}let S=T%63,b=T/63|0;for(let E=-1;E<=1;E++)for(let A=-1;A<=1;A++){if(!A&&!E)continue;let F=S+A,$=b+E;if(!s(F,$)||A&&E&&(!s(S+A,b)||!s(S,b+E)))continue;let q=$*63+F,j=p[T]+(A&&E?1.414:1);j<p[q]&&(p[q]=j,y[q]=T,M.push([j+P(q),q]))}}let w=[];if(z){let Y=R;for(;Y!==-1;)w.push([-12.4+Y%63*.4,-8.8+(Y/63|0)*.4]),Y=y[Y];w.reverse()}else w.push([c,l]);w[0]=[c,l],i(h,u)||w.push([h,u]);let B=[w[0]],V=0;for(;V<w.length-1;){let Y=w.length-1;for(;Y>V+1&&!o(w[V][0],w[V][1],w[Y][0],w[Y][1]);)Y--;B.push(w[Y]),V=Y}return B.slice(1)},a}var It=O,Pt=I(16777215),Fr={type:"dome",r:.012,h:.007,cols:[I(14258191),I(16107048),I(16374869)]},yt={daisy:{sepals:{n:8,L:.012,W:.006},layers:[{n:17,L:.05,W:.013,a:.7,b:.4,tilt:1.42,tiltC:.2,curl:.2,cup:.5,cols:[I(15855325),Pt,Pt],nu:4,nv:2},{n:15,L:.045,W:.013,a:.7,b:.4,tilt:1.3,tiltC:.15,curl:.15,cup:.5,cols:[I(15657691),Pt,Pt],nu:4,nv:2}],center:{...Fr,r:.016,h:.009}},tulip:(i,e,t)=>({layers:[{n:3,L:.075,W:.058,a:1.05,b:.6,tilt:.42,tiltC:.3,curl:-.6,curlC:-.78,cup:.95,r:.006,cols:[i,e,t],closedScale:.7,vein:.2},{n:3,L:.072,W:.056,a:1.05,b:.6,tilt:.34,tiltC:.25,curl:-.58,curlC:-.75,cup:.95,r:.004,cols:[i,e,t],closedScale:.7,vein:.2}]}),sunflower:{sepals:{n:13,L:.05,W:.03,tilt:1.5},layers:[{n:21,L:.115,W:.034,a:.8,b:.6,tilt:1.45,tiltC:.4,curl:.25,cup:.6,r:.07,cols:[I(15243788),I(16302620),I(16767294)],nu:4,nv:2,tj:.1},{n:21,L:.1,W:.032,a:.8,b:.6,tilt:1.3,tiltC:.3,curl:.2,cup:.6,r:.066,cols:[I(15243788),I(16103701),I(16766266)],nu:4,nv:2,tj:.1}],center:{type:"dome",r:.078,h:.022,y:.004,cols:[I(8014356),I(3809800),I(7035422)],seg:16}},rose:(i,e,t)=>({sepals:{n:5,L:.03,W:.011},layers:[{n:24,golden:!0,L:[.024,.055],W:[.024,.062],a:1.35,b:.48,tilt:[.04,1.2],tiltC:[.02,.22],curl:[-.6,.85],curlC:[-.7,-.5],cup:[1.4,.45],cupC:1.2,r:[.001,.009],y:[.014,0],cols:[ot(i,.8),i,it(i,t,.5)],cols2:[ot(e,.9),e,t],closedScale:.6,vein:.06}]}),peony:(i,e)=>({sepals:{n:5,L:.03,W:.02},layers:[{n:38,golden:!0,L:[.026,.07],W:[.026,.07],a:1.4,b:.42,tilt:[.08,1.3],tiltC:[.02,.2],curl:[-.7,.25],curlC:-.8,cup:[1.3,.6],ruffle:.22,rf:3,r:[.001,.01],y:[.02,0],cols:[i,it(i,e,.4),e],cols2:[it(i,e,.5),e,it(e,Pt,.5)],closedScale:.55}]}),dahlia:(i,e)=>({sepals:{n:8,L:.02,W:.01},layers:[{n:58,golden:!0,L:[.018,.062],W:[.011,.024],a:.95,b:.85,tilt:[.06,1.55],tiltC:[.02,.3],curl:[-.5,.15],curlC:-.5,cup:[1.6,.9],r:[.001,.006],y:[.016,-.004],cols:[ot(i,.85),i,e],cols2:[i,it(i,e,.5),it(e,Pt,.3)],nu:4,nv:2,closedScale:.5}]}),marigold:(i,e)=>({sepals:{n:6,L:.018,W:.012},layers:[{n:34,golden:!0,L:[.012,.032],W:[.014,.032],a:1.5,b:.4,tilt:[.05,1.35],tiltC:[.02,.2],curl:[-.4,.3],cup:[1,.3],ruffle:.4,rf:3,r:[.001,.006],y:[.012,0],cols:[ot(i,.85),i,e],nu:4,nv:3,closedScale:.5}]}),zinnia:(i,e)=>({sepals:{n:8,L:.014,W:.01},layers:[{n:14,L:.042,W:.02,a:1,b:.5,tilt:1.45,tiltC:.2,curl:.15,cup:.4,cols:[ot(i,.85),i,e],nu:4,nv:2},{n:12,L:.032,W:.018,a:1,b:.5,tilt:1.25,tiltC:.15,curl:.1,cup:.4,y:.003,cols:[ot(i,.85),i,e],nu:4,nv:2},{n:9,L:.022,W:.014,a:1,b:.5,tilt:1,tiltC:.1,curl:.1,cup:.5,y:.006,cols:[i,i,e],nu:3,nv:2}],center:{...Fr,r:.009,h:.008,y:.008}}),cosmos:(i,e)=>({sepals:{n:8,L:.012,W:.005},layers:[{n:8,L:.048,W:.032,a:1.5,b:.5,tilt:1.35,tiltC:.2,curl:.1,cup:.35,notch:.12,ruffle:.08,rf:3,cols:[ot(i,.8),i,e],vein:.2}],center:{...Fr,r:.009,h:.006}}),poppy:{layers:[{n:4,L:.06,W:.078,a:1.5,b:.42,tilt:1,tiltC:.15,curl:-.35,curlC:-.7,cup:.7,ruffle:.28,rf:2.5,cols:[I(1838354),I(14428696),I(15747622)],closedScale:.5},{n:2,L:.055,W:.07,a:1.5,b:.42,tilt:.8,tiltC:.1,curl:-.4,curlC:-.7,cup:.8,ruffle:.28,rf:2.5,cols:[I(1838354),I(14166042),I(15615012)],closedScale:.5}],center:{type:"dome",r:.01,h:.012,y:.006,cols:[I(5661498),I(7306568),I(4015398)],seg:8,stamens:{n:16,len:.016,spread:.9,c:I(2759714),tip:I(1708566),tipR:.0028}}},pansy:(i,e,t)=>({layers:[{n:2,L:.036,W:.046,a:1.5,b:.4,tilt:1.3,tiltC:.3,cup:.15,azList:[-.55,.55],azStep:0,jit:0,cols:[ot(i,.7),i,e],vein:.25},{n:3,L:.036,W:.048,a:1.5,b:.4,tilt:1.42,tiltC:.3,cup:.15,azList:[-1.9,1.9,Math.PI],jit:0,cols:[t,it(t,i,.75),e],vein:.25}],center:{...Fr,r:.005,h:.004}}),lily:(i,e,t)=>({layers:[{n:3,L:.095,W:.036,a:.9,b:.7,tilt:.78,tiltC:.12,curl:1.4,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75},{n:3,L:.09,W:.03,a:.9,b:.7,tilt:.85,tiltC:.1,curl:1.5,curlC:-.2,curlPow:2,cup:.7,cols:[t,i,e],vein:.3,closedScale:.75}],center:{stamens:{n:6,len:.065,spread:.45,c:I(13623456),tip:I(11883802),tipR:.005}}}),hibiscus:(i,e,t)=>({sepals:{n:5,L:.025,W:.012},layers:[{n:5,L:.075,W:.08,a:1.4,b:.42,tilt:1.2,tiltC:.12,curl:.35,curlC:-.5,cup:.3,ruffle:.18,rf:3,twist:.3,cols:[t,i,e],vein:.22,closedScale:.6}],center:{type:"column",L:.075,cols:[i,I(13637688)],dots:I(16241226)}}),daffodil:{layers:[{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.42,tiltC:.3,curl:.1,cup:.35,cols:[I(15980878),I(16508530),I(16774054)]},{n:3,L:.042,W:.03,a:1.05,b:.6,tilt:1.5,tiltC:.3,curl:.1,cup:.35,cols:[I(15980878),I(16508530),I(16774054)]}],center:{type:"trumpet",L:.032,r0:.01,r1:.019,cols:[I(15905308),I(16091666)],ruffle:.12,rf:7}},azalea:(i,e)=>({layers:[{n:5,L:.03,W:.026,a:1.3,b:.5,tilt:1.05,tiltC:.15,curl:.3,cup:.4,ruffle:.15,cols:[ot(i,.75),i,e],nu:3,nv:2}],center:{stamens:{n:5,len:.028,spread:.3,c:e,tip:I(8006218),tipR:.0025}}}),camellia:(i,e)=>({sepals:{n:5,L:.02,W:.014},layers:[{n:26,golden:!0,L:[.018,.048],W:[.02,.05],a:1.4,b:.45,tilt:[.08,1.35],tiltC:[.02,.2],curl:[-.5,.2],cup:[1.2,.35],r:[.001,.007],y:[.012,0],cols:[ot(i,.9),i,e],nu:4,nv:3,closedScale:.55}],center:{...Fr,r:.005,h:.006,y:.012}}),waterlily:(i,e)=>({layers:[{n:26,golden:!0,L:[.03,.075],W:[.012,.03],a:.9,b:.75,tilt:[.25,1.3],tiltC:[.05,.3],curl:[-.3,-.2],cup:[1.2,.8],r:[.006,.012],y:[.01,0],cols:[it(i,Pt,.3),i,e],cols2:[Pt,it(i,Pt,.6),it(e,Pt,.5)],nu:4,nv:2,closedScale:.6}],center:{type:"dome",r:.012,h:.008,y:.008,cols:[I(15247384),I(16240442),I(16374869)],stamens:{n:14,len:.02,spread:.6,c:I(15909424),tip:I(16242778),tipR:.003}}}),lotus:(i,e)=>({layers:[{n:18,golden:!0,L:[.06,.11],W:[.04,.065],a:1,b:.62,tilt:[.2,1.15],tiltC:[.04,.2],curl:[-.5,-.25],curlC:-.7,cup:[1.3,.9],r:[.012,.02],y:[.012,0],cols:[I(16774894),i,e],cols2:[Pt,it(i,Pt,.4),e],closedScale:.7,vein:.2}],center:{type:"dome",r:.022,h:.016,y:.012,cols:[I(12108874),I(14275146),I(15326818)],stamens:{n:22,len:.028,spread:.85,c:I(15909424),tip:I(16244858),tipR:.003}}}),orchid:(i,e,t)=>({layers:[{n:3,L:.036,W:.02,a:.9,b:.6,tilt:1.4,tiltC:.3,cup:.2,jit:0,azList:[0,2.35,-2.35],azStep:0,cols:[it(i,t,.2),i,e],nu:3,nv:2},{n:2,L:.04,W:.046,a:1.3,b:.42,tilt:1.45,tiltC:.3,cup:.15,jit:0,azList:[-1.2,1.2],azStep:0,cols:[it(i,t,.25),i,e],nu:4,nv:3},{n:1,L:.022,W:.022,a:1.2,b:.5,tilt:1,tiltC:.3,cup:1.2,curl:-.6,jit:0,azList:[Math.PI],cols:[I(16241226),t,ot(t,.85)],nu:3,nv:2}],center:{type:"dome",r:.004,h:.005,y:.004,cols:[I(16247200),Pt],seg:5}}),succulent:(i,e,t)=>({layers:[{n:34,golden:!0,L:[.014,.06],W:[.012,.036],a:1.25,b:.7,tilt:[.12,1.28],tiltC:[.12,1.28],curl:[-.5,-.2],curlC:[-.5,-.2],cup:[1,.7],r:[.001,.008],y:[.02,0],cols:[ot(i,.8),i,it(e,t,.6)],cols2:[ot(i,.75),e,t],nu:4,nv:3,closedScale:1,vein:.05}]}),cactusFlower:(i,e)=>({layers:[{n:12,L:.04,W:.016,a:1,b:.7,tilt:1.15,tiltC:.1,curl:.3,cup:.6,cols:[it(i,Pt,.3),i,e],nu:3,nv:2},{n:10,L:.034,W:.015,a:1,b:.7,tilt:.8,tiltC:.1,curl:.2,cup:.6,cols:[it(i,Pt,.4),i,e],nu:3,nv:2}],center:{stamens:{n:12,len:.018,spread:.5,c:I(16244858),tip:I(16107048),tipR:.003}}}),small5:(i,e,t)=>({layers:[{n:5,L:.02,W:.016,a:1.3,b:.5,tilt:1.3,tiltC:.2,cup:.3,cols:[t??ot(i,.8),i,e],nu:3,nv:2}],center:{type:"dome",r:.003,h:.003,cols:[I(16107048),I(16374869)],seg:5}})},Mv=(i,e,t)=>(n,s,r,o)=>{let a=ze(.35,1,o),c=1+r.range(-.1,.1),l=[[.004,0],[.006,.02],[.012*a,.034],[.03*a,.043],[.041*a,.045]].map(([u,d])=>[u*c,d*c]),h=new fe;n.lathe(s,l,null,null,15,(u,d)=>{u<.5?d.copy(t).lerp(i,u*2):d.copy(i).lerp(e,u*2-1)},.1,5)};var gy={L:.055,W:.034,c:I(3107382),n:3,tilt:1,a:.85,b:.7,fold:.3},Or=[],nt=i=>Or.push(i);nt({id:"margarida",name:"Margarida",lvl:1,price:8,grow:50,gift:6,spots:["bed","pot","window"],h:.4,info:"Simples e alegre, cresce rapidinho.",build:(i,e,t,n)=>gi(i,e,{stems:[6,8],H:.34,lean:.22,spread:.09,stemR:.003,basal:{n:12,L:.13,W:.04,a:1.3,b:.7,tilt:1},leaf:{n:2,L:.05,W:.014,tilt:.7},head:yt.daisy},t,n)});nt({id:"tagetes",name:"Cravo-de-defunto",lvl:1,price:10,grow:60,gift:7,spots:["bed","pot","window"],h:.32,info:"Pompons alaranjados que espantam pragas.",build:(i,e,t,n)=>Nn(i,e,{R:.15,H:.24,branches:9,heads:8,stalk:.12,leaf:{n:8,L:.05,W:.012,c:I(4160826),tilt:1.1},head:s=>s()<.5?yt.marigold(I(15895052),I(16299578)):yt.marigold(I(16101914),I(16569162)),headK:1.25},t,n)});var Sv=[["tulipa_vermelha","Tulipa vermelha",1,12,[15779386,13901864,15222842]],["tulipa_amarela","Tulipa amarela",2,14,[14278762,16240414,16507994]],["tulipa_rosa","Tulipa rosa",3,16,[16445664,15764144,16233676]],["tulipa_roxa","Tulipa roxa",5,22,[15325424,8011688,10117064]]];for(let[i,e,t,n,s]of Sv)nt({id:i,name:e,lvl:t,price:n,grow:70,gift:Math.round(n*.7),spots:["bed","pot","window"],h:.45,info:"Elegante, de p\xE9talas em ta\xE7a.",build:(r,o,a,c)=>gi(r,o,{stems:[5,6],H:.4,lean:.12,spread:.1,stemR:.0045,stemC:I(8038496),basal:{n:9,L:.26,W:.055,a:.75,b:.6,tilt:.3,curl:.55,fold:.5,c:I(6265450),r:.02},head:yt.tulip(I(s[0]),I(s[1]),I(s[2]))},a,c)});nt({id:"amor_perfeito",name:"Amor-perfeito",lvl:2,price:12,grow:65,gift:8,spots:["bed","pot","window","hang"],h:.2,info:"Carinhas coloridas que adoram sombra fresca.",build:(i,e,t,n)=>{let s=[[6959008,11565782,2756410],[16238622,16507754,4856336],[16052479,13219056,4923258],[15229980,16229434,3805704]];Nn(i,e,{R:.14,H:.13,branches:9,heads:9,stalk:.25,headUp:.25,leaf:{n:7,L:.045,W:.03,c:I(4164159),a:.9,b:.6,tilt:1.1},head:r=>{let o=r.pick(s);return yt.pansy(I(o[0]),I(o[1]),I(o[2]))},headK:1.15},t,n)}});nt({id:"lavanda",name:"Lavanda",lvl:2,price:15,grow:80,gift:10,spots:["bed","pot"],h:.55,info:"Perfumada, atrai abelhas e borboletas.",build:(i,e,t,n)=>{Gs(i,e,{n:Math.round(40*t),L:.16*t,W:.012,c:I(9086348),tip:I(12110256),tilt:.55,curl:.3,fold:.2,a:.8,b:.9}),Ws(i,e,{stems:[16,20],H:.5,lean:.4,stemC:I(9416322),stemR:.0025,florets:22,from:.68,type:"card",fs:.011,off:.004,whorl:1.3,taper:.4,cols:[I(7755970),I(10322662)],bud:I(9410232)},t,n)}});nt({id:"petunia",name:"Pet\xFAnia",lvl:2,price:14,grow:70,gift:9,spots:["hang","window","pot"],h:.25,info:"Cai em cascata, perfeita para vasos suspensos.",build:(i,e,t,n)=>{let s=e.pick([[8007600,11034582,2755146],[15220874,16222904,9048136],[16052479,16777215,14272586]]);go(i,e,{stems:13,L:.36,up:.45,out:.75,drop:1,leaf:{n:9,L:.04,W:.022,c:I(4887616),a:.9,b:.65},flower:{per:3,make:Mv(I(s[0]),I(s[1]),I(s[2]))}},t,n)}});nt({id:"suculenta",name:"Suculenta",lvl:2,price:16,grow:90,gift:11,spots:["pot","window"],h:.14,thirst:.4,info:"Roseta carnuda que quase n\xE3o pede \xE1gua.",build:(i,e,t,n)=>{let s=yt.succulent(I(7316876),I(10275508),I(15241380));Sn(i,ye(0,.01,0),e,s,1,1.6*t);for(let r=0;r<3;r++){let o=r*2.2+e();Sn(i,_e(ye(Math.cos(o)*.1*t,.005,Math.sin(o)*.1*t),Ie(.25),Ve(o)),e,s,1,.6*t)}if(n>.2)for(let r=0;r<2;r++){let o=ji(e,.2,.09,r*3+e(),.05,6);i.tube(null,o,.003,.002,I(14191242),I(15245450),4);for(let a=0;a<6;a++){let{p:c,d:l}=Ht(o,.6+a*.08),h=.016*ze(.5,1,n);i.lathe(_e(Zt(c,l),Ve(a*2.4),Ie(1.9)),[[h*.2,0],[h*.4,h*.5],[h*.5,h]],I(15764058),I(16238666),5)}}}});nt({id:"geranio",name:"Ger\xE2nio",lvl:3,price:18,grow:85,gift:12,spots:["window","pot","hang","bed"],h:.34,info:"Cl\xE1ssico das janelas, floresce o ano todo.",build:(i,e,t,n)=>{let s=e.pick([[14688815,15747658],[15755930,16228544],[15921906,16777215]]).map(I);Nn(i,e,{R:.17,H:.2,branches:10,heads:5,stalk:.45,headUp:.7,leaf:{n:5,L:.06,W:.07,c:I(4033082),a:1,b:.32,fold:.15,curl:.3,tilt:1.15},head:{ball:{n:16,r:.04,fs:.022,np:5,cols:s,squash:.7,cover:.2}}},t,n)}});nt({id:"samambaia",name:"Samambaia",lvl:3,price:20,grow:95,gift:13,spots:["hang","pot"],h:.4,foliage:!0,info:"Folhagem farta que balan\xE7a com a brisa.",build:(i,e,t)=>go(i,e,{stems:18,L:.5,up:.55,out:.85,drop:1.1,upFall:.5,stemC:I(5933626),stemR:.0025,frond:{pairs:15,L:.07,wr:.3,c:I(5020220)}},t,-1)});nt({id:"cosmos",name:"Cosmos",lvl:3,price:18,grow:75,gift:12,spots:["bed","pot"],h:.65,info:"Leve como o vento, em tons de rosa.",build:(i,e,t,n)=>gi(i,e,{stems:[7,9],H:.6,lean:.3,spread:.08,stemR:.0025,wob:.09,leaf:{n:8,L:.07,W:.005,tilt:.9,c:I(5937736),fold:0},head:s=>s()<.6?yt.cosmos(I(14833820),I(16228556)):yt.cosmos(I(16046312),I(16777215)),headTilt:.35},t,n)});nt({id:"girassol",name:"Girassol",lvl:3,price:22,grow:110,gift:16,spots:["bed"],h:1.6,fixedRot:!0,info:"Alto e radiante, sempre olhando o sol.",build:(i,e,t,n)=>gi(i,e,{stems:[2,3],H:1.5,lean:.06,spread:.2,stemR:.016,stemC:I(6986304),faceZ:!0,wob:.03,leaf:{n:9,L:.24,W:.19,a:.7,b:.75,tilt:1.15,curl:.7,c:I(4885046),fold:.25,nu:5,nv:4,t0:.12,t1:.9},head:yt.sunflower,headTilt:1.15},t,n)});nt({id:"narciso",name:"Narciso",lvl:4,price:22,grow:80,gift:14,spots:["bed","pot","window"],h:.4,info:"Trombetinhas douradas que anunciam a primavera.",build:(i,e,t,n)=>gi(i,e,{stems:[5,7],H:.36,lean:.14,spread:.08,stemR:.004,basal:{n:12,L:.3,W:.022,a:.7,b:.5,tilt:.25,curl:.5,fold:.3,c:I(5937754)},head:yt.daffodil,headTilt:1.2},t,n)});nt({id:"manjericao",name:"Manjeric\xE3o",lvl:4,price:15,grow:60,gift:10,spots:["pot","window","bed"],h:.3,info:"Cheiroso e vi\xE7oso, bom de ter perto da cozinha.",build:(i,e,t,n)=>{Nn(i,e,{R:.15,H:.24,branches:10,heads:0,leaf:{n:9,L:.055,W:.04,c:I(5744700),a:.85,b:.6,fold:-.25,cup:.5,curl:.5,tilt:1}},t,-1),n>.2&&Ws(i,e,{stems:[6,7],H:.34,lean:.35,florets:10,from:.75,type:"card",fs:.009,cols:[Pt,I(15788287)],stemC:I(6986314)},t,n)}});nt({id:"cacto",name:"Cacto florido",lvl:4,price:24,grow:120,gift:17,spots:["pot","window"],h:.3,thirst:.35,info:"Espinhudo por fora, uma flor delicada no topo.",build:(i,e,t,n)=>{let s=(r,o,a,c)=>{let l=[];for(let h=0;h<=8;h++){let u=h/8;l.push([o*Math.pow(Math.sin(Math.PI*(.08+u*.92)*.5+(u>.6?(u-.6)*1.5:0)),.7)*(u>.85?(1-u)/.15*.6+.4:1)*(.75+.25*Math.sin(u*3.1)),a*u])}l.push([.001,a*1.005]),i.lathe(r,l,I(3832388),I(6267738),40,null,.09,10);for(let h=0;h<10;h++)for(let u=1;u<6;u++){let d=u/6.2,f=(h+.25)/10*we,g=l[Math.round(d*8)];i.blob(_e(r,ye(Math.cos(f)*g[0]*1.07,g[1],Math.sin(f)*g[0]*1.07)),.006,.006,I(16051922),I(16776168),4,3)}c&&n>.02&&Sn(i,_e(r,ye(0,a*.98,0)),e,yt.cactusFlower(I(15755944),I(16230092)),n,1.5)};s(ye(0,0,0),.085*t,.2*t,!0),t>.5&&(s(_e(ye(.085*t,.03,.02),Ft(-.5)),.04*t,.09*t,n>.8),s(_e(ye(-.07*t,.02,-.04),Ft(.6)),.032*t,.07*t,!1))}});nt({id:"hera",name:"Hera",lvl:4,price:18,grow:85,gift:12,spots:["hang","window","pot"],h:.3,foliage:!0,info:"Verde pendente que veste qualquer cantinho.",build:(i,e,t)=>go(i,e,{stems:12,L:.62,up:.3,out:.6,drop:1.6,upFall:.3,stemC:I(6978106),leaf:{n:15,L:.05,W:.05,c:I(3836488),tip:I(14477472),tipMix:.45,a:.7,b:.5,fold:.15,curl:.2}},t,-1)});nt({id:"papoula",name:"Papoula",lvl:5,price:24,grow:85,gift:16,spots:["bed","pot"],h:.5,info:"P\xE9talas de seda vermelha, delicadas ao vento.",build:(i,e,t,n)=>gi(i,e,{stems:[6,8],H:.46,lean:.28,spread:.08,stemR:.0028,stemC:I(8034922),wob:.1,basal:{n:12,L:.16,W:.045,a:.8,b:.9,tilt:.8,c:I(6986360),ruffle:.3,rf:4,nv:4},head:yt.poppy,headTilt:.3,headK:1.1},t,n)});nt({id:"zinia",name:"Z\xEDnia",lvl:5,price:22,grow:80,gift:15,spots:["bed","pot","window"],h:.45,info:"Colorida e resistente, a favorita das borboletas.",build:(i,e,t,n)=>{let s=[[14690922,16018074],[15888410,16228922],[16238622,16507754],[14166090,15749226]];gi(i,e,{stems:[6,8],H:.42,lean:.25,spread:.08,stemR:.0035,leaf:{n:5,L:.08,W:.035,tilt:1,c:I(4885052),azStep:Math.PI/2},head:r=>{let o=r.pick(s);return yt.zinnia(I(o[0]),I(o[1]))},headK:1.15},t,n)}});var wv=[["rosa_vermelha","Rosa vermelha",5,30,10096418,13113390,14694984],["rosa_rosa","Rosa cor-de-rosa",6,32,15231638,16095928,16568542],["rosa_branca","Rosa branca",7,34,15918792,16446694,16777215],["rosa_amarela","Rosa amarela",8,36,15774234,16306762,16641696],["rosa_pessego","Rosa p\xEAssego",10,42,15764058,16299146,16638152]];for(let[i,e,t,n,s,r,o]of wv)nt({id:i,name:e,lvl:t,price:n,grow:130,gift:Math.round(n*.72),spots:["bed","pot"],h:.75,info:"A rainha do jardim, de perfume inesquec\xEDvel.",build:(a,c,l,h)=>Nn(a,c,{R:.3,H:.55,branches:12,heads:9,stalk:.1,splay:.85,wood:I(4872756),stemR:.007,fill:46,leaf:{n:13,L:.075,W:.046,c:I(2909748),a:.85,b:.7,fold:.3,tilt:1.1},head:yt.rose(I(s),I(r),I(o)),headK:1.25,headUp:.5},l,h)});nt({id:"lirio",name:"L\xEDrio",lvl:6,price:34,grow:120,gift:24,spots:["bed","pot"],h:.8,info:"Trombetas recurvadas com perfume doce.",build:(i,e,t,n)=>{let s=e.pick([[16777215,16775408,14282928],[16027569,16573676,16249024],[16225310,16498778,16244874]]);gi(i,e,{stems:[3,4],H:.72,lean:.14,spread:.07,stemR:.006,leaf:{n:22,L:.11,W:.018,tilt:.95,c:I(4164164),t0:.08,t1:.82,taper:.5},head:yt.lily(I(s[0]),I(s[1]),I(s[2])),headsPer:3,pedicel:.07,headTilt:1.05,headK:1.05},t,n)}});nt({id:"costela",name:"Costela-de-ad\xE3o",lvl:6,price:38,grow:140,gift:26,spots:["pot"],h:.75,foliage:!0,info:"Folhas enormes e recortadas, puro charme tropical.",build:(i,e,t)=>{let n=Math.round(4+5*t);for(let s=0;s<n;s++){let r=s*2.4+e.range(-.2,.2),o=.5*t*e.range(.65,1.1),a=e.range(.3,.75),c=fn(new It(0,0,0),new It(Math.cos(r)*o*a*.3,o*.8,Math.sin(r)*o*a*.3),new It(Math.cos(r)*o*a,o*(1-a*.3),Math.sin(r)*o*a),6);i.tube(null,c,.007,.004,I(4160058),I(5016132),5);let l=c[6],h=.3*t*e.range(.7,1.1),u=I(2779704),d=_e(ye(l.x,l.y,l.z),Ve(-r+Math.PI/2),Ie(1+e.range(-.2,.3)));mn(i,d,e,{L:h,W:h*.2,c:u,a:.8,b:.6,fold:.3,curl:.5,nu:5});for(let f=0;f<6;f++){let g=.08+f*.14,x=h*.52*Math.sin(Math.PI*Math.pow(g+.12,.8))+h*.1;for(let m of[-1,1])mn(i,_e(d,ye(0,h*g,0),Ft(m*(1.15-g*.5)),Ie(.12)),e,{L:x,W:h*.115,c:u,a:.5,b:.45,base:.9,fold:.1,curl:.25,nu:3,vein:.15,tipMix:.1})}}}});var Ev=[["hortensia_azul","Hort\xEAnsia azul",7,40,[6259430,8824050,10128104,8038640]],["hortensia_rosa","Hort\xEAnsia rosa",8,42,[15760048,16229576,15231648,16367832]]];for(let[i,e,t,n,s]of Ev)nt({id:i,name:e,lvl:t,price:n,grow:150,gift:Math.round(n*.72),spots:["bed","pot"],h:.7,info:"Buqu\xEAs redondos que mudam de cor com a terra.",build:(r,o,a,c)=>Nn(r,o,{R:.36,H:.5,branches:9,heads:8,splay:.95,stalk:.05,leaf:{n:8,L:.13,W:.09,c:I(3833920),a:.8,b:.6,fold:.25,curl:.6,tilt:1.15,nu:4,nv:3},head:{ball:{n:46,r:.095,fs:.034,cols:s.map(I),squash:.75,cover:.35}},headUp:.6},a,c)});nt({id:"dalia",name:"D\xE1lia",lvl:7,price:40,grow:130,gift:28,spots:["bed","pot"],h:.7,info:"P\xE9talas em espiral perfeita, obra de geometria.",build:(i,e,t,n)=>{let s=e.pick([[13117502,16091738],[15227546,16503008],[15900698,16507754],[9054858,15245536]]);Nn(i,e,{R:.26,H:.55,branches:8,heads:5,stalk:.14,splay:.8,leaf:{n:8,L:.1,W:.05,c:I(3503674),tilt:1.1},head:yt.dahlia(I(s[0]),I(s[1])),headK:1.5,headUp:.35},t,n)}});nt({id:"bromelia",name:"Brom\xE9lia",lvl:8,price:45,grow:150,gift:31,spots:["pot","bed"],h:.5,thirst:.6,info:"Joia das matas brasileiras, com espiga vermelha.",build:(i,e,t,n)=>{if(Gs(i,e,{n:Math.round(10+10*t),L:.34*t,W:.05,a:.55,b:.45,tilt:.75,curl:1,curlPow:2,fold:.5,c:I(4164176),tip:I(9093232),nu:5,base:.5,r:.012}),n>=0){let s=.3*t*ze(.5,1,n);i.tube(null,[new It(0,0,0),new It(0,s*.5,0),new It(0,s,0)],.008,.005,I(13117498),I(15217210),5),Sn(i,ye(0,s*.45,0),e,{layers:[{n:20,golden:!0,L:[.07,.035],W:[.03,.018],a:.8,b:.7,tilt:[.75,.25],tiltC:[.3,.1],curl:.3,cup:.9,y:[0,s*.6],r:.006,cols:[I(14163514),I(15612484),I(16232490)],closedScale:.6,nu:3,nv:2}]},n,1)}}});nt({id:"peonia",name:"Pe\xF4nia",lvl:8,price:48,grow:160,gift:34,spots:["bed","pot"],h:.7,info:"Nuvens de p\xE9talas macias, puro romantismo.",build:(i,e,t,n)=>{let s=e.pick([[15895220,16638186],[16503004,16774902],[14170730,16091816]]);Nn(i,e,{R:.3,H:.52,branches:8,heads:5,stalk:.1,splay:.85,leaf:{n:9,L:.1,W:.04,c:I(3108410),tilt:1.1},leafTip:{n:3,L:.09,W:.035,c:I(3108410),spread:1.6},head:yt.peony(I(s[0]),I(s[1])),headK:1.45,headUp:.45},t,n)}});nt({id:"delfinio",name:"Delf\xEDnio",lvl:9,price:46,grow:140,gift:32,spots:["bed"],h:1,info:"Torres de flores azuis, altivas e elegantes.",build:(i,e,t,n)=>Ws(i,e,{stems:[4,5],H:.95,lean:.12,stemR:.006,florets:26,from:.42,type:"flower",fs:.03,off:.012,taper:.55,cols:[I(3823320),I(6978288)],bud:I(8034954),eye:I(16052479),basalFan:{count:8,stalk:.22,n:5,L:.11,W:.04,c:I(4164164),spread:2.4},leaf:{n:5,L:.07,W:.03,c:I(4164164)}},t,n)});nt({id:"dedaleira",name:"Dedaleira",lvl:9,price:44,grow:140,gift:31,spots:["bed"],h:1,info:"Sininhos pintados em hastes altas.",build:(i,e,t,n)=>Ws(i,e,{stems:[3,4],H:.95,lean:.1,stemR:.006,florets:22,from:.4,type:"bell",fs:.05,off:.006,whorl:.55,taper:.5,cols:[I(14178984),I(15769808)],bud:I(10139786),basal:{n:12,L:.2,W:.075,a:.75,b:.65,tilt:1.05,c:I(4885064)},leaf:{n:6,L:.1,W:.04,c:I(4885064)}},t,n)});nt({id:"hibisco",name:"Hibisco",lvl:9,price:50,grow:160,gift:35,spots:["bed","pot"],h:.85,info:"Flor tropical de um dia, sempre renovada.",build:(i,e,t,n)=>{let s=e.pick([[14819390,16011370,6949410],[16228394,16502874,13115422],[16026292,16568544,12065354]]);Nn(i,e,{R:.34,H:.68,branches:10,heads:6,stalk:.04,fill:44,wood:I(5917236),stemR:.008,leaf:{n:10,L:.085,W:.06,c:I(2318382),a:.8,b:.6,tilt:1.1},head:yt.hibiscus(I(s[0]),I(s[1]),I(s[2])),headK:1.35,headUp:.15},t,n)}});nt({id:"copo_de_leite",name:"Copo-de-leite",lvl:10,price:52,grow:150,gift:37,spots:["bed","pot"],h:.65,info:"C\xE1lice branco de linhas puras.",build:(i,e,t,n)=>{for(let s=0;s<Math.round(5+4*t);s++){let r=s*2.4,o=.34*t*e.range(.7,1.1),a=e.range(.25,.6),c=fn(new It(0,0,0),new It(Math.cos(r)*o*a*.2,o*.7,Math.sin(r)*o*a*.2),new It(Math.cos(r)*o*a,o,Math.sin(r)*o*a),5);i.tube(null,c,.006,.004,I(4885066),I(4885066),5);let l=c[5];mn(i,_e(ye(l.x,l.y,l.z),Ve(-r+Math.PI/2),Ie(.8+e()*.3)),e,{L:.24*t,W:.13*t,a:.6,b:.7,c:I(3111488),fold:.3,curl:.5,nu:5,nv:4})}if(n>=0)for(let s=0;s<4;s++){let r=ji(e,.55*t*e.range(.8,1.05),.08,s*2.1+1,.03,6);i.tube(null,r,.006,.005,I(5937744),I(6989920),5);let o=_e(Tv(r),Ie(.25)),a=ze(.35,1,n),c=new fe,l=[[.007,0],[.01,.035],[.02*a,.075],[.04*a,.105],[.052*a,.112]];i.lathe(_e(o,mi(1,1,1.25)),l,null,null,12,(h,u)=>u.copy(I(13625008)).lerp(Pt,$e(h*2.5,0,1)),0,1),Sn(i,o,e,{layers:[],center:{type:"spadix",L:.07,r:.007,cols:[I(15906846),I(16373834)]}},n)}}});function Tv(i){let{p:e,d:t}=Ht(i,1);return Zt(e,t)}nt({id:"azaleia",name:"Azaleia",lvl:10,price:50,grow:160,gift:35,spots:["bed","pot"],h:.55,info:"Arbusto que se cobre inteiro de flores.",build:(i,e,t,n)=>{let s=e.pick([[14696586,16222904],[16052468,16777215],[15224890,16226938]]);Nn(i,e,{R:.34,H:.42,branches:14,heads:34,fill:70,wood:I(5916212),leaf:{n:12,L:.05,W:.024,c:I(2909748),tilt:1},head:yt.azalea(I(s[0]),I(s[1])),headK:1.5,headUp:.5},t,n)}});nt({id:"orquidea",name:"Orqu\xEDdea",lvl:11,price:60,grow:190,gift:44,spots:["pot","hang"],h:.6,thirst:.6,info:"Rara e paciente; cada flor dura semanas.",build:(i,e,t,n)=>{if(Gs(i,e,{n:6,L:.2*t,W:.065,a:.7,b:.45,tilt:1.05,curl:.5,fold:.5,c:I(3111486),nu:5,base:.6,r:.01}),n<0)return;let s=e.pick([[16777215,16643322,12726394],[15231664,16232662,10099290],[16244874,16643264,12068922]]);for(let r=0;r<2;r++){let o=r*2.6+e(),a=.55*t,c=fn(new It(0,0,0),new It(Math.cos(o)*a*.1,a*.95,Math.sin(o)*a*.1),new It(Math.cos(o)*a*.75,a*.7,Math.sin(o)*a*.75),10);i.tube(null,c,.004,.0025,I(5929540),I(6982218),4);for(let l=0;l<7;l++){let h=.5+l*.075,u=Ht(c,h).p,d=l%2?1:-1,f=new It(Math.cos(o+d*1.2)*.8,.25,Math.sin(o+d*1.2)*.8).normalize(),g=u.clone().add(f.clone().multiplyScalar(.02));Sn(i,_e(Zt(g,f),Ve(e()*.4)),e,yt.orchid(I(s[0]),I(s[1]),I(s[2])),$e(n*1.5-l*.07,0,1),1.3)}}}});nt({id:"camelia",name:"Cam\xE9lia",lvl:11,price:58,grow:180,gift:42,spots:["bed","pot"],h:.8,info:"Flores de porcelana entre folhas brilhantes.",build:(i,e,t,n)=>{let s=e.pick([[15760030,16365772],[16446704,16777215],[13114942,15223390]]);Nn(i,e,{R:.33,H:.66,branches:11,heads:9,fill:50,wood:I(5916212),stemR:.008,leaf:{n:11,L:.075,W:.045,c:I(2054700),a:.85,b:.65,tilt:1.1},head:yt.camellia(I(s[0]),I(s[1])),headK:1.45,headUp:.3},t,n)}});nt({id:"ninfeia",name:"Ninfeia",lvl:6,price:36,grow:120,gift:26,spots:["pond"],h:.12,thirst:0,info:"Estrela branca que flutua sobre a \xE1gua.",build:(i,e,t,n)=>Cc(i,e,t,n,yt.waterlily(I(16507116),I(16026288)),0,.17,1.25)});nt({id:"lotus",name:"L\xF3tus",lvl:10,price:56,grow:170,gift:40,spots:["pond"],h:.5,thirst:0,info:"Nasce da lama e se abre imaculada.",build:(i,e,t,n)=>Cc(i,e,t,n,yt.lotus(I(16361668),I(15227540)),.36,.21,1.25)});function Cc(i,e,t,n,s,r,o,a){let c=Math.round(3+4*t);for(let l=0;l<c;l++){let h=l*2.4+e(),u=(.12+.3*Math.sqrt((l+.5)/c))*(.6+.4*t),d=o*t*e.range(.7,1.15),f=r&&l%3===0?r*.55*t*e.range(.6,1):0,g=Math.cos(h)*u,x=Math.sin(h)*u;f&&i.tube(null,[new It(g,-.1,x),new It(g,f*.5,x),new It(g,f,x)],.005,.004,I(5933642),I(5933642),4);let m=Jn(I(4164168),e,.05),p=_e(ye(g,f+.012+l*.0015,x),Ve(e()*we)),y=14,v=i.n,M=it(m,st.light,.3);i.vert(0,f?-.02:0,0,ot(m,.8),p);for(let C=0;C<=y;C++){let R=.18+C/y*(we-.36),P=d*(1+.04*Math.sin(R*7));i.vert(Math.cos(R)*P,f?.02:.003*Math.sin(R*5),Math.sin(R)*P,C%2?m:M,p)}for(let C=0;C<y;C++)i.idx.push(v,v+C+2,v+C+1)}if(n>=0)for(let l=0;l<Math.round(1+2*t);l++){let h=l*2.2+.7,u=l===0?0:.2,d=r?r*t*(l===0?1:.7):.02;r&&i.tube(null,[new It(Math.cos(h)*u,-.1,Math.sin(h)*u),new It(Math.cos(h)*u,d*.5,Math.sin(h)*u+.01),new It(Math.cos(h)*u,d,Math.sin(h)*u)],.006,.005,I(5933642),I(6986324),4),Sn(i,_e(ye(Math.cos(h)*u,d,Math.sin(h)*u),Ve(e()*3)),e,s,$e(n-l*.1,0,1),a*(.75+.25*t))}}var Av=[{id:"cerejeira",name:"Cerejeira",lvl:5,price:80,gift:45,info:"Nuvem cor-de-rosa que chove p\xE9talas.",petal:16368856,P:{H:1.25,R:1.25,trunkR:.085,limbs:7,bark:I(5914424),foliage:.18,leaves:700,leafCols:[I(5937732),I(8042586)],blossom:{n:3200,size:.125,cols:[I(16366802),I(16570598),I(16164034),I(16777215)],buds:[I(15239342),I(14250126)]}}},{id:"limoeiro",name:"Limoeiro",lvl:7,price:95,gift:55,info:"Flores perfumadas e lim\xF5es amarelinhos.",P:{H:.95,R:1,trunkR:.07,limbs:7,bark:I(6969924),foliage:1,leaves:2800,leafSize:.15,leafCols:[I(3111480),I(4164160),I(2452016)],blossom:{n:260,size:.075,cols:[Pt,I(16775400)]},fruit:{n:18,r:.045,tall:1.25,c:I(16241182)}}},{id:"ipe_amarelo",name:"Ip\xEA-amarelo",lvl:9,price:120,gift:70,info:"S\xEDmbolo do Brasil: ouro puro no inverno.",petal:16240414,P:{H:1.5,R:1.3,trunkR:.09,limbs:8,bark:I(6969930),foliage:.06,leaves:900,leafCols:[I(4885050),I(5937732)],blossom:{n:3300,size:.125,cols:[I(16240414),I(16505914),I(15906831),I(16640106)],buds:[I(14264335),I(12107850)]}}},{id:"laranjeira",name:"Laranjeira",lvl:11,price:130,gift:76,info:"Flor de laranjeira e frutos doces.",P:{H:1,R:1.1,trunkR:.075,limbs:7,bark:I(6246204),foliage:1,leaves:2900,leafSize:.15,leafCols:[I(2452016),I(3111480),I(2054698)],blossom:{n:240,size:.075,cols:[Pt]},fruit:{n:20,r:.055,tall:1,c:I(16091678)}}},{id:"jacaranda",name:"Jacarand\xE1",lvl:13,price:160,gift:95,info:"Copa lil\xE1s que tinge o ch\xE3o de roxo.",petal:11045102,P:{H:1.6,R:1.45,trunkR:.09,limbs:8,bark:I(5917248),foliage:.15,leaves:900,leafCols:[I(5937732),I(6989904)],blossom:{n:3500,size:.125,cols:[I(10124008),I(12098290),I(9071320),I(13153526)],buds:[I(8018632)]}}}];for(let i of Av)nt({...i,price:i.price,grow:240,spots:["tree"],h:3.2,tree:!0,thirst:.5,build:(e,t,n,s)=>xo(e,t,i.P,n,s)});var Rv=yt.rose(I(15227530),I(16091824),I(16568542)),Cv=[{id:"rosa_trepadeira",name:"Rosa trepadeira",lvl:6,price:70,gift:42,info:"Cobre o arco de rosas mi\xFAdas.",P:{leaf:{n:60,L:.06,W:.038,c:I(2909748)},flower:{n:46,make:(i,e,t,n)=>{let s=new It(t.range(-.6,.6),t.range(.1,1),t.range(-1,1)>0?1:-1).normalize();Sn(i,Zt(e.clone().add(s.clone().multiplyScalar(.07)),s),t,Rv,n,1.05)}}}},{id:"glicinia",name:"Glic\xEDnia",lvl:8,price:90,gift:54,info:"Cachos lilases que pendem como cortinas.",P:{leaf:{n:70,L:.07,W:.025,c:I(4887620)},flower:{n:30,t0:.5,make:(i,e,t,n)=>{let s=.36*ze(.4,1,n)*t.range(.7,1.15),r=26,o=t.range(-.06,.06),a=t.range(-.1,.1);for(let c=0;c<r;c++){let l=c/r,h=.05*(1-l*.85),u=c*2.4,d=it(I(9071328),I(13482232),l*.6+t()*.3),f=_e(ye(e.x+o+Math.cos(u)*h,e.y-.03-l*s,e.z+a+Math.sin(u)*h),Ve(-u+Math.PI/2),Ie(1.9));i.card(f,.034,.042,ot(d,.8),it(d,Pt,.25),0,-.3,.95,.3)}}}}},{id:"primavera",name:"Primavera",lvl:10,price:105,gift:64,info:"Buganv\xEDlia: uma explos\xE3o de magenta.",P:{leaf:{n:50,L:.055,W:.035,c:I(3506240)},flower:{n:260,make:(i,e,t,n)=>{let s=Jn(t.pick([I(14688394),I(15747744),I(13113464)]),t,.05),r=new It(t.range(-1,1),t.range(-.2,1),t.range(-1,1)).normalize(),o=e.clone().add(r.clone().multiplyScalar(t.range(.03,.16)));for(let a=0;a<3;a++)i.card(_e(Zt(o,r),Ve(a*2.1),Ie(.9)),.04*ze(.5,1,n),.05*ze(.5,1,n),ot(s,.8),it(s,Pt,.15),0,.62,-.78,.35)}}}},{id:"jasmim",name:"Jasmim",lvl:12,price:115,gift:70,info:"Estrelinhas brancas de perfume noturno.",P:{leaf:{n:80,L:.05,W:.022,c:I(3111482)},flower:{n:110,make:(i,e,t,n)=>{let s=new It(t.range(-1,1),t.range(-.1,1),t.range(-1,1)).normalize();Sn(i,Zt(e.clone().add(s.clone().multiplyScalar(.06)),s),t,yt.small5(I(16776692),Pt,I(16248e3)),n,1.5)}}}}];for(let i of Cv)nt({...i,grow:220,spots:["arch"],h:2.3,climber:!0,fixedRot:!0,build:(e,t,n,s)=>sf(e,t,i.P,n,s)});nt({id:"alecrim",name:"Alecrim",lvl:3,price:14,grow:65,gift:9,spots:["pot","window","bed"],h:.35,info:"Raminhos arom\xE1ticos com florzinhas azuis.",build:(i,e,t,n)=>Ws(i,e,{stems:[16,18],H:.34,lean:.45,stemC:I(6978132),stemR:.003,florets:n>.2?12:2,from:.55,type:"card",fs:.007,off:.006,cols:[I(8030952),I(11188472)],bud:I(8034938),leaf:{n:26,L:.026,W:.004,c:I(5208664),fold:0,tilt:.8,t0:.08,t1:.98,taper:.2},from2:1},t,Math.max(n,0))});var Lv=[0,9,18,28,40,55,70,85,100,115,130,150,150,150];for(let i of Or)i.grow=Math.round(i.grow*Lv[Math.min(i.lvl,13)]*(i.tree?2:i.climber?1.5:1)),i.every=300+i.lvl*90;var dt={};Or.sort((i,e)=>i.lvl-e.lvl||i.price-e.price);for(let i of Or)dt[i.id]=i;var gn=Or;var Pv=[null,null,[.55,-1],[.85,.12],[1,1]];function _o(i,e,t){let n=dt[i],s=new Xt,r=zt(e*7919+13);if(t<=1)if(n.tree){s.tube(null,ji(r,.3,.02,1,.05,4),.012,.005,st.wood,st.stem,5);for(let o=0;o<6;o++)mn(s,_e(ye(0,.12+o*.035,0),Ve(o*2.4),Ie(1)),r,{L:.09,W:.04,c:st.lime})}else if(n.spots[0]==="pond")Cc(s,r,.3,-1,null,0,.14,1);else if(n.climber)for(let o of[-.75,.75]){let a=new Xt;yc(a,r);let c=s.n;for(let l=0;l<a.pos.length;l+=3)s.vert(a.pos[l]+o,a.pos[l+1],a.pos[l+2],new fe(a.col[l],a.col[l+1],a.col[l+2]));for(let l of a.idx)s.idx.push(l+c)}else yc(s,r);else{let[o,a]=Pv[t],c=n.tree?[0,0,.45,.78,1][t]:n.climber?[0,0,.4,.8,1][t]:o;n.build(s,r,c,n.foliage?-1:a)}return s.build()}function yo(i){let e=dt[i];return Xn({sway:e.tree?.04:e.climber?.05:e.id==="cacto"||e.id==="suculenta"?.02:e.h>1?.16:.5,glow:e.tree?.1:.12,phase:Math.random()*6})}var Iv=[{id:0,name:"Primavera",icon:"spring",line:"Tudo quer brotar."},{id:1,name:"Ver\xE3o",icon:"summer",line:"Dias longos e quentes."},{id:2,name:"Outono",icon:"autumn",line:"Folhas douradas pelo ch\xE3o."},{id:3,name:"Inverno",icon:"winter",line:"Manh\xE3s frescas e c\xE9u limpo."}],Br=3,Dv=[{n:"Dona L\xFAcia",l:["quer enfeitar a mesa do caf\xE9.","vai receber as netas no domingo.","est\xE1 montando um arranjo para a igreja."]},{n:"Seu Ant\xF4nio",l:["quer fazer uma surpresa para a esposa.","vai visitar um velho amigo.","precisa alegrar a barbearia."]},{n:"Bia",l:["est\xE1 decorando a festa de anivers\xE1rio.","quer um buqu\xEA para a professora.","vai fazer uma coroa de flores."]},{n:"Padaria da pra\xE7a",l:["quer flores frescas no balc\xE3o.","vai enfeitar a vitrine."]},{n:"Tia Zez\xE9",l:["est\xE1 preparando um ch\xE1 da tarde.","quer perfumar a sala.","vai presentear a vizinha nova."]},{n:"Professor Henrique",l:["quer mostrar as flores para a turma.","est\xE1 montando um herb\xE1rio."]},{n:"Marina",l:["vai se casar no s\xE1bado!","quer flores para o ateli\xEA.","est\xE1 fazendo sabonetes artesanais."]},{n:"Seu Joaquim da feira",l:["quer vender buqu\xEAs na barraca.","precisa de enfeite para a banca."]}],sn=(i,e,t,n,s)=>n.map(([r,o],a)=>({id:i+a,name:n.length>1?`${e} ${["I","II","III","IV"][a]}`:e,desc:t.replace("#",r),goal:r,r:o,v:s})),qs=[...sn("plant","M\xE3os na terra","Plante # mudas",[[10,40],[60,150],[250,500]],i=>i.stats.planted),...sn("water","Regador amigo","Regue # vezes",[[25,40],[200,150],[800,500]],i=>i.stats.watered),...sn("bloom","Jardim em flor","Veja # plantas florirem",[[10,50],[80,200],[400,700]],i=>i.stats.blooms),...sn("gift","Colheita de mimos","Recolha # presentes",[[20,40],[250,200],[1200,700]],i=>i.stats.collected),...sn("album","Colecionadora","Tenha # esp\xE9cies no \xE1lbum",[[5,50],[15,150],[30,400],[45,900]],i=>i.album.length),...sn("order","Querida da vizinhan\xE7a","Entregue # pedidos",[[1,30],[12,200],[50,600],[150,1500]],i=>i.stats.orders||0),...sn("weed","Canteiro limpinho","Arranque # matinhos",[[5,30],[50,180],[200,500]],i=>i.stats.weeds||0),...sn("prune","Tesoura afiada","Fa\xE7a # podas",[[5,30],[50,180],[200,500]],i=>i.stats.prunes||0),...sn("fert","Dedo verde","Use adubo # vezes",[[3,30],[30,200]],i=>i.stats.fert||0),...sn("streak","Visita querida","Abra a caixa de correio em # dias",[[3,60],[7,200],[21,800]],i=>i.daily.streak||0),...sn("zone","Jardim que cresce","Abra # \xE1reas novas",[[2,80],[4,300],[6,1e3]],i=>i.zones.length-1),...sn("decor","Capricho","Tenha # decora\xE7\xF5es",[[2,60],[6,400]],i=>i.decor.length),...sn("beauty","Encanto","Chegue a # de beleza",[[150,60],[600,250],[2e3,900]],(i,e)=>e.beauty()),...sn("hybrid","Jardineira curiosa","Descubra # raridades",[[1,80],[5,400],[14,1500]],i=>(i.hybrids||[]).length),...sn("visit","Amiga dos bichos","Receba # visitantes diferentes",[[3,80],[7,400],[10,1e3]],i=>(i.seen||[]).length),...sn("season","O ano inteiro","Cuide do jardim em # esta\xE7\xF5es",[[2,100],[4,500]],i=>(i.seasonsSeen||[]).length)],pf=(i=new Date)=>`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`,Lc=[{coins:30},{adubo:1},{coins:60},{adubo:2},{coins:110},{adubo:3},{coins:260,adubo:2,big:!0}];function mf(i,{S:e,world:t,fx:n,audio:s,gardener:r,ui:o,addCoins:a,addXp:c,level:l,save:h}){let u={},d=(z,_)=>z+Math.random()*(_-z),f=z=>z[Math.floor(Math.random()*z.length)],g=()=>Math.floor((Date.now()-e.t0)/864e5);u.season=()=>{let z=g(),_=Math.floor(z/Br)%4;return{...Iv[_],day:z%Br+1,of:Br,left:Br-z%Br}},u.inSeason=z=>z.loves!=null&&z.loves.includes(u.season().id),u.growMul=(z,_)=>(u.inSeason(_)?1.5:1)*(t.spots[z].type==="green"?2:1),u.giftMul=z=>u.inSeason(z)?1.5:1,u.log=z=>{e.log.push({d:g()+1,t:z}),e.log.length>60&&e.log.shift()};let x=()=>{let z=l(),_=new Set(t.spots.filter(B=>e.zones.includes(B.zone)).map(B=>B.type)),w=u.season().id;return gn.filter(B=>B.lvl<=z&&B.spots.some(V=>_.has(V))&&(B.season==null||B.season===w)&&(!B.hybrid||e.hybrids.includes(B.id)))};u.available=x;let m=()=>{let z=l(),_=x(),w=_.filter(b=>Object.values(e.plants).some(E=>E.sp===b.id));if(!_.length)return null;let B=z<3?1:z<6?Math.random()<.5?1:2:Math.random()<.4?2:Math.random()<.6?3:1,V=[],Y=new Set;for(let b=0;b<B;b++){let E=w.length&&Math.random()<.7?w:_,A=f(E.filter(F=>!Y.has(F.id)).length?E.filter(F=>!Y.has(F.id)):_);Y.has(A.id)||(Y.add(A.id),V.push({sp:A.id,n:1+Math.floor(Math.random()*Math.min(4,1.5+z/3))}))}let T=f(Dv),S=V.reduce((b,E)=>b+E.n*dt[E.sp].gift,0);return{id:Date.now()+Math.floor(Math.random()*1e3),who:T.n,why:f(T.l),items:V,coins:Math.round(S*2.4+12),xp:V.reduce((b,E)=>b+E.n,0)*5,adubo:Math.random()<.35?1:0}};u.canDeliver=z=>z.items.every(_=>(e.basket[_.sp]||0)>=_.n),u.anyDeliverable=()=>e.orders.some(u.canDeliver),u.deliver=z=>{let _=e.orders.find(w=>w.id===z);if(!_||!u.canDeliver(_))return!1;for(let w of _.items)e.basket[w.sp]-=w.n;return e.orders=e.orders.filter(w=>w!==_),e.stats.orders=(e.stats.orders||0)+1,e.adubo+=_.adubo,a(_.coins),c(_.xp),s.sfx("levelup",.7),r.play("cheer",1.4),n.burst(t.things.orders.pos,[16770688,16751288,16777215,12120224],40,1.4),o.toast(`${_.who} adorou! +${_.coins} moedas${_.adubo?" e 1 adubo":""}`,"good"),u.log(`Entreguei flores para ${_.who}.`),e.orderT=Math.min(e.orderT||1/0,Date.now()+5*6e4),h(),!0},u.dismiss=z=>{e.orders=e.orders.filter(_=>_.id!==z),e.orderT=Date.now()+3*6e4,h()},u.dailyReady=()=>e.daily.last!==pf(),u.claimDaily=()=>{if(!u.dailyReady())return null;e.daily.streak+=1,e.daily.last=pf();let z=Lc[(e.daily.streak-1)%7],_=z.coins?Math.round(z.coins*(1+l()*.2)):0;return _&&a(_),z.adubo&&(e.adubo+=z.adubo),s.sfx(z.big?"levelup":"bloom"),n.burst(t.things.mail.pos,[16770688,16751288,10148095],z.big?60:24,1.2),u.log(`Presente do dia ${e.daily.streak}: ${_?_+" moedas":""}${_&&z.adubo?" e ":""}${z.adubo?z.adubo+" adubo":""}.`),h(),{streak:e.daily.streak,coins:_,adubo:z.adubo||0}};let p=d(70,130),y=d(120,200),v=z=>Object.keys(z).length,M=()=>{let z=Object.keys(e.plants).filter(_=>!e.weeds[_]&&["bed","pot","tree","veg"].includes(t.spots[_].type));z.length&&v(e.weeds)<4&&(e.weeds[f(z)]=1)},C=()=>{let z=Object.keys(e.plants).filter(_=>{let w=e.plants[_],B=dt[w.sp];return!e.wilt[_]&&!w.ready&&w.grown>=B.grow&&!B.tree&&!B.foliage&&t.spots[_].type!=="pond"});z.length&&v(e.wilt)<3&&(e.wilt[f(z)]=1)},R=2,P=()=>{for(let z of qs)if(!e.ach[z.id]&&z.v(e,i)>=z.goal){e.ach[z.id]=1,a(z.r),s.sfx("levelup",.8),o.achievement(z),u.log(`Conquista: ${z.name}.`),h();break}};return u.tick=z=>{if(e.stats.collected>0&&e.orders.length<3&&Date.now()>=(e.orderT||0)){let w=m();w&&(e.orders.push(w),e.orders.length===1&&!e.tips.order&&(e.tips.order=1,o.toast("Chegou um pedido na banquinha de flores!","info"))),e.orderT=Date.now()+12*6e4}p-=z,p<0&&(p=d(150,260),M()),y-=z,y<0&&(y=d(200,320),C()),R-=z,R<0&&(R=1.5,P());let _=u.season();e.seasonsSeen.includes(_.id)||(e.seasonsSeen.push(_.id),e.seasonsSeen.length>1&&(o.toast(`Chegou ${_.id===1||_.id===2||_.id===3?"o":"a"} ${_.name.toLowerCase()}! ${_.line}`,"good"),u.log(`Come\xE7ou ${_.name.toLowerCase()}.`)))},u.init=z=>{for(let _ in e.weeds)e.plants[_]||delete e.weeds[_];for(let _ in e.wilt)e.plants[_]||delete e.wilt[_];for(let _=0;_<(z>8*3600?3:z>3*3600?2:z>1800?1:0);_++)M();if(z>1800)for(;e.stats.collected>0&&e.orders.length<3;){let _=m();if(!_)break;e.orders.push(_)}},i.sys=u,u}var Pc="jardim-do-sossego-v1",Uv=2*3600,Hr=[0,60,180,380,680,1100,1650,2350,3200,4200,5400,6800,8500,10500,13e3,16e3,2e4,25e3],Ic=[{id:"can1",name:"Regador de cobre",price:450,desc:"Rega uma \xE1rea maior de uma s\xF3 vez.",need:null},{id:"can2",name:"Regador dourado",price:1800,desc:"Rega longe e a \xE1gua dura o dobro.",need:"can1"},{id:"sprinkler",name:"Aspersores autom\xE1ticos",price:7500,desc:"O jardim inteiro se rega sozinho.",need:"can2"}],gf=["","Brotinho","Crescendo","Em bot\xE3o","Em flor"],Nv=[{t:"Plante sua primeira flor",goal:1,v:i=>i.stats.planted,r:15},{t:"Regue a plantinha para ela brotar",goal:1,v:i=>i.stats.watered,r:10},{t:"Plante 3 flores no canteiro",goal:3,v:(i,e)=>e.count(),r:20},{t:"Veja uma flor desabrochar",goal:1,v:i=>i.stats.blooms,r:25},{t:"Recolha o presente de uma flor",goal:1,v:i=>i.stats.collected,r:20},{t:"Tenha 8 plantas no jardim",goal:8,v:(i,e)=>e.count(),r:30},{t:"Abra a Varanda",goal:1,v:i=>+i.zones.includes(1),r:40},{t:"Plante num vaso suspenso",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="hang"),r:30},{t:"Tenha 3 esp\xE9cies diferentes em flor",goal:3,v:(i,e)=>e.bloomSpecies(),r:40},{t:"Compre uma decora\xE7\xE3o na loja",goal:1,v:i=>i.decor.length,r:40},{t:"Abra os Canteiros do leste",goal:1,v:i=>+i.zones.includes(2),r:60},{t:"Plante uma \xE1rvore",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="tree"),r:60},{t:"Tenha 12 plantas em flor ao mesmo tempo",goal:12,v:(i,e)=>e.blooming(),r:80},{t:"Abra o Laguinho",goal:1,v:i=>+i.zones.includes(3),r:100},{t:"Plante uma ninfeia no lago",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="pond"),r:60},{t:"\xC1lbum: veja 12 esp\xE9cies florirem",goal:12,v:i=>i.album.length,r:120},{t:"Abra a Alameda dos arcos",goal:1,v:i=>+i.zones.includes(4),r:150},{t:"Cubra um arco com uma trepadeira em flor",goal:1,v:(i,e)=>e.count((t,n)=>n.type==="arch"&&t.grown>=dt[t.sp].grow),r:150},{t:"Tenha 30 plantas em flor",goal:30,v:(i,e)=>e.blooming(),r:200},{t:"Abra o Pomar",goal:1,v:i=>+i.zones.includes(5),r:200},{t:"Tenha 3 \xE1rvores em flor",goal:3,v:(i,e)=>e.count((t,n)=>n.type==="tree"&&t.grown>=dt[t.sp].grow),r:250},{t:"Abra o Prado das flores",goal:1,v:i=>+i.zones.includes(6),r:300},{t:"\xC1lbum: veja 30 esp\xE9cies florirem",goal:30,v:i=>i.album.length,r:400},{t:"Tenha 60 plantas em flor",goal:60,v:(i,e)=>e.blooming(),r:600},{t:"Complete o \xE1lbum de flores",goal:gn.length,v:i=>i.album.length,r:1e3}],kr=()=>({v:1,coins:45,xp:0,zones:[0],decor:[],upg:[],plants:{},quest:0,album:[],stats:{planted:0,watered:0,collected:0,blooms:0,orders:0,weeds:0,prunes:0,fert:0},hour:8.6,last:Date.now(),t0:Date.now(),tips:{},basket:{},orders:[],orderT:0,adubo:0,daily:{last:"",streak:0,best:0},weeds:{},wilt:{},ach:{},log:[],hybrids:[],seen:[],seasonsSeen:[],rare:{},paint:{},outfit:{},settings:{music:.6,sfx:.8,quality:"auto",time:"auto"}});function xf(){let i=e=>Object.assign(kr(),e,{settings:Object.assign(kr().settings,e.settings),stats:Object.assign(kr().stats,e.stats),daily:Object.assign(kr().daily,e.daily)});try{let e=localStorage.getItem(Pc);if(e){let t=JSON.parse(e);if(t&&t.v===1)return i(t)}}catch{}try{let e=window.__SAVE;if(e&&e.v===1)return i(JSON.parse(JSON.stringify(e)))}catch{}return kr()}function vf({scene:i,world:e,fx:t,audio:n,gardener:s,nav:r,env:o,ui:a,state:c}){let l={state:c,tasks:[],cur:null,time:0,rainT:240+Math.random()*200,raining:0},h=c,u={},d=uf(),f={water:new pn({map:d.water,depthTest:!1,transparent:!0}),gift:new pn({map:d.gift,depthTest:!1,transparent:!0}),weed:new pn({map:d.weed,depthTest:!1,transparent:!0}),prune:new pn({map:d.prune,depthTest:!1,transparent:!0}),seed:new pn({map:d.seed,depthTest:!1,transparent:!0}),order:new pn({map:d.order,depthTest:!1,transparent:!0}),daily:new pn({map:d.daily,depthTest:!1,transparent:!0}),plus:new pn({map:d.plus,transparent:!0,opacity:.85,depthWrite:!1})},g=new fe(7032378),x=new fe(3811358);l.save=()=>{h.last=Date.now();try{localStorage.setItem(Pc,JSON.stringify(h))}catch{}};let m=()=>l.save();l.reset=()=>{try{localStorage.removeItem(Pc)}catch{}};let p=()=>{let D=1;for(;D<Hr.length&&h.xp>=Hr[D];)D++;return D};l.level=p;let y=D=>h.upg.includes(D),v=()=>Uv*(y("can2")?2:1),M=()=>y("can2")?3.3:y("can1")?2.2:1.35,C=D=>{let H=D.grown/dt[D.sp].grow;return H>=1?4:H>=.45?3:H>=.12?2:1};l.count=D=>{let H=0;for(let k in h.plants)(!D||D(h.plants[k],e.spots[k]))&&H++;return H},l.blooming=()=>l.count(D=>D.grown>=dt[D.sp].grow),l.bloomSpecies=()=>{let D=new Set;for(let H in h.plants){let k=h.plants[H];k.grown>=dt[k.sp].grow&&D.add(k.sp)}return D.size},l.beauty=()=>{let D=0;for(let H in h.plants){let k=h.plants[H],ie=dt[k.sp];D+=Math.round(ie.price*(k.grown>=ie.grow?.5:.12))}for(let H of h.decor)D+=Xs.find(k=>k.id===H)?.beauty??0;return D};let R=(D,H)=>{let k=new Us(D);return k.scale.setScalar(H),k.renderOrder=10,k.visible=!1,i.add(k),k};for(let D of e.spots){let H=D.type==="hang"?-.02:D.type==="tree"?.5:D.type==="arch"?1.1:.3;u[D.id]={mesh:null,stage:0,pop:1,droop:0,plus:R(f.plus,D.type==="window"?.2:.3),bubble:R(f.water,.42),top:H},u[D.id].plus.position.copy(D.pos).y+=H,D.type==="arch"&&(u[D.id].plus.position.x-=.75)}let P=D=>{let H=u[D.id],k=h.plants[D.id];if(H.mesh&&(i.remove(H.mesh),H.mesh.geometry.dispose(),H.mesh.material.dispose(),H.mesh=null),!k){H.stage=0;return}let ie=dt[k.sp],ce=C(k),U=new ke(_o(k.sp,k.seed,ce),yo(k.sp));U.castShadow=!0,U.receiveShadow=!0,U.position.copy(D.pos),ie.fixedRot||(U.rotation.y=k.seed*1.7),i.add(U),H.mesh=U,H.stage=ce,H.h=ie.h*D.scale*(ie.tree?[0,.15,.5,.8,1][ce]:[0,.15,.6,.9,1][ce])},z=(()=>{let D=new Xt,H=zt(91);for(let k=0;k<7;k++)D.petal(_e(Ve(k*.9+H()),Ie(H.range(.25,.95))),{L:H.range(.1,.19),W:.035,a:.7,b:.5,fold:.4,curl:.5,ruffle:.25,rf:4,nu:4,nv:2,cols:[I(6195758),I(8826940),I(11979866)]});D.tube(null,[new O(0,0,0),new O(.01,.09,0),new O(.02,.17,.01)],.004,.003,I(8826940),I(10272842),4);for(let k=0;k<9;k++)D.petal(_e(ye(.02,.17,.01),Ve(k*.7),Ie(1.2)),{L:.03,W:.012,nu:2,nv:1,cols:[I(15909406),I(16241210),I(16507754)]});return D.build()})(),_=Xn({sway:.6}),w=(D,H)=>{let k=u[D];if(H&&!k.weed){let ie=e.spots[D],ce=new ke(z,_);ce.castShadow=!0;let U=D*2.4,L=ie.type==="tree"?.5:ie.type==="pot"?.2:.27;ce.position.set(ie.pos.x+Math.cos(U)*L,ie.pos.y,ie.pos.z+Math.sin(U)*L),ce.rotation.y=U,ce.scale.setScalar(.01),i.add(ce),k.weed=ce}else!H&&k.weed&&(i.remove(k.weed),k.weed=null)},B={};for(let D in e.things){let H=e.things[D],k=R(D==="orders"?f.order:f.daily,.5);k.position.set(H.pos.x,H.top+.25,H.pos.z),B[D]=k}let V=D=>dt[D.sp].thirst===0?!0:D.wet>0,Y=(D,H)=>{h.coins+=D,H&&a.floatText(H,(D>0?"+":"")+D,"coin"),a.hud()},T=D=>{let H=p();h.xp+=D;let k=p();k>H&&(n.sfx("levelup"),s.play("cheer",1.6),t.burst(s.group.position,[16770688,16751288,10148095,12120224],50),a.levelUp(k,gn.filter(ie=>ie.lvl>H&&ie.lvl<=k))),a.hud()},S=()=>{let D=Nv[h.quest];if(!D){a.quest(null);return}let H=Math.min(D.goal,D.v(h,l));if(H>=D.goal){h.quest++,Y(D.r),n.sfx("buy"),a.toast(`Miss\xE3o cumprida! +${D.r} moedas`,"good"),S(),m();return}a.quest({text:D.t,val:H,goal:D.goal,reward:D.r})};l.checkQuest=S;let b=(D,H)=>{let k=s.group.position;return r.path(k.x,k.z,D,H)},E=(D,H,k={})=>{l.tasks.some(ie=>ie.kind===D&&ie.spot===H)||l.cur&&l.cur.kind===D&&l.cur.spot===H||l.tasks.length>=8||l.tasks.push({kind:D,spot:H,...k})},A=()=>{for(let D of l.tasks)D.kind==="plant"&&(h.coins+=dt[D.sp].price,D.spot.pending=null);l.tasks.length=0,a.hud()};l.tapGround=(D,H)=>{A(),!(l.cur&&l.cur.phase==="act")&&(l.cur&&l.cur.kind==="plant"&&(h.coins+=dt[l.cur.sp].price,l.cur.spot.pending=null,a.hud()),l.cur={kind:"move",path:b(D,H),phase:"walk"},a.closeCards())},l.tapSpot=D=>{if(!h.zones.includes(D.zone)){l.offerZone(D.zone);return}let H=h.plants[D.id];if(!H){if(D.pending)return;n.sfx("click",.35),a.picker(D,F(D));return}let k=dt[H.sp];H.ready||h.rare[D.id]?(E("collect",D),a.closeCards()):h.wilt[D.id]?(E("prune",D),a.closeCards()):h.weeds[D.id]?(E("weed",D),a.closeCards()):k.thirst!==0&&H.wet<v()*.4&&!y("sprinkler")?(E("water",D),a.closeCards()):(n.sfx("click",.35),l.showCard(D),E("admire",D))},l.showCard=D=>{h.plants[D.id]&&a.plantCard(D,()=>{let k=h.plants[D.id];if(!k)return null;let ie=dt[k.sp];return{sp:ie,stage:C(k),grow:$e(k.grown/ie.grow,0,1),water:ie.thirst===0?1:$e(k.wet/v(),0,1),noWater:ie.thirst===0,gift:k.grown>=ie.grow?$e(k.giftT/ie.every,0,1):0,ready:k.ready,left:Math.max(0,ie.grow-k.grown),adubo:h.adubo,inSeason:l.sys.inSeason(ie),weed:!!h.weeds[D.id]}},{water:()=>E("water",D),remove:()=>E("remove",D),fert:()=>l.fertilize(D)})};let F=D=>gn.filter(H=>H.spots.includes(D.type)&&(!H.hybrid||h.hybrids.includes(H.id))).map(H=>({sp:H,locked:H.lvl>p(),afford:h.coins>=H.price}));l.choose=(D,H)=>{let k=dt[H];return k.lvl>p()?(n.sfx("error"),a.toast(`${k.name} chega no n\xEDvel ${k.lvl}`,"warn"),!1):h.coins<k.price?(n.sfx("error"),a.toast("Faltam moedas. Recolha os presentes das flores!","warn"),!1):h.plants[D.id]||D.pending?!1:(h.coins-=k.price,D.pending=H,a.hud(),n.sfx("buy",.7),E("plant",D,{sp:H}),k.thirst!==0&&!y("sprinkler")&&E("water",D),!0)},l.offerZone=D=>{let H=Qn[D];h.zones.includes(D)||a.zoneOffer(H,h.coins>=H.cost,()=>{if(h.coins<H.cost){n.sfx("error"),a.toast(`Faltam ${H.cost-h.coins} moedas para abrir ${H.name}`,"warn");return}h.coins-=H.cost,h.zones.push(D),e.setZone(D,!0),e.mowZone(D),r.invalidate(),n.sfx("expand");let[k,ie]=H.tag;t.burst(new O(k,.3,ie),[16770688,12120224,16777215,16762584],70,2.2),a.toast(`${H.name} agora faz parte do seu jardim!`,"good"),a.hud(),T(20+D*10),S(),m(),$(),a.focus(k,ie)})},l.buyDecor=D=>{let H=Xs.find(k=>k.id===D);if(!(!H||h.decor.includes(D))){if(h.coins<H.price){n.sfx("error"),a.toast("Faltam moedas para esta decora\xE7\xE3o","warn");return}h.coins-=H.price,h.decor.push(D),e.setDecor(D,!0),r.invalidate(),n.sfx("buy"),a.toast(`${H.name} colocado no jardim`,"good"),T(15),a.hud(),S(),m()}},l.buyUpgrade=D=>{let H=Ic.find(k=>k.id===D);if(!(!H||y(D))){if(H.need&&!y(H.need)){n.sfx("error"),a.toast("Compre a melhoria anterior primeiro","warn");return}if(h.coins<H.price){n.sfx("error"),a.toast("Faltam moedas para esta melhoria","warn");return}h.coins-=H.price,h.upg.push(D),n.sfx("levelup"),a.toast(`${H.name}: ${H.desc}`,"good"),a.hud(),m()}};let $=()=>{for(let D of e.spots)u[D.id].plus.visible=h.zones.includes(D.zone)&&!h.plants[D.id]&&!D.pending},q=D=>{let H=M(),k=v(),ie=0;for(let ce in h.plants){let U=e.spots[ce];if(U.pos.distanceTo(D.pos)<=H+.01&&Math.abs(U.pos.y-D.pos.y)<1.2){let L=h.plants[ce];if(dt[L.sp].thirst===0)continue;L.wet=k,ie++,t.splash(U.pos,5)}}h.stats.watered+=Math.max(1,ie),T(1),S()},j=D=>{let H=D.spot;H.pending=null,h.plants[H.id]={sp:D.sp,seed:1+Math.floor(Math.random()*9999),grown:0,wet:0,giftT:0,ready:!1},h.stats.planted++,P(H),u[H.id].pop=0,t.dust(H.pos,12),n.sfx("plant"),T(3),S(),$(),m()},W=D=>{let H=0;for(let k in h.plants){let ie=e.spots[k],ce=h.plants[k];if(!ce.ready||ie.pos.distanceTo(D.pos)>Math.max(1.4,M())+.01)continue;let U=dt[ce.sp],L=Math.round(U.gift*l.sys.giftMul(U));ce.ready=!1,ce.giftT=0,H+=L,h.stats.collected++,h.basket[ce.sp]=Math.min(99,(h.basket[ce.sp]||0)+1);let J=ie.pos.clone();J.y+=u[k].h*.7+.2,t.sparkle(J,12),a.floatText(J,"+"+L,"coin"),l.sys.afterGift&&l.sys.afterGift(k)}for(let k in h.rare){let ie=e.spots[k];!ie||ie.pos.distanceTo(D.pos)>Math.max(1.4,M())+.01||l.sys.takeRare&&l.sys.takeRare(k)}H&&(h.coins+=H,n.sfx("coin",.6),T(Math.ceil(H/3)),a.hud(),S(),m())},X=D=>{if(!h.weeds[D.id])return;delete h.weeds[D.id],h.stats.weeds=(h.stats.weeds||0)+1,t.dust(u[D.id].weed?u[D.id].weed.position:D.pos,10),n.sfx("plant",.7,1.25);let H=D.pos.clone();H.y+=.4,h.coins+=3,a.floatText(H,"+3","coin"),T(2),a.hud()},se=D=>{let H=h.plants[D.id];if(!H||!h.wilt[D.id])return;delete h.wilt[D.id],h.stats.prunes=(h.stats.prunes||0)+1;let k=dt[H.sp],ie=Math.round(k.gift*1.5*l.sys.giftMul(k));H.giftT=0,h.coins+=ie,h.basket[H.sp]=Math.min(99,(h.basket[H.sp]||0)+2),h.stats.collected++;let ce=D.pos.clone();ce.y+=u[D.id].h*.7+.2,t.sparkle(ce,18,16765152),a.floatText(ce,"+"+ie,"coin"),n.sfx("coin",.6,1.15),T(Math.ceil(ie/3)),a.hud(),m()};l.fertilize=D=>{let H=h.plants[D.id];if(!H||h.adubo<1)return;let k=dt[H.sp];if(H.grown>=k.grow){a.toast("Esta planta j\xE1 est\xE1 adulta","info");return}h.adubo--,h.stats.fert=(h.stats.fert||0)+1,H.grown=Math.min(k.grow,H.grown+k.grow*.25);let ie=D.pos.clone();ie.y+=.3,t.sparkle(ie,20,12120202,.3),n.sfx("bloom",.6,1.2),T(2),m()},l.tapThing=D=>{n.sfx("click",.35),D==="orders"?a.orders():D==="mail"&&a.daily()};let ve=D=>{delete h.weeds[D.id],delete h.wilt[D.id],delete h.rare[D.id],delete h.plants[D.id],P(D),t.dust(D.pos,14),n.sfx("plant",.8,.8),$(),a.closeCards(),S(),m()},be={water:2.1,plant:1.9,collect:1.1,admire:1.6,remove:1.7,weed:1.5,prune:1.2},Ae=()=>{let D=l.tasks.shift();if(!D){l.cur=null;return}if(D.kind!=="plant"&&!h.plants[D.spot.id]||D.kind==="collect"&&!h.plants[D.spot.id].ready&&!h.rare[D.spot.id]||D.kind==="weed"&&!h.weeds[D.spot.id]||D.kind==="prune"&&!h.wilt[D.spot.id])return Ae();D.path=b(D.spot.stand.x,D.spot.stand.z),D.phase="walk",l.cur=D},De=0,Pe=0,tt=0,K=0,Ot=0;return s.onStep=()=>{n.sfx("step",.3,(Ot^=1)?1:1.12)},l.update=D=>{l.time+=D;let H=s.group.position,k=l.cur;if(!k)s.state==="walk"&&s.stop(),s.speed=0,Ae();else if(k.phase==="walk"){let re=k.path[0];if(!re)s.speed=0,k.kind==="move"?(s.stop(),l.cur=null):(k.phase="act",k.t=0,k.done=!1,s.faceTo(k.spot.pos.x+(k.spot.type==="arch"?-.75:0),k.spot.pos.z),s.play(k.kind==="remove"||k.kind==="weed"?"plant":k.kind==="prune"?"collect":k.kind,be[k.kind],{high:k.spot.high||k.spot.type==="arch"&&k.kind==="water"&&!1}),k.kind==="water"&&n.sfx("water"));else{let ue=re[0]-H.x,Re=re[1]-H.z,ne=Math.hypot(ue,Re),Ue=ne;for(let Se=1;Se<k.path.length;Se++)Ue+=Math.hypot(k.path[Se][0]-k.path[Se-1][0],k.path[Se][1]-k.path[Se-1][1]);let We=$e(Ue*2.2+.7,.9,Ue>6?3.5:2.5);s.speed+=(We-s.speed)*Math.min(1,D*6),s.state="walk";let Ne=s.speed*D;ne<=Ne?(H.x=re[0],H.z=re[1],k.path.shift()):(H.x+=ue/ne*Ne,H.z+=Re/ne*Ne,s.targetHeading=Math.atan2(ue,Re))}}else if(k.phase==="act"){k.t+=D;let re=k.t/be[k.kind],ue=k.spot.pos;k.kind==="water"?(re>.26&&re<.84&&t.water(s.spoutWorld,k.spot.type==="arch"?new O(ue.x-.75,.1,ue.z):ue,3),!k.done&&re>.5&&(k.done=!0,q(k.spot))):k.kind==="plant"?!k.done&&re>.55&&(k.done=!0,j(k)):k.kind==="remove"?!k.done&&re>.55&&(k.done=!0,ve(k.spot)):k.kind==="collect"?!k.done&&re>.45&&(k.done=!0,W(k.spot)):k.kind==="weed"?!k.done&&re>.55&&(k.done=!0,X(k.spot)):k.kind==="prune"?!k.done&&re>.5&&(k.done=!0,se(k.spot)):k.kind==="admire"&&!k.done&&re>.4&&(k.done=!0,t.hearts(new O(H.x,1.7,H.z),4)),re>=1&&(l.cur=null)}H.y=Ac(H.x,H.z);let ie=h.settings.time;if(ie==="auto")h.hour=(h.hour+D*(h.hour>6&&h.hour<19?13/540:11/150))%24;else if(ie!=="fixo"){let ue={dia:10,tarde:17.3,noite:22}[ie]-h.hour;ue>12&&(ue-=24),ue<-12&&(ue+=24),h.hour=(h.hour+ue*Math.min(1,D*.8)+24)%24}if(l.rainT-=D,l.rainT<0&&l.rainT>-50){if(l.rainOn||(l.rainOn=!0,l.count()>0&&a.toast("Uma chuvinha! As plantas agradecem.","info")),l.raining=Math.min(1,l.raining+D*.3),l.raining>.6)for(let re in h.plants)h.plants[re].wet=Math.max(h.plants[re].wet,v()*.9)}else l.raining=Math.max(0,l.raining-D*.25),l.rainT<=-50&&(l.rainT=420+Math.random()*300,l.rainOn=!1);t.rain=l.raining;let ce=y("sprinkler"),U=v(),L=h.stats.blooms===0?8:1,J=h.stats.collected===0?12:1,oe=t.butterflyTargets;oe.length=0;let ae=0;for(let re in h.plants){let ue=h.plants[re],Re=dt[ue.sp],ne=e.spots[re],Ue=u[re],We=Re.thirst??1;ce&&(ue.wet=U);let Ne=We===0||ue.wet>0;We>0&&(ue.wet=Math.max(0,ue.wet-D*We)),Ne&&(ue.grown<Re.grow?ue.grown=Math.min(Re.grow,ue.grown+D*L*l.sys.growMul(re,Re)):ue.ready||(ue.giftT+=D*J,ue.giftT>=Re.every&&(ue.ready=!0,n.sfx("pop",.35,1.3))));let Se=C(ue);if(!Ue.mesh||Se!==Ue.stage){let ge=Ue.mesh&&Se>Ue.stage;if(P(ne),ge){u[re].pop=0;let Fe=ne.pos.clone();Fe.y+=u[re].h*.6,Se===4?(n.sfx("bloom"),t.sparkle(Fe,26,16773280,.4*ne.scale),h.stats.blooms++,h.album.includes(ue.sp)||(h.album.push(ue.sp),a.toast(`Nova flor no \xE1lbum: ${Re.name}`,"good")),T(8),!l.cur&&s.state==="idle"&&s.play("cheer",1.4),m()):(n.sfx("pop",.6),t.sparkle(Fe,8,14221232,.25)),Pe=0}}Ue.pop=Math.min(1,Ue.pop+D*1.6);let Ee=ue.grown/Re.grow,Xe=[0,0,.12,.45,1][Se],at=[0,.12,.45,1,1][Se],bt=at>Xe?(Ee-Xe)/(at-Xe):1,je=ne.scale*ze(.82,1,bt)*(.55+.45*Qu(Ue.pop));Ue.mesh.scale.setScalar(je);let de=Ne?0:.85;Ue.droop+=(de-Ue.droop)*Math.min(1,D*1.5),Ue.mesh.material.userData.u.uDroop.value=Ue.droop,ne.soil&&ne.soil.material.color.copy(g).lerp(x,We===0?1:$e(ue.wet/U*2,0,1));let G=h.rare[re]?"seed":ue.ready?"gift":h.wilt[re]?"prune":h.weeds[re]?"weed":Ne?null:"water",pe=Ue.bubble;w(re,!!h.weeds[re]),Ue.weed&&Ue.weed.scale.setScalar(Math.min(1,Ue.weed.scale.x+D*2)*1),G?(pe.visible=!0,pe.material=f[G],pe.position.copy(ne.pos),pe.position.y+=Math.max(.5,Ue.h+.25)+Math.sin(l.time*2.4+ne.id)*.04,ne.type==="arch"&&(pe.position.y=2.6)):pe.visible=!1,Se===4&&(ae++,!Re.tree&&!Re.climber&&oe.length<24&&oe.push({x:ne.pos.x,y:ne.pos.y+Ue.h*.85,z:ne.pos.z}),Re.petal&&Math.random()<D*1.6&&t.petalFall(new O(ne.pos.x,ne.pos.y+3.2,ne.pos.z),Re.petal,1.6))}for(let re of e.spots){h.plants[re.id]||(u[re.id].bubble.visible=!1,u[re.id].weed&&w(re.id,!1),re.soil&&!re.pending&&re.soil.material.color.lerp(g,D));let ue=u[re.id].plus;ue.visible&&(ue.material.opacity=.7+.2*Math.sin(l.time*2))}t.butterflyCount=Math.min(9,Math.floor(ae/2)+(ae>0?1:0));let he=B.orders,Te=B.mail,xe=Math.sin(l.time*2.4)*.04;if(he&&(he.visible=l.sys.anyDeliverable(),he.position.y=e.things.orders.top+.25+xe),Te){let re=l.sys.dailyReady();Te.visible=re,Te.position.y=e.things.mail.top+.25+xe,e.mailFlag&&(e.mailFlag.rotation.x+=((re?0:-1.5)-e.mailFlag.rotation.x)*Math.min(1,D*4))}l.sys.tick(D),Pe-=D,Pe<0&&(Pe=1,S()),De+=D,De>10&&(De=0,m())},l.init=()=>{for(let H of Qn)e.setZone(H.id,h.zones.includes(H.id));for(let H of Xs)e.setDecor(H.id,h.decor.includes(H.id));let D=$e((Date.now()-(h.last||Date.now()))/1e3,0,48*3600);for(let H in h.plants){let k=h.plants[H],ie=dt[k.sp];if(!ie||!e.spots[H]){delete h.plants[H];continue}let ce=ie.thirst??1,U=ce===0||y("sprinkler")?D:Math.min(D,k.wet/ce),L=Math.min(U,Math.max(0,ie.grow-k.grown));k.grown+=L,k.grown>=ie.grow&&(h.album.includes(k.sp)||h.album.push(k.sp),k.giftT+=U-L,k.giftT>=ie.every&&(k.ready=!0,k.giftT=ie.every)),ce>0&&(k.wet=Math.max(0,k.wet-D*ce)),P(e.spots[H])}l.away=D,l.sys.init(D),$(),a.hud(),S()},l.zoneAt=Nr,l.refreshMarkers=$,l.rebuild=P,l.V=u,mf(l,{S:h,world:e,fx:t,audio:n,gardener:s,ui:a,scene:i,addCoins:Y,addXp:T,level:p,save:m}),l}var rt=i=>document.querySelector(i),Vr=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n},ht=i=>`<svg class="ic" aria-hidden="true"><use href="#i-${i}"/></svg>`,zv={bed:"canteiro",pot:"vaso",hang:"vaso suspenso",window:"jardineira",pond:"lago",tree:"\xE1rvore",arch:"arco"},_f=i=>{if(i>=3600){let e=Math.floor(i/3600),t=Math.round(i%3600/60/5)*5;return t>=60?`${e+1} h`:t?`${e} h ${t}`:`${e} h`}return i>=60?`${Math.ceil(i/60)} min`:`${Math.max(1,Math.ceil(i))} s`};function yf({project:i,thumbs:e,audio:t}){let n={game:null,open:null},s=rt("#coins"),r=rt("#lvl"),o=rt("#lvlbar"),a=rt("#beauty"),c=rt("#toasts"),l=rt("#floats"),h=rt("#tags"),u=rt("#sheet"),d=rt("#card"),f=rt("#modal"),g=rt("#quest"),x=null,m=null,p=null,y=()=>t.sfx("click",.35);n.hud=()=>{let T=n.game,S=T.state,b=T.level();p!==null&&S.coins!==p&&(s.parentElement.classList.remove("bump"),s.offsetWidth,s.parentElement.classList.add("bump")),p=S.coins,s.textContent=S.coins,r.textContent=b;let E=Hr[b-1]??0,A=Hr[b]??E+1;o.style.width=Math.round(Math.min(1,(S.xp-E)/(A-E))*100)+"%",a.textContent=T.beauty();let F=T.sys.season(),$=rt("#season");$.dataset.k!==F.id+":"+F.day&&($.dataset.k=F.id+":"+F.day,$.innerHTML=`${ht(F.icon)}<span>${F.name}</span>`,$.title=`${F.name}, dia ${F.day} de ${F.of}`),n.open==="picker"&&C()},n.toast=(T,S="info")=>{let b=Vr("div","toast "+S,T);for(c.appendChild(b);c.children.length>3;)c.firstChild.remove();setTimeout(()=>b.classList.add("out"),3400),setTimeout(()=>b.remove(),3900)},n.floatText=(T,S,b)=>{let E=i(T);if(!E.vis)return;let A=Vr("div","float "+b,(b==="coin"?ht("coin"):"")+S);A.style.left=E.x+"px",A.style.top=E.y+"px",l.appendChild(A),setTimeout(()=>A.remove(),1500)},n.quest=T=>{if(!T){g.innerHTML='<div class="q-t">Seu jardim est\xE1 completo. Aproveite o sossego!</div>';return}let S=T.text+T.val;g.dataset.k!==S&&(g.dataset.k=S,g.innerHTML=`<div class="q-h">Pr\xF3ximo passo</div><div class="q-t">${T.text}</div><div class="q-r"><div class="bar"><i style="width:${Math.round(T.val/T.goal*100)}%"></i></div><span>${T.val}/${T.goal}</span><b>${ht("coin")}${T.reward}</b></div>`)};let v=null,M=null,C=()=>{if(!v)return;let T=n.game,S=T.level();u.querySelectorAll(".seed").forEach(b=>{let E=gn.find(A=>A.id===b.dataset.id);b.classList.toggle("poor",T.state.coins<E.price&&E.lvl<=S)})};n.picker=(T,S)=>{n.closeCards(),v=T,M=S,n.open="picker";let b=n.game.level();u.innerHTML=`<div class="sheet-h"><div><b>O que vamos plantar?</b><span>Plantas para ${zv[T.type]}</span></div><button class="x" aria-label="Fechar">${ht("x")}</button></div><div class="seeds"></div>`;let E=u.querySelector(".seeds");for(let{sp:F,locked:$}of S){let q=Vr("button","seed"+($?" locked":""));q.dataset.id=F.id,q.innerHTML=`<div class="th"><img alt="" src="${e[F.id]||""}">${$?`<em>N\xEDvel ${F.lvl}</em>`:""}</div><b>${F.name}</b><small>${F.info}</small><div class="meta"><span class="price">${ht("coin")}${F.price}</span><span>${ht("clock")}${_f(F.grow)}</span></div>`,q.onclick=()=>{n.game.choose(T,F.id)&&n.closeCards()},E.appendChild(q)}u.querySelector(".x").onclick=()=>{y(),n.closeCards()},u.classList.add("on"),C(),E.querySelector(".seed:not(.locked)")&&(E.scrollLeft=0)},n.plantCard=(T,S,b)=>{n.closeCards(),m=T,n.open="card";let E=()=>{let A=S();if(!A){n.closeCards();return}let F=A.stage===4?A.ready?"Presente pronto!":"Em flor":gf[A.stage];d.innerHTML=`<img class="c-th" alt="" src="${e[A.sp.id]||""}"><div class="c-b"><div class="c-n"><b>${A.sp.name}</b><span>${F}</span></div>
        <div class="c-row">${ht("leaf")}<div class="bar g"><i style="width:${Math.round(A.grow*100)}%"></i></div><small>${A.stage===4?"adulta":"faltam "+_f(A.left)}</small></div>
        <div class="c-row">${ht("drop")}<div class="bar w"><i style="width:${Math.round(A.water*100)}%"></i></div><small>${A.noWater?"vive na \xE1gua":A.water<=0?"com sede!":"regada"}</small></div>
        ${A.stage===4?`<div class="c-row">${ht("coin")}<div class="bar c"><i style="width:${Math.round((A.ready?1:A.gift)*100)}%"></i></div><small>pr\xF3ximo presente</small></div>`:""}
        ${A.inSeason?`<div class="c-note">${ht("flower")}Est\xE1 na esta\xE7\xE3o dela: cresce e rende mais.</div>`:""}
        <div class="c-act">${A.noWater?"":`<button class="btn" data-a="water">${ht("drop")}Regar</button>`}${A.stage<4&&A.adubo>0?`<button class="btn honey" data-a="fert">Adubar (${A.adubo})</button>`:""}<button class="btn ghost" data-a="remove">Retirar</button><button class="btn ghost" data-a="close">Fechar</button></div></div>`,d.querySelectorAll("button").forEach($=>$.onclick=()=>{y();let q=$.dataset.a;q==="remove"?$.dataset.sure?(b.remove(),n.closeCards()):($.dataset.sure=1,$.textContent="Tem certeza?",$.classList.add("danger"),x=null):q==="fert"?(b.fert(),E()):(q==="water"&&b.water(),n.closeCards())})};E(),x=E,d.classList.add("on")},n.closeCards=()=>{u.classList.remove("on"),d.classList.remove("on"),v=null,x=null,m=null,(n.open==="picker"||n.open==="card")&&(n.open=null)};let R=(T,S="")=>{n.closeCards(),f.innerHTML=`<div class="panel ${S}">${T}</div>`,f.classList.add("on"),n.open="modal",f.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>{y(),P()})},P=()=>{f.classList.remove("on"),n.open==="modal"&&(n.open=null)};f.addEventListener("pointerdown",T=>{T.target===f&&P()}),n.closeModal=P,n.zoneOffer=(T,S,b)=>{R(`<h2>${T.name}</h2><p>${T.desc||""}</p><div class="offer"><span class="bigprice">${ht("coin")}${T.cost}</span>${S?"":`<small>Voc\xEA tem ${n.game.state.coins}. Recolha mais presentes das flores.</small>`}</div>
      <div class="row"><button class="btn ghost" data-close>Agora n\xE3o</button><button class="btn big" id="buyz" ${S?"":"disabled"}>Abrir esta \xE1rea</button></div>`,"small"),rt("#buyz").onclick=()=>{P(),b()}},n.levelUp=(T,S)=>{let b=S.map(E=>`<div class="unl"><img alt="" src="${e[E.id]||""}"><span>${E.name}</span></div>`).join("");setTimeout(()=>R(`<div class="lv-badge">${T}</div><h2>N\xEDvel ${T}!</h2><p>${S.length?"Novas plantas chegaram \xE0 sua cole\xE7\xE3o de sementes:":"Voc\xEA est\xE1 cada vez melhor com as plantas."}</p><div class="unls">${b}</div><div class="row"><button class="btn big" data-close>Que lindo!</button></div>`,"small center"),900)};let z=(T="decor")=>{let S=n.game,b=S.state,E=Xs.map(F=>{let $=b.decor.includes(F.id);return`<div class="item ${$?"own":""}"><div><b>${F.name}</b><small>${F.desc}</small></div>${$?'<span class="tagok">No jardim</span>':`<button class="btn" data-buy="d:${F.id}" ${b.coins>=F.price?"":"disabled"}>${ht("coin")}${F.price}</button>`}</div>`}).join(""),A=Ic.map(F=>{let $=b.upg.includes(F.id),q=F.need&&!b.upg.includes(F.need);return`<div class="item ${$?"own":""}"><div><b>${F.name}</b><small>${F.desc}</small></div>${$?'<span class="tagok">Comprado</span>':q?'<span class="taglock">Depois do anterior</span>':`<button class="btn" data-buy="u:${F.id}" ${b.coins>=F.price?"":"disabled"}>${ht("coin")}${F.price}</button>`}</div>`}).join("");R(`<div class="p-h"><h2>Lojinha do jardim</h2><span class="wallet">${ht("coin")}${b.coins}</span><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <div class="tabs"><button class="${T==="decor"?"on":""}" data-tab="decor">Decora\xE7\xE3o</button><button class="${T==="upg"?"on":""}" data-tab="upg">Melhorias</button></div>
      <div class="list">${T==="decor"?E:A}</div><p class="hint">Sementes e mudas voc\xEA escolhe tocando num lugar vazio do jardim.</p>`),f.querySelectorAll("[data-tab]").forEach(F=>F.onclick=()=>{y(),z(F.dataset.tab)}),f.querySelectorAll("[data-buy]").forEach(F=>F.onclick=()=>{let[$,q]=F.dataset.buy.split(":");$==="d"?S.buyDecor(q):S.buyUpgrade(q),z(T)})},_=(T="flores")=>{let S=n.game,b=S.state,E=S.level(),A=[["flores","Flores"],["raras","Raridades"],["bichos","Visitantes"],["conq","Conquistas"],["diario","Di\xE1rio"]].filter(([q])=>(q!=="raras"||n.rareTab)&&(q!=="bichos"||n.critterTab)),F="",$="";if(T==="flores"){let q=gn.filter(j=>!j.hybrid);$=`${q.filter(j=>b.album.includes(j.id)).length}/${q.length}`,F=`<p class="hint">Cada esp\xE9cie entra no \xE1lbum quando floresce pela primeira vez.</p><div class="albgrid">${q.map(j=>{let W=b.album.includes(j.id);return`<div class="alb ${W?"got":""}"><img alt="" src="${e[j.id]||""}"><b>${W?j.name:j.lvl>E?"N\xEDvel "+j.lvl:j.name}</b>${j.season!=null?`<em>${["primavera","ver\xE3o","outono","inverno"][j.season]}</em>`:""}</div>`}).join("")}</div>`}else if(T==="raras"&&n.rareTab){let q=n.rareTab();$=q.count,F=q.html}else if(T==="bichos"&&n.critterTab){let q=n.critterTab();$=q.count,F=q.html}else T==="conq"?($=`${qs.filter(W=>b.ach[W.id]).length}/${qs.length}`,F=`<div class="list">${qs.filter((W,X)=>b.ach[W.id]||!qs.slice(0,X).some(se=>se.id.replace(/\d+$/,"")===W.id.replace(/\d+$/,"")&&!b.ach[se.id])).map(W=>{let X=Math.min(W.goal,W.v(b,S)),se=!!b.ach[W.id];return`<div class="item ach ${se?"own":""}"><div class="a-ic">${ht(se?"trophy":"trophy-off")}</div><div class="a-b"><b>${W.name}</b><small>${W.desc}</small><div class="q-r"><div class="bar ${se?"c":""}"><i style="width:${Math.round(X/W.goal*100)}%"></i></div><span>${X}/${W.goal}</span><b>${ht("coin")}${W.r}</b></div></div></div>`}).join("")}</div>`):($=`dia ${Math.floor((Date.now()-b.t0)/864e5)+1}`,F=b.log.length?`<div class="diary">${b.log.slice().reverse().map(q=>`<div><span>Dia ${q.d}</span>${q.t}</div>`).join("")}</div>`:'<p class="hint">O di\xE1rio da Eliane se escreve sozinho, conforme o jardim cresce.</p>');R(`<div class="p-h"><h2>${T==="diario"?"Di\xE1rio da Eliane":"\xC1lbum do jardim"}</h2><span class="wallet">${$}</span><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <div class="tabs">${A.map(([q,j])=>`<button class="${T===q?"on":""}" data-tab="${q}">${j}</button>`).join("")}</div>${F}`,"wide"),f.querySelectorAll("[data-tab]").forEach(q=>q.onclick=()=>{y(),_(q.dataset.tab)})};n.album=_,n.orders=()=>{let T=n.game,S=T.state,b=T.sys,E=Object.keys(S.basket).filter(F=>S.basket[F]>0&&dt[F]).sort((F,$)=>S.basket[$]-S.basket[F]),A=S.orders.map(F=>{let $=b.canDeliver(F);return`<div class="order ${$?"ok":""}"><div class="o-h"><b>${F.who}</b><span>${F.why}</span></div>
        <div class="o-items">${F.items.map(q=>{let j=Math.min(q.n,S.basket[q.sp]||0);return`<div class="o-it ${j>=q.n?"full":""}"><img alt="" src="${e[q.sp]||""}"><b>${j}/${q.n}</b><small>${dt[q.sp].name}</small></div>`}).join("")}</div>
        <div class="o-f"><span class="rew">${ht("coin")}${F.coins}${F.adubo?` <i>+ ${F.adubo} adubo</i>`:""}</span><button class="btn ghost" data-no="${F.id}">Dispensar</button><button class="btn" data-go="${F.id}" ${$?"":"disabled"}>Entregar</button></div></div>`}).join("");R(`<div class="p-h"><h2>Banquinha de flores</h2><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <p>Cada presente recolhido p\xF5e uma flor na cesta. Junte as que os vizinhos pedem e entregue.</p>
      ${A?`<div class="orders">${A}</div>`:`<p class="hint empty">${S.stats.collected?"Nenhum pedido agora. Os vizinhos passam por aqui de tempos em tempos.":"Recolha o primeiro presente de uma flor e os vizinhos come\xE7am a aparecer."}</p>`}
      <div class="basket"><b>Sua cesta</b>${E.length?E.map(F=>`<span class="chip"><img alt="" src="${e[F]||""}">${S.basket[F]}</span>`).join(""):"<small>vazia por enquanto</small>"}<span class="chip adubo" title="Adubo">${ht("leaf")}${S.adubo} adubo</span></div>`),f.querySelectorAll("[data-go]").forEach(F=>F.onclick=()=>{b.deliver(+F.dataset.go)&&(n.hud(),n.orders())}),f.querySelectorAll("[data-no]").forEach(F=>F.onclick=()=>{y(),F.dataset.sure?(b.dismiss(+F.dataset.no),n.orders()):(F.dataset.sure=1,F.textContent="Dispensar mesmo?")})},n.daily=()=>{let T=n.game,S=T.state,b=T.sys,E=b.dailyReady(),A=E?S.daily.streak%7:(S.daily.streak-1)%7,F=Lc.map((q,j)=>`<div class="day ${j<A||!E&&j===A?"done":""} ${E&&j===A?"now":""} ${q.big?"big":""}"><small>Dia ${j+1}</small>${q.coins?ht("coin"):ht("leaf")}<b>${q.coins?"\xD7"+Math.round(q.coins*(1+T.level()*.2)):q.adubo+" adubo"}</b></div>`).join("");R(`<h2>Caixa de correio</h2><p>${E?"Tem uma surpresa esperando por voc\xEA hoje!":"A surpresa de hoje j\xE1 foi aberta. Amanh\xE3 tem mais."}</p><div class="days">${F}</div>
      <p class="hint">Voc\xEA j\xE1 abriu ${S.daily.streak} ${S.daily.streak===1?"surpresa":"surpresas"}. A cada sete visitas vem um presente grande, sem pressa.</p>
      <div class="row"><button class="btn ghost" data-close>${E?"Depois":"Fechar"}</button>${E?'<button class="btn big" id="d-open">Abrir a surpresa</button>':""}</div>`,"small center");let $=rt("#d-open");$&&($.onclick=()=>{let q=b.claimDaily();q&&(n.toast(`Surpresa do dia ${q.streak}: ${q.coins?"+"+q.coins+" moedas":""}${q.coins&&q.adubo?" e ":""}${q.adubo?"+"+q.adubo+" adubo":""}`,"good"),n.hud(),n.daily())})},n.achievement=T=>{let S=Vr("div","toast ach",`${ht("trophy")}<span><small>Conquista</small><b>${T.name}</b></span><i>${ht("coin")}${T.r}</i>`);for(c.appendChild(S);c.children.length>3;)c.firstChild.remove();setTimeout(()=>S.classList.add("out"),4600),setTimeout(()=>S.remove(),5100)};let w=()=>{let T=n.game.state.settings,S=(E,A,F)=>`<option value="${E}" ${F===E?"selected":""}>${A}</option>`;R(`<div class="p-h"><h2>Ajustes</h2><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <label class="set" for="s-music"><span>M\xFAsica</span><input id="s-music" type="range" min="0" max="1" step="0.05" value="${T.music}"></label>
      <label class="set" for="s-sfx"><span>Sons do jardim</span><input id="s-sfx" type="range" min="0" max="1" step="0.05" value="${T.sfx}"></label>
      <label class="set" for="s-time"><span>Hora do dia</span><select id="s-time">${S("auto","O dia passa sozinho",T.time)}${S("dia","Sempre manh\xE3",T.time)}${S("tarde","Sempre entardecer",T.time)}${S("noite","Sempre noite",T.time)}</select></label>
      <label class="set" for="s-q"><span>Qualidade da imagem</span><select id="s-q">${S("auto","Autom\xE1tica",T.quality)}${S("alta","Alta",T.quality)}${S("media","M\xE9dia",T.quality)}${S("baixa","Leve (para aparelhos simples)",T.quality)}</select></label>
      <div class="howto"><b>Como jogar</b><ul><li>Toque num <i>+</i> para escolher uma planta.</li><li>Toque numa planta com a gotinha para regar.</li><li>Toque na flor com a moedinha para recolher o presente.</li><li>Arraste para girar a vista; use dois dedos ou a rodinha para aproximar.</li></ul></div>
      <div class="row"><button class="btn ghost danger" id="s-reset">Recome\xE7ar o jardim</button><button class="btn" data-close>Pronto</button></div>`,"small");let b=()=>{T.music=+rt("#s-music").value,T.sfx=+rt("#s-sfx").value,T.time=rt("#s-time").value;let E=rt("#s-q").value;E!==T.quality&&(T.quality=E,n.onQuality&&n.onQuality(E)),t.setVolumes(T.music,T.sfx),n.game.save()};["#s-music","#s-sfx","#s-time","#s-q"].forEach(E=>rt(E).oninput=rt(E).onchange=b),rt("#s-reset").onclick=E=>{let A=E.currentTarget;A.dataset.sure?(n.game.reset(),n.onReset&&n.onReset()):(A.dataset.sure=1,A.textContent="Apagar tudo e recome\xE7ar?")}},B=()=>{R(`<div class="p-h"><h2>Instalar no computador</h2><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <p>Jogue sem internet, com o jogo guardado no seu computador.</p>
      <div class="list">
        <div class="item"><div><b>Windows</b><small>Instalador com atalho na \xE1rea de trabalho e no menu Iniciar. Baixa um .zip: abra e d\xEA dois cliques em \u201CInstalar Jardim do Sossego\u201D. Come\xE7a um jardim novo.</small></div><button class="btn" data-dl="win">Baixar</button></div>
        <div class="item"><div><b>Mac, Linux ou sem instalar</b><small>Um arquivo s\xF3: dois cliques e o jogo abre no navegador, levando o seu jardim de agora.</small></div><button class="btn" data-dl="html">Baixar</button></div>
      </div><p class="hint" id="dl-msg" role="status">O download pede a sua confirma\xE7\xE3o antes de salvar.</p>`,"small");let T=S=>{let b=rt("#dl-msg");b&&(b.textContent=S)};f.querySelectorAll("[data-dl]").forEach(S=>S.onclick=async()=>{y();let b=f.querySelectorAll("[data-dl]");b.forEach(E=>E.disabled=!0),T("Preparando o arquivo\u2026");try{let E=window.claude&&window.claude.use?await window.claude.use("downloads"):null;if(!E){T("Por aqui n\xE3o d\xE1 para baixar. Abra o jogo pelo link, no navegador do computador.");return}let A,F;if(S.dataset.dl==="win"){let $=await fetch("instalar/Jardim-do-Sossego-Windows.zip");if(!$.ok)throw new Error("fetch");A=await $.blob(),F="Jardim-do-Sossego-Windows.zip"}else{let $=await fetch("instalar/Jardim-do-Sossego.html");if(!$.ok)throw new Error("fetch");let q=await $.text();n.game.save();let j="window.__SAVE="+JSON.stringify(n.game.state).replace(/</g,"\\u003c")+";";A=new Blob([q.replace("/*__SAVE__*/",()=>j)]),F="Jardim-do-Sossego.html"}await E.save({filename:F,data:A}),T(S.dataset.dl==="win"?"Salvo! Abra o .zip e d\xEA dois cliques no instalador.":"Salvo! Dois cliques no arquivo e o jardim abre.")}catch(E){T(E&&E.code==="declined"?"Tudo bem, fica para depois.":E&&E.code==="rate_limited"?"J\xE1 existe um pedido de download aberto. Confirme ou feche-o primeiro.":"N\xE3o foi poss\xEDvel baixar agora. Tente de novo em instantes.")}finally{b.forEach(E=>E.disabled=!1)}})},V=()=>{let T=/iPhone|iPad|iPod/i.test(navigator.userAgent),S=matchMedia("(display-mode: standalone)").matches||navigator.standalone,b=/Windows/i.test(navigator.userAgent);R(`<div class="p-h"><h2>Instalar o jogo</h2><button class="x" data-close aria-label="Fechar">${ht("x")}</button></div>
      <p>${S?"O jogo j\xE1 est\xE1 instalado neste aparelho.":"Instalado, o jogo ganha um \xEDcone pr\xF3prio, funciona sem internet e recebe as novidades sozinho."}</p>
      <div class="list">
        ${S?"":`<div class="item"><div><b>Neste aparelho</b><small id="pwa-how">${T?"No iPhone ou iPad: toque em Compartilhar e depois em \u201CAdicionar \xE0 Tela de In\xEDcio\u201D.":"Instala como aplicativo, no celular ou no computador."}</small></div>${T?"":'<button class="btn" id="pwa-go">Instalar</button>'}</div>`}
        ${b&&!S?'<div class="item"><div><b>Instalador de Windows</b><small>Cria o atalho com a flor na \xE1rea de trabalho e no menu Iniciar.</small></div><a class="btn" href="instalar/Instalar-Jardim-do-Sossego.exe" download>Baixar</a></div>':""}
      </div><p class="hint">O seu jardim fica guardado neste aparelho.</p>`,"small");let E=rt("#pwa-go");E&&(E.onclick=async()=>{y();let A=window.__pwaPrompt;if(A){A.prompt();try{await A.userChoice}catch{}window.__pwaPrompt=null,P()}else rt("#pwa-how").textContent="Abra o menu do navegador (os tr\xEAs pontinhos) e escolha \u201CInstalar aplicativo\u201D ou \u201CAdicionar \xE0 tela inicial\u201D."})};window.__WEB?rt("#b-install").onclick=()=>{y(),V()}:window.__APP||!window.__INSTALL?rt("#b-install").hidden=!0:rt("#b-install").onclick=()=>{y(),B()},rt("#b-shop").onclick=()=>{y(),z()},rt("#b-album").onclick=()=>{y(),_()},rt("#season").onclick=()=>{y();let T=n.game.sys.season();n.seasonInfo?n.seasonInfo():n.toast(`${T.name}, dia ${T.day} de ${T.of}. ${T.line}`,"info")},rt("#b-set").onclick=()=>{y(),w()},rt("#b-photo").onclick=()=>{y(),document.body.classList.add("photo"),n.closeCards()},rt("#photo-exit").onclick=()=>document.body.classList.remove("photo");let Y={};return n.initTags=T=>{for(let S of T){if(!S.cost)continue;let b=Vr("button","ztag",`${ht("lock")}<small>${ht("coin")}${S.cost}</small>`);b.title=S.name,b.setAttribute("aria-label",`${S.name}: ${S.cost} moedas`),b.onclick=()=>{y(),n.game.offerZone(S.id)},h.appendChild(b),Y[S.id]=b}},n.frame=(T,S)=>{let b=n.game.state;for(let E of T){let A=Y[E.id];if(!A)continue;if(b.zones.includes(E.id)){A.hidden=!0;continue}let F=i(new S(E.tag[0],E.id===1?2.25:1.75,E.tag[1]));A.hidden=!F.vis,F.vis&&(A.style.transform=`translate(-50%,-100%) translate(${F.x.toFixed(1)}px,${F.y.toFixed(1)}px)`,A.classList.toggle("can",b.coins>=E.cost))}x&&(n._ct=(n._ct||0)+1)%20===0&&x()},n.focus=()=>{},n}var xi=O,bo=i=>document.querySelector(i),Di=new URLSearchParams(location.search);async function Fv(i,e){let t={},s=new Vt(168,168,{samples:4});s.texture.colorSpace=pt;let r=new dr;r.add(new Os(16777215,12109984,1.5));let o=new Bs(16774368,1.7);o.position.set(2,4,3),r.add(o);let a=new Kt(26,1,.05,60),c=new Uint8Array(28224*4),l=document.createElement("canvas");l.width=l.height=168;let h=l.getContext("2d"),u=Dn.uDay.value;Dn.uDay.value=.5;for(let d=0;d<gn.length;d++){let f=gn[d],g=_o(f.id,11,4),x=yo(f.id);x.userData.u.uSway.value=0;let m=new ke(g,x);r.add(m);let p=g.boundingBox,y=p.getCenter(new xi),v=p.getSize(new xi),M=Math.max(v.x,v.y,v.z)*.62+.03,C=M/Math.tan(13*Math.PI/180);a.position.set(y.x+C*.25,y.y+C*.5,y.z+C*.83),a.lookAt(y),a.near=C*.1,a.far=C*4,a.updateProjectionMatrix(),i.setRenderTarget(s),i.setClearColor(0,0),i.clear(),i.render(r,a),i.readRenderTargetPixels(s,0,0,168,168,c),i.setRenderTarget(null);let R=h.createImageData(168,168);for(let P=0;P<168;P++)R.data.set(c.subarray((167-P)*168*4,(168-P)*168*4),P*168*4);h.putImageData(R,0,0),t[f.id]=l.toDataURL("image/png"),r.remove(m),g.dispose(),x.dispose(),e((d+1)/gn.length),d%3===2&&await new Promise(P=>setTimeout(P,0))}return Dn.uDay.value=u,s.dispose(),t}var Dc=null;if(window.__WEB&&"serviceWorker"in navigator){let i=!!navigator.serviceWorker.controller;navigator.serviceWorker.register("sw.js").then(e=>{setInterval(()=>e.update().catch(()=>{}),1800*1e3)}).catch(()=>{}),navigator.serviceWorker.addEventListener("controllerchange",()=>{i&&Dc&&Dc()}),addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.__pwaPrompt=e})}async function Ov(){let i=xf(),e=Di.get("demo");e&&(i.zones=[0,1,2,3,4,5,6],i.decor=["lanternas","banco","bebedouro","casinha","carrinho","anao"],i.coins=999,i.xp=3e3,i.settings.time="fixo",i.hour=+(Di.get("h")||16.8));let t=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&Math.min(screen.width,screen.height)<820,n=Di.get("q")||(i.settings.quality!=="auto"?i.settings.quality:t?"media":"alta"),s=bo("#stage"),r=ju(s,Cr[n]),o=new dr,a=new Kt(32,1,.3,900),c=ef(o,r.renderer,Cr.alta),l=of(o,Cr[n],new Set(i.zones)),h=cf();h.group.position.set(.3,0,1.6),h.heading=h.targetHeading=.2,o.add(h.group);let u=hf(o),d=ff("audio/");d.setVolumes(i.settings.music,i.settings.sfx);let f=df(l.blocked);r.setup(o,a);let g=D=>{let H=c.sun.shadow;H.mapSize.x!==D.shadows&&(H.mapSize.set(D.shadows,D.shadows),H.map&&(H.map.dispose(),H.map=null))},x=D=>{n=D;let H=Cr[D];r.setQuality(H),l.setGrass(H.grass),g(H)},m=()=>{let D=s.clientWidth||innerWidth,H=s.clientHeight||innerHeight;a.aspect=D/H,a.fov=D<H?44:32,a.updateProjectionMatrix(),r.resize(D,H)};r.w=innerWidth,r.h=innerHeight,x(n),m(),addEventListener("resize",m);let p={yaw:0,pitch:.6,dist:12.5,target:new xi(0,.9,.5),focusT:0,focus:new xi},y=new xi,v=D=>(y.copy(D).project(a),{x:(y.x*.5+.5)*r.w,y:(-y.y*.5+.5)*r.h,vis:y.z<1&&Math.abs(y.x)<1.15&&Math.abs(y.y)<1.15}),M=bo("#load i"),C=bo("#start");r.render(o,a);let R=await Fv(r.renderer,D=>{M.style.width=Math.round(D*100)+"%"}),P=yf({project:v,thumbs:R,audio:d}),z=vf({scene:o,world:l,fx:u,audio:d,gardener:h,nav:f,env:c,ui:P,state:i});e&&(z.save=()=>{},l.spots.forEach((D,H)=>{if(e==="2"&&H%3===0)return;let k=gn.filter(ce=>ce.spots.includes(D.type)),ie=k[(H*7+3)%k.length];i.plants[D.id]={sp:ie.id,seed:H+5,grown:e==="2"&&H%4===1?ie.grow*.6:ie.grow,wet:H%9===4?0:300,giftT:H%6===2?80:0,ready:!1}})),P.game=z,P.initTags(Qn),P.onQuality=D=>x(D==="auto"?t?"media":"alta":D),P.onReset=()=>{z.save=()=>{},location.reload()},P.focus=(D,H)=>{p.focus.set(D,.8,H),p.focusT=3.2},z.init();let _=z.count()>0||i.stats.planted>0;C.textContent=_?"Voltar ao meu jardim":"Come\xE7ar",bo("#load").hidden=!0,C.hidden=!1;let w=!1,B=0,V=0,Y=0,T=!1,S=()=>{w||(w=!0,d.unlock(),document.body.classList.add("playing"),B=0,z.away>120&&z.count()>0?setTimeout(()=>P.toast("Que bom te ver de volta! Veja quem est\xE1 com sede.","info"),1800):_||setTimeout(()=>P.toast("Toque num + do canteiro para plantar sua primeira flor","info"),1500))};C.onclick=S,Dc=()=>{w?P.toast("Chegaram novidades! Elas aparecem na pr\xF3xima vez que voc\xEA abrir o jogo.","good"):location.reload()},Di.get("autostart")&&S();let b=new Map,E=0,A=0,F=0,$=0,q=new so,j=new le,W=new kn(new xi(0,1,0),0),X=new xi,se=(D,H)=>{let k=s.getBoundingClientRect();j.set((D-k.left)/k.width*2-1,-((H-k.top)/k.height)*2+1),q.setFromCamera(j,a);let ie=q.intersectObjects(l.pickables.filter(U=>U.visible||!i.zones.includes(U.userData.spot.zone)),!1),ce=q.intersectObjects(Object.values(l.things).map(U=>U.pick),!1);return ce.length&&(!ie.length||ce[0].distance<ie[0].distance)?{thing:ce[0].object.userData.thing}:ie.length?{spot:ie[0].object.userData.spot}:q.ray.intersectPlane(W,X)?{ground:X.clone()}:{}};s.addEventListener("pointerdown",D=>{if(s.setPointerCapture(D.pointerId),b.set(D.pointerId,{x:D.clientX,y:D.clientY}),b.size===1)E=performance.now(),A=0;else if(b.size===2){let[H,k]=[...b.values()];F=Math.hypot(H.x-k.x,H.y-k.y),$=p.dist,A=99}}),s.addEventListener("pointermove",D=>{let H=b.get(D.pointerId);if(!H){if(D.pointerType==="mouse"&&w){let ce=se(D.clientX,D.clientY);s.style.cursor=ce.spot||ce.thing?"pointer":"grab"}return}let k=D.clientX-H.x,ie=D.clientY-H.y;if(H.x=D.clientX,H.y=D.clientY,b.size===1)A+=Math.abs(k)+Math.abs(ie),A>8&&(p.yaw-=k*.006,p.pitch=$e(p.pitch+ie*.004,.16,1.3));else if(b.size===2){let[ce,U]=[...b.values()],L=Math.hypot(ce.x-U.x,ce.y-U.y);F>0&&(p.dist=$e($*(F/L),3.5,34))}});let ve=D=>{if(b.delete(D.pointerId)&&b.size===0&&A<=8&&performance.now()-E<600&&w){if(document.body.classList.contains("photo")||P.open==="modal")return;let k=se(D.clientX,D.clientY);if(k.thing)z.tapThing(k.thing);else if(k.spot)z.tapSpot(k.spot);else if(k.ground){let ie=k.ground,ce=Nr(ie.x,ie.z);if(P.open){P.closeCards();return}ce>0&&!i.zones.includes(ce)?z.offerZone(ce):Math.abs(ie.x)<12.4&&ie.z>-9&&ie.z<14.5&&(z.tapGround(ie.x,ie.z),u.sparkle(new xi(ie.x,.05,ie.z),4,16777215,.12))}}};s.addEventListener("pointerup",ve),s.addEventListener("pointercancel",D=>b.delete(D.pointerId)),s.addEventListener("wheel",D=>{D.preventDefault(),p.dist=$e(p.dist*Math.exp(D.deltaY*.0011),3.5,34)},{passive:!1}),addEventListener("keydown",D=>{D.key==="Escape"&&(P.closeCards(),P.closeModal(),document.body.classList.remove("photo"))}),document.addEventListener("visibilitychange",()=>{document.hidden?(z.save(),d.pause(!0)):d.pause(!1)}),addEventListener("pagehide",()=>z.save());let be=performance.now(),Ae=0,De=.5,Pe=0,tt=0,K=+(Di.get("frames")||0),Ot=D=>{if(K&&w&&++tt>K){window.__frozen=!0;return}requestAnimationFrame(Ot);let H=Math.min(.1,(D-be)/1e3);if(be=D,document.hidden)return;let k=+(Di.get("speed")||1);if(Ae+=H,Dn.uTime.value=Ae,w){for(let ae=0;ae<k;ae++)z.update(H);B+=Di.get("nointro")?9:H}h.update(H,Ae),c.setHour(i.hour),l.setNight(c.night),l.update(H,Ae),c.update(H,a.position),u.update(H,Ae,c,a,l.chimney),d.update(c.night,u.rain),Dn.uWind.value=1+u.rain*.8;let ie=h.group.position,ce=1-Math.exp(-3.2*H);w?p.focusT>0?(p.focusT-=H,p.target.lerp(p.focus,ce)):(y.set(ie.x,ie.y+.95,ie.z),p.target.lerp(y,ce)):(p.yaw=Math.sin(Ae*.06)*.55,y.set(0,1,1.5),p.target.lerp(y,ce));let U=w?un(B/2.2):0,L=ze(27,p.dist,U),J=ze(.5,p.pitch,U),oe=Math.cos(J);if(a.position.set(p.target.x+Math.sin(p.yaw)*oe*L,p.target.y+Math.sin(J)*L,p.target.z+Math.cos(p.yaw)*oe*L),a.lookAt(p.target),r.final&&(y.set(ie.x,ie.y+.8,ie.z).project(a),De+=((w?$e(y.y*.5+.5,.3,.7):.5)-De)*ce,r.final.uniforms.uFocus.value=De),r.render(o,a),w&&P.frame(Qn,xi),w&&!T&&i.settings.quality==="auto"&&!Di.get("q")&&(V+=H,Y++,V>4)){let ae=V/Y;T=!0,ae>.036&&(x(n==="alta"?"media":"baixa"),T=!1,V=0,Y=0,n==="baixa"&&(T=!0))}++Pe===3&&(document.title=document.title,window.__ready=!0)};requestAnimationFrame(Ot),window.__game={game:z,state:i,cam:p,gardener:h,world:l,env:c,ui:P,start:S,setQ:x,fx:u}}Ov().catch(i=>{console.error(i);let e=document.querySelector("#err");e&&(e.hidden=!1,e.textContent="N\xE3o foi poss\xEDvel abrir o jardim neste aparelho: "+i.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
