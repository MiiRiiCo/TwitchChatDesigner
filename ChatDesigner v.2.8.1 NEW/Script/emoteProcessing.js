replacedEmoteNames = [];

//---------------------------- Twitch Emotes
window.extractTwitchEmote = function(meta) {
    var twitchEmoteRanges = [];

    if (meta["emotes"]) {
        emoteCol = Object.entries(meta["emotes"]);
    
        for (let i = 0; i < emoteCol.length; i++) {
            for (let j = 0; j < emoteCol[i][1].length; j++) {
                const emoteUrl = `https://static-cdn.jtvnw.net/emoticons/v2/${emoteCol[i][0]}/default/dark/4.0`;
                twitchEmoteRanges.push({
                    name: emoteCol[i][0],
                    from: parseInt(emoteCol[i][1][j].slice(0, emoteCol[i][1][j].indexOf("-"))),
                    to: parseInt(emoteCol[i][1][j].slice(emoteCol[i][1][j].indexOf("-") + 1, emoteCol[i][1][j].length)),
                    url: emoteUrl,
                });
            }
        }
    }
    twitchEmoteRanges.sort(function(a, b) {
        var x = b["from"]; var y = a["from"];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

    return twitchEmoteRanges;
}

window.replaceTwitchEmotes = function (message, twitchEmoteRanges) {
    twitchEmoteRanges.sort((a, b) => b.from - a.from);
    
    twitchEmoteRanges.forEach(emote => {
            const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
            message = message.substring(0, emote.from) + emoteHTML + message.substring(emote.to + 1);
            replacedEmoteNames.push(emote.name);
    });
    return message;
}

//---------------------------- BTTV Processing
function extractBTTVEmotes(message, emotesArray) {
    const emoteIds = [];
    
    if (emotesArray && Array.isArray(emotesArray)) {
        emotesArray.forEach(emoteInfo => {
            const emoteCode = emoteInfo.code;
            let emoteIndex = message.indexOf(emoteCode);
        
            while (emoteIndex !== -1) {
                if (
                    (emoteIndex === 0 || /\s/.test(message[emoteIndex - 1])) &&
                    (emoteIndex + emoteCode.length === message.length || /\s/.test(message[emoteIndex + emoteCode.length]))
                ) {
                    emoteIds.push({
                        id: emoteInfo.id,
                        name: emoteInfo.code,
                        start: emoteIndex,
                        end: emoteIndex + emoteCode.length,
                    });
                }
        
                emoteIndex = message.indexOf(emoteCode, emoteIndex + 1);
            }
        });
    }
    
    return emoteIds;
}

function generateBTTVEmoteUrls(emoteIds) {
    const emoteUrls = [];
    
    emoteIds.forEach(emote => {
        const emoteUrl = `https://cdn.betterttv.net/emote/${emote.id}/3x`;
        emoteUrls.push({
            id: `bttv_${emote.id}`,
            url: emoteUrl,
            start: emote.start,
            end: emote.end,
            name: emote.name,
        });
    });
    emoteUrls.sort((a, b) => b.start - a.start);
    
    return emoteUrls;
}

function replaceBTTVEmotes(message, emoteUrls) {
    emoteUrls.forEach(emote => {
        try {
            const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
            message = message.substring(0, emote.start) + emoteHTML + message.substring(emote.end + 1);
        } catch (error) {
            console.error('Fehler beim Ersetzen von BetterTTV Emotes:', error);
        }
    });
    return message;
}

window.extractBetterTTVGlobalEmoteIds = function(message, bttvGlobal) {
    return extractBTTVEmotes(message, bttvGlobal);
}

window.generateBetterTTVGlobalEmoteUrls = function(betterTTVEmoteIds) {
    return generateBTTVEmoteUrls(betterTTVEmoteIds);
}

window.replaceBetterTTVGlobalEmotes = function(message, betterTTVUrls) {
    return replaceBTTVEmotes(message, betterTTVUrls);
}

window.extractBetterTTVChannelEmoteIds = function(message, bttvChannel) {
    const channelEmotes = bttvChannel && bttvChannel.channelEmotes;
    const sharedEmotes = bttvChannel && bttvChannel.sharedEmotes;

    const channelEmoteIds = extractBTTVEmotes(message, channelEmotes);
    const sharedEmoteIds = extractBTTVEmotes(message, sharedEmotes);

    return channelEmoteIds.concat(sharedEmoteIds);
}

window.generateBetterTTVChannelEmoteUrls = function(betterTTVChannelEmoteIds) {
    return generateBTTVEmoteUrls(betterTTVChannelEmoteIds);
}

window.replaceBetterTTVChannelEmotes = function(message, betterTTVChannelUrls) {
    return replaceBTTVEmotes(message, betterTTVChannelUrls);
}

// -------------------------- 7TV Global Emotes
window.extract7TVEmoteIds = function(message, sevenTVGlobal) {
    const sevenTVEmoteIds = [];

    if (sevenTVGlobal && sevenTVGlobal.emotes && Array.isArray(sevenTVGlobal.emotes)) {
        sevenTVGlobal.emotes.forEach(emoteInfo => {
            const emoteCode = emoteInfo.name; // 7TV verwendet "name" anstelle von "code"
            let emoteIndex = message.indexOf(emoteCode);

            while (emoteIndex !== -1) {
                if (
                    (emoteIndex === 0 || /\s/.test(message[emoteIndex - 1])) &&
                    (emoteIndex + emoteCode.length === message.length || /\s/.test(message[emoteIndex + emoteCode.length]))
                ) {
                    sevenTVEmoteIds.push({
                        id: emoteInfo.id,
                        name: emoteInfo.name,
                        start: emoteIndex,
                        end: emoteIndex + emoteCode.length,
                    });
                }

                emoteIndex = message.indexOf(emoteCode, emoteIndex + 1);
            }
        });
    }

    return sevenTVEmoteIds;
}

window.generate7TVEmoteUrls = function (sevenTVEmoteIds) {
    const sevenTVUrls = [];

    sevenTVEmoteIds.forEach(emote => {
        const emoteUrl = `https://cdn.7tv.app/emote/${emote.id}/3x.webp`; // Beispiel-URL, die angepasst werden muss
        sevenTVUrls.push({
            id: `7tv_${emote.id}`,
            url: emoteUrl,
            start: emote.start,
            end: emote.end,
        });
    });
    sevenTVUrls.sort((a, b) => b.start - a.start);

    return sevenTVUrls;
}

window.replace7TVGlobalEmotes = function (message, sevenTVUrls) {
    sevenTVUrls.forEach(emote => {
        try {
            const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
            message = message.substring(0, emote.start) + emoteHTML + message.substring(emote.end + 1);
        } catch (error) {
            console.error('Fehler beim Ersetzen von 7TV Global Emotes:', error);
        }
    });
    return message;
}

// -------------------------- 7TV Channel Emotes
window.extract7TVChannelEmoteIds = function(message, sevenTVChannel) {
    const sevenTVChannelEmoteIds = [];

    if (sevenTVChannel && sevenTVChannel.emote_set && Array.isArray(sevenTVChannel.emote_set.emotes)) {
        extractEmotes(sevenTVChannel.emote_set.emotes);
    }

    return sevenTVChannelEmoteIds;

    function extractEmotes(emotesArray) {
        emotesArray.forEach(emoteInfo => {
            const emoteCode = emoteInfo.name; // 7TV verwendet "name" anstelle von "code"
            let emoteIndex = message.indexOf(emoteCode);

            while (emoteIndex !== -1) {
                if (
                    (emoteIndex === 0 || /\s/.test(message[emoteIndex - 1])) &&
                    (emoteIndex + emoteCode.length === message.length || /\s/.test(message[emoteIndex + emoteCode.length]))
                ) {
                    sevenTVChannelEmoteIds.push({
                        id: emoteInfo.id,
                        name: emoteInfo.name,
                        start: emoteIndex,
                        end: emoteIndex + emoteCode.length,
                    });
                }

                emoteIndex = message.indexOf(emoteCode, emoteIndex + 1);
            }
        });
    }
}

window.generate7TVChannelEmoteUrls = function (sevenTVChannelEmoteIds) {
    const sevenTVChannelUrls = [];

    sevenTVChannelEmoteIds.forEach(emote => {
        const emoteUrl = `https://cdn.7tv.app/emote/${emote.id}/3x.webp`; // Beispiel-URL, die angepasst werden muss
        sevenTVChannelUrls.push({
            id: `7tv_${emote.id}`,
            url: emoteUrl,
            start: emote.start,
            end: emote.end,
            name: emote.name,
        });
    });
    sevenTVChannelUrls.sort((a, b) => b.start - a.start);

    return sevenTVChannelUrls;
}

window.replace7TVChannelEmotes = function (message, sevenTVChannelUrls) {
    let emotesReplaced = false;
    
    sevenTVChannelUrls.forEach(emote => {
        const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
    
        const emoteCode = emote.code || emote.name;
        if (message.includes(emoteCode)) {
            message = message.split(emoteCode).join(emoteHTML);
            emotesReplaced = true;
        }
    });
    
    if (emotesReplaced) {
        return message;
    } else {
        return message;
    }
}

// -------------------------- FFZ Global Emotes
window.extractFFZGlobalEmoteIds = function (ffzGlobal) {
    const ffzGlobalEmoteIds = [];

    // Check if FFZ Global Emotes are available
    if (ffzGlobal && ffzGlobal.sets) {
        // Check if the set with ID 3 (Global Emotes) exists
        const globalEmoteSet = ffzGlobal.sets[3];
        if (globalEmoteSet && globalEmoteSet.emoticons) {
            const ffzGlobalEmotes = globalEmoteSet.emoticons;
            extractEmotes(ffzGlobalEmotes, 'FFZ Global');
        }
    }

    return ffzGlobalEmoteIds;

    function extractEmotes(emotesArray, emoteType) {
        emotesArray.forEach(emoteInfo => {
            ffzGlobalEmoteIds.push({
                id: emoteInfo.id,
                name: emoteInfo.name,
            });
        });
    }
}

window.generateFFZGlobalEmoteUrls = function (ffzGlobalEmoteIds) {
    const ffzGlobalUrls = [];

    ffzGlobalEmoteIds.forEach(emote => {
        const emoteUrl = `https://api.frankerfacez.com/v1/emote/${emote.id}`;
        ffzGlobalUrls.push({
            id: `ffz_${emote.id}`,
            url: emoteUrl,
        });
    });

    ffzGlobalUrls.sort((a, b) => b.start - a.start);

    return ffzGlobalUrls;
}

window.replaceFFZGlobalEmotes = function (message, ffzGlobalUrls) {
    ffzGlobalUrls.forEach(emote => {
        const regex = new RegExp(`\\b${emote.name}\\b`, 'g');
        message = message.replace(regex, `<img src="${emote.url}" alt="${emote.name}">`);
    });

    return message;
}

// -------------------------- FFZ Channel Emotes
window.extractFFZChannelEmoteIds = function (ffzChannel) {
    const ffzChannelEmoteIds = [];

    // Check if FFZ Channel Emotes are available
    if (ffzChannel && ffzChannel.sets) {
        for (const setId in ffzChannel.sets) {
            if (ffzChannel.sets.hasOwnProperty(setId)) {
                const channelEmoteSet = ffzChannel.sets[setId];
                if (channelEmoteSet.emoticons) {
                    const ffzChannelEmotes = channelEmoteSet.emoticons;
                    extractEmotes(ffzChannelEmotes, 'FFZ Channel');
                }
            }
        }
    }

    return ffzChannelEmoteIds;

    function extractEmotes(emotesArray, emoteType) {
        emotesArray.forEach(emoteInfo => {
            ffzChannelEmoteIds.push({
                id: emoteInfo.id,
                name: emoteInfo.name,
            });
        });
    }
}

window.generateFFZChannelEmoteUrls = function (ffzChannelEmoteIds) {
    const ffzChannelUrls = [];

    ffzChannelEmoteIds.forEach(emote => {
        const emoteUrl = `https://cdn.frankerfacez.com/emoticon/${emote.id}/2`;
        ffzChannelUrls.push({
            id: `ffz_${emote.id}`,
            url: emoteUrl,
            name: emote.name,
        });
    });

    ffzChannelUrls.sort((a, b) => b.start - a.start);

    return ffzChannelUrls;
}

window.replaceFFZChannelEmotes = function (message, ffzChannelUrls) {
    ffzChannelUrls.forEach(emote => {
        const regex = new RegExp(`\\b${emote.name}\\b`, 'g');
        message = message.replace(regex, `<img src="${emote.url}" alt="${emote.name}">`);
    });

    return message;
}