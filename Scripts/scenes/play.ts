// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean; 
        private _island: objects.Island;   
        private _cloud: objects.Cloud;     
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            this._ocean = new objects.Ocean(); 
            this.addChild(this._ocean);
            
            this._island = new objects.Island(); 
            this.addChild(this._island);
            
            this._cloud = new objects.Cloud(); 
            this.addChild(this._cloud);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._cloud.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}