module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        // PRIVATE INSTANCE VARIABLES
        private _player:objects.Player;
        
        constructor(player: objects.Player){
            this._player = player;    
        }
        
        
        
        public check(object:objects.GameObject, eventHandler:scenes.Play) {
            
            /* check if the distance between the player and the other object is less than the minimum distance */
            if( this._checkCollision(this._player, object) ){
                // check if it's an enemy hit
                if(object.name === "enemy") {
                    //console.log("enemy hit!");
                    eventHandler.dispatchEvent("enemyHit", object);
                }
                
                // check if it's a cloud hit
                if(object.name === "energy") {
                    //console.log("energy hit!");
                    eventHandler.dispatchEvent("energyCollected");
                }
            }
        }
        
        public checkEnemies(obj1:objects.Enemy, obj2:objects.Enemy) {
            if( this._checkCollision(obj1, obj2) ){
                obj1.collided(obj2);
                obj2.collided(obj1);
            }
        }
        
        private _checkCollision(obj1:objects.GameObject | objects.Player, obj2:objects.GameObject):boolean {
            
            var startPoint:createjs.Point   = new createjs.Point();
            var endPoint:createjs.Point     = new createjs.Point();
            var playerHalfHeight:number     = obj1.height * 0.5;
            var objectHalfHeight:number     = obj2.height * 0.5;
            var playerHalfWidth:number      = obj1.width * 0.5;
            var objectHalfWidth:number      = obj2.width * 0.5;
            
            startPoint.x = obj1.x;
            startPoint.y = obj1.y;
            
            endPoint.x = obj2.centerX + obj2.x;
            endPoint.y = obj2.centerY + obj2.y;
            var minimumDistance:number = playerHalfWidth + objectHalfWidth;
            
            if( Math.abs(endPoint.x - startPoint.x) < Math.abs(endPoint.y - startPoint.y) )
                minimumDistance = playerHalfHeight + objectHalfHeight;
            
            /* check if the distance between the player and the other object is less than the minimum distance */
            return this.distance(startPoint, endPoint) < minimumDistance;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow(endPoint.y-startPoint.y,2) + Math.pow(endPoint.x-startPoint.x,2));
        }
    }
}