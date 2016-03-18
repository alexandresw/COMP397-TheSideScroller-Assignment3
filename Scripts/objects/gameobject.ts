module objects {
    // GAME OBJECT SUPER CLASS
    export class GameObject extends createjs.Bitmap {
        // PROTECTED INSTANCE VARIABLES
        protected _speed:createjs.Point;
        protected _width:number;
        protected _height:number;
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(bitmapString:String) {
            super(assets.getResult(bitmapString));
            
            this._speed = new createjs.Point(0, 0);
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = -this._height;
            this._bottomBounds = config.Screen.HEIGHT + this._height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this._width;
        }
        
        public update():void {
            var boundValue:number = 0;
            this.y += this._speed.y;
            this._checkBounds(boundValue);
        }
        
        protected _reset(value:number):void {
            this.y = value;
        }
        
        protected _checkBounds(value:number):void {
            var resetValue:number = 0;
            // check to see if y has met the reset criteria
            if(this.y >= value){
                this._reset(resetValue);
            }
        }
    }
}
