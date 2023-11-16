var colorPreset = [],
    settings = {
        genStreamerList: [""],
        genChatDirection: "up",
        genSpacing: 0, // In px
        genFilterUser: [], // Kleinbuchstaben!
        genFilterMsg: [],
        genMaxMessages: 15,
        cbxBackground: [],
        cbxBorder: {
            top: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            bottom: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            left: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            right: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            }
        },
        cbxBorderRadius: {
            tl: 0, // In px
            tr: 0, // In px
            bl: 0, // In px
            br: 0  // In px
        },
        cbxShadow: [],
        cbxSpacing: {
            inner: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0, // In px
            },
            outer: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0, // In px
            }
        },
        cbxSizing: "stretch",
        usnBackground: [],
        usnBorder: {
            top: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            bottom: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            left: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            right: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            }
        },
        usnBorderRadius: {
            tl: 0, // In px
            tr: 0, // In px
            bl: 0, // In px
            br: 0  // In px
        },
        usnShadow: [],
        usnSpacing: {
            inner: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0 // In px
            },
            outer: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0 // In px
            }
        },
        usnSizing: "flex-end",
        usnFontFamily: "Arial",
        usnFontColor: {
            type: "custom",
            color: "#ffffff",
            opacity: 255 // In Hex
        },
        usnFontSize: 14, // In px
        usnFontWeight: 700, // In 100 steps
        usnFontItalic: false,
        usnFontLines: {
            upperLine: false,
            crossLine: false,
            underLine: false
        },
        usnFontHeight: {
            auto: true,
            height: 16 // In px
        },
        usnFontShadow: [],
        usnFontSpacing: 0, // In px
        usnFontAlign: "right",
        usnContent: "{usn}",
        msgBackground: [],
        msgBorder: {
            top: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            bottom: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            left: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            },
            right: {
                type: "none",
                width: 1, // In px
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 255 // In Hex
                }
            }
        },
        msgBorderRadius: {
            tl: 0, // In px
            tr: 0, // In px
            bl: 0, // In px
            br: 0  // In px
        },
        msgShadow: [],
        msgSpacing: {
            inner: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0 // In px
            },
            outer: {
                top: 0, // In px
                bottom: 0, // In px
                left: 0, // In px
                right: 0 // In px
            }
        },
        msgSizing: "flex-end",
        msgFontFamily: "Arial",
        msgFontColor: {
            type: "custom",
            color: "#ffffff",
            opacity: 255 // In Hex
        },
        msgFontSize: 14, // In px
        msgFontWeight: 400, // In 100 steps
        msgFontCursiv: false,
        msgFontLines: {
            upperLine: false,
            crossLine: false,
            underLine: false
        },
        msgFontHeight: {
            auto: true,
            height: 16 // In px
        },
        msgFontShadow: [],
        msgFontSpacing: 0, // In px
        msgFontAlign: "right",
        msgContent: "{msg}",
        msgEmotes: {
            auto: true,
            height: 24, // In px
            linePos: "middle" // top/middle/bottom
        }
    };