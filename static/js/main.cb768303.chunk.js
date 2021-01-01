(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(8),s=a.n(c),i=a(4),l=a(5),u=a(7),h=a(6),d=(a(30),a(9)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.imageName;""!==a.trim()?(e.props.onSubmit(a.toLowerCase()),e.setState({imageName:""})):d.b.error("\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u043f\u043e\u0438\u0441\u043a\u0430.",{toastId:"searchbar"})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(n.jsxs)("form",{className:"SearchForm",children:[Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleNameChange}),Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}}]),a}(r.Component),g=a(12),p=a(22),j=a.n(p),b=(a(13),a(23)),f=a.n(b),v="19294514-cad9d9492229c8304ad27e22b",O=4;var y={fetchImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return f.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(v,"&image_type=photo&orientation=horizontal&per_page=").concat(O)).then((function(e){return 200===e.status?e.data.hits:Promise.reject(new Error("Images are not found."))}))}};var S=function(e){var t=e.onClick,a=e.src,r=e.alt,o=e.largeImgUrl;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{className:"ImageGalleryItem-image",src:a,alt:r,"data-img-src":o,onClick:function(e){t(o,r)}})})};var w=function(e){var t=e.onClick;return Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},x=(a(59),a(24)),k=a.n(x);var C=function(){return Object(n.jsx)(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100})},I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:t,alt:a})})})}}]),a}(r.Component),N="idle",M="pending",F="resolved",A="rejected",E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,status:N,page:1,isModalOpen:!1,modalImg:"",modalAlt:""},e.handleRequest=function(t,a){y.fetchImage(t,a).then((function(t){return e.setState((function(e){return a>1&&(t=[].concat(Object(g.a)(e.images),Object(g.a)(t))),{images:t,status:F}}))})).catch((function(t){return e.setState({error:t,status:A})}))},e.handleLoadMoreBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e.setState((function(e){return{isModalOpen:!e.isModalOpen,modalImg:t,modalAlt:a}}))},e.pageSmoothScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.showError=function(e){d.b.error(e.message,{toastId:"error"})},e.showInfo=function(){d.b.info("Images are not found.",{toastId:"resolved"})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.searchQuery,n=this.props.searchQuery,r=t.page,o=this.state.page;return this.state.status===F&&this.pageSmoothScroll(),a!==n?(this.setState({status:M,page:1}),void this.handleRequest(n)):r!==o?(this.setState({status:M}),void this.handleRequest(n,o)):void 0}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.error,o=t.status,c=t.isModalOpen,s=t.modalImg,i=t.modalAlt;return o===M?Object(n.jsx)(C,{}):(o===A&&this.showError(r),o===F?a.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:"ImageGallery",children:a.map((function(t){var a=t.tags,r=t.webformatURL,o=t.largeImageURL;return Object(n.jsx)(S,{src:r,alt:a,largeImgUrl:o,onClick:e.toggleModal},j.a.generate())}))}),c&&Object(n.jsx)(I,{onClose:this.toggleModal,src:s,alt:i}),Object(n.jsx)(w,{onClick:this.handleLoadMoreBtn})]}):(this.showInfo(),null):null)}}]),a}(r.Component),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.onSubmit=function(t){e.setState({searchQuery:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d.a,{closeOnClick:!0,autoClose:2e3}),Object(n.jsx)(m,{onSubmit:this.onSubmit}),Object(n.jsx)(E,{searchQuery:this.state.searchQuery})]})}}]),a}(r.Component);a(79),a(80),a(81);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.cb768303.chunk.js.map