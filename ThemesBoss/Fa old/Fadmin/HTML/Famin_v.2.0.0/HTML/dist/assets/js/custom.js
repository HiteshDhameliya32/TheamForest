$(document).ready(function(){"use strict";var e=!1,s=!1,t=$("body");$(".page-header"),$(".page-sidebar"),$(".page-content");var l;$(".page-sidebar-inner").slimScroll({height:"100%"}).mouseover(),!0===(e=t.hasClass("page-sidebar-fixed")&&!1===e?!0:e)&&(t.addClass("page-sidebar-fixed"),$("#fixed-sidebar-toggle-button").removeClass("mdi mdi-chemical-weapon"),$("#fixed-sidebar-toggle-button").addClass("mdi mdi-chemical-weapon")),$("#fixed-sidebar-toggle-button").on("click",function(){return t.toggleClass("page-sidebar-fixed"),e=!!t.hasClass("page-sidebar-fixed"),$(this).toggleClass("mdi mdi-chemical-weapon"),$(this).toggleClass("mdi mdi-chemical-weapon"),!1}),!0===s&&t.addClass("page-sidebar-collapsed"),$(".page-sidebar-collapsed .page-sidebar .accordion-menu").on({mouseenter:function(){$(".page-sidebar").addClass("fixed-sidebar-scroll")},mouseleave:function(){$(".page-sidebar").removeClass("fixed-sidebar-scroll")}},"li"),$("#collapsed-sidebar-toggle-button").on("click",function(){return t.toggleClass("page-sidebar-collapsed"),s=!!t.hasClass("page-sidebar-collapsed"),$(".page-sidebar-collapsed .page-sidebar .accordion-menu").on({mouseenter:function(){$(".page-sidebar").addClass("fixed-sidebar-scroll")},mouseleave:function(){$(".page-sidebar").removeClass("fixed-sidebar-scroll")}},"li"),!1}),$(window).width()<768&&$("#fixed-sidebar-toggle-button").hasClass("mdi mdi-chemical-weapon")&&$("#fixed-sidebar-toggle-button").click(),$(window).on("resize",function(){$(window).width()<768&&$("#fixed-sidebar-toggle-button").hasClass("mdi mdi-chemical-weapon")&&$("#fixed-sidebar-toggle-button").click()}),$("#sidebar-toggle-button").on("click",function(){return t.toggleClass("page-sidebar-visible"),document.getElementById("overlay")?.classList.add("show"),!1}),$("#sidebar-toggle-button-close").on("click",function(){return t.toggleClass("page-sidebar-visible"),document.getElementById("overlay")?.classList.remove("show"),!1}),a=$(".page-sidebar li:not(.open) .sub-menu"),l=$(".page-sidebar li.active-page > a"),a.hide(),$(".accordion-menu").on("click","a",function(){var e=$(this).next(".sub-menu"),s=$(this).parent("li"),l=$(".accordion-menu > li.open");return e.length&&!t.hasClass("page-sidebar-collapsed")?(s.hasClass("open")?($(".open .sub-menu li").each(function(e){var s=$(this);setTimeout(function(){s.removeClass("animation")},5*(e+1))}),e.slideUp(100),s.removeClass("open")):(l.length&&($(".accordion-menu > li.open > .sub-menu").slideUp(100),l.removeClass("open")),e.slideDown(100),s.addClass("open"),$(".open .sub-menu li").each(function(e){var s=$(this);setTimeout(function(){s.addClass("animation")},15*(e+1))})),!1):(!e.length||!t.hasClass("page-sidebar-collapsed"))&&void 0}),$(".active-page > .sub-menu").length&&l.click(),$("#toggle-fullscreen").on("click",function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),!1}),$("#search-button").on("click",function(){t.toggleClass("search-open"),t.hasClass("search-open")&&$(".search-form input").focus()}),$("#close-search").on("click",function(){t.toggleClass("search-open")}),$(".right-sidebar-toggle").on("click",function(){var e=$(this).data("sidebar-id");$("#"+e).toggleClass("visible")}),$(".chat-write form input").on("keypress",function(e){if(13===e.which&&0===!$(this).val().length)$(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child").hasClass("me")?$('<span class="chat-bubble-text">'+$(this).val()+"</span>").insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child span:last-child"):$('<div class="chat-bubble me"><div class="chat-bubble-text-container"><span class="chat-bubble-text">'+$(this).val()+"</span></div></div>").insertAfter(".right-sidebar-chat .chat-bubbles .chat-bubble:last-child"),$(this).val("");else if(13===e.which)return;e=$(".right-sidebar-chat").prop("scrollHeight")+"px";$(".right-sidebar-chat").slimscroll({allowPageScroll:!0,scrollTo:e})});{$(".slimscroll").slimScroll();var a=$("input[type=checkbox]:not(.js-switch), input[type=radio]:not(.no-uniform)");0<a.length&&a.each(function(){$(this).uniform()}),Array.prototype.slice.call(document.querySelectorAll(".js-switch")).forEach(function(e){new Switchery(e,{size:"small",color:"#637282"})});const n=document.getElementById("overlay");n.addEventListener("click",function(){n.classList.remove("show"),document.body.classList.contains("page-sidebar-visible")&&document.body.classList.remove("page-sidebar-visible")})}});