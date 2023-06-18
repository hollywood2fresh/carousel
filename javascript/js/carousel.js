export default class Carousel {

    constructor(data) {
        // Param
        
        // Replace url to your API or data.json
        this.url = "./this.data.json"
        // The valeur defines the time interval between each frame
        this.paramInterval = 10000

        //  Don't touch
        this.paramAnimationTime = 500
        
        this.data = data
        this.containerCarousel = document.getElementById('carousel')

        // Init value
        this.prevHidenIndex = this.data.length - 2
        this.prevIndex = this.data.length - 1
        this.activeIndex = 0
        this.nextIndex = 1
        this.nextHidenIndex = 2

        this.contentCreation()
        
        this.prevHidenTag = document.querySelector('.prevHiden img')
        this.prevTag = document.querySelector('.prev img')
        this.activeTag = document.querySelector('.active img')
        this.nextTag = document.querySelector('.next img')
        this.nextHidenTag = document.querySelector('.nextHiden img')

        this.prevHidenTag.src = this.data[this.prevHidenIndex].image
        this.prevTag.src = this.data[this.prevIndex].image
        this.activeTag.src = this.data[this.activeIndex].image
        this.nextTag.src = this.data[this.nextIndex].image
        this.nextHidenTag.src = this.data[this.nextHidenIndex].image

        this.goToPreviousSlide()
        this.goToNextSlide()
        this.automatiqueInterval()
    }

    contentCreation() {
        this.containerCarousel.innerHTML = `
            <div class="carousel">
                <ul class="carousel--list"></ul>
            </div>
        `

        const list = document.querySelector('.carousel--list')
        const classItem = 'carousel--list--item'

        for (let i = 0; i < this.data.length; i++) {

            const item = document.createElement('li')
            item.classList.add(`item${i}`)
            list.append(item)

            const picture = document.createElement('img')
            picture.classList.add(`${classItem}--picture`)
            item.append(picture)

            switch (item.classList.value) {
                case 'item0':
                    item.classList.value = `${classItem} prevHiden`;
                    break;
                case 'item1':
                    item.classList.value = `${classItem} prev`;
                    break;
                case 'item2':
                    item.classList.value = `${classItem} active`;
                    break;
                case 'item3':
                    item.classList.value = `${classItem} next`;
                    break;
                case 'item4':
                    item.classList.value = `${classItem} nextHiden`;
                    break;
            }
            
        }

        const AllPicture = document.querySelectorAll(`.${classItem}--picture`)
        AllPicture[0].classList.add('animationHidenOpacity')
        AllPicture[1].classList.add('animationOpacity')
        AllPicture[3].classList.add('animationOpacity')
        AllPicture[4].classList.add('animationHidenOpacity')

    }

    goToPreviousSlide() {
        const itemNext = document.querySelector('.next')
        itemNext.addEventListener('click', () => {
            this.viewPreviousSlide()
        })
    }

    viewPreviousSlide() {
        this.prevHidenTag.classList.add('animationNextPrevHiden')
        this.prevTag.classList.add('animationNextPrev')
        this.activeTag.classList.add('animationNextActive')
        this.nextTag.classList.add('animationNextNext')
        this.nextHidenTag.classList.add('animationNextNextHiden')

        setTimeout(() => {
            if(this.prevHidenIndex < this.data.length - 1) {
            this.prevHidenIndex++
            } else {
                this.prevHidenIndex = 0
            }
    
            if(this.prevIndex < this.data.length - 1) {
                this.prevIndex++
            } else {
                this.prevIndex = 0
            }
    
            if(this.activeIndex < this.data.length - 1) {
                this.activeIndex++
            } else {
                this.activeIndex = 0
            }
    
            if(this.nextIndex < this.data.length - 1) {
                this.nextIndex++
            } else {
                this.nextIndex = 0
            }
    
            if(this.nextHidenIndex < this.data.length - 1) {
                this.nextHidenIndex++
            } else {
                this.nextHidenIndex = 0
            }
    
            this.prevHidenTag.src = this.data[this.prevHidenIndex].image
            this.prevTag.src = this.data[this.prevIndex].image
            this.activeTag.src = this.data[this.activeIndex].image
            this.nextTag.src = this.data[this.nextIndex].image
            this.nextHidenTag.src = this.data[this.nextHidenIndex].image

            this.prevHidenTag.classList.remove('animationNextPrevHiden')
            this.prevTag.classList.remove('animationNextPrev')
            this.activeTag.classList.remove('animationNextActive')
            this.nextTag.classList.remove('animationNextNext')
            this.nextHidenTag.classList.remove('animationNextNextHiden')
        }, this.paramAnimationTime);
    }

    goToNextSlide() {
        const itemPrevious = document.querySelector('.prev')
        itemPrevious.addEventListener('click', () => {
            this.viewNextSlide()
        })
    }

    viewNextSlide() {
        this.prevHidenTag.classList.add('animationPrevPrevHiden')
        this.prevTag.classList.add('animationPrevPrev')
        this.activeTag.classList.add('animationPrevActive')
        this.nextTag.classList.add('animationPrevNext')
        this.nextHidenTag.classList.add('animationPrevNextHiden')
        setTimeout(() => {
            if(this.prevHidenIndex > 0) {
                this.prevHidenIndex--;
            } else {
                this.prevHidenIndex = this.data.length - 1;
            }
    
            if(this.prevIndex > 0) {
                this.prevIndex--;
            } else {
                this.prevIndex = this.data.length - 1;
            }
    
            if(this.activeIndex > 0) {
                this.activeIndex--;
            } else {
                this.activeIndex = this.data.length - 1;
            }
    
            if(this.nextIndex > 0) {
                this.nextIndex--;
            } else {
                this.nextIndex = this.data.length - 1;
            }
    
            if(this.nextHidenIndex > 0) {
                this.nextHidenIndex--;
            } else {
                this.nextHidenIndex = this.data.length - 1;
            }
    
            this.prevHidenTag.src = this.data[this.prevHidenIndex].image
            this.prevTag.src = this.data[this.prevIndex].image
            this.activeTag.src = this.data[this.activeIndex].image
            this.nextTag.src = this.data[this.nextIndex].image
            this.nextHidenTag.src = this.data[this.nextHidenIndex].image

            this.prevHidenTag.classList.remove('animationPrevPrevHiden')
            this.prevTag.classList.remove('animationPrevPrev')
            this.activeTag.classList.remove('animationPrevActive')
            this.nextTag.classList.remove('animationPrevNext')
            this.nextHidenTag.classList.remove('animationPrevNextHiden')

        }, this.paramAnimationTime);
    }

    automatiqueInterval() {
        let intervalCarousel 
        intervalCarousel = setInterval(() => {
            this.viewNextSlide()
        }, this.paramInterval);

        const itemNext = document.querySelector('.next')
        const itemPrev = document.querySelector('.prev')

        itemNext.addEventListener('click', () => {
            clearInterval(intervalCarousel) 
            intervalCarousel = setInterval(() => {
                this.viewNextSlide()
            }, this.paramInterval);
        })

        itemPrev.addEventListener('click', () => {
            clearInterval(intervalCarousel) 
            intervalCarousel = setInterval(() => {
                this.viewNextSlide()
            }, this.paramInterval);
        })
    }

}

