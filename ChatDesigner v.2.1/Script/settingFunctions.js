console.log("Tool created and designed by Mirco Schilling | ttv/miiriico");

function updateNum(e, dir) {
    var elmnt = e.target.parentNode.parentNode.querySelector(".inputNumBig");
    if (dir === "+") {
        elmnt.value = parseInt(elmnt.value) + 1
    } else if (dir === "-") {
        elmnt.value = parseInt(elmnt.value) - 1
    }
    elmnt.oninput();
}

// Open Nav Menu

var menuOpen;

function openNavMenu(item) {
    for (var i = 0; i < document.querySelectorAll(".navMenuWrapper").length; i++) {
        document.querySelectorAll(".navMenuWrapper")[i].setAttribute("data-open", "false");
        document.querySelectorAll(".navButton")[i + 1].setAttribute("data-active", "false");
    }
    
    if (menuOpen === item) {
        document.querySelectorAll(".navMenuWrapper")[item].setAttribute("data-open", "false");
        document.querySelectorAll(".navButton")[item + 1].setAttribute("data-active", "false");
        menuOpen = undefined;
    } else {
        document.querySelectorAll(".navMenuWrapper")[item].setAttribute("data-open", "true");
        document.querySelectorAll(".navButton")[item + 1].setAttribute("data-active", "true");
        menuOpen = item;
    }
}

// Open Settings
var openSettingNum = undefined;

function openSetting(num) {
    if (num === openSettingNum) {
        document.querySelectorAll(".setting")[openSettingNum].setAttribute("data-open", "false");
        document.querySelectorAll(".navSubButton")[openSettingNum].setAttribute("data-active", "false");

        openSettingNum = undefined;
    } else {
        if (openSettingNum !== undefined) {
            document.querySelectorAll(".setting")[openSettingNum].setAttribute("data-open", "false");
            document.querySelectorAll(".navSubButton")[openSettingNum].setAttribute("data-active", "false");
        }
        openSettingNum = num;
        document.querySelectorAll(".setting")[openSettingNum].setAttribute("data-open", "true");
        document.querySelectorAll(".navSubButton")[openSettingNum].setAttribute("data-active", "true");
    }
}

// colorPreset

function addPreset() {
    colorPreset.push({
        color: event.target.parentNode.parentNode.querySelector(".colorChangeInput").value,
        opacity: parseInt(event.target.parentNode.parentNode.querySelector(".colorChangeOpacity").value)
    });

    document.querySelectorAll(".presetList").forEach(list => {
        var newPreset = document.createElement("button");
            newPreset.className = "colorPreset";
            newPreset.setAttribute("onclick", "usePreset()");
            newPreset.innerHTML = `<div class="removePreset"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></div>`;
            newPreset.style.backgroundColor = `${colorPreset[colorPreset.length - 1].color}${dec2hex(colorPreset[colorPreset.length - 1].opacity)}`;

        list.appendChild(newPreset);
    });
}

function insertPreset() {
    var presetContent = ``;

    for (var i = 0; i < colorPreset.length; i++) {
        presetContent += `<button class="colorPreset" onclick="usePreset()" style="background-color:${colorPreset[i].color}${dec2hex(colorPreset[i].opacity)}"><div class="removePreset"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></div></button>`
    }

    return presetContent;
}

function usePreset() {
    var i = Array.from(event.target.parentNode.children).indexOf(event.target);
    
    event.target.parentNode.parentNode.parentNode.querySelector(".colorChangeInput").value = colorPreset[i].color;
    event.target.parentNode.parentNode.parentNode.querySelector(".colorChangeOpacity").value = colorPreset[i].opacity;

    event.target.parentNode.parentNode.parentNode.querySelector(".colorChangeInput").oninput();
    event.target.parentNode.parentNode.parentNode.querySelector(".colorChangeOpacity").oninput();

    event.target.parentNode.parentNode.parentNode.querySelector(".colorChangeType").querySelectorAll("button")[0].onclick();
}

function removePreset() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    document.querySelectorAll(".presetList").forEach(list => {
        list.querySelectorAll(".colorPreset")[i].remove();
    });
    colorPreset.splice(i, 1);
}

function showDeletePreset() {
    if (event.target.parentNode.querySelector(".presetList").getAttribute("data-delete-show") === "false") {
        event.target.parentNode.querySelector(".presetList").setAttribute("data-delete-show", "true");
        event.target.parentNode.querySelectorAll(".colorPreset").forEach(preset => {
            preset.setAttribute("onclick", "removePreset()");
        });
        event.target.setAttribute("data-active", "true");
    } else {
        event.target.parentNode.querySelector(".presetList").setAttribute("data-delete-show", "false");
        event.target.parentNode.querySelectorAll(".colorPreset").forEach(preset => {
            preset.setAttribute("onclick", "usePreset()");
        });
        event.target.setAttribute("data-active", "false");
    }
}

// settings.genStreamerList

function updateStreamerList() {
    for (let i = 0; i < settings.genStreamerList.length; i++) {
        settings.genStreamerList[i] = document.querySelectorAll(".genStreamerListInput")[i].value;
    }
    client.channels = settings.genStreamerList;
}

function addStreamerList() {
    var newListItem = document.createElement("div"),
        newListInput = document.createElement("input"),
        newListRemove = document.createElement("button");

    newListItem.className = "inputTextListItem";

    newListInput.type = "text";
    newListInput.className = "inputTextListItemInput genStreamerListInput";
    newListInput.setAttribute("oninput", "updateStreamerList()");

    newListRemove.className = "inputTextListItemRemove icon";
    newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeStreamerList();");
    newListRemove.innerHTML = `<img class="iconSVG" src="Icons/Diverse/Remove.svg">`;

    newListItem.appendChild(newListInput);
    newListItem.appendChild(newListRemove);
    document.querySelector("#genStreamerList").appendChild(newListItem);
    
    settings.genStreamerList.push("");

    updateStreamerList();
}

function removeStreamerList() {
    settings.genStreamerList.shift();
    updateStreamerList()
}

function connectStreamer() {
    if (client.ws === null) {
        document.querySelector("#ConnectButton").setAttribute("data-connected", "true")
        document.querySelector("#ConnectButton").innerHTML = "Disconnect";
        client.connect();
    } else {
        document.querySelector("#ConnectButton").setAttribute("data-connected", "false")
        document.querySelector("#ConnectButton").innerHTML = "Connect";
        client.disconnect();
    }
}

// settings.genChatDirection

function updateChatDir(dir) {
    if (dir === "up") {
        settings.genChatDirection = "up";
        document.querySelectorAll(".genChatDirectionBtn")[0].setAttribute("data-active", "true");
        document.querySelectorAll(".genChatDirectionBtn")[1].setAttribute("data-active", "false");
        document.querySelector("#Cnt").style.setProperty("--genChatDirection", "column");
    } else if (dir === "down") {
        settings.genChatDirection = "down";
        document.querySelectorAll(".genChatDirectionBtn")[1].setAttribute("data-active", "true");
        document.querySelectorAll(".genChatDirectionBtn")[0].setAttribute("data-active", "false");
        document.querySelector("#Cnt").style.setProperty("--genChatDirection", "column-reverse");
    }
}

// settings.genSpacing

function updateGenSpacing() {
    settings.genSpacing = parseInt(document.querySelector("#genSpacingInput").value);
    document.querySelector("#Cnt").style.setProperty("--genSpacing", `${settings.genSpacing}px`);
}

// settings.genFilterUser

function updateFilterUser() {
    for (let i = 0; i < settings.genFilterUser.length; i++) {
        settings.genFilterUser[i] = document.querySelectorAll(".genFilterUserInput")[i].value.toLowerCase();
    }
}

function addFilterUser() {
    var newListItem = document.createElement("div"),
        newListInput = document.createElement("input"),
        newListRemove = document.createElement("button");

    newListItem.className = "inputTextListItem";

    newListInput.type = "text";
    newListInput.className = "inputTextListItemInput genFilterUserInput";
    newListInput.setAttribute("oninput", "updateFilterUser()");

    newListRemove.className = "inputTextListItemRemove icon";
    newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeFilterUser();");
    newListRemove.innerHTML = `<img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg">`;

    newListItem.appendChild(newListInput);
    newListItem.appendChild(newListRemove);
    document.querySelector("#genFilterUser").appendChild(newListItem);
    
    settings.genFilterUser.push("");

    updateFilterUser();
}

function removeFilterUser() {
    settings.genFilterUser.shift();
    updateFilterUser()
}

// settings.genFilterMsg

function updateFilterMessage() {
    for (let i = 0; i < settings.genFilterMsg.length; i++) {
        settings.genFilterMsg[i] = document.querySelectorAll(".genFilterMessageInput")[i].value.toLowerCase();
    }
}

function addFilterMessage() {
    var newListItem = document.createElement("div"),
        newListInput = document.createElement("input"),
        newListRemove = document.createElement("button");

    newListItem.className = "inputTextListItem";

    newListInput.type = "text";
    newListInput.className = "inputTextListItemInput genFilterMessageInput";
    newListInput.setAttribute("oninput", "updateFilterMessage()");

    newListRemove.className = "inputTextListItemRemove icon";
    newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeFilterMessage();");
    newListRemove.innerHTML = `<img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg">`;

    newListItem.appendChild(newListInput);
    newListItem.appendChild(newListRemove);
    document.querySelector("#genFilterMessage").appendChild(newListItem);
    
    settings.genFilterMsg.push("");

    updateFilterMessage();
}

function removeFilterMessage() {
    settings.genFilterMsg.shift();
    updateFilterMessage()
}

// settings.genMaxMessages

function updateMaxMsg() {
    settings.genMaxMessages = parseInt(document.querySelector("#genMaxMsgInput").value);
}

var roleList = [
        "user",
        "sub",
        "vip",
        "mod"
    ],
    activeRole = "user";

function changeActiveRole(val) {
    document.querySelectorAll(".roleBtn").forEach(roleBtn => {
        roleBtn.setAttribute("data-active", "false");
    });
    event.target.setAttribute("data-active", "true");

    activeRole = val;
    loadingRole = val;

    if (val === "user") {
        document.querySelector(":root").style.setProperty("--bg1", "#282828");
        document.querySelector(":root").style.setProperty("--bg2", "#111111");
        document.querySelectorAll(".roleHeaderDescr").forEach(h3 => {
            h3.innerHTML = "User"
        })
    } else if (val === "sub") {
        document.querySelector(":root").style.setProperty("--bg1", "#3a3505");
        document.querySelector(":root").style.setProperty("--bg2", "#221e02");
        document.querySelectorAll(".roleHeaderDescr").forEach(h3 => {
            h3.innerHTML = "Sub"
        })
    } else if (val === "vip") {
        document.querySelector(":root").style.setProperty("--bg1", "#190e4d");
        document.querySelector(":root").style.setProperty("--bg2", "#0b0429");
        document.querySelectorAll(".roleHeaderDescr").forEach(h3 => {
            h3.innerHTML = "VIP"
        })
    } else if (val === "mod") {
        document.querySelector(":root").style.setProperty("--bg1", "#7c1313");
        document.querySelector(":root").style.setProperty("--bg2", "#530808");
        document.querySelectorAll(".roleHeaderDescr").forEach(h3 => {
            h3.innerHTML = "Mod"
        })
    }

    loadingData();
}

function switchRoleActive(dir) {
    if (event.target.getAttribute("data-active") === "false") {
        event.target.setAttribute("data-active", "true");
        eval(dir)[`${activeRole}`].active = true
    } else if (activeRole !== "user") {
        event.target.setAttribute("data-active", "false");
        eval(dir)[`${activeRole}`].active = false
    }
    decompileCbxBG();
    decompileCbxBorder();
    decompileCbxBorderRadius();
    decompileCbxShadow();
    decompileCbxSpacing();
    decompileCbxSizing();
    decompileUsnBG();
    decompileUsnBorder();
    decompileUsnBorderRadius();
    decompileUsnShadow();
    decompileUsnSpacing();
    decompileUsnSizing();
    decompileUsnFont();
    decompileUsnFontShadow();
    decompileUsnContent();
    decompileMsgBG();
    decompileMsgBorder();
    decompileMsgBorderRadius();
    decompileMsgShadow();
    decompileMsgSpacing();
    decompileMsgSizing();
    decompileMsgFont();
    decompileMsgFontShadow();
    decompileMsgContent();
    decompileOthEmotes();
    decompileOthBadges();
}

// settings.cbxBackground

function decompileCbxBG() {
    roleList.forEach(role => {
        if (settings.cbxBackground[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
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
                cbx.style.setProperty(`--cbxBackground`, cbxBackground);
            });
        }
    });
}

function updateColorSliderCbxBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderCbxBGCont").length; i++) {
        if (settings.cbxBackground[`${activeRole}`].value[i].type !== "solid") {
            
            var cbxBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderCbxBGCont")[i].querySelectorAll(".colorSliderCbxBG"),
                colorList = settings.cbxBackground[`${activeRole}`].value[i].colors;

            for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value[i].colors.length; j++) {
                settings.cbxBackground[`${activeRole}`].value[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value[i].colors.length; j++) {
                for (let k = 0; k < settings.cbxBackground[`${activeRole}`].value[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.cbxBackground[`${activeRole}`].value[i].colors[j].position >= settings.cbxBackground[`${activeRole}`].value[i].colors[k].position) {
                            settings.cbxBackground[`${activeRole}`].value[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value[i].colors.length; j++) {
                var resultElmnt = settings.cbxBackground[`${activeRole}`].value[i].colors.find(findElmnt => findElmnt.count === j);
                cbxBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.cbxBackground[`${activeRole}`].value[i].colors.length - 1) {
                    cbxBGPrev += ", ";
                } else {
                    cbxBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderCbxBGCont")[i].style.backgroundImage = cbxBGPrev;
        } else {
            var cbxBGPrev = `${settings.cbxBackground[`${activeRole}`].value[i].colors[0].color}${dec2hex(settings.cbxBackground[`${activeRole}`].value[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderCbxBGCont")[i].style.backgroundColor = cbxBGPrev;
        }
    }
    decompileCbxBG();
}

var activeCbxBGGrad = 0;
var activeCbxBGColor = 0;

function openColorCbxBGBox(grdNum, clrNum) {
    if (grdNum !== activeCbxBGGrad && activeCbxBGGrad !== undefined && activeCbxBGGrad < settings.cbxBackground[`${activeRole}`].value.length) {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "false");
    }
    activeCbxBGGrad = grdNum;
    activeCbxBGColor = clrNum;
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeInput").value = settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].color;
    if (settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].type === "custom") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].type === "twitch") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeOpacity").value = settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].opacity;
}

function updateColorCbxBG(type) {
    if (type) {settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].color = document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeInput").value;
    settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors[activeCbxBGColor].opacity = parseInt(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderCbxBGBox();

    decompileCbxBG();
}

function deleteColorCbxBGBox() {
    settings.cbxBackground[`${activeRole}`].value[activeCbxBGGrad].colors.splice(activeCbxBGColor, 1);
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG")[activeCbxBGColor].remove();
    updateColorSliderCbxBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG").length; i++) {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG")[i].setAttribute("onpointerdown", `openColorCbxBGBox(${activeCbxBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "false");
    activeCbxBGGrad = undefined;
    activeCbxBGColor = undefined;

    for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.cbxBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorCbxBGBox(${j}, ${k})`)
        }
    }

    decompileCbxBG();
}

function addColorSliderCbxBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderCbxBG";newSlider.setAttribute("oninput", "updateColorSliderCbxBGBox()");newSlider.setAttribute("onpointerdown", `openColorCbxBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderCbxBGCont")[i].appendChild(newSlider);

    settings.cbxBackground[`${activeRole}`].value[i].colors.push({
        position: newSlider.value, // In %
        type: "custom",
        color: "#ffffff",
        opacity: 255, // In Hex
        count: 0
    });
    updateColorSliderCbxBGBox();
    openColorCbxBGBox(i, e.target.parentNode.querySelectorAll(".colorSlider").length - 1);
    
    updateColorSliderCbxBGBox();
    
    decompileCbxBG();
}

function addGradientCbxBG(type) {
    var elmntI = document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu").length;

    if (type === "solid") {
        settings.cbxBackground[`${activeRole}`].value.push({
            type: "solid",
            colors: [
                {
                    position:0,
                    type: "custom",
                    color:"#ffffff",
                    opacity:255,
                    count:0
                }
            ]
        });
        
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont" style="background-color:#ffffff;">
                            <input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorCbxBG('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;
    } else if (type === "linear") {
        settings.cbxBackground[`${activeRole}`].value.push({
            type: "linear",
            rotate: 90, // In deg
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorCbxBG('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="90" oninput="updateLinearRotCbxBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
            `;
    } else if (type === "radial") {
        settings.cbxBackground[`${activeRole}`].value.push({
            type: "radial",
            size: "farthest-corner", // farthest/closest - corner/side, circle
            xPos: 50, // In %
            yPos: 50, // In %
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorCbxBG('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContCbxBG">
                        <button data-active="true" onclick="updateRadialTypeCbxBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeCbxBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeCbxBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeCbxBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeCbxBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosCbxBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosCbxBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
    
    decompileCbxBG();
}

function removeGradientCbxBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    if (i < activeCbxBGGrad) {
        activeCbxBGGrad -= 1;
    }
    settings.cbxBackground[`${activeRole}`].value.splice(i, 1);
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i].remove();
    for (let j = 0; j < document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu").length; j++) {
        for (let k = 0; k < document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider").length; k++) {
            document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorCbxBGBox(${j}, ${k})`)
        }
    }
    
    decompileCbxBG();
}

function updateRadialTypeCbxBG(e, size) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    settings.cbxBackground[`${activeRole}`].value[i].size = size;
    for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value.length; j++) {
        if (settings.cbxBackground[`${activeRole}`].value[j].type === "radial") {
            for (let k = 0; k < document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContCbxBG").querySelectorAll("button").length; k++) {
                document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContCbxBG").querySelectorAll("button")[k].setAttribute("data-active", "false");
            }
            e.target.setAttribute("data-active", "true");
        }
    }
    
    decompileCbxBG();
}

function updateLinearRotCbxBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    settings.cbxBackground[`${activeRole}`].value[i].rotate = parseInt(e.target.value);
    
    decompileCbxBG();
}

function updateRadialPosCbxBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.cbxBackground[`${activeRole}`].value[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.cbxBackground[`${activeRole}`].value[i].yPos = parseInt(e.target.value);
    }
    
    decompileCbxBG();
}

function moveColorSliderCbxBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.cbxBackground[`${activeRole}`].value[i];
        settings.cbxBackground[`${activeRole}`].value.splice(i, 1);
        settings.cbxBackground[`${activeRole}`].value.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i]);
        if (activeCbxBGGrad === i) {
            activeCbxBGGrad -= 1;
        } else if (activeCbxBGGrad === i - 1) {
            activeCbxBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.cbxBackground[`${activeRole}`].value.length - 1) {
        var elmnt = settings.cbxBackground[`${activeRole}`].value[i];
        settings.cbxBackground[`${activeRole}`].value.splice(i, 1);
        settings.cbxBackground[`${activeRole}`].value.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i]);
        if (activeCbxBGGrad === i) {
            activeCbxBGGrad += 1;
        } else if (activeCbxBGGrad === i + 1) {
            activeCbxBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.cbxBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.cbxBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorCbxBGBox(${j}, ${k})`)
        }
    }
    
    decompileCbxBG();
}

// settings.cbxBorder

function decompileCbxBorder() {
    roleList.forEach(role => {
        if (settings.cbxBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                if (settings.cbxBorder[`${role}`].value.top.color.type === "custom") {
                    cbx.style.setProperty(`--cbxBorderTop`, `${settings.cbxBorder[`${role}`].value.top.type} ${settings.cbxBorder[`${role}`].value.top.width}px ${settings.cbxBorder[`${role}`].value.top.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.top.color.opacity)}`);
                } else if (settings.cbxBorder[`${role}`].value.top.color.type === "twitch") {
                    cbx.style.setProperty(`--cbxBorderTop`, `${settings.cbxBorder[`${role}`].value.top.type} ${settings.cbxBorder[`${role}`].value.top.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.top.color.opacity)}`);
                }

                if (settings.cbxBorder[`${role}`].value.right.color.type === "custom") {
                    cbx.style.setProperty(`--cbxBorderRight`, `${settings.cbxBorder[`${role}`].value.right.type} ${settings.cbxBorder[`${role}`].value.right.width}px ${settings.cbxBorder[`${role}`].value.right.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.right.color.opacity)}`);
                } else if (settings.cbxBorder[`${role}`].value.right.color.type === "twitch") {
                    cbx.style.setProperty(`--cbxBorderRight`, `${settings.cbxBorder[`${role}`].value.right.type} ${settings.cbxBorder[`${role}`].value.right.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.right.color.opacity)}`);
                }

                if (settings.cbxBorder[`${role}`].value.bottom.color.type === "custom") {
                    cbx.style.setProperty(`--cbxBorderBottom`, `${settings.cbxBorder[`${role}`].value.bottom.type} ${settings.cbxBorder[`${role}`].value.bottom.width}px ${settings.cbxBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.bottom.color.opacity)}`);
                } else if (settings.cbxBorder[`${role}`].value.bottom.color.type === "twitch") {
                    cbx.style.setProperty(`--cbxBorderBottom`, `${settings.cbxBorder[`${role}`].value.bottom.type} ${settings.cbxBorder[`${role}`].value.bottom.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.bottom.color.opacity)}`);
                }

                if (settings.cbxBorder[`${role}`].value.left.color.type === "custom") {
                    cbx.style.setProperty(`--cbxBorderLeft`, `${settings.cbxBorder[`${role}`].value.left.type} ${settings.cbxBorder[`${role}`].value.left.width}px ${settings.cbxBorder[`${role}`].value.left.color.color}${dec2hex(settings.cbxBorder[`${role}`].value.left.color.opacity)}`);
                } else if (settings.cbxBorder[`${role}`].value.left.color.type === "twitch") {
                    cbx.style.setProperty(`--cbxBorderLeft`, `${settings.cbxBorder[`${role}`].value.left.type} ${settings.cbxBorder[`${role}`].value.left.width}px ${cbx.getAttribute("data-twitch")}${dec2hex(settings.cbxBorder[`${role}`].value.left.color.opacity)}`);
                }
            });
        }
    });
}

var activeCbxBorder = ""

function openBorderMenuCbx(pos) {
    document.querySelector("#borderGridCbx").querySelectorAll(".borderSelect").forEach(elmnt => {
        elmnt.setAttribute("data-active", "false");
    });

    event.target.setAttribute("data-active", "true");

    var borderMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderEdgeMenu"),
        cornerMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderCornerMenu");
    activeCbxBorder = pos;
    if (activeCbxBorder === "top" || activeCbxBorder === "bottom" || activeCbxBorder === "left" || activeCbxBorder === "right") {
        borderMenu.setAttribute("data-active", "true");
        cornerMenu.setAttribute("data-active", "false");

        borderMenu.querySelectorAll(".borderTypeBtn").forEach(elmnt => {
            elmnt.setAttribute("data-active", "false")
        });

        if (settings.cbxBorder[`${activeRole}`].value[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.cbxBorder[`${activeRole}`].value[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.cbxBorder[`${activeRole}`].value[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.cbxBorder[`${activeRole}`].value[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.cbxBorder[`${activeRole}`].value[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.cbxBorder[`${activeRole}`].value[`${pos}`].color.opacity;
        
    } else if (activeCbxBorder === "tl" || activeCbxBorder === "tr" || activeCbxBorder === "bl" || activeCbxBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`];
    }
}

