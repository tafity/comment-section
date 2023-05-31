class Comments{
    constructor(){
        this.parentContainer = document.querySelector('.comments-container');
        this.comments = []
        this.inputHandler = new InputHandler();
        this.textarea = this.inputHandler.textarea;
        this.sendButton = this.inputHandler.sendButton;
        this._parentDiv = document.querySelector('.commentContainer');
        this.template = document.querySelector('.comment');
        this.commentDiv = document.querySelector('.comm');
        this.name = document.querySelector('.commentName');
    }

    //creating and sending the comment
    create() {
        this.sendButton.addEventListener ('click', () => {
            this.pclone = this.template.content.cloneNode(true);
            this.com = this.pclone.querySelector('#com');
            this.comment = this.textarea.value;
            this.com.textContent = this.comment;

            //getting the date and time
            this.d = new window.Date();
            this.date = this.d.getDate();
            this.month = (this.d.getMonth() + 1).toString().padStart(2,'0');
            this.h  = this.d.getHours().toString().padStart(2,'0');
            this.m = this.d.getMinutes().toString().padStart(2,'0');
            this.time = this.pclone.querySelector('#Ctime');
            this.time.textContent = `${this.date}.${this.month} ${this.h}:${this.m}`
            this.time.style.paddingTop = '2px'
            this._parentDiv.append(this.pclone);

            this.comments.push(this.pclone);
        })
        
    }


}