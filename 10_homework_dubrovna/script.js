const escalibur = document.querySelector('.escalibur')
if(escalibur){
    // const navList = document.querySelector('.nav-list')
    escalibur.addEventListener('click',function(e){
        escalibur.classList.toggle('active');
    });
}



// .header__inner{
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
// }
// .header
// .header__menu-icon{
//     z-index: 15;
//     display: inline-block;
//     position:relative;
//     height: 18px;
//     width: 30px;
//     cursor: pointer;
// }
// .header__logo{
//     padding: 2px 16px;
//     margin-right: auto;
// }

// .header__menu-icon span{
//     top: 50%;
//     transform: scale(1) translate(0px,-50%);
// }
// .header__menu-icon._active span{
//     transform: scale(0) translate(0px, -50%);
// }
// .header__menu-icon._active::before{
//     top: 50%;
//     transform: rotate(-45deg) translate(0px, -50%);
// }
// .header__menu-icon._active::after{
//      bottom: 50%;
//      transform: rotate(45deg) translate(0px, 50%); 
// }
// .header__menu-icon{
//     display: inline-block;
// }