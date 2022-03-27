function collapse(img){
    var element = document.getElementsByClassName("img-des");
    for (var i = 0; i < element.length; i++) {
        if(element.item(i).id != img){
            element.item(i).style.display='none';
        }
    }
    if(document.getElementById(img).style.display=='none'){
        document.getElementById(img).style.display = 'block';
    }else
        document.getElementById(img).style.display = 'none';
    
}





// function collapse(){
//     var element = document.getElementsByClassName("img-des");
//     for (var i = 0; i < element.length; i++) {
//         element.item(i).addEventListener("mouseover", function( event ) {
//             if(element.item(i).id != event.target.id){
//                 element.item(i).style.display = 'none';
//             }else{
//                 if(document.getElementById( event.target.id).style.display=='none'){
//                     document.getElementById( event.target.id).style.display = 'block';
//                 }else
//                     document.getElementById( event.target.id).style.display = 'none';
//             }
//         });
//     }
// }

    
function changeColour(){
    var colour = document.getElementById('colours').value;
    var area = document.getElementById('body');
    area.style.background = colour;
}

function changeFontColour(){
    var colour = document.getElementById('font').value;
    var area = document.getElementById('body');
    area.style.color = colour;
}
        