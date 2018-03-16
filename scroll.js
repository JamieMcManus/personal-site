 

 
 $(document).ready(function(){
              //Scroll to anchor function
              console.log("ready")
              $(".scroll").click(function(event){     
                    event.preventDefault();
                    $('html,body').animate({scrollTop:$(this.hash).offset().top-70}, 500);
                    console.log("pressed");
                   });
        });