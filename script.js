function input1(){
    var palavra = palavra1.value;
    var array = palavra.split('')

    letra1_0.innerHTML = array[0].toUpperCase();
    letra1_1.innerHTML = array[1].toUpperCase();
    letra2_0.innerHTML = array[2].toUpperCase();

    if (palavra == 'cpu'){
        palavra1.style.color = 'greenyellow'
        letra1_0.style.color = 'greenyellow'
        letra1_1.style.color = 'greenyellow'
        letra2_0.style.color = 'greenyellow'
        erro1.innerHTML = '✔'
        erro1.style.color = 'greenyellow'
    } else {
        palavra1.style.color = 'red';
        letra1_0.style.color = 'red'
        letra1_1.style.color = 'red'
        letra2_0.style.color = 'red'
        erro1.style.color = 'red'
        erro1.innerHTML = 'X'
        erro1.style.color = 'red'
    } 
    
}

function input2(){
    var palavra = palavra2.value;
    var array = palavra.split('')
    
    letra2_0.innerHTML = array[0].toUpperCase();
    letra2_1.innerHTML = array[1].toUpperCase();
    letra3_7.innerHTML = array[2].toUpperCase();

    if (palavra == 'ula'){
        palavra2.style.color = 'greenyellow'
        letra2_0.style.color = 'greenyellow'
        letra2_1.style.color = 'greenyellow'
        letra3_7.style.color = 'greenyellow'
        erro2.innerHTML = '✔'
        erro2.style.color = 'greenyellow'
    } else {
        palavra2.style.color = 'red';
        letra2_0.style.color = 'red'
        letra2_1.style.color = 'red'
        letra3_7.style.color = 'red'
        erro2.innerHTML = 'X'
        erro2.style.color = 'red'
    } 
}

function input3(){
    var palavra = palavra3.value;
    var array = palavra.split('')

    letra3_0.innerHTML = array[0].toUpperCase();
    letra3_1.innerHTML = array[1].toUpperCase();
    letra3_2.innerHTML = array[2].toUpperCase();
    letra3_3.innerHTML = array[3].toUpperCase();
    letra3_4.innerHTML = array[4].toUpperCase();
    letra3_5.innerHTML = array[5].toUpperCase();
    letra3_6.innerHTML = array[6].toUpperCase();
    letra3_7.innerHTML = array[7].toUpperCase();
    letra3_8.innerHTML = array[8].toUpperCase();
    letra3_9.innerHTML = array[9].toUpperCase();
    letra3_10.innerHTML = array[10].toUpperCase();
    letra8_4.innerHTML = array[10].toUpperCase();
    letra3_11.innerHTML = array[11].toUpperCase();
    letra3_12.innerHTML = array[12].toUpperCase();

    if (palavra == 'registradores'){
        palavra3.style.color = 'greenyellow'
        letra3_0.style.color = 'greenyellow'
        letra3_1.style.color = 'greenyellow'
        letra3_2.style.color = 'greenyellow'
        letra3_3.style.color = 'greenyellow'
        letra3_4.style.color = 'greenyellow'
        letra3_5.style.color = 'greenyellow'
        letra3_6.style.color = 'greenyellow'
        letra3_7.style.color = 'greenyellow'
        letra3_8.style.color = 'greenyellow'
        letra3_9.style.color = 'greenyellow'
        letra3_10.style.color = 'greenyellow'
        letra3_11.style.color = 'greenyellow'
        letra3_12.style.color = 'greenyellow'
        letra8_4.style.color = 'greenyellow'
        erro3.innerHTML = '✔'
        erro3.style.color = 'greenyellow'
    } else {
        palavra3.style.color = 'red'
        letra3_0.style.color = 'red'
        letra3_1.style.color = 'red'
        letra3_2.style.color = 'red'
        letra3_3.style.color = 'red'
        letra3_4.style.color = 'red'
        letra3_5.style.color = 'red'
        letra3_6.style.color = 'red'
        letra3_7.style.color = 'red'
        letra3_8.style.color = 'red'
        letra3_9.style.color = 'red'
        letra3_10.style.color = 'red'
        letra3_11.style.color = 'red'
        letra3_12.style.color = 'red'
        letra8_4.style.color = 'red'
        erro3.style.color = 'red'
        erro3.innerHTML = 'X'
        erro3.style.color = 'red'
    } 
}

