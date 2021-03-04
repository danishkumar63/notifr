function notifCustom(message, options = {}, hideClose = false) {
    let element = getElement();
    return show(message, element, options, hideClose);
}

function notifSuccess(message, options = {}, hideClose = false) {
    let element = getElement();
    options.bgColor = options.bgColor ? options.bgColor : '#009900';
    options.color = options.color ? options.color : '#FFFFFF';
    return show(message, element, options, hideClose);
}

function notifError(message, options = {}, hideClose = false) {
    let element = getElement();
    options.bgColor = options.bgColor ? options.bgColor : '#FF0000';
    options.color = options.color ? options.color : '#FFFFFF';
    return show(message, element, options, hideClose);
}

function notifHide() {
    let element = getElement();
    element.style.display = 'none';
}

function getElement() {
    let element = document.getElementById('notifbar-selector');
    if (element == null) {
        element = createElement();
    }
    return element;
}

function show(message, element, options = {}, hideClose) {
    if (message) {
        element.children[0].innerHTML = message;
    }
    element.style.backgroundColor = options.bgColor ? options.bgColor : '#999999';
    element.style.color = options.color ? options.color : '#FFFFFF';
    element.style.fontWeight = options.bold ? 'bold' : 'normal';
    element.style.boxShadow = options.noShadow ? 'none' : "0px 5px 10px #ccc";
    element.children[1].style.display = hideClose ? 'none' : 'block';
    element.style.display = 'flex';

    return {
        til: (timestamp) => {
            if (!timestamp) timestamp = 1000;
            setTimeout(() => {
                notifHide();
            }, timestamp);
        }
    }
}

function createElement() {
    let element = newElement("notifbar-selector");
    document.body.prepend(element);
    return element;
}

function newElement(id) {
    let element = document.createElement('div')
    element.id = id;
    element.style.textAlign = 'center';
    element.style.color = 'white';
    element.style.display = 'flex';
    element.style.margin = '0';
    element.style.position = 'relative';
    element.style.top = '0';
    element.style.left = '0';
    element.style.boxShadow = "0px 5px 10px #ccc";
    element.style.padding = '10px';
    element.style.backgroundColor = 'gray';
    element.appendChild(newContentElement());
    element.appendChild(newCloseElement());
    return element;
}

function newContentElement() {
    let element = document.createElement('div');
    element.id = "notifbar-selector-content";
    element.innerHTML = 'Placeholder';
    element.style.flex = "1";
    element.style.paddingTop = '4px';
    return element;
}

function newCloseElement() {
    let element = document.createElement('div');
    element.id = "notifbar-selector-close";
    element.innerHTML = '&#x2715';
    element.style.cursor = 'pointer';
    element.addEventListener('click', () => notifHide());
    return element;
}

const _notifCustom = notifCustom;
export { _notifCustom as notifCustom };

const _notifHide = notifHide;
export { _notifHide as notifHide };

const _notifSuccess = notifSuccess;
export { _notifSuccess as notifSuccess };

const _notifError = notifError;
export { _notifError as notifError };

