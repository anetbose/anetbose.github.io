"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{2296:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return v},NormalizeError:function(){return g},PageNotFoundError:function(){return m},SP:function(){return f},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return o},getDisplayName:function(){return l},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return n},isResSent:function(){return u},loadGetInitialProps:function(){return d},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return function(){for(var o=arguments.length,i=Array(o),n=0;n<o;n++)i[n]=arguments[n];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,n=e=>i.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&u(r))return o;if(!o)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+o+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let f="undefined"!=typeof performance,p=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class v extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},2619:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},useLinkStatus:function(){return b}});let o=r(9417),i=r(5155),n=o._(r(2115)),a=r(7670),s=r(6752),l=r(3011),u=r(2296),c=r(6058);r(4781);let d=r(3499),f=r(8607),p=r(1807);r(7045);let h=r(6048);function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}function m(e){var t;let r,o,a,[m,b]=(0,n.useOptimistic)(d.IDLE_LINK_STATUS),x=(0,n.useRef)(null),{href:y,as:_,children:w,prefetch:S=null,passHref:R,replace:E,shallow:U,scroll:z,onClick:A,onMouseEnter:P,onTouchStart:O,legacyBehavior:B=!1,onNavigate:T,ref:M,unstable_dynamicOnHover:C,...k}=e;r=w,B&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let V=n.default.useContext(s.AppRouterContext),j=!1!==S,I=!1!==S?null===(t=S)||"auto"===t?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:L,as:F}=n.default.useMemo(()=>{let e=g(y);return{href:e,as:_?g(_):e}},[y,_]);B&&(o=n.default.Children.only(r));let D=B?o&&"object"==typeof o&&o.ref:M,N=n.default.useCallback(e=>(null!==V&&(x.current=(0,d.mountLinkInstance)(e,L,V,I,j,b)),()=>{x.current&&((0,d.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,d.unmountPrefetchableInstance)(e)}),[j,L,V,I,b]),W={ref:(0,l.useMergedRef)(N,D),onClick(e){B||"function"!=typeof A||A(e),B&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),V&&(e.defaultPrevented||function(e,t,r,o,i,a,s){let{nodeName:l}=e.currentTarget;if(!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,f.isLocalURL)(t)){i&&(e.preventDefault(),location.replace(t));return}if(e.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}n.default.startTransition(()=>{(0,p.dispatchNavigateAction)(r||t,i?"replace":"push",null==a||a,o.current)})}}(e,L,F,x,E,z,T))},onMouseEnter(e){B||"function"!=typeof P||P(e),B&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),V&&j&&(0,d.onNavigationIntent)(e.currentTarget,!0===C)},onTouchStart:function(e){B||"function"!=typeof O||O(e),B&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),V&&j&&(0,d.onNavigationIntent)(e.currentTarget,!0===C)}};return(0,u.isAbsoluteUrl)(F)?W.href=F:B&&!R&&("a"!==o.type||"href"in o.props)||(W.href=(0,c.addBasePath)(F)),a=B?n.default.cloneElement(o,W):(0,i.jsx)("a",{...k,...W,children:r}),(0,i.jsx)(v.Provider,{value:m,children:a})}let v=(0,n.createContext)(d.IDLE_LINK_STATUS),b=()=>(0,n.useContext)(v);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:(e,t,r)=>{r.d(t,{Sy:()=>R});var o=r(2115);let i=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,n=8294400;class a{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,r,o,i=0,a=0,s=2,u=n,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){let e=this.ownerDocument.createElement("style");e.innerHTML=l,e.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(e)}let d=this.ownerDocument.createElement("canvas");this.canvasElement=d,this.parentElement.prepend(d),this.fragmentShader=t,this.providedUniforms=r,this.mipmaps=c,this.currentFrame=a,this.minPixelRatio=s,this.maxPixelCount=u;let f=d.getContext("webgl2",o);if(!f)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=f,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(i),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,r){let o=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=o?o.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),r=r.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let n=s(e,e.VERTEX_SHADER,t),a=s(e,e.FRAGMENT_SHADER,r);if(!n||!a)return null;let l=e.createProgram();return l?(e.attachShader(l,n),e.attachShader(l,a),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,n),e.detachShader(l,a),e.deleteShader(n),e.deleteShader(a),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(n),e.deleteShader(a),null):null}(this.gl,i,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,r])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),r instanceof HTMLImageElement){let r=`${t}AspectRatio`;e[r]=this.gl.getUniformLocation(this.program,r)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,r=Math.max(1,window.devicePixelRatio),o=visualViewport?.scale??1;if(this.devicePixelsSupported){let i=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*i*o,t=this.parentDevicePixelHeight*i*o}else{let i=Math.max(r,this.minPixelRatio)*o;this.isSafari&&(i*=Math.max(1,function(e){let t=visualViewport?.scale??1,r=visualViewport?.width??window.innerWidth,o=outerWidth/(t*r+(window.innerWidth-e.documentElement.clientWidth)),i=Math.round(100*o);return i%5==0?i/100:33===i?1/3:67===i?2/3:133===i?4/3:o}(this.ownerDocument))),e=Math.round(this.parentWidth)*i,t=Math.round(this.parentHeight)*i}let i=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),n=Math.round(e*i),a=Math.round(t*i),s=n/Math.round(this.parentWidth);(this.canvasElement.width!==n||this.canvasElement.height!==a||this.renderScale!==s)&&(this.renderScale=s,this.canvasElement.width=n,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let o=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+o);let i=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let n=this.gl.getError();if(n!==this.gl.NO_ERROR||null===i)return void console.error("Paper Shaders: WebGL error when uploading texture:",n);this.textures.set(e,i);let a=this.uniformLocations[e];if(a){this.gl.uniform1i(a,o);let r=`${e}AspectRatio`,i=this.uniformLocations[r];if(i){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(i,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,r)=>this.areUniformValuesEqual(e,t[r]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let r=t;if(t instanceof HTMLImageElement&&(r=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],r))return;this.uniformCache[e]=r;let o=this.uniformLocations[e];if(!o)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let r=null,i=null;if(void 0!==t[0]&&Array.isArray(t[0])){let o=t[0].length;if(!t.every(e=>e.length===o))return void console.warn(`All child arrays must be the same length for ${e}`);r=t.flat(),i=o}else i=(r=t).length;switch(i){case 2:this.gl.uniform2fv(o,r);break;case 3:this.gl.uniform3fv(o,r);break;case 4:this.gl.uniform4fv(o,r);break;case 9:this.gl.uniformMatrix3fv(o,!1,r);break;case 16:this.gl.uniformMatrix4fv(o,!1,r);break;default:console.warn(`Unsupported uniform array length: ${i}`)}}else"number"==typeof t?this.gl.uniform1f(o,t):"boolean"==typeof t?this.gl.uniform1i(o,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=n)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function s(e,t,r){let o=e.createShader(t);return o?(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(o)),e.deleteShader(o),null):null}let l=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function u(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}var c=r(5155);async function d(e){let t={},r=[];return Object.entries(e).forEach(e=>{let[o,i]=e;if("string"==typeof i){let e=i||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch(e){return!1}})(e))return void console.warn('Uniform "'.concat(o,'" has invalid URL "').concat(e,'". Skipping image loading.'));let n=new Promise((r,i)=>{let n=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch(e){return!1}})(e)&&(n.crossOrigin="anonymous"),n.onload=()=>{u(n),t[o]=n,r()},n.onerror=()=>{console.error("Could not set uniforms. Failed to load image at ".concat(e)),i()},n.src=e});r.push(n)}else i instanceof HTMLImageElement&&u(i),t[o]=i}),await Promise.all(r),t}let f=(0,o.forwardRef)(function(e,t){let{fragmentShader:r,uniforms:i,webGlContextAttributes:n,speed:s=0,frame:l=0,width:u,height:f,minPixelRatio:p,maxPixelCount:h,mipmaps:g,style:m,...v}=e,[b,x]=(0,o.useState)(!1),y=(0,o.useRef)(null),_=(0,o.useRef)(null),w=(0,o.useRef)(n);(0,o.useEffect)(()=>((async()=>{let e=await d(i);y.current&&!_.current&&(_.current=new a(y.current,r,e,w.current,s,l,p,h,g),x(!0))})(),()=>{var e;null==(e=_.current)||e.dispose(),_.current=null}),[r]),(0,o.useEffect)(()=>{let e=!1;return(async()=>{let t=await d(i);if(!e){var r;null==(r=_.current)||r.setUniforms(t)}})(),()=>{e=!0}},[i,b]),(0,o.useEffect)(()=>{var e;null==(e=_.current)||e.setSpeed(s)},[s,b]),(0,o.useEffect)(()=>{var e;null==(e=_.current)||e.setMaxPixelCount(h)},[h,b]),(0,o.useEffect)(()=>{var e;null==(e=_.current)||e.setMinPixelRatio(p)},[p,b]),(0,o.useEffect)(()=>{var e;null==(e=_.current)||e.setFrame(l)},[l,b]);let S=function(e){let t=o.useRef(void 0),r=o.useCallback(t=>{let r=e.map(e=>{if(null!=e){if("function"==typeof e){let r=e(t);return"function"==typeof r?r:()=>{e(null)}}return e.current=t,()=>{e.current=null}}});return()=>{r.forEach(e=>e?.())}},e);return o.useMemo(()=>e.every(e=>null==e)?null:e=>{t.current&&(t.current(),t.current=void 0),null!=e&&(t.current=r(e))},e)}([y,t]);return(0,c.jsx)("div",{ref:S,style:void 0!==u||void 0!==f?{width:"string"==typeof u&&!1===isNaN(+u)?+u:u,height:"string"==typeof f&&!1===isNaN(+f)?+f:f,...m}:m,...v})});f.displayName="ShaderMount";let p={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},h={none:0,contain:1,cover:2};function g(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:v;if("string"!=typeof e)return v;let t,r,o,i=1;if(e.startsWith("#"))[t,r,o,i]=function(e){3===(e=e.replace(/^#/,"")).length&&(e=e.split("").map(e=>e+e).join("")),6===e.length&&(e+="ff");let t=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255;return[t,r,parseInt(e.slice(4,6),16)/255,parseInt(e.slice(6,8),16)/255]}(e);else if(e.startsWith("rgb"))[t,r,o,i]=function(e){let t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,void 0===t[4]?1:parseFloat(t[4])]:[0,0,0,1]}(e);else{if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),v;[t,r,o,i]=function(e){let t,r,o,[i,n,a,s]=e,l=i/360,u=n/100,c=a/100;if(0===n)t=r=o=c;else{let e=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,i=c<.5?c*(1+u):c+u-c*u,n=2*c-i;t=e(n,i,l+1/3),r=e(n,i,l),o=e(n,i,l-1/3)}return[t,r,o,s]}(function(e){let t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),void 0===t[4]?1:parseFloat(t[4])]:[0,0,0,1]}(e))}return[m(t,0,1),m(r,0,1),m(o,0,1),m(i,0,1)]}let m=(e,t,r)=>Math.min(Math.max(e,t),r),v=[0,0,0,1],b=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,x=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,y=`
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`,_={maxColorCount:10},w=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colors[${_.maxColorCount}];
uniform float u_colorsCount;

uniform float u_distortion;
uniform float u_swirl;
uniform float u_grainMixer;
uniform float u_grainOverlay;

in vec2 v_objectUV;
out vec4 fragColor;

${b}
${x}
${y}

float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float noise(vec2 n, vec2 seedOffset) {
  return valueNoise(n + seedOffset);
}

vec2 getPosition(int i, float t) {
  float a = float(i) * .37;
  float b = .6 + fract(float(i) / 3.) * .9;
  float c = .8 + fract(float(i + 1) / 4.);

  float x = sin(t * b + a);
  float y = cos(t * c + a * 1.5);

  return .5 + .5 * vec2(x, y);
}

void main() {
  vec2 uv = v_objectUV;
  uv += .5;
  vec2 grainUV = uv * 1000.;

  float grain = noise(grainUV, vec2(0.));
  float mixerGrain = .4 * u_grainMixer * (grain - .5);

  const float firstFrameOffset = 41.5;
  float t = .5 * (u_time + firstFrameOffset);

  float radius = smoothstep(0., 1., length(uv - .5));
  float center = 1. - radius;
  for (float i = 1.; i <= 2.; i++) {
    uv.x += u_distortion * center / i * sin(t + i * .4 * smoothstep(.0, 1., uv.y)) * cos(.2 * t + i * 2.4 * smoothstep(.0, 1., uv.y));
    uv.y += u_distortion * center / i * cos(t + i * 2. * smoothstep(.0, 1., uv.x));
  }

  vec2 uvRotated = uv;
  uvRotated -= vec2(.5);
  float angle = 3. * u_swirl * radius;
  uvRotated = rotate(uvRotated, -angle);
  uvRotated += vec2(.5);

  vec3 color = vec3(0.);
  float opacity = 0.;
  float totalWeight = 0.;

  for (int i = 0; i < ${_.maxColorCount}; i++) {
    if (i >= int(u_colorsCount)) break;

    vec2 pos = getPosition(i, t) + mixerGrain;
    vec3 colorFraction = u_colors[i].rgb * u_colors[i].a;
    float opacityFraction = u_colors[i].a;

    float dist = length(uvRotated - pos);

    dist = pow(dist, 3.5);
    float weight = 1. / (dist + 1e-3);
    color += colorFraction * weight;
    opacity += opacityFraction * weight;
    totalWeight += weight;
  }

  color /= max(1e-4, totalWeight);
  opacity /= max(1e-4, totalWeight);

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .35 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,S={name:"Default",params:{...p,speed:1,frame:0,colors:["#e0eaff","#241d9a","#f75092","#9f50d3"],distortion:.8,swirl:.1,grainMixer:0,grainOverlay:0}},R=(0,o.memo)(function({speed:e=S.params.speed,frame:t=S.params.frame,colors:r=S.params.colors,distortion:o=S.params.distortion,swirl:i=S.params.swirl,grainMixer:n=S.params.grainMixer,grainOverlay:a=S.params.grainOverlay,fit:s=S.params.fit,rotation:l=S.params.rotation,scale:u=S.params.scale,originX:d=S.params.originX,originY:p=S.params.originY,offsetX:m=S.params.offsetX,offsetY:v=S.params.offsetY,worldWidth:b=S.params.worldWidth,worldHeight:x=S.params.worldHeight,...y}){let _={u_colors:r.map(g),u_colorsCount:r.length,u_distortion:o,u_swirl:i,u_grainMixer:n,u_grainOverlay:a,u_fit:h[s],u_rotation:l,u_scale:u,u_offsetX:m,u_offsetY:v,u_originX:d,u_originY:p,u_worldWidth:b,u_worldHeight:x};return(0,c.jsx)(f,{...y,speed:e,frame:t,fragmentShader:w,uniforms:_})},function(e,t){for(let r in e){if("colors"===r){let r=Array.isArray(e.colors),o=Array.isArray(t.colors);if(!r||!o){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,r)=>e===t.colors?.[r]))return!1;continue}if(!1===Object.is(e[r],t[r]))return!1}return!0})},2821:(e,t,r)=>{r.d(t,{$:()=>o});function o(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,o,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t)){var n=t.length;for(r=0;r<n;r++)t[r]&&(o=e(t[r]))&&(i&&(i+=" "),i+=o)}else for(o in t)t[o]&&(i&&(i+=" "),i+=o);return i}(e))&&(o&&(o+=" "),o+=t);return o}},3011:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let o=r(2115);function i(e,t){let r=(0,o.useRef)(null),i=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,o)),t&&(i.current=n(t,o))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3078:(e,t)=>{function r(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(r,o(e));else t.set(r,o(i));return t}function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,o]of t.entries())e.append(r,o)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return n},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},5889:(e,t,r)=>{r.d(t,{QP:()=>N});let o=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],i=t.nextPart.get(r),n=i?o(e.slice(1),i):void 0;if(n)return n;if(0===t.validators.length)return;let a=e.join("-");return t.validators.find(({validator:e})=>e(a))?.classGroupId},i=/^\[(.+)\]$/,n=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:a(t,e)).classGroupId=r;return}if("function"==typeof e)return s(e)?void n(e(o),t,r,o):void t.validators.push({validator:e,classGroupId:r});Object.entries(e).forEach(([e,i])=>{n(i,a(t,e),r,o)})})},a=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},s=e=>e.isThemeGetter,l=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,u=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},c=/\s+/;function d(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=f(e))&&(o&&(o+=" "),o+=t);return o}let f=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=f(e[o]))&&(r&&(r+=" "),r+=t);return r},p=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},h=/^\[(?:([a-z-]+):)?(.+)\]$/i,g=/^\d+\/\d+$/,m=new Set(["px","full","screen"]),v=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,b=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,x=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,y=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,w=e=>R(e)||m.has(e)||g.test(e),S=e=>j(e,"length",I),R=e=>!!e&&!Number.isNaN(Number(e)),E=e=>j(e,"number",R),U=e=>!!e&&Number.isInteger(Number(e)),z=e=>e.endsWith("%")&&R(e.slice(0,-1)),A=e=>h.test(e),P=e=>v.test(e),O=new Set(["length","size","percentage"]),B=e=>j(e,O,L),T=e=>j(e,"position",L),M=new Set(["image","url"]),C=e=>j(e,M,D),k=e=>j(e,"",F),V=()=>!0,j=(e,t,r)=>{let o=h.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},I=e=>b.test(e)&&!x.test(e),L=()=>!1,F=e=>y.test(e),D=e=>_.test(e);Symbol.toStringTag;let N=function(e,...t){let r,a,s,f=function(u){let c;return a=(r={cache:(e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,i=(i,n)=>{r.set(i,n),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(i(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):i(e,t)}}})((c=t.reduce((e,t)=>t(e),e())).cacheSize),parseClassName:(e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,i=t[0],n=t.length,a=e=>{let r,a=[],s=0,l=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===s){if(c===i&&(o||e.slice(u,u+n)===t)){a.push(e.slice(l,u)),l=u+n;continue}if("/"===c){r=u;continue}}"["===c?s++:"]"===c&&s--}let u=0===a.length?e:e.substring(l),c=u.startsWith("!"),d=c?u.substring(1):u;return{modifiers:a,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};return r?e=>r({className:e,parseClassName:a}):a})(c),...(e=>{let t=(e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return l(Object.entries(e.classGroups),r).forEach(([e,r])=>{n(r,o,e,t)}),o})(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),o(r,t)||(e=>{if(i.test(e)){let t=i.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}})(e)},getConflictingClassGroupIds:(e,t)=>{let o=r[e]||[];return t&&a[e]?[...o,...a[e]]:o}}})(c)}).cache.get,s=r.cache.set,f=p,p(u)};function p(e){let t=a(e);if(t)return t;let o=((e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:i}=t,n=[],a=e.trim().split(c),s="";for(let e=a.length-1;e>=0;e-=1){let t=a[e],{modifiers:l,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:f}=r(t),p=!!f,h=o(p?d.substring(0,f):d);if(!h){if(!p||!(h=o(d))){s=t+(s.length>0?" "+s:s);continue}p=!1}let g=u(l).join(":"),m=c?g+"!":g,v=m+h;if(n.includes(v))continue;n.push(v);let b=i(h,p);for(let e=0;e<b.length;++e){let t=b[e];n.push(m+t)}s=t+(s.length>0?" "+s:s)}return s})(e,r);return s(e,o),o}return function(){return f(d.apply(null,arguments))}}(()=>{let e=p("colors"),t=p("spacing"),r=p("blur"),o=p("brightness"),i=p("borderColor"),n=p("borderRadius"),a=p("borderSpacing"),s=p("borderWidth"),l=p("contrast"),u=p("grayscale"),c=p("hueRotate"),d=p("invert"),f=p("gap"),h=p("gradientColorStops"),g=p("gradientColorStopPositions"),m=p("inset"),v=p("margin"),b=p("opacity"),x=p("padding"),y=p("saturate"),_=p("scale"),O=p("sepia"),M=p("skew"),j=p("space"),I=p("translate"),L=()=>["auto","contain","none"],F=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",A,t],N=()=>[A,t],W=()=>["",w,S],G=()=>["auto",R,A],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],X=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Y=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",A],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[R,A];return{cacheSize:500,separator:":",theme:{colors:[V],spacing:[w,S],blur:["none","",P,A],brightness:Q(),borderColor:[e],borderRadius:["none","","full",P,A],borderSpacing:N(),borderWidth:W(),contrast:Q(),grayscale:q(),hueRotate:Q(),invert:q(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[z,S],inset:D(),margin:D(),opacity:Q(),padding:N(),saturate:Q(),scale:Q(),sepia:q(),skew:Q(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",A]}],container:["container"],columns:[{columns:[P]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),A]}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",U,A]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",A]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",U,A]}],"grid-cols":[{"grid-cols":[V]}],"col-start-end":[{col:["auto",{span:["full",U,A]},A]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[V]}],"row-start-end":[{row:["auto",{span:[U,A]},A]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",A]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",A]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",A,t]}],"min-w":[{"min-w":[A,t,"min","max","fit"]}],"max-w":[{"max-w":[A,t,"none","full","min","max","fit","prose",{screen:[P]},P]}],h:[{h:[A,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[A,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[A,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[A,t,"auto","min","max","fit"]}],"font-size":[{text:["base",P,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[V]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",R,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,A]}],"list-image":[{"list-image":["none",A]}],"list-style-type":[{list:["none","disc","decimal",A]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,S]}],"underline-offset":[{"underline-offset":["auto",w,A]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),T]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",B]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},C]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:$()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[w,A]}],"outline-w":[{outline:[w,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[w,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",P,k]}],"shadow-color":[{shadow:[V]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...X(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":X()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",P,A]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",A]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",A]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",A]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[U,A]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",A]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",A]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",A]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,S,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})},7045:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},7670:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return n},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}});let o=r(9417)._(r(3078)),i=/https?|ftp|gopher|file/;function n(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+n+u+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return n(e)}},8607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return n}});let o=r(2296),i=r(2929);function n(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}}}]);