"use script";
console.info("\nSolent\nComputing\nSociety_\n\n\nA message to the society members:\n\nThis website was made by the society members, for the society members. It is expected that some of you view this portion of the website, given the fact that you're all students studying a computing based subject; and to that extent, I congratulate you in using your technical initiative to learn more and to view the inner workings of this website. Have fun, engage with others and really do try to make the most of your time with all the members of this society, we're all your friends and are all looking out for one another.\n\nHave fun ;)\n\n\t- Bradley Marshall (@bradley499)\n\t  17/04/2020\n ");

(function(){
	if (typeof page_ref === "undefined"){
		location.assign("/error/page_ref");
		return;
	}
	var scripts = ["https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js","https://www.gstatic.com/firebasejs/7.15.0/firebase-firestore.js","https://www.gstatic.com/firebasejs/7.15.0/firebase-auth.js"];
	if (page_ref == "d2a57dc1d883fd21fb9951699df71cc7"){
		scripts.push("https://www.gstatic.com/firebasejs/7.15.0/firebase-database.js");
		scripts.push("https://www.gstatic.com/firebasejs/7.15.0/firebase-storage.js");
	}
	var load_remains = scripts.length;
	for (var i = 0; i < scripts.length; i++) {
		script = document.createElement("script");
		script.type = "text/javascript";
		script.src = scripts[i];
		script.id = "dls" + i;
		script.async = false;
		document.getElementsByTagName("head")[0].appendChild(script);
		document.getElementById(script.id).addEventListener("load",function(){base_load(true)});
	}
	function base_load(load_preset){
		load_preset = load_preset || false;
		if (load_preset) {
			load_remains -= 1
			if (load_remains == 0) {
				host_page(page_ref);
			}
		}
	}
	var firebaseConfig = {
		apiKey: "AIzaSyBcXEY_eyRZKY2GbCSGbSCf4bM8J7z4rfA",
		authDomain: "solent-computing-society.firebaseapp.com",
		databaseURL: "https://solent-computing-society.firebaseio.com",
		projectId: "solent-computing-society",
		storageBucket: "solent-computing-society.appspot.com",
		messagingSenderId: "533900314169",
		appId: "1:533900314169:web:aefbe09960c68045c5efe8"
	};
	var image_cache = {};
	document.addEventListener('DOMContentLoaded', (event) => {
		document.body.innerHTML+="<div id=\"popup_dialog\" class=\"overlay\"><div class=\"popup\"><h2 id=\"popup_header\"></h2><a id=\"close_popup_dialog\">&times;</a><div id=\"popup_content\" class=\"content\"></div></div></div>";
		document.getElementById("close_popup_dialog").addEventListener("click",function(){
			document.getElementById("popup_dialog").classList.remove("active");
		});
	});
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
					window.navigator.vibrate(200);
				} catch (e) {}
			}
			alert_vibrate = true;
		}
	}
	function img_blob(url,rep_id,return_blob){
		url = url || false;
		rep_id = rep_id || false;
		return_blob = return_blob || false;
		if (url == false) {
			return;
		} else if (url in image_cache) {
			if (return_blob) {
				return image_cache[url];
			}
			if (document.getElementById(rep_id).tagName.toLowerCase() == "span"){
				document.getElementById(rep_id).outerHTML = "<img" + (document.getElementById(rep_id).outerHTML.substring(5)).substring(0,document.getElementById(rep_id).outerHTML.length-7);
			}
			document.getElementById(rep_id).setAttribute("src",image_cache[url]);
			document.getElementById(rep_id).classList.remove("loading");
		} else {
			var xhr = new XMLHttpRequest();
			xhr.open( "GET", url );
			xhr.responseType = "arraybuffer";

			xhr.onload = function( e ) {
				var array_buffer_view = new Uint8Array( this.response );
				var blob = new Blob( [ array_buffer_view ], { type: "image/jpeg" } );
				var url_creator = window.URL || window.webkitURL;
				var image_url = url_creator.createObjectURL( blob );
				if (rep_id){
					try {
						if (document.getElementById(rep_id).tagName == "span"){
							document.getElementById(rep_id).outerHTML = "<img" + (document.getElementById(rep_id).outerHTML.substring(5)).substring(0,document.getElementById(rep_id).outerHTML.length-7);
						}
						document.getElementById(rep_id).setAttribute("src",image_url);
						document.getElementById(rep_id).classList.remove("loading");
					} catch (e) {}
				}
				image_cache[url] = image_url;
			};
			xhr.send();
			if (return_blob){
				return url;
			}
		}
	}
	var storage_download = async function(url){
		if (!navigator.onLine){
			return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
		}
		try {
			return await firebase.storage().ref().child(url).getDownloadURL().then(function(url) {
				return url;
			}).catch(function(error) {
				return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
			});
		} catch (error) {
			return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
		}
	};
	var about_sections = {
		"Subject": [
			"Acoustic And Audio Engineering",
			"Accountancy And Finance",
			"Adventure And Outdoor Management (Accelerated)",
			"Adventure And Outdoor Management",
			"Applied Human Nutrition",
			"Animation",
			"Adult Nursing Practice",
			"Acting And Performance",
			"Architectural Design And Technology",
			"Architectural Design And Visualisation",
			"Applied Sport Science",
			"Beauty Promotion",
			"Business Information Technology",
			"Body Art",
			"Biomedical Science",
			"Business Management",
			"Computer Games (Art)",
			"Computer Games (Design)",
			"Computer Generated Imagery",
			"Computer Games (Software Development)",
			"Computing",
			"Construction Management",
			"Criminology",
			"Cyber Security Management",
			"Computer Systems And Networks Engineering",
			"Digital Design And Web Development",
			"Digital Animation",
			"Digital Music",
			"Electronic Engineering",
			"Engineering Design And Manufacture",
			"English And Creative Writing",
			"English And Film",
			"English And Media",
			"Event Management",
			"Fashion Buying And Merchandising",
			"Fashion Journalism",
			"Fashion Management With Marketing",
			"Fashion Photography",
			"Fitness And Personal Training",
			"Fashion",
			"Festival Management",
			"Fashion Graphics",
			"Film",
			"Fine Art",
			"Film Production",
			"Fitness Management",
			"Film And Television",
			"Fashion Media",
			"Football Business Management",
			"Football Studies",
			"Fashion Promotion And Communication",
			"Fashion Styling And Creative Direction",
			"Future Transport Engineering",
			"Film Visual Effects",
			"Graphic Design",
			"Health, Nutrition And Exercise Science",
			"Illustration",
			"International Airline And Airport Management",
			"Interior Design",
			"Interior Design Decoration",
			"International Travel & Tourism Management",
			"Journalism",
			"Live Event Technology",
			"Law",
			"Make-Up And Hair Design",
			"Marketing",
			"Media Engineering",
			"Mechanical Engineering",
			"Media Production",
			"Maritime Business",
			"Musical Theatre",
			"Music Business",
			"Marketing With Advertising",
			"Marketing With Sport",
			"Psychology (Child Development And Education)",
			"Psychology (Counselling And Mental Health)",
			"Psychology (Forensic And Psychopathology)",
			"Photography",
			"Physical Education",
			"Popular Music Performance And Production",
			"Popular Music Production",
			"Popular Music Performance",
			"Post Production For Film And Television",
			"Public Relations And Communications Management",
			"Product Design",
			"Psychology",
			"Renewable Energy Engineering",
			"Sport Coaching And Sport Development",
			"Software Engineering",
			"Sport And Exercise Psychology",
			"Shipping And Port Management",
			"Sociology",
			"Social Work",
			"Sport And Exercise Therapy",
			"Sport Management",
			"Sports Journalism",
			"Sport Performance Coaching",
			"Television Production",
			"Yacht Design And Production",
			"Yacht And Powercraft Design",
			"Football Science",
			"Mental Health And Psychological Wellbeing"
			/*
				WARNING!

				Any changes made to list of subjects should be appended and never removed or inserted wherever (even if it is not alphabetical) - Always append to the list!

			*/
		],
		"Year of study": ["Foundation", "1st", "2nd", "3rd", "4th", "Placement year", "Masters"],
		"Intro": 1,
		"Relationship status": ["Single", "In a relationship", "Open to offers", "😏", "🍆", "🍑", "Married", "It's complicated", "You be you", "Love struck", "Single and ready to mingle", "HMU", "Bored", "Waiting..."],
		"Favourite lecturer": 0,
		"Favourite food": 0,
		"Favourite drink": 0,
		"Favourite film": 0,
		"Favourite TV show": 0,
		"Phone number": 3,
		"Email address": 4,
		"Website": 2,
		"Facebook": 0,
		"Dev Community": 0,
		"GitHub": 0,
		"LinkedIn": 0,
		"Twitter": 0,
		"Instagram": 0,
		"Snapchat": 0,
		"Discord": 0,
		"Youtube": 0,
	};
	var initial_setup = false;
	var setup = 0;
	var sub_page_ref_core_loaded = null;
	var host_page = async function(page,preload,sub_page_ref){
		page = page || false;
		preload = preload || false;
		sub_page_ref = sub_page_ref || null;
		if (!preload && !initial_setup){
			firebase.initializeApp(firebaseConfig);
			initial_setup = true;
		}
		try {
			var u_user_icon = document.getElementById("s_user_icon");
			if (typeof(Storage) !== "undefined") {
				if (localStorage.profile_image) {
					u_user_icon.style.backgroundImage = "url('data:image/png;base64," + localStorage.profile_image + "')";
					u_user_icon.classList.remove("loading");
				}
			}
			var verified = true;
			await firebase.auth().onAuthStateChanged(async function(user) {
				if (user) {
					if (!user.emailVerified && page_ref != "770cd2f0fc573368510bcf08355f9fbc"){
						verified = false;
						document.body.style.display = "none";
						location.assign("/error/auth_verification");
						return;
					}
					var s_user_button = document.getElementById("s_user");
					if (typeof(s_user_button) !== "undefined" && s_user_button != null){
						(async function(){
							var prof_pre_loader = new Image();
							prof_pre_loader.crossOrigin = 'Anonymous';
							await firebase.firestore().collection("users/members/id").doc(firebase.auth().currentUser.uid).get().then(async function(user){
								var photo = "/app/img/prof.png";
								var name = "";
								if (user.exists){
									user = user.data();
									if (!(typeof user.photo === "undefined" || user.photo.trim().length == 0)){
										photo = await storage_download("profile/"+user.photo+"_50x50");
									}
									try {
										name = user.name;
									} catch (e) {}
								}
								prof_pre_loader.src = img_blob(photo,false,true);
							}).catch(function(error){
								prof_pre_loader.src = img_blob("/app/img/prof.png",null,true);
							});
							prof_pre_loader.onload = function(){
								if (typeof(Storage) !== "undefined") {
									var prof_pre_canvas = document.createElement("canvas");
									prof_pre_canvas.width = 50;
									prof_pre_canvas.height = 50;
									var prof_pre_canvas_render = prof_pre_canvas.getContext("2d");
									prof_pre_canvas_render.drawImage(prof_pre_loader, 0, 0, 50, 50);
									var prof_image_base64 = prof_pre_canvas.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, "");
									if (localStorage.profile_image == prof_image_base64){
										u_user_icon.classList.remove("loading");
										return;
									} else {
										localStorage.profile_image = prof_image_base64;
									}
								}
								u_user_icon.style.backgroundImage = "url(\""+ prof_pre_loader.getAttribute("src") + "\")";
								u_user_icon.classList.remove("loading");
							};
						})();
					}
				}
			});
			if (!verified) {
				return;
			}
		} catch(e) {}
		switch (page) {
			case "d56b699830e77ba53855679cb1d252da":
				var login_panel;
				var load_spinner;
				var footer_content;
				if (preload){
					document.title = "Loading... | Solent Computing Society";
					document.addEventListener("DOMContentLoaded", function(event){
						login_panel = document.getElementById("login_panel");
						load_spinner = document.getElementById("load_spinner");
						footer_content = document.getElementById("footer_content");
						login_panel.classList.add("hide");
						load_spinner.classList.remove("hide");
						footer_content.classList.add("hide");
					});
				} else {
					login_panel = document.getElementById("login_panel");
					load_spinner = document.getElementById("load_spinner");
					footer_content = document.getElementById("footer_content");
					firebase.auth().onAuthStateChanged(function(user) {
						var overide_redirect = false;
						if (user) {
							if (!user.emailVerified){
								location.assign("/error/auth_verification");
							} else if(!overide_redirect) {
								location.assign("app/start.html");
							}
							return;
						} else {
							document.title = "Login | Solent Computing Society";
							login_panel.classList.remove("hide");
							load_spinner.classList.add("hide");
							footer_content.classList.remove("hide");
							document.getElementById("login_submit").addEventListener("click",function(e){
								e.preventDefault();
								document.getElementById("login_panel_submit").classList.add("hide");
								load_spinner.classList.remove("hide");
								footer_content.classList.add("hide");
								var credentials = [];
								try {
									var login_email = document.getElementById("login_email");
									var login_password = document.getElementById("login_password");
									login_email.disabled = true;
									login_password.disabled = true;
									credentials.push(login_email.value);
									credentials.push(login_password.value);
									overide_redirect = true;
									firebase.auth().signInWithEmailAndPassword(credentials[0], credentials[1]).catch(function(error) {
										var error_panel = document.getElementById("login_panel_error");
										error_panel.innerHTML = error.message;
										error_panel.classList.remove("hide");
										document.getElementById("login_panel_submit").classList.remove("hide");
										load_spinner.classList.add("hide");
										footer_content.classList.remove("hide");
										login_email.disabled = false;
										login_password.disabled = false;
										overide_redirect = false;
									});
								} catch (e) {
									window.location.href = "/error/unexpected";
								}
							});
							document.getElementById("user_registration_action").addEventListener("click",function(){
								overide_redirect = true;
								footer_content.classList.add("hide");
								login_panel.classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								load_spinner.classList.remove("hide");
								window.location.href = "signup";
							});
							document.getElementById("password_forgotten_link").addEventListener("click",function(){
								overide_redirect = true;
								footer_content.classList.add("hide");
								login_panel.classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								load_spinner.classList.remove("hide");
								window.location.href = "password";
							});
						}
					});
				}
				break;
			case "7d2abf2d0fa7c3a0c13236910f30bc43":
				var login_panel = document.getElementById("login_panel");
				var load_spinner = document.getElementById("load_spinner");
				var footer_content = document.getElementById("footer_content");
				if (preload){
					document.addEventListener("DOMContentLoaded", function(event){
						login_panel.classList.add("hide");
						load_spinner.classList.remove("hide");
					});
				} else {
					var overide_redirect = false;
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							footer_content.classList.add("hide");
							if (!overide_redirect){
								if (!user.emailVerified){
									location.assign("/error/auth_verification");
								} else if(!overide_redirect) {
									location.assign("app/start.html");
								}
							}
						} else {
							login_panel.classList.remove("hide");
							load_spinner.classList.add("hide");
							document.getElementById("login_submit").addEventListener("click",async function(e){
								e.preventDefault();
								var credentials = [];
								try {
									var signup_email = document.getElementById("signup_email");
									var signup_password = document.getElementById("signup_password");
									var error_panel = document.getElementById("login_panel_error");
									if (!/@solent.ac.uk\s*$/.test(signup_email.value)){
										error_panel.innerHTML = "Please use your university email address!";
										error_panel.classList.remove("hide");
										return;
									} else {
										document.getElementById("login_panel_submit").classList.add("hide");
										load_spinner.classList.remove("hide");
										signup_email.disabled = true;
										signup_password.disabled = true;
										credentials.push(signup_email.value);
										credentials.push(signup_password.value);
										footer_content.classList.add("hide");
										overide_redirect = true;
										await firebase.auth().createUserWithEmailAndPassword(credentials[0], credentials[1]).catch(function(error) {
											error_panel.innerHTML = error.message;
											error_panel.classList.remove("hide");
											document.getElementById("login_panel_submit").classList.remove("hide");
											load_spinner.classList.add("hide");
											signup_email.disabled = false;
											signup_password.disabled = false;
											overide_redirect = false;
										});
										if (overide_redirect){
											footer_content.classList.add("hide");
											window.location.href = "/error/auth_verification";
										} else {
											footer_content.classList.remove("hide");
										}
									}
								} catch (e) {
									window.location.href = "/error/unexpected";
								}
							});
							document.getElementById("user_registration_action").addEventListener("click",function(){
								if (!overide_redirect){
									overide_redirect = true;
									footer_content.classList.add("hide");
									login_panel.classList.add("hide");
									document.getElementById("login_panel_submit").classList.add("hide");
									load_spinner.classList.remove("hide");
									window.location.href = "login";
								}
							});
						}
					});
				}
				break;
			case "5f4dcc3b5aa765d61d8327deb882cf99":
				var login_panel = document.getElementById("login_panel");
				var load_spinner = document.getElementById("load_spinner");
				var footer_content = document.getElementById("footer_content");
				if (preload){
					document.title = "Loading... | Solent Computing Society";
					document.addEventListener("DOMContentLoaded", function(event){
						login_panel.classList.add("hide");
						load_spinner.classList.remove("hide");
					});
				} else {
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							footer_content.classList.add("hide");
							if (!user.emailVerified){
								location.assign("/error/auth_verification");
							} else if(!overide_redirect) {
								location.assign("app/start.html");
							}
						} else {
							document.title = "Password reset | Solent Computing Society";
							login_panel.classList.remove("hide");
							load_spinner.classList.add("hide");
							document.getElementById("login_submit").addEventListener("click",async function(e){
								e.preventDefault();
								var credentials = [];
								try {
									var login_email = document.getElementById("login_email");
									var error_panel = document.getElementById("login_panel_error");
									document.getElementById("login_panel_submit").classList.add("hide");
									load_spinner.classList.remove("hide");
									login_email.disabled = true;
									credentials.push(login_email.value);
									footer_content.classList.add("hide");
									await firebase.auth().sendPasswordResetEmail(credentials[0]).then(function(){
										error_panel.innerHTML = "Please check \"" + credentials[0] + "\" for a password reset email.";
										load_spinner.classList.add("hide");
										e.target.classList.add("hide");
										login_email.classList.add("hide");
									}).catch(function(error) {
										error_panel.innerHTML = error.message;
										load_spinner.classList.add("hide");
										login_email.disabled = false;
									});
									document.getElementById("login_panel_submit").classList.remove("hide");
									footer_content.classList.remove("hide");
									error_panel.classList.remove("hide");
								} catch (e) {
									window.location.href = "/error/unexpected";
								}
							});
							document.getElementById("user_registration_action").addEventListener("click",function(){
								footer_content.classList.add("hide");
								login_panel.classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								load_spinner.classList.remove("hide");
								window.location.href = "login";
							});
						}
					});
				}
				break;
			case "770cd2f0fc573368510bcf08355f9fbc":
				var login_panel = document.getElementById("login_panel");
				var load_spinner = document.getElementById("load_spinner");
				var footer_content = document.getElementById("footer_content");
				if (!preload){
					var overide_redirect = false;
					var refresh_state_check = function (){
						firebase.auth().onAuthStateChanged(function(user) {
							if (user){
								if (user.emailVerified){
									if (!overide_redirect){
										if (!user.emailVerified){
											location.assign("/error/auth_verification");
										} else if(!overide_redirect) {
											location.assign("/app/start.html");
										}
									}
								} else {
									document.getElementById("email_address").innerHTML = user.email;
									login_panel.classList.remove("hide");
									load_spinner.classList.add("hide");
									document.getElementById("login_submit").addEventListener("click",async function(e){
										e.preventDefault();
										e.target.classList.add("hide");
										load_spinner.classList.remove("hide");
										await firebase.auth().currentUser.sendEmailVerification().then(function() {
											document.getElementById("login_panel_error_content").innerHTML = "Please check your email for the verification email...";
										}).catch(function(error){
											document.getElementById("login_panel_error_content").innerHTML = "<br><b>[" + error.code + "]:</b> " + error.message;
										});
										e.target.classList.remove("hide");
										load_spinner.classList.add("hide");
									});
									setTimeout(function () {
										refresh_state_check();										
									}, 10000);
								}
							} else {
								location.assign("/login");
							}
							document.getElementById("cancel_verification").addEventListener("click",function(){
								overide_redirect = true;
								firebase.auth().signOut();
							});
						});
					};
					refresh_state_check();
				}
				break;
			case "d2a57dc1d883fd21fb9951699df71cc7":
				if (preload){
					return;
				} else if (sub_page_ref_core_loaded == null){
					var cache_avaliable = true;
					firebase.firestore().settings({
						cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
					});
					firebase.firestore().enablePersistence().catch(function(error){
						cache_avaliable = false;
					});
					sub_page_ref_core_loaded = false;
					["/app/img/refresh_loading.gif","/app/img/map_loading.gif"].forEach(function(img){
						img_blob(img,false,true);
					});
					firebase.auth().onAuthStateChanged(async function(user) {
						document.getElementById("s_user").addEventListener("click",function(e){
							if (!document.getElementById("s_user").classList.contains("disabled")){
								window.location.hash = "menu";
								settings();
							}
						});
					});
					document.getElementById("s_banner").addEventListener("click",function(){
						if (document.body.getBoundingClientRect().top < -3){
							var last_scroll_pos = document.body.scrollTop || document.documentElement.scrollTop;
							var top = function() {
								var position = document.body.scrollTop || document.documentElement.scrollTop;
								if (position <= last_scroll_pos){
									if (position) {
										window.scrollBy(0, -Math.max(1, Math.floor(position / 8)));
										last_scroll_pos = document.body.scrollTop || document.documentElement.scrollTop;
										scrollAnimation = setTimeout(top, 30);
									} else {
										clearTimeout(top);
									}
								}
							};
							top();
						}
					});
					document.getElementById("page_ref_settings_content").classList.add("hide");
					document.getElementById("page_ref_settings_content_more").classList.add("hide");
					document.getElementById("page_ref_settings_forbidden").classList.add("hide");
					document.getElementById("menu_logout").addEventListener("click",function(){
						firebase.auth().signOut();
						location.href = "/login";
					});
					document.getElementById("menu_back").addEventListener("click",function(){
						window.location.hash = "";
						switch(current_page[0]){
							case "nav_loc_events":
								window.location.hash = "events";
								break;
							case "nav_loc_members":
								window.location.hash = "members";
								break;
							case "nav_loc_messages":
								window.location.hash = "messages";
								break;
							case "nav_loc_applets":
								window.location.hash = "applets";
								break;
							case "nav_loc_pub":
								window.location.hash = "pub";
								break;
							case "nav_loc_member_about":
								window.location.hash = "profile/" + current_page[1];
						}
					});
				}
				var current_page = [null,null];
				var ignore_hash_change = false;
				function hash_state_check() {
					const false_hash = {lp:false,main:false,ignore:false};
					if (ignore_hash_change){
						ignore_hash_change = false;
						false_hash.ignore = true;
						return false_hash;
					}
					var hash = window.location.hash.substring(1).split("/");
					if (hash.length == 0){
						return false_hash;
					}
					switch(hash[0]){
						case "events":
							return {lp:"nav_loc_events",main:true};
						case "members":
							return {lp:"nav_loc_members",main:true};
						case "messages":
							return {lp:"nav_loc_messages",main:true};
						case "applets":
							return {lp:"nav_loc_applets",main:true};
						case "pub":
							return {lp:"nav_loc_pub",main:true};
						case "profile":
							if (hash.length == 2){
								user_view_about = hash[1];
								return {lp:"nav_loc_member_about",add:hash[1],main:true};
							}
							return {lp:"nav_loc_members",main:true};
						case "menu":
							return {lp:"menu",main:false};
						case "settings":
							if (hash.length == 2){
								return {lp:"settings",add:hash[1],main:false};
							}
							return {lp:"settings",main:false};
						default:
							return false_hash;
					}
				};
				var s_user_button = document.getElementById("s_user");
				document.getElementById("nav_loc_messages").classList.remove("hide");
				document.getElementById("page_app").classList.remove("hide");
				document.getElementById("page_menu").classList.add("hide");
				s_user_button.classList.remove("disabled");
				s_user_button.setAttribute("title","Manage your profile");
				if (sub_page_ref_core_loaded){
					return;
				}
				sub_page_ref_core_loaded = true;
				try {
					document.getElementById("page_contents").classList.add("app_page_contents");
				} catch (e) {
					try {
						document.getElementById("page_contents_static").classList.add("app_page_contents");
					} catch (error) {
						alert("Error","An unexpected error occured!\n" + error.message)
					}
				}
				var s_banner_button = document.getElementById("s_banner");
				document.onscroll = function(){;
					if ((document.body.scrollTop || document.documentElement.scrollTop) > 10){
						s_banner_button.classList.add("clickable");
						s_banner_button.setAttribute("title","Scroll to top");
					} else {
						s_banner_button.classList.remove("clickable");
						s_banner_button.removeAttribute("title");
					}
				}
				function event_resize(){
					try {
						var page_width = document.documentElement.clientWidth;
						var devisable = 15;
						if (page_width <= 950) {
							devisable = 20;
						}
						if (page_width <= 812){
							devisable = 0;
						} else {
							devisable = Math.floor((page_width/100)*devisable);
						}
						document.getElementById("events_page_container").style.maxWidth = (page_width-devisable) + "px";
					} catch (e){}
				}
				new ResizeObserver(event_resize).observe(document.body);
				firebase.auth().onAuthStateChanged(function(user) {
					if (user) {
						var sub_pages = ["nav_loc_messages","nav_loc_events","nav_loc_members","nav_loc_pub","nav_loc_applets"];
						var sub_page = sub_pages[0];
						var contents = {posts:{},users:[],events:true,pub:"tbc",applets:-1};
						sub_page_link_generation = 0;
						var posts_base_load = false;
						sub_pages.forEach(function(nav_id){
							if (nav_id != "nav_loc_member_about"){
								var sub_page_link_ref = sub_pages[sub_page_link_generation];
								var page_ref_nav_id = document.getElementById(nav_id);
								page_ref_nav_id.addEventListener("click",function(e){
									if (e.target.classList.contains("disabled")){
										return;
									}
									for (var type_key in contents) {
										if ([[],null].indexOf(contents[type_key]) >= 0){
											return;
										}
									}
									load_page(sub_page_link_ref);
								});
								page_ref_nav_id.classList.add("disabled");
								sub_page_link_generation += 1;
							}
						});
						var post_db = firebase.database().ref("blog/chat/post").orderByKey().limitToLast(100);
						post_db.on("value",function(snapshot){
							snapshot.forEach(function(post){
								var doc_data = post.val();
								var timestamp = doc_data.time.seconds;
								doc_data.time = new Date(doc_data.time.seconds*1000);
								doc_data.time = [("0"+doc_data.time.getHours()).slice(-2)+":"+("0"+doc_data.time.getMinutes()).slice(-2),doc_data.time.toLocaleDateString(window.navigator.userLanguage || window.navigator.language)];
								for (var i = 0; i < Object.keys(contents.posts).length; i++) {
									for (var ii = Object.keys(contents.posts[Object.keys(contents.posts)[i]]).length - 1; ii >= 0; ii--) {
										if (contents.posts[Object.keys(contents.posts)[i]][Object.keys(contents.posts[Object.keys(contents.posts)[i]])[ii]].id == doc_data.id) {
											return;
										}
									}
								}
								if (!(doc_data.time.seconds in contents.posts)){
									contents.posts[timestamp] = [];
								}
								contents.posts[timestamp].push(doc_data);
							});
							posts_base_load = true;
						});
						var update_users = () => new Promise(async function(resolve, reject){
							firebase.firestore().collection("users/members/id").get().then(async function(snapshot){
								var users = snapshot.docs.map( doc => {
									var doc_data = doc.data();
									doc_data.id = doc.id;
									if ("deleted" in doc_data){
										if (doc_data.deleted == true){
											doc_data.photo = "/app/img/deleted.png";
											doc_data.photo_large = "/app/img/deleted.png";
											doc_data.name = "deleted";
											return doc_data;
										}
									}
									return doc_data;
								});
								var positions = {"events_organiser":null,"president":null,"social_secretary":null,"treasurer":null,"vice-president":null,data:null};
								positions.data = await firebase.firestore().collection("users").doc("positions").get();
								try {
									positions.data = positions.data.data();
									for (var positional_role in positions.data){
										if (positions.data[positional_role] != ""){
											positions[positional_role] = positions.data[positional_role];
										}
									}
								} catch (e) {}
								delete positions["data"];
								for (var i = users.length - 1; i >= 0; i--) {
									if (users[i].photo != "/app/img/deleted.png"){
										if (typeof users[i].photo === "undefined" || users[i].photo.length == 0){
											users[i].photo = "/app/img/prof.png";
											users[i].photo_large = "/app/img/prof.png";
										} else {
											users[i].photo = await storage_download("profile/"+users[i].id +"_50x50");
										}
									}
								}
								contents.users = [users,positions];
								resolve(users);
							}).catch(function(error){
								reject(error);
							});
						});
						var update_pub = () => new Promise(function(resolve, reject){
							firebase.firestore().collection("places").doc("pubs").get().then(function(pub){
								if (pub.exists){
									pub = pub.data();
									pub.date_time = pub.date.toDate();
									pub.date = pub.date_time;
									pub.date = pub.date.setHours(23,0,0,0);
									var pub_id = pub.this_week;
									if (pub.date > new Date()){
										firebase.firestore().collection("places/pubs/listed").doc(pub.this_week).get().then(function(pub_data){
											if (pub_data.exists){
												pub.this_week = pub_data.data();
												pub.this_week.id = pub_id;
												pub.this_week.geo = [pub.this_week.geo.latitude,pub.this_week.geo.longitude];
												pub.this_week.error = false;
												pub.this_week.date_time = pub.date_time;
												contents.pub = pub.this_week;
												resolve(pub);
											} else {
												throw false;
											}
										}).catch(function(e){
											contents.pub = {name:"Unable to get name of pub (" + e.message +  ")",error:true};
											resolve(pub);
										});
									} else {
										pub = [];
									}
								} else {
									pub = [];
								}
								if (pub.length == 0){
									contents.pub = "tbc";
									resolve(pub);
								}
							}).catch(function(error){
								reject(error);
							});
						});
						var update_events = () => new Promise(function(resolve, reject){
							var url = "https://sheets.googleapis.com/v4/spreadsheets/1sIyjKOdteE08ElqXiNkWJC1KLM-TbrGCD0YmftGL1EE/values/Events?key=AIzaSyBdg7VmX9uP7iZDUq1QNlJkHVLIOqldzq4";
							try {
								function add_pub(events){
									event = events || [];
									if (contents.pub != "tbc"){
										var date = new Date();
										date.setDate(date.getDate() + ((7-date.getDay())%7+3) % 7);
										date.setHours(0,0,0,0);
										if (date == new Date().setHours(0,0,0,0)){
											if (new Date().getHours() > 23 && new Date().getMinutes() > 30){
												return events;
											}
										}
										if (typeof(events[date]) === "undefined"){
											events[date] = {};
										}
										var time_of_pub = ((contents.pub.date_time.getHours() * 60) * 60) + (contents.pub.date_time.getMinutes() * 60) + contents.pub.date_time.getSeconds();
										if (typeof(events[date][time_of_pub]) === "undefined"){
											events[date][time_of_pub] = [];
										}
										events[date][time_of_pub].push(["Society drink up at " + contents.pub.name,"",contents.pub.name,date,"19:00","","","🍺\nCome along to our weekly pub meetup; this week we will be going to " + contents.pub.name + ", why don't you come along for: a drink, and a catch up!","pub",false]);
									}
									return events;
								}
								var request = new XMLHttpRequest();
								request.open('GET', url, true);
								request.onreadystatechange = function() {
									if (this.status >= 400) {
										contents.events = add_pub();
										if (contents.events == {}){
											reject("Failed to load events");
										}
										resolve();
										return false;
									} else if (this.readyState === 4) {
										var rows = JSON.parse(this.responseText)["values"];
										rows.shift(0);
										var display_rows = {}
										for (var i = 0; i < rows.length; i++) {
											if (rows[i].length == 11){
												if (rows[i][10] == "TRUE"){
													rows[i].pop(10);
													rows[i][9] = (rows[i][9] == "TRUE");
													var date = rows[i][3].split("/") || rows[i][3].split("-") || rows[i][3].split(".");
													var end_date = rows[i][6].split("/") || rows[i][6].split("-") || rows[i][6].split(".");
													date = new Date(date[2],date[1]-1,date[0]) || 0;
													if (end_date.length > 2){
														try {
															end_date = new Date(end_date[2],end_date[1]-1,end_date[0]);
														} catch(e) {
															end_date = 0;
														}
													} else {
														end_date = 0;
													}
													if (end_date == 0){
														end_date = date;
														end_date.setDate(end_date.getDate()+1);
														end_date.setHours(0,0,0,0);
													} else if(rows[i][5].length > 0) {
														var end_time = rows[i][5].split(':');
														if (end_time.length > 0){
															end_date.setHours(end_time[0]);
														}
														if (end_time.length > 1){
															end_date.setMinutes(end_time[1]);
														}
														if (end_time.length > 2){
															end_date.setSeconds(end_time[2]);
														}
													}
													rows[i][6] = end_date;
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
													rows[i][3] = start_date;
													var time = rows[i][4].split(":")
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
													display_rows[date][time].push(rows[i]);
												}
											}
										}
										display_rows = add_pub(display_rows);
										var sorted_display_rows = {};
										var display_rows_keys = Object.keys(display_rows);
										display_rows_keys.sort(function(a,b){
											return new Date(a).getTime() - new Date(b).getTime()
										});
										for (var i = 0; i < display_rows_keys.length; i++){
											sorted_display_rows[display_rows_keys[i]] = display_rows[display_rows_keys[i]];
										}
										contents.events = sorted_display_rows;
										resolve();
									}
								};
								request.onerror = function () {
									contents.events = false;
								}
								request.send();
							} catch(err) {}
						});
						var refresh = async function(now){
							var refresh_id = Math.floor(Math.random() * Math.floor(9999999));
							try {
								var message_refresh_container = document.getElementById("message_refresh");
								if (now !== true){
									now = false;
									message_refresh_container.classList.add("loading");
									message_refresh_container.setAttribute("refresh_id",refresh_id);
								}
								setTimeout(async function () {
									if (current_page[0] == "nav_loc_messages"){
										try {
											await load_page("nav_loc_messages","posts_host_container");
											if (message_refresh_container.getAttribute("refresh_id") == refresh_id){
												message_refresh_container.classList.remove("loading");
											}
										} catch (e) {}
									}
								},{true:0,false:960}[now]);
							} catch (e) {}
						}
						var list_applets = function(){
							var applet_data = (applet_name,applet_id) => new Promise(function(resolve, reject){
								var request = new XMLHttpRequest();
								request.open('GET', "https://raw.githubusercontent.com/solentcomputingsociety/" + applet_name + "/master/about.json", true);
								request.onreadystatechange = function() {
									if (this.status >= 400) {
										reject("Failed to load");
										return false;
									} else if (this.readyState === 4) {
										try {
											var applet_data_relative = JSON.parse(this.responseText);
											var applet_data = {host_name:applet_name,name:applet_data_relative["name"],description:applet_data_relative["description"],version:applet_data_relative["version"],author:applet_data_relative["author"],background:{true:"url(\'" + applet_data_relative["background-image"] + "\')",false:"#"+["DDA0DD","E9967A","32CD32","87CEFA","FF6347","5F9EA0"][Math.floor(Math.random() * 6)]}[typeof(applet_data_relative["background-image"]) !== "undefined"],id:applet_id,apis:applet_data_relative["apis"]||[]};
											resolve(applet_data);
										} catch (error) {
											reject(error);
										}
									}
								};
								request.onerror = function(error) {
									reject(error)
								}
								request.send();
							});
							try {
								var request = new XMLHttpRequest();
								request.open('GET', "https://api.github.com/search/repositories?q=user:solentcomputingsociety", true);
								request.onreadystatechange = async function() {
									if (this.status >= 400) {
										load_page("nav_loc_applets");
										contents.applets = -2;
										return false;
									} else if (this.readyState === 4) {
										var applets = JSON.parse(this.responseText)["items"];
										for (var i = 0; i < applets.length; i++) {
											if (applets[i]["id"] != 256980546){
												if (applets[i]["name"].startsWith("applet-") && applets[i]["name"] != "applet-"){
													await applet_data(applets[i]["name"],applets[i]["id"]).then(function(data){
														if(typeof(contents.applets) === "number"){
															contents.applets = [];
														}
														contents.applets.push(data);
													}).catch(function(error){
														if(typeof(contents.applets) === "number"){
															contents.applets -= 1;
														}
													});
												}
											}
										}
										if (current_page[0] == "nav_loc_applets"){
											load_page("nav_loc_applets");
										}
									}
								};
								request.onerror = function () {
									contents.events = false;
								}
								request.send();
							} catch (e) {}
						}
						function post_validate(){
							const max_length = 1000;
							var post_length = document.getElementById("new_post_content").value.length
							var new_post_actions_post_submit = document.getElementById("new_post_actions_post_submit");
							var new_post_actions_remaining_container = document.getElementById("new_post_actions_remaining_container");
							if (post_length > 900){
								new_post_actions_remaining_container.classList.remove("hide","red_error_bold");
								document.getElementById("new_post_actions_remaining").innerHTML = max_length - post_length;
								if (post_length > max_length){
									new_post_actions_remaining_container.classList.add("red_error_bold");
									new_post_actions_post_submit.classList.add("disabled");
								}
							} else {
								new_post_actions_remaining_container.classList.add("hide");
							}
							if (post_length > 0 && post_length <= 1000){
								new_post_actions_post_submit.classList.remove("disabled");
								return true;
							}
							return false;
						}
						var post = async function(){
							if (post_validate()){
								document.getElementById("error_container").innerHTML = "";
								document.getElementById("new_post_content").disabled = true;
								document.getElementById("new_post_actions_post_submit").classList.add("disabled");
								var updates = {};
								setTimeout(async function() {
									var new_post_key = firebase.database().ref("blog/chat").child("post").push().key;
									updates["/blog/chat/post/"+new_post_key] = {
										content: document.getElementById("new_post_content").value,
										time: firebase.firestore.Timestamp.fromDate(new Date()),
										user: firebase.auth().currentUser.uid,
										id: new_post_key
									};
									firebase.database().ref().update(updates);
									refresh(true);
									document.getElementById("new_post_content").value = "";
									post_validate();
									document.getElementById("new_post_content").disabled = false;
									document.getElementById("new_post_actions_post_submit").classList.remove("disabled");
								}, 500);
							}
						}
						var pubs_data = [];
						var user_view_about = -1;
						var cached_about = [];
						var load_page = async function(page_id,sub_ref){
							page_id = page_id || sub_page;
							sub_ref = sub_ref || false;
							sub_page = page_id;
							var sub_pages_rel = sub_pages;
							sub_pages_rel.push("nav_loc_member_about");
							if (sub_pages_rel.indexOf(page_id) < 0){
								return;
							}
							var out = {html:null};
							var img = [];
							var add = {};
							add.click = [];
							add.typing = [];
							add.call_back = [];
							add.change = [];
							var hash_ref = "";
							ignore_hash_change = true;
							switch (page_id){
								case "nav_loc_messages":
									hash_ref = "messages";
									try {
										if (sub_ref == "posts_host_container"){
											out.html = "<div>";
										} else {
											out.html = "<div class=\"side_margin\"><div id=\"new_post_container\"><div id=\"new_post_content_container\"><textarea id=\"new_post_content\" placeholder=\" Say something...\"></textarea></div><div id=\"error_container\" class=\"red_error_bold\"></div><div id=\"new_post_actions\"><div id=\"new_post_actions_remaining_container\" class=\"hide\">Remaining: <span id=\"new_post_actions_remaining\"></span></div><div id=\"new_post_actions_post_container\"><button id=\"new_post_actions_post_submit\">Post</button></div></div></div><p class=\"center_text\"><a title=\"click to refresh\" id=\"message_refresh\"></a></p><div id=\"posts_host_container\">";
											add.click.push(["message_refresh",refresh]);
											add.click.push(["new_post_actions_post_submit",post]);
											add.typing.push(["new_post_content",post_validate]);
											add.call_back.push(post_validate);
											add.call_back.push(refresh);
										}
										if (Object.keys(contents.posts).length == 0){
											if (!posts_base_load){
												out.html += "<p class=\"center_text no_interact\" id=\"post_end_reason\">Still loading... Check back later!</p></div></div>";
												break;
											}
											out.html += "<p class=\"center_text no_interact\" id=\"post_end_reason\">No posts have been loaded" + {true:"",false:", because you are currently offline"}[navigator.onLine] + "!</p></div></div>";
											break;
										}
										for (var i = Object.keys(contents.posts).length - 1; i >= 0; i--) {
											for (var ii = contents.posts[Object.keys(contents.posts)[i]].length - 1; ii >= 0; ii--) {
												var post_content = contents.posts[Object.keys(contents.posts)[i]][ii];
												var user_match = 1;
												while (user_match in [0,1]) {
													for (var iii = 0; iii < contents.users[0].length; iii++) {
														if (contents.users[0][iii].id == post_content.user) {
															user_match = contents.users[0][iii];
															break;
														}
													}
													if (!(user_match in [0,1])){
														break;
													}
													if (user_match == 1){
														await update_users();
													}
													user_match -= 1;
												}
												if (user_match <= 0){
													user_match = {name:"Deleted",photo:"/app/img/deleted.png",id:null};
												}
												img.push([user_match.photo,post_content.id + "_p-img"]);
												out.html += "<div class=\"post\"><table><tr><td valign=\"top\" width=\"58px\"><span id=\"" + post_content.id + "_p-img\" class=\"post_img_s user_reference_link loading\" uid=\"" + user_match.id + "\" title=\"View " + user_match.name + "'s profile\"></span></td><td valign=\"top\">";
												var post_contents = post_content.content.split("\n");
												if (post_contents.length == 1){
													post_contents = post_contents[0].split("\\n");
												}
												for (var iii = 0; iii < post_contents.length; iii++) {
													post_contents[iii] = post_contents[iii].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
													post_contents[iii] = (post_contents[iii] || "").replace(/([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
														function(match, space, url){
															var hyperlink = url;
															if (!hyperlink.match('^https?:\/\/')) {
																hyperlink = "http://" + hyperlink;
															}
															return space + "<a href=\"" + hyperlink + "\" title=\"Go to " + hyperlink + "\" target=\"_blank\">" + url + "</a>";
														}
													);
													if (iii == post_contents.length - 1){
														out.html += "<p>" + post_contents[iii] + "</p>";
													} else {
														out.html += "<p class=\"no_bottom\">" + post_contents[iii] + "</p>";
													}
												}
												out.html += "</td></tr></table><div><div class=\"post_by\"><span id=\"" + post_content.id + "_uid_post_ref\" uid=\"" + user_match.id + "\" class=\"user_reference_link\" title=\"View " + user_match.name + "'s profile\">" + user_match.name + "</span></div><div class=\"post_time\" title=\"Posted at: " + post_content.time.join(" - ") + "\"><span>at: </span>" + post_content.time[0] + {true:" - " + post_content.time[1],false:""}[post_content.time[1] != new Date().toLocaleDateString(window.navigator.userLanguage || window.navigator.language)] + "</div></div></div>";
												[post_content.id + "_uid_post_ref",post_content.id + "_p-img"].forEach(element => {
													add.click.push([element,function(e){
														if (typeof(e.target.getAttribute("uid")) !== "undefined"){
															user_view_about = e.target.getAttribute("uid");
															load_page("nav_loc_member_about",user_view_about);
														}
													}]);
												});
											}
										}
										out.html += "<div class=\"center_text\" id=\"post_end\"></div></div></div>";
									} catch (e) {
										return;
									}
									break;
								case "nav_loc_events":
									hash_ref = "events";
									document.title = "Events | Solent Computing Society";
									out.html = "<div class=\"side_margin center_text\">";
									if (contents.events === true){
										out.html += "<p class=\"center_text no_interact\">Unable to load upcoming events!</p>";
									} else {
										var now = new Date();
										now = now.getSeconds() + (60 * (now.getMinutes() + (60 * now.getHours())));
										out.html = "<div id=\"events_page_container\"><div id=\"events_page_side\">";
										const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
										const ordinal = ["th", "st", "nd", "rd"];
										var events_added = false;
										for (var day in contents.events) {
											var priority_order = [];
											try {
												var show_date = new Date(day);
												var event_date = show_date;
												var date_check = new Date();
												date_check.setHours(0,0,0,0);
												if (Object.keys(contents.events[day]).length > 0){
													show_date = [show_date.getDate(),show_date.getMonth(),show_date.getFullYear(),]
													show_date[3] = show_date[0] % 100;
													out.html += "<div><h4 class=\"event_date\">" + {true:"Today",false:show_date[0] + (ordinal[(show_date[3] - 20) % 10] || ordinal[show_date[1]] || ordinal[0]) + " of " + months[show_date[1]] + ", " + show_date[2]}[event_date.valueOf() <= date_check.valueOf()] + ":</h4><div><div class=\"event_daily_container\"><div class=\"event_content_container spacer_padder desktop_only\"></div>";
													for (var time in contents.events[day]){
														for (var i = 0; i < contents.events[day][time].length; i++){
															if (contents.events[day][time][i][9]){
																priority_order.push([time,i,true]);
															}
														}
													}
													for (var time in contents.events[day]){
														for (var i = 0; i < contents.events[day][time].length; i++){
															match = false;
															for(var item in priority_order){
																if (priority_order[item][0] == time && priority_order[item][1] == i){
																	match = true;
																	break;
																}
															}
															if (!match) {
																priority_order.push([time,i,false]);
															}
														}
													}
													for (var time_order in priority_order){
														var time = priority_order[time_order][0];
														var i = priority_order[time_order][1];
														var priority = priority_order[time_order][2];
														var event = contents.events[day][time][i][8].toLowerCase();
														var pub = (event == "pub");
														var start_date = contents.events[day][time][i][3];
														var end_date;
														var end_time;
														if (contents.events[day][time][i][6] !== "") {
															end_date = new Date(contents.events[day][time][i][6].getTime());
															end_time = new Date(contents.events[day][time][i][6].getTime());
														} else {
															end_date = new Date(day);
														}
														try {
															end_date.setHours(0,0,0,0);
														} catch (e) {
															end_date = "";
														}
														out.html += "<div id=\"" + {true:"pub_link_event_ref",false:"event_ref_id-e" + (new Date(day).getTime() + time)}[pub] + "\" class=\"event_content_container" + {true:" dynamic_tables",false:""}[navigator.appVersion.indexOf("Chrome") != -1] + " event_type_" + event.split(" ").join("_") + {true:" priority_event",false:""}[priority] + "\"><div><h3 class=\"event_name\">" + contents.events[day][time][i][0] + "</h3><div><div class=\"center_text small\"><span>" + {true:"Started",false:"From"}[start_date <= new Date() && time < now] + ": ";
														try {
															if (start_date < new Date(day)){
																out.html += contents.events[day][time][i][6].getDate() + "/" + (contents.events[day][time][i][6].getMonth() + 1) + "/" + contents.events[day][time][i][6].getFullYear();
															}
															if (contents.events[day][time][i][4].length > 0){
																if (start_date < new Date(day)){
																	out.html += " at ";
																}
																out.html += contents.events[day][time][i][4];
															} else if (start_date >= new Date(day)) {
																out.html += "Unknown";
															}
															out.html += "</span><br>"
															shown_end = false;
															out.html += "<span>" + {true:"Ending",false:"Until"}[start_date <= new Date() && time < now] + ": ";
															if (end_date != ""){
																if (end_date.getTime() > new Date(day).getTime() && end_time.getHours() != 12 && end_time.getMinutes() != 0){
																	out.html += end_date.getDate() + "/" + (end_date.getMonth() + 1) + "/" + end_date.getFullYear();
																	if (contents.events[day][time][i][5].length > 0){
																		out.html += " at ";
																	}
																	shown_end = true;
																}
															}
															if ((pub)){
																out.html += " late";
																shown_end = true;
															} else if (end_time != ""){
																if (contents.events[day][time][i][5].length > 0){
																	if (end_time.getHours() == 0 && end_time.getMinutes() == 0){
																		out.html += "Midnight";
																	} else if (end_time.getHours() == 12 && end_time.getMinutes() == 0){
																		out.html += "Noon";
																	} else {
																		out.html += ("0"+end_time.getHours()).slice(-2) + ":" + ("0" + end_time.getMinutes()).slice(-2);
																	}
																	shown_end = true;
																}
															}
															if (!shown_end){
																out.html += "Unknown";
															}
															out.html += "</span>";
														} catch (e) {}
														events_added = true;
														out.html += "</div><div class=\"side_margin small_bottom event_description\"><p>";
														var description = contents.events[day][time][i][7].split("\n");
														description.forEach(text => {
															out.html += "<p";
															if (text.replace(new RegExp('[\u0000-\u1eeff]', 'g'), '').length === text.replace(new RegExp('[\n\r\s]+|( )+', 'g'), '').length){
																out.html += " class=\"event_emoji_string\"";
															}
															out.html += ">" + text + "</p>";
														});
														out.html += "</div>";
														if (contents.events[day][time][i][1].length > 0){
															out.html += "<p class=\"no_top small_bottom small side_margin center_text\">Find out more: <a href=\"" + contents.events[day][time][i][1] + "\" title=\"Visit " + contents.events[day][time][i][1] + " for more information\" target=\"blank\" class=\"out_link\">" + contents.events[day][time][i][1] + "</a></p>";
														}
														if (contents.events[day][time][i][2].length > 0){
															out.html += "<p class=\"no_top small_bottom small side_margin center_text\">Location: " + contents.events[day][time][i][2] + "</p>";
														}
														out.html += "</div></div></div>";
														if (pub){
															add.click.push(["pub_link_event_ref",function(){
																load_page("nav_loc_pub");
															}]);
														}
													}
													out.html += "<div class=\"event_content_container spacer_padder small desktop_only\"></div></div></div></div>";
												}
											} catch (e) {}
										}
										if (!events_added) {
											out.html += "<p class=\"center_text no_interact\">Sadly, there are no upcoming events.</p>";
										}
									}
									out.html += "</div></div>";
									add.call_back.push(event_resize);
									break;
								case "nav_loc_members":
									hash_ref = "members";
									document.title = "Members | Solent Computing Society";
									out.html = "";
									for (var i = 0; i < contents.users[0].length; i++) {
										out.html += "<div class=\"members_list\" id=\"view_prof_" + contents.users[0][i].id + "\" uid=\"" + contents.users[0][i].id + "\" title=\"View " + contents.users[0][i].name + "'s profile\"><table><tr><td width=\"50px\" valign=\"middle\"><img class=\"members_list_img_s loading\" id=\"" + contents.users[0][i].id + "_r-img\"></td><td valign=\"middle\"><span class=\"members_list_name\">" + contents.users[0][i].name + "</span></td></tr></table></div>";
										img.push([contents.users[0][i].photo,contents.users[0][i].id + "_r-img"]);
										add.click.push(["view_prof_" + contents.users[0][i].id,function(e){
											var parent_check = 5;
											var reference_check = e.target;
											while (parent_check >= 0){
												if (reference_check.hasAttribute("uid")){
													user_view_about = reference_check.getAttribute("uid");
													break;
												} else {
													reference_check = reference_check.parentNode;
													parent_check -= 1;
													user_view_about = -1;
												}
											}
											load_page("nav_loc_member_about",user_view_about);
										}]);
									}
									break;
								case "nav_loc_member_about":
									hash_ref = "profile/"+user_view_about;
									out.html = "";
									var match = false;
									for (var i = 0; i < contents.users[0].length; i++) {
										if (contents.users[0][i].id == sub_ref){
											document.title = contents.users[0][i].name + "'s profile | Solent Computing Society";
											out.html += "<div id=\"about_me_prof_container\" class=\"loading side_margin\" uid=\"" + sub_ref + "\"><div id=\"about_me_side_ref\"><img id=\"about_me_prof_img-" + sub_ref + "\" class=\"about_me_prof_img loading\"><h1 class=\"small_bottom\">" + contents.users[0][i].name + "</h1></div><div id=\"about_me_main_ref\"><p id=\"about_me_loading\"></p></div></div>";
											var loaded = async function(){
												var uid_ref = user_view_about;
												for (let i = 0; i < contents.users[0].length; i++) {
													if (contents.users[0][i].id == uid_ref){
														if (typeof(contents.users[0][i].photo_large) === "undefined"){
															try {
																contents.users[0][i].photo_large = await storage_download("profile/"+uid_ref);
															} catch (e) {
																document.getElementById("about_me_loading").classList.add("error");
															}
														}
														if (cached_about.indexOf(uid_ref) >= 0 && cache_avaliable){
															await firebase.firestore().disableNetwork();
														}
														await firebase.firestore().collection("users/members/id/" + uid_ref + "/about/").get().then(async function(about){
															if (cached_about.indexOf(uid_ref) < 0 && cache_avaliable){
																cached_about.push(uid_ref);
															}
															about_docs = about.docs.map( doc => {
																var doc_data = doc.data();
																doc_data.id = doc.id;
																return doc_data;
															});
															var about = {};
															about_docs.forEach(doc => {
																if (doc.id == "course"){
																	about["subject"] = doc.subject;
																	about["year_of_study"] = doc.year;
																} else if (doc.id == "intro"){
																	about["intro"] = doc.bio;
																	about["relationship_status"] = doc.relationship_status;
																} else if (doc.id == "favourite_things"){
																	about["favourite_food"] = doc.food;
																	about["favourite_drink"] = doc.drink;
																	about["favourite_lecturer"] = doc.lecturer;
																	about["favourite_film"] = doc.film;
																	about["favourite_tv_show"] = doc.tv_show;
																} else if (doc.id == "social"){
																	about["email_address"] = doc.email_address;
																	about["phone_number"] = doc.phone_number;
																	about["website"] = doc.website;
																	about["facebook"] = doc.facebook;
																	about["twitter"] = doc.twitter;
																	about["instagram"] = doc.instagram;
																	about["snapchat"] = doc.snapchat;
																	about["linkedin"] = doc.linkedIn;
																	about["dev_community"] = doc.dev_community;
																	about["discord"] = doc.discord;
																	about["youtube"] = doc.youtube;
																	about["github"] = doc.github;
																} else {
																	about[doc.id] = doc.is;
																}
															});
															var about_me = {"Subject":about["subject"]||"","Year of study":about["year_of_study"]||0,"Intro":about["intro"]||"","Relationship status":about["relationship_status"]||0,"Favourite lecturer": about["favourite_lecturer"]||"","Favourite food": about["favourite_food"]||"","Favourite drink": about["favourite_drink"]||"","Favourite film": about["favourite_film"]||"","Favourite TV show": about["favourite_tv_show"]||"","Facebook":about["facebook"]||"","Phone number":about["phone_number"]||"","Email":about["email_address"]||"","Website":about["website"]||"","Twitter":about["twitter"]||"","Instagram":about["instagram"]||"","Snapchat":about["snapchat"]||"","Discord":about["discord"]||"","Youtube":about["youtube"]||"","Dev Community":about["dev_community"]||"","GitHub":about["github"]||"","LinkedIn":about["linkedin"]||""};
															try {
																var about_me_container = document.getElementById("about_me_prof_container");
																if (about_me_container.getAttribute("uid") == uid_ref && about_me_container.getAttribute("outputted") != "yes"){
																	about_me_container.setAttribute("outputted","yes");
																	about_me_container.classList.remove("loading");
																	await img_blob(contents.users[0][i].photo_large,"about_me_prof_img-"+user_view_about);
																	var build_socials = "";
																	if ((about_me["Facebook"] + about_me["Twitter"] + about_me["Discord"] + about_me["Instagram"] + about_me["Snapchat"] + about_me["Youtube"],about_me["Dev Community"] + about_me["GitHub"] + about_me["LinkedIn"] + about_me["Phone number"] + about_me["Email"] + about_me["Website"]).length > 0){
																		build_socials = "<div class=\"social_icon_links\">";
																		["Phone number","Email","GitHub","Facebook","Twitter","Youtube","Instagram","Snapchat","Discord","LinkedIn","Dev Community","Website"].forEach(social => {
																			var ref_icon = social.toLowerCase().replace(" ","_");
																			if (about_me[social].length > 0){
																				var call_tip = contents.users[0][i].name;
																				if (ref_icon == "phone_number"){
																					call_tip = "Call " + call_tip;
																				} else if (ref_icon == "website") {
																					call_tip = "View " + call_tip + "'s website";
																				} else if (ref_icon == "email") {
																					call_tip = "Contact " + call_tip + " by email";
																				} else if (ref_icon == "snapchat"){
																					call_tip = "Add " + call_tip + " on Snapchat";
																				} else if (ref_icon == "discord"){
																					call_tip = "Add " + call_tip + " on Discord";
																				} else if (ref_icon == "linkedin"){
																					call_tip = "Connect with " + call_tip + " on LinkedIn";
																				} else {
																					call_tip = "View " + call_tip + " on " + social;
																				}
																				build_socials += "<div class=\"social_icon_link_container\"><a target=\"_blank\" title=\"" + call_tip + "\"";
																				if (ref_icon != "discord"){
																					build_socials += "href=\"";
																				} else {
																					build_socials += "id=\"discord_link-" + user_view_about + "\" prof_tag=\""
																				}
																				var ref_url = about_me[social];
																				if (ref_icon == "phone_number"){
																					build_socials += encodeURI("tel:" + ref_url);
																				} else if (ref_icon == "email"){
																					build_socials += encodeURI("mailto:" + ref_url);
																				} else if (ref_icon == "facebook"){
																					build_socials += encodeURI("https://www.facebook.com/" + ref_url);
																				} else if (ref_icon == "twitter"){
																					build_socials += encodeURI("https://twitter.com/" + ref_url);
																				} else if (ref_icon == "instagram"){
																					build_socials += encodeURI("https://instagram.com/_u/" + ref_url);
																				} else if (ref_icon == "snapchat"){
																					build_socials += encodeURI("https://snapchat.com/add/" + ref_url);
																				} else if (ref_icon == "github"){
																					build_socials += encodeURI("https://github.com/" + ref_url);
																				} else if (ref_icon == "dev_community"){
																					build_socials += encodeURI("https://dev.to/" + ref_url);
																				} else {
																					build_socials += encodeURI(ref_url);
																				}
																				build_socials += "\"><div id=\"social_icon_" + ref_icon + "\"";
																				if (ref_icon == "website"){
																					try {
																						build_socials += " style=\"background-image:url(https://www.google.com/s2/favicons?domain=" + (new URL(about_me["Website"])).hostname +  ")\"";
																					} catch (e) {};
																				}
																				build_socials += "></div></a></div>";
																			}
																		});
																		build_socials += "</div>";
																	}
																	var about_panel_out = "";
																	for(var position in contents.users[1]){
																		if (contents.users[1][position] == uid_ref){
																			about_panel_out += "<h3 class=\"side_margin center_text\">" + position.toUpperCase() + "</h3>";
																			break;
																		}
																	}
																	about_panel_out += "<div class=\"side_margin\">" + build_socials;
																	if (about_me["Intro"].length > 0){
																		about_panel_out += "<p class=\"center_text small_bottom\">" + about_me["Intro"].replace('<','&lt;').replace('>','&gt;') + "</p>";
																	}
																	if (about_me["Subject"] > 0){
																		about_panel_out += "<div><h3 class=\"center_text small_bottom\">Studying:</h3><p class=\"center_text\">" + about_sections["Subject"][about_me["Subject"] - 1];
																		if (about_me["Year of study"] > 0){
																			about_panel_out += " - " + about_sections["Year of study"][about_me["Year of study"] - 1];
																			if ([5,6].indexOf(about_me["Year of study"]) < 0){
																				about_panel_out += " year";
																			}
																		}																			
																		about_panel_out += "</p>";
																	} else if (about_me["Year of study"] > 0){
																		about_panel_out += "<div><h3 class=\"center_text small_bottom\">Year of study:</h3><p class=\"center_text\">" + about_sections["Year of study"][about_me["Year of study"] - 1];
																		if ([5,6].indexOf(about_me["Year of study"]) < 0){
																			about_panel_out += " year";
																		}
																		about_panel_out += "</p>";
																	}
																	about_panel_out += "</div>";
																	document.getElementById("about_me_side_ref").innerHTML += about_panel_out;
																	if (about_me["Discord"].length > 1) {
																		document.getElementById("discord_link-" + user_view_about).addEventListener("click",function(e){
																			try {
																				var prof_tag = false;
																				var parent_check = 1;
																				var reference_check = e.target;
																				while (parent_check >= 0){
																					if (reference_check.hasAttribute("prof_tag")){
																						prof_tag = reference_check.getAttribute("prof_tag");
																						break;
																					} else {
																						reference_check = reference_check.parentNode;
																						parent_check -= 1;
																						user_view_about = -1;
																					}
																				}
																				if (prof_tag !== false) {
																					alert_vibrate = false;
																					alert("Discord username:",prof_tag);
																				}
																			} catch (e) {}
																		});
																	}
																	about_panel_out = "";
																	if (about_me["Relationship status"] > 0) {
																		about_panel_out += "<h3>Relationship status:</h3><p>" + about_sections["Relationship status"][about_me["Relationship status"] - 1] + "</p>";

																	}
																	if (about_me["Favourite lecturer"].trim().length > 0) {
																		about_panel_out += "<h3>Favourite lecturer:</h3><p>" + about_me["Favourite lecturer"].replace('<','&lt;').replace('>','&gt;') + "</p>";

																	}
																	if (about_me["Favourite food"].trim().length > 0) {
																		about_panel_out += "<h3>Favourite food:</h3><p>" + about_me["Favourite food"].replace('<','&lt;').replace('>','&gt;') + "</p>";

																	}
																	if (about_me["Favourite drink"].trim().length > 0) {
																		about_panel_out += "<h3>Favourite drink:</h3><p>" + about_me["Favourite drink"].replace('<','&lt;').replace('>','&gt;') + "</p>";

																	}
																	if (about_me["Favourite film"].trim().length > 0) {
																		about_panel_out += "<h3>Favourite film:</h3><p>" + about_me["Favourite film"].replace('<','&lt;').replace('>','&gt;') + "</p>";

																	}
																	if (about_me["Favourite TV show"].trim().length > 0) {
																		about_panel_out += "<h3>Favourite TV show:</h3><p>" + about_me["Favourite TV show"].replace('<','&lt;').replace('>','&gt;') + "</p>";
																	}
																	if (about_panel_out != ""){
																		about_panel_out = "<h2 class=\"no_top\" id=\"about_me_header_about\">About:</h2>" + about_panel_out;
																	} else {
																		about_panel_out = "<div class=\"desktop_only\"><br><br><br></div><p class=\"no_top side_margin center_text\">Nothing else was found...<br><br>It appears that " + contents.users[0][i].name + " wishes to have a sense of mystery about them.</p>"
																	}
																	document.getElementById("about_me_main_ref").innerHTML = about_panel_out;
																}
															} catch (e) {
																if (document.getElementById("about_me_container").getAttribute("uid") == uid_ref){
																	document.getElementById("about_me_loading").classList.add("error");
																	document.getElementById("about_me_container").classList.remove("loading")
																	document.getElementById("about_me_container").classList.add("error");
																	document.getElementById("about_me_side_ref").outerHTML = "";
																}
															}
														}).catch(function(error){
															if (document.getElementById("about_me_container").getAttribute("uid") == uid_ref){
																document.getElementById("about_me_loading").classList.add("error");
																document.getElementById("about_me_container").classList.remove("loading")
																document.getElementById("about_me_container").classList.add("error");
																document.getElementById("about_me_side_ref").outerHTML = "";
															}
														});
														await firebase.firestore().enableNetwork();
													}
												}
											}
											add.call_back.push(loaded);
											if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
												add.call_back.push(function(){
													document.getElementById("about_me_prof_img-"+document.getElementById("about_me_container").getAttribute("uid")).classList.add("firefoxIssue");
												});
											}
											match = true;
											break;
										}
									}
									if (!match){
										load_page("nav_loc_members");
										return;
									}
									sub_ref = false;
									break;
								case "nav_loc_applets":
									document.title = "Applets | Solent Computing Society";
									hash_ref = "applets";
									out.html = "<div class=\"side_margin\" id=\"applet_listing_container\">";
									if (typeof(contents.applets) === "number"){
										if (contents.applets < -1){
											out.html += "<div class=\"small_spacer\"></div><p id=\"applet_error\" class=\"side_padding center_text no_interact\">Unable to load applets!</p>";
										} else if (contents.applets == -1) {
											out.html += "<div class=\"small_spacer\"></div><p class=\"side_padding center_text no_interact\">Updating applet catalogue...</p>";
										} else {
											out.html += "<div class=\"small_spacer\"></div><p id=\"applet_error\" class=\"side_padding center_text no_interact\">Failed to load applets!</p>";
										}
										add.call_back.push(function(){
											document.getElementById("applet_listing_container").removeAttribute("id");
										});
									} else {
										for (let i = 0; i < contents.applets.length; i++) {
											out.html += "<div class=\"applet_display_option\" id=\"applet_ref_" + contents.applets[i].id + "\" appid=\"" + contents.applets[i].id + "\" style=\"background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0." + {true:"4",false:"2"}[contents.applets[i].background.startsWith("url")] + ")), " + contents.applets[i].background + ";\"><div><h3 class=\"applet_header_name\">" + contents.applets[i].name + "</h3><p class=\"no_top\">" + contents.applets[i].description.split("\n").join("</p><p class=\"no_top\">") + "</p><div id=\"applet_content_container_" + contents.applets[i].id + "\"></div></div></div>";
											add.click.push(["applet_ref_" + contents.applets[i].id ,function(e){
												var parent_check = 5;
												var reference_check = e.target;
												var applet_id = false;
												while (parent_check >= 0){
													if (reference_check.hasAttribute("appid")){
														applet_id = reference_check.getAttribute("appid");
														break;
													} else {
														reference_check = reference_check.parentNode;
														parent_check -= 1;
													}
												}
												if (applet_id !== false){
													try {
														if (!reference_check.classList.contains("open")){
															reference_check.classList.add("open");
															var applet_container = document.getElementById("applet_content_container_" + contents.applets[i].id);
															var applet_container_host = document.createElement("iframe");
															applet_container_host.setAttribute("id","applet_content_iframe-" + contents.applets[i].host_name);
															applet_container_host.setAttribute("class","applet_content_iframe");
															applet_container_host.style.height = "0px";
															applet_container.appendChild(applet_container_host);
															var applet_container_content = applet_container_host.contentWindow.document;
															applet_container_content.open();
															const apis = ["users/list-all","users/list-current","users/about/intro","users/about/course","users/about/favourite_things","users/about/social","users/profile-picture"];
															var valid = [true,0];
															for (let ii = 0; ii < contents.applets[i].apis.length; ii++) {
																const api = contents.applets[i].apis[ii];
																valid[1] += 1;
																if (api != undefined){
																	if (apis.indexOf(api) < 0){
																		valid[1] -= 1;
																		valid[0] = false;
																	}
																}
															}
															var load_apis = (apis_required) => new Promise(async function(resolve,reject) {
																var apis_value = {};
																var user_referece_api = apis_required.indexOf("users/list-current");
																if (user_referece_api >= 0){
																	delete apis_required[user_referece_api];
																	apis_required.unshift("users/list-current");
																}
																user_referece_api = apis_required.indexOf("users/list-all");
																if (user_referece_api >= 0){
																	delete apis_required[user_referece_api];
																	apis_required.unshift("users/list-all");
																}
																console.log(apis_required);
																for (let i = 0; i < apis_required.length; i++) {
																	if (typeof(apis_required[i]) === "undefined"){
																		continue;
																	}
																	console.log(apis_required[i]);
																	console.log(apis_required[i].startsWith("user/about-"))
																	const api = {true:"users/about",false:apis_required[i]}[apis_required[i].startsWith("user/about/")];
																	const prerequisite = {true:apis_required[i].substring(11),false:null}[apis_required[i].startsWith("user/about/")];
																	switch (api){
																		case "users/list-all":
																			apis_value["users/list-all"] = JSON.parse(JSON.stringify(contents.users[0]));
																			for (let ii = 0; ii < apis_value["users/list-all"].length; ii++) {
																				delete apis_value["users/list-all"][ii].photo;
																				delete apis_value["users/list-all"][ii].photo_large;
																			}
																			break;
																		case "users/list-current":
																			apis_value["users/list-current"] = JSON.parse(JSON.stringify(contents.users[0]));
																			var match = false;
																			for (let ii = 0; ii < apis_value["users/list-current"].length; ii++) {
																				if(apis_value["users/list-current"][ii].id == firebase.auth().currentUser.uid){
																					match = true;
																					apis_value["users/list-current"] = apis_value["users/list-current"][ii];
																					delete apis_value["users/list-all"].photo;
																					delete apis_value["users/list-all"].photo_large;
																					break;
																				}
																			}
																			if (!match){
																				apis_value["users/list-current"] = false;
																			}
																			break;
																		case "users/profile-picture":
																			apis_value["users/profile-picture"] = {};
																			for (let ii = 0; ii < contents.users[0].length; ii++) {
																				if (typeof(contents.users[0][ii].photo_large) === "undefined"){
																					if (contents.users[0][ii].photo.length == 0){
																						contents.users[0][ii].photo_large = (new URL(document.URL)).origin + "/app/img/prof.png";
																					} else {
																						contents.users[0][ii].photo_large = await storage_download("profile/"+contents.users[0][ii].id);
																					}
																				}
																				if (contents.users[0][ii].photo == "/app/img/prof.png"){
																					contents.users[0][ii].photo = (new URL(document.URL)).origin + "/app/img/prof.png";
																					contents.users[0][ii].photo_large = (new URL(document.URL)).origin + "/app/img/prof.png";
																				}
																				apis_value["users/profile-picture"][contents.users[0][ii].id] = [contents.users[0][ii].photo,contents.users[0][ii].photo_large];
																			}
																			break;
																		case "users/about":
																			var users_all;
																			if (prerequisite == null){
																				reject("Invalid API reference");
																				return;
																			}
																			if (typeof(apis_value["users/list-all"]) === "undefined"){
																				if (typeof(apis_value["users/list-current"]) === "undefined"){
																					reject("[users/about" + {true:"/"+prerequisite,false:""}[prerequisite != null] + "] No user user(s) were requested");
																				} else {
																					users = [apis_value["users/list-current"]];
																					users_all = false;
																				}
																			} else {
																				users = apis_value["users/list-all"];
																				users_all = true;
																			}
																			var content = [];
																			for (let ii = 0; ii < users.length; ii++) {
																				var get_user_data = async function(){
																					return await firebase.firestore().collection("users/members/id/" + users[ii].id + "/about/").doc(prerequisite).get().then(async function(doc){
																						if (doc.exists){
																							doc = doc.data();
																							if (prerequisite == "course"){
																								about["Subject"] = doc.subject || "";
																								about["Year of study"] = doc.year || "";
																							} else if (prerequisite == "intro"){
																								about["Intro"] = doc.bio || "";
																								about["Relationship status"] = doc.relationship_status || "";
																							} else if (prerequisite == "favourite_things"){
																								about["Favourite food"] = doc.food || "";
																								about["Favourite drink"] = doc.drink || "";
																								about["Favourite lecturer"] = doc.lecturer || "";
																								about["Favourite film"] = doc.film || "";
																								about["Favourite TV show"] = doc.tv_show || "";
																							} else if (prerequisite == "social"){
																								about["Email address"] = doc.email_address || "";
																								about["Phone number"] = doc.phone_number || "";
																								about["Website"] = doc.website || "";
																								about["Facebook"] = doc.facebook || "";
																								about["Twitter"] = doc.twitter || "";
																								about["Instagram"] = doc.instagram || "";
																								about["Snapchat"] = doc.snapchat || "";
																								about["LinkedIn"] = doc.linkedIn || "";
																								about["Dev Community"] = doc.dev_community || "";
																								about["Discord"] = doc.discord || "";
																								about["Youtube"] = doc.youtube || "";
																								about["GitHub"] = doc.github || "";
																							}
																						} else {
																							if (prerequisite == "course"){
																								about["Subject"] = "";
																								about["Year of study"] = "";
																							} else if (prerequisite == "intro"){
																								about["Intro"] = "";
																								about["Relationship status"] = "";
																							} else if (prerequisite == "favourite_things"){
																								about["Favourite food"] = "";
																								about["Favourite drink"] = "";
																								about["Favourite lecturer"] = "";
																								about["Favourite film"] = "";
																								about["Favourite TV show"] = "";
																							} else if (prerequisite == "social"){
																								about["Email address"] = "";
																								about["Phone number"] = "";
																								about["Website"] = "";
																								about["Facebook"] = "";
																								about["Twitter"] = "";
																								about["Instagram"] = "";
																								about["Snapchat"] = "";
																								about["LinkedIn"] = "";
																								about["Dev Community"] = "";
																								about["Discord"] = "";
																								about["Youtube"] = "";
																								about["GitHub"] = "";
																							}
																						}
																						var about = {};
																						
																						if (users_all){
																							var about_content;
																							if (typeof(apis_value["users/list-all"][ii].about) === "undefined"){
																								about_content = {};
																							} else {
																								about_content = apis_value["users/list-all"][ii].about;
																							}
																							apis_value["users/list-all"][ii].about = {...about_content,...apis_value};
																						} else {
																							var about_content;
																							if (typeof(apis_value["users/list-current"][ii].about) === "undefined"){
																								about_content = {};
																							} else {
																								about_content = apis_value["users/list-current"][ii].about;
																							}
																							apis_value["users/list-current"].about = {...about_content,...about_user};
																						}
																						return true;

																					}).catch(function(error){
																						return false;
																					});
																				}
																				var about_user_success = false;
																				if (cached_about.indexOf(users[ii].id) >= 0 && cache_avaliable){
																					await firebase.firestore().disableNetwork().then(async function() {
																						about_user_success = await get_user_data();
																					});
																					await firebase.firestore().enableNetwork();
																				}
																				if (!about_user_success) {
																					about_user_success = await get_user_data();
																					if (about_user_success == false){
																						reject("Failed to load user data");
																					}
																				}
																				if (cache_avaliable){
																					cached_about.push(users[ii].id);
																				}
																			}
																			break;
																	}
																}
																resolve(apis_value);
															});
															function loading_applet(){
																return "<html><head><style type=\"text/css\">body{padding:2em 1em;overflow-y:hidden;min-height:170px;background-color:#e3e3e3;background-repeat:no-repeat;background-position:center;background-size:140px;padding:1em;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ5LjkybW0iIGhlaWdodD0iMzQ4LjI0bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0OS45MiAzNDguMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNDMxLC0yMS43MTkpIiBmaWxsPSIjZmZmIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi40NzM1LDcuOTE4NSkiPgogICA8ZyBzdHJva2U9IiMwMDAiPgogICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoLjk4NDg4IC0uMTczMjUgLjE2MTMzIC45ODY5IDAgMCkiIGN4PSI5MS44NDUiIGN5PSI5OS45NyIgcng9IjYyLjM4OSIgcnk9IjY1LjE4OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjcuMzkxOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8Y2lyY2xlIGN4PSI1Ljg2OTciIGN5PSI3OS4xMTkiIHI9IjEzLjkxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjguMTYzNiIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8cGF0aCBkPSJtMjAuMzA2IDgwLjM2OCAyNC4zMzYtMC42MTc4MyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPHBhdGggZD0ibTE2OS40NyA4MC42NyAyNC4zMzYtMC42MTc4MiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPGNpcmNsZSBjeD0iMjA1LjI3IiBjeT0iNzkuNzQxIiByPSIxMy45MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4LjE2MzYiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICA8L2c+CiAgICA8ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgIDxlbGxpcHNlIGN4PSI3Ni4zNDYiIGN5PSI3NC4zNjciIHJ4PSI2LjEyMDgiIHJ5PSI3LjM2NjYiIGZpbGw9IiMwMDAiIHN0cm9rZS13aWR0aD0iOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8ZWxsaXBzZSBjeD0iMTMzLjUzIiBjeT0iNzQuNjYyIiByeD0iNi4xMjA4IiByeT0iNy4zNjY2IiBmaWxsPSIjMDAwIiBzdHJva2Utd2lkdGg9IjgiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgPHBhdGggZD0ibTk4LjA2IDExNS40NnM0LjI2MTQgMy41OTc1IDcuODAyOSAzLjYzNGMzLjU0MTYgMC4wMzY2IDYuNzYzMy0zLjY5MzIgNi43NjMzLTMuNjkzMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2LjQ5MjciLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi42NjI2LDUuMTczOSkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiPgogICA8cGF0aCBkPSJtNTMuNDcgMTc0LjI2LTAuMTEwMjkgMjcuMTgzcy0yNy43MDItNy43MDk4LTMxLjExNiAzMy42NTNjMC4yMjQ3MiAxLjQ0ODcgMjkuMzkgMjguMzQgNS44ODI2IDM3LjQ4OC0xMC44LTAuNjI3My04LjI4OTktMTkuMTE0LTE0Ljc3MS0xOS4yMTEtNi40ODE0LTAuMDk2NS04LjA4NzMtMC4wOTkyLTkuNzc0IDUuODIxNnMtMi4yODk0IDEzLjgxLTcuNTMzNCAxMy43ODZjLTUuMjQ0LTAuMDI0MS05Ljg0MDktMTEuNDQ2LTkuODE1NC0xNS4yMjRzMS41NzYyLTEzLjQzNCAxMi4zNTgtMjAuMjg2YzAuNDk5MjEtNi42OTcxLTguODIzNC00OC42NTcgNTQuODgtNjMuMjExeiIvPgogICA8cGF0aCBkPSJtMjIuMjQzIDIzNS4xcy02LjM4NjUtMS4wODcxLTEwLjc3NS0xLjA4NzFjLTQuMzg4OCAwLTEyLjg3OCAzLjQ2MjEtMTIuODc4IDMuNDYyMSIvPgogICA8cGF0aCBkPSJtMS4wMzk1IDIxMy44MSAyMS42NzYgOS41MTIyIi8+CiAgIDxwYXRoIGQ9Im0xMy41OTEgMTk0LjE3IDE1LjQyNyAxNi40NTgiLz4KICAgPHBhdGggZD0ibTMxLjI5NyAxODEuNzEgOS42NDUyIDIwLjMiLz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMTQ0MywxMzkuNSkiPgogICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS4xMjA2IC4xNzM1OSkiIGZpbGw9IiNmZmYiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTMzLjM1KSIgc3Ryb2tlPSIjMDAwIj4KICAgICA8ZyBmaWxsPSIjZmZmIj4KICAgICAgPHBhdGggZD0ibTUzLjkwNiAxNjQuNC0wLjkyMDM2IDc5LjAzN3MxMC42MzMgMzkuNjkgNTIuOTU0IDM5LjQyYzQyLjMyMi0wLjI2OTkgNTQuNzE5LTM4LjAwNSA1NC43MTktMzguMDA1bC0wLjQxMzk5LTgwLjJ6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCIvPgogICAgICA8cGF0aCBkPSJtNTIuOTg2IDI0My40NCAxMDcuNjcgMS40MTU0djAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgIDxwYXRoIGQ9Im02My4wNSAyNjAuNjggODcuMTI4LTAuNDYzMDYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iNiIvPgogICAgIDwvZz4KICAgICA8ZyBmaWxsPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy4xNzgzIj4KICAgICAgPGNpcmNsZSBjeD0iODMuMDI5IiBjeT0iMTg4LjAyIiByPSI0LjQxMDkiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEwNi4yOSIgY3k9IjE4OC4wMiIgcj0iNC40MTA5IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzAuNzEiIGN5PSIxODguMDIiIHI9IjQuNDEwOSIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8L2c+CiAgICA8L2c+CiAgIDwvZz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEwMy44NiwxOTAuNTMpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ij4KICAgPHBhdGggZD0ibTUzLjQ3IDE3NC4yNi0wLjExMDI5IDI3LjE4M3MtMjcuNzAyLTcuNzA5OC0zMS4xMTYgMzMuNjUzYzAuMjI0NzIgMS40NDg3IDI5LjM5IDI4LjM0IDUuODgyNiAzNy40ODgtMTAuOC0wLjYyNzMtOC4yODk5LTE5LjExNC0xNC43NzEtMTkuMjExLTYuNDgxNC0wLjA5NjUtOC4wODczLTAuMDk5Mi05Ljc3NCA1LjgyMTZzLTIuMjg5NCAxMy44MS03LjUzMzQgMTMuNzg2Yy01LjI0NC0wLjAyNDEtOS44NDA5LTExLjQ0Ni05LjgxNTQtMTUuMjI0czEuNTc2Mi0xMy40MzQgMTIuMzU4LTIwLjI4NmMwLjQ5OTIxLTYuNjk3MS04LjgyMzQtNDguNjU3IDU0Ljg4LTYzLjIxMXoiLz4KICAgPHBhdGggZD0ibTIyLjI0MyAyMzUuMXMtNi4zODY1LTEuMDg3MS0xMC43NzUtMS4wODcxYy00LjM4ODggMC0xMi44NzggMy40NjIxLTEyLjg3OCAzLjQ2MjEiLz4KICAgPHBhdGggZD0ibTEuMDM5NSAyMTMuODEgMjEuNjc2IDkuNTEyMiIvPgogICA8cGF0aCBkPSJtMTMuNTkxIDE5NC4xNyAxNS40MjcgMTYuNDU4Ii8+CiAgIDxwYXRoIGQ9Im0zMS4yOTcgMTgxLjcxIDkuNjQ1MiAyMC4zIi8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiIGFyaWEtbGFiZWw9IkxvYWRpbmcuLi4iPgogIDxwYXRoIGQ9Im0yOS44MTQgMzMyLjk5aC0yNi43NzJ2LTUwLjM3N2g5LjA2Nzh2NDIuMDI5aDE3LjcwNHoiLz4KICA8cGF0aCBkPSJtMzAuMjc3IDMxNXEwLTkuNTcxNiAzLjc0MjMtMTQuMjQ5IDMuNzQyMy00LjY3NzkgMTAuNDM1LTQuNjc3OSA3LjE5NjcgMCAxMC43MjMgNC43NDk4IDMuNTI2NCA0Ljc0OTggMy41MjY0IDE0LjE3OCAwIDkuNjQzNi0zLjc0MjMgMTQuMzIxLTMuNzQyMyA0LjYwNTktMTAuNTA3IDQuNjA1OS0xNC4xNzcgMC0xNC4xNzctMTguOTI3em04Ljg1MTkgMHEwIDUuMzk3NSAxLjIyMzQgOC4zNDgyIDEuMjIzNCAyLjk1MDYgNC4xMDIxIDIuOTUwNiAyLjczNDcgMCA0LjAzMDItMi41MTg4IDEuMzY3NC0yLjU5MDggMS4zNjc0LTguNzggMC01LjU0MTUtMS4yMjM0LTguNDIwMXQtNC4xNzQxLTIuODc4N3EtMi41MTg4IDAtMy45NTgyIDIuNTkwOC0xLjM2NzQgMi41MTg4LTEuMzY3NCA4LjcwOHoiLz4KICA8cGF0aCBkPSJtNjMuNjkyIDI5OS4xNnEyLjE1OS0xLjI5NTQgNS4zOTc1LTIuMDg3IDMuMjM4NS0wLjc5MTY0IDcuMzQwNi0wLjc5MTY0IDYuMTE3MiAwIDguNDkyMSAzLjE2NjYgMi40NDY5IDMuMTY2NiAyLjQ0NjkgOC45OTU5IDAgMy4zODI0LTAuMjE1OSA2LjY5MjktMC4xNDM5MyAzLjIzODUtMC4yMTU5IDYuNDA1MS0wLjA3MTk3IDMuMDk0NiAwLjA3MTk3IDYuMDQ1MiAwLjIxNTkgMi44Nzg3IDEuMDA3NSA1LjQ2OTVoLTYuOTgwOGwtMS4zNjc0LTQuMzloLTAuMjg3ODdxLTEuMTUxNSAyLjA4Ny0zLjIzODUgMy40NTQ0dC01LjI1MzYgMS4zNjc0cS00LjI0NjEgMC02LjY5MjktMi44MDY3LTIuNDQ2OS0yLjg3ODctMi40NDY5LTcuNjI4NSAwLTYuNDc3IDQuNjA1OS05LjIxMTggNC42MDU5LTIuNzM0OCAxMi40NS0yLjMwMjkgMC4zNTk4NC00LjE3NDEtMC41NzU3NC02LjA0NTItMC44NjM2LTEuODcxMS0zLjgxNDMtMS44NzExLTIuMTU5IDAtNC40NjIgMC41MDM3Ni0yLjMwMjkgMC41MDM3Ny00LjEwMjEgMS40Mzkzem0xMC4yOTEgMjYuOTg4cTEuOTQzMSAwIDMuMTY2NS0wLjkzNTU3IDEuMjIzNC0xLjAwNzUgMS43OTkyLTIuMTU5di01Ljk3MzNxLTEuNjU1Mi0wLjIxNTkxLTMuMTY2NS0wLjA3Mi0xLjUxMTMgMC4xNDM5My0yLjY2MjggMC42NDc3dC0xLjg3MTEgMS41MTEzcS0wLjY0NzcgMC45MzU1Ny0wLjY0NzcgMi40NDY5IDAgMi4yMzEgMC44NjM2IDMuMzgyNCAwLjkzNTU3IDEuMTUxNSAyLjUxODggMS4xNTE1eiIvPgogIDxwYXRoIGQ9Im0xMTkuMTEgMzIwLjMycTAgMy4wMjI2IDAuMDcyIDYuMDQ1MiAwLjA3MiAzLjAyMjYgMC41NzU3NCA2LjY5MjloLTYuMDQ1MmwtMS4xNTE1LTQuMTc0MWgtMC4yODc4NnEtMi40NDY5IDUuMDM3Ny04LjU2NDEgNS4wMzc3LTUuNDY5NSAwLTguNjM2LTQuMzE4LTMuMDk0Ni00LjMxOC0zLjA5NDYtMTQuMDM0IDAtOS40OTk2IDMuMzgyNC0xNC4zOTMgMy4zODI0LTQuOTY1NyAxMC4wNzUtNC45NjU3IDEuNzI3MiAwIDIuODc4NyAwLjIxNTkxIDEuMTUxNSAwLjIxNTkgMi4yMzEgMC43MTk2N3YtMTQuNTM3aDguNTY0MXptLTEzLjM4NiA1Ljc1NzRxMS45NDMxIDAgMy4wOTQ2LTAuOTM1NTcgMS4xNTE1LTEuMDA3NSAxLjcyNzItMi44Nzg3di0xNi45ODRxLTAuNzE5NjctMC42NDc3MS0xLjY1NTItMC45MzU1Ny0wLjg2MzYxLTAuMjg3ODctMi4zMDMtMC4yODc4Ny0yLjg3ODcgMC00LjMxOCAyLjU5MDh0LTEuNDM5MyA5LjIxMThxMCA0Ljk2NTcgMS4xNTE1IDcuNjI4NSAxLjIyMzQgMi41OTA4IDMuNzQyMyAyLjU5MDh6Ii8+CiAgPHBhdGggZD0ibTEyNi4wNSAyOTdoOC41NjQxdjM1Ljk4NGgtOC41NjQxem0tMS4wMDc1LTEwLjE0N3EwLTIuMTU5IDEuMzY3NC0zLjUyNjQgMS4zNjc0LTEuNDM5MyAzLjg4NjItMS40MzkzIDIuNTE4OCAwIDQuMDMwMiAxLjM2NzQgMS41MTEzIDEuMzY3NCAxLjUxMTMgMy41OTg0IDAgMi4yMzEtMS41MTEzIDMuNTI2NC0xLjUxMTMgMS4yOTU0LTQuMDMwMiAxLjI5NTQtMi41MTg4IDAtMy44ODYyLTEuMjk1NC0xLjM2NzQtMS4zNjc0LTEuMzY3NC0zLjUyNjR6Ii8+CiAgPHBhdGggZD0ibTE1OS4zNCAzMzIuOTl2LTIxLjg3OHEwLTMuOTU4Mi0wLjkzNTU4LTUuNTQxNS0wLjkzNTU3LTEuNTgzMy0zLjE2NjUtMS41ODMzLTEuODcxMiAwLTMuMjM4NSAxLjE1MTV0LTEuOTQzMSAyLjg3ODd2MjQuOTczaC04LjU2NDF2LTM1Ljk4NGg2LjgzNjlsMS4wMDc1IDQuMTc0MWgwLjIxNTlxMS4yOTU0LTIuMDg3IDMuNTI2NC0zLjUyNjQgMi4yMzEtMS41MTEzIDUuODI5My0xLjUxMTMgMi4xNTkgMCAzLjgxNDIgMC42NDc3IDEuNzI3MiAwLjY0NzcgMi44Nzg3IDIuMTU5IDEuMTUxNSAxLjQzOTMgMS43MjcyIDMuOTU4MiAwLjU3NTc0IDIuNDQ2OSAwLjU3NTc0IDYuMTE3MnYyMy45NjV6Ii8+CiAgPHBhdGggZD0ibTE5OS41OCAzMzIuOTlxMCA3Ljg0NDQtMy41OTg0IDExLjUxNS0zLjU5ODQgMy43NDIzLTEwLjAwMyAzLjc0MjMtNC40NjIgMC02Ljk4MDgtMC43MTk2Ny0yLjUxODgtMC42NDc3MS0zLjg4NjItMS40MzkzbDEuNzk5Mi03LjI2ODdxMS41ODMzIDAuNjQ3NyAzLjM4MjQgMS4yMjM0IDEuODcxMSAwLjU3NTc0IDQuMzkgMC41NzU3NCAzLjY3MDMgMCA1LjAzNzctMi4wMTUxIDEuNDM5My0xLjk0MzEgMS40MzkzLTUuOTczM3YtMS45NDMxaC0wLjIxNTlxLTEuMDA3NSAxLjQzOTMtMi43MzQ3IDIuMTU5LTEuNjU1MiAwLjcxOTY3LTQuMzE4IDAuNzE5NjctNS42ODU0IDAtOC41NjQxLTQuMjQ2LTIuODA2Ny00LjMxOC0yLjgwNjctMTMuNjAyIDAtMTAuMDAzIDMuODg2Mi0xNC43NTMgMy45NTgyLTQuNzQ5OCAxMS4yMjctNC43NDk4IDMuODg2MiAwIDYuOTgwOCAwLjY0NzcxIDMuMDk0NiAwLjU3NTczIDQuOTY1NyAxLjQzOTN6bS0xMy4zMTQtNi43NjQ5cTEuOTQzMSAwIDMuMDIyNi0wLjkzNTU3IDEuMTUxNS0wLjkzNTU3IDEuNzI3Mi0yLjY2Mjh2LTE3Ljk5MnEtMC43OTE2NC0wLjM1OTgzLTEuNzk5Mi0wLjU3NTczLTAuOTM1NTgtMC4yMTU5LTIuMjMxLTAuMjE1OS0yLjY2MjggMC00LjE3NDEgMi41OTA4LTEuNDM5MyAyLjU5MDgtMS40MzkzIDguOTIzOSAwIDEwLjg2NyA0Ljg5MzggMTAuODY3eiIvPgogIDxwYXRoIGQ9Im0yMDUuMDggMzI4LjMxcTAtMi42NjI4IDEuMzY3NC00LjAzMDIgMS40MzkzLTEuMzY3NCAzLjc0MjMtMS4zNjc0IDIuNTE4OCAwIDMuODg2MiAxLjM2NzQgMS4zNjc0IDEuMzY3NCAxLjM2NzQgNC4wMzAyIDAgMi41OTA4LTEuNDM5MyA0LjAzMDItMS4zNjc0IDEuNDM5My0zLjgxNDIgMS40MzkzLTIuMzc0OSAwLTMuNzQyMy0xLjQzOTN0LTEuMzY3NC00LjAzMDJ6Ii8+CiAgPHBhdGggZD0ibTIyMS4zOCAzMjguMzFxMC0yLjY2MjggMS4zNjc0LTQuMDMwMiAxLjQzOTMtMS4zNjc0IDMuNzQyMy0xLjM2NzQgMi41MTg4IDAgMy44ODYyIDEuMzY3NCAxLjM2NzQgMS4zNjc0IDEuMzY3NCA0LjAzMDIgMCAyLjU5MDgtMS40MzkzIDQuMDMwMi0xLjM2NzQgMS40MzkzLTMuODE0MiAxLjQzOTMtMi4zNzQ5IDAtMy43NDIzLTEuNDM5M3QtMS4zNjc0LTQuMDMwMnoiLz4KICA8cGF0aCBkPSJtMjM3LjY5IDMyOC4zMXEwLTIuNjYyOCAxLjM2NzQtNC4wMzAyIDEuNDM5My0xLjM2NzQgMy43NDIzLTEuMzY3NCAyLjUxODggMCAzLjg4NjIgMS4zNjc0IDEuMzY3NCAxLjM2NzQgMS4zNjc0IDQuMDMwMiAwIDIuNTkwOC0xLjQzOTMgNC4wMzAyLTEuMzY3NCAxLjQzOTMtMy44MTQyIDEuNDM5My0yLjM3NDkgMC0zLjc0MjMtMS40MzkzLTEuMzY3NC0xLjQzOTMtMS4zNjc0LTQuMDMwMnoiLz4KIDwvZz4KPC9zdmc+Cg==);cursor:progress}</style></head><body></body></html>";
															}
															function standard_applet(api_reference){
																api_reference = api_reference || false;
																if (api_reference !== false){
																	api_reference = JSON.stringify(api_reference) || "";
																} else {
																	api_reference = "{}";
																}
																return"<html><head><style type=\"text/css\">@import url(https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap);*{font-family:'Lexend Deca',arial,sans-serif}body{padding:2em 1em;overflow-y:hidden;}body.loading-applet-error,body.loading-applet-unsupported,body.preloading-applet{min-height:170px;background-color:#e3e3e3;background-repeat:no-repeat;background-position:center;background-size:140px;padding:1em}body.preloading-applet{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ5LjkybW0iIGhlaWdodD0iMzQ4LjI0bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0OS45MiAzNDguMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNDMxLC0yMS43MTkpIiBmaWxsPSIjZmZmIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi40NzM1LDcuOTE4NSkiPgogICA8ZyBzdHJva2U9IiMwMDAiPgogICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoLjk4NDg4IC0uMTczMjUgLjE2MTMzIC45ODY5IDAgMCkiIGN4PSI5MS44NDUiIGN5PSI5OS45NyIgcng9IjYyLjM4OSIgcnk9IjY1LjE4OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjcuMzkxOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8Y2lyY2xlIGN4PSI1Ljg2OTciIGN5PSI3OS4xMTkiIHI9IjEzLjkxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjguMTYzNiIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8cGF0aCBkPSJtMjAuMzA2IDgwLjM2OCAyNC4zMzYtMC42MTc4MyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPHBhdGggZD0ibTE2OS40NyA4MC42NyAyNC4zMzYtMC42MTc4MiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPGNpcmNsZSBjeD0iMjA1LjI3IiBjeT0iNzkuNzQxIiByPSIxMy45MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4LjE2MzYiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICA8L2c+CiAgICA8ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgIDxlbGxpcHNlIGN4PSI3Ni4zNDYiIGN5PSI3NC4zNjciIHJ4PSI2LjEyMDgiIHJ5PSI3LjM2NjYiIGZpbGw9IiMwMDAiIHN0cm9rZS13aWR0aD0iOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8ZWxsaXBzZSBjeD0iMTMzLjUzIiBjeT0iNzQuNjYyIiByeD0iNi4xMjA4IiByeT0iNy4zNjY2IiBmaWxsPSIjMDAwIiBzdHJva2Utd2lkdGg9IjgiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgPHBhdGggZD0ibTk4LjA2IDExNS40NnM0LjI2MTQgMy41OTc1IDcuODAyOSAzLjYzNGMzLjU0MTYgMC4wMzY2IDYuNzYzMy0zLjY5MzIgNi43NjMzLTMuNjkzMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2LjQ5MjciLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi42NjI2LDUuMTczOSkiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiPgogICA8cGF0aCBkPSJtNTMuNDcgMTc0LjI2LTAuMTEwMjkgMjcuMTgzcy0yNy43MDItNy43MDk4LTMxLjExNiAzMy42NTNjMC4yMjQ3MiAxLjQ0ODcgMjkuMzkgMjguMzQgNS44ODI2IDM3LjQ4OC0xMC44LTAuNjI3My04LjI4OTktMTkuMTE0LTE0Ljc3MS0xOS4yMTEtNi40ODE0LTAuMDk2NS04LjA4NzMtMC4wOTkyLTkuNzc0IDUuODIxNnMtMi4yODk0IDEzLjgxLTcuNTMzNCAxMy43ODZjLTUuMjQ0LTAuMDI0MS05Ljg0MDktMTEuNDQ2LTkuODE1NC0xNS4yMjRzMS41NzYyLTEzLjQzNCAxMi4zNTgtMjAuMjg2YzAuNDk5MjEtNi42OTcxLTguODIzNC00OC42NTcgNTQuODgtNjMuMjExeiIvPgogICA8cGF0aCBkPSJtMjIuMjQzIDIzNS4xcy02LjM4NjUtMS4wODcxLTEwLjc3NS0xLjA4NzFjLTQuMzg4OCAwLTEyLjg3OCAzLjQ2MjEtMTIuODc4IDMuNDYyMSIvPgogICA8cGF0aCBkPSJtMS4wMzk1IDIxMy44MSAyMS42NzYgOS41MTIyIi8+CiAgIDxwYXRoIGQ9Im0xMy41OTEgMTk0LjE3IDE1LjQyNyAxNi40NTgiLz4KICAgPHBhdGggZD0ibTMxLjI5NyAxODEuNzEgOS42NDUyIDIwLjMiLz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMTQ0MywxMzkuNSkiPgogICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNS4xMjA2IC4xNzM1OSkiIGZpbGw9IiNmZmYiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMTMzLjM1KSIgc3Ryb2tlPSIjMDAwIj4KICAgICA8ZyBmaWxsPSIjZmZmIj4KICAgICAgPHBhdGggZD0ibTUzLjkwNiAxNjQuNC0wLjkyMDM2IDc5LjAzN3MxMC42MzMgMzkuNjkgNTIuOTU0IDM5LjQyYzQyLjMyMi0wLjI2OTkgNTQuNzE5LTM4LjAwNSA1NC43MTktMzguMDA1bC0wLjQxMzk5LTgwLjJ6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCIvPgogICAgICA8cGF0aCBkPSJtNTIuOTg2IDI0My40NCAxMDcuNjcgMS40MTU0djAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgIDxwYXRoIGQ9Im02My4wNSAyNjAuNjggODcuMTI4LTAuNDYzMDYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iNiIvPgogICAgIDwvZz4KICAgICA8ZyBmaWxsPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMy4xNzgzIj4KICAgICAgPGNpcmNsZSBjeD0iODMuMDI5IiBjeT0iMTg4LjAyIiByPSI0LjQxMDkiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEwNi4yOSIgY3k9IjE4OC4wMiIgcj0iNC40MTA5IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMzAuNzEiIGN5PSIxODguMDIiIHI9IjQuNDEwOSIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8L2c+CiAgICA8L2c+CiAgIDwvZz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDEwMy44NiwxOTAuNTMpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ij4KICAgPHBhdGggZD0ibTUzLjQ3IDE3NC4yNi0wLjExMDI5IDI3LjE4M3MtMjcuNzAyLTcuNzA5OC0zMS4xMTYgMzMuNjUzYzAuMjI0NzIgMS40NDg3IDI5LjM5IDI4LjM0IDUuODgyNiAzNy40ODgtMTAuOC0wLjYyNzMtOC4yODk5LTE5LjExNC0xNC43NzEtMTkuMjExLTYuNDgxNC0wLjA5NjUtOC4wODczLTAuMDk5Mi05Ljc3NCA1LjgyMTZzLTIuMjg5NCAxMy44MS03LjUzMzQgMTMuNzg2Yy01LjI0NC0wLjAyNDEtOS44NDA5LTExLjQ0Ni05LjgxNTQtMTUuMjI0czEuNTc2Mi0xMy40MzQgMTIuMzU4LTIwLjI4NmMwLjQ5OTIxLTYuNjk3MS04LjgyMzQtNDguNjU3IDU0Ljg4LTYzLjIxMXoiLz4KICAgPHBhdGggZD0ibTIyLjI0MyAyMzUuMXMtNi4zODY1LTEuMDg3MS0xMC43NzUtMS4wODcxYy00LjM4ODggMC0xMi44NzggMy40NjIxLTEyLjg3OCAzLjQ2MjEiLz4KICAgPHBhdGggZD0ibTEuMDM5NSAyMTMuODEgMjEuNjc2IDkuNTEyMiIvPgogICA8cGF0aCBkPSJtMTMuNTkxIDE5NC4xNyAxNS40MjcgMTYuNDU4Ii8+CiAgIDxwYXRoIGQ9Im0zMS4yOTcgMTgxLjcxIDkuNjQ1MiAyMC4zIi8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIuMjY0NTgiIGFyaWEtbGFiZWw9IkxvYWRpbmcuLi4iPgogIDxwYXRoIGQ9Im0yOS44MTQgMzMyLjk5aC0yNi43NzJ2LTUwLjM3N2g5LjA2Nzh2NDIuMDI5aDE3LjcwNHoiLz4KICA8cGF0aCBkPSJtMzAuMjc3IDMxNXEwLTkuNTcxNiAzLjc0MjMtMTQuMjQ5IDMuNzQyMy00LjY3NzkgMTAuNDM1LTQuNjc3OSA3LjE5NjcgMCAxMC43MjMgNC43NDk4IDMuNTI2NCA0Ljc0OTggMy41MjY0IDE0LjE3OCAwIDkuNjQzNi0zLjc0MjMgMTQuMzIxLTMuNzQyMyA0LjYwNTktMTAuNTA3IDQuNjA1OS0xNC4xNzcgMC0xNC4xNzctMTguOTI3em04Ljg1MTkgMHEwIDUuMzk3NSAxLjIyMzQgOC4zNDgyIDEuMjIzNCAyLjk1MDYgNC4xMDIxIDIuOTUwNiAyLjczNDcgMCA0LjAzMDItMi41MTg4IDEuMzY3NC0yLjU5MDggMS4zNjc0LTguNzggMC01LjU0MTUtMS4yMjM0LTguNDIwMXQtNC4xNzQxLTIuODc4N3EtMi41MTg4IDAtMy45NTgyIDIuNTkwOC0xLjM2NzQgMi41MTg4LTEuMzY3NCA4LjcwOHoiLz4KICA8cGF0aCBkPSJtNjMuNjkyIDI5OS4xNnEyLjE1OS0xLjI5NTQgNS4zOTc1LTIuMDg3IDMuMjM4NS0wLjc5MTY0IDcuMzQwNi0wLjc5MTY0IDYuMTE3MiAwIDguNDkyMSAzLjE2NjYgMi40NDY5IDMuMTY2NiAyLjQ0NjkgOC45OTU5IDAgMy4zODI0LTAuMjE1OSA2LjY5MjktMC4xNDM5MyAzLjIzODUtMC4yMTU5IDYuNDA1MS0wLjA3MTk3IDMuMDk0NiAwLjA3MTk3IDYuMDQ1MiAwLjIxNTkgMi44Nzg3IDEuMDA3NSA1LjQ2OTVoLTYuOTgwOGwtMS4zNjc0LTQuMzloLTAuMjg3ODdxLTEuMTUxNSAyLjA4Ny0zLjIzODUgMy40NTQ0dC01LjI1MzYgMS4zNjc0cS00LjI0NjEgMC02LjY5MjktMi44MDY3LTIuNDQ2OS0yLjg3ODctMi40NDY5LTcuNjI4NSAwLTYuNDc3IDQuNjA1OS05LjIxMTggNC42MDU5LTIuNzM0OCAxMi40NS0yLjMwMjkgMC4zNTk4NC00LjE3NDEtMC41NzU3NC02LjA0NTItMC44NjM2LTEuODcxMS0zLjgxNDMtMS44NzExLTIuMTU5IDAtNC40NjIgMC41MDM3Ni0yLjMwMjkgMC41MDM3Ny00LjEwMjEgMS40Mzkzem0xMC4yOTEgMjYuOTg4cTEuOTQzMSAwIDMuMTY2NS0wLjkzNTU3IDEuMjIzNC0xLjAwNzUgMS43OTkyLTIuMTU5di01Ljk3MzNxLTEuNjU1Mi0wLjIxNTkxLTMuMTY2NS0wLjA3Mi0xLjUxMTMgMC4xNDM5My0yLjY2MjggMC42NDc3dC0xLjg3MTEgMS41MTEzcS0wLjY0NzcgMC45MzU1Ny0wLjY0NzcgMi40NDY5IDAgMi4yMzEgMC44NjM2IDMuMzgyNCAwLjkzNTU3IDEuMTUxNSAyLjUxODggMS4xNTE1eiIvPgogIDxwYXRoIGQ9Im0xMTkuMTEgMzIwLjMycTAgMy4wMjI2IDAuMDcyIDYuMDQ1MiAwLjA3MiAzLjAyMjYgMC41NzU3NCA2LjY5MjloLTYuMDQ1MmwtMS4xNTE1LTQuMTc0MWgtMC4yODc4NnEtMi40NDY5IDUuMDM3Ny04LjU2NDEgNS4wMzc3LTUuNDY5NSAwLTguNjM2LTQuMzE4LTMuMDk0Ni00LjMxOC0zLjA5NDYtMTQuMDM0IDAtOS40OTk2IDMuMzgyNC0xNC4zOTMgMy4zODI0LTQuOTY1NyAxMC4wNzUtNC45NjU3IDEuNzI3MiAwIDIuODc4NyAwLjIxNTkxIDEuMTUxNSAwLjIxNTkgMi4yMzEgMC43MTk2N3YtMTQuNTM3aDguNTY0MXptLTEzLjM4NiA1Ljc1NzRxMS45NDMxIDAgMy4wOTQ2LTAuOTM1NTcgMS4xNTE1LTEuMDA3NSAxLjcyNzItMi44Nzg3di0xNi45ODRxLTAuNzE5NjctMC42NDc3MS0xLjY1NTItMC45MzU1Ny0wLjg2MzYxLTAuMjg3ODctMi4zMDMtMC4yODc4Ny0yLjg3ODcgMC00LjMxOCAyLjU5MDh0LTEuNDM5MyA5LjIxMThxMCA0Ljk2NTcgMS4xNTE1IDcuNjI4NSAxLjIyMzQgMi41OTA4IDMuNzQyMyAyLjU5MDh6Ii8+CiAgPHBhdGggZD0ibTEyNi4wNSAyOTdoOC41NjQxdjM1Ljk4NGgtOC41NjQxem0tMS4wMDc1LTEwLjE0N3EwLTIuMTU5IDEuMzY3NC0zLjUyNjQgMS4zNjc0LTEuNDM5MyAzLjg4NjItMS40MzkzIDIuNTE4OCAwIDQuMDMwMiAxLjM2NzQgMS41MTEzIDEuMzY3NCAxLjUxMTMgMy41OTg0IDAgMi4yMzEtMS41MTEzIDMuNTI2NC0xLjUxMTMgMS4yOTU0LTQuMDMwMiAxLjI5NTQtMi41MTg4IDAtMy44ODYyLTEuMjk1NC0xLjM2NzQtMS4zNjc0LTEuMzY3NC0zLjUyNjR6Ii8+CiAgPHBhdGggZD0ibTE1OS4zNCAzMzIuOTl2LTIxLjg3OHEwLTMuOTU4Mi0wLjkzNTU4LTUuNTQxNS0wLjkzNTU3LTEuNTgzMy0zLjE2NjUtMS41ODMzLTEuODcxMiAwLTMuMjM4NSAxLjE1MTV0LTEuOTQzMSAyLjg3ODd2MjQuOTczaC04LjU2NDF2LTM1Ljk4NGg2LjgzNjlsMS4wMDc1IDQuMTc0MWgwLjIxNTlxMS4yOTU0LTIuMDg3IDMuNTI2NC0zLjUyNjQgMi4yMzEtMS41MTEzIDUuODI5My0xLjUxMTMgMi4xNTkgMCAzLjgxNDIgMC42NDc3IDEuNzI3MiAwLjY0NzcgMi44Nzg3IDIuMTU5IDEuMTUxNSAxLjQzOTMgMS43MjcyIDMuOTU4MiAwLjU3NTc0IDIuNDQ2OSAwLjU3NTc0IDYuMTE3MnYyMy45NjV6Ii8+CiAgPHBhdGggZD0ibTE5OS41OCAzMzIuOTlxMCA3Ljg0NDQtMy41OTg0IDExLjUxNS0zLjU5ODQgMy43NDIzLTEwLjAwMyAzLjc0MjMtNC40NjIgMC02Ljk4MDgtMC43MTk2Ny0yLjUxODgtMC42NDc3MS0zLjg4NjItMS40MzkzbDEuNzk5Mi03LjI2ODdxMS41ODMzIDAuNjQ3NyAzLjM4MjQgMS4yMjM0IDEuODcxMSAwLjU3NTc0IDQuMzkgMC41NzU3NCAzLjY3MDMgMCA1LjAzNzctMi4wMTUxIDEuNDM5My0xLjk0MzEgMS40MzkzLTUuOTczM3YtMS45NDMxaC0wLjIxNTlxLTEuMDA3NSAxLjQzOTMtMi43MzQ3IDIuMTU5LTEuNjU1MiAwLjcxOTY3LTQuMzE4IDAuNzE5NjctNS42ODU0IDAtOC41NjQxLTQuMjQ2LTIuODA2Ny00LjMxOC0yLjgwNjctMTMuNjAyIDAtMTAuMDAzIDMuODg2Mi0xNC43NTMgMy45NTgyLTQuNzQ5OCAxMS4yMjctNC43NDk4IDMuODg2MiAwIDYuOTgwOCAwLjY0NzcxIDMuMDk0NiAwLjU3NTczIDQuOTY1NyAxLjQzOTN6bS0xMy4zMTQtNi43NjQ5cTEuOTQzMSAwIDMuMDIyNi0wLjkzNTU3IDEuMTUxNS0wLjkzNTU3IDEuNzI3Mi0yLjY2Mjh2LTE3Ljk5MnEtMC43OTE2NC0wLjM1OTgzLTEuNzk5Mi0wLjU3NTczLTAuOTM1NTgtMC4yMTU5LTIuMjMxLTAuMjE1OS0yLjY2MjggMC00LjE3NDEgMi41OTA4LTEuNDM5MyAyLjU5MDgtMS40MzkzIDguOTIzOSAwIDEwLjg2NyA0Ljg5MzggMTAuODY3eiIvPgogIDxwYXRoIGQ9Im0yMDUuMDggMzI4LjMxcTAtMi42NjI4IDEuMzY3NC00LjAzMDIgMS40MzkzLTEuMzY3NCAzLjc0MjMtMS4zNjc0IDIuNTE4OCAwIDMuODg2MiAxLjM2NzQgMS4zNjc0IDEuMzY3NCAxLjM2NzQgNC4wMzAyIDAgMi41OTA4LTEuNDM5MyA0LjAzMDItMS4zNjc0IDEuNDM5My0zLjgxNDIgMS40MzkzLTIuMzc0OSAwLTMuNzQyMy0xLjQzOTN0LTEuMzY3NC00LjAzMDJ6Ii8+CiAgPHBhdGggZD0ibTIyMS4zOCAzMjguMzFxMC0yLjY2MjggMS4zNjc0LTQuMDMwMiAxLjQzOTMtMS4zNjc0IDMuNzQyMy0xLjM2NzQgMi41MTg4IDAgMy44ODYyIDEuMzY3NCAxLjM2NzQgMS4zNjc0IDEuMzY3NCA0LjAzMDIgMCAyLjU5MDgtMS40MzkzIDQuMDMwMi0xLjM2NzQgMS40MzkzLTMuODE0MiAxLjQzOTMtMi4zNzQ5IDAtMy43NDIzLTEuNDM5M3QtMS4zNjc0LTQuMDMwMnoiLz4KICA8cGF0aCBkPSJtMjM3LjY5IDMyOC4zMXEwLTIuNjYyOCAxLjM2NzQtNC4wMzAyIDEuNDM5My0xLjM2NzQgMy43NDIzLTEuMzY3NCAyLjUxODggMCAzLjg4NjIgMS4zNjc0IDEuMzY3NCAxLjM2NzQgMS4zNjc0IDQuMDMwMiAwIDIuNTkwOC0xLjQzOTMgNC4wMzAyLTEuMzY3NCAxLjQzOTMtMy44MTQyIDEuNDM5My0yLjM3NDkgMC0zLjc0MjMtMS40MzkzLTEuMzY3NC0xLjQzOTMtMS4zNjc0LTQuMDMwMnoiLz4KIDwvZz4KPC9zdmc+Cg==);cursor:progress}body.loading-applet-error{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY2LjY2bW0iIGhlaWdodD0iMzI3LjU0bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2Ni42NiAzMjcuNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuOTQyLC0yOC4xMDIpIiBmaWxsPSIjZmZmIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuODExLDI2LjY1NCkiPgogICA8ZyBzdHJva2U9IiMwMDAiPgogICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoLjk4NDg4IC0uMTczMjUgLjE2MTMzIC45ODY5IDAgMCkiIGN4PSI5MS44NDUiIGN5PSI5OS45NyIgcng9IjYyLjM4OSIgcnk9IjY1LjE4OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjcuMzkxOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8Y2lyY2xlIGN4PSI1Ljg2OTciIGN5PSI3OS4xMTkiIHI9IjEzLjkxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjguMTYzNiIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8cGF0aCBkPSJtMjAuMzA2IDgwLjM2OCAyNC4zMzYtMC42MTc4MyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPHBhdGggZD0ibTE2OS40NyA4MC42NyAyNC4zMzYtMC42MTc4MiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPGNpcmNsZSBjeD0iMjA1LjI3IiBjeT0iNzkuNzQxIiByPSIxMy45MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4LjE2MzYiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICA8L2c+CiAgICA8ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgIDxlbGxpcHNlIGN4PSI3Ni4zNDYiIGN5PSI3NC4zNjciIHJ4PSI2LjEyMDgiIHJ5PSI3LjM2NjYiIGZpbGw9IiMwMDAiIHN0cm9rZS13aWR0aD0iOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8ZWxsaXBzZSBjeD0iMTMzLjUzIiBjeT0iNzQuNjYyIiByeD0iNi4xMjA4IiByeT0iNy4zNjY2IiBmaWxsPSIjMDAwIiBzdHJva2Utd2lkdGg9IjgiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgPHBhdGggZD0ibTk4LjA2IDExOS4wNHM0LjI2MTQtMy41OTc1IDcuODAyOS0zLjYzNGMzLjU0MTYtMC4wMzY2IDYuNzYzMyAzLjY5MzIgNi43NjMzIDMuNjkzMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2LjQ5MjciLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtLjY0Mjc5IC0uNzY2MDQgLS43NjYwNCAuNjQyNzkgMjI0LjQgMTAzLjY1KSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCI+CiAgIDxwYXRoIGQ9Im01My40NyAxNzQuMjYtMC4xMTAyOSAyNy4xODNzLTI3LjcwMi03LjcwOTgtMzEuMTE2IDMzLjY1M2MwLjIyNDcyIDEuNDQ4NyAyOS4zOSAyOC4zNCA1Ljg4MjYgMzcuNDg4LTEwLjgtMC42MjczLTguMjg5OS0xOS4xMTQtMTQuNzcxLTE5LjIxMS02LjQ4MTQtMC4wOTY1LTguMDg3My0wLjA5OTItOS43NzQgNS44MjE2cy0yLjI4OTQgMTMuODEtNy41MzM0IDEzLjc4NmMtNS4yNDQtMC4wMjQxLTkuODQwOS0xMS40NDYtOS44MTU0LTE1LjIyNHMxLjU3NjItMTMuNDM0IDEyLjM1OC0yMC4yODZjMC40OTkyMS02LjY5NzEtOC44MjM0LTQ4LjY1NyA1NC44OC02My4yMTF6Ii8+CiAgIDxwYXRoIGQ9Im0yMi4yNDMgMjM1LjFzLTYuMzg2NS0xLjA4NzEtMTAuNzc1LTEuMDg3MWMtNC4zODg4IDAtMTIuODc4IDMuNDYyMS0xMi44NzggMy40NjIxIi8+CiAgIDxwYXRoIGQ9Im0xLjAzOTUgMjEzLjgxIDIxLjY3NiA5LjUxMjIiLz4KICAgPHBhdGggZD0ibTEzLjU5MSAxOTQuMTcgMTUuNDI3IDE2LjQ1OCIvPgogICA8cGF0aCBkPSJtMzEuMjk3IDE4MS43MSA5LjY0NTIgMjAuMyIvPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCw0Ny43ODMsMTc2LjAzKSI+CiAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjEyMDYgLjE3MzU5KSIgZmlsbD0iI2ZmZiI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMzMuMzUpIiBzdHJva2U9IiMwMDAiPgogICAgIDxnIGZpbGw9IiNmZmYiPgogICAgICA8cGF0aCBkPSJtNTMuOTA2IDE2NC40LTAuOTIwMzYgNzkuMDM3czEwLjYzMyAzOS42OSA1Mi45NTQgMzkuNDJjNDIuMzIyLTAuMjY5OSA1NC43MTktMzguMDA1IDU0LjcxOS0zOC4wMDVsLTAuNDEzOTktODAuMnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgIDxwYXRoIGQ9Im01Mi45ODYgMjQzLjQ0IDEwNy42NyAxLjQxNTR2MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz4KICAgICAgPHBhdGggZD0ibTYzLjA1IDI2MC42OCA4Ny4xMjgtMC40NjMwNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgICAgPC9nPgogICAgIDxnIGZpbGw9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjE3ODMiPgogICAgICA8Y2lyY2xlIGN4PSI4My4wMjkiIGN5PSIxODguMDIiIHI9IjQuNDEwOSIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICAgPGNpcmNsZSBjeD0iMTA2LjI5IiBjeT0iMTg4LjAyIiByPSI0LjQxMDkiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEzMC43MSIgY3k9IjE4OC4wMiIgcj0iNC40MTA5IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtOTYsMjYuNDQ5LDcyLjgxNykiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiPgogICA8cGF0aCBkPSJtNTMuNDcgMTc0LjI2LTAuMTEwMjkgMjcuMTgzcy0yNy43MDItNy43MDk4LTMxLjExNiAzMy42NTNjMC4yMjQ3MiAxLjQ0ODcgMjkuMzkgMjguMzQgNS44ODI2IDM3LjQ4OC0xMC44LTAuNjI3My04LjI4OTktMTkuMTE0LTE0Ljc3MS0xOS4yMTEtNi40ODE0LTAuMDk2NS04LjA4NzMtMC4wOTkyLTkuNzc0IDUuODIxNnMtMi4yODk0IDEzLjgxLTcuNTMzNCAxMy43ODZjLTUuMjQ0LTAuMDI0MS05Ljg0MDktMTEuNDQ2LTkuODE1NC0xNS4yMjRzMS41NzYyLTEzLjQzNCAxMi4zNTgtMjAuMjg2YzAuNDk5MjEtNi42OTcxLTguODIzNC00OC42NTcgNTQuODgtNjMuMjExeiIvPgogICA8cGF0aCBkPSJtMjIuMjQzIDIzNS4xcy02LjM4NjUtMS4wODcxLTEwLjc3NS0xLjA4NzFjLTQuMzg4OCAwLTEyLjg3OCAzLjQ2MjEtMTIuODc4IDMuNDYyMSIvPgogICA8cGF0aCBkPSJtMS4wMzk1IDIxMy44MSAyMS42NzYgOS41MTIyIi8+CiAgIDxwYXRoIGQ9Im0xMy41OTEgMTk0LjE3IDE1LjQyNyAxNi40NTgiLz4KICAgPHBhdGggZD0ibTMxLjI5NyAxODEuNzEgOS42NDUyIDIwLjMiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9Ii4yNjQ1OCI+CiAgPHBhdGggZD0ibTY3LjQ4NSAyNzYuMjNoMjUuMTg4djguMzQ4MmgtMTYuMTIxdjEyLjM3OGgxNC42MDl2OC4zNDgyaC0xNC42MDl2MTIuOTU0aDE2LjQwOHY4LjM0ODJoLTI1LjQ3NnoiLz4KICA8cGF0aCBkPSJtMTE1LjI1IDI5OS4xMXEtMS43MjcyLTAuNjQ3Ny0zLjE2NjYtMC42NDc3LTEuOTQzMSAwLTMuMzgyNCAxLjA3OTUtMS4zNjc0IDEuMDc5NS0xLjg3MTEgMy4wMjI2djI0LjAzN2gtOC41NjQxdi0zNS45ODRoNi41NDlsMS4wMDc1IDQuMzE4aDAuMjg3ODdxMC45MzU1Ny0yLjM3NDkgMi42NjI4LTMuNjcwMyAxLjc5OTItMS4zNjc0IDQuMTAyMS0xLjM2NzQgMS43MjcyIDAgMy4zODI0IDAuNzE5Njd6Ii8+CiAgPHBhdGggZD0ibTEzNi4zMyAyOTkuMTFxLTEuNzI3Mi0wLjY0NzctMy4xNjY2LTAuNjQ3Ny0xLjk0MzEgMC0zLjM4MjQgMS4wNzk1LTEuMzY3NCAxLjA3OTUtMS44NzExIDMuMDIyNnYyNC4wMzdoLTguNTY0MXYtMzUuOTg0aDYuNTQ5bDEuMDA3NSA0LjMxOGgwLjI4Nzg3cTAuOTM1NTctMi4zNzQ5IDIuNjYyOC0zLjY3MDMgMS43OTkyLTEuMzY3NCA0LjEwMjEtMS4zNjc0IDEuNzI3MiAwIDMuMzgyNCAwLjcxOTY3eiIvPgogIDxwYXRoIGQ9Im0xMzkuMTQgMzA4LjYxcTAtOS41NzE2IDMuNzQyMy0xNC4yNDkgMy43NDIzLTQuNjc3OSAxMC40MzUtNC42Nzc5IDcuMTk2NyAwIDEwLjcyMyA0Ljc0OTggMy41MjY0IDQuNzQ5OCAzLjUyNjQgMTQuMTc4IDAgOS42NDM2LTMuNzQyMyAxNC4zMjEtMy43NDIzIDQuNjA1OS0xMC41MDcgNC42MDU5LTE0LjE3OCAwLTE0LjE3OC0xOC45Mjd6bTguODUyIDBxMCA1LjM5NzUgMS4yMjM0IDguMzQ4MiAxLjIyMzQgMi45NTA2IDQuMTAyMSAyLjk1MDYgMi43MzQ4IDAgNC4wMzAyLTIuNTE4OCAxLjM2NzQtMi41OTA4IDEuMzY3NC04Ljc4IDAtNS41NDE1LTEuMjIzNC04LjQyMDF0LTQuMTc0MS0yLjg3ODdxLTIuNTE4OCAwLTMuOTU4MiAyLjU5MDgtMS4zNjc0IDIuNTE4OC0xLjM2NzQgOC43MDh6Ii8+CiAgPHBhdGggZD0ibTE4OS40NiAyOTkuMTFxLTEuNzI3Mi0wLjY0NzctMy4xNjY2LTAuNjQ3Ny0xLjk0MzEgMC0zLjM4MjQgMS4wNzk1LTEuMzY3NCAxLjA3OTUtMS44NzExIDMuMDIyNnYyNC4wMzdoLTguNTY0MXYtMzUuOTg0aDYuNTQ5bDEuMDA3NSA0LjMxOGgwLjI4Nzg3cTAuOTM1NTctMi4zNzQ5IDIuNjYyOC0zLjY3MDMgMS43OTkyLTEuMzY3NCA0LjEwMjEtMS4zNjc0IDEuNzI3MiAwIDMuMzgyNCAwLjcxOTY3eiIvPgogIDxwYXRoIGQ9Im0xOTYuNDQgMjc2LjIzaDguODUxOXYyMy42NzdsLTEuNzI3MiAxMS43MzFoLTUuMzk3NWwtMS43MjcyLTExLjczMXptLTAuNzkxNjQgNDUuNjk5cTAtMi42NjI4IDEuMzY3NC00LjAzMDIgMS40MzkzLTEuMzY3NCAzLjc0MjMtMS4zNjc0IDIuNTE4OCAwIDMuODg2MiAxLjM2NzR0MS4zNjc0IDQuMDMwMnEwIDIuNTkwOC0xLjQzOTMgNC4wMzAyLTEuMzY3NCAxLjQzOTMtMy44MTQyIDEuNDM5My0yLjM3NDkgMC0zLjc0MjMtMS40MzkzLTEuMzY3NC0xLjQzOTMtMS4zNjc0LTQuMDMwMnoiLz4KIDwvZz4KPC9zdmc+Cg==)}body.loading-applet-unsupported{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzc2LjQzbW0iIGhlaWdodD0iMzQxbW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM3Ni40MyAzNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODUuMzcsLTI4LjEwMikiIGZpbGw9IiNmZmYiPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMS44MTEsMjYuNjU0KSI+CiAgIDxnIHN0cm9rZT0iIzAwMCI+CiAgICA8ZyBmaWxsPSIjZmZmIj4KICAgICA8ZWxsaXBzZSB0cmFuc2Zvcm09Im1hdHJpeCguOTg0ODggLS4xNzMyNSAuMTYxMzMgLjk4NjkgMCAwKSIgY3g9IjkxLjg0NSIgY3k9Ijk5Ljk3IiByeD0iNjIuMzg5IiByeT0iNjUuMTg4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iNy4zOTE4IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgIDxjaXJjbGUgY3g9IjUuODY5NyIgY3k9Ijc5LjExOSIgcj0iMTMuOTE4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOC4xNjM2IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgIDxwYXRoIGQ9Im0yMC4zMDYgODAuMzY4IDI0LjMzNi0wLjYxNzgzIiBzdHJva2Utd2lkdGg9IjgiLz4KICAgICA8cGF0aCBkPSJtMTY5LjQ3IDgwLjY3IDI0LjMzNi0wLjYxNzgyIiBzdHJva2Utd2lkdGg9IjgiLz4KICAgICA8Y2lyY2xlIGN4PSIyMDUuMjciIGN5PSI3OS43NDEiIHI9IjEzLjkxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjguMTYzNiIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgIDwvZz4KICAgIDxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgPGVsbGlwc2UgY3g9Ijc2LjM0NiIgY3k9Ijc0LjM2NyIgcng9IjYuMTIwOCIgcnk9IjcuMzY2NiIgZmlsbD0iIzAwMCIgc3Ryb2tlLXdpZHRoPSI4IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgIDxlbGxpcHNlIGN4PSIxMzMuNTMiIGN5PSI3NC42NjIiIHJ4PSI2LjEyMDgiIHJ5PSI3LjM2NjYiIGZpbGw9IiMwMDAiIHN0cm9rZS13aWR0aD0iOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8cGF0aCBkPSJtOTguMDYgMTE5LjA0czQuMjYxNC0zLjU5NzUgNy44MDI5LTMuNjM0YzMuNTQxNi0wLjAzNjYgNi43NjMzIDMuNjkzMiA2Ljc2MzMgMy42OTMyIiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjYuNDkyNyIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KC0uNjQyNzkgLS43NjYwNCAtLjc2NjA0IC42NDI3OSAyMjQuNCAxMDMuNjUpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ij4KICAgPHBhdGggZD0ibTUzLjQ3IDE3NC4yNi0wLjExMDI5IDI3LjE4M3MtMjcuNzAyLTcuNzA5OC0zMS4xMTYgMzMuNjUzYzAuMjI0NzIgMS40NDg3IDI5LjM5IDI4LjM0IDUuODgyNiAzNy40ODgtMTAuOC0wLjYyNzMtOC4yODk5LTE5LjExNC0xNC43NzEtMTkuMjExLTYuNDgxNC0wLjA5NjUtOC4wODczLTAuMDk5Mi05Ljc3NCA1LjgyMTZzLTIuMjg5NCAxMy44MS03LjUzMzQgMTMuNzg2Yy01LjI0NC0wLjAyNDEtOS44NDA5LTExLjQ0Ni05LjgxNTQtMTUuMjI0czEuNTc2Mi0xMy40MzQgMTIuMzU4LTIwLjI4NmMwLjQ5OTIxLTYuNjk3MS04LjgyMzQtNDguNjU3IDU0Ljg4LTYzLjIxMXoiLz4KICAgPHBhdGggZD0ibTIyLjI0MyAyMzUuMXMtNi4zODY1LTEuMDg3MS0xMC43NzUtMS4wODcxYy00LjM4ODggMC0xMi44NzggMy40NjIxLTEyLjg3OCAzLjQ2MjEiLz4KICAgPHBhdGggZD0ibTEuMDM5NSAyMTMuODEgMjEuNjc2IDkuNTEyMiIvPgogICA8cGF0aCBkPSJtMTMuNTkxIDE5NC4xNyAxNS40MjcgMTYuNDU4Ii8+CiAgIDxwYXRoIGQ9Im0zMS4yOTcgMTgxLjcxIDkuNjQ1MiAyMC4zIi8+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKDkwLDQ3Ljc4MywxNzYuMDMpIj4KICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMTIwNiAuMTczNTkpIiBmaWxsPSIjZmZmIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTEzMy4zNSkiIHN0cm9rZT0iIzAwMCI+CiAgICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgIDxwYXRoIGQ9Im01My45MDYgMTY0LjQtMC45MjAzNiA3OS4wMzdzMTAuNjMzIDM5LjY5IDUyLjk1NCAzOS40MmM0Mi4zMjItMC4yNjk5IDU0LjcxOS0zOC4wMDUgNTQuNzE5LTM4LjAwNWwtMC40MTM5OS04MC4yeiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz4KICAgICAgPHBhdGggZD0ibTUyLjk4NiAyNDMuNDQgMTA3LjY3IDEuNDE1NHYwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCIvPgogICAgICA8cGF0aCBkPSJtNjMuMDUgMjYwLjY4IDg3LjEyOC0wLjQ2MzA2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjYiLz4KICAgICA8L2c+CiAgICAgPGcgZmlsbD0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjMuMTc4MyI+CiAgICAgIDxjaXJjbGUgY3g9IjgzLjAyOSIgY3k9IjE4OC4wMiIgcj0iNC40MTA5IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMDYuMjkiIGN5PSIxODguMDIiIHI9IjQuNDEwOSIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICAgPGNpcmNsZSBjeD0iMTMwLjcxIiBjeT0iMTg4LjAyIiByPSI0LjQxMDkiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgPC9nPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0icm90YXRlKC05NiwyNi40NDksNzIuODE3KSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCI+CiAgIDxwYXRoIGQ9Im01My40NyAxNzQuMjYtMC4xMTAyOSAyNy4xODNzLTI3LjcwMi03LjcwOTgtMzEuMTE2IDMzLjY1M2MwLjIyNDcyIDEuNDQ4NyAyOS4zOSAyOC4zNCA1Ljg4MjYgMzcuNDg4LTEwLjgtMC42MjczLTguMjg5OS0xOS4xMTQtMTQuNzcxLTE5LjIxMS02LjQ4MTQtMC4wOTY1LTguMDg3My0wLjA5OTItOS43NzQgNS44MjE2cy0yLjI4OTQgMTMuODEtNy41MzM0IDEzLjc4NmMtNS4yNDQtMC4wMjQxLTkuODQwOS0xMS40NDYtOS44MTU0LTE1LjIyNHMxLjU3NjItMTMuNDM0IDEyLjM1OC0yMC4yODZjMC40OTkyMS02LjY5NzEtOC44MjM5LTQ4LjY1NyA1NC44NzktNjMuMjExeiIvPgogICA8cGF0aCBkPSJtMjIuMjQzIDIzNS4xcy02LjM4NjUtMS4wODcxLTEwLjc3NS0xLjA4NzFjLTQuMzg4OCAwLTEyLjg3OCAzLjQ2MjEtMTIuODc4IDMuNDYyMSIvPgogICA8cGF0aCBkPSJtMS4wMzk1IDIxMy44MSAyMS42NzYgOS41MTIyIi8+CiAgIDxwYXRoIGQ9Im0xMy41OTEgMTk0LjE3IDE1LjQyNyAxNi40NTgiLz4KICAgPHBhdGggZD0ibTMxLjI5NyAxODEuNzEgOS42NDUyIDIwLjMiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9Ii4yNjQ1OCIgYXJpYS1sYWJlbD0iTm90IHN1cHBvcnRlZC4iPgogIDxwYXRoIGQ9Im04LjU2MjggMjk4LjQ4djI4LjEyOWgtOC41NjQxdi01MC43MzdoNi45ODA4bDE2Ljk2IDI5LjYyOC0wLjExOTgtMjkuMjY4aDguNTY0MXY1MC43MzdoLTYuOTgwOHoiLz4KICA8cGF0aCBkPSJtMzcuMzU0IDMwOC42MXEwLTkuNTcxNiAzLjc0MjMtMTQuMjQ5IDMuNzQyMy00LjY3NzkgMTAuNDM1LTQuNjc3OSA3LjE5NjcgMCAxMC43MjMgNC43NDk4IDMuNTI2NCA0Ljc0OTggMy41MjY0IDE0LjE3OCAwIDkuNjQzNi0zLjc0MjMgMTQuMzIxLTMuNzQyMyA0LjYwNTktMTAuNTA3IDQuNjA1OS0xNC4xNzggMC0xNC4xNzgtMTguOTI3em04Ljg1MTkgMHEwIDUuMzk3NSAxLjIyMzQgOC4zNDgydDQuMTAyMSAyLjk1MDZxMi43MzQ3IDAgNC4wMzAyLTIuNTE4OCAxLjM2NzQtMi41OTA4IDEuMzY3NC04Ljc4IDAtNS41NDE1LTEuMjIzNC04LjQyMDF0LTQuMTc0MS0yLjg3ODdxLTIuNTE4OCAwLTMuOTU4MiAyLjU5MDgtMS4zNjc0IDIuNTE4OC0xLjM2NzQgOC43MDh6Ii8+CiAgPHBhdGggZD0ibTY3Ljg5MSAyOTAuNjJoMy45NTgydi02Ljc2NDlsOC41NjQxLTIuNjYyOHY5LjQyNzdoNi45ODA4djcuNjI4NWgtNi45ODA4djE1LjY4OXEwIDMuMDk0NiAwLjU3NTc0IDQuMzkgMC42NDc3IDEuMjk1NCAyLjIzMSAxLjI5NTQgMS4wNzk1IDAgMS45NDMxLTAuMjE1OXQxLjg3MTEtMC42NDc3MWwxLjA3OTUgNi44MzY5cS0xLjU4MzMgMC43OTE2NC0zLjY3MDMgMS4yOTU0LTIuMDg3IDAuNTc1NzMtNC4zOSAwLjU3NTczLTQuMTAyMSAwLTYuMTg5Mi0yLjM3NDktMi4wMTUxLTIuMzc0OS0yLjAxNTEtNy45ODgzdi0xOC44NTVoLTMuOTU4MnoiLz4KICA8cGF0aCBkPSJtMTE4LjQ5IDMxNy4wM3EwLTEuNTExMy0xLjAwNzUtMi41MTg4LTAuOTM1NTctMS4wNzk1LTIuNDQ2OS0xLjk0MzEtMS41MTEzLTAuOTM1NTctMy4yMzg1LTEuODcxMS0xLjY1NTItMC45MzU1Ny0zLjE2NjYtMi4zMDI5LTEuNTExMy0xLjM2NzQtMi41MTg4LTMuMzEwNS0wLjkzNTU4LTEuOTQzMS0wLjkzNTU4LTQuODkzOCAwLTUuMDM3NyAyLjczNDgtNy43NzI0dDguMDYwMy0yLjczNDhxMy4xNjY2IDAgNS45NzMzIDAuNzE5NjcgMi44MDY3IDAuNjQ3NzEgNC40NjIgMS42NTUybC0yLjAxNTEgNi42MjFxLTEuMzY3NC0wLjU3NTc0LTMuMzEwNS0xLjA3OTUtMS45NDMxLTAuNTc1NzQtMy44MTQyLTAuNTc1NzQtMy41MjY0IDAtMy41MjY0IDIuOTUwNiAwIDEuMzY3NCAwLjkzNTU3IDIuMzAyOSAxLjAwNzUgMC44NjM2IDIuNTE4OCAxLjcyNzIgMS41MTEzIDAuODYzNiAzLjE2NjYgMS43OTkyIDEuNzI3MiAwLjkzNTU3IDMuMjM4NSAyLjM3NDkgMS41MTEzIDEuMzY3NCAyLjQ0NjkgMy4zODI0IDEuMDA3NSAyLjAxNTEgMS4wMDc1IDQuOTY1NyAwIDQuOTY1Ny0zLjAyMjYgNy45ODgzLTMuMDIyNiAzLjAyMjYtOC45OTU5IDMuMDIyNi0yLjk1MDYgMC01LjgyOTMtMC43MTk2Ny0yLjgwNjctMC43MTk2Ny00LjUzMzktMS44NzExbDIuMzc0OS02LjkwODhxMS41MTEzIDAuODYzNjEgMy40NTQ0IDEuNTExMyAyLjAxNTEgMC42NDc3IDQuMTc0MSAwLjY0NzcgMS42NTUyIDAgMi43MzQ3LTAuNzE5NjcgMS4wNzk1LTAuNzkxNjMgMS4wNzk1LTIuNDQ2OXoiLz4KICA8cGF0aCBkPSJtMTM5Ljg0IDI5MC42MnYyMS41MThxMCA0LjI0NiAwLjc5MTY0IDUuOTAxMyAwLjc5MTYzIDEuNjU1MiAyLjg3ODcgMS42NTUyIDIuMDE1MSAwIDMuMzgyNC0xLjQzOTMgMS4zNjc0LTEuNTExMyAxLjk0MzEtMy41OTg0di0yNC4wMzdoOC41NjQxdjI1LjA0NXEwIDIuOTUwNiAwLjIxNTkgNS44MjkzIDAuMjE1OSAyLjgwNjcgMC43OTE2NCA1LjEwOTdoLTYuNDc3bC0xLjUxMTMtNC44OTM4aC0wLjIxNTlxLTEuMzY3NCAyLjUxODgtMy43NDIzIDQuMTc0MS0yLjMwMjkgMS42NTUyLTUuNzU3NCAxLjY1NTItMi4yMzEgMC0zLjk1ODItMC42NDc3LTEuNzI3Mi0wLjU3NTc0LTIuOTUwNi0yLjA4Ny0xLjIyMzQtMS41MTEzLTEuODcxMS00LjEwMjEtMC42NDc3LTIuNjYyOC0wLjY0NzctNi42OTI5di0yMy4zODl6Ii8+CiAgPHBhdGggZD0ibTE2My42MSAyOTAuNjJoNi40MDUxbDAuODYzNjEgNC4xMDIxaDAuMjE1OXExLjY1NTItMi41OTA4IDMuNjcwMy0zLjc0MjMgMi4wODctMS4yMjM0IDUuMTA5Ni0xLjIyMzQgNS40Njk1IDAgOC4yMDQyIDQuMTc0MSAyLjgwNjcgNC4xMDIxIDIuODA2NyAxMy43NDYgMCA5LjY0MzYtMy40NTQ0IDE0LjgyNS0zLjQ1NDQgNS4xMDk3LTEwLjAwMyA1LjEwOTctMS43MjcyIDAtMi45NTA2LTAuMjg3ODd0LTIuMzAzLTAuOTM1NTd2MTQuNjA5aC04LjU2NDF6bTguNTY0MSAyNy45MjNxMC43MTk2NyAwLjcxOTY3IDEuNTgzMyAxLjA3OTUgMC45MzU1NyAwLjM1OTgzIDIuMzc0OSAwLjM1OTgzIDIuODc4NyAwIDQuMzktMi44MDY3IDEuNTExMy0yLjg3ODcgMS41MTEzLTkuNzE1NiAwLTUuMTA5Ni0xLjE1MTUtNy41NTY1LTEuMTUxNS0yLjUxODgtMy44MTQyLTIuNTE4OC0zLjU5ODQgMC00Ljg5MzggNC4yNDYxeiIvPgogIDxwYXRoIGQ9Im0xOTUuOCAyOTAuNjJoNi40MDUxbDAuODYzNjEgNC4xMDIxaDAuMjE1OXExLjY1NTItMi41OTA4IDMuNjcwMy0zLjc0MjMgMi4wODctMS4yMjM0IDUuMTA5Ni0xLjIyMzQgNS40Njk1IDAgOC4yMDQyIDQuMTc0MSAyLjgwNjcgNC4xMDIxIDIuODA2NyAxMy43NDYgMCA5LjY0MzYtMy40NTQ0IDE0LjgyNS0zLjQ1NDQgNS4xMDk3LTEwLjAwMyA1LjEwOTctMS43MjcyIDAtMi45NTA2LTAuMjg3ODd0LTIuMzAzLTAuOTM1NTd2MTQuNjA5aC04LjU2NDF6bTguNTY0MSAyNy45MjNxMC43MTk2NyAwLjcxOTY3IDEuNTgzMyAxLjA3OTUgMC45MzU1NyAwLjM1OTgzIDIuMzc0OSAwLjM1OTgzIDIuODc4NyAwIDQuMzktMi44MDY3IDEuNTExMy0yLjg3ODcgMS41MTEzLTkuNzE1NiAwLTUuMTA5Ni0xLjE1MTUtNy41NTY1LTEuMTUxNS0yLjUxODgtMy44MTQyLTIuNTE4OC0zLjU5ODQgMC00Ljg5MzggNC4yNDYxeiIvPgogIDxwYXRoIGQ9Im0yMjYuNjkgMzA4LjYxcTAtOS41NzE2IDMuNzQyMy0xNC4yNDkgMy43NDIzLTQuNjc3OSAxMC40MzUtNC42Nzc5IDcuMTk2NyAwIDEwLjcyMyA0Ljc0OTggMy41MjY0IDQuNzQ5OCAzLjUyNjQgMTQuMTc4IDAgOS42NDM2LTMuNzQyMyAxNC4zMjEtMy43NDIzIDQuNjA1OS0xMC41MDcgNC42MDU5LTE0LjE3OCAwLTE0LjE3OC0xOC45Mjd6bTguODUyIDBxMCA1LjM5NzUgMS4yMjM0IDguMzQ4MiAxLjIyMzQgMi45NTA2IDQuMTAyMSAyLjk1MDYgMi43MzQ4IDAgNC4wMzAyLTIuNTE4OCAxLjM2NzQtMi41OTA4IDEuMzY3NC04Ljc4IDAtNS41NDE1LTEuMjIzNC04LjQyMDF0LTQuMTc0MS0yLjg3ODdxLTIuNTE4OCAwLTMuOTU4MiAyLjU5MDgtMS4zNjc0IDIuNTE4OC0xLjM2NzQgOC43MDh6Ii8+CiAgPHBhdGggZD0ibTI3Ny4wMiAyOTkuMTFxLTEuNzI3Mi0wLjY0NzctMy4xNjY2LTAuNjQ3Ny0xLjk0MzEgMC0zLjM4MjQgMS4wNzk1LTEuMzY3NCAxLjA3OTUtMS44NzExIDMuMDIyNnYyNC4wMzdoLTguNTY0MXYtMzUuOTg0aDYuNTQ5bDEuMDA3NSA0LjMxOGgwLjI4Nzg3cTAuOTM1NTctMi4zNzQ5IDIuNjYyOC0zLjY3MDMgMS43OTkyLTEuMzY3NCA0LjEwMjEtMS4zNjc0IDEuNzI3MiAwIDMuMzgyNCAwLjcxOTY3eiIvPgogIDxwYXRoIGQ9Im0yODAuMTQgMjkwLjYyaDMuOTU4MnYtNi43NjQ5bDguNTY0MS0yLjY2Mjh2OS40Mjc3aDYuOTgwOHY3LjYyODVoLTYuOTgwOHYxNS42ODlxMCAzLjA5NDYgMC41NzU3MyA0LjM5IDAuNjQ3NzEgMS4yOTU0IDIuMjMxIDEuMjk1NCAxLjA3OTUgMCAxLjk0MzEtMC4yMTU5dDEuODcxMS0wLjY0NzcxbDEuMDc5NSA2LjgzNjlxLTEuNTgzMyAwLjc5MTY0LTMuNjcwMyAxLjI5NTQtMi4wODcgMC41NzU3My00LjM5IDAuNTc1NzMtNC4xMDIxIDAtNi4xODkyLTIuMzc0OS0yLjAxNTEtMi4zNzQ5LTIuMDE1MS03Ljk4ODN2LTE4Ljg1NWgtMy45NTgyeiIvPgogIDxwYXRoIGQ9Im0zMjguMjEgMzIzLjk0cS0xLjc5OTIgMS41ODMzLTQuODkzOCAyLjU5MDgtMy4wOTQ2IDEuMDA3NS02LjQ3NyAxLjAwNzUtMy43NDIzIDAtNi40NzctMS4yOTU0LTIuNjYyOC0xLjI5NTQtNC4zOS0zLjc0MjN0LTIuNTkwOC01LjkwMTNxLTAuNzkxNjQtMy41MjY0LTAuNzkxNjQtNy45ODgzIDAtOS43MTU2IDMuODE0Mi0xNC4zMjEgMy44ODYyLTQuNjc3OCAxMC43MjMtNC42Nzc4IDIuMzAzIDAgNC40NjIgMC43MTk2NyAyLjE1OSAwLjY0NzcgMy44MTQyIDIuMzAyOSAxLjcyNzIgMS41ODMzIDIuNzM0OCA0LjMxOCAxLjA3OTUgMi42NjI4IDEuMDc5NSA2Ljc2NDkgMCAxLjU4MzMtMC4yMTU5IDMuMzgyNC0wLjE0MzkzIDEuNzk5Mi0wLjUwMzc3IDMuODg2MmgtMTcuNDg4cTAuMTQzOTMgNC40NjIgMS44NzExIDYuODM2OXQ1LjU0MTUgMi4zNzQ5cTIuMzAyOSAwIDQuMTc0MS0wLjcxOTY3IDEuOTQzMS0wLjcxOTY3IDIuOTUwNi0xLjUxMTN6bS0xMS4yMjctMjYuOTg4cS0yLjczNDggMC00LjEwMjEgMi4yMzEtMS4zNjc0IDIuMTU5LTEuNTgzMyA2LjExNzJoOS45MzE0cTAuMjE1OS00LjEwMjEtMC44NjM2LTYuMTg5Mi0xLjA3OTUtMi4xNTktMy4zODI0LTIuMTU5eiIvPgogIDxwYXRoIGQ9Im0zNjAuNTEgMzEzLjk0cTAgMy4wMjI2IDAuMDcyIDYuMDQ1MiAwLjA3MiAzLjAyMjYgMC41NzU3NCA2LjY5MjloLTYuMDQ1MmwtMS4xNTE1LTQuMTc0MWgtMC4yODc4N3EtMi40NDY5IDUuMDM3Ny04LjU2NDEgNS4wMzc3LTUuNDY5NSAwLTguNjM2LTQuMzE4LTMuMDk0Ni00LjMxOC0zLjA5NDYtMTQuMDM0IDAtOS40OTk2IDMuMzgyNC0xNC4zOTMgMy4zODI0LTQuOTY1NyAxMC4wNzUtNC45NjU3IDEuNzI3MiAwIDIuODc4NyAwLjIxNTkgMS4xNTE1IDAuMjE1OSAyLjIzMSAwLjcxOTY3di0xNC41MzdoOC41NjQxem0tMTMuMzg2IDUuNzU3NHExLjk0MzEgMCAzLjA5NDYtMC45MzU1OCAxLjE1MTUtMS4wMDc1IDEuNzI3Mi0yLjg3ODd2LTE2Ljk4NHEtMC43MTk2Ny0wLjY0NzctMS42NTUyLTAuOTM1NTctMC44NjM2LTAuMjg3ODctMi4zMDI5LTAuMjg3ODctMi44Nzg3IDAtNC4zMTggMi41OTA4LTEuNDM5MyAyLjU5MDgtMS40MzkzIDkuMjExOCAwIDQuOTY1NyAxLjE1MTUgNy42Mjg1IDEuMjIzNCAyLjU5MDggMy43NDIzIDIuNTkwOHoiLz4KICA8cGF0aCBkPSJtMzY2LjA3IDMyMS45M3EwLTIuNjYyOCAxLjM2NzQtNC4wMzAyIDEuNDM5My0xLjM2NzQgMy43NDIzLTEuMzY3NCAyLjUxODggMCAzLjg4NjIgMS4zNjc0IDEuMzY3NCAxLjM2NzQgMS4zNjc0IDQuMDMwMiAwIDIuNTkwOC0xLjQzOTMgNC4wMzAyLTEuMzY3NCAxLjQzOTMtMy44MTQyIDEuNDM5My0yLjM3NDkgMC0zLjc0MjMtMS40MzkzdC0xLjM2NzQtNC4wMzAyeiIvPgogPC9nPgo8L3N2Zz4K)}button{border-radius:2em;background-color:#efefef;border:1px solid gray;cursor:pointer;outline:0;text-align:center;margin:auto;display:block}button:active{background-color:#ddd}select{height:4em;padding:5px 1em;border-radius:2em;background-color:#f4f4f4}</style></head><body class=\"preloading-applet\"></body><script type=\"text/javascript\">var apis="+api_reference+";var url=\"https://raw.githubusercontent.com/solentcomputingsociety/"+contents.applets[i].host_name+"/master/index.js\";try{fetch(url).then(function(t){t.text().then(function(t){var e=document.createElement(\"script\");e.setAttribute(\"type\",\"text/javascript\"),e.innerHTML=\"var apis=\"+JSON.stringify(apis)+\";\"+t,document.getElementsByTagName(\"head\")[0].appendChild(e),document.body.classList.remove(\"preloading-applet\")})}).catch(function(t){document.body.classList.remove(\"preloading-applet\"),document.body.classList.add(\"loading-applet-error\")})}catch(e){document.body.classList.remove(\"preloading-applet\"),document.body.classList.add(\"loading-applet-unsupported\")}</script></html>";
															}
															function error_applet(){
																return "<html><head><style type=\"text/css\">body{padding:2em 1em;overflow-y:hidden;min-height:170px;background-color:#e3e3e3;background-repeat:no-repeat;background-position:center;background-size:140px;padding:1em;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY2LjY2bW0iIGhlaWdodD0iMzI3LjU0bW0iIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2Ni42NiAzMjcuNTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogPG1ldGFkYXRhPgogIDxyZGY6UkRGPgogICA8Y2M6V29yayByZGY6YWJvdXQ9IiI+CiAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgIDxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz4KICAgIDxkYzp0aXRsZS8+CiAgIDwvY2M6V29yaz4KICA8L3JkZjpSREY+CiA8L21ldGFkYXRhPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuOTQyLC0yOC4xMDIpIiBmaWxsPSIjZmZmIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuODExLDI2LjY1NCkiPgogICA8ZyBzdHJva2U9IiMwMDAiPgogICAgPGcgZmlsbD0iI2ZmZiI+CiAgICAgPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoLjk4NDg4IC0uMTczMjUgLjE2MTMzIC45ODY5IDAgMCkiIGN4PSI5MS44NDUiIGN5PSI5OS45NyIgcng9IjYyLjM4OSIgcnk9IjY1LjE4OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjcuMzkxOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8Y2lyY2xlIGN4PSI1Ljg2OTciIGN5PSI3OS4xMTkiIHI9IjEzLjkxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjguMTYzNiIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8cGF0aCBkPSJtMjAuMzA2IDgwLjM2OCAyNC4zMzYtMC42MTc4MyIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPHBhdGggZD0ibTE2OS40NyA4MC42NyAyNC4zMzYtMC42MTc4MiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgPGNpcmNsZSBjeD0iMjA1LjI3IiBjeT0iNzkuNzQxIiByPSIxMy45MTgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4LjE2MzYiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICA8L2c+CiAgICA8ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgIDxlbGxpcHNlIGN4PSI3Ni4zNDYiIGN5PSI3NC4zNjciIHJ4PSI2LjEyMDgiIHJ5PSI3LjM2NjYiIGZpbGw9IiMwMDAiIHN0cm9rZS13aWR0aD0iOCIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICA8ZWxsaXBzZSBjeD0iMTMzLjUzIiBjeT0iNzQuNjYyIiByeD0iNi4xMjA4IiByeT0iNy4zNjY2IiBmaWxsPSIjMDAwIiBzdHJva2Utd2lkdGg9IjgiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgPHBhdGggZD0ibTk4LjA2IDExOS4wNHM0LjI2MTQtMy41OTc1IDcuODAyOS0zLjYzNGMzLjU0MTYtMC4wMzY2IDYuNzYzMyAzLjY5MzIgNi43NjMzIDMuNjkzMiIgZmlsbD0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI2LjQ5MjciLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtLjY0Mjc5IC0uNzY2MDQgLS43NjYwNCAuNjQyNzkgMjI0LjQgMTAzLjY1KSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iOCI+CiAgIDxwYXRoIGQ9Im01My40NyAxNzQuMjYtMC4xMTAyOSAyNy4xODNzLTI3LjcwMi03LjcwOTgtMzEuMTE2IDMzLjY1M2MwLjIyNDcyIDEuNDQ4NyAyOS4zOSAyOC4zNCA1Ljg4MjYgMzcuNDg4LTEwLjgtMC42MjczLTguMjg5OS0xOS4xMTQtMTQuNzcxLTE5LjIxMS02LjQ4MTQtMC4wOTY1LTguMDg3My0wLjA5OTItOS43NzQgNS44MjE2cy0yLjI4OTQgMTMuODEtNy41MzM0IDEzLjc4NmMtNS4yNDQtMC4wMjQxLTkuODQwOS0xMS40NDYtOS44MTU0LTE1LjIyNHMxLjU3NjItMTMuNDM0IDEyLjM1OC0yMC4yODZjMC40OTkyMS02LjY5NzEtOC44MjM0LTQ4LjY1NyA1NC44OC02My4yMTF6Ii8+CiAgIDxwYXRoIGQ9Im0yMi4yNDMgMjM1LjFzLTYuMzg2NS0xLjA4NzEtMTAuNzc1LTEuMDg3MWMtNC4zODg4IDAtMTIuODc4IDMuNDYyMS0xMi44NzggMy40NjIxIi8+CiAgIDxwYXRoIGQ9Im0xLjAzOTUgMjEzLjgxIDIxLjY3NiA5LjUxMjIiLz4KICAgPHBhdGggZD0ibTEzLjU5MSAxOTQuMTcgMTUuNDI3IDE2LjQ1OCIvPgogICA8cGF0aCBkPSJtMzEuMjk3IDE4MS43MSA5LjY0NTIgMjAuMyIvPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCw0Ny43ODMsMTc2LjAzKSI+CiAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01LjEyMDYgLjE3MzU5KSIgZmlsbD0iI2ZmZiI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xMzMuMzUpIiBzdHJva2U9IiMwMDAiPgogICAgIDxnIGZpbGw9IiNmZmYiPgogICAgICA8cGF0aCBkPSJtNTMuOTA2IDE2NC40LTAuOTIwMzYgNzkuMDM3czEwLjYzMyAzOS42OSA1Mi45NTQgMzkuNDJjNDIuMzIyLTAuMjY5OSA1NC43MTktMzguMDA1IDU0LjcxOS0zOC4wMDVsLTAuNDEzOTktODAuMnoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI4Ii8+CiAgICAgIDxwYXRoIGQ9Im01Mi45ODYgMjQzLjQ0IDEwNy42NyAxLjQxNTR2MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz4KICAgICAgPHBhdGggZD0ibTYzLjA1IDI2MC42OCA4Ny4xMjgtMC40NjMwNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgICAgPC9nPgogICAgIDxnIGZpbGw9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzLjE3ODMiPgogICAgICA8Y2lyY2xlIGN4PSI4My4wMjkiIGN5PSIxODguMDIiIHI9IjQuNDEwOSIgc3R5bGU9InBhaW50LW9yZGVyOmZpbGwgbWFya2VycyBzdHJva2UiLz4KICAgICAgPGNpcmNsZSBjeD0iMTA2LjI5IiBjeT0iMTg4LjAyIiByPSI0LjQxMDkiIHN0eWxlPSJwYWludC1vcmRlcjpmaWxsIG1hcmtlcnMgc3Ryb2tlIi8+CiAgICAgIDxjaXJjbGUgY3g9IjEzMC43MSIgY3k9IjE4OC4wMiIgcj0iNC40MTA5IiBzdHlsZT0icGFpbnQtb3JkZXI6ZmlsbCBtYXJrZXJzIHN0cm9rZSIvPgogICAgIDwvZz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtOTYsMjYuNDQ5LDcyLjgxNykiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiPgogICA8cGF0aCBkPSJtNTMuNDcgMTc0LjI2LTAuMTEwMjkgMjcuMTgzcy0yNy43MDItNy43MDk4LTMxLjExNiAzMy42NTNjMC4yMjQ3MiAxLjQ0ODcgMjkuMzkgMjguMzQgNS44ODI2IDM3LjQ4OC0xMC44LTAuNjI3My04LjI4OTktMTkuMTE0LTE0Ljc3MS0xOS4yMTEtNi40ODE0LTAuMDk2NS04LjA4NzMtMC4wOTkyLTkuNzc0IDUuODIxNnMtMi4yODk0IDEzLjgxLTcuNTMzNCAxMy43ODZjLTUuMjQ0LTAuMDI0MS05Ljg0MDktMTEuNDQ2LTkuODE1NC0xNS4yMjRzMS41NzYyLTEzLjQzNCAxMi4zNTgtMjAuMjg2YzAuNDk5MjEtNi42OTcxLTguODIzNC00OC42NTcgNTQuODgtNjMuMjExeiIvPgogICA8cGF0aCBkPSJtMjIuMjQzIDIzNS4xcy02LjM4NjUtMS4wODcxLTEwLjc3NS0xLjA4NzFjLTQuMzg4OCAwLTEyLjg3OCAzLjQ2MjEtMTIuODc4IDMuNDYyMSIvPgogICA8cGF0aCBkPSJtMS4wMzk1IDIxMy44MSAyMS42NzYgOS41MTIyIi8+CiAgIDxwYXRoIGQ9Im0xMy41OTEgMTk0LjE3IDE1LjQyNyAxNi40NTgiLz4KICAgPHBhdGggZD0ibTMxLjI5NyAxODEuNzEgOS42NDUyIDIwLjMiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9Ii4yNjQ1OCI+CiAgPHBhdGggZD0ibTY3LjQ4NSAyNzYuMjNoMjUuMTg4djguMzQ4MmgtMTYuMTIxdjEyLjM3OGgxNC42MDl2OC4zNDgyaC0xNC42MDl2MTIuOTU0aDE2LjQwOHY4LjM0ODJoLTI1LjQ3NnoiLz4KICA8cGF0aCBkPSJtMTE1LjI1IDI5OS4xMXEtMS43MjcyLTAuNjQ3Ny0zLjE2NjYtMC42NDc3LTEuOTQzMSAwLTMuMzgyNCAxLjA3OTUtMS4zNjc0IDEuMDc5NS0xLjg3MTEgMy4wMjI2djI0LjAzN2gtOC41NjQxdi0zNS45ODRoNi41NDlsMS4wMDc1IDQuMzE4aDAuMjg3ODdxMC45MzU1Ny0yLjM3NDkgMi42NjI4LTMuNjcwMyAxLjc5OTItMS4zNjc0IDQuMTAyMS0xLjM2NzQgMS43MjcyIDAgMy4zODI0IDAuNzE5Njd6Ii8+CiAgPHBhdGggZD0ibTEzNi4zMyAyOTkuMTFxLTEuNzI3Mi0wLjY0NzctMy4xNjY2LTAuNjQ3Ny0xLjk0MzEgMC0zLjM4MjQgMS4wNzk1LTEuMzY3NCAxLjA3OTUtMS44NzExIDMuMDIyNnYyNC4wMzdoLTguNTY0MXYtMzUuOTg0aDYuNTQ5bDEuMDA3NSA0LjMxOGgwLjI4Nzg3cTAuOTM1NTctMi4zNzQ5IDIuNjYyOC0zLjY3MDMgMS43OTkyLTEuMzY3NCA0LjEwMjEtMS4zNjc0IDEuNzI3MiAwIDMuMzgyNCAwLjcxOTY3eiIvPgogIDxwYXRoIGQ9Im0xMzkuMTQgMzA4LjYxcTAtOS41NzE2IDMuNzQyMy0xNC4yNDkgMy43NDIzLTQuNjc3OSAxMC40MzUtNC42Nzc5IDcuMTk2NyAwIDEwLjcyMyA0Ljc0OTggMy41MjY0IDQuNzQ5OCAzLjUyNjQgMTQuMTc4IDAgOS42NDM2LTMuNzQyMyAxNC4zMjEtMy43NDIzIDQuNjA1OS0xMC41MDcgNC42MDU5LTE0LjE3OCAwLTE0LjE3OC0xOC45Mjd6bTguODUyIDBxMCA1LjM5NzUgMS4yMjM0IDguMzQ4MiAxLjIyMzQgMi45NTA2IDQuMTAyMSAyLjk1MDYgMi43MzQ4IDAgNC4wMzAyLTIuNTE4OCAxLjM2NzQtMi41OTA4IDEuMzY3NC04Ljc4IDAtNS41NDE1LTEuMjIzNC04LjQyMDF0LTQuMTc0MS0yLjg3ODdxLTIuNTE4OCAwLTMuOTU4MiAyLjU5MDgtMS4zNjc0IDIuNTE4OC0xLjM2NzQgOC43MDh6Ii8+CiAgPHBhdGggZD0ibTE4OS40NiAyOTkuMTFxLTEuNzI3Mi0wLjY0NzctMy4xNjY2LTAuNjQ3Ny0xLjk0MzEgMC0zLjM4MjQgMS4wNzk1LTEuMzY3NCAxLjA3OTUtMS44NzExIDMuMDIyNnYyNC4wMzdoLTguNTY0MXYtMzUuOTg0aDYuNTQ5bDEuMDA3NSA0LjMxOGgwLjI4Nzg3cTAuOTM1NTctMi4zNzQ5IDIuNjYyOC0zLjY3MDMgMS43OTkyLTEuMzY3NCA0LjEwMjEtMS4zNjc0IDEuNzI3MiAwIDMuMzgyNCAwLjcxOTY3eiIvPgogIDxwYXRoIGQ9Im0xOTYuNDQgMjc2LjIzaDguODUxOXYyMy42NzdsLTEuNzI3MiAxMS43MzFoLTUuMzk3NWwtMS43MjcyLTExLjczMXptLTAuNzkxNjQgNDUuNjk5cTAtMi42NjI4IDEuMzY3NC00LjAzMDIgMS40MzkzLTEuMzY3NCAzLjc0MjMtMS4zNjc0IDIuNTE4OCAwIDMuODg2MiAxLjM2NzR0MS4zNjc0IDQuMDMwMnEwIDIuNTkwOC0xLjQzOTMgNC4wMzAyLTEuMzY3NCAxLjQzOTMtMy44MTQyIDEuNDM5My0yLjM3NDkgMC0zLjc0MjMtMS40MzkzLTEuMzY3NC0xLjQzOTMtMS4zNjc0LTQuMDMwMnoiLz4KIDwvZz4KPC9zdmc+Cg==)}</style></head><body></body></html>";
															}
															if (valid[0] && valid[1] == contents.applets[i].apis.length){
																if (valid[1] == 0){
																	applet_container_content.write(standard_applet(false));
																} else {
																	applet_container_content.write(loading_applet());
																}
															} else {
																applet_container_content.write(error_applet());
															}
															applet_container_content.close();
															if (valid[0] && valid[1] > 0){
																load_apis(contents.applets[i].apis).then(function(apis_generated_values){
																	applet_container_content.open();
																	applet_container_content.write(standard_applet(apis_generated_values));
																	applet_container_content.close();
																}).catch(function(error){
																	applet_container_content.open();
																	applet_container_content.write(error_applet());
																	applet_container_content.close();
																	
																});
															}
															var resizable = true;
															var resize = function(){
																var resize_container = document.getElementById("applet_content_iframe-" + contents.applets[i].host_name);
																if (typeof(resize_container) != "undefined" && resize_container != null){
																	resize_container.style.height = resize_container.contentWindow.document.body.scrollHeight + "px";
																	setTimeout(resize,50);
																}
															}
															setTimeout(resize,300); // to account for a quick load of applet
														}
													} catch(e) {}
												}
											}])
										}
									}
									out.html += "</div>";
									break;
								case "nav_loc_pub":
									hash_ref = "pub";
									document.title = "Weekly pub | Solent Computing Society";
									var is_president = contents.users[1].president == firebase.auth().currentUser.uid;
									out.html = "<div class=\"side_margin\"><p class=\"center_text\">";
									if (is_president) {
										if (pubs_data.length == 0){
											document.getElementById({true:"page_render",false:sub_ref}[sub_ref == false]).innerHTML = "<div class=\"side_margin center_text\"><p class=\"center_text no_interact\">Loading...</p></div>";
											await firebase.firestore().collection("places/pubs/listed").get().then(async function(snapshot){
												pubs_data = snapshot.docs.map( doc => {
													var doc_data = doc.data();
													doc_data.id = doc.id;
													return doc_data;
												});	
											}).catch(function(error){
												alert("Error:", "Failed to load pub data!\n" + error.message);
											});
										}
										out.html += "Select pub:</p><div class=\"center_text\"><select id=\"pub_selection\">";
										for (var i = 0; i < pubs_data.length; i++) {
											out.html += "<option value=\"" + pubs_data[i].id + "\" id=\"" + pubs_data[i].id + "\"" + {true:" selected=\"selected\"",false:""}[contents.pub.id == pubs_data[i].id] + ">" + pubs_data[i].name + "</option>"
										}
										out.html += "</select> or <a title=\"Randomly select a pub\" id=\"pub_selection_randomiser\">Randomise</a>.</div>";
										var pub_selection_update_func = async function(){
											var selected_pub = pubs_data[document.getElementById("pub_selection").selectedIndex].id;
											var publish_date = new Date();
											if (!(new Date().getDay() == 3 && new Date().getHours() <= 19)){
												publish_date = publish_date.setDate(publish_date.getDate() + (7 + 3 - publish_date.getDay()) % 7);
											}
											firebase.firestore().collection("places").doc("pubs").set({
												date: firebase.firestore.Timestamp.fromDate(new Date(publish_date)),
												this_week: selected_pub,
											}).then(async function(){
												await update_pub();
												load_page("nav_loc_pub");
											}).catch(function(error){
												alert("Error:","Failed to load list of pubs!\n" + error.message);
											});
										};
										add.click.push(["pub_selection_randomiser",function(){
											var random_pub = -1;
											while (random_pub == -1) {
												random_pub = pubs_data[Math.floor(Math.random()*pubs_data.length)].id;
												if (pubs_data[document.getElementById("pub_selection").selectedIndex].id == random_pub){
													random_pub = -1;
												}
											}
											document.getElementById(random_pub).selected = true;
											pub_selection_update_func();
										}]);
										add.change.push(["pub_selection",pub_selection_update_func]);
									}
									if (contents.pub == "tbc"){
										if (is_president) {
											out.html += "</div>";
											break;
										}
										out.html += "<p class=\"center_text no_interact\">This week's pub hasn't been published yet...</p></div>";
									} else if (contents.pub.error == true){
										out.html += "<p class=\"center_text no_interact\">Unable to load this week's pub!</p></div>";
									} else {
										out.html += "<p class=\"center_text no_interact\">This week we will be going to:</p><h2 class=\"center_text\">" + contents.pub.name + "</h2><p class=\"center_text\">" + contents.pub.address + "</p><p class=\"center_text\">" + contents.pub.postcode + "</p></div><iframe src=\"https://maps.google.com/maps?q=" + contents.pub.geo[0] + "," + contents.pub.geo[1] + "&z=18&output=embed\" id=\"pub_map\" frameborder=\"0\" style=\"border:0;background-image:url(\'" + img_blob("/app/img/map_loading.gif",false,true) + "\')\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";
									}
									break;
							}
							ignore_hash_change = false;
							try {
								function hash(s) {
									let h;
									for(let i = 0; i < s.length; i++) 
										h = Math.imul(31, h) + s.charCodeAt(i) | 0;
									return h;
								}
								if (current_page[1] != hash(out.html)){
									window.location.hash = hash_ref;
									try {
										if (page_id == "nav_loc_messages"){
											document.title = "Messages | Solent Computing Society";
										}
										document.getElementById({true:"page_render",false:sub_ref}[sub_ref == false]).innerHTML = out.html;
										window.scrollTo(0,0);
									} catch(e) {
										return;
									}
								}
								current_page = [page_id,hash(out.html),out.html];
								for (var i = img.length - 1; i >= 0; i--) {
									img_blob(img[i][0],img[i][1]);
								}
								for (var i = add.click.length - 1; i >= 0; i--) {
									document.getElementById(add.click[i][0]).addEventListener("click",add.click[i][1]);
								}
								for (var i = add.typing.length - 1; i >= 0; i--) {
									document.getElementById(add.typing[i][0]).addEventListener("input",add.typing[i][1]);
								}
								for (var i = add.change.length - 1; i >= 0; i--) {
									document.getElementById(add.change[i][0]).addEventListener("change",add.change[i][1]);
								}
								for (var i = 0; i < add.call_back.length; i++) {
									add.call_back[i]();
								}
							} catch(e){}
							try {
								document.getElementById("redundant_padding").style.minHeight = (document.getElementById("banner_contents").offsetHeight + 20 - (16 * 4)) + "px";
							} catch(e){};
						}
						var error_show = function(animation_state){
							animation_state = animation_state || 0;
							var page_render = document.getElementById("page_render");
							switch (animation_state){
								case 0:
									page_render.classList.add("error_state_with_animation");
									break;
								case 1:
									page_render.classList.add("fadeout");
									break;
								case 2:
									page_render.innerHTML = "<div class=\"spacer\"></div><p id=\"failed_loading\" class=\"side_padding center_text no_interact\"></p>";
									page_render.classList.remove("fadeout");
									break;
								case 3:
									page_render.classList.remove("error_state_with_animation");
									return true;
							}
							setTimeout(function(){
								error_show(animation_state + 1)
							}, 1000);
						}
						setTimeout(function () {
							update_users().then(async function(e){
								var user_set_up = -1;
								for (var i = contents.users[0].length - 1; i >= 0; i--) {
									if (contents.users[0][i].id == firebase.auth().currentUser.uid) {
										try {
											if (contents.users[0][i].name.trim().length > 0){
												user_set_up = i;
												break;
											}
										} catch (e) {}
									}
								}
								if (user_set_up == -1 || contents.users[0][i].name == ""){
									setup = 1;
									window.location.hash = "setup";
								}
								await update_pub().then(async function(e){
									await update_events();
									setInterval(function(){update_events(),update_pub()},600000);
									var valid_setup = true;
									await firebase.firestore().collection("blog").doc("banner").get().then(async function(banner){
										if (banner.exists){
											banner = banner.data();
											if (banner.show){
												var banner_contents = document.getElementById("banner_contents");
												banner_contents.innerHTML = banner.contents;
												banner_contents.setAttribute("title","Click to dismiss");
												document.getElementById("banner_main").addEventListener("click",function(){
													document.getElementById("banner_container").classList.add("hide");
													document.getElementById("page_render").classList.remove("banner_top");
													try {
														document.getElementById("redundant_padding").remove();															
													} catch (e) {}
												});
												document.getElementById("banner_container").classList.remove("hide");
												document.getElementById("page_render").classList.add("banner_top");
												try {
													document.getElementById("redundant_padding").remove();															
												} catch (e) {}
												function resize(){
													try {
														document.getElementById("redundant_padding").style.minHeight = (document.getElementById("banner_contents").offsetHeight + 20 - (16 * 4)) + "px";
													} catch(e){};
												}
												new ResizeObserver(resize).observe(banner_contents)
											}
										}
									}).catch(function(error){
										if (!navigator.onLine){
											location.href = "offline.html";
										} else {
											alert("Error","Unable to load content [ref: pub]");
											error_show();
											valid_setup = false;
										}
									});
									if (valid_setup){
										sub_pages.forEach(function(nav_id){
											if (nav_id != "nav_loc_member_about")
											{
												document.getElementById(nav_id).classList.remove("disabled");
											}
										});
										document.getElementById("page_render").classList.remove("loading");
										document.getElementById("nav_loc_messages").classList.remove("fadeout","disabled");
										document.getElementById("nav_loc_messages").setAttribute("title","View the society message board");
										list_applets();
										var hash_state_redirect = hash_state_check();
										switch (hash_state_redirect.lp){
											case "nav_loc_events":
												load_page("nav_loc_events");
												break;
											case "nav_loc_members":
												load_page("nav_loc_members");
												break;
											case "nav_loc_messages":
												load_page("nav_loc_messages");
												break;
											case "nav_loc_applets":
												load_page("nav_loc_applets");
												break;
											case "nav_loc_pub":
												load_page("nav_loc_pub");
												break;
											case "nav_loc_member_about":
												load_page("nav_loc_member_about",hash_state_redirect.add);
												break;
											default:
												if (document.getElementById("page_menu").classList.contains("hide") && !document.getElementById("page_app").classList.contains("hide")){
													load_page("nav_loc_events");
												}
										}
										setInterval(function(){ 
											refresh(true);
										},3000);
									}
								}).catch(function(error){
									if (!navigator.onLine){
										location.href = "offline.html";
									} else {
										alert("Error","Unable to load content [ref:&nbsp;pub" + error.code + "]");
										error_show();
									}
								});
							}).catch(function(error){
								if (!navigator.onLine){
									location.href = "offline.html";
								} else {
									alert("Error","Unable to load content [ref:&nbsp;user-" + error.code + "]");
									error_show();
								}
							});
						}, 100);
						window.onhashchange = function(){
							var hash_state_redirect = hash_state_check();
							if (setup == 1){
								if (hash_state_redirect.lp != "settings" && hash_state_redirect.lp != "menu" && hash_state_redirect.lp != false) {
									settings();
								}
								return;
							} else if (setup == 2) {
								alert("Account setup","You must at least enter your name to complete setup!");
								settings("profile");
								return;
							}
							if (hash_state_redirect.ignore){
								ignore_hash_change = false;
								return;
							}
							document.getElementById("page_menu").classList.add("hide");
							document.getElementById("page_app").classList.remove("hide");
							document.getElementById("s_user").classList.remove("disabled");
							document.getElementById("s_user").setAttribute("title","Manage your profile");
							if (document.getElementById("nav_loc_messages").classList.contains("hide")){
								document.getElementById("nav_loc_messages").classList.remove("hide");
							}
							switch (hash_state_redirect.lp){
								case "nav_loc_events":
									load_page("nav_loc_events");
									break;
								case "nav_loc_members":
									load_page("nav_loc_members");
									break;
								case "nav_loc_messages":
									load_page("nav_loc_messages");
									break;
								case "nav_loc_applets":
									load_page("nav_loc_applets");
									break;
								case "nav_loc_pub":
									load_page("nav_loc_pub");
									break;
								case "nav_loc_member_about":
									user_view_about = hash_state_redirect.add;
									load_page("nav_loc_member_about",hash_state_redirect.add);
									break;
								case "menu":
									settings();
									break;
								case "settings":
									settings(hash_state_redirect.add);
									break;
								default:
									load_page("nav_loc_events");
							}
						};
						window.addEventListener("beforeunload", function(event) {
							var hash_state = hash_state_check();
							if (hash_state.lp == "settings" && hash_state.add == "about"){
								event.returnValue =	"You may have some unsaved changes, are you sure you want to exit?";
							}
						});
					} else {
						location.assign("/login");
					}
				});
				function settings(settings_page_ref){
					settings_page_ref = settings_page_ref || "menu";
					s_user_button.classList.add("disabled");
					s_user_button.removeAttribute("title");
					document.getElementById("nav_loc_messages").classList.add("hide");
					document.getElementById("page_menu").classList.remove("hide");
					document.getElementById("page_app").classList.add("hide");
					
					var main_menu = function(){
						try {
							ignore_hash_change = true;
							window.location.hash = "menu";
							document.title = "Menu | Solent Computing Society";
							document.getElementById("page_ref_menu_contents").classList.remove("hide");
							document.getElementById("page_ref_settings_content").classList.add("hide");
							document.getElementById("page_ref_settings_forbidden").classList.add("hide");
							document.getElementById("page_ref_title").innerHTML = "Menu";
						} catch (e) {}
					};
					var base_settings_page = async function(){
						if (setup == 1){
							setup = 2;
						}
						ignore_hash_change = true;
						window.location.hash = "settings/profile";
						document.title = "Settings | Solent Computing Society";
						document.getElementById("page_ref_menu_contents").classList.add("hide");
						document.getElementById("page_ref_settings_content_more").classList.add("hide");
						document.getElementById("page_ref_settings_content").classList.remove("hide");
						document.getElementById("page_ref_settings_setup").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden").classList.add("hide");
						document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\" id=\"settings_loading_statement\"></p><div id=\"setting_ref_content\"></div><div class=\"small_spacer\"></div><p class=\"side_margin margin_top center_text\"><a id=\"menu_settings_about\" title=\"Update your 'about me' page\">About me</a></p><p class=\"side_margin margin_top center_text\"><a title=\"Go to more settings\" id=\"settings_ref_more\">More settings</a></p><p class=\"side_margin margin_top center_text\"><a title=\"Back to menu settings\" id=\"settings_ref_back\">Go back to menu</a></p><br>";
						document.getElementById("menu_settings_about").addEventListener("click",about_page);
						document.getElementById("page_ref_title").innerHTML = "Settings";
						await firebase.firestore().collection("users/members/id").doc(firebase.auth().currentUser.uid).get().then(async function(user){
							if(!user.exists){
								user.name = "";
								user.photo = "";
							} else {
								user = user.data();
								user.name = user.name || "";
								user.photo = user.photo || "";
							}
							var content = "<div id=\"settings_ref_content_prof_picture_container\"><img id=\"settings_ref_content_prof_picture\"><p class=\"center_text no_margin\" id=\"settings_ref_content_prof_picture_actions_container\"><input type=\"file\" class=\"hide\" id=\"settings_ref_content_prof_picture_change\" accept=\"image/x-png,image/jpeg,image/jpg\"><a id=\"settings_ref_content_prof_picture_change_link\">Change profile picture</a><a id=\"settings_ref_content_prof_picture_remove_link\">Remove picture</a></p></div><div class=\"input_container\"><input type=\"text\" placeholder=\"Your name\" value=\"" + user.name + "\" id=\"settings_ref_content_prof_name_value\" autocomplete=\"name\"/><p class=\"no_margin center_text\"><a id=\"settings_ref_content_prof_name_change_link\">Update your display name</a></p></div>";
							try {
								document.getElementById("settings_loading_statement").remove();
							} catch (e) {}
							document.getElementById("setting_ref_content").innerHTML = content;
							document.getElementById("settings_ref_content_prof_picture_change_link").addEventListener("click",function(){
								document.getElementById("settings_ref_content_prof_picture_change").click();
							});
							var prof_image_preview = document.getElementById("settings_ref_content_prof_picture");
							document.getElementById("settings_ref_content_prof_picture_remove_link").addEventListener("click",function(e){
								prof_image_preview.style.backgroundImage = "url('" + img_blob("/app/img/refresh_loading.gif",null,true) + "')";
								prof_image_preview.style.border = "none";
								var prof_image_preview_src = prof_image_preview.getAttribute("src") || "";
								prof_image_preview.removeAttribute("src");
								firebase.firestore().collection("users/members/id/").doc(firebase.auth().currentUser.uid).set({
									name: user.name || "",
									photo: "",
								}).then(function(){
									user.photo = "";
									prof_image_preview.style.backgroundImage = "";
									prof_image_preview.style.border = "1px solid #aaaaaa";
									img_blob("/app/img/prof.png","settings_ref_content_prof_picture");
									var prof_pre_loader = new Image();
									prof_pre_loader.src = img_blob("/app/img/prof.png",null,true);
									prof_pre_loader.onload = function(){
										if (typeof(Storage) !== "undefined") {
											var prof_pre_canvas = document.createElement("canvas");
											prof_pre_canvas.width = 50;
											prof_pre_canvas.height = 50;
											var prof_pre_canvas_render = prof_pre_canvas.getContext("2d");
											prof_pre_canvas_render.drawImage(prof_pre_loader, 0, 0, 50, 50);
											var prof_image_base64 = prof_pre_canvas.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, "");
											if (localStorage.profile_image == prof_image_base64){
												u_user_icon.classList.remove("loading");
												return;
											} else {
												localStorage.profile_image = prof_image_base64;
											}
										}
										try {
											u_user_icon.style.backgroundImage = "url(\""+ prof_pre_loader.getAttribute("src") + "\")";
										} catch (e) {}
									};
								}).catch(function(error){
									prof_image_preview.style.backgroundImage = "";
									prof_image_preview.style.border = "1px solid #aaaaaa";
									prof_image_preview.setAttribute("src",prof_image_preview_src);	
								});
							});
							var profile_picture_input = document.getElementById("settings_ref_content_prof_picture_change");
							profile_picture_input.addEventListener("change", function(e){
								var file = profile_picture_input.files;
								if (file.length == 1) {
									file = file[0];
									profile_picture_inputvalue = "";
									if (file && ["image/x-png","image/png","image/jpeg","image/jpg"].includes(file['type'])){
										if (file.size > 0 && file.size <= 5242880){
											var prof_image_preview_src = prof_image_preview.getAttribute("src") || ""; 
											prof_image_preview.removeAttribute("src");
											prof_image_preview.style.backgroundImage = "url('" + img_blob("/app/img/refresh_loading.gif",null,true) + "')";
											prof_image_preview.style.border = "none";
											document.getElementById("settings_ref_content_prof_picture_actions_container").style.display = "none";
											var storage = firebase.storage().ref("profile/" + firebase.auth().currentUser.uid);
											storage.put(file).on("state_changed",async function(snapshot){
												if ((snapshot.bytesTransferred / snapshot.totalBytes) * 100 == 100){
													firebase.firestore().collection("users/members/id/").doc(firebase.auth().currentUser.uid).set({
														name: user.name,
														photo: firebase.auth().currentUser.uid,
													}).then(async function(){
														user.photo = firebase.auth().currentUser.uid;
														await img_blob(await storage_download("profile/" + firebase.auth().currentUser.uid),"settings_ref_content_prof_picture");
														prof_image_preview.style.backgroundImage = "";
														prof_image_preview.addEventListener("load",function load(){
															prof_image_preview.style.border = "1px solid #aaaaaa";
															prof_image_preview.removeEventListener("load",load);
														});
														document.getElementById("settings_ref_content_prof_picture_actions_container").style.display = "block";
														var prof_pre_loader = document.getElementById("settings_ref_content_prof_picture");
														prof_pre_loader.onload = function(){
															if (typeof(Storage) !== "undefined") {
																var prof_pre_canvas = document.createElement("canvas");
																prof_pre_canvas.width = 50;
																prof_pre_canvas.height = 50;
																var prof_pre_canvas_render = prof_pre_canvas.getContext("2d");
																prof_pre_canvas_render.drawImage(prof_pre_loader, 0, 0, 50, 50);
																var prof_image_base64 = prof_pre_canvas.toDataURL("image/png").replace(/^data:image\/(png|jpg);base64,/, "");
																if (localStorageStorage.profile_image == prof_image_base64){
																	u_user_icon.classList.remove("loading");
																	return;
																} else {
																	localStorageStorage.profile_image = prof_image_base64;
																}
															}
															try {
																u_user_icon.style.backgroundImage = "url(\""+ prof_pre_loader.getAttribute("src") + "\")";
															} catch (e) {}
														};
													}).catch(function(error){
														document.getElementById("settings_ref_content_prof_picture_actions_container").style.display = "block";
														prof_image_preview.setAttribute("src",prof_image_preview_src);
														prof_image_preview.style.backgroundImage = "";
														prof_image_preview.style.border = "1px solid #aaaaaa";
													});
												}
											}, function(error){
												document.getElementById("settings_ref_content_prof_picture_actions_container").style.display = "block";
												prof_image_preview.setAttribute("src",prof_image_preview_src);
												prof_image_preview.style.backgroundImage = "";
												prof_image_preview.style.border = "1px solid #aaaaaa";
											});
										}
									}
								}
							});
							prof_image_preview.style.backgroundImage = "url('" + img_blob("/app/img/refresh_loading.gif",null,true) + "')";
							var photo = "";
							if (typeof user.photo === "undefined" || user.photo.length == 0){
								photo = "/app/img/prof.png";
							} else {
								photo = await storage_download("profile/"+user.photo);
							}
							img_blob(photo,"settings_ref_content_prof_picture")
							prof_image_preview.style.backgroundImage = "";
							var settings_ref_content_prof_name_value = document.getElementById("settings_ref_content_prof_name_value");
							var settings_ref_content_prof_name_change_link = document.getElementById("settings_ref_content_prof_name_change_link");
							settings_ref_content_prof_name_value.addEventListener("input",function(){
								if (settings_ref_content_prof_name_value.value.length >= 2){
									settings_ref_content_prof_name_change_link.style.display = "block";
								} else {
									settings_ref_content_prof_name_change_link.style.display = "none";
								}
							})
							document.getElementById("settings_ref_content_prof_name_change_link").addEventListener("click",function(){
								setTimeout(function(){
									if (settings_ref_content_prof_name_value.value.length >= 2){
										settings_ref_content_prof_name_value.disabled = true;
										settings_ref_content_prof_name_value.classList.add("loading");
										firebase.firestore().collection("users/members/id/").doc(firebase.auth().currentUser.uid).set({
											name: settings_ref_content_prof_name_value.value,
											photo: user.photo,
										}).then(function(){
											settings_ref_content_prof_name_value.classList.remove("loading");
											settings_ref_content_prof_name_value.disabled = false;
											setup = 4;
										}).catch(function(){
											settings_ref_content_prof_name_value.disabled = false;
										});
									}
								},300);
							});
							document.getElementById("settings_ref_more").addEventListener("click",function(){
								window.scroll(0,0);
								document.getElementById("page_ref_settings_content").classList.add("hide");
								document.getElementById("page_ref_settings_content_more").classList.remove("hide");
								document.getElementById("page_ref_title").innerHTML = "Account settings";
								var settings_ref_content_prof_email_input = document.getElementById("settings_ref_content_prof_email_input")
								settings_ref_content_prof_email_input.value = firebase.auth().currentUser.email;
								var settings_ref_content_prof_email_change_button = document.getElementById("settings_ref_content_prof_email_change_button");
								settings_ref_content_prof_email_change_button.addEventListener("click",function(){
									settings_ref_content_prof_email_change_button.disabled = true;
									var settings_ref_content_prof_email_error = document.getElementById("settings_ref_content_prof_email_error");
									settings_ref_content_prof_email_input.disabled = true;
									settings_ref_content_prof_email_input.classList.add("loading");
									settings_ref_content_prof_email_error.classList.add("hide");
									firebase.auth().currentUser.updateEmail(settings_ref_content_prof_email_input.value).then(function() {
										settings_ref_content_prof_email_input.classList.remove("loading");
										settings_ref_content_prof_email_input.disabled = false;
										settings_ref_content_prof_email_change_button.disabled = false;
									}).catch(function(error){
										settings_ref_content_prof_email_change_button.disabled = false;
										if (error.code == "auth/requires-recent-login"){
											error.message = "This operation is sensitive and requires recent authentication. Log in again before retrying this request. Click <a id=\"e_logout\" title=\"Sign in\">here</a> to reauthenticate your account!";
										}
										settings_ref_content_prof_email_error.innerHTML = error.message;
										if (error.code == "auth/requires-recent-login"){
											document.getElementById("e_logout").addEventListener("click",function(){
												localStorage.removeItem("profile_image");
												firebase.auth().signOut();
												location.href = "/login";
											});
										}
										settings_ref_content_prof_email_error.classList.remove("hide");
										settings_ref_content_prof_email_input.classList.remove("loading");
										settings_ref_content_prof_email_input.disabled = false;
									});
								});
								var settings_ref_content_prof_password_change_button = document.getElementById("settings_ref_content_prof_password_change_button");
								settings_ref_content_prof_password_change_button.addEventListener("click",function(){
									var settings_ref_content_prof_password_error = document.getElementById("settings_ref_content_prof_password_error");
									settings_ref_content_prof_password_error.disabled = true;
									settings_ref_content_prof_password_error.classList.add("hide");
									var current_password = document.getElementById("current_password");
									var new_password = document.getElementById("new_password");
									var new_password_2 = document.getElementById("new_password_confirm");
									if (current_password.value.length == 0 || new_password.value.length == 0 || new_password_2.value.length == 0){
										settings_ref_content_prof_password_error.innerHTML = "Passwords cannot be left blank!";
										settings_ref_content_prof_password_error.classList.remove("hide");
										return;
									}
									if (new_password.value != new_password_2.value){
										settings_ref_content_prof_password_error.innerHTML = "Your new passwords do not match!";
										settings_ref_content_prof_password_error.classList.remove("hide");
										return;
									}
									current_password.classList.add("loading");
									current_password.disabled = true;
									new_password.classList.add("pre_loading");
									new_password.disabled = true;
									new_password_2.classList.add("pre_loading");
									new_password_2.disabled = true;
									firebase.auth().currentUser.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(
										firebase.auth().currentUser.email,
										current_password.value,
									)).then(function() {
										current_password.classList.remove("loading");
										current_password.classList.add("pre_loading");
										new_password.classList.add("loading");
										new_password.classList.remove("pre_loading");
										new_password_2.classList.add("loading");
										new_password_2.classList.remove("pre_loading");
										firebase.auth().currentUser.updatePassword(new_password.value).then(function() {
											current_password.classList.remove("pre_loading");
											current_password.value = "";
											current_password.disabled = false;
											new_password.classList.remove("loading");
											new_password.value = "";
											new_password.disabled = false;
											new_password_2.classList.remove("loading");
											new_password_2.value = "";
											new_password_2.disabled = false;
										}).catch(function(error){
											current_password.classList.remove("pre_loading");
											current_password.disabled = false;
											new_password.classList.remove("loading");
											new_password.disabled = false;
											new_password_2.classList.remove("loading");
											new_password_2.disabled = false;
											settings_ref_content_prof_password_error.innerHTML = error.message;
											settings_ref_content_prof_password_error.classList.remove("hide");
										});
									}).catch(function(error){
										current_password.classList.remove("loading");
										current_password.disabled = false;
										new_password.classList.remove("pre_loading");
										new_password.disabled = false;
										new_password_2.classList.remove("pre_loading");	
										new_password_2.disabled = false;
										settings_ref_content_prof_password_error.innerHTML = error.message;
										settings_ref_content_prof_password_error.classList.remove("hide");
									});
								});
							});
						}).catch(function(e){
							if (e.message == "Failed to get document because the client is offline."){
								e.message = "Failed to load your user settings because you're offline!";
							}
							document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\">" + e.message + "</p>" + document.getElementById("page_ref_settings_content").innerHTML;
							document.getElementById("settings_ref_more").remove();
						});
						["settings_ref_back","settings_ref_base_forbidden"].forEach(function(e){
							document.getElementById(e).addEventListener("click",main_menu);
						});
					};
	
					var about_page = async function(){
						ignore_hash_change = true;
						window.location.hash = "settings/about";
						document.title = "About me | Solent Computing Society";
						document.getElementById("page_ref_menu_contents").classList.add("hide");
						document.getElementById("page_ref_settings_content_more").classList.add("hide");
						document.getElementById("page_ref_settings_content").classList.remove("hide");
						document.getElementById("page_ref_settings_setup").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden").classList.add("hide");
						document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\" id=\"settings_loading_statement\"></p><div id=\"setting_ref_content\"></div><p class=\"side_margin margin_top center_text\"><a title=\"Back to settings\" id=\"settings_ref_back\">Go back to main settings</a></p><br>";
						document.getElementById("page_ref_title").innerHTML = "About me";
						document.getElementById("settings_ref_back").addEventListener("click",base_settings_page);
						await firebase.firestore().collection("users/members/id/" + firebase.auth().currentUser.uid + "/about/").get().then(async function(about){
							var about_docs = about.docs.map( doc => {
								var doc_data = doc.data();
								doc_data.id = doc.id;
								return doc_data;
							});
							var about = {};
							about_docs.forEach(doc => {
								if (doc.id == "course"){
									about["subject"] = doc.subject;
									about["year_of_study"] = doc.year;
								} else if (doc.id == "intro"){
									about["intro"] = doc.bio;
									about["relationship_status"] = doc.relationship_status;
								} else if (doc.id == "favourite_things"){
									about["favourite_food"] = doc.food;
									about["favourite_drink"] = doc.drink;
									about["favourite_lecturer"] = doc.lecturer;
									about["favourite_film"] = doc.film;
									about["favourite_tv_show"] = doc.tv_show;
								} else if (doc.id == "social"){
									about["email_address"] = doc.email_address;
									about["phone_number"] = doc.phone_number;
									about["website"] = doc.website;
									about["facebook"] = doc.facebook;
									about["twitter"] = doc.twitter;
									about["instagram"] = doc.instagram;
									about["snapchat"] = doc.snapchat;
									about["linkedin"] = doc.linkedin;
									about["dev_community"] = doc.dev_community;
									about["discord"] = doc.discord;
									about["youtube"] = doc.youtube;
									about["github"] = doc.github;
								} else {
									about[doc.id] = doc.is;
								}
							});
							var about_me = {"Subject":about["subject"]||"","Year of study":about["year_of_study"]||"","Intro":about["intro"]||"","Relationship status":about["relationship_status"]||"","Favourite lecturer": about["favourite_lecturer"]||"","Favourite food": about["favourite_food"]||"","Favourite drink": about["favourite_drink"]||"","Favourite film": about["favourite_film"]||"","Favourite TV show": about["favourite_tv_show"]||"","Facebook":about["facebook"]||"","Phone number":about["phone_number"]||"","Email address":about["email_address"]||"","Website":about["website"]||"","Twitter":about["twitter"]||"","Instagram":about["instagram"]||"","Snapchat":about["snapchat"]||"","Youtube":about["youtube"]||"","Discord":about["discord"]||"","Dev Community":about["dev_community"]||"","GitHub":about["github"]||"","LinkedIn":about["linkedin"]||""};
							var computing_subjects = [20,23,88,24,16,17,18,19];
							try {
								document.getElementById("settings_loading_statement").remove();
							} catch (e) {}
							document.getElementById("setting_ref_content").innerHTML = "<p class=\"side_margin margin_top center_text\">This information will be publicly viewable to all members of the Solect Computing Society!</p><div class=\"side_margin about_me_edit margin_top\" id=\"about_me_container\"><br></div>";
							var render_action_button = function(about_topic){
								var about_me_action = "";
								about_me_action += "<span class=\"about_me_removal";
								if (typeof about_me[about_topic] === "undefined"){
									about_me_action += " disabled";
								} else if (about_me[about_topic].length == 0) {
									about_me_action += " disabled";
								}
								about_me_action += "\" id=\"about_me_save_" + about_topic.split(" ").join("_") + "\" title=\"Delete " + about_topic.toLowerCase() + "\"></span>";
								return about_me_action;
							}
							var render_content = function(about_topic) {
								var about_me_container_content = "";
								if ([0,2,3,4].indexOf(about_sections[about_topic]) >= 0) {
									about_me_container_content += "<input type=\"text\" id=\"about_me_input_" + about_topic.split(" ").join("_") + "\" value=\"" + (about_me[about_topic] || "").split("\"").join("\\\"") +"\"";
									if (about_sections[about_topic] == 2){
										about_me_container_content += "autocomplete=\"url\"";
									} else if (about_sections[about_topic] == 3){
										about_me_container_content += "autocomplete=\"tel\"";
									} else if (about_sections[about_topic] == 4){
										about_me_container_content += "autocomplete=\"email\"";
									}
									about_me_container_content += " maxlength=\"1024\" />";
								} else if (about_sections[about_topic] == 1) {
									about_me_container_content += "<textarea type=\"text\" id=\"about_me_textarea_" + about_topic.split(" ").join("_") + "\" value=\"" + (about_me[about_topic]||"").split("\"").join("\\\"") + "\" maxlength=\"1024\" />" + (about_me[about_topic]||"") + "</textarea>";
								} else {
									about_me_container_content += "<select id=\"about_me_select_" + about_topic.split(" ").join("_") + "\">";
									var about_section = about_sections[about_topic];
									var list = [];
									if (about_topic == "Subject"){
										for (let i = 0; i < computing_subjects.length; i++) {
											list.push([about_section[computing_subjects[i]],computing_subjects[i]]);
										}
									}
									for (let i = 0; i <= about_section.length; i++) {
										var already_listed = false;
										for (let ii = 0; ii < list.length; ii++) {
											if(list[ii][1] == i){
												already_listed = true;
												break;
											}
										}
										if (already_listed){
											continue;
										} else {
											list.push([about_section[i],i]);
										}
									}
									for (let i = 0; i < list.length; i++) {
										var value;
										var value_id = 0;
										var selected = false;
										if (i > 0){
											value = list[i - 1][0];
											value_id = list[i - 1][1] + 1;
										}
										about_me_container_content += "<option";
										if (value_id == about_me[about_topic] || (value == "" && typeof about_me[about_topic] === "undefined")){
											about_me_container_content += " selected=\"selected\"";
											selected = true;
										}
										if (i == 0) {
											if (selected){
												about_me_container_content += " disabled";
												value = "Not selected";
											} else {
												value = "Hide this option?";
											}
										}
										about_me_container_content += " value=\"" + value_id + "\">" + value + "</option>";
									}
									about_me_container_content += "</select>";
								}
								return about_me_container_content;
							}
							var about_me_page_render = "<div class=\"members_list about_me_edit\"><div class=\"vertical_padding\"><h2 class=\"vertical_padding no_margin small_bottom center_text\">My course</h2><p class=\"side_margin center_text\">This section is for you to tell other society members what course your are studying, as well as your year of study. If your course isn't listed, please tell us as soon as possible.</p><div class=\"side_margin\"><h4 class=\"small_bottom\">Subject:</h4><div class=\"input_container_about\">" + render_content("Subject") + "</div><h4 class=\"small_bottom\">Subject:</h4><div class=\"input_container_about\">" + render_content("Year of study") + "</div><div class=\"input_container_about margin_top_small small_bottom\"><input type=\"submit\" value=\"Save\" class=\"about_me_category_update_button disabled\" id=\"about_me_category_update_course\"></div></div></div></div>";
							about_me_page_render += "<div class=\"members_list about_me_edit\"><div class=\"vertical_padding\"><h2 class=\"vertical_padding no_margin small_bottom center_text\">Intro</h2><p class=\"side_margin center_text\">Here you can tell other society members something about you. It's always good for someone to know a little bit about you, why not help them out by giving them something to start with.</p><div class=\"side_margin\"><h4 class=\"small_bottom\">Bio:</h4><div class=\"input_container_about\">" + render_content("Intro") + "</div><h4 class=\"small_bottom\">Relationship status:</h4><div class=\"input_container_about\">" + render_content("Relationship status") + "</div><div class=\"input_container_about margin_top_small small_bottom\"><input type=\"submit\" value=\"Save\" class=\"about_me_category_update_button disabled\" id=\"about_me_category_update_intro\"></div></div></div></div>";
							about_me_page_render += "<div class=\"members_list about_me_edit\"><div class=\"vertical_padding\"><h2 class=\"vertical_padding no_margin small_bottom center_text\">Favourite things</h2><p class=\"side_margin center_text\">This section is for you to tell other society members what your favourite things are. Think of this section as an aid to get conversations started with other society members, based on their favourite things.</p><div class=\"side_margin\"><h4 class=\"small_bottom\">Favourite food:</h4><div class=\"input_container_about\">" + render_content("Favourite food") + "</div><h4 class=\"small_bottom\">Favourite drink:</h4><div class=\"input_container_about\">" + render_content("Favourite drink") + "</div><h4 class=\"small_bottom\">Favourite lecturer:</h4><div class=\"input_container_about\">" + render_content("Favourite lecturer") + "</div><h4 class=\"small_bottom\">Favourite film:</h4><div class=\"input_container_about\">" + render_content("Favourite film") + "</div><h4 class=\"small_bottom\">Favourite TV show:</h4><div class=\"input_container_about\">" + render_content("Favourite TV show") + "</div><div class=\"input_container_about margin_top_small small_bottom\"><input type=\"submit\" value=\"Save\" class=\"about_me_category_update_button disabled\" id=\"about_me_category_update_favourite_things\"></div></div></div></div>";
							about_me_page_render += "<div class=\"members_list about_me_edit\"><div class=\"vertical_padding\"><h2 class=\"vertical_padding no_margin small_bottom center_text\">Contact</h2><p class=\"side_margin center_text\">Help other society members find you on other platforms, by providing them with your social media accounts; or alternatively your direct contact details.</p><div class=\"side_margin\"><h4 class=\"small_bottom\">Phone number:</h4><div class=\"input_container_about\">" + render_content("Phone number") + "</div><h4 class=\"small_bottom\">Email address:</h4><div class=\"input_container_about\">" + render_content("Email address") + "</div><h4 class=\"small_bottom\">Website URL:</h4><div class=\"input_container_about\">" + render_content("Website") + "</div><h4 class=\"small_bottom\">Facebook username:</h4><div class=\"input_container_about\">" + render_content("Facebook") + "</div><h4 class=\"small_bottom\">Twitter username:</h4><div class=\"input_container_about\">" + render_content("Twitter") + "</div><h4 class=\"small_bottom\">Snapchat username:</h4><div class=\"input_container_about\">" + render_content("Snapchat") + "</div><h4 class=\"small_bottom\">Instagram username:</h4><div class=\"input_container_about\">" + render_content("Instagram") + "</div><h4 class=\"small_bottom\">GitHub username:</h4><div class=\"input_container_about\">" + render_content("GitHub") + "</div><h4 class=\"small_bottom\">Dev Community username:</h4><div class=\"input_container_about\">" + render_content("Dev Community") + "</div><h4 class=\"small_bottom\">Discord username#number:</h4><div class=\"input_container_about\">" + render_content("Discord") + "</div><h4 class=\"small_bottom\">LinkedIn account URL:</h4><div class=\"input_container_about\">" + render_content("LinkedIn") + "</div><h4 class=\"small_bottom\">Youtube account URL:</h4><div class=\"input_container_about\">" + render_content("Youtube") + "</div><div class=\"input_container_about margin_top_small small_bottom\"><input type=\"submit\" value=\"Save\" class=\"about_me_category_update_button disabled\" id=\"about_me_category_update_socials\"></div></div></div></div>";
							document.getElementById("about_me_container").innerHTML = about_me_page_render;
							["course","intro","favourite_things","socials"].forEach(function(about_topic) {
								document.getElementById("about_me_category_update_"+about_topic).addEventListener("click",function(e){
									if (e.target.classList.contains("disabled")){
										return false;
									}
									var about_me_element_id = e.target.getAttribute("id").replace("about_me_category_update_","");
									var invalid = true;
									var iteration = 0;
									var set_value = {};
									var element_contexts = [];
									var element_ids = [];
									var update_disable = [];
									var out_values = {};
									if (about_me_element_id == "course"){
										element_ids.push("Year_of_study");
										element_ids.push("Subject");
									} else if (about_me_element_id == "intro"){
										element_ids.push("Intro");
										element_ids.push("Relationship_status");
									} else if (about_me_element_id == "favourite_things") {
										element_ids.push("Favourite_food");
										element_ids.push("Favourite_drink");
										element_ids.push("Favourite_lecturer");
										element_ids.push("Favourite_film");
										element_ids.push("Favourite_TV_show");
									} else {
										element_ids.push("Phone_number");
										element_ids.push("Email_address");
										element_ids.push("Website");
										element_ids.push("Facebook");
										element_ids.push("Twitter");
										element_ids.push("Snapchat");
										element_ids.push("Instagram");
										element_ids.push("GitHub");
										element_ids.push("Dev_Community");
										element_ids.push("Discord");
										element_ids.push("LinkedIn");
										element_ids.push("Youtube");
									}
									var enable_fields = function(){
										update_disable.forEach(element => {
											document.getElementById(element).removeAttribute("disabled");
										});
									}
									while (element_ids.length > 0){
										var element_types = ["input","select","textarea"];
										var about_me_element_id = element_ids[0];
										for (let i = 0; i < element_types.length; i++) {
											var element = element_types[i];	
											iteration += 1;
											var element_type = element;
											element = "about_me_" + element + "_" + about_me_element_id;
											if (document.getElementById(element) != null){
												update_disable.push(element);
												invalid = false;
												document.getElementById(element).setAttribute("disabled","disabled");
												var iteration_rel = iteration;
												var value = document.getElementById(element).value;
												var max_length = 1024;
												var min_length = 0;
												if (about_me_element_id == "Facebook"){
													max_length = 50;
												} else if (about_me_element_id == "Twitter"){
													max_length = 15;
												} else if (about_me_element_id == "Instagram"){
													max_length = 30;
												} else if (about_me_element_id == "Snapchat"){
													max_length = 15;
													min_length = 3;
												} else if (about_me_element_id == "Discord"){
													max_length = 32;
													min_length = 1;
												} else if (about_me_element_id == "GitHub"){
													max_length = 39;
													min_length = 1;
												} else if (about_me_element_id == "LinkedIn"){
													max_length = 58;
												} else if (about_me_element_id == "Dev_Community"){
													max_length = 39;
													min_length = 1;
												} else if (about_me_element_id == "Email_address") {
													max_length = 320;
												} else if (about_me_element_id == "Phone_number") {
													max_length = 15;
												}
												if (value.length > max_length){
													alert("Unable to update your " + about_me_element_id.split("_").join(" "),"maximum length for " + about_me_element_id.split("_").join(" ") + " is " + max_length + " characters&nbsp;-&nbsp;you can't get around this!");
													document.getElementById(element).removeAttribute("disabled");
													enable_fields();
													return;
												} else if (value.length != 0 && value.length <= min_length){
													alert("Unable to update your " + about_me_element_id.split("_").join(" "),"Minimum length for a " + about_me_element_id.split("_").join(" ") + " username is " + min_length + " character" + {true:"s",false:""}[min_length > 1] + "&nbsp;-&nbsp;you can't get around this!");
													document.getElementById(element).removeAttribute("disabled");
													enable_fields();
													return;
												}
												if (element_type != "select"){
													if (value.trim().length > 0){
														if (about_me_element_id == "Facebook"){
															if (value.match(/^[a-zA-Z\d.]{5,}$/g) != value){
																alert("Error","Invalid format for a Facebook username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Twitter"){
															if(value.match(/^@?(\w){1,15}$/g) != value){
																alert("Error","Invalid format for a Twitter username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Instagram"){
															if(value.match(/^([a-z0-9._])+$/g) != value){
																alert("Error","Invalid format for a Twitter username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Snapchat"){
															if(value.match(/^[a-zA-Z][\w-_.]{1,13}[\w]$/g) != value){
																alert("Error","Invalid format for a Snapchat username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Youtube"){
															if(value.match(/(?:(?:http|https):\/\/)(?:www\.|)youtube\.com\/(channel\/|user)([a-zA-Z0-9\-_]{1,})/g) != value){
																alert("Error","Invalid Youtube channel URL!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Discord"){
															if(value.match(/^((.+?)#\d{4})/g) != value){
																alert("Error","Invalid Discord username tag (<code>username#number</code>)!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "GitHub"){
															if(value.match(/([a-zA-Z0-9](?:-?[a-zA-Z0-9]){0,38})$/g) != value){
																alert("Error","Invalid GitHub username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "LinkedIn"){
															value = value.toLowerCase();
															if(value.match(/http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?/g) != value){
																alert("Error","Invalid LinkedIn URL!</p><p>Format accepted is: <code>https://www.linkedin.com/in/username</code></p>");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Dev Community"){
															if(value.match(/^(\w){1,15}$/.test(value) == false && /^[a-zA-Z][\w-_.]{1,13}[\w]$/g) != value){
																alert("Error","Invalid Dev Community profile username!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Phone number") {
															if(value.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \/]?)?((?:\(?\d{1,}\)?[\-\.\ \/]?){0,})$/g) != value){
																alert("Error","Invalid phone number format!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Email address") {
															if(value.match(/^\w+([\.-]?\w+)*@\\w+([\.-]?\\w+)*(\.\w{2,3})+$/g) != value){
																alert("Error","Invalid email address format!");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														} else if (about_me_element_id == "Website") {
															if(value.match(/(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g) != value){
																alert("Error","Invalid website URL!<p>Format accepted is: <code>http(s)://domain/path</code></p>");
																document.getElementById(element).removeAttribute("disabled");
																enable_fields();
																return;
															}
														}
													}
												} else if (value.match(/^[0-9]\d*$/)){
													value = parseInt(value);
												}
												out_values[element] = value;
												switch(about_me_element_id){
													case "Subject":
														set_value.subject = value;
														break;
													case "Year_of_study":
														set_value.year = value;
														break;
													case "Intro":
														set_value.bio = value;
														break;
													case "Relationship_status":
														set_value.relationship_status = value;
														break;
													case "Favourite_food":
														set_value.food = value;
														break;
													case "Favourite_drink":
														set_value.drink = value;
														break;
													case "Favourite_lecturer":
														set_value.lecturer = value;
														break;
													case "Favourite_film":
														set_value.film = value;
														break;
													case "Favourite_TV_show":
														set_value.tv_show = value;
														break;
													case "Phone_number":
														set_value.phone_number = value;
														break;
													case "Email_address":
														set_value.email_address = value;
														break;
													case "Website":
														set_value.website = value;
														break;
													case "Facebook":
														set_value.facebook = value;
														break;
													case "Twitter":
														set_value.twitter = value;
														break;
													case "Snapchat":
														set_value.snapchat = value;
														break;
													case "Instagram":
														set_value.instagram = value;
														break;
													case "GitHub":
														set_value.github = value;
														break;
													case "Dev_Community":
														set_value.dev_community = value;
														break;
													case "Discord":
														set_value.discord = value;
														break;
													case "LinkedIn":
														set_value.linkedin = value;
														break;
													case "Youtube":
														set_value.youtube = value;
														break;
													default:
														set_value.is = value;
												}
												break;
											}
										}
										element_ids.shift();
									}
									e.target.classList.add("disabled");
									if (["Subject","Year_of_study"].indexOf(about_me_element_id) >= 0){
										about_me_element_id = "course";
									} else if (["Intro","Relationship_status"].indexOf(about_me_element_id) >= 0){
										about_me_element_id = "intro";
									} else if (["Favourite_food","Favourite_drink","Favourite_lecturer","Favourite_film","Favourite_TV_show"].indexOf(about_me_element_id) >= 0){
										about_me_element_id = "favourite_things";
									} else if (["Phone_number","Email_address","Website","Facebook","Twitter","Snapchat","Instagram","GitHub","Dev_Community","Discord","LinkedIn","Youtube"].indexOf(about_me_element_id) >= 0){
										about_me_element_id = "social";
									} else {
										return false;
									}
									e.target.setAttribute("value","Saving");
									firebase.firestore().collection("users/members/id/" + firebase.auth().currentUser.uid + "/about/").doc(about_me_element_id.toLowerCase()).set(set_value).then(async function() {
										e.target.classList.remove("disabled");
										await update_disable.forEach(element => {
											value = out_values[element];
											if (element.startsWith("about_me_select_")){
												for(var i, j = 0; i = document.getElementById(element).options[j]; j++) {
													if (i.getAttribute("value").toString() == value.toString()){
														i.setAttribute("selected","selected");
													} else {
														i.removeAttribute("selected");
													}
												}
												document.getElementById(element).value = value;
												var event = document.createEvent('Event');
												event.initEvent('change', true, true);
												document.getElementById(element).value = value;
												document.getElementById(element).dispatchEvent(event);
											} else {
												document.getElementById(element).setAttribute("value",value);
												["input","onpropertychange"].forEach(function(event_type){
													var event = document.createEvent('Event');
													event.initEvent(event_type, true, true);
													document.getElementById(element).value = value;
													document.getElementById(element).dispatchEvent(event);
												});
											}
											document.getElementById(element).removeAttribute("disabled");
										});
										e.target.setAttribute("value","Saved!");
										setTimeout(function(){
											if (e.target.getAttribute("value") == "Saved!"){
												e.target.setAttribute("value","Save");
											}
										},2500);
									}).catch(function(error){
										e.target.setAttribute("value","Save");
										enable_fields();
										alert("Error","Unable to update your " + about_me_element_id.split("_").join(" ") + "!\n"+error.message);
										e.target.classList.remove("disabled");
									});
									if (invalid){
										alert("An unexpected error occured!");
									}
								});
							});
							var save_button_is = function(element_reference){
								if (["Subject","Year_of_study"].indexOf(element_reference) >= 0){
									return "about_me_category_update_course";
								} else if (["Intro","Relationship_status"].indexOf(element_reference) >= 0){
									return "about_me_category_update_intro";
								} else if (["Favourite_food","Favourite_drink","Favourite_lecturer","Favourite_film","Favourite_TV_show"].indexOf(element_reference) >= 0){
									return "about_me_category_update_favourite_things";
								} else if (["Phone_number","Email_address","Website","Facebook","Twitter","Snapchat","Instagram","GitHub","Dev_Community","Discord","LinkedIn","Youtube"].indexOf(element_reference) >= 0){
									return "about_me_category_update_socials";
								} else {
									return false;
								}
							}
							var save_state_enabled = {};
							var save_button_enable = function(button,element,enable){
								if (!(button in save_state_enabled)){
									save_state_enabled[button] = {};
								}
								save_state_enabled[button][element] = enable;
								var valid = false;
								for(var element_id in save_state_enabled[button]){
									if (save_state_enabled[button][element_id]){
										valid = true;
										break;
									}
								}
								if (valid){
									document.getElementById(button).classList.remove("disabled");
									document.getElementById(button).setAttribute("value","Save");
								} else {
									document.getElementById(button).classList.add("disabled");
								}
							}
							for (var about_topic in about_sections) {
								if ([0,2,3,4].indexOf(about_sections[about_topic]) >= 0){
									document.getElementById("about_me_input_" + about_topic.split(" ").join("_")).addEventListener("input",function(e){
										var about_me_element_id = e.target.getAttribute("id").replace("about_me_input_","");
										if (e.target.value == e.target.getAttribute("value")){
											save_button_enable(save_button_is(about_me_element_id),about_me_element_id,false);
										} else if (e.target.value.trim().length == 0 && e.target.getAttribute("value").trim().length != 0){
											save_button_enable(save_button_is(about_me_element_id),about_me_element_id,true);
											// enable button
										} else if (e.target.value.trim().length > 0){
											save_button_enable(save_button_is(about_me_element_id),about_me_element_id,true);
											// enable button
										} else {
											save_button_enable(save_button_is(about_me_element_id),about_me_element_id,false);
										}
									});
								} else if (about_sections[about_topic] == 1) {
									["input","onpropertychange"].forEach(event => {
										document.getElementById("about_me_textarea_" + about_topic.split(" ").join("_")).addEventListener(event,function(e){
											var about_me_element_id = e.target.getAttribute("id").replace("about_me_textarea_","");
											if (e.target.value == e.target.getAttribute("value")){
												save_button_enable(save_button_is(about_me_element_id),about_me_element_id,false);
											} else if (e.target.value.trim().length == 0 && e.target.getAttribute("value").trim().length != 0){
												save_button_enable(save_button_is(about_me_element_id),about_me_element_id,true);
												// enable button
											} else if (e.target.value.trim().length > 0){
												save_button_enable(save_button_is(about_me_element_id),about_me_element_id,true);
												// enable button
											} else {
												save_button_enable(save_button_is(about_me_element_id),about_me_element_id,false);
											}
										});
									});
								} else {
									document.getElementById("about_me_select_" + about_topic.split(" ").join("_")).addEventListener("change",function(e){
										var about_me_element_id = e.target.getAttribute("id").replace("about_me_select_","");
										var disabled = false;
										for(var i, j = 0; i = e.target.options[j]; j++) {
											if (j == 0){
												i.removeAttribute("disabled");
												i.innerText = "Hide this option?";
											}
											if(i.value.toString() == e.target.value.toString()) {
												if (i.getAttribute("selected") == "selected"){
													disabled = true;
													// disable button
												}
												break;
											}
										}
										save_button_enable(save_button_is(about_me_element_id),about_me_element_id,!disabled);
										if (e.target.value.toString() == "0") {
											e.target.options[0].setAttribute("disabled","disabled");
											e.target.options[0].innerText = "Not selected";
										}
									});
								}
							}
						}).catch(function(e){
							if (e.message == "Failed to get document because the client is offline."){
								e.message = "Failed to load your user settings because you're offline!";
							}
							var error_message = document.createElement("p");
							error_message.classList.add("side_margin");
							error_message.classList.add("margin_top");
							error_message.classList.add("center_text");
							error_message.innerText = e.message;
							document.getElementById("page_ref_settings_content").insertBefore(error_message,document.getElementById("page_ref_settings_content").firstChild);
							try {
								document.getElementById("settings_loading_statement").remove();
							} catch (e) {}
						});
					};
					document.getElementById("menu_settings").addEventListener("click",base_settings_page);
					document.getElementById("settings_ref_base").addEventListener("click",base_settings_page);
					document.getElementById("settings_ref_forbidden").addEventListener("click",function(){
						window.scroll(0,0);
						document.title = "The forbidden settings | Solent Computing Society";
						document.getElementById("page_ref_title").innerHTML = "The forbidden settings";
						document.getElementById("page_ref_menu_contents").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden").classList.remove("hide");
						document.getElementById("page_ref_settings_content_more").classList.add("hide");
						document.getElementById("page_ref_settings_content").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden_content").innerHTML = "<p class=\"side_margin margin_top center_text\"><a id=\"delete_account_ref_page\">Delete your account</a></p>";
						document.getElementById("delete_account_ref_page").addEventListener("click",function click(){
							document.getElementById("page_ref_title").innerHTML = "Account removal";
							document.getElementById("page_ref_settings_forbidden_content").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\"><b>WARNING:</b> By completing this action all personal non-form submitted user account data, including: email address, username, password, display name, and &quot;about me&quot; content; will be removed from this service. However, all user submitted content will remain, unless removed at a later point. This action cannot be undone, by completing this action you take all liability on your behalf from the removal of your account, and you will no longer be able interact with this service.</p><p class=\"side_margin margin_top center_text thin_disclaimer\"><b>NOTE:</b> to complete this action you must have been signed in recently.</p><p class=\"side_margin margin_top center_text\"><a id=\"delete_account_ref_page\">Delete your account</a></p>";
							document.getElementById("delete_account_ref_page").removeEventListener("click",click);
							document.getElementById("delete_account_ref_page").setAttribute("id","delete_account_confirm");
							document.getElementById("delete_account_confirm").addEventListener("click",async function(){
								document.getElementById("delete_account_confirm").classList.add("hide");
								document.getElementById("settings_ref_base_forbidden").classList.add("hide");
								var remove_user_id = firebase.auth().currentUser.uid;
								if (remove_user_id == ""){
									location.assign("/error/user_id_not_found");
								} else {
									overide_redirect = true;
									firebase.firestore().collection("users/members/id").doc(remove_user_id).set({
										delete: true
									}).then(async function() {
										await firebase.auth().currentUser.delete().then(async function(){
											document.getElementById("delete_account_confirm").outerHTML = "";
											document.getElementById("page_ref_settings_forbidden_content").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\">Your account has been deleted!</p><p class=\"center_text\"><a id=\"deletion_confirmation\">OK</a></p>";
											document.getElementById("deletion_confirmation").addEventListener("click",function(){
												firebase.auth().signOut();
												location.href = "/login";
											});
										}).catch(function(error){
											overide_redirect = false;
											if (error.code == "auth/requires-recent-login"){
												error.message = "This operation is sensitive and requires recent authentication. Log in again before retrying this request. Click <a id=\"logout\" title=\"Sign in\">here</a> to reauthenticate your account!";
											}
											document.getElementById("settings_ref_base_forbidden").classList.remove("hide");
											document.getElementById("page_ref_settings_forbidden").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\">Unable to delete your account due to an error which occurred. The reason this action could not be completed is due to the following error:</p><p class=\"center_text side_margin\"><b>[" + error.code + "]: </b>" + error.message + "</p>";
											if (error.code == "auth/requires-recent-login"){
												document.getElementById("logout").addEventListener("click",function(){
													firebase.auth().signOut();
													location.href = "/login";
												});
											}
										});
									}).catch(function(){
										return;
									});
								}
							});
						});
					});
					switch(settings_page_ref){
						case "menu":
							main_menu();
							break;
						case "about":
							about_page();
							break;
						default:
							base_settings_page();
							break;
					}
					if(setup == 1){
						document.getElementById("page_ref_menu_contents").classList.add("hide");
						document.getElementById("page_ref_settings_setup").classList.remove("hide");
						document.getElementById("page_ref_title").innerHTML = "Account setup";
						document.getElementById("menu_settings_ok").addEventListener("click",base_settings_page);
					} else {
						document.getElementById("page_ref_settings_setup").classList.add("hide");
					}
				}
				break;
			default:
				location.assign("/error/page_ref_undefined");
				return;
		}
	}
	if (page_ref == "d2a57dc1d883fd21fb9951699df71cc7"){
		host_page(page_ref,true);
	} else {
		host_page(page_ref,true);
	}
})();