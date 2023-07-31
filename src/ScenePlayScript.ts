import { BetCoinScript } from "./BetCoinScript";
import { RoadMapScript } from "./RoadMapScript";
import { StopWatchScript } from "./StopWatchScript";
import { coins } from "./constant/coinlist";
import { ButtonGroupType, BetArray, CoinData } from "./type/buttons";
import { mapToArr } from "./util/convert";
import { hoverEffect } from "./util/hover";

const { regClass, property } = Laya;
@regClass()

export class ScenePlayScript extends Laya.Script {
    ngaList: Laya.List;

    btnSection: Laya.Box;
    fanGroup: Laya.Box;
    buttons: Laya.Box;
    leftBtn: Laya.Button;
    coinList: Laya.List;
    rightBtn: Laya.Button;
    cancelBtn: Laya.Box;
    repeatBtn: Laya.Box;
    confirmBtn: Laya.Box;
    bets: Map<string, BetArray> = new Map();

    @property(Laya.Prefab)
    private coinBetPrefab: Laya.Prefab;
    private buttonsGroupList = new Map();
    coinBet: any[] = new Array()
    selectedCoin: Laya.Image;

    ngaContainer: Laya.Box;
    betBox: Laya.Box;
    betResultList: Laya.List;
    result: Laya.Label;

    betClick: boolean = true;
    chip: Laya.Image;


    @property(Laya.Prefab)
    coinConfirmPrefab: Laya.Prefab;
    stopRoundSp: StopWatchScript;

    constructor() {
        super();
    }

    onEnable(): void {
        this.intercom();
        this.initUI();
        this.initCoin();
        this.initBtns();
    }

    intercom() {
        Laya.stage.on(Laya.Event.MESSAGE, ((data: any) => {
            switch (data.type) {
                case "timeComplete":
                    Laya.Scene.open("resources/Scenes/Dialog_End.ls", false);
                    break;
                    case "waitTimeComplete":
                    Laya.Scene.open("resources/Scenes/Dialog_Start.ls", false);
                    break;
                default:
                    break;
            }
        }))
    }

    initUI(): void {
        this.buttons = this.owner.getChildByName("Buttons") as Laya.Box;
        let bgColor = this.buttons.getChildByName("bgColor") as Laya.Image;
        this.btnSection = this.buttons.getChildByName("btnSection") as Laya.Box;
        this.fanGroup = this.btnSection.getChildByName("fanGroup") as Laya.Box

        let coinSection = this.buttons.getChildByName("coinSection") as Laya.Box;
        this.leftBtn = coinSection.getChildByName("leftBtn") as Laya.Button;
        this.coinList = coinSection.getChildByName("coinList") as Laya.List;
        this.rightBtn = coinSection.getChildByName("rightBtn") as Laya.Button;
        this.chip = coinSection.getChildByName("chip") as Laya.Image;

        this.cancelBtn = coinSection.getChildByName("cancelBtn") as Laya.Box;
        this.repeatBtn = coinSection.getChildByName("repeatBtn") as Laya.Box;
        this.confirmBtn = coinSection.getChildByName("confirmBtn") as Laya.Box;

        this.initCountDown()
    }

    initCountDown(): void {
        let stopRound = this.owner.getChildByName("stopwatch") as Laya.Box;
        this.stopRoundSp = stopRound.getComponent(StopWatchScript);
        this.stopRoundSp.initCountDown();
        (async () => {
            while (true) {
                this.stopRoundSp.wait();
                await this.sleep(5000);
                this.stopRoundSp.initTime();
                await this.sleep(5000);
                this.stopRoundSp.end();
                await this.sleep(5000);
            }
        })()
    }

    sleep(delay: number) {
        return new Promise((resolve) => setTimeout(resolve, delay))
    }


