replacedEmoteNames = [];
    
    // check and generate URL for Twitch Emotes
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
        console.log('Twitch URL generiert', twitchEmoteRanges);

        return twitchEmoteRanges;
    }
    // check for bttv Global Emotes
    window.extractBetterTTVEmoteIds = function(message, bttvGlobal) {
        const betterTTVEmoteIds = [];
    
        // Überprüfe, ob bttvGlobal definiert ist und die Methode find hat
        if (bttvGlobal && Array.isArray(bttvGlobal)) {
            bttvGlobal.forEach(emoteInfo => {
                const emoteCode = emoteInfo.code;
                let emoteIndex = message.indexOf(emoteCode);
    
                while (emoteIndex !== -1) {
                    // Überprüfe, ob vor und nach dem Emote ein Leerzeichen steht
                    if (
                        (emoteIndex === 0 || /\s/.test(message[emoteIndex - 1])) &&
                        (emoteIndex + emoteCode.length === message.length || /\s/.test(message[emoteIndex + emoteCode.length]))
                    ) {
                        betterTTVEmoteIds.push({
                            id: emoteInfo.id,
                            name: emoteInfo.code,
                            start: emoteIndex,
                            end: emoteIndex + emoteCode.length,
                        });
                    }
    
                    // Suche nach weiteren Vorkommen des Emotes im Text
                    emoteIndex = message.indexOf(emoteCode, emoteIndex + 1);
                }
            });
    
            console.log('BetterTTV ID generiert', betterTTVEmoteIds);
        }
    
        return betterTTVEmoteIds;
    }
    // check for bttv Channel Emotes
    window.extractBetterTTVChannelEmoteIds = function(message, bttvChannel) {
        const betterTTVChannelEmoteIds = [];
        
        // Überprüfen, ob bttvChannel definiert ist und die Emotes enthält
        if (bttvChannel && bttvChannel.channelEmotes && Array.isArray(bttvChannel.channelEmotes)) {
            extractEmotes(bttvChannel.channelEmotes);
        }
        
        if (bttvChannel && bttvChannel.sharedEmotes && Array.isArray(bttvChannel.sharedEmotes)) {
                extractEmotes(bttvChannel.sharedEmotes);
        }
        
        return betterTTVChannelEmoteIds;
        
        // Hilfsfunktion zum Extrahieren von Emotes
        function extractEmotes(emotesArray) {
            emotesArray.forEach(emoteInfo => {
                const emoteCode = emoteInfo.code;
                let emoteIndex = message.indexOf(emoteCode);
        
                while (emoteIndex !== -1) {
                    // Überprüfe, ob vor und nach dem Emote ein Leerzeichen steht
                    if (
                        (emoteIndex === 0 || /\s/.test(message[emoteIndex - 1])) &&
                        (emoteIndex + emoteCode.length === message.length || /\s/.test(message[emoteIndex + emoteCode.length]))
                    ) {
                        betterTTVChannelEmoteIds.push({
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
    }          
    // generate URL for bttv Global Emotes
    window.generateBetterTTVEmoteUrls = function (betterTTVEmoteIds) {
        const betterTTVUrls = [];
    
        betterTTVEmoteIds.forEach(emote => {
            const emoteUrl = `https://cdn.betterttv.net/emote/${emote.id}/3x`;
            betterTTVUrls.push({
                id: `bttv_${emote.id}`,
                url: emoteUrl,
                start: emote.start,
                end: emote.end,
            });
        });
        betterTTVUrls.sort((a, b) => b.start - a.start);
    
        console.log('BetterTTV URLs generiert', betterTTVUrls);
    
        return betterTTVUrls;
    }
    // generate URL for bttv Channel Emotes
    window.generateBetterTTVChannelEmoteUrls = function (betterTTVChannelEmoteIds) {
        const betterTTVChannelUrls = [];
    
        betterTTVChannelEmoteIds.forEach(emote => {
            const emoteUrl = `https://cdn.betterttv.net/emote/${emote.id}/3x`;
            betterTTVChannelUrls.push({
                id: `bttv_${emote.id}`,
                url: emoteUrl,
                start: emote.start,
                end: emote.end,
                name: emote.name,
            });
        });
        betterTTVChannelUrls.sort((a, b) => b.start - a.start);
    
        return betterTTVChannelUrls;
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
    
    window.replaceBetterTTVGlobalEmotes = function (message, betterTTVUrls) {
        betterTTVUrls.forEach(emote => {
            try {
                const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
                message = message.substring(0, emote.start) + emoteHTML + message.substring(emote.end + 1);
            } catch (error) {
                console.error('Fehler beim Ersetzen von BetterTTV Global Emotes:', error);
            }
        });
        return message;
    }
    
    window.replaceBetterTTVChannelEmotes = function (message, betterTTVChannelUrls) {
        let emotesReplaced = false;
    
        betterTTVChannelUrls.forEach(emote => {
            const emoteHTML = `<img class="emt" src="${emote.url}" alt="${emote.url}">`;
    
            const emoteCode = emote.code || emote.name;
            if (message.includes(emoteCode)) {
                console.log('Emote ersetzt:', emote.name);
                message = message.split(emoteCode).join(emoteHTML);
                emotesReplaced = true;
            } else {
                console.log('Emote nicht gefunden:', emote.name, 'in', message);
            }
        });
    
        if (emotesReplaced) {
            return message;
        } else {
            return message;
        }
    }
