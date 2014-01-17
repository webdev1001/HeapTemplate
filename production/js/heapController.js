var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__indexOf=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};define(["calendarController"],function(){var a;return a=function(){function a(){this.hideTranslationsList=__bind(this.hideTranslationsList,this),this.showTranslationsList=__bind(this.showTranslationsList,this),this.addTranslation=__bind(this.addTranslation,this),this.hideTranslationForm=__bind(this.hideTranslationForm,this),this.showTranslationForm=__bind(this.showTranslationForm,this),this.confirmRemoveConfirmation=__bind(this.confirmRemoveConfirmation,this),this.denyRemoveConfirmation=__bind(this.denyRemoveConfirmation,this),this.showRemoveConfirmation=__bind(this.showRemoveConfirmation,this),this.denyLogin=__bind(this.denyLogin,this),this.showLoginPopup=__bind(this.showLoginPopup,this),this.closeEditArticleForm=__bind(this.closeEditArticleForm,this),this.resetEditArticleForm=__bind(this.resetEditArticleForm,this),this.saveEditArticleForm=__bind(this.saveEditArticleForm,this),this.changeEditArticleForm=__bind(this.changeEditArticleForm,this),this.showEditArticleForm=__bind(this.showEditArticleForm,this);var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;if(__indexOf.call(document.createElement("template"),"content")<0)for(w=document.querySelectorAll("template"),i=0,m=w.length;m>i;i++)h=w[i],h.content=h.childNodes[0];for(g=document.querySelectorAll(".show-list"),d=document.querySelectorAll(".hide-list"),e=document.querySelectorAll(".likes.disabled"),a=document.querySelectorAll(".add"),f=document.querySelectorAll(".remove"),c=document.querySelectorAll(".edit"),this.addTranslationFormTemplate=document.querySelector("#add-translation-form"),this.confirmArticleRemoveTemplate=document.querySelector("#confirm-article-remove"),this.loginPopupTemplate=document.querySelector("#login-popup"),this.editArticleTemplate=document.querySelector("#edit-article-form"),j=0,n=c.length;n>j;j++)b=c[j],b.addEventListener("click",this.showEditArticleForm);for(k=0,o=g.length;o>k;k++)b=g[k],b.addEventListener("click",this.showTranslationsList);for(l=0,p=d.length;p>l;l++)b=d[l],b.addEventListener("click",this.hideTranslationsList);for(t=0,q=a.length;q>t;t++)b=a[t],b.addEventListener("click",this.showTranslationForm);for(u=0,r=f.length;r>u;u++)b=f[u],b.addEventListener("click",this.showRemoveConfirmation);for(v=0,s=e.length;s>v;v++)b=e[v],b.addEventListener("click",this.showLoginPopup)}return a.prototype.showEditArticleForm=function(a){var b,c,d,e,f,g,h;for(a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,d=this.editArticleTemplate.content.cloneNode(!0),d.querySelector("button.close").addEventListener("click",this.closeEditArticleForm),d.querySelector("button.reset").addEventListener("click",this.resetEditArticleForm),this.resetEditArticleForm(null,d,b),h=d.querySelectorAll("input"),f=0,g=h.length;g>f;f++)e=h[f],e.addEventListener("change",this.changeEditArticleForm);return b.style.display="none",null===b.nextSibling?b.parentNode.appendChild(d):b.parentNode.insertBefore(d,b.nextSibling),b.nextSibling.addEventListener("submit",this.saveEditArticleForm)},a.prototype.changeEditArticleForm=function(a){var b;for(b=a.currentTarget;"FORM"!==b.tagName;)b=b.parentNode;return b.classList.add("changed")},a.prototype.saveEditArticleForm=function(a){var b;return a.preventDefault(),b=a.currentTarget,b.classList.contains("changed")?console.log("отправляем данные на сервер"):(console.log("ничего не изменилось"),void 0)},a.prototype.resetEditArticleForm=function(a,b,c){var d,e,f,g,h,i;if(null!==a){for(a.preventDefault(),b=a.currentTarget;"FORM"!==b.tagName;)b=b.parentNode;c=b.previousSibling,b.classList.remove("changed")}for(b.querySelector("[name='title']").value=c.querySelector(".title a").innerHTML,b.querySelector("[name='url']").value=c.querySelector(".title a").getAttribute("href"),b.querySelector("[name='domain']").value=c.querySelector(".domain").innerHTML,b.querySelector("[name='date']").value=c.querySelector("time").innerHTML,b.querySelector("[name='language']").value=c.querySelector(".language").innerHTML,d=c.querySelector(".author"),null!==d&&(b.querySelector("[name='author']").value=d.innerHTML),g=c.querySelectorAll(".tags a"),e=[],h=0,i=g.length;i>h;h++)f=g[h],e.push(f.innerHTML);return b.querySelector("[name='tags']").value=e.join(", ")},a.prototype.closeEditArticleForm=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.previousSibling,d.parentNode.removeChild(d),b.style.display="block"},a.prototype.showLoginPopup=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,b.appendChild(this.loginPopupTemplate.content.cloneNode(!0)),d=b.querySelector(".login-popup"),d.querySelector(".deny").addEventListener("click",this.denyLogin)},a.prototype.denyLogin=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d)},a.prototype.showRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),b=a.currentTarget,d=b.parentNode.parentNode,d.appendChild(this.confirmArticleRemoveTemplate.content.cloneNode(!0)),c=d.querySelector(".confirm-article-remove"),c.querySelector(".confirm").addEventListener("click",this.confirmRemoveConfirmation),c.querySelector(".deny").addEventListener("click",this.denyRemoveConfirmation)},a.prototype.denyRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode,b=d.parentNode,b.removeChild(d)},a.prototype.confirmRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode,b=d.parentNode,b.removeChild(d),b.parentNode.removeChild(b)},a.prototype.showTranslationForm=function(a){var b,c,d;return a.preventDefault(),b=a.currentTarget,b.style.display="none",d=b.parentNode.parentNode,d.appendChild(this.addTranslationFormTemplate.content.cloneNode(!0)),c=d.querySelector(".add-translation-form"),c.addEventListener("submit",this.addTranslation),c.querySelector("button[type='reset']").addEventListener("click",this.hideTranslationForm)},a.prototype.hideTranslationForm=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d),b.querySelector(".add").style.display="inline-block"},a.prototype.addTranslation=function(a){return a.preventDefault()},a.prototype.showTranslationsList=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,d=b.querySelector(".translations"),d.style.display="block",b.querySelector(".hide-list").style.display="inline-block",c.style.display="none"},a.prototype.hideTranslationsList=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,d=b.querySelector(".translations"),d.style.display="none",c.style.display="none",b.querySelector(".show-list").style.display="inline-block"},a}()});