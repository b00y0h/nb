$(document).ready(function(){cookieAcceptance.init();$("body").on("click",".cookieAccept",function(n){n.preventDefault();cookieAcceptance.buttonClicked()})});var cookieAcceptance={init:function(){var n=$(".cookieAcceptanceBanner"),t=$(".cookieDisabledBanner"),r=$(".cookieDisabledMessage"),i=!0,u;$(window).scroll(function(){if($(this).scrollTop()>=$("header").position().top+$("header").outerHeight()){var r=n.clone(),u=t.clone();i===!0&&($("nav.cookie-mobile").prepend(r,u),i=!1)}else $("nav .cookieAcceptanceBanner").remove(),$("nav .cookieDisabledBanner").remove(),i=!0});u=typeof requiresCookie!="undefined"?!0:!1;n.length===1&&($.cookie("cookies-accepted")||navigator.cookieEnabled&&n.addClass("visible"));navigator.cookieEnabled||u!==!0?(t.removeClass("visible"),r.removeClass("visible"),$(".admissionForm, .submissionMessage").removeClass("hidden")):(t.addClass("visible"),r.addClass("visible"),$(".admissionForm, .submissionMessage").addClass("hidden"))},buttonClicked:function(){$(".cookieAcceptanceBanner").addClass("hidden");$.cookie("cookies-accepted",!0,{path:"/",expires:9999})}}