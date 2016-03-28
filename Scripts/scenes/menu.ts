// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background:createjs.Bitmap;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // Add background image
            this._background = new createjs.Bitmap(assets.getResult("space"));
            this.addChild(this._background);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "SPACE WAR", "60px Consolas",
                "#FFF",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._menuLabel);
            
            
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 20, true);
            this.addChild(this._instructionsButton);
            
            // Instructions Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Instruction Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the Instructions Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
        
        
        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the play scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}