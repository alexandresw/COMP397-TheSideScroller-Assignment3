var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Energy = (function (_super) {
        __extends(Energy, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++
        function Energy() {
            _super.call(this, "energy");
            this._speed.x = -3;
            this.name = "energy";
            this._reset(this._rightBounds);
        }
        Energy.prototype.reset = function () {
            this._reset(this._rightBounds);
        };
        Energy.prototype._checkBounds = function (value) {
            // check to see if the top of the island
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        Energy.prototype._reset = function (value) {
            this.x = 2 * value;
            this.y = Math.floor(Math.random() * this._bottomBounds);
        };
        Energy.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Energy;
    }(objects.GameObject));
    objects.Energy = Energy;
})(objects || (objects = {}));

//# sourceMappingURL=energy.js.map
