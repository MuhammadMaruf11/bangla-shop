// const leftBtn = [...document.querySelectorAll('.btn-left')];
// const rightBtn = [...document.querySelectorAll('.btn-right')];
// const slideLine = document.querySelector('.slide-line');
// const slideWrap = document.querySelector('.category-wrap');
// const categoryContainer = [...document.querySelectorAll('.category-container')]

// categoryContainer.forEach((item, i) =>{
//     let containerCategory = item.getBoundingClientRect();
//     let containerwidth = containerCategory.width;
//     leftBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerwidth;

//     })
//     rightBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerwidth;

//     })
// })


// category items start 


const sliderLine = document.querySelector('.slider-line');
const slideLine = document.querySelector('.slide-line');

const arr = ['item1', 'item2', 'item3', 'item4', 'item5'];
const sliderMain = document.getElementById('slider-main');
const sliderWrap = sliderMain.getElementsByClassName('category-wrap');


const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');

rightBtn.addEventListener('click', () => {
    sliderMain.append(sliderWrap[0]);
})
leftBtn.addEventListener('click', () => {
    sliderMain.prepend(sliderWrap[sliderWrap.length - 1])
})



function slideMove(str) {
    let step = 136;
    switch (str) {
        case "left":
            var y = document.getElementById('i1').offsetLeft;
            y = y - step;
            document.getElementById('i1').style.left = y + "px";
            break;

        case "right":
            var y = document.getElementById('i1').offsetLeft;
            y = y + step;
            document.getElementById('i1').style.left = y + "px";
            break;
    }
}



// category items end 

// product items start 




const arr2 = ['item1', 'item2', 'item3', 'item4', 'item5'];
const productMain = document.getElementById('product-main');
const productWrap = productMain.getElementsByClassName('product-wrap');


const btnLeft = document.querySelector('.left-btn');
const btnRight = document.querySelector('.right-btn');

btnRight.addEventListener('click', () => {
    productMain.append(productWrap[0]);
})
btnLeft.addEventListener('click', () => {
    productMain.prepend(productWrap[productWrap.length - 1])
})



function productMove(str) {
    let step = 136;
    switch (str) {
        case "left":
            var y = document.getElementById('i2').offsetLeft;
            y = y - step;
            document.getElementById('i2').style.left = y + "px";
            break;

        case "right":
            var y = document.getElementById('i2').offsetLeft;
            y = y + step;
            document.getElementById('i2').style.left = y + "px";
            break;
    }
}


// product items end 



// variable for increment & decrement 

let btnPlus = document.getElementsByClassName('increment');
let btnMinus = document.getElementsByClassName('decrement');


// console.log(btnPlus);
// console.log(btnMinus);

// increment & decrement start 

// increment 

for (var i = 0; i < btnPlus.length; i++){
    var button = btnPlus[i];
    // console.log(button);
    button.addEventListener('click', (e)=>{
        var buttonClicked = e.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1].children[0];
        // console.log(input);
        var inputValue = input.value;
        // console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
            // console.log(newValue);
        input.value = newValue;

        var price = buttonClicked.parentElement.parentElement.parentElement.children[1].children[2].children[0];
        // console.log(price);
        var priceValue = price.innerHTML;
        // console.log(priceValue);
        var newPriceValue = parseInt(200) * newValue + '.00';
        // console.log(newPriceValue);
        price.innerHTML = newPriceValue;

        var oldPrice = buttonClicked.parentElement.parentElement.parentElement.children[1].children[2].children[1];
        var oldPriceValue = oldPrice.innerHTML;
        // console.log(oldPriceValue);
        var oldPriceNewValue = parseInt(300) * newValue + '.00'
        // console.log(oldPriceNewValue);
        oldPrice.innerHTML = '$' + oldPriceNewValue;
        // console.log(oldPriceNewValue);


        if (newValue < 9) {
            // input.value = newValue;
         } else{
             input.value = 9;
             price.innerHTML = '$' + 1800 + '.00';
            oldPrice.innerHTML = '$' + 2700 + '.00';
            //  incBtn.classList.add('disabled-plus');
         }
        
    })
}



// decrement 


for (var i = 0; i < btnMinus.length; i++){
    var button = btnMinus[i];
    // console.log(button);
    button.addEventListener('click', (e)=>{
        var buttonClicked = e.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1].children[0];
        // console.log(input);
        var inputValue = input.value;
        // console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;
            // console.log(newValue);
        input.value = newValue;

        var price = buttonClicked.parentElement.parentElement.parentElement.children[1].children[2].children[0];
        // console.log(price);
        var priceValue = price.innerHTML;
        // console.log(priceValue);
        var newPriceValue = parseInt(200) * newValue + '.00';
        // console.log(newPriceValue);
        price.innerHTML = newPriceValue;

        var oldPrice = buttonClicked.parentElement.parentElement.parentElement.children[1].children[2].children[1];
        var oldPriceValue = oldPrice.innerHTML;
        // console.log(oldPriceValue);
        var oldPriceNewValue = parseInt(300) * newValue + '.00';
        // console.log(oldPriceNewValue);
        oldPrice.innerHTML = '$' + oldPriceNewValue;
        // console.log(oldPriceNewValue);

        if (newValue > 0) {
           input.value = newValue;
        //    incBtn.classList.remove('disabled-plus');
        } else{
            input.value = 0;
            price.innerHTML = '$' + 0 + '.00';
            oldPrice.innerHTML = '$' + 0 + '.00';
            // decBtn.classList.add('disabled-minus');
        }
        
    })
}










// btnPlus.addEventListener('click', () => {
//     // e.preventDefault();
//     inputValue.value = parseInt(inputValue.value) + 1;
// });


// btnMinus.addEventListener('click', () => {
//     // e.preventDefault();
//     inputValue.value = parseInt(inputValue.value) - 1;
// });


// increment & decrement end




// leftBtn.addEventListener('click', (e) => {
//     switch (e.key) {
//         case leftBtn:
//             slideLine.style.left = parseInt(slideLine.style.left) + 65 + 'px';
//             break;

//         default:
//             break;
//     }

// })

// rightBtn.addEventListener('click', (e) => {
//     switch (e.key) {
//         case rightBtn:
//             slideLine.style.left = parseInt(slideLine.style.left) + 65 + 'px';
//             break;

//         default:
//             break;
//     }

// })











// const leftBtn = document.querySelector('.btn-left');
// const rightBtn = document.querySelector('.btn-right');
// // let span = document.getElementsByTagName('span');
// 	let product = document.getElementsByClassName('category-wrap')
// 	let product_page = Math.ceil(product.length/6);
// 	let l = 0;
// 	let movePer = 25.34;
// 	let maxMove = 203;
// 	// mobile_view
// 	let mob_view = window.matchMedia("(max-width: 768px)");
// 	if (mob_view.matches)
// 	 {
// 	 	movePer = 50.36;
// 	 	maxMove = 504;
// 	 }

// 	let right_mover = ()=>{
// 		l = l + movePer;
// 		if (product == 1){l = 0; }
// 		for(const i of product)
// 		{
// 			if (l > maxMove){l = l - movePer;}
// 			i.style.left = '-' + l + '%';
// 		}

// 	}
// 	let left_mover = ()=>{
// 		l = l - movePer;
// 		if (l<=0){l = 0;}
// 		for(const i of product){
// 			if (product_page>1){
// 				i.style.left = '-' + l + '%';
// 			}
// 		}
// 	}
// 	rightBtn.onclick = ()=>{right_mover();}
// 	leftBtn.onclick = ()=>{left_mover();}
