module objects {
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(enemy:string) {
            super(enemy);
            
            this._speed.x = -3;
            this._reset(this._rightBounds);
            this.name = enemy;
        }
        
       
       protected _checkBounds(value:number):void {
            // check to see if the top of the island
            // has outside the viewport
            if(this.x <= value){
                this._reset(this._rightBounds);
            }
        }
        
        protected _reset(value:number):void {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        }
        
        public update():void {
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
        
    }
}
