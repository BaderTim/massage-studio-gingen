(this["webpackJsonpMassage-Studio"]=this["webpackJsonpMassage-Studio"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(8),a=s.n(i),r=s(2),l=s(3),j=s(5),o=s(4),h=s(7),b=(s(14),s(15),s(16),s(0)),d=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={active:!1},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.props.active&&this.setState({active:!0})}},{key:"toggleAccordion",value:function(e){var t=("DIV"===e.target.tagName?e.target.parentNode:e.target).nextElementSibling;t.style.maxHeight?(this.setState({active:!1}),t.style.maxHeight=null):(this.setState({active:!0}),t.style.maxHeight=t.scrollHeight+"px")}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("button",{className:this.state.active?"accordion acc-active":"accordion",onClick:function(t){return e.toggleAccordion(t)},children:[Object(b.jsx)("div",{className:"acc-title-left",children:this.props.title}),Object(b.jsx)("div",{className:"acc-title-right",children:this.state.active?"-":"+"})]}),Object(b.jsx)("div",{className:"panel",style:this.props.active?{maxHeight:"fit-content"}:null,children:Object(b.jsx)("div",{className:"panel-content",children:this.props.children})})]})}}]),s}(n.a.Component),m=(s(18),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={impressumActive:!1},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{hidden:!this.state.impressumActive,className:"impressum-container",children:[Object(b.jsx)("button",{className:"btn btn-danger impressum-close",onClick:function(){return e.setState({impressumActive:!1})},children:"X"}),Object(b.jsxs)("div",{className:"impressum lightpeach-bg",children:[Object(b.jsx)("h1",{className:"display-4",children:"Impressum"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"lead",children:"Line one"}),Object(b.jsx)("p",{className:"lead",children:"Line two"}),Object(b.jsxs)("p",{className:"lead",children:["Line three ",Object(b.jsx)("strong",{children:"lol"})]}),Object(b.jsx)("p",{className:"lead",children:"Line four"})]})]}),Object(b.jsx)("div",{hidden:!this.state.impressumActive,className:"impressum-background"}),Object(b.jsx)("div",{className:"footer rhythm-bg",children:Object(b.jsx)("span",{className:"footer-content",onClick:function(){return e.setState({impressumActive:!e.state.impressumActive})},children:"Impressum"})})]})}}]),s}(n.a.Component)),u=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"toggleAccordion",value:function(e){e.target.classList.toggle("active");var t=e.target.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"MobilePage",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"entry-container",children:[Object(b.jsx)("h1",{className:"display-6 rhythm bold-sm",children:"Massage Gingen"}),Object(b.jsx)("h2",{className:"display-6 rythm",style:{fontSize:"15px"},children:"Massage - Therapie - Spa"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"intro",children:Object(b.jsx)("p",{className:"lead",children:"\xbbLuxus f\xfcr K\xf6rper, Seele und Geist.\xab"})}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"lead intro-text",children:"Anhaltender Stress setzt Ihrem K\xf6rper stark zu. Vertrauen Sie unserer Expertin, die Ihnen hilft, Ihre Verspannungen mit verschiedenen Massagen zu l\xf6sen."})]}),Object(b.jsxs)("div",{className:"accordion-container",children:[Object(b.jsx)("hr",{style:{margin:"0px"}}),Object(b.jsx)(d,{title:"Unser Angebot",children:Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center rhythm-bg-medium",children:["Klassische Massage",Object(b.jsx)("span",{className:"badge bg-success rounded-pill",children:"30 \u20ac"})]}),Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center rhythm-bg-light",children:["Kr\xe4uterstempel Massage",Object(b.jsx)("span",{className:"badge bg-success rounded-pill",children:"20 \u20ac"})]}),Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center rhythm-bg-medium",children:["Hot Stone Massage",Object(b.jsx)("span",{className:"badge bg-success rounded-pill",children:"60 \u20ac"})]}),Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center rhythm-bg-light",children:["Schr\xf6pfmassage",Object(b.jsx)("span",{className:"badge bg-success rounded-pill",children:"40 \u20ac"})]}),Object(b.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center rhythm-bg-medium",children:["Gesichtsmassage",Object(b.jsx)("span",{className:"badge bg-success rounded-pill",children:"22 \u20ac"})]})]})}),Object(b.jsx)("hr",{style:{margin:"0px"}}),Object(b.jsxs)(d,{title:"\xdcber Uns",children:[Object(b.jsx)("h1",{children:"Yeet"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"ok test 123 hahahaha"})]}),Object(b.jsx)("hr",{style:{margin:"0px"}})]}),Object(b.jsxs)("div",{className:"bottom-container",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=4915775200174&text=Hallo,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20f%C3%BCr%20eine%20Massage%20vereinbaren%20:)",target:"_blank",className:"list-group-item list-group-item-action list-group-item-success wa-termin",rel:"noreferrer",children:[Object(b.jsx)("img",{src:"wa_icon.png",width:"20px",alt:"wa_icon"})," "," Jetzt Termin vereinbaren"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("small",{className:"note",children:["Oder telefonisch unter ",Object(b.jsx)("a",{href:"tel:+4915775200174",children:"+49 15775200174"})]}),Object(b.jsx)("br",{})]})]}),Object(b.jsx)("div",{style:{marginTop:"auto"},children:Object(b.jsx)(m,{})})]})}}]),s}(n.a.Component),x=(s(19),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"BrowserPage",children:"Browser"})}}]),s}(n.a.Component)),g=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h.BrowserView,{children:Object(b.jsx)(x,{})}),Object(b.jsx)(h.MobileView,{children:Object(b.jsx)(u,{})})]})}}]),s}(n.a.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(b.jsxs)(n.a.StrictMode,{children:[Object(b.jsx)("link",{rel:"stylesheet",href:"css/bootstrap.css"}),Object(b.jsx)(g,{}),Object(b.jsx)("script",{src:"scripts/bootstrap.js"})]}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.0bfb1f97.chunk.js.map