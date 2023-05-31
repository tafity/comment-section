class Rate {
    constructor() {
        this.parent = document.querySelector('.ur-comment')
        this.replyBtn = document.querySelectorAll('.reply')
        this.dislikeBtn = document.querySelectorAll('.dislike');
        this.likeBtn = document.querySelectorAll('.like');
    }

    rate() {
        this.parent.addEventListener('click', (e) => {
            this.targetItem = e.target;
            this.targetParent = this.targetItem.parentElement
          //upvote button
            if(this.targetItem.closest('.like')) {
               
                this.targetParent.removeAttribute('disabled', 'disabled');
                this.rateNumber = this.targetParent.previousElementSibling;
                    this.currentRateNumber = Number(this.rateNumber.innerText)
                    this.currentRateNumber++;
                    this.rateNumber.innerHTML = this.currentRateNumber;

                    if(this.currentRateNumber >= 0) {
                       this.rateNumber.style.color = '#8AC540'
                    } 
                }  

                //downvote button
            if(this.targetItem.closest('.dislike')) {

                this.rateNumber = this.targetParent.nextElementSibling
                this.currentRateNumber = Number(this.rateNumber.innerText)
                this.dislike = this.currentRateNumber - 1;
                this.rateNumber.innerHTML = this.dislike;

                if (this.currentRateNumber <= 0) {
                    this.rateNumber.style.color = '#FF0000'
                }
                this.targetParent.setAttribute('disabled', 'disabled')
            }
        })
       
    }
}