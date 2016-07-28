!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function a(e,t,n,a,o,r,l){return new Highcharts.Chart({chart:{renderTo:e,zoomType:"x",type:t},title:{text:n,style:{color:"#000000"}},subtitle:{text:"undefined"==typeof document.ontouchstart?"Click and drag in the plot to zoom in":"Drag your finger over the plot to zoom in",style:{color:"#000000"}},exporting:{enableImages:!0},credits:{enabled:!1},xAxis:"datetime"==o?{type:o,maxZoom:12096e5,lineColor:"#000000",title:{text:r,style:{color:"#000000"}}}:{type:o,lineColor:"#000000",categories:l,title:{text:r,style:{color:"#000000"}}},yAxis:{min:0,startOnTick:!1,showFirstLabel:!1,title:{text:"Downloads",style:{color:"#000000"}}},tooltip:{shared:!0},legend:{enabled:!1},plotOptions:{column:{borderWidth:0,color:"#AA0000",pointPadding:0,shadow:!1},line:{color:"#AA0000",lineWidth:1,marker:{radius:2}}},series:[{name:"Downloads",data:a}]})}function o(e){var t=0;for(var n in e)t+=e[n];return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function r(e){var t={},n=e.downloads,a=null;if(n)for(var o=0;o<n.length;o++)a=n[o].day,t[a]=n[o].downloads;return t}function l(e){for(var t=[],n=Object.keys(e).sort(),a=0;a<n.length;a++)t.push([new Date(n[a]).getTime(),e[n[a]]]);return t}function i(e){return Math.floor((e.getTime()/864e5+3)/7)}function c(e){var t,n,a=[],o=i(new Date(e[0][0])),r=0;for(var l in e){t=e[l],n=new Date(t[0]);var c=i(n);o!=c?(a.push([new Date(864e5*(7*o-3)).getTime(),r]),r=t[1],o=c):(r+=t[1],l==e.length-1&&a.push([new Date(864e5*(7*c-3)).getTime(),r]))}return a}function u(e){for(var t,n,a={categories:[],data:[]},o=new Date(e[0][0]).getMonth(),r=new Date(e[0][0]).getFullYear(),l=0,i=0;i<e.length;i++)t=e[i],n=new Date(t[0]),o!=n.getMonth()?(a.categories.push(D[o+1]+" "+r),a.data.push(l),l=t[1],o=n.getMonth(),r=n.getFullYear()):(l+=t[1],i==e.length-1&&(a.categories.push(D[n.getMonth()+1]+" "+n.getFullYear()),a.data.push(l)));return a}function s(e){for(var t,n,a={categories:[],data:[]},o=new Date(e[0][0]).getFullYear(),r=0,l=0;l<e.length;l++)t=e[l],n=new Date(t[0]),o!=n.getFullYear()?(a.categories.push(o.toString()),a.data.push(r),r=t[1],o=n.getFullYear()):(r+=t[1],l==e.length-1&&(a.categories.push(n.getFullYear().toString()),a.data.push(r)));return a}function p(e){for(var t=[],n=e.rows.length,a=0;a<n;a++)t.push(e.rows[a].key[1]);return t}function d(e,t){$.ajax({url:e,dataType:"json",success:t,error:function(){console.log("Could not receive download data."),$("#loading").html('An error occured. Please try to reload the page or contact me at <a href="mailto:paul@vorba.ch">paul@vorba.ch</a> if that doesn\'t help.')}})}function g(e){return e<10?"0"+e:e}function m(e){return e.getFullYear()+"-"+g(e.getMonth()+1)+"-"+g(e.getDate())}function f(e,t,n){return"/downloads/range/"+m(t)+":"+m(n)+"/"+e}function h(e){var t=l(e);$("#content").find("figure").css("min-width",2*t.length+67),a("days","column","Downloads per day",t,"datetime","Date");var n=c(t);a("weeks","column","Downloads per week",n,"datetime","Week");var o=u(t);a("months","column","Downloads per month",o.data,"linear","Month",o.categories);var r=s(t);a("years","column","Downloads per year",r.data,"linear","Year",r.categories)}function v(e,t,n){$("h2").append(" for package <em>"+e+"</em>"),k.val("package"),$("#name").val(e),$("#npm-stat").after('<p id="loading"></p><p><a href="https://npmjs.org/package/'+e+'">View package on npm</a></p>'),$("#loading").html('<img src="loading.gif" />');var a=f(e,t,n);d(a,function(e){var a=r(e);$("h2").after("<p>Total number of downloads between <em>"+m(t)+"</em> and <em>"+m(n)+"</em>: <strong>"+o(a)+"</strong></p>"),$("#loading").remove(),h(a)})}function w(e,t,n){$("h2").html("Downloads for author <em>"+e+"</em>"),k.val("author"),$("#name").val(e),$("#npm-stat").after('<p id="loading"></p><p><a href="https://npmjs.org/~'+e+'">View author on npm</a></p>'),$("#loading").html('<img src="loading.gif" />');var a='/-/_view/browseAuthors?group_level=3&start_key=["'+e+'"]&end_key=["'+e+'",{}]';d(a,function(a){for(var l=p(a),i=l.length,c=i,u={},s=[],g=0;g<i;g++)!function(a){var l=f(a,t,n);d(l,function(l){var i=r(l);for(var p in i)u[p]||(u[p]=0),u[p]+=i[p];var d=o(i);if(s.push({name:a,count:d}),!--c){$("h2").after("<p>Cumulative downloads of packages by author <em>"+e+"</em> from <em>"+m(t)+"</em> to <em>"+m(n)+"</em>: <strong>"+o(u)+"</strong></p>"),$("#loading").remove(),s=s.sort(function(e,t){return t.count.replace(/,/g,"")-e.count.replace(/,/g,"")});var g=$("#pkgs");g.append("<h3>Packages by <em>"+e+"</em></h3><table><tr><td>package name</td><td>downloads</td></tr></table>");for(var f=0;f<s.length;f++){var v=s[f];g.find("table").append('<tr><td><a href="charts.html?package='+v.name+'" title="view detailed download statistics">'+v.name+"</a></td><td>"+v.count+"</td></tr>")}h(u)}})}(l[g])})}function y(e,t,n){var a;if(e[t])try{a=new Date(e[t])}catch(o){return alert('Invalid date format in URL parameter "'+t+'"')}else a=n?new Date(n.getTime()-31536e6):new Date;return $('input[name="'+t+'"]').val(m(a)),a}/*!
	 * (c) 2012-2016 Paul Vorbach.
	 *
	 * MIT License (https://vorba.ch/license/mit.html)
	 */
var b=n(3);n(4);var k=$('<select id="nameType">\n    <option value="package" selected>Package</option>\n    <option value="author">Author</option>\n</select>');k.change(function(){"package"==k.val()?$("#name").attr("name","package").attr("placeholder","package name"):"author"==k.val()&&$("#name").attr("name","author").attr("placeholder","author name")});var D=["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];$(function(){$("#nameType").replaceWith(k),$("#from, #to").attr("title","If the date fields are omitted, you will see the data of the last 365 days.");var e=b.decode(window.location.search?window.location.search.substring(1):""),t=e["package"],n=e.author;if(t||n){var a=y(e,"to"),o=y(e,"from",a);t?($("title").html("npm-stat: "+t),v(t,o,a)):n&&($("title").html("npm-stat: "+n),w(n,o,a))}}),window.submitForm=function(){var e={},t=$("#name").val();"package"==k.val()?e["package"]=t||"clone":"author"==k.val()&&(e.author=t||"pvorb"),e.from=$("#from").val(),e.to=$("#to").val();for(var n in e)e[n]||delete e[n];return window.location="/charts.html?"+b.encode(e),!1}},function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,o){t=t||"&",a=a||"=";var r={};if("string"!=typeof e||0===e.length)return r;var l=/\+/g;e=e.split(t);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var c=e.length;i>0&&c>i&&(c=i);for(var u=0;u<c;++u){var s,p,d,g,m=e[u].replace(l,"%20"),f=m.indexOf(a);f>=0?(s=m.substr(0,f),p=m.substr(f+1)):(s=m,p=""),d=decodeURIComponent(s),g=decodeURIComponent(p),n(r,d)?Array.isArray(r[d])?r[d].push(g):r[d]=[r[d],g]:r[d]=g}return r}},function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,o){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var r=encodeURIComponent(n(o))+a;return Array.isArray(e[o])?e[o].map(function(e){return r+encodeURIComponent(n(e))}).join(t):r+encodeURIComponent(n(e[o]))}).join(t):o?encodeURIComponent(n(o))+a+encodeURIComponent(n(e)):""}},function(e,t,n){"use strict";t.decode=t.parse=n(1),t.encode=t.stringify=n(2)},function(e,t){Object.keys||(Object.keys=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=n.length;return function(o){if("object"!=typeof o&&("function"!=typeof o||null===o))throw new TypeError("Object.keys called on non-object");var r,l,i=[];for(r in o)e.call(o,r)&&i.push(r);if(t)for(l=0;l<a;l++)e.call(o,n[l])&&i.push(n[l]);return i}}())}]);
//# sourceMappingURL=charts.js.map