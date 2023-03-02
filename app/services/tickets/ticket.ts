import {IVipTicket, TicketType} from "../../models/ticket/ticket";
import {getTicketById, postTicketData} from "@rest/tickets";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {initTicketElementTemplate} from "../../templates/ticketInfo";


let ticketInstance: TicketType ;
let ticketPostInstance;
const clientType = "custom";

export function initApp(): void {
    const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('someId');
    ticketData.then((data): void => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}

export function initTicketInfo(ticket: TicketType): void {
    const targetElement = document.querySelector('.ticket-info');

    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }

    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];

    let ticketElemTemplate;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj;
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

export function initPostData(data):void {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

export function registerConfirmButton(): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}