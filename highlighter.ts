/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {
	private helloWorld: number;
	private helloLeftHand: number;
	private helloRightHand: number;
	private helloTerrain: number;  

	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(saveData: any): void {
		
	}

	public onUnload(): void {
		
	}

	public onSave(): any {
		
	}

	// Hooks
	public OnAddItemToInventory(item: Item.IItem, container: Item.IContainer): void{
		//do work
	}
	
	public onBuild(item: Item.IItem, tile: ITile, doodad: Doodad.IDoodad): void{
		//do work
	}
	
	public preRenderWorld(tileScale: number, viewWidth: number, viewHeight: number): void{
		//Highlight sprites
	}
	
	public onMouseDown(event: JQueryEventObject): boolean{
		//Determine when a element is clicked... not sure if this is the correct place to do this yet
		
		return undefined;
	}
	
	
	
}
