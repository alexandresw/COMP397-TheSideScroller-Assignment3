var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.check = function (object, eventHandler) {
            /* check if the distance between the player and the other object is less than the minimum distance */
            if (this._checkCollision(this._player, object)) {
                // check if it's an enemy hit
                if (object.name === "enemy") {
                    //console.log("enemy hit!");
                    eventHandler.dispatchEvent("enemyHit", object);
                }
                // check if it's a cloud hit
                if (object.name === "energy") {
                    //console.log("energy hit!");
                    eventHandler.dispatchEvent("energyCollected");
                }
            }
        };
        Collision.prototype.checkEnemies = function (obj1, obj2) {
            if (this._checkCollision(obj1, obj2)) {
                obj1.collided(obj2);
                obj2.collided(obj1);
            }
        };
        Collision.prototype._checkCollision = function (obj1, obj2) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = obj1.height * 0.5;
            var objectHalfHeight = obj2.height * 0.5;
            var playerHalfWidth = obj1.width * 0.5;
            var objectHalfWidth = obj2.width * 0.5;
            startPoint.x = obj1.x;
            startPoint.y = obj1.y;
            endPoint.x = obj2.centerX + obj2.x;
            endPoint.y = obj2.centerY + obj2.y;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
            if (Math.abs(endPoint.x - startPoint.x) < Math.abs(endPoint.y - startPoint.y))
                minimumDistance = playerHalfHeight + objectHalfHeight;
            /* check if the distance between the player and the other object is less than the minimum distance */
            return this.distance(startPoint, endPoint) < minimumDistance;
        };
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow(endPoint.y - startPoint.y, 2) + Math.pow(endPoint.x - startPoint.x, 2));
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));

//# sourceMappingURL=collision.js.map
