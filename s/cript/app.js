"use script";
console.info("\nSolent\nComputing\nSociety_\n\n\nA message to the society members:\n\nThis website was made by the society members, for the society members. It is expected that some of you view this portion of the website, given the fact that you're all students studying a computing based subject; and to that extent, I congratulate you in using your technical initiative to learn more and to view the inner workings of this website. Have fun, engage with others and really do try to make the most of your time with all the members of this society, we're all your friends and are all looking out for one another.\n\nHave fun ;)\n\n\t- Bradley Marshall (@bradley499)\n\t  17/04/2020\n ");

(function(){
	if (typeof page_ref === "undefined"){
		location.assign("/error/page_ref");
		return;
	}
	var scripts = ["https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js","https://www.gstatic.com/firebasejs/7.10.0/firebase-firestore.js","https://www.gstatic.com/firebasejs/7.10.0/firebase-auth.js"];
	if (page_ref == "d2a57dc1d883fd21fb9951699df71cc7"){
		scripts.push("https://www.gstatic.com/firebasejs/7.14.0/firebase-database.js");
	}
	if (["a0e4c77eb59a7abc3aaf39af77d8617e","d2a57dc1d883fd21fb9951699df71cc7"].includes(page_ref )){
		scripts.push("https://www.gstatic.com/firebasejs/7.14.0/firebase-storage.js");
	}
	var load_remains = scripts.length;
	for (var i = 0; i < scripts.length; i++) {
		script = document.createElement("script");
		script.type = "text/javascript";
		script.src = scripts[i];
		script.id = "dls" + i;
		script.async = false
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
			document.getElementById("popup_content").innerHTML = content;
			document.getElementById("popup_dialog").classList.add("active");
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
		return await firebase.storage().ref().child(url).getDownloadURL().then(async function(url) {
			return url;
		}).catch(async function(error) {
			return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
		});
	};
	var about_sections = {
		"Subject": 0,
		"Year of study": ["Foundation", "1st", "2nd", "3rd", "4th", "Placement year", "Masters"],
		"Intro": 1,
		"Relationship status": ["Single", "In a relationship", "Open to offers", "😏", "🍆", "🍑", "Married", "It's complicated", "You be you", "Love struck", "Single and ready to mingle", "HMU", "Bored", "Waiting..."],
		"Favourite lecturer": 0,
		"Favourite food": 0,
		"Favourite drink": 0,
		"Favourite film": 0,
		"Favourite TV show": 0,
		"Phone number": 0,
		"Email address": 0,
		"Facebook": 0,
		"Website": 2,
		"Twitter": 0,
		"Instagram": 0,
		"Snapchat": 0,
		"Discord": 0,
		"Youtube": 0,
	};
	var host_page = async function(page,preload){
		page = page || false;
		preload = preload || false;
		if (!preload){
			firebase.initializeApp(firebaseConfig);
		}
		try {
			var verified = true;
			await firebase.auth().onAuthStateChanged(async function(user) {
				if (user) {
					if (!user.emailVerified && page_ref != "770cd2f0fc573368510bcf08355f9fbc"){
						verified = false;
						document.body.style.display = "none";
						location.assign("/error/auth_verification");
						return;
					}
				}
			});
			if (!verified) {
				return;
			}
		} catch(e) {}
		switch (page) {
			case "d56b699830e77ba53855679cb1d252da":
				if (preload){
					document.title = "Loading... | Solent Computing Society";
					document.addEventListener("DOMContentLoaded", function(event){
						document.getElementById("login_panel").classList.add("hide");
						document.getElementById("load_spinner").classList.remove("hide");
						document.getElementById("footer_content").classList.add("hide");
					});
				} else {
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
							document.getElementById("login_panel").classList.remove("hide");
							document.getElementById("load_spinner").classList.add("hide");
							document.getElementById("footer_content").classList.remove("hide");
							document.getElementById("login_submit").addEventListener("click",function(e){
								e.preventDefault();
								document.getElementById("login_panel_submit").classList.add("hide");
								document.getElementById("load_spinner").classList.remove("hide");
								document.getElementById("footer_content").classList.add("hide");
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
										document.getElementById("load_spinner").classList.add("hide");
										document.getElementById("footer_content").classList.remove("hide");
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
								document.getElementById("footer_content").classList.add("hide");
								document.getElementById("login_panel").classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								document.getElementById("load_spinner").classList.remove("hide");
								window.location.href = "signup";
							});
							document.getElementById("password_forgotten_link").addEventListener("click",function(){
								overide_redirect = true;
								document.getElementById("footer_content").classList.add("hide");
								document.getElementById("login_panel").classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								document.getElementById("load_spinner").classList.remove("hide");
								window.location.href = "password";
							});
						}
					});
				}
				break;
			case "7d2abf2d0fa7c3a0c13236910f30bc43":
				if (preload){
					document.addEventListener("DOMContentLoaded", function(event){
						document.getElementById("login_panel").classList.add("hide");
						document.getElementById("load_spinner").classList.remove("hide");
					});
				} else {
					var overide_redirect = false;
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							document.getElementById("footer_content").classList.add("hide");
							if (!overide_redirect){
								location.assign("app/start.html");
							}
						} else {
							document.getElementById("login_panel").classList.remove("hide");
							document.getElementById("load_spinner").classList.add("hide");
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
										document.getElementById("load_spinner").classList.remove("hide");
										signup_email.disabled = true;
										signup_password.disabled = true;
										credentials.push(signup_email.value);
										credentials.push(signup_password.value);
										document.getElementById("footer_content").classList.add("hide");
										overide_redirect = true;
										await firebase.auth().createUserWithEmailAndPassword(credentials[0], credentials[1]).catch(function(error) {
											error_panel.innerHTML = error.message;
											error_panel.classList.remove("hide");
											document.getElementById("login_panel_submit").classList.remove("hide");
											document.getElementById("load_spinner").classList.add("hide");
											signup_email.disabled = false;
											signup_password.disabled = false;
											overide_redirect = false;
										});
										if (overide_redirect){
											document.getElementById("footer_content").classList.add("hide");
											window.location.href = "/error/auth_verification";
										} else {
											document.getElementById("footer_content").classList.remove("hide");
										}
									}
								} catch (e) {
									window.location.href = "/error/unexpected";
								}
							});
							document.getElementById("user_registration_action").addEventListener("click",function(){
								if (!overide_redirect){
									overide_redirect = true;
									document.getElementById("footer_content").classList.add("hide");
									document.getElementById("login_panel").classList.add("hide");
									document.getElementById("login_panel_submit").classList.add("hide");
									document.getElementById("load_spinner").classList.remove("hide");
									window.location.href = "login";
								}
							});
						}
					});
				}
				break;
			case "5f4dcc3b5aa765d61d8327deb882cf99":
				if (preload){
					document.title = "Loading... | Solent Computing Society";
					document.addEventListener("DOMContentLoaded", function(event){
						document.getElementById("login_panel").classList.add("hide");
						document.getElementById("load_spinner").classList.remove("hide");
					});
				} else {
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							document.getElementById("footer_content").classList.add("hide");
							location.assign("app/start.html");
						} else {
							document.title = "Password reset | Solent Computing Society";
							document.getElementById("login_panel").classList.remove("hide");
							document.getElementById("load_spinner").classList.add("hide");
							document.getElementById("login_submit").addEventListener("click",async function(e){
								e.preventDefault();
								var credentials = [];
								try {
									var login_email = document.getElementById("login_email");
									var error_panel = document.getElementById("login_panel_error");
									document.getElementById("login_panel_submit").classList.add("hide");
									document.getElementById("load_spinner").classList.remove("hide");
									login_email.disabled = true;
									credentials.push(login_email.value);
									document.getElementById("footer_content").classList.add("hide");
									await firebase.auth().sendPasswordResetEmail(credentials[0]).then(function(){
										error_panel.innerHTML = "Please check \"" + credentials[0] + "\" for a password reset email.";
										document.getElementById("load_spinner").classList.add("hide");
										e.target.classList.add("hide");
										login_email.classList.add("hide");
									}).catch(function(error) {
										error_panel.innerHTML = error.message;
										document.getElementById("load_spinner").classList.add("hide");
										login_email.disabled = false;
									});
									document.getElementById("login_panel_submit").classList.remove("hide");
									document.getElementById("footer_content").classList.remove("hide");
									error_panel.classList.remove("hide");
								} catch (e) {
									window.location.href = "/error/unexpected";
								}
							});
							document.getElementById("user_registration_action").addEventListener("click",function(){
								document.getElementById("footer_content").classList.add("hide");
								document.getElementById("login_panel").classList.add("hide");
								document.getElementById("login_panel_submit").classList.add("hide");
								document.getElementById("load_spinner").classList.remove("hide");
								window.location.href = "login";
							});
						}
					});
				}
				break;
			case "770cd2f0fc573368510bcf08355f9fbc":
				if (!preload){
					var overide_redirect = false;
					firebase.auth().onAuthStateChanged(function(user) {
						if (user){
							if (user.emailVerified){
								if (!overide_redirect){
									location.assign("/app/start.html");
								}
							} else {
								document.getElementById("email_address").innerHTML = user.email;
								document.getElementById("login_panel").classList.remove("hide");
								document.getElementById("load_spinner").classList.add("hide");
								document.getElementById("login_submit").addEventListener("click",async function(e){
									e.preventDefault();
									e.target.classList.add("hide");
									document.getElementById("load_spinner").classList.remove("hide");
									await firebase.auth().currentUser.sendEmailVerification().then(function() {
										document.getElementById("login_panel_error_content").innerHTML = "Please check your email for the verification email...";
									}).catch(function(error){
										document.getElementById("login_panel_error_content").innerHTML = "<br><b>[" + error.code + "]:</b> " + error.message;
									});
									e.target.classList.remove("hide");
									document.getElementById("load_spinner").classList.add("hide");
								});
							}
						} else {
							location.assign("/login");
						}
						document.getElementById("cancel_verification").addEventListener("click",function(){
							overide_redirect = true;
							firebase.auth().signOut();
						});
					});

				}
				break;
			case "d2a57dc1d883fd21fb9951699df71cc7":
				if (preload){
					return;
				} else {
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							var sub_pages = ["nav_loc_messages","nav_loc_events","nav_loc_members","nav_loc_pub"];
							var sub_page = sub_pages[0];
							var contents = {posts:{},users:[],events:true,pub:"tbc"};
							sub_page_link_generation = 0;
							var posts_base_load = false;
							document.getElementById("s_banner").addEventListener("click",function(){
								if (document.body.getBoundingClientRect().top >= -3){
									location.href = "menu.html";
								} else {
									var top = function() {
										var position = document.body.scrollTop || document.documentElement.scrollTop;
										if (position) {
											window.scrollBy(0, -Math.max(1, Math.floor(position / 8)));
											scrollAnimation = setTimeout(top, 30);
										} else {
											clearTimeout(top);
										}
									}
									top();
								}
							});
							sub_pages.forEach(function(nav_id){
								if (nav_id != "nav_loc_member_about"){
									var sub_page_link_ref = sub_pages[sub_page_link_generation];
									document.getElementById(nav_id).addEventListener("click",function(e){
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
									document.getElementById(nav_id).classList.add("disabled");
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
							var update_users = () => new Promise(async function(resolve){
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
								});
							});
							var update_pub = () => new Promise(function(resolve){
								firebase.firestore().collection("places").doc("pubs").get().then(function(pub){
									if (pub.exists){
										pub = pub.data();
										pub.date = pub.date.toDate();
										pub.date = pub.date.setHours(24,0,0,0);
										var pub_id = pub.this_week;
										if (pub.date > new Date()){
											firebase.firestore().collection("places/pubs/listed").doc(pub.this_week).get().then(function(pub_data){
												if (pub_data.exists){
													pub.this_week = pub_data.data();
													pub.this_week.id = pub_id;
													pub.this_week.geo = [pub.this_week.geo.latitude,pub.this_week.geo.longitude];
													pub.this_week.error = false;
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
								});
							});
							var update_events = () => {
								var url = "https://sheets.googleapis.com/v4/spreadsheets/1sIyjKOdteE08ElqXiNkWJC1KLM-TbrGCD0YmftGL1EE/values/list?key=AIzaSyBdg7VmX9uP7iZDUq1QNlJkHVLIOqldzq4";
								try {
									var request = new XMLHttpRequest();
									request.open('GET', url, true);
									request.onreadystatechange = function() {
										if (this.status >= 400) {
											contents.events = false;
											return false;
										} else if (this.readyState === 4) {
											var rows = JSON.parse(this.responseText)["values"];
											rows.shift(0);
											var display_rows = {}
											for (var i = 0; i < rows.length; i++) {
												var date = rows[i][3].split("/") || rows[i][3].split("-") || rows[i][3].split(".");
												date = new Date(date[2],date[1]-1,date[0]) || 0;
												var time = rows[i][4].split(":")
												while (time.length < 3){
													time.push("0");
												}
												time = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]) || 0;
												if (typeof display_rows[date] === "undefined"){
													display_rows[date] = [];
												}
												if (typeof display_rows[date][time] === "undefined"){
													display_rows[date][time] = [];
												}
												display_rows[date][time].push(rows[i]);
											}
											contents.events = display_rows;
										}
									};
									request.onerror = function () {
										contents.events = false;
									}
									request.send();
								} catch(err) {}
							};
							var refresh = async function(now){
								if (now !== true){
									now = false;
									try {
										document.getElementById("message_refresh").classList.add("loading");
									}catch(e){}
								}
								setTimeout(async function () {
									await load_page("nav_loc_messages","posts_host_container");
									try {
										document.getElementById("message_refresh").classList.remove("loading");
									}catch(e){}
								},{true:0,false:600}[now]);
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
							var current_page = null;
							var pubs_data = [];
							var user_view_about = -1;
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
								switch (page_id){
									case "nav_loc_messages":
										try {
											if (sub_ref == "posts_host_container"){
												out.html = "<div>";
											} else {
												out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><div id=\"new_post_container\"><div id=\"new_post_content_container\"><textarea id=\"new_post_content\" placeholder=\"What's the message?\"></textarea></div><div id=\"error_container\" class=\"red_error_bold\"></div><div id=\"new_post_actions\"><div id=\"new_post_actions_remaining_container\" class=\"hide\">Remaining: <span id=\"new_post_actions_remaining\"></span></div><div id=\"new_post_actions_post_container\"><button id=\"new_post_actions_post_submit\">Post</button></div></div></div><p class=\"center_text\"><a title=\"click to refresh\" id=\"message_refresh\"></a></p><div id=\"posts_host_container\">";
												add.click.push(["message_refresh",refresh]);
												add.click.push(["new_post_actions_post_submit",post]);
												add.typing.push(["new_post_content",post_validate]);
												add.call_back.push(post_validate);
												add.call_back.push(refresh);
											}
											if (Object.keys(contents.posts).length == 0){
												if (!posts_base_load){
													out.html = out.html + "<p class=\"center_text\" id=\"post_end_reason\">Still loading...</p></div></div>";
													break;
												}
												out.html = out.html + "<p class=\"center_text\" id=\"post_end_reason\">No posts have been loaded" + {true:"",false:", because you are currently offline"}[navigator.onLine] + "!</p></div></div>";
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
													out.html = out.html + "<div class=\"post\"><table><tr><td valign=\"top\" width=\"58px\"><span id=\"" + post_content.id + "_p-img\" class=\"post_img_s user_reference_link loading\" uid=\"" + user_match.id + "\" title=\"View " + user_match.name + "'s profile\"></span></td><td valign=\"top\">";
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
															out.html = out.html + "<p>" + post_contents[iii] + "</p>";
														} else {
															out.html = out.html + "<p class=\"no_bottom\">" + post_contents[iii] + "</p>";
														}
													}
													out.html = out.html + "</td></tr></table><div><div class=\"post_by\"><span id=\"" + post_content.id + "_uid_post_ref\" uid=\"" + user_match.id + "\" class=\"user_reference_link\" title=\"View " + user_match.name + "'s profile\">" + user_match.name + "</span></div><div class=\"post_time\" title=\"Posted at: " + post_content.time.join(" - ") + "\"><span>at: </span>" + post_content.time[0] + {true:" - " + post_content.time[1],false:""}[post_content.time[1] != new Date().toLocaleDateString(window.navigator.userLanguage || window.navigator.language)] + "</div></div></div>";
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
											out.html = out.html + "<div class=\"center_text\" id=\"post_end\"></div></div></div>";
										} catch (e) {}
										break;
									case "nav_loc_events":
										out.html = "<div class=\"side_margin center_text\">";
										if (contents.events === true){
											out.html = out.html + "<p class=\"center_text\">Still loading events...</p><p class=\"center_text\"><a title=\"Try again?\" id=\"events_retry_action\">Retry</a></p>";
											add.click.push(["events_retry_action",function(){
												document.getElementById("nav_loc_events").click();
											}]);
										} else {
											out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin center_text\">";
											const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
											const ordinal = ["th", "st", "nd", "rd"];
											var events_added = false;
											for (let day in contents.events) {
												try {
													let show_date = new Date(day);
													if ((show_date instanceof Date && !isNaN(show_date)) && show_date >= new Date()){
														if (contents.events[day].length > 0){
															show_date = [show_date.getDate(),show_date.getMonth(),show_date.getFullYear(),]
															show_date[3] = show_date[0] % 100;
															out.html = out.html + "<h4 class=\"event_date\">" + show_date[0] + (ordinal[(show_date[3] - 20) % 10] || ordinal[show_date[1]] || ordinal[0]) + " of " + months[show_date[1]] + ", " + show_date[2] + ":</h4>";
															for (let time in contents.events[day]){
																for (var i = 0; i < contents.events[day][time].length; i++){
																	out.html = out.html + "<div><h5 class=\"event_name\">" + contents.events[day][time][i][0];
																	try {
																		let end_date = contents.events[day][time][i][6].split("/") || contents.events[day][time][i][6].split("-") || contents.events[day][time][i][6].split(".");
																		end_date = new Date(end_date[2],end_date[1]-1,end_date[0]) || -1;
																		shown_end = false;
																		if (contents.events[day][time][i][4].length > 0){
																			out.html = out.html + " (" + contents.events[day][time][i][4];
																			shown_end = true;
																		}
																		if (contents.events[day][time][i][5].length > 0){
																			if (shown_end) {
																				out.html = out.html + " - ";
																			} else {
																				out.html = out.html + " (until ";
																			}
																			out.html = out.html + contents.events[day][time][i][5]
																			shown_end = true;
																		}
																		if(end_date.getTime() > new Date(day).getTime()){
																			if (shown_end) {
																				out.html = out.html + " ";
																			} else {
																				out.html = out.html + " (";
																			}
																			out.html = out.html + end_date.getDate() + "/" + end_date.getMonth() + "/" + end_date.getFullYear() + ")";
																		} else if (shown_end){
																			out.html = out.html + ")";
																		}
																	} catch (e) {}
																	events_added = true;
																	out.html = out.html + "</h5><p class=\"no_top small_bottom\">" + contents.events[day][time][i][7].replace("\n","</p><p>").replace("<p></p>","") + "</p>";
																	if (contents.events[day][time][i][2].length > 0){
																		out.html = out.html + "<p class=\"no_top small_bottom small\">Location: " + contents.events[day][time][i][2] + "</p>";
																	}
																	if (contents.events[day][time][i][1].length > 0){
																		out.html = out.html + "<p class=\"no_top small_bottom small\">Find out more: <a href=\"" + contents.events[day][time][i][1] + "\" title=\"Visit " + contents.events[day][time][i][1] + " for more information\" target=\"blank\" class=\"out_link\">" + contents.events[day][time][i][1] + "</a></p>";
																	}
																	out.html = out.html + "</div>";
																}
															}
														}
													} else {
														continue;
													}
												} catch (e) {}
											}
											if (!events_added) {
												out.html = out.html + "<p class=\"center_text\">Sadly, there are no upcoming events.</p>";
											}
										}
										out.html = out.html + "</div>";
										break;
									case "nav_loc_members":
										out.html = "<div id=\"redundant_padding\"></div>";
										for (var i = 0; i < contents.users[0].length; i++) {
											out.html = out.html + "<div class=\"members_list\" id=\"view_prof_" + contents.users[0][i].id + "\" uid=\"" + contents.users[0][i].id + "\" title=\"View " + contents.users[0][i].name + "'s profile\"><table><tr><td width=\"50px\" valign=\"middle\"><img class=\"members_list_img_s loading\" id=\"" + contents.users[0][i].id + "_r-img\"></td><td valign=\"middle\"><span class=\"members_list_name\">" + contents.users[0][i].name + "</span></td></tr></table></div>";
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
										out.html = "<div id=\"redundant_padding\"></div>";
										var match = false;
										for (var i = 0; i < contents.users[0].length; i++) {
											if (contents.users[0][i].id == sub_ref){
												out.html += "<div id=\"about_me_container\" class=\"loading\" uid=\"" + sub_ref + "\"><div id=\"about_me_side_ref\"><img id=\"about_me_prof_img-" + sub_ref + "\" class=\"about_me_prof_img loading\"><h1 class=\"small_bottom\">" + contents.users[0][i].name + "</h1></div><div id=\"about_me_main_ref\"><p id=\"about_me_loading\"></p></div></div>";
												var loaded = async function(){
													var uid_ref = user_view_about;
													for (let i = 0; i < contents.users[0].length; i++) {
														if (contents.users[0][i].id == uid_ref){
															if (typeof(contents.users[0][i].photo_large) === "undefined"){
																try {
																	contents.users[0][i].photo_large = await storage_download("profile/"+uid_ref);
																} catch (e) {
																	alert(e);
																	document.getElementById("about_me_loading").classList.add("error");
																}
															}
															await firebase.firestore().collection("users/members/id/" + uid_ref + "/about/").get().then(async function(about){
																about_docs = about.docs.map( doc => {
																	var doc_data = doc.data();
																	doc_data.id = doc.id;
																	return doc_data;
																});
																var about = {};
																about_docs.forEach(doc => {
																	about[doc.id] = doc.is;
																});
																var about_me = {"Subject":about["subject"]||"","Year of study":about["year_of_study"]||0,"Intro":about["intro"]||"","Relationship status":about["relationship_status"]||0,"Favourite lecturer": about["favourite_lecturer"]||"","Favourite food": about["favourite_food"]||"","Favourite drink": about["favourite_drink"]||"","Favourite film": about["favourite_film"]||"","Favourite TV show": about["favourite_tv_show"]||"","Facebook":about["facebook"]||"","Phone number":about["phone_number"]||"","Email":about["email_address"]||"","Website":about["website"]||"","Twitter":about["twitter"]||"","Instagram":about["instagram"]||"","Snapchat":about["snapchat"]||"","Discord":about["discord"]||"","Youtube":about["youtube"]||""}
																try {
																	if (document.getElementById("about_me_container").getAttribute("uid") == uid_ref && document.getElementById("about_me_container").getAttribute("outputted") != "yes"){
																		document.getElementById("about_me_container").setAttribute("outputted","yes");
																		await img_blob(contents.users[0][i].photo_large,"about_me_prof_img-"+user_view_about);
																		var build_socials = "";
																		if ((about_me["Facebook"] + about_me["Twitter"] + about_me["Discord"] + about_me["Instagram"] + about_me["Snapchat"] + about_me["Youtube"] + about_me["Phone number"] + about_me["Email"] + about_me["Website"]).length > 0){
																			build_socials = "<div class=\"social_icon_links\">";
																			["Phone number","Email","Facebook","Twitter","Instagram","Snapchat","Discord","Youtube","Website"].forEach(social => {
																				var ref_icon = social.toLowerCase().replace(" ","_");
																				if (about_me[social].length > 0){
																					var call_tip = contents.users[0][i].name;
																					if (ref_icon == "phone_number"){
																						call_tip = "Call " + call_tip;
																					} else if (ref_icon == "website") {
																						call_tip = "View " + call_tip + "'s website";
																					} else if (ref_icon == "snapchat"){
																						call_tip = "Add " + call_tip + " on " + social;
																					} else {
																						call_tip = "View " + call_tip + " on " + social;
																					}
																					build_socials += "<div class=\"social_icon_link_container\"><a target=\"_blank\" title=\"" + call_tip + "\"";
																					if (ref_icon != "discord"){
																						build_socials += "href=\"";
																					} else {
																						build_socials += "id=\"discord_link-" + user_view_about + "\" prof_tag=\""
																					}
																					if (ref_icon == "phone_number"){
																						build_socials += "tel:";
																					} else if (ref_icon == "email"){
																						build_socials += "mailto:";
																					} else if (ref_icon == "facebook"){
																						build_socials += "https://www.facebook.com/";
																					} else if (ref_icon == "twitter"){
																						build_socials += "https://twitter.com/";
																					} else if (ref_icon == "instagram"){
																						build_socials += "https://www.instagram.com/";
																					} else if (ref_icon == "snapchat"){
																						build_socials += "https://snapchat.com/add/";
																					}
																					build_socials += about_me[social] + "\"><div id=\"social_icon_" + ref_icon + "\"";
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
																		about_panel_out += "<div class=\"side_margin\">" + build_socials + "<p class=\"center_text small_bottom\">" + about_me["Intro"] + "</p>";
																		if (about_me["Subject"].trim().length > 0){
																			about_panel_out += "<div><h3 class=\"center_text small_bottom\">Studying:</h3><p class=\"center_text\">" + about_me["Subject"];
																			if (about_me["Year of study"] > 0){
																				about_panel_out += " - " + about_sections["Year of study"][about_me["Year of study"] - 1];
																				if (about_sections["Year of study"] != 6){
																					about_panel_out += " year";
																				}
																			}																			
																			about_panel_out += "</p>";
																		} else if (about_me["Year of study"] > 0){
																			about_panel_out += " - " + about_sections["Year of study"][about_me["Year of study"] - 1];
																			about_panel_out += "<div><h3 class=\"center_text small_bottom\">Year of study:</h3><p class=\"center_text\">" + about_me["year_of_study"][about_sections["Year of study"] - 1];
																			if (about_sections["Year of study"] != 6){
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
																			about_panel_out += "<h3>Favourite lecturer:</h3><p>" + about_me["Favourite lecturer"] + "</p>";

																		}
																		if (about_me["Favourite food"].trim().length > 0) {
																			about_panel_out += "<h3>Favourite food:</h3><p>" + about_me["Favourite food"] + "</p>";

																		}
																		if (about_me["Favourite drink"].trim().length > 0) {
																			about_panel_out += "<h3>Favourite drink:</h3><p>" + about_me["Favourite drink"] + "</p>";

																		}
																		if (about_me["Favourite film"].trim().length > 0) {
																			about_panel_out += "<h3>Favourite film:</h3><p>" + about_me["Favourite film"] + "</p>";

																		}
																		if (about_me["Favourite TV show"].trim().length > 0) {
																			about_panel_out += "<h3>Favourite TV show:</h3><p>" + about_me["Favourite TV show"] + "</p>";

																		}
																		if (about_panel_out != ""){
																			about_panel_out = "<h2 class=\"no_top\" id=\"about_me_header_about\">About:</h2>" + about_panel_out;
																		} else {
																			about_panel_out = "<div class=\"desktop_only\"><br><br><br></div><p class=\"no_top side_margin center_text\">Nothing else was found...<br><br>It appears that " + contents.users[0][i].name + " wishes to have a sense of mystery about them.</p>"
																		}
																		document.getElementById("about_me_main_ref").innerHTML = about_panel_out;
																	}
																} catch (e) {}
															}).catch(function(error){
																if (document.getElementById("about_me_container").getAttribute("uid") == uid_ref){
																	document.getElementById("about_me_loading").classList.add("error");
																}
															});
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
									case "nav_loc_pub":
										var is_president = contents.users[1].president == firebase.auth().currentUser.uid;
										out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><p class=\"center_text\">";
										if (is_president) {
											if (pubs_data.length == 0){
												document.getElementById({true:"page_render",false:sub_ref}[sub_ref == false]).innerHTML = "<div id=\"redundant_padding\"></div><div class=\"side_margin center_text\"><p class=\"center_text\">Loading...</p></div>";
												await firebase.firestore().collection("places/pubs/listed").get().then(async function(snapshot){
													pubs_data = snapshot.docs.map( doc => {
														var doc_data = doc.data();
														doc_data.id = doc.id;
														return doc_data;
													});	
												}).catch(function(error){
													alert("Error:\n" + error.message);
												});
											}
											out.html = out.html + "Select pub:</p><div class=\"center_text\"><select id=\"pub_selection\">";
											for (var i = 0; i < pubs_data.length; i++) {
												out.html = out.html + "<option value=\"" + pubs_data[i].id + "\" id=\"" + pubs_data[i].id + "\"" + {true:" selected=\"selected\"",false:""}[contents.pub.id == pubs_data[i].id] + ">" + pubs_data[i].name + "</option>"
											}
											out.html = out.html + "</select> or <a title=\"Randomly select a pub\" id=\"pub_selection_randomiser\">Randomise</a>.</div>";
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
													alert("Error:\n" + error.message);
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
												out.html = out.html + "</div>";
												break;
											}
											out.html = out.html + "<p class=\"center_text\">This week's pub hasn't been published yet...</p></div>";
										} else if (contents.pub.error == true){
											out.html = out.html + "<p class=\"center_text\">Unable to load this week's pub!</p></div>";
										} else {
											out.html = out.html + "<p class=\"center_text\">This week we will be going to:</p><h2 class=\"center_text\">" + contents.pub.name + "</h2><p class=\"center_text\">" + contents.pub.address + "</p><p class=\"center_text\">" + contents.pub.postcode + "</p></div><iframe src=\"https://maps.google.com/maps?q=" + contents.pub.geo[0] + "," + contents.pub.geo[1] + "&z=18&output=embed\" id=\"pub_map\" frameborder=\"0\" style=\"border:0;background-image:url(\'" + img_blob("/app/img/map_loading.gif",false,true) + "\')\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";
										}
										break;
								}
								try {
									function hash(s) {
										let h;
										for(let i = 0; i < s.length; i++) 
											h = Math.imul(31, h) + s.charCodeAt(i) | 0;
										return h;
									}
									if (current_page != hash(out.html)){
										try {
											document.getElementById({true:"page_render",false:sub_ref}[sub_ref == false]).innerHTML = out.html;
										} catch(e) {}
									}
									current_page = hash(out.html);
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
							var load = ["/app/img/map_loading.gif"].forEach(function(img){
								img_blob(img);
							});
							setTimeout(function () {
								update_users().then(function(e){
									var user_set_up = -1;
									for (var i = contents.users[0].length - 1; i >= 0; i--) {
										if (contents.users[0][i].id == firebase.auth().currentUser.uid) {
											user_set_up = i;
											break;
										}
									}
									if (user_set_up == -1 || contents.users[0][i].name == ""){
										location.assign("menu?setup=true");
									}
									update_pub().then(async function(e){
										update_events();
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
										});
										var valid_setup = true;
										sub_pages.forEach(function(nav_id){
											if (nav_id != "nav_loc_member_about")
											{
												document.getElementById(nav_id).classList.remove("disabled");
											}
										});
										load_page();
									});
								});
							}, 100);
							setInterval(function(){ 
								refresh(true);
							},3000);
						} else {
							location.assign("/login");
						}
					});
				}
				break;
			case "a0e4c77eb59a7abc3aaf39af77d8617e":
				var base_settings_page = async function(){
					document.title = "Settings | Solent Computing Society";
					document.getElementById("page_ref_menu_contents").classList.add("hide");
					document.getElementById("page_ref_settings_content_more").classList.add("hide");
					document.getElementById("page_ref_settings_content").classList.remove("hide");
					document.getElementById("page_ref_settings_setup").classList.add("hide");
					document.getElementById("page_ref_settings_forbidden").classList.add("hide");
					document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\" id=\"settings_loading_statement\"></p><div id=\"setting_ref_content\"></div><p class=\"side_margin margin_top center_text\"><a title=\"Go to more settings\" id=\"settings_ref_more\">More settings</a></p><p class=\"side_margin margin_top center_text\"><a title=\"Back to menu settings\" id=\"settings_ref_back\">Go Back To Menu</a></p>";
					document.getElementById("page_ref_title").innerHTML = "Settings";
					firebase.firestore().collection("users/members/id").doc(firebase.auth().currentUser.uid).get().then(async function(user){
						if(!user.exists){
							user.name = "";
							user.photo = "";
						} else {
							user = user.data();
							user.name = user.name || "";
							user.photo = user.photo || "";
						}
						var content = "<div id=\"settings_ref_content_prof_picture_container\"><img id=\"settings_ref_content_prof_picture\"><p class=\"center_text no_margin\" id=\"settings_ref_content_prof_picture_actions_container\"><input type=\"file\" class=\"hide\" id=\"settings_ref_content_prof_picture_change\" accept=\"image/x-png,image/jpeg,image/jpg\"><a id=\"settings_ref_content_prof_picture_change_link\">Change profile picture</a><a id=\"settings_ref_content_prof_picture_remove_link\">Remove picture</a></p></div><div class=\"input_container\"><input type=\"text\" placeholder=\"Your name\" value=\"" + user.name + "\" id=\"settings_ref_content_prof_name_value\" autocomplete=\"name\"/><p class=\"no_margin center_text\"><a id=\"settings_ref_content_prof_name_change_link\">Update your display name</a></p></div>";
						document.getElementById("settings_loading_statement").outerHTML = "";
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
						document.getElementById("settings_ref_back").addEventListener("click",function(){
							document.title = "Menu | Solent Computing Society";
							document.getElementById("page_ref_menu_contents").classList.remove("hide");
							document.getElementById("page_ref_settings_content").classList.add("hide");
							document.getElementById("page_ref_settings_forbidden").classList.add("hide");
							document.getElementById("page_ref_title").innerHTML = "Menu";
						});
					});
					["settings_ref_back","settings_ref_base_forbidden"].forEach(function(e){
						document.getElementById(e).addEventListener("click",function(){
							document.title = "Menu | Solent Computing Society";
							document.getElementById("page_ref_menu_contents").classList.remove("hide");
							document.getElementById("page_ref_settings_content").classList.add("hide");
							document.getElementById("page_ref_settings_forbidden").classList.add("hide");
							document.getElementById("page_ref_title").innerHTML = "Menu";
						});
					});
				};

				var about_page = async function(){
					document.title = "About me | Solent Computing Society";
					document.getElementById("page_ref_menu_contents").classList.add("hide");
					document.getElementById("page_ref_settings_content_more").classList.add("hide");
					document.getElementById("page_ref_settings_content").classList.remove("hide");
					document.getElementById("page_ref_settings_setup").classList.add("hide");
					document.getElementById("page_ref_settings_forbidden").classList.add("hide");
					document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\" id=\"settings_loading_statement\"></p><div id=\"setting_ref_content\"></div><p class=\"side_margin margin_top center_text\"><a title=\"Back to menu settings\" id=\"settings_ref_back\">Go Back To Menu</a></p><br>";
					document.getElementById("page_ref_title").innerHTML = "About me";
					document.getElementById("settings_ref_back").addEventListener("click",function(){
						document.title = "Menu | Solent Computing Society";
						document.getElementById("page_ref_menu_contents").classList.remove("hide");
						document.getElementById("page_ref_settings_content").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden").classList.add("hide");
						document.getElementById("page_ref_title").innerHTML = "Menu";
					});
					firebase.firestore().collection("users/members/id/" + firebase.auth().currentUser.uid + "/about/").get().then(async function(about){
						about_docs = about.docs.map( doc => {
							var doc_data = doc.data();
							doc_data.id = doc.id;
							return doc_data;
						});
						var about = {};
						about_docs.forEach(doc => {
							about[doc.id] = doc.is;
						});
						var about_me = {"Subject":about["subject"]||"","Year of study":about["year_of_study"]||"","Intro":about["intro"]||"","Relationship status":about["relationship_status"]||"","Favourite lecturer": about["favourite_lecturer"]||"","Favourite food": about["favourite_food"]||"","Favourite drink": about["favourite_drink"]||"","Favourite film": about["favourite_film"]||"","Favourite TV show": about["favourite_tv_show"]||"","Facebook":about["facebook"]||"","Phone number":about["phone_number"]||"","Email address":about["email_address"]||"","Website":about["website"]||"","Twitter":about["twitter"]||"","Instagram":about["instagram"]||"","Snapchat":about["snapchat"]||"","Youtube":about["youtube"]||"","Discord":about["discord"]||""}
						
						document.getElementById("settings_loading_statement").remove();
						document.getElementById("setting_ref_content").innerHTML = "<p class=\"side_margin margin_top center_text\">This information will be publicly viewable to all members of the Solect Computing Society!</p><div class=\"members_list about_me_edit margin_top\"><table id=\"about_me_container_host\"><tbody id=\"about_me_container\"></tbody></table><br></div>";
						var about_me_container_content = "";
						for (var about_topic in about_sections) {
							about_me_container_content += "<tr><td><table><tbody><tr><td class=\"about_me_header\"><h4 class=\"no_bottom\">" + about_topic + ":</h4></td><td class=\"about_me_subject_removal_container\"><span class=\"about_me_removal";
							if (typeof about_me[about_topic] === "undefined"){
								about_me_container_content += " disabled";
							} else if (about_me[about_topic].length == 0) {
								about_me_container_content += " disabled";
							}
							about_me_container_content += "\" id=\"about_me_removal_" + about_topic.split(" ").join("_") + "\" title=\"Delete " + about_topic.toLowerCase() + "\"></span></td></tr></tbody></table></td></tr><tr><td><div class=\"input_container_about\">";
							if ([0,2].indexOf(about_sections[about_topic]) >= 0) {
								about_me_container_content += "<input type=\"text\" id=\"about_me_input_" + about_topic.split(" ").join("_") + "\" value=\"" + (about_me[about_topic] || "") +"\" maxlength=\"1024\" />";
							} else if (about_sections[about_topic] == 1) {
								about_me_container_content += "<textarea type=\"text\" id=\"about_me_textarea_" + about_topic.split(" ").join("_") + "\" value=\"" + (about_me[about_topic]||"") + "\" maxlength=\"1024\" />" + (about_me[about_topic]||"") + "</textarea>";
							} else {
								about_me_container_content += "<select id=\"about_me_select_" + about_topic.split(" ").join("_") + "\">";
								var about_section = about_sections[about_topic];
								about_section.unshift("");
								for (let i = 0; i < about_section.length; i++) {
									var value = about_section[i];
									about_me_container_content += "<option";
									if (i == about_me[about_topic] || (value == "" && typeof about_me[about_topic] === "undefined")){
										about_me_container_content += " selected=\"selected\"";
									}
									if (value.length == 0) {
										about_me_container_content += " disabled";
										value = "Not selected";
									}
									about_me_container_content += " value=\"" + i + "\">" + value + "</option>";
								}
								about_me_container_content += "</select>";
							}
							about_me_container_content += "</div></td></tr>";
						}
						document.getElementById("about_me_container").innerHTML = about_me_container_content + "<br>";
						for (var about_topic in about_sections) {
							document.getElementById("about_me_removal_"+about_topic.split(" ").join("_")).addEventListener("click",function(e){
								var about_me_element_id = e.target.getAttribute("id").replace("about_me_removal_","");
								var invalid = true;
								var iteration = 0;
								["input","select","textarea"].forEach(element => {
									iteration += 1;
									element = "about_me_" + element + "_" + about_me_element_id;
									if (document.getElementById(element) != null)			
									{
										invalid = false;
										document.getElementById(element).setAttribute("disabled","disabled");
										var iteration_rel = iteration;
										var value = document.getElementById(element).value;
										if (e.target.classList.length == 1 && e.target.classList.item(0) == "about_me_removal") {
											value = "";
										}
										var max_length = 1024;
										if (about_me_element_id == "Facebook"){
											max_length = 50;
										} else if (about_me_element_id == "Twitter"){
											max_length = 15;
										} else if (about_me_element_id == "Instagram"){
											max_length = 30;
										} else if (about_me_element_id == "Snapchat"){
											max_length = 15;
										} else if (about_me_element_id == "Discord"){
											max_length = 32;
										} else if (about_me_element_id == "Email address") {
											max_length = 320;
										} else if (about_me_element_id == "Email address") {
											max_length = 15;
										}
										if (value.length > max_length){
											alert("Unable to update your " + about_me_element_id.split("_").join(" "),"Max length is " + max_length + " characters - you can't get around this!");
											document.getElementById(element).removeAttribute("disabled");
											return;
										}
										if (value.trim().length > 0){
											if (about_me_element_id == "Facebook"){
												if (/^[a-z\d.]{5,}$/.test(value) == false){
													alert("Error","Invalid format for a Facebook username!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Twitter"){
												if(/^@?(\w){1,15}$/.test(value) == false){
													alert("Error","Invalid format for a Twitter username!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Instagram"){
												if(/^([a-z0-9._])+$/.test(value) == false){
													alert("Error","Invalid format for a Twitter username!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Snapchat"){
												if(/^[a-zA-Z][\w-_.]{1,13}[\w]$/.test(value) == false){
													alert("Error","Invalid format for a Snapchat username!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Youtube"){
												if(/(?:(?:http|https):\/\/|)(?:www\.|)youtube\.com\/(channel|user)\/([A-Z][a-zA-Z0-9\-_]{1,})/.test(value) == false){
													alert("Error","Invalid Youtube channel URL!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Discord"){
												if(/^((.+?)#\d{4})/.test(value) == false){
													alert("Error","Invalid Discord username tag (<code>username#number</code>)!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Phone number") {
												if(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \/]?)?((?:\(?\d{1,}\)?[\-\.\ \/]?){0,})$/.test(value) == false){
													alert("Error","Invalid phone number format!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Email address") {
												if(/^\w+([\.-]?\w+)*@\\w+([\.-]?\\w+)*(\.\w{2,3})+$/.test(value) == false){
													alert("Error","Invalid email address format!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											} else if (about_me_element_id == "Website") {
												if(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(value) == false){
													alert("Error","Invalid website URL!");
													document.getElementById(element).removeAttribute("disabled");
													return;
												}
											}
										}
										if (["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14"].indexOf(value) >= 0){
											value = parseInt(value);
										}
										firebase.firestore().collection("users/members/id/" + firebase.auth().currentUser.uid + "/about/").doc(about_me_element_id.toLowerCase()).set({
											is: value
										}).then(async function() {
											e.target.classList.remove("approve");
											if (iteration_rel == 2){
												for(var i, j = 0; i = document.getElementById(element).options[j]; j++) {
													if (j.toString() == value.toString()){
														i.setAttribute("selected","selected");
													} else {
														i.removeAttribute("selected");
													}
												}
												document.getElementById(element).value = value;
											} else {
												document.getElementById(element).setAttribute("value",value);
												var event = document.createEvent('Event');
												event.initEvent('input', true, true);
												document.getElementById(element).value = value;
												document.getElementById(element).dispatchEvent(event);
											}
											document.getElementById(element).removeAttribute("disabled");
										}).catch(function(error){
											document.getElementById(element).removeAttribute("disabled");
											alert("Error","Unable to update your " + about_me_element_id.split("_").join(" ") + "!\n"+error.message);
										});
										return true;
									}						
								});
								if (invalid){
									alert("An unexpected error occured!");
								}
							});
							if ([0,2].indexOf(about_sections[about_topic]) >= 0)
							{
								document.getElementById("about_me_input_" + about_topic.split(" ").join("_")).addEventListener("input",function(e){
									var about_me_element_id = e.target.getAttribute("id").replace("about_me_input_","");
									document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("disabled");
									if (!(e.target.value.trim().length == 0 || e.target.value == e.target.getAttribute("value"))){
										document.getElementById("about_me_removal_" + about_me_element_id).classList.add("approve");
										document.getElementById("about_me_removal_" + about_me_element_id).setAttribute("title","Save changes?");
									} else {
										if (e.target.getAttribute("value").trim().length == 0){
											document.getElementById("about_me_removal_" + about_me_element_id).classList.add("disabled");
										}
										document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("approve");
										document.getElementById("about_me_removal_" + about_me_element_id).setAttribute("title","Delete " + about_me_element_id.toLowerCase());
									}
								});
							} else if (about_sections[about_topic] == 1) {
								["input","onpropertychange"].forEach(event => {
									document.getElementById("about_me_textarea_" + about_topic.split(" ").join("_")).addEventListener(event,function(e){
										var about_me_element_id = e.target.getAttribute("id").replace("about_me_textarea_","");
										document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("disabled");
										if (!(e.target.value.trim().length == 0 || e.target.value == e.target.getAttribute("value"))){
											document.getElementById("about_me_removal_" + about_me_element_id).classList.add("approve");
											document.getElementById("about_me_removal_" + about_me_element_id).setAttribute("title","Save changes?");
										} else {
											if (e.target.getAttribute("value").trim().length == 0){
												document.getElementById("about_me_removal_" + about_me_element_id).classList.add("disabled");
											}
											document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("approve");
											document.getElementById("about_me_removal_" + about_me_element_id).setAttribute("title","Delete " + about_me_element_id.toLowerCase());
										}
									});
								});
							} else {
								document.getElementById("about_me_select_" + about_topic.split(" ").join("_")).addEventListener("change",function(e){
									var about_me_element_id = e.target.getAttribute("id").replace("about_me_select_","");
									document.getElementById("about_me_removal_" + about_me_element_id).classList.add("approve");
									document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("disabled");
									for(var i, j = 0; i = e.target.options[j]; j++) {
										if(i.value.toString() == e.target.value.toString()) {
											if (i.getAttribute("selected") == "selected"){
												document.getElementById("about_me_removal_" + about_me_element_id).classList.remove("approve");
											}
										}
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
						document.getElementById("settings_loading_statement").remove();
					});
				};
				if(preload){
					document.addEventListener("DOMContentLoaded", function(event){
						document.getElementById("page_ref_settings_content").classList.add("hide");
						document.getElementById("page_ref_settings_content_more").classList.add("hide");
						document.getElementById("page_ref_settings_forbidden").classList.add("hide");
						if(window.location.href.indexOf("?setup=true") >= 0){
							document.getElementById("page_ref_menu_contents").classList.add("hide");
							document.getElementById("page_ref_title").innerHTML = "Account setup";
							document.getElementById("menu_settings_ok").addEventListener("click",base_settings_page);
						} else {
							document.getElementById("page_ref_settings_setup").classList.add("hide");
						}
					});
				} else {
					var overide_redirect = false;
					firebase.auth().onAuthStateChanged(function(user) {
						if (user) {
							document.getElementById("s_banner").addEventListener("click",function(){
								var top = function() {
									var position = document.body.scrollTop || document.documentElement.scrollTop;
									if (position) {
										window.scrollBy(0, -Math.max(1, Math.floor(position / 8)));
										scrollAnimation = setTimeout(top, 30);
									} else {
										clearTimeout(top);
									}
								}
								top();
							});
							var load = ["/app/img/refresh_loading.gif"].forEach(function(img){
								img_blob(img);
							});
							document.getElementById("menu_settings").addEventListener("click",base_settings_page);
							document.getElementById("menu_settings_about").addEventListener("click",about_page);
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
									document.getElementById("page_ref_settings_forbidden_content").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\"><b>WARNING:</b> By completing this action all user account data, including: email address, username, password, and display name; will be removed from this service. However, all user submitted content will remain, unless removed at a later point. This action cannot be undone, by completing this action you take all liability on your behalf from the removal of your account, and you will no longer be able interact with this service.</p><p class=\"side_margin margin_top center_text thin_disclaimer\"><b>NOTE:</b> to complete this action you must have been signed in recently.</p><p class=\"side_margin margin_top center_text\"><a id=\"delete_account_ref_page\">Delete your account</a></p>";
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
													firebase.firestore().collection("users/members/id").doc(remove_user_id).delete().then(function() {
														overide_redirect = false;
														location.href = "/login";
													}).catch(function(error){
														document.getElementById("page_ref_settings_forbidden_content").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\">Unable to delete your account - due to the following error:</p><p class=\"center_text\"><b>[" + error.code + "]: </b> " + error.message + "</p>";
													});
												}).catch(function(error){
													overide_redirect = false;
													if (error.code == "auth/requires-recent-login"){
														error.message = "This operation is sensitive and requires recent authentication. Log in again before retrying this request. Click <a id=\"logout\" title=\"Sign in\">here</a> to reauthenticate your account!";
													}
													document.getElementById("settings_ref_base_forbidden").classList.remove("hide");
													document.getElementById("page_ref_settings_forbidden").innerHTML = "<p class=\"side_margin margin_top center_text thin_disclaimer\">Unable to delete your account due to an error which occurred. The reason this action could not be completed is due to the following error:</p><p class=\"center_text\"><b>[" + error.code + "]: </b>" + error.message + "</p>";
													if (error.code == "auth/requires-recent-login"){
														document.getElementById("logout").addEventListener("click",function(){
															firebase.auth().signOut();
															location.href = "/login";
														});
													}
												});
											}).catch(function(){
												return;
												document.getElementById("settings_ref_base_forbidden").classList.remove("hide");
												document.getElementById("delete_account_confirm").classList.remove("hide");
											});
										}
									});
								});
							});
							document.getElementById("menu_logout").addEventListener("click",function(){
								firebase.auth().signOut();
								location.href = "/login";
							});
							document.getElementById("menu_back").addEventListener("click",function(){
								location.replace(".");
							});
						} else if (!overide_redirect) {
							location.assign("/login");
						}
					});
				}
				break;
			default:
				location.assign("/error/page_ref_undefined");
				return;
		}
	}
	host_page(page_ref,true);

})();