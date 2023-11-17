
    var colorPreset = [],
        settings = {
            genStreamerList: ["dapandaraw"],
            genChatDirection: "up",
            genFilterUser: [], // Kleinbuchstaben!
            genFilterMsg: [],
            genMaxMessages: 15,
            cbxLayout: {
                user: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: true
                },
    
                sub: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
    
                vip: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
    
                mod: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
            },
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
            cbxBackgroundMask: {
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
                            width: 0, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 0 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 0, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 0 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 0, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 0 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 0, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 0 // In Hex
                            }
                        },
                        tl: 0, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 0  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                            outer: {
                                top: 0, // In px
                                bottom: 10, // In px
                                left: 10, // In px
                                right: 10, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizing: "flex-start"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
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
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
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
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
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
            usnBackgroundMask: {
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 5, // In px
                                left: 0, // In px
                                right: 5, // In px
                            }
                        },
                        sizingH: "flex-start",
                        sizingV: "center"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                }
            },
            usnFont: {
                user: {
                    value: {
                        family: "Dosis",
                        size: 24,
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
                        hAlign: "left",
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
                        hAlign: "right",
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
                        hAlign: "right",
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
                        hAlign: "right",
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
                    value: [{
        x: 3,
        y: 3,
        blur: 4,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
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
                    value: "{usn} ⭐",
                    active: true
                },
                vip: {
                    value: "{usn} 💎",
                    active: true
                },
                mod: {
                    value: "{usn} ⚔️",
                    active: true
                }
            },
            msgBackground: {
                user: {
                    value: [{
                type: "linear",
                name: "Darken Message",
                rotate: 90,
                colors: [
                    {
                    position: 100,
                    type: 'custom',
                    color: '#c01d34',
                    opacity: 130,
                    count: 1
                }, {
                    position: 0,
                    type: 'custom',
                    color: '#c0633e',
                    opacity: 130,
                    count: 0
                }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
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
            msgBackgroundMask: {
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
                        tl: 12, // In px
                        tr: 12, // In px
                        bl: 12, // In px
                        br: 12  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                        br: 0  // In px
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
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 10, // In px
                                bottom: 10, // In px
                                left: 15, // In px
                                right: 15, // In px
                            }
                        },
                        sizingH: "flex-start",
                        sizingV: "stretch"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                }
            },
            msgFont: {
                user: {
                    value: {
                        family: "Dosis",
                        size: 24,
                        weight: 400,
                        height: {
                            auto: true,
                            height: 24 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "left",
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
                        hAlign: "right",
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
                        hAlign: "right",
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
                        hAlign: "right",
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
                    value: [{
        x: 3,
        y: 3,
        blur: 4,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
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
                        auto: false,
                        height: 25, // In px
                        onlyheight: 50, // In px
                        linePos: "bottom" // top/middle/bottom
                    },
                    active: true
                },
                sub: {
                    value: {
                        auto: true,
                        height: 25, // In px
                        onlyheight: 50, // In px
                        linePos: "bottom" // top/middle/bottom
                    },
                    active: false
                },
                vip: {
                    value: {
                        auto: true,
                        height: 25, // In px
                        onlyheight: 50, // In px
                        linePos: "bottom" // top/middle/bottom
                    },
                    active: false
                },
                mod: {
                    value: {
                        auto: true,
                        height: 25, // In px
                        onlyheight: 50, // In px
                        linePos: "bottom" // top/middle/bottom
                    },
                    active: false
                }
            },
            othBadges: {
                user: {
                    value: {
                        gap: 2, // In px
                        size: {
                            height: 20, // In px
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
            othHyphens: {
                active: true,
                lang: "en"
            },
            anmTiming: {
                user: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: true
                },
                sub: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: false
                },
                vip: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: false
                },
                mod: {
                    value: {
                        delay: 0,
                        appearing: 500,
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
                            active: true,
                            value: -20
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
                            active: true,
                            value: 0
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
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
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                }
            }
        };
    