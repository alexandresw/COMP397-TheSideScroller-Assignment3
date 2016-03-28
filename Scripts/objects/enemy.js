var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++
        function Enemy(enemy) {
            _super.call(this, enemy);
            this._speed.x = -3;
            this._reset(this._rightBounds);
            this.name = enemy;
        }
        Enemy.prototype._checkBounds = function (value) {
            // check to see if the top of the island
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        Enemy.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        Enemy.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));

//# sourceMappingURL=enemy.js.map
