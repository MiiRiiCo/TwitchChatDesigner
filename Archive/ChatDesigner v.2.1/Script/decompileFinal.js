// settings.genStreamerList

var client = new tmi.Client({
    channels: settings.genStreamerList
});

// settings.genChatDirection

if (settings.genChatDirection === "up") {
    document.querySelector("#Cnt").style.setProperty("--genChatDirection", "column");
} else if (settings.genChatDirection === "down") {
    document.querySelector("#Cnt").style.setProperty("--genChatDirection", "column-reverse");
}

// settings.genSpacing

document.querySelector("#Cnt").style.setProperty("--genSpacing", `${settings.genSpacing}px`);

//-------------------------------------BADGES-ABRUFEN-------------------------------------//

var allBadges;

// Sende eine GET-Anfrage an die URL
fetch("https://badges.twitch.tv/v1/badges/global/display")

    // Wenn die Anfrage erfolgreich ist, verarbeite die Antwort als JSON
    .then(function(response) {
        return response.json();
    })
    // Wenn die JSON-Verarbeitung erfolgreich ist, speichere den JSON Code in eine Variable
    .then(function(json) {
        allBadges = json;
    });

//----------------------------------------------------------------------------------------//

var allRoles = [
    "user",
    "sub",
    "vip",
    "mod"
]

