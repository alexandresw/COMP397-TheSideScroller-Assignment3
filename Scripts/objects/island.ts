module objects {
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super("island");
            
            this._speed.y = 5;
            this._reset(this._topBounds);
            this.name = "island";
        }
        
       
       protected _checkBounds(value:number):void {
            // check to see if the top of the island
            // has outside the viewport
            if(this.y >= value){
                this._reset(this._topBounds);
            }
        }
        
        protected _reset(value:number):void {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds);
        }
        
        public update():void {
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
        
    }
}
