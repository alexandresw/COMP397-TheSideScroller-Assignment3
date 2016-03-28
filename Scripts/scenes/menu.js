var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // Add background image
            this._background = new createjs.Bitmap(assets.getResult("space"));
            this.addChild(this._background);
            //Add Menu Label
            this._menuLabel = new objects.Label("SPACE WAR", "60px Consolas", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._menuLabel);
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button("InstructionsButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 20, true);
            this.addChild(this._instructionsButton);
            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Instruction Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the Instructions Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        // LEFT_CAVE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the play scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
