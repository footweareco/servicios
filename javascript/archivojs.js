$(document).on("ready", function(){

    
    
$(".txt2").hide();
      $(".txt3").hide();
    $(".serv").on("click",function(){
        $(".txt2").hide();
         $(".txt1").hide();
    $(".txt3").show(600);
    
     $("#comslider_in_point_1019839").hide();
    });
    
    $(".inicio").on("click",function(){
         $("#comslider_in_point_1019839").show();
         $(".txt3").hide();
        $(".txt2").hide();
          $(".txt1").show(600);
        
    });
    
    
    
    
    
    $(".acerca").on("click",function(){
        
        $("#comslider_in_point_1019839").hide();
       $(".txt2").fadeIn(500); 
        $(".txt1").hide();
         $(".txt3").hide();
    });
    
    
    
    
    
     $(".txt3").hide()
    
$(".amburgeza").on('click', function(){
    $(".slidep").fadeIn(1000);
  $(".pdz").toggle(100); 
   $(".logo").toggle(00);
});
       
      
    
    
    
    $(window).on('resize', function(){
      var win = $(this); //this = window
      
      if (win.width() > 600) { 
      
      
   $(".logo").show();
      

   $(".amburgeza").hide();   
      }
});
    
    
    
        
    $(window).on('resize', function(){
      var win = $(this); //this = window
      
      if (win.width() <= 600) { 
      
      
   

   $(".amburgeza").show();   
      }
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
});