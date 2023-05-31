class InputHandler {
    constructor() {
        this.textarea = document.querySelector('#textareaa');
        this.sendButton = document.querySelector('.send');
        this.longMessage = document.querySelector('.tooLong');
        this.scHeight = this.scHeight;
        
        this.symbolsNum = document.querySelector('.symbolsNumber');
    }

    sendBtn() {
        this.sendButton.disabled = true;
        //activating and deactivating button
        this.sendButton.setAttribute('disabled','disabled');
        this.textarea.addEventListener ('input', () => {
            this.textareaValue = this.textarea.value;
            this.textarealength = this.textareaValue.length;
            if (this.textarealength >= 1) {
                this.sendButton.removeAttribute("disabled");
                this.sendButton.style.backgroundColor = '#ABD873';
                this.sendButton.style.opacity = '1';
                this.sendButton.style.borderColor = '#ABD873';
            }

            //restricting a number of symbols
            if(this.textarealength > 1000) {
                this.symbolsNum.innerHTML = `${this.textarealength}/1000`;
                this.longMessage.style.opacity = '1';
                this.symbolsNum.style.color = '#FF0000';
                this.symbolsNum.style.opacity = '1';
                this.symbolsNum.style.marginLeft = '80px';
                this.sendButton.setAttribute('disabled','disabled');
                this.sendButton.style.backgroundColor = '#A1A1A1';
                this.sendButton.style.opacity = '0.4';
                this.sendButton.style.borderColor = '#A1A1A1';
                this.sendButton.style.pointerEvents = 'none';

            } else {
                this.symbolsNum.innerHTML = `${this.textarealength}/1000`
                this.symbolsNum.style.marginLeft = '105px';
                this.sendButton.removeAttribute("disabled");
                this.sendButton.style.pointerEvents = 'all';
                this.longMessage.style.opacity = '0';
                this.symbolsNum.style.color = '#A1A1A1';
            }

            //mobile styling details
            if (document.documentElement.clientWidth <= 320) {
                this.symbolsNum.style.marginLeft = '-145px';
                this.longMessage.style.position = 'absolute'
                this.longMessage.style.marginTop = '240px';
                this.longMessage.style.marginLeft = '50px'
            }
        })  
    }

    expand() {
        //expanding the textarea
        this.textarea.addEventListener ('keyup', e => {
            this.textarea.style.height = '28px'
            this.scHeight = e.target.scrollHeight;
            this.textarea.style.height = `${this.scHeight}px`
        })
            if (!this.replyTextarea == null ) {
                this.replyTextarea.addEventListener ('keyup', e => {
                this.replyTextarea.style.height = '28px'
                this.sHeight = e.target.scrollHeight;
                this.replyTextarea.style.height = `${this.sHeight}px`
            })
        }
    }
}
