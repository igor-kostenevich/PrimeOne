var o={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.Android()||o.BlackBerry()||o.iOS()||o.Opera()||o.Windows()}};if(o.any(),location.hash){var e=location.hash.replace("#","");0<$(".popup-"+e).length?a(e):0<$("div."+e).length&&$("body,html").animate({scrollTop:$("div."+e).offset().top},500,function(){})}$(".wrapper").addClass("loaded");if(o.iOS());function a(e,t){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),o.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+e),""!=t&&null!=t&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+t+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+e).find(".slick-slider").length&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}function t(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(o.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function i(e){if(e.addClass("err"),e.parent().addClass("err"),e.parent().find(".form__error").remove(),e.hasClass("email")){var t="";null!=(t=(""==e.val()||(e.val(),e.attr("data-value")),e.data("error")))&&e.parent().append('<div class="form__error">'+t+"</div>")}else null!=e.data("error")&&0==e.parent().find(".form__error").length&&e.parent().append('<div class="form__error">'+e.data("error")+"</div>");0<e.parents(".select-block").length&&(e.parents(".select-block").parent().addClass("err"),e.parents(".select-block").find(".select").addClass("err"))}function l(e){e.removeClass("err"),e.parent().removeClass("err"),e.parent().find(".form__error").remove(),0<e.parents(".select-block").length&&(e.parents(".select-block").parent().removeClass("err"),e.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}function s(e){""==e.val()&&(e.inputmask("remove"),e.val(e.attr("data-value")),e.removeClass("focus"),e.parent().removeClass("focus"))}function n(){$.each($('.select[data-type="search"]'),function(e,t){var s=$(this).parent(),a=$(this).parent().find("select");1==$(this).find(".select-options__value:visible").length?($(this).addClass("focus"),$(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")),$(this).find(".select-title__value").val($(".select-options__value:visible").html()),$(this).find(".select-title__value").attr("data-value",$(".select-options__value:visible").html())):""==a.val()&&($(this).removeClass("focus"),s.find("input.select-title__value").val(a.find('option[selected="selected"]').html()),s.find("input.select-title__value").attr("data-value",a.find('option[selected="selected"]').html()))})}function d(){$(".gm-style-iw").parent().addClass("baloon"),$(".gm-style-iw").prev().addClass("baloon-style"),$(".gm-style-iw").next().addClass("baloon-close"),$(".gm-style-iw").addClass("baloon-content")}function r(){var e=$(window).outerWidth();$(window).outerHeight();!function(e){var t=$(".header-menu-mobile"),s=$(".header-top-lang");e<=768?s.hasClass("done")||s.addClass("done").appendTo(t):s.hasClass("done")&&s.removeClass("done").prependTo($(".header-top")),e<=768?$(".header-bottom-menu").hasClass("done")||$(".header-bottom-menu").addClass("done").appendTo(t):$.each($(".header-bottom-menu"),function(){$(this).hasClass("header-bottom-menu--right")?$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom__column").eq(2)):$(this).hasClass("done")&&$(this).removeClass("done").prependTo($(".header-bottom__column").eq(0))})}(e)}function c(l){var e=$(window).outerWidth(),n=$(window).outerHeight(),o=80;e<768&&(o=50),0<l?$("header").addClass("scroll"):$("header").removeClass("scroll"),n<l?$("#up").fadeIn(300):$("#up").fadeOut(300),$.each($(".sector"),function(e,t){var s=$(this).outerHeight(),a=$(this).offset().top;if(a<=l&&l<=a+s-n&&($(".sector.scroll").removeClass("scroll"),$(this).addClass("scroll")),$(this).hasClass("scroll")&&(a<=l&&l<=a+s-n?$(this).hasClass("normalscroll")?$("body").addClass("scroll"):$("body").removeClass("scroll"):$(this).hasClass("normalscroll")&&$("body").removeClass("scroll")),a-n/1.5<l&&l<a+s?(0<$(".dotts").length&&function(e,t){1==t&&$.each($(".sector"),function(e,t){$(".dotts-list").append("<li></li>")});$(".dotts-list li").removeClass("active").eq(e).addClass("active")}(e,0),$(this).addClass("active")):$(this).removeClass("active"),a-n<l&&l<a+s){if($(this).addClass("view"),$(this).hasClass("padding")){var i=o/100*(100-(a-l)/n*100);o<=i&&(i=o),$(this).css({paddingTop:i})}}else $(this).removeClass("view")})}$(".header-menu__icon").click(function(e){$(this).toggleClass("active"),$(".header-menu-mobile").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),$(".pl").click(function(e){return a($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(e){return t(),!1}),$(".popup").click(function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return t(),!1}),$(document).on("keydown",function(e){27==e.which&&t()}),$(".goto").click(function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),$.each($(".ibg"),function(e,t){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}),$(document).on("click touchstart",function(e){$(e.target).is(".select *")||$(".select").removeClass("active")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(e){$("body,html").animate({scrollTop:0},300)}),function(){if(0<$("select").length){function e(){$.each($("select"),function(e,t){var s=e;$(this).hide(),0==$(this).parent(".select-block").length?$(this).wrap("<div class='select-block "+$(this).attr("class")+"-select-block'></div>"):$(this).parent(".select-block").find(".select").remove();var a="",i="",l=$(this).parent(".select-block"),n="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";"multiple"==$(this).attr("multiple")&&(a="multiple",i="check"),$.each($(this).find("option"),function(e,t){""!=$(this).attr("value")?n=n+"<div data-value='"+$(this).attr("value")+"' class='select-options__value_"+s+" select-options__value value_"+$(this).val()+" "+$(this).attr("class")+" "+i+"'>"+$(this).html()+"</div>":"on"==$(this).parent().attr("data-label")&&0==l.find(".select__label").length&&l.prepend('<div class="select__label">'+$(this).html()+"</div>")}),n+="</div></div></div>","search"==$(this).attr("data-type")?(l.append("<div data-type='search' class='select_"+s+" select "+$(this).attr("class")+"__select "+a+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' /></div>"+n+"</div>"),$(".select_"+s).find("input.select-title__value").jcOnPageFilter({parentSectionClass:"select-options_"+s,parentLookupClass:"select-options__value_"+s,childBlockClass:"select-options__value_"+s})):l.append("<div class='select_"+s+" select "+$(this).attr("class")+"__select "+a+"'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div></div>"+n+"</div>"),""!=$(this).find('option[selected="selected"]').val()&&l.find(".select").addClass("focus"),"on"==$(this).attr("data-req")&&$(this).addClass("req"),$(".select_"+s+" .select-options-scroll").niceScroll(".select-options-list",function(){var e=100,t=50;return o.any()&&(e=10,t=1),{cursorcolor:"#2078e5",cursorwidth:"3px",background:"",autohidemode:!1,bouncescroll:!1,cursorborderradius:"0px",scrollspeed:e,mousescrollstep:t,directionlockdeadzone:0,cursorborder:"0px solid #fff"}}())})}e(),$("body").on("keyup","input.select-title__value",function(){$(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50),$(this).parents(".select").addClass("active"),$(this).parents(".select").find(".select-options").slideDown(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),$(this).parents(".select-block").find("select").val("")}),$("body").on("click",".select",function(){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50,function(){$(this).find(".select-options-scroll").getNiceScroll().resize()}),"search"==$(this).attr("data-type")&&($(this).hasClass("active")||n(),$(this).find(".select-options__value").show()))}),$("body").on("click",".select-options__value",function(){if($(this).parents(".select").hasClass("multiple"))return $(this).hasClass("active")?(0<$(this).parents(".select").find(".select-title__value span").length?$(this).parents(".select").find(".select-title__value").append('<span data-value="'+$(this).data("value")+'">, '+$(this).html()+"</span>"):($(this).parents(".select").find(".select-title__value").data("label",$(this).parents(".select").find(".select-title__value").html()),$(this).parents(".select").find(".select-title__value").html('<span data-value="'+$(this).data("value")+'">'+$(this).html()+"</span>")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!0),$(this).parents(".select").addClass("focus")):($(this).parents(".select").find(".select-title__value").find('span[data-value="'+$(this).data("value")+'"]').remove(),0==$(this).parents(".select").find(".select-title__value span").length&&($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")),$(this).parents(".select").removeClass("focus")),$(this).parents(".select-block").find("select").find("option").eq($(this).index()+1).prop("selected",!1)),!1;"search"==$(this).parents(".select").attr("data-type")?($(this).parents(".select").find(".select-title__value").val($(this).html()),$(this).parents(".select").find(".select-title__value").attr("data-value",$(this).html())):($(this).parents(".select").find(".select-title__value").attr("class","select-title__value value_"+$(this).data("value")),$(this).parents(".select").find(".select-title__value").html($(this).html())),$(this).parents(".select-block").find("select").find("option").removeAttr("selected"),""!=$.trim($(this).data("value"))?($(this).parents(".select-block").find("select").val($(this).data("value")),$(this).parents(".select-block").find("select").find('option[value="'+$(this).data("value")+'"]').attr("selected","selected")):($(this).parents(".select-block").find("select").val($(this).html()),$(this).parents(".select-block").find("select").find('option[value="'+$(this).html()+'"]').attr("selected","selected")),""!=$(this).parents(".select-block").find("select").val()?$(this).parents(".select-block").find(".select").addClass("focus"):($(this).parents(".select-block").find(".select").removeClass("focus"),$(this).parents(".select-block").find(".select").removeClass("err"),$(this).parents(".select-block").parent().removeClass("err"),$(this).parents(".select-block").removeClass("err").find(".form__error").remove()),""!=!$(this).parents(".select").data("tags")&&0==$(this).parents(".form-tags").find('.form-tags__item[data-value="'+$(this).data("value")+'"]').length&&$(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="'+$(this).data("value")+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>'),$(this).parents(".select-block").find("select").change(),"on"==$(this).parents(".select-block").find("select").data("update")&&e()}),$(document).on("click touchstart",function(e){$(e.target).is(".select *")||$(e.target).is(".select")||($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),n())}),$(document).on("keydown",function(e){27==e.which&&($(".select").removeClass("active"),$(".select-options").slideUp(50,function(){}),n())})}function i(e,t){e.find(".rating__activeline").css({width:t+"%"})}$("input,textarea").focus(function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),l($(this))}),$("input[data-value], textarea[data-value]").each(function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click(function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")}),$(this).blur(function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))})}),$(".form-input__viewpass").click(function(e){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")}),$.each($("input.phone"),function(e,t){$(this).attr("type","tel"),$(this).focus(function(){$(this).inputmask("+38(999) 999-99-99",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){s($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.phone").focusout(function(e){s($(this))}),$.each($("input.num"),function(e,t){$(this).focus(function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){s($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")})}),$("input.num").focusout(function(e){s($(this))}),$.each($(".check"),function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")}),$("body").off("click",".check",function(e){}),$("body").on("click",".check",function(e){$(this).hasClass("disable")||$(e.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1))}),$.each($(".option.active"),function(e,t){$(this).find("input").prop("checked",!0)}),$(".option").click(function(e){$(this).hasClass("disable")||($(this).hasClass("active")&&$(this).hasClass("order")&&$(this).toggleClass("orderactive"),$(this).parents(".options").find(".option").removeClass("active"),$(this).toggleClass("active"),$(this).children("input").prop("checked",!0))}),$(".rating.edit .star").hover(function(){var e=$(this).parents(".rating");e.find(".rating__activeline").css({width:"0%"});var t=($(this).index()+1)/e.find(".star").length*100;i(e,t)},function(){var e=$(this).parents(".rating");e.find(".star").removeClass("active");var t=e.find("input").val()/e.find(".star").length*100;i(e,t)}),$(".rating.edit .star").click(function(e){var t=$(this).parents(".rating"),s=$(this).index()+1;t.find("input").val(s);var a=s/t.find(".star").length*100;i(t,a)}),$.each($(".rating"),function(e,t){var s=$(this).find("input").val()/$(this).parent().find(".star").length*100;i($(this),s)}),$(".quantity__btn").click(function(e){var t=parseInt($(this).parent().find(".quantity__input").val());return $(this).hasClass("dwn")?(t-=1)<1&&(t=1):t+=1,$(this).parent().find(".quantity__input").val(t),!1}),0<$("#range").length&&($("#range").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){$("#rangefrom").val(t.values[0]),$("#rangeto").val(t.values[1]),$(this).find(".ui-slider-handle").eq(0).html("<span>"+t.values[0]+"</span>"),$(this).find(".ui-slider-handle").eq(1).html("<span>"+t.values[1]+"</span>")},change:function(e,t){t.values[0]!=$("#range").slider("option","min")||t.values[1]!=$("#range").slider("option","max")?$("#range").addClass("act"):$("#range").removeClass("act")}}),$("#rangefrom").val($("#range").slider("values",0)),$("#rangeto").val($("#range").slider("values",1)),$("#range").find(".ui-slider-handle").eq(0).html("<span>"+$("#range").slider("option","min")+"</span>"),$("#range").find(".ui-slider-handle").eq(1).html("<span>"+$("#range").slider("option","max")+"</span>"),$("#rangefrom").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",0,$(this).val())}),$("#rangeto").bind("change",function(){1*$(this).val()>1*$("#range").slider("option","max")&&$(this).val($("#range").slider("option","max")),1*$(this).val()<1*$("#range").slider("option","min")&&$(this).val($("#range").slider("option","min")),$("#range").slider("values",1,$(this).val())}),$("#range").find(".ui-slider-handle").eq(0).addClass("left"),$("#range").find(".ui-slider-handle").eq(1).addClass("right")),$(".form-addfile__input").change(function(s){if(""!=$(this).val()){var a=$(this);a.parents(".form-addfile").find("ul.form-addfile-list").html(""),$.each(s.target.files,function(e,t){0==a.parents(".form-addfile").find('ul.form-addfile-list>li:contains("'+s.target.files[e].name+'")').length&&a.parents(".form-addfile").find("ul.form-addfile-list").append("<li>"+s.target.files[e].name+"</li>")})}})}(),$("form button[type=submit]").click(function(){var s=0,e=$(this).parents("form"),t=e.data("ms");return $.each(e.find(".req"),function(e,t){s+=function(e){var t=0,s=e.parents("form");if("email"==e.attr("name")||e.hasClass("email")){if(e.val()!=e.attr("data-value")){var a=e.val().replace(" ","");e.val(a)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.val())&&e.val()!=e.attr("data-value")?l(e):(t++,i(e))}else""==e.val()||e.val()==e.attr("data-value")?(t++,i(e)):l(e);"checkbox"==e.attr("type")&&(1==e.prop("checked")?e.removeClass("err").parent().removeClass("err"):(t++,e.addClass("err").parent().addClass("err")));e.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(e.val())||(t++,i(e)));e.hasClass("pass-2")&&(s.find(".pass-1").val()!=s.find(".pass-2").val()?i(e):l(e));return t}($(this))}),0==s&&(function(e){e.find(".form__generalerror").hide().html("")}(e),null!=t&&""!=t?(function(e){$(".popup").hide(),a("message."+e,"")}(t),!1):void 0)}),0<$("#map").length&&function(e){google.maps.Map.prototype.setCenterWithOffset=function(s,a,i){var l=this,e=new google.maps.OverlayView;e.onAdd=function(){var e=this.getProjection(),t=e.fromLatLngToContainerPixel(s);t.x=t.x+a,t.y=t.y+i,l.panTo(e.fromContainerPixelToLatLng(t))},e.draw=function(){},e.setMap(this)};for(var i=new Array,l=new google.maps.InfoWindow({}),t=[[new google.maps.LatLng(53.819055,27.8813694)],[new google.maps.LatLng(53.700055,27.5513694)],[new google.maps.LatLng(53.809055,27.5813694)],[new google.maps.LatLng(53.859055,27.5013694)]],s={zoom:10,panControl:!1,mapTypeControl:!1,center:t[0][0],styles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}],scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(document.getElementById("map"),s),o={url:"img/icons/map.svg",scaledSize:new google.maps.Size(18,20),anchor:new google.maps.Point(9,10)},a=0;a<t.length;a++){var r=new google.maps.Marker({icon:o,position:t[a][0],map:n});google.maps.event.addListener(r,"click",function(s,a){return function(){for(var e=0;e<i.length;e++)i[e].setIcon(o);var t=a+1;l.setContent($(".contacts-map-item_"+t).html()),l.open(n,s),s.setIcon(o),n.setCenterWithOffset(s.getPosition(),0,0),setTimeout(function(){d()},10)}}(r,a)),i.push(r)}if(e){var c=e-1;setTimeout(function(){google.maps.event.trigger(i[c],"click")},500)}}(1),$(window).resize(function(e){r()}),r(),c($(this).scrollTop()),$(window).scroll(function(e){c($(this).scrollTop())}),$("body").on("click",".dotts-list li",function(e){var t=$(this).index()+1;$("body,html").animate({scrollTop:$(".sector-"+t).offset().top+0},800,function(){})});