function updateBorderCbx(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].type = value;
    } else if (type === "width") {
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].width = parseInt(document.querySelector("#cbxBorderWidth").value);
    } else if (type === "color") {
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.color = document.querySelector("#cbxBorderColor").value;
    } else if (type === "colorType") {
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.opacity = parseInt(document.querySelector("#cbxBorderOpacity").value);
    } else if (type === "all") {
        settings.cbxBorder[`${activeRole}`].value["top"].type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].type;
        settings.cbxBorder[`${activeRole}`].value["bottom"].type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].type;
        settings.cbxBorder[`${activeRole}`].value["left"].type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].type;
        settings.cbxBorder[`${activeRole}`].value["right"].type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].type;

        settings.cbxBorder[`${activeRole}`].value["top"].width = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].width;
        settings.cbxBorder[`${activeRole}`].value["bottom"].width = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].width;
        settings.cbxBorder[`${activeRole}`].value["left"].width = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].width;
        settings.cbxBorder[`${activeRole}`].value["right"].width = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].width;
        
        settings.cbxBorder[`${activeRole}`].value["top"].color.color = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.color;
        settings.cbxBorder[`${activeRole}`].value["bottom"].color.color = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.color;
        settings.cbxBorder[`${activeRole}`].value["left"].color.color = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.color;
        settings.cbxBorder[`${activeRole}`].value["right"].color.color = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.color;

        settings.cbxBorder[`${activeRole}`].value["top"].color.type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.type;
        settings.cbxBorder[`${activeRole}`].value["bottom"].color.type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.type;
        settings.cbxBorder[`${activeRole}`].value["left"].color.type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.type;
        settings.cbxBorder[`${activeRole}`].value["right"].color.type = "" + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.type;

        settings.cbxBorder[`${activeRole}`].value["top"].color.opacity = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder[`${activeRole}`].value["bottom"].color.opacity = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder[`${activeRole}`].value["left"].color.opacity = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder[`${activeRole}`].value["right"].color.opacity = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`].color.opacity
    }

    decompileCbxBorder();
}

function decompileCbxBorderRadius() {
    roleList.forEach(role => {
        if (settings.cbxBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                cbx.style.setProperty(`--cbxBRtl`, `${settings.cbxBorder[`${role}`].value.tl}px`);
                cbx.style.setProperty(`--cbxBRtr`, `${settings.cbxBorder[`${role}`].value.tr}px`);
                cbx.style.setProperty(`--cbxBRbr`, `${settings.cbxBorder[`${role}`].value.br}px`);
                cbx.style.setProperty(`--cbxBRbl`, `${settings.cbxBorder[`${role}`].value.bl}px`);
            });
        }
    });
}

function updateCornerCbx(type) {
    if (type === "corner") {
        settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`] = parseInt(document.querySelector("#cbxCornerRadius").value);
    } else if (type === "all") {
        settings.cbxBorder[`${activeRole}`].value["tl"] = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`];
        settings.cbxBorder[`${activeRole}`].value["tr"] = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`];
        settings.cbxBorder[`${activeRole}`].value["bl"] = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`];
        settings.cbxBorder[`${activeRole}`].value["br"] = 0 + settings.cbxBorder[`${activeRole}`].value[`${activeCbxBorder}`];
    }

    decompileCbxBorderRadius();
}

// settings.cbxShadow

function decompileCbxShadow() {
    roleList.forEach(role => {
        if (settings.cbxShadow[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
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

                cbx.style.setProperty(`--cbxBS`, cbxShadow);
            });
        }
    });
}

var activeCbxShadow = -1;

function openShadowCbx(triggerAdd) {
    for (let i = 0; i < settings.cbxShadow[`${activeRole}`].value.length; i++) {
        document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeCbxShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeCbxShadow >= 0) {
        document.querySelector(".shadowSettingsCbx").setAttribute("data-active", "true");
        document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[activeCbxShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[0].value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].xPos;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[1].value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].yPos;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[2].value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].blur;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[3].value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].expand;
        document.querySelector(".shadowSettingsCbx").querySelector(".cbxShadowInset").setAttribute("data-active", settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].inset);
        
        if (settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#cbxShadowOpacity").value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.opacity;
        
        document.querySelector("#cbxShadowColor").value = settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.color;
    } else if (activeCbxShadow === -1) {
        document.querySelector(".shadowSettingsCbx").setAttribute("data-active", "false");
    }
}

function addShadowCbx() {
    var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";

        shadowElmnt.innerHTML = `
            <button class="shadowElmntBtn" onclick="openShadowCbx()"></button>
            <button class="shadowElmntRmv icon" onclick="removeShadowCbx()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

    document.querySelector(".shadowColCbx").appendChild(shadowElmnt);

    settings.cbxShadow[`${activeRole}`].value.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        expand: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        },
        inset: false
    });

    activeCbxShadow = settings.cbxShadow[`${activeRole}`].value.length - 1;
    openShadowCbx(true);
    
    decompileCbxShadow();
}

function updateShadowCbx(type, value) {
    settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].xPos    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[0].value);
    settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].yPos    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[1].value);
    settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].blur    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[2].value);
    settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].expand  = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[3].value);
    
    settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.opacity = parseInt(document.querySelector("#cbxShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsCbx").querySelector(".cbxShadowInset").getAttribute("data-active") === "false") {
        settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].inset = false;
    } else {
        settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].inset = true;
    }

    if (type === "colorType") {
        settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.cbxShadow[`${activeRole}`].value[activeCbxShadow].color.color = document.querySelector("#cbxShadowColor").value;
    }

    for (let i = 0; i < settings.cbxShadow[`${activeRole}`].value.length; i++) {
        var cbxStyle = `${settings.cbxShadow[`${activeRole}`].value[i].xPos}px ${settings.cbxShadow[`${activeRole}`].value[i].yPos}px ${settings.cbxShadow[`${activeRole}`].value[i].blur}px ${settings.cbxShadow[`${activeRole}`].value[i].expand}px ${settings.cbxShadow[`${activeRole}`].value[i].color.color}${dec2hex(settings.cbxShadow[`${activeRole}`].value[i].color.opacity)}`;
        if (settings.cbxShadow[`${activeRole}`].value[i].inset === true) {
            cbxStyle += " inset";
        }

        document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[i].style.boxShadow = cbxStyle;
    }
    
    decompileCbxShadow();
}

function removeSwitchShadowCbx() {
    if (document.querySelector(".shadowColCbx").getAttribute("data-delete-active") === "false") {
        document.querySelector(".shadowColCbx").setAttribute("data-delete-active", "true");
    } else {
        document.querySelector(".shadowColCbx").setAttribute("data-delete-active", "false");
    }
    
    decompileCbxShadow();
}

function removeShadowCbx() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    if (i <= activeCbxShadow) {
        activeCbxShadow -= 1;
    }
    settings.cbxShadow[`${activeRole}`].value.splice(i, 1);

    document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowCbx(true);
    
    decompileCbxShadow();
}

// settings.cbxSpacing

function decompileCbxSpacing() {
    roleList.forEach(role => {
        if (settings.cbxPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                cbx.style.setProperty(`--cbxSpacingOT`, `${settings.cbxPosition[`${role}`].value.spacing.outer.top}px`);
                cbx.style.setProperty(`--cbxSpacingOR`, `${settings.cbxPosition[`${role}`].value.spacing.outer.right}px`);
                cbx.style.setProperty(`--cbxSpacingOB`, `${settings.cbxPosition[`${role}`].value.spacing.outer.bottom}px`);
                cbx.style.setProperty(`--cbxSpacingOL`, `${settings.cbxPosition[`${role}`].value.spacing.outer.left}px`);

                cbx.style.setProperty(`--cbxSpacingIT`, `${settings.cbxPosition[`${role}`].value.spacing.inner.top}px`);
                cbx.style.setProperty(`--cbxSpacingIR`, `${settings.cbxPosition[`${role}`].value.spacing.inner.right}px`);
                cbx.style.setProperty(`--cbxSpacingIB`, `${settings.cbxPosition[`${role}`].value.spacing.inner.bottom}px`);
                cbx.style.setProperty(`--cbxSpacingIL`, `${settings.cbxPosition[`${role}`].value.spacing.inner.left}px`);
            });
        }
    });
}

function updateCbxSpacing(pos) {
    if (pos === "OT") {
        settings.cbxPosition[`${activeRole}`].value.spacing.outer.top = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.cbxPosition[`${activeRole}`].value.spacing.outer.left = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.cbxPosition[`${activeRole}`].value.spacing.outer.right = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.cbxPosition[`${activeRole}`].value.spacing.outer.bottom = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.cbxPosition[`${activeRole}`].value.spacing.inner.top = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.cbxPosition[`${activeRole}`].value.spacing.inner.left = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.cbxPosition[`${activeRole}`].value.spacing.inner.right = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.cbxPosition[`${activeRole}`].value.spacing.inner.bottom = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileCbxSpacing();
}

// settings.cbxSizing

function decompileCbxSizing() {
    roleList.forEach(role => {
        if (settings.cbxPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                cbx.style.setProperty(`--cbxSizing`, settings.cbxPosition[`${role}`].value.sizing);
            });
        }
    });
}

function updateCbxSizing(type) {
    if (type === "stretch") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-start") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "center") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-end") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "true");
    }
    
    settings.cbxPosition[`${activeRole}`].value.sizing = type;

    decompileCbxSizing();
}

// settings.usnBackground

function decompileUsnBG() {
    roleList.forEach(role => {
        if (settings.usnBackground[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                var usnBackground = "";
                for (let i = 0; i < settings.usnBackground[`${role}`].value.length; i++) {
                    if (settings.usnBackground[`${role}`].value[i].type === "solid") {
                        if (settings.usnBackground[`${role}`].value[i].colors[0].type === "custom") {
                            usnBackground += `linear-gradient(${settings.usnBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)}, ${settings.usnBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)})`;
                        } else if (settings.usnBackground[`${role}`].value[i].colors[0].type === "twitch") {
                            usnBackground += `linear-gradient(${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)}, ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[`${role}`].value[i].colors[0].opacity)})`;
                        }
                    } else if (settings.usnBackground[`${role}`].value[i].type === "linear") {
                        var sortedColors = [...settings.usnBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                        usnBackground += `linear-gradient(${settings.usnBackground[`${role}`].value[i].rotate}deg, `;
                        for (let j = 0; j < sortedColors.length; j++) {
                            if (sortedColors[j].type === "custom") {
                                usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                            } else if (sortedColors[j].type === "twitch") {
                                usnBackground += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
                                usnBackground += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
                usn.style.setProperty(`--usnBackground`, usnBackground);
            });
        }
    });
}

function updateColorSliderUsnBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderUsnBGCont").length; i++) {
        if (settings.usnBackground[`${activeRole}`].value[i].type !== "solid") {
            
            var usnBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderUsnBGCont")[i].querySelectorAll(".colorSliderUsnBG"),
                colorList = settings.usnBackground[`${activeRole}`].value[i].colors;

            for (let j = 0; j < settings.usnBackground[`${activeRole}`].value[i].colors.length; j++) {
                settings.usnBackground[`${activeRole}`].value[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.usnBackground[`${activeRole}`].value[i].colors.length; j++) {
                for (let k = 0; k < settings.usnBackground[`${activeRole}`].value[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.usnBackground[`${activeRole}`].value[i].colors[j].position >= settings.usnBackground[`${activeRole}`].value[i].colors[k].position) {
                            settings.usnBackground[`${activeRole}`].value[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.usnBackground[`${activeRole}`].value[i].colors.length; j++) {
                var resultElmnt = settings.usnBackground[`${activeRole}`].value[i].colors.find(findElmnt => findElmnt.count === j);
                usnBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.usnBackground[`${activeRole}`].value[i].colors.length - 1) {
                    usnBGPrev += ", ";
                } else {
                    usnBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderUsnBGCont")[i].style.backgroundImage = usnBGPrev;
        } else {
            var usnBGPrev = `${settings.usnBackground[`${activeRole}`].value[i].colors[0].color}${dec2hex(settings.usnBackground[`${activeRole}`].value[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderUsnBGCont")[i].style.backgroundColor = usnBGPrev;
        }
    }
    decompileUsnBG();
}

var activeUsnBGGrad = 0;
var activeUsnBGColor = 0;

function openColorUsnBGBox(grdNum, clrNum) {
    if (grdNum !== activeUsnBGGrad && activeUsnBGGrad !== undefined && activeUsnBGGrad < settings.usnBackground[`${activeRole}`].value.length) {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "false");
    }
    activeUsnBGGrad = grdNum;
    activeUsnBGColor = clrNum;
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeInput").value = settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].color;
    if (settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].type === "custom") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].type === "twitch") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeOpacity").value = settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].opacity;
}

function updateColorUsnBGBox(type) {
    if (type) {settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].color = document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeInput").value;
    settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors[activeUsnBGColor].opacity = parseInt(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderUsnBGBox();

    decompileUsnBG();
}

function deleteColorUsnBGBox() {
    settings.usnBackground[`${activeRole}`].value[activeUsnBGGrad].colors.splice(activeUsnBGColor, 1);
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG")[activeUsnBGColor].remove();
    updateColorSliderUsnBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG").length; i++) {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG")[i].setAttribute("onpointerdown", `openColorUsnBGBox(${activeUsnBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "false");
    activeUsnBGGrad = undefined;
    activeUsnBGColor = undefined;

    for (let j = 0; j < settings.usnBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.usnBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorUsnBGBox(${j}, ${k})`)
        }
    }

    decompileUsnBG();
}

function addColorSliderUsnBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderUsnBG";newSlider.setAttribute("oninput", "updateColorSliderUsnBGBox()");newSlider.setAttribute("onpointerdown", `openColorUsnBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderUsnBGCont")[i].appendChild(newSlider);

    settings.usnBackground[`${activeRole}`].value[i].colors.push({
        position: newSlider.value, // In %
        type: "custom",
        color: "#ffffff",
        opacity: 255, // In Hex
        count: 0
    });
    updateColorSliderUsnBGBox();
    openColorUsnBGBox(i, e.target.parentNode.querySelectorAll(".colorSlider").length - 1);
    
    updateColorSliderUsnBGBox();

    decompileUsnBG();
}

function addGradientUsnBG(type) {
    var elmntI = document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu").length;

    if (type === "solid") {
        settings.usnBackground[`${activeRole}`].value.push({
            type: "solid",
            colors: [
                {
                    position:0,
                    type: "custom",
                    color:"#ffffff",
                    opacity:255,
                    count:0
                }
            ]
        });
        
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont" style="background-color:#ffffff;">
                            <input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;
    } else if (type === "linear") {
        settings.usnBackground[`${activeRole}`].value.push({
            type: "linear",
            rotate: 90, // In deg
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="90" oninput="updateLinearRotUsnBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
            `;
    } else if (type === "radial") {
        settings.usnBackground[`${activeRole}`].value.push({
            type: "radial",
            size: "farthest-corner", // farthest/closest - corner/side, circle
            xPos: 50, // In %
            yPos: 50, // In %
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContUsnBG">
                        <button data-active="true" onclick="updateRadialTypeUsnBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeUsnBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeUsnBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeUsnBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeUsnBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosUsnBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosUsnBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);

    decompileUsnBG();
}

function removeGradientUsnBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    if (i < activeUsnBGGrad) {
        activeUsnBGGrad -= 1;
    }
    settings.usnBackground[`${activeRole}`].value.splice(i, 1);
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i].remove();
    for (let j = 0; j < document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu").length; j++) {
        for (let k = 0; k < document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider").length; k++) {
            document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorUsnBGBox(${j}, ${k})`)
        }
    }

    decompileUsnBG();
}

function updateRadialTypeUsnBG(e, size) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    settings.usnBackground[`${activeRole}`].value[i].size = size;
    for (let j = 0; j < settings.usnBackground[`${activeRole}`].value.length; j++) {
        if (settings.usnBackground[`${activeRole}`].value[j].type === "radial") {
            for (let k = 0; k < document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContUsnBG").querySelectorAll("button").length; k++) {
                document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContUsnBG").querySelectorAll("button")[k].setAttribute("data-active", "false");
            }
            e.target.setAttribute("data-active", "true");
        }
    }

    decompileUsnBG();
}

function updateLinearRotUsnBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    settings.usnBackground[`${activeRole}`].value[i].rotate = parseInt(e.target.value);

    decompileUsnBG();
}

function updateRadialPosUsnBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.usnBackground[`${activeRole}`].value[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.usnBackground[`${activeRole}`].value[i].yPos = parseInt(e.target.value);
    }

    decompileUsnBG();
}

function moveColorSliderUsnBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.usnBackground[`${activeRole}`].value[i];
        settings.usnBackground[`${activeRole}`].value.splice(i, 1);
        settings.usnBackground[`${activeRole}`].value.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i]);
        if (activeUsnBGGrad === i) {
            activeUsnBGGrad -= 1;
        } else if (activeUsnBGGrad === i - 1) {
            activeUsnBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.usnBackground[`${activeRole}`].value.length - 1) {
        var elmnt = settings.usnBackground[`${activeRole}`].value[i];
        settings.usnBackground[`${activeRole}`].value.splice(i, 1);
        settings.usnBackground[`${activeRole}`].value.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i]);
        if (activeUsnBGGrad === i) {
            activeUsnBGGrad += 1;
        } else if (activeUsnBGGrad === i + 1) {
            activeUsnBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.usnBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.usnBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorUsnBGBox(${j}, ${k})`)
        }
    }

    decompileUsnBG();
}

// settings.usnBorder

function decompileUsnBorder() {
    roleList.forEach(role => {
        if (settings.usnBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn")
                if (settings.usnBorder[`${role}`].value.top.color.type === "custom") {
                    usn.style.setProperty(`--usnBorderTop`, `${settings.usnBorder[`${role}`].value.top.type} ${settings.usnBorder[`${role}`].value.top.width}px ${settings.usnBorder[`${role}`].value.top.color.color}${dec2hex(settings.usnBorder[`${role}`].value.top.color.opacity)}`);
                } else if (settings.usnBorder[`${role}`].value.top.color.type === "twitch") {
                    usn.style.setProperty(`--usnBorderTop`, `${settings.usnBorder[`${role}`].value.top.type} ${settings.usnBorder[`${role}`].value.top.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.top.color.opacity)}`);
                }

                if (settings.usnBorder[`${role}`].value.right.color.type === "custom") {
                    usn.style.setProperty(`--usnBorderRight`, `${settings.usnBorder[`${role}`].value.right.type} ${settings.usnBorder[`${role}`].value.right.width}px ${settings.usnBorder[`${role}`].value.right.color.color}${dec2hex(settings.usnBorder[`${role}`].value.right.color.opacity)}`);
                } else if (settings.usnBorder[`${role}`].value.right.color.type === "twitch") {
                    usn.style.setProperty(`--usnBorderRight`, `${settings.usnBorder[`${role}`].value.right.type} ${settings.usnBorder[`${role}`].value.right.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.right.color.opacity)}`);
                }

                if (settings.usnBorder[`${role}`].value.bottom.color.type === "custom") {
                    usn.style.setProperty(`--usnBorderBottom`, `${settings.usnBorder[`${role}`].value.bottom.type} ${settings.usnBorder[`${role}`].value.bottom.width}px ${settings.usnBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.usnBorder[`${role}`].value.bottom.color.opacity)}`);
                } else if (settings.usnBorder[`${role}`].value.bottom.color.type === "twitch") {
                    usn.style.setProperty(`--usnBorderBottom`, `${settings.usnBorder[`${role}`].value.bottom.type} ${settings.usnBorder[`${role}`].value.bottom.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.bottom.color.opacity)}`);
                }

                if (settings.usnBorder[`${role}`].value.left.color.type === "custom") {
                    usn.style.setProperty(`--usnBorderLeft`, `${settings.usnBorder[`${role}`].value.left.type} ${settings.usnBorder[`${role}`].value.left.width}px ${settings.usnBorder[`${role}`].value.left.color.color}${dec2hex(settings.usnBorder[`${role}`].value.left.color.opacity)}`);
                } else if (settings.usnBorder[`${role}`].value.left.color.type === "twitch") {
                    usn.style.setProperty(`--usnBorderLeft`, `${settings.usnBorder[`${role}`].value.left.type} ${settings.usnBorder[`${role}`].value.left.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder[`${role}`].value.left.color.opacity)}`);
                }
            });
        }
    });
}

var activeUsnBorder = ""

function openBorderMenuUsn(pos) {
    document.querySelector("#borderGridUsn").querySelectorAll(".borderSelect").forEach(elmnt => {
        elmnt.setAttribute("data-active", "false");
    });

    event.target.setAttribute("data-active", "true");

    var borderMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderEdgeMenu"),
        cornerMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderCornerMenu");
    activeUsnBorder = pos;
    if (activeUsnBorder === "top" || activeUsnBorder === "bottom" || activeUsnBorder === "left" || activeUsnBorder === "right") {
        borderMenu.setAttribute("data-active", "true");
        cornerMenu.setAttribute("data-active", "false");

        borderMenu.querySelectorAll(".borderTypeBtn").forEach(elmnt => {
            elmnt.setAttribute("data-active", "false")
        });

        if (settings.usnBorder[`${activeRole}`].value[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.usnBorder[`${activeRole}`].value[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.usnBorder[`${activeRole}`].value[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.usnBorder[`${activeRole}`].value[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.usnBorder[`${activeRole}`].value[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.usnBorder[`${activeRole}`].value[`${pos}`].color.opacity;
        
    } else if (activeUsnBorder === "tl" || activeUsnBorder === "tr" || activeUsnBorder === "bl" || activeUsnBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`];
    }
}

