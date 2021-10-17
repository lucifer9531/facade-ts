import Components from "./Components";
import List from "./List";

export interface IInputOptions {
    wrapperEl: HTMLElement;
    placeholderText: string;
    buttonText: string;
}

class Input extends Components {
    private options: IInputOptions;

    constructor(options: IInputOptions) {
        super();
        this.options = options;
    }

    public render() {
        const { placeholderText, buttonText } = this.options;
        this.options.wrapperEl.innerHTML += Components.inputView(
            placeholderText,
            buttonText
        );
    }

    public bindEvent() {
        const oAddBtn: HTMLElement = document.querySelector('.add-btn');
        const oInput: HTMLInputElement = document.querySelector('.todo-input');
        oAddBtn.addEventListener('click', this.handleBtnClick.bind(this, oInput), false);
    }

    private handleBtnClick(inputDom) {
        const val: string = inputDom.value.trim();
        if (val.length) {
            List.addItem(val);
            inputDom.value = '';
        }
    }
}

export default Input;
