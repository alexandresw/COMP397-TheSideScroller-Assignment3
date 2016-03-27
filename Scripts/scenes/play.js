var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            this._island = new objects.Island();
            this.addChild(this._island);
            this._player = new objects.Player();
            this.addChild(this._player);
            // added clouds to scene
            this._cloudCount = 3;
            this._clouds = new Array();
            for (var i = 0; i < this._cloudCount; i++) {
                this._clouds[i] = new objects.Cloud();
                this.addChild(this._clouds[i]);
            }
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._island);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
