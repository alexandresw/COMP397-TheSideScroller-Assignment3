var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS +++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("player"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._topBounds = this.height * 0.5 + 30;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 60;
        }
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
        };
        Player.prototype.destroy = function () {
            this.rotation = 60;
            createjs.Tween.get(this).to({ x: -this.width, alpha: 0 }, 600);
        };
        Player.prototype.restore = function () {
            this.rotation = 0;
            this.x = 60;
            this.alpha = 1;
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
