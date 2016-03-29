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
            this._energy = new objects.Energy();
            this.addChild(this._energy);
            this._player = new objects.Player();
            this.addChild(this._player);
            highScore = 0;
            this._lifesCount = 3;
            this._isGameOver = false;
            this._collision = new managers.Collision(this._player);
            var shape = new createjs.Shape();
            shape.graphics.beginFill("#000").drawRect(0, 0, config.Screen.WIDTH, 30);
            this.addChild(shape);
            var gameLabel1 = new objects.Label("LIFES:", "16px Consolas", "#FFF", 100, 15, true);
            this.addChild(gameLabel1);
            this._lifesLabel = new objects.Label(" ", "16px Consolas", "#FFF", 140, 15, true);
            this.addChild(this._lifesLabel);
            var gameLabel2 = new objects.Label("ENERGY:", "16px Consolas", "#FFF", 300, 15, true);
            this.addChild(gameLabel2);
            this._energyLabel = new objects.Label(" ", "16px Consolas", "#FFF", 360, 15, true);
            this.addChild(this._energyLabel);
            var gameLabel3 = new objects.Label("TIME:", "16px Consolas", "#FFF", 500, 15, true);
            this.addChild(gameLabel3);
            this._timerLabel = new objects.Label(" ", "16px Consolas", "#FFF", 540, 15, true);
            this.addChild(this._timerLabel);
            this.on('energyCollected', this._energyCollected, this);
            this.on('enemyHit', this._enemyHit, this);
            this._startGame();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            if (this._energyLevel <= 0) {
                this._gameOver();
            }
            this._space.update();
            this._player.update();
            this._energy.update();
            for (var i = 0; i < this._enemies.length; i++) {
                this._enemies[i].update();
                this._collision.check(this._enemies[i], this);
                for (var j = i + 1; j < this._enemies.length; j++) {
                    this._collision.checkEnemies(this._enemies[i], this._enemies[j]);
                }
            }
            this._collision.check(this._energy, this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._energyCollected = function () {
            createjs.Sound.play("energySound");
            this._energy.reset();
            this._energyLevel += 10;
            if (this._energyLevel > 100)
                this._energyLevel = 100;
        };
        Play.prototype._enemyHit = function () {
            console.log("_enemyHit called....");
            if (this._energyLevel > 0) {
                this._energyLevel = 0;
                this._gameOver();
            }
        };
        Play.prototype._gameOver = function () {
            if (this._isGameOver)
                return;
            this._engineSound.stop();
            this._isGameOver = true;
            this._player.destroy();
            this._lifesCount--;
            clearInterval(this._gameUpdateInterval);
            highScore = this._gameTimer > highScore ? this._gameTimer : highScore;
            // wait 3 seconds to restart game
            setTimeout(function (self) {
                if (self._lifesCount < 0) {
                    scene = config.Scene.END;
                    changeScene();
                }
                else
                    self._startGame();
            }, 3000, this);
        };
        Play.prototype._startGame = function () {
            this._engineSound = createjs.Sound.play("engineSound");
            this._engineSound.loop = -1;
            this._energy.reset();
            for (var i = 0; i < this._enemiesCount; i++) {
                this.removeChild(this._enemies[i]);
            }
            this._enemies = [];
            this._enemiesCount = 1;
            for (var i = 0; i < this._enemiesCount; i++) {
                var newEnemy = new objects.Enemy(config.EnemyType.SMALL);
                this._enemies.push(newEnemy);
                this.addChild(newEnemy);
            }
            this._player.restore();
            this._energyLevel = 100;
            this._gameTimer = 0;
            this._isGameOver = false;
            this._updateScores();
            // add 1 second event to calculate time / energy and add more enemies
            this._gameUpdateInterval = setInterval(this._updateInterval, 1000, this);
        };
        Play.prototype._updateInterval = function (self) {
            self._gameTimer++;
            if (self._gameTimer % 5 == 0)
                self._energyLevel -= 5;
            // add new enemy based on enemy frequency
            var enemyFreq = self._gameTimer <= 25 ? 8 :
                self._gameTimer <= 50 ? 15 :
                    self._gameTimer <= 120 ? 30 :
                        self._gameTimer <= 300 ? 50 : 90;
            if (self._gameTimer % enemyFreq == 0) {
                self._enemiesCount++;
                var type = self._enemiesCount % 6 == 0 ? config.EnemyType.HUGE :
                    self._enemiesCount % 4 == 0 || self._enemiesCount % 5 == 0 ? config.EnemyType.REGULAR :
                        config.EnemyType.SMALL;
                var newEnemy = new objects.Enemy(type);
                self._enemies.push(newEnemy);
                self.addChild(newEnemy);
            }
            // update score
            self._updateScores();
        };
        Play.prototype._updateScores = function () {
            var minutes = Math.floor(this._gameTimer / 60);
            var seconds = this._gameTimer % 60;
            var timer = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
            this._energyLabel.text = (this._energyLevel < 10 ? "0" : "") + this._energyLevel + "%";
            this._timerLabel.text = timer;
            this._lifesLabel.text = "" + this._lifesCount;
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
