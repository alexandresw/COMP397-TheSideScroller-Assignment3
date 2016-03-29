// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background: createjs.Bitmap;
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            
            // Add background image
            this._background = new createjs.Bitmap(assets.getResult("space"));
            this.addChild(this._background);
            
            //Add Menu Label
            this._endLabel = new objects.Label(
                "GAME OVER", "60px Consolas",
                "#FFF",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._endLabel);
            
            var scoreLabel:objects.Label = new objects.Label( 
                "HIGH SCORE", "20px Consolas",
                "#E0E000", config.Screen.CENTER_X, 220, true);
            this.addChild(scoreLabel);
            
             var scoreValue:objects.Label = new objects.Label( 
                ""+highScore, "25px Consolas",
                "#007AB1", config.Screen.CENTER_X, 250, true);
            this.addChild(scoreValue);
            
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}