function input4(){
    var palavra = palavra4.value;
    var array = palavra.split('')
    
    letra6_2.innerHTML = array[0].toUpperCase();
    letra4_0.innerHTML = array[0].toUpperCase();
    letra4_1.innerHTML = array[1].toUpperCase();
    letra4_2.innerHTML = array[2].toUpperCase();

    if (palavra == 'ram'){
        palavra4.style.color = 'greenyellow'
        letra4_0.style.color = 'greenyellow'
        letra4_1.style.color = 'greenyellow'
        letra4_2.style.color = 'greenyellow'
        letra6_2.style.color = 'greenyellow'
        erro4.innerHTML = '✔'
        erro4.style.color = 'greenyellow'
    } else {
        palavra4.style.color = 'red';
        letra4_0.style.color = 'red'
        letra4_1.style.color = 'red'
        letra4_2.style.color = 'red'
        letra6_2.style.color = 'red'
        erro4.innerHTML = 'X'
        erro4.style.color = 'red'
    } 
}

function input5(){
    var palavra = palavra5.value;
    var array = palavra.split('')
    
    letra3_0.innerHTML = array[0].toUpperCase();
    letra5_0.innerHTML = array[0].toUpperCase();
    letra5_1.innerHTML = array[1].toUpperCase();
    letra5_2.innerHTML = array[2].toUpperCase();

    if (palavra == 'rom'){
        palavra5.style.color = 'greenyellow'
        letra3_0.style.color = 'greenyellow'
        letra5_0.style.color = 'greenyellow'
        letra5_1.style.color = 'greenyellow'
        letra5_2.style.color = 'greenyellow'
        erro5.innerHTML = '✔'
        erro5.style.color = 'greenyellow'
    } else {
        palavra5.style.color = 'red';
        letra3_0.style.color = 'red'
        letra5_0.style.color = 'red'
        letra5_1.style.color = 'red'
        letra5_2.style.color = 'red'
        erro5.innerHTML = 'X'
        erro5.style.color = 'red'
    } 
}

function input6(){
    var palavra = palavra6.value;
    var array = palavra.split('')
    
    letra6_0.innerHTML = array[0].toUpperCase();
    letra6_1.innerHTML = array[1].toUpperCase();
    letra6_2.innerHTML = array[2].toUpperCase();
    letra6_3.innerHTML = array[3].toUpperCase();
    letra6_4.innerHTML = array[4].toUpperCase();
    
    
    if (palavra == 'eprom'){
        palavra6.style.color = 'greenyellow'
        letra6_0.style.color = 'greenyellow'
        letra6_1.style.color = 'greenyellow'
        letra6_2.style.color = 'greenyellow'
        letra6_3.style.color = 'greenyellow'
        letra6_4.style.color = 'greenyellow'
        erro6.innerHTML = '✔'
        erro6.style.color = 'greenyellow'
    } else {
        palavra6.style.color = 'red'
        letra6_0.style.color = 'red'
        letra6_1.style.color = 'red'
        letra6_2.style.color = 'red'
        erro6.innerHTML = 'X'
        erro6.style.color = 'red'
    } 
}

function input7(){
    var palavra = palavra7.value;
    var array = palavra.split('')
    
    letra7_0.innerHTML = array[0].toUpperCase();
    letra7_1.innerHTML = array[1].toUpperCase();
    letra7_2.innerHTML = array[2].toUpperCase();
    letra7_3.innerHTML = array[3].toUpperCase();
    letra7_4.innerHTML = array[4].toUpperCase();
    
    
    if (palavra == 'flash'){
        palavra7.style.color = 'greenyellow'
        letra7_0.style.color = 'greenyellow'
        letra7_1.style.color = 'greenyellow'
        letra7_2.style.color = 'greenyellow'
        letra7_3.style.color = 'greenyellow'
        letra7_4.style.color = 'greenyellow'
        erro7.innerHTML = '✔'
        erro7.style.color = 'greenyellow'
    } else {
        palavra7.style.color = 'red'
        letra7_0.style.color = 'red'
        letra7_1.style.color = 'red'
        letra7_2.style.color = 'red'
        erro7.innerHTML = 'X'
        erro7.style.color = 'red'
    } 
}

