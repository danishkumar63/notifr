function toastCustom(message, options = {}, time = 2000) {
    let toast = createToastElement();
    return showToast(message, toast, options, time);
}

function toastSuccess(message, options = {}, time = 2000) {
    let toast = createToastElement();
    options.bgColor = options.bgColor ? options.bgColor : '#006400';
    options.color = options.color ? options.color : '#FFFFFF';
    return showToast(message, toast, options, time);
}

function toastError(message, options = {}, time = 2000) {
    let toast = createToastElement();
    options.bgColor = options.bgColor ? options.bgColor : '#FF0000';
    options.color = options.color ? options.color : '#FFFFFF';
    return showToast(message, toast, options, time);
}

function showToast(message, element, options = {}, time) {
    if (message) {
        element.innerHTML = message;
    }
    if (isNaN(time)) {
        time = 2000;
    } else if (time <= 0) {
        time = 2000;
    }
    element.style.backgroundColor = options.bgColor ? options.bgColor : '#999999';
    element.style.color = options.color ? options.color : '#FFFFFF';
    element.style.fontWeight = options.bold ? 'bold' : 'normal';
    element.style.boxShadow = options.noShadow ? 'none' : '0 0 10px gray';
    getToastContainerElement().appendChild(element);
    setTimeout(() => {
        element.style.opacity = '1';
        toastHide(element, time);
    }, 100);
}

function getToastContainerElement() {
    let element = document.getElementById("notifbar-toast-container");
    if (!element) {
        element = createToastContainerElement();
    }
    return element;
}

function createToastContainerElement() {
    let element = newToastContainerElement("notifbar-toast-container");
    document.body.prepend(element);
    return element;
}

function createToastElement() {
    let element = newToastElement("notifbar-toast-selector");
    return element;
}

function newToastContainerElement(id) {
    let element = document.createElement('div');
    element.id = id;
    element.style.display = 'block';
    element.style.position = 'absolute';
    element.style.bottom = '50px';
    element.style.right = '50px';
    element.style.width = '300px';
    element.style.padding = '0';
    return element;
}

function newToastElement(className) {
    let element = document.createElement('div')
    element.className = className;
    element.style.padding = '20px';
    element.style.borderRadius = '5px';
    element.innerHTML = 'Error Occured!';
    element.style.background = 'blue';
    element.style.boxShadow = '0 0 10px gray';
    element.style.color = 'white';
    element.style.transition = '0.2s linear';
    element.style.opacity = '0';
    element.style.marginTop = '10px';
    return element;
}

function toastHide(element, time) {
    setTimeout(() => {
        let container = getToastContainerElement();
        element.style.opacity = '0';
        setTimeout(() => {
            container.removeChild(element);
        }, 100);
    }, time);
}

const _toastCustom = toastCustom;
export { _toastCustom as toastCustom };

const _toastSuccess = toastSuccess;
export { _toastSuccess as toastSuccess };

const _toastError = toastError;
export { _toastError as toastError };