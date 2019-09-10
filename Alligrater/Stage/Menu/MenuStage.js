
class MenuStage extends GenericStage{
    constructor(){
        super();
        this.buttons = [];
        this.buttonIndex = 0;
        this.setup();
    }

    setup(){

        this.menu_background = createSpriteOnStage(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, "Resources/Images/Menu_BG.png");
        scaleSprite(this.menu_background, CANVAS_HEIGHT/this.menu_background.height);


        var startButton = new Button(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, "Resources/Images/Menu_Button.png","Resources/Images/Menu_Button_HL.png", "start");
        startButton.choose = function(){
            //go to the other stage
            ACTIVE_STAGE = fishstage;
            app.stage = fishstage.stage;
            fishstage.unpause();
            sushistage.unpause();
            pause = false;
        }
        this.buttons.push(startButton);


        var options = new Button(this.stage, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 96, "Resources/Images/Menu_Options.png","Resources/Images/Menu_Options.png", "options");
        options.choose = function(){
            console.log("options");
            ACTIVE_STAGE = storystage;
            app.stage = storystage.stage;
        }
        this.buttons.push(options);
        this.changeButton(0);

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
        this.buttonIndex = (this.buttonIndex + direction + this.buttons.length) % this.buttons.length;
        for(var x of this.buttons){
            x.unselect();
        }
        this.buttons[this.buttonIndex].select();
        //console.log(this.buttons[this.buttonIndex].text);
    }
}