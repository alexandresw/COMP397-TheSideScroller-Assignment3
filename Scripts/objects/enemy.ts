module objects {
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
        private _enemyType:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(enemyType:number) {
            super(enemyType==config.EnemyType.SMALL? "smallShip": 
                enemyType==config.EnemyType.REGULAR? "regularShip" : 
                "hugeShip");
            
            this._speed.x = -3;
            this.name = "enemy";
            this._enemyType = enemyType;
            this._reset(this._rightBounds);
        }
        
       
       protected _checkBounds(value:number):void {
            // check to see if the top of the island
            // has outside the viewport
            if(this.x <= value){
                this._reset(this._rightBounds);
            }
            
            // when it disapper on top/bottom move it the opposite side
            if(this.y < this._topBounds - this.height){
                this.y = this._bottomBounds + this.height;
            }
            else if(this.y > this._bottomBounds + this.height){
                this.y = this._topBounds - this.height;
            }
        }
        
        protected _reset(value:number):void {
            var deltaSpeedX = this._enemyType==config.EnemyType.SMALL? 3 : 
                this._enemyType==config.EnemyType.REGULAR ? 3 : 1;
                
            var maxSpeedX = this._enemyType==config.EnemyType.SMALL? 8 : 
                this._enemyType==config.EnemyType.REGULAR ? 6 : 4;
                
            var maxSpeedY = this._enemyType==config.EnemyType.SMALL? 6 : 
                this._enemyType==config.EnemyType.REGULAR ? 3 : 0;
            
            this._speed.x = Math.floor(Math.random() * deltaSpeedX) - maxSpeedX;
            this._speed.y = Math.floor(Math.random() * maxSpeedY) - maxSpeedY * 0.5;

            this.x = this._enemyType==config.EnemyType.SMALL? value : 
                this._enemyType==config.EnemyType.REGULAR ? 1.5 * value : 2 * value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        }
        
        public update():void {
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        }
        
        public collided(other:objects.Enemy):void {
            createjs.Sound.play("collisionSound");
            
            // if bigger ship dont do anything
            if(this._enemyType > other._enemyType) return;
            
            if(this._enemyType == config.EnemyType.HUGE && this._enemyType == other._enemyType) {
                this.y += this.y < other.y? -this.height*0.5: this.height*0.5;
                return;
            }
            
            // slow speed
            if(other._speed.x < this._speed.x) {
                this._speed.x = other._speed.x;
            }
             // change direction
            if(this._speed.y >= -1 && this._speed.y <= 1){
                this._speed.y = this.y < other.y? -2 : 2;
            } else {
                this._speed.y = this.y < other.y? -Math.abs(this._speed.y) : Math.abs(this._speed.y);
            }
            
            this.y += this._speed.y;
        }
        
    }
}
