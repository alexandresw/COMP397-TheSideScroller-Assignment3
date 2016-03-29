var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // Add background image
            this._background = new createjs.Bitmap(assets.getResult("space"));
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label("GAME OVER", "60px Consolas", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._endLabel);
            var scoreLabel = new objects.Label("HIGH SCORE", "20px Consolas", "#E0E000", config.Screen.CENTER_X, 220, true);
            this.addChild(scoreLabel);
            var scoreValue = new objects.Label("" + highScore, "25px Consolas", "#007AB1", config.Screen.CENTER_X, 250, true);
            this.addChild(scoreValue);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("StartOverButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map
