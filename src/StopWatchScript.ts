const { regClass, property } = Laya;

@regClass()
export class StopWatchScript extends Laya.Script {
    // declare owner : Laya.Box;

    baseSprite: Laya.Sprite;
    time: Laya.Box;
    insideSprite: Laya.Sprite;
    timeMask: Laya.Sprite;
    timeLabel: Laya.Label;
    cdUpdateTime: number;
    startRotation: number;
    CDTime: number;
    cdOffset: number;
    color: string;
    endAngle: number = 0;
    newCircle: Laya.Sprite;

    waitTime: Laya.Box;
    endTime: Laya.Box;


    constructor() {
        super();
    }

    onEnable(): void {

    }

    wait(): void {
        this.waitTime.visible = true;
        this.time.visible = false;
        this.endTime.visible = false;
    }

    end(): void {
        this.waitTime.visible = false;
        this.time.visible = false;
        this.endTime.visible = true;
    }

    initTime(): void {
        this.waitTime.visible = false;
        this.endTime.visible = false;
        this.time.visible = true;

        this.cdUpdateTime = 100;
        this.startRotation = 270;

        this.reset(10000);
        this.countDown();
    }

    initCountDown(): void {
        this.baseSprite = this.owner.getChildByName("baseSprite") as Laya.Sprite;
        this.time = this.baseSprite.getChildByName("time") as Laya.Box;
        this.waitTime = this.baseSprite.getChildByName("waitTime") as Laya.Box;
        this.endTime = this.baseSprite.getChildByName("endTime") as Laya.Box;

        this.insideSprite = this.time.getChildByName("insideSprite") as Laya.Sprite;
        this.timeMask = this.time.getChildByName("timeMask") as Laya.Sprite;
        this.timeLabel = this.time.getChildByName("timeLabel") as Laya.Label;
        this.newCircle = this.time.getChildByName("newCircle") as Laya.Sprite;
    }

    drawBaseCircle(color: string) {

        this.insideSprite.graphics.clear(true);
        // this.endAngle = this.startRotation - 340  + 15
        // if (this.endAngle > 270) {
        //     this.endAngle = 270
        // }
        // this.insideSprite.graphics.drawPie(100, 100, 97, this.startRotation, this.endAngle,`${color}80`);

        this.timeMask.graphics.clear(true);
        this.timeMask.graphics.drawPie(98, 98, 98, this.startRotation, 270, `${color}50`);
    }

    reset(fireCD: number) {
        this.timeLabel.text = "" + fireCD / 1000;
        this.cdUpdateTime = 100;
        this.CDTime = fireCD;

        this.cdOffset = 360 * this.cdUpdateTime / this.CDTime;
        this.startRotation = 270;

        this.drawBaseCircle("#2bb3b3");
    }

    countDown() {
        Laya.timer.loop(this.cdUpdateTime, this, this.updateTime);
    }

    updateTime() {
        this.startRotation += this.cdOffset;

        if (this.timeLabel !== null) {
            this.timeLabel.text = "" + Math.ceil(this.CDTime / 1000 * (630 - this.startRotation) / 360);
        }

        if (this.startRotation > 630) {
            this.startRotation = 270;
            this.stopRound(false);
        }

        if (this.startRotation >= (0 + 270) && this.startRotation <= (72 + 270)) {
            this.drawBaseCircle("#2bb3b3");
        }
        if (this.startRotation >= (73 + 270) && this.startRotation <= (144 + 270)) {
            this.drawBaseCircle("#3e8db5");
        }
        if (this.startRotation >= (145 + 270) && this.startRotation <= (216 + 270)) {
            this.drawBaseCircle("#a268e3");
        }
        if (this.startRotation >= (217 + 270) && this.startRotation <= (288 + 270)) {
            this.drawBaseCircle("#d465e0");
        }
        if (this.startRotation >= (289 + 270)) {
            this.drawBaseCircle("#d13d3c");
            this.endNewCircle("#d13d3c");
        }
    }

    stopRound(manual: boolean) {
        Laya.timer.clear(this, this.updateTime);
        this.insideSprite.graphics.clear(true);
        this.timeMask.graphics.clear(true);
        this.newCircle.graphics.clear(true);
        this.timeLabel.text = "";
        if (manual === false) {
            Laya.stage.event(Laya.Event.MESSAGE, { type: "timeComplete" })
        }
    }

    endNewCircle(color: string) {
        this.newCircle.graphics.clear();
        this.newCircle.graphics.drawPie(100, 100, 98, 210, 250, `${color}80`);
        this.time.addChild(this.newCircle);
    }
}


/**
 * 
 * [
 * {
 * name:"2Nim3",
 * coins:[{
 * amount:10,
 * total: 1
 * },
 * {
 * amount:20,
 * total: 2
 * }
 * ]
 * }
 * ]
 */