    initCoin(): void {    
        this.coinList.array = coins;
        this.coinList.repeatX = coins.length - 1;
        this.coinList.repeatY = 0
        this.coinList.renderHandler = new Laya.Handler(this, this.renderCoinList);
        this.coinList.selectHandler = new Laya.Handler(this, this.selectOnCoinList);
        this.selectedCoin = this.coinList.getCell(0) as Laya.Image;
        this.coinList.selectedIndex = 0;
        
        this.leftBtn.on(Laya.Event.CLICK, () => {
            this.coinList.scrollTo(this.coinList.selectedIndex - 5);
        })

        this.rightBtn.on(Laya.Event.CLICK, () => {
            this.coinList.scrollTo(this.coinList.selectedIndex + 5);
        })

        this.chip.on(Laya.Event.CLICK, () => {
            //    Laya.Scene.open("resources/Prefabs/Confirm_Chip.lh", false);
            let betConfirmDialog = Laya.Pool.getItemByCreateFun("betConfirmDialog", this.coinConfirmPrefab.create, this.coinConfirmPrefab) as Laya.Box;
            // betConfirmDialog.getComponent(ConfirmScript);
            betConfirmDialog.centerX = 0
            betConfirmDialog.centerY = 0
            this.owner.addChild(betConfirmDialog)

        })

        this.cancelBtn.on(Laya.Event.CLICK, () => {
            if (this.betClick) {
                this.coinBet.forEach((v) => {
                    let coin = v.getChildByName(v.name + "coinBet");
                    if (coin !== null) {
                        coin.destroy();
                    }
                })
            }
            this.bets = new Map();
        })

        this.repeatBtn.on(Laya.Event.CLICK, () => {
            if (this.betClick) {
                this.coinBet.forEach((v) => {
                    let coin = v.getChildByName(v.name + "coinBet");
                    if (coin !== null) {
                        let coinText = coin.getChildByName("coinText") as Laya.Image;
                        let coinLabel = coinText.getChildByName("amount") as Laya.Label;
                        // coinLabel.text = (this.bets.get(v.name).total * 2).toString();
                        coinLabel.text =  parseInt(coinLabel.text) +this.selectedCoin.dataSource.amount;
                    }
                })
                this.bets.forEach((val) => {
                    val.total = val.total + this.selectedCoin.dataSource.amount;
                })
            }
        })

        this.confirmBtn.on(Laya.Event.CLICK, () => {
            this.betClick = false;
            this.coinBet.forEach((v) => {
                let coin = v.getChildByName(v.name + "coinBet");
                if (coin !== null) {

                    let coinText = coin.getChildByName("coinText") as Laya.Image;
                    coinText.skin = "atlas/img/buttons/coinBetBgConfirm.png";
                }
            })
            this.resultBetCoin();
        })
    }

    resultBetCoin(): void {
        let roadMapSp = this.owner.getChildByName("roadMap");
        roadMapSp.getComponent(RoadMapScript);

        this.betBox = roadMapSp.getChildByName("betBox") as Laya.Box;
        this.betResultList = this.betBox.getChildByName("betResultList") as Laya.List;
        this.result = this.betBox.getChildByName("result") as Laya.Label;
        this.betResultList.visible = true;
        // console.log(mapToArr(this.bets), "SKEd")
        this.betResultList.array = mapToArr(this.bets)
        this.betResultList.repeatX = 1;
        this.betResultList.repeatY = [...this.bets].length - 1;

        this.betResultList.renderHandler = new Laya.Handler(this, this.renderBetResult);

        let total = 0;
        this.bets.forEach((v) => {
            total += v.total;
        })
        this.result.text = total.toString();
    }
    renderBetResult(item: Laya.Box): void {
        let betName = item.getChildByName("betName") as Laya.Label;
        let betTotal = item.getChildByName("betTotal") as Laya.Label;
    
        betName.text = item.dataSource.value.name;
        betTotal.text = item.dataSource.value.total;

    }

    renderCoinList(item: Laya.Image) {
        item.skin = item.dataSource.src;

        item.on(Laya.Event.MOUSE_OVER, () => {
            Laya.Mouse.cursor = "pointer"
        });

        item.on(Laya.Event.MOUSE_OUT, () => {
            Laya.Mouse.cursor = ""
        })
    }

    selectOnCoinList(index: number) {
        let cell = this.coinList.getCell(index) as Laya.Image;
        //    console.log(cell,this.selectedCoin);

        if (this.selectedCoin) {
            let coinSelect = this.selectedCoin.getChildByName("coinSelectBox").getChildByName("coinSelectAni") as Laya.Image;
            coinSelect.visible = false;
        }
        let coinSelect = cell.getChildByName("coinSelectBox").getChildByName("coinSelectAni")as Laya.Image;
        coinSelect.visible = true;

        this.selectedCoin = cell;
    }

    private initBtns(): void {
        Laya.loader.load("resources/json/buttons.json").then(res => {
            res.data.forEach((item: ButtonGroupType) => {
                this.buttonsGroupList.set(item.name, item)
            })
            this.initNgaBtn(this.buttonsGroupList.get("Nga"))
            this.initBtn(this.buttonsGroupList.get("Fan"))
            this.initBtn(this.buttonsGroupList.get("Nim"))
            this.initBtn(this.buttonsGroupList.get("Kwok"))
            this.initBtn(this.buttonsGroupList.get("Ssh"))
            this.initBtn(this.buttonsGroupList.get("Num"))
        })
    }

    initNgaBtn(btnType: ButtonGroupType): void {
        this.ngaContainer = this.owner.getChildByName("ngaContainer") as Laya.Box;
        this.ngaList = this.ngaContainer.getChildByName("ngaList") as Laya.List;
        this.ngaList.array = btnType.childs
        this.ngaList.renderHandler = new Laya.Handler(this, this.renderNgaList);
        this.ngaList.mouseHandler = new Laya.Handler(this, this.mouseHandler);
        this.coinBet.push(...this.ngaList.cells);
    }

    renderNgaList(item: Laya.Box): void {
        let ngaLabel = item.getChildByName("ngaLabel") as Laya.Label;
        ngaLabel.text = item.dataSource.betName;
        hoverEffect(item);
    }

