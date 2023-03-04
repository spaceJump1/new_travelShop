import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours/index";
import {getTourTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {initFooterTitle, initHeaderTitle, initToursDivElements} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist



initHeaderTitle('Туры', 'h1');
initFooterTitle('Туры по всему миру', 'h2');
// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
  console.log('call')
  toursDataArray = data;
  initApp(data);
});


// init app

/*
- перенести все методы ниже в раздел services (сюда импортировать и вызывать)
- создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
- Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/

function initApp (data:ITours[]) : void {
  initToursDivElements(data);
}