function input8(){
    var palavra = palavra8.value;
    var array = palavra.split('')

    letra8_0.innerHTML = array[0].toUpperCase();
    letra8_1.innerHTML = array[1].toUpperCase();
    letra8_2.innerHTML = array[2].toUpperCase();
    letra8_3.innerHTML = array[3].toUpperCase();
    letra8_4.innerHTML = array[4].toUpperCase();
    letra3_10.innerHTML = array[4].toUpperCase();
    letra8_5.innerHTML = array[5].toUpperCase();
    letra8_6.innerHTML = array[6].toUpperCase();
    letra8_7.innerHTML = array[7].toUpperCase();
    letra8_8.innerHTML = array[8].toUpperCase();
    letra8_9.innerHTML = array[9].toUpperCase();
    letra6_4.innerHTML = array[9].toUpperCase();
    letra8_10.innerHTML = array[10].toUpperCase();
    letra8_11.innerHTML = array[11].toUpperCase();
    letra8_12.innerHTML = array[12].toUpperCase();
    letra8_13.innerHTML = array[13].toUpperCase();

    if (palavra == 'memoriademassa'){
        palavra8.style.color = 'greenyellow';
        letra8_0.style.color = 'greenyellow'
        letra8_1.style.color = 'greenyellow'
        letra8_2.style.color = 'greenyellow'
        letra8_3.style.color = 'greenyellow'
        letra8_4.style.color = 'greenyellow'
        letra8_5.style.color = 'greenyellow'
        letra8_6.style.color = 'greenyellow'
        letra8_7.style.color = 'greenyellow'
        letra8_8.style.color = 'greenyellow'
        letra8_9.style.color = 'greenyellow'
        letra8_10.style.color = 'greenyellow'
        letra8_11.style.color = 'greenyellow'
        letra8_12.style.color = 'greenyellow'
        letra8_13.style.color = 'greenyellow'
        letra6_4.style.color = 'greenyellow'
        letra3_10.style.color = 'greenyellow'
        erro8.innerHTML = '✔'
        erro8.style.color = 'greenyellow'
    } else {
        palavra8.style.color = 'red';
        letra8_0.style.color = 'red'
        letra8_1.style.color = 'red'
        letra8_2.style.color = 'red'
        letra8_3.style.color = 'red'
        letra8_4.style.color = 'red'
        letra8_5.style.color = 'red'
        letra8_6.style.color = 'red'
        letra8_7.style.color = 'red'
        letra8_8.style.color = 'red'
        letra8_9.style.color = 'red'
        letra8_10.style.color = 'red'
        letra8_11.style.color = 'red'
        letra8_12.style.color = 'red'
        letra8_13.style.color = 'red'
        letra6_4.style.color = 'red'
        letra3_10.style.color = 'red'
        erro8.style.color = 'red'
        erro8.innerHTML = 'X'
        erro8.style.color = 'red'
    } 
}

function input9(){
    var palavra = palavra9.value;
    var array = palavra.split('')
    
    letra9_0.innerHTML = array[0].toUpperCase();
    letra9_1.innerHTML = array[1].toUpperCase();
    letra9_2.innerHTML = array[2].toUpperCase();

    if (palavra == 'dma'){
        palavra9.style.color = 'greenyellow'
        letra9_0.style.color = 'greenyellow'
        letra9_1.style.color = 'greenyellow'
        letra9_2.style.color = 'greenyellow'
        erro9.innerHTML = '✔'
        erro9.style.color = 'greenyellow'
    } else {
        palavra9.style.color = 'red';
        letra9_0.style.color = 'red'
        letra9_1.style.color = 'red'
        letra9_2.style.color = 'red'
        erro9.innerHTML = 'X'
        erro9.style.color = 'red'
    } 
}

function input10(){
    var palavra = palavra10.value;
    var array = palavra.split('')
    
    letra10_0.innerHTML = array[0].toUpperCase();
    letra10_1.innerHTML = array[1].toUpperCase();
    letra8_12.innerHTML = array[1].toUpperCase();
    
    if (palavra == 'cs'){
        palavra10.style.color = 'greenyellow'
        letra10_0.style.color = 'greenyellow'
        letra10_1.style.color = 'greenyellow'
        letra8_12.style.color = 'greenyellow'
        erro10.innerHTML = '✔'
        erro10.style.color = 'greenyellow'
    } else {
        palavra10.style.color = 'red'
        letra10_0.style.color = 'red'
        letra10_1.style.color = 'red'
        letra8_12.style.color = 'red'
        erro10.innerHTML = 'X'
        erro10.style.color = 'red'
    } 
}