function updateBorderUsn(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].type = value;
    } else if (type === "width") {
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].width = parseInt(document.querySelector("#usnBorderWidth").value);
    } else if (type === "color") {
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.color = document.querySelector("#usnBorderColor").value;
    } else if (type === "colorType") {
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.opacity = parseInt(document.querySelector("#usnBorderOpacity").value);
    } else if (type === "all") {
        settings.usnBorder[`${activeRole}`].value["top"].type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].type;
        settings.usnBorder[`${activeRole}`].value["bottom"].type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].type;
        settings.usnBorder[`${activeRole}`].value["left"].type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].type;
        settings.usnBorder[`${activeRole}`].value["right"].type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].type;

        settings.usnBorder[`${activeRole}`].value["top"].width = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].width;
        settings.usnBorder[`${activeRole}`].value["bottom"].width = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].width;
        settings.usnBorder[`${activeRole}`].value["left"].width = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].width;
        settings.usnBorder[`${activeRole}`].value["right"].width = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].width;
        
        settings.usnBorder[`${activeRole}`].value["top"].color.color = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.color;
        settings.usnBorder[`${activeRole}`].value["bottom"].color.color = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.color;
        settings.usnBorder[`${activeRole}`].value["left"].color.color = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.color;
        settings.usnBorder[`${activeRole}`].value["right"].color.color = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.color;

        settings.usnBorder[`${activeRole}`].value["top"].color.type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.type;
        settings.usnBorder[`${activeRole}`].value["bottom"].color.type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.type;
        settings.usnBorder[`${activeRole}`].value["left"].color.type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.type;
        settings.usnBorder[`${activeRole}`].value["right"].color.type = "" + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.type;

        settings.usnBorder[`${activeRole}`].value["top"].color.opacity = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.opacity
        settings.usnBorder[`${activeRole}`].value["bottom"].color.opacity = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.opacity
        settings.usnBorder[`${activeRole}`].value["left"].color.opacity = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.opacity
        settings.usnBorder[`${activeRole}`].value["right"].color.opacity = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`].color.opacity
    }

    decompileUsnBorder();
}

// settings.usnBorder[`${activeRole}`].value

function decompileUsnBorderRadius() {
    roleList.forEach(role => {
        if (settings.usnBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                usn.style.setProperty(`--usnBRtl`, `${settings.usnBorder[`${role}`].value.tl}px`);
                usn.style.setProperty(`--usnBRtr`, `${settings.usnBorder[`${role}`].value.tr}px`);
                usn.style.setProperty(`--usnBRbr`, `${settings.usnBorder[`${role}`].value.br}px`);
                usn.style.setProperty(`--usnBRbl`, `${settings.usnBorder[`${role}`].value.bl}px`);
            });
        }
    });
}

function updateCornerUsn(type) {
    if (type === "corner") {
        settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`] = parseInt(document.querySelector("#usnCornerRadius").value);
    } else if (type === "all") {
        settings.usnBorder[`${activeRole}`].value["tl"] = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`];
        settings.usnBorder[`${activeRole}`].value["tr"] = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`];
        settings.usnBorder[`${activeRole}`].value["bl"] = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`];
        settings.usnBorder[`${activeRole}`].value["br"] = 0 + settings.usnBorder[`${activeRole}`].value[`${activeUsnBorder}`];
    }

    decompileUsnBorderRadius();
}

// settings.usnShadow

function decompileUsnShadow() {
    roleList.forEach(role => {
        if (settings.usnShadow[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                var usnShadow = "";

                for (let i = 0; i < settings.usnShadow[`${role}`].value.length; i++) {
                    usnShadow += `${settings.usnShadow[`${role}`].value[i].xPos}px ${settings.usnShadow[`${role}`].value[i].yPos}px ${settings.usnShadow[`${role}`].value[i].blur}px ${settings.usnShadow[`${role}`].value[i].expand}px `;
                    if (settings.usnShadow[`${role}`].value[i].color.type === "custom") {
                        usnShadow += `${settings.usnShadow[`${role}`].value[i].color.color}${dec2hex(settings.usnShadow[`${role}`].value[i].color.opacity)}`;
                    } else if (settings.usnShadow[`${role}`].value[i].color.type === "twitch") {
                        usnShadow += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnShadow[`${role}`].value[i].color.opacity)}`;
                    }
                    if (settings.usnShadow[`${role}`].value[i].inset === true) {
                        usnShadow += " inset";
                    }
                    if (i < settings.usnShadow[`${role}`].value.length - 1) {
                        usnShadow += ", ";
                    }
                }

                usn.style.setProperty(`--usnBS`, usnShadow);
            });
        }
    });
}

var activeUsnShadow = -1;

function openShadowUsn(triggerAdd) {
    for (let i = 0; i < settings.usnShadow[`${activeRole}`].value.length; i++) {
        document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeUsnShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeUsnShadow >= 0) {
        document.querySelector(".shadowSettingsUsn").setAttribute("data-active", "true");
        document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[activeUsnShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[0].value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].xPos;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[1].value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].yPos;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[2].value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].blur;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[3].value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].expand;
        document.querySelector(".shadowSettingsUsn").querySelector(".usnShadowInset").setAttribute("data-active", settings.usnShadow[`${activeRole}`].value[activeUsnShadow].inset);
        
        if (settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#usnShadowOpacity").value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.opacity;
        
        document.querySelector("#usnShadowColor").value = settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.color;
    } else if (activeUsnShadow === -1) {
        document.querySelector(".shadowSettingsUsn").setAttribute("data-active", "false");
    }
}

function addShadowUsn() {
    var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";

        shadowElmnt.innerHTML = `
            <button class="shadowElmntBtn" onclick="openShadowUsn()"></button>
            <button class="shadowElmntRmv icon" onclick="removeShadowUsn()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

    document.querySelector(".shadowColUsn").appendChild(shadowElmnt);

    settings.usnShadow[`${activeRole}`].value.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        expand: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        },
        inset: false
    });

    activeUsnShadow = settings.usnShadow[`${activeRole}`].value.length - 1;
    openShadowUsn(true);
    
    decompileUsnShadow();
}

function updateShadowUsn(type, value) {
    settings.usnShadow[`${activeRole}`].value[activeUsnShadow].xPos    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[0].value);
    settings.usnShadow[`${activeRole}`].value[activeUsnShadow].yPos    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[1].value);
    settings.usnShadow[`${activeRole}`].value[activeUsnShadow].blur    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[2].value);
    settings.usnShadow[`${activeRole}`].value[activeUsnShadow].expand  = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[3].value);
    
    settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.opacity = parseInt(document.querySelector("#usnShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsUsn").querySelector(".usnShadowInset").getAttribute("data-active") === "false") {
        settings.usnShadow[`${activeRole}`].value[activeUsnShadow].inset = false;
    } else {
        settings.usnShadow[`${activeRole}`].value[activeUsnShadow].inset = true;
    }

    if (type === "colorType") {
        settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.usnShadow[`${activeRole}`].value[activeUsnShadow].color.color = document.querySelector("#usnShadowColor").value;
    }

    for (let i = 0; i < settings.usnShadow[`${activeRole}`].value.length; i++) {
        var usnStyle = `${settings.usnShadow[`${activeRole}`].value[i].xPos}px ${settings.usnShadow[`${activeRole}`].value[i].yPos}px ${settings.usnShadow[`${activeRole}`].value[i].blur}px ${settings.usnShadow[`${activeRole}`].value[i].expand}px ${settings.usnShadow[`${activeRole}`].value[i].color.color}${dec2hex(settings.usnShadow[`${activeRole}`].value[i].color.opacity)}`;
        if (settings.usnShadow[`${activeRole}`].value[i].inset === true) {
            usnStyle += " inset";
        }

        document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[i].style.boxShadow = usnStyle;
    }
    
    decompileUsnShadow();
}

function removeSwitchShadowUsn() {
    if (document.querySelector(".shadowColUsn").getAttribute("data-delete-active") === "false") {
        document.querySelector(".shadowColUsn").setAttribute("data-delete-active", "true");
    } else {
        document.querySelector(".shadowColUsn").setAttribute("data-delete-active", "false");
    }
    
    decompileUsnShadow();
}

function removeShadowUsn() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    if (i <= activeUsnShadow) {
        activeUsnShadow -= 1;
    }
    settings.usnShadow[`${activeRole}`].value.splice(i, 1);

    document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowUsn(true);
    
    decompileUsnShadow();
}

// settings.usnSpacing

function decompileUsnSpacing() {
    roleList.forEach(role => {
        if (settings.usnPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                usn.style.setProperty(`--usnSpacingOT`, `${settings.usnPosition[`${role}`].value.spacing.outer.top}px`);
                usn.style.setProperty(`--usnSpacingOR`, `${settings.usnPosition[`${role}`].value.spacing.outer.right}px`);
                usn.style.setProperty(`--usnSpacingOB`, `${settings.usnPosition[`${role}`].value.spacing.outer.bottom}px`);
                usn.style.setProperty(`--usnSpacingOL`, `${settings.usnPosition[`${role}`].value.spacing.outer.left}px`);

                usn.style.setProperty(`--usnSpacingIT`, `${settings.usnPosition[`${role}`].value.spacing.inner.top}px`);
                usn.style.setProperty(`--usnSpacingIR`, `${settings.usnPosition[`${role}`].value.spacing.inner.right}px`);
                usn.style.setProperty(`--usnSpacingIB`, `${settings.usnPosition[`${role}`].value.spacing.inner.bottom}px`);
                usn.style.setProperty(`--usnSpacingIL`, `${settings.usnPosition[`${role}`].value.spacing.inner.left}px`);
            });
        }
    });
}

function updateUsnSpacing(pos) {
    if (pos === "OT") {
        settings.usnPosition[`${activeRole}`].value.spacing.outer.top = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.usnPosition[`${activeRole}`].value.spacing.outer.left = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.usnPosition[`${activeRole}`].value.spacing.outer.right = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.usnPosition[`${activeRole}`].value.spacing.outer.bottom = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.usnPosition[`${activeRole}`].value.spacing.inner.top = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.usnPosition[`${activeRole}`].value.spacing.inner.left = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.usnPosition[`${activeRole}`].value.spacing.inner.right = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.usnPosition[`${activeRole}`].value.spacing.inner.bottom = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileUsnSpacing();
}

// settings.usnSizing
// settings.usnPosition

function decompileUsnSizing() {
    roleList.forEach(role => {
        if (settings.usnPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                usn.style.setProperty(`--usnSizing`, settings.usnPosition[`${role}`].value.sizing);
            });
        }
    });
}

function updateUsnSizing(type) {
    if (type === "stretch") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-start") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "center") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-end") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "true");
    }
    
    settings.usnPosition[`${activeRole}`].value.sizing = type;

    decompileUsnSizing();
}

// settings.usnFont

function decompileUsnFont() {
    roleList.forEach(role => {
        if (settings.usnFont[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                usn.style.setProperty(`--usnFontFamily`, settings.usnFont[`${role}`].value.family);

                if (settings.usnFont[`${role}`].value.color.type === "custom") {
                    usn.style.setProperty(`--usnFontColor`, `${settings.usnFont[`${role}`].value.color.color}${dec2hex(settings.usnFont[`${role}`].value.color.opacity)}`);
                } else if (settings.usnFont[`${role}`].value.color.type === "twitch") {
                    usn.style.setProperty(`--usnFontColor`, `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnFont[`${role}`].value.color.opacity)}`);
                }

                usn.style.setProperty(`--usnFontSize`, `${settings.usnFont[`${role}`].value.size}px`);

                usn.style.setProperty(`--usnFontWeight`, settings.usnFont[`${role}`].value.weight);

                if (settings.usnFont[`${role}`].value.italic === true) {
                    usn.style.setProperty(`--usnFontItalic`, "italic");
                } else {
                    usn.style.setProperty(`--usnFontItalic`, "normal");
                }

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

                usn.style.setProperty(`--usnFontLines`, usnFontLines);

                if (settings.usnFont[`${role}`].value.height.auto === true) {
                    usn.style.setProperty(`--usnFontHeight`, "normal");
                } else if (settings.usnFont[`${role}`].value.height.auto === false) {
                    usn.style.setProperty(`--usnFontHeight`, `${settings.usnFont[`${role}`].value.height.height}px`);
                }

                usn.style.setProperty(`--usnFontSpacing`, `${settings.usnFont[`${role}`].value.spacing}px`);

                usn.style.setProperty(`--usnFontAlign`, settings.usnFont[`${role}`].value.align);
            });
        }
    });
}

function updateUsnFont(type, value) {
    settings.usnFont[`${activeRole}`].value.family = document.querySelector("#usnFontFamInp").value;
    settings.usnFont[`${activeRole}`].value.size = document.querySelector("#usnFontSizeInp").value;
    settings.usnFont[`${activeRole}`].value.weight = document.querySelector("#usnFontWeightInp").value;
    settings.usnFont[`${activeRole}`].value.height.height = document.querySelector("#usnFontHeightInp").value;
    settings.usnFont[`${activeRole}`].value.spacing = document.querySelector("#usnFontSpaceInp").value;

    if (type === "style") {
        var styleRow = document.querySelector(".usnFontStyleRow");

        if (event.target.getAttribute("data-active") === "false") {
            event.target.setAttribute("data-active", "true");
        } else {
            event.target.setAttribute("data-active", "false");
        }

        if (styleRow.querySelectorAll("button")[0].getAttribute("data-active") === "true") {
            settings.usnFont[`${activeRole}`].value.lines.upperLine = true;
        } else {
            settings.usnFont[`${activeRole}`].value.lines.upperLine = false;
        }
        if (styleRow.querySelectorAll("button")[1].getAttribute("data-active") === "true") {
            settings.usnFont[`${activeRole}`].value.lines.crossLine = true;
        } else {
            settings.usnFont[`${activeRole}`].value.lines.crossLine = false;
        }
        if (styleRow.querySelectorAll("button")[2].getAttribute("data-active") === "true") {
            settings.usnFont[`${activeRole}`].value.lines.underLine = true;
        } else {
            settings.usnFont[`${activeRole}`].value.lines.underLine = false;
        }
        if (styleRow.querySelectorAll("button")[3].getAttribute("data-active") === "true") {
            settings.usnFont[`${activeRole}`].value.italic = true;
        } else {
            settings.usnFont[`${activeRole}`].value.italic = false;
        }
    } else if (type === "align") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.setAttribute("data-active", "true");

        settings.usnFont[`${activeRole}`].value.align = event.target.getAttribute("data-value");
    } else if (type === "autoheight") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.usnFont[`${activeRole}`].value.height.auto = false;
        } else {
            event.target.setAttribute("data-active", "true");
            settings.usnFont[`${activeRole}`].value.height.auto = true;
        }
    } else if (type === "colorType") {
        settings.usnFont[`${activeRole}`].value.color.type = value;
        if (value === "custom") {
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.usnFont[`${activeRole}`].value.color.color = document.querySelector("#usnFontColor").value;
    }
    
    settings.usnFont[`${activeRole}`].value.color.opacity = parseInt(document.querySelector("#usnFontOpacity").value);

    decompileUsnFont();
}

// settings.usnFontShadow

function decompileUsnFontShadow() {
    roleList.forEach(role => {
        if (settings.usnFontShadow[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");
                var usnFontShadow = "";

                for (let i = 0; i < settings.usnFontShadow[`${role}`].value.length; i++) {
                    usnFontShadow += `${settings.usnFontShadow[`${role}`].value[i].xPos}px ${settings.usnFontShadow[`${role}`].value[i].yPos}px ${settings.usnFontShadow[`${role}`].value[i].blur}px `;
                    if (settings.usnFontShadow[`${role}`].value[i].color.type === "custom") {
                        usnFontShadow += `${settings.usnFontShadow[`${role}`].value[i].color.color}${dec2hex(settings.usnFontShadow[`${role}`].value[i].color.opacity)}`;
                    } else if (settings.usnFontShadow[`${role}`].value[i].color.type === "twitch") {
                        usnFontShadow += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnFontShadow[`${role}`].value[i].color.opacity)}`;
                    }
                    if (i < settings.usnFontShadow[`${role}`].value.length - 1) {
                        usnFontShadow += ", ";
                    }
                }
                usn.style.setProperty(`--usnFontShadow`, usnFontShadow);
            });
        }
    });
}

var activeUsnFontShadow = -1;

function openFontShadowUsn(triggerAdd) {
    for (let i = 0; i < settings.usnFontShadow[`${activeRole}`].value.length; i++) {
        document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeUsnFontShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeUsnFontShadow >= 0) {
        document.querySelector(".fontShadowSettingsUsn").setAttribute("data-active", "true");
        document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[activeUsnFontShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[0].value = settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].xPos;
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[1].value = settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].yPos;
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[2].value = settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].blur;
        
        if (settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.type === "custom") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.type === "twitch") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#usnFontShadowOpacity").value = settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.opacity;
        
        document.querySelector("#usnFontShadowColor").value = settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.color;
    } else if (activeUsnFontShadow === -1) {
        document.querySelector(".fontShadowSettingsUsn").setAttribute("data-active", "false");
    }
}

function addFontShadowUsn() {
    var fontShadowElmnt = document.createElement("div");
        fontShadowElmnt.className = "fontShadowElmnt";

        fontShadowElmnt.innerHTML = `
            <button class="fontShadowElmntBtn" onclick="openFontShadowUsn()"></button>
            <button class="fontShadowElmntRmv icon" onclick="removeFontShadowUsn()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

    document.querySelector(".fontShadowColUsn").appendChild(fontShadowElmnt);

    settings.usnFontShadow[`${activeRole}`].value.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        }
    });

    activeUsnFontShadow = settings.usnFontShadow[`${activeRole}`].value.length - 1;
    openFontShadowUsn(true);
    
    decompileUsnFontShadow();
}

function updateFontShadowUsn(type, value) {
    settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].xPos = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[0].value);
    settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].yPos = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[1].value);
    settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].blur = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[2].value);
    
    settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.opacity = parseInt(document.querySelector("#usnFontShadowOpacity").value);
    
    if (type === "colorType") {
        settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (value === "twitch") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }
    } else if (type === "color") {
        settings.usnFontShadow[`${activeRole}`].value[activeUsnFontShadow].color.color = document.querySelector("#usnFontShadowColor").value;
    }

    for (let i = 0; i < settings.usnFontShadow[`${activeRole}`].value.length; i++) {
        var usnStyle = `${settings.usnFontShadow[`${activeRole}`].value[i].xPos}px ${settings.usnFontShadow[`${activeRole}`].value[i].yPos}px ${settings.usnFontShadow[`${activeRole}`].value[i].blur}px ${settings.usnFontShadow[`${activeRole}`].value[i].color.color}${dec2hex(settings.usnFontShadow[`${activeRole}`].value[i].color.opacity)}`;
        

        document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[i].style.boxShadow = usnStyle;
    }
    
    decompileUsnFontShadow();
}

function removeSwitchFontShadowUsn() {
    if (document.querySelector(".fontShadowColUsn").getAttribute("data-delete-active") === "false") {
        document.querySelector(".fontShadowColUsn").setAttribute("data-delete-active", "true");
    } else {
        document.querySelector(".fontShadowColUsn").setAttribute("data-delete-active", "false");
    }
    
    decompileUsnFontShadow();
}

function removeFontShadowUsn() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    if (i <= activeUsnFontShadow) {
        activeUsnFontShadow -= 1;
    }
    settings.usnFontShadow[`${activeRole}`].value.splice(i, 1);

    document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[i].remove();

    openFontShadowUsn(true);
    
    decompileUsnFontShadow();
}

// settings.usnContent

function decompileUsnContent() {
    roleList.forEach(role => {
        if (settings.usnContent[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn");

                var usnContentFinal = "" + settings.usnContent[`${role}`].value;

                usnContentFinal = usnContentFinal.replace(/{usn}/g, usn.parentNode.getAttribute("data-username"));

                usnContentFinal = usnContentFinal.replace(/{msg}/g, usn.parentNode.getAttribute("data-message"));

                usnContentFinal = usnContentFinal.replace(/{streamer}/g, usn.parentNode.getAttribute("data-streamer"));
                
                usnContentFinal = usnContentFinal.replace(/{h}/g, usn.parentNode.getAttribute("data-h"));
                
                usnContentFinal = usnContentFinal.replace(/{hh}/g, usn.parentNode.getAttribute("data-hh"));
                
                usnContentFinal = usnContentFinal.replace(/{m}/g, usn.parentNode.getAttribute("data-m"));
                
                usnContentFinal = usnContentFinal.replace(/{mm}/g, usn.parentNode.getAttribute("data-mm"));
                
                usnContentFinal = usnContentFinal.replace(/{s}/g, usn.parentNode.getAttribute("data-s"));
                
                usnContentFinal = usnContentFinal.replace(/{ss}/g, usn.parentNode.getAttribute("data-ss"));

                usnContentFinal = usnContentFinal.replace(/{badges}/g, usn.parentNode.getAttribute("data-badges"));

                usn.innerHTML = usnContentFinal;
            });
        }
    });
}

function updateUsnContent() {
    settings.usnContent[`${activeRole}`].value = document.querySelector(".usnContentInp").value;

    decompileUsnContent();
}

// settings.msgBackground

function decompileMsgBG() {
    roleList.forEach(role => {
        if (settings.msgBackground[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                msgBackground = "";
                for (let i = 0; i < settings.msgBackground[`${role}`].value.length; i++) {
                    if (settings.msgBackground[`${role}`].value[i].type === "solid") {
                        if (settings.msgBackground[`${role}`].value[i].colors[0].type === "custom") {
                            msgBackground += `linear-gradient(${settings.msgBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)}, ${settings.msgBackground[`${role}`].value[i].colors[0].color}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)})`;
                        } else if (settings.msgBackground[`${role}`].value[i].colors[0].type === "twitch") {
                            msgBackground += `linear-gradient(${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)}, ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[`${role}`].value[i].colors[0].opacity)})`;
                        }
                    } else if (settings.msgBackground[`${role}`].value[i].type === "linear") {
                        var sortedColors = [...settings.msgBackground[`${role}`].value[i].colors].sort((a, b) => {return a.count - b.count});
                        msgBackground += `linear-gradient(${settings.msgBackground[`${role}`].value[i].rotate}deg, `;
                        for (let j = 0; j < sortedColors.length; j++) {
                            if (sortedColors[j].type === "custom") {
                                msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                            } else if (sortedColors[j].type === "twitch") {
                                msgBackground += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
                                msgBackground += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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

                msg.style.setProperty(`--msgBackground`, msgBackground);
            });
        }
    });
}

function updateColorSliderMsgBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderMsgBGCont").length; i++) {
        if (settings.msgBackground[`${activeRole}`].value[i].type !== "solid") {
            
            var msgBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderMsgBGCont")[i].querySelectorAll(".colorSliderMsgBG"),
                colorList = settings.msgBackground[`${activeRole}`].value[i].colors;

            for (let j = 0; j < settings.msgBackground[`${activeRole}`].value[i].colors.length; j++) {
                settings.msgBackground[`${activeRole}`].value[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.msgBackground[`${activeRole}`].value[i].colors.length; j++) {
                for (let k = 0; k < settings.msgBackground[`${activeRole}`].value[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.msgBackground[`${activeRole}`].value[i].colors[j].position >= settings.msgBackground[`${activeRole}`].value[i].colors[k].position) {
                            settings.msgBackground[`${activeRole}`].value[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.msgBackground[`${activeRole}`].value[i].colors.length; j++) {
                var resultElmnt = settings.msgBackground[`${activeRole}`].value[i].colors.find(findElmnt => findElmnt.count === j);
                msgBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.msgBackground[`${activeRole}`].value[i].colors.length - 1) {
                    msgBGPrev += ", ";
                } else {
                    msgBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderMsgBGCont")[i].style.backgroundImage = msgBGPrev;
        } else {
            var msgBGPrev = `${settings.msgBackground[`${activeRole}`].value[i].colors[0].color}${dec2hex(settings.msgBackground[`${activeRole}`].value[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderMsgBGCont")[i].style.backgroundColor = msgBGPrev;
        }
    }
    
    decompileMsgBG();
}

var activeMsgBGGrad = 0;
var activeMsgBGColor = 0;

function openColorMsgBGBox(grdNum, clrNum) {
    if (grdNum !== activeMsgBGGrad && activeMsgBGGrad !== undefined && activeMsgBGGrad < settings.msgBackground[`${activeRole}`].value.length) {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "false");
    }
    activeMsgBGGrad = grdNum;
    activeMsgBGColor = clrNum;
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeInput").value = settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].color;
    if (settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].type === "custom") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].type === "twitch") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeOpacity").value = settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].opacity;
}

function updateColorMsgBGBox(type) {
    if (type) {settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].color = document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeInput").value;
    settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors[activeMsgBGColor].opacity = parseInt(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderMsgBGBox();
    
    decompileMsgBG();
}

function deleteColorMsgBGBox() {
    settings.msgBackground[`${activeRole}`].value[activeMsgBGGrad].colors.splice(activeMsgBGColor, 1);
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG")[activeMsgBGColor].remove();
    updateColorSliderMsgBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG").length; i++) {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG")[i].setAttribute("onpointerdown", `openColorMsgBGBox(${activeMsgBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "false");
    activeMsgBGGrad = undefined;
    activeMsgBGColor = undefined;

    for (let j = 0; j < settings.msgBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.msgBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorMsgBGBox(${j}, ${k})`)
        }
    }
    
    decompileMsgBG();
}

function addColorSliderMsgBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderMsgBG";newSlider.setAttribute("oninput", "updateColorSliderMsgBGBox()");newSlider.setAttribute("onpointerdown", `openColorMsgBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderMsgBGCont")[i].appendChild(newSlider);

    settings.msgBackground[`${activeRole}`].value[i].colors.push({
        position: newSlider.value, // In %
        type: "custom",
        color: "#ffffff",
        opacity: 255, // In Hex
        count: 0
    });
    updateColorSliderMsgBGBox();
    openColorMsgBGBox(i, e.target.parentNode.querySelectorAll(".colorSlider").length - 1);
    
    updateColorSliderMsgBGBox();
    
    decompileMsgBG();
}

function addGradientMsgBG(type) {
    var elmntI = document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu").length;

    if (type === "solid") {
        settings.msgBackground[`${activeRole}`].value.push({
            type: "solid",
            colors: [
                {
                    position:0,
                    type: "custom",
                    color:"#ffffff",
                    opacity:255,
                    count:0
                }
            ]
        });
        
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont" style="background-color:#ffffff;">
                            <input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorMsgBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;
    } else if (type === "linear") {
        settings.msgBackground[`${activeRole}`].value.push({
            type: "linear",
            rotate: 90, // In deg
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorMsgBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="90" oninput="updateLinearRotMsgBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
            `;
    } else if (type === "radial") {
        settings.msgBackground[`${activeRole}`].value.push({
            type: "radial",
            size: "farthest-corner", // farthest/closest - corner/side, circle
            xPos: 50, // In %
            yPos: 50, // In %
            colors: [
                {
                    position: 0, // In %
                    type: "custom",
                    color: "#000000",
                    opacity: 255, // In Hex
                    count: 0
                }, {
                    position: 100, // In %
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255, // In Hex
                    count: 1
                }
            ]
        });
        var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp icon" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown icon" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont" style="background-image: linear-gradient(90deg, #000000 0%, #ffffff 100%);">
                            <input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${elmntI}, 0)" type="range" value="0" min="0" max="100" step="0.1">
                            <input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${elmntI}, 1)" type="range" value="100" min="0" max="100" step="0.1">
                        </div>
                    </div>
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <div class="colorChangeType selectItemRow">
                        <button class="icon" onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button class="icon" onclick="updateColorMsgBGBox('twitch')"><img class="iconSVG descrIconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="icon colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false">${insertPreset()}</div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContMsgBG">
                        <button data-active="true" onclick="updateRadialTypeMsgBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeMsgBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeMsgBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="false" onclick="updateRadialTypeMsgBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="false" onclick="updateRadialTypeMsgBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosMsgBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="50" oninput="updateRadialPosMsgBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
            `;
    }
    document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
    
    decompileMsgBG();
}

function removeGradientMsgBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    if (i < activeMsgBGGrad) {
        activeMsgBGGrad -= 1;
    }
    settings.msgBackground[`${activeRole}`].value.splice(i, 1);
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i].remove();
    for (let j = 0; j < document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu").length; j++) {
        for (let k = 0; k < document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider").length; k++) {
            document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorMsgBGBox(${j}, ${k})`)
        }
    }
    
    decompileMsgBG();
}

function updateRadialTypeMsgBG(e, size) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    settings.msgBackground[`${activeRole}`].value[i].size = size;
    for (let j = 0; j < settings.msgBackground[`${activeRole}`].value.length; j++) {
        if (settings.msgBackground[`${activeRole}`].value[j].type === "radial") {
            for (let k = 0; k < document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContMsgBG").querySelectorAll("button").length; k++) {
                document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelector(".gradRadialPosContMsgBG").querySelectorAll("button")[k].setAttribute("data-active", "false");
            }
            e.target.setAttribute("data-active", "true");
        }
    }
    
    decompileMsgBG();
}

function updateLinearRotMsgBG(e) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    settings.msgBackground[`${activeRole}`].value[i].rotate = parseInt(e.target.value);
    
    decompileMsgBG();
}

function updateRadialPosMsgBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.msgBackground[`${activeRole}`].value[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.msgBackground[`${activeRole}`].value[i].yPos = parseInt(e.target.value);
    }
    
    decompileMsgBG();
}

function moveColorSliderMsgBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.msgBackground[`${activeRole}`].value[i];
        settings.msgBackground[`${activeRole}`].value.splice(i, 1);
        settings.msgBackground[`${activeRole}`].value.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i]);
        if (activeMsgBGGrad === i) {
            activeMsgBGGrad -= 1;
        } else if (activeMsgBGGrad === i - 1) {
            activeMsgBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.msgBackground[`${activeRole}`].value.length - 1) {
        var elmnt = settings.msgBackground[`${activeRole}`].value[i];
        settings.msgBackground[`${activeRole}`].value.splice(i, 1);
        settings.msgBackground[`${activeRole}`].value.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i]);
        if (activeMsgBGGrad === i) {
            activeMsgBGGrad += 1;
        } else if (activeMsgBGGrad === i + 1) {
            activeMsgBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.msgBackground[`${activeRole}`].value.length; j++) {
        for (let k = 0; k < settings.msgBackground[`${activeRole}`].value[j].colors.length; k++) {
            document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorMsgBGBox(${j}, ${k})`)
        }
    }
    
    decompileMsgBG();
}

// settings.msgBorder

function decompileMsgBorder() {
    roleList.forEach(role => {
        if (settings.msgBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                if (settings.msgBorder[`${role}`].value.top.color.type === "custom") {
                    msg.style.setProperty("--msgBorderTop", `${settings.msgBorder[`${role}`].value.top.type} ${settings.msgBorder[`${role}`].value.top.width}px ${settings.msgBorder[`${role}`].value.top.color.color}${dec2hex(settings.msgBorder[`${role}`].value.top.color.opacity)}`);
                } else if (settings.msgBorder[`${role}`].value.top.color.type === "twitch") {
                    msg.style.setProperty("--msgBorderTop", `${settings.msgBorder[`${role}`].value.top.type} ${settings.msgBorder[`${role}`].value.top.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.top.color.opacity)}`);
                }

                if (settings.msgBorder[`${role}`].value.right.color.type === "custom") {
                    msg.style.setProperty("--msgBorderRight", `${settings.msgBorder[`${role}`].value.right.type} ${settings.msgBorder[`${role}`].value.right.width}px ${settings.msgBorder[`${role}`].value.right.color.color}${dec2hex(settings.msgBorder[`${role}`].value.right.color.opacity)}`);
                } else if (settings.msgBorder[`${role}`].value.right.color.type === "twitch") {
                    msg.style.setProperty("--msgBorderRight", `${settings.msgBorder[`${role}`].value.right.type} ${settings.msgBorder[`${role}`].value.right.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.right.color.opacity)}`);
                }

                if (settings.msgBorder[`${role}`].value.bottom.color.type === "custom") {
                    msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder[`${role}`].value.bottom.type} ${settings.msgBorder[`${role}`].value.bottom.width}px ${settings.msgBorder[`${role}`].value.bottom.color.color}${dec2hex(settings.msgBorder[`${role}`].value.bottom.color.opacity)}`);
                } else if (settings.msgBorder[`${role}`].value.bottom.color.type === "twitch") {
                    msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder[`${role}`].value.bottom.type} ${settings.msgBorder[`${role}`].value.bottom.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.bottom.color.opacity)}`);
                }

                if (settings.msgBorder[`${role}`].value.left.color.type === "custom") {
                    msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder[`${role}`].value.left.type} ${settings.msgBorder[`${role}`].value.left.width}px ${settings.msgBorder[`${role}`].value.left.color.color}${dec2hex(settings.msgBorder[`${role}`].value.left.color.opacity)}`);
                } else if (settings.msgBorder[`${role}`].value.left.color.type === "twitch") {
                    msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder[`${role}`].value.left.type} ${settings.msgBorder[`${role}`].value.left.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder[`${role}`].value.left.color.opacity)}`);
                }
            });
        }
    });
}

var activeMsgBorder = ""

function openBorderMenuMsg(pos) {
    document.querySelector("#borderGridMsg").querySelectorAll(".borderSelect").forEach(elmnt => {
        elmnt.setAttribute("data-active", "false");
    });

    event.target.setAttribute("data-active", "true");

    var borderMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderEdgeMenu"),
        cornerMenu = event.target.parentNode.parentNode.parentNode.querySelector(".borderCornerMenu");
    activeMsgBorder = pos;
    if (activeMsgBorder === "top" || activeMsgBorder === "bottom" || activeMsgBorder === "left" || activeMsgBorder === "right") {
        borderMenu.setAttribute("data-active", "true");
        cornerMenu.setAttribute("data-active", "false");

        borderMenu.querySelectorAll(".borderTypeBtn").forEach(elmnt => {
            elmnt.setAttribute("data-active", "false")
        });

        if (settings.msgBorder[`${activeRole}`].value[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.msgBorder[`${activeRole}`].value[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.msgBorder[`${activeRole}`].value[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.msgBorder[`${activeRole}`].value[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.msgBorder[`${activeRole}`].value[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.msgBorder[`${activeRole}`].value[`${pos}`].color.opacity;
        
    } else if (activeMsgBorder === "tl" || activeMsgBorder === "tr" || activeMsgBorder === "bl" || activeMsgBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`];
    }
}

function updateBorderMsg(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].type = value;
    } else if (type === "width") {
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].width = parseInt(document.querySelector("#msgBorderWidth").value);
    } else if (type === "color") {
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.color = document.querySelector("#msgBorderColor").value;
    } else if (type === "colorType") {
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.opacity = parseInt(document.querySelector("#msgBorderOpacity").value);
    } else if (type === "all") {
        settings.msgBorder[`${activeRole}`].value["top"].type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].type;
        settings.msgBorder[`${activeRole}`].value["bottom"].type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].type;
        settings.msgBorder[`${activeRole}`].value["left"].type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].type;
        settings.msgBorder[`${activeRole}`].value["right"].type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].type;

        settings.msgBorder[`${activeRole}`].value["top"].width = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].width;
        settings.msgBorder[`${activeRole}`].value["bottom"].width = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].width;
        settings.msgBorder[`${activeRole}`].value["left"].width = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].width;
        settings.msgBorder[`${activeRole}`].value["right"].width = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].width;
        
        settings.msgBorder[`${activeRole}`].value["top"].color.color = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.color;
        settings.msgBorder[`${activeRole}`].value["bottom"].color.color = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.color;
        settings.msgBorder[`${activeRole}`].value["left"].color.color = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.color;
        settings.msgBorder[`${activeRole}`].value["right"].color.color = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.color;

        settings.msgBorder[`${activeRole}`].value["top"].color.type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.type;
        settings.msgBorder[`${activeRole}`].value["bottom"].color.type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.type;
        settings.msgBorder[`${activeRole}`].value["left"].color.type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.type;
        settings.msgBorder[`${activeRole}`].value["right"].color.type = "" + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.type;

        settings.msgBorder[`${activeRole}`].value["top"].color.opacity = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.opacity
        settings.msgBorder[`${activeRole}`].value["bottom"].color.opacity = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.opacity
        settings.msgBorder[`${activeRole}`].value["left"].color.opacity = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.opacity
        settings.msgBorder[`${activeRole}`].value["right"].color.opacity = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`].color.opacity
    }

    decompileMsgBorder();
}

// settings.msgBorder[`${activeRole}`].value

function decompileMsgBorderRadius() {
    roleList.forEach(role => {
        if (settings.msgBorder[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                msg.style.setProperty("--msgBRtl", `${settings.msgBorder[`${role}`].value.tl}px`);
                msg.style.setProperty("--msgBRtr", `${settings.msgBorder[`${role}`].value.tr}px`);
                msg.style.setProperty("--msgBRbr", `${settings.msgBorder[`${role}`].value.br}px`);
                msg.style.setProperty("--msgBRbl", `${settings.msgBorder[`${role}`].value.bl}px`);
            });
        }
    });
}

function updateCornerMsg(type) {
    if (type === "corner") {
        settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`] = parseInt(document.querySelector("#msgCornerRadius").value);
    } else if (type === "all") {
        settings.msgBorder[`${activeRole}`].value["tl"] = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`];
        settings.msgBorder[`${activeRole}`].value["tr"] = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`];
        settings.msgBorder[`${activeRole}`].value["bl"] = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`];
        settings.msgBorder[`${activeRole}`].value["br"] = 0 + settings.msgBorder[`${activeRole}`].value[`${activeMsgBorder}`];
    }

    decompileMsgBorderRadius();
}

// settings.msgShadow

function decompileMsgShadow() {
    roleList.forEach(role => {
        if (settings.msgShadow[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                var msgShadow = "";

                for (let i = 0; i < settings.msgShadow[`${role}`].value.length; i++) {
                    msgShadow += `${settings.msgShadow[`${role}`].value[i].xPos}px ${settings.msgShadow[`${role}`].value[i].yPos}px ${settings.msgShadow[`${role}`].value[i].blur}px ${settings.msgShadow[`${role}`].value[i].expand}px `;
                    if (settings.msgShadow[`${role}`].value[i].color.type === "custom") {
                        msgShadow += `${settings.msgShadow[`${role}`].value[i].color.color}${dec2hex(settings.msgShadow[`${role}`].value[i].color.opacity)}`;
                    } else if (settings.msgShadow[`${role}`].value[i].color.type === "twitch") {
                        msgShadow += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgShadow[`${role}`].value[i].color.opacity)}`;
                    }
                    if (settings.msgShadow[`${role}`].value[i].inset === true) {
                        msgShadow += " inset";
                    }
                    if (i < settings.msgShadow[`${role}`].value.length - 1) {
                        msgShadow += ", ";
                    }
                }

                msg.style.setProperty("--msgBS", msgShadow);
            });
        }
    });
}

var activeMsgShadow = -1;

function openShadowMsg(triggerAdd) {
    for (let i = 0; i < settings.msgShadow[`${activeRole}`].value.length; i++) {
        document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeMsgShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeMsgShadow >= 0) {
        document.querySelector(".shadowSettingsMsg").setAttribute("data-active", "true");
        document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[activeMsgShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[0].value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].xPos;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[1].value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].yPos;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[2].value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].blur;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[3].value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].expand;
        document.querySelector(".shadowSettingsMsg").querySelector(".msgShadowInset").setAttribute("data-active", settings.msgShadow[`${activeRole}`].value[activeMsgShadow].inset);
        
        if (settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#msgShadowOpacity").value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.opacity;
        
        document.querySelector("#msgShadowColor").value = settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.color;
    } else if (activeMsgShadow === -1) {
        document.querySelector(".shadowSettingsMsg").setAttribute("data-active", "false");
    }
}

function addShadowMsg() {
    var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";

        shadowElmnt.innerHTML = `
            <button class="shadowElmntBtn" onclick="openShadowMsg()"></button>
            <button class="shadowElmntRmv icon" onclick="removeShadowMsg()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

    document.querySelector(".shadowColMsg").appendChild(shadowElmnt);

    settings.msgShadow[`${activeRole}`].value.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        expand: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        },
        inset: false
    });

    activeMsgShadow = settings.msgShadow[`${activeRole}`].value.length - 1;
    openShadowMsg(true);
    
    decompileMsgShadow();
}

function updateShadowMsg(type, value) {
    settings.msgShadow[`${activeRole}`].value[activeMsgShadow].xPos    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[0].value);
    settings.msgShadow[`${activeRole}`].value[activeMsgShadow].yPos    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[1].value);
    settings.msgShadow[`${activeRole}`].value[activeMsgShadow].blur    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[2].value);
    settings.msgShadow[`${activeRole}`].value[activeMsgShadow].expand  = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[3].value);
    
    settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.opacity = parseInt(document.querySelector("#msgShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsMsg").querySelector(".msgShadowInset").getAttribute("data-active") === "false") {
        settings.msgShadow[`${activeRole}`].value[activeMsgShadow].inset = false;
    } else {
        settings.msgShadow[`${activeRole}`].value[activeMsgShadow].inset = true;
    }

    if (type === "colorType") {
        settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.msgShadow[`${activeRole}`].value[activeMsgShadow].color.color = document.querySelector("#msgShadowColor").value;
    }

    for (let i = 0; i < settings.msgShadow[`${activeRole}`].value.length; i++) {
        var msgStyle = `${settings.msgShadow[`${activeRole}`].value[i].xPos}px ${settings.msgShadow[`${activeRole}`].value[i].yPos}px ${settings.msgShadow[`${activeRole}`].value[i].blur}px ${settings.msgShadow[`${activeRole}`].value[i].expand}px ${settings.msgShadow[`${activeRole}`].value[i].color.color}${dec2hex(settings.msgShadow[`${activeRole}`].value[i].color.opacity)}`;
        if (settings.msgShadow[`${activeRole}`].value[i].inset === true) {
            msgStyle += " inset";
        }

        document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[i].style.boxShadow = msgStyle;
    }
    
    decompileMsgShadow();
}

function removeSwitchShadowMsg() {
    if (document.querySelector(".shadowColMsg").getAttribute("data-delete-active") === "false") {
        document.querySelector(".shadowColMsg").setAttribute("data-delete-active", "true");
    } else {
        document.querySelector(".shadowColMsg").setAttribute("data-delete-active", "false");
    }
    
    decompileMsgShadow();
}

function removeShadowMsg() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    if (i <= activeMsgShadow) {
        activeMsgShadow -= 1;
    }
    settings.msgShadow[`${activeRole}`].value.splice(i, 1);

    document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowMsg(true);
    
    decompileMsgShadow();
}

// settings.msgSpacing

function decompileMsgSpacing() {
    roleList.forEach(role => {
        if (settings.msgPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                msg.style.setProperty("--msgSpacingOT", `${settings.msgPosition[`${role}`].value.spacing.outer.top}px`);
                msg.style.setProperty("--msgSpacingOR", `${settings.msgPosition[`${role}`].value.spacing.outer.right}px`);
                msg.style.setProperty("--msgSpacingOB", `${settings.msgPosition[`${role}`].value.spacing.outer.bottom}px`);
                msg.style.setProperty("--msgSpacingOL", `${settings.msgPosition[`${role}`].value.spacing.outer.left}px`);

                msg.style.setProperty("--msgSpacingIT", `${settings.msgPosition[`${role}`].value.spacing.inner.top}px`);
                msg.style.setProperty("--msgSpacingIR", `${settings.msgPosition[`${role}`].value.spacing.inner.right}px`);
                msg.style.setProperty("--msgSpacingIB", `${settings.msgPosition[`${role}`].value.spacing.inner.bottom}px`);
                msg.style.setProperty("--msgSpacingIL", `${settings.msgPosition[`${role}`].value.spacing.inner.left}px`);
            });
        }
    });
}

function updateMsgSpacing(pos) {
    if (pos === "OT") {
        settings.msgPosition[`${activeRole}`].value.spacing.outer.top = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.msgPosition[`${activeRole}`].value.spacing.outer.left = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.msgPosition[`${activeRole}`].value.spacing.outer.right = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.msgPosition[`${activeRole}`].value.spacing.outer.bottom = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.msgPosition[`${activeRole}`].value.spacing.inner.top = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.msgPosition[`${activeRole}`].value.spacing.inner.left = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.msgPosition[`${activeRole}`].value.spacing.inner.right = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.msgPosition[`${activeRole}`].value.spacing.inner.bottom = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileMsgSpacing();
}

// settings.msgSizing
// settings.msgPosition

function decompileMsgSizing() {
    roleList.forEach(role => {
        if (settings.msgPosition[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                msg.style.setProperty("--msgSizing", settings.msgPosition[`${role}`].value.sizing);
            });
        }
    });
}

function updateMsgSizing(type) {
    if (type === "stretch") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-start") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "center") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "true");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "false");
    } else if (type === "flex-end") {
        event.target.parentNode.querySelectorAll("button")[0].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[1].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[2].setAttribute("data-active", "false");
        event.target.parentNode.querySelectorAll("button")[3].setAttribute("data-active", "true");
    }
    
    settings.msgPosition[`${activeRole}`].value.sizing = type;

    decompileMsgSizing();
}

// settings.msgFont

function decompileMsgFont() {
    roleList.forEach(role => {
        if (settings.msgFont[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                msg.style.setProperty("--msgFontFamily", settings.msgFont[`${role}`].value.family);

                if (settings.msgFont[`${role}`].value.color.type === "custom") {
                    msg.style.setProperty("--msgFontColor", `${settings.msgFont[`${role}`].value.color.color}${dec2hex(settings.msgFont[`${role}`].value.color.opacity)}`);
                } else if (settings.msgFont[`${role}`].value.color.type === "twitch") {
                    msg.style.setProperty("--msgFontColor", `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgFont[`${role}`].value.color.opacity)}`);
                }

                msg.style.setProperty("--msgFontSize", `${settings.msgFont[`${role}`].value.size}px`);

                msg.style.setProperty("--msgFontWeight", settings.msgFont[`${role}`].value.weight);

                if (settings.msgFont[`${role}`].value.italic === true) {
                    msg.style.setProperty("--msgFontItalic", "italic");
                } else {
                    msg.style.setProperty("--msgFontItalic", "normal");
                }

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

                if (settings.msgFont[`${role}`].value.height.auto === true) {
                    msg.style.setProperty("--msgFontHeight", "normal");
                } else if (settings.msgFont[`${role}`].value.height.auto === false) {
                    msg.style.setProperty("--msgFontHeight", `${settings.msgFont[`${role}`].value.height.height}px`);
                }

                msg.style.setProperty("--msgFontSpacing", `${settings.msgFont[`${role}`].value.spacing}px`);

                msg.style.setProperty("--msgFontAlign", settings.msgFont[`${role}`].value.align);
            });
        }
    });
}

function updateMsgFont(type, value) {
    settings.msgFont[`${activeRole}`].value.family = document.querySelector("#msgFontFamInp").value;
    settings.msgFont[`${activeRole}`].value.size = document.querySelector("#msgFontSizeInp").value;
    settings.msgFont[`${activeRole}`].value.weight = document.querySelector("#msgFontWeightInp").value;
    settings.msgFont[`${activeRole}`].value.height.height = document.querySelector("#msgFontHeightInp").value;
    settings.msgFont[`${activeRole}`].value.spacing = document.querySelector("#msgFontSpaceInp").value;

    if (type === "style") {
        var styleRow = document.querySelector(".msgFontStyleRow");

        if (event.target.getAttribute("data-active") === "false") {
            event.target.setAttribute("data-active", "true");
        } else {
            event.target.setAttribute("data-active", "false");
        }

        if (styleRow.querySelectorAll("button")[0].getAttribute("data-active") === "true") {
            settings.msgFont[`${activeRole}`].value.lines.upperLine = true;
        } else {
            settings.msgFont[`${activeRole}`].value.lines.upperLine = false;
        }
        if (styleRow.querySelectorAll("button")[1].getAttribute("data-active") === "true") {
            settings.msgFont[`${activeRole}`].value.lines.crossLine = true;
        } else {
            settings.msgFont[`${activeRole}`].value.lines.crossLine = false;
        }
        if (styleRow.querySelectorAll("button")[2].getAttribute("data-active") === "true") {
            settings.msgFont[`${activeRole}`].value.lines.underLine = true;
        } else {
            settings.msgFont[`${activeRole}`].value.lines.underLine = false;
        }
        if (styleRow.querySelectorAll("button")[3].getAttribute("data-active") === "true") {
            settings.msgFont[`${activeRole}`].value.italic = true;
        } else {
            settings.msgFont[`${activeRole}`].value.italic = false;
        }
    } else if (type === "align") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.setAttribute("data-active", "true");

        settings.msgFont[`${activeRole}`].value.align = event.target.getAttribute("data-value");
    } else if (type === "autoheight") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.msgFont[`${activeRole}`].value.height.auto = false
        } else {
            event.target.setAttribute("data-active", "true");
            settings.msgFont[`${activeRole}`].value.height.auto = true
        }
    } else if (type === "colorType") {
        settings.msgFont[`${activeRole}`].value.color.type = value;
        if (value === "custom") {
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.msgFont[`${activeRole}`].value.color.color = document.querySelector("#msgFontColor").value;
    }
    
    settings.msgFont[`${activeRole}`].value.color.opacity = parseInt(document.querySelector("#msgFontOpacity").value);

    decompileMsgFont();
}

