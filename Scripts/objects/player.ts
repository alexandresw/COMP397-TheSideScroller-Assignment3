module objects {
    // PLAYER CLASS +++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds:number;
        private _bottomBounds:number;
        
        // PUBLIC INSTANCE VARIABLES
        public width:number;
        public height:number;
        
        constructor(){
            super(assets.getResult("player"));
            
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            
            this._topBounds = this.height * 0.5 + 30;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 60;
        }
        
        private _checkBounds(): void {
            if(this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if( this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }
        
        public update():void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
        
        public destroy(): void {
            this.rotation = 60;
            createjs.Tween.get(this).to({ x: -this.width, alpha:0 } , 600)
        }
        
        public restore(): void {
            this.rotation = 0;
            this.x = 60;
            this.alpha = 1;
        }
    }
}