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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientCbxBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        } else if (settings.cbxBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientCbxBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.cbxBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotCbxBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderCbxBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderCbxBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderCbxBGAdd" onclick="addColorSliderCbxBG(event)"></div>
                        <div class="colorSliderCont colorSliderCbxBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientCbxBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetCbxBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
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
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        }
    }
    updateColorSliderCbxBGBox();

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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientUsnBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        } else if (settings.usnBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientUsnBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotUsnBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderUsnBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderUsnBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderUsnBGAdd" onclick="addColorSliderUsnBG(event)"></div>
                        <div class="colorSliderCont colorSliderUsnBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientUsnBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBGBox('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBGBox('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBGBox()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetUsnBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
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
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        }
    }
    updateColorSliderUsnBGBox();

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

    document.querySelector(".usnSizingRow").querySelectorAll("button").forEach(sBtn => {
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

    if (settings.usnPosition[`${loadingRole}`].value.sizing === "stretch") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizing === "flex-start") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizing === "center") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.usnPosition[`${loadingRole}`].value.sizing === "flex-end") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    // loading Username > Font

    document.querySelector(".usnFontHeightAutoBtn").setAttribute("data-active", "false");
    document.querySelector(".usnFontStyleRow").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".usnFontAlignRow").querySelectorAll("button").forEach(aBtn => {
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

    if (settings.usnFont[`${loadingRole}`].value.align === "left") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.align === "center") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.align === "right") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
    }

    if (settings.usnFont[`${loadingRole}`].value.color.type === "custom") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFont[`${loadingRole}`].value.color.type === "twitch") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
    }

    document.querySelector("#usnFontColor").value = settings.usnFont[`${loadingRole}`].value.color.color;
    document.querySelector("#usnFontOpacity").value = settings.usnFont[`${loadingRole}`].value.color.opacity;

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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Solid</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientMsgBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        } else if (settings.msgBackground[`${loadingRole}`].value[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
            colorMenu.setAttribute("data-set-show", "false");
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Linear</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientMsgBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
                <div class="gradSpecSettings">
                    <div class="inputNumRow">
                        <div class="numCont">
                            <span class="numContDescr">rotation:</span>
                            <input class="numContInput" type="number" value="${settings.msgBackground[`${loadingRole}`].value[i].rotate}" oninput="updateLinearRotMsgBG(event)">
                            <span class="numContUnit">°</span>
                        </div>
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
            colorMenu.innerHTML = `
                <div class="colorSliderAddRow">
                    <div class="colorSliderMoveCont">
                        <button class="colorSliderMoveUp" onclick="moveColorSliderMsgBG(event, 'up')"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                        <button class="colorSliderMoveDown" onclick="moveColorSliderMsgBG(event, 'down')"><img class="iconSVG" src="Icons/Diverse/DownLite.svg"></button>
                    </div>
                    <div class="colorSliderAddCont">
                        <div class="colorSliderDescr">Radial</div>
                        <div class="colorSliderAdd colorSliderMsgBGAdd" onclick="addColorSliderMsgBG(event)"></div>
                        <div class="colorSliderCont colorSliderMsgBGCont">
                            ${sliderCol}
                        </div>
                    </div>
                    <button class="colorSliderRmv" onclick="removeGradientMsgBG(event)"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                </div>
                <div class="colorChangeCont">
                    <button class="hideColorBtn" onclick="hideColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/UpLite.svg"></button>
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
                    <div class="presetCont">
                        <div class="presetList" data-delete-show="false"></div>
                        <button class="presetAdd" onclick="addPreset()"><img class="iconSVG" src="Icons/Diverse/Add.svg"></button>
                        <button class="presetShowDelete" onclick="showDeletePreset()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                </div>
                <button class="showGradSpecBtn" onclick="switchSetMsgBGBox()" data-active="false"><img class="iconSVG" src="Icons/Diverse/Settings.svg"></button>
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
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].x}" oninput="updateRadialPosMsgBG(event, 'x')">
                            <span class="numContUnit">%</span>
                        </div>
                        <div class="numCont">
                            <span class="numContDescr">y:</span>
                            <input class="numContInput" type="number" value="${settings.usnBackground[`${loadingRole}`].value[i].y}" oninput="updateRadialPosMsgBG(event, 'y')">
                            <span class="numContUnit">%</span>
                        </div>
                    </div>
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        }
    }
    updateColorSliderMsgBGBox();

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

    document.querySelector(".msgSizingRow").querySelectorAll("button").forEach(sBtn => {
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

    if (settings.msgPosition[`${loadingRole}`].value.sizing === "stretch") {
        document.querySelector(".msgSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizing === "flex-start") {
        document.querySelector(".msgSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizing === "center") {
        document.querySelector(".msgSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.msgPosition[`${loadingRole}`].value.sizing === "flex-end") {
        document.querySelector(".msgSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    // loading Message > Font

    document.querySelector(".msgFontHeightAutoBtn").setAttribute("data-active", "false");
    document.querySelector(".msgFontStyleRow").querySelectorAll("button").forEach(sBtn => {
        sBtn.setAttribute("data-active", "false");
    });
    document.querySelector(".msgFontAlignRow").querySelectorAll("button").forEach(aBtn => {
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

    if (settings.msgFont[`${loadingRole}`].value.align === "left") {
        document.querySelector(".msgFontAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.align === "center") {
        document.querySelector(".msgFontAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.align === "right") {
        document.querySelector(".msgFontAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
    }

    if (settings.msgFont[`${loadingRole}`].value.color.type === "custom") {
        document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.msgFont[`${loadingRole}`].value.color.type === "twitch") {
        document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
    }

    document.querySelector("#msgFontColor").value = settings.msgFont[`${loadingRole}`].value.color.color;
    document.querySelector("#msgFontOpacity").value = settings.msgFont[`${loadingRole}`].value.color.opacity;

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