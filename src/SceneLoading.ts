const { regClass } = Laya;
import { SceneLoadingBase } from "./SceneLoading.generated";

@regClass()
export class SceneLoading extends SceneLoadingBase {

    onEnable(): void {
        this.loadingBar.value =0.75
    }
}