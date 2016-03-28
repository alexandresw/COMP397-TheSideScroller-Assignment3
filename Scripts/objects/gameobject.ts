module objects {
    // GAME OBJECT SUPER CLASS
    export class GameObject extends createjs.Bitmap {
        // PROTECTED INSTANCE VARIABLES
        protected _speed:createjs.Point;
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        // PUBLIC INSTANCE VARIABLES
         public name:string;
        public centerX:number;
        public centerY:number;
        public width:number;
        public height:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(bitmapString:String) {
            super(assets.getResult(bitmapString));
            
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH;
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