client.on("message", (streamer, meta, message, self) => {
    var channelBadges;

    fetch(`https://badges.twitch.tv/v1/badges/channels/${meta["room-id"]}/display`)

        // Wenn die Anfrage erfolgreich ist, verarbeite die Antwort als JSON
        .then(function(response) {
            return response.json();
        })

        // Wenn die JSON-Verarbeitung erfolgreich ist, speichere den JSON Code in eine Variable
        .then(function(json) {
            channelBadges = json;
        })
        
        .then(function() {
            
        var usernameAllowed = true,
            messageAllowed = true,
            streamerName = streamer.slice(1),
            messageTime = new Date(),
            hour1 = messageTime.getHours().toString(),
            hour2 = messageTime.getHours().toString(),
            minute1 = messageTime.getMinutes().toString(),
            minute2 = messageTime.getMinutes().toString(),
            second1 = messageTime.getSeconds().toString(),
            second2 = messageTime.getSeconds().toString(),
            badgesArray = [],
            badgesFinal = "";

        if (meta.badges !== null) {
            badgesArray = Object.entries(meta.badges);
        }

        if (hour2.length === 1) {
            hour2 = "0" + hour1;
        }

        if (minute2.length === 1) {
            minute2 = "0" + minute1;
        }

        if (second2.length === 1) {
            second2 = "0" + second1;
        }

        // settings.genFilterUser

        if (settings.genFilterUser.indexOf(meta.username) !== -1) {
            usernameAllowed = false;
        }

        // settings.genFilterMsg

        settings.genFilterMsg.forEach(check => {
            if (message.toLowerCase().includes(check.toLowerCase())) {
                messageAllowed = false;
            }
        })

        // ------------------------

        if (usernameAllowed === true && messageAllowed === true) {
            
            var cbx = document.createElement("div"),
                usn = document.createElement("p"),
                msg = document.createElement("p"),
                emoteCol = [],
                messageFin = "";

            if (meta["emotes"]) {
                emoteCol = Object.entries(meta["emotes"]);
            }

            var emoteRanges = [];
            for (let i = 0; i < emoteCol.length; i++) {
                for (let j = 0; j < emoteCol[i][1].length; j++) {
                    emoteRanges.push({
                        name: emoteCol[i][0],
                        from: parseInt(emoteCol[i][1][j].slice(0, emoteCol[i][1][j].indexOf("-"))),
                        to: parseInt(emoteCol[i][1][j].slice(emoteCol[i][1][j].indexOf("-") + 1, emoteCol[i][1][j].length))
                    });
                }
            }

            emoteRanges.sort(function(a, b) {
                var x = b["from"]; var y = a["from"];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            messageFin += message;

            for (var i = 0; i < emoteRanges.length; i++) {
                messageFin = messageFin.substring(0, emoteRanges[i].from) + `<img class="emt" src="https://static-cdn.jtvnw.net/emoticons/v2/${emoteRanges[i].name}/default/dark/4.0">` + messageFin.substring(emoteRanges[i].to + 1);
            }
            
            cbx.className = "cbx user";

            if (meta.color === null) {
                cbx.setAttribute("data-twitch", "#2D005E");
            } else {
                cbx.setAttribute("data-twitch", meta.color);
            }

            // settings.othBadges 1

            if (badgesArray.length > 0) {
                badgesFinal += `<div class="badgesCont">`;
                for (var i = 0; i < badgesArray.length; i++) {
                    if (channelBadges["badge_sets"][`${badgesArray[i][0]}`]) {
                        badgesFinal += `<img class="badgesIcon" src="${channelBadges["badge_sets"][`${badgesArray[i][0]}`]["versions"][`${badgesArray[i][1]}`]["image_url_4x"]}">`;
                    } else {
                        badgesFinal += `<img class="badgesIcon" src="${allBadges["badge_sets"][`${badgesArray[i][0]}`]["versions"][`${badgesArray[i][1]}`]["image_url_4x"]}">`;
                    }
                }
                badgesFinal += `</div>`;
            }

            cbx.setAttribute("data-username", meta["display-name"]);
            cbx.setAttribute("data-message", messageFin);
            cbx.setAttribute("data-streamer", streamerName);
            cbx.setAttribute("data-h", hour1);
            cbx.setAttribute("data-hh", hour2);
            cbx.setAttribute("data-m", minute1);
            cbx.setAttribute("data-mm", minute2);
            cbx.setAttribute("data-s", second1);
            cbx.setAttribute("data-ss", second2);
            cbx.setAttribute("data-badges", badgesFinal);

            var usnContentFinal = "" + settings.usnContent.user.value,
                msgContentFinal = "" + settings.msgContent.user.value;
            
            if (meta.subscriber) {
                cbx.classList.add("sub");

                if (settings.usnContent.sub.active === true) {
                    usnContentFinal = "" + settings.usnContent.sub.value;
                    msgContentFinal = "" + settings.msgContent.sub.value;
                }
            }

            if (meta.badges !== null) {
                if (meta.badges.hasOwnProperty("vip")) {
                    cbx.classList.add("vip");
                    
                    if (settings.usnContent.vip.active === true) {
                        usnContentFinal = "" + settings.usnContent.vip.value;
                        msgContentFinal = "" + settings.msgContent.vip.value;
                    }
                }
            }

            if (meta.mod) {
                cbx.classList.add("mod");
                
                if (settings.usnContent.mod.active === true) {
                    usnContentFinal = "" + settings.usnContent.mod.value;
                    msgContentFinal = "" + settings.msgContent.mod.value;
                }
            }

            usnContentFinal = usnContentFinal.replace(/{usn}/g, meta["display-name"]);
            msgContentFinal = msgContentFinal.replace(/{usn}/g, meta["display-name"]);

            usnContentFinal = usnContentFinal.replace(/{msg}/g, messageFin);
            msgContentFinal = msgContentFinal.replace(/{msg}/g, messageFin);

            usnContentFinal = usnContentFinal.replace(/{streamer}/g, streamerName);
            msgContentFinal = msgContentFinal.replace(/{streamer}/g, streamerName);
            
            usnContentFinal = usnContentFinal.replace(/{h}/g, hour1);
            msgContentFinal = msgContentFinal.replace(/{h}/g, hour1);
                            
            usnContentFinal = usnContentFinal.replace(/{hh}/g, hour2);
            msgContentFinal = msgContentFinal.replace(/{hh}/g, hour2);
            
            usnContentFinal = usnContentFinal.replace(/{m}/g, minute1);
            msgContentFinal = msgContentFinal.replace(/{m}/g, minute1);
            
            usnContentFinal = usnContentFinal.replace(/{mm}/g, minute2);
            msgContentFinal = msgContentFinal.replace(/{mm}/g, minute2);
            
            usnContentFinal = usnContentFinal.replace(/{s}/g, second1);
            msgContentFinal = msgContentFinal.replace(/{s}/g, second1);
            
            usnContentFinal = usnContentFinal.replace(/{ss}/g, second2);
            msgContentFinal = msgContentFinal.replace(/{ss}/g, second2);
            
            usnContentFinal = usnContentFinal.replace(/{badges}/g, badgesFinal);
            msgContentFinal = msgContentFinal.replace(/{badges}/g, badgesFinal);

            usn.className = "usn";
            usn.innerHTML = `${usnContentFinal}`;
            
            msg.className = "msg";
            msg.innerHTML = `${msgContentFinal}`;

            cbx.appendChild(usn);
            cbx.appendChild(msg);
            
            // settings.genMaxMessages

            if (document.querySelectorAll(".cbx").length === settings.genMaxMessages) {
                document.querySelectorAll(".cbx")[0].remove();
            }

            allRoles.forEach(role => {
                if (cbx.classList.contains(role)) {
                    // settings.anmTiming[`${role}`].value
                    if (settings.anmTiming[`${role}`].active === true) {
                        
                        cbx.style.setProperty("--cbxAnmApp", `${settings.anmTiming[`${role}`].value.appearing}ms`);
                        cbx.style.setProperty("--cbxAnmVan", `${settings.anmTiming[`${role}`].value.vanishing}ms`);
                        cbx.style.animation = "showCbx var(--cbxAnmApp)";

                        setTimeout(function() {
                            document.querySelector("#Cnt").appendChild(cbx);
                        }, (settings.anmTiming[`${role}`].value.delay));

                        if (settings.anmTiming[`${role}`].value.duration !== "infinite") {
                            setTimeout(function() {
                                cbx.style.animation = "hideCbx var(--cbxAnmVan)";
                            }, (settings.anmTiming[`${role}`].value.duration + settings.anmTiming[`${role}`].value.delay + settings.anmTiming[`${role}`].value.appearing));

                            setTimeout(function() {
                                cbx.remove();
                            }, (settings.anmTiming[`${role}`].value.duration + settings.anmTiming[`${role}`].value.delay + settings.anmTiming[`${role}`].value.appearing + settings.anmTiming[`${role}`].value.vanishing));
                        }
                    }
                    
                    // settings.anmShow[`${role}`].value

                    if (settings.anmShow[`${role}`].active === true) {

                        if (settings.anmShow[`${role}`].value[0].active === false) {
                            cbx.style.setProperty("--cbxAnmShowScale", "1")
                        } else if (settings.anmShow[`${role}`].value[0].active === true) {
                            cbx.style.setProperty("--cbxAnmShowScale", `${settings.anmShow[`${role}`].value[0].value}`);
                        }

                        if (settings.anmShow[`${role}`].value[1].active === false) {
                            cbx.style.setProperty("--cbxAnmShowMoveX", "0")
                        } else if (settings.anmShow[`${role}`].value[1].active === true) {
                            cbx.style.setProperty("--cbxAnmShowMoveX", `${settings.anmShow[`${role}`].value[1].value}px`);
                        }

                        if (settings.anmShow[`${role}`].value[2].active === false) {
                            cbx.style.setProperty("--cbxAnmShowMoveY", "0")
                        } else if (settings.anmShow[`${role}`].value[2].active === true) {
                            cbx.style.setProperty("--cbxAnmShowMoveY", `${settings.anmShow[`${role}`].value[2].value}px`);
                        }

                        if (settings.anmShow[`${role}`].value[3].active === false) {
                            cbx.style.setProperty("--cbxAnmShowRotateX", "0")
                        } else if (settings.anmShow[`${role}`].value[3].active === true) {
                            cbx.style.setProperty("--cbxAnmShowRotateX", `${settings.anmShow[`${role}`].value[3].value}deg`);
                        }

                        if (settings.anmShow[`${role}`].value[4].active === false) {
                            cbx.style.setProperty("--cbxAnmShowRotateY", "0")
                        } else if (settings.anmShow[`${role}`].value[4].active === true) {
                            cbx.style.setProperty("--cbxAnmShowRotateY", `${settings.anmShow[`${role}`].value[4].value}deg`);
                        }

                        if (settings.anmShow[`${role}`].value[5].active === false) {
                            cbx.style.setProperty("--cbxAnmShowRotateZ", "0")
                        } else if (settings.anmShow[`${role}`].value[5].active === true) {
                            cbx.style.setProperty("--cbxAnmShowRotateZ", `${settings.anmShow[`${role}`].value[5].value}deg`);
                        }

                        if (settings.anmShow[`${role}`].value[6].active === false) {
                            cbx.style.setProperty("--cbxAnmShowOpacity", "100")
                        } else if (settings.anmShow[`${role}`].value[6].active === true) {
                            cbx.style.setProperty("--cbxAnmShowOpacity", `${settings.anmShow[`${role}`].value[6].value}%`);
                        }
                    }
                    
                    // settings.anmHide[`${role}`].value

                    
                    if (settings.anmHide[`${role}`].active === true) {

                        if (settings.anmHide[`${role}`].value[0].active === false) {
                            cbx.style.setProperty("--cbxAnmHideScale", "1")
                        } else if (settings.anmHide[`${role}`].value[0].active === true) {
                            cbx.style.setProperty("--cbxAnmHideScale", `${settings.anmHide[`${role}`].value[0].value}`);
                        }

                        if (settings.anmHide[`${role}`].value[1].active === false) {
                            cbx.style.setProperty("--cbxAnmHideMoveX", "0")
                        } else if (settings.anmHide[`${role}`].value[1].active === true) {
                            cbx.style.setProperty("--cbxAnmHideMoveX", `${settings.anmHide[`${role}`].value[1].value}px`);
                        }

                        if (settings.anmHide[`${role}`].value[2].active === false) {
                            cbx.style.setProperty("--cbxAnmHideMoveY", "0")
                        } else if (settings.anmHide[`${role}`].value[2].active === true) {
                            cbx.style.setProperty("--cbxAnmHideMoveY", `${settings.anmHide[`${role}`].value[2].value}px`);
                        }

                        if (settings.anmHide[`${role}`].value[3].active === false) {
                            cbx.style.setProperty("--cbxAnmHideRotateX", "0")
                        } else if (settings.anmHide[`${role}`].value[3].active === true) {
                            cbx.style.setProperty("--cbxAnmHideRotateX", `${settings.anmHide[`${role}`].value[3].value}deg`);
                        }

                        if (settings.anmHide[`${role}`].value[4].active === false) {
                            cbx.style.setProperty("--cbxAnmHideRotateY", "0")
                        } else if (settings.anmHide[`${role}`].value[4].active === true) {
                            cbx.style.setProperty("--cbxAnmHideRotateY", `${settings.anmHide[`${role}`].value[4].value}deg`);
                        }

                        if (settings.anmHide[`${role}`].value[5].active === false) {
                            cbx.style.setProperty("--cbxAnmHideRotateZ", "0")
                        } else if (settings.anmHide[`${role}`].value[5].active === true) {
                            cbx.style.setProperty("--cbxAnmHideRotateZ", `${settings.anmHide[`${role}`].value[5].value}deg`);
                        }

                        if (settings.anmHide[`${role}`].value[6].active === false) {
                            cbx.style.setProperty("--cbxAnmHideOpacity", "100")
                        } else if (settings.anmHide[`${role}`].value[6].active === true) {
                            cbx.style.setProperty("--cbxAnmHideOpacity", `${settings.anmHide[`${role}`].value[6].value}%`);
                        }
                    }

                    // settings.cbxBackground[`${role}`].value

                    if (settings.cbxBackground[`${role}`].active === true) {
                        
                        var cbxBackground = "";

                        for (let i = 0; i < settings.cbxBackground[`${role}`].value.length; i++) {
                            
                            if (settings.cbxBackground[`${role}`].value[i].type === "solid") {
                                if (settings.cbxBackground[`${role}`].value[i].colors[0].type === "custom") {
                                    cbxBackground += `linear-gradient(${settings.cbxBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.cbxBackground[`${role}`].value[i].colors[0].opacity)}, ${settings.cbxBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.cbxBackground[`${role}`].value[i].colors[0].opacity)})`;
                                } else if (settings.cbxBackground[`${role}`].value[i].colors[0].type === "twitch") {
                                    cbxBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBackground[`${role}`].value[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBackground[`${role}`].value[i].colors[0].opacity)})`;
                                }
                            } else if (settings.cbxBackground[`${role}`].value[i].type === "linear") {
                                var sortedColors = [...settings.cbxBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                cbxBackground += `linear-gradient(${settings.cbxBackground[`${role}`].value[i].rotate}deg, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        cbxBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        cbxBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.cbxBackground[`${role}`].value[i].colors.length - 1) {
                                        cbxBackground += ", "
                                    } else if (j === settings.cbxBackground[`${role}`].value[i].colors.length - 1) {
                                        cbxBackground += ")";
                                    }
                                }
                            } else if (settings.cbxBackground[`${role}`].value[i].type === "radial") {
                                var sortedColors = [...settings.cbxBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                cbxBackground += `radial-gradient(${settings.cbxBackground[`${role}`].value[i].size} at ${settings.cbxBackground[`${role}`].value[i].xPos}% ${settings.cbxBackground[`${role}`].value[i].yPos}%, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        cbxBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        cbxBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.cbxBackground[`${role}`].value[i].colors.length - 1) {
                                        cbxBackground += ", "
                                    } else if (j === settings.cbxBackground[`${role}`].value[i].colors.length - 1) {
                                        cbxBackground += ")";
                                    }
                                }
                            }

                            if (i < settings.cbxBackground[`${role}`].value.length - 1) {
                                cbxBackground += ", "
                            }
                        }

                        cbx.style.setProperty("--cbxBackground", cbxBackground);
                    }

                    // settings.cbxBorder

                    if (settings.cbxBorder[`${role}`].active === true) {

                        if (settings.cbxBorder[`${role}`].value.top.color.type === "custom") {
                            cbx.style.setProperty("--cbxBorderTop", `${settings.cbxBorder[`${role}`].value.top.type} ${settings.cbxBorder[`${role}`].value.top.width}px ${settings.cbxBorder[`${role}`].value.top.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.top.color.opacity)}`);
                        } else if (settings.cbxBorder[`${role}`].value.top.color.type === "twitch") {
                            cbx.style.setProperty("--cbxBorderTop", `${settings.cbxBorder[`${role}`].value.top.type} ${settings.cbxBorder[`${role}`].value.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.top.color.opacity)}`);
                        }

                        if (settings.cbxBorder[`${role}`].value.right.color.type === "custom") {
                            cbx.style.setProperty("--cbxBorderRight", `${settings.cbxBorder[`${role}`].value.right.type} ${settings.cbxBorder[`${role}`].value.right.width}px ${settings.cbxBorder[`${role}`].value.right.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.right.color.opacity)}`);
                        } else if (settings.cbxBorder[`${role}`].value.right.color.type === "twitch") {
                            cbx.style.setProperty("--cbxBorderRight", `${settings.cbxBorder[`${role}`].value.right.type} ${settings.cbxBorder[`${role}`].value.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.right.color.opacity)}`);
                        }

                        if (settings.cbxBorder[`${role}`].value.bottom.color.type === "custom") {
                            cbx.style.setProperty("--cbxBorderBottom", `${settings.cbxBorder[`${role}`].value.bottom.type} ${settings.cbxBorder[`${role}`].value.bottom.width}px ${settings.cbxBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.bottom.color.opacity)}`);
                        } else if (settings.cbxBorder[`${role}`].value.bottom.color.type === "twitch") {
                            cbx.style.setProperty("--cbxBorderBottom", `${settings.cbxBorder[`${role}`].value.bottom.type} ${settings.cbxBorder[`${role}`].value.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.bottom.color.opacity)}`);
                        }

                        if (settings.cbxBorder[`${role}`].value.left.color.type === "custom") {
                            cbx.style.setProperty("--cbxBorderLeft", `${settings.cbxBorder[`${role}`].value.left.type} ${settings.cbxBorder[`${role}`].value.left.width}px ${settings.cbxBorder[`${role}`].value.left.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.left.color.opacity)}`);
                        } else if (settings.cbxBorder[`${role}`].value.left.color.type === "twitch") {
                            cbx.style.setProperty("--cbxBorderLeft", `${settings.cbxBorder[`${role}`].value.left.type} ${settings.cbxBorder[`${role}`].value.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.left.color.opacity)}`);
                        }
                    }

                    // settings.cbxBorderRadius

                    if (settings.cbxBorder[`${role}`].active === true) {

                        cbx.style.setProperty("--cbxBRtl", `${settings.cbxBorder[`${role}`].value.tl}px`);
                        cbx.style.setProperty("--cbxBRtr", `${settings.cbxBorder[`${role}`].value.tr}px`);
                        cbx.style.setProperty("--cbxBRbr", `${settings.cbxBorder[`${role}`].value.br}px`);
                        cbx.style.setProperty("--cbxBRbl", `${settings.cbxBorder[`${role}`].value.bl}px`);
                    }

                    // settings.cbxShadow[`${role}`].value

                    if (settings.cbxShadow[`${role}`].active === true) {

                        var cbxShadow = "";

                        for (let i = 0; i < settings.cbxShadow[`${role}`].value.length; i++) {
                            cbxShadow += `${settings.cbxShadow[`${role}`].value[i].xPos}px ${settings.cbxShadow[`${role}`].value[i].yPos}px ${settings.cbxShadow[`${role}`].value[i].blur}px ${settings.cbxShadow[`${role}`].value[i].expand}px `;
                            if (settings.cbxShadow[`${role}`].value[i].color.type === "custom") {
                                cbxShadow += `${settings.cbxShadow[`${role}`].value[i].color.color}${dec2hex(settings.cbxShadow[`${role}`].value[i].color.opacity)}`;
                            } else if (settings.cbxShadow[`${role}`].value[i].color.type === "twitch") {
                                cbxShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxShadow[`${role}`].value[i].color.opacity)}`;
                            }
                            if (settings.cbxShadow[`${role}`].value[i].inset === true) {
                                cbxShadow += " inset";
                            }
                            if (i < settings.cbxShadow[`${role}`].value.length - 1) {
                                cbxShadow += ", ";
                            }
                        }

                        cbx.style.setProperty("--cbxBS", cbxShadow);
                    }

                    // settings.cbxPosition[`${role}`].value.spacing

                    if (settings.cbxPosition[`${role}`].active === true) {

                        cbx.style.setProperty("--cbxSpacingOT", `${settings.cbxPosition[`${role}`].value.spacing.outer.top}px`);
                        cbx.style.setProperty("--cbxSpacingOR", `${settings.cbxPosition[`${role}`].value.spacing.outer.right}px`);
                        cbx.style.setProperty("--cbxSpacingOB", `${settings.cbxPosition[`${role}`].value.spacing.outer.bottom}px`);
                        cbx.style.setProperty("--cbxSpacingOL", `${settings.cbxPosition[`${role}`].value.spacing.outer.left}px`);

                        cbx.style.setProperty("--cbxSpacingIT", `${settings.cbxPosition[`${role}`].value.spacing.inner.top}px`);
                        cbx.style.setProperty("--cbxSpacingIR", `${settings.cbxPosition[`${role}`].value.spacing.inner.right}px`);
                        cbx.style.setProperty("--cbxSpacingIB", `${settings.cbxPosition[`${role}`].value.spacing.inner.bottom}px`);
                        cbx.style.setProperty("--cbxSpacingIL", `${settings.cbxPosition[`${role}`].value.spacing.inner.left}px`);
                    }

                    // settings.cbxPosition[`${role}`].value.sizing

                    if (settings.cbxPosition[`${role}`].active === true) {

                        cbx.style.setProperty("--cbxSizing", settings.cbxPosition[`${role}`].value.sizing);
                    }
                    
                    // settings.usnBackground[`${role}`].value

                    if (settings.usnBackground[`${role}`].active === true) {

                        var usnBackground = "";

                        for (let i = 0; i < settings.usnBackground[`${role}`].value.length; i++) {
                            
                            if (settings.usnBackground[`${role}`].value[i].type === "solid") {
                                if (settings.usnBackground[`${role}`].value[i].colors[0].type === "custom") {
                                    usnBackground += `linear-gradient(${settings.usnBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)}, ${settings.usnBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)})`;
                                } else if (settings.usnBackground[`${role}`].value[i].colors[0].type === "twitch") {
                                    usnBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)})`;
                                }
                            } else if (settings.usnBackground[`${role}`].value[i].type === "linear") {
                                var sortedColors = [...settings.usnBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                usnBackground += `linear-gradient(${settings.usnBackground[`${role}`].value[i].rotate}deg, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        usnBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.usnBackground[`${role}`].value[i].colors.length - 1) {
                                        usnBackground += ", "
                                    } else if (j === settings.usnBackground[`${role}`].value[i].colors.length - 1) {
                                        usnBackground += ")";
                                    }
                                }
                            } else if (settings.usnBackground[`${role}`].value[i].type === "radial") {
                                var sortedColors = [...settings.usnBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                usnBackground += `radial-gradient(${settings.usnBackground[`${role}`].value[i].size} at ${settings.usnBackground[`${role}`].value[i].xPos}% ${settings.usnBackground[`${role}`].value[i].yPos}%, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        usnBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.usnBackground[`${role}`].value[i].colors.length - 1) {
                                        usnBackground += ", "
                                    } else if (j === settings.usnBackground[`${role}`].value[i].colors.length - 1) {
                                        usnBackground += ")";
                                    }
                                }
                            }

                            if (i < settings.usnBackground[`${role}`].value.length - 1) {
                                usnBackground += ", "
                            }
                        }

                        usn.style.setProperty("--usnBackground", usnBackground);
                    }

                    // settings.usnBorder[`${role}`].value

                    if (settings.usnBorder[`${role}`].active === true) {

                        if (settings.usnBorder[`${role}`].value.top.color.type === "custom") {
                            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder[`${role}`].value.top.type} ${settings.usnBorder[`${role}`].value.top.width}px ${settings.usnBorder[`${role}`].value.top.color.color}${dec2hex(settings.usnBorder[`${role}`].value.top.color.opacity)}`);
                        } else if (settings.usnBorder[`${role}`].value.top.color.type === "twitch") {
                            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder[`${role}`].value.top.type} ${settings.usnBorder[`${role}`].value.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.top.color.opacity)}`);
                        }

                        if (settings.usnBorder[`${role}`].value.right.color.type === "custom") {
                            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder[`${role}`].value.right.type} ${settings.usnBorder[`${role}`].value.right.width}px ${settings.usnBorder[`${role}`].value.right.color.color}${dec2hex(settings.usnBorder[`${role}`].value.right.color.opacity)}`);
                        } else if (settings.usnBorder[`${role}`].value.right.color.type === "twitch") {
                            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder[`${role}`].value.right.type} ${settings.usnBorder[`${role}`].value.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.right.color.opacity)}`);
                        }

                        if (settings.usnBorder[`${role}`].value.bottom.color.type === "custom") {
                            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder[`${role}`].value.bottom.type} ${settings.usnBorder[`${role}`].value.bottom.width}px ${settings.usnBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.usnBorder[`${role}`].value.bottom.color.opacity)}`);
                        } else if (settings.usnBorder[`${role}`].value.bottom.color.type === "twitch") {
                            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder[`${role}`].value.bottom.type} ${settings.usnBorder[`${role}`].value.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.bottom.color.opacity)}`);
                        }

                        if (settings.usnBorder[`${role}`].value.left.color.type === "custom") {
                            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder[`${role}`].value.left.type} ${settings.usnBorder[`${role}`].value.left.width}px ${settings.usnBorder[`${role}`].value.left.color.color}${dec2hex(settings.usnBorder[`${role}`].value.left.color.opacity)}`);
                        } else if (settings.usnBorder[`${role}`].value.left.color.type === "twitch") {
                            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder[`${role}`].value.left.type} ${settings.usnBorder[`${role}`].value.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.left.color.opacity)}`);
                        }
                    }

                    // settings.usnBorder[`${role}`].value

                    if (settings.usnBorder[`${role}`].active === true) {

                        usn.style.setProperty("--usnBRtl", `${settings.usnBorder[`${role}`].value.tl}px`);
                        usn.style.setProperty("--usnBRtr", `${settings.usnBorder[`${role}`].value.tr}px`);
                        usn.style.setProperty("--usnBRbr", `${settings.usnBorder[`${role}`].value.br}px`);
                        usn.style.setProperty("--usnBRbl", `${settings.usnBorder[`${role}`].value.bl}px`);
                    }

                    // settings.usnShadow[`${role}`].value

                    if (settings.usnShadow[`${role}`].active === true) {

                        var usnShadow = "";

                        for (let i = 0; i < settings.usnShadow[`${role}`].value.length; i++) {
                            usnShadow += `${settings.usnShadow[`${role}`].value[i].xPos}px ${settings.usnShadow[`${role}`].value[i].yPos}px ${settings.usnShadow[`${role}`].value[i].blur}px ${settings.usnShadow[`${role}`].value[i].expand}px `;
                            if (settings.usnShadow[`${role}`].value[i].color.type === "custom") {
                                usnShadow += `${settings.usnShadow[`${role}`].value[i].color.color}${dec2hex(settings.usnShadow[`${role}`].value[i].color.opacity)}`;
                            } else if (settings.usnShadow[`${role}`].value[i].color.type === "twitch") {
                                usnShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnShadow[`${role}`].value[i].color.opacity)}`;
                            }
                            if (settings.usnShadow[`${role}`].value[i].inset === true) {
                                usnShadow += " inset";
                            }
                            if (i < settings.usnShadow[`${role}`].value.length - 1) {
                                usnShadow += ", ";
                            }
                        }

                        usn.style.setProperty("--usnBS", usnShadow);
                    }

                    // settings.usnPosition[`${role}`].value.spacing

                    if (settings.usnPosition[`${role}`].active === true) {

                        usn.style.setProperty("--usnSpacingOT", `${settings.usnPosition[`${role}`].value.spacing.outer.top}px`);
                        usn.style.setProperty("--usnSpacingOR", `${settings.usnPosition[`${role}`].value.spacing.outer.right}px`);
                        usn.style.setProperty("--usnSpacingOB", `${settings.usnPosition[`${role}`].value.spacing.outer.bottom}px`);
                        usn.style.setProperty("--usnSpacingOL", `${settings.usnPosition[`${role}`].value.spacing.outer.left}px`);

                        usn.style.setProperty("--usnSpacingIT", `${settings.usnPosition[`${role}`].value.spacing.inner.top}px`);
                        usn.style.setProperty("--usnSpacingIR", `${settings.usnPosition[`${role}`].value.spacing.inner.right}px`);
                        usn.style.setProperty("--usnSpacingIB", `${settings.usnPosition[`${role}`].value.spacing.inner.bottom}px`);
                        usn.style.setProperty("--usnSpacingIL", `${settings.usnPosition[`${role}`].value.spacing.inner.left}px`);
                    }

                    // settings.usnPosition[`${role}`].value.sizing

                    if (settings.usnPosition[`${role}`].active === true) {

                        usn.style.setProperty("--usnSizing", settings.usnPosition[`${role}`].value.sizing);
                    }

                    // settings.usnFont[`${role}`].value.family

                    if (settings.usnFont[`${role}`].active === true) {

                        usn.style.setProperty("--usnFontFamily", settings.usnFont[`${role}`].value.family);

                        // settings.usnFont[`${role}`].value.color
                        
                        if (settings.usnFont[`${role}`].value.color.type === "custom") {
                            usn.style.setProperty("--usnFontColor", `${settings.usnFont[`${role}`].value.color.color}${dec2hex(settings.usnFont[`${role}`].value.color.opacity)}`);
                        } else if (settings.usnFont[`${role}`].value.color.type === "twitch") {
                            usn.style.setProperty("--usnFontColor", `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnFont[`${role}`].value.color.opacity)}`);
                        }

                        // settings.usnFont[`${role}`].value.size

                        usn.style.setProperty("--usnFontSize", `${settings.usnFont[`${role}`].value.size}px`);

                        // settings.usnFont[`${role}`].value.weight

                        usn.style.setProperty("--usnFontWeight", settings.usnFont[`${role}`].value.weight);

                        // settings.usnFont[`${role}`].value.italic

                        if (settings.usnFont[`${role}`].value.italic === true) {
                            usn.style.setProperty("--usnFontItalic", "italic");
                        } else {
                            usn.style.setProperty("--usnFontItalic", "normal");
                        }

                        // settings.usnFont[`${role}`].value.lines

                        var usnFontLines = ""

                        if (settings.usnFont[`${role}`].value.lines.upperLine === true) {
                            usnFontLines += "overline "
                        }
                        if (settings.usnFont[`${role}`].value.lines.crossLine === true) {
                            usnFontLines += "line-through "
                        }
                        if (settings.usnFont[`${role}`].value.lines.underLine === true) {
                            usnFontLines += "underline"
                        }

                        usn.style.setProperty("--usnFontLines", usnFontLines);

                        // settings.usnFont[`${role}`].value.height

                        if (settings.usnFont[`${role}`].value.height.auto === true) {
                            usn.style.setProperty("--usnFontHeight", "normal");
                        } else if (settings.usnFont[`${role}`].value.height.auto === false) {
                            usn.style.setProperty("--usnFontHeight", `${settings.usnFont[`${role}`].value.height.height}px`);
                        }

                        // settings.usnFont[`${role}`].value.spacing
    
                        usn.style.setProperty("--usnFontSpacing", `${settings.usnFont[`${role}`].value.spacing}px`);
    
                        // settings.usnFont[`${role}`].value.align
                        
                        usn.style.setProperty("--usnFontAlign", settings.usnFont[`${role}`].value.align);
                    }

                    // settings.usnFontShadow[`${role}`].value

                    if (settings.usnFontShadow[`${role}`].active === true) {

                        var usnFontShadow = "";

                        for (let i = 0; i < settings.usnFontShadow[`${role}`].value.length; i++) {
                            usnFontShadow += `${settings.usnFontShadow[`${role}`].value[i].xPos}px ${settings.usnFontShadow[`${role}`].value[i].yPos}px ${settings.usnFontShadow[`${role}`].value[i].blur}px `;
                            if (settings.usnFontShadow[`${role}`].value[i].color.type === "custom") {
                                usnFontShadow += `${settings.usnFontShadow[`${role}`].value[i].color.color}${dec2hex(settings.usnFontShadow[`${role}`].value[i].color.opacity)}`;
                            } else if (settings.usnFontShadow[`${role}`].value[i].color.type === "twitch") {
                                usnFontShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnFontShadow[`${role}`].value[i].color.opacity)}`;
                            }
                            if (i < settings.usnFontShadow[`${role}`].value.length - 1) {
                                usnFontShadow += ", ";
                            }
                        }

                        usn.style.setProperty("--usnFontShadow", usnFontShadow);
                    }
                    
                    // settings.msgBackground[`${role}`].value

                    if (settings.msgBackground[`${role}`].active === true) {

                        var msgBackground = "";

                        for (let i = 0; i < settings.msgBackground[`${role}`].value.length; i++) {
                            
                            if (settings.msgBackground[`${role}`].value[i].type === "solid") {
                                if (settings.msgBackground[`${role}`].value[i].colors[0].type === "custom") {
                                    msgBackground += `linear-gradient(${settings.msgBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)}, ${settings.msgBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)})`;
                                } else if (settings.msgBackground[`${role}`].value[i].colors[0].type === "twitch") {
                                    msgBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)})`;
                                }
                            } else if (settings.msgBackground[`${role}`].value[i].type === "linear") {
                                var sortedColors = [...settings.msgBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                msgBackground += `linear-gradient(${settings.msgBackground[`${role}`].value[i].rotate}deg, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        msgBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.msgBackground[`${role}`].value[i].colors.length - 1) {
                                        msgBackground += ", "
                                    } else if (j === settings.msgBackground[`${role}`].value[i].colors.length - 1) {
                                        msgBackground += ")";
                                    }
                                }
                            } else if (settings.msgBackground[`${role}`].value[i].type === "radial") {
                                var sortedColors = [...settings.msgBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                                msgBackground += `radial-gradient(${settings.msgBackground[`${role}`].value[i].size} at ${settings.msgBackground[`${role}`].value[i].xPos}% ${settings.msgBackground[`${role}`].value[i].yPos}%, `;
                                for (let j = 0; j < sortedColors.length; j++) {
                                    if (sortedColors[j].type === "custom") {
                                        msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                                    } else if (sortedColors[j].type === "twitch") {
                                        msgBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                                    }
                                    
                                    if (j < settings.msgBackground[`${role}`].value[i].colors.length - 1) {
                                        msgBackground += ", "
                                    } else if (j === settings.msgBackground[`${role}`].value[i].colors.length - 1) {
                                        msgBackground += ")";
                                    }
                                }
                            }

                            if (i < settings.msgBackground[`${role}`].value.length - 1) {
                                msgBackground += ", "
                            }
                        }

                        msg.style.setProperty("--msgBackground", msgBackground);
                    }

                    // settings.msgBorder[`${role}`].value

                    if (settings.msgBorder[`${role}`].active === true) {

                        if (settings.msgBorder[`${role}`].value.top.color.type === "custom") {
                            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder[`${role}`].value.top.type} ${settings.msgBorder[`${role}`].value.top.width}px ${settings.msgBorder[`${role}`].value.top.color.color}${dec2hex(settings.msgBorder[`${role}`].value.top.color.opacity)}`);
                        } else if (settings.msgBorder[`${role}`].value.top.color.type === "twitch") {
                            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder[`${role}`].value.top.type} ${settings.msgBorder[`${role}`].value.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.top.color.opacity)}`);
                        }

                        if (settings.msgBorder[`${role}`].value.right.color.type === "custom") {
                            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder[`${role}`].value.right.type} ${settings.msgBorder[`${role}`].value.right.width}px ${settings.msgBorder[`${role}`].value.right.color.color}${dec2hex(settings.msgBorder[`${role}`].value.right.color.opacity)}`);
                        } else if (settings.msgBorder[`${role}`].value.right.color.type === "twitch") {
                            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder[`${role}`].value.right.type} ${settings.msgBorder[`${role}`].value.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.right.color.opacity)}`);
                        }

                        if (settings.msgBorder[`${role}`].value.bottom.color.type === "custom") {
                            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder[`${role}`].value.bottom.type} ${settings.msgBorder[`${role}`].value.bottom.width}px ${settings.msgBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.msgBorder[`${role}`].value.bottom.color.opacity)}`);
                        } else if (settings.msgBorder[`${role}`].value.bottom.color.type === "twitch") {
                            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder[`${role}`].value.bottom.type} ${settings.msgBorder[`${role}`].value.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.bottom.color.opacity)}`);
                        }

                        if (settings.msgBorder[`${role}`].value.left.color.type === "custom") {
                            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder[`${role}`].value.left.type} ${settings.msgBorder[`${role}`].value.left.width}px ${settings.msgBorder[`${role}`].value.left.color.color}${dec2hex(settings.msgBorder[`${role}`].value.left.color.opacity)}`);
                        } else if (settings.msgBorder[`${role}`].value.left.color.type === "twitch") {
                            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder[`${role}`].value.left.type} ${settings.msgBorder[`${role}`].value.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.left.color.opacity)}`);
                        }
                    }

                    // settings.msgBorder[`${role}`].value

                    if (settings.msgBorder[`${role}`].active === true) {

                        msg.style.setProperty("--msgBRtl", `${settings.msgBorder[`${role}`].value.tl}px`);
                        msg.style.setProperty("--msgBRtr", `${settings.msgBorder[`${role}`].value.tr}px`);
                        msg.style.setProperty("--msgBRbr", `${settings.msgBorder[`${role}`].value.br}px`);
                        msg.style.setProperty("--msgBRbl", `${settings.msgBorder[`${role}`].value.bl}px`);
                    }

                    // settings.msgShadow[`${role}`].value

                    if (settings.msgShadow[`${role}`].active === true) {

                        var msgShadow = "";

                        for (let i = 0; i < settings.msgShadow[`${role}`].value.length; i++) {
                            msgShadow += `${settings.msgShadow[`${role}`].value[i].xPos}px ${settings.msgShadow[`${role}`].value[i].yPos}px ${settings.msgShadow[`${role}`].value[i].blur}px ${settings.msgShadow[`${role}`].value[i].expand}px `;
                            if (settings.msgShadow[`${role}`].value[i].color.type === "custom") {
                                msgShadow += `${settings.msgShadow[`${role}`].value[i].color.color}${dec2hex(settings.msgShadow[`${role}`].value[i].color.opacity)}`;
                            } else if (settings.msgShadow[`${role}`].value[i].color.type === "twitch") {
                                msgShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgShadow[`${role}`].value[i].color.opacity)}`;
                            }
                            if (settings.msgShadow[`${role}`].value[i].inset === true) {
                                msgShadow += " inset";
                            }
                            if (i < settings.msgShadow[`${role}`].value.length - 1) {
                                msgShadow += ", ";
                            }
                        }

                        msg.style.setProperty("--msgBS", msgShadow);
                    }

                    // settings.msgPosition[`${role}`].value.spacing

                    if (settings.msgPosition[`${role}`].active === true) {

                        msg.style.setProperty("--msgSpacingOT", `${settings.msgPosition[`${role}`].value.spacing.outer.top}px`);
                        msg.style.setProperty("--msgSpacingOR", `${settings.msgPosition[`${role}`].value.spacing.outer.right}px`);
                        msg.style.setProperty("--msgSpacingOB", `${settings.msgPosition[`${role}`].value.spacing.outer.bottom}px`);
                        msg.style.setProperty("--msgSpacingOL", `${settings.msgPosition[`${role}`].value.spacing.outer.left}px`);

                        msg.style.setProperty("--msgSpacingIT", `${settings.msgPosition[`${role}`].value.spacing.inner.top}px`);
                        msg.style.setProperty("--msgSpacingIR", `${settings.msgPosition[`${role}`].value.spacing.inner.right}px`);
                        msg.style.setProperty("--msgSpacingIB", `${settings.msgPosition[`${role}`].value.spacing.inner.bottom}px`);
                        msg.style.setProperty("--msgSpacingIL", `${settings.msgPosition[`${role}`].value.spacing.inner.left}px`);
                    }

                    // settings.msgPosition[`${role}`].value.sizing

                    if (settings.msgPosition[`${role}`].active === true) {

                        msg.style.setProperty("--msgSizing", settings.msgPosition[`${role}`].value.sizing);
                    }

                    // settings.msgFont[`${role}`].value.family

                    if (settings.msgFont[`${role}`].active === true) {

                        msg.style.setProperty("--msgFontFamily", settings.msgFont[`${role}`].value.family);

                        // settings.msgFont[`${role}`].value.color
                        
                        if (settings.msgFont[`${role}`].value.color.type === "custom") {
                            msg.style.setProperty("--msgFontColor", `${settings.msgFont[`${role}`].value.color.color}${dec2hex(settings.msgFont[`${role}`].value.color.opacity)}`);
                        } else if (settings.msgFont[`${role}`].value.color.type === "twitch") {
                            msg.style.setProperty("--msgFontColor", `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgFont[`${role}`].value.color.opacity)}`);
                        }

                        // settings.msgFont[`${role}`].value.size

                        msg.style.setProperty("--msgFontSize", `${settings.msgFont[`${role}`].value.size}px`);

                        // settings.msgFont[`${role}`].value.weight

                        msg.style.setProperty("--msgFontWeight", settings.msgFont[`${role}`].value.weight);

                        // settings.msgFont[`${role}`].value.italic

                        if (settings.msgFont[`${role}`].value.italic === true) {
                            msg.style.setProperty("--msgFontItalic", "italic");
                        } else {
                            msg.style.setProperty("--msgFontItalic", "normal");
                        }

                        // settings.msgFont[`${role}`].value.lines

                        var msgFontLines = ""

                        if (settings.msgFont[`${role}`].value.lines.upperLine === true) {
                            msgFontLines += "overline "
                        }
                        if (settings.msgFont[`${role}`].value.lines.crossLine === true) {
                            msgFontLines += "line-through "
                        }
                        if (settings.msgFont[`${role}`].value.lines.underLine === true) {
                            msgFontLines += "underline"
                        }

                        msg.style.setProperty("--msgFontLines", msgFontLines);

                        // settings.msgFont[`${role}`].value.height

                        if (settings.msgFont[`${role}`].value.height.auto === true) {
                            msg.style.setProperty("--msgFontHeight", "normal");
                        } else if (settings.msgFont[`${role}`].value.height.auto === false) {
                            msg.style.setProperty("--msgFontHeight", `${settings.msgFont[`${role}`].value.height.height}px`);
                        }

                        // settings.msgFont[`${role}`].value.spacing
    
                        msg.style.setProperty("--msgFontSpacing", `${settings.msgFont[`${role}`].value.spacing}px`);
    
                        // settings.msgFont[`${role}`].value.align
                        
                        msg.style.setProperty("--msgFontAlign", settings.msgFont[`${role}`].value.align);
                    }

                    // settings.msgFontShadow[`${role}`].value

                    if (settings.msgFontShadow[`${role}`].active === true) {

                        var msgFontShadow = "";

                        for (let i = 0; i < settings.msgFontShadow[`${role}`].value.length; i++) {
                            msgFontShadow += `${settings.msgFontShadow[`${role}`].value[i].xPos}px ${settings.msgFontShadow[`${role}`].value[i].yPos}px ${settings.msgFontShadow[`${role}`].value[i].blur}px `;
                            if (settings.msgFontShadow[`${role}`].value[i].color.type === "custom") {
                                msgFontShadow += `${settings.msgFontShadow[`${role}`].value[i].color.color}${dec2hex(settings.msgFontShadow[`${role}`].value[i].color.opacity)}`;
                            } else if (settings.msgFontShadow[`${role}`].value[i].color.type === "twitch") {
                                msgFontShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgFontShadow[`${role}`].value[i].color.opacity)}`;
                            }
                            if (i < settings.msgFontShadow[`${role}`].value.length - 1) {
                                msgFontShadow += ", ";
                            }
                        }

                        msg.style.setProperty("--msgFontShadow", msgFontShadow);
                    }

                    // settings.othEmotes[`${role}`].value

                    if (settings.othEmotes[`${role}`].active === true) {

                        if (settings.othEmotes[`${role}`].value.auto === true) {
                            msg.style.setProperty("--othEmoteHeight", `${settings.msgFont[`${role}`].value.size}px`);
                        } else if (settings.othEmotes[`${role}`].value.auto === false) {
                            msg.style.setProperty("--othEmoteHeight", `${settings.othEmotes[`${role}`].value.height}px`)
                        }

                        msg.style.setProperty("--othEmoteVPos", settings.othEmotes[`${role}`].value.linePos);   
                    }

                    // settings.othBadges 2

                    if (settings.othBadges[`${role}`].active === true) {
                        if (settings.othBadges[`${role}`].value.size.auto === true) {
                            usn.style.setProperty("--othBadgesSize", `var(--usnFontSize)`);
                            msg.style.setProperty("--othBadgesSize", `var(--msgFontSize)`);
                        } else {
                            usn.style.setProperty("--othBadgesSize", `${settings.othBadges[`${role}`].value.size.height}px`);
                            msg.style.setProperty("--othBadgesSize", `${settings.othBadges[`${role}`].value.size.height}px`);
                        }
                        cbx.style.setProperty("--othBadgesGap", `${settings.othBadges[`${role}`].value.gap}px`);
                    }
                }
            });
        }
    });
});