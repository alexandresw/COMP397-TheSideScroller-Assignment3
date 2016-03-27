var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Space = (function (_super) {
        __extends(Space, _super);
        // PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++
        function Space() {
            _super.call(this, "space");
            this._speed.x = -5;
            this._reset(0);
        }
        Space.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(0);
        };
        Space.prototype._reset = function (value) {
            this.x = 0;
        };
        Space.prototype._checkBounds = function () {
            // check to see if the top of the ocean
            // has met the top of the scene
            if (this.x <= -1280) {
                this._reset(0);
            }
        };
        return Space;
    }(objects.GameObject));
    objects.Space = Space;
})(objects || (objects = {}));

//# sourceMappingURL=space.js.map
