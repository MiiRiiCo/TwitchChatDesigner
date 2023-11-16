function loadingData() {

    // loading Generel > Streamer-List

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

    if (settings.genChatDirection === "up") {
        document.querySelectorAll(".genChatDirectionBtn")[0].setAttribute("data-active", "true");
    } else if (settings.genChatDirection === "down") {
        document.querySelectorAll(".genChatDirectionBtn")[1].setAttribute("data-active", "true");
    }

    // loading General > Spacing

    document.querySelector("#genSpacingInput").value = settings.genSpacing;

    // loading General > User filter

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

    for (var i = 0; i < settings.cbxBackground.length; i++) {
        var sliderCol = "";
        for (var j = 0; j < settings.cbxBackground[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderCbxBG" oninput="updateColorSliderCbxBGBox()" onpointerdown="openColorCbxBGBox(${i}, ${j})" type="range" value="${settings.cbxBackground[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.cbxBackground[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
                </div>
            `;

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        } else if (settings.cbxBackground[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
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

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        } else if (settings.cbxBackground[i].type === "radial") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorCbxBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorCbxBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorCbxBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorCbxBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorCbxBG()">
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

            document.querySelector(".colorMenuColCbxBG").appendChild(colorMenu);
        }
    }
    updateColorSliderCbxBGBox();

    // loading Chatbox > Border

    // -----AUTOMATIC----- //

    // loading Chatbox > Shadow

    for (var i = 0; i < settings.cbxShadow.length; i++) {
        var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";
        
        shadowElmnt.innerHTML = `
        <button class="shadowElmntBtn" onclick="openShadowCbx()"></button>
        <button class="shadowElmntRmv" onclick="removeShadowCbx()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        if (settings.cbxShadow[i].inset === false) {
            shadowElmnt.style.boxShadow = `${settings.cbxShadow[i].xPos}px ${settings.cbxShadow[i].yPos}px ${settings.cbxShadow[i].blur}px ${settings.cbxShadow[i].expand}px ${settings.cbxShadow[i].color.color}${dec2hex(settings.cbxShadow[i].color.opacity)}`;
        } else if (settings.cbxShadow[i].inset === true) {
            shadowElmnt.style.boxShadow = `${settings.cbxShadow[i].xPos}px ${settings.cbxShadow[i].yPos}px ${settings.cbxShadow[i].blur}px ${settings.cbxShadow[i].expand}px ${settings.cbxShadow[i].color.color}${dec2hex(settings.cbxShadow[i].color.opacity)} inset`;
        }
        
        document.querySelector(".shadowColCbx").appendChild(shadowElmnt);
    }

    // loading Chatbox > Sizing & Spacing

    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[0].value = settings.cbxSpacing.inner.top;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[1].value = settings.cbxSpacing.inner.left;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[2].value = settings.cbxSpacing.inner.right;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[3].value = settings.cbxSpacing.inner.bottom;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[4].value = settings.cbxSpacing.outer.top;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[5].value = settings.cbxSpacing.outer.left;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[6].value = settings.cbxSpacing.outer.right;
    document.querySelector(".spacingGridCbx").querySelectorAll(".spacingGridNum")[7].value = settings.cbxSpacing.outer.bottom;

    if (settings.cbxSizing === "stretch") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.cbxSizing === "flex-start") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.cbxSizing === "center") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.cbxSizing === "flex-end") {
        document.querySelector(".cbxSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }
    
    // loading Username > Background

    for (var i = 0; i < settings.usnBackground.length; i++) {
        var sliderCol = "";
        for (var j = 0; j < settings.usnBackground[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderUsnBG" oninput="updateColorSliderUsnBGBox()" onpointerdown="openColorUsnBGBox(${i}, ${j})" type="range" value="${settings.usnBackground[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.usnBackground[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBG()">
                </div>
            `;

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        } else if (settings.usnBackground[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBG()">
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

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        } else if (settings.usnBackground[i].type === "radial") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorUsnBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorUsnBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorUsnBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorUsnBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorUsnBG()">
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

            document.querySelector(".colorMenuColUsnBG").appendChild(colorMenu);
        }
    }
    updateColorSliderUsnBGBox();

    // loading Username > Border

    // -----AUTOMATIC----- //

    // loading Username > Shadow

    for (var i = 0; i < settings.usnShadow.length; i++) {
        var shadowElmnt = document.createElement("div");
        shadowElmnt.className = "shadowElmnt";
        
        shadowElmnt.innerHTML = `
        <button class="shadowElmntBtn" onclick="openShadowUsn()"></button>
        <button class="shadowElmntRmv" onclick="removeShadowUsn()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        if (settings.usnShadow[i].inset === false) {
            shadowElmnt.style.boxShadow = `${settings.usnShadow[i].xPos}px ${settings.usnShadow[i].yPos}px ${settings.usnShadow[i].blur}px ${settings.usnShadow[i].expand}px ${settings.usnShadow[i].color.color}${dec2hex(settings.usnShadow[i].color.opacity)}`;
        } else if (settings.usnShadow[i].inset === true) {
            shadowElmnt.style.boxShadow = `${settings.usnShadow[i].xPos}px ${settings.usnShadow[i].yPos}px ${settings.usnShadow[i].blur}px ${settings.usnShadow[i].expand}px ${settings.usnShadow[i].color.color}${dec2hex(settings.usnShadow[i].color.opacity)} inset`;
        }
        
        document.querySelector(".shadowColUsn").appendChild(shadowElmnt);
    }

    // loading Username > Sizing & Spacing

    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[0].value = settings.usnSpacing.inner.top;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[1].value = settings.usnSpacing.inner.left;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[2].value = settings.usnSpacing.inner.right;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[3].value = settings.usnSpacing.inner.bottom;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[4].value = settings.usnSpacing.outer.top;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[5].value = settings.usnSpacing.outer.left;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[6].value = settings.usnSpacing.outer.right;
    document.querySelector(".spacingGridUsn").querySelectorAll(".spacingGridNum")[7].value = settings.usnSpacing.outer.bottom;

    if (settings.usnSizing === "stretch") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
    } else if (settings.usnSizing === "flex-start") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
    } else if (settings.usnSizing === "center") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
    } else if (settings.usnSizing === "flex-end") {
        document.querySelector(".usnSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
    }

    // loading Username > Font

    document.querySelector("#usnFontFamInp").value = settings.usnFontFamily;
    document.querySelector("#usnFontSizeInp").value = settings.usnFontSize;
    document.querySelector("#usnFontWeightInp").value = settings.usnFontWeight;
    document.querySelector("#usnFontHeightInp").value = settings.usnFontHeight.height;
    if (settings.usnFontHeight.auto === true) {
        document.querySelector(".usnFontHeightAutoBtn").setAttribute("data-active", "true");
    }
    document.querySelector("#usnFontSpaceInp").value = settings.usnFontSpacing;

    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[0].setAttribute("data-active", settings.usnFontLines.upperLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[1].setAttribute("data-active", settings.usnFontLines.crossLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[2].setAttribute("data-active", settings.usnFontLines.underLine);
    document.querySelector(".usnFontStyleRow").querySelectorAll("button")[3].setAttribute("data-active", settings.usnFontItalic);

    if (settings.usnFontAlign === "left") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFontAlign === "center") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
    } else if (settings.usnFontAlign === "right") {
        document.querySelector(".usnFontAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
    }

    if (settings.usnFontColor.type === "custom") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
    } else if (settings.usnFontColor.type === "twitch") {
        document.querySelector(".fontColorUsnMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
    }

    document.querySelector("#usnFontColor").value = settings.usnFontColor.color;
    document.querySelector("#usnFontOpacity").value = settings.usnFontColor.opacity;

    // loading Username > Text-Shadow

    for (var i = 0; i < settings.usnFontShadow.length; i++) {
        var fontShadowElmnt = document.createElement("div");
        fontShadowElmnt.className = "fontShadowElmnt";
        
        fontShadowElmnt.innerHTML = `
        <button class="fontShadowElmntBtn" onclick="openFontShadowUsn()"></button>
        <button class="fontShadowElmntRmv" onclick="removeFontShadowUsn()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
        `;

        fontShadowElmnt.style.boxShadow = `${settings.usnFontShadow[i].xPos}px ${settings.usnFontShadow[i].yPos}px ${settings.usnFontShadow[i].blur}px ${settings.usnFontShadow[i].color.color}${dec2hex(settings.usnFontShadow[i].color.opacity)}`;
        
        document.querySelector(".fontShadowColUsn").appendChild(fontShadowElmnt);
    }

    // loading Username > Text-Content

    document.querySelector("#usnContentTxt").value = settings.usnContent;
    
    // loading Message > Background

    for (var i = 0; i < settings.msgBackground.length; i++) {
        var sliderCol = "";
        for (var j = 0; j < settings.msgBackground[i].colors.length; j++) {
            sliderCol += `<input class="colorSlider colorSliderMsgBG" oninput="updateColorSliderMsgBGBox()" onpointerdown="openColorMsgBGBox(${i}, ${j})" type="range" value="${settings.msgBackground[i].colors[j].position}" min="0" max="100" step="0.1">`
        }

        if (settings.msgBackground[i].type === "solid") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
                </div>
            `;

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        } else if (settings.msgBackground[i].type === "linear") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
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

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        } else if (settings.msgBackground[i].type === "radial") {
            var colorMenu = document.createElement("div");
            colorMenu.className = "colorMenu";
            colorMenu.setAttribute("data-color-show", "false");
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
                    <div class="colorChangeType selectItemRow">
                        <button onclick="updateColorMsgBG('custom')"><input type="color" class="colorChangeInput" oninput="updateColorMsgBG()"><img class="iconSVG" src="Icons/Diverse/Color.svg"></button>
                        <button onclick="updateColorMsgBG('twitch')"><img class="iconSVG" src="Icons/Diverse/TwitchColor.svg"></button>
                        <button class="colorDeleteBtn" onclick="deleteColorMsgBGBox()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
                    </div>
                    <input type="range" class="colorChangeOpacity" value="0" min="0" max="255" step="1" oninput="updateColorMsgBG()">
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

            document.querySelector(".colorMenuColMsgBG").appendChild(colorMenu);
        }
    }
    updateColorSliderMsgBGBox();
}

// loading Message > Border

// -----AUTOMATIC----- //

// loading Message > Shadow

for (var i = 0; i < settings.msgShadow.length; i++) {
    var shadowElmnt = document.createElement("div");
    shadowElmnt.className = "shadowElmnt";
    
    shadowElmnt.innerHTML = `
    <button class="shadowElmntBtn" onclick="openShadowMsg()"></button>
    <button class="shadowElmntRmv" onclick="removeShadowMsg()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
    `;

    if (settings.msgShadow[i].inset === false) {
        shadowElmnt.style.boxShadow = `${settings.msgShadow[i].xPos}px ${settings.msgShadow[i].yPos}px ${settings.msgShadow[i].blur}px ${settings.msgShadow[i].expand}px ${settings.msgShadow[i].color.color}${dec2hex(settings.msgShadow[i].color.opacity)}`;
    } else if (settings.msgShadow[i].inset === true) {
        shadowElmnt.style.boxShadow = `${settings.msgShadow[i].xPos}px ${settings.msgShadow[i].yPos}px ${settings.msgShadow[i].blur}px ${settings.msgShadow[i].expand}px ${settings.msgShadow[i].color.color}${dec2hex(settings.msgShadow[i].color.opacity)} inset`;
    }
    
    document.querySelector(".shadowColMsg").appendChild(shadowElmnt);
}

// loading Message > Sizing & Spacing

document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[0].value = settings.msgSpacing.inner.top;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[1].value = settings.msgSpacing.inner.left;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[2].value = settings.msgSpacing.inner.right;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[3].value = settings.msgSpacing.inner.bottom;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[4].value = settings.msgSpacing.outer.top;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[5].value = settings.msgSpacing.outer.left;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[6].value = settings.msgSpacing.outer.right;
document.querySelector(".spacingGridMsg").querySelectorAll(".spacingGridNum")[7].value = settings.msgSpacing.outer.bottom;

if (settings.msgSizing === "stretch") {
    document.querySelector(".msgSizingRow").querySelectorAll("button")[0].setAttribute("data-active", "true")
} else if (settings.msgSizing === "flex-start") {
    document.querySelector(".msgSizingRow").querySelectorAll("button")[1].setAttribute("data-active", "true")
} else if (settings.msgSizing === "center") {
    document.querySelector(".msgSizingRow").querySelectorAll("button")[2].setAttribute("data-active", "true")
} else if (settings.msgSizing === "flex-end") {
    document.querySelector(".msgSizingRow").querySelectorAll("button")[3].setAttribute("data-active", "true")
}

// loading Message > Font

document.querySelector("#msgFontFamInp").value = settings.msgFontFamily;
document.querySelector("#msgFontSizeInp").value = settings.msgFontSize;
document.querySelector("#msgFontWeightInp").value = settings.msgFontWeight;
document.querySelector("#msgFontHeightInp").value = settings.msgFontHeight.height;
if (settings.msgFontHeight.auto === true) {
    document.querySelector(".msgFontHeightAutoBtn").setAttribute("data-active", "true");
}
document.querySelector("#msgFontSpaceInp").value = settings.msgFontSpacing;

document.querySelector(".msgFontStyleRow").querySelectorAll("button")[0].setAttribute("data-active", settings.msgFontLines.upperLine);
document.querySelector(".msgFontStyleRow").querySelectorAll("button")[1].setAttribute("data-active", settings.msgFontLines.crossLine);
document.querySelector(".msgFontStyleRow").querySelectorAll("button")[2].setAttribute("data-active", settings.msgFontLines.underLine);
document.querySelector(".msgFontStyleRow").querySelectorAll("button")[3].setAttribute("data-active", settings.msgFontItalic);

if (settings.msgFontAlign === "left") {
    document.querySelector(".msgFontAlignRow").querySelectorAll("button")[0].setAttribute("data-active", "true");
} else if (settings.msgFontAlign === "center") {
    document.querySelector(".msgFontAlignRow").querySelectorAll("button")[1].setAttribute("data-active", "true");
} else if (settings.msgFontAlign === "right") {
    document.querySelector(".msgFontAlignRow").querySelectorAll("button")[2].setAttribute("data-active", "true");
}

if (settings.msgFontColor.type === "custom") {
    document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[0].setAttribute("data-active", "true");
} else if (settings.msgFontColor.type === "twitch") {
    document.querySelector(".fontColorMsgMenu").querySelector(".colorChangeType").querySelectorAll("button")[1].setAttribute("data-active", "true");
}

document.querySelector("#msgFontColor").value = settings.msgFontColor.color;
document.querySelector("#msgFontOpacity").value = settings.msgFontColor.opacity;

// loading Message > Text-Shadow

for (var i = 0; i < settings.msgFontShadow.length; i++) {
    var fontShadowElmnt = document.createElement("div");
    fontShadowElmnt.className = "fontShadowElmnt";
    
    fontShadowElmnt.innerHTML = `
    <button class="fontShadowElmntBtn" onclick="openFontShadowMsg()"></button>
    <button class="fontShadowElmntRmv" onclick="removeFontShadowMsg()"><img class="iconSVG" src="Icons/Diverse/Remove.svg"></button>
    `;

    fontShadowElmnt.style.boxShadow = `${settings.msgFontShadow[i].xPos}px ${settings.msgFontShadow[i].yPos}px ${settings.msgFontShadow[i].blur}px ${settings.msgFontShadow[i].color.color}${dec2hex(settings.msgFontShadow[i].color.opacity)}`;
    
    document.querySelector(".fontShadowColMsg").appendChild(fontShadowElmnt);
}

// loading Message > Text-Content

document.querySelector("#msgContentTxt").value = settings.msgContent;

// loading Message > Emotes

document.querySelector("#msgEmoteSizeInp").value = settings.msgEmotes.height;
document.querySelector(".emoteSizeAutoBtn").setAttribute("data-active", settings.msgEmotes.auto);

if (settings.msgEmotes.linePos === "top") {
    document.querySelectorAll(".emoteAlignBtn")[0].setAttribute("data-active", "true");
} else if (settings.msgEmotes.linePos === "middle") {
    document.querySelectorAll(".emoteAlignBtn")[1].setAttribute("data-active", "true");
} else if (settings.msgEmotes.linePos === "bottom") {
    document.querySelectorAll(".emoteAlignBtn")[2].setAttribute("data-active", "true");
}

// loading Animation > Timing

document.querySelector("#anmTimingDelay").value = settings.anmTiming.delay;
document.querySelector("#anmTimingAppearing").value = settings.anmTiming.appearing;
document.querySelector("#anmTimingDuration").value = settings.anmTiming.duration;
document.querySelector("#anmTimingVanishing").value = settings.anmTiming.vanishing;

// loading Animation > Animation In

for (var i = 0; i < settings.anmShow.length; i++) {
    if (settings.anmShow[i].active === true) {
        document.querySelectorAll(".anmShowType")[i].setAttribute("data-active", "true");
        document.querySelectorAll(".anmShowRow")[i].setAttribute("data-show", "true");
    }
    document.querySelectorAll(".anmShowRow")[i].querySelector("input").value = settings.anmShow[i].value;
}

// loading Animation > Animation Out

for (var i = 0; i < settings.anmHide.length; i++) {
    if (settings.anmHide[i].active === true) {
        document.querySelectorAll(".anmHideType")[i].setAttribute("data-active", "true");
        document.querySelectorAll(".anmHideRow")[i].setAttribute("data-show", "true");
    }
    document.querySelectorAll(".anmHideRow")[i].querySelector("input").value = settings.anmHide[i].value;
}

loadingData();