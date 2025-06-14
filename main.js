let app = new Vue({
    el: "#app",
    data:{
      showmenu:false,
      slider: 0
    },
    mounted(){
    },
    methods:{
      showmenus(){
        this.showmenu=!this.showmenu
      },
      nextSlide(){
        if(this.slider == 2){
          this.slider = 0
        }
        else{
          this.slider += 1
        }
      },
      prevSlide(){
        if(this.slider == 0){
          this.slider = 2
        }
        else{
          this.currentSlide -= 1
        }
      }
    },
		}
)

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})

