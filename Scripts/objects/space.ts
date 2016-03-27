module objects {
    export class Space extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super("space");
            
            this._speed.x = -5;
            this._reset(0);
        }
        
        public update():void {
            this.x += this._speed.x;
            this._checkBounds(0);
        }
        
        protected _reset(value:number):void {
            this.x = 0;
        }
        
        protected _checkBounds():void {
            // check to see if the top of the ocean
            // has met the top of the scene
            if(this.x <= -1280){
                this._reset(0);
            }
        }
    }
}
