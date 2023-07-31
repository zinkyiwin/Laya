interface ButtonType {
    betName: string,
    win: Array<number>,
    lose: Array<number>,
    tie: Array<number>,
}

export interface ButtonGroupType {
    name: string,
    type: number,
    odds: number,
    childs: Array<ButtonType>
}
 
export interface CoinData {
    count : number,
    value : string,
    img :  string,
}
export interface BetArray {
    name :string,
    coins:Array<CoinData>,
    total: number
}