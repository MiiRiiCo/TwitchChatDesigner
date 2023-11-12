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

function openNavMenu(i) {
    if (document.querySelectorAll(".navMenuWrapper")[i].getAttribute("data-open") === "false") {
        document.querySelectorAll(".navButton")[i + 1].setAttribute("data-active", "true");
        document.querySelectorAll(".navMenuWrapper")[i].setAttribute("data-open", "true");
    } else {
        document.querySelectorAll(".navButton")[i + 1].setAttribute("data-active", "false");
        document.querySelectorAll(".navMenuWrapper")[i].setAttribute("data-open", "false");
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
    console.log(colorPreset);

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

// settings.cbxBackground

function decompileCbxBG() {
    document.querySelectorAll(".cbx").forEach(cbx => {
        cbxBackground = "";
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
    });
}

function updateColorSliderCbxBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderCbxBGCont").length; i++) {
        if (settings.cbxBackground[i].type !== "solid") {
            
            var cbxBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderCbxBGCont")[i].querySelectorAll(".colorSliderCbxBG"),
                colorList = settings.cbxBackground[i].colors;

            for (let j = 0; j < settings.cbxBackground[i].colors.length; j++) {
                settings.cbxBackground[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.cbxBackground[i].colors.length; j++) {
                for (let k = 0; k < settings.cbxBackground[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.cbxBackground[i].colors[j].position >= settings.cbxBackground[i].colors[k].position) {
                            settings.cbxBackground[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.cbxBackground[i].colors.length; j++) {
                var resultElmnt = settings.cbxBackground[i].colors.find(findElmnt => findElmnt.count === j);
                cbxBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.cbxBackground[i].colors.length - 1) {
                    cbxBGPrev += ", ";
                } else {
                    cbxBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderCbxBGCont")[i].style.backgroundImage = cbxBGPrev;
        } else {
            var cbxBGPrev = `${settings.cbxBackground[i].colors[0].color}${dec2hex(settings.cbxBackground[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderCbxBGCont")[i].style.backgroundColor = cbxBGPrev;
        }
    }
    decompileCbxBG();
}

var activeCbxBGGrad = 0;
var activeCbxBGColor = 0;

function openColorCbxBGBox(grdNum, clrNum) {
    if (grdNum !== activeCbxBGGrad && activeCbxBGGrad !== undefined && activeCbxBGGrad < settings.cbxBackground.length) {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "false");
    }
    activeCbxBGGrad = grdNum;
    activeCbxBGColor = clrNum;
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeInput").value = settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].color;
    if (settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].type === "custom") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].type === "twitch") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeOpacity").value = settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].opacity;
}

function updateColorCbxBG(type) {
    if (type) {settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].color = document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeInput").value;
    settings.cbxBackground[activeCbxBGGrad].colors[activeCbxBGColor].opacity = parseInt(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderCbxBGBox();

    decompileCbxBG();
}

function deleteColorCbxBGBox() {
    settings.cbxBackground[activeCbxBGGrad].colors.splice(activeCbxBGColor, 1);
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG")[activeCbxBGColor].remove();
    updateColorSliderCbxBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG").length; i++) {
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].querySelectorAll(".colorSliderCbxBG")[i].setAttribute("onpointerdown", `openColorCbxBGBox(${activeCbxBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[activeCbxBGGrad].setAttribute("data-color-show", "false");
    activeCbxBGGrad = undefined;
    activeCbxBGColor = undefined;

    for (let j = 0; j < settings.cbxBackground.length; j++) {
        for (let k = 0; k < settings.cbxBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorCbxBGBox(${j}, ${k})`)
        }
    }

    decompileCbxBG();
}

function addColorSliderCbxBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderCbxBG";newSlider.setAttribute("oninput", "updateColorSliderCbxBGBox()");newSlider.setAttribute("onpointerdown", `openColorCbxBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderCbxBGCont")[i].appendChild(newSlider);

    settings.cbxBackground[i].colors.push({
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
        settings.cbxBackground.push({
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
        settings.cbxBackground.push({
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
        settings.cbxBackground.push({
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
    settings.cbxBackground.splice(i, 1);
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
    settings.cbxBackground[i].size = size;
    for (let j = 0; j < settings.cbxBackground.length; j++) {
        if (settings.cbxBackground[j].type === "radial") {
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
    settings.cbxBackground[i].rotate = parseInt(e.target.value);
    
    decompileCbxBG();
}

function updateRadialPosCbxBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.cbxBackground[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.cbxBackground[i].yPos = parseInt(e.target.value);
    }
    
    decompileCbxBG();
}

function moveColorSliderCbxBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.cbxBackground[i];
        settings.cbxBackground.splice(i, 1);
        settings.cbxBackground.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i]);
        if (activeCbxBGGrad === i) {
            activeCbxBGGrad -= 1;
        } else if (activeCbxBGGrad === i - 1) {
            activeCbxBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.cbxBackground.length - 1) {
        var elmnt = settings.cbxBackground[i];
        settings.cbxBackground.splice(i, 1);
        settings.cbxBackground.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[i]);
        if (activeCbxBGGrad === i) {
            activeCbxBGGrad += 1;
        } else if (activeCbxBGGrad === i + 1) {
            activeCbxBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.cbxBackground.length; j++) {
        for (let k = 0; k < settings.cbxBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColCbxBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorCbxBGBox(${j}, ${k})`)
        }
    }
    
    decompileCbxBG();
}

// settings.cbxBorder

function decompileCbxBorder() {
    document.querySelectorAll(".cbx").forEach(cbx => {
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

        if (settings.cbxBorder[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.cbxBorder[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.cbxBorder[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.cbxBorder[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.cbxBorder[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.cbxBorder[`${pos}`].color.opacity;
        
    } else if (activeCbxBorder === "tl" || activeCbxBorder === "tr" || activeCbxBorder === "bl" || activeCbxBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.cbxBorderRadius[`${activeCbxBorder}`];
    }
}

function updateBorderCbx(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.cbxBorder[`${activeCbxBorder}`].type = value;
    } else if (type === "width") {
        settings.cbxBorder[`${activeCbxBorder}`].width = parseInt(document.querySelector("#cbxBorderWidth").value);
    } else if (type === "color") {
        settings.cbxBorder[`${activeCbxBorder}`].color.color = document.querySelector("#cbxBorderColor").value;
    } else if (type === "colorType") {
        settings.cbxBorder[`${activeCbxBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.cbxBorder[`${activeCbxBorder}`].color.opacity = parseInt(document.querySelector("#cbxBorderOpacity").value);
    } else if (type === "all") {
        settings.cbxBorder["top"].type = "" + settings.cbxBorder[`${activeCbxBorder}`].type;
        settings.cbxBorder["bottom"].type = "" + settings.cbxBorder[`${activeCbxBorder}`].type;
        settings.cbxBorder["left"].type = "" + settings.cbxBorder[`${activeCbxBorder}`].type;
        settings.cbxBorder["right"].type = "" + settings.cbxBorder[`${activeCbxBorder}`].type;

        settings.cbxBorder["top"].width = 0 + settings.cbxBorder[`${activeCbxBorder}`].width;
        settings.cbxBorder["bottom"].width = 0 + settings.cbxBorder[`${activeCbxBorder}`].width;
        settings.cbxBorder["left"].width = 0 + settings.cbxBorder[`${activeCbxBorder}`].width;
        settings.cbxBorder["right"].width = 0 + settings.cbxBorder[`${activeCbxBorder}`].width;
        
        settings.cbxBorder["top"].color.color = "" + settings.cbxBorder[`${activeCbxBorder}`].color.color;
        settings.cbxBorder["bottom"].color.color = "" + settings.cbxBorder[`${activeCbxBorder}`].color.color;
        settings.cbxBorder["left"].color.color = "" + settings.cbxBorder[`${activeCbxBorder}`].color.color;
        settings.cbxBorder["right"].color.color = "" + settings.cbxBorder[`${activeCbxBorder}`].color.color;

        settings.cbxBorder["top"].color.type = "" + settings.cbxBorder[`${activeCbxBorder}`].color.type;
        settings.cbxBorder["bottom"].color.type = "" + settings.cbxBorder[`${activeCbxBorder}`].color.type;
        settings.cbxBorder["left"].color.type = "" + settings.cbxBorder[`${activeCbxBorder}`].color.type;
        settings.cbxBorder["right"].color.type = "" + settings.cbxBorder[`${activeCbxBorder}`].color.type;

        settings.cbxBorder["top"].color.opacity = 0 + settings.cbxBorder[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder["bottom"].color.opacity = 0 + settings.cbxBorder[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder["left"].color.opacity = 0 + settings.cbxBorder[`${activeCbxBorder}`].color.opacity
        settings.cbxBorder["right"].color.opacity = 0 + settings.cbxBorder[`${activeCbxBorder}`].color.opacity
    }

    decompileCbxBorder();
}

function decompileCbxBorderRadius() {
    document.querySelectorAll(".cbx").forEach(cbx => {
        cbx.style.setProperty("--cbxBRtl", `${settings.cbxBorderRadius.tl}px`);
        cbx.style.setProperty("--cbxBRtr", `${settings.cbxBorderRadius.tr}px`);
        cbx.style.setProperty("--cbxBRbr", `${settings.cbxBorderRadius.br}px`);
        cbx.style.setProperty("--cbxBRbl", `${settings.cbxBorderRadius.bl}px`);
    })
}

function updateCornerCbx(type) {
    if (type === "corner") {
        settings.cbxBorderRadius[`${activeCbxBorder}`] = parseInt(document.querySelector("#cbxCornerRadius").value);
    } else if (type === "all") {
        settings.cbxBorderRadius["tl"] = 0 + settings.cbxBorderRadius[`${activeCbxBorder}`];
        settings.cbxBorderRadius["tr"] = 0 + settings.cbxBorderRadius[`${activeCbxBorder}`];
        settings.cbxBorderRadius["bl"] = 0 + settings.cbxBorderRadius[`${activeCbxBorder}`];
        settings.cbxBorderRadius["br"] = 0 + settings.cbxBorderRadius[`${activeCbxBorder}`];
    }

    decompileCbxBorderRadius();
}

// settings.cbxShadow

function decompileCbxShadow() {
    document.querySelectorAll(".cbx").forEach(cbx => {
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
    });
}

var activeCbxShadow = -1;

function openShadowCbx(triggerAdd) {
    for (let i = 0; i < settings.cbxShadow.length; i++) {
        document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeCbxShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeCbxShadow >= 0) {
        document.querySelector(".shadowSettingsCbx").setAttribute("data-active", "true");
        document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[activeCbxShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[0].value = settings.cbxShadow[activeCbxShadow].xPos;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[1].value = settings.cbxShadow[activeCbxShadow].yPos;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[2].value = settings.cbxShadow[activeCbxShadow].blur;
        document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[3].value = settings.cbxShadow[activeCbxShadow].expand;
        document.querySelector(".shadowSettingsCbx").querySelector(".cbxShadowInset").setAttribute("data-active", settings.cbxShadow[activeCbxShadow].inset);
        
        if (settings.cbxShadow[activeCbxShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.cbxShadow[activeCbxShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#cbxShadowOpacity").value = settings.cbxShadow[activeCbxShadow].color.opacity;
        
        document.querySelector("#cbxShadowColor").value = settings.cbxShadow[activeCbxShadow].color.color;
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

    settings.cbxShadow.push({
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

    activeCbxShadow = settings.cbxShadow.length - 1;
    openShadowCbx(true);
    
    decompileCbxShadow();
}

function updateShadowCbx(type, value) {
    settings.cbxShadow[activeCbxShadow].xPos    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[0].value);
    settings.cbxShadow[activeCbxShadow].yPos    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[1].value);
    settings.cbxShadow[activeCbxShadow].blur    = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[2].value);
    settings.cbxShadow[activeCbxShadow].expand  = parseInt(document.querySelector(".shadowSettingsCbx").querySelectorAll(".numContInput")[3].value);
    
    settings.cbxShadow[activeCbxShadow].color.opacity = parseInt(document.querySelector("#cbxShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsCbx").querySelector(".cbxShadowInset").getAttribute("data-active") === "false") {
        settings.cbxShadow[activeCbxShadow].inset = false;
    } else {
        settings.cbxShadow[activeCbxShadow].inset = true;
    }

    if (type === "colorType") {
        settings.cbxShadow[activeCbxShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsCbx").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.cbxShadow[activeCbxShadow].color.color = document.querySelector("#cbxShadowColor").value;
    }

    for (let i = 0; i < settings.cbxShadow.length; i++) {
        var cbxStyle = `${settings.cbxShadow[i].xPos}px ${settings.cbxShadow[i].yPos}px ${settings.cbxShadow[i].blur}px ${settings.cbxShadow[i].expand}px ${settings.cbxShadow[i].color.color}${dec2hex(settings.cbxShadow[i].color.opacity)}`;
        if (settings.cbxShadow[i].inset === true) {
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
    settings.cbxShadow.splice(i, 1);

    document.querySelector(".shadowColCbx").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowCbx(true);
    
    decompileCbxShadow();
}

// settings.cbxSpacing

function decompileCbxSpacing() {
    document.querySelectorAll(".cbx").forEach(cbx => {
        cbx.style.setProperty("--cbxSpacingIT", `${settings.cbxSpacing.inner.top}px`);
        cbx.style.setProperty("--cbxSpacingIR", `${settings.cbxSpacing.inner.right}px`);
        cbx.style.setProperty("--cbxSpacingIB", `${settings.cbxSpacing.inner.bottom}px`);
        cbx.style.setProperty("--cbxSpacingIL", `${settings.cbxSpacing.inner.left}px`);

        cbx.style.setProperty("--cbxSpacingOT", `${settings.cbxSpacing.outer.top}px`);
        cbx.style.setProperty("--cbxSpacingOR", `${settings.cbxSpacing.outer.right}px`);
        cbx.style.setProperty("--cbxSpacingOB", `${settings.cbxSpacing.outer.bottom}px`);
        cbx.style.setProperty("--cbxSpacingOL", `${settings.cbxSpacing.outer.left}px`);
    })
}

function updateCbxSpacing(pos) {
    if (pos === "OT") {
        settings.cbxSpacing.outer.top = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.cbxSpacing.outer.left = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.cbxSpacing.outer.right = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.cbxSpacing.outer.bottom = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.cbxSpacing.inner.top = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.cbxSpacing.inner.left = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.cbxSpacing.inner.right = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.cbxSpacing.inner.bottom = parseInt(document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileCbxSpacing();
}

// settings.cbxSizing

function decompileCbxSizing() {
    document.querySelectorAll(".cbx").forEach(cbx => {
        cbx.style.setProperty("--cbxSizing", settings.cbxSizing);
    })
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
    
    settings.cbxSizing = type;

    decompileCbxSizing();
}

// settings.usnBackground

function decompileUsnBG() {
    document.querySelectorAll(".usn").forEach(usn => {
        usnBackground = "";
        for (let i = 0; i < settings.usnBackground.length; i++) {
            if (settings.usnBackground[i].type === "solid") {
                if (settings.usnBackground[i].colors[0].type === "custom") {
                    usnBackground += `linear-gradient(${settings.usnBackground[i].colors[0].color}${dec2hex(settings.usnBackground[i].colors[0].opacity)}, ${settings.usnBackground[i].colors[0].color}${dec2hex(settings.usnBackground[i].colors[0].opacity)})`;
                } else if (settings.usnBackground[i].colors[0].type === "twitch") {
                    usnBackground += `linear-gradient(${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[i].colors[0].opacity)}, ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBackground[i].colors[0].opacity)})`;
                }
            } else if (settings.usnBackground[i].type === "linear") {
                var sortedColors = [...settings.usnBackground[i].colors].sort((a, b) => {return a.count - b.count});
                usnBackground += `linear-gradient(${settings.usnBackground[i].rotate}deg, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        usnBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        usnBackground += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
                        usnBackground += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
    });
}

function updateColorSliderUsnBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderUsnBGCont").length; i++) {
        if (settings.usnBackground[i].type !== "solid") {
            
            var usnBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderUsnBGCont")[i].querySelectorAll(".colorSliderUsnBG"),
                colorList = settings.usnBackground[i].colors;

            for (let j = 0; j < settings.usnBackground[i].colors.length; j++) {
                settings.usnBackground[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.usnBackground[i].colors.length; j++) {
                for (let k = 0; k < settings.usnBackground[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.usnBackground[i].colors[j].position >= settings.usnBackground[i].colors[k].position) {
                            settings.usnBackground[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.usnBackground[i].colors.length; j++) {
                var resultElmnt = settings.usnBackground[i].colors.find(findElmnt => findElmnt.count === j);
                usnBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.usnBackground[i].colors.length - 1) {
                    usnBGPrev += ", ";
                } else {
                    usnBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderUsnBGCont")[i].style.backgroundImage = usnBGPrev;
        } else {
            var usnBGPrev = `${settings.usnBackground[i].colors[0].color}${dec2hex(settings.usnBackground[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderUsnBGCont")[i].style.backgroundColor = usnBGPrev;
        }
    }
    decompileUsnBG();
}

var activeUsnBGGrad = 0;
var activeUsnBGColor = 0;

function openColorUsnBGBox(grdNum, clrNum) {
    if (grdNum !== activeUsnBGGrad && activeUsnBGGrad !== undefined && activeUsnBGGrad < settings.usnBackground.length) {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "false");
    }
    activeUsnBGGrad = grdNum;
    activeUsnBGColor = clrNum;
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeInput").value = settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].color;
    if (settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].type === "custom") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].type === "twitch") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeOpacity").value = settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].opacity;
}

function updateColorUsnBGBox(type) {
    if (type) {settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].color = document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeInput").value;
    settings.usnBackground[activeUsnBGGrad].colors[activeUsnBGColor].opacity = parseInt(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderUsnBGBox();

    decompileUsnBG();
}

function deleteColorUsnBGBox() {
    settings.usnBackground[activeUsnBGGrad].colors.splice(activeUsnBGColor, 1);
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG")[activeUsnBGColor].remove();
    updateColorSliderUsnBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG").length; i++) {
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].querySelectorAll(".colorSliderUsnBG")[i].setAttribute("onpointerdown", `openColorUsnBGBox(${activeUsnBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[activeUsnBGGrad].setAttribute("data-color-show", "false");
    activeUsnBGGrad = undefined;
    activeUsnBGColor = undefined;

    for (let j = 0; j < settings.usnBackground.length; j++) {
        for (let k = 0; k < settings.usnBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorUsnBGBox(${j}, ${k})`)
        }
    }

    decompileUsnBG();
}

function addColorSliderUsnBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderUsnBG";newSlider.setAttribute("oninput", "updateColorSliderUsnBGBox()");newSlider.setAttribute("onpointerdown", `openColorUsnBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderUsnBGCont")[i].appendChild(newSlider);

    settings.usnBackground[i].colors.push({
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
        settings.usnBackground.push({
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
        settings.usnBackground.push({
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
        settings.usnBackground.push({
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
    settings.usnBackground.splice(i, 1);
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
    settings.usnBackground[i].size = size;
    for (let j = 0; j < settings.usnBackground.length; j++) {
        if (settings.usnBackground[j].type === "radial") {
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
    settings.usnBackground[i].rotate = parseInt(e.target.value);

    decompileUsnBG();
}

function updateRadialPosUsnBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.usnBackground[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.usnBackground[i].yPos = parseInt(e.target.value);
    }

    decompileUsnBG();
}

function moveColorSliderUsnBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.usnBackground[i];
        settings.usnBackground.splice(i, 1);
        settings.usnBackground.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i]);
        if (activeUsnBGGrad === i) {
            activeUsnBGGrad -= 1;
        } else if (activeUsnBGGrad === i - 1) {
            activeUsnBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.usnBackground.length - 1) {
        var elmnt = settings.usnBackground[i];
        settings.usnBackground.splice(i, 1);
        settings.usnBackground.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[i]);
        if (activeUsnBGGrad === i) {
            activeUsnBGGrad += 1;
        } else if (activeUsnBGGrad === i + 1) {
            activeUsnBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.usnBackground.length; j++) {
        for (let k = 0; k < settings.usnBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColUsnBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorUsnBGBox(${j}, ${k})`)
        }
    }

    decompileUsnBG();
}

// settings.usnBorder

function decompileUsnBorder() {
    document.querySelectorAll(".usn").forEach(usn => {
        if (settings.usnBorder.top.color.type === "custom") {
            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder.top.type} ${settings.usnBorder.top.width}px ${settings.usnBorder.top.color.color}${dec2hex(settings.usnBorder.top.color.opacity)}`);
        } else if (settings.usnBorder.top.color.type === "twitch") {
            usn.style.setProperty("--usnBorderTop", `${settings.usnBorder.top.type} ${settings.usnBorder.top.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.top.color.opacity)}`);
        }

        if (settings.usnBorder.right.color.type === "custom") {
            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder.right.type} ${settings.usnBorder.right.width}px ${settings.usnBorder.right.color.color}${dec2hex(settings.usnBorder.right.color.opacity)}`);
        } else if (settings.usnBorder.right.color.type === "twitch") {
            usn.style.setProperty("--usnBorderRight", `${settings.usnBorder.right.type} ${settings.usnBorder.right.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.right.color.opacity)}`);
        }

        if (settings.usnBorder.bottom.color.type === "custom") {
            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder.bottom.type} ${settings.usnBorder.bottom.width}px ${settings.usnBorder.bottom.color.color}${dec2hex(settings.usnBorder.bottom.color.opacity)}`);
        } else if (settings.usnBorder.bottom.color.type === "twitch") {
            usn.style.setProperty("--usnBorderBottom", `${settings.usnBorder.bottom.type} ${settings.usnBorder.bottom.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.bottom.color.opacity)}`);
        }

        if (settings.usnBorder.left.color.type === "custom") {
            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder.left.type} ${settings.usnBorder.left.width}px ${settings.usnBorder.left.color.color}${dec2hex(settings.usnBorder.left.color.opacity)}`);
        } else if (settings.usnBorder.left.color.type === "twitch") {
            usn.style.setProperty("--usnBorderLeft", `${settings.usnBorder.left.type} ${settings.usnBorder.left.width}px ${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnBorder.left.color.opacity)}`);
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

        if (settings.usnBorder[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.usnBorder[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.usnBorder[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.usnBorder[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.usnBorder[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.usnBorder[`${pos}`].color.opacity;
        
    } else if (activeUsnBorder === "tl" || activeUsnBorder === "tr" || activeUsnBorder === "bl" || activeUsnBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.usnBorderRadius[`${activeUsnBorder}`];
    }
}

function updateBorderUsn(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.usnBorder[`${activeUsnBorder}`].type = value;
    } else if (type === "width") {
        settings.usnBorder[`${activeUsnBorder}`].width = parseInt(document.querySelector("#usnBorderWidth").value);
    } else if (type === "color") {
        settings.usnBorder[`${activeUsnBorder}`].color.color = document.querySelector("#usnBorderColor").value;
    } else if (type === "colorType") {
        settings.usnBorder[`${activeUsnBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.usnBorder[`${activeUsnBorder}`].color.opacity = parseInt(document.querySelector("#usnBorderOpacity").value);
    } else if (type === "all") {
        settings.usnBorder["top"].type = "" + settings.usnBorder[`${activeUsnBorder}`].type;
        settings.usnBorder["bottom"].type = "" + settings.usnBorder[`${activeUsnBorder}`].type;
        settings.usnBorder["left"].type = "" + settings.usnBorder[`${activeUsnBorder}`].type;
        settings.usnBorder["right"].type = "" + settings.usnBorder[`${activeUsnBorder}`].type;

        settings.usnBorder["top"].width = 0 + settings.usnBorder[`${activeUsnBorder}`].width;
        settings.usnBorder["bottom"].width = 0 + settings.usnBorder[`${activeUsnBorder}`].width;
        settings.usnBorder["left"].width = 0 + settings.usnBorder[`${activeUsnBorder}`].width;
        settings.usnBorder["right"].width = 0 + settings.usnBorder[`${activeUsnBorder}`].width;
        
        settings.usnBorder["top"].color.color = "" + settings.usnBorder[`${activeUsnBorder}`].color.color;
        settings.usnBorder["bottom"].color.color = "" + settings.usnBorder[`${activeUsnBorder}`].color.color;
        settings.usnBorder["left"].color.color = "" + settings.usnBorder[`${activeUsnBorder}`].color.color;
        settings.usnBorder["right"].color.color = "" + settings.usnBorder[`${activeUsnBorder}`].color.color;

        settings.usnBorder["top"].color.type = "" + settings.usnBorder[`${activeUsnBorder}`].color.type;
        settings.usnBorder["bottom"].color.type = "" + settings.usnBorder[`${activeUsnBorder}`].color.type;
        settings.usnBorder["left"].color.type = "" + settings.usnBorder[`${activeUsnBorder}`].color.type;
        settings.usnBorder["right"].color.type = "" + settings.usnBorder[`${activeUsnBorder}`].color.type;

        settings.usnBorder["top"].color.opacity = 0 + settings.usnBorder[`${activeUsnBorder}`].color.opacity
        settings.usnBorder["bottom"].color.opacity = 0 + settings.usnBorder[`${activeUsnBorder}`].color.opacity
        settings.usnBorder["left"].color.opacity = 0 + settings.usnBorder[`${activeUsnBorder}`].color.opacity
        settings.usnBorder["right"].color.opacity = 0 + settings.usnBorder[`${activeUsnBorder}`].color.opacity
    }

    decompileUsnBorder();
}

// settings.usnBorderRadius

function decompileUsnBorderRadius() {
    document.querySelectorAll(".usn").forEach(usn => {
        usn.style.setProperty("--usnBRtl", `${settings.usnBorderRadius.tl}px`);
        usn.style.setProperty("--usnBRtr", `${settings.usnBorderRadius.tr}px`);
        usn.style.setProperty("--usnBRbr", `${settings.usnBorderRadius.br}px`);
        usn.style.setProperty("--usnBRbl", `${settings.usnBorderRadius.bl}px`);
    })
}

function updateCornerUsn(type) {
    if (type === "corner") {
        settings.usnBorderRadius[`${activeUsnBorder}`] = parseInt(document.querySelector("#usnCornerRadius").value);
    } else if (type === "all") {
        settings.usnBorderRadius["tl"] = 0 + settings.usnBorderRadius[`${activeUsnBorder}`];
        settings.usnBorderRadius["tr"] = 0 + settings.usnBorderRadius[`${activeUsnBorder}`];
        settings.usnBorderRadius["bl"] = 0 + settings.usnBorderRadius[`${activeUsnBorder}`];
        settings.usnBorderRadius["br"] = 0 + settings.usnBorderRadius[`${activeUsnBorder}`];
    }

    decompileUsnBorderRadius();
}

// settings.usnShadow

function decompileUsnShadow() {
    document.querySelectorAll(".usn").forEach(usn => {
        var usnShadow = "";

        for (let i = 0; i < settings.usnShadow.length; i++) {
            usnShadow += `${settings.usnShadow[i].xPos}px ${settings.usnShadow[i].yPos}px ${settings.usnShadow[i].blur}px ${settings.usnShadow[i].expand}px `;
            if (settings.usnShadow[i].color.type === "custom") {
                usnShadow += `${settings.usnShadow[i].color.color}${dec2hex(settings.usnShadow[i].color.opacity)}`;
            } else if (settings.usnShadow[i].color.type === "twitch") {
                usnShadow += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnShadow[i].color.opacity)}`;
            }
            if (settings.usnShadow[i].inset === true) {
                usnShadow += " inset";
            }
            if (i < settings.usnShadow.length - 1) {
                usnShadow += ", ";
            }
        }

        usn.style.setProperty("--usnBS", usnShadow);
    });
}

var activeUsnShadow = -1;

function openShadowUsn(triggerAdd) {
    for (let i = 0; i < settings.usnShadow.length; i++) {
        document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeUsnShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeUsnShadow >= 0) {
        document.querySelector(".shadowSettingsUsn").setAttribute("data-active", "true");
        document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[activeUsnShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[0].value = settings.usnShadow[activeUsnShadow].xPos;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[1].value = settings.usnShadow[activeUsnShadow].yPos;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[2].value = settings.usnShadow[activeUsnShadow].blur;
        document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[3].value = settings.usnShadow[activeUsnShadow].expand;
        document.querySelector(".shadowSettingsUsn").querySelector(".usnShadowInset").setAttribute("data-active", settings.usnShadow[activeUsnShadow].inset);
        
        if (settings.usnShadow[activeUsnShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.usnShadow[activeUsnShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#usnShadowOpacity").value = settings.usnShadow[activeUsnShadow].color.opacity;
        
        document.querySelector("#usnShadowColor").value = settings.usnShadow[activeUsnShadow].color.color;
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

    settings.usnShadow.push({
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

    activeUsnShadow = settings.usnShadow.length - 1;
    openShadowUsn(true);
    
    decompileUsnShadow();
}

function updateShadowUsn(type, value) {
    settings.usnShadow[activeUsnShadow].xPos    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[0].value);
    settings.usnShadow[activeUsnShadow].yPos    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[1].value);
    settings.usnShadow[activeUsnShadow].blur    = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[2].value);
    settings.usnShadow[activeUsnShadow].expand  = parseInt(document.querySelector(".shadowSettingsUsn").querySelectorAll(".numContInput")[3].value);
    
    settings.usnShadow[activeUsnShadow].color.opacity = parseInt(document.querySelector("#usnShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsUsn").querySelector(".usnShadowInset").getAttribute("data-active") === "false") {
        settings.usnShadow[activeUsnShadow].inset = false;
    } else {
        settings.usnShadow[activeUsnShadow].inset = true;
    }

    if (type === "colorType") {
        settings.usnShadow[activeUsnShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.usnShadow[activeUsnShadow].color.color = document.querySelector("#usnShadowColor").value;
    }

    for (let i = 0; i < settings.usnShadow.length; i++) {
        var usnStyle = `${settings.usnShadow[i].xPos}px ${settings.usnShadow[i].yPos}px ${settings.usnShadow[i].blur}px ${settings.usnShadow[i].expand}px ${settings.usnShadow[i].color.color}${dec2hex(settings.usnShadow[i].color.opacity)}`;
        if (settings.usnShadow[i].inset === true) {
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
    settings.usnShadow.splice(i, 1);

    document.querySelector(".shadowColUsn").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowUsn(true);
    
    decompileUsnShadow();
}

// settings.usnSpacing

function decompileUsnSpacing() {
    document.querySelectorAll(".usn").forEach(usn => {
        usn.style.setProperty("--usnSpacingIT", `${settings.usnSpacing.inner.top}px`);
        usn.style.setProperty("--usnSpacingIR", `${settings.usnSpacing.inner.right}px`);
        usn.style.setProperty("--usnSpacingIB", `${settings.usnSpacing.inner.bottom}px`);
        usn.style.setProperty("--usnSpacingIL", `${settings.usnSpacing.inner.left}px`);

        usn.style.setProperty("--usnSpacingOT", `${settings.usnSpacing.outer.top}px`);
        usn.style.setProperty("--usnSpacingOR", `${settings.usnSpacing.outer.right}px`);
        usn.style.setProperty("--usnSpacingOB", `${settings.usnSpacing.outer.bottom}px`);
        usn.style.setProperty("--usnSpacingOL", `${settings.usnSpacing.outer.left}px`);
    })
}

function updateUsnSpacing(pos) {
    if (pos === "OT") {
        settings.usnSpacing.outer.top = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.usnSpacing.outer.left = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.usnSpacing.outer.right = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.usnSpacing.outer.bottom = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.usnSpacing.inner.top = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.usnSpacing.inner.left = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.usnSpacing.inner.right = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.usnSpacing.inner.bottom = parseInt(document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileUsnSpacing();
}

// settings.usnSizing
// settings.usnPosition

function decompileUsnSizing() {
    document.querySelectorAll(".usn").forEach(usn => {
        usn.style.setProperty("--usnSizing", settings.usnSizing);
    })
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
    
    settings.usnSizing = type;

    decompileUsnSizing();
}

// settings.usnFont

function decompileUsnFont() {
    document.querySelectorAll(".usn").forEach(usn => {
        usn.style.setProperty("--usnFontFamily", settings.usnFontFamily);

        if (settings.usnFontColor.type === "custom") {
            usn.style.setProperty("--usnFontColor", `${settings.usnFontColor.color}${dec2hex(settings.usnFontColor.opacity)}`);
        } else if (settings.usnFontColor.type === "twitch") {
            usn.style.setProperty("--usnFontColor", `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnFontColor.opacity)}`);
        }

        usn.style.setProperty("--usnFontSize", `${settings.usnFontSize}px`);

        usn.style.setProperty("--usnFontWeight", settings.usnFontWeight);

        if (settings.usnFontItalic === true) {
            usn.style.setProperty("--usnFontItalic", "italic");
        } else {
            usn.style.setProperty("--usnFontItalic", "normal");
        }

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

        if (settings.usnFontHeight.auto === true) {
            usn.style.setProperty("--usnFontHeight", "normal");
        } else if (settings.usnFontHeight.auto === false) {
            usn.style.setProperty("--usnFontHeight", `${settings.usnFontHeight.height}px`);
        }

        usn.style.setProperty("--usnFontSpacing", `${settings.usnFontSpacing}px`);

        usn.style.setProperty("--usnFontAlign", settings.usnFontAlign);
    });
}

function updateUsnFont(type, value) {
    settings.usnFontFamily = document.querySelector("#usnFontFamInp").value;
    settings.usnFontSize = document.querySelector("#usnFontSizeInp").value;
    settings.usnFontWeight = document.querySelector("#usnFontWeightInp").value;
    settings.usnFontHeight.height = document.querySelector("#usnFontHeightInp").value;
    settings.usnFontSpacing = document.querySelector("#usnFontSpaceInp").value;

    if (type === "style") {
        var styleRow = document.querySelector(".usnFontStyleRow");

        if (event.target.getAttribute("data-active") === "false") {
            event.target.setAttribute("data-active", "true");
        } else {
            event.target.setAttribute("data-active", "false");
        }

        if (styleRow.querySelectorAll("button")[0].getAttribute("data-active") === "true") {
            settings.usnFontLines.upperLine = true;
        } else {
            settings.usnFontLines.upperLine = false;
        }
        if (styleRow.querySelectorAll("button")[1].getAttribute("data-active") === "true") {
            settings.usnFontLines.crossLine = true;
        } else {
            settings.usnFontLines.crossLine = false;
        }
        if (styleRow.querySelectorAll("button")[2].getAttribute("data-active") === "true") {
            settings.usnFontLines.underLine = true;
        } else {
            settings.usnFontLines.underLine = false;
        }
        if (styleRow.querySelectorAll("button")[3].getAttribute("data-active") === "true") {
            settings.usnFontItalic = true;
        } else {
            settings.usnFontItalic = false;
        }
    } else if (type === "align") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.setAttribute("data-active", "true");

        settings.usnFontAlign = event.target.getAttribute("data-value");
    } else if (type === "autoheight") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.usnFontHeight.auto = false;
        } else {
            event.target.setAttribute("data-active", "true");
            settings.usnFontHeight.auto = true;
        }
    } else if (type === "colorType") {
        settings.usnFontColor.type = value;
        if (value === "custom") {
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.usnFontColor.color = document.querySelector("#usnFontColor").value;
    }
    
    settings.usnFontColor.opacity = parseInt(document.querySelector("#usnFontOpacity").value);

    decompileUsnFont();
}

// settings.usnFontShadow

function decompileUsnFontShadow() {
    document.querySelectorAll(".usn").forEach(usn => {
        var usnFontShadow = "";

        for (let i = 0; i < settings.usnFontShadow.length; i++) {
            usnFontShadow += `${settings.usnFontShadow[i].xPos}px ${settings.usnFontShadow[i].yPos}px ${settings.usnFontShadow[i].blur}px `;
            if (settings.usnFontShadow[i].color.type === "custom") {
                usnFontShadow += `${settings.usnFontShadow[i].color.color}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
            } else if (settings.usnFontShadow[i].color.type === "twitch") {
                usnFontShadow += `${usn.parentNode.getAttribute("data-twitch")}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
            }
            if (i < settings.usnFontShadow.length - 1) {
                usnFontShadow += ", ";
            }
        }

        usn.style.setProperty("--usnFontShadow", usnFontShadow);
    });
}

var activeUsnFontShadow = -1;

function openFontShadowUsn(triggerAdd) {
    for (let i = 0; i < settings.usnFontShadow.length; i++) {
        document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeUsnFontShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeUsnFontShadow >= 0) {
        document.querySelector(".fontShadowSettingsUsn").setAttribute("data-active", "true");
        document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[activeUsnFontShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[0].value = settings.usnFontShadow[activeUsnFontShadow].xPos;
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[1].value = settings.usnFontShadow[activeUsnFontShadow].yPos;
        document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[2].value = settings.usnFontShadow[activeUsnFontShadow].blur;
        
        if (settings.usnFontShadow[activeUsnFontShadow].color.type === "custom") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.usnFontShadow[activeUsnFontShadow].color.type === "twitch") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#usnFontShadowOpacity").value = settings.usnFontShadow[activeUsnFontShadow].color.opacity;
        
        document.querySelector("#usnFontShadowColor").value = settings.usnFontShadow[activeUsnFontShadow].color.color;
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

    settings.usnFontShadow.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        }
    });

    activeUsnFontShadow = settings.usnFontShadow.length - 1;
    openFontShadowUsn(true);
    
    decompileUsnFontShadow();
}

function updateFontShadowUsn(type, value) {
    settings.usnFontShadow[activeUsnFontShadow].xPos = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[0].value);
    settings.usnFontShadow[activeUsnFontShadow].yPos = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[1].value);
    settings.usnFontShadow[activeUsnFontShadow].blur = parseInt(document.querySelector(".fontShadowSettingsUsn").querySelectorAll(".numContInput")[2].value);
    
    settings.usnFontShadow[activeUsnFontShadow].color.opacity = parseInt(document.querySelector("#usnFontShadowOpacity").value);
    
    if (type === "colorType") {
        settings.usnFontShadow[activeUsnFontShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (value === "twitch") {
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsUsn").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }
    } else if (type === "color") {
        settings.usnFontShadow[activeUsnFontShadow].color.color = document.querySelector("#usnFontShadowColor").value;
    }

    for (let i = 0; i < settings.usnFontShadow.length; i++) {
        var usnStyle = `${settings.usnFontShadow[i].xPos}px ${settings.usnFontShadow[i].yPos}px ${settings.usnFontShadow[i].blur}px ${settings.usnFontShadow[i].color.color}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
        

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
    settings.usnFontShadow.splice(i, 1);

    document.querySelector(".fontShadowColUsn").querySelectorAll(".fontShadowElmnt")[i].remove();

    openFontShadowUsn(true);
    
    decompileUsnFontShadow();
}

// settings.usnContent

function decompileUsnContent() {
    document.querySelectorAll(".usn").forEach(usn => {

        var usnContentFinal = "" + settings.usnContent,

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

function updateUsnContent() {
    settings.usnContent = document.querySelector(".usnContentInp").value;

    decompileUsnContent();
}

// settings.msgBackground

function decompileMsgBG() {
    document.querySelectorAll(".msg").forEach(msg => {
        msgBackground = "";
        for (let i = 0; i < settings.msgBackground.length; i++) {
            if (settings.msgBackground[i].type === "solid") {
                if (settings.msgBackground[i].colors[0].type === "custom") {
                    msgBackground += `linear-gradient(${settings.msgBackground[i].colors[0].color}${dec2hex(settings.msgBackground[i].colors[0].opacity)}, ${settings.msgBackground[i].colors[0].color}${dec2hex(settings.msgBackground[i].colors[0].opacity)})`;
                } else if (settings.msgBackground[i].colors[0].type === "twitch") {
                    msgBackground += `linear-gradient(${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[i].colors[0].opacity)}, ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBackground[i].colors[0].opacity)})`;
                }
            } else if (settings.msgBackground[i].type === "linear") {
                var sortedColors = [...settings.msgBackground[i].colors].sort((a, b) => {return a.count - b.count});
                msgBackground += `linear-gradient(${settings.msgBackground[i].rotate}deg, `;
                for (let j = 0; j < sortedColors.length; j++) {
                    if (sortedColors[j].type === "custom") {
                        msgBackground += `${sortedColors[j].color}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`;
                    } else if (sortedColors[j].type === "twitch") {
                        msgBackground += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
                        msgBackground += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(sortedColors[j].opacity)} ${sortedColors[j].position}%`
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
    });
}

function updateColorSliderMsgBGBox() {
    for (let i = 0; i < document.querySelectorAll(".colorSliderMsgBGCont").length; i++) {
        if (settings.msgBackground[i].type !== "solid") {
            
            var msgBGPrev = "linear-gradient(90deg, ",
                nodeList = document.querySelectorAll(".colorSliderMsgBGCont")[i].querySelectorAll(".colorSliderMsgBG"),
                colorList = settings.msgBackground[i].colors;

            for (let j = 0; j < settings.msgBackground[i].colors.length; j++) {
                settings.msgBackground[i].colors[j].count = 0;
                colorList[j].position = parseFloat(nodeList[j].value);
                nodeList[j].style.setProperty("--value", `${nodeList[j].value}%`);
                nodeList[j].style.setProperty("--valueTxt", `"${nodeList[j].value}"`);
            }

            for (let j = 0; j < settings.msgBackground[i].colors.length; j++) {
                for (let k = 0; k < settings.msgBackground[i].colors.length; k++) {
                    if (k !== j) {
                        if (settings.msgBackground[i].colors[j].position >= settings.msgBackground[i].colors[k].position) {
                            settings.msgBackground[i].colors[j].count += 1;
                        }
                    }
                }
            }

            for (let j = 0; j < settings.msgBackground[i].colors.length; j++) {
                var resultElmnt = settings.msgBackground[i].colors.find(findElmnt => findElmnt.count === j);
                msgBGPrev += `${resultElmnt.color}${dec2hex(resultElmnt.opacity)} ${resultElmnt.position}%`;
                
                if (j < settings.msgBackground[i].colors.length - 1) {
                    msgBGPrev += ", ";
                } else {
                    msgBGPrev += ")";
                }
            }

            document.querySelectorAll(".colorSliderMsgBGCont")[i].style.backgroundImage = msgBGPrev;
        } else {
            var msgBGPrev = `${settings.msgBackground[i].colors[0].color}${dec2hex(settings.msgBackground[i].colors[0].opacity)}`;
            document.querySelectorAll(".colorSliderMsgBGCont")[i].style.backgroundColor = msgBGPrev;
        }
    }
    
    decompileMsgBG();
}

var activeMsgBGGrad = 0;
var activeMsgBGColor = 0;

function openColorMsgBGBox(grdNum, clrNum) {
    if (grdNum !== activeMsgBGGrad && activeMsgBGGrad !== undefined && activeMsgBGGrad < settings.msgBackground.length) {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "false");
    }
    activeMsgBGGrad = grdNum;
    activeMsgBGColor = clrNum;
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "true");
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeInput").value = settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].color;
    if (settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].type === "custom") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
    } else if (settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].type === "twitch") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeOpacity").value = settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].opacity;
}

function updateColorMsgBGBox(type) {
    if (type) {settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].type = type;}
    
    if (type === "custom") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");

    } else if (type === "twitch") {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
    }
    settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].color = document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeInput").value;
    settings.msgBackground[activeMsgBGGrad].colors[activeMsgBGColor].opacity = parseInt(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelector(".colorChangeOpacity").value);
    updateColorSliderMsgBGBox();
    
    decompileMsgBG();
}

function deleteColorMsgBGBox() {
    settings.msgBackground[activeMsgBGGrad].colors.splice(activeMsgBGColor, 1);
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG")[activeMsgBGColor].remove();
    updateColorSliderMsgBGBox();
    for (let i = 0; i < document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG").length; i++) {
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].querySelectorAll(".colorSliderMsgBG")[i].setAttribute("onpointerdown", `openColorMsgBGBox(${activeMsgBGGrad}, ${i})`);
    }
    document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[activeMsgBGGrad].setAttribute("data-color-show", "false");
    activeMsgBGGrad = undefined;
    activeMsgBGColor = undefined;

    for (let j = 0; j < settings.msgBackground.length; j++) {
        for (let k = 0; k < settings.msgBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorMsgBGBox(${j}, ${k})`)
        }
    }
    
    decompileMsgBG();
}

function addColorSliderMsgBG(e) {
    i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    var newSlider = document.createElement("input");newSlider.className = "colorSlider colorSliderMsgBG";newSlider.setAttribute("oninput", "updateColorSliderMsgBGBox()");newSlider.setAttribute("onpointerdown", `openColorMsgBGBox(${i}, ${e.target.parentNode.querySelectorAll(".colorSlider").length})`);newSlider.type = "range";newSlider.value = (e.layerX / e.target.clientWidth) * 100;newSlider.min = "0";newSlider.max = "100";newSlider.step = "0.1";
                
    document.querySelectorAll(".colorSliderMsgBGCont")[i].appendChild(newSlider);

    settings.msgBackground[i].colors.push({
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
        settings.msgBackground.push({
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
        settings.msgBackground.push({
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
        settings.msgBackground.push({
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
    settings.msgBackground.splice(i, 1);
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
    settings.msgBackground[i].size = size;
    for (let j = 0; j < settings.msgBackground.length; j++) {
        if (settings.msgBackground[j].type === "radial") {
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
    settings.msgBackground[i].rotate = parseInt(e.target.value);
    
    decompileMsgBG();
}

function updateRadialPosMsgBG(e, xy) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode);
    if (xy === "x") {
        settings.msgBackground[i].xPos = parseInt(e.target.value);
    } else if (xy === "y") {
        settings.msgBackground[i].yPos = parseInt(e.target.value);
    }
    
    decompileMsgBG();
}

function moveColorSliderMsgBG(e, dir) {
    var i = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode);
    if (dir === "up" && i > 0) {
        var elmnt = settings.msgBackground[i];
        settings.msgBackground.splice(i, 1);
        settings.msgBackground.splice(i - 1, 0, elmnt);
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i - 1].before(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i]);
        if (activeMsgBGGrad === i) {
            activeMsgBGGrad -= 1;
        } else if (activeMsgBGGrad === i - 1) {
            activeMsgBGGrad += 1;
        }
    } else if (dir === "down" && i < settings.msgBackground.length - 1) {
        var elmnt = settings.msgBackground[i];
        settings.msgBackground.splice(i, 1);
        settings.msgBackground.splice(i + 1, 0, elmnt);
        document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i + 1].after(document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[i]);
        if (activeMsgBGGrad === i) {
            activeMsgBGGrad += 1;
        } else if (activeMsgBGGrad === i + 1) {
            activeMsgBGGrad -= 1;
        }
    }

    for (let j = 0; j < settings.msgBackground.length; j++) {
        for (let k = 0; k < settings.msgBackground[j].colors.length; k++) {
            document.querySelector(".colorMenuColMsgBG").querySelectorAll(".colorMenu")[j].querySelectorAll(".colorSlider")[k].setAttribute("onpointerdown", `openColorMsgBGBox(${j}, ${k})`)
        }
    }
    
    decompileMsgBG();
}

// settings.msgBorder

function decompileMsgBorder() {
    document.querySelectorAll(".msg").forEach(msg => {
        if (settings.msgBorder.top.color.type === "custom") {
            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder.top.type} ${settings.msgBorder.top.width}px ${settings.msgBorder.top.color.color}${dec2hex(settings.msgBorder.top.color.opacity)}`);
        } else if (settings.msgBorder.top.color.type === "twitch") {
            msg.style.setProperty("--msgBorderTop", `${settings.msgBorder.top.type} ${settings.msgBorder.top.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.top.color.opacity)}`);
        }

        if (settings.msgBorder.right.color.type === "custom") {
            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder.right.type} ${settings.msgBorder.right.width}px ${settings.msgBorder.right.color.color}${dec2hex(settings.msgBorder.right.color.opacity)}`);
        } else if (settings.msgBorder.right.color.type === "twitch") {
            msg.style.setProperty("--msgBorderRight", `${settings.msgBorder.right.type} ${settings.msgBorder.right.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.right.color.opacity)}`);
        }

        if (settings.msgBorder.bottom.color.type === "custom") {
            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder.bottom.type} ${settings.msgBorder.bottom.width}px ${settings.msgBorder.bottom.color.color}${dec2hex(settings.msgBorder.bottom.color.opacity)}`);
        } else if (settings.msgBorder.bottom.color.type === "twitch") {
            msg.style.setProperty("--msgBorderBottom", `${settings.msgBorder.bottom.type} ${settings.msgBorder.bottom.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.bottom.color.opacity)}`);
        }

        if (settings.msgBorder.left.color.type === "custom") {
            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder.left.type} ${settings.msgBorder.left.width}px ${settings.msgBorder.left.color.color}${dec2hex(settings.msgBorder.left.color.opacity)}`);
        } else if (settings.msgBorder.left.color.type === "twitch") {
            msg.style.setProperty("--msgBorderLeft", `${settings.msgBorder.left.type} ${settings.msgBorder.left.width}px ${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgBorder.left.color.opacity)}`);
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

        if (settings.msgBorder[`${pos}`].color.type === "custom") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (settings.msgBorder[`${pos}`].color.type === "twitch") {
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            borderMenu.querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }

        borderMenu.querySelector(`.borderTypeBtn[data-type="${settings.msgBorder[`${pos}`].type}"]`).setAttribute("data-active", "true");
        borderMenu.querySelector(".borderWidthCont").querySelector(".inputNumBig").value = settings.msgBorder[`${pos}`].width;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeInput").value = settings.msgBorder[`${pos}`].color.color;
        borderMenu.querySelector(".borderColorMenu").querySelector(".colorChangeOpacity").value = settings.msgBorder[`${pos}`].color.opacity;
        
    } else if (activeMsgBorder === "tl" || activeMsgBorder === "tr" || activeMsgBorder === "bl" || activeMsgBorder === "br") {
        cornerMenu.setAttribute("data-active", "true");
        borderMenu.setAttribute("data-active", "false");

        cornerMenu.querySelector(".inputNumBig").value = settings.msgBorderRadius[`${activeMsgBorder}`];
    }
}

function updateBorderMsg(type, value) {
    if (type === "type") {
        Array.from(event.target.parentNode.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.parentNode.setAttribute("data-active", "true");
        settings.msgBorder[`${activeMsgBorder}`].type = value;
    } else if (type === "width") {
        settings.msgBorder[`${activeMsgBorder}`].width = parseInt(document.querySelector("#msgBorderWidth").value);
    } else if (type === "color") {
        settings.msgBorder[`${activeMsgBorder}`].color.color = document.querySelector("#msgBorderColor").value;
    } else if (type === "colorType") {
        settings.msgBorder[`${activeMsgBorder}`].color.type = value;
        if (value === "custom") {
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".borderEdgeMenuMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "opacity") {
        settings.msgBorder[`${activeMsgBorder}`].color.opacity = parseInt(document.querySelector("#msgBorderOpacity").value);
    } else if (type === "all") {
        settings.msgBorder["top"].type = "" + settings.msgBorder[`${activeMsgBorder}`].type;
        settings.msgBorder["bottom"].type = "" + settings.msgBorder[`${activeMsgBorder}`].type;
        settings.msgBorder["left"].type = "" + settings.msgBorder[`${activeMsgBorder}`].type;
        settings.msgBorder["right"].type = "" + settings.msgBorder[`${activeMsgBorder}`].type;

        settings.msgBorder["top"].width = 0 + settings.msgBorder[`${activeMsgBorder}`].width;
        settings.msgBorder["bottom"].width = 0 + settings.msgBorder[`${activeMsgBorder}`].width;
        settings.msgBorder["left"].width = 0 + settings.msgBorder[`${activeMsgBorder}`].width;
        settings.msgBorder["right"].width = 0 + settings.msgBorder[`${activeMsgBorder}`].width;
        
        settings.msgBorder["top"].color.color = "" + settings.msgBorder[`${activeMsgBorder}`].color.color;
        settings.msgBorder["bottom"].color.color = "" + settings.msgBorder[`${activeMsgBorder}`].color.color;
        settings.msgBorder["left"].color.color = "" + settings.msgBorder[`${activeMsgBorder}`].color.color;
        settings.msgBorder["right"].color.color = "" + settings.msgBorder[`${activeMsgBorder}`].color.color;

        settings.msgBorder["top"].color.type = "" + settings.msgBorder[`${activeMsgBorder}`].color.type;
        settings.msgBorder["bottom"].color.type = "" + settings.msgBorder[`${activeMsgBorder}`].color.type;
        settings.msgBorder["left"].color.type = "" + settings.msgBorder[`${activeMsgBorder}`].color.type;
        settings.msgBorder["right"].color.type = "" + settings.msgBorder[`${activeMsgBorder}`].color.type;

        settings.msgBorder["top"].color.opacity = 0 + settings.msgBorder[`${activeMsgBorder}`].color.opacity
        settings.msgBorder["bottom"].color.opacity = 0 + settings.msgBorder[`${activeMsgBorder}`].color.opacity
        settings.msgBorder["left"].color.opacity = 0 + settings.msgBorder[`${activeMsgBorder}`].color.opacity
        settings.msgBorder["right"].color.opacity = 0 + settings.msgBorder[`${activeMsgBorder}`].color.opacity
    }

    decompileMsgBorder();
}

// settings.msgBorderRadius

function decompileMsgBorderRadius() {
    document.querySelectorAll(".msg").forEach(msg => {
        msg.style.setProperty("--msgBRtl", `${settings.msgBorderRadius.tl}px`);
        msg.style.setProperty("--msgBRtr", `${settings.msgBorderRadius.tr}px`);
        msg.style.setProperty("--msgBRbr", `${settings.msgBorderRadius.br}px`);
        msg.style.setProperty("--msgBRbl", `${settings.msgBorderRadius.bl}px`);
    })
}

function updateCornerMsg(type) {
    if (type === "corner") {
        settings.msgBorderRadius[`${activeMsgBorder}`] = parseInt(document.querySelector("#msgCornerRadius").value);
    } else if (type === "all") {
        settings.msgBorderRadius["tl"] = 0 + settings.msgBorderRadius[`${activeMsgBorder}`];
        settings.msgBorderRadius["tr"] = 0 + settings.msgBorderRadius[`${activeMsgBorder}`];
        settings.msgBorderRadius["bl"] = 0 + settings.msgBorderRadius[`${activeMsgBorder}`];
        settings.msgBorderRadius["br"] = 0 + settings.msgBorderRadius[`${activeMsgBorder}`];
    }

    decompileMsgBorderRadius();
}

// settings.msgShadow

function decompileMsgShadow() {
    document.querySelectorAll(".msg").forEach(msg => {
        var msgShadow = "";

        for (let i = 0; i < settings.msgShadow.length; i++) {
            msgShadow += `${settings.msgShadow[i].xPos}px ${settings.msgShadow[i].yPos}px ${settings.msgShadow[i].blur}px ${settings.msgShadow[i].expand}px `;
            if (settings.msgShadow[i].color.type === "custom") {
                msgShadow += `${settings.msgShadow[i].color.color}${dec2hex(settings.msgShadow[i].color.opacity)}`;
            } else if (settings.msgShadow[i].color.type === "twitch") {
                msgShadow += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgShadow[i].color.opacity)}`;
            }
            if (settings.msgShadow[i].inset === true) {
                msgShadow += " inset";
            }
            if (i < settings.msgShadow.length - 1) {
                msgShadow += ", ";
            }
        }

        msg.style.setProperty("--msgBS", msgShadow);
    });
}

var activeMsgShadow = -1;

function openShadowMsg(triggerAdd) {
    for (let i = 0; i < settings.msgShadow.length; i++) {
        document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeMsgShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeMsgShadow >= 0) {
        document.querySelector(".shadowSettingsMsg").setAttribute("data-active", "true");
        document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[activeMsgShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[0].value = settings.msgShadow[activeMsgShadow].xPos;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[1].value = settings.msgShadow[activeMsgShadow].yPos;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[2].value = settings.msgShadow[activeMsgShadow].blur;
        document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[3].value = settings.msgShadow[activeMsgShadow].expand;
        document.querySelector(".shadowSettingsMsg").querySelector(".msgShadowInset").setAttribute("data-active", settings.msgShadow[activeMsgShadow].inset);
        
        if (settings.msgShadow[activeMsgShadow].color.type === "custom") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.msgShadow[activeMsgShadow].color.type === "twitch") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#msgShadowOpacity").value = settings.msgShadow[activeMsgShadow].color.opacity;
        
        document.querySelector("#msgShadowColor").value = settings.msgShadow[activeMsgShadow].color.color;
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

    settings.msgShadow.push({
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

    activeMsgShadow = settings.msgShadow.length - 1;
    openShadowMsg(true);
    
    decompileMsgShadow();
}

function updateShadowMsg(type, value) {
    settings.msgShadow[activeMsgShadow].xPos    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[0].value);
    settings.msgShadow[activeMsgShadow].yPos    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[1].value);
    settings.msgShadow[activeMsgShadow].blur    = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[2].value);
    settings.msgShadow[activeMsgShadow].expand  = parseInt(document.querySelector(".shadowSettingsMsg").querySelectorAll(".numContInput")[3].value);
    
    settings.msgShadow[activeMsgShadow].color.opacity = parseInt(document.querySelector("#msgShadowOpacity").value);
    
    if (document.querySelector(".shadowSettingsMsg").querySelector(".msgShadowInset").getAttribute("data-active") === "false") {
        settings.msgShadow[activeMsgShadow].inset = false;
    } else {
        settings.msgShadow[activeMsgShadow].inset = true;
    }

    if (type === "colorType") {
        settings.msgShadow[activeMsgShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".shadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.msgShadow[activeMsgShadow].color.color = document.querySelector("#msgShadowColor").value;
    }

    for (let i = 0; i < settings.msgShadow.length; i++) {
        var msgStyle = `${settings.msgShadow[i].xPos}px ${settings.msgShadow[i].yPos}px ${settings.msgShadow[i].blur}px ${settings.msgShadow[i].expand}px ${settings.msgShadow[i].color.color}${dec2hex(settings.msgShadow[i].color.opacity)}`;
        if (settings.msgShadow[i].inset === true) {
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
    settings.msgShadow.splice(i, 1);

    document.querySelector(".shadowColMsg").querySelectorAll(".shadowElmnt")[i].remove();

    openShadowMsg(true);
    
    decompileMsgShadow();
}

// settings.msgSpacing

function decompileMsgSpacing() {
    document.querySelectorAll(".msg").forEach(msg => {
        msg.style.setProperty("--msgSpacingIT", `${settings.msgSpacing.inner.top}px`);
        msg.style.setProperty("--msgSpacingIR", `${settings.msgSpacing.inner.right}px`);
        msg.style.setProperty("--msgSpacingIB", `${settings.msgSpacing.inner.bottom}px`);
        msg.style.setProperty("--msgSpacingIL", `${settings.msgSpacing.inner.left}px`);

        msg.style.setProperty("--msgSpacingOT", `${settings.msgSpacing.outer.top}px`);
        msg.style.setProperty("--msgSpacingOR", `${settings.msgSpacing.outer.right}px`);
        msg.style.setProperty("--msgSpacingOB", `${settings.msgSpacing.outer.bottom}px`);
        msg.style.setProperty("--msgSpacingOL", `${settings.msgSpacing.outer.left}px`);
    })
}

function updateMsgSpacing(pos) {
    if (pos === "OT") {
        settings.msgSpacing.outer.top = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[0].value);
    } else if (pos === "OL") {
        settings.msgSpacing.outer.left = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[1].value);
    } else if (pos === "OR") {
        settings.msgSpacing.outer.right = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[2].value);
    } else if (pos === "OB") {
        settings.msgSpacing.outer.bottom = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridOuter")[3].value);
    } else if (pos === "IT") {
        settings.msgSpacing.inner.top = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[0].value);
    } else if (pos === "IL") {
        settings.msgSpacing.inner.left = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[1].value);
    } else if (pos === "IR") {
        settings.msgSpacing.inner.right = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[2].value);
    } else if (pos === "IB") {
        settings.msgSpacing.inner.bottom = parseInt(document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridInner")[3].value);
    }

    decompileMsgSpacing();
}

// settings.msgSizing
// settings.msgPosition

function decompileMsgSizing() {
    document.querySelectorAll(".msg").forEach(msg => {
        msg.style.setProperty("--msgSizing", settings.msgSizing);
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
    
    settings.msgSizing = type;

    decompileMsgSizing();
}

// settings.msgFont

function decompileMsgFont() {
    document.querySelectorAll(".msg").forEach(msg => {
        msg.style.setProperty("--msgFontFamily", settings.msgFontFamily);

        if (settings.msgFontColor.type === "custom") {
            msg.style.setProperty("--msgFontColor", `${settings.msgFontColor.color}${dec2hex(settings.msgFontColor.opacity)}`);
        } else if (settings.msgFontColor.type === "twitch") {
            msg.style.setProperty("--msgFontColor", `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgFontColor.opacity)}`);
        }

        msg.style.setProperty("--msgFontSize", `${settings.msgFontSize}px`);

        msg.style.setProperty("--msgFontWeight", settings.msgFontWeight);

        if (settings.msgFontItalic === true) {
            msg.style.setProperty("--msgFontItalic", "italic");
        } else {
            msg.style.setProperty("--msgFontItalic", "normal");
        }

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

        if (settings.msgFontHeight.auto === true) {
            msg.style.setProperty("--msgFontHeight", "normal");
        } else if (settings.msgFontHeight.auto === false) {
            msg.style.setProperty("--msgFontHeight", `${settings.msgFontHeight.height}px`);
        }

        msg.style.setProperty("--msgFontSpacing", `${settings.msgFontSpacing}px`);

        msg.style.setProperty("--msgFontAlign", settings.msgFontAlign);
    });
}

function updateMsgFont(type, value) {
    settings.msgFontFamily = document.querySelector("#msgFontFamInp").value;
    settings.msgFontSize = document.querySelector("#msgFontSizeInp").value;
    settings.msgFontWeight = document.querySelector("#msgFontWeightInp").value;
    settings.msgFontHeight.height = document.querySelector("#msgFontHeightInp").value;
    settings.msgFontSpacing = document.querySelector("#msgFontSpaceInp").value;

    if (type === "style") {
        var styleRow = document.querySelector(".msgFontStyleRow");

        if (event.target.getAttribute("data-active") === "false") {
            event.target.setAttribute("data-active", "true");
        } else {
            event.target.setAttribute("data-active", "false");
        }

        if (styleRow.querySelectorAll("button")[0].getAttribute("data-active") === "true") {
            settings.msgFontLines.upperLine = true;
        } else {
            settings.msgFontLines.upperLine = false;
        }
        if (styleRow.querySelectorAll("button")[1].getAttribute("data-active") === "true") {
            settings.msgFontLines.crossLine = true;
        } else {
            settings.msgFontLines.crossLine = false;
        }
        if (styleRow.querySelectorAll("button")[2].getAttribute("data-active") === "true") {
            settings.msgFontLines.underLine = true;
        } else {
            settings.msgFontLines.underLine = false;
        }
        if (styleRow.querySelectorAll("button")[3].getAttribute("data-active") === "true") {
            settings.msgFontItalic = true;
        } else {
            settings.msgFontItalic = false;
        }
    } else if (type === "align") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });
        event.target.setAttribute("data-active", "true");

        settings.msgFontAlign = event.target.getAttribute("data-value");
    } else if (type === "autoheight") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.msgFontHeight.auto = false
        } else {
            event.target.setAttribute("data-active", "true");
            settings.msgFontHeight.auto = true
        }
    } else if (type === "colorType") {
        settings.msgFontColor.type = value;
        if (value === "custom") {
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (value === "twitch") {
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
    } else if (type === "color") {
        settings.msgFontColor.color = document.querySelector("#msgFontColor").value;
    }
    
    settings.msgFontColor.opacity = parseInt(document.querySelector("#msgFontOpacity").value);

    decompileMsgFont();
}

// settings.msgFontShadow

function decompileMsgFontShadow() {
    document.querySelectorAll(".msg").forEach(msg => {
        var msgFontShadow = "";

        for (let i = 0; i < settings.msgFontShadow.length; i++) {
            msgFontShadow += `${settings.msgFontShadow[i].xPos}px ${settings.msgFontShadow[i].yPos}px ${settings.msgFontShadow[i].blur}px `;
            if (settings.msgFontShadow[i].color.type === "custom") {
                msgFontShadow += `${settings.msgFontShadow[i].color.color}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
            } else if (settings.msgFontShadow[i].color.type === "twitch") {
                msgFontShadow += `${msg.parentNode.getAttribute("data-twitch")}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
            }
            if (i < settings.msgFontShadow.length - 1) {
                msgFontShadow += ", ";
            }
        }

        msg.style.setProperty("--msgFontShadow", msgFontShadow);
    });
}

var activeMsgFontShadow = -1;

function openFontShadowMsg(triggerAdd) {
    for (let i = 0; i < settings.msgFontShadow.length; i++) {
        document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[i].setAttribute("data-active", "false");
    }
    
    if (!triggerAdd) {
        activeMsgFontShadow = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    }
    
    if (activeMsgFontShadow >= 0) {
        document.querySelector(".fontShadowSettingsMsg").setAttribute("data-active", "true");
        document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[activeMsgFontShadow].setAttribute("data-active", "true");
        
        
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[0].value = settings.msgFontShadow[activeMsgFontShadow].xPos;
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[1].value = settings.msgFontShadow[activeMsgFontShadow].yPos;
        document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[2].value = settings.msgFontShadow[activeMsgFontShadow].blur;
        
        if (settings.msgFontShadow[activeMsgFontShadow].color.type === "custom") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false")
        } else if (settings.msgFontShadow[activeMsgFontShadow].color.type === "twitch") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true")
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false")
        }
        
        document.querySelector("#msgFontShadowOpacity").value = settings.msgFontShadow[activeMsgFontShadow].color.opacity;
        
        document.querySelector("#msgFontShadowColor").value = settings.msgFontShadow[activeMsgFontShadow].color.color;
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

    settings.msgFontShadow.push({
        xPos: 0, // In px
        yPos: 0, // In px
        blur: 0, // In px
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255 // In Hex
        }
    });

    activeMsgFontShadow = settings.msgFontShadow.length - 1;
    openFontShadowMsg(true);
    
    decompileMsgFontShadow();
}

function updateFontShadowMsg(type, value) {
    settings.msgFontShadow[activeMsgFontShadow].xPos = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[0].value);
    settings.msgFontShadow[activeMsgFontShadow].yPos = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[1].value);
    settings.msgFontShadow[activeMsgFontShadow].blur = parseInt(document.querySelector(".fontShadowSettingsMsg").querySelectorAll(".numContInput")[2].value);
    
    settings.msgFontShadow[activeMsgFontShadow].color.opacity = parseInt(document.querySelector("#msgFontShadowOpacity").value);
    
    if (type === "colorType") {
        settings.msgFontShadow[activeMsgFontShadow].color.type = value;
        if (value === "custom") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "false");
        } else if (value === "twitch") {
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
            document.querySelector(".fontShadowSettingsMsg").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "false");
        }
    } else if (type === "color") {
        settings.msgFontShadow[activeMsgFontShadow].color.color = document.querySelector("#msgFontShadowColor").value;
    }

    for (let i = 0; i < settings.msgFontShadow.length; i++) {
        var msgStyle = `${settings.msgFontShadow[i].xPos}px ${settings.msgFontShadow[i].yPos}px ${settings.msgFontShadow[i].blur}px ${settings.msgFontShadow[i].color.color}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
        
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
    settings.msgFontShadow.splice(i, 1);

    document.querySelector(".fontShadowColMsg").querySelectorAll(".fontShadowElmnt")[i].remove();

    openFontShadowMsg(true);
    
    decompileMsgFontShadow();
}

// settings.msgContent

function decompileMsgContent() {
    document.querySelectorAll(".msg").forEach(msg => {

        var msgContentFinal = "" + settings.msgContent,

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

function updateMsgContent() {
    settings.msgContent = document.querySelector(".msgContentInp").value;

    decompileMsgContent();
}

// settings.msgEmotes

function decompileMsgEmotes() {
    document.querySelectorAll(".msg").forEach(msg => {
        if (settings.msgEmotes.auto === true) {
            msg.style.setProperty("--msgEmoteHeight", `${settings.msgFontSize}px`);
        } else if (settings.msgEmotes.auto === false) {
            msg.style.setProperty("--msgEmoteHeight", `${settings.msgEmotes.height}px`)
        }
        
        msg.style.setProperty("--msgEmoteVPos", settings.msgEmotes.linePos);
    });
}

function updateMsgEmotes(type) {
    if (type === "autosize") {
        if (event.target.getAttribute("data-active") === "true") {
            event.target.setAttribute("data-active", "false");
            settings.msgEmotes.auto = false;
        } else {
            event.target.setAttribute("data-active", "true");
            settings.msgEmotes.auto = true;
        }
    } else if (type === "vAlign") {
        Array.from(event.target.parentNode.children).forEach(elmnt => {
            elmnt.setAttribute("data-active", "false");
        });

        event.target.setAttribute("data-active", "true");
        settings.msgEmotes.linePos = event.target.getAttribute("data-value");
    }

    settings.msgEmotes.height = document.querySelector("#msgEmoteSizeInp").value;

    decompileMsgEmotes();
}

// settings.anmTiming

function updateAnmTiming(type) {
    if (type === "Del") {
        settings.anmTiming.delay = parseInt(document.querySelector("#anmTimingDelay").value);
    } else if (type === "App") {
        settings.anmTiming.appearing = parseInt(document.querySelector("#anmTimingAppearing").value);
    } else if (type === "Dur") {
        if (document.querySelector("#anmTimingDuration").value === "") {
            settings.anmTiming.duration = "infinite";
        } else {
            settings.anmTiming.duration = parseInt(document.querySelector("#anmTimingDuration").value);
        }
    } else if (type === "Van") {
        settings.anmTiming.vanishing = parseInt(document.querySelector("#anmTimingVanishing").value);
    }
}

// settings.anmShow

function openAnmShow(i) {
    document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "true");
    document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "true");
    settings.anmShow[i].active = true;
}

function updateAnmShow(i) {
    settings.anmShow[i].value = parseFloat(document.querySelectorAll(".anmShowRow")[i].querySelector("input").value);
}

function removeAnmShow(i) {
    document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "false");
    document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "false");
    settings.anmShow[i].active = false;
}

// settings.anmHide

function openAnmHide(i) {
    document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "true");
    document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "true");
    settings.anmHide[i].active = true;
}

function updateAnmHide(i) {
    settings.anmHide[i].value = parseFloat(document.querySelectorAll(".anmHideRow")[i].querySelector("input").value);
}

function removeAnmHide(i) {
    document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "false");
    document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "false");
    settings.anmHide[i].active = false;
}

// save settings

function saveSettings() {
    var presetSettingList = "";

    for (var i = 0; i < colorPreset.length; i++) {
        presetSettingList += `{
            color:${colorPreset[i].color},
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

    var cbxBackgroundRes = "";

    for (var i = 0; i < settings.cbxBackground.length; i++) {
        if (settings.cbxBackground[i].type === "solid") {
            cbxBackgroundRes += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.cbxBackground[i].colors[0].position},
                        type: '${settings.cbxBackground[i].colors[0].type}',
                        color: '${settings.cbxBackground[i].colors[0].color}',
                        opacity: ${settings.cbxBackground[i].colors[0].opacity},
                        count: ${settings.cbxBackground[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.cbxBackground[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground[i].colors[j].position},
                    type: '${settings.cbxBackground[i].colors[j].type}',
                    color: '${settings.cbxBackground[i].colors[j].color}',
                    opacity: ${settings.cbxBackground[i].colors[j].opacity},
                    count: ${settings.cbxBackground[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            cbxBackgroundRes += `{
                type: "linear",
                rotate: ${settings.cbxBackground[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.cbxBackground[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.cbxBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.cbxBackground[i].colors[j].position},
                    type: '${settings.cbxBackground[i].colors[j].type}',
                    color: '${settings.cbxBackground[i].colors[j].color}',
                    opacity: ${settings.cbxBackground[i].colors[j].opacity},
                    count: ${settings.cbxBackground[i].colors[j].count}
                }`;

                if (j < settings.cbxBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            cbxBackgroundRes += `{
                type: "radial",
                size: "${settings.cbxBackground[i].size}",
                xPos: ${settings.cbxBackground[i].xPos},
                yPos: ${settings.cbxBackground[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.cbxBackground.length - 1) {
            cbxBackgroundRes += `, `;
        }
    }

    var cbxShadowRes = "";

    for (var i = 0; i < settings.cbxShadow.length; i++) {
        cbxShadowRes += `{
        xPos: ${settings.cbxShadow[i].xPos},
        yPos: ${settings.cbxShadow[i].yPos},
        blur: ${settings.cbxShadow[i].blur},
        expand: ${settings.cbxShadow[i].expand},
        inset: ${settings.cbxShadow[i].inset},
        color: {
            type: "${settings.cbxShadow[i].color.type}",
            color: "${settings.cbxShadow[i].color.color}",
            opacity: ${settings.cbxShadow[i].color.opacity}
        }
        }`;

        if (i < settings.cbxShadow.length - 1) {
            cbxShadowRes += `, `;
        }
    }

    var usnBackgroundRes = "";

    for (var i = 0; i < settings.usnBackground.length; i++) {
        if (settings.usnBackground[i].type === "solid") {
            usnBackgroundRes += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.usnBackground[i].colors[0].position},
                        type: '${settings.usnBackground[i].colors[0].type}',
                        color: '${settings.usnBackground[i].colors[0].color}',
                        opacity: ${settings.usnBackground[i].colors[0].opacity},
                        count: ${settings.usnBackground[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.usnBackground[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground[i].colors[j].position},
                    type: '${settings.usnBackground[i].colors[j].type}',
                    color: '${settings.usnBackground[i].colors[j].color}',
                    opacity: ${settings.usnBackground[i].colors[j].opacity},
                    count: ${settings.usnBackground[i].colors[j].count}
                }`;

                if (j < settings.usnBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            usnBackgroundRes += `{
                type: "linear",
                rotate: ${settings.usnBackground[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.usnBackground[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.usnBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.usnBackground[i].colors[j].position},
                    type: '${settings.usnBackground[i].colors[j].type}',
                    color: '${settings.usnBackground[i].colors[j].color}',
                    opacity: ${settings.usnBackground[i].colors[j].opacity},
                    count: ${settings.usnBackground[i].colors[j].count}
                }`;

                if (j < settings.usnBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            usnBackgroundRes += `{
                type: "radial",
                size: "${settings.usnBackground[i].size}",
                xPos: ${settings.usnBackground[i].xPos},
                yPos: ${settings.usnBackground[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.usnBackground.length - 1) {
            usnBackgroundRes += `, `;
        }
    }

    var usnShadowRes = "";

    for (var i = 0; i < settings.usnShadow.length; i++) {
        usnShadowRes += `{
        xPos: ${settings.usnShadow[i].xPos},
        yPos: ${settings.usnShadow[i].yPos},
        blur: ${settings.usnShadow[i].blur},
        expand: ${settings.usnShadow[i].expand},
        inset: ${settings.usnShadow[i].inset},
        color: {
            type: "${settings.usnShadow[i].color.type}",
            color: "${settings.usnShadow[i].color.color}",
            opacity: ${settings.usnShadow[i].color.opacity}
        }
        }`;

        if (i < settings.usnShadow.length - 1) {
            usnShadowRes += `, `;
        }
    }

    var usnFontShadowRes = "";

    for (var i = 0; i < settings.usnFontShadow.length; i++) {
        usnFontShadowRes += `{
        xPos: ${settings.usnFontShadow[i].xPos},
        yPos: ${settings.usnFontShadow[i].yPos},
        blur: ${settings.usnFontShadow[i].blur},
        color: {
            type: "${settings.usnFontShadow[i].color.type}",
            color: "${settings.usnFontShadow[i].color.color}",
            opacity: ${settings.usnFontShadow[i].color.opacity}
        }
        }`;

        if (i < settings.usnFontShadow.length - 1) {
            usnFontShadowRes += `, `;
        }
    }

    var msgBackgroundRes = "";

    for (var i = 0; i < settings.msgBackground.length; i++) {
        if (settings.msgBackground[i].type === "solid") {
            msgBackgroundRes += `{
                type: "solid",
                colors: [
                    {
                        position: ${settings.msgBackground[i].colors[0].position},
                        type: '${settings.msgBackground[i].colors[0].type}',
                        color: '${settings.msgBackground[i].colors[0].color}',
                        opacity: ${settings.msgBackground[i].colors[0].opacity},
                        count: ${settings.msgBackground[i].colors[0].count}
                    }
                ]
            }`;
        } else if (settings.msgBackground[i].type === "linear") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground[i].colors[j].position},
                    type: '${settings.msgBackground[i].colors[j].type}',
                    color: '${settings.msgBackground[i].colors[j].color}',
                    opacity: ${settings.msgBackground[i].colors[j].opacity},
                    count: ${settings.msgBackground[i].colors[j].count}
                }`;

                if (j < settings.msgBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }


            msgBackgroundRes += `{
                type: "linear",
                rotate: ${settings.msgBackground[i].rotate},
                colors: [
                    ${colorList}
                ]
            }`;
        } else if (settings.msgBackground[i].type === "radial") {
            var colorList = "";
            
            for (var j = 0; j < settings.msgBackground[i].colors.length; j++) {
                colorList += `{
                    position: ${settings.msgBackground[i].colors[j].position},
                    type: '${settings.msgBackground[i].colors[j].type}',
                    color: '${settings.msgBackground[i].colors[j].color}',
                    opacity: ${settings.msgBackground[i].colors[j].opacity},
                    count: ${settings.msgBackground[i].colors[j].count}
                }`;

                if (j < settings.msgBackground[i].colors.length - 1) {
                    colorList += `, `;
                }
            }

            msgBackgroundRes += `{
                type: "radial",
                size: "${settings.msgBackground[i].size}",
                xPos: ${settings.msgBackground[i].xPos},
                yPos: ${settings.msgBackground[i].yPos},
                colors: [
                    ${colorList}
                ]
            }`;
        }

        if (i < settings.msgBackground.length - 1) {
            msgBackgroundRes += `, `;
        }
    }

    var msgShadowRes = "";

    for (var i = 0; i < settings.msgShadow.length; i++) {
        msgShadowRes += `{
        xPos: ${settings.msgShadow[i].xPos},
        yPos: ${settings.msgShadow[i].yPos},
        blur: ${settings.msgShadow[i].blur},
        expand: ${settings.msgShadow[i].expand},
        inset: ${settings.msgShadow[i].inset},
        color: {
            type: "${settings.msgShadow[i].color.type}",
            color: "${settings.msgShadow[i].color.color}",
            opacity: ${settings.msgShadow[i].color.opacity}
        }
        }`;

        if (i < settings.msgShadow.length - 1) {
            msgShadowRes += `, `;
        }
    }

    var msgFontShadowRes = "";

    for (var i = 0; i < settings.msgFontShadow.length; i++) {
        msgFontShadowRes += `{
        xPos: ${settings.msgFontShadow[i].xPos},
        yPos: ${settings.msgFontShadow[i].yPos},
        blur: ${settings.msgFontShadow[i].blur},
        color: {
            type: "${settings.msgFontShadow[i].color.type}",
            color: "${settings.msgFontShadow[i].color.color}",
            opacity: ${settings.msgFontShadow[i].color.opacity}
        }
        }`;

        if (i < settings.msgFontShadow.length - 1) {
            msgFontShadowRes += `, `;
        }
    }

    var finalDuration = settings.anmTiming.duration;

    if (settings.anmTiming.duration === "infinite") {
        finalDuration = `"infinite"`;
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
            cbxBackground: [${cbxBackgroundRes}],
            cbxBorder: {
                top: {
                    type: "${settings.cbxBorder.top.type}",
                    width: ${settings.cbxBorder.top.width}, // In px
                    color: {
                        type: "${settings.cbxBorder.top.color.type}",
                        color: "${settings.cbxBorder.top.color.color}",
                        opacity: ${settings.cbxBorder.top.color.opacity} // In Hex
                    }
                },
                bottom: {
                    type: "${settings.cbxBorder.bottom.type}",
                    width: ${settings.cbxBorder.bottom.width}, // In px
                    color: {
                        type: "${settings.cbxBorder.bottom.color.type}",
                        color: "${settings.cbxBorder.bottom.color.color}",
                        opacity: ${settings.cbxBorder.bottom.color.opacity} // In Hex
                    }
                },
                left: {
                    type: "${settings.cbxBorder.left.type}",
                    width: ${settings.cbxBorder.left.width}, // In px
                    color: {
                        type: "${settings.cbxBorder.left.color.type}",
                        color: "${settings.cbxBorder.left.color.color}",
                        opacity: ${settings.cbxBorder.left.color.opacity} // In Hex
                    }
                },
                right: {
                    type: "${settings.cbxBorder.right.type}",
                    width: ${settings.cbxBorder.right.width}, // In px
                    color: {
                        type: "${settings.cbxBorder.right.color.type}",
                        color: "${settings.cbxBorder.right.color.color}",
                        opacity: ${settings.cbxBorder.right.color.opacity} // In Hex
                    }
                }
            },
            cbxBorderRadius: {
                tl: ${settings.cbxBorderRadius.tl}, // In px
                tr: ${settings.cbxBorderRadius.tr}, // In px
                bl: ${settings.cbxBorderRadius.bl}, // In px
                br: ${settings.cbxBorderRadius.br}  // In px
            },
            cbxShadow: [
                ${cbxShadowRes}
            ],
            cbxSpacing: {
                inner: {
                    top: ${settings.cbxSpacing.inner.top}, // In px
                    bottom: ${settings.cbxSpacing.inner.bottom}, // In px
                    left: ${settings.cbxSpacing.inner.left}, // In px
                    right: ${settings.cbxSpacing.inner.right}, // In px
                },
                outer: {
                    top: ${settings.cbxSpacing.outer.top}, // In px
                    bottom: ${settings.cbxSpacing.outer.bottom}, // In px
                    left: ${settings.cbxSpacing.outer.left}, // In px
                    right: ${settings.cbxSpacing.outer.right}, // In px
                }
            },
            cbxSizing: "${settings.cbxSizing}",
            usnBackground: [${usnBackgroundRes}],
            usnBorder: {
                top: {
                    type: "${settings.usnBorder.top.type}",
                    width: ${settings.usnBorder.top.width}, // In px
                    color: {
                        type: "${settings.usnBorder.top.color.type}",
                        color: "${settings.usnBorder.top.color.color}",
                        opacity: ${settings.usnBorder.top.color.opacity} // In Hex
                    }
                },
                bottom: {
                    type: "${settings.usnBorder.bottom.type}",
                    width: ${settings.usnBorder.bottom.width}, // In px
                    color: {
                        type: "${settings.usnBorder.bottom.color.type}",
                        color: "${settings.usnBorder.bottom.color.color}",
                        opacity: ${settings.usnBorder.bottom.color.opacity} // In Hex
                    }
                },
                left: {
                    type: "${settings.usnBorder.left.type}",
                    width: ${settings.usnBorder.left.width}, // In px
                    color: {
                        type: "${settings.usnBorder.left.color.type}",
                        color: "${settings.usnBorder.left.color.color}",
                        opacity: ${settings.usnBorder.left.color.opacity} // In Hex
                    }
                },
                right: {
                    type: "${settings.usnBorder.right.type}",
                    width: ${settings.usnBorder.right.width}, // In px
                    color: {
                        type: "${settings.usnBorder.right.color.type}",
                        color: "${settings.usnBorder.right.color.color}",
                        opacity: ${settings.usnBorder.right.color.opacity} // In Hex
                    }
                }
            },
            usnBorderRadius: {
                tl: ${settings.usnBorderRadius.tl}, // In px
                tr: ${settings.usnBorderRadius.tr}, // In px
                bl: ${settings.usnBorderRadius.bl}, // In px
                br: ${settings.usnBorderRadius.br}  // In px
            },
            usnShadow: [
                ${usnShadowRes}
            ],
            usnSpacing: {
                inner: {
                    top: ${settings.usnSpacing.inner.top}, // In px
                    bottom: ${settings.usnSpacing.inner.bottom}, // In px
                    left: ${settings.usnSpacing.inner.left}, // In px
                    right: ${settings.usnSpacing.inner.right} // In px
                },
                outer: {
                    top: ${settings.usnSpacing.outer.top}, // In px
                    bottom: ${settings.usnSpacing.outer.bottom}, // In px
                    left: ${settings.usnSpacing.outer.left}, // In px
                    right: ${settings.usnSpacing.outer.right} // In px
                }
            },
            usnSizing: "${settings.usnSizing}",
            usnFontFamily: "${settings.usnFontFamily}",
            usnFontColor: {
                type: "${settings.usnFontColor.type}",
                color: "${settings.usnFontColor.color}",
                opacity: ${settings.usnFontColor.opacity} // In Hex
            },
            usnFontSize: ${settings.usnFontSize}, // In px
            usnFontWeight: ${settings.usnFontWeight}, // In 100 steps
            usnFontItalic: ${settings.usnFontItalic},
            usnFontLines: {
                upperLine: ${settings.usnFontLines.upperLine},
                crossLine: ${settings.usnFontLines.crossLine},
                underLine: ${settings.usnFontLines.underLine}
            },
            usnFontHeight: {
                auto: ${settings.usnFontHeight.auto},
                height: ${settings.usnFontHeight.height} // In px
            },
            usnFontShadow: [
                ${usnFontShadowRes}
            ],
            usnFontSpacing: ${settings.usnFontSpacing}, // In px
            usnFontAlign: "${settings.usnFontAlign}",
            usnContent: "${settings.usnContent}",
            msgBackground: [${msgBackgroundRes}],
            msgBorder: {
                top: {
                    type: "${settings.msgBorder.top.type}",
                    width: ${settings.msgBorder.top.width}, // In px
                    color: {
                        type: "${settings.msgBorder.top.color.type}",
                        color: "${settings.msgBorder.top.color.color}",
                        opacity: ${settings.msgBorder.top.color.opacity} // In Hex
                    }
                },
                bottom: {
                    type: "${settings.msgBorder.bottom.type}",
                    width: ${settings.msgBorder.bottom.width}, // In px
                    color: {
                        type: "${settings.msgBorder.bottom.color.type}",
                        color: "${settings.msgBorder.bottom.color.color}",
                        opacity: ${settings.msgBorder.bottom.color.opacity} // In Hex
                    }
                },
                left: {
                    type: "${settings.msgBorder.left.type}",
                    width: ${settings.msgBorder.left.width}, // In px
                    color: {
                        type: "${settings.msgBorder.left.color.type}",
                        color: "${settings.msgBorder.left.color.color}",
                        opacity: ${settings.msgBorder.left.color.opacity} // In Hex
                    }
                },
                right: {
                    type: "${settings.msgBorder.right.type}",
                    width: ${settings.msgBorder.right.width}, // In px
                    color: {
                        type: "${settings.msgBorder.right.color.type}",
                        color: "${settings.msgBorder.right.color.color}",
                        opacity: ${settings.msgBorder.right.color.opacity} // In Hex
                    }
                }
            },
            msgBorderRadius: {
                tl: ${settings.msgBorderRadius.tl}, // In px
                tr: ${settings.msgBorderRadius.tr}, // In px
                bl: ${settings.msgBorderRadius.bl}, // In px
                br: ${settings.msgBorderRadius.br}  // In px
            },
            msgShadow: [
                ${msgShadowRes}
            ],
            msgSpacing: {
                inner: {
                    top: ${settings.msgSpacing.inner.top}, // In px
                    bottom: ${settings.msgSpacing.inner.bottom}, // In px
                    left: ${settings.msgSpacing.inner.left}, // In px
                    right: ${settings.msgSpacing.inner.right} // In px
                },
                outer: {
                    top: ${settings.msgSpacing.outer.top}, // In px
                    bottom: ${settings.msgSpacing.outer.bottom}, // In px
                    left: ${settings.msgSpacing.outer.left}, // In px
                    right: ${settings.msgSpacing.outer.right} // In px
                }
            },
            msgSizing: "${settings.msgSizing}",
            msgFontFamily: "${settings.msgFontFamily}",
            msgFontColor: {
                type: "${settings.msgFontColor.type}",
                color: "${settings.msgFontColor.color}",
                opacity: ${settings.msgFontColor.opacity} // In Hex
            },
            msgFontSize: ${settings.msgFontSize}, // In px
            msgFontWeight: ${settings.msgFontWeight}, // In 100 steps
            msgFontCursiv: ${settings.msgFontCursiv},
            msgFontLines: {
                upperLine: ${settings.msgFontLines.upperLine},
                crossLine: ${settings.msgFontLines.crossLine},
                underLine: ${settings.msgFontLines.underLine}
            },
            msgFontHeight: {
                auto: ${settings.msgFontHeight.auto},
                height: ${settings.msgFontHeight.height} // In px
            },
            msgFontShadow: [
                ${msgFontShadowRes}
            ],
            msgFontSpacing: ${settings.msgFontSpacing}, // In px
            msgFontAlign: "${settings.msgFontAlign}",
            msgContent: "${settings.msgContent}",
            msgEmotes: {
                auto: ${settings.msgEmotes.auto},
                height: ${settings.msgEmotes.height}, // In px
                linePos: "${settings.msgEmotes.linePos}" // top/middle/bottom
            },
            anmTiming: {
                delay: ${settings.anmTiming.delay},
                appearing: ${settings.anmTiming.appearing},
                duration: ${finalDuration},
                vanishing: ${settings.anmTiming.vanishing}
            },
            anmShow: [{
                    type: "scale",
                    active: ${settings.anmShow[0].active},
                    value: ${settings.anmShow[0].value}
                }, {
                    type: "moveX",
                    active: ${settings.anmShow[1].active},
                    value: ${settings.anmShow[1].value}
                }, {
                    type: "moveY",
                    active: ${settings.anmShow[2].active},
                    value: ${settings.anmShow[2].value}
                }, {
                    type: "rotateX",
                    active: ${settings.anmShow[3].active},
                    value: ${settings.anmShow[3].value}
                }, {
                    type: "rotateY",
                    active: ${settings.anmShow[4].active},
                    value: ${settings.anmShow[4].value}
                }, {
                    type: "rotateZ",
                    active: ${settings.anmShow[5].active},
                    value: ${settings.anmShow[5].value}
                }, {
                    type: "opacity",
                    active: ${settings.anmShow[6].active},
                    value: ${settings.anmShow[6].value}
                }
            ],
            anmHide: [{
                    type: "scale",
                    active: ${settings.anmHide[0].active},
                    value: ${settings.anmHide[0].value}
                }, {
                    type: "moveX",
                    active: ${settings.anmHide[1].active},
                    value: ${settings.anmHide[1].value}
                }, {
                    type: "moveY",
                    active: ${settings.anmHide[2].active},
                    value: ${settings.anmHide[2].value}
                }, {
                    type: "rotateX",
                    active: ${settings.anmHide[3].active},
                    value: ${settings.anmHide[3].value}
                }, {
                    type: "rotateY",
                    active: ${settings.anmHide[4].active},
                    value: ${settings.anmHide[4].value}
                }, {
                    type: "rotateZ",
                    active: ${settings.anmHide[5].active},
                    value: ${settings.anmHide[5].value}
                }, {
                    type: "opacity",
                    active: ${settings.anmHide[6].active},
                    value: ${settings.anmHide[6].value}
                }
            ]
        };
    `;

    console.log(exportText);
    
    blob = new Blob([exportText], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "data.js");
}