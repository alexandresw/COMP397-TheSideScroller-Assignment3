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
            this._space = new objects.Space();
            this.addChild(this._space);
            this._enemy = new objects.Enemy("smallShip");
            this.addChild(this._enemy);
            this._player = new objects.Player();
            this.addChild(this._player);
            // added clouds to scene
            this._cloudCount = 3;
            //this._clouds = new Array<objects.Cloud>();
            // for(var i = 0; i < this._cloudCount; i++){
            //     this._clouds[i] = new objects.Cloud(); 
            //     this.addChild(this._clouds[i]);
            // }
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._space.update();
            this._enemy.update();
            this._player.update();
            // this._clouds.forEach(cloud => {
            //     cloud.update();
            //     this._collision.check(cloud);
            // });
            // this._collision.check(this._enemy);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
