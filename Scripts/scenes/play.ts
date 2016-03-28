// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _space: objects.Space; 
        private _enemy: objects.Enemy;   
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
        }

        // PLAY Scene updates here
        public update(): void {
            this._space.update();
            this._enemy.update();
            this._player.update();
            // this._clouds.forEach(cloud => {
            //     cloud.update();
            //     this._collision.check(cloud);
            // });
            
            // this._collision.check(this._enemy);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}