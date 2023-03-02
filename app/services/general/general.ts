
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
import {getTourTemplate} from "../../templates/tours";
import {openModal} from "@services/modal/modalService";

export function initHeaderTitle(ticketName: string, selector): void {
    const headerElement: Element = document.querySelector('header');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName: string, selector): void {
    const headerElement: Element = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

