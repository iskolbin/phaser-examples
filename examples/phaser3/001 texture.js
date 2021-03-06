
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.image('einstein', 'assets/pics/ra_einstein.png');

}

var manager;
var texture;
var frame;
var x = 64;
var y = 32;

function create() {

    manager = new Phaser.TextureManager(game);

    texture = manager.addImage('einstein', game.cache.getImage('einstein'));

    frame = texture.get();

    console.log(texture);
    console.log(frame);

}

function render () {

    game.context.drawImage(
        frame.source.image,
        frame.cutX,
        frame.cutY,
        frame.cutWidth,
        frame.cutHeight,
        x,
        y,
        frame.cutWidth,
        frame.cutHeight
    );

}
