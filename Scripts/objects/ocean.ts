module objects {
    export class Ocean extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super("ocean");
            
            this._speed.y = 5;
            this._reset(-960);
        }
        
        public update():void {
            this.y += this._speed.y;
            this._checkBounds(0);
        }
        
        protected _reset(value:number):void {
            this.y = -960;
        }
        
        protected _checkBounds():void {
            // check to see if the top of the ocean
            // has met the top of the scene
            if(this.y >= 0){
                this._reset(-960);
            }
        }
    }
}
