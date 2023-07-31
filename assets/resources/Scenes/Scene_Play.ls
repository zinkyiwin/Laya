{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$comp": [
    {
      "_$type": "940a3cc9-1055-4e73-ba7e-fc4dc0b9aac8",
      "scriptPath": "../src/ScenePlayScript.ts",
      "coinBetPrefab": {
        "_$uuid": "a8d7703d-2d60-4a3e-8da2-6007a6480006",
        "_$type": "Prefab"
      },
      "coinConfirmPrefab": {
        "_$uuid": "d4dbb106-5b34-4704-b990-e5a75d0e4099",
        "_$type": "Prefab"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "mu9h7b7h",
      "_$type": "Box",
      "name": "ngaContainer",
      "x": 1485,
      "y": 3,
      "width": 510,
      "height": 1160,
      "mouseEnabled": true,
      "bgColor": "rgba(48, 163, 140, 1)",
      "_$child": [
        {
          "_$id": "chnofav6",
          "_$type": "List",
          "name": "ngaList",
          "x": 4,
          "y": 3,
          "width": 502,
          "height": 1083,
          "mouseEnabled": true,
          "itemTemplate": {
            "_$ref": "ru3lop89",
            "_$tmpl": "itemRender"
          },
          "repeatX": 2,
          "repeatY": 6,
          "spaceX": 2,
          "spaceY": 2,
          "_$child": [
            {
              "_$id": "ru3lop89",
              "_$type": "Box",
              "name": "ngaBox",
              "width": 250,
              "height": 179,
              "mouseEnabled": true,
              "_filters": [],
              "bgColor": "rgba(14, 69, 56, 1)",
              "_$child": [
                {
                  "_$id": "g5t7q8tg",
                  "_$type": "Label",
                  "name": "ngaLabel",
                  "y": 81,
                  "width": 250,
                  "height": 28,
                  "text": "",
                  "fontSize": 30,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 0,
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "xhd3ksrb",
          "_$type": "Label",
          "name": "Label",
          "x": 2,
          "y": 1087,
          "width": 503,
          "height": 68,
          "text": "1:0.475",
          "fontSize": 30,
          "color": "rgba(210, 219, 218, 1)",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "bgColor": "rgba(14, 69, 56, 1)",
          "borderColor": "rgba(14, 156, 134, 1)",
          "leading": 2,
          "padding": "0,0,0,0"
        }
      ]
    },
    {
      "_$id": "9p72xxmv",
      "_$prefab": "1ee58fde-d799-46eb-ac01-4b862663d1f0",
      "name": "roadMap",
      "active": true,
      "x": 1060,
      "y": 0,
      "visible": true
    },
    {
      "_$id": "gr1t1h1i",
      "_$prefab": "af645849-881a-44b0-8725-b8e757beef70",
      "name": "stopwatch",
      "active": true,
      "x": 314,
      "y": 8,
      "visible": true
    },
    {
      "_$id": "vnou4slb",
      "_$type": "Box",
      "name": "Buttons",
      "x": 2,
      "y": 601,
      "width": 1480,
      "height": 560,
      "mouseEnabled": true,
      "bgColor": "rgba(14, 69, 56, 1)",
      "_$child": [
        {
          "_$id": "8loy3yi0",
          "_$type": "Image",
          "name": "bgColor",
          "x": -4,
          "y": 1,
          "width": 1480,
          "height": 560,
          "skin": "res://048560bf-c798-4a40-8cdc-ac7854e807c3",
          "color": "#080c0c"
        },
        {
          "_$id": "ixccd7f8",
          "_$type": "Box",
          "name": "btnSection",
          "width": 1480,
          "height": 560,
          "_$child": [
            {
              "_$id": "z7h0ivxy",
              "_$prefab": "a646ddd3-0d52-4a51-910c-c46f66f7f1da",
              "name": "fanGroup",
              "active": true,
              "x": 520,
              "y": 92,
              "visible": true,
              "_$child": [
                {
                  "_$override": "am49md12",
                  "name": "titleLab",
                  "text": "1Fan",
                  "x": 50,
                  "width": 100
                },
                {
                  "_$id": "oes1kujm",
                  "_$parent": "hatxzr5c",
                  "_$type": "Label",
                  "name": "ratioLab",
                  "x": 50,
                  "y": 135,
                  "width": 100,
                  "height": 20,
                  "text": "1:2.85",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "align": "center",
                  "leading": 2,
                  "padding": "0,0,0,0"
                },
                {
                  "_$override": "ex7140yy",
                  "x": 150,
                  "y": 48
                },
                {
                  "_$id": "kykupe5e",
                  "_$parent": "a1h2pc0u",
                  "_$type": "Label",
                  "name": "ratioLab",
                  "x": 150,
                  "y": 70,
                  "width": 100,
                  "height": 20,
                  "text": "1:2.85",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "align": "center",
                  "leading": 2,
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "1ahv7yz3",
                  "_$parent": "u2fbfrkw",
                  "_$type": "Label",
                  "name": "ratioLab",
                  "x": 50,
                  "y": 135,
                  "width": 100,
                  "height": 20,
                  "text": "1:2.85",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "align": "center",
                  "leading": 2,
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "t3qebh68",
                  "_$parent": "iawzmcv4",
                  "_$type": "Label",
                  "name": "ratioLab",
                  "x": 150,
                  "y": 70,
                  "width": 100,
                  "height": 20,
                  "text": "1:2.85",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "align": "center",
                  "leading": 2,
                  "padding": "0,0,0,0"
                }
              ]
            },
            {
              "_$id": "yi8qfkh6",
              "_$prefab": "c0ca11a9-50c4-4d9c-b4fe-a27025a52cba",
              "name": "Num0",
              "active": true,
              "x": 381,
              "y": 92,
              "visible": true,
              "alpha": 1,
              "_$child": [
                {
                  "_$override": "hw5kwoei",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "v4u91ig2",
              "_$prefab": "c0ca11a9-50c4-4d9c-b4fe-a27025a52cba",
              "name": "Num1",
              "active": true,
              "x": 925,
              "y": 92,
              "visible": true,
              "_$child": [
                {
                  "_$override": "hw5kwoei",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "w51891s9",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton0",
              "active": true,
              "x": 381,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "k37t8nqw",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton1",
              "active": true,
              "x": 609,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "2wed0u04",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton2",
              "active": true,
              "x": 836,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "sz2qgigw",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton3",
              "active": true,
              "x": 1064,
              "y": 92,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "tru5273i",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton4",
              "active": true,
              "x": 1064,
              "y": 173,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "gntgzkyd",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton5",
              "active": true,
              "x": 1064,
              "y": 254,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "677nt7kc",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton6",
              "active": true,
              "x": 152,
              "y": 92,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "vdwyet8j",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton7",
              "active": true,
              "x": 152,
              "y": 173,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "dodk5upl",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton8",
              "active": true,
              "x": 152,
              "y": 254,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "itq9wpwa",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton9",
              "active": true,
              "x": 381,
              "y": 335,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "0mfdgmxw",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton10",
              "active": true,
              "x": 608,
              "y": 335,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "5lwqh87f",
              "_$prefab": "8cab761b-04ea-4168-8550-90f283a6f6ca",
              "name": "nimButton11",
              "active": true,
              "x": 835,
              "y": 335,
              "visible": true,
              "_$child": [
                {
                  "_$override": "1vmdn5or",
                  "text": ""
                }
              ]
            },
            {
              "_$id": "53hj6nqi",
              "_$prefab": "d1bea33d-a0bc-4c2b-9213-b3080b3b0d38",
              "name": "kwokPrefab0",
              "active": true,
              "x": 152,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "xhnlh1na",
                  "text": ""
                },
                {
                  "_$override": "lwp6cr7o",
                  "x": 8,
                  "y": 4,
                  "hitArea": {
                    "_$type": "HitArea",
                    "_unHitCmds": []
                  },
                  "visible": true
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "fedozxfm"
                  ],
                  "visible": true
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "qbzw1oib"
                  ],
                  "visible": true
                }
              ]
            },
            {
              "_$id": "xypbgid3",
              "_$prefab": "d1bea33d-a0bc-4c2b-9213-b3080b3b0d38",
              "name": "kwokPrefab1",
              "active": true,
              "x": 1064,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "xhnlh1na",
                  "text": ""
                },
                {
                  "_$override": "lwp6cr7o",
                  "y": 5,
                  "height": 38,
                  "x": 169
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "0nv7pgeb"
                  ],
                  "visible": true
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "qbzw1oib"
                  ],
                  "visible": true
                }
              ]
            },
            {
              "_$id": "uon1y333",
              "_$prefab": "d1bea33d-a0bc-4c2b-9213-b3080b3b0d38",
              "name": "kwokPrefab2",
              "active": true,
              "x": 1064,
              "y": 335,
              "visible": true,
              "_$child": [
                {
                  "_$override": "xhnlh1na",
                  "text": ""
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "0nv7pgeb"
                  ],
                  "visible": true
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "o5lv8h65"
                  ],
                  "visible": true
                }
              ]
            },
            {
              "_$id": "bu1f90tr",
              "_$prefab": "d1bea33d-a0bc-4c2b-9213-b3080b3b0d38",
              "name": "kwokPrefab3",
              "active": true,
              "x": 152,
              "y": 335,
              "visible": true,
              "_$child": [
                {
                  "_$override": "xhnlh1na",
                  "text": ""
                },
                {
                  "_$override": "lwp6cr7o",
                  "x": 6,
                  "y": 38
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "fedozxfm"
                  ],
                  "visible": true
                },
                {
                  "_$override": [
                    "lwp6cr7o",
                    "o5lv8h65"
                  ],
                  "visible": true
                }
              ]
            },
            {
              "_$id": "ktkcz161",
              "_$prefab": "5f244556-21c1-48c4-8b77-2e3ece2c5ca4",
              "name": "sshPrefab0",
              "active": true,
              "x": 1292,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "77jr3k5y",
                  "text": ""
                },
                {
                  "_$override": "8i0d8gtm",
                  "visible": true
                },
                {
                  "_$override": "imyk5wv2",
                  "visible": true
                }
              ]
            },
            {
              "_$id": "t0xe4yeo",
              "_$prefab": "5f244556-21c1-48c4-8b77-2e3ece2c5ca4",
              "name": "sshPrefab1",
              "active": true,
              "x": 1292,
              "y": 213,
              "visible": true,
              "_$child": [
                {
                  "_$override": "77jr3k5y",
                  "text": ""
                },
                {
                  "_$override": "8i0d8gtm",
                  "visible": true
                },
                {
                  "_$override": "2aexkhyy",
                  "visible": true
                }
              ]
            },
            {
              "_$id": "dq3bpoaw",
              "_$prefab": "5f244556-21c1-48c4-8b77-2e3ece2c5ca4",
              "name": "sshPrefab2",
              "active": true,
              "x": 9,
              "y": 11,
              "visible": true,
              "_$child": [
                {
                  "_$override": "77jr3k5y",
                  "text": ""
                },
                {
                  "_$override": "8i0d8gtm",
                  "visible": true
                },
                {
                  "_$override": "qvt7pqlh",
                  "visible": true
                }
              ]
            },
            {
              "_$id": "4di2qkaw",
              "_$prefab": "5f244556-21c1-48c4-8b77-2e3ece2c5ca4",
              "name": "sshPrefab3",
              "active": true,
              "x": 9,
              "y": 214,
              "visible": true,
              "_$child": [
                {
                  "_$override": "77jr3k5y",
                  "text": ""
                },
                {
                  "_$override": "8i0d8gtm",
                  "visible": true
                },
                {
                  "_$override": "p1jtvy42",
                  "visible": true
                }
              ]
            }
          ]
        },
        {
          "_$id": "9ljejzc2",
          "_$type": "Box",
          "name": "coinSection",
          "y": 486,
          "width": 1480,
          "height": 70,
          "mouseEnabled": true,
          "_$child": [
            {
              "_$id": "nkm5kbxm",
              "_$type": "Box",
              "name": "betChoice",
              "width": 900,
              "height": 70,
              "bgColor": "rgba(43, 42, 42, 1)"
            },
            {
              "_$id": "pid7rieo",
              "_$type": "Button",
              "name": "leftBtn",
              "x": 17,
              "y": 22,
              "width": 25,
              "height": 30,
              "mouseEnabled": true,
              "stateNum": 1,
              "skin": "res://c20ddc34-0372-4d73-96ba-52c97a1b0077",
              "sizeGrid": "0,0,0,0,0",
              "label": "",
              "labelSize": 20,
              "labelVAlign": "middle"
            },
            {
              "_$id": "8nvxmer9",
              "_$type": "List",
              "name": "coinList",
              "x": 56,
              "y": -45,
              "width": 660,
              "height": 110,
              "mouseEnabled": true,
              "bottom": 5,
              "itemTemplate": {
                "_$ref": "eei4n881",
                "_$tmpl": "itemRender"
              },
              "repeatX": 6,
              "repeatY": 1,
              "spaceX": 32,
              "_$child": [
                {
                  "_$id": "eei4n881",
                  "_$type": "Image",
                  "name": "coins",
                  "x": 10,
                  "y": 15,
                  "width": 80,
                  "height": 90,
                  "left": 10,
                  "bottom": 5,
                  "skin": "res://98b5a64c-7879-4d47-9b9a-11037957c7ac",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "fj7watxr",
                      "_$type": "Box",
                      "name": "coinSelectBox",
                      "x": -10,
                      "y": -10,
                      "width": 100,
                      "height": 100,
                      "left": -10,
                      "bottom": 0,
                      "_$child": [
                        {
                          "_$id": "86q09lfc",
                          "_$type": "Image",
                          "name": "coinSelectAni",
                          "x": 50.5,
                          "y": 52,
                          "width": 95,
                          "height": 100,
                          "anchorX": 0.5,
                          "anchorY": 0.5,
                          "bottom": -2,
                          "skin": "res://0ab9a80b-407a-4625-991c-eb244e1d99c3",
                          "color": "#ffffff",
                          "_$comp": [
                            {
                              "_$type": "Animator2D",
                              "controller": {
                                "_$uuid": "e8f39aba-c5a5-4a99-82b3-74b07c86af6c",
                                "_$type": "AnimationController2D"
                              },
                              "controllerLayers": []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "xbqfnu6x",
              "_$type": "Button",
              "name": "rightBtn",
              "x": 732,
              "y": 21,
              "width": 25,
              "height": 30,
              "mouseEnabled": true,
              "stateNum": 1,
              "skin": "res://b71c734f-ca1d-426f-b7ce-a0270a94c7fd",
              "sizeGrid": "0,0,0,0,0",
              "label": "",
              "labelSize": 20,
              "labelVAlign": "middle"
            },
            {
              "_$id": "5bxlsril",
              "_$type": "Image",
              "name": "chip",
              "x": 774,
              "y": -30,
              "width": 95,
              "height": 100,
              "bottom": 0,
              "skin": "res://6a5870ba-cc68-44d6-9c57-e3def38bd573",
              "color": "#ffffff"
            },
            {
              "_$id": "gnt6les4",
              "_$type": "Box",
              "name": "cancelBtn",
              "x": 902,
              "width": 190,
              "height": 70,
              "bgColor": "rgba(43, 42, 42, 1)",
              "_$child": [
                {
                  "_$id": "gck9ak57",
                  "_$type": "Image",
                  "name": "Image",
                  "x": 20,
                  "y": 18,
                  "width": 30,
                  "height": 35,
                  "skin": "res://a9822dce-ac22-4942-bbc6-f891ac827b1c",
                  "color": "#ffffff"
                },
                {
                  "_$id": "vcy3x4uk",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 54,
                  "y": 17,
                  "width": 117,
                  "height": 40,
                  "text": "Cancel",
                  "fontSize": 28,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2,
                  "padding": "0,0,0,0"
                }
              ]
            },
            {
              "_$id": "3yen5xwr",
              "_$type": "Box",
              "name": "repeatBtn",
              "x": 1094,
              "y": 1,
              "width": 190,
              "height": 70,
              "bgColor": "rgba(43, 42, 42, 1)",
              "_$child": [
                {
                  "_$id": "d97i9tj4",
                  "_$type": "Image",
                  "name": "Image",
                  "x": 20,
                  "y": 18,
                  "width": 30,
                  "height": 35,
                  "skin": "res://7f99d5cc-44c8-4442-8d3b-ed923915af42",
                  "color": "#ffffff"
                },
                {
                  "_$id": "qcbq57fa",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 54,
                  "y": 17,
                  "width": 117,
                  "height": 40,
                  "text": "Repeat",
                  "fontSize": 28,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2,
                  "padding": "0,0,0,0"
                }
              ]
            },
            {
              "_$id": "ov1zvryt",
              "_$type": "Box",
              "name": "confirmBtn",
              "x": 1286,
              "y": 2,
              "width": 190,
              "height": 70,
              "bgColor": "rgba(43, 42, 42, 1)",
              "_$child": [
                {
                  "_$id": "edjtyy6u",
                  "_$type": "Image",
                  "name": "Image",
                  "x": 20,
                  "y": 18,
                  "width": 30,
                  "height": 35,
                  "skin": "res://2bf14796-4164-49b5-86b0-5363c809f6a8",
                  "color": "#ffffff"
                },
                {
                  "_$id": "ho1cwkmv",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 54,
                  "y": 17,
                  "width": 117,
                  "height": 40,
                  "text": "Confirm",
                  "fontSize": 28,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2,
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}