function input11(){
    var palavra = palavra11.value;
    var array = palavra.split('')

    letra7_2.innerHTML = array[0].toUpperCase();
    letra11_0.innerHTML = array[0].toUpperCase();
    letra11_1.innerHTML = array[1].toUpperCase();
    letra11_2.innerHTML = array[2].toUpperCase();
    letra11_3.innerHTML = array[3].toUpperCase();
    letra11_4.innerHTML = array[4].toUpperCase();
    letra11_5.innerHTML = array[5].toUpperCase();
    letra11_6.innerHTML = array[6].toUpperCase();
    letra11_7.innerHTML = array[7].toUpperCase();
    letra11_8.innerHTML = array[8].toUpperCase();
    letra11_9.innerHTML = array[9].toUpperCase();
    letra3_4.innerHTML = array[9].toUpperCase();
    
    if (palavra == 'addressbus'){
        palavra11.style.color = 'greenyellow';
        letra11_0.style.color = 'greenyellow'
        letra11_1.style.color = 'greenyellow'
        letra11_2.style.color = 'greenyellow'
        letra11_3.style.color = 'greenyellow'
        letra11_4.style.color = 'greenyellow'
        letra11_5.style.color = 'greenyellow'
        letra11_6.style.color = 'greenyellow'
        letra11_7.style.color = 'greenyellow'
        letra11_8.style.color = 'greenyellow'
        letra11_9.style.color = 'greenyellow'
        letra3_4.style.color = 'greenyellow'
        letra7_2.style.color = 'greenyellow'
        erro11.innerHTML = '✔'
        erro11.style.color = 'greenyellow'
    } else {
        palavra11.style.color = 'red';
        letra11_0.style.color = 'red'
        letra11_1.style.color = 'red'
        letra11_2.style.color = 'red'
        letra11_3.style.color = 'red'
        letra11_4.style.color = 'red'
        letra11_5.style.color = 'red'
        letra11_6.style.color = 'red'
        letra11_7.style.color = 'red'
        letra11_8.style.color = 'red'
        letra11_9.style.color = 'red'
        letra3_4.style.color = 'red'
        letra7_2.style.color = 'red'
        erro11.style.color = 'red'
        erro11.innerHTML = 'X'
        erro11.style.color = 'red'
    } 
}

function input12(){
    var palavra = palavra12.value;
    var array = palavra.split('')
    
    letra9_0.innerHTML = array[0].toUpperCase();
    letra12_0.innerHTML = array[0].toUpperCase();
    letra12_1.innerHTML = array[1].toUpperCase();
    letra12_2.innerHTML = array[2].toUpperCase();
    letra12_3.innerHTML = array[3].toUpperCase();
    letra12_4.innerHTML = array[4].toUpperCase();
    letra12_5.innerHTML = array[5].toUpperCase();
    letra12_6.innerHTML = array[6].toUpperCase();
    letra3_12.innerHTML = array[6].toUpperCase();
    
    if (palavra == 'databus'){
        palavra12.style.color = 'greenyellow'
        letra9_0.style.color = 'greenyellow'
        letra12_0.style.color = 'greenyellow'
        letra12_1.style.color = 'greenyellow'
        letra12_2.style.color = 'greenyellow'
        letra12_3.style.color = 'greenyellow'
        letra12_4.style.color = 'greenyellow'
        letra12_5.style.color = 'greenyellow'
        letra12_6.style.color = 'greenyellow'
        letra3_12.style.color = 'greenyellow'
        erro12.innerHTML = '✔'
        erro12.style.color = 'greenyellow'
    } else {
        palavra12.style.color = 'red'
        letra9_0.style.color = 'red'
        letra12_0.style.color = 'red'
        letra12_1.style.color = 'red'
        letra12_2.style.color = 'red'
        letra12_3.style.color = 'red'
        letra12_4.style.color = 'red'
        letra12_5.style.color = 'red'
        letra12_6.style.color = 'red'
        letra3_12.style.color = 'red'
        erro12.innerHTML = 'X'
        erro12.style.color = 'red'
    } 
}

function input13(){
    var palavra = palavra13.value;
    var array = palavra.split('')

    letra3_3.innerHTML = array[0].toUpperCase();
    letra13_0.innerHTML = array[0].toUpperCase();
    letra13_1.innerHTML = array[1].toUpperCase();

    if (palavra == 'i5'){
        palavra13.style.color = 'greenyellow'
        letra13_0.style.color = 'greenyellow'
        letra13_1.style.color = 'greenyellow'
        letra3_3.style.color = 'greenyellow'
        erro13.innerHTML = '✔'
        erro13.style.color = 'greenyellow'
    } else {
        palavra13.style.color = 'red';
        letra13_0.style.color = 'red'
        letra13_1.style.color = 'red'
        letra3_3.style.color = 'red'
        erro13.style.color = 'red'
        erro13.innerHTML = 'X'
        erro13.style.color = 'red'
    } 
}

