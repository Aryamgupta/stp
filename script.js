$('#check').change(function(){
    if ($('#check') .is(":checked")){
        $('body').css('overflow','hidden');    
    } 
    else{ 
        $('body').css('overflow','auto');    
    }

});