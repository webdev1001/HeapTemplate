var __bind=function(a,b){return function(){return a.apply(b,arguments)}},__indexOf=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};define(["calendarController","pageController","donateController"],function(a,b,c){var d;return d=function(){function d(){this.addTranslation=__bind(this.addTranslation,this),this.hideTranslationForm=__bind(this.hideTranslationForm,this),this.changeTranslationURL=__bind(this.changeTranslationURL,this),this.showTranslationForm=__bind(this.showTranslationForm,this),this.confirmRemoveConfirmation=__bind(this.confirmRemoveConfirmation,this),this.denyRemoveConfirmation=__bind(this.denyRemoveConfirmation,this),this.showRemoveConfirmation=__bind(this.showRemoveConfirmation,this),this.denyLogin=__bind(this.denyLogin,this),this.showLoginPopup=__bind(this.showLoginPopup,this),this.closeEditArticleForm=__bind(this.closeEditArticleForm,this),this.resetEditArticleForm=__bind(this.resetEditArticleForm,this),this.saveEditArticleForm=__bind(this.saveEditArticleForm,this),this.changeEditArticleForm=__bind(this.changeEditArticleForm,this),this.showEditArticleForm=__bind(this.showEditArticleForm,this),this.openCalendar=__bind(this.openCalendar,this),this.toggleTranslationArticleForm=__bind(this.toggleTranslationArticleForm,this),this.toggleFilter=__bind(this.toggleFilter,this),this.clearFilter=__bind(this.clearFilter,this),this.filterBy=__bind(this.filterBy,this),this.showAddArticleForm=__bind(this.showAddArticleForm,this),this.loadNextPage=__bind(this.loadNextPage,this),this.loadPage=__bind(this.loadPage,this),this.showDonateForm=__bind(this.showDonateForm,this),this.likeArticle=__bind(this.likeArticle,this);var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;if(__indexOf.call(document.createElement("template"),"content")<0)for(E=document.querySelectorAll("template"),m=0,q=E.length;q>m;m++)k=E[m],k.content=k.childNodes[0];for(this.lang="ru",h=document.querySelectorAll(".likes.disabled"),i=document.querySelectorAll("a.likes:not(.disabled)"),a=document.querySelectorAll(".add"),j=document.querySelectorAll(".remove"),e=document.querySelectorAll(".edit"),l=document.querySelectorAll(".translate"),d=document.querySelectorAll(".donate"),this.addArticleForm=document.querySelector(".add-article-form"),this.addArticleFormInput=this.addArticleForm.querySelector("input"),this.addArticleButton=document.getElementById("add-article-button"),this.iWantToTranslateTemplate=document.querySelector("#i-want-to-translate"),this.iDontWantToTranslateTemplate=document.querySelector("#i-dont-want-to-translate"),this.addTranslationFormTemplate=document.querySelector("#add-translation-form"),this.confirmArticleRemoveTemplate=document.querySelector("#confirm-article-remove"),this.loginPopupTemplate=document.querySelector("#login-popup"),this.editArticleTemplate=document.querySelector("#edit-article-form"),this.moreButton=document.querySelector(".more"),this.moreButton.addEventListener("click",this.loadNextPage),this.articleList=document.querySelector(".article-list"),n=0,r=d.length;r>n;n++)c=d[n],c.addEventListener("click",this.showDonateForm);for(o=0,s=l.length;s>o;o++)c=l[o],c.addEventListener("click",this.toggleTranslationArticleForm);for(p=0,t=e.length;t>p;p++)c=e[p],c.addEventListener("click",this.showEditArticleForm);for(z=0,u=a.length;u>z;z++)c=a[z],c.addEventListener("click",this.showTranslationForm);for(A=0,v=j.length;v>A;A++)c=j[A],c.addEventListener("click",this.showRemoveConfirmation);for(B=0,w=i.length;w>B;B++)c=i[B],c.addEventListener("click",this.likeArticle);for(C=0,x=h.length;x>C;C++)c=h[C],c.addEventListener("click",this.showLoginPopup);for(this.addArticleFormInput.addEventListener("keyup",this.changeTranslationURL),this.addArticleButton.addEventListener("click",this.showAddArticleForm),this.filterButton=document.querySelector(".filter"),this.filterButton.addEventListener("click",this.toggleFilter),this.filterList=document.querySelector(".tag-list "),this.filterList.querySelector(".close").addEventListener("click",this.toggleFilter),this.filterList.querySelector(".clear").addEventListener("click",this.clearFilter),g=this.filterList.querySelectorAll("a"),D=0,y=g.length;y>D;D++)f=g[D],f.addEventListener("click",this.filterBy);this.page=new b,this.page.registerCallback(this.loadPage)}return d.prototype.likeArticle=function(a){var b,c;return a.preventDefault(),b=a.currentTarget,c=parseInt(b.innerHTML,10),b.classList.contains("liked")?c--:c++,b.innerHTML=c,b.classList.toggle("liked")},d.prototype.showDonateForm=function(a){var b,d,e;return a.preventDefault(),e=a.currentTarget,b=e.parentNode.parentNode,d=new c,d.appendTo(b)},d.prototype.loadPage=function(){var a=this;return this.page.getLastPage()===this.page.getPagesTotal()?this.moreButton.parentNode.removeChild(this.moreButton):window.setTimeout(function(){return a.moreButton.classList.remove("loading")},1500)},d.prototype.loadNextPage=function(a){return a.preventDefault(),this.moreButton.classList.contains("loading")?void 0:(this.moreButton.classList.add("loading"),this.page.addPage())},d.prototype.showAddArticleForm=function(a){var b;return a.preventDefault(),b=a.currentTarget,b.classList.add("open"),this.addArticleForm.classList.add("open"),this.addArticleFormInput.focus()},d.prototype.filterBy=function(a){var b;return a.preventDefault(),b=a.currentTarget,b.classList.toggle("selected")},d.prototype.clearFilter=function(a){var b,c,d,e,f;for(a.preventDefault(),b=this.filterList.querySelectorAll(".selected"),f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(c.classList.remove("selected"));return f},d.prototype.toggleFilter=function(a){return a.preventDefault(),this.filterButton.classList.toggle("selected"),this.filterList.classList.toggle("open")},d.prototype.toggleTranslationArticleForm=function(a){var b,c,d;return a.preventDefault(),b=a.currentTarget,d=b.parentNode,b.classList.contains("my")?(c=this.iWantToTranslateTemplate.content.cloneNode(!0),console.log("больше не переводишь")):(c=this.iDontWantToTranslateTemplate.content.cloneNode(!0),console.log("перевод за тобой")),d.insertBefore(c,b),d.removeChild(b),d.querySelector(".translate").addEventListener("click",this.toggleTranslationArticleForm)},d.prototype.openCalendar=function(b){var c,d,e;for(e=b.currentTarget;"FORM"!==e.tagName;)e=e.parentNode;return d=e.querySelector("[name='date']").value.trim(),0===d.length&&(d=null),c=new a(d,"DD MMMM YYYY",function(a){var b;return null!==a&&(b=a.format("DD MMMM YYYY"),e.querySelector("[name='date']").value!==b&&e.classList.add("changed"),e.querySelector("[name='date']").value=b),e.style.display="block"},this.lang),e.style.display="none",c.insertAfter(e)},d.prototype.showEditArticleForm=function(a){var b,c,d,e,f,g,h;for(a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,d=this.editArticleTemplate.content.cloneNode(!0),d.querySelector("button.close").addEventListener("click",this.closeEditArticleForm),d.querySelector("button.reset").addEventListener("click",this.resetEditArticleForm),d.querySelector(".open-calendar").addEventListener("click",this.openCalendar),this.resetEditArticleForm(null,d,b),h=d.querySelectorAll("input"),f=0,g=h.length;g>f;f++)e=h[f],e.addEventListener("change",this.changeEditArticleForm);return b.style.display="none",null===b.nextSibling?b.parentNode.appendChild(d):b.parentNode.insertBefore(d,b.nextSibling),b.nextSibling.addEventListener("submit",this.saveEditArticleForm)},d.prototype.changeEditArticleForm=function(a){var b;for(b=a.currentTarget;"FORM"!==b.tagName;)b=b.parentNode;return b.classList.add("changed")},d.prototype.saveEditArticleForm=function(a){var b,c,d,e,f,g,h,i,j,k;if(a.preventDefault(),c=a.currentTarget,!c.classList.contains("changed"))return void console.log("ничего не изменилось");for(console.log("отправляем данные на сервер"),b=c.previousSibling,b.querySelector(".title a").innerHTML=c.querySelector("[name='title']").value,b.querySelector(".title a").setAttribute("href",c.querySelector("[name='url']").value),b.querySelector(".domain a").innerHTML=c.querySelector("[name='domain']").value,b.querySelector("time").innerHTML=c.querySelector("[name='date']").value,b.querySelector("time").setAttribute("datetime",moment(c.querySelector("[name='date']").value,"DD MMMM YYYY").format("YYYY-MM-DD")),b.querySelector(".language a").innerHTML=c.querySelector("[name='language']").value,b.querySelector(".author").innerHTML=c.querySelector("[name='author']").value,f=document.createElement("MENU"),f.className="tags",h=c.querySelector("[name='tags']").value.split(","),d=!1,j=0,k=h.length;k>j;j++)g=h[j],d===!0&&f.appendChild(document.createTextNode(", ")),e=document.createElement("A"),e.setAttribute("href","/search/tags/"+g.trim()),e.appendChild(document.createTextNode(g.trim())),f.appendChild(e),d=!0;return i=b.querySelector(".tags"),i.parentNode.insertBefore(f,i),i.parentNode.removeChild(i),c.parentNode.removeChild(c),b.style.display="block"},d.prototype.resetEditArticleForm=function(a,b,c){var d,e,f,g,h,i;if(null!==a){for(a.preventDefault(),b=a.currentTarget;"FORM"!==b.tagName;)b=b.parentNode;c=b.previousSibling,b.classList.remove("changed")}for(b.querySelector("[name='title']").value=c.querySelector(".title a").innerHTML,b.querySelector("[name='url']").value=c.querySelector(".title a").getAttribute("href"),b.querySelector("[name='domain']").value=c.querySelector(".domain").innerHTML,b.querySelector("[name='date']").value=c.querySelector("time").innerHTML,b.querySelector("[name='language']").value=c.querySelector(".language").innerHTML,d=c.querySelector(".author"),null!==d&&(b.querySelector("[name='author']").value=d.innerHTML),g=c.querySelectorAll(".tags a"),e=[],h=0,i=g.length;i>h;h++)f=g[h],e.push(f.innerHTML);return b.querySelector("[name='tags']").value=e.join(", ")},d.prototype.closeEditArticleForm=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.previousSibling,d.parentNode.removeChild(d),b.style.display="block"},d.prototype.showLoginPopup=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,b=c.parentNode.parentNode,b.appendChild(this.loginPopupTemplate.content.cloneNode(!0)),d=b.querySelector(".login-popup"),d.querySelector(".deny").addEventListener("click",this.denyLogin)},d.prototype.denyLogin=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d)},d.prototype.showRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),b=a.currentTarget,d=b.parentNode.parentNode,d.appendChild(this.confirmArticleRemoveTemplate.content.cloneNode(!0)),c=d.querySelector(".confirm-article-remove"),c.querySelector(".confirm").addEventListener("click",this.confirmRemoveConfirmation),c.querySelector(".deny").addEventListener("click",this.denyRemoveConfirmation)},d.prototype.denyRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d)},d.prototype.confirmRemoveConfirmation=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d),b.parentNode.removeChild(b)},d.prototype.showTranslationForm=function(a){var b,c,d,e;return a.preventDefault(),b=a.currentTarget,b.style.display="none",d=b.parentNode.parentNode,d.appendChild(this.addTranslationFormTemplate.content.cloneNode(!0)),c=d.querySelector(".add-translation-form"),c.addEventListener("submit",this.addTranslation),e=c.querySelector("input"),e.addEventListener("keyup",this.changeTranslationURL),e.focus(),c.querySelector("button[type='reset']").addEventListener("click",this.hideTranslationForm)},d.prototype.changeTranslationURL=function(a){var b;return b=a.currentTarget,b.value.trim().length>0?b.classList.add("non-empty"):b.classList.remove("non-empty")},d.prototype.hideTranslationForm=function(a){var b,c,d;return a.preventDefault(),c=a.currentTarget,d=c.parentNode.parentNode,b=d.parentNode,b.removeChild(d),b.querySelector(".add").style.display="inline"},d.prototype.addTranslation=function(a){return a.preventDefault()},d}()});