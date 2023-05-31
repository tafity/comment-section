class Reply extends Comments {
    constructor() {
        super();
        this.parent = document.querySelector('.ur-comment')
        this.replyButtons = document.querySelectorAll('.reply');
        this.mainInputDiv = document.querySelector('.comInfo');
        this.replyTemplate = document.querySelector('.replyBox');
        this.template = document.querySelector('.replyBox');
        this.secondCom = document.querySelector('.secondComment');
    }
    creatingReply() {
        this.parent.addEventListener('click', (e) => {
            this.targetItem = e.target;
            if(this.targetItem.closest('.reply')) {

                this.replyDiv = document.createElement('div');
                if (document.documentElement.clientWidth <= 320) {
                    this.replyDiv.style.marginLeft = '20px'
                }

                this.replyDiv.setAttribute('class','replyDiv');
                this.img = document.createElement('img');
                this.img.src = 'img/samsung-memory-hjRC0i0oJxg-unsplash 1.png'
                this.img.setAttribute('class', 'replyImg')
                this.replyDiv.appendChild(this.img);
                
                this.name = document.createElement('p')
                this.name.setAttribute('class', 'commentName3');
                this.name.innerHTML = 'Максим Авдеенко'
                this.name.style.marginLeft = '-5px'
                this.replyDiv.appendChild(this.name)
                
                this.pp = document.createElement('img');
                this.pp.src = "img/Mask group (4).svg";
                this.pp.setAttribute('id','pp');
                this.pp.setAttribute('class', 'replyPic');
                if (document.documentElement.clientWidth <= 320) {
                    this.pp.style.position = 'absolute';
                    this.pp.style.marginTop = '45px';
                    this.pp.style.marginLeft = '80px';
                }
                this.replyDiv.appendChild(this.pp);
    
                this.namee = 'Алексей1994_b'
                this.replyName = document.createElement('p')
                this.replyName.setAttribute('id', 'replyName')
                this.replyName.innerText = this.namee
                this.replyDiv.appendChild(this.replyName)
    
                this.replyInputDiv = document.createElement('div');
                this.replyInputDiv.setAttribute('class', 'replyInputDiv');
               
                
                this.replyTextarea = document.createElement('textarea')
                this.replyTextarea.setAttribute('class', 'input');
                this.replyTextarea.setAttribute('id', 'textarea');
                
                this.replyButton = document.createElement('button');
                this.replyButton.innerText = 'Отправить';
                this.replyButton.setAttribute('type', 'submit');
                this.replyButton.setAttribute('id', 'send');
                this.replyButton.setAttribute('disabled', 'disabled')
    
     
                this.replyInputDiv.appendChild(this.replyTextarea);
                this.replyInputDiv.appendChild(this.replyButton);
                this.replyDiv.appendChild(this.replyInputDiv);
                this.targetItem.parentNode.parentNode.parentNode.appendChild(this.replyDiv);

                 //active button
            this.replyTextarea.addEventListener ('input', () => {
                this.textareaValue = this.replyTextarea.value;
                this.textarealength = this.textareaValue.length;
                if (this.textarealength >= 1) {
                    this.replyButton.removeAttribute("disabled");
                    this.replyButton.style.backgroundColor = '#ABD873';
                    this.replyButton.style.opacity = '1';
                    this.replyButton.style.borderColor = '#ABD873';
                }
        })
        this.replyButton.addEventListener('click', () => {
            this.replyTextarea.remove();
            this.replyButton.remove();
            this.p = document.createElement('p');
            this.p.setAttribute('class', 'paragraph');
            this.p.innerHTML = this.textareaValue;
            this.replyInputDiv.appendChild(this.p);

            
            this.d = new window.Date();
            this.date = this.d.getDate();
            this.month = (this.d.getMonth() + 1).toString().padStart(2,'0');
            this.h  = this.d.getHours().toString().padStart(2,'0');
            this.m = this.d.getMinutes().toString().padStart(2,'0');
            this.time = document.createElement('p');
            this.time.setAttribute('class', 'Ctime');
            this.time.innerHTML = `${this.date}.${this.month} ${this.h}:${this.m}`;
            this.replyDiv.appendChild(this.time)

            this.likeBtn = document.createElement('button')
            this.likeBtn.setAttribute('id', 'likeBtn');
            this.likeBtn.setAttribute('class', 'favCommentss')
            this.p.appendChild(this.likeBtn);
            this.heartImg = document.createElement('img');
            this.heartImg.src = "img/Mask group (5).svg";
            this.heartImg.setAttribute('id', 'heartImg');
            this.likeBtn.appendChild(this.heartImg);
            this.btnText = document.createElement('p')
            this.btnText.innerHTML = 'В избранное';
            this.btnText.setAttribute('class', 'buttontext');
            this.likeBtn.appendChild(this.btnText)

            this.ratingDiv = document.createElement('div');
            this.ratingDiv.setAttribute('id', 'rating');
            this.p.appendChild(this.ratingDiv);

            this.minusBtn = document.createElement('button')
            this.minusBtn.setAttribute('class', 'dislike');
            this.minusImg = document.createElement('img');
            this.minusImg.setAttribute('id', 'minus')
            this.minusImg.src = 'img/Group 1171274243.svg';
           
            this.minusBtn.appendChild(this.minusImg)

            this.numberofrate = document.createElement('span');
            this.numberofrate.setAttribute('id', 'likes')
            this.numberofrate.setAttribute('class', 'numberOfRate')
            this.numberofrate.innerText = '0';
           

            this.plusBtn = document.createElement('button');
            this.plusBtn.setAttribute('id', 'plusBtn');
            this.plusBtn.setAttribute('class', 'like')
            this.plusImg = document.createElement('img');
            this.plusImg.src = 'img/Group 1171274244.svg';
            this.plusImg.setAttribute('id', 'plus');
            this.plusBtn.appendChild(this.plusImg);

            if (document.documentElement.clientWidth <= 320) {
                this.replyDiv.style.maxWidth = '300px'
            }

            this.ratingDiv.appendChild(this.minusBtn);
            this.ratingDiv.appendChild(this.numberofrate)
            this.ratingDiv.appendChild(this.plusBtn);

            //localStorage
            this.replyComment = {
                name: this.name.innerText,
                text: this.p.innerHTML,
                time: this.time.innerHTML
            }
            this.comments.push(this.replyComment);
            console.log(this.comments)
            localStorage.setItem("comment", JSON.stringify(this.comments))
            try {
                this.replyGet = localStorage.getItem(JSON.parse("comment"))
            }
            catch(error) {
                console.log('error', error, this.replyGet)
            }
           
       })
    }
    })

    }
}
