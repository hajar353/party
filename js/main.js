// navMenu....................................................
$('.open').click(function () {
    $('.leftMenu').css('width', '250px', 'overFlow-x', 'visible')
    $('.open').css('left', '20%')
})
$('.rightIcon').click(function () {
    $('.leftMenu').css('width', '0px', 'overFlow-x', 'hidden')

    $('.open').css('left', '0')
})



$(".leftMenu a").click(function () {

    var secToGo = $(this).attr("href");

    var sec = $(secToGo).offset().top;

    $("html , body").animate({ scrollTop: sec }, 500);

})

// مش راضيه تشتغل مع انها زي اللي فوق بظبط ايه الفرق 

// $('.leftMenu a').click(function(){

//     const secToGo=$(this).attr('herf');

//     const sec=$(secToGo).offset().top;

//     $('html , body').animate({scrollTop:sec},2000)
//     console.log('hello')
// })

// slider....................................................

$('.One').click(function () {
    $('.innerDivOne').slideToggle()
    $('.innerDivTwo').slideUp()
    $('.innerDivThree').slideUp()
    $('.innerDivFour').slideUp()
})
$('.Two').click(function () {
    $('.innerDivTwo').slideToggle()
    $('.innerDivOne').slideUp()
    $('.innerDivThree').slideUp()
    $('.innerDivFour').slideUp()

})
$('.Three').click(function () {
    $('.innerDivThree').slideToggle()
    $('.innerDivOne').slideUp()
    $('.innerDivTwo').slideUp()
    $('.innerDivFour').slideUp()

})
$('.Four').click(function () {
    $('.innerDivFour').slideToggle()
    $('.innerDivOne').slideUp()
    $('.innerDivTwo').slideUp()
    $('.innerDivThree').slideUp()

})

// count....................................................

let countDate=new Date('Dec 31,2025,23:59:59').getTime();

let counter=setInterval(()=>{
    let dateNow=new Date().getTime();
    let dateDiffrent=countDate-dateNow;
    

    let days = Math.floor(dateDiffrent/(1000*60*60*24));
    let hours = Math.floor((dateDiffrent%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((dateDiffrent%(1000*60*60))/(1000*60));
    let seconds = Math.floor((dateDiffrent%(1000*60))/1000);

     $('.days').html(days+' '+"D");
     $('.hours').html(hours <10 ?`0${hours}`:hours +' '+"h");
     $('.minutes').html(minutes <10 ?`0${minutes}`:minutes +' '+'m');
     $('.secounds').html(seconds <10 ?`0${seconds}`:seconds +' '+"s");

     if(dateDiffrent<0){
        clearInterval(counter);
     }

},1000);


// contact textarea.........................................

$('textarea').keyup(function () {
    let num = 100;
    let value = $(this).val().length;
    let res = num - value;
    $('form span').html(res);
})

