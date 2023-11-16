// settings.genStreamerList

client = new tmi.Client({
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

// ------------------------

client.on("message", (streamer, meta, message, self) => {
    var usernameAllowed = true,
        messageAllowed = true,
        streamerName = streamer.slice(1),
        messageTime = new Date(),
        hour1 = messageTime.getHours().toString(),
        hour2 = messageTime.getHours().toString(),
        minute1 = messageTime.getMinutes().toString(),
        minute2 = messageTime.getMinutes().toString(),
        second1 = messageTime.getSeconds().toString(),
        second2 = messageTime.getSeconds().toString();

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
        
        cbx.className = "cbx";

        if (meta.color === null) {
            cbx.setAttribute("data-twitch", "#2D005E");
        } else {
            cbx.setAttribute("data-twitch", meta.color);
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

        var usnContentFinal = "" + settings.usnContent,
            msgContentFinal = "" + settings.msgContent,

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

        usn.className = "usn";
        usn.innerHTML = `${usnContentFinal}`;
        
        msg.className = "msg";
        msg.innerHTML = `${msgContentFinal}`;

        cbx.appendChild(usn);
        cbx.appendChild(msg);
        document.querySelector("#Cnt").appendChild(cbx);

        // settings.genMaxMessages

        if (document.querySelectorAll(".cbx")[settings.genMaxMessages]) {
            document.querySelectorAll(".cbx")[0].remove();
        }

        // settings.cbxBackground

        var cbxBackground = "";


        for (let i = 0; i < settings.cbxBackground.length; i++) {
            
            if (settings.cbxBackground[i].type === "solid") {
                if (settings.cbxBackground[i].colors[0].type === "custom") {
                    cbxBackground += `linear-gradient(${settings.cbxBackground[i].colors[0].color}${dec2hex(settings.cbxBackground[i].colors[0].opacity)}, ${settings.cbxBackground[i].colors[0].color}${dec2hex(settings.cbxBackground[i].colors[0].opacity)})`;
                } else if (settings.cbxBackground[i].colors[0].type === "twitch") {
                    cbxBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBackground[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBackground[i].colors[0].opacity)})`;
                }
            } else if (settings.cbxBackground[i].type === "linear") {
                var sortedColors = [...settings.cbxBackground[i].colors].sort((a, b) => {return a.count - b.count});
                cbxBackground += `linear-gradient(${settings.cbxBackground[i].rotate}deg, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        cbxBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        cbxBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.cbxBackground[i].colors.length - 1) {
                        cbxBackground += ", "
                    } else if (j === settings.cbxBackground[i].colors.length - 1) {
                        cbxBackground += ")";
                    }
                }
            } else if (settings.cbxBackground[i].type === "radial") {
                var sortedColors = [...settings.cbxBackground[i].colors].sort((a, b) => {return a.count - b.count});
                cbxBackground += `radial-gradient(${settings.cbxBackground[i].size} at ${settings.cbxBackground[i].xPos}% ${settings.cbxBackground[i].yPos}%, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        cbxBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        cbxBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.cbxBackground[i].colors.length - 1) {
                        cbxBackground += ", "
                    } else if (j === settings.cbxBackground[i].colors.length - 1) {
                        cbxBackground += ")";
                    }
                }
            }

            if (i < settings.cbxBackground.length - 1) {
                cbxBackground += ", "
            }
        }

        cbx.style.setProperty("--cbxBackground", cbxBackground);

        // settings.cbxBorder

        if (settings.cbxBorder.top.color.type === "custom") {
            cbx.style.setProperty("--cbxBorderTop", `${settings.cbxBorder.top.type} ${settings.cbxBorder.top.width}px ${settings.cbxBorder.top.color.color}${dec2hex(settings.cbxBorder.top.color.opacity)}`);
        } else if (settings.cbxBorder.top.color.type === "twitch") {
            cbx.style.setProperty("--cbxBorderTop", `${settings.cbxBorder.top.type} ${settings.cbxBorder.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder.top.color.opacity)}`);
        }

        if (settings.cbxBorder.right.color.type === "custom") {
            cbx.style.setProperty("--cbxBorderRight", `${settings.cbxBorder.right.type} ${settings.cbxBorder.right.width}px ${settings.cbxBorder.right.color.color}${dec2hex(settings.cbxBorder.right.color.opacity)}`);
        } else if (settings.cbxBorder.right.color.type === "twitch") {
            cbx.style.setProperty("--cbxBorderRight", `${settings.cbxBorder.right.type} ${settings.cbxBorder.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder.right.color.opacity)}`);
        }

        if (settings.cbxBorder.bottom.color.type === "custom") {
            cbx.style.setProperty("--cbxBorderBottom", `${settings.cbxBorder.bottom.type} ${settings.cbxBorder.bottom.width}px ${settings.cbxBorder.bottom.color.color}${dec2hex(settings.cbxBorder.bottom.color.opacity)}`);
        } else if (settings.cbxBorder.bottom.color.type === "twitch") {
            cbx.style.setProperty("--cbxBorderBottom", `${settings.cbxBorder.bottom.type} ${settings.cbxBorder.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder.bottom.color.opacity)}`);
        }

        if (settings.cbxBorder.left.color.type === "custom") {
            cbx.style.setProperty("--cbxBorderLeft", `${settings.cbxBorder.left.type} ${settings.cbxBorder.left.width}px ${settings.cbxBorder.left.color.color}${dec2hex(settings.cbxBorder.left.color.opacity)}`);
        } else if (settings.cbxBorder.left.color.type === "twitch") {
            cbx.style.setProperty("--cbxBorderLeft", `${settings.cbxBorder.left.type} ${settings.cbxBorder.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder.left.color.opacity)}`);
        }

        // settings.cbxBorderRadius

        cbx.style.setProperty("--cbxBRtl", `${settings.cbxBorderRadius.tl}px`);
        cbx.style.setProperty("--cbxBRtr", `${settings.cbxBorderRadius.tr}px`);
        cbx.style.setProperty("--cbxBRbr", `${settings.cbxBorderRadius.br}px`);
        cbx.style.setProperty("--cbxBRbl", `${settings.cbxBorderRadius.bl}px`);

        // settings.cbxShadow

        var cbxShadow = "";

        for (let i = 0; i < settings.cbxShadow.length; i++) {
            cbxShadow += `${settings.cbxShadow[i].xPos}px ${settings.cbxShadow[i].yPos}px ${settings.cbxShadow[i].blur}px ${settings.cbxShadow[i].expand}px `;
            if (settings.cbxShadow[i].color.type === "custom") {
                cbxShadow += `${settings.cbxShadow[i].color.color}${dec2hex(settings.cbxShadow[i].color.opacity)}`;
            } else if (settings.cbxShadow[i].color.type === "twitch") {
                cbxShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxShadow[i].color.opacity)}`;
            }
            if (settings.cbxShadow[i].inset === true) {
                cbxShadow += " inset";
            }
            if (i < settings.cbxShadow.length - 1) {
                cbxShadow += ", ";
            }
        }

        cbx.style.setProperty("--cbxBS", cbxShadow);

        // settings.cbxSpacing

        cbx.style.setProperty("--cbxSpacingIT", `${settings.cbxSpacing.inner.top}px`);
        cbx.style.setProperty("--cbxSpacingIR", `${settings.cbxSpacing.inner.right}px`);
        cbx.style.setProperty("--cbxSpacingIB", `${settings.cbxSpacing.inner.bottom}px`);
        cbx.style.setProperty("--cbxSpacingIL", `${settings.cbxSpacing.inner.left}px`);

        cbx.style.setProperty("--cbxSpacingOT", `${settings.cbxSpacing.outer.top}px`);
        cbx.style.setProperty("--cbxSpacingOR", `${settings.cbxSpacing.outer.right}px`);
        cbx.style.setProperty("--cbxSpacingOB", `${settings.cbxSpacing.outer.bottom}px`);
        cbx.style.setProperty("--cbxSpacingOL", `${settings.cbxSpacing.outer.left}px`);

        // settings.cbxSizing

        cbx.style.setProperty("--cbxSizing", settings.cbxSizing);
        
        // settings.usnBackground

        var usnBackground = "";

        for (let i = 0; i < settings.usnBackground.length; i++) {
            
            if (settings.usnBackground[i].type === "solid") {
                if (settings.usnBackground[i].colors[0].type === "custom") {
                    usnBackground += `linear-gradient(${settings.usnBackground[i].colors[0].color}${dec2hex(settings.usnBackground[i].colors[0].opacity)}, ${settings.usnBackground[i].colors[0].color}${dec2hex(settings.usnBackground[i].colors[0].opacity)})`;
                } else if (settings.usnBackground[i].colors[0].type === "twitch") {
                    usnBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[i].colors[0].opacity)})`;
                }
            } else if (settings.usnBackground[i].type === "linear") {
                var sortedColors = [...settings.usnBackground[i].colors].sort((a, b) => {return a.count - b.count});
                usnBackground += `linear-gradient(${settings.usnBackground[i].rotate}deg, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        usnBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.usnBackground[i].colors.length - 1) {
                        usnBackground += ", "
                    } else if (j === settings.usnBackground[i].colors.length - 1) {
                        usnBackground += ")";
                    }
                }
            } else if (settings.usnBackground[i].type === "radial") {
                var sortedColors = [...settings.usnBackground[i].colors].sort((a, b) => {return a.count - b.count});
                usnBackground += `radial-gradient(${settings.usnBackground[i].size} at ${settings.usnBackground[i].xPos}% ${settings.usnBackground[i].yPos}%, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        usnBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.usnBackground[i].colors.length - 1) {
                        usnBackground += ", "
                    } else if (j === settings.usnBackground[i].colors.length - 1) {
                        usnBackground += ")";
                    }
                }
            }

            if (i < settings.usnBackground.length - 1) {
                usnBackground += ", "
            }
        }

        usn.style.setProperty("--usnBackground", usnBackground);

        // settings.usnBorder

        if (settings.usnBorder.top.color.type === "custom") {
            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder.top.type} ${settings.usnBorder.top.width}px ${settings.usnBorder.top.color.color}${dec2hex(settings.usnBorder.top.color.opacity)}`);
        } else if (settings.usnBorder.top.color.type === "twitch") {
            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder.top.type} ${settings.usnBorder.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.top.color.opacity)}`);
        }

        if (settings.usnBorder.right.color.type === "custom") {
            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder.right.type} ${settings.usnBorder.right.width}px ${settings.usnBorder.right.color.color}${dec2hex(settings.usnBorder.right.color.opacity)}`);
        } else if (settings.usnBorder.right.color.type === "twitch") {
            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder.right.type} ${settings.usnBorder.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.right.color.opacity)}`);
        }

        if (settings.usnBorder.bottom.color.type === "custom") {
            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder.bottom.type} ${settings.usnBorder.bottom.width}px ${settings.usnBorder.bottom.color.color}${dec2hex(settings.usnBorder.bottom.color.opacity)}`);
        } else if (settings.usnBorder.bottom.color.type === "twitch") {
            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder.bottom.type} ${settings.usnBorder.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.bottom.color.opacity)}`);
        }

        if (settings.usnBorder.left.color.type === "custom") {
            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder.left.type} ${settings.usnBorder.left.width}px ${settings.usnBorder.left.color.color}${dec2hex(settings.usnBorder.left.color.opacity)}`);
        } else if (settings.usnBorder.left.color.type === "twitch") {
            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder.left.type} ${settings.usnBorder.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.left.color.opacity)}`);
        }

        // settings.usnBorderRadius

        usn.style.setProperty("--usnBRtl", `${settings.usnBorderRadius.tl}px`);
        usn.style.setProperty("--usnBRtr", `${settings.usnBorderRadius.tr}px`);
        usn.style.setProperty("--usnBRbr", `${settings.usnBorderRadius.br}px`);
        usn.style.setProperty("--usnBRbl", `${settings.usnBorderRadius.bl}px`);

        // settings.usnShadow

        var usnShadow = "";

        for (let i = 0; i < settings.usnShadow.length; i++) {
            usnShadow += `${settings.usnShadow[i].xPos}px ${settings.usnShadow[i].yPos}px ${settings.usnShadow[i].blur}px ${settings.usnShadow[i].expand}px `;
            if (settings.usnShadow[i].color.type === "custom") {
                usnShadow += `${settings.usnShadow[i].color.color}${dec2hex(settings.usnShadow[i].color.opacity)}`;
            } else if (settings.usnShadow[i].color.type === "twitch") {
                usnShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnShadow[i].color.opacity)}`;
            }
            if (settings.usnShadow[i].inset === true) {
                usnShadow += " inset";
            }
            if (i < settings.usnShadow.length - 1) {
                usnShadow += ", ";
            }
        }

        usn.style.setProperty("--usnBS", usnShadow);

        // settings.usnSpacing

        usn.style.setProperty("--usnSpacingIT", `${settings.usnSpacing.inner.top}px`);
        usn.style.setProperty("--usnSpacingIR", `${settings.usnSpacing.inner.right}px`);
        usn.style.setProperty("--usnSpacingIB", `${settings.usnSpacing.inner.bottom}px`);
        usn.style.setProperty("--usnSpacingIL", `${settings.usnSpacing.inner.left}px`);

        usn.style.setProperty("--usnSpacingOT", `${settings.usnSpacing.outer.top}px`);
        usn.style.setProperty("--usnSpacingOR", `${settings.usnSpacing.outer.right}px`);
        usn.style.setProperty("--usnSpacingOB", `${settings.usnSpacing.outer.bottom}px`);
        usn.style.setProperty("--usnSpacingOL", `${settings.usnSpacing.outer.left}px`);

        // settings.usnSizing

        usn.style.setProperty("--usnSizing", settings.usnSizing);

        // settings.usnFontFamily

        usn.style.setProperty("--usnFontFamily", settings.usnFontFamily);

        // settings.usnFontColor
        
        if (settings.usnFontColor.type === "custom") {
            usn.style.setProperty("--usnFontColor", `${settings.usnFontColor.color}${dec2hex(settings.usnFontColor.opacity)}`);
        } else if (settings.usnFontColor.type === "twitch") {
            usn.style.setProperty("--usnFontColor", `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnFontColor.opacity)}`);
        }

        // settings.usnFontSize

        usn.style.setProperty("--usnFontSize", `${settings.usnFontSize}px`);

        // settings.usnFontWeight

        usn.style.setProperty("--usnFontWeight", settings.usnFontWeight);

        // settings.usnFontItalic

        if (settings.usnFontItalic === true) {
            usn.style.setProperty("--usnFontItalic", "italic");
        } else {
            usn.style.setProperty("--usnFontItalic", "normal");
        }

        // settings.usnFontLines

        var usnFontLines = ""

        if (settings.usnFontLines.upperLine === true) {
            usnFontLines += "overline "
        }
        if (settings.usnFontLines.crossLine === true) {
            usnFontLines += "line-through "
        }
        if (settings.usnFontLines.underLine === true) {
            usnFontLines += "underline"
        }

        usn.style.setProperty("--usnFontLines", usnFontLines);

        // settings.usnFontHeight

        if (settings.usnFontHeight.auto === true) {
            usn.style.setProperty("--usnFontHeight", "normal");
        } else if (settings.usnFontHeight.auto === false) {
            usn.style.setProperty("--usnFontHeight", `${settings.usnFontHeight.height}px`);
        }

        // settings.usnFontShadow

        var usnFontShadow = "";

        for (let i = 0; i < settings.usnFontShadow.length; i++) {
            usnFontShadow += `${settings.usnFontShadow[i].xPos}px ${settings.usnFontShadow[i].yPos}px ${settings.usnFontShadow[i].blur}px `;
            if (settings.usnFontShadow[i].color.type === "custom") {
                usnFontShadow += `${settings.usnFontShadow[i].color.color}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
            } else if (settings.usnFontShadow[i].color.type === "twitch") {
                usnFontShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
            }
            if (i < settings.usnFontShadow.length - 1) {
                usnFontShadow += ", ";
            }
        }

        usn.style.setProperty("--usnFontShadow", usnFontShadow);

        // settings.usnFontSpacing

        usn.style.setProperty("--usnFontSpacing", `${settings.usnFontSpacing}px`);

        // settings.usnFontAlign
        
        usn.style.setProperty("--usnFontAlign", settings.usnFontAlign);
        
        // settings.msgBackground

        var msgBackground = "";

        for (let i = 0; i < settings.msgBackground.length; i++) {
            
            if (settings.msgBackground[i].type === "solid") {
                if (settings.msgBackground[i].colors[0].type === "custom") {
                    msgBackground += `linear-gradient(${settings.msgBackground[i].colors[0].color}${dec2hex(settings.msgBackground[i].colors[0].opacity)}, ${settings.msgBackground[i].colors[0].color}${dec2hex(settings.msgBackground[i].colors[0].opacity)})`;
                } else if (settings.msgBackground[i].colors[0].type === "twitch") {
                    msgBackground += `linear-gradient(${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[i].colors[0].opacity)}, ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[i].colors[0].opacity)})`;
                }
            } else if (settings.msgBackground[i].type === "linear") {
                var sortedColors = [...settings.msgBackground[i].colors].sort((a, b) => {return a.count - b.count});
                msgBackground += `linear-gradient(${settings.msgBackground[i].rotate}deg, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        msgBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.msgBackground[i].colors.length - 1) {
                        msgBackground += ", "
                    } else if (j === settings.msgBackground[i].colors.length - 1) {
                        msgBackground += ")";
                    }
                }
            } else if (settings.msgBackground[i].type === "radial") {
                var sortedColors = [...settings.msgBackground[i].colors].sort((a, b) => {return a.count - b.count});
                msgBackground += `radial-gradient(${settings.msgBackground[i].size} at ${settings.msgBackground[i].xPos}% ${settings.msgBackground[i].yPos}%, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        msgBackground += `${cbx.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
                    }
                    
                    if (j < settings.msgBackground[i].colors.length - 1) {
                        msgBackground += ", "
                    } else if (j === settings.msgBackground[i].colors.length - 1) {
                        msgBackground += ")";
                    }
                }
            }

            if (i < settings.msgBackground.length - 1) {
                msgBackground += ", "
            }
        }

        msg.style.setProperty("--msgBackground", msgBackground);

        // settings.msgBorder

        if (settings.msgBorder.top.color.type === "custom") {
            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder.top.type} ${settings.msgBorder.top.width}px ${settings.msgBorder.top.color.color}${dec2hex(settings.msgBorder.top.color.opacity)}`);
        } else if (settings.msgBorder.top.color.type === "twitch") {
            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder.top.type} ${settings.msgBorder.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.top.color.opacity)}`);
        }

        if (settings.msgBorder.right.color.type === "custom") {
            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder.right.type} ${settings.msgBorder.right.width}px ${settings.msgBorder.right.color.color}${dec2hex(settings.msgBorder.right.color.opacity)}`);
        } else if (settings.msgBorder.right.color.type === "twitch") {
            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder.right.type} ${settings.msgBorder.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.right.color.opacity)}`);
        }

        if (settings.msgBorder.bottom.color.type === "custom") {
            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder.bottom.type} ${settings.msgBorder.bottom.width}px ${settings.msgBorder.bottom.color.color}${dec2hex(settings.msgBorder.bottom.color.opacity)}`);
        } else if (settings.msgBorder.bottom.color.type === "twitch") {
            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder.bottom.type} ${settings.msgBorder.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.bottom.color.opacity)}`);
        }

        if (settings.msgBorder.left.color.type === "custom") {
            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder.left.type} ${settings.msgBorder.left.width}px ${settings.msgBorder.left.color.color}${dec2hex(settings.msgBorder.left.color.opacity)}`);
        } else if (settings.msgBorder.left.color.type === "twitch") {
            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder.left.type} ${settings.msgBorder.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.left.color.opacity)}`);
        }

        // settings.msgBorderRadius

        msg.style.setProperty("--msgBRtl", `${settings.msgBorderRadius.tl}px`);
        msg.style.setProperty("--msgBRtr", `${settings.msgBorderRadius.tr}px`);
        msg.style.setProperty("--msgBRbr", `${settings.msgBorderRadius.br}px`);
        msg.style.setProperty("--msgBRbl", `${settings.msgBorderRadius.bl}px`);

        // settings.msgShadow

        var msgShadow = "";

        for (let i = 0; i < settings.msgShadow.length; i++) {
            msgShadow += `${settings.msgShadow[i].xPos}px ${settings.msgShadow[i].yPos}px ${settings.msgShadow[i].blur}px ${settings.msgShadow[i].expand}px `;
            if (settings.msgShadow[i].color.type === "custom") {
                msgShadow += `${settings.msgShadow[i].color.color}${dec2hex(settings.msgShadow[i].color.opacity)}`;
            } else if (settings.msgShadow[i].color.type === "twitch") {
                msgShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgShadow[i].color.opacity)}`;
            }
            if (settings.msgShadow[i].inset === true) {
                msgShadow += " inset";
            }
            if (i < settings.msgShadow.length - 1) {
                msgShadow += ", ";
            }
        }

        msg.style.setProperty("--msgBS", msgShadow);

        // settings.msgSpacing

        msg.style.setProperty("--msgSpacingIT", `${settings.msgSpacing.inner.top}px`);
        msg.style.setProperty("--msgSpacingIR", `${settings.msgSpacing.inner.right}px`);
        msg.style.setProperty("--msgSpacingIB", `${settings.msgSpacing.inner.bottom}px`);
        msg.style.setProperty("--msgSpacingIL", `${settings.msgSpacing.inner.left}px`);

        msg.style.setProperty("--msgSpacingOT", `${settings.msgSpacing.outer.top}px`);
        msg.style.setProperty("--msgSpacingOR", `${settings.msgSpacing.outer.right}px`);
        msg.style.setProperty("--msgSpacingOB", `${settings.msgSpacing.outer.bottom}px`);
        msg.style.setProperty("--msgSpacingOL", `${settings.msgSpacing.outer.left}px`);

        // settings.msgSizing

        msg.style.setProperty("--msgSizing", settings.msgSizing);

        // settings.msgFontFamily

        msg.style.setProperty("--msgFontFamily", settings.msgFontFamily);

        // settings.msgFontColor
        
        if (settings.msgFontColor.type === "custom") {
            msg.style.setProperty("--msgFontColor", `${settings.msgFontColor.color}${dec2hex(settings.msgFontColor.opacity)}`);
        } else if (settings.msgFontColor.type === "twitch") {
            msg.style.setProperty("--msgFontColor", `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgFontColor.opacity)}`);
        }

        // settings.msgFontSize

        msg.style.setProperty("--msgFontSize", `${settings.msgFontSize}px`);

        // settings.msgFontWeight

        msg.style.setProperty("--msgFontWeight", settings.msgFontWeight);

        // settings.msgFontItalic

        if (settings.msgFontItalic === true) {
            msg.style.setProperty("--msgFontItalic", "italic");
        } else {
            msg.style.setProperty("--msgFontItalic", "normal");
        }

        // settings.msgFontLines

        var msgFontLines = ""

        if (settings.msgFontLines.upperLine === true) {
            msgFontLines += "overline "
        }
        if (settings.msgFontLines.crossLine === true) {
            msgFontLines += "line-through "
        }
        if (settings.msgFontLines.underLine === true) {
            msgFontLines += "underline"
        }

        msg.style.setProperty("--msgFontLines", msgFontLines);

        // settings.msgFontHeight

        if (settings.msgFontHeight.auto === true) {
            msg.style.setProperty("--msgFontHeight", "normal");
        } else if (settings.msgFontHeight.auto === false) {
            msg.style.setProperty("--msgFontHeight", `${settings.msgFontHeight.height}px`);
        }

        // settings.msgFontShadow

        var msgFontShadow = "";

        for (let i = 0; i < settings.msgFontShadow.length; i++) {
            msgFontShadow += `${settings.msgFontShadow[i].xPos}px ${settings.msgFontShadow[i].yPos}px ${settings.msgFontShadow[i].blur}px `;
            if (settings.msgFontShadow[i].color.type === "custom") {
                msgFontShadow += `${settings.msgFontShadow[i].color.color}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
            } else if (settings.msgFontShadow[i].color.type === "twitch") {
                msgFontShadow += `${cbx.getAttribute("data-twitch")}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
            }
            if (i < settings.msgFontShadow.length - 1) {
                msgFontShadow += ", ";
            }
        }

        msg.style.setProperty("--msgFontShadow", msgFontShadow);

        // settings.msgFontSpacing

        msg.style.setProperty("--msgFontSpacing", `${settings.msgFontSpacing}px`);

        // settings.msgFontAlign
        
        msg.style.setProperty("--msgFontAlign", settings.msgFontAlign);

        // settings.msgEmotes

        if (settings.msgEmotes.auto === true) {
            msg.style.setProperty("--msgEmoteHeight", `${settings.msgFontSize}px`);
        } else if (settings.msgEmotes.auto === false) {
            msg.style.setProperty("--msgEmoteHeight", `${settings.msgEmotes.height}px`)
        }

        msg.style.setProperty("--msgEmoteVPos", settings.msgEmotes.linePos);
    }
});

