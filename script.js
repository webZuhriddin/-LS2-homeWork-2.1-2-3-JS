// SHART OPERATORLARI

// == - qiymat boyicha tenglash
// === - qattiy tenglik (qiymat, malumot turi)
// !== - teng emas qiymat jihatdan
// !== teng emas (qiymat, malumot jihatdan)
// > katta
// < kichik
// >= katta yoki teng
// <= kichik yoki teng
// && - va
// || - yoki

// JS da shart operatorlari formulasi

// if(2 == '12') {
//     console.info('shart to\'g\'ri')
// }else if(33 > 122){
//      console.info('2-shart to\'g\'ri')    
// }else{
//      console.info('Hech qaysi shart bajarilmadi')  
// }


// var number = +prompt('Son kiriting: ') 

// if(number > 1) { 
//     console.info(number + ' 1 dan katta')
// }else if(number < 1) { 
//     console.info(number + ' 1 dan kichgina')
// }else{ 
//     console.info(number + ' 1 ga teng')}


// var num1 = +prompt('Birinchi son: ')
// var num2 = +prompt('Ikkinchi son: ')




// if(num1 > num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' katta ' + num2 + ' dan ')
// }else if(num1 < num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' kichik ' + num2 +' dan ')
// }else if(num1 == num2 && !isNaN(num1) && !isNaN(num2)) {
//     console.info(num1 + ' teng ' + num2 + ' ga ')
// }else{
//     if(isNaN(num1) && isNaN(num2)){
//         console.error(' Siz umuman son kiritmadingiz ')
//     }else if(isNaN(num1)){
//         console.error(' birinchisi son emas! ')
//     }else{
//         console.error(' ikkinchisi son emas! ')
//     }
// }

// var pass = prompt('Yashirin sozni yozing')

// if(pass === 'salom' || pass === 'privet' || pass === 'hi'){
//     console.info('parolni qattan bildingiz')
// }else{
//     console.error('Siz nima qilishga urinyapsiz')
// }

// SALAM TEST
// SALAM TEST
// SALAM TEST

// HOMEWORK1__________________________________________________________________________________________

// var number = +prompt('Yoshingizni kiriting!')

// if (number < 18 && !isNaN(number)) {
//     alert(number + ' Siz hali yoshsiz. Oqishingiz kerak! ')
// } else if (number == 18 && !isNaN(number)) {
//     alert(number + ' Siz hali yoshsiz. Oqishingiz kerak! ')
// } else {
//     if (number < 50 && !isNaN(number)) {
//         alert(number + ' Siz ishlashingiz kerak! ')
//     } else if (number == 18 && !isNaN(number)) {
//         alert(number + ' Siz ishlashingiz kerak ')
//     } else {
//         if (number < 59 && !isNaN(number)) {
//             alert(number + ' Siz yaqinda nafaqaga ketasiz! ')
//         } else if (number == 50 && !isNaN(number)) {
//             alert(number + ' Siz yaqinda nafaqaga ketasiz ')
//         } else {
//             if (number < 150 && !isNaN(number)) {
//                 alert(number + ' Siz nafaqadasiz! ')
//             } else if (number == 59 && !isNaN(number)) {
//                 alert(number + ' Siz nafaqadasiz ')
//             } else {
//                 if (isNaN(number)) {
//                     alert('Siz umuman son kiritmadingiz')
//                 } else if (isNaN(number)) {
//                     alert('Son kiriting')
//                 } else (
//                     alert(number + ' Nimadir notogri ketti ')
//                 )


//             }
//         }
//     }
// }


// HOMEWORK2__________________________________________________________________________________________

/* var number = +prompt('Soat nechi bo\'ldi')

if (number >= 7 && number <= 11) {
    alert(" Tong soat " + number)
} else if (number == 12 && !isNaN(number)) {
    alert(" Tong soat 12 ")
} else {
    if (number == 13 && !isNaN(number)) {
        alert(" Kun soat 1 ")
    } else if (number == 14 && !isNaN(number)) {
        alert(" Kun soat 2 ")
    } else {
        if (number == 15 && !isNaN(number)) {
            alert(" Kun soat 3 ")
        } else if (number == 16 && !isNaN(number)) {
            alert(" Kun soat 4 ")
        } else {
            if (number == 17 && !isNaN(number)) {
                alert(" Kun soat 5 ")
            } else if (number == 18 && !isNaN(number)) {
                alert(" Kech soat 6 ")
            } else {
                if (number == 19 && !isNaN(number)) {
                    alert(" Kech soat 7 ")
                } else if (number == 20 && !isNaN(number)) {
                    alert(" Kech soat 8 ")
                } else {
                    if (number == 21 && !isNaN(number)) {
                        alert(" Kech soat 9 ")
                    } else if (number == 22 && !isNaN(number)) {
                        alert(" Tun soat 10 ")
                    } else {
                        if (number == 23 && !isNaN(number)) {
                            alert(" Tun soat 11 ")
                        } else if (number == 24 && !isNaN(number)) {
                            alert(" Tun soat 12 ")
                        } else {
                            if (number >= 1 && number <= 6) {
                                alert(" Tun soat " + number)
                            } else if (isNaN(number)) {
                                alert('Soatni sonda kiriting')
                            } else {
                                alert(' Nimadir notogri ketti ')

                            }
                        }
                    }
                }
            }
        }
    }
} */


// HOMEWORK3__________________________________________________________________________________________

var number1 = +prompt('Son kiriting')
var number2 = +prompt('Son kiriting')
var number3 = +prompt('Son kiriting')

if((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)){
    alert(number1)
}else if((number2 > number1 && number2 < number3) || (number2 < number1 && number2 > number3)){
    alert(number2)
}else if((number3 > number2 && number3 < number1) || (number3 < number2 && number3 > number1)){
    alert(number3)
}else{
    alert(' Nimadir notogri ketti ')
}