// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean; 
        private _island: objects.Island;   
        private _clouds: objects.Cloud[];    
        private _cloudCount: number;
        private _player: objects.Player;  
        private _collision: managers.Collision;
  
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
            
            this._player = new objects.Player(); 
            this.addChild(this._player);
            
            // added clouds to scene
            this._cloudCount = 3;
            this._clouds = new Array<objects.Cloud>();
            
            for(var i = 0; i < this._cloudCount; i++){
                this._clouds[i] = new objects.Cloud(); 
                this.addChild(this._clouds[i]);
            }
            
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._island);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}