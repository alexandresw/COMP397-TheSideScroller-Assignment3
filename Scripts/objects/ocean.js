var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Ocean() {
            _super.call(this, assets.getResult("ocean"));
            this._dy = 5; // 5 pixels per frame
            this._reset();
        }
        Ocean.prototype.update = function () {
            this.y += this._dy;
            this._checkBounds();
        };
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        Ocean.prototype._checkBounds = function () {
            // check to see if the top of the ocean
            // has met the top of the scene
            if (this.y >= 0) {
                this._reset();
            }
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));

//# sourceMappingURL=ocean.js.map