// settings.msgFontShadow

function decompileMsgFontShadow() {
    roleList.forEach(role => {
        if (settings.msgFontShadow[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                var msgFontShadow = "";

                for (let i = 0; i < settings.msgFontShadow[`${role}`].value.length; i++) {
                    msgFontShadow += `${settings.msgFontShadow[`${role}`].value[i].xPos}px ${settings.msgFontShadow[`${role}`].value[i].yPos}px ${settings.msgFontShadow[`${role}`].value[i].blur}px `;
                    if (settings.msgFontShadow[`${role}`].value[i].color.type === "custom") {
                        msgFontShadow += `${settings.msgFontShadow[`${role}`].value[i].color.color}${dec2hex(settings.msgFontShadow[`${role}`].value[i].color.opacity)}`;
                    } else if (settings.msgFontShadow[`${role}`].value[i].color.type === "twitch") {
                        msgFontShadow += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgFontShadow[`${role}`].value[i].color.opacity)}`;
                    }
                    if (i < settings.msgFontShadow[`${role}`].value.length - 1) {
                        msgFontShadow += ", ";
                    }
                }

                msg.style.setProperty("--msgFontShadow", msgFontShadow);
            });
        }
    });
}

var activeMsgFontShadow = -1;

function openFontShadowMsg(triggerAdd) {
    for (let i = 0; i < settings.msgFontShadow[`${activeRole}`].value.length; i++) {
        document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeMsgFontShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeMsgFontShadow >= 0) {
        document.querySelector(".fontShadowSettingsMsg").setAttribute("data-active", "true");
        document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[activeMsgFontShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[0].value = settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].xPos;
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[1].value = settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].yPos;
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[2].value = settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].blur;
        
        if (settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.type === "custom") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.type === "twitch") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#msgFontShadowOpacity").value = settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.opacity;
        
        document.querySelector("#msgFontShadowColor").value = settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.color;
    } else if (activeMsgFontShadow === -1) {
        document.querySelector(".fontShadowSettingsMsg").setAttribute("data-active", "false");
    }
}

function addFontShadowMsg() {
    var fontShadowElmnt = document.createElement("div");
        fontShadowElmnt.className = "fontShadowElmnt";

        fontShadowElmnt.innerHTML = `
            <button class="fontShadowElmntBtn" onclick="openFontShadowMsg()"></button>
            <button class="fontShadowElmntRmv icon" onclick="removeFontShadowMsg()"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

    document.querySelector(".fontShadowColMsg").appendChild(fontShadowElmnt);

    settings.msgFontShadow[`${activeRole}`].value.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        }
    });

    activeMsgFontShadow = settings.msgFontShadow[`${activeRole}`].value.length - 1;
    openFontShadowMsg(true);
    
    decompileMsgFontShadow();
}

function updateFontShadowMsg(type, value) {
    settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].xPos = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[0].value);
    settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].yPos = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[1].value);
    settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].blur = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[2].value);
    
    settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.opacity = parseInt(document.querySelector("#msgFontShadowOpacity").value);
    
    if (type === "colorType") {
        settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (value === "twitch") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }
    } else if (type === "color") {
        settings.msgFontShadow[`${activeRole}`].value[activeMsgFontShadow].color.color = document.querySelector("#msgFontShadowColor").value;
    }

    for (let i = 0; i < settings.msgFontShadow[`${activeRole}`].value.length; i++) {
        var msgStyle = `${settings.msgFontShadow[`${activeRole}`].value[i].xPos}px ${settings.msgFontShadow[`${activeRole}`].value[i].yPos}px ${settings.msgFontShadow[`${activeRole}`].value[i].blur}px ${settings.msgFontShadow[`${activeRole}`].value[i].color.color}${dec2hex(settings.msgFontShadow[`${activeRole}`].value[i].color.opacity)}`;
        
        document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[i].style.boxShadow = msgStyle;
    }
    
    decompileMsgFontShadow();
}

function removeSwitchFontShadowMsg() {
    if (document.querySelector(".fontShadowColMsg").getAttribute("data-delete-active") === "false") {
        document.querySelector(".fontShadowColMsg").setAttribute("data-delete-active", "true");
    } else {
        document.querySelector(".fontShadowColMsg").setAttribute("data-delete-active", "false");
    }
    
    decompileMsgFontShadow();
}

function removeFontShadowMsg() {
    var i = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);

    if (i <= activeMsgFontShadow) {
        activeMsgFontShadow -= 1;
    }
    settings.msgFontShadow[`${activeRole}`].value.splice(i, 1);

    document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[i].remove();

    openFontShadowMsg(true);
    
    decompileMsgFontShadow();
}

// settings.msgContent

function decompileMsgContent() {
    roleList.forEach(role => {
        if (settings.msgContent[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");

                var msgContentFinal = "" + settings.msgContent[`${role}`].value;

                msgContentFinal = msgContentFinal.replace(/{usn}/g, msg.parentNode.getAttribute("data-username"));

                msgContentFinal = msgContentFinal.replace(/{msg}/g, msg.parentNode.getAttribute("data-message"));

                msgContentFinal = msgContentFinal.replace(/{streamer}/g, msg.parentNode.getAttribute("data-streamer"));
                
                msgContentFinal = msgContentFinal.replace(/{h}/g, msg.parentNode.getAttribute("data-h"));
                
                msgContentFinal = msgContentFinal.replace(/{hh}/g, msg.parentNode.getAttribute("data-hh"));
                
                msgContentFinal = msgContentFinal.replace(/{m}/g, msg.parentNode.getAttribute("data-m"));
                
                msgContentFinal = msgContentFinal.replace(/{mm}/g, msg.parentNode.getAttribute("data-mm"));
                
                msgContentFinal = msgContentFinal.replace(/{s}/g, msg.parentNode.getAttribute("data-s"));
                
                msgContentFinal = msgContentFinal.replace(/{ss}/g, msg.parentNode.getAttribute("data-ss"));

                msgContentFinal = msgContentFinal.replace(/{badges}/g, msg.parentNode.getAttribute("data-badges"));

                msg.innerHTML = msgContentFinal;
            });
        }
    });
}

function updateMsgContent() {
    settings.msgContent[`${activeRole}`].value = document.querySelector(".msgContentInp").value;

    decompileMsgContent();
}

// settings.othEmotes

function decompileOthEmotes() {
    roleList.forEach(role => {
        if (settings.othEmotes[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var msg = cbx.querySelector(".msg");
                if (settings.othEmotes[`${role}`].value.auto === true) {
                    msg.style.setProperty("--othEmoteHeight", `${settings.msgFont[`${role}`].value.size}px`);
                } else if (settings.othEmotes[`${role}`].value.auto === false) {
                    msg.style.setProperty("--othEmoteHeight", `${settings.othEmotes[`${role}`].value.height}px`)
                }
                
                msg.style.setProperty("--othEmoteVPos", settings.othEmotes[`${role}`].value.linePos);
            });
        }
    });
}

function updateOthEmotes(type) {
    if (type === "autosize") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.othEmotes[`${activeRole}`].value.auto = false;
        } else {
            event.target.setAttribute("data-active", "true");
            settings.othEmotes[`${activeRole}`].value.auto = true;
        }
    } else if (type === "vAlign") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });

        event.target.setAttribute("data-active", "true");
        settings.othEmotes[`${activeRole}`].value.linePos = event.target.getAttribute("data-value");
    }

    settings.othEmotes[`${activeRole}`].value.height = document.querySelector("#othEmoteSizeInp").value;

    decompileOthEmotes();
}

// settings.othBadges

function decompileOthBadges() {
    roleList.forEach(role => {
        if (settings.othBadges[`${role}`].active === true) {
            document.querySelectorAll(`.cbx.${role}`).forEach(cbx => {
                var usn = cbx.querySelector(".usn"),
                    msg = cbx.querySelector(".msg");
                if (settings.othBadges[`${role}`].value.size.auto === true) {
                    usn.style.setProperty("--othBadgesSize", `var(--usnFontSize)`);
                    msg.style.setProperty("--othBadgesSize", `var(--msgFontSize)`);
                } else {
                    usn.style.setProperty("--othBadgesSize", `${settings.othBadges[`${role}`].value.size.height}px`);
                    msg.style.setProperty("--othBadgesSize", `${settings.othBadges[`${role}`].value.size.height}px`);
                }
                cbx.style.setProperty("--othBadgesGap", `${settings.othBadges[`${role}`].value.gap}px`);
            });
        }
    });
}

function updateOthBadges(type) {
    if (type === "autosize") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.othBadges[`${activeRole}`].value.size.auto = false;
        } else {
            event.target.setAttribute("data-active", "true");
            settings.othBadges[`${activeRole}`].value.size.auto = true;
        }
    }

    settings.othBadges[`${activeRole}`].value.gap = parseInt(document.querySelector("#othBadgesGapInp").value);
    settings.othBadges[`${activeRole}`].value.size.height = parseInt(document.querySelector("#othBadgesHeightInp").value);

    decompileOthBadges();
}

// settings.anmTiming

function updateAnmTiming(type) {
    if (type === "Del") {
        settings.anmTiming[`${activeRole}`].value.delay = parseInt(document.querySelector("#anmTimingDelay").value);
    } else if (type === "App") {
        settings.anmTiming[`${activeRole}`].value.appearing = parseInt(document.querySelector("#anmTimingAppearing").value);
    } else if (type === "Dur") {
        if (document.querySelector("#anmTimingDuration").value === "") {
            settings.anmTiming[`${activeRole}`].value.duration = "infinite";
        } else {
            settings.anmTiming[`${activeRole}`].value.duration = parseInt(document.querySelector("#anmTimingDuration").value);
        }
    } else if (type === "Van") {
        settings.anmTiming[`${activeRole}`].value.vanishing = parseInt(document.querySelector("#anmTimingVanishing").value);
    }
}

// settings.anmShow

function openAnmShow(i) {
    document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "true");
    document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "true");
    settings.anmShow[`${activeRole}`].value[i].active = true;
}

function updateAnmShow(i) {
    settings.anmShow[`${activeRole}`].value[i].value = parseFloat(document.querySelectorAll(".anmShowRow")[i].querySelector("input").value);
}

function removeAnmShow(i) {
    document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "false");
    document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "false");
    settings.anmShow[`${activeRole}`].value[i].active = false;
}

// settings.anmHide

function openAnmHide(i) {
    document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "true");
    document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "true");
    settings.anmHide[`${activeRole}`].value[i].active = true;
}

function updateAnmHide(i) {
    settings.anmHide[`${activeRole}`].value[i].value = parseFloat(document.querySelectorAll(".anmHideRow")[i].querySelector("input").value);
}

function removeAnmHide(i) {
    document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "false");
    document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "false");
    settings.anmHide[`${activeRole}`].value[i].active = false;
}

// save settings

