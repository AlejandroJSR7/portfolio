$("#demo01").animatedModal(),$(function(){$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length&&o||$("[name="+this.hash.slice(1)+"]"),o.length){var t=o.offset().top;return $("html,body").animate({scrollTop:t},1800),!1}}})}),$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollToTop").fadeIn():$(".scrollToTop").fadeOut()}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})});