var loadingRole = "user";

function loadingData() {

    // loading roleActives

    if (settings.cbxBackground[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[0].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[0].setAttribute("data-active", "false")}
    if (settings.cbxBorder[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[1].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[1].setAttribute("data-active", "false")}
    if (settings.cbxShadow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[2].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[2].setAttribute("data-active", "false")}
    if (settings.cbxPosition[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[3].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[3].setAttribute("data-active", "false")}
    if (settings.usnBackground[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[4].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[4].setAttribute("data-active", "false")}
    if (settings.usnBorder[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[5].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[5].setAttribute("data-active", "false")}
    if (settings.usnShadow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[6].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[6].setAttribute("data-active", "false")}
    if (settings.usnPosition[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[7].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[7].setAttribute("data-active", "false")}
    if (settings.usnFont[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[8].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[8].setAttribute("data-active", "false")}
    if (settings.usnFontShadow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[9].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[9].setAttribute("data-active", "false")}
    if (settings.usnContent[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[10].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[10].setAttribute("data-active", "false")}
    if (settings.msgBackground[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[11].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[11].setAttribute("data-active", "false")}
    if (settings.msgBorder[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[12].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[12].setAttribute("data-active", "false")}
    if (settings.msgShadow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[13].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[13].setAttribute("data-active", "false")}
    if (settings.msgPosition[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[14].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[14].setAttribute("data-active", "false")}
    if (settings.msgFont[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[15].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[15].setAttribute("data-active", "false")}
    if (settings.msgFontShadow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[16].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[16].setAttribute("data-active", "false")}
    if (settings.msgContent[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[17].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[17].setAttribute("data-active", "false")}
    if (settings.othEmotes[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[18].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[18].setAttribute("data-active", "false")}
    if (settings.othBadges[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[19].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[19].setAttribute("data-active", "false")}
    if (settings.anmTiming[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[20].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[20].setAttribute("data-active", "false")}
    if (settings.anmShow[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[21].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[21].setAttribute("data-active", "false")}
    if (settings.anmHide[`${loadingRole}`].active === true) {document.querySelectorAll(".roleActiveBtn")[22].setAttribute("data-active", "true")} else {document.querySelectorAll(".roleActiveBtn")[22].setAttribute("data-active", "false")}

    // loading Generel > Streamer-List

    document.querySelector("#genStreamerList").innerHTML = `<div class="inputTextListItem"><input type="text" class="inputTextListItemInput genStreamerListInput" oninput="updateStreamerList()" value=""><button class="inputTextListItemRemove" onclick="this.parentNode.remove(); removeStreamerList();"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button></div>`;
    
    document.querySelectorAll(".genStreamerListInput")[0].value = settings.genStreamerList[0];
    for (i = 1; i < settings.genStreamerList.length; i++) {
        var newListItem = document.createElement("div"),
            newListInput = document.createElement("input"),
            newListRemove = document.createElement("button");

        newListItem.className = "inputTextListItem";

        newListInput.type = "text";
        newListInput.className = "inputTextListItemInput genStreamerListInput";
        newListInput.setAttribute("oninput", "updateStreamerList()");
        newListInput.value = settings.genStreamerList[i];

        newListRemove.className = "inputTextListItemRemove";
        newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeStreamerList();");
        newListRemove.innerHTML = `<img class="iconSVG" src="Icons/Diverse/Remove.svg">`;

        newListItem.appendChild(newListInput);
        newListItem.appendChild(newListRemove);
        document.querySelector("#genStreamerList").appendChild(newListItem);
    }

    // loading General > Direction

    document.querySelectorAll(".genChatDirectionBtn")[0].setAttribute("data-active", "false");
    document.querySelectorAll(".genChatDirectionBtn")[1].setAttribute("data-active", "false");

    if (settings.genChatDirection === "up") {
        document.querySelectorAll(".genChatDirectionBtn")[0].setAttribute("data-active", "true");
    } else if (settings.genChatDirection === "down") {
        document.querySelectorAll(".genChatDirectionBtn")[1].setAttribute("data-active", "true");
    }

    // loading General > User filter

    document.querySelector("#genFilterUser").innerHTML = "";

    for (i = 0; i < settings.genFilterUser.length; i++) {
        var newListItem = document.createElement("div"),
        newListInput = document.createElement("input"),
        newListRemove = document.createElement("button");
        
        newListItem.className = "inputTextListItem";
        
        newListInput.type = "text";
        newListInput.className = "inputTextListItemInput genFilterUserInput";
        newListInput.setAttribute("oninput", "updateFilterUser()");
        newListInput.value = settings.genFilterUser[i];
        
        newListRemove.className = "inputTextListItemRemove";
        newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeFilterUser();");
        newListRemove.innerHTML = `<img class="iconSVG" src="Icons/Diverse/Remove.svg">`;
        
        newListItem.appendChild(newListInput);
        newListItem.appendChild(newListRemove);
        document.querySelector("#genFilterUser").appendChild(newListItem);
    }
    
    // loading General > Message filter

    document.querySelector("#genFilterMessage").innerHTML = "";
    
    for (i = 0; i < settings.genFilterMsg.length; i++) {
        var newListItem = document.createElement("div"),
            newListInput = document.createElement("input"),
            newListRemove = document.createElement("button");

        newListItem.className = "inputTextListItem";

        newListInput.type = "text";
        newListInput.className = "inputTextListItemInput genFilterMessageInput";
        newListInput.setAttribute("oninput", "updateFilterMessage()");
        newListInput.value = settings.genFilterMsg[i];

        newListRemove.className = "inputTextListItemRemove";
        newListRemove.setAttribute("onclick", "this.parentNode.remove(); removeFilterMessage();");
        newListRemove.innerHTML = `<img class="iconSVG" src="Icons/Diverse/Remove.svg">`;

        newListItem.appendChild(newListInput);
        newListItem.appendChild(newListRemove);
        document.querySelector("#genFilterMessage").appendChild(newListItem);
    }
    
    // loading General > Max. messages

    document.querySelector("#genMaxMsgInput").value = settings.genMaxMessages;
    
    // loading Chatbox > Layout
    
    if (settings.cbxLayout[`${loadingRole}`].value.type === "column") {
        document.querySelectorAll(".layoutBtn")[0].setAttribute("data-active", "true");
    } else if (settings.cbxLayout[`${loadingRole}`].value.type === "column-reverse") {
        document.querySelectorAll(".layoutBtn")[1].setAttribute("data-active", "true");
    } else if (settings.cbxLayout[`${loadingRole}`].value.type === "row") {
        document.querySelectorAll(".layoutBtn")[2].setAttribute("data-active", "true");
        document.querySelector(".layoutRowOptions").setAttribute("data-active", "true");
    } else if (settings.cbxLayout[`${loadingRole}`].value.type === "row-reverse") {
        document.querySelectorAll(".layoutBtn")[3].setAttribute("data-active", "true");
        document.querySelector(".layoutRowOptions").setAttribute("data-active", "true");
    }
    
    if (settings.cbxLayout[`${loadingRole}`].value.layoutRowSizing === "username") {
        document.querySelectorAll(".layoutHBtn")[0].setAttribute("data-active", "true");
    } else if (settings.cbxLayout[`${loadingRole}`].value.layoutRowSizing === "space") {
        document.querySelectorAll(".layoutHBtn")[1].setAttribute("data-active", "true");
    } else if (settings.cbxLayout[`${loadingRole}`].value.layoutRowSizing === "message") {
        document.querySelectorAll(".layoutHBtn")[2].setAttribute("data-active", "true");
    } 
    
    // loading Chatbox > Background

    document.querySelector(".colorMenuColCbxBG").innerHTML = "";

    for (var i = 0; i < settings.cbxBackground[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";
        
        for (var j = 0; j < settings.cbxBackground[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderCbxBG" data-active="false" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${i}, ${j})" type="range" value="${settings.cbxBackground[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.cbxBackground[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxBG backgroundName" type="text" value="${settings.cbxBackground[`${activeRole}`].value[i].name}" oninput="updateNameCbxBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        } else if (settings.cbxBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxBG backgroundName" type="text" value="${settings.cbxBackground[`${activeRole}`].value[i].name}" oninput="updateNameCbxBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotCbxBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        } else if (settings.cbxBackground[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.cbxBackground[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.cbxBackground[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.cbxBackground[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.cbxBackground[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.cbxBackground[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxBG backgroundName" type="text" value="${settings.cbxBackground[`${activeRole}`].value[i].name}" oninput="updateNameCbxBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContCbxBG">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeCbxBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeCbxBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeCbxBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeCbxBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeCbxBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].x}" oninput="updateRadialPosCbxBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].y}" oninput="updateRadialPosCbxBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].width.px}" oninput="updateCbxBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        }
    }
    updateColorSliderCbxBGBox();
    
    // loading Chatbox > BackgroundMask

    document.querySelector(".colorMenuColCbxMask").innerHTML = "";

    for (var i = 0; i < settings.cbxBackgroundMask[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";
        
        for (var j = 0; j < settings.cbxBackgroundMask[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderCbxMask" data-active="false" oninput="updateColorSliderCbxMaskBox()" onpointerdown="openColorCbxMaskBox(${i}, ${j})" type="range" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxMask backgroundName" type="text" value="${settings.cbxBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameCbxMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderCbxMaskAdd"></div>
                        <div class="colorSliderCont colorSliderCbxMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxMask").appendChild(colorMenu);
        } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxMask backgroundName" type="text" value="${settings.cbxBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameCbxMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderCbxMaskAdd" onclick="addColorSliderCbxMask(event)"></div>
                        <div class="colorSliderCont colorSliderCbxMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotCbxMask(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxMask").appendChild(colorMenu);
        } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.cbxBackgroundMask[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameCbxMask backgroundName" type="text" value="${settings.cbxBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameCbxMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientCbxMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderCbxMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderCbxMaskAdd" onclick="addColorSliderCbxMask(event)"></div>
                        <div class="colorSliderCont colorSliderCbxMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContCbxMask">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeCbxMask(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeCbxMask(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeCbxMask(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeCbxMask(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeCbxMask(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].x}" oninput="updateRadialPosCbxMask(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].y}" oninput="updateRadialPosCbxMask(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeCbxMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateCbxMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateCbxMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateCbxMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateCbxMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateCbxMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.cbxBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateCbxMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxMask").appendChild(colorMenu);
        }
    }
    updateColorSliderCbxMaskBox();

    // loading Chatbox > Border

    document.querySelector(".borderEdgeMenuCbx").setAttribute("data-active", "false");
    document.querySelector(".borderCornerMenuCbx").setAttribute("data-active", "false");
    document.querySelectorAll(".borderSelect").forEach(bSel => {
        bSel.setAttribute("data-active", "false");
    });

    // -----AUTOMATIC----- //

    // loading Chatbox > Shadow

    document.querySelector(".shadowColCbx").innerHTML = "";
    document.querySelector(".shadowSettingsCbx").setAttribute("data-active", "false");

    for (var i = 0; i < settings.cbxShadow[`${loadingRole}`].value.length; i++) {
        var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";
        
        shadowElmnt.innerHTML = `
        <button class="shadowElmntBtn" onclick="openShadowCbx()"></button>
        <button class="shadowElmntRmv" onclick="removeShadowCbx()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        if (settings.cbxShadow[`${loadingRole}`].value[i].inset === false) {
            shadowElmnt.style.boxShadow = `${settings.cbxShadow[`${loadingRole}`].value[i].x}px ${settings.cbxShadow[`${loadingRole}`].value[i].y}px ${settings.cbxShadow[`${loadingRole}`].value[i].blur}px ${settings.cbxShadow[`${loadingRole}`].value[i].expand}px ${settings.cbxShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.cbxShadow[`${loadingRole}`].value[i].color.opacity)}`;
        } else if (settings.cbxShadow[`${loadingRole}`].value[i].inset === true) {
            shadowElmnt.style.boxShadow = `${settings.cbxShadow[`${loadingRole}`].value[i].x}px ${settings.cbxShadow[`${loadingRole}`].value[i].y}px ${settings.cbxShadow[`${loadingRole}`].value[i].blur}px ${settings.cbxShadow[`${loadingRole}`].value[i].expand}px ${settings.cbxShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.cbxShadow[`${loadingRole}`].value[i].color.opacity)} inset`;
        }
        
        document.querySelector(".shadowColCbx").appendChild(shadowElmnt);
    }

    // loading Chatbox > Sizing & Spacing

    document.querySelector(".cbxSizingRow").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    })

    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[0].value = settings.cbxPosition[`${loadingRole}`].value.spacing.outer.top;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[1].value = settings.cbxPosition[`${loadingRole}`].value.spacing.outer.left;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[2].value = settings.cbxPosition[`${loadingRole}`].value.spacing.outer.right;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[3].value = settings.cbxPosition[`${loadingRole}`].value.spacing.outer.bottom;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[4].value = settings.cbxPosition[`${loadingRole}`].value.spacing.inner.top;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[5].value = settings.cbxPosition[`${loadingRole}`].value.spacing.inner.left;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[6].value = settings.cbxPosition[`${loadingRole}`].value.spacing.inner.right;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[7].value = settings.cbxPosition[`${loadingRole}`].value.spacing.inner.bottom;

    if (settings.cbxPosition[`${loadingRole}`].value.sizing === "stretch") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.cbxPosition[`${loadingRole}`].value.sizing === "flex-start") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.cbxPosition[`${loadingRole}`].value.sizing === "center") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.cbxPosition[`${loadingRole}`].value.sizing === "flex-end") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }
    
    // loading Username > Background

    document.querySelector(".colorMenuColUsnBG").innerHTML = "";

    for (var i = 0; i < settings.usnBackground[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";

        for (var j = 0; j < settings.usnBackground[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${i}, ${j})" type="range" value="${settings.usnBackground[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }
    
        if (settings.usnBackground[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnBG backgroundName" type="text" value="${settings.usnBackground[`${activeRole}`].value[i].name}" oninput="updateNameUsnBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        } else if (settings.usnBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnBG backgroundName" type="text" value="${settings.usnBackground[`${activeRole}`].value[i].name}" oninput="updateNameUsnBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotUsnBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        } else if (settings.usnBackground[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.usnBackground[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.usnBackground[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.usnBackground[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.usnBackground[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.usnBackground[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnBG backgroundName" type="text" value="${settings.usnBackground[`${activeRole}`].value[i].name}" oninput="updateNameUsnBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContUsnBG">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeUsnBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeUsnBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeUsnBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeUsnBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeUsnBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].x}" oninput="updateRadialPosUsnBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].y}" oninput="updateRadialPosUsnBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].width.px}" oninput="updateUsnBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        }
    }
    updateColorSliderUsnBGBox();
    
    // loading Username > BackgroundMask

    document.querySelector(".colorMenuColUsnMask").innerHTML = "";

    for (var i = 0; i < settings.usnBackgroundMask[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";
        
        for (var j = 0; j < settings.usnBackgroundMask[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderUsnMask" data-active="false" oninput="updateColorSliderUsnMaskBox()" onpointerdown="openColorUsnMaskBox(${i}, ${j})" type="range" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.usnBackgroundMask[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnMask backgroundName" type="text" value="${settings.usnBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameUsnMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderUsnMaskAdd"></div>
                        <div class="colorSliderCont colorSliderUsnMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorUsnMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnMask").appendChild(colorMenu);
        } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnMask backgroundName" type="text" value="${settings.usnBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameUsnMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderUsnMaskAdd" onclick="addColorSliderUsnMask(event)"></div>
                        <div class="colorSliderCont colorSliderUsnMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorUsnMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotUsnMask(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnMask").appendChild(colorMenu);
        } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.usnBackgroundMask[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.usnBackgroundMask[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameUsnMask backgroundName" type="text" value="${settings.usnBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameUsnMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientUsnMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderUsnMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderUsnMaskAdd" onclick="addColorSliderUsnMask(event)"></div>
                        <div class="colorSliderCont colorSliderUsnMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorUsnMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnMaskBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnMaskBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnMaskBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnMaskBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContUsnMask">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeUsnMask(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeUsnMask(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeUsnMask(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeUsnMask(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeUsnMask(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].x}" oninput="updateRadialPosUsnMask(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].y}" oninput="updateRadialPosUsnMask(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeUsnMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateUsnMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateUsnMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateUsnMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateUsnMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateUsnMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.usnBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateUsnMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnMask").appendChild(colorMenu);
        }
    }
    updateColorSliderUsnMaskBox();

    // loading Username > Border

    document.querySelector(".borderEdgeMenuUsn").setAttribute("data-active", "false");
    document.querySelector(".borderCornerMenuUsn").setAttribute("data-active", "false");
    document.querySelectorAll(".borderSelect").forEach(bSel => {
        bSel.setAttribute("data-active", "false");
    });

    // -----AUTOMATIC----- //

    // loading Username > Shadow

    document.querySelector(".shadowColUsn").innerHTML = "";
    document.querySelector(".shadowSettingsUsn").setAttribute("data-active", "false");

    for (var i = 0; i < settings.usnShadow[`${loadingRole}`].value.length; i++) {
        var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";
        
        shadowElmnt.innerHTML = `
        <button class="shadowElmntBtn" onclick="openShadowUsn()"></button>
        <button class="shadowElmntRmv" onclick="removeShadowUsn()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        if (settings.usnShadow[`${loadingRole}`].value[i].inset === false) {
            shadowElmnt.style.boxShadow = `${settings.usnShadow[`${loadingRole}`].value[i].x}px ${settings.usnShadow[`${loadingRole}`].value[i].y}px ${settings.usnShadow[`${loadingRole}`].value[i].blur}px ${settings.usnShadow[`${loadingRole}`].value[i].expand}px ${settings.usnShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.usnShadow[`${loadingRole}`].value[i].color.opacity)}`;
        } else if (settings.usnShadow[`${loadingRole}`].value[i].inset === true) {
            shadowElmnt.style.boxShadow = `${settings.usnShadow[`${loadingRole}`].value[i].x}px ${settings.usnShadow[`${loadingRole}`].value[i].y}px ${settings.usnShadow[`${loadingRole}`].value[i].blur}px ${settings.usnShadow[`${loadingRole}`].value[i].expand}px ${settings.usnShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.usnShadow[`${loadingRole}`].value[i].color.opacity)} inset`;
        }
        
        document.querySelector(".shadowColUsn").appendChild(shadowElmnt);
    }

    // loading Username > Sizing & Spacing

    document.querySelector(".usnSizingRowH").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    })

    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[0].value = settings.usnPosition[`${loadingRole}`].value.spacing.outer.top;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[1].value = settings.usnPosition[`${loadingRole}`].value.spacing.outer.left;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[2].value = settings.usnPosition[`${loadingRole}`].value.spacing.outer.right;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[3].value = settings.usnPosition[`${loadingRole}`].value.spacing.outer.bottom;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[4].value = settings.usnPosition[`${loadingRole}`].value.spacing.inner.top;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[5].value = settings.usnPosition[`${loadingRole}`].value.spacing.inner.left;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[6].value = settings.usnPosition[`${loadingRole}`].value.spacing.inner.right;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[7].value = settings.usnPosition[`${loadingRole}`].value.spacing.inner.bottom;

    if (settings.usnPosition[`${loadingRole}`].value.sizingH === "stretch") {
        document.querySelector(".usnSizingRowH").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingH === "flex-start") {
        document.querySelector(".usnSizingRowH").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingH === "center") {
        document.querySelector(".usnSizingRowH").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingH === "flex-end") {
        document.querySelector(".usnSizingRowH").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    if (settings.usnPosition[`${loadingRole}`].value.sizingV === "stretch") {
        document.querySelector(".usnSizingRowV").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingV === "flex-start") {
        document.querySelector(".usnSizingRowV").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingV === "center") {
        document.querySelector(".usnSizingRowV").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizingV === "flex-end") {
        document.querySelector(".usnSizingRowV").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    // loading Username > Font

    document.querySelector(".usnFontHeightAutoBtn").setAttribute("data-active", "false");
    document.querySelector(".usnFontStyleRow").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".usnFontHAlignRow").querySelectorAll("button").forEach(aBtn => {
        aBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button").forEach(cBtn => {
        cBtn.setAttribute("data-active", "false");
    });

    document.querySelector("#usnFontFamInp").value = settings.usnFont[`${loadingRole}`].value.family;
    document.querySelector("#usnFontSizeInp").value = settings.usnFont[`${loadingRole}`].value.size;
    document.querySelector("#usnFontWeightInp").value = settings.usnFont[`${loadingRole}`].value.weight;
    document.querySelector("#usnFontHeightInp").value = settings.usnFont[`${loadingRole}`].value.height.height;
    if (settings.usnFont[`${loadingRole}`].value.height.auto === true) {
        document.querySelector(".usnFontHeightAutoBtn").setAttribute("data-active", "true");
    }
    document.querySelector("#usnFontSpaceInp").value = settings.usnFont[`${loadingRole}`].value.spacing;

    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[0].setAttribute("data-active", settings.usnFont[`${loadingRole}`].value.lines.upperLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[1].setAttribute("data-active", settings.usnFont[`${loadingRole}`].value.lines.crossLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[2].setAttribute("data-active", settings.usnFont[`${loadingRole}`].value.lines.underLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[3].setAttribute("data-active", settings.usnFont[`${loadingRole}`].value.italic);

    if (settings.usnFont[`${loadingRole}`].value.hAlign === "left") {
        document.querySelector(".usnFontHAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.hAlign === "center") {
        document.querySelector(".usnFontHAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.hAlign === "right") {
        document.querySelector(".usnFontHAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
    }

    if (settings.usnFont[`${loadingRole}`].value.color.type === "custom") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.color.type === "twitch") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
    }

    document.querySelector("#usnFontColor").value = settings.usnFont[`${loadingRole}`].value.color.color;
    document.querySelector("#usnFontOpacity").value = settings.usnFont[`${loadingRole}`].value.color.opacity;
    document.querySelector("#usnFontOpacity").setAttribute("data-value", settings.usnFont[`${loadingRole}`].value.color.opacity);

    // loading Username > Text-Shadow

    document.querySelector(".fontShadowColUsn").innerHTML = "";
    document.querySelector(".fontShadowSettingsUsn").setAttribute("data-active", "false");

    for (var i = 0; i < settings.usnFontShadow[`${loadingRole}`].value.length; i++) {
        var fontShadowElmnt = document.createElement("div");
        fontShadowElmnt.className = "fontShadowElmnt";
        
        fontShadowElmnt.innerHTML = `
        <button class="fontShadowElmntBtn" onclick="openFontShadowUsn()"></button>
        <button class="fontShadowElmntRmv" onclick="removeFontShadowUsn()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        fontShadowElmnt.style.boxShadow = `${settings.usnFontShadow[`${loadingRole}`].value[i].x}px ${settings.usnFontShadow[`${loadingRole}`].value[i].y}px ${settings.usnFontShadow[`${loadingRole}`].value[i].blur}px ${settings.usnFontShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.usnFontShadow[`${loadingRole}`].value[i].color.opacity)}`;
        
        document.querySelector(".fontShadowColUsn").appendChild(fontShadowElmnt);
    }

    // loading Username > Text-Content

    document.querySelector("#usnContentTxt").value = settings.usnContent[`${loadingRole}`].value;
    
    // loading Message > Background

    document.querySelector(".colorMenuColMsgBG").innerHTML = "";

    for (var i = 0; i < settings.msgBackground[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";

        for (var j = 0; j < settings.msgBackground[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${i}, ${j})" type="range" value="${settings.msgBackground[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }
    
        if (settings.msgBackground[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgBG backgroundName" type="text" value="${settings.msgBackground[`${activeRole}`].value[i].name}" oninput="updateNameMsgBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        } else if (settings.msgBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgBG backgroundName" type="text" value="${settings.msgBackground[`${activeRole}`].value[i].name}" oninput="updateNameMsgBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotMsgBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        } else if (settings.msgBackground[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.msgBackground[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.msgBackground[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.msgBackground[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.msgBackground[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.msgBackground[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgBG backgroundName" type="text" value="${settings.msgBackground[`${activeRole}`].value[i].name}" oninput="updateNameMsgBGBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgBG(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgBG()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBGBox('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBGBox()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgBGBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContMsgBG">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeMsgBG(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeMsgBG(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeMsgBG(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeMsgBG(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeMsgBG(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].x}" oninput="updateRadialPosMsgBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].y}" oninput="updateRadialPosMsgBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgBGBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgBGSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgBGSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgBGSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgBGSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgBGSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].width.px}" oninput="updateMsgBGSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        }
    }
    updateColorSliderMsgBGBox();
    
    // loading Message > BackgroundMask

    document.querySelector(".colorMenuColMsgMask").innerHTML = "";

    for (var i = 0; i < settings.msgBackgroundMask[`${loadingRole}`].value.length; i++) {
        var sliderCol = "";
        
        for (var j = 0; j < settings.msgBackgroundMask[`${loadingRole}`].value[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderMsgMask" data-active="false" oninput="updateColorSliderMsgMaskBox()" onpointerdown="openColorMsgMaskBox(${i}, ${j})" type="range" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.msgBackgroundMask[`${loadingRole}`].value[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgMask backgroundName" type="text" value="${settings.msgBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameMsgMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderMsgMaskAdd"></div>
                        <div class="colorSliderCont colorSliderMsgMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorMsgMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgMask('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgMask()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgMask('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgMask()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgMask").appendChild(colorMenu);
        } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgMask backgroundName" type="text" value="${settings.msgBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameMsgMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderMsgMaskAdd" onclick="addColorSliderMsgMask(event)"></div>
                        <div class="colorSliderCont colorSliderMsgMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorMsgMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgMask('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgMask()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgMask('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgMask()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotMsgMask(event)">
                            <span class="numContUnit">°</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgMask").appendChild(colorMenu);
        } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].type === "radial") {
            var radialTypeActive = [false, false, false, false, false];
            if (settings.msgBackgroundMask[`${loadingRole}`].value[i].size === "farthest-corner") {
                radialTypeActive[0] = true;
            } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].size === "farthest-side") {
                radialTypeActive[1] = true;
            } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].size === "closest-corner") {
                radialTypeActive[2] = true;
            } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].size === "closest-side") {
                radialTypeActive[3] = true;
            } else if (settings.msgBackgroundMask[`${loadingRole}`].value[i].size === "circle") {
                radialTypeActive[4] = true;
            }

            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.setAttribute("data-size-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <input class="backgroundNameMsgMask backgroundName" type="text" value="${settings.msgBackgroundMask[`${activeRole}`].value[i].name}" oninput="updateNameMsgMaskBox()">
                    <button class="colorSliderRmv icon" onclick="removeGradientMsgMask(event)" title="Removes this background"><img class="iconSVG descrIconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgMask(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgMask(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <button class="colorSliderDuplicate icon" onclick="duplicateColorSliderMsgMask()"><img class="iconSVG" src="Icons/Diverse/Copy.svg"></button>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderMsgMaskAdd" onclick="addColorSliderMsgMask(event)"></div>
                        <div class="colorSliderCont colorSliderMsgMaskCont">
                            ${sliderCol}
                        </div>
                    </div>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorMsgMaskBox()" title="Hides the color panel"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgMask('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgMask()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgMask('twitch')" title="Uses the color the user uses in the Twitch chat"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgMaskBox()" title="Removes the selected color"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgMask()" title="Changes the opacity of the selected color">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgMaskBox()" title="Opens the settings specific to this type of gradient"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="singleChoiceList gradRadialPosContMsgMask">
                        <button data-active="${radialTypeActive[0]}" onclick="updateRadialTypeMsgMask(event, 'farthest-corner')">Farthest Corner</button>
                        <button data-active="${radialTypeActive[1]}" onclick="updateRadialTypeMsgMask(event, 'farthest-side')">Farthest Edge</button>
                        <button data-active="${radialTypeActive[2]}" onclick="updateRadialTypeMsgMask(event, 'closest-corner')">Closest Corner</button>
                        <button data-active="${radialTypeActive[3]}" onclick="updateRadialTypeMsgMask(event, 'closest-side')">Closest Edge</button>
                        <button data-active="${radialTypeActive[4]}" onclick="updateRadialTypeMsgMask(event, 'circle')">Circle</button>
                    </div>
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">x:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].x}" oninput="updateRadialPosMsgMask(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].y}" oninput="updateRadialPosMsgMask(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
                <button class="showBgSizeBtn" onclick="switchSizeMsgMaskBox()" title="Opens the sizing settings of this background"><img class="iconSVG" src="Icons/Diverse/Size.svg"></button>
                <div class="bgSizeSettings">
                    <div class="numCont">
                        <span class="numContDescr">x-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.percent}" oninput="updateMsgMaskSizePos('posX', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posX.px}" oninput="updateMsgMaskSizePos('posX', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">y-position:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.percent}" oninput="updateMsgMaskSizePos('posY', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].posY.px}" oninput="updateMsgMaskSizePos('posY', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">width:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('width', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('width', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                    <div class="numCont">
                        <span class="numContDescr">height:</span>
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.percent}" oninput="updateMsgMaskSizePos('height', '%')">
                        <span class="numContUnit">%</span>
                        +
                        <input class="numContInput" type="number" value="${settings.msgBackgroundMask[`${loadingRole}`].value[i].width.px}" oninput="updateMsgMaskSizePos('height', 'px')">
                        <span class="numContUnit">px</span>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgMask").appendChild(colorMenu);
        }
    }
    updateColorSliderMsgMaskBox();

    // loading Message > Border

    document.querySelector(".borderEdgeMenuMsg").setAttribute("data-active", "false");
    document.querySelector(".borderCornerMenuMsg").setAttribute("data-active", "false");
    document.querySelectorAll(".borderSelect").forEach(bSel => {
        bSel.setAttribute("data-active", "false");
    });

    // -----AUTOMATIC----- //

    // loading Message > Shadow

    document.querySelector(".shadowColMsg").innerHTML = "";
    document.querySelector(".shadowSettingsMsg").setAttribute("data-active", "false");

    for (var i = 0; i < settings.msgShadow[`${loadingRole}`].value.length; i++) {
        var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";
        
        shadowElmnt.innerHTML = `
        <button class="shadowElmntBtn" onclick="openShadowMsg()"></button>
        <button class="shadowElmntRmv" onclick="removeShadowMsg()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        if (settings.msgShadow[`${loadingRole}`].value[i].inset === false) {
            shadowElmnt.style.boxShadow = `${settings.msgShadow[`${loadingRole}`].value[i].x}px ${settings.msgShadow[`${loadingRole}`].value[i].y}px ${settings.msgShadow[`${loadingRole}`].value[i].blur}px ${settings.msgShadow[`${loadingRole}`].value[i].expand}px ${settings.msgShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.msgShadow[`${loadingRole}`].value[i].color.opacity)}`;
        } else if (settings.msgShadow[`${loadingRole}`].value[i].inset === true) {
            shadowElmnt.style.boxShadow = `${settings.msgShadow[`${loadingRole}`].value[i].x}px ${settings.msgShadow[`${loadingRole}`].value[i].y}px ${settings.msgShadow[`${loadingRole}`].value[i].blur}px ${settings.msgShadow[`${loadingRole}`].value[i].expand}px ${settings.msgShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.msgShadow[`${loadingRole}`].value[i].color.opacity)} inset`;
        }
        
        document.querySelector(".shadowColMsg").appendChild(shadowElmnt);
    }

    // loading Message > Sizing & Spacing

    document.querySelector(".msgSizingRowH").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    })

    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[0].value = settings.msgPosition[`${loadingRole}`].value.spacing.outer.top;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[1].value = settings.msgPosition[`${loadingRole}`].value.spacing.outer.left;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[2].value = settings.msgPosition[`${loadingRole}`].value.spacing.outer.right;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[3].value = settings.msgPosition[`${loadingRole}`].value.spacing.outer.bottom;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[4].value = settings.msgPosition[`${loadingRole}`].value.spacing.inner.top;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[5].value = settings.msgPosition[`${loadingRole}`].value.spacing.inner.left;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[6].value = settings.msgPosition[`${loadingRole}`].value.spacing.inner.right;
    document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[7].value = settings.msgPosition[`${loadingRole}`].value.spacing.inner.bottom;

    if (settings.msgPosition[`${loadingRole}`].value.sizingH === "stretch") {
        document.querySelector(".msgSizingRowH").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingH === "flex-start") {
        document.querySelector(".msgSizingRowH").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingH === "center") {
        document.querySelector(".msgSizingRowH").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingH === "flex-end") {
        document.querySelector(".msgSizingRowH").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    if (settings.msgPosition[`${loadingRole}`].value.sizingV === "stretch") {
        document.querySelector(".msgSizingRowV").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingV === "flex-start") {
        document.querySelector(".msgSizingRowV").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingV === "center") {
        document.querySelector(".msgSizingRowV").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizingV === "flex-end") {
        document.querySelector(".msgSizingRowV").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    // loading Message > Font

    document.querySelector(".msgFontHeightAutoBtn").setAttribute("data-active", "false");
    document.querySelector(".msgFontStyleRow").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".msgFontHAlignRow").querySelectorAll("button").forEach(aBtn => {
        aBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button").forEach(cBtn => {
        cBtn.setAttribute("data-active", "false");
    });

    document.querySelector("#msgFontFamInp").value = settings.msgFont[`${loadingRole}`].value.family;
    document.querySelector("#msgFontSizeInp").value = settings.msgFont[`${loadingRole}`].value.size;
    document.querySelector("#msgFontWeightInp").value = settings.msgFont[`${loadingRole}`].value.weight;
    document.querySelector("#msgFontHeightInp").value = settings.msgFont[`${loadingRole}`].value.height.height;
    if (settings.msgFont[`${loadingRole}`].value.height.auto === true) {
        document.querySelector(".msgFontHeightAutoBtn").setAttribute("data-active", "true");
    }
    document.querySelector("#msgFontSpaceInp").value = settings.msgFont[`${loadingRole}`].value.spacing;

    document.querySelector(".msgFontStyleRow").querySelectorAll("button")[0].setAttribute("data-active", settings.msgFont[`${loadingRole}`].value.lines.upperLine);
    document.querySelector(".msgFontStyleRow").querySelectorAll("button")[1].setAttribute("data-active", settings.msgFont[`${loadingRole}`].value.lines.crossLine);
    document.querySelector(".msgFontStyleRow").querySelectorAll("button")[2].setAttribute("data-active", settings.msgFont[`${loadingRole}`].value.lines.underLine);
    document.querySelector(".msgFontStyleRow").querySelectorAll("button")[3].setAttribute("data-active", settings.msgFont[`${loadingRole}`].value.italic);

    if (settings.msgFont[`${loadingRole}`].value.hAlign === "left") {
        document.querySelector(".msgFontHAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.hAlign === "center") {
        document.querySelector(".msgFontHAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.hAlign === "right") {
        document.querySelector(".msgFontHAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
    }

    if (settings.msgFont[`${loadingRole}`].value.color.type === "custom") {
        document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.color.type === "twitch") {
        document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
    }

    document.querySelector("#msgFontColor").value = settings.msgFont[`${loadingRole}`].value.color.color;
    document.querySelector("#msgFontOpacity").value = settings.msgFont[`${loadingRole}`].value.color.opacity;
    document.querySelector("#msgFontOpacity").setAttribute("data-value", settings.msgFont[`${loadingRole}`].value.color.opacity);

    // loading Message > Text-Shadow

    document.querySelector(".fontShadowColMsg").innerHTML = "";
    document.querySelector(".fontShadowSettingsMsg").setAttribute("data-active", "false");

    for (var i = 0; i < settings.msgFontShadow[`${loadingRole}`].value.length; i++) {
        var fontShadowElmnt = document.createElement("div");
        fontShadowElmnt.className = "fontShadowElmnt";
        
        fontShadowElmnt.innerHTML = `
        <button class="fontShadowElmntBtn" onclick="openFontShadowMsg()"></button>
        <button class="fontShadowElmntRmv" onclick="removeFontShadowMsg()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        fontShadowElmnt.style.boxShadow = `${settings.msgFontShadow[`${loadingRole}`].value[i].x}px ${settings.msgFontShadow[`${loadingRole}`].value[i].y}px ${settings.msgFontShadow[`${loadingRole}`].value[i].blur}px ${settings.msgFontShadow[`${loadingRole}`].value[i].color.color}${dec2hex(settings.msgFontShadow[`${loadingRole}`].value[i].color.opacity)}`;
        
        document.querySelector(".fontShadowColMsg").appendChild(fontShadowElmnt);
    }

    // loading Message > Text-Content

    document.querySelector("#msgContentTxt").value = settings.msgContent[`${loadingRole}`].value;

    // loading Others > Emotes

    document.querySelector("#othEmoteSizeInp").value = settings.othEmotes[`${loadingRole}`].value.height;
    document.querySelector(".emoteSizeAutoBtn").setAttribute("data-active", settings.othEmotes[`${loadingRole}`].value.auto);
    document.querySelectorAll(".emoteAlignBtn")[0].setAttribute("data-active", "false");
    document.querySelectorAll(".emoteAlignBtn")[1].setAttribute("data-active", "false");
    document.querySelectorAll(".emoteAlignBtn")[2].setAttribute("data-active", "false");

    if (settings.othEmotes[`${loadingRole}`].value.linePos === "top") {
        document.querySelectorAll(".emoteAlignBtn")[0].setAttribute("data-active", "true");
    } else if (settings.othEmotes[`${loadingRole}`].value.linePos === "middle") {
        document.querySelectorAll(".emoteAlignBtn")[1].setAttribute("data-active", "true");
    } else if (settings.othEmotes[`${loadingRole}`].value.linePos === "bottom") {
        document.querySelectorAll(".emoteAlignBtn")[2].setAttribute("data-active", "true");
    }

    // loading Others > Badges

    document.querySelector("#othBadgesHeightInp").value = settings.othBadges[`${loadingRole}`].value.size.height;
    if (settings.othBadges[`${loadingRole}`].value.size.auto === true) {
        document.querySelector(".badgesHeightAutoBtn").setAttribute("data-active", "true");
    }
    document.querySelector("#othBadgesGapInp").value = settings.othBadges[`${loadingRole}`].value.gap;

    // loading Animation > Timing

    document.querySelector("#anmTimingDelay").value = settings.anmTiming[`${loadingRole}`].value.delay;
    document.querySelector("#anmTimingAppearing").value = settings.anmTiming[`${loadingRole}`].value.appearing;
    if (settings.anmTiming[`${loadingRole}`].value.duration === "infinite") {
        document.querySelector("#anmTimingDuration").value = ""
    } else {
        document.querySelector("#anmTimingDuration").value = settings.anmTiming[`${loadingRole}`].value.duration;
    }
    document.querySelector("#anmTimingVanishing").value = settings.anmTiming[`${loadingRole}`].value.vanishing;

    // loading Animation > Animation In

    document.querySelector("#anmShowCurve").value = settings.anmShow[`${loadingRole}`].value[7].value;

    document.querySelectorAll(".anmShowType").forEach(aBtn => {
        aBtn.setAttribute("data-active", "false");
    });

    document.querySelectorAll(".anmShowRow").forEach(aRow => {
        aRow.setAttribute("data-active", "false");
    });

    for (var i = 0; i < settings.anmShow[`${loadingRole}`].value.length - 1; i++) {

        document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "false");
        document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "false");

        if (settings.anmShow[`${loadingRole}`].value[i].active === true) {
            document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "true");
            document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "true");
        }

        document.querySelectorAll(".anmShowRow")[i].querySelector("input").value = settings.anmShow[`${loadingRole}`].value[i].value;
    }

    // loading Animation > Animation Out

    document.querySelector("#anmHideCurve").value = settings.anmHide[`${loadingRole}`].value[7].value;

    document.querySelectorAll(".anmHideType").forEach(aBtn => {
        aBtn.setAttribute("data-active", "false");
    });

    document.querySelectorAll(".anmHideRow").forEach(aRow => {
        aRow.setAttribute("data-active", "false");
    });

    for (var i = 0; i < settings.anmHide[`${loadingRole}`].value.length - 1; i++) {

        document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "false");
        document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "false");

        if (settings.anmHide[`${loadingRole}`].value[i].active === true) {
            document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "true");
            document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "true");
        }

        document.querySelectorAll(".anmHideRow")[i].querySelector("input").value = settings.anmHide[`${loadingRole}`].value[i].value;
    }
    
    // loading colorPreset

    for (var i = 0; i < document.querySelectorAll(".presetList").length; i++) {
        document.querySelectorAll(".presetList")[i].innerHTML = "";
        colorPreset.forEach(preset => {
            var newPreset = document.createElement("button");
                newPreset.className = "colorPreset";
                newPreset.setAttribute("onclick", "usePreset()");
                newPreset.innerHTML = `<div class="removePreset"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></div>`;
                newPreset.style.backgroundColor = `${preset.color}${dec2hex(preset.opacity)}`;
    
            document.querySelectorAll(".presetList")[i].appendChild(newPreset);
        })
    }
}

loadingData();