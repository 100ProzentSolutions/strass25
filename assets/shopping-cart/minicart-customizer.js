/**
 * Minicart PayPal-link interception
 * 05.04.2016
 *
 * [ 	Minicart.js is modified - disabled cart-window popup when adding/changeing items;
 * 		html/css theme changed. ]
 *
 * Insert these lines in HTML
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
 * <script src="plugins/minicart/dist/minicart.js"></script>
 * <script src="minicart-customizer.js"></script>
 *
 */
(function(){function g(a){var b=0;paypal.minicart.cart.items().forEach(function(a){b+=a._data.quantity});1==a&&$("#mc-shopcart").find("span").fadeTo("fast",.25).fadeTo("fast",1).fadeTo("fast",.25).fadeTo("fast",1);0<b?($("#mc-shopcart").fadeIn(),$("#mc-shopcart-qty").text(b?b:""),$("#mc-shopcart").tooltip("dispose"),a={},paypal.minicart.cart.subtotal(a),a=a.currency,$("#mc-shopcart").tooltip({title:"Total: "+paypal.minicart.cart.subtotal()+" "+a})):($("#mc-shopcart-qty").fadeOut(),$("#mc-shopcart").fadeOut(),
$("#mc-shopcart").tooltip("dispose"),$("#mc-shopcart").tooltip({title:"Cart is Empty"}))}function n(a){var b={};decodeURIComponent(a).split("&").forEach(function(a){a=a.split("=");b[a[0]]=(a[1]||"").replace(/\+/g," ")});return b}function h(){var a;a=window.innerWidth<=c.site_width?c.side_offset:(window.innerWidth-c.site_width)/2+c.side_offset;switch(f){case 0:d.css({left:a+"px",right:"initial"});break;case 1:d.css({left:"initial",right:a+"px"})}}function p(){if(!k&&document.body){switch(c.shopcart_position){case "left":f=
0;break;case "right":f=1;break;default:console.log("Shopcart position (orientation) is wrong");return}paypal.minicart.render({strings:{button:c.checkout_button+(c.checkout_button?" ":"")+'<img src="assets/shopping-cart/paypal_btn.svg" alt="PayPal" />'}});window.location.href==c.returnURL&&(paypal.minicart.reset(),window.location=window.location.origin+window.location.pathname);$("body").append(c.shopcartHtml);d=$("#mc-shopcart");d.css({top:c.shopcart_top_offset+"px","font-size":c.shopcart_icon_size+
"px",color:c.shopcart_icon_color,"background-color":c.shopcart_back_color});d.find("span").css({"font-size":c.sc_count_size+"px",color:c.sc_count_color,"background-color":c.sc_count_back_color});d.tooltip({title:paypal.minicart.cart.total().toString()});d.outerWidth();h();$("body").append("<style>#giftcard-to-shopcart {font-size: "+c.gift_icon_size+"px; color: "+c.gift_icon_color+"; background-color: "+c.gift_back_color+"}</style>");k=!0;$(window).resize(function(){h()});g();$("#mc-shopcart").click(function(a){a.stopPropagation();
paypal.minicart.view.show();paypal.minicart.view.redraw()});$(document).on("click",'[href*="cmd=_cart"]a[href*="www.paypal.com/cgi-bin/webscr"]',function(a){a.stopPropagation();a.preventDefault();l=!0;var b=$(this).prop("href"),b=n(b.substring(b.indexOf("?")+1));console.log(b);result=paypal.minicart.cart.add({amount:b.amount,bn:b.bn,business:b.business,currency_code:b.currency_code,item_name:b.item_name,item_number:b.item_number,shipping:b.shipping,shipping2:b.shipping2,"return":c.returnURL,cancel_return:c.cancel_returnURL,
notifyURL:c.notifyURL});if(!1!==result&&d){d.fadeIn();$("body").append(c.giftCardHtml);var b=d.offset().top,e=d.offset().left,f=(a.pageY-10-b)/2+b,h=(a.pageX-10-e)/2+e,k=$("body i#giftcard-to-shopcart").offset({top:a.pageY-10,left:a.pageX-10}).animate({top:f,left:h,width:"50px",height:"50px","font-size":"35px",padding:"8px"},1100,"easeInCubic").animate({top:b+25,left:e+20,width:"21px",height:"21px","font-size":"15px",padding:"3px"},1100,"easeOutCubic").fadeOut(function(){g(!0);$(k).detach()})}l=!1});
paypal.minicart.cart.on("change",function(a){l||g(!0)});paypal.minicart.cart.on("remove",function(){g(!0)})}}function e(a){for(var b in a)m.hasOwnProperty(b)&&(c[b]=a[b]);$('a[href*="www.paypal.com/cgi-bin/webscr"]').length&&$(document).ready(function(){p()})}var m={shopcart_position:"right",site_width:1150,side_offset:20,shopcart_top_offset:120,gift_icon_color:"#FFF",gift_back_color:"#f97352",gift_icon_size:15,shopcart_icon_color:"#FFF",shopcart_back_color:"#000",shopcart_icon_size:50,sc_count_color:"#FFF",
sc_count_back_color:"#f97352",sc_count_size:12,returnURL:window.location.origin+window.location.pathname+"?success",cancel_returnURL:window.location.origin+window.location.pathname+"?failure",shopcartCSSLink:'<link rel="stylesheet" href="minicart-theme.css" type="text/css">',giftCardHtml:'<i id="giftcard-to-shopcart" class="shoppingcart-icons">&#xe308;</i>',shopcartHtml:'<i id="mc-shopcart" role="button" class="shoppingcart-icons" data-toggle="tooltip" data-placement="left">&#xe1df;<span id="mc-shopcart-qty"></span></div></i>',
checkout_button:"Check out with"},c=m,k=!1,l=!1,d,f;if("undefined"===typeof paypal||"undefined"===typeof paypal.minicart)return-1;window.mcShopcartOptions&&e(window.mcShopcartOptions);"function"===typeof define&&define.amd?define(function(){return e}):"object"==typeof exports?module.exports=e:window.mcShopcart=e})(jQuery);mcShopcart("undefined"===typeof shopcartSettings?null:shopcartSettings);
