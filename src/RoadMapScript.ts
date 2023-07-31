import { roadMapColor } from "./util/hover";

const { regClass, property } = Laya;

@regClass()
export class RoadMapScript extends Laya.Script {
    declare owner : Laya.Box;

    btnBox: Laya.Box;
    roadMapBtn: Laya.Button;
    EOBtn: Laya.Button;
    betList: Laya.List;
    circleBox: Laya.Box;
    circleSprite: Laya.Sprite;
    number: Laya.Label;
    lineSprite: Laya.Sprite;
    betListData =new Array(60)

    // @property(String)
    // public text: string = "";
    constructor() {
        super();
    }

    onEnable(): void {
       this.initUI();
    }
    
    initUI() :void {
        let btnBox = this.owner.getChildByName("btnBox") as Laya.Box;
        this.roadMapBtn = btnBox.getChildByName("roadMapBtn") as Laya.Button;
        this.EOBtn =btnBox.getChildByName("EOBtn") as Laya.Button;

        this.betList =this.owner.getChildByName("betList") as Laya.List;
        this.circleBox = this.betList.getChildByName("circleBox") as Laya.Box;
        this.lineSprite = this.owner.getChildByName("LineSprite") as Laya.Sprite;
       
        this.lineSprite.graphics.clear();
        // for row(6) (x => 0-409 , y =>245/6=>40-41)
        for(let i =0; i <= 6;i++) {
            this.lineSprite.graphics.drawLine(0, 41 * i, this.lineSprite.width, 41 *i,"#ffffff",1)
        }
        // for col(10) (x =>409/10 =>40-41, y=>0-245)
        for(let i =0; i <= 10;i++) {
            this.lineSprite.graphics.drawLine(41 * i, 0, 41 * i, this.lineSprite.height, "#ffffff",1)
        }

        this.betList.array = new Array();
        this.betList.renderHandler = new Laya.Handler(this, this.renderBetList);
    }
    
    renderBetList(item: Laya.Box, index : number) {  
        let circleSprite = item.getChildByName("circleSprite") as Laya.Sprite;
        let number = item.getChildByName("number") as Laya.Label;
        
        
    }
   
    /**
     * 组件被禁用时执行，例如从节点从舞台移除后
     */
    //onDisable(): void {}

    /**
     * 第一次执行update之前执行，只会执行一次
     */
    //onStart(): void {}

    /**
     * 手动调用节点销毁时执行
     */
    //onDestroy(): void {

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onUpdate(): void {}

    /**
     * 每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     */
    //onLateUpdate(): void {}

    /**
     * 鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
     */
    //onMouseClick(): void {}
}