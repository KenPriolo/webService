import{r as zt,L as ja,_ as be,C as ke,d as Ba,F as Ar,e as Bt,f as Rr,h as Ue,j as $a,k as za,l as Ka,m as St,n as Vc,p as Sc,S as Ga,E as Qa,q as bc,t as kc,u as Dc,v as Nc,w as ko,x as xc,y as Oc,i as Mc,g as Lc}from"./index-e84cf44d-CdAT_r-a.js";var Fc="firebase",Uc="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Fc,Uc,"app");var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,Ha;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,w){for(var g=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)g[Ut-2]=arguments[Ut];return m.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],E=v.g[2];var w=v.g[3],g=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<m;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return S(d(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return S(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=T,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var T=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-S(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(N(this))return"-"+S(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,y="";;){var E=G(_,m).g;_=U(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,k(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=U(this,v),N(v)?-1:k(v)?0:1};function S(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new a(_,~v.h).add(A)}n.abs=function(){return N(this)?S(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function U(v,m){return v.add(S(m))}n.j=function(v){if(k(this)||k(v))return T;if(N(this))return N(v)?S(this).j(S(v)):S(S(this).j(v));if(N(v))return S(this.j(S(v)));if(0>this.l(P)&&0>v.l(P))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,Ut=v.i(E)>>>16,Ke=v.i(E)&65535;_[2*y+2*E]+=g*Ke,K(_,2*y+2*E),_[2*y+2*E+1]+=w*Ke,K(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Ut,K(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Ut,K(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function K(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function j(v,m){this.g=v,this.h=m}function G(v,m){if(k(m))throw Error("division by zero");if(k(v))return new j(T,T);if(N(v))return m=G(S(v),m),new j(S(m.g),S(m.h));if(N(m))return m=G(v,S(m)),new j(S(m.g),m.h);if(30<v.g.length){if(N(v)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=m;0>=y.l(v);)_=vt(_),y=vt(y);var E=Z(_,1),w=Z(y,1);for(y=Z(y,2),_=Z(_,2);!k(y);){var g=w.add(y);0>=g.l(v)&&(E=E.add(_),w=g),y=Z(y,1),_=Z(_,1)}return m=U(v,E.j(m)),new j(E,m)}for(E=T;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);N(g)||0<g.l(v);)_-=y,w=d(_),g=w.j(m);k(w)&&(w=A),E=E.add(w),v=U(v,g)}return new j(E,v)}n.A=function(v){return G(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function vt(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function Z(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?v.i(w+_)>>>m|v.i(w+_+1)<<32-m:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ha=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Zt=a}).apply(typeof Do<"u"?Do:typeof self<"u"?self:typeof window<"u"?window:{});var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wa,ln,Xa,er,As,Ya,Ja,Za;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,c){return s==Array.prototype||s==Object.prototype||(s[u]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in c))break t;c=c[I]}s=s[s.length-1],f=c[s],u=u(f),u!=f&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var c=0,f=!1,I={next:function(){if(!f&&c<s.length){var R=c++;return{value:u(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function p(s,u,c){return s.call.apply(s.bind,arguments)}function T(s,u,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function A(s,u,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,A.apply(null,arguments)}function P(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function k(s,u){function c(){}c.prototype=u.prototype,s.aa=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var b=Array(arguments.length-2),H=2;H<arguments.length;H++)b[H-2]=arguments[H];return u.prototype[I].apply(f,b)}}function N(s){const u=s.length;if(0<u){const c=Array(u);for(let f=0;f<u;f++)c[f]=s[f];return c}return[]}function S(s,u){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let b=0;b<R;b++)s[I+b]=f[b]}else s.push(f)}}class U{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(s){return/^[\s\xa0]*$/.test(s)}function j(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function G(s){return G[" "](s),s}G[" "]=function(){};var vt=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Z(s,u,c){for(const f in s)u.call(c,s[f],f,s)}function v(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function m(s){const u={};for(const c in s)u[c]=s[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,u){let c,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(c in f)s[c]=f[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function E(s){var u=1;s=s.split(":");const c=[];for(;0<u&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function w(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Gr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Ut{constructor(){this.h=this.g=null}add(u,c){const f=Ke.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Ke=new U(()=>new Ql,s=>s.reset());class Ql{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Qe=!1,Gr=new Ut,bi=()=>{const s=l.Promise.resolve(void 0);Ge=()=>{s.then(Hl)}};var Hl=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){w(c)}var u=Ke;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Qe=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Wl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return s}();function He(s,u){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(vt){t:{try{G(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Xl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&He.aa.h.call(this)}}k(He,ct);var Xl={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var bn="closure_listenable_"+(1e6*Math.random()|0),Yl=0;function Jl(s,u,c,f,I){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=I,this.key=++Yl,this.da=this.fa=!1}function kn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Dn(s){this.src=s,this.g={},this.h=0}Dn.prototype.add=function(s,u,c,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var b=Hr(s,u,f,I);return-1<b?(u=s[b],c||(u.fa=!1)):(u=new Jl(u,this.src,R,!!f,I),u.fa=c,s.push(u)),u};function Qr(s,u){var c=u.type;if(c in s.g){var f=s.g[c],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(kn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Hr(s,u,c,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==f)return I}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),Xr={};function ki(s,u,c,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)ki(s,u[R],c,f,I);return null}return c=xi(c),s&&s[bn]?s.K(u,c,d(f)?!!f.capture:!1,I):Zl(s,u,c,!1,f,I)}function Zl(s,u,c,f,I,R){if(!u)throw Error("Invalid event type");var b=d(I)?!!I.capture:!!I,H=Jr(s);if(H||(s[Wr]=H=new Dn(s)),c=H.add(u,c,f,b,R),c.proxy)return c;if(f=tc(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Wl||(I=b),I===void 0&&(I=!1),s.addEventListener(u.toString(),f,I);else if(s.attachEvent)s.attachEvent(Ni(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function tc(){function s(c){return u.call(s.src,s.listener,c)}const u=ec;return s}function Di(s,u,c,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Di(s,u[R],c,f,I);else f=d(f)?!!f.capture:!!f,c=xi(c),s&&s[bn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],c=Hr(R,c,f,I),-1<c&&(kn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=Jr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Hr(u,c,f,I)),(c=-1<s?u[s]:null)&&Yr(c))}function Yr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[bn])Qr(u.i,s);else{var c=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(c,f,s.capture):u.detachEvent?u.detachEvent(Ni(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=Jr(u))?(Qr(c,s),c.h==0&&(c.src=null,u[Wr]=null)):kn(s)}}}function Ni(s){return s in Xr?Xr[s]:Xr[s]="on"+s}function ec(s,u){if(s.da)s=!0;else{u=new He(u,this);var c=s.listener,f=s.ha||s.src;s.fa&&Yr(s),s=c.call(f,u)}return s}function Jr(s){return s=s[Wr],s instanceof Dn?s:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(s){return typeof s=="function"?s:(s[Zr]||(s[Zr]=function(u){return s.handleEvent(u)}),s[Zr])}function ht(){Ht.call(this),this.i=new Dn(this),this.M=this,this.F=null}k(ht,Ht),ht.prototype[bn]=!0,ht.prototype.removeEventListener=function(s,u,c,f){Di(this,s,u,c,f)};function _t(s,u){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new ct(u,s);else if(u instanceof ct)u.target=u.target||s;else{var I=u;u=new ct(f,s),y(u,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var b=u.g=c[R];I=Nn(b,f,!0,u)&&I}if(b=u.g=s,I=Nn(b,f,!0,u)&&I,I=Nn(b,f,!1,u)&&I,c)for(R=0;R<c.length;R++)b=u.g=c[R],I=Nn(b,f,!1,u)&&I}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var c=s.g[u],f=0;f<c.length;f++)kn(c[f]);delete s.g[u],s.h--}}this.F=null},ht.prototype.K=function(s,u,c,f){return this.i.add(String(s),u,!1,c,f)},ht.prototype.L=function(s,u,c,f){return this.i.add(String(s),u,!0,c,f)};function Nn(s,u,c,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==c){var H=b.listener,ot=b.ha||b.src;b.fa&&Qr(s.i,b),I=H.call(ot,f)!==!1&&I}}return I&&!f.defaultPrevented}function Oi(s,u,c){if(typeof s=="function")c&&(s=A(s,c));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function Mi(s){s.g=Oi(()=>{s.g=null,s.i&&(s.i=!1,Mi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class nc extends Ht{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Mi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(s){Ht.call(this),this.h=s,this.g={}}k(We,Ht);var Li=[];function Fi(s){Z(s.g,function(u,c){this.g.hasOwnProperty(c)&&Yr(u)},s),s.g={}}We.prototype.N=function(){We.aa.N.call(this),Fi(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=l.JSON.stringify,rc=l.JSON.parse,sc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function es(){}es.prototype.h=null;function Ui(s){return s.h||(s.h=s.i())}function qi(){}var Xe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){ct.call(this,"d")}k(ns,ct);function rs(){ct.call(this,"c")}k(rs,ct);var le={},ji=null;function xn(){return ji=ji||new ht}le.La="serverreachability";function Bi(s){ct.call(this,le.La,s)}k(Bi,ct);function Ye(s){const u=xn();_t(u,new Bi(u))}le.STAT_EVENT="statevent";function $i(s,u){ct.call(this,le.STAT_EVENT,s),this.stat=u}k($i,ct);function yt(s){const u=xn();_t(u,new $i(u,s))}le.Ma="timingevent";function zi(s,u){ct.call(this,le.Ma,s),this.size=u}k(zi,ct);function Je(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function Ze(){this.g=!0}Ze.prototype.xa=function(){this.g=!1};function ic(s,u,c,f,I,R){s.info(function(){if(s.g)if(R)for(var b="",H=R.split("&"),ot=0;ot<H.length;ot++){var z=H[ot].split("=");if(1<z.length){var dt=z[0];z=z[1];var ft=dt.split("_");b=2<=ft.length&&ft[1]=="type"?b+(dt+"="+z+"&"):b+(dt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+c+`
`+b})}function oc(s,u,c,f,I,R,b){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+c+`
`+R+" "+b})}function ve(s,u,c,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+uc(s,c)+(f?" "+f:"")})}function ac(s,u){s.info(function(){return"TIMEOUT: "+u})}Ze.prototype.info=function(){};function uc(s,u){if(!s.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return ts(c)}catch{return u}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function Mn(){}k(Mn,es),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},ss=new Mn;function Wt(s,u,c,f){this.j=s,this.i=u,this.l=c,this.R=f||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var Qi={},is={};function os(s,u,c){s.L=1,s.v=qn(qt(u)),s.m=c,s.P=!0,Hi(s,null)}function Hi(s,u){s.F=Date.now(),Ln(s),s.A=qt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),uo(c.i,"t",f),s.C=0,c=s.j.J,s.h=new Gi,s.g=Co(s.j,c?u:null,!s.m),0<s.O&&(s.M=new nc(A(s.Y,s,s.g),s.O)),u=s.U,c=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Li[0]=I.toString()),I=Li);for(var R=0;R<I.length;R++){var b=ki(c,I[R],f||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ye(),ic(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const u=this.M;u&&jt(s)==3?u.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=jt(this.g);var u=this.g.Ba();const Ae=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||go(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Ae?Ye(3):Ye(2)),as(this);var c=this.g.Z();this.X=c;e:if(Wi(this)){var f=go(this.g);s="";var I=f.length,R=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ce(this),tn(this);var b="";break e}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=c==200,oc(this.i,this.u,this.A,this.l,this.R,ft,c),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ot=this.g;if((H=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(H)){var z=H;break e}}z=null}if(c=z)ve(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,c);else{this.o=!1,this.s=3,yt(12),ce(this),tn(this);break t}}if(this.P){c=!0;let bt;for(;!this.J&&this.C<b.length;)if(bt=lc(this,b),bt==is){ft==4&&(this.s=4,yt(14),c=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Qi){this.s=4,yt(15),ve(this.i,this.l,b,"[Invalid Chunk]"),c=!1;break}else ve(this.i,this.l,bt,null),us(this,bt);if(Wi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||b.length!=0||this.h.h||(this.s=1,yt(16),c=!1),this.o=this.o&&c,!c)ve(this.i,this.l,b,"[Invalid Chunked Response]"),ce(this),tn(this);else if(0<b.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ps(dt),dt.M=!0,yt(11))}}else ve(this.i,this.l,b,null),us(this,b);ft==4&&ce(this),this.o&&!this.J&&(ft==4?wo(this.j,this):(this.o=!1,Ln(this)))}else Pc(this.g),c==400&&0<b.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),ce(this),tn(this)}}}catch{}finally{}};function Wi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function lc(s,u){var c=s.C,f=u.indexOf(`
`,c);return f==-1?is:(c=Number(u.substring(c,f)),isNaN(c)?Qi:(f+=1,f+c>u.length?is:(u=u.slice(f,f+c),s.C=f+c,u)))}Wt.prototype.cancel=function(){this.J=!0,ce(this)};function Ln(s){s.S=Date.now()+s.I,Xi(s,s.I)}function Xi(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Je(A(s.ba,s),u)}function as(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(ac(this.i,this.A),this.L!=2&&(Ye(),yt(17)),ce(this),this.s=2,tn(this)):Xi(this,this.S-s)};function tn(s){s.j.G==0||s.J||wo(s.j,s)}function ce(s){as(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Fi(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function us(s,u){try{var c=s.j;if(c.G!=0&&(c.g==s||ls(c.h,s))){if(!s.K&&ls(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Gn(c),zn(c);else break t;fs(c),yt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Je(A(c.Za,c),6e3));if(1>=Zi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else de(c,11)}else if((s.K||c.g==s)&&Gn(c),!K(u))for(I=c.Da.g.parse(u),u=0;u<I.length;u++){let z=I[u];if(c.T=z[0],z=z[1],c.G==2)if(z[0]=="c"){c.K=z[1],c.ia=z[2];const dt=z[3];dt!=null&&(c.la=dt,c.j.info("VER="+c.la));const ft=z[4];ft!=null&&(c.Aa=ft,c.j.info("SVER="+c.Aa));const Ae=z[5];Ae!=null&&typeof Ae=="number"&&0<Ae&&(f=1.5*Ae,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const bt=s.g;if(bt){const Hn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var R=f.h;R.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(cs(R,R.h),R.h=null))}if(f.D){const ms=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;ms&&(f.ya=ms,W(f.I,f.D,ms))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var b=s;if(f.qa=Po(f,f.J?f.ia:null,f.W),b.K){to(f.h,b);var H=b,ot=f.L;ot&&(H.I=ot),H.B&&(as(H),Ln(H)),f.g=b}else vo(f);0<c.i.length&&Kn(c)}else z[0]!="stop"&&z[0]!="close"||de(c,7);else c.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?de(c,7):ds(c):z[0]!="noop"&&c.l&&c.l.ta(z),c.v=0)}}Ye(4)}catch{}}var cc=class{constructor(s,u){this.g=s,this.map=u}};function Yi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ji(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Zi(s){return s.h?1:s.g?s.g.size:0}function ls(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function cs(s,u){s.g?s.g.add(u):s.h=u}function to(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Yi.prototype.cancel=function(){if(this.i=eo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function eo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.D);return u}return N(s.i)}function hc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],c=s.length,f=0;f<c;f++)u.push(s[f]);return u}u=[],c=0;for(f in s)u[c++]=s[f];return u}function dc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var c=0;c<s;c++)u.push(c);return u}u=[],c=0;for(const f in s)u[c++]=f;return u}}}function no(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var c=dc(s),f=hc(s),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],c&&c[R],s)}var ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(s,u){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),I=null;if(0<=f){var R=s[c].substring(0,f);I=s[c].substring(f+1)}else R=s[c];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function he(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof he){this.h=s.h,Fn(this,s.j),this.o=s.o,this.g=s.g,Un(this,s.s),this.l=s.l;var u=s.i,c=new rn;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),so(this,c),this.m=s.m}else s&&(u=String(s).match(ro))?(this.h=!1,Fn(this,u[1]||"",!0),this.o=en(u[2]||""),this.g=en(u[3]||"",!0),Un(this,u[4]),this.l=en(u[5]||"",!0),so(this,u[6]||"",!0),this.m=en(u[7]||"")):(this.h=!1,this.i=new rn(null,this.h))}he.prototype.toString=function(){var s=[],u=this.j;u&&s.push(nn(u,io,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(nn(u,io,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(nn(c,c.charAt(0)=="/"?gc:mc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",nn(c,yc)),s.join("")};function qt(s){return new he(s)}function Fn(s,u,c){s.j=c?en(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Un(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function so(s,u,c){u instanceof rn?(s.i=u,Tc(s.i,s.h)):(c||(u=nn(u,_c)),s.i=new rn(u,s.h))}function W(s,u,c){s.i.set(u,c)}function qn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function en(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function nn(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,pc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function pc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var io=/[#\/\?@]/g,mc=/[#\?:]/g,gc=/[#\?]/g,_c=/[#\?@]/g,yc=/#/g;function rn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Xt(s){s.g||(s.g=new Map,s.h=0,s.i&&fc(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=rn.prototype,n.add=function(s,u){Xt(this),this.i=null,s=Ie(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function oo(s,u){Xt(s),u=Ie(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function ao(s,u){return Xt(s),u=Ie(s,u),s.g.has(u)}n.forEach=function(s,u){Xt(this),this.g.forEach(function(c,f){c.forEach(function(I){s.call(u,I,f,this)},this)},this)},n.na=function(){Xt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let f=0;f<u.length;f++){const I=s[f];for(let R=0;R<I.length;R++)c.push(u[f])}return c},n.V=function(s){Xt(this);let u=[];if(typeof s=="string")ao(this,s)&&(u=u.concat(this.g.get(Ie(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)u=u.concat(s[c])}return u},n.set=function(s,u){return Xt(this),this.i=null,s=Ie(this,s),ao(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function uo(s,u,c){oo(s,u),0<c.length&&(s.i=null,s.g.set(Ie(s,u),N(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var f=u[c];const R=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var I=R;b[f]!==""&&(I+="="+encodeURIComponent(String(b[f]))),s.push(I)}}return this.i=s.join("&")};function Ie(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Tc(s,u){u&&!s.j&&(Xt(s),s.i=null,s.g.forEach(function(c,f){var I=f.toLowerCase();f!=I&&(oo(this,f),uo(this,I,c))},s)),s.j=u}function Ec(s,u){const c=new Ze;if(l.Image){const f=new Image;f.onload=P(Yt,c,"TestLoadImage: loaded",!0,u,f),f.onerror=P(Yt,c,"TestLoadImage: error",!1,u,f),f.onabort=P(Yt,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=P(Yt,c,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function vc(s,u){const c=new Ze,f=new AbortController,I=setTimeout(()=>{f.abort(),Yt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?Yt(c,"TestPingServer: ok",!0,u):Yt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Yt(c,"TestPingServer: error",!1,u)})}function Yt(s,u,c,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(c)}catch{}}function Ic(){this.g=new sc}function wc(s,u,c){const f=c||"";try{no(s,function(I,R){let b=I;d(I)&&(b=ts(I)),u.push(f+R+"="+encodeURIComponent(b))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function jn(s){this.l=s.Ub||null,this.j=s.eb||!1}k(jn,es),jn.prototype.g=function(){return new Bn(this.l,this.j)},jn.prototype.i=function(s){return function(){return s}}({});function Bn(s,u){ht.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Bn,ht),n=Bn.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,on(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function lo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?sn(this):on(this),this.readyState==3&&lo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,sn(this))},n.Qa=function(s){this.g&&(this.response=s,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,on(s)}n.setRequestHeader=function(s,u){this.u.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function on(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function co(s){let u="";return Z(s,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function hs(s,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=co(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):W(s,u,c))}function J(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,ht);var Ac=/^https?$/i,Rc=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?Ui(this.o):Ui(ss),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){ho(this,R);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)c.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rc,u,void 0))||f||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of c)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){ho(this,R)}};function ho(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,fo(s),$n(s)}function fo(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),$n(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?po(this):this.bb())},n.bb=function(){po(this)};function po(s){if(s.h&&typeof a<"u"&&(!s.v[1]||jt(s)!=4||s.Z()!=2)){if(s.u&&jt(s)==4)Oi(s.Ea,0,s);else if(_t(s,"readystatechange"),jt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=b===0){var I=String(s.D).match(ro)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!Ac.test(I?I.toLowerCase():"")}c=f}if(c)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var R=2<jt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",fo(s)}}finally{$n(s)}}}}function $n(s,u){if(s.g){mo(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||_t(s,"ready");try{c.onreadystatechange=f}catch{}}}function mo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function jt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),rc(u)}};function go(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pc(s){const u={};s=(s.g&&2<=jt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(K(s[f]))continue;var c=E(s[f]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[I]||[];u[I]=R,R.push(c)}v(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function _o(s){this.Aa=0,this.i=[],this.j=new Ze,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=an("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=an("baseRetryDelayMs",5e3,s),this.cb=an("retryDelaySeedMs",1e4,s),this.Wa=an("forwardChannelMaxRetries",2,s),this.wa=an("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(s&&s.concurrentRequestLimit),this.Da=new Ic,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_o.prototype,n.la=8,n.G=1,n.connect=function(s,u,c,f){yt(0),this.W=s,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Po(this,null,this.W),Kn(this)};function ds(s){if(yo(s),s.G==3){var u=s.U++,c=qt(s.I);if(W(c,"SID",s.K),W(c,"RID",u),W(c,"TYPE","terminate"),un(s,c),u=new Wt(s,s.j,u),u.L=2,u.v=qn(qt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Co(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ln(u)}Ro(s)}function zn(s){s.g&&(ps(s),s.g.cancel(),s.g=null)}function yo(s){zn(s),s.u&&(l.clearTimeout(s.u),s.u=null),Gn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Kn(s){if(!Ji(s.h)&&!s.s){s.s=!0;var u=s.Ga;Ge||bi(),Qe||(Ge(),Qe=!0),Gr.add(u,s),s.B=0}}function Cc(s,u){return Zi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Je(A(s.Ga,s,u),Ao(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Wt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=Eo(this,I,u),c=qt(this.I),W(c,"RID",s),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),un(this,c),R&&(this.O?u="headers="+encodeURIComponent(String(co(R)))+"&"+u:this.m&&hs(c,this.m,R)),cs(this.h,I),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",u),W(c,"SID","null"),I.T=!0,os(I,c,null)):os(I,c,u),this.G=2}}else this.G==3&&(s?To(this,s):this.i.length==0||Ji(this.h)||To(this))};function To(s,u){var c;u?c=u.l:c=s.U++;const f=qt(s.I);W(f,"SID",s.K),W(f,"RID",c),W(f,"AID",s.T),un(s,f),s.m&&s.o&&hs(f,s.m,s.o),c=new Wt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),u&&(s.i=u.D.concat(s.i)),u=Eo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),cs(s.h,c),os(c,f,u)}function un(s,u){s.H&&Z(s.H,function(c,f){W(u,f,c)}),s.l&&no({},function(c,f){W(u,f,c)})}function Eo(s,u,c){c=Math.min(s.i.length,c);var f=s.l?A(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const b=["count="+c];R==-1?0<c?(R=I[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let H=!0;for(let ot=0;ot<c;ot++){let z=I[ot].g;const dt=I[ot].map;if(z-=R,0>z)R=Math.max(0,I[ot].g-100),H=!1;else try{wc(dt,b,"req"+z+"_")}catch{f&&f(dt)}}if(H){f=b.join("&");break t}}}return s=s.i.splice(0,c),u.D=s,f}function vo(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Ge||bi(),Qe||(Ge(),Qe=!0),Gr.add(u,s),s.v=0}}function fs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Je(A(s.Fa,s),Ao(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Io(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Je(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),zn(this),Io(this))};function ps(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Io(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=qt(s.qa);W(u,"RID","rpc"),W(u,"SID",s.K),W(u,"AID",s.T),W(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(u,"TO",s.ja),W(u,"TYPE","xmlhttp"),un(s,u),s.m&&s.o&&hs(u,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=qn(qt(u)),c.m=null,c.P=!0,Hi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),fs(this),yt(19))};function Gn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function wo(s,u){var c=null;if(s.g==u){Gn(s),ps(s),s.g=null;var f=2}else if(ls(s.h,u))c=u.D,to(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;f=xn(),_t(f,new zi(f,c)),Kn(s)}else vo(s);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&Cc(s,u)||f==2&&fs(s)))switch(c&&0<c.length&&(u=s.h,u.i=u.i.concat(c)),I){case 1:de(s,5);break;case 4:de(s,10);break;case 3:de(s,6);break;default:de(s,2)}}}function Ao(s,u){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*u}function de(s,u){if(s.j.info("Error code "+u),u==2){var c=A(s.fb,s),f=s.Xa;const I=!f;f=new he(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fn(f,"https"),qn(f),I?Ec(f.toString(),c):vc(f.toString(),c)}else yt(2);s.G=0,s.l&&s.l.sa(u),Ro(s),yo(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ro(s){if(s.G=0,s.ka=[],s.l){const u=eo(s.h);(u.length!=0||s.i.length!=0)&&(S(s.ka,u),S(s.ka,s.i),s.h.i.length=0,N(s.i),s.i.length=0),s.l.ra()}}function Po(s,u,c){var f=c instanceof he?qt(c):new he(c);if(f.g!="")u&&(f.g=u+"."+f.g),Un(f,f.s);else{var I=l.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new he(null);f&&Fn(R,f),u&&(R.g=u),I&&Un(R,I),c&&(R.l=c),f=R}return c=s.D,u=s.ya,c&&u&&W(f,c,u),W(f,"VER",s.la),un(s,f),f}function Co(s,u,c){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new J(new jn({eb:c})):new J(s.pa),u.Ha(s.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vo(){}n=Vo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qn(){}Qn.prototype.g=function(s,u){return new Rt(s,u)};function Rt(s,u){ht.call(this),this.g=new _o(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!K(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new we(this)}k(Rt,ht),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ds(this.g)},Rt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ts(s),s=c);u.i.push(new cc(u.Ya++,s)),u.G==3&&Kn(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ds(this.g),delete this.g,Rt.aa.N.call(this)};function So(s){ns.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}k(So,ns);function bo(){rs.call(this),this.status=1}k(bo,rs);function we(s){this.g=s}k(we,Vo),we.prototype.ua=function(){_t(this.g,"a")},we.prototype.ta=function(s){_t(this.g,new So(s))},we.prototype.sa=function(s){_t(this.g,new bo)},we.prototype.ra=function(){_t(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Za=function(){return new Qn},Ja=function(){return xn()},Ya=le,As={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,er=On,Ki.COMPLETE="complete",Xa=Ki,qi.EventType=Xe,Xe.OPEN="a",Xe.CLOSE="b",Xe.ERROR="c",Xe.MESSAGE="d",ht.prototype.listen=ht.prototype.K,ln=qi,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Wa=J}).apply(typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{});const No="@firebase/firestore",xo="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new ja("@firebase/firestore");function Re(){return me.logLevel}function D(n,...t){if(me.logLevel<=Bt.DEBUG){const e=t.map(js);me.debug(`Firestore (${qe}): ${n}`,...e)}}function Kt(n,...t){if(me.logLevel<=Bt.ERROR){const e=t.map(js);me.error(`Firestore (${qe}): ${n}`,...e)}}function De(n,...t){if(me.logLevel<=Bt.WARN){const e=t.map(js);me.warn(`Firestore (${qe}): ${n}`,...e)}}function js(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${qe}) INTERNAL ASSERTION FAILED: `+n;throw Kt(t),new Error(t)}function Q(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Ar{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class jc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bc{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Q(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new tu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new mt(t)}}class $c{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class zc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new $c(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kc{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ba(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Q(this.o===void 0);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Oo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Oo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Gc(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Ne(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-62135596800,Lo=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Lo);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mo)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lo}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Mo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new rt(0,0))}static max(){return new L(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="__name__";class Dt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Dt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Dt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Dt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Dt.isNumericId(t),i=Dt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Dt.extractNumericId(t).compare(Dt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Zt.fromString(t.substring(4,t.length-2))}}class X extends Dt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Qc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Dt{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return Qc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fo}static keyField(){return new ut([Fo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(X.fromString(t))}static fromName(t){return new O(X.fromString(t).popFirst(5))}static empty(){return new O(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function Hc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new ee(i,O.empty(),t)}function Wc(n){return new ee(n.readTime,n.key,yn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(L.min(),O.empty(),yn)}static max(){return new ee(L.max(),O.empty(),yn)}}function Xc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Yc)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Zc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Pr.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=-1;function Cr(n){return n==null}function ar(n){return n===0&&1/n==-1/0}function th(n){return typeof n=="number"&&Number.isInteger(n)&&!ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="";function eh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Uo(t)),t=nh(n.get(e),t);return Uo(t)}function nh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case nu:e+="";break;default:e+=o}}return e}function Uo(n){return n+nu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ae(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new jo(this.data.getIterator())}getIteratorFrom(t){return new jo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class jo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new st(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new su("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(Q(!!n),typeof n=="string"){let t=0;const e=rh.exec(n);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="server_timestamp",ou="__type__",au="__previous_value__",uu="__local_write_time__";function $s(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ou])===null||e===void 0?void 0:e.stringValue)===iu}function Vr(n){const t=n.mapValue.fields[au];return $s(t)?Vr(t):t}function Tn(n){const t=ne(n.mapValue.fields[uu].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,e,r,i,o,a,l,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}const ur="(default)";class En{constructor(t,e){this.projectId=t,this.database=e||ur}static empty(){return new En("","")}get isDefaultDatabase(){return this.database===ur}isEqual(t){return t instanceof En&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__type__",ih="__max__",Yn={mapValue:{}},cu="__vector__",lr="value";function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$s(n)?4:ah(n)?9007199254740991:oh(n)?10:11:M()}function Ot(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tn(n).isEqual(Tn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ne(i.timestampValue),l=ne(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),l=tt(o.doubleValue);return a===l?ar(a)===ar(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Ne(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(qo(a)!==qo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Ot(a[h],l[h])))return!1;return!0}(n,t);default:return M()}}function vn(n,t){return(n.values||[]).find(e=>Ot(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Bo(n.timestampValue,t.timestampValue);case 4:return Bo(Tn(n),Tn(t));case 5:return B(n.stringValue,t.stringValue);case 6:return function(o,a){const l=re(o),h=re(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=B(l[d],h[d]);if(p!==0)return p}return B(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=B(tt(o.latitude),tt(a.latitude));return l!==0?l:B(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return $o(n.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,d,p;const T=o.fields||{},A=a.fields||{},P=(l=T[lr])===null||l===void 0?void 0:l.arrayValue,k=(h=A[lr])===null||h===void 0?void 0:h.arrayValue,N=B(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:$o(P,k)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Yn.mapValue&&a===Yn.mapValue)return 0;if(o===Yn.mapValue)return 1;if(a===Yn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const A=B(h[T],p[T]);if(A!==0)return A;const P=xe(l[h[T]],d[p[T]]);if(P!==0)return P}return B(h.length,p.length)}(n.mapValue,t.mapValue);default:throw M()}}function Bo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ne(n),r=ne(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function $o(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=xe(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Oe(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rs(e.fields[a])}`;return i+"}"}(n.mapValue):M()}function nr(n){switch(se(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vr(n);return t?16+nr(t):16;case 5:return 2*n.stringValue.length;case 6:return re(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+nr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ae(r.fields,(o,a)=>{i+=o.length+nr(a)}),i}(n.mapValue);default:throw M()}}function Ps(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function zo(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function oh(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[lu])===null||e===void 0?void 0:e.stringValue)===cu}function fn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ae(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=fn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ah(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ih}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fn(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=fn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ae(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(fn(this.value))}}function hu(n){const t=[];return ae(n.fields,(e,r)=>{const i=new ut([e]);if(rr(r)){const o=hu(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.position=t,this.inclusive=e}}function Go(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=xe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e="asc"){this.field=t,this.dir=e}}function uh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{}class nt extends du{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ch(t,e,r):e==="array-contains"?new fh(t,r):e==="in"?new ph(t,r):e==="not-in"?new mh(t,r):e==="array-contains-any"?new gh(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new hh(t,r):new dh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(xe(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends du{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Mt(t,e)}matches(t){return fu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function fu(n){return n.op==="and"}function pu(n){return lh(n)&&fu(n)}function lh(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function Cs(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Oe(n.value);if(pu(n))return n.filters.map(t=>Cs(t)).join(",");{const t=n.filters.map(e=>Cs(e)).join(",");return`${n.op}(${t})`}}function mu(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)}(n,t):n instanceof Mt?function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&mu(a,i.filters[l]),!0):!1}(n,t):void M()}function gu(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Oe(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(gu).join(" ,")+"}"}(n):"Filter"}class ch extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class hh extends nt{constructor(t,e){super(t,"in",e),this.keys=_u("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dh extends nt{constructor(t,e){super(t,"not-in",e),this.keys=_u("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _u(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class fh extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return zs(e)&&vn(e.arrayValue,this.value)}}class ph extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class mh extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vn(this.value.arrayValue,e)}}class gh extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.le=null}}function Ho(n,t=null,e=[],r=[],i=null,o=null,a=null){return new _h(n,t,e,r,i,o,a)}function Ks(n){const t=F(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Cs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Oe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Oe(r)).join(",")),t.le=e}return t.le}function Gs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!uh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!mu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Qo(n.startAt,t.startAt)&&Qo(n.endAt,t.endAt)}function Vs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function yh(n,t,e,r,i,o,a,l){return new An(n,t,e,r,i,o,a,l)}function Sr(n){return new An(n)}function Wo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Th(n){return n.collectionGroup!==null}function pn(n){const t=F(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new hr(o,r))}),e.has(ut.keyField().canonicalString())||t.he.push(new hr(ut.keyField(),r))}return t.he}function Nt(n){const t=F(n);return t.Pe||(t.Pe=Eh(t,pn(n))),t.Pe}function Eh(n,t){if(n.limitType==="F")return Ho(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new hr(i.field,o)});const e=n.endAt?new cr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cr(n.startAt.position,n.startAt.inclusive):null;return Ho(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ss(n,t,e){return new An(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function br(n,t){return Gs(Nt(n),Nt(t))&&n.limitType===t.limitType}function yu(n){return`${Ks(Nt(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>gu(i)).join(", ")}]`),Cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Oe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Oe(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function kr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of pn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=Go(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,pn(r),i)||r.endAt&&!function(a,l,h){const d=Go(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,pn(r),i))}(n,t)}function vh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tu(n){return(t,e)=>{let r=!1;for(const i of pn(n)){const o=Ih(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ih(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?xe(h,d):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new Y(O.comparator);function Gt(){return wh}const Eu=new Y(O.comparator);function cn(...n){let t=Eu;for(const e of n)t=t.insert(e.key,e);return t}function vu(n){let t=Eu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fe(){return mn()}function Iu(){return mn()}function mn(){return new Te(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ah=new Y(O.comparator),Rh=new st(O.comparator);function q(...n){let t=Rh;for(const e of n)t=t.add(e);return t}const Ph=new st(B);function Ch(){return Ph}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(t)?"-0":t}}function wu(n){return{integerValue:""+n}}function Vh(n,t){return th(t)?wu(t):Qs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this._=void 0}}function Sh(n,t,e){return n instanceof dr?function(i,o){const a={fields:{[ou]:{stringValue:iu},[uu]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$s(o)&&(o=Vr(o)),o&&(a.fields[au]=o),{mapValue:a}}(e,t):n instanceof In?Ru(n,t):n instanceof wn?Pu(n,t):function(i,o){const a=Au(i,o),l=Xo(a)+Xo(i.Ie);return Ps(a)&&Ps(i.Ie)?wu(l):Qs(i.serializer,l)}(n,t)}function bh(n,t,e){return n instanceof In?Ru(n,t):n instanceof wn?Pu(n,t):e}function Au(n,t){return n instanceof fr?function(r){return Ps(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class dr extends Dr{}class In extends Dr{constructor(t){super(),this.elements=t}}function Ru(n,t){const e=Cu(t);for(const r of n.elements)e.some(i=>Ot(i,r))||e.push(r);return{arrayValue:{values:e}}}class wn extends Dr{constructor(t){super(),this.elements=t}}function Pu(n,t){let e=Cu(t);for(const r of n.elements)e=e.filter(i=>!Ot(i,r));return{arrayValue:{values:e}}}class fr extends Dr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Xo(n){return tt(n.integerValue||n.doubleValue)}function Cu(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof In&&i instanceof In||r instanceof wn&&i instanceof wn?Ne(r.elements,i.elements,Ot):r instanceof fr&&i instanceof fr?Ot(r.Ie,i.Ie):r instanceof dr&&i instanceof dr}(n.transform,t.transform)}class Dh{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Nr{}function Vu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Hs(n.key,Vt.none()):new Rn(n.key,n.data,Vt.none());{const e=n.data,r=wt.empty();let i=new st(ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ue(n.key,r,new Pt(i.toArray()),Vt.none())}}function Nh(n,t,e){n instanceof Rn?function(i,o,a){const l=i.value.clone(),h=Jo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ue?function(i,o,a){if(!sr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Jo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Su(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function gn(n,t,e,r){return n instanceof Rn?function(o,a,l,h){if(!sr(o.precondition,a))return l;const d=o.value.clone(),p=Zo(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ue?function(o,a,l,h){if(!sr(o.precondition,a))return l;const d=Zo(o.fieldTransforms,h,a),p=a.data;return p.setAll(Su(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,l){return sr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function xh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Au(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Yo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ne(r,i,(o,a)=>kh(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends Nr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends Nr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Su(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Jo(n,t,e){const r=new Map;Q(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,bh(a,l,e[i]))}return r}function Zo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Sh(o,a,t))}return r}class Hs extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oh extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Nh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Iu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Vu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(e,r)=>Yo(e,r))&&Ne(this.baseMutations,t.baseMutations,(e,r)=>Yo(e,r))}}class Ws{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Q(t.mutations.length===r.length);let i=function(){return Ah}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ws(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,$;function Uh(n){switch(n){case V.OK:return M();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return M()}}function bu(n){if(n===void 0)return Kt("GRPC error has no .code"),V.UNKNOWN;switch(n){case et.OK:return V.OK;case et.CANCELLED:return V.CANCELLED;case et.UNKNOWN:return V.UNKNOWN;case et.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case et.INTERNAL:return V.INTERNAL;case et.UNAVAILABLE:return V.UNAVAILABLE;case et.UNAUTHENTICATED:return V.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case et.NOT_FOUND:return V.NOT_FOUND;case et.ALREADY_EXISTS:return V.ALREADY_EXISTS;case et.PERMISSION_DENIED:return V.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case et.ABORTED:return V.ABORTED;case et.OUT_OF_RANGE:return V.OUT_OF_RANGE;case et.UNIMPLEMENTED:return V.UNIMPLEMENTED;case et.DATA_LOSS:return V.DATA_LOSS;default:return M()}}($=et||(et={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Zt([4294967295,4294967295],0);function ta(n){const t=qh().encode(n),e=new Ha;return e.update(t),new Uint8Array(e.digest())}function ea(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,r],0),new Zt([i,o],0)]}class Xs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Zt.fromNumber(this.Ee)}Ae(t,e,r){let i=t.add(e.multiply(Zt.fromNumber(r)));return i.compare(jh)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=ta(t),[r,i]=ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Xs(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ee===0)return;const e=ta(t),[r,i]=ea(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,i,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new xr(L.min(),i,new Y(B),Gt(),q())}}class Pn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pn(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r,i){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=i}}class ku{constructor(t,e){this.targetId=t,this.ge=e}}class Du{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class na{constructor(){this.pe=0,this.ye=ra(),this.we=lt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=q(),e=q(),r=q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Pn(this.we,this.be,t,e,r)}Me(){this.Se=!1,this.ye=ra()}xe(t,e){this.Se=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Q(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class Bh{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Gt(),this.$e=Jn(),this.Ke=Jn(),this.Ue=new Y(B)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,r=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(Vs(o))if(r===0){const a=new O(o.path);this.ze(e,a,gt.newNoDocument(a,L.min()))}else Q(r===1);else{const a=this.et(e);if(a!==r){const l=this.tt(t),h=l?this.nt(l,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=re(r).toUint8Array()}catch(h){if(h instanceof su)return De("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Xs(a,i,o)}catch(h){return De(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ee===0?null:l}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.ke.it(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const l=this.Xe(a);if(l){if(o.current&&Vs(l.target)){const h=new O(l.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,gt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=q();this.Ke.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const i=new xr(t,e,this.Ue,this.Qe,r);return this.Qe=Gt(),this.$e=Jn(),this.Ke=Jn(),this.Ue=new Y(B),i}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new na,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new st(B),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new st(B),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new na),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new Y(O.comparator)}function ra(){return new Y(O.comparator)}const $h={asc:"ASCENDING",desc:"DESCENDING"},zh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kh={and:"AND",or:"OR"};class Gh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function bs(n,t){return n.useProto3Json||Cr(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qh(n,t){return pr(n,t.toTimestamp())}function xt(n){return Q(!!n),L.fromTimestamp(function(e){const r=ne(e);return new rt(r.seconds,r.nanos)}(n))}function Ys(n,t){return ks(n,t).canonicalString()}function ks(n,t){const e=function(i){return new X(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function xu(n){const t=X.fromString(n);return Q(Uu(t)),t}function Ds(n,t){return Ys(n.databaseId,t.path)}function gs(n,t){const e=xu(t);if(e.get(1)!==n.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Mu(e))}function Ou(n,t){return Ys(n.databaseId,t)}function Hh(n){const t=xu(n);return t.length===4?X.emptyPath():Mu(t)}function Ns(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mu(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function sa(n,t,e){return{name:Ds(n,t),fields:e.value.mapValue.fields}}function Wh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const p=d.code===void 0?V.UNKNOWN:bu(d.code);return new x(p,d.message||"")}(a);e=new Du(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=gs(n,r.document.name),o=xt(r.document.updateTime),a=r.document.createTime?xt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=gt.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ir(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=gs(n,r.document),o=r.readTime?xt(r.readTime):L.min(),a=gt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new ir([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=gs(n,r.document),o=r.removedTargetIds||[];e=new ir([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Fh(i,o),l=r.targetId;e=new ku(l,a)}}return e}function Xh(n,t){let e;if(t instanceof Rn)e={update:sa(n,t.key,t.value)};else if(t instanceof Hs)e={delete:Ds(n,t.key)};else if(t instanceof ue)e={update:sa(n,t.key,t.data),updateMask:id(t.fieldMask)};else{if(!(t instanceof Oh))return M();e={verify:Ds(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof In)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fr)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Qh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function Yh(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?xt(i.updateTime):xt(o);return a.isEqual(L.min())&&(a=xt(o)),new Dh(a,i.transformResults||[])}(e,t))):[]}function Jh(n,t){return{documents:[Ou(n,t.path)]}}function Zh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ou(n,i);const o=function(d){if(d.length!==0)return Fu(Mt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Ce(A.field),direction:nd(A.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=bs(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function td(n){let t=Hh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Q(r===1);const p=e.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(T){const A=Lu(T);return A instanceof Mt&&pu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(k){return new hr(Ve(k.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(T){let A;return A=typeof T=="object"?T.value:T,Cr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,P=T.values||[];return new cr(P,A)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const A=!T.before,P=T.values||[];return new cr(P,A)}(e.endAt)),yh(t,i,a,o,l,"F",h,d)}function ed(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Lu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ve(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ve(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ve(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(Ve(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(r=>Lu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function nd(n){return $h[n]}function rd(n){return zh[n]}function sd(n){return Kh[n]}function Ce(n){return{fieldPath:n.canonicalString()}}function Ve(n){return ut.fromServerFormat(n.fieldPath)}function Fu(n){return n instanceof nt?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NAN"}};if(zo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NAN"}};if(zo(e.value))return{unaryFilter:{field:Ce(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ce(e.field),op:rd(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const r=e.getFilters().map(i=>Fu(i));return r.length===1?r[0]:{compositeFilter:{op:sd(e.op),filters:r}}}(n):M()}function id(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e,r,i,o=L.min(),a=L.min(),l=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.Tt=t}}function ad(n){const t=td({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ss(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Tn=new ld}addToCollectionParentIndex(t,e){return this.Tn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ee.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class ld{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qu=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(qu,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Me(0)}static Un(){return new Me(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="LruGarbageCollector",cd=1048576;function aa([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class hd{constructor(t){this.Hn=t,this.buffer=new st(aa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();aa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class dd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){D(oa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?D(oa,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.er(3e5)})}}class fd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Pr.ae);const r=new hd(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(ia)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ia):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(r=T,l=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),Re()<=Bt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function pd(n,t){return new fd(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.changes=new Te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&gn(r.mutation,i,Pt.empty(),rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=fe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=cn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=Gt();const a=mn(),l=function(){return mn()}();return e.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof ue)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),gn(p.mutation,d,p.mutation.getFieldMask(),rt.now())):a.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var T;return l.set(d,new gd(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(t,e){const r=mn();let i=new Y((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Pt.empty();p=l.applyToLocalView(d,p),r.set(h,p);const T=(i.get(l.batchId)||q()).add(h);i=i.insert(l.batchId,T)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,T=Iu();p.forEach(A=>{if(!o.has(A)){const P=Vu(e.get(A),r.get(A));P!==null&&T.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Th(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(fe());let l=yn,h=o;return a.next(d=>C.forEach(d,(p,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(p=>({batchId:l,changes:vu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=cn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,h=>{const d=function(T,A){return new An(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(p=>{p.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,gt.newInvalidDocument(p)))});let l=cn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&gn(p.mutation,d,Pt.empty(),rt.now()),kr(e,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return C.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:xt(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:ad(i.bundledQuery),readTime:xt(i.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.overlays=new Y(O.comparator),this.Rr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fe();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=fe(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=fe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return C.resolve(l)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Lh(e,r));let o=this.Rr.get(e);o===void 0&&(o=q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.Vr=new st(it.mr),this.gr=new st(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new it(t,e))}br(t,e){t.forEach(r=>this.removeReference(r,e))}Sr(t){const e=new O(new X([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new X([])),r=new it(e,t),i=new it(e,t+1);let o=q();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||B(t.Cr,e.Cr)}static pr(t,e){return B(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new st(it.mr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mh(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Mr=this.Mr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Bs:this.Fr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const l=this.Or(a.Cr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(B);return e.forEach(i=>{const o=new it(i,0),a=new it(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],l=>{r=r.add(l.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new it(new O(o),0);let l=new st(B);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Cr)),!0)},a),C.resolve(this.Br(l))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new it(e,0),i=this.Mr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t){this.kr=t,this.docs=function(){return new Y(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Gt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Xc(Wc(p),r)<=0||(i.has(p.key)||kr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}qr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new wd(this)}getSize(t){return C.resolve(this.size)}}class wd extends md{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t){this.persistence=t,this.Qr=new Te(e=>Ks(e),Gs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Js,this.targetCount=0,this.Ur=Me.Kn()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),C.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.zn(e),C.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Kr.yr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Kr.br(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Kr.vr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Kr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Pr(0),this.zr=!1,this.zr=!0,this.jr=new Ed,this.referenceDelegate=t(this),this.Hr=new Ad(this),this.indexManager=new ud,this.remoteDocumentCache=function(i){return new Id(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new od(e),this.Yr=new yd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Td,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new vd(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Rd(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Rd extends Jc{constructor(t){super(),this.currentSequenceNumber=t}}class Zs{constructor(t){this.persistence=t,this.ti=new Js,this.ni=null}static ri(t){return new Zs(t)}get ii(){if(this.ni)return this.ni;throw M()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),C.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const i=O.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return C.or([()=>C.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class mr{constructor(t,e){this.persistence=t,this.oi=new Te(r=>eh(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=pd(this,e)}static ri(t,e){return new mr(t,e)}Zr(){}Xr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return C.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,a=>this.ar(t,a,e).next(l=>{l||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=nr(t.data.value)),e}ar(t,e,r){return C.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ti(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Vc()?8:Zc(Sc())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Pd;return this._s(t,e,a).next(l=>{if(o.result=l,this.Xi)return this.us(t,e,a,l.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(Re()<=Bt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(Re()<=Bt.DEBUG&&D("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Re()<=Bt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):C.resolve())}rs(t,e){if(Wo(e))return C.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ss(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=q(...o);return this.ns.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.cs(e,l);return this.ls(e,d,a,h.readTime)?this.rs(t,Ss(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,r,i){return Wo(e)||i.isEqual(L.min())?C.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,i)?C.resolve(null):(Re()<=Bt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pe(e)),this.hs(t,a,e,Hc(i,yn)).next(l=>l))})}cs(t,e){let r=new st(Tu(t));return e.forEach((i,o)=>{kr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return Re()<=Bt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.ns.getDocumentsMatchingQuery(t,e,ee.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="LocalStore",Vd=3e8;class Sd{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new Y(B),this.Is=new Te(o=>Ks(o),Gs),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new _d(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function bd(n,t,e,r){return new Sd(n,t,e,r)}async function Bu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=q();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:l}))})})}function kd(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const T=d.batch,A=T.keys();let P=C.resolve();return A.forEach(k=>{P=P.next(()=>p.getEntry(h,k)).next(N=>{const S=d.docVersions.get(k);Q(S!==null),N.version.compareTo(S)<0&&(T.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function $u(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Dd(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const l=[];t.targetChanges.forEach((p,T)=>{const A=i.get(T);if(!A)return;l.push(e.Hr.removeMatchingKeys(o,p.removedDocuments,T).next(()=>e.Hr.addMatchingKeys(o,p.addedDocuments,T)));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(T,P),function(N,S,U){return N.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Vd?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(A,P,p)&&l.push(e.Hr.updateTargetData(o,P))});let h=Gt(),d=q();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(Nd(o,a,t.documentUpdates).next(p=>{h=p.Vs,d=p.fs})),!r.isEqual(L.min())){const p=e.Hr.getLastRemoteSnapshotVersion(o).next(T=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=i,o))}function Nd(n,t,e){let r=q(),i=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Gt();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):D(ei,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:i}})}function xd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Bs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Od(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Hr.getTargetData(r,t).next(o=>o?(i=o,C.resolve(i)):e.Hr.allocateTargetId(r).next(a=>(i=new Jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function xs(n,t,e){const r=F(n),i=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Be(a))throw a;D(ei,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function ua(n,t,e){const r=F(n);let i=L.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const T=F(h),A=T.Is.get(p);return A!==void 0?C.resolve(T.Ts.get(A)):T.Hr.getTargetData(d,p)}(r,a,Nt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:q())).next(l=>(Md(r,vh(t),l),{documents:l,gs:o})))}function Md(n,t,e){let r=n.Es.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class la{constructor(){this.activeTargetIds=Ch()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ld{constructor(){this.ho=new la,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new la,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="ConnectivityMonitor";class ha{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){D(ca,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){D(ca,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn=null;function Os(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="RestConnection",Ud={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qd{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===ur?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(t,e,r,i,o){const a=Os(),l=this.So(t,e.toUriEncodedString());D(_s,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,l,h,r).then(d=>(D(_s,`Received RPC '${t}' ${a}: `,d),d),d=>{throw De(_s,`RPC '${t}' ${a} failed with error: `,d,"url: ",l,"request:",r),d})}Co(t,e,r,i,o,a){return this.bo(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}So(t,e){const r=Ud[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class Bd extends qd{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=Os();return new Promise((a,l)=>{const h=new Wa;h.setWithCredentials(!0),h.listenOnce(Xa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case er.NO_ERROR:const p=h.getResponseJson();D(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case er.TIMEOUT:D(pt,`RPC '${t}' ${o} timed out`),l(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case er.HTTP_ERROR:const T=h.getStatus();if(D(pt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const k=function(S){const U=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(P.status);l(new x(k,P.message))}else l(new x(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new x(V.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(pt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);D(pt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}Wo(t,e,r){const i=Os(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Za(),l=Ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(pt,`Creating RPC '${t}' stream ${i}: ${p}`,h);const T=a.createWebChannel(p,h);let A=!1,P=!1;const k=new jd({Fo:S=>{P?D(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,S):(A||(D(pt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),A=!0),D(pt,`RPC '${t}' stream ${i} sending:`,S),T.send(S))},Mo:()=>T.close()}),N=(S,U,K)=>{S.listen(U,j=>{try{K(j)}catch(G){setTimeout(()=>{throw G},0)}})};return N(T,ln.EventType.OPEN,()=>{P||(D(pt,`RPC '${t}' stream ${i} transport opened.`),k.Qo())}),N(T,ln.EventType.CLOSE,()=>{P||(P=!0,D(pt,`RPC '${t}' stream ${i} transport closed`),k.Ko())}),N(T,ln.EventType.ERROR,S=>{P||(P=!0,De(pt,`RPC '${t}' stream ${i} transport errored:`,S),k.Ko(new x(V.UNAVAILABLE,"The operation could not be completed")))}),N(T,ln.EventType.MESSAGE,S=>{var U;if(!P){const K=S.data[0];Q(!!K);const j=K,G=(j==null?void 0:j.error)||((U=j[0])===null||U===void 0?void 0:U.error);if(G){D(pt,`RPC '${t}' stream ${i} received error:`,G);const vt=G.status;let Z=function(_){const y=et[_];if(y!==void 0)return bu(y)}(vt),v=G.message;Z===void 0&&(Z=V.INTERNAL,v="Unknown error status: "+vt+" with message "+G.message),P=!0,k.Ko(new x(Z,v)),T.close()}else D(pt,`RPC '${t}' stream ${i} received:`,K),k.Uo(K)}}),N(l,Ya.STAT_EVENT,S=>{S.stat===As.PROXY?D(pt,`RPC '${t}' stream ${i} detected buffering proxy`):S.stat===As.NOPROXY&&D(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return new Gh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="PersistentStream";class Ku{constructor(t,e,r,i,o,a,l,h){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new zu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Kt(e.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new x(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return D(da,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(D(da,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $d extends Ku{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Wh(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?xt(a.readTime):L.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Ns(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=Vs(h)?{documents:Jh(o,h)}:{query:Zh(o,h).ht},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nu(o,a.resumeToken);const d=bs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=pr(o,a.snapshotVersion.toTimestamp());const d=bs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=ed(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Ns(this.serializer),e.removeTarget=t,this.I_(e)}}class zd extends Ku{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return Q(!!t.streamToken),this.lastStreamToken=t.streamToken,Q(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Yh(t.writeResults,t.commitTime),r=xt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Ns(this.serializer),this.I_(t)}S_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Xh(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{}class Gd extends Kd{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.bo(t,ks(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(V.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Co(t,ks(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(V.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Qd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Kt(e),this.N_=!1):D("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="RemoteStore";class Hd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ee(this)&&(D(ge,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.W_.add(4),await Cn(d),d.j_.set("Unknown"),d.W_.delete(4),await Mr(d)}(this))})}),this.j_=new Qd(r,i)}}async function Mr(n){if(Ee(n))for(const t of n.G_)await t(!0)}async function Cn(n){for(const t of n.G_)await t(!1)}function Gu(n,t){const e=F(n);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),ii(e)?si(e):$e(e).c_()&&ri(e,t))}function ni(n,t){const e=F(n),r=$e(e);e.U_.delete(t),r.c_()&&Qu(e,t),e.U_.size===0&&(r.c_()?r.P_():Ee(e)&&e.j_.set("Unknown"))}function ri(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$e(n).y_(t)}function Qu(n,t){n.H_.Ne(t),$e(n).w_(t)}function si(n){n.H_=new Bh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.U_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),$e(n).start(),n.j_.B_()}function ii(n){return Ee(n)&&!$e(n).u_()&&n.U_.size>0}function Ee(n){return F(n).W_.size===0}function Hu(n){n.H_=void 0}async function Wd(n){n.j_.set("Online")}async function Xd(n){n.U_.forEach((t,e)=>{ri(n,t)})}async function Yd(n,t){Hu(n),ii(n)?(n.j_.q_(t),si(n)):n.j_.set("Unknown")}async function Jd(n,t,e){if(n.j_.set("Online"),t instanceof Du&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.U_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.U_.delete(l),i.H_.removeTarget(l))}(n,t)}catch(r){D(ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await gr(n,r)}else if(t instanceof ir?n.H_.We(t):t instanceof ku?n.H_.Ze(t):n.H_.je(t),!e.isEqual(L.min()))try{const r=await $u(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.H_.ot(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.U_.get(d);p&&o.U_.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.U_.get(h);if(!p)return;o.U_.set(h,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),Qu(o,h);const T=new Jt(p.target,h,d,p.sequenceNumber);ri(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){D(ge,"Failed to raise snapshot:",r),await gr(n,r)}}async function gr(n,t,e){if(!Be(t))throw t;n.W_.add(1),await Cn(n),n.j_.set("Offline"),e||(e=()=>$u(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(ge,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Mr(n)})}function Wu(n,t){return t().catch(e=>gr(n,e,t))}async function Lr(n){const t=F(n),e=ie(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:Bs;for(;Zd(t);)try{const i=await xd(t.localStore,r);if(i===null){t.K_.length===0&&e.P_();break}r=i.batchId,tf(t,i)}catch(i){await gr(t,i)}Xu(t)&&Yu(t)}function Zd(n){return Ee(n)&&n.K_.length<10}function tf(n,t){n.K_.push(t);const e=ie(n);e.c_()&&e.b_&&e.S_(t.mutations)}function Xu(n){return Ee(n)&&!ie(n).u_()&&n.K_.length>0}function Yu(n){ie(n).start()}async function ef(n){ie(n).C_()}async function nf(n){const t=ie(n);for(const e of n.K_)t.S_(e.mutations)}async function rf(n,t,e){const r=n.K_.shift(),i=Ws.from(r,t,e);await Wu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Lr(n)}async function sf(n,t){t&&ie(n).b_&&await async function(r,i){if(function(a){return Uh(a)&&a!==V.ABORTED}(i.code)){const o=r.K_.shift();ie(r).h_(),await Wu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Lr(r)}}(n,t),Xu(n)&&Yu(n)}async function fa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(ge,"RemoteStore received new credentials");const r=Ee(e);e.W_.add(3),await Cn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Mr(e)}async function of(n,t){const e=F(n);t?(e.W_.delete(2),await Mr(e)):t||(e.W_.add(2),await Cn(e),e.j_.set("Unknown"))}function $e(n){return n.J_||(n.J_=function(e,r,i){const o=F(e);return o.M_(),new $d(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:Wd.bind(null,n),No:Xd.bind(null,n),Lo:Yd.bind(null,n),p_:Jd.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),ii(n)?si(n):n.j_.set("Unknown")):(await n.J_.stop(),Hu(n))})),n.J_}function ie(n){return n.Y_||(n.Y_=function(e,r,i){const o=F(e);return o.M_(),new zd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:ef.bind(null,n),Lo:sf.bind(null,n),D_:nf.bind(null,n),v_:rf.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Lr(n)):(await n.Y_.stop(),n.K_.length>0&&(D(ge,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new oi(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(n,t){if(Kt("AsyncQueue",`${t}: ${n}`),Be(n))return new x(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static emptySet(t){return new Se(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=cn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.Z_=new Y(O.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):M():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Le{constructor(t,e,r,i,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Le(t,e,Se.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&br(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class uf{constructor(){this.queries=ma(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=ma(),o.forEach((a,l)=>{for(const h of l.ta)h.onError(r)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function ma(){return new Te(n=>yu(n),br)}async function ui(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(r=2):(o=new af,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ai(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&ci(e)}async function li(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function lf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.ta)l.oa(i)&&(r=!0);a.ea=i}}r&&ci(e)}function cf(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.ta)o.onError(e);r.queries.delete(t)}function ci(n){n.ia.forEach(t=>{t.next()})}var Ms,ga;(ga=Ms||(Ms={}))._a="default",ga.Cache="cache";class hi{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ms.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class hf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=q(),this.mutatedKeys=q(),this.ya=Tu(t),this.wa=new Se(this.ya)}get ba(){return this.fa}Sa(t,e){const r=e?e.Da:new pa,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,T)=>{const A=i.get(p),P=kr(this.query,T)?T:null,k=!!A&&this.mutatedKeys.has(A.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let S=!1;A&&P?A.data.isEqual(P.data)?k!==N&&(r.track({type:3,doc:P}),S=!0):this.va(A,P)||(r.track({type:2,doc:P}),S=!0,(h&&this.ya(P,h)>0||d&&this.ya(P,d)<0)&&(l=!0)):!A&&P?(r.track({type:0,doc:P}),S=!0):A&&!P&&(r.track({type:1,doc:A}),S=!0,(h||d)&&(l=!0)),S&&(P?(a=a.add(P),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:l,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((p,T)=>function(P,k){const N=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return N(P)-N(k)}(p.type,T.type)||this.ya(p.doc,T.doc)),this.Ca(r),i=i!=null&&i;const l=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new Le(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=q(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new Zu(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Ju(r))}),e}Oa(t){this.fa=t.gs,this.pa=q();const e=this.Sa(t.documents);return this.applyChanges(e,!0)}Na(){return Le.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const di="SyncEngine";class df{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ff{constructor(t){this.key=t,this.Ba=!1}}class pf{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Te(l=>yu(l),br),this.qa=new Map,this.Qa=new Set,this.$a=new Y(O.comparator),this.Ka=new Map,this.Ua=new Js,this.Wa={},this.Ga=new Map,this.za=Me.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function mf(n,t,e=!0){const r=il(n);let i;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await tl(r,t,e,!0),i}async function gf(n,t){const e=il(n);await tl(e,t,!0,!1)}async function tl(n,t,e,r){const i=await Od(n.localStore,Nt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await _f(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Gu(n.remoteStore,i),l}async function _f(n,t,e,r,i){n.Ha=(T,A,P)=>async function(N,S,U,K){let j=S.view.Sa(U);j.ls&&(j=await ua(N.localStore,S.query,!1).then(({documents:v})=>S.view.Sa(v,j)));const G=K&&K.targetChanges.get(S.targetId),vt=K&&K.targetMismatches.get(S.targetId)!=null,Z=S.view.applyChanges(j,N.isPrimaryClient,G,vt);return ya(N,S.targetId,Z.Ma),Z.snapshot}(n,T,A,P);const o=await ua(n.localStore,t,!0),a=new hf(t,o.gs),l=a.Sa(o.documents),h=Pn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);ya(n,e,d.Ma);const p=new df(t,e,a);return n.ka.set(t,p),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),d.snapshot}async function yf(n,t,e){const r=F(n),i=r.ka.get(t),o=r.qa.get(i.targetId);if(o.length>1)return r.qa.set(i.targetId,o.filter(a=>!br(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ni(r.remoteStore,i.targetId),Ls(r,i.targetId)}).catch(je)):(Ls(r,i.targetId),await xs(r.localStore,i.targetId,!0))}async function Tf(n,t){const e=F(n),r=e.ka.get(t),i=e.qa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ni(e.remoteStore,r.targetId))}async function Ef(n,t,e){const r=Cf(n);try{const i=await function(a,l){const h=F(a),d=rt.now(),p=l.reduce((P,k)=>P.add(k.key),q());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let k=Gt(),N=q();return h.ds.getEntries(P,p).next(S=>{k=S,k.forEach((U,K)=>{K.isValidDocument()||(N=N.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,k)).next(S=>{T=S;const U=[];for(const K of l){const j=xh(K,T.get(K.key).overlayedDocument);j!=null&&U.push(new ue(K.key,j,hu(j.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,U,l)}).next(S=>{A=S;const U=S.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(P,S.batchId,U)})}).then(()=>({batchId:A.batchId,changes:vu(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new Y(B)),d=d.insert(l,h),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,e),await Vn(r,i.changes),await Lr(r.remoteStore)}catch(i){const o=ai(i,"Failed to persist write");e.reject(o)}}async function el(n,t){const e=F(n);try{const r=await Dd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ka.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?Q(a.Ba):i.removedDocuments.size>0&&(Q(a.Ba),a.Ba=!1))}),await Vn(e,r,t)}catch(r){await je(r)}}function _a(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,a)=>{const l=a.view.sa(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let d=!1;h.queries.forEach((p,T)=>{for(const A of T.ta)A.sa(l)&&(d=!0)}),d&&ci(h)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function vf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Ka.get(t),o=i&&i.key;if(o){let a=new Y(O.comparator);a=a.insert(o,gt.newNoDocument(o,L.min()));const l=q().add(o),h=new xr(L.min(),new Map,new Y(B),a,l);await el(r,h),r.$a=r.$a.remove(o),r.Ka.delete(t),fi(r)}else await xs(r.localStore,t,!1).then(()=>Ls(r,t,e)).catch(je)}async function If(n,t){const e=F(n),r=t.batch.batchId;try{const i=await kd(e.localStore,t);rl(e,r,null),nl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Vn(e,i)}catch(i){await je(i)}}async function wf(n,t,e){const r=F(n);try{const i=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(T=>(Q(T!==null),p=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);rl(r,t,e),nl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Vn(r,i)}catch(i){await je(i)}}function nl(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function rl(n,t,e){const r=F(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function Ls(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ua.Sr(t).forEach(r=>{n.Ua.containsKey(r)||sl(n,r)})}function sl(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(ni(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ka.delete(e),fi(n))}function ya(n,t,e){for(const r of e)r instanceof Ju?(n.Ua.addReference(r.key,t),Af(n,r)):r instanceof Zu?(D(di,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,t),n.Ua.containsKey(r.key)||sl(n,r.key)):M()}function Af(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(D(di,"New document in limbo: "+e),n.Qa.add(r),fi(n))}function fi(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new O(X.fromString(t)),r=n.za.next();n.Ka.set(r,new ff(e)),n.$a=n.$a.insert(e,r),Gu(n.remoteStore,new Jt(Nt(Sr(e.path)),r,"TargetPurposeLimboResolution",Pr.ae))}}async function Vn(n,t,e){const r=F(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((l,h)=>{a.push(r.Ha(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=ti.Yi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.La.p_(i),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,A=>C.forEach(A.Hi,P=>p.persistence.referenceDelegate.addReference(T,A.targetId,P)).next(()=>C.forEach(A.Ji,P=>p.persistence.referenceDelegate.removeReference(T,A.targetId,P)))))}catch(T){if(!Be(T))throw T;D(ei,"Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const P=p.Ts.get(A),k=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(k);p.Ts=p.Ts.insert(A,N)}}}(r.localStore,o))}async function Rf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(di,"User change. New user:",t.toKey());const r=await Bu(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(l=>{l.forEach(h=>{h.reject(new x(V.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vn(e,r.Rs)}}function Pf(n,t){const e=F(n),r=e.Ka.get(t);if(r&&r.Ba)return q().add(r.key);{let i=q();const o=e.qa.get(t);if(!o)return i;for(const a of o){const l=e.ka.get(a);i=i.unionWith(l.view.ba)}return i}}function il(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=el.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vf.bind(null,t),t.La.p_=lf.bind(null,t.eventManager),t.La.Ja=cf.bind(null,t.eventManager),t}function Cf(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=If.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wf.bind(null,t),t}class _r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Or(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return bd(this.persistence,new Cd,t.initialUser,this.serializer)}Xa(t){return new ju(Zs.ri,this.serializer)}Za(t){return new Ld}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_r.provider={build:()=>new _r};class Vf extends _r{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Q(this.persistence.referenceDelegate instanceof mr);const r=this.persistence.referenceDelegate.garbageCollector;return new dd(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new ju(r=>mr.ri(r,e),this.serializer)}}class Fs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rf.bind(null,this.syncEngine),await of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uf}()}createDatastore(t){const e=Or(t.databaseInfo.databaseId),r=function(o){return new Bd(o)}(t.databaseInfo);return function(o,a,l,h){return new Gd(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new Hd(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>_a(this.syncEngine,e,0),function(){return ha.D()?new ha:new Fd}())}createSyncEngine(t,e){return function(i,o,a,l,h,d,p){const T=new pf(i,o,a,l,h,d);return p&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);D(ge,"RemoteStore shutting down."),o.W_.add(5),await Cn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Fs.provider={build:()=>new Fs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="FirestoreClient";class Sf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=eu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ai(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ts(n,t){n.asyncQueue.verifyOperationInProgress(),D(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ta(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bf(n);D(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>fa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>fa(t.remoteStore,i)),n._onlineComponents=t}async function bf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(oe,"Using user provided OfflineComponentProvider");try{await Ts(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;De("Error using user provided cache. Falling back to memory cache: "+e),await Ts(n,new _r)}}else D(oe,"Using default OfflineComponentProvider"),await Ts(n,new Vf(void 0));return n._offlineComponents}async function ol(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(oe,"Using user provided OnlineComponentProvider"),await Ta(n,n._uninitializedComponentsProvider._online)):(D(oe,"Using default OnlineComponentProvider"),await Ta(n,new Fs))),n._onlineComponents}function kf(n){return ol(n).then(t=>t.syncEngine)}async function yr(n){const t=await ol(n),e=t.eventManager;return e.onListen=mf.bind(null,t.syncEngine),e.onUnlisten=yf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=gf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Tf.bind(null,t.syncEngine),e}function Df(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new pi({next:A=>{p.su(),a.enqueueAndForget(()=>li(o,T));const P=A.docs.has(l);!P&&A.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&h&&h.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new hi(Sr(l.path),p,{includeMetadataChanges:!0,Ta:!0});return ui(o,T)}(await yr(n),n.asyncQueue,t,e,r)),r.promise}function Nf(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new pi({next:A=>{p.su(),a.enqueueAndForget(()=>li(o,T)),A.fromCache&&h.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new hi(l,p,{includeMetadataChanges:!0,Ta:!0});return ui(o,T)}(await yr(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xf(n,t,e,r){if(t===!0&&r===!0)throw new x(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function va(n){if(!O.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ia(n){if(O.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Tt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gi(n);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="firestore.googleapis.com",wa=!0;class Aa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ul,this.ssl=wa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:wa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=qu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<cd)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=al((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sn{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Aa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Aa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qc;switch(r.type){case"firstParty":return new zc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ea.get(e);r&&(D("ComponentProvider","Removing Datastore"),Ea.delete(e),r.terminate())}(this),Promise.resolve()}}function Of(n,t,e,r={}){var i;const o=(n=Tt(n,Sn))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),l=`${t}:${e}`;o.host!==ul&&o.host!==l&&De("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:!1,emulatorOptions:r});if(!za(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=mt.MOCK_USER;else{d=Ka(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new mt(T)}n._authCredentials=new jc(new tu(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ze(this.firestore,t,this._query)}}class Et{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new te(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Et(this.firestore,t,this._key)}}class te extends ze{constructor(t,e,r){super(t,e,Sr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Et(this.firestore,null,new O(t))}withConverter(t){return new te(this.firestore,t,this._path)}}function Km(n,t,...e){if(n=St(n),mi("collection","path",t),n instanceof Sn){const r=X.fromString(t,...e);return Ia(r),new te(n,null,r)}{if(!(n instanceof Et||n instanceof te))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ia(r),new te(n.firestore,null,r)}}function Gm(n,t){if(n=Tt(n,Sn),mi("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ze(n,null,function(r){return new An(X.emptyPath(),r)}(t))}function Mf(n,t,...e){if(n=St(n),arguments.length===1&&(t=eu.newId()),mi("doc","path",t),n instanceof Sn){const r=X.fromString(t,...e);return va(r),new Et(n,null,new O(r))}{if(!(n instanceof Et||n instanceof te))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return va(r),new Et(n.firestore,n instanceof te?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="AsyncQueue";class Pa{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new zu(this,"async_queue_retry"),this.bu=()=>{const r=ys();r&&D(Ra,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=t;const e=ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ys();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new $t;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Be(t))throw t;D(Ra,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=oi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&M()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Ca(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Qt extends Sn{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Pa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pa(t),this._firestoreClient=void 0,await t}}}function Lf(n,t){const e=typeof n=="object"?n:Rr(),r=typeof n=="string"?n:ur,i=Ue(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=$a("firestore");o&&Of(i,...o)}return i}function Fr(n){if(n._terminated)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ff(n),n._firestoreClient}function Ff(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,d,p){return new sh(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,al(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Sf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fe(lt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=/^__.*__$/;class qf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}class ll{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ue(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function cl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ei{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ei(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.$u(t),i}Ku(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Tr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(cl(this.Lu)&&Uf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class jf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Or(t)}ju(t,e,r,i=!1){return new Ei({Lu:t,methodName:e,zu:r,path:ut.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vi(n){const t=n._freezeSettings(),e=Or(n._databaseId);return new jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function hl(n,t,e,r,i,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,i);Ii("Data must be an object, but it was:",a,r);const l=dl(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const A=Us(t,T,e);if(!a.contains(A))throw new x(V.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);pl(p,A)||p.push(A)}h=new Pt(p),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new qf(new wt(l),h,d)}class qr extends _i{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qr}}function Bf(n,t,e,r){const i=n.ju(1,t,e);Ii("Data must be an object, but it was:",i,r);const o=[],a=wt.empty();ae(r,(h,d)=>{const p=wi(t,h,e);d=St(d);const T=i.Ku(p);if(d instanceof qr)o.push(p);else{const A=jr(d,T);A!=null&&(o.push(p),a.set(p,A))}});const l=new Pt(o);return new ll(a,l,i.fieldTransforms)}function $f(n,t,e,r,i,o){const a=n.ju(1,t,e),l=[Us(t,r,e)],h=[i];if(o.length%2!=0)throw new x(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)l.push(Us(t,o[A])),h.push(o[A+1]);const d=[],p=wt.empty();for(let A=l.length-1;A>=0;--A)if(!pl(d,l[A])){const P=l[A];let k=h[A];k=St(k);const N=a.Ku(P);if(k instanceof qr)d.push(P);else{const S=jr(k,N);S!=null&&(d.push(P),p.set(P,S))}}const T=new Pt(d);return new ll(p,T,a.fieldTransforms)}function jr(n,t){if(fl(n=St(n)))return Ii("Unsupported field value:",t,n),dl(n,t);if(n instanceof _i)return function(r,i){if(!cl(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=jr(l,i.Uu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:pr(i.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(i.serializer,o)}}if(r instanceof yi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fe)return{bytesValue:Nu(i.serializer,r._byteString)};if(r instanceof Et){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ys(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ti)return function(a,l){return{mapValue:{fields:{[lu]:{stringValue:cu},[lr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.Wu("VectorValues must only contain numeric values.");return Qs(l.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${gi(r)}`)}(n,t)}function dl(n,t){const e={};return ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(n,(r,i)=>{const o=jr(i,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function fl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof yi||n instanceof Fe||n instanceof Et||n instanceof _i||n instanceof Ti)}function Ii(n,t,e){if(!fl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=gi(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Us(n,t,e){if((t=St(t))instanceof Ur)return t._internalPath;if(typeof t=="string")return wi(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const zf=new RegExp("[~\\*/\\[\\]]");function wi(n,t,e){if(t.search(zf)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ur(...t.split("."))._internalPath}catch{throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new x(V.INVALID_ARGUMENT,l+n+h)}function pl(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Kf extends ml{data(){return super.data()}}function gl(n,t){return typeof t=="string"?wi(n,t):t instanceof Ur?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gf{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ae(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[lr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>tt(a.doubleValue));return new Ti(o)}convertGeoPoint(t){return new yi(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Tn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);Q(Uu(r));const i=new En(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||Kt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Tl extends ml{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class or extends Tl{data(t={}){return super.data(t)}}class El{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new or(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new or(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new or(i._firestore,i._userDataWriter,l.doc.key,l.doc,new dn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Qf(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n){n=Tt(n,Et);const t=Tt(n.firestore,Qt);return Df(Fr(t),n._key).then(e=>vl(t,n,e))}class Ai extends Gf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Et(this.firestore,null,e)}}function Hm(n){n=Tt(n,ze);const t=Tt(n.firestore,Qt),e=Fr(t),r=new Ai(t);return _l(n._query),Nf(e,n._query).then(i=>new El(t,r,n,i))}function Wm(n,t,e){n=Tt(n,Et);const r=Tt(n.firestore,Qt),i=yl(n.converter,t);return Br(r,[hl(vi(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Vt.none())])}function Xm(n,t,e,...r){n=Tt(n,Et);const i=Tt(n.firestore,Qt),o=vi(i);let a;return a=typeof(t=St(t))=="string"||t instanceof Ur?$f(o,"updateDoc",n._key,t,e,r):Bf(o,"updateDoc",n._key,t),Br(i,[a.toMutation(n._key,Vt.exists(!0))])}function Ym(n){return Br(Tt(n.firestore,Qt),[new Hs(n._key,Vt.none())])}function Jm(n,t){const e=Tt(n.firestore,Qt),r=Mf(n),i=yl(n.converter,t);return Br(e,[hl(vi(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function Zm(n,...t){var e,r,i;n=St(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ca(t[a])||(o=t[a],a++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ca(t[a])){const T=t[a];t[a]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[a+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),t[a+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,d,p;if(n instanceof Et)d=Tt(n.firestore,Qt),p=Sr(n._key.path),h={next:T=>{t[a]&&t[a](vl(d,n,T))},error:t[a+1],complete:t[a+2]};else{const T=Tt(n,ze);d=Tt(T.firestore,Qt),p=T._query;const A=new Ai(d);h={next:P=>{t[a]&&t[a](new El(d,A,T,P))},error:t[a+1],complete:t[a+2]},_l(n._query)}return function(A,P,k,N){const S=new pi(N),U=new hi(P,S,k);return A.asyncQueue.enqueueAndForget(async()=>ui(await yr(A),U)),()=>{S.su(),A.asyncQueue.enqueueAndForget(async()=>li(await yr(A),U))}}(Fr(d),p,l,h)}function Br(n,t){return function(r,i){const o=new $t;return r.asyncQueue.enqueueAndForget(async()=>Ef(await kf(r),i,o)),o.promise}(Fr(n),t)}function vl(n,t,e){const r=e.docs.get(t._key),i=new Ai(n);return new Tl(n,i,t._key,r,new dn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){qe=i})(Ga),be(new ke("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Qt(new Bc(r.getProvider("auth-internal")),new Kc(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),zt(No,xo,t),zt(No,xo,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebasestorage.googleapis.com",Hf="storageBucket",Wf=2*60*1e3,Xf=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ar{constructor(t,e,r=0){super(Es(t),`Firebase Storage: ${e} (${Es(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Es(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Lt||(Lt={}));function Es(n){return"storage/"+n}function Yf(){const n="An unknown error occurred, please check the error payload for server response.";return new Ft(Lt.UNKNOWN,n)}function Jf(){return new Ft(Lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Zf(){return new Ft(Lt.CANCELED,"User canceled the upload/download.")}function tp(n){return new Ft(Lt.INVALID_URL,"Invalid URL '"+n+"'.")}function ep(n){return new Ft(Lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Va(n){return new Ft(Lt.INVALID_ARGUMENT,n)}function wl(){return new Ft(Lt.APP_DELETED,"The Firebase app was deleted.")}function np(n){return new Ft(Lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=kt.makeFromUrl(t,e)}catch{return new kt(t,"")}if(r.path==="")return r;throw ep(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function d(G){G.path_=decodeURIComponent(G.path)}const p="v[A-Za-z0-9_]+",T=e.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",P=new RegExp(`^https?://${T}/${p}/b/${i}/o${A}`,"i"),k={bucket:1,path:3},N=e===Il?"(?:storage.googleapis.com|storage.cloud.google.com)":e,S="([^?#]*)",U=new RegExp(`^https?://${N}/${i}/${S}`,"i"),j=[{regex:l,indices:h,postModify:o},{regex:P,indices:k,postModify:d},{regex:U,indices:{bucket:1,path:2},postModify:d}];for(let G=0;G<j.length;G++){const vt=j[G],Z=vt.regex.exec(t);if(Z){const v=Z[vt.indices.bucket];let m=Z[vt.indices.path];m||(m=""),r=new kt(v,m),vt.postModify(r);break}}if(r==null)throw tp(t);return r}}class rp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,t,e){let r=1,i=null,o=null,a=!1,l=0;function h(){return l===2}let d=!1;function p(...S){d||(d=!0,t.apply(null,S))}function T(S){i=setTimeout(()=>{i=null,n(P,h())},S)}function A(){o&&clearTimeout(o)}function P(S,...U){if(d){A();return}if(S){A(),p.call(null,S,...U);return}if(h()||a){A(),p.call(null,S,...U);return}r<64&&(r*=2);let j;l===1?(l=2,j=0):j=(r+Math.random())*1e3,T(j)}let k=!1;function N(S){k||(k=!0,A(),!d&&(i!==null?(S||(l=2),clearTimeout(i),T(0)):S||(l=1)))}return T(0),o=setTimeout(()=>{a=!0,N(!0)},e),N}function ip(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){return n!==void 0}function Sa(n,t,e,r){if(r<t)throw Va(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Va(`Invalid value for '${n}'. Expected ${e} or less.`)}function ap(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}var Er;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Er||(Er={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,e,r,i,o,a,l,h,d,p,T,A=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=T,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,k)=>{this.resolve_=P,this.reject_=k,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new tr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Er.NO_ERROR,h=o.getStatus();if(!l||up(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Er.ABORT;r(!1,new tr(!1,null,p));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new tr(d,o))})},e=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());op(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=Yf();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(i.canceled){const h=this.appDelete_?wl():Zf();a(h)}else{const h=Jf();a(h)}};this.canceled_?e(!1,new tr(!1,null,!0)):this.backoffId_=sp(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ip(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function cp(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function hp(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function dp(n,t){t&&(n["X-Firebase-GMPID"]=t)}function fp(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function pp(n,t,e,r,i,o,a=!0){const l=ap(n.urlParams),h=n.url+l,d=Object.assign({},n.headers);return dp(d,t),cp(d,e),hp(d,o),fp(d,r),new lp(h,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function gp(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e){this._service=t,e instanceof kt?this._location=e:this._location=kt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new vr(t,e)}get root(){const t=new kt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gp(this._location.path)}get storage(){return this._service}get parent(){const t=mp(this._location.path);if(t===null)return null;const e=new kt(this._location.bucket,t);return new vr(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw np(t)}}function ba(n,t){const e=t==null?void 0:t[Hf];return e==null?null:kt.makeFromBucketSpec(e,n)}function _p(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ka(i,n.app.options.projectId))}class yp{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Il,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wf,this._maxUploadRetryTime=Xf,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=ba(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,t):this._bucket=ba(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Sa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Sa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Ba(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new vr(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new rp(wl());{const a=pp(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const ka="@firebase/storage",Da="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="storage";function Tp(n=Rr(),t){n=St(n);const r=Ue(n,Al).getImmediate({identifier:t}),i=$a("storage");return i&&Ep(r,...i),r}function Ep(n,t,e,r={}){_p(n,t,e,r)}function vp(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new yp(e,r,i,t,Ga)}function Ip(){be(new ke(Al,vp,"PUBLIC").setMultipleInstances(!0)),zt(ka,Da,""),zt(ka,Da,"esm2017")}Ip();const Rl="@firebase/installations",Ri="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=1e4,Cl=`w:${Ri}`,Vl="FIS_v2",wp="https://firebaseinstallations.googleapis.com/v1",Ap=60*60*1e3,Rp="installations",Pp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_e=new Qa(Rp,Pp,Cp);function Sl(n){return n instanceof Ar&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl({projectId:n}){return`${wp}/projects/${n}/installations`}function kl(n){return{token:n.token,requestStatus:2,expiresIn:Sp(n.expiresIn),creationTime:Date.now()}}async function Dl(n,t){const r=(await t.json()).error;return _e.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Vp(n,{refreshToken:t}){const e=Nl(n);return e.append("Authorization",bp(t)),e}async function xl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Sp(n){return Number(n.replace("s","000"))}function bp(n){return`${Vl} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=bl(n),i=Nl(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:e,authVersion:Vl,appId:n.appId,sdkVersion:Cl},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await xl(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:kl(d.authToken)}}else throw await Dl("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=/^[cdef][\w-]{21}$/,qs="";function xp(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Op(n);return Np.test(e)?e:qs}catch{return qs}}function Op(n){return Dp(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Map;function Ll(n,t){const e=$r(n);Fl(e,t),Mp(e,t)}function Fl(n,t){const e=Ml.get(n);if(e)for(const r of e)r(t)}function Mp(n,t){const e=Lp();e&&e.postMessage({key:n,fid:t}),Fp()}let pe=null;function Lp(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=n=>{Fl(n.data.key,n.data.fid)}),pe}function Fp(){Ml.size===0&&pe&&(pe.close(),pe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebase-installations-database",qp=1,ye="firebase-installations-store";let vs=null;function Pi(){return vs||(vs=bc(Up,qp,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ye)}}})),vs}async function Ir(n,t){const e=$r(n),i=(await Pi()).transaction(ye,"readwrite"),o=i.objectStore(ye),a=await o.get(e);return await o.put(t,e),await i.done,(!a||a.fid!==t.fid)&&Ll(n,t.fid),t}async function Ul(n){const t=$r(n),r=(await Pi()).transaction(ye,"readwrite");await r.objectStore(ye).delete(t),await r.done}async function zr(n,t){const e=$r(n),i=(await Pi()).transaction(ye,"readwrite"),o=i.objectStore(ye),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await i.done,l&&(!a||a.fid!==l.fid)&&Ll(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n){let t;const e=await zr(n.appConfig,r=>{const i=jp(r),o=Bp(n,i);return t=o.registrationPromise,o.installationEntry});return e.fid===qs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function jp(n){const t=n||{fid:xp(),registrationStatus:0};return ql(t)}function Bp(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_e.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=$p(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:zp(n)}:{installationEntry:t}}async function $p(n,t){try{const e=await kp(n,t);return Ir(n.appConfig,e)}catch(e){throw Sl(e)&&e.customData.serverCode===409?await Ul(n.appConfig):await Ir(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function zp(n){let t=await Na(n.appConfig);for(;t.registrationStatus===1;)await Ol(100),t=await Na(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ci(n);return r||e}return t}function Na(n){return zr(n,t=>{if(!t)throw _e.create("installation-not-found");return ql(t)})}function ql(n){return Kp(n)?{fid:n.fid,registrationStatus:0}:n}function Kp(n){return n.registrationStatus===1&&n.registrationTime+Pl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp({appConfig:n,heartbeatServiceProvider:t},e){const r=Qp(n,e),i=Vp(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Cl,appId:n.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await xl(()=>fetch(r,l));if(h.ok){const d=await h.json();return kl(d)}else throw await Dl("Generate Auth Token",h)}function Qp(n,{fid:t}){return`${bl(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(n,t=!1){let e;const r=await zr(n.appConfig,o=>{if(!jl(o))throw _e.create("not-registered");const a=o.authToken;if(!t&&Xp(a))return o;if(a.requestStatus===1)return e=Hp(n,t),o;{if(!navigator.onLine)throw _e.create("app-offline");const l=Jp(o);return e=Wp(n,l),l}});return e?await e:r.authToken}async function Hp(n,t){let e=await xa(n.appConfig);for(;e.authToken.requestStatus===1;)await Ol(100),e=await xa(n.appConfig);const r=e.authToken;return r.requestStatus===0?Vi(n,t):r}function xa(n){return zr(n,t=>{if(!jl(t))throw _e.create("not-registered");const e=t.authToken;return Zp(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Wp(n,t){try{const e=await Gp(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Ir(n.appConfig,r),e}catch(e){if(Sl(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Ul(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ir(n.appConfig,r)}throw e}}function jl(n){return n!==void 0&&n.registrationStatus===2}function Xp(n){return n.requestStatus===2&&!Yp(n)}function Yp(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Ap}function Jp(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Zp(n){return n.requestStatus===1&&n.requestTime+Pl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ci(t);return r?r.catch(console.error):Vi(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(n,t=!1){const e=n;return await nm(e),(await Vi(e,t)).token}async function nm(n){const{registrationPromise:t}=await Ci(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){if(!n||!n.options)throw Is("App Configuration");if(!n.name)throw Is("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Is(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Is(n){return _e.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="installations",sm="installations-internal",im=n=>{const t=n.getProvider("app").getImmediate(),e=rm(t),r=Ue(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},om=n=>{const t=n.getProvider("app").getImmediate(),e=Ue(t,Bl).getImmediate();return{getId:()=>tm(e),getToken:i=>em(e,i)}};function am(){be(new ke(Bl,im,"PUBLIC")),be(new ke(sm,om,"PRIVATE"))}am();zt(Rl,Ri);zt(Rl,Ri,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="analytics",um="firebase_id",lm="origin",cm=60*1e3,hm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Si="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new ja("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Qa("analytics","Analytics",dm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n){if(!n.startsWith(Si)){const t=Ct.create("invalid-gtag-resource",{gtagURL:n});return At.warn(t.message),""}return n}function $l(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function pm(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function mm(n,t){const e=pm("firebase-js-sdk-policy",{createScriptURL:fm}),r=document.createElement("script"),i=`${Si}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function gm(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function _m(n,t,e,r,i,o){const a=r[i];try{if(a)await t[a];else{const h=(await $l(e)).find(d=>d.measurementId===i);h&&await t[h.appId]}}catch(l){At.error(l)}n("config",i,o)}async function ym(n,t,e,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await $l(e);for(const h of a){const d=l.find(T=>T.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,i||{})}catch(o){At.error(o)}}function Tm(n,t,e,r){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await ym(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await _m(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){At.error(l)}}return i}function Em(n,t,e,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Tm(o,n,t,e),{gtagCore:o,wrappedGtag:window[i]}}function vm(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Si)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=30,wm=1e3;class Am{constructor(t={},e=wm){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zl=new Am;function Rm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Pm(n){var t;const{appId:e,apiKey:r}=n,i={method:"GET",headers:Rm(r)},o=hm.replace("{app-id}",e),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(l=h.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Cm(n,t=zl,e){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Ct.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ct.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new bm;return setTimeout(async()=>{l.abort()},cm),Kl({appId:r,apiKey:i,measurementId:o},a,l,t)}async function Kl(n,{throttleEndTimeMillis:t,backoffCount:e},r,i=zl){var o;const{appId:a,measurementId:l}=n;try{await Vm(r,t)}catch(h){if(l)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Pm(n);return i.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Sm(d)){if(i.deleteThrottleMetadata(a),l)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?ko(e,i.intervalMillis,Im):ko(e,i.intervalMillis),T={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return i.setThrottleMetadata(a,T),At.debug(`Calling attemptFetch again in ${p} millis`),Kl(n,T,r,i)}}function Vm(n,t){return new Promise((e,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(e,i);n.addEventListener(()=>{clearTimeout(o),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Sm(n){if(!(n instanceof Ar)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class bm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function km(n,t,e,r,i){if(i&&i.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dm(){if(Dc())try{await Nc()}catch(n){return At.warn(Ct.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return At.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Nm(n,t,e,r,i,o,a){var l;const h=Cm(n);h.then(P=>{e[P.measurementId]=P.appId,n.options.measurementId&&P.measurementId!==n.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>At.error(P)),t.push(h);const d=Dm().then(P=>{if(P)return r.getId()}),[p,T]=await Promise.all([h,d]);vm(o)||mm(o,p.measurementId),i("js",new Date);const A=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return A[lm]="firebase",A.update=!0,T!=null&&(A[um]=T),i("config",p.measurementId,A),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t){this.app=t}_delete(){return delete _n[this.app.options.appId],Promise.resolve()}}let _n={},Oa=[];const Ma={};let ws="dataLayer",Om="gtag",La,Gl,Fa=!1;function Mm(){const n=[];if(kc()&&n.push("This is a browser extension environment."),xc()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),e=Ct.create("invalid-analytics-context",{errorInfo:t});At.warn(e.message)}}function Lm(n,t,e){Mm();const r=n.options.appId;if(!r)throw Ct.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(_n[r]!=null)throw Ct.create("already-exists",{id:r});if(!Fa){gm(ws);const{wrappedGtag:o,gtagCore:a}=Em(_n,Oa,Ma,ws,Om);Gl=o,La=a,Fa=!0}return _n[r]=Nm(n,Oa,Ma,t,La,ws,e),new xm(n)}function Fm(n=Rr()){n=St(n);const t=Ue(n,wr);return t.isInitialized()?t.getImmediate():Um(n)}function Um(n,t={}){const e=Ue(n,wr);if(e.isInitialized()){const i=e.getImmediate();if(za(t,e.getOptions()))return i;throw Ct.create("already-initialized")}return e.initialize({options:t})}function qm(n,t,e,r){n=St(n),km(Gl,_n[n.app.options.appId],t,e,r).catch(i=>At.error(i))}const Ua="@firebase/analytics",qa="0.10.12";function jm(){be(new ke(wr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Lm(r,i,e)},"PUBLIC")),be(new ke("analytics-internal",n,"PRIVATE")),zt(Ua,qa),zt(Ua,qa,"esm2017");function n(t){try{const e=t.getProvider(wr).getImmediate();return{logEvent:(r,i,o)=>qm(e,r,i,o)}}catch(e){throw Ct.create("interop-component-reg-failed",{reason:e})}}}jm();const Bm={apiKey:"AIzaSyB8Ya_6k9m5dGgLXENkr3zcZCKviTqJsdI",authDomain:"tablet-service-d37a6.firebaseapp.com",projectId:"tablet-service-d37a6",storageBucket:"tablet-service-d37a6.firebasestorage.app",messagingSenderId:"641570257898",appId:"1:641570257898:web:f2564dd5fee33554a25093",measurementId:"G-PLD515GB9L"},Kr=Oc().length?Rr():Mc(Bm),tg=Lc(Kr),eg=Lf(Kr);Tp(Kr);typeof window<"u"&&Fm(Kr);export{rt as T,tg as a,eg as b,Km as c,Mf as d,Jm as e,Hm as f,Qm as g,Lf as h,Gm as i,Ym as j,Zm as o,Wm as s,Xm as u};
