const nbtn = document.querySelector('#nbtn')
const pbtn = document.querySelector('#pbtn')
const con = document.querySelector('.images');
let counter = 1;
nbtn.addEventListener('click',next)
pbtn.addEventListener('click',prev)
//con.animate([{opacity='0.1'},{opacity='0.1'}],{duration:500,fill:"forwards"});
function next(){
    
    //con.animate([{opacity='0.1'},{opacity='0.1'}],{duration:500,fill:"forwards"});
    if(counter==5){
counter = 0;
    }
    counter++;
    console.log(counter)
    //con.animate([{opacity='0.1'},{opacity='0.1'}],{duration:1000,fill:'forwards'});
    con.style.backgroundImage=`url(img/img${counter}.jpg)`
    
    con.animate([{opacity:'0.2'},{opacity:'1.0'}],{
        duration:1000,fill:"forwards"
})
    
}
function prev(){
    //con.animate([{opacity='0.1'},{opacity='0.1'}],{duration:500,fill:"forwards"});
    if(counter == 1){
counter = 6;
    }
    counter--;
    console.log(counter)
    con.style.backgroundImage=`url(img/img${counter}.jpg)`
    con.animate([{opacity:'0.2'},{opacity:'1.0'}],{
        duration:500,fill:"forwards"
    })
    //con.animate([{opacity='0.1'},{opacity='0.1'}],{duration:1000,fill:'forwards'});
    
}