function saveSettings() {
    var presetSettingList = "";

    for (var i = 0; i < colorPreset.length; i++) {
        presetSettingList += `{
            color:"${colorPreset[i].color}",
            opacity:${colorPreset[i].opacity}
        }`;

        if (i < colorPreset.length - 1) {
            presetSettingList += `, `;
        }
    }

    var genStreamerListRes = "";

    for (var i = 0; i < settings.genStreamerList.length; i++) {
        genStreamerListRes += `"${settings.genStreamerList[i]}"`;
        if (i < settings.genStreamerList.length - 1) {
            genStreamerListRes += `, `;
        }
    }

    var genFilterUserRes = "";

    for (var i = 0; i < settings.genFilterUser.length; i++) {
        genFilterUserRes += `"${settings.genFilterUser[i]}"`;
        if (i < settings.genFilterUser.length - 1) {
            genFilterUserRes += `, `;
        }
    }

    var genFilterMsgRes = "";

    for (var i = 0; i < settings.genFilterMsg.length; i++) {
        genFilterMsgRes += `"${settings.genFilterMsg[i]}"`;
        if (i < settings.genFilterMsg.length - 1) {
            genFilterMsgRes += `, `;
        }
    }

    var cbxBackgroundResUser = "";

    for (var i = 0; i < settings.cbxBackground.user.value.length; i++) {
        if (settings.cbxBackground.user.value[i].type === "solid") {
            cbxBackgroundResUser += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.cbxBackground.user.value[i].colors[0].position},
                        type: '${settings.cbxBackground.user.value[i].colors[0].type}',
                        color: '${settings.cbxBackground.user.value[i].colors[0].color}',
                        opacity: ${settings.cbxBackground.user.value[i].colors[0].opacity},
                        count: ${settings.cbxBackground.user.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.cbxBackground.user.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.user.value[i].colors[j].position},
                    type: '${settings.cbxBackground.user.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.user.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            cbxBackgroundResUser += `{
                type: "linear",
                rotate: ${settings.cbxBackground.user.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.cbxBackground.user.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.user.value[i].colors[j].position},
                    type: '${settings.cbxBackground.user.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.user.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            cbxBackgroundResUser += `{
                type: "radial",
                size: "${settings.cbxBackground.user.value[i].size}",
                xPos: ${settings.cbxBackground.user.value[i].xPos},
                yPos: ${settings.cbxBackground.user.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.cbxBackground.user.value.length - 1) {
            cbxBackgroundResUser += `, `;
        }
    }

    var cbxBackgroundResSub = "";

    for (var i = 0; i < settings.cbxBackground.sub.value.length; i++) {
        if (settings.cbxBackground.sub.value[i].type === "solid") {
            cbxBackgroundResSub += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.cbxBackground.sub.value[i].colors[0].position},
                        type: '${settings.cbxBackground.sub.value[i].colors[0].type}',
                        color: '${settings.cbxBackground.sub.value[i].colors[0].color}',
                        opacity: ${settings.cbxBackground.sub.value[i].colors[0].opacity},
                        count: ${settings.cbxBackground.sub.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.cbxBackground.sub.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.sub.value[i].colors[j].position},
                    type: '${settings.cbxBackground.sub.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            cbxBackgroundResSub += `{
                type: "linear",
                rotate: ${settings.cbxBackground.sub.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.cbxBackground.sub.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.sub.value[i].colors[j].position},
                    type: '${settings.cbxBackground.sub.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            cbxBackgroundResSub += `{
                type: "radial",
                size: "${settings.cbxBackground.sub.value[i].size}",
                xPos: ${settings.cbxBackground.sub.value[i].xPos},
                yPos: ${settings.cbxBackground.sub.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.cbxBackground.sub.value.length - 1) {
            cbxBackgroundResSub += `, `;
        }
    }

    var cbxBackgroundResVip = "";

    for (var i = 0; i < settings.cbxBackground.vip.value.length; i++) {
        if (settings.cbxBackground.vip.value[i].type === "solid") {
            cbxBackgroundResVip += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.cbxBackground.vip.value[i].colors[0].position},
                        type: '${settings.cbxBackground.vip.value[i].colors[0].type}',
                        color: '${settings.cbxBackground.vip.value[i].colors[0].color}',
                        opacity: ${settings.cbxBackground.vip.value[i].colors[0].opacity},
                        count: ${settings.cbxBackground.vip.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.cbxBackground.vip.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.vip.value[i].colors[j].position},
                    type: '${settings.cbxBackground.vip.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            cbxBackgroundResVip += `{
                type: "linear",
                rotate: ${settings.cbxBackground.vip.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.cbxBackground.vip.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.vip.value[i].colors[j].position},
                    type: '${settings.cbxBackground.vip.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            cbxBackgroundResVip += `{
                type: "radial",
                size: "${settings.cbxBackground.vip.value[i].size}",
                xPos: ${settings.cbxBackground.vip.value[i].xPos},
                yPos: ${settings.cbxBackground.vip.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.cbxBackground.vip.value.length - 1) {
            cbxBackgroundResVip += `, `;
        }
    }

    var cbxBackgroundResMod = "";

    for (var i = 0; i < settings.cbxBackground.mod.value.length; i++) {
        if (settings.cbxBackground.mod.value[i].type === "solid") {
            cbxBackgroundResMod += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.cbxBackground.mod.value[i].colors[0].position},
                        type: '${settings.cbxBackground.mod.value[i].colors[0].type}',
                        color: '${settings.cbxBackground.mod.value[i].colors[0].color}',
                        opacity: ${settings.cbxBackground.mod.value[i].colors[0].opacity},
                        count: ${settings.cbxBackground.mod.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.cbxBackground.mod.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.mod.value[i].colors[j].position},
                    type: '${settings.cbxBackground.mod.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            cbxBackgroundResMod += `{
                type: "linear",
                rotate: ${settings.cbxBackground.mod.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.cbxBackground.mod.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground.mod.value[i].colors[j].position},
                    type: '${settings.cbxBackground.mod.value[i].colors[j].type}',
                    color: '${settings.cbxBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.cbxBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.cbxBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            cbxBackgroundResMod += `{
                type: "radial",
                size: "${settings.cbxBackground.mod.value[i].size}",
                xPos: ${settings.cbxBackground.mod.value[i].xPos},
                yPos: ${settings.cbxBackground.mod.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.cbxBackground.mod.value.length - 1) {
            cbxBackgroundResMod += `, `;
        }
    }

    var cbxShadowResUser = "";

    for (var i = 0; i < settings.cbxShadow.user.value.length; i++) {
        cbxShadowResUser += `{
        xPos: ${settings.cbxShadow.user.value[i].xPos},
        yPos: ${settings.cbxShadow.user.value[i].yPos},
        blur: ${settings.cbxShadow.user.value[i].blur},
        expand: ${settings.cbxShadow.user.value[i].expand},
        inset: ${settings.cbxShadow.user.value[i].inset},
        color: {
            type: "${settings.cbxShadow.user.value[i].color.type}",
            color: "${settings.cbxShadow.user.value[i].color.color}",
            opacity: ${settings.cbxShadow.user.value[i].color.opacity}
        }
        }`;

        if (i < settings.cbxShadow.user.value.length - 1) {
            cbxShadowResUser += `, `;
        }
    }

    var cbxShadowResSub = "";

    for (var i = 0; i < settings.cbxShadow.sub.value.length; i++) {
        cbxShadowResSub += `{
        xPos: ${settings.cbxShadow.sub.value[i].xPos},
        yPos: ${settings.cbxShadow.sub.value[i].yPos},
        blur: ${settings.cbxShadow.sub.value[i].blur},
        expand: ${settings.cbxShadow.sub.value[i].expand},
        inset: ${settings.cbxShadow.sub.value[i].inset},
        color: {
            type: "${settings.cbxShadow.sub.value[i].color.type}",
            color: "${settings.cbxShadow.sub.value[i].color.color}",
            opacity: ${settings.cbxShadow.sub.value[i].color.opacity}
        }
        }`;

        if (i < settings.cbxShadow.sub.value.length - 1) {
            cbxShadowResSub += `, `;
        }
    }

    var cbxShadowResVip = "";

    for (var i = 0; i < settings.cbxShadow.vip.value.length; i++) {
        cbxShadowResVip += `{
        xPos: ${settings.cbxShadow.vip.value[i].xPos},
        yPos: ${settings.cbxShadow.vip.value[i].yPos},
        blur: ${settings.cbxShadow.vip.value[i].blur},
        expand: ${settings.cbxShadow.vip.value[i].expand},
        inset: ${settings.cbxShadow.vip.value[i].inset},
        color: {
            type: "${settings.cbxShadow.vip.value[i].color.type}",
            color: "${settings.cbxShadow.vip.value[i].color.color}",
            opacity: ${settings.cbxShadow.vip.value[i].color.opacity}
        }
        }`;

        if (i < settings.cbxShadow.vip.value.length - 1) {
            cbxShadowResVip += `, `;
        }
    }

    var cbxShadowResMod = "";

    for (var i = 0; i < settings.cbxShadow.mod.value.length; i++) {
        cbxShadowResMod += `{
        xPos: ${settings.cbxShadow.mod.value[i].xPos},
        yPos: ${settings.cbxShadow.mod.value[i].yPos},
        blur: ${settings.cbxShadow.mod.value[i].blur},
        expand: ${settings.cbxShadow.mod.value[i].expand},
        inset: ${settings.cbxShadow.mod.value[i].inset},
        color: {
            type: "${settings.cbxShadow.mod.value[i].color.type}",
            color: "${settings.cbxShadow.mod.value[i].color.color}",
            opacity: ${settings.cbxShadow.mod.value[i].color.opacity}
        }
        }`;

        if (i < settings.cbxShadow.mod.value.length - 1) {
            cbxShadowResMod += `, `;
        }
    }

    var usnBackgroundResUser = "";

    for (var i = 0; i < settings.usnBackground.user.value.length; i++) {
        if (settings.usnBackground.user.value[i].type === "solid") {
            usnBackgroundResUser += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.usnBackground.user.value[i].colors[0].position},
                        type: '${settings.usnBackground.user.value[i].colors[0].type}',
                        color: '${settings.usnBackground.user.value[i].colors[0].color}',
                        opacity: ${settings.usnBackground.user.value[i].colors[0].opacity},
                        count: ${settings.usnBackground.user.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.usnBackground.user.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.user.value[i].colors[j].position},
                    type: '${settings.usnBackground.user.value[i].colors[j].type}',
                    color: '${settings.usnBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.user.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            usnBackgroundResUser += `{
                type: "linear",
                rotate: ${settings.usnBackground.user.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.usnBackground.user.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.user.value[i].colors[j].position},
                    type: '${settings.usnBackground.user.value[i].colors[j].type}',
                    color: '${settings.usnBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.user.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            usnBackgroundResUser += `{
                type: "radial",
                size: "${settings.usnBackground.user.value[i].size}",
                xPos: ${settings.usnBackground.user.value[i].xPos},
                yPos: ${settings.usnBackground.user.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.usnBackground.user.value.length - 1) {
            usnBackgroundResUser += `, `;
        }
    }

    var usnBackgroundResSub = "";

    for (var i = 0; i < settings.usnBackground.sub.value.length; i++) {
        if (settings.usnBackground.sub.value[i].type === "solid") {
            usnBackgroundResSub += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.usnBackground.sub.value[i].colors[0].position},
                        type: '${settings.usnBackground.sub.value[i].colors[0].type}',
                        color: '${settings.usnBackground.sub.value[i].colors[0].color}',
                        opacity: ${settings.usnBackground.sub.value[i].colors[0].opacity},
                        count: ${settings.usnBackground.sub.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.usnBackground.sub.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.sub.value[i].colors[j].position},
                    type: '${settings.usnBackground.sub.value[i].colors[j].type}',
                    color: '${settings.usnBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            usnBackgroundResSub += `{
                type: "linear",
                rotate: ${settings.usnBackground.sub.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.usnBackground.sub.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.sub.value[i].colors[j].position},
                    type: '${settings.usnBackground.sub.value[i].colors[j].type}',
                    color: '${settings.usnBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            usnBackgroundResSub += `{
                type: "radial",
                size: "${settings.usnBackground.sub.value[i].size}",
                xPos: ${settings.usnBackground.sub.value[i].xPos},
                yPos: ${settings.usnBackground.sub.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.usnBackground.sub.value.length - 1) {
            usnBackgroundResSub += `, `;
        }
    }

    var usnBackgroundResVip = "";

    for (var i = 0; i < settings.usnBackground.vip.value.length; i++) {
        if (settings.usnBackground.vip.value[i].type === "solid") {
            usnBackgroundResVip += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.usnBackground.vip.value[i].colors[0].position},
                        type: '${settings.usnBackground.vip.value[i].colors[0].type}',
                        color: '${settings.usnBackground.vip.value[i].colors[0].color}',
                        opacity: ${settings.usnBackground.vip.value[i].colors[0].opacity},
                        count: ${settings.usnBackground.vip.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.usnBackground.vip.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.vip.value[i].colors[j].position},
                    type: '${settings.usnBackground.vip.value[i].colors[j].type}',
                    color: '${settings.usnBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            usnBackgroundResVip += `{
                type: "linear",
                rotate: ${settings.usnBackground.vip.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.usnBackground.vip.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.vip.value[i].colors[j].position},
                    type: '${settings.usnBackground.vip.value[i].colors[j].type}',
                    color: '${settings.usnBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            usnBackgroundResVip += `{
                type: "radial",
                size: "${settings.usnBackground.vip.value[i].size}",
                xPos: ${settings.usnBackground.vip.value[i].xPos},
                yPos: ${settings.usnBackground.vip.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.usnBackground.vip.value.length - 1) {
            usnBackgroundResVip += `, `;
        }
    }

    var usnBackgroundResMod = "";

    for (var i = 0; i < settings.usnBackground.mod.value.length; i++) {
        if (settings.usnBackground.mod.value[i].type === "solid") {
            usnBackgroundResMod += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.usnBackground.mod.value[i].colors[0].position},
                        type: '${settings.usnBackground.mod.value[i].colors[0].type}',
                        color: '${settings.usnBackground.mod.value[i].colors[0].color}',
                        opacity: ${settings.usnBackground.mod.value[i].colors[0].opacity},
                        count: ${settings.usnBackground.mod.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.usnBackground.mod.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.mod.value[i].colors[j].position},
                    type: '${settings.usnBackground.mod.value[i].colors[j].type}',
                    color: '${settings.usnBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            usnBackgroundResMod += `{
                type: "linear",
                rotate: ${settings.usnBackground.mod.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.usnBackground.mod.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground.mod.value[i].colors[j].position},
                    type: '${settings.usnBackground.mod.value[i].colors[j].type}',
                    color: '${settings.usnBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.usnBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.usnBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.usnBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            usnBackgroundResMod += `{
                type: "radial",
                size: "${settings.usnBackground.mod.value[i].size}",
                xPos: ${settings.usnBackground.mod.value[i].xPos},
                yPos: ${settings.usnBackground.mod.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.usnBackground.mod.value.length - 1) {
            usnBackgroundResMod += `, `;
        }
    }

    var usnShadowResUser = "";

    for (var i = 0; i < settings.usnShadow.user.value.length; i++) {
        usnShadowResUser += `{
        xPos: ${settings.usnShadow.user.value[i].xPos},
        yPos: ${settings.usnShadow.user.value[i].yPos},
        blur: ${settings.usnShadow.user.value[i].blur},
        expand: ${settings.usnShadow.user.value[i].expand},
        inset: ${settings.usnShadow.user.value[i].inset},
        color: {
            type: "${settings.usnShadow.user.value[i].color.type}",
            color: "${settings.usnShadow.user.value[i].color.color}",
            opacity: ${settings.usnShadow.user.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnShadow.user.value.length - 1) {
            usnShadowResUser += `, `;
        }
    }

    var usnShadowResSub = "";

    for (var i = 0; i < settings.usnShadow.sub.value.length; i++) {
        usnShadowResSub += `{
        xPos: ${settings.usnShadow.sub.value[i].xPos},
        yPos: ${settings.usnShadow.sub.value[i].yPos},
        blur: ${settings.usnShadow.sub.value[i].blur},
        expand: ${settings.usnShadow.sub.value[i].expand},
        inset: ${settings.usnShadow.sub.value[i].inset},
        color: {
            type: "${settings.usnShadow.sub.value[i].color.type}",
            color: "${settings.usnShadow.sub.value[i].color.color}",
            opacity: ${settings.usnShadow.sub.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnShadow.sub.value.length - 1) {
            usnShadowResSub += `, `;
        }
    }

    var usnShadowResVip = "";

    for (var i = 0; i < settings.usnShadow.vip.value.length; i++) {
        usnShadowResVip += `{
        xPos: ${settings.usnShadow.vip.value[i].xPos},
        yPos: ${settings.usnShadow.vip.value[i].yPos},
        blur: ${settings.usnShadow.vip.value[i].blur},
        expand: ${settings.usnShadow.vip.value[i].expand},
        inset: ${settings.usnShadow.vip.value[i].inset},
        color: {
            type: "${settings.usnShadow.vip.value[i].color.type}",
            color: "${settings.usnShadow.vip.value[i].color.color}",
            opacity: ${settings.usnShadow.vip.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnShadow.vip.value.length - 1) {
            usnShadowResVip += `, `;
        }
    }

    var usnShadowResMod = "";

    for (var i = 0; i < settings.usnShadow.mod.value.length; i++) {
        usnShadowResMod += `{
        xPos: ${settings.usnShadow.mod.value[i].xPos},
        yPos: ${settings.usnShadow.mod.value[i].yPos},
        blur: ${settings.usnShadow.mod.value[i].blur},
        expand: ${settings.usnShadow.mod.value[i].expand},
        inset: ${settings.usnShadow.mod.value[i].inset},
        color: {
            type: "${settings.usnShadow.mod.value[i].color.type}",
            color: "${settings.usnShadow.mod.value[i].color.color}",
            opacity: ${settings.usnShadow.mod.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnShadow.mod.value.length - 1) {
            usnShadowResMod += `, `;
        }
    }

    var usnFontShadowResUser = "";

    for (var i = 0; i < settings.usnFontShadow.user.value.length; i++) {
        usnFontShadowResUser += `{
        xPos: ${settings.usnFontShadow.user.value[i].xPos},
        yPos: ${settings.usnFontShadow.user.value[i].yPos},
        blur: ${settings.usnFontShadow.user.value[i].blur},
        color: {
            type: "${settings.usnFontShadow.user.value[i].color.type}",
            color: "${settings.usnFontShadow.user.value[i].color.color}",
            opacity: ${settings.usnFontShadow.user.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnFontShadow.user.value.length - 1) {
            usnFontShadowResUser += `, `;
        }
    }

    var usnFontShadowResSub = "";

    for (var i = 0; i < settings.usnFontShadow.sub.value.length; i++) {
        usnFontShadowResSub += `{
        xPos: ${settings.usnFontShadow.sub.value[i].xPos},
        yPos: ${settings.usnFontShadow.sub.value[i].yPos},
        blur: ${settings.usnFontShadow.sub.value[i].blur},
        color: {
            type: "${settings.usnFontShadow.sub.value[i].color.type}",
            color: "${settings.usnFontShadow.sub.value[i].color.color}",
            opacity: ${settings.usnFontShadow.sub.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnFontShadow.sub.value.length - 1) {
            usnFontShadowResSub += `, `;
        }
    }

    var usnFontShadowResVip = "";

    for (var i = 0; i < settings.usnFontShadow.vip.value.length; i++) {
        usnFontShadowResVip += `{
        xPos: ${settings.usnFontShadow.vip.value[i].xPos},
        yPos: ${settings.usnFontShadow.vip.value[i].yPos},
        blur: ${settings.usnFontShadow.vip.value[i].blur},
        color: {
            type: "${settings.usnFontShadow.vip.value[i].color.type}",
            color: "${settings.usnFontShadow.vip.value[i].color.color}",
            opacity: ${settings.usnFontShadow.vip.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnFontShadow.vip.value.length - 1) {
            usnFontShadowResVip += `, `;
        }
    }

    var usnFontShadowResMod = "";

    for (var i = 0; i < settings.usnFontShadow.mod.value.length; i++) {
        usnFontShadowResMod += `{
        xPos: ${settings.usnFontShadow.mod.value[i].xPos},
        yPos: ${settings.usnFontShadow.mod.value[i].yPos},
        blur: ${settings.usnFontShadow.mod.value[i].blur},
        color: {
            type: "${settings.usnFontShadow.mod.value[i].color.type}",
            color: "${settings.usnFontShadow.mod.value[i].color.color}",
            opacity: ${settings.usnFontShadow.mod.value[i].color.opacity}
        }
        }`;

        if (i < settings.usnFontShadow.mod.value.length - 1) {
            usnFontShadowResMod += `, `;
        }
    }

    var msgBackgroundResUser = "";

    for (var i = 0; i < settings.msgBackground.user.value.length; i++) {
        if (settings.msgBackground.user.value[i].type === "solid") {
            msgBackgroundResUser += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.msgBackground.user.value[i].colors[0].position},
                        type: '${settings.msgBackground.user.value[i].colors[0].type}',
                        color: '${settings.msgBackground.user.value[i].colors[0].color}',
                        opacity: ${settings.msgBackground.user.value[i].colors[0].opacity},
                        count: ${settings.msgBackground.user.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.msgBackground.user.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.user.value[i].colors[j].position},
                    type: '${settings.msgBackground.user.value[i].colors[j].type}',
                    color: '${settings.msgBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.user.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            msgBackgroundResUser += `{
                type: "linear",
                rotate: ${settings.msgBackground.user.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.msgBackground.user.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.user.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.user.value[i].colors[j].position},
                    type: '${settings.msgBackground.user.value[i].colors[j].type}',
                    color: '${settings.msgBackground.user.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.user.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.user.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.user.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            msgBackgroundResUser += `{
                type: "radial",
                size: "${settings.msgBackground.user.value[i].size}",
                xPos: ${settings.msgBackground.user.value[i].xPos},
                yPos: ${settings.msgBackground.user.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.msgBackground.user.value.length - 1) {
            msgBackgroundResUser += `, `;
        }
    }

    var msgBackgroundResSub = "";

    for (var i = 0; i < settings.msgBackground.sub.value.length; i++) {
        if (settings.msgBackground.sub.value[i].type === "solid") {
            msgBackgroundResSub += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.msgBackground.sub.value[i].colors[0].position},
                        type: '${settings.msgBackground.sub.value[i].colors[0].type}',
                        color: '${settings.msgBackground.sub.value[i].colors[0].color}',
                        opacity: ${settings.msgBackground.sub.value[i].colors[0].opacity},
                        count: ${settings.msgBackground.sub.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.msgBackground.sub.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.sub.value[i].colors[j].position},
                    type: '${settings.msgBackground.sub.value[i].colors[j].type}',
                    color: '${settings.msgBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            msgBackgroundResSub += `{
                type: "linear",
                rotate: ${settings.msgBackground.sub.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.msgBackground.sub.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.sub.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.sub.value[i].colors[j].position},
                    type: '${settings.msgBackground.sub.value[i].colors[j].type}',
                    color: '${settings.msgBackground.sub.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.sub.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.sub.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.sub.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            msgBackgroundResSub += `{
                type: "radial",
                size: "${settings.msgBackground.sub.value[i].size}",
                xPos: ${settings.msgBackground.sub.value[i].xPos},
                yPos: ${settings.msgBackground.sub.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.msgBackground.sub.value.length - 1) {
            msgBackgroundResSub += `, `;
        }
    }

    var msgBackgroundResVip = "";

    for (var i = 0; i < settings.msgBackground.vip.value.length; i++) {
        if (settings.msgBackground.vip.value[i].type === "solid") {
            msgBackgroundResVip += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.msgBackground.vip.value[i].colors[0].position},
                        type: '${settings.msgBackground.vip.value[i].colors[0].type}',
                        color: '${settings.msgBackground.vip.value[i].colors[0].color}',
                        opacity: ${settings.msgBackground.vip.value[i].colors[0].opacity},
                        count: ${settings.msgBackground.vip.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.msgBackground.vip.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.vip.value[i].colors[j].position},
                    type: '${settings.msgBackground.vip.value[i].colors[j].type}',
                    color: '${settings.msgBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            msgBackgroundResVip += `{
                type: "linear",
                rotate: ${settings.msgBackground.vip.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.msgBackground.vip.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.vip.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.vip.value[i].colors[j].position},
                    type: '${settings.msgBackground.vip.value[i].colors[j].type}',
                    color: '${settings.msgBackground.vip.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.vip.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.vip.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.vip.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            msgBackgroundResVip += `{
                type: "radial",
                size: "${settings.msgBackground.vip.value[i].size}",
                xPos: ${settings.msgBackground.vip.value[i].xPos},
                yPos: ${settings.msgBackground.vip.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.msgBackground.vip.value.length - 1) {
            msgBackgroundResVip += `, `;
        }
    }

    var msgBackgroundResMod = "";

    for (var i = 0; i < settings.msgBackground.mod.value.length; i++) {
        if (settings.msgBackground.mod.value[i].type === "solid") {
            msgBackgroundResMod += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.msgBackground.mod.value[i].colors[0].position},
                        type: '${settings.msgBackground.mod.value[i].colors[0].type}',
                        color: '${settings.msgBackground.mod.value[i].colors[0].color}',
                        opacity: ${settings.msgBackground.mod.value[i].colors[0].opacity},
                        count: ${settings.msgBackground.mod.value[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.msgBackground.mod.value[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.mod.value[i].colors[j].position},
                    type: '${settings.msgBackground.mod.value[i].colors[j].type}',
                    color: '${settings.msgBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            msgBackgroundResMod += `{
                type: "linear",
                rotate: ${settings.msgBackground.mod.value[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.msgBackground.mod.value[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground.mod.value[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground.mod.value[i].colors[j].position},
                    type: '${settings.msgBackground.mod.value[i].colors[j].type}',
                    color: '${settings.msgBackground.mod.value[i].colors[j].color}',
                    opacity: ${settings.msgBackground.mod.value[i].colors[j].opacity},
                    count: ${settings.msgBackground.mod.value[i].colors[j].count}
                }`;

                if (j < settings.msgBackground.mod.value[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            msgBackgroundResMod += `{
                type: "radial",
                size: "${settings.msgBackground.mod.value[i].size}",
                xPos: ${settings.msgBackground.mod.value[i].xPos},
                yPos: ${settings.msgBackground.mod.value[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.msgBackground.mod.value.length - 1) {
            msgBackgroundResMod += `, `;
        }
    }

    var msgShadowResUser = "";

    for (var i = 0; i < settings.msgShadow.user.value.length; i++) {
        msgShadowResUser += `{
        xPos: ${settings.msgShadow.user.value[i].xPos},
        yPos: ${settings.msgShadow.user.value[i].yPos},
        blur: ${settings.msgShadow.user.value[i].blur},
        expand: ${settings.msgShadow.user.value[i].expand},
        inset: ${settings.msgShadow.user.value[i].inset},
        color: {
            type: "${settings.msgShadow.user.value[i].color.type}",
            color: "${settings.msgShadow.user.value[i].color.color}",
            opacity: ${settings.msgShadow.user.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgShadow.user.value.length - 1) {
            msgShadowResUser += `, `;
        }
    }

    var msgShadowResSub = "";

    for (var i = 0; i < settings.msgShadow.sub.value.length; i++) {
        msgShadowResSub += `{
        xPos: ${settings.msgShadow.sub.value[i].xPos},
        yPos: ${settings.msgShadow.sub.value[i].yPos},
        blur: ${settings.msgShadow.sub.value[i].blur},
        expand: ${settings.msgShadow.sub.value[i].expand},
        inset: ${settings.msgShadow.sub.value[i].inset},
        color: {
            type: "${settings.msgShadow.sub.value[i].color.type}",
            color: "${settings.msgShadow.sub.value[i].color.color}",
            opacity: ${settings.msgShadow.sub.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgShadow.sub.value.length - 1) {
            msgShadowResSub += `, `;
        }
    }

    var msgShadowResVip = "";

    for (var i = 0; i < settings.msgShadow.vip.value.length; i++) {
        msgShadowResVip += `{
        xPos: ${settings.msgShadow.vip.value[i].xPos},
        yPos: ${settings.msgShadow.vip.value[i].yPos},
        blur: ${settings.msgShadow.vip.value[i].blur},
        expand: ${settings.msgShadow.vip.value[i].expand},
        inset: ${settings.msgShadow.vip.value[i].inset},
        color: {
            type: "${settings.msgShadow.vip.value[i].color.type}",
            color: "${settings.msgShadow.vip.value[i].color.color}",
            opacity: ${settings.msgShadow.vip.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgShadow.vip.value.length - 1) {
            msgShadowResVip += `, `;
        }
    }

    var msgShadowResMod = "";

    for (var i = 0; i < settings.msgShadow.mod.value.length; i++) {
        msgShadowResMod += `{
        xPos: ${settings.msgShadow.mod.value[i].xPos},
        yPos: ${settings.msgShadow.mod.value[i].yPos},
        blur: ${settings.msgShadow.mod.value[i].blur},
        expand: ${settings.msgShadow.mod.value[i].expand},
        inset: ${settings.msgShadow.mod.value[i].inset},
        color: {
            type: "${settings.msgShadow.mod.value[i].color.type}",
            color: "${settings.msgShadow.mod.value[i].color.color}",
            opacity: ${settings.msgShadow.mod.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgShadow.mod.value.length - 1) {
            msgShadowResMod += `, `;
        }
    }

    var msgFontShadowResUser = "";

    for (var i = 0; i < settings.msgFontShadow.user.value.length; i++) {
        msgFontShadowResUser += `{
        xPos: ${settings.msgFontShadow.user.value[i].xPos},
        yPos: ${settings.msgFontShadow.user.value[i].yPos},
        blur: ${settings.msgFontShadow.user.value[i].blur},
        color: {
            type: "${settings.msgFontShadow.user.value[i].color.type}",
            color: "${settings.msgFontShadow.user.value[i].color.color}",
            opacity: ${settings.msgFontShadow.user.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgFontShadow.user.value.length - 1) {
            msgFontShadowResUser += `, `;
        }
    }

    var msgFontShadowResSub = "";

    for (var i = 0; i < settings.msgFontShadow.sub.value.length; i++) {
        msgFontShadowResSub += `{
        xPos: ${settings.msgFontShadow.sub.value[i].xPos},
        yPos: ${settings.msgFontShadow.sub.value[i].yPos},
        blur: ${settings.msgFontShadow.sub.value[i].blur},
        color: {
            type: "${settings.msgFontShadow.sub.value[i].color.type}",
            color: "${settings.msgFontShadow.sub.value[i].color.color}",
            opacity: ${settings.msgFontShadow.sub.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgFontShadow.sub.value.length - 1) {
            msgFontShadowResSub += `, `;
        }
    }

    var msgFontShadowResVip = "";

    for (var i = 0; i < settings.msgFontShadow.vip.value.length; i++) {
        msgFontShadowResVip += `{
        xPos: ${settings.msgFontShadow.vip.value[i].xPos},
        yPos: ${settings.msgFontShadow.vip.value[i].yPos},
        blur: ${settings.msgFontShadow.vip.value[i].blur},
        color: {
            type: "${settings.msgFontShadow.vip.value[i].color.type}",
            color: "${settings.msgFontShadow.vip.value[i].color.color}",
            opacity: ${settings.msgFontShadow.vip.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgFontShadow.vip.value.length - 1) {
            msgFontShadowResVip += `, `;
        }
    }

    var msgFontShadowResMod = "";

    for (var i = 0; i < settings.msgFontShadow.mod.value.length; i++) {
        msgFontShadowResMod += `{
        xPos: ${settings.msgFontShadow.mod.value[i].xPos},
        yPos: ${settings.msgFontShadow.mod.value[i].yPos},
        blur: ${settings.msgFontShadow.mod.value[i].blur},
        color: {
            type: "${settings.msgFontShadow.mod.value[i].color.type}",
            color: "${settings.msgFontShadow.mod.value[i].color.color}",
            opacity: ${settings.msgFontShadow.mod.value[i].color.opacity}
        }
        }`;

        if (i < settings.msgFontShadow.mod.value.length - 1) {
            msgFontShadowResMod += `, `;
        }
    }

    var finalDurationUser = settings.anmTiming.user.value.duration;

    if (settings.anmTiming.user.value.duration === "infinite") {
        finalDurationUser = `"infinite"`;
    }

    var finalDurationSub = settings.anmTiming.sub.value.duration;

    if (settings.anmTiming.sub.value.duration === "infinite") {
        finalDurationSub = `"infinite"`;
    }

    var finalDurationVip = settings.anmTiming.vip.value.duration;

    if (settings.anmTiming.vip.value.duration === "infinite") {
        finalDurationVip = `"infinite"`;
    }

    var finalDurationMod = settings.anmTiming.mod.value.duration;

    if (settings.anmTiming.mod.value.duration === "infinite") {
        finalDurationMod = `"infinite"`;
    }

    exportText = `
    var colorPreset = [${presetSettingList}],
        settings = {
            genStreamerList: [${genStreamerListRes}],
            genChatDirection: "${settings.genChatDirection}",
            genSpacing: ${settings.genSpacing}, // In px
            genFilterUser: [${genFilterUserRes}], // Kleinbuchstaben!
            genFilterMsg: [${genFilterMsgRes}],
            genMaxMessages: ${settings.genMaxMessages},
            cbxBackground: {
                user: {
                    value: [${cbxBackgroundResUser}],
                    active: ${settings.cbxBackground.user.active}
                },
                sub: {
                    value: [${cbxBackgroundResSub}],
                    active: ${settings.cbxBackground.sub.active}
                },
                vip: {
                    value: [${cbxBackgroundResVip}],
                    active: ${settings.cbxBackground.vip.active}
                },
                mod: {
                    value: [${cbxBackgroundResMod}],
                    active: ${settings.cbxBackground.mod.active}
                }
            },
            cbxBorder: {
                user: {
                    value: {
                        top: {
                            type: "${settings.cbxBorder.user.value.top.type}",
                            width: ${settings.cbxBorder.user.value.top.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.user.value.top.color.type}",
                                color: "${settings.cbxBorder.user.value.top.color.color}",
                                opacity: ${settings.cbxBorder.user.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.cbxBorder.user.value.bottom.type}",
                            width: ${settings.cbxBorder.user.value.bottom.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.user.value.bottom.color.type}",
                                color: "${settings.cbxBorder.user.value.bottom.color.color}",
                                opacity: ${settings.cbxBorder.user.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.cbxBorder.user.value.left.type}",
                            width: ${settings.cbxBorder.user.value.left.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.user.value.left.color.type}",
                                color: "${settings.cbxBorder.user.value.left.color.color}",
                                opacity: ${settings.cbxBorder.user.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.cbxBorder.user.value.right.type}",
                            width: ${settings.cbxBorder.user.value.right.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.user.value.right.color.type}",
                                color: "${settings.cbxBorder.user.value.right.color.color}",
                                opacity: ${settings.cbxBorder.user.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.cbxBorder.user.value.tl}, // In px
                        tr: ${settings.cbxBorder.user.value.tr}, // In px
                        bl: ${settings.cbxBorder.user.value.bl}, // In px
                        br: ${settings.cbxBorder.user.value.br}  // In px
                    },
                    active: ${settings.cbxBorder.user.active}
                },
                sub: {
                    value: {
                        top: {
                            type: "${settings.cbxBorder.sub.value.top.type}",
                            width: ${settings.cbxBorder.sub.value.top.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.sub.value.top.color.type}",
                                color: "${settings.cbxBorder.sub.value.top.color.color}",
                                opacity: ${settings.cbxBorder.sub.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.cbxBorder.sub.value.bottom.type}",
                            width: ${settings.cbxBorder.sub.value.bottom.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.sub.value.bottom.color.type}",
                                color: "${settings.cbxBorder.sub.value.bottom.color.color}",
                                opacity: ${settings.cbxBorder.sub.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.cbxBorder.sub.value.left.type}",
                            width: ${settings.cbxBorder.sub.value.left.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.sub.value.left.color.type}",
                                color: "${settings.cbxBorder.sub.value.left.color.color}",
                                opacity: ${settings.cbxBorder.sub.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.cbxBorder.sub.value.right.type}",
                            width: ${settings.cbxBorder.sub.value.right.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.sub.value.right.color.type}",
                                color: "${settings.cbxBorder.sub.value.right.color.color}",
                                opacity: ${settings.cbxBorder.sub.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.cbxBorder.sub.value.tl}, // In px
                        tr: ${settings.cbxBorder.sub.value.tr}, // In px
                        bl: ${settings.cbxBorder.sub.value.bl}, // In px
                        br: ${settings.cbxBorder.sub.value.br}  // In px
                    },
                    active: ${settings.cbxBorder.sub.active}
                },
                vip: {
                    value: {
                        top: {
                            type: "${settings.cbxBorder.vip.value.top.type}",
                            width: ${settings.cbxBorder.vip.value.top.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.vip.value.top.color.type}",
                                color: "${settings.cbxBorder.vip.value.top.color.color}",
                                opacity: ${settings.cbxBorder.vip.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.cbxBorder.vip.value.bottom.type}",
                            width: ${settings.cbxBorder.vip.value.bottom.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.vip.value.bottom.color.type}",
                                color: "${settings.cbxBorder.vip.value.bottom.color.color}",
                                opacity: ${settings.cbxBorder.vip.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.cbxBorder.vip.value.left.type}",
                            width: ${settings.cbxBorder.vip.value.left.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.vip.value.left.color.type}",
                                color: "${settings.cbxBorder.vip.value.left.color.color}",
                                opacity: ${settings.cbxBorder.vip.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.cbxBorder.vip.value.right.type}",
                            width: ${settings.cbxBorder.vip.value.right.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.vip.value.right.color.type}",
                                color: "${settings.cbxBorder.vip.value.right.color.color}",
                                opacity: ${settings.cbxBorder.vip.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.cbxBorder.vip.value.tl}, // In px
                        tr: ${settings.cbxBorder.vip.value.tr}, // In px
                        bl: ${settings.cbxBorder.vip.value.bl}, // In px
                        br: ${settings.cbxBorder.vip.value.br}  // In px
                    },
                    active: ${settings.cbxBorder.vip.active}
                },
                mod: {
                    value: {
                        top: {
                            type: "${settings.cbxBorder.mod.value.top.type}",
                            width: ${settings.cbxBorder.mod.value.top.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.mod.value.top.color.type}",
                                color: "${settings.cbxBorder.mod.value.top.color.color}",
                                opacity: ${settings.cbxBorder.mod.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.cbxBorder.mod.value.bottom.type}",
                            width: ${settings.cbxBorder.mod.value.bottom.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.mod.value.bottom.color.type}",
                                color: "${settings.cbxBorder.mod.value.bottom.color.color}",
                                opacity: ${settings.cbxBorder.mod.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.cbxBorder.mod.value.left.type}",
                            width: ${settings.cbxBorder.mod.value.left.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.mod.value.left.color.type}",
                                color: "${settings.cbxBorder.mod.value.left.color.color}",
                                opacity: ${settings.cbxBorder.mod.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.cbxBorder.mod.value.right.type}",
                            width: ${settings.cbxBorder.mod.value.right.width}, // In px
                            color: {
                                type: "${settings.cbxBorder.mod.value.right.color.type}",
                                color: "${settings.cbxBorder.mod.value.right.color.color}",
                                opacity: ${settings.cbxBorder.mod.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.cbxBorder.mod.value.tl}, // In px
                        tr: ${settings.cbxBorder.mod.value.tr}, // In px
                        bl: ${settings.cbxBorder.mod.value.bl}, // In px
                        br: ${settings.cbxBorder.mod.value.br}  // In px
                    },
                    active: ${settings.cbxBorder.mod.active}
                }
            },
            cbxShadow: {
                user: {
                    value: [${cbxShadowResUser}],
                    active: ${settings.cbxShadow.user.active}
                },
                sub: {
                    value: [${cbxShadowResSub}],
                    active: ${settings.cbxShadow.sub.active}
                },
                vip: {
                    value: [${cbxShadowResVip}],
                    active: ${settings.cbxShadow.vip.active}
                },
                mod: {
                    value: [${cbxShadowResMod}],
                    active: ${settings.cbxShadow.mod.active}
                }
            },
            cbxPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.cbxPosition.user.value.spacing.outer.top}, // In px
                                bottom: ${settings.cbxPosition.user.value.spacing.outer.bottom}, // In px
                                left: ${settings.cbxPosition.user.value.spacing.outer.left}, // In px
                                right: ${settings.cbxPosition.user.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.cbxPosition.user.value.spacing.inner.top}, // In px
                                bottom: ${settings.cbxPosition.user.value.spacing.inner.bottom}, // In px
                                left: ${settings.cbxPosition.user.value.spacing.inner.left}, // In px
                                right: ${settings.cbxPosition.user.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.cbxPosition.user.value.sizing}"
                    },
                    active: ${settings.cbxPosition.user.active}
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.cbxPosition.sub.value.spacing.outer.top}, // In px
                                bottom: ${settings.cbxPosition.sub.value.spacing.outer.bottom}, // In px
                                left: ${settings.cbxPosition.sub.value.spacing.outer.left}, // In px
                                right: ${settings.cbxPosition.sub.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.cbxPosition.sub.value.spacing.inner.top}, // In px
                                bottom: ${settings.cbxPosition.sub.value.spacing.inner.bottom}, // In px
                                left: ${settings.cbxPosition.sub.value.spacing.inner.left}, // In px
                                right: ${settings.cbxPosition.sub.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.cbxPosition.sub.value.sizing}"
                    },
                    active: ${settings.cbxPosition.sub.active}
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.cbxPosition.vip.value.spacing.outer.top}, // In px
                                bottom: ${settings.cbxPosition.vip.value.spacing.outer.bottom}, // In px
                                left: ${settings.cbxPosition.vip.value.spacing.outer.left}, // In px
                                right: ${settings.cbxPosition.vip.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.cbxPosition.vip.value.spacing.inner.top}, // In px
                                bottom: ${settings.cbxPosition.vip.value.spacing.inner.bottom}, // In px
                                left: ${settings.cbxPosition.vip.value.spacing.inner.left}, // In px
                                right: ${settings.cbxPosition.vip.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.cbxPosition.vip.value.sizing}"
                    },
                    active: ${settings.cbxPosition.vip.active}
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.cbxPosition.mod.value.spacing.outer.top}, // In px
                                bottom: ${settings.cbxPosition.mod.value.spacing.outer.bottom}, // In px
                                left: ${settings.cbxPosition.mod.value.spacing.outer.left}, // In px
                                right: ${settings.cbxPosition.mod.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.cbxPosition.mod.value.spacing.inner.top}, // In px
                                bottom: ${settings.cbxPosition.mod.value.spacing.inner.bottom}, // In px
                                left: ${settings.cbxPosition.mod.value.spacing.inner.left}, // In px
                                right: ${settings.cbxPosition.mod.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.cbxPosition.mod.value.sizing}"
                    },
                    active: ${settings.cbxPosition.mod.active}
                }
            },
            usnBackground: {
                user: {
                    value: [${usnBackgroundResUser}],
                    active: ${settings.usnBackground.user.active}
                },
                sub: {
                    value: [${usnBackgroundResSub}],
                    active: ${settings.usnBackground.sub.active}
                },
                vip: {
                    value: [${usnBackgroundResVip}],
                    active: ${settings.usnBackground.vip.active}
                },
                mod: {
                    value: [${usnBackgroundResMod}],
                    active: ${settings.usnBackground.mod.active}
                }
            },
            usnBorder: {
                user: {
                    value: {
                        top: {
                            type: "${settings.usnBorder.user.value.top.type}",
                            width: ${settings.usnBorder.user.value.top.width}, // In px
                            color: {
                                type: "${settings.usnBorder.user.value.top.color.type}",
                                color: "${settings.usnBorder.user.value.top.color.color}",
                                opacity: ${settings.usnBorder.user.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.usnBorder.user.value.bottom.type}",
                            width: ${settings.usnBorder.user.value.bottom.width}, // In px
                            color: {
                                type: "${settings.usnBorder.user.value.bottom.color.type}",
                                color: "${settings.usnBorder.user.value.bottom.color.color}",
                                opacity: ${settings.usnBorder.user.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.usnBorder.user.value.left.type}",
                            width: ${settings.usnBorder.user.value.left.width}, // In px
                            color: {
                                type: "${settings.usnBorder.user.value.left.color.type}",
                                color: "${settings.usnBorder.user.value.left.color.color}",
                                opacity: ${settings.usnBorder.user.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.usnBorder.user.value.right.type}",
                            width: ${settings.usnBorder.user.value.right.width}, // In px
                            color: {
                                type: "${settings.usnBorder.user.value.right.color.type}",
                                color: "${settings.usnBorder.user.value.right.color.color}",
                                opacity: ${settings.usnBorder.user.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.usnBorder.user.value.tl}, // In px
                        tr: ${settings.usnBorder.user.value.tr}, // In px
                        bl: ${settings.usnBorder.user.value.bl}, // In px
                        br: ${settings.usnBorder.user.value.br}  // In px
                    },
                    active: ${settings.usnBorder.user.active}
                },
                sub: {
                    value: {
                        top: {
                            type: "${settings.usnBorder.sub.value.top.type}",
                            width: ${settings.usnBorder.sub.value.top.width}, // In px
                            color: {
                                type: "${settings.usnBorder.sub.value.top.color.type}",
                                color: "${settings.usnBorder.sub.value.top.color.color}",
                                opacity: ${settings.usnBorder.sub.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.usnBorder.sub.value.bottom.type}",
                            width: ${settings.usnBorder.sub.value.bottom.width}, // In px
                            color: {
                                type: "${settings.usnBorder.sub.value.bottom.color.type}",
                                color: "${settings.usnBorder.sub.value.bottom.color.color}",
                                opacity: ${settings.usnBorder.sub.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.usnBorder.sub.value.left.type}",
                            width: ${settings.usnBorder.sub.value.left.width}, // In px
                            color: {
                                type: "${settings.usnBorder.sub.value.left.color.type}",
                                color: "${settings.usnBorder.sub.value.left.color.color}",
                                opacity: ${settings.usnBorder.sub.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.usnBorder.sub.value.right.type}",
                            width: ${settings.usnBorder.sub.value.right.width}, // In px
                            color: {
                                type: "${settings.usnBorder.sub.value.right.color.type}",
                                color: "${settings.usnBorder.sub.value.right.color.color}",
                                opacity: ${settings.usnBorder.sub.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.usnBorder.sub.value.tl}, // In px
                        tr: ${settings.usnBorder.sub.value.tr}, // In px
                        bl: ${settings.usnBorder.sub.value.bl}, // In px
                        br: ${settings.usnBorder.sub.value.br}  // In px
                    },
                    active: ${settings.usnBorder.sub.active}
                },
                vip: {
                    value: {
                        top: {
                            type: "${settings.usnBorder.vip.value.top.type}",
                            width: ${settings.usnBorder.vip.value.top.width}, // In px
                            color: {
                                type: "${settings.usnBorder.vip.value.top.color.type}",
                                color: "${settings.usnBorder.vip.value.top.color.color}",
                                opacity: ${settings.usnBorder.vip.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.usnBorder.vip.value.bottom.type}",
                            width: ${settings.usnBorder.vip.value.bottom.width}, // In px
                            color: {
                                type: "${settings.usnBorder.vip.value.bottom.color.type}",
                                color: "${settings.usnBorder.vip.value.bottom.color.color}",
                                opacity: ${settings.usnBorder.vip.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.usnBorder.vip.value.left.type}",
                            width: ${settings.usnBorder.vip.value.left.width}, // In px
                            color: {
                                type: "${settings.usnBorder.vip.value.left.color.type}",
                                color: "${settings.usnBorder.vip.value.left.color.color}",
                                opacity: ${settings.usnBorder.vip.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.usnBorder.vip.value.right.type}",
                            width: ${settings.usnBorder.vip.value.right.width}, // In px
                            color: {
                                type: "${settings.usnBorder.vip.value.right.color.type}",
                                color: "${settings.usnBorder.vip.value.right.color.color}",
                                opacity: ${settings.usnBorder.vip.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.usnBorder.vip.value.tl}, // In px
                        tr: ${settings.usnBorder.vip.value.tr}, // In px
                        bl: ${settings.usnBorder.vip.value.bl}, // In px
                        br: ${settings.usnBorder.vip.value.br}  // In px
                    },
                    active: ${settings.usnBorder.vip.active}
                },
                mod: {
                    value: {
                        top: {
                            type: "${settings.usnBorder.mod.value.top.type}",
                            width: ${settings.usnBorder.mod.value.top.width}, // In px
                            color: {
                                type: "${settings.usnBorder.mod.value.top.color.type}",
                                color: "${settings.usnBorder.mod.value.top.color.color}",
                                opacity: ${settings.usnBorder.mod.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.usnBorder.mod.value.bottom.type}",
                            width: ${settings.usnBorder.mod.value.bottom.width}, // In px
                            color: {
                                type: "${settings.usnBorder.mod.value.bottom.color.type}",
                                color: "${settings.usnBorder.mod.value.bottom.color.color}",
                                opacity: ${settings.usnBorder.mod.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.usnBorder.mod.value.left.type}",
                            width: ${settings.usnBorder.mod.value.left.width}, // In px
                            color: {
                                type: "${settings.usnBorder.mod.value.left.color.type}",
                                color: "${settings.usnBorder.mod.value.left.color.color}",
                                opacity: ${settings.usnBorder.mod.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.usnBorder.mod.value.right.type}",
                            width: ${settings.usnBorder.mod.value.right.width}, // In px
                            color: {
                                type: "${settings.usnBorder.mod.value.right.color.type}",
                                color: "${settings.usnBorder.mod.value.right.color.color}",
                                opacity: ${settings.usnBorder.mod.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.usnBorder.mod.value.tl}, // In px
                        tr: ${settings.usnBorder.mod.value.tr}, // In px
                        bl: ${settings.usnBorder.mod.value.bl}, // In px
                        br: ${settings.usnBorder.mod.value.br}  // In px
                    },
                    active: ${settings.usnBorder.mod.active}
                }
            },
            usnShadow: {
                user: {
                    value: [${usnShadowResUser}],
                    active: ${settings.usnShadow.user.active}
                },
                sub: {
                    value: [${usnShadowResSub}],
                    active: ${settings.usnShadow.sub.active}
                },
                vip: {
                    value: [${usnShadowResVip}],
                    active: ${settings.usnShadow.vip.active}
                },
                mod: {
                    value: [${usnShadowResMod}],
                    active: ${settings.usnShadow.mod.active}
                }
            },
            usnPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.usnPosition.user.value.spacing.outer.top}, // In px
                                bottom: ${settings.usnPosition.user.value.spacing.outer.bottom}, // In px
                                left: ${settings.usnPosition.user.value.spacing.outer.left}, // In px
                                right: ${settings.usnPosition.user.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.usnPosition.user.value.spacing.inner.top}, // In px
                                bottom: ${settings.usnPosition.user.value.spacing.inner.bottom}, // In px
                                left: ${settings.usnPosition.user.value.spacing.inner.left}, // In px
                                right: ${settings.usnPosition.user.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.usnPosition.user.value.sizing}"
                    },
                    active: ${settings.usnPosition.user.active}
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.usnPosition.sub.value.spacing.outer.top}, // In px
                                bottom: ${settings.usnPosition.sub.value.spacing.outer.bottom}, // In px
                                left: ${settings.usnPosition.sub.value.spacing.outer.left}, // In px
                                right: ${settings.usnPosition.sub.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.usnPosition.sub.value.spacing.inner.top}, // In px
                                bottom: ${settings.usnPosition.sub.value.spacing.inner.bottom}, // In px
                                left: ${settings.usnPosition.sub.value.spacing.inner.left}, // In px
                                right: ${settings.usnPosition.sub.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.usnPosition.sub.value.sizing}"
                    },
                    active: ${settings.usnPosition.sub.active}
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.usnPosition.vip.value.spacing.outer.top}, // In px
                                bottom: ${settings.usnPosition.vip.value.spacing.outer.bottom}, // In px
                                left: ${settings.usnPosition.vip.value.spacing.outer.left}, // In px
                                right: ${settings.usnPosition.vip.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.usnPosition.vip.value.spacing.inner.top}, // In px
                                bottom: ${settings.usnPosition.vip.value.spacing.inner.bottom}, // In px
                                left: ${settings.usnPosition.vip.value.spacing.inner.left}, // In px
                                right: ${settings.usnPosition.vip.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.usnPosition.vip.value.sizing}"
                    },
                    active: ${settings.usnPosition.vip.active}
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.usnPosition.mod.value.spacing.outer.top}, // In px
                                bottom: ${settings.usnPosition.mod.value.spacing.outer.bottom}, // In px
                                left: ${settings.usnPosition.mod.value.spacing.outer.left}, // In px
                                right: ${settings.usnPosition.mod.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.usnPosition.mod.value.spacing.inner.top}, // In px
                                bottom: ${settings.usnPosition.mod.value.spacing.inner.bottom}, // In px
                                left: ${settings.usnPosition.mod.value.spacing.inner.left}, // In px
                                right: ${settings.usnPosition.mod.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.usnPosition.mod.value.sizing}"
                    },
                    active: ${settings.usnPosition.mod.active}
                }
            },
            usnFont: {
                user: {
                    value: {
                        family: "${settings.usnFont.user.value.family}",
                        size: ${settings.usnFont.user.value.size},
                        weight: ${settings.usnFont.user.value.weight},
                        height: {
                            auto: ${settings.usnFont.user.value.height.auto},
                            height: ${settings.usnFont.user.value.height.height} // In px
                        },
                        spacing: ${settings.usnFont.user.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.usnFont.user.value.lines.upperLine},
                            crossLine: ${settings.usnFont.user.value.lines.crossLine},
                            underLine: ${settings.usnFont.user.value.lines.underLine}
                        },
                        align: "${settings.usnFont.user.value.align}",
                        italic: ${settings.usnFont.user.value.italic},
                        color: {
                            type: "${settings.usnFont.user.value.color.type}",
                            color: "${settings.usnFont.user.value.color.color}",
                            opacity: ${settings.usnFont.user.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.usnFont.user.active}
                },
                sub: {
                    value: {
                        family: "${settings.usnFont.sub.value.family}",
                        size: ${settings.usnFont.sub.value.size},
                        weight: ${settings.usnFont.sub.value.weight},
                        height: {
                            auto: ${settings.usnFont.sub.value.height.auto},
                            height: ${settings.usnFont.sub.value.height.height} // In px
                        },
                        spacing: ${settings.usnFont.sub.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.usnFont.sub.value.lines.upperLine},
                            crossLine: ${settings.usnFont.sub.value.lines.crossLine},
                            underLine: ${settings.usnFont.sub.value.lines.underLine}
                        },
                        align: "${settings.usnFont.sub.value.align}",
                        italic: ${settings.usnFont.sub.value.italic},
                        color: {
                            type: "${settings.usnFont.sub.value.color.type}",
                            color: "${settings.usnFont.sub.value.color.color}",
                            opacity: ${settings.usnFont.sub.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.usnFont.sub.active}
                },
                vip: {
                    value: {
                        family: "${settings.usnFont.vip.value.family}",
                        size: ${settings.usnFont.vip.value.size},
                        weight: ${settings.usnFont.vip.value.weight},
                        height: {
                            auto: ${settings.usnFont.vip.value.height.auto},
                            height: ${settings.usnFont.vip.value.height.height} // In px
                        },
                        spacing: ${settings.usnFont.vip.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.usnFont.vip.value.lines.upperLine},
                            crossLine: ${settings.usnFont.vip.value.lines.crossLine},
                            underLine: ${settings.usnFont.vip.value.lines.underLine}
                        },
                        align: "${settings.usnFont.vip.value.align}",
                        italic: ${settings.usnFont.vip.value.italic},
                        color: {
                            type: "${settings.usnFont.vip.value.color.type}",
                            color: "${settings.usnFont.vip.value.color.color}",
                            opacity: ${settings.usnFont.vip.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.usnFont.vip.active}
                },
                mod: {
                    value: {
                        family: "${settings.usnFont.mod.value.family}",
                        size: ${settings.usnFont.mod.value.size},
                        weight: ${settings.usnFont.mod.value.weight},
                        height: {
                            auto: ${settings.usnFont.mod.value.height.auto},
                            height: ${settings.usnFont.mod.value.height.height} // In px
                        },
                        spacing: ${settings.usnFont.mod.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.usnFont.mod.value.lines.upperLine},
                            crossLine: ${settings.usnFont.mod.value.lines.crossLine},
                            underLine: ${settings.usnFont.mod.value.lines.underLine}
                        },
                        align: "${settings.usnFont.mod.value.align}",
                        italic: ${settings.usnFont.mod.value.italic},
                        color: {
                            type: "${settings.usnFont.mod.value.color.type}",
                            color: "${settings.usnFont.mod.value.color.color}",
                            opacity: ${settings.usnFont.mod.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.usnFont.mod.active}
                }
            },
            usnFontShadow: {
                user: {
                    value: [${usnFontShadowResUser}],
                    active: ${settings.usnFontShadow.user.active}
                },
                sub: {
                    value: [${usnFontShadowResSub}],
                    active: ${settings.usnFontShadow.sub.active}
                },
                vip: {
                    value: [${usnFontShadowResVip}],
                    active: ${settings.usnFontShadow.vip.active}
                },
                mod: {
                    value: [${usnFontShadowResMod}],
                    active: ${settings.usnFontShadow.mod.active}
                }
            },
            usnContent: {
                user: {
                    value: "${settings.usnContent.user.value}",
                    active: ${settings.usnContent.user.active}
                },
                sub: {
                    value: "${settings.usnContent.sub.value}",
                    active: ${settings.usnContent.sub.active}
                },
                vip: {
                    value: "${settings.usnContent.vip.value}",
                    active: ${settings.usnContent.vip.active}
                },
                mod: {
                    value: "${settings.usnContent.mod.value}",
                    active: ${settings.usnContent.mod.active}
                }
            },
            msgBackground: {
                user: {
                    value: [${msgBackgroundResUser}],
                    active: ${settings.msgBackground.user.active}
                },
                sub: {
                    value: [${msgBackgroundResSub}],
                    active: ${settings.msgBackground.sub.active}
                },
                vip: {
                    value: [${msgBackgroundResVip}],
                    active: ${settings.msgBackground.vip.active}
                },
                mod: {
                    value: [${msgBackgroundResMod}],
                    active: ${settings.msgBackground.mod.active}
                }
            },
            msgBorder: {
                user: {
                    value: {
                        top: {
                            type: "${settings.msgBorder.user.value.top.type}",
                            width: ${settings.msgBorder.user.value.top.width}, // In px
                            color: {
                                type: "${settings.msgBorder.user.value.top.color.type}",
                                color: "${settings.msgBorder.user.value.top.color.color}",
                                opacity: ${settings.msgBorder.user.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.msgBorder.user.value.bottom.type}",
                            width: ${settings.msgBorder.user.value.bottom.width}, // In px
                            color: {
                                type: "${settings.msgBorder.user.value.bottom.color.type}",
                                color: "${settings.msgBorder.user.value.bottom.color.color}",
                                opacity: ${settings.msgBorder.user.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.msgBorder.user.value.left.type}",
                            width: ${settings.msgBorder.user.value.left.width}, // In px
                            color: {
                                type: "${settings.msgBorder.user.value.left.color.type}",
                                color: "${settings.msgBorder.user.value.left.color.color}",
                                opacity: ${settings.msgBorder.user.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.msgBorder.user.value.right.type}",
                            width: ${settings.msgBorder.user.value.right.width}, // In px
                            color: {
                                type: "${settings.msgBorder.user.value.right.color.type}",
                                color: "${settings.msgBorder.user.value.right.color.color}",
                                opacity: ${settings.msgBorder.user.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.msgBorder.user.value.tl}, // In px
                        tr: ${settings.msgBorder.user.value.tr}, // In px
                        bl: ${settings.msgBorder.user.value.bl}, // In px
                        br: ${settings.msgBorder.user.value.br}  // In px
                    },
                    active: ${settings.msgBorder.user.active}
                },
                sub: {
                    value: {
                        top: {
                            type: "${settings.msgBorder.sub.value.top.type}",
                            width: ${settings.msgBorder.sub.value.top.width}, // In px
                            color: {
                                type: "${settings.msgBorder.sub.value.top.color.type}",
                                color: "${settings.msgBorder.sub.value.top.color.color}",
                                opacity: ${settings.msgBorder.sub.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.msgBorder.sub.value.bottom.type}",
                            width: ${settings.msgBorder.sub.value.bottom.width}, // In px
                            color: {
                                type: "${settings.msgBorder.sub.value.bottom.color.type}",
                                color: "${settings.msgBorder.sub.value.bottom.color.color}",
                                opacity: ${settings.msgBorder.sub.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.msgBorder.sub.value.left.type}",
                            width: ${settings.msgBorder.sub.value.left.width}, // In px
                            color: {
                                type: "${settings.msgBorder.sub.value.left.color.type}",
                                color: "${settings.msgBorder.sub.value.left.color.color}",
                                opacity: ${settings.msgBorder.sub.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.msgBorder.sub.value.right.type}",
                            width: ${settings.msgBorder.sub.value.right.width}, // In px
                            color: {
                                type: "${settings.msgBorder.sub.value.right.color.type}",
                                color: "${settings.msgBorder.sub.value.right.color.color}",
                                opacity: ${settings.msgBorder.sub.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.msgBorder.sub.value.tl}, // In px
                        tr: ${settings.msgBorder.sub.value.tr}, // In px
                        bl: ${settings.msgBorder.sub.value.bl}, // In px
                        br: ${settings.msgBorder.sub.value.br}  // In px
                    },
                    active: ${settings.msgBorder.sub.active}
                },
                vip: {
                    value: {
                        top: {
                            type: "${settings.msgBorder.vip.value.top.type}",
                            width: ${settings.msgBorder.vip.value.top.width}, // In px
                            color: {
                                type: "${settings.msgBorder.vip.value.top.color.type}",
                                color: "${settings.msgBorder.vip.value.top.color.color}",
                                opacity: ${settings.msgBorder.vip.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.msgBorder.vip.value.bottom.type}",
                            width: ${settings.msgBorder.vip.value.bottom.width}, // In px
                            color: {
                                type: "${settings.msgBorder.vip.value.bottom.color.type}",
                                color: "${settings.msgBorder.vip.value.bottom.color.color}",
                                opacity: ${settings.msgBorder.vip.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.msgBorder.vip.value.left.type}",
                            width: ${settings.msgBorder.vip.value.left.width}, // In px
                            color: {
                                type: "${settings.msgBorder.vip.value.left.color.type}",
                                color: "${settings.msgBorder.vip.value.left.color.color}",
                                opacity: ${settings.msgBorder.vip.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.msgBorder.vip.value.right.type}",
                            width: ${settings.msgBorder.vip.value.right.width}, // In px
                            color: {
                                type: "${settings.msgBorder.vip.value.right.color.type}",
                                color: "${settings.msgBorder.vip.value.right.color.color}",
                                opacity: ${settings.msgBorder.vip.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.msgBorder.vip.value.tl}, // In px
                        tr: ${settings.msgBorder.vip.value.tr}, // In px
                        bl: ${settings.msgBorder.vip.value.bl}, // In px
                        br: ${settings.msgBorder.vip.value.br}  // In px
                    },
                    active: ${settings.msgBorder.vip.active}
                },
                mod: {
                    value: {
                        top: {
                            type: "${settings.msgBorder.mod.value.top.type}",
                            width: ${settings.msgBorder.mod.value.top.width}, // In px
                            color: {
                                type: "${settings.msgBorder.mod.value.top.color.type}",
                                color: "${settings.msgBorder.mod.value.top.color.color}",
                                opacity: ${settings.msgBorder.mod.value.top.color.opacity} // In Hex
                            }
                        },
                        bottom: {
                            type: "${settings.msgBorder.mod.value.bottom.type}",
                            width: ${settings.msgBorder.mod.value.bottom.width}, // In px
                            color: {
                                type: "${settings.msgBorder.mod.value.bottom.color.type}",
                                color: "${settings.msgBorder.mod.value.bottom.color.color}",
                                opacity: ${settings.msgBorder.mod.value.bottom.color.opacity} // In Hex
                            }
                        },
                        left: {
                            type: "${settings.msgBorder.mod.value.left.type}",
                            width: ${settings.msgBorder.mod.value.left.width}, // In px
                            color: {
                                type: "${settings.msgBorder.mod.value.left.color.type}",
                                color: "${settings.msgBorder.mod.value.left.color.color}",
                                opacity: ${settings.msgBorder.mod.value.left.color.opacity} // In Hex
                            }
                        },
                        right: {
                            type: "${settings.msgBorder.mod.value.right.type}",
                            width: ${settings.msgBorder.mod.value.right.width}, // In px
                            color: {
                                type: "${settings.msgBorder.mod.value.right.color.type}",
                                color: "${settings.msgBorder.mod.value.right.color.color}",
                                opacity: ${settings.msgBorder.mod.value.right.color.opacity} // In Hex
                            }
                        },
                        tl: ${settings.msgBorder.mod.value.tl}, // In px
                        tr: ${settings.msgBorder.mod.value.tr}, // In px
                        bl: ${settings.msgBorder.mod.value.bl}, // In px
                        br: ${settings.msgBorder.mod.value.br}  // In px
                    },
                    active: ${settings.msgBorder.mod.active}
                }
            },
            msgShadow: {
                user: {
                    value: [${msgShadowResUser}],
                    active: ${settings.msgShadow.user.active}
                },
                sub: {
                    value: [${msgShadowResSub}],
                    active: ${settings.msgShadow.sub.active}
                },
                vip: {
                    value: [${msgShadowResVip}],
                    active: ${settings.msgShadow.vip.active}
                },
                mod: {
                    value: [${msgShadowResMod}],
                    active: ${settings.msgShadow.mod.active}
                }
            },
            msgPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.msgPosition.user.value.spacing.outer.top}, // In px
                                bottom: ${settings.msgPosition.user.value.spacing.outer.bottom}, // In px
                                left: ${settings.msgPosition.user.value.spacing.outer.left}, // In px
                                right: ${settings.msgPosition.user.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.msgPosition.user.value.spacing.inner.top}, // In px
                                bottom: ${settings.msgPosition.user.value.spacing.inner.bottom}, // In px
                                left: ${settings.msgPosition.user.value.spacing.inner.left}, // In px
                                right: ${settings.msgPosition.user.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.msgPosition.user.value.sizing}"
                    },
                    active: ${settings.msgPosition.user.active}
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.msgPosition.sub.value.spacing.outer.top}, // In px
                                bottom: ${settings.msgPosition.sub.value.spacing.outer.bottom}, // In px
                                left: ${settings.msgPosition.sub.value.spacing.outer.left}, // In px
                                right: ${settings.msgPosition.sub.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.msgPosition.sub.value.spacing.inner.top}, // In px
                                bottom: ${settings.msgPosition.sub.value.spacing.inner.bottom}, // In px
                                left: ${settings.msgPosition.sub.value.spacing.inner.left}, // In px
                                right: ${settings.msgPosition.sub.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.msgPosition.sub.value.sizing}"
                    },
                    active: ${settings.msgPosition.sub.active}
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.msgPosition.vip.value.spacing.outer.top}, // In px
                                bottom: ${settings.msgPosition.vip.value.spacing.outer.bottom}, // In px
                                left: ${settings.msgPosition.vip.value.spacing.outer.left}, // In px
                                right: ${settings.msgPosition.vip.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.msgPosition.vip.value.spacing.inner.top}, // In px
                                bottom: ${settings.msgPosition.vip.value.spacing.inner.bottom}, // In px
                                left: ${settings.msgPosition.vip.value.spacing.inner.left}, // In px
                                right: ${settings.msgPosition.vip.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.msgPosition.vip.value.sizing}"
                    },
                    active: ${settings.msgPosition.vip.active}
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: ${settings.msgPosition.mod.value.spacing.outer.top}, // In px
                                bottom: ${settings.msgPosition.mod.value.spacing.outer.bottom}, // In px
                                left: ${settings.msgPosition.mod.value.spacing.outer.left}, // In px
                                right: ${settings.msgPosition.mod.value.spacing.outer.right}, // In px
                            },
                            inner: {
                                top: ${settings.msgPosition.mod.value.spacing.inner.top}, // In px
                                bottom: ${settings.msgPosition.mod.value.spacing.inner.bottom}, // In px
                                left: ${settings.msgPosition.mod.value.spacing.inner.left}, // In px
                                right: ${settings.msgPosition.mod.value.spacing.inner.right}, // In px
                            }
                        },
                        sizing: "${settings.msgPosition.mod.value.sizing}"
                    },
                    active: ${settings.msgPosition.mod.active}
                }
            },
            msgFont: {
                user: {
                    value: {
                        family: "${settings.msgFont.user.value.family}",
                        size: ${settings.msgFont.user.value.size},
                        weight: ${settings.msgFont.user.value.weight},
                        height: {
                            auto: ${settings.msgFont.user.value.height.auto},
                            height: ${settings.msgFont.user.value.height.height} // In px
                        },
                        spacing: ${settings.msgFont.user.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.msgFont.user.value.lines.upperLine},
                            crossLine: ${settings.msgFont.user.value.lines.crossLine},
                            underLine: ${settings.msgFont.user.value.lines.underLine}
                        },
                        align: "${settings.msgFont.user.value.align}",
                        italic: ${settings.msgFont.user.value.italic},
                        color: {
                            type: "${settings.msgFont.user.value.color.type}",
                            color: "${settings.msgFont.user.value.color.color}",
                            opacity: ${settings.msgFont.user.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.msgFont.user.active}
                },
                sub: {
                    value: {
                        family: "${settings.msgFont.sub.value.family}",
                        size: ${settings.msgFont.sub.value.size},
                        weight: ${settings.msgFont.sub.value.weight},
                        height: {
                            auto: ${settings.msgFont.sub.value.height.auto},
                            height: ${settings.msgFont.sub.value.height.height} // In px
                        },
                        spacing: ${settings.msgFont.sub.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.msgFont.sub.value.lines.upperLine},
                            crossLine: ${settings.msgFont.sub.value.lines.crossLine},
                            underLine: ${settings.msgFont.sub.value.lines.underLine}
                        },
                        align: "${settings.msgFont.sub.value.align}",
                        italic: ${settings.msgFont.sub.value.italic},
                        color: {
                            type: "${settings.msgFont.sub.value.color.type}",
                            color: "${settings.msgFont.sub.value.color.color}",
                            opacity: ${settings.msgFont.sub.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.msgFont.sub.active}
                },
                vip: {
                    value: {
                        family: "${settings.msgFont.vip.value.family}",
                        size: ${settings.msgFont.vip.value.size},
                        weight: ${settings.msgFont.vip.value.weight},
                        height: {
                            auto: ${settings.msgFont.vip.value.height.auto},
                            height: ${settings.msgFont.vip.value.height.height} // In px
                        },
                        spacing: ${settings.msgFont.vip.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.msgFont.vip.value.lines.upperLine},
                            crossLine: ${settings.msgFont.vip.value.lines.crossLine},
                            underLine: ${settings.msgFont.vip.value.lines.underLine}
                        },
                        align: "${settings.msgFont.vip.value.align}",
                        italic: ${settings.msgFont.vip.value.italic},
                        color: {
                            type: "${settings.msgFont.vip.value.color.type}",
                            color: "${settings.msgFont.vip.value.color.color}",
                            opacity: ${settings.msgFont.vip.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.msgFont.vip.active}
                },
                mod: {
                    value: {
                        family: "${settings.msgFont.mod.value.family}",
                        size: ${settings.msgFont.mod.value.size},
                        weight: ${settings.msgFont.mod.value.weight},
                        height: {
                            auto: ${settings.msgFont.mod.value.height.auto},
                            height: ${settings.msgFont.mod.value.height.height} // In px
                        },
                        spacing: ${settings.msgFont.mod.value.spacing}, // In px
                        lines: {
                            upperLine: ${settings.msgFont.mod.value.lines.upperLine},
                            crossLine: ${settings.msgFont.mod.value.lines.crossLine},
                            underLine: ${settings.msgFont.mod.value.lines.underLine}
                        },
                        align: "${settings.msgFont.mod.value.align}",
                        italic: ${settings.msgFont.mod.value.italic},
                        color: {
                            type: "${settings.msgFont.mod.value.color.type}",
                            color: "${settings.msgFont.mod.value.color.color}",
                            opacity: ${settings.msgFont.mod.value.color.opacity} // In Hex
                        },
                    },
                    active: ${settings.msgFont.mod.active}
                }
            },
            msgFontShadow: {
                user: {
                    value: [${msgFontShadowResUser}],
                    active: ${settings.msgFontShadow.user.active}
                },
                sub: {
                    value: [${msgFontShadowResSub}],
                    active: ${settings.msgFontShadow.sub.active}
                },
                vip: {
                    value: [${msgFontShadowResVip}],
                    active: ${settings.msgFontShadow.vip.active}
                },
                mod: {
                    value: [${msgFontShadowResMod}],
                    active: ${settings.msgFontShadow.mod.active}
                }
            },
            msgContent: {
                user: {
                    value: "${settings.msgContent.user.value}",
                    active: ${settings.msgContent.user.active}
                },
                sub: {
                    value: "${settings.msgContent.sub.value}",
                    active: ${settings.msgContent.sub.active}
                },
                vip: {
                    value: "${settings.msgContent.vip.value}",
                    active: ${settings.msgContent.vip.active}
                },
                mod: {
                    value: "${settings.msgContent.mod.value}",
                    active: ${settings.msgContent.mod.active}
                }
            },
            othEmotes: {
                user: {
                    value: {
                        auto: ${settings.othEmotes.user.value.auto},
                        height: ${settings.othEmotes.user.value.height}, // In px
                        linePos: "${settings.othEmotes.user.value.linePos}" // top/middle/bottom
                    },
                    active: ${settings.othEmotes.user.active}
                },
                sub: {
                    value: {
                        auto: ${settings.othEmotes.sub.value.auto},
                        height: ${settings.othEmotes.sub.value.height}, // In px
                        linePos: "${settings.othEmotes.sub.value.linePos}" // top/middle/bottom
                    },
                    active: ${settings.othEmotes.sub.active}
                },
                vip: {
                    value: {
                        auto: ${settings.othEmotes.vip.value.auto},
                        height: ${settings.othEmotes.vip.value.height}, // In px
                        linePos: "${settings.othEmotes.vip.value.linePos}" // top/middle/bottom
                    },
                    active: ${settings.othEmotes.vip.active}
                },
                mod: {
                    value: {
                        auto: ${settings.othEmotes.mod.value.auto},
                        height: ${settings.othEmotes.mod.value.height}, // In px
                        linePos: "${settings.othEmotes.mod.value.linePos}" // top/middle/bottom
                    },
                    active: ${settings.othEmotes.mod.active}
                }
            },
            anmTiming: {
                user: {
                    value: {
                        delay: ${settings.anmTiming.user.value.delay},
                        appearing: ${settings.anmTiming.user.value.appearing},
                        duration: ${settings.anmTiming.user.value.duration},
                        vanishing: ${settings.anmTiming.user.value.vanishing}
                    },
                    active: ${settings.anmTiming.user.active}
                },
                sub: {
                    value: {
                        delay: ${settings.anmTiming.sub.value.delay},
                        appearing: ${settings.anmTiming.user.value.appearing},
                        duration: ${settings.anmTiming.user.value.duration},
                        vanishing: ${settings.anmTiming.user.value.vanishing}
                    },
                    active: ${settings.anmTiming.sub.active}
                },
                vip: {
                    value: {
                        delay: ${settings.anmTiming.vip.value.delay},
                        appearing: ${settings.anmTiming.user.value.appearing},
                        duration: ${settings.anmTiming.user.value.duration},
                        vanishing: ${settings.anmTiming.user.value.vanishing}
                    },
                    active: ${settings.anmTiming.vip.active}
                },
                mod: {
                    value: {
                        delay: ${settings.anmTiming.mod.value.delay},
                        appearing: ${settings.anmTiming.user.value.appearing},
                        duration: ${settings.anmTiming.user.value.duration},
                        vanishing: ${settings.anmTiming.user.value.vanishing}
                    },
                    active: ${settings.anmTiming.mod.active}
                }
            },
            anmShow: {
                user: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmShow.user.value[0].active},
                            value: ${settings.anmShow.user.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmShow.user.value[1].active},
                            value: ${settings.anmShow.user.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmShow.user.value[2].active},
                            value: ${settings.anmShow.user.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmShow.user.value[3].active},
                            value: ${settings.anmShow.user.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmShow.user.value[4].active},
                            value: ${settings.anmShow.user.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmShow.user.value[5].active},
                            value: ${settings.anmShow.user.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmShow.user.value[6].active},
                            value: ${settings.anmShow.user.value[6].value}
                        }
                    ],
                    active: ${settings.anmShow.user.active}
                },
                sub: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmShow.sub.value[0].active},
                            value: ${settings.anmShow.sub.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmShow.sub.value[1].active},
                            value: ${settings.anmShow.sub.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmShow.sub.value[2].active},
                            value: ${settings.anmShow.sub.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmShow.sub.value[3].active},
                            value: ${settings.anmShow.sub.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmShow.sub.value[4].active},
                            value: ${settings.anmShow.sub.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmShow.sub.value[5].active},
                            value: ${settings.anmShow.sub.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmShow.sub.value[6].active},
                            value: ${settings.anmShow.sub.value[6].value}
                        }
                    ],
                    active: ${settings.anmShow.sub.active}
                },
                vip: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmShow.vip.value[0].active},
                            value: ${settings.anmShow.vip.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmShow.vip.value[1].active},
                            value: ${settings.anmShow.vip.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmShow.vip.value[2].active},
                            value: ${settings.anmShow.vip.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmShow.vip.value[3].active},
                            value: ${settings.anmShow.vip.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmShow.vip.value[4].active},
                            value: ${settings.anmShow.vip.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmShow.vip.value[5].active},
                            value: ${settings.anmShow.vip.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmShow.vip.value[6].active},
                            value: ${settings.anmShow.vip.value[6].value}
                        }
                    ],
                    active: ${settings.anmShow.vip.active}
                },
                mod: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmShow.mod.value[0].active},
                            value: ${settings.anmShow.mod.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmShow.mod.value[1].active},
                            value: ${settings.anmShow.mod.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmShow.mod.value[2].active},
                            value: ${settings.anmShow.mod.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmShow.mod.value[3].active},
                            value: ${settings.anmShow.mod.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmShow.mod.value[4].active},
                            value: ${settings.anmShow.mod.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmShow.mod.value[5].active},
                            value: ${settings.anmShow.mod.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmShow.mod.value[6].active},
                            value: ${settings.anmShow.mod.value[6].value}
                        }
                    ],
                    active: ${settings.anmShow.mod.active}
                }
            },
            anmHide: {
                user: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmHide.user.value[0].active},
                            value: ${settings.anmHide.user.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmHide.user.value[1].active},
                            value: ${settings.anmHide.user.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmHide.user.value[2].active},
                            value: ${settings.anmHide.user.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmHide.user.value[3].active},
                            value: ${settings.anmHide.user.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmHide.user.value[4].active},
                            value: ${settings.anmHide.user.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmHide.user.value[5].active},
                            value: ${settings.anmHide.user.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmHide.user.value[6].active},
                            value: ${settings.anmHide.user.value[6].value}
                        }
                    ],
                    active: ${settings.anmHide.user.active}
                },
                sub: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmHide.sub.value[0].active},
                            value: ${settings.anmHide.sub.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmHide.sub.value[1].active},
                            value: ${settings.anmHide.sub.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmHide.sub.value[2].active},
                            value: ${settings.anmHide.sub.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmHide.sub.value[3].active},
                            value: ${settings.anmHide.sub.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmHide.sub.value[4].active},
                            value: ${settings.anmHide.sub.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmHide.sub.value[5].active},
                            value: ${settings.anmHide.sub.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmHide.sub.value[6].active},
                            value: ${settings.anmHide.sub.value[6].value}
                        }
                    ],
                    active: ${settings.anmHide.sub.active}
                },
                vip: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmHide.vip.value[0].active},
                            value: ${settings.anmHide.vip.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmHide.vip.value[1].active},
                            value: ${settings.anmHide.vip.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmHide.vip.value[2].active},
                            value: ${settings.anmHide.vip.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmHide.vip.value[3].active},
                            value: ${settings.anmHide.vip.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmHide.vip.value[4].active},
                            value: ${settings.anmHide.vip.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmHide.vip.value[5].active},
                            value: ${settings.anmHide.vip.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmHide.vip.value[6].active},
                            value: ${settings.anmHide.vip.value[6].value}
                        }
                    ],
                    active: ${settings.anmHide.vip.active}
                },
                mod: {
                    value: [
                        {
                            type: "scale",
                            active: ${settings.anmHide.mod.value[0].active},
                            value: ${settings.anmHide.mod.value[0].value}
                        }, {
                            type: "moveX",
                            active: ${settings.anmHide.mod.value[1].active},
                            value: ${settings.anmHide.mod.value[1].value}
                        }, {
                            type: "moveY",
                            active: ${settings.anmHide.mod.value[2].active},
                            value: ${settings.anmHide.mod.value[2].value}
                        }, {
                            type: "rotateX",
                            active: ${settings.anmHide.mod.value[3].active},
                            value: ${settings.anmHide.mod.value[3].value}
                        }, {
                            type: "rotateY",
                            active: ${settings.anmHide.mod.value[4].active},
                            value: ${settings.anmHide.mod.value[4].value}
                        }, {
                            type: "rotateZ",
                            active: ${settings.anmHide.mod.value[5].active},
                            value: ${settings.anmHide.mod.value[5].value}
                        }, {
                            type: "opacity",
                            active: ${settings.anmHide.mod.value[6].active},
                            value: ${settings.anmHide.mod.value[6].value}
                        }
                    ],
                    active: ${settings.anmHide.mod.active}
                }
            }
        };
    `;

    console.log(exportText);
    
    blob = new Blob([exportText], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "data.js");
}