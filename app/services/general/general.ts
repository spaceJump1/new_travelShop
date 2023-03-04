
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

export function initTourElemListener(tourWrap: HTMLElement): void {
    tourWrap.addEventListener('click', (ev) => {
        const targetItem = <HTMLElement>ev.target;
        const parentItem = <HTMLElement>targetItem?.parentNode;
        let realTarget;

        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }

        if (realTarget) {
            const dataIndex = realTarget.getAttribute('data-tour-item-index');
            openModal('order', Number(dataIndex));
        }
    });
}

export function initToursDivElements(data): void {

    if (Array.isArray(data)) {
        const rootElement: Element = document.querySelector('.main-app');
        const tourWrap: Element = document.createElement('div');

        tourWrap.classList.add('tour-wrap');

        // init click for modal
        initTourElemListener(<HTMLElement>tourWrap);

        let rootElementData = '';
        data.forEach((el, i) => {
            rootElementData += getTourTemplate(el, i);
        });

        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}