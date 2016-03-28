// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _lifesLabel: objects.Label;
        private _energyLabel: objects.Label;
        private _timerLabel: objects.Label;
        
        private _space: objects.Space; 
        private _enemies: objects.Enemy[];   
        private _enemiesCount: number;
        private _player: objects.Player;
        private _energy: objects.Energy;
        private _collision: managers.Collision;
        private _lifesCount: number;
        private _energyLevel: number;
        private _gameTimer: number;
        private _gameUpdateInterval: Object;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            this._space = new objects.Space(); 
            this.addChild(this._space);
            
             this._energy = new objects.Energy();
            this.addChild(this._energy);
            
            this._player = new objects.Player(); 
            this.addChild(this._player);
            
            // added enemys to scene
            this._enemies = [];
            this._enemiesCount = 1;
            for(var i = 0; i < this._enemiesCount; i++){
                var newEnemy:objects.Enemy = new objects.Enemy(config.EnemyType.SMALL);
                this._enemies.push(newEnemy); 
                this.addChild(newEnemy);
            }

            this._collision = new managers.Collision(this._player);
           
            this._lifesCount = 3;
            this._energyLevel = 100;
            this._gameTimer = 0;
            
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#000").drawRect(0, 0, config.Screen.WIDTH, 30);
            //shape.alpha = 0.4;
            this.addChild(shape);
            
            var gameLabel1:objects.Label = new objects.Label( 
                "LIFES:", "16px Consolas",
                "#FFF", 100, 15, true);
            this.addChild(gameLabel1);
            
            this._lifesLabel = new objects.Label( 
                "3", "16px Consolas",
                "#FFF", 140, 15, true);
            this.addChild(this._lifesLabel);
            
            var gameLabel2:objects.Label = new objects.Label( 
                "ENERGY:", "16px Consolas",
                "#FFF", 300, 15, true);
            this.addChild(gameLabel2);
            
            this._energyLabel = new objects.Label( 
                "100%", "16px Consolas",
                "#FFF", 360, 15, true);
            this.addChild(this._energyLabel);
            
            var gameLabel3:objects.Label = new objects.Label( 
                "TIME:", "16px Consolas",
                "#FFF", 500, 15, true);
            this.addChild(gameLabel3);
            
            this._timerLabel = new objects.Label( 
                "0", "16px Consolas",
                "#FFF", 540, 15, true);
            this.addChild(this._timerLabel);
            
            this._updateScores();
            
            // add 1 second event to calculate time / energy and add more enemies
            this._gameUpdateInterval = setInterval(this._updateInterval, 1000, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._space.update();
            
            this._player.update();
            this._energy.update();
            
            this._enemies.forEach(enemy => {
                enemy.update();
                //this._collision.check(enemy);
                // check collision between enemies
                this._enemies.forEach(otherEnemy => {
                    //this._collision.check(enemy, otherEnemy);
                });
            });
            
            //this._collision.check(this._energy);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _updateInterval(self): void {
            self._gameTimer++;
            if(self._gameTimer % 5 == 0) self._energyLevel -= 5;
            
            // add new enemy based on enemy frequency
            var enemyFreq = self._gameTimer <= 20 ? 5 :
                self._gameTimer <= 40 ? 12 :
                self._gameTimer <= 100 ? 25 :
                self._gameTimer <= 250 ? 40 : 60;
                
            if(self._gameTimer % enemyFreq == 0) {
                self._enemiesCount++;
                var type:number = self._enemiesCount % 6 == 0 ? config.EnemyType.HUGE :
                    self._enemiesCount % 4 == 0 || self._enemiesCount % 5 == 0 ? config.EnemyType.REGULAR :
                    config.EnemyType.SMALL;
                
                var newEnemy:objects.Enemy = new objects.Enemy(type);
                self._enemies.push(newEnemy); 
                self.addChild(newEnemy);
            }
            // update score
            self._updateScores();
        }
        
        public _updateScores(): void {
            var minutes = Math.floor(this._gameTimer / 60);
            var seconds = this._gameTimer % 60;
            var timer = (minutes<10?"0":"") + minutes + ":" + (seconds<10?"0":"") + seconds;
            
            this._energyLabel.text = (this._energyLevel<10?"0":"") + this._energyLevel + "%";
            this._timerLabel.text = timer;
        }
        
    }
}