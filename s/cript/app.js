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
			document.getElementById(rep_id).setAttribute("src",image_cache[url]);
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
						document.getElementById(rep_id).setAttribute("src",image_url);
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
		return firebase.storage().ref().child(url).getDownloadURL().then(async function(url) {
			return url;
		}).catch(async function(error) {
			return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
		});
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
									console.log(e);
									return;
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
							var contents = {posts:{},users:[],events:[true],pub:"tbc"};
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
							});
							var post_db = firebase.database().ref("blog/chat/post");
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
												doc_data.name = "deleted";
												return doc_data;
											}
										}
										return doc_data;
									});
									for (var i = users.length - 1; i >= 0; i--) {
										if (users[i].photo != "/app/img/deleted.png"){
											if (typeof users[i].photo === "undefined" || users[i].photo.length == 0){
												users[i].photo = "/app/img/prof.png";
											} else {
												users[i].photo = await storage_download("profile/"+users[i].id +"_50x50");
											}
										}
									}
									contents.users = users;
									resolve(users);
								});
							});
							var update_pub = () => new Promise(function(resolve){
								firebase.firestore().collection("places").doc("pubs").get().then(function(pub){
									if (pub.exists){
										pub = pub.data();
										pub.date = pub.date.toDate();
										pub.date = pub.date.setHours(24,0,0,0);
										if (pub.date > new Date()){
											firebase.firestore().collection("places/pubs/listed").doc(pub.this_week).get().then(function(pub_data){
												if (pub_data.exists){
													pub.this_week = pub_data.data();
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
							var load_page = async function(page_id,sub_ref){
								page_id = page_id || sub_page;
								sub_ref = sub_ref || false;
								sub_page = page_id;
								if (sub_pages.indexOf(page_id) < 0){
									return;
								}
								var out = {html:null};
								var img = [];
								var add = {};
								add.click = [];
								add.typing = [];
								add.call_back = []
								switch (page_id){
									case "nav_loc_messages":
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
													for (var iii = 0; iii < contents.users.length; iii++) {
														if (contents.users[iii].id == post_content.user) {
															user_match = contents.users[iii];
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
												out.html = out.html + "<div class=\"post\"><table><tr><td valign=\"top\" width=\"58px\"><img id=\"" + post_content.id + "_p-img\" class=\"post_img_s\"></td><td valign=\"top\">";
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
												out.html = out.html + "</td></tr></table><div><div class=\"post_by\"><span>" + user_match.name + "</span></div><div class=\"post_time\" title=\"Posted at: " + post_content.time.join(" - ") + "\"><span>at: </span>" + post_content.time[0] + {true:" - " + post_content.time[1],false:""}[post_content.time[1] != new Date().toLocaleDateString(window.navigator.userLanguage || window.navigator.language)] + "</div></div></div>";
											}
										}
										out.html = out.html + "<div class=\"center_text\" id=\"post_end\"></div></div></div>";
										break;
									case "nav_loc_events":
										out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><p class=\"center_text\">This feature is coming soon...</p></div>";
										break;
									case "nav_loc_members":
										out.html = "<div id=\"redundant_padding\"></div>";
										for (var i = 0; i < contents.users.length; i++) {
											out.html = out.html + "<div class=\"members_list\"><table><tr><td width=\"50px\" valign=\"middle\"><img class=\"members_list_img_s\" id=\"" + contents.users[i].id + "_r-img\"></td><td valign=\"middle\"><span class=\"members_list_name\">" + contents.users[i].name + "</span></td></tr></table></div>";
											img.push([contents.users[i].photo,contents.users[i].id + "_r-img"]);
										}
										break;
									case "nav_loc_pub":
										if (contents.pub == "tbc"){
											out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><p class=\"center_text\">This week's pub hasn't been published yet...</p></div>";
										} else if (contents.pub.error == true){
											out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><p class=\"center_text\">Unable to load this week's pub!</p></div>";
										} else {
											out.html = "<div id=\"redundant_padding\"></div><div class=\"side_margin\"><p class=\"center_text\">This week we will be going to:</p><h2 class=\"center_text\">" + contents.pub.name + "</h2><p class=\"center_text\">" + contents.pub.address + "</p><p class=\"center_text\">" + contents.pub.postcode + "</p></div><iframe src=\"http://maps.google.com/maps?q=" + contents.pub.geo[0] + "," + contents.pub.geo[1] + "&z=18&output=embed\" id=\"pub_map\" frameborder=\"0\" style=\"border:0;background-image:url(\'" + img_blob("/app/img/map_loading.gif",false,true) + "\')\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";
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
										document.getElementById({true:"page_render",false:sub_ref}[sub_ref == false]).innerHTML = out.html;
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
									for (var i = 0; i < add.callback.length; i++) {
										add.callback[i]();
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
									for (var i = contents.users.length - 1; i >= 0; i--) {
										if (contents.users[i].id == firebase.auth().currentUser.uid) {
											user_set_up = i;
											break;
										}
									}
									if (user_set_up == -1 || contents.users[i].name == ""){
										location.assign("menu?setup=true");
									}
									update_pub().then(async function(e){
										await firebase.firestore().collection("blog").doc("banner").get().then(async function(banner){
											if (banner.exists){
												banner = banner.data();
												if (banner.show){
													var banner_contents = document.getElementById("banner_contents");
													banner_contents.innerHTML = banner.contents;
													document.getElementById("banner_container").classList.remove("hide");
													document.getElementById("page_render").classList.add("banner_top");
													function resize(){
														try {
															document.getElementById("redundant_padding").style.minHeight = (document.getElementById("banner_contents").offsetHeight + 20 - (16 * 4)) + "px";
														} catch(e){};
													}
													new ResizeObserver(resize).observe(banner_contents)
												}
											}
										});
										sub_pages.forEach(function(nav_id){
											document.getElementById(nav_id).classList.remove("disabled");
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
					document.getElementById("page_ref_settings_content").innerHTML = "<p class=\"side_margin margin_top center_text\" id=\"settings_loading_statement\"></p><div id=\"setting_ref_content\"></div><div class=\"spacer\"></div><p class=\"side_margin margin_top center_text\"><a title=\"Go to more settings\" id=\"settings_ref_more\">More settings</a></p><p class=\"side_margin margin_top center_text\"><a title=\"Back to menu settings\" id=\"settings_ref_back\">Go Back To Menu</a></p>";
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