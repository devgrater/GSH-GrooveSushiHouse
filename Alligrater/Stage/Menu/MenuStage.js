
class MenuStage extends GenericStage{
    constructor(){
        super();
        this.buttons = [];
        this.buttonIndex = 0;
        this.setup();
    }

    setup(){

        this.menu_background = createSpriteOnStage(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, "Resources/Images/Menu_BG.png");
        scaleSprite(this.menu_background, 2);


        var startButton = new Button(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, "Resources/Images/Menu_Button.png", "start");
        startButton.choose = function(){
            //go to the other stage
            ACTIVE_STAGE = fishstage;
            app.stage = fishstage.stage;
            fishstage.unpause();
            sushistage.unpause();
            pause = false;
        }
        this.buttons.push(startButton);


        var options = new Button(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 96, "Resources/Images/Menu_Options.png", "options");
        options.choose = function(){
            console.log("options");
        }
        this.buttons.push(options);


    }

    update(delta){
        if(this.pause){
            return;
        }
    }

    processInput(key, type) {
        //super.processInput(key, type);
        if(type == 0){
            switch (key){
                case "Enter":
                    this.buttons[this.buttonIndex].choose();
                    break;
                case "up":
                    this.changeButton(-1)
                    break;
                case "down":
                    this.changeButton(+1)
                    break;
                case "left":
                    this.changeButton(-1)
                    break;
                case "right":
                    this.changeButton(+1)
                    break;
                default:
                    break;
            }
        }


    }

    changeButton(direction){
        this.buttonIndex = (this.buttonIndex + direction) % this.buttons.length;
        console.log(this.buttons[this.buttonIndex]);
    }
}