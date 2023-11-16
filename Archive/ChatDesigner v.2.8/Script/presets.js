var presets = [
    {
        name: "Wave",
        sets: [
            {
                colorName: "Colorful",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#3f5df3',
                                opacity: 255,
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Background 4",
                        rotate: 90,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffff00',
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffff00',
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 100,
                        },
                        height: {
                            percent: 100,
                            px: 0
                        }
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#3f5df3',
                                opacity: 255,
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
                        vip: {
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Background 4",
                        rotate: 90,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffff00',
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#6c0094',
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 100,
                        },
                        height: {
                            percent: 100,
                            px: 0
                        }
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#3f5df3',
                                opacity: 255,
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
                        mod: {
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Background 4",
                        rotate: 90,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffff00',
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ff0000',
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 100,
                        },
                        height: {
                            percent: 100,
                            px: 0
                        }
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#3f5df3',
                                opacity: 255,
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                                x: 0,
                                y: 2,
                                blur: 5,
                                expand: 0,
                                inset: false,
                                color: {
                                    type: "custom",
                                    color: "#000000",
                                    opacity: 192
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                            value: [{
                        type: "radial",
                        name: "Circle Bottom Right",
                        size: "farthest-side",
                        x: 0,
                        y: 0,
                        colors: [
                            {
                            position: 100,
                            opacity: 0,
                            count: 1
                        }, {
                            position: 90,
                            opacity: 255,
                            count: 0
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: -10
                        },
                        posY: {
                            percent: 100,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "radial",
                        name: "Circle Top Right",
                        size: "farthest-side",
                        x: 100,
                        y: 100,
                        colors: [
                            {
                            position: 90,
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "solid",
                        name: "Smaller Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -10,
                        },
                        height: {
                            percent: 100,
                            px: -10
                        }
                    }, {
                        type: "solid",
                        name: "Big Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -20,
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
                                        right: -10, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 25, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Gold coated",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#c8c800',
                                opacity: 255,
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                                x: 0,
                                y: 2,
                                blur: 5,
                                expand: 0,
                                inset: false,
                                color: {
                                    type: "custom",
                                    color: "#000000",
                                    opacity: 192
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                            value: [{
                        type: "radial",
                        name: "Circle Bottom Right",
                        size: "farthest-side",
                        x: 0,
                        y: 0,
                        colors: [
                            {
                            position: 100,
                            opacity: 0,
                            count: 1
                        }, {
                            position: 90,
                            opacity: 255,
                            count: 0
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: -10
                        },
                        posY: {
                            percent: 100,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "radial",
                        name: "Circle Top Right",
                        size: "farthest-side",
                        x: 100,
                        y: 100,
                        colors: [
                            {
                            position: 90,
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "solid",
                        name: "Smaller Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -10,
                        },
                        height: {
                            percent: 100,
                            px: -10
                        }
                    }, {
                        type: "solid",
                        name: "Big Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -20,
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
                                        right: -10, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 25, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Dark grey",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#000000',
                                opacity: 255,
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                                x: 0,
                                y: 2,
                                blur: 5,
                                expand: 0,
                                inset: false,
                                color: {
                                    type: "custom",
                                    color: "#000000",
                                    opacity: 192
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                            value: [{
                        type: "radial",
                        name: "Circle Bottom Right",
                        size: "farthest-side",
                        x: 0,
                        y: 0,
                        colors: [
                            {
                            position: 100,
                            opacity: 0,
                            count: 1
                        }, {
                            position: 90,
                            opacity: 255,
                            count: 0
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: -10
                        },
                        posY: {
                            percent: 100,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "radial",
                        name: "Circle Top Right",
                        size: "farthest-side",
                        x: 100,
                        y: 100,
                        colors: [
                            {
                            position: 90,
                            opacity: 0,
                            count: 0
                        }, {
                            position: 100,
                            opacity: 255,
                            count: 1
                        }
                        ],
                        posX: {
                            percent: 100,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 0,
                            px: 10,
                        },
                        height: {
                            percent: 0,
                            px: 10
                        }
                    }, {
                        type: "solid",
                        name: "Smaller Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 0,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -10,
                        },
                        height: {
                            percent: 100,
                            px: -10
                        }
                    }, {
                        type: "solid",
                        name: "Big Area",
                        colors: [
                            {
                                position: 0,
                                opacity: 255,
                                count: 0
                            }
                        ],
                        posX: {
                            percent: 0,
                            px: 0
                        },
                        posY: {
                            percent: 50,
                            px: 0
                        },
                        width: {
                            percent: 100,
                            px: -20,
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
                                        right: -10, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 25, // In px
                                    }
                                },
                                sizingH: "flex-end",
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
                            x: 0,
                            y: 1,
                            blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }
        ]
    }, {
        name: "Block style",
        sets: [
            {
                colorName: "Happy colors",
                set: {
                    genStreamerList: [""],
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "solid",
                        name: "Twitch Color",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#c81e62',
                                opacity: 255,
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                x: 0,
                y: 2,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 192
                }
                }, {
                x: 4,
                y: 4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 64
                }
                }, {
                x: -4,
                y: -4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 64
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
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
                                sizingH: "stretch",
                                sizingV: "stretch"
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
                                hAlign: "center",
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
                                hAlign: "center",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                            value: [{
                        type: "linear",
                        name: "Darken Message",
                        rotate: 90,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                                sizingH: "stretch",
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
                                x: 0,
                                y: 1,
                                blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Bright dream",
                set: {
                    genStreamerList: [""],
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Color Gradient",
                        rotate: 30,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#14f068',
                            opacity: 255,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#1da4e7',
                            opacity: 255,
                            count: 1
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                x: 0,
                y: 2,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 192
                }
                }, {
                x: 4,
                y: 4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 64
                }
                }, {
                x: -4,
                y: -4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 64
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
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
                                sizingH: "stretch",
                                sizingV: "stretch"
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
                                hAlign: "center",
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
                                hAlign: "center",
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
                x: 0,
                y: 1,
                blur: 3,
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
                            value: [{
                        type: "linear",
                        name: "Darken Message",
                        rotate: 90,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                                sizingH: "stretch",
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
                x: 0,
                y: 1,
                blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Rose red",
                set: {
                    genStreamerList: [""],
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
                            value: [{
                        type: "radial",
                        name: "Light at the top",
                        size: "farthest-corner",
                        x: 50,
                        y: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Darken Bottom",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
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
                    }, {
                        type: "linear",
                        name: "Color Gradient",
                        rotate: 30,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#f01414',
                            opacity: 255,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#e71d75',
                            opacity: 255,
                            count: 1
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
                                tl: 10, // In px
                                tr: 10, // In px
                                bl: 10, // In px
                                br: 10  // In px
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
                            value: [{
                x: 0,
                y: 2,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 192
                }
                }, {
                x: 4,
                y: 4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 64
                }
                }, {
                x: -4,
                y: -4,
                blur: 4,
                expand: 0,
                inset: true,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 64
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
                    cbxPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
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
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
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
                                sizingH: "stretch",
                                sizingV: "stretch"
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
                                hAlign: "center",
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
                                hAlign: "center",
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
                x: 0,
                y: 1,
                blur: 3,
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
                            value: [{
                        type: "linear",
                        name: "Darken Message",
                        rotate: 90,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 96,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                                sizingH: "stretch",
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
                x: 0,
                y: 1,
                blur: 3,
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
                    othHyphens: {
                        activated: true,
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
                }
            }
        ]
    }, {
        name: "Pop style",
        sets: [
            {
                colorName: "Colored news",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
                                layoutRowSizing: "message"
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
                            value: [{
                        type: "linear",
                        name: "Background 2",
                        rotate: 0,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                    }, {
                        type: "solid",
                        name: "Background 3",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#000000',
                                opacity: 80,
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
                    }, {
                        type: "solid",
                        name: "Background 1",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#ffffff',
                                opacity: 255,
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                x: 0,
                y: 3,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    usnPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 0, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 0, // In px
                                        bottom: 45, // In px
                                        left: 5, // In px
                                        right: 5, // In px
                                    }
                                },
                                sizingH: "flex-end",
                                sizingV: "flex-end"
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
                                sizingH: "stretch",
                                sizingV: "stretch"
                            },
                            active: false
                        }
                    },
                    usnFont: {
                        user: {
                            value: {
                                family: "Impact",
                                size: 20,
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
                                hAlign: "center",
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
                                hAlign: "center",
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
                x: 0,
                y: 18,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 128
                }
                }, {
                x: 0,
                y: 36,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 64
                }
                }, {
                x: 0,
                y: 54,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 32
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
                            value: [{
                        type: "linear",
                        name: "Background 2",
                        rotate: 0,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#ffffff',
                            opacity: 128,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
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
                    }, {
                        type: "solid",
                        name: "Background 3",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#000000',
                                opacity: 80,
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
                    }, {
                        type: "solid",
                        name: "Background 1",
                        colors: [
                            {
                                position: 0,
                                type: 'twitch',
                                color: '#ffffff',
                                opacity: 255,
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                x: 0,
                y: 3,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    msgPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
                                sizingV: "flex-end"
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
                x: 0,
                y: 0,
                blur: 5,
                color: {
                    type: "custom",
                    color: "#ffffff",
                    opacity: 128
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Aged paper",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
                                layoutRowSizing: "message"
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
                            value: [{
                        type: "linear",
                        name: "Background 2",
                        rotate: 0,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
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
                    }, {
                        type: "solid",
                        name: "Background 1",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#5cff95',
                                opacity: 255,
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                x: 0,
                y: 3,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    usnPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 0, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 0, // In px
                                        bottom: 45, // In px
                                        left: 5, // In px
                                        right: 5, // In px
                                    }
                                },
                                sizingH: "flex-end",
                                sizingV: "flex-end"
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
                                sizingH: "stretch",
                                sizingV: "stretch"
                            },
                            active: false
                        }
                    },
                    usnFont: {
                        user: {
                            value: {
                                family: "Impact",
                                size: 20,
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
                                hAlign: "center",
                                italic: false,
                                color: {
                                    type: "custom",
                                    color: "#000000",
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
                                hAlign: "center",
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
                x: 0,
                y: 18,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
                }
                }, {
                x: 0,
                y: 36,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 64
                }
                }, {
                x: 0,
                y: 54,
                blur: 0,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 32
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
                            value: [{
                        type: "linear",
                        name: "Background 2",
                        rotate: 0,
                        colors: [
                            {
                            position: 100,
                            type: 'custom',
                            color: '#000000',
                            opacity: 0,
                            count: 1
                        }, {
                            position: 0,
                            type: 'custom',
                            color: '#000000',
                            opacity: 128,
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
                    }, {
                        type: "solid",
                        name: "Background 1",
                        colors: [
                            {
                                position: 0,
                                type: 'custom',
                                color: '#5cff95',
                                opacity: 255,
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                x: 0,
                y: 3,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    msgPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
                                sizingV: "flex-end"
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
                                    color: "#000000",
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
                x: 0,
                y: 0,
                blur: 5,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    othHyphens: {
                        activated: true,
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
                }
            }, {
                colorName: "Devils news",
                set: {
                    genStreamerList: [""],
                    genChatDirection: "up",
                    genFilterUser: [], // Kleinbuchstaben!
                    genFilterMsg: [],
                    genMaxMessages: 15,
                    cbxLayout: {
                        user: {
                            value: {
                                type: "row-reverse",
                                layoutRowSizing: "message"
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
                            value: [{
                        type: "linear",
                        name: "Background 3",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#610000',
                            opacity: 255,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#742f2f',
                            opacity: 255,
                            count: 1
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                                x: 0,
                                y: 3,
                                blur: 5,
                                expand: 0,
                                inset: false,
                                color: {
                                    type: "custom",
                                    color: "#000000",
                                    opacity: 128
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
                    usnPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 0, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 0, // In px
                                        bottom: 45, // In px
                                        left: 5, // In px
                                        right: 5, // In px
                                    }
                                },
                                sizingH: "flex-end",
                                sizingV: "flex-end"
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
                                sizingH: "stretch",
                                sizingV: "stretch"
                            },
                            active: false
                        }
                    },
                    usnFont: {
                        user: {
                            value: {
                                family: "Impact",
                                size: 20,
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
                                hAlign: "center",
                                italic: false,
                                color: {
                                    type: "twitch",
                                    color: "#000000",
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
                                hAlign: "center",
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
                                x: 0,
                                y: 18,
                                blur: 0,
                                color: {
                                    type: "twitch",
                                    color: "#000000",
                                    opacity: 128
                                }
                            }, {
                                x: 0,
                                y: 36,
                                blur: 0,
                                color: {
                                    type: "twitch",
                                    color: "#000000",
                                    opacity: 64
                                }
                            }, {
                                x: 0,
                                y: 54,
                                blur: 0,
                                color: {
                                    type: "twitch",
                                    color: "#000000",
                                    opacity: 32
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
                            value: [{
                        type: "linear",
                        name: "Background 3",
                        rotate: 0,
                        colors: [
                            {
                            position: 0,
                            type: 'custom',
                            color: '#610000',
                            opacity: 255,
                            count: 0
                        }, {
                            position: 100,
                            type: 'custom',
                            color: '#742f2f',
                            opacity: 255,
                            count: 1
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
                                tl: 4, // In px
                                tr: 4, // In px
                                bl: 4, // In px
                                br: 4  // In px
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
                            value: [{
                x: 0,
                y: 3,
                blur: 5,
                expand: 0,
                inset: false,
                color: {
                    type: "custom",
                    color: "#000000",
                    opacity: 128
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
                    msgPosition: {
                        user: {
                            value: {
                                spacing: {
                                    outer: {
                                        top: 0, // In px
                                        bottom: 15, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    },
                                    inner: {
                                        top: 10, // In px
                                        bottom: 10, // In px
                                        left: 15, // In px
                                        right: 15, // In px
                                    }
                                },
                                sizingH: "stretch",
                                sizingV: "flex-end"
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
                                x: 0,
                                y: 0,
                                blur: 5,
                                color: {
                                    type: "custom",
                                    color: "#ffffff",
                                    opacity: 128
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
                    othHyphens: {
                        activated: true,
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
                }
            }
        ]
    }
]