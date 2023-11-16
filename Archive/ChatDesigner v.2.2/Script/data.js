var colorPreset = [],
    settings = {
        genStreamerList: [""],
        genChatDirection: "up",
        genFilterUser: [], // Kleinbuchstaben!
        genFilterMsg: [],
        genMaxMessages: 15,
        cbxBackground: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        cbxBorder: {
            user: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: true
            },
            sub: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            vip: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            mod: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            }
        },
        cbxShadow: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        cbxPosition: {
            user: {
                value: {
                    spacing: {
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
                    sizing: "stretch"
                },
                active: true
            },
            sub: {
                value: {
                    spacing: {
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
                    sizing: "stretch"
                },
                active: false
            },
            vip: {
                value: {
                    spacing: {
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
                    sizing: "stretch"
                },
                active: false
            },
            mod: {
                value: {
                    spacing: {
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
                    sizing: "stretch"
                },
                active: false
            }
        },
        usnBackground: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        usnBorder: {
            user: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: true
            },
            sub: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            vip: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            mod: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            }
        },
        usnShadow: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        usnPosition: {
            user: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: true
            },
            sub: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            },
            vip: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            },
            mod: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            }
        },
        usnFont: {
            user: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 700,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "twitch",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: true
            },
            sub: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 700,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "twitch",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            },
            vip: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 700,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "twitch",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            },
            mod: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 700,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "twitch",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            }
        },
        usnFontShadow: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        usnContent: {
            user: {
                value: "{usn}",
                active: true
            },
            sub: {
                value: "{usn}",
                active: false
            },
            vip: {
                value: "{usn}",
                active: false
            },
            mod: {
                value: "{usn}",
                active: false
            }
        },
        msgBackground: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        msgBorder: {
            user: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: true
            },
            sub: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            vip: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            },
            mod: {
                value: {
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
                    },
                    tl: 0, // In px
                    tr: 0, // In px
                    bl: 0, // In px
                    br: 0 // In px
                },
                active: false
            }
        },
        msgShadow: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        msgPosition: {
            user: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: true
            },
            sub: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            },
            vip: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            },
            mod: {
                value: {
                    spacing: {
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
                    sizing: "flex-end"
                },
                active: false
            }
        },
        msgFont: {
            user: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 400,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "custom",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: true
            },
            sub: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 400,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "custom",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            },
            vip: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 400,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "custom",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            },
            mod: {
                value: {
                    family: "Arial",
                    size: 14,
                    weight: 400,
                    height: {
                        auto: true,
                        height: 16 // In px
                    },
                    spacing: 0, // In px
                    lines: {
                        upperLine: false,
                        crossLine: false,
                        underLine: false
                    },
                    align: "right",
                    italic: false,
                    color: {
                        type: "custom",
                        color: "#ffffff",
                        opacity: 255 // In Hex
                    },
                },
                active: false
            }
        },
        msgFontShadow: {
            user: {
                value: [],
                active: true
            },
            sub: {
                value: [],
                active: false
            },
            vip: {
                value: [],
                active: false
            },
            mod: {
                value: [],
                active: false
            }
        },
        msgContent: {
            user: {
                value: "{msg}",
                active: true
            },
            sub: {
                value: "{msg}",
                active: false
            },
            vip: {
                value: "{msg}",
                active: false
            },
            mod: {
                value: "{msg}",
                active: false
            }
        },
        othEmotes: {
            user: {
                value: {
                    auto: true,
                    height: 24, // In px
                    linePos: "middle" // top/middle/bottom
                },
                active: true
            },
            sub: {
                value: {
                    auto: true,
                    height: 24, // In px
                    linePos: "middle" // top/middle/bottom
                },
                active: false
            },
            vip: {
                value: {
                    auto: true,
                    height: 24, // In px
                    linePos: "middle" // top/middle/bottom
                },
                active: false
            },
            mod: {
                value: {
                    auto: true,
                    height: 24, // In px
                    linePos: "middle" // top/middle/bottom
                },
                active: false
            }
        },
        othBadges: {
            user: {
                value: {
                    gap: 2, // In px
                    size: {
                        height: 16, // In px
                        auto: true
                    }
                },
                active: true
            },
            sub: {
                value: {
                    gap: 2, // In px
                    size: {
                        height: 16, // In px
                        auto: true
                    }
                },
                active: false
            },
            vip: {
                value: {
                    gap: 2, // In px
                    size: {
                        height: 16, // In px
                        auto: true
                    }
                },
                active: false
            },
            mod: {
                value: {
                    gap: 2, // In px
                    size: {
                        height: 16, // In px
                        auto: true
                    }
                },
                active: false
            }
        },
        anmTiming: {
            user: {
                value: {
                    delay: 0,
                    appearing: 200,
                    duration: "infinite",
                    vanishing: 200
                },
                active: true
            },
            sub: {
                value: {
                    delay: 0,
                    appearing: 200,
                    duration: "infinite",
                    vanishing: 200
                },
                active: false
            },
            vip: {
                value: {
                    delay: 0,
                    appearing: 200,
                    duration: "infinite",
                    vanishing: 200
                },
                active: false
            },
            mod: {
                value: {
                    delay: 0,
                    appearing: 200,
                    duration: "infinite",
                    vanishing: 200
                },
                active: false
            }
        },
        anmShow: {
            user: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: true
            },
            sub: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            },
            vip: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            },
            mod: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            }
        },
        anmHide: {
            user: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: true
            },
            sub: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            },
            vip: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            },
            mod: {
                value: [
                    {
                        type: "scale",
                        active: false,
                        value: 1
                    }, {
                        type: "moveX",
                        active: false,
                        value: 0
                    }, {
                        type: "moveY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateX",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateY",
                        active: false,
                        value: 0
                    }, {
                        type: "rotateZ",
                        active: false,
                        value: 0
                    }, {
                        type: "opacity",
                        active: false,
                        value: 100
                    }
                ],
                active: false
            }
        }
    };