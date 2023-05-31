class Favorites {
    constructor() {
        this.parent = document.querySelector('.ur-comment');
        this.button = document.querySelectorAll('.favCommentss');
        this.favBtn = document.querySelector('.favComments');
        this.commentsClass = new Comments();
        this.comments = this.commentsClass.comments;
    }

    store() {
    //adding comments to favorites
        this.parent.addEventListener('click', (e) => {
            this.targetItem = e.target;
            this.targetParent = this.targetItem.parentElement;
            this.heart = this.targetItem.previousElementSibling;
            this.currentDiv = this.targetParent.parentElement.parentElement;

            if(this.targetItem.closest('.favCommentss')) {
               
                this.heart.src = 'img/Mask group (3).svg';
                this.favComments.push(this.currentDiv);
               
            }
        })
       
    }

}