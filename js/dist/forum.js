(()=>{var o={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return o.d(r,{a:r}),r},d:(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t),o.d(t,{extend:()=>x});const r=flarum.core.compat["forum/app"];var e=o.n(r);const n=flarum.core.compat["common/extenders"];var i=o.n(n);function a(o,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},a(o,t)}function s(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,a(o,t)}const u=flarum.core.compat["common/components/Page"];var c=o.n(u);const p=flarum.core.compat["common/extend"],l=flarum.core.compat["common/utils/Stream"];var d=o.n(l);const f=flarum.core.compat["forum/components/SignUpModal"];var y=o.n(f),g=function(o){function t(){return o.apply(this,arguments)||this}s(t,o);var r=t.prototype;return r.oninit=function(t){var r=this;o.prototype.oninit.call(this,t),(0,p.extend)(y().prototype,"fields",(function(o){var t=e().forum.data.attributes["fof-doorman.allowPublic"]?e().translator.trans("fof-doorman.forum.sign_up.doorman_placeholder_optional"):e().translator.trans("fof-doorman.forum.sign_up.doorman_placeholder"),r=m.route.param();this.doorkey=d()(r.doorkey)||d()(""),o.add("doorkey",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"fof-doorkey",type:"text",placeholder:t,bidi:this.doorkey,disabled:this.loading})))})),m.route.set("/"),setTimeout((function(){return e().modal.show(r.createModal())}),1500)},r.createModal=function(){return null},r.view=function(){return m("div",null)},t}(c());const v=flarum.core.compat["forum/components/LogInModal"];var h=o.n(v),b=function(o){function t(){return o.apply(this,arguments)||this}return s(t,o),t.prototype.createModal=function(){if(!e().session.user)return h()},t}(g),_=function(o){function t(){return o.apply(this,arguments)||this}return s(t,o),t.prototype.createModal=function(){if(!e().session.user)return y()},t}(g);const k=flarum.core.compat["forum/components/ForgotPasswordModal"];var M=o.n(k),O=function(o){function t(){return o.apply(this,arguments)||this}return s(t,o),t.prototype.createModal=function(){if(!e().session.user)return M()},t}(g);const P=flarum.core.compat["forum/components/Page"];var w=o.n(P);const S=flarum.core.compat["forum/components/DiscussionComposer"];var j=o.n(S),L=function(o){function t(){return o.apply(this,arguments)||this}s(t,o);var r=t.prototype;return r.oninit=function(t){if(o.prototype.oninit.call(this,t),!e().session.user)return setTimeout((function(){return e().modal.show(h())}),500),m.route.set("/");var r=m.route.param();m.route.set("/all"),setTimeout((function(){var o={user:e().session.user};if(r.content&&(o.originalContent=r.content),e().composer.load(j(),o),e().composer.show(),r.title&&e().composer.fields.title(r.title),r.primary_tag){var t=e().store.getBy("tags","slug",r.primary_tag);if(t){var n=t.parent();e().composer.fields.tags=n?[n,t]:[t]}}}),0)},r.view=function(){return m("div")},t}(w());const x=[(new(i().Routes)).add("directLinksLogin","/login",b).add("directLinksSignup","/signup",_).add("directLinksSignupInvite","/signup/:doorkey",_).add("directLinksForgot","/forgot",O).add("directLinksComposer","/composer",L)];e().initializers.add("fof/direct-links-invite",(function(){}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map