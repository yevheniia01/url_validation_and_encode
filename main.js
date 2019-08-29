$(document).ready(function(){

    
    $("#checkInput").on('click', function(){

        var inputVal = $("#urlCheck").val();
            if(checkUrl(inputVal)){
                 $('img').attr("src", "./img/checked.png")
                 setTimeout(function(){ $("img").removeAttr("src") }, 5000);
    
            }else{
                 $('img').attr("src", "./img/cancel.png")
                 $('#displErr').append("<p id='err'>Please enter valid URL </p>")
                 setTimeout(function(){ $("img").removeAttr("src"),  $("#urlCheck").val(" "), $("#err").hide()  }, 5000);
   
            }
    })
    $("#encode").on('click', function(){

         var encodeInptVal = $('#urlEncode').val()
        //console.log(encodeInptVal)
            if(checkUrl(encodeInptVal)){
        
                var res = encodeURIComponent(encodeInptVal);
                console.log("res", res)
                $('#encodedUrl').text(res)
            }else{
                $('#displErrSecond').append("<p id='err2'>Please enter valid URL </p>")
                setTimeout(function(){ $("#urlEncode").val(" "), $("#err2").hide()  }, 5000);
            }
    })

    function checkUrl(str){
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          return true;
        }
        else
        {
          return false;
        }
}



})