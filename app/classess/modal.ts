
// создать в разделе models интерфейс для класса и  применить реализацию к этому классу
export
  // здесь должны быть поля и методы класса
    class Modal {
    private readonly id: any;
    public static modals: Modal[] = [];

    constructor(id = null) {
        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length).toString();
    }

    public open(template: string): void {
        const divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal-element');

        divWrap.addEventListener('click',
            this.closeModalHandler);
        document.body.appendChild(divWrap);
    }

    public remove(): void {
        const modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    }

    public static removeById(id: any = null): void {
        let modalId = id;

        const findEl = Modal.modals.find(x => x.id === modalId);
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => el.id !== modalId);
        } else {
            if (Array.isArray(Modal.modals)) {
                const lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    }

    private closeModalHandler = (ev: Event) => {
        const target = ev.target as HTMLElement;
        if (target.classList.contains('close-modal')) {
            this.remove();
        }
    }
}
