// MENU SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _background:createjs.Bitmap;
        private _menuLabel: objects.Label;
        private _backButton: objects.Button;
        
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
                "INSTRUCTIONS", "40px Consolas",
                "#FFF",
                config.Screen.CENTER_X, 40, true);
            this.addChild(this._menuLabel);
            
            
            var instructionLabel1:objects.Label = new objects.Label( 
                "PLAYER CONTROLS", "20px Consolas",
                "#E0E000", config.Screen.CENTER_X, 100, true);
            this.addChild(instructionLabel1);
            
            var instructionText1:objects.Label = new objects.Label( 
                "Move mouse up and down to deviate your enemies", "20px Consolas",
                "#007AB1", config.Screen.CENTER_X, 130, true);
            this.addChild(instructionText1);
            
            
            var instructionLabel2:objects.Label = new objects.Label( 
                "ENEMIES", "20px Consolas",
                "#E0E000", config.Screen.CENTER_X, 180, true);
            this.addChild(instructionLabel2);
            
            var smallEnemy = new createjs.Bitmap(assets.getResult("smallShip"));
            smallEnemy.x = config.Screen.CENTER_X - 250;
            smallEnemy.y = 220;
            this.addChild(smallEnemy);
            
            var regularEnemy = new createjs.Bitmap(assets.getResult("regularShip"));
            regularEnemy.x = config.Screen.CENTER_X - 150;
            regularEnemy.y = 215;
            this.addChild(regularEnemy);
            
            var hugeEnemy = new createjs.Bitmap(assets.getResult("hugeShip"));
            hugeEnemy.x = config.Screen.CENTER_X;
            hugeEnemy.y = 205;
            this.addChild(hugeEnemy);
            
            
            var instructionLabel3:objects.Label = new objects.Label( 
                "ENERGY", "20px Consolas",
                "#E0E000", config.Screen.CENTER_X, 300, true);
            this.addChild(instructionLabel3);
            
            var instructionText3:objects.Label = new objects.Label( 
                "Capture the energy capsules to live longer", "20px Consolas",
                "#007AB1", config.Screen.CENTER_X, 330, true);
            this.addChild(instructionText3);
            
            var energy = new createjs.Bitmap(assets.getResult("energy"));
            energy.x = config.Screen.CENTER_X-10;
            energy.y = 360;
            this.addChild(energy);
            
            
            // add the Back button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            
            // Back Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}