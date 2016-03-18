module objects {
    export class Ocean extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _dy:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super(assets.getResult("ocean"));
            
            this._dy = 5; // 5 pixels per frame
            this._reset();
        }
        
        public update():void {
            this.y += this._dy;
            this._checkBounds();
        }
        
        private _reset():void {
            this.y = -960;
        }
        
        private _checkBounds():void {
            // check to see if the top of the ocean
            // has met the top of the scene
            if(this.y >= 0){
                this._reset();
            }
        }
    }
}
