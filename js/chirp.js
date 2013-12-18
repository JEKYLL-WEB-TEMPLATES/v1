var Chirp=function(opts){var api={user:"http://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&count={{count}}&include_rts={{retweets}}&exclude_replies={{!replies}}&screen_name={{user}}",list:"http://api.twitter.com/1/{{user}}/lists/{{list}}/statuses.json?include_entities=true",search:"http://search.twitter.com/search.json?include_entities=true&q={{search}}"},options={retweets:!0,replies:!1,user:"rogie",list:null,search:null,target:null,count:100,max:20,cacheExpire:12e4,success:function(){},error:function(){},templates:{base:'<div class="chirp">{{tweets}}</div>',tweet:'<p>{{html}}</p><span class="meta"><time><a href="http://twitter.com/{{user.screen_name}}/statuses/{{id_str}}">{{time_ago}}</a></time> — via <a href="http://twitter.com/{{user.screen_name}}" title="{{user.name}} — {{user.description}}">{{user.name}}</a></span>'}},ext=function(e,t){for(var n in t)n in e&&(e[n]&&e[n].constructor==Object?ext(e[n],t[n]):e[n]=t[n])},ago=function(e){var t=new Date((e||"").replace(/(\d{1,2}[:]\d{2}[:]\d{2}) (.*)/,"$2 $1").replace(/(\+\S+) (.*)/,"$2 $1").replace(/-/g,"/")),n=((new Date).getTime()-t.getTime())/1e3,r=Math.floor(n/86400);if(isNaN(r)||r<0||r>=31)return;return r==0&&(n<60&&"just now"||n<120&&"1 minute ago"||n<3600&&Math.floor(n/60)+" minutes ago"||n<7200&&"1 hour ago"||n<86400&&Math.floor(n/3600)+" hours ago")||r==1&&"Yesterday"||r<7&&r+" days ago"||r<31&&Math.ceil(r/7)+" weeks ago"},htmlify=function(e,t){var n=[],r=e,i={urls:function(e){return'<a href="'+e.expanded_url+'">'+e.display_url+"</a>"},hashtags:function(e){return'<a href="http://twitter.com/search/%23'+e.text+'" target="_blank">#'+e.text+"</a>"},user_mentions:function(e){return'<a href="http://twitter.com/'+e.screen_name+'" target="_blank" title="'+e.name+'">@'+e.screen_name+"</a>"},media:function(e){return'<br/><a href="'+e.expanded_url+'" target="_blank">'+e.display_url+"</a>"}};for(var s in t){u=t[s];if(t[s].length>0)for(var o=0,u;u=t[s][o];++o)n[u.indices[0]]={start:u.indices[0],end:u.indices[1],link:i[s](u)}}for(var o=n.length-1;o>=0;--o)n[o]!=undefined&&(r=r.substr(0,n[o].start)+n[o].link+r.substr(n[o].end,r.length-1));return r},toHTML=function(e){var t="",n=0;for(twt in e){e[twt].index=++n;e[twt].html=htmlify(e[twt].text,e[twt].entities);e[twt].time_ago=ago(e[twt].created_at);t+=render(options.templates.tweet,e[twt]);if(n==options.max)break}return render(options.templates.base,{tweets:t})},render=function(tpl,data){var output=tpl,dotData=function(d,dotKey){var invert="";if(dotKey.indexOf("!")>-1){dotKey=dotKey.replace(/!/ig,"");invert="!"}try{val=eval(invert+"d['"+dotKey.split(".").join("']['")+"']")}catch(e){val=""}return val},matches=tpl.match(/{{[^}}]*}}/igm);for(var i=0;i<matches.length;++i){var m=matches[i],val=dotData(data,matches[i].replace(/{{|}}/ig,""))||"";output=output.replace(new RegExp(m,"igm"),val)}return output},cache=function(e,t){if(!localStorage||!JSON)return null;var n=(new Date).getTime(),r=null;if(t==undefined){try{r=JSON.parse(unescape(localStorage.getItem(e)))}catch(i){}if(r)if(n-r.time<options.cacheExpire)r=r.data;else{localStorage.removeItem(e);r=null}else r=null;return r}try{localStorage.setItem(e,escape(JSON.stringify({time:n,data:t})))}catch(i){console.log(i)}},get=function(){Chirp.requests=Chirp.requests==undefined?1:Chirp.requests+1;var e=document.createElement("script"),t="callback"+Chirp.requests,n=document.body.children,r=document.scripts[document.scripts.length-1],i=options.list?render(api.list,options):options.search?render(api.search,options):render(api.user,options),s=r.parentNode.nodeName!="head";Chirp[t]=function(e,t){e=e.results?e.results:e;t!==!0&&cache(i,e);var n=document.createElement("div");n.innerHTML=toHTML(e);options.target==null?r.parentNode.insertBefore(n,r):document.getElementById(options.target).innerHTML=n.innerHTML;options.success.call(this,e)};e.onerror=options.error;if(cachedData=cache(i))Chirp[t](cachedData,!0);else{e.src=i+"&callback=Chirp."+t;document.getElementsByTagName("head")[0].appendChild(e)}},init=function(e){if(e&&e!=undefined)if(e.constructor==String){var t=e.split("/"),n={};n.user=t[0];n.list=t[1]?t[1]:null;ext(options,n)}else e.constructor==Object&&ext(options,e)};this.show=function(e){init(e);options.target&&(document.getElementById(options.target).innerHTML="");get()};this.constructor!=Chirp?(new Chirp(opts)).show():init(opts)};Chirp._script=document.scripts[document.scripts.length-1];