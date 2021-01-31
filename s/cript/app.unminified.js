"use strict";
console.info("\nSolent\nComputing\nSociety_\n\n\nA message to the society members:\n\nThis website was made by the society members, for the society members. It is expected that some of you view this portion of the website, given the fact that you're all students studying a computing based subject; and to that extent, I congratulate you in using your technical initiative to learn more and to view the inner workings of this website. Have fun, engage with others and really do try to make the most of your time with all the members of this society, we're all your friends and are all looking out for one another.\n\nHave fun ;)\n\n\t- Bradley Marshall (@bradley499)\n\t  17/04/2020\n ");

(function(){
	const version = "1.0";
	if (typeof page_ref === "undefined"){
		location.assign("/error/page_ref");
		return;
	}
	document.addEventListener('DOMContentLoaded', (event) => {
		document.body.innerHTML+="<div id=\"popup_dialog\" class=\"overlay\"><div class=\"popup\"><h2 id=\"popup_header\"></h2><a id=\"close_popup_dialog\">&times;</a><div id=\"popup_content\" class=\"content\"></div></div></div>";
		document.getElementById("close_popup_dialog").addEventListener("click",function(){
			document.getElementById("popup_dialog").classList.remove("active");
		});
	});
	const alert_sound = new Audio("data:audio/mpeg;base64,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");
	var alert_vibrate = true;
	function alert(title,content){
		title = title || "";
		content = content || "";
		if (title.trim().length > 0 && content.trim().length == 0){
			content = title;
			title = "";
		}
		if (content.trim().length == 0){
			return;
		} else {
			document.getElementById("popup_header").innerHTML = title;
			document.getElementById("popup_content").innerHTML = content.split("\n").join("<br>");
			document.getElementById("popup_dialog").classList.add("active");
			if (alert_vibrate){
				try {
					alert_sound.play();
					window.navigator.vibrate(500);
				} catch (e) {}
			}
			alert_vibrate = true;
		}
	}
	var initial_setup = false;
	var setup = 0;
	var setup_check = false;
	var sub_page_ref_core_loaded = null;
	var host_page = async function(page,preload,sub_page_ref){
		page = page || false;
		switch (page) {
			case "106A6C241B8797F52E1E77317B96A201":
				if (preload){
					var sending = false;
					document.addEventListener("DOMContentLoaded", function(event){
						document.getElementById("hero_scroll_more").addEventListener("click",function(){
							window.scroll({behavior:"smooth",left:0,top:window.innerHeight - {true:80,false:0}[document.body.clientWidth<=1000]});
						},false);
						document.getElementById("user_link_new").addEventListener("click",function(e){
							window.scroll({behavior:"smooth",left:0,top:document.getElementById("registration").offsetTop - {true:80,false:0}[document.body.clientWidth<=1000]});registration
						});
						if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
							["user_link_new","user_link"].forEach(button => {
								button = document.getElementById(button);
								button.classList.add("touch");
							});
						}
						const default_message_send_text = document.getElementById("contact_submit").value;
						const inputs = [document.getElementById("contact_email"),document.getElementById("contact_message"),document.getElementById("contact_submit")];
						for (let i = 0; i < 2; i++) {
							inputs[i].addEventListener("input",function(){
								if (document.getElementById("contact_email").value.trim().length > 0 && document.getElementById("contact_message").value.trim().length > 0){
									inputs[2].removeAttribute("disabled");
									inputs[2].style.cursor = "pointer";
								} else {
									inputs[2].setAttribute("disabled","disabled");
									inputs[2].style.cursor = "default";
								}
							});
						}
						inputs[2].setAttribute("disabled","disabled");
						inputs[2].style.cursor = "default";
						inputs[2].addEventListener("click",function(e){
							e.preventDefault();
							var email = inputs[0].value.trim();
							var message = inputs[1].value.trim();
							if (email.length == 0 && message.length == 0){
								return;
							}
							if (email.length == 0){
								return alert("Error","An email address is required to send us a message.");
							} else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g) != email){
								return alert("Error","An invalid email address was provided.");
							} else if (message.length == 0) {
								return alert("Error","You message cannot be empty.");
							}
							sending = true;
							document.body.style.cursor = "progress";
							inputs.forEach(element => {
								element.setAttribute("disabled","disabled");
								element.style.cursor = "progress";
							});
							e.target.value = "Sending...";
							var request = new XMLHttpRequest();
							request.open("POST", "https://script.google.com/macros/s/AKfycbxE2dwJ77xrWgA4qBUS_txCZxhrR2_6U1ZVyZoV407ZgFWxRBV9/exec", true);
							request.setRequestHeader('Content-Type', 'text/plain');
							request.onreadystatechange = function() {
								if (this.status >= 400) {
									return false;
								} else if (this.readyState === 4){
									if (request.status === 200) {
										JSON.parse(request.responseText)
										var response = JSON.parse(this.responseText);
										sending = false;
										document.body.style.cursor = "";
										e.target.value = default_message_send_text;
										inputs.forEach(element => {
											element.removeAttribute("disabled");
											element.style.cursor = "";
										});
										if (response["status"] == "success"){
											inputs[0].value = inputs[1].value = "";
											e.target.setAttribute("disabled","disabled");
											e.target.style.cursor = "default";
											alert_vibrate = false;
											alert("Message sent","Your message has successfully been sent to us, and we should hopefully be in contact with you soon.");
										} else {
											try {
												alert("Failed to send","Unable to send your message due to the following reason:\n" + response["response"]);
											} catch (e) {
												alert("Failed to send","An unexpected error has prevented your message from being sent. We apologise for the inconvenience.");
											}
										}
									}
								}
							};
							request.onerror = function () {
								sending = false;
							}
							request.send(JSON.stringify({
								uid: null,
								email: email,
								category: "Public",
								message: message
							}));
						});
					});
					window.onbeforeunload = function() { 
						if (sending){
							return "Your message is still being sent, are you sure you wish to leave this page. If you do, your message may not be sent!";
						}
					};
				} else {
					var current_image = null;
					var imgs = ["/img/local/scs_1.jpg","/img/local/scs_2.jpg","/img/local/scs_3.jpg","/img/local/scs_4.jpg","/img/local/scs_5.jpg","/img/local/scs_6.jpg","/img/local/scs_7.jpg","/img/local/scs_9.jpg","/img/local/scs_11.jpg"];
					function carousel(){
						var usable = true;
						(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))var usable=[0,1,2,4,5,7,10]})(navigator.userAgent||navigator.vendor||window.opera);
						var img = current_image;
						while (img == current_image){
							var position = Math.floor(Math.random() * imgs.length);
							if (usable !== true) {
								while (!usable.includes(img)) {
									position = Math.floor(Math.random() * imgs.length);
								}
							}
							img = imgs[position];
						}
						current_image = img;
						document.getElementById("hero_container").style.backgroundImage = "url(\"" + img + "\")";
						setTimeout(carousel,4000);
					}
					carousel();
					
					await imgs.forEach(async (img) => {
						var xhr = new XMLHttpRequest();
						xhr.open( "GET", img );
						xhr.responseType = "arraybuffer";
						xhr.onload = function( e ) {
							var base64_image = "data:image/jpg;base64," + btoa(new Uint8Array( this.response ).reduce((data, byte) => data + String.fromCharCode(byte), ''));
							for (let i = 0; i < imgs.length; i++) {
								if (imgs[i] == img){
									imgs[i] = base64_image;
								}
							}
						};
						xhr.send();
					});
				}
				break;
			case "16908b0605f2645dfcb4c3a8d248cef3":
				var update_events = () => new Promise(function(resolve, reject){
					var url = "https://script.google.com/macros/s/AKfycbwesLr4BAyFI67I6By-wfkjSSfiqynFUAYU7ldvklBQ_yRjTaMv/exec";
					try {
						var request = new XMLHttpRequest();
						request.open('GET', url, true);
						request.onreadystatechange = function() {
							if (this.status >= 400) {
								if (events == {}){
									reject("Failed to load events");
								}
								resolve();
								return false;
							} else if (this.readyState === 4) {
								var response = JSON.parse(this.responseText);
								var display_rows = {};
								if (response.status == "success"){
									for (var i = 0; i < response.response.length; i++) {
										response.response[i][9] = (response.response[i][9] != false);
										var date = response.response[i][3].split("/") || response.response[i][3].split("-") || response.response[i][3].split(".");
										var end_date = response.response[i][6].split("/") || response.response[i][6].split("-") || response.response[i][6].split(".");
										date = new Date(date[2],date[1]-1,date[0]) || 0;
										end_date = new Date(end_date[2],end_date[1]-1,end_date[0]);
										try {
											var end_time = response.response[i][5].split(':');
											if (end_time.length > 0){
												end_date.setHours(end_time[0]);
											}
											if (end_time.length > 1){
												end_date.setMinutes(end_time[1]);
											}
											if (end_time.length > 2){
												end_date.setSeconds(end_time[2]);
											}
										} catch (e) {
											end_date = new Date(date.getTime());
											end_date.setDate(end_date.getDate()+1);
											end_date.setHours(0,0,0,0);
										}
										response.response[i][6] = end_date;
										var current_date = new Date();
										current_date.setHours(0,0,0,0);
										var start_date = date;
										date.setHours(0,0,0,0);
										if (start_date <= current_date){
											date = current_date;
											current_date = new Date();
											if (end_date < current_date){
												continue;
											}
										}
										response.response[i][3] = start_date;
										var time = response.response[i][4].split(":")
										while (time.length < 3){
											time.push("0");
										}
										time = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]) || 0;
										if (typeof display_rows[date] === "undefined"){
											display_rows[date] = {};
										}
										if (typeof display_rows[date][time] === "undefined"){
											display_rows[date][time] = [];
										}
										display_rows[date][time].push(response.response[i]);
									}
								}
								var sorted_display_rows = {};
								var display_rows_keys = Object.keys(display_rows);
								display_rows_keys.sort(function(a,b){
									return new Date(a).getTime() - new Date(b).getTime()
								});
								for (var i = 0; i < display_rows_keys.length; i++){
									sorted_display_rows[display_rows_keys[i]] = display_rows[display_rows_keys[i]];
								}
								events = sorted_display_rows;
								resolve();
							}
						};
						request.onerror = function () {
							events = false;
						}
						request.send();
					} catch(err) {}
				});
				var render_updates = async () => {
					await update_events().then(() => {
						var events_render = "<div class=\"side_margin center_text\">";
						if (Object.keys(events).length == 0){
							events_render += "<p class=\"center_text\">Sadly, there are no upcoming events.</p>";
						} else {
							var now = new Date();
							now = now.getSeconds() + (60 * (now.getMinutes() + (60 * now.getHours())));
							events_render = "<div id=\"events_page_container\"><div id=\"events_page_side\">";
							const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
							const ordinal = function(d) {
								if (d > 3 && d < 21) return 'th';
								switch (d % 10) {
								  case 1:  return "st";
								  case 2:  return "nd";
								  case 3:  return "rd";
								  default: return "th";
								}
							  }
							var events_added = false;
							for (var day in events) {
								var priority_order = [];
								try {
									var show_date = new Date(day);
									var event_date = show_date;
									var date_check = new Date();
									date_check.setHours(0,0,0,0);
									if (Object.keys(events[day]).length > 0){
										show_date = [show_date.getDate(),show_date.getMonth(),show_date.getFullYear(),]
										show_date[3] = show_date[0] % 100;
										events_render += "<div><h4 class=\"event_date\">" + {true:"Today",false:show_date[0] + ordinal(show_date[0]) + " of " + months[show_date[1]] + ", " + show_date[2]}[event_date.valueOf() <= date_check.valueOf()] + ":</h4><div><div class=\"event_daily_container\"><div class=\"event_content_container spacer_padder\"></div>";
										for (let priority = 0; priority < 2; priority++) {
											for (var time in events[day]){
												for (var i = 0; i < events[day][time].length; i++){
													if (priority == 0) {
														if (events[day][time][i][9]){
															priority_order.push([time,i,true]);
														}
													} else if (!events[day][time][i][9]){
														priority_order.push([time,i,false]);
													}
												}
											}
										}
										for (var time_order in priority_order){
											var time = priority_order[time_order][0];
											var i = priority_order[time_order][1];
											var priority = priority_order[time_order][2];
											var event = events[day][time][i][8].toLowerCase();
											var start_date = new Date(events[day][time][i][3].getTime());
											var end_date;
											var end_time;
											if (events[day][time][i][6] !== "") {
												end_date = new Date(events[day][time][i][6].getTime());
												end_time = new Date(events[day][time][i][6].getTime());
											} else {
												end_date = new Date(day);
											}
											try {
												end_date.setHours(0,0,0,0);
											} catch (e) {
												end_date = "";
											}
											events_render += "<div class=\"event_content_container" + {true:" dynamic_tables",false:""}[navigator.appVersion.indexOf("Chrome") != -1] + " event_type_" + event.split(" ").join("_") + {true:" priority_event",false:""}[priority] + "\"><div><h3 class=\"event_name\">" + events[day][time][i][0] + "</h3><div><div class=\"center_text small\"><span>" + {true:"Started",false:"From"}[start_date.getTime() < date_check.getTime() || (start_date.getTime() == date_check.getTime() && parseInt(time) < now)] + ": ";
											try {
												if (start_date < new Date(day)){
													events_render += ("0" + events[day][time][i][3].getDate()).slice(-2) + "/" + ("0" + (events[day][time][i][3].getMonth() + 1)).slice(-2) + "/" + events[day][time][i][3].getFullYear();
												}
												if (events[day][time][i][4].length > 0){
													if (start_date < new Date(day)){
														events_render += " at ";
													}
													events_render += events[day][time][i][4];
												} else if (start_date >= new Date(day)) {
													events_render += "Unknown";
												}
												events_render += "</span><br>"
												var shown_end = false;
												events_render += "<span>" + {true:"Ending",false:"Until"}[start_date <= new Date() && time < now] + ": ";
												if ({true:true,false:end_date.getTime() !== start_date.getTime()}[end_date != ""]){
													if (end_date.getTime() > new Date(day).getTime()){
														events_render += ("0" + end_date.getDate()).slice(-2) + "/" + ("0" + (end_date.getMonth() + 1)).slice(-2) + "/" + end_date.getFullYear();
														if (events[day][time][i][5].length > 0){
															events_render += " at ";
														}
														shown_end = true;
													}
												}
												if (end_time != ""){
													if (events[day][time][i][5].length > 0){
														if (end_time.getHours() == 0 && end_time.getMinutes() == 0){
															events_render += "Midnight";
														} else if (end_time.getHours() == 12 && end_time.getMinutes() == 0){
															events_render += "Noon";
														} else {
															events_render += ("0"+end_time.getHours()).slice(-2) + ":" + ("0" + end_time.getMinutes()).slice(-2);
														}
														shown_end = true;
													}
												}
												if (!shown_end){
													events_render += "Unknown";
												}
												events_render += "</span>";
											} catch (e) {}
											events_added = true;
											events_render += "</div><div class=\"side_margin small_bottom event_description\"><p>";
											var description = events[day][time][i][7].split("\n");
											description.forEach(text => {
												events_render += "<p";
												if (text.replace(new RegExp('[\u0000-\u1eeff]', 'g'), '').length === text.replace(new RegExp('[\n\r\s]+|( )+', 'g'), '').length){
													events_render += " class=\"event_emoji_string\"";
												}
												events_render += ">" + text + "</p>";
											});
											events_render += "</div>";
											if (events[day][time][i][1].length > 0){
												events_render += "<p class=\"no_top small_bottom small side_margin center_text\">Find out more: <a href=\"" + events[day][time][i][1] + "\" title=\"Visit " + events[day][time][i][1] + " for more information\" target=\"blank\" class=\"out_link\">" + events[day][time][i][1] + "</a></p>";
											}
											if (events[day][time][i][2].length > 0){
												events_render += "<p class=\"no_top small_bottom small side_margin center_text\">Location: " + events[day][time][i][2] + "</p>";
											}
											events_render += "</div></div></div>";
										}
										events_render += "</div></div></div>";
									}
								} catch (e) {}
							}
							if (!events_added) {
								events_render += "<p class=\"center_text\">Sadly, there are no upcoming events.</p>";
							}
						}
						events_render += "</div></div>";
						if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
							document.getElementById("content").innerHTML = events_render;
						} else {
							document.addEventListener("DOMContentLoaded", () => {
								document.getElementById("content").innerHTML = events_render;
							});
						}
					}).catch((e)=>{
						if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
							document.getElementById("content").innerHTML = "<div class=\"side_margin center_text\"><p class=\"center_text\">Unable to load upcoming events!</p></div></div>";
						} else {
							document.addEventListener("DOMContentLoaded", () => {
								document.getElementById("content").innerHTML = "<div class=\"side_margin center_text\"><p class=\"center_text\">Unable to load upcoming events!</p></div></div>";
							});
						}
					});
					document.body.removeAttribute("status");
				};
				if (!preload) {
					document.body.setAttribute("status","updating");
					document.getElementById("update").addEventListener("click",() => {
						if (document.body.getAttribute("status") == "updating") {
							return;
						}
						document.body.setAttribute("status","updating");
						document.getElementById("content").innerHTML = "<p class=\"center_text\">Refreshing events...</p>";
						render_updates();
					});
					return;
					var events = {};
				} else {
					await render_updates();
				}
				break;
			default:
				location.assign("/error/page_ref_undefined");
				return;
		}
	}
	host_page(page_ref,true);
	document.addEventListener("DOMContentLoaded", () =>{
		host_page(page_ref,false);
	});
})();