    mouseHandler(e: Laya.Event, index: number): void {
        if (e.type === Laya.Event.CLICK) {
            this.BetCoin(this.ngaList.cells[index], this.ngaList.cells[index].dataSource);

        }
    }

    private initBtn(btnType: ButtonGroupType): void {
        let btn: Laya.Sprite | Laya.Box

        btnType.childs.forEach((ele: any, idx: number) => {
            switch (btnType.name) {
                case "Fan":
                    btn = this.fanGroup.getChildByName(`btn${idx}`) as Laya.Sprite
                    break
                case "Nim":
                    btn = this.btnSection.getChildByName(`nimButton${idx}`) as Laya.Box
                    break;
                case "Num":
                    btn = this.btnSection.getChildByName(`Num${idx}`) as Laya.Box
                    break;
                case "Kwok":
                    btn = this.btnSection.getChildByName(`kwokPrefab${idx}`) as Laya.Box;
                    ele.lose.forEach((index: number) => {
                        let triangle = btn.getChildByName("triangle") as Laya.Box;
                        let triSprite = triangle.getChildByName(`Sprite${index}`) as Laya.Sprite;
                        triSprite.visible = false;
                    })
                    break;
                case "Ssh":
                    btn = this.btnSection.getChildByName(`sshPrefab${idx}`) as Laya.Box;
                    ele.lose.forEach((index: number) => {
                        let triangle = btn.getChildByName("triangle") as Laya.Box;
                        let triSprite = triangle.getChildByName(`Sprite${index}`) as Laya.Sprite;
                        triSprite.visible = false;
                    })
                    break;
            }

            let titleLab = btn.getChildByName("titleLab") as Laya.Label
            titleLab.text = ele.betName
            let ratioLab = btn.getChildByName("ratioLab") as Laya.Label
            ratioLab.text = `1:${btnType.odds}`
            hoverEffect(btn);
            this.clickButtons(btn, ele);
            this.coinBet.push(btn);
        });
    }

    clickButtons(self: Laya.Sprite | Laya.Box, button: any): void {
        self.on(Laya.Event.CLICK, () => {
            if (this.betClick) {
                this.BetCoin(self, button);
            }
        })
    }

    BetCoin(self: Laya.Box | Laya.Sprite, button: any) {

        const betIndex = this.bets.has(self.name);
        if (!betIndex) {
            let bet: BetArray = {
                name: button.betName,
                coins: new Array(),
                total: 0
            }
            let coins: CoinData[] = [
                {
                    count: 1,
                    value: this.selectedCoin.dataSource.amount,
                    img: this.selectedCoin.dataSource.src,
                }
            ]
            bet.coins = coins;
            bet.total += this.selectedCoin.dataSource.amount;
            this.bets.set(self.name, bet);
        } else {
            const bet: BetArray = this.bets.get(self.name)

            let bi = bet.coins.findIndex(v => v.value === this.selectedCoin.dataSource.amount)
            bet.total += this.selectedCoin.dataSource.amount;
            if (bi >= 0) {
                bet.coins[bi].count++;
                // bet.coins[bi].value += this.selectedCoin.dataSource.amount;
            } else {
                bet.coins.push(
                    {
                        count: 1,
                        value: this.selectedCoin.dataSource.amount,
                        img: this.selectedCoin.dataSource.src,
                    }
                )
            }
            this.bets.set(self.name, bet)
        }
        this.addCoinBet(self);
    }
    private addCoinBet(self: Laya.Box | Laya.Sprite): void {
        let betArr = Array.from(this.bets.get(self.name).coins)
        let cell = self.getChildByName(`${self.name}coinBet`);
        if (cell) {
            let coin = cell.getChildByName("coin") as Laya.Image;
            let img = new Laya.Image();
            if (betArr[betArr.length - 1].img != coin.skin) {
                img.skin = betArr[betArr.length - 1].img
                img.width = coin.width
                img.height = coin.height
                img.pos(coin.x + 3, coin.y + 3)
            }
            cell.addChild(img);
            let coinText = cell.getChildByName("coinText") as Laya.Image;
            let amount = coinText.getChildByName("amount") as Laya.Label;
            amount.text = this.bets.get(self.name).total.toString();

        } else {
            let coinBetPref = Laya.Pool.getItemByCreateFun("betCoinPrefab", this.coinBetPrefab.create, this.coinBetPrefab) as Laya.Box;
            coinBetPref.getComponent(BetCoinScript);
            coinBetPref.name = `${self.name}coinBet`;
            coinBetPref.centerX = 0;
            coinBetPref.centerY = 0;
            let coin = coinBetPref.getChildByName("coin") as Laya.Image;
            let pos = 0;
            betArr.slice(-5).forEach((val: any) => {
                coin.skin = val.img;
                coin.pos(pos, pos, true)
                pos += 3;
            });
            let coinText = coinBetPref.getChildByName("coinText") as Laya.Image;
            let amount = coinText.getChildByName("amount") as Laya.Label;
            amount.text = this.bets.get(self.name).total.toString();
            self.addChild(coinBetPref);
        }
    }

} 
