(window.webpackJsonpbikeshop=window.webpackJsonpbikeshop||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/mountain-bike.f2681ce2.svg"},32:function(e,t,a){e.exports=a.p+"static/media/background.1e953ee9.jpeg"},33:function(e,t,a){e.exports=a.p+"static/media/spinner.b434fa88.gif"},36:function(e,t,a){e.exports=a.p+"static/media/spinner.b434fa88.gif"},39:function(e,t,a){e.exports=a(61)},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(28),l=a.n(c),o=a(21),i=a(2),s=a(18),m=a.n(s),u=a(22),p=a(8),d=a(9),_=a(11),f=a(10),E=a(12);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=n.a.createContext(),b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={products:[],sortedProducts:[],premiumProducts:[],cart:[],loading:!0,type:"wszystkie",price:0,minPrice:0,maxPrice:0,subTotal:0,ship:0,total:0,premium:!1,color:"wszystkie"},a.sleep=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){setTimeout((function(){return e()}),10)})));case 1:case"end":return e.stop()}}),e)}))),a.fetchData=Object(u.a)(m.a.mark((function e(){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://serene-wright-c7a405.netlify.com/data/products.json");case 3:return t=e.sent,e.next=6,a.sleep();case 6:return e.next=8,t.json();case 8:r=e.sent,a.setData(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error: ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),a.setData=function(e){var t=Object(i.a)(e),r=Object(i.a)(t),n=t.filter((function(e){return e.premium}));n=n.splice(0,3);var c=Math.max.apply(Math,Object(i.a)(t.map((function(e){return e.price})))),l=c;a.setState((function(){return{products:t,sortedProducts:r,premiumProducts:n,price:c,maxPrice:l,loading:!1}}))},a.getItem=function(e){var t=Object(i.a)(a.state.products),r=parseInt(e);return t.find((function(e){return e.id===r}))},a.addToCart=function(e){var t=Object(i.a)(a.state.products);t=t.map((function(t){return t.id===e&&(t.inCart=!0,t.count=1,t.total=t.count*t.price),t}));var r=Object(i.a)(a.state.sortedProducts);r=r.map((function(t){return t.id===e&&(t.inCart=!0,t.count=1,t.total=t.count*t.price),t}));var n=a.getItem(e),c=Object(i.a)(a.state.cart);c.push(n),a.setState((function(){return{products:t,sortedProducts:r,cart:c}}),a.calculateCart)},a.deleteFromCart=function(e){var t=parseInt(e),r=Object(i.a)(a.state.cart);r=r.filter((function(e){return e.id!==t}));var n=Object(i.a)(a.state.products);n=n.map((function(e){return e.id===t&&(e.inCart=!1,e.count=0,e.total=0),e}));var c=Object(i.a)(a.state.sortedProducts);c=c.map((function(e){return e.id===t&&(e.inCart=!1,e.count=0,e.total=0),e})),a.setState((function(){return{products:n,sortedProducts:c,cart:r}}),a.calculateCart)},a.increaseCount=function(e){var t=parseInt(e),r=Object(i.a)(a.state.cart);r=r.map((function(e){return e.id===t&&(e.count+=1),e})),a.setState((function(){return{cart:r}}),a.calculateCart)},a.decreaseCount=function(e){var t=parseInt(e),r=Object(i.a)(a.state.cart);r=r.filter((function(e){if(e.id===t){if(!(e.count>1))return a.deleteFromCart(t),!1;e.count-=1}return!0})),a.setState((function(){return{cart:r}}),a.calculateCart)},a.calculateCart=function(){var e=Object(i.a)(a.state.cart);e=e.map((function(e){return e.total=e.count*e.price,e}));var t=0;e.forEach((function(e){return t+=e.total}));var r=.1*t,n=t+r;a.setState((function(){return{cart:e,subTotal:t,ship:r,total:n}}))},a.handleChange=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value,r=e.target.name;a.setState(Object(o.a)({},r,t),a.filterProducts)},a.filterProducts=function(){var e=Object(i.a)(a.state.products),t=a.state,r=t.color,n=t.type,c=t.price,l=t.premium;"wszystkie"!==r&&(e=e.filter((function(e){return e.color===r}))),"wszystkie"!==n&&(e=e.filter((function(e){return e.type===n}))),e=e.filter((function(e){return e.price<=c})),l&&(e=e.filter((function(e){return e.premium}))),a.setState((function(){return{sortedProducts:e}}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return n.a.createElement(N.Provider,{value:g({},this.state,{getItem:this.getItem,addToCart:this.addToCart,deleteFromCart:this.deleteFromCart,increaseCount:this.increaseCount,decreaseCount:this.decreaseCount,handleChange:this.handleChange})},this.props.children)}}]),t}(r.Component),v=N.Consumer,P=a(4),k=a(13),y=(a(45),a(29)),O=a.n(y),C=a(7),j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={menuIsOpen:!1},a.handleClick=function(){a.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context.cart.length,t=this.state.menuIsOpen;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__top"},n.a.createElement("div",{className:"header__logo"},n.a.createElement("img",{src:O.a,alt:"logo",className:"header__img"})),n.a.createElement(C.d,{onClick:this.handleClick,className:"header__toggle"})),n.a.createElement("div",{className:"header__bottom"},n.a.createElement("ul",{className:"header__menu ".concat(t?"showMenu":"")},n.a.createElement("li",{className:"header__menu-item"},n.a.createElement(P.c,{exact:!0,to:"/",className:"header__link"},"Strona g\u0142\xf3wna")),n.a.createElement("li",{className:"header__menu-item"},n.a.createElement(P.c,{to:"/products",className:"header__link"},"Produkty")),n.a.createElement("li",{className:"header__menu-item"},n.a.createElement(P.c,{to:"/contact",className:"header__link"},"Kontakt")),n.a.createElement("li",{className:"header__menu-item"},n.a.createElement(P.c,{to:"/cart",className:"header__link cart-icon"},n.a.createElement(C.c,null),e>0&&n.a.createElement("span",{className:"cart-icon__count"},e))))))}}]),t}(r.Component);j.contextType=N;var w=j,x=a(19),z=a(17),L=a(32),I=a.n(L),T=(a(51),a(33)),S=a.n(T),D=(a(52),function(){return n.a.createElement(v,null,(function(e){var t=e.loading,a=e.premiumProducts;return a&&(a=a.map((function(e){var t=e.id,a=e.img,r=e.name,c=e.price;return n.a.createElement("div",{key:t,className:"premium__card"},n.a.createElement("img",{src:a,alt:"img",className:"premium__img"}),n.a.createElement("h3",{className:"premium__name"},r),n.a.createElement("span",{className:"premium__price"},c," PLN"),n.a.createElement(P.b,{to:"/products/".concat(t),className:"premium__btn"},"Zobacz produkt"))}))),t?n.a.createElement("img",{className:"spinner",src:S.a,alt:"elo"}):n.a.createElement("section",{className:"premium"},n.a.createElement("h1",{className:"premium__title"},"Premium Products"),n.a.createElement("div",{className:"premium__gallery"},a))}))});function F(){var e=Object(x.a)(["\n  min-height: 50vh;\n  background: linear-gradient(to right bottom,\n    rgba(0,0,0, .3),\n    rgba(0,0,0, .7)\n  ),\n    url(",") center center/cover;\n"]);return F=function(){return e},e}var q=z.a.div(F(),I.a),K=function(){return n.a.createElement("section",{className:"home"},n.a.createElement("div",{className:"home__top"},n.a.createElement(q,null,n.a.createElement("h1",{className:"home__title"},"Zapraszam i polecam,",n.a.createElement("span",{className:"home__title--break"},"Piotr Fronczewski")))),n.a.createElement("div",{className:"home__bottom"},n.a.createElement(D,null)))},M=(a(54),function(e){var t=e.product,a=e.addToCart,r=t.name,c=t.img,l=t.price,o=t.inCart,i=t.id;return n.a.createElement("div",{className:"cardProduct"},n.a.createElement(P.b,{to:"/products/".concat(i)},n.a.createElement("h4",{className:"cardProduct__name"},r),n.a.createElement("img",{src:c,alt:r,className:"cardProduct__img"})),n.a.createElement("div",{className:"cardProduct__info"},n.a.createElement("span",{className:"cardProduct__price"},l," PLN"),n.a.createElement("button",{onClick:function(){return a(i)},disabled:o,className:"cardProduct__btn ".concat(o&&" cardProduct__btn--inCart")},o?"W koszyku":"Do koszyka")))}),A=(a(55),function(e){function t(){return Object(p.a)(this,t),Object(_.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context,t=e.handleChange,a=e.products,r=e.sortedProducts,c=e.addToCart,l=e.color,o=e.type,s=e.minPrice,m=e.maxPrice,u=e.price,p=e.premium,d=["wszystkie"].concat(Object(i.a)(new Set(a.map((function(e){return e.color}))))),_=["wszystkie"].concat(Object(i.a)(new Set(a.map((function(e){return e.type})))));return r.length&&(r=r.map((function(e){return n.a.createElement(M,{key:e.id,product:e,addToCart:c})}))),n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"filterProducts"},n.a.createElement("form",{className:"filterProducts__form"},n.a.createElement("div",{className:"filterProducts__input-group"},n.a.createElement("label",{htmlFor:"color",className:"filterProducts__label"},"Kolor: "),n.a.createElement("select",{className:"filterProducts__select",name:"color",id:"color",value:l,onChange:t},d.map((function(e){return n.a.createElement("option",{className:"filterProducts__option",key:e,value:e},e)})))),n.a.createElement("div",{className:"filterProducts__input-group"},n.a.createElement("label",{htmlFor:"type",className:"filterProducts__label"},"Typ: "),n.a.createElement("select",{className:"filterProducts__select",name:"type",id:"type",value:o,onChange:t},_.map((function(e){return n.a.createElement("option",{className:"filterProducts__option",key:e,value:e},e)})))),n.a.createElement("div",{className:"filterProducts__input-group"},n.a.createElement("label",{htmlFor:"price",className:"filterProducts__label"},"Cena:"),n.a.createElement("input",{type:"range",name:"price",id:"price",min:s,max:m,value:u,onChange:t}),n.a.createElement("div",{className:"filterProducts__result"},u)),n.a.createElement("div",{className:"filterProducts__input-group"},n.a.createElement("label",{htmlFor:"premium",className:"filterProducts__label"},"Tylko premium:"),n.a.createElement("input",{type:"checkbox",name:"premium",id:"premium",checked:p,onChange:t})))),n.a.createElement("section",{className:"sortedProducts"},r))}}]),t}(r.Component));A.contextType=N;var W=A,J=a(36),U=a.n(J),Z=(a(56),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(_.a)(this,Object(f.a)(t).call(this,e))).state={productID:a.props.match.params.id,item:null},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.context,t=e.loading,a=e.addToCart,r=this.context.getItem(this.state.productID);if(t&&!r)return n.a.createElement("img",{src:U.a,className:"spinner",alt:"loading"});var c=r.name,l=r.img,o=r.type,i=r.size,s=r.color,m=r.company,u=r.description,p=r.price,d=r.inCart,_=r.id;return n.a.createElement("section",{className:"singleProduct"},n.a.createElement("h1",{className:"singleProduct__title"},c),n.a.createElement("div",{className:"singleProduct__wrapper"},n.a.createElement("div",{className:"singleProduct__imgContainer"},n.a.createElement("img",{src:l,className:"singleProduct__img",alt:c})),n.a.createElement("div",{className:"singleProduct__info"},n.a.createElement("h5",{className:"singleProduct__name"},"Nazwa: ",c),n.a.createElement("h5",{className:"singleProduct__company"},"Producent: ",m),n.a.createElement("h5",{className:"singleProduct__type"},"Typ: ",o),n.a.createElement("h5",{className:"singleProduct__size"},"Rozmiar: ",i),n.a.createElement("h5",{className:"singleProduct__color"},"Kolor: ",s),n.a.createElement("p",{className:"singleProduct__description"},"Opis: ",u),n.a.createElement("h5",{className:"singleProduct__price"},"Cena: ",p," PLN"),n.a.createElement("button",{disabled:d,className:"singleProduct__btn ".concat(d&&" singleProduct__btn--inCart"),onClick:function(){return a(_)}},d?"W koszyku":"Do koszyka!"))))}}]),t}(r.Component));Z.contextType=N;var B=Z;function R(){var e=Object(x.a)(["\n  \n\n  h1{\n    font-size: 2rem;\n    text-align: center;\n    margin: 2rem 0;\n  }\n  p{\n    padding: 0 3rem;\n    margin: 2rem 0;\n  }\n"]);return R=function(){return e},e}var G=z.a.div(R()),H=function(){return n.a.createElement(G,null,n.a.createElement("h1",null,"Kontakt"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae fugit id perspiciatis, quis voluptatum numquam itaque aspernatur accusamus laborum! Ullam quidem deserunt impedit nam? Obcaecati delectus ex architecto impedit consectetur commodi eligendi, earum corporis rem minus numquam."))},Q=(a(57),a(58),function(e){var t=e.product,a=t.img,r=t.name,c=t.price,l=t.count,o=t.total,i=t.id;return n.a.createElement("ul",{className:"cartLine"},n.a.createElement("li",{className:"cartLine__item"},n.a.createElement("img",{src:a,alt:r,className:"cartLine__img"})),n.a.createElement("li",{className:"cartLine__item"},r),n.a.createElement("li",{className:"cartLine__item"},c," PLN"),n.a.createElement("li",{className:"cartLine__item"},n.a.createElement(v,null,(function(e){var t=e.increaseCount,a=e.decreaseCount;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"cartLine__changeCount",onClick:function(){return a(i)}},"-"),l,n.a.createElement("span",{className:"cartLine__changeCount",onClick:function(){return t(i)}},"+"))}))),n.a.createElement("li",{className:"cartLine__item cartLine__trash"},n.a.createElement(v,null,(function(e){var t=e.deleteFromCart;return n.a.createElement(C.e,{onClick:function(){return t(i)}})}))),n.a.createElement("li",{className:"cartLine__item"},o))}),V=function(){return n.a.createElement("section",{className:"cart"},n.a.createElement(v,null,(function(e){return e.cart.length?n.a.createElement("ul",{className:"cart__bar"},n.a.createElement("li",{className:"cart__bar-item"},"Produkt"),n.a.createElement("li",{className:"cart__bar-item"},"Nazwa"),n.a.createElement("li",{className:"cart__bar-item"},"Cena"),n.a.createElement("li",{className:"cart__bar-item"},"Ilo\u015b\u0107"),n.a.createElement("li",{className:"cart__bar-item"},"Usu\u0144"),n.a.createElement("li",{className:"cart__bar-item"},"Suma")):n.a.createElement(n.a.Fragment,null)})),n.a.createElement(v,null,(function(e){var t=e.cart,a=e.subTotal,r=e.ship,c=e.total;if(t.length<1)return n.a.createElement("div",{class:"cart__info"},"Koszyk jest pusty");var l=t.map((function(e){return n.a.createElement(Q,{key:e.id,product:e})}));return n.a.createElement(n.a.Fragment,null,l,n.a.createElement("div",{className:"cart__summary"},n.a.createElement("h5",null,"Produkty: ",a," PLN"),n.a.createElement("h5",null,"Przesy\u0142ka: ",r," PLN"),n.a.createElement("h5",null,"Suma: ",c," PLN")))})))},X=(a(59),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer__top"},n.a.createElement("ul",{className:"footer__socials"},n.a.createElement("li",{className:"footer__socials-item"},n.a.createElement("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},n.a.createElement(C.a,{className:"footer__icon"}))),n.a.createElement("li",{className:"footer__socials-item"},n.a.createElement("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},n.a.createElement(C.b,{className:"footer__icon"}))),n.a.createElement("li",{className:"footer__socials-item"},n.a.createElement("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},n.a.createElement(C.f,{className:"footer__icon"}))),n.a.createElement("li",{className:"footer__socials-item"},n.a.createElement("a",{href:"https://google.com",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},n.a.createElement(C.g,{className:"footer__icon"}))))),n.a.createElement("div",{className:"footer__bottom"},"Wszelkie prawa zastrze\u017cone \xa9 2019"))}),Y=(a(60),function(){return n.a.createElement("div",{className:"container"},n.a.createElement(w,null),n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/",component:K}),n.a.createElement(k.a,{exact:!0,path:"/products",component:W}),n.a.createElement(k.a,{path:"/products/:id",component:B}),n.a.createElement(k.a,{path:"/contact",component:H}),n.a.createElement(k.a,{path:"/cart",component:V})),n.a.createElement(X,null))});l.a.render(n.a.createElement(b,null,n.a.createElement(P.a,null,n.a.createElement(Y,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.676d7567.chunk.js.map