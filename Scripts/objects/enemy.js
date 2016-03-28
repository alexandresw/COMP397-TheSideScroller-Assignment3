var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Enemy(enemyType) {
            _super.call(this, enemyType == config.EnemyType.SMALL ? "smallShip" :
                enemyType == config.EnemyType.REGULAR ? "regularShip" :
                    "hugeShip");
            this._speed.x = -3;
            this.name = "enemy";
            this._enemyType = enemyType;
            this._reset(this._rightBounds);
        }
        Enemy.prototype._checkBounds = function (value) {
            // check to see if the top of the island
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
            // when it disapper on top/bottom move it the opposite side
            if (this.y < this._topBounds - this.height) {
                this.y = this._bottomBounds + this.height;
            }
            else if (this.y > this._bottomBounds + this.height) {
                this.y = this._topBounds - this.height;
            }
        };
        Enemy.prototype._reset = function (value) {
            var deltaSpeedX = this._enemyType == config.EnemyType.SMALL ? 3 :
                this._enemyType == config.EnemyType.REGULAR ? 3 : 1;
            var maxSpeedX = this._enemyType == config.EnemyType.SMALL ? 8 :
                this._enemyType == config.EnemyType.REGULAR ? 6 : 4;
            var maxSpeedY = this._enemyType == config.EnemyType.SMALL ? 6 :
                this._enemyType == config.EnemyType.REGULAR ? 3 : 0;
            this._speed.x = Math.floor(Math.random() * deltaSpeedX) - maxSpeedX;
            this._speed.y = Math.floor(Math.random() * maxSpeedY) - maxSpeedY * 0.5;
            this.x = this._enemyType == config.EnemyType.SMALL ? value :
                this._enemyType == config.EnemyType.REGULAR ? 1.5 * value : 2 * value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        Enemy.prototype.update = function () {
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));

//# sourceMappingURL=enemy.js.map
