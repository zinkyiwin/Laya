export function hoverEffect(btn: Laya.Sprite | Laya.Box) {
    btn.on(Laya.Event.MOUSE_OVER, () => {
        btn.alpha = 0.5;
    })
    btn.on(Laya.Event.MOUSE_OUT, () => {
        btn.alpha = 1;
    })
}

export let roadMapColor ={
    one : "#737373",
    two : "#0a5826",
    three : "#dcad3b",
    four : "#ab3635",
}