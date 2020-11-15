const navbar = document.getElementById('navbar');
const app = document.getElementById('app');
const keys = { '#': loadHn, '```': loadCode, '[': loadElement, '>': loadButton };
let loading = false;

/** @param {string} page */
function loadPage(page) { onRequest(page, generatePage) }

/** @param {string} response */
function generatePage(response) {
    if (loading) { return }
    loading = true;
    const page = new PageGenerator('');
    response.split('\n').forEach(line => parseLine(page, line))
    send(page);
}

/** @param {PageGenerator} page
 * @param {string} line */
function parseLine(page, line) {
    if (page.codeName) {
        return line.startsWith('```') ? generateCode(page) : addCode(page, line);
    }
    if (line.trim().length === 0) {
        return addSeparator(page);
    }
    for (const key in keys) {
        if (line.startsWith(key)) {
            return keys[key](page, line);
        }
    }
    loadParagraphe(page, line);
}

/** @param {PageGenerator} page */
function addSeparator(page) { page.app += '<div class="separator"></div>' }

/** @param {PageGenerator} page */
function generateCode(page) {
    page.app += '<pre><code>' + hljs.highlightAuto(page.code).value + '</code></pre>';
    resetCode(page);
}

/** @param {PageGenerator} page
 * @param {string} line */
function addCode(page, line) {
    if (page.code.length > 0) {
        page.code += '\n';
    }
    page.code += line;
}

/** @param {PageGenerator} page */
function resetCode(page) {
    page.code = '';
    page.codeName = false;
}

/** @param {PageGenerator} page
 * @param {string} line */
function loadCode(page, line) { page.codeName = line.replace('```', '') }

/** @param {PageGenerator} page
 * @param {string} line */
function loadHn(page, line) {
    let i = 0;
    for (; i < line.length; i++) { if (line.charAt(i) !== '#') { break; } }
    page.app += '<h' + i + '>' + parseSpan(line.substring(i, line.length)) + '</h' + i + '>';
}

//[section#id="test"#nav=Les éléments de test]
//[div#class="test"]
//[img#onclick="console.log('test')"#ondblclick=""#onmouseout="test"]
/** @param {PageGenerator} page
 * @param {string} line */
function loadElement(page, line) {
    console.log(line);
    const tab = line.substring(1, line.length - 2).trim().split('#');
    if (tab.length === 0) { return }
    page.app += '<' + (tab[0].startsWith('un') ? ('/' + tab[0].substring(2, tab[0].length)) : tab[0])
    let id = '#';
    tab.slice(1, tab.length).forEach(item => {
        if (item.startsWith('id')) {
            id += item
                .replace('id=', '')
                .replace('"', '');
        }
        if (item.startsWith('nav')) {
            page.navbar += '<a href="' + id + '">' + item.replace('nav=', '');
            return;
        }
        page.app += ' ' + item;
    })
    page.app += '>';
    console.log(tab[0]);
}

/** @param {PageGenerator} page
 * @param {string} line */
function loadButton(page, line) {
    const tab = line.substring(1, line.length).trim().split('|');
    if (tab.length === 0 || tab[0].trim().length === 0) { return }
    page.app += '<div class="button"><div class="button-item"';
    if (tab.length > 1) { page.app += ' onclick="loadPage(\'' + tab[1].trim() + '\')"' }
    page.app += '>' + tab[0].trim() + '</div></div>';
}

/** @param {PageGenerator} page
 * @param {string} line */
function loadParagraphe(page, line) { page.app += '<p>' + parseSpan(line) + '</p>'; }

/** @param {PageGenerator} page */
function send(page) {
    app.innerHTML = '';
    navbar.innerHTML = page.navbar;
    window.scrollTo(0, 0);
    let interval = setInterval(() => {
        if (window.scrollY !== 0) { return }
        clearInterval(interval);
        app.innerHTML = page.app;
        loading = false;
    }, 10);
}

/** @param {string} line */
function parseSpan(line) {
    return line
        .replaceAll('{span|alert}', '<span class="alert">')
        .replaceAll('{span|badge}', '<span class="badge">')
        .replaceAll('{span|warn}', '<span class="warn">')
        .replaceAll('{unspan}', '</span>')
}

/** @param {string} fileName
 * @param {function(string)} closure */
function onRequest(fileName, closure) {
    const request = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
    request.onreadystatechange = function() {
        if (request.readyState === request.DONE && request.status === 200) {
            closure(request.responseText);
        }
    }
    request.open('GET', '/javascript-introduction/assets/pages/' + fileName + '.md');
    request.send();
}

class PageGenerator {
    constructor(pageName) {
        this.name = pageName;
        this.app = '';
        this.navbar = '';
        this.codeName = false;
        this.code = '';
    }
}

loadPage('javascript/chapters');

document.getElementById('menuBurger').addEventListener('click', e => {
    if (navbar.classList.contains('active')) { navbar.classList.remove('active') } else { navbar.classList.add('active') }
});
navbar.addEventListener('click', e => navbar.classList.remove('active'))