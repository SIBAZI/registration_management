let new_car = document.querySelector(".new-car");
let secondhand_car = document.querySelector(".secondhand-car");

let select_new_car = document.querySelector(".select-new-car");
let new_car_standard_size_car = document.querySelector(".new-car-standard-size-car");
let new_car_light_car = document.querySelector(".new-car-light-car");

new_car.onclick = function (e) {
    e.stopPropagation();
    select_new_car.classList.add('up1');
    new_car_standard_size_car.classList.add('up1');
    new_car_light_car.classList.add('up1');
    new_car.classList.add('none');
    secondhand_car.classList.add('none');

}

let select_secondhand_car = document.querySelector(".select-secondhand-car");
let secondhand_car_standard_size_car = document.querySelector('.secondhand-car-standard-size-car');
let secondhand_car_light_car = document.querySelector('.secondhand-car-light-car');

secondhand_car.onclick = function (e) {
    e.stopPropagation();
    select_secondhand_car.classList.add('up2');
    secondhand_car_standard_size_car.classList.add('up2');
    secondhand_car_light_car.classList.add('up2');
    new_car.classList.add('none');
    secondhand_car.classList.add('none');
}

let select_new_car_standard_size_car = document.querySelector(".select-new-car-standard-size-car");
let new_car_standard_size_car_cash = document.querySelector(".new-car-standard-size-car-cash");
let new_car_standard_size_car_credit = document.querySelector(".new-car-standard-size-car-credit");

new_car_standard_size_car.onclick = function (e) {
    e.stopPropagation();
    new_car_standard_size_car.classList.remove('up1');
    new_car_light_car.classList.remove('up1');
    select_new_car_standard_size_car.classList.add('up3');
    new_car_standard_size_car_cash.classList.add('up3');
    new_car_standard_size_car_credit.classList.add('up3');
}

let select_new_car_light_car = document.querySelector(".select-new-car-light-car");
let new_car_light_car_cash = document.querySelector(".new-car-light-car-cash");
let new_car_light_car_credit = document.querySelector(".new-car-light-car-credit");

new_car_light_car.onclick = function (e) {
    e.stopPropagation();
    new_car_standard_size_car.classList.remove('up1');
    new_car_light_car.classList.remove('up1');
    select_new_car_light_car.classList.add('up4');
    new_car_light_car_cash.classList.add('up4');
    new_car_light_car_credit.classList.add('up4');
}

let select_secondhand_car_standard_size_car = document.querySelector(".select-secondhand-car-standard-size-car");
let secondhand_car_standard_size_car_cash = document.querySelector(".secondhand-car-standard-size-car-cash");
let secondhand_car_standard_size_car_credit = document.querySelector(".secondhand-car-standard-size-car-credit");

secondhand_car_standard_size_car.onclick = function (e) {
    e.stopPropagation();
    secondhand_car_standard_size_car.classList.remove('up2');
    secondhand_car_light_car.classList.remove('up2');
    select_secondhand_car_standard_size_car.classList.add('up5');
    secondhand_car_standard_size_car_cash.classList.add('up5');
    secondhand_car_standard_size_car_credit.classList.add('up5');
}

let select_secondhand_car_light_car = document.querySelector(".select-secondhand-car-light-car");
let secondhand_car_light_car_cash = document.querySelector(".secondhand-car-light-car-cash");
let secondhand_car_light_car_credit = document.querySelector(".secondhand-car-light-car-credit");

secondhand_car_light_car.onclick = function (e) {
    e.stopPropagation();
    secondhand_car_standard_size_car.classList.remove('up2');
    secondhand_car_light_car.classList.remove('up2');
    select_secondhand_car_light_car.classList.add('up6');
    secondhand_car_light_car_cash.classList.add('up6');
    secondhand_car_light_car_credit.classList.add('up6');
}