function input14(){
    var palavra = palavra14.value;
    var array = palavra.split('')

    letra8_5.innerHTML = array[0].toUpperCase();
    letra14_0.innerHTML = array[0].toUpperCase();
    letra14_1.innerHTML = array[1].toUpperCase();

    if (palavra == 'i7'){
        palavra14.style.color = 'greenyellow'
        letra14_0.style.color = 'greenyellow'
        letra14_1.style.color = 'greenyellow'
        letra8_5.style.color = 'greenyellow'
        erro14.innerHTML = '✔'
        erro14.style.color = 'greenyellow'
    } else {
        palavra14.style.color = 'red';
        letra14_0.style.color = 'red'
        letra14_1.style.color = 'red'
        letra8_5.style.color = 'red'
        erro14.style.color = 'red'
        erro14.innerHTML = 'X'
        erro14.style.color = 'red'
    } 
}

function input15(){
    var palavra = palavra15.value;
    var array = palavra.split('')
    
    letra15_0.innerHTML = array[0].toUpperCase();
    letra15_1.innerHTML = array[1].toUpperCase();
    letra15_2.innerHTML = array[2].toUpperCase();
    letra15_3.innerHTML = array[3].toUpperCase();
    letra15_5.innerHTML = array[4].toUpperCase();
    letra15_6.innerHTML = array[5].toUpperCase();
    letra15_7.innerHTML = array[7].toUpperCase();
    letra11_3.innerHTML = array[6].toUpperCase();
    letra15_8.innerHTML = array[7].toUpperCase();
    
    if (palavra == 'dualcore'){
        palavra15.style.color = 'greenyellow'
        letra15_0.style.color = 'greenyellow'
        letra15_1.style.color = 'greenyellow'
        letra15_2.style.color = 'greenyellow'
        letra15_3.style.color = 'greenyellow'
        letra15_5.style.color = 'greenyellow'
        letra15_6.style.color = 'greenyellow'
        letra15_7.style.color = 'greenyellow'
        letra15_8.style.color = 'greenyellow'
        letra11_3.style.color = 'greenyellow'
        erro15.innerHTML = '✔'
        erro15.style.color = 'greenyellow'
    } else {
        palavra15.style.color = 'red'
        letra15_0.style.color = 'red'
        letra15_1.style.color = 'red'
        letra15_2.style.color = 'red'
        letra15_3.style.color = 'red'
        letra15_5.style.color = 'red'
        letra15_6.style.color = 'red'
        letra15_7.style.color = 'red'
        letra15_8.style.color = 'red'
        letra11_3.style.color = 'red'
        erro15.innerHTML = 'X'
        erro15.style.color = 'red'
    } 
}

function input16(){
    var palavra = palavra16.value;
    var array = palavra.split('')
    
    letra16_0.innerHTML = array[0].toUpperCase();
    letra15_1.innerHTML = array[1].toUpperCase();
    letra16_1.innerHTML = array[1].toUpperCase();
    letra16_2.innerHTML = array[2].toUpperCase();
    letra16_3.innerHTML = array[3].toUpperCase();
    letra16_5.innerHTML = array[4].toUpperCase();
    letra16_6.innerHTML = array[5].toUpperCase();
    letra16_7.innerHTML = array[6].toUpperCase();
    letra16_8.innerHTML = array[7].toUpperCase();
    
    if (palavra == 'quadcore'){
        palavra16.style.color = 'greenyellow'
        letra16_0.style.color = 'greenyellow'
        letra16_1.style.color = 'greenyellow'
        letra15_1.style.color = 'greenyellow'
        letra16_2.style.color = 'greenyellow'
        letra16_3.style.color = 'greenyellow'
        letra16_5.style.color = 'greenyellow'
        letra16_6.style.color = 'greenyellow'
        letra16_7.style.color = 'greenyellow'
        letra16_8.style.color = 'greenyellow'
        erro16.innerHTML = '✔'
        erro16.style.color = 'greenyellow'
    } else {
        palavra16.style.color = 'red'
        letra16_0.style.color = 'red'
        letra16_1.style.color = 'red'
        letra15_1.style.color = 'red'
        letra16_2.style.color = 'red'
        letra16_3.style.color = 'red'
        letra16_5.style.color = 'red'
        letra16_6.style.color = 'red'
        letra16_7.style.color = 'red'
        letra16_8.style.color = 'red'
        letra11_3.style.color = 'red'
        erro16.innerHTML = 'X'
        erro16.style.color = 'red'
    } 
}