/// <reference path="mod-reference/modreference.d.ts" />
declare class Mod extends Mods.Mod {
    private helloWorld;
    private helloLeftHand;
    private helloRightHand;
    private helloTerrain;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onUnload(): void;
    onSave(): any;
    OnAddItemToInventory(item: Item.IItem, container: Item.IContainer): void;
    onBuild(item: Item.IItem, tile: ITile, doodad: Doodad.IDoodad): void;
    preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void;
    onMouseDown(event: JQueryEventObject): boolean;
}
