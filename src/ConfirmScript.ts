import { coins } from "./constant/coinlist";

const { regClass, property } = Laya;

@regClass()
export class ConfirmScript extends Laya.Script {
    declare owner : Laya.Box;

    // @property(String)
    // public text: string = "";
    chooseCoinList: Laya.List;
    closeIcon: Laya.Image;
    confirm: Laya.Button;
    chooseCoin: Laya.Box;
    navbar: Laya.Box;

    constructor() {
        super();
    }
    onEnable(): void {
        this.initUI();
    }

    initUI():void {
        this.navbar = this.owner.getChildByName("navbar") as Laya.Box;
        this.closeIcon =  this.navbar.getChildByName("closeBtn").getChildByName("closeIcon") as Laya.Image;
        this.closeIcon.on(Laya.Event.CLICK, () =>{
            this.owner.destroy(true);
        });
        this.confirm = this.owner.getChildByName("confirm") as Laya.Button;
        this.confirm.on(Laya.Event.CLICK, () =>{
            this.chooseCoinList.array.forEach((v) => {
                if(v.isSelected === true) {
                    var coinConfirm = v.src;
                }
            })
            this.owner.destroy(true);
        });
        
        this.chooseCoinList = this.owner.getChildByName("chooseCoinList") as Laya.List;
        this.chooseCoinList.array = coins;
        this.chooseCoinList.renderHandler = new Laya.Handler(this, this.renderChooseCoin);
        this.chooseCoinList.mouseHandler = new Laya.Handler(this, this.selectCoin);
    }

    renderChooseCoin(item: Laya.Box):void {
        let coin = item.getChildByName("coin") as Laya.Image;
        let check= item.getChildByName("checkBox") as Laya.CheckBox;
        coin.skin = item.dataSource.src;

        // item.dataSource.isSelected ? item.alpha = 1 : item.alpha = 0.3;
        if(item.dataSource.isSelected === true) {
            check.selected = true;
            item.alpha = 1;
        } else {
            item.alpha = 0.3
        }
    }

    selectCoin(e:Laya.Event, index: number):void{
        // console.log(e);
        if (e.type === Laya.Event.CLICK) {
             let chooseCoin = this.chooseCoinList.getCell(index) as Laya.Box;
             let checkBox = chooseCoin.getChildByName("checkBox") as Laya.CheckBox;
            coins[index].isSelected = !coins[index].isSelected
            chooseCoin.dataSource.isSelected = coins[index].isSelected
            
            chooseCoin.dataSource.isSelected ? chooseCoin.alpha = 1 : chooseCoin.alpha = 0.3;
            checkBox.selected = chooseCoin.dataSource.isSelected;
        }
    }
}
