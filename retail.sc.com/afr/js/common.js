var TIMEOUT_BUFFER = 60;
var TIMEOUT_MSG = "Your session has expired. Please click 'OK' to login again.";
var contextPath = "/nfs";
var TIMEOUT_REDIRECT = "/login.htm?timeout=1";

document.onkeydown = onKeyPress

function onKeyPress(e) {
    try {
        if (window.event && window.event.keyCode == 116) {
            window.event.keyCode = 505;
            return false;
        } else if (e && e.keyCode == 116) {
            return false;
        }
    } catch (e) {}
}

validateBrowser();

function validateBrowser() {
    if (self == top) {
        document.documentElement.style.display = 'block';
    } else {
        top.location = self.location;
    }

    if (document.layers) {
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown = clickNS;

    } else if (document.all && !document.getElementById) {
        document.onmousedown = clickIE;
    }

    document.oncontextmenu = new Function("return false");
}

function processLinks() {
    var links = document.getElementsByTagName('a');
    var thisUrl = new String(window.location);
    var thisDomain = thisUrl.substring(0, thisUrl.indexOf(contextPath)) + contextPath;
    for (i = 0; i < links.length; i++) {
        link = links[i].href;
        className = links[i].className;
        if (link != null && link.length > 0 && !link.match('javascript') && link.indexOf(thisDomain) != -1 && !className.match('dp-choose-date')) {
            links[i].href = appendRequestId(link);

            try {
                if (links[i].onclick == null && (links[i].target == null || links[i].target == '')) {
                    links[i].onclick = function onclick(event) {
                        blockUI();
                    };
                }
            } catch (e) {}
        }
    }
}

function clickIE() {
    return (event.button != 2);
}

function clickNS(e) {
    if (document.layers || document.getElementById && !document.all) {
        if (e.which == 2 || e.which == 3) {
            return false;
        }
    }

    return true;
}

function validateCookies() {
    var warnMsg = 'Cookies are not currently enabled or had been removed. Kindly check the cookies setting of your browser!';
    var session_cookie = Get_Cookie('JSESSIONID');
    var custom_cookie = Get_Cookie('orr_cookie');
    if ((session_cookie == null || session_cookie == "") &&
        (custom_cookie == null || custom_cookie == "")) {
        //alert(warnMsg);
        //alert("session_cookie,custom_cookie,sc-parent-menu,IBANK_COOKIE-" + session_cookie + "," + custom_cookie + "," + Get_Cookie('sc-parent-menu') + "," + Get_Cookie('IBANK_COOKIE'));
    }
}

function Get_Cookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1)
                c_end = document.cookie.length;

            return unescape(document.cookie.substring(c_start, c_end));
        }
    }

    return '';
}


function Set_Cookie(name, value, expires, path, domain, secure) {
    var today = new Date();
    today.setTime(today.getTime());

    if (expires)
        expires = expires * 1000 * 60 * 60 * 24;

    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" +
        escape(value) +
        ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
}

function Delete_Cookie(name, path, domain) {
    if (Get_Cookie(name))
        document.cookie = name + "=" +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

/*
 * function AutoSubmit(field) { var form = field.form; form.submit(); }
 */

var formSubmited = false;

function checkSubmit() {
    if (formSubmited) {
        return false;
    }

    formSubmited = true;
    return true;
}

function createInputElement(eleType, className, inputName, inputType, inputValue) {
    var newEle = document.createElement(eleType);
    newEle.className = className;
    newEle.id = inputName;
    newEle.name = inputName;
    newEle.type = inputType;
    newEle.value = inputValue;

    return newEle;
}

function createHiddenElement(inputName, inputValue) {
    var thisForm = document.forms[0];
    var newEle = createInputElement('input', '', inputName, 'hidden', inputValue);
    thisForm.appendChild(newEle);

    return newEle;
}

function isNotEmpty(obj) {
    return (obj != undefined && obj != null && obj != '');
}

function submitForm(formAction, methodA) {

    try {
        var submitBtn = document.forms[0].Proceed;
        if (submitBtn != null)
            submitBtn.disabled = true;
    } catch (e) {}

    if (!checkSubmit())
        return;

    blockUI();

    var thisForm = document.forms[0];

    if (formAction != null && formAction != '')
        thisForm.action = formAction;

    if (methodA != null) {
        var method = document.getElementById('a');
        if (!isNotEmpty(method))
            method = document.getElementsByName('a')[0];

        method.value = methodA;
    }

    thisForm.action = appendRequestId(thisForm.action);

    thisForm.submit();
}

function blockUI() {
    try {
        $.blockUI({
            message: null,
            timeout: 10000,
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0
            }
        });
    } catch (e) {}
}

function AutoSubmit(field) {
    submitForm();
}

function onLanguageChange() {
    var lang = document.getElementById("language");
    var length = lang.options.length;
    for (var i = 0; i < length; i++) {
        if (i == lang.selectedIndex)
            document.getElementById("i18n_" + i).style.display = "";
        else
            document.getElementById("i18n_" + i).style.display = "none";
    }
}

function setLanguageOption(i) {
    document.getElementById('language').selectedIndex = i;
    onLanguageChange();
}

function hidePanel() {
    var screenElements = document.getElementsByTagName('a');
    var x = document.getElementsByTagName('tr');

    for (var i = 0; i < screenElements.length; i++) {
        if (screenElements[i].id == "filterEnable") {
            for (var j = 0; j < x.length; j++) {
                if (x[j].id == 'ShowFilter') {
                    x[j].style.display = 'none';
                    hideAllElements(x[j]);
                }
            }
        }
    }
}

function showPanel() {
    var screenElements = document.getElementsByTagName('a');
    var x = document.getElementsByTagName('tr');

    for (var i = 0; i < screenElements.length; i++) {
        if (screenElements[i].id == "filterEnable") {
            for (var j = 0; j < x.length; j++) {
                if (x[j].id == 'ShowFilter') {
                    x[j].style.display = '';
                    showAllElements(x[j]);
                }
            }
        }
    }
}

function showAllElements(parentElem) {
    var elems = parentElem.childNodes;
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].childNodes.length > 0)
            showAllElements(elems[i]);
    }
    if (parentElem.style)
        parentElem.style.display = '';
}

function hideAllElements(parentElem) {
    var elems = parentElem.childNodes;
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].childNodes.length > 0)
            hideAllElements(elems[i]);
    }
    if (parentElem.style)
        parentElem.style.display = 'none';
}

function createDocElement(eleType, eleName, className, innerHTML) {
    var newEle = document.createElement(eleType);

    if (isNotEmpty(eleName)) {
        newEle.id = eleName;
        newEle.name = eleName;
    }

    if (isNotEmpty(className)) {
        newEle.className = className;
    }

    if (isNotEmpty(innerHTML)) {
        newEle.innerHTML = innerHTML;
    }

    return newEle;
}

function arrayContains(pCd, pArray) {
    return $.inArray(pCd, pArray) >= 0;
}

function isValidDate(date_string, format) {
    var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var year;
    var month;
    var day;
    var date_parts = null;
    var rtrn = true;

    if (/^m{1}[.-/]d{1}[.-/]y{1}$/.test(format)) {
        // US Date (m/d/y)
        date_parts = date_string.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{2}|\d{4})$/);
        if (date_parts) {
            month = date_parts[1];
            day = date_parts[2];
            year = date_parts[3];
        }
    } else if (/^m{2}[.-/]d{2}[.-/]y{2}$/.test(format)) {
        // US Short Date (mm/dd/yy)
        date_parts = date_string.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{2})$/);
        if (date_parts) {
            month = date_parts[1];
            day = date_parts[2];
            year = date_parts[3];
        }
    } else if (/^m{2}[.-/]d{2}[.-/]y{4}$/.test(format)) {
        // US Long Date (mm/dd/yyyy)
        date_parts = date_string.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{4})$/);
        if (date_parts) {
            month = date_parts[1];
            day = date_parts[2];
            year = date_parts[3];
        }
    } else if (/^y{1}[.-/]m{1}[.-/]d{1}$/.test(format)) {
        // EU Date (y/m/d)
        date_parts = date_string.match(/^(\d{2}|\d{4})[.-/](\d{1,2})[.-/](\d{1,2})$/);
        if (date_parts) {
            year = date_parts[1];
            month = date_parts[2];
            day = date_parts[3];
        }
    } else if (/^y{2}[.-/]m{2}[.-/]d{2}/.test(format)) {
        // EU Short Date (yy/mm/dd)
        date_parts = date_string.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{1,2})$/);
        if (date_parts) {
            year = date_parts[1];
            month = date_parts[2];
            day = date_parts[3];
        }
    } else if (/^y{4}[.-/]m{2}[.-/]d{2}/.test(format)) {
        // EU Long Date (yyyy/mm/dd)
        date_parts = date_string.match(/^(\d{4})[.-/](\d{1,2})[.-/](\d{1,2})$/);
        if (date_parts) {
            year = date_parts[1];
            month = date_parts[2];
            day = date_parts[3];
        }
    } else if (/^d{2}[.-/]m{2}[.-/]y{4}$/.test(format)) {
        // (dd/mm/yyyy)
        date_parts = date_string.match(/^(\d{1,2})[.-/](\d{1,2})[.-/](\d{4})$/);
        if (date_parts) {
            day = date_parts[1];
            month = date_parts[2];
            year = date_parts[3];
        }
    } else {
        rtrn = false;
    }

    if (date_parts) {
        if (1 <= month && month <= 12) {
            if (month == 2) {
                if (year % 4 != 0 ? false : (year % 100 != 0 ? true : (year % 1000 != 0 ? false : true))) {
                    rtrn = (1 <= day && day <= 29);
                } else {
                    rtrn = (1 <= day && day <= 28);
                }
            } else {
                rtrn = (1 <= day && day <= days[month - 1]);
            }
        } else {
            rtrn = false;
        }
    } else {
        rtrn = false;
    }

    return rtrn;
}

function submitLinkPopup(link, param) {
    var w;

    if (param == null)
        w = window.open(link, 'popup', 'menubar=no,status=no,location=no,toolbar=no');
    else
        w = window.open(link, 'popup', 'menubar=no,status=no,location=no,toolbar=no,' + param);

    w.focus();
}

function isValidCreditCard(cardNumber) {
    var intTotal = 0,
        intLength = 0,
        intDigit = 0,
        intCounter = 0;
    var strDigit = '';
    var isValidCard = false;

    intLength = cardNumber.length;

    for (var i = intLength - 1; i >= 0; i--) {
        strDigit = cardNumber.charAt(i);

        if (isNaN(strDigit)) {
            intTotal = 1;
            break;
        }

        if ((intCounter + 1) % 2 == 0) {
            intDigit = (Number(strDigit) * 2);

            if (intDigit > 9) {
                intDigit = intDigit - 10 + 1;
            }

            intTotal += intDigit;

        } else {
            intTotal += Number(strDigit);
        }

        intCounter++;
    }

    if (intTotal % 10 == 0) {
        isValidCard = true;

    } else {
        isValidCard = false;
    }

    return isValidCard;
}

function i18nRedirect(uri, queryStr, languageTo) {

    var a;

    try {
        a = document.getElementsByName('a')[0].value;
    } catch (e) {
        a = '';
    }

    if (uri.match('_confirm.htm') && a == 'doConfirm') {
        uri = uri.replace('_confirm.htm', '_ack.htm');
        queryStr = 'a=doChangeLanguage';
        createHiddenElement('lang', languageTo);
        submitForm(uri, 'doChangeLanguage');

    } else if (uri.match('_ack.htm') || uri.match('_entry.htm') || uri.match('_confirm.htm')) {
        queryStr = 'a=doChangeLanguage';
        createHiddenElement('lang', languageTo);
        submitForm(uri, 'doChangeLanguage');

    } else if (uri.match('point_accelerator_list.htm') || uri.match('view_reward_list.htm') || uri.match('points_history.htm')) {
        queryStr = 'a=doChangeLanguage';
        createHiddenElement('lang', languageTo);
        submitForm(uri, 'doChangeLanguage');

    } else {
        languageTo = 'lang=' + languageTo;

        if (queryStr == '') {
            queryStr = languageTo;

        } else if (queryStr.match('lang=')) {
            queryStr = queryStr.replace('lang=zh_HK', languageTo)
                .replace('lang=en_HK', languageTo)
                .replace('lang=in_ID', languageTo)
                .replace('lang=en_ID', languageTo);

        } else {
            queryStr = queryStr + "&" + languageTo;
        }

        $(window.location).attr('href', uri + '?' + queryStr);
    }

}

function refreshShoppingCartPanel(items, pointsRedeemed) {
    try {
        if (items != null)
            document.getElementById('panelTotalItems').innerHTML = items;

        if (pointsRedeemed != null)
            document.getElementById('panelPointsRequired').innerHTML = pointsRedeemed;

    } catch (e) {}
}

function replaceSecureInput(vInputElem, vNewValue) {
    var vCurrentValue = vInputElem.value;

    if (isNotEmpty(vCurrentValue) && isNotEmpty(vNewValue)) {
        createHiddenElement(vInputElem.name, vNewValue);
        vInputElem.name = vInputElem.name + 'UI';
        vInputElem.disabled = true;
    }

    return false;
}

function trim(s1) {
    return isNotEmpty(s1) ? s1.replace(/^\s+|\s+$/g, "") : s1;
}

function getLength(vCurrentValue) {
    return isNotEmpty(vCurrentValue) ? vCurrentValue.length : 0;
}

function getTrimValue(vInputElem) {
    var vInputValue;
    if (isNotEmpty(vInputElem)) {
        vInputValue = trim(vInputElem.value);
        vInputElem.value = vInputValue;
    }

    return vInputValue;
}

function appendMask(vMask, vCurrentValue) {
    if (isNotEmpty(vCurrentValue)) {
        var vLen = vCurrentValue.length;
        vMask += (vCurrentValue.substring(vLen - 4, vLen));
    }

    return vMask;
}

function appendLength(vMask, vLen) {
    vMask += ('_' + vLen);
    return vMask;
}

function IsEnterKey(e) {
    var keynum = 0;

    if (window.event) {
        keynum = e.keyCode;

    } else if (e.which) {
        keynum = e.which;
    }

    if (keynum == 13)
        return true;
    else
        return false;
}

function startSessionTimer(timeoutsec, path) {
    window.setTimeout("alertTimeout('" + path + "')", timeoutsec * 1000);
}

function alertTimeout(path) {
    self.location = path + TIMEOUT_REDIRECT;
}

function showPrintLink() {
    var elem = document.getElementById('printContent');
    // var link = document.getElementById('printLink');
    var link = document.getElementById('hover-target-3');
    if (elem == null && link != null)
        link.style.display = 'none';
    else if (link != null)
        link.style.display = 'inline';
}

function showNameTag() {
    var elem = document.getElementById('displayName');
    var label = document.getElementById('nameLabel');
    var name = document.getElementById('nameTag');
    if (elem != null && name != null && label != null) {
        label.style.display = 'none';
        name.style.display = 'none';
    } else if (name != null && label != null) {
        label.style.display = '';
        name.style.display = '';
    }

}

function hideAllHeader() {
    showNameTag();
    var allElem = document.getElementById('displayHeader');
    var dateHeader = document.getElementById('dateHeader');
    var contactUsHeader = document.getElementById('contactUsHeader');
    var faqHeader = document.getElementById('faqHeader');
    var logoutHeader = document.getElementById('logoutHeader');
    var printHeader = document.getElementById('printHeader');
    if (allElem != null) {
        dateHeader.style.display = 'none';
        contactUsHeader.style.display = 'none';
        faqHeader.style.display = 'none';
        logoutHeader.style.display = 'none';
        printHeader.style.display = 'none';
    } else {
        //	    	dateHeader.style.display = '';
        //	    	contactUsHeader.style.display = '';
        //	    	faqHeader.style.display = '';
        //	    	logoutHeader.style.display = '';
        //	    	printHeader.style.display = '';
    }
}

function displayWidget() {
    document.getElementById("widgetDiv").innerHTML = "<br/><iframe src='../../../widget/widget.jsp' frameborder='0' height='285' width='174' scrolling='no'></iframe>";
}

function isMatchRegex(regex, input) {
    try {
        var re = new RegExp(regex);
        if (input.match(re)) {
            return true;
        } else {
            return false;
        }
    } catch (e) {}
}

function displayhide() {
    var screenElements = document.getElementsByTagName('a');
    var x = document.getElementsByTagName('tr');

    for (var i = 0; i < screenElements.length; i++) {
        if (screenElements[i].id == "filterEnable") {
            for (var j = 0; j < x.length; j++) {
                if (x[j].id == 'ShowFilter') {
                    x[j].style.display = '';
                    showAllElements(x[j]);
                }
                if (x[j].id == 'filterMessage') {
                    x[j].style.display = 'none';
                    hideAllElements(x[j]);
                }
            }
        }
    }
}

function displayFilterMessage() {
    var screenElements = document.getElementsByTagName('a');
    var x = document.getElementsByTagName('tr');

    for (var i = 0; i < screenElements.length; i++) {
        if (screenElements[i].id == "filterEnable") {
            for (var j = 0; j < x.length; j++) {
                if (x[j].id == 'ShowFilter') {
                    x[j].style.display = 'none';
                    hideAllElements(x[j]);
                }
                if (x[j].id == 'filterMessage') {
                    x[j].style.display = '';
                    showAllElements(x[j]);
                }
            }
        }
    }
}

function cancelRegistration(msg, link) {
    var isConfirm = confirm(msg);
    if (isConfirm)
        window.location = link;

    return isConfirm;
}

var otpTimer;

function startResendTimer(timeout) {
    otpTimer = setTimeout("displayResendButton()", 1000 * timeout);
}

function stopResendTimer() {
    clearTimeout(otpTimer);
}

function displayResendButton() {
    var resendButtonArea = document.getElementById("resendButtonArea");
    if (resendButtonArea != null)
        resendButtonArea.style.display = "";

    var resendTextArea = document.getElementById("resendTextArea");
    if (resendTextArea != null)
        resendTextArea.style.display = "";

    var btnSpan = document.getElementById('buttonSpan');
    if (btnSpan != null)
        btnSpan.style.display = "";
}

var htmlTitle;
var htmlContent;

function cloneElement(targetElem, srcElem) {
    var newElem;
    var elems = srcElem.childNodes;
    for (var i = 0; i < elems.length; i++) {
        var tmpElem = elems[i];
        var tagName = tmpElem.tagName;
        if (!(tagName == 'SCRIPT' || tagName == 'OPTION' || tagName == 'LINK') && !(tmpElem.id != null && tmpElem.id.indexOf('ignorePrint') >= 0) && !(tmpElem.scope != null && tmpElem.scope == 'ignorePrint')) {
            newElem = tmpElem.cloneNode(false);
            if (tagName == 'A') {
                newElem.href = 'javascript: void(0);';
                newElem.setAttribute('ONCLICK', 'void(0);');
            } else if (tagName == 'SELECT') {
                newElem = createDocElement('SPAN', '', '', tmpElem.options[tmpElem.selectedIndex].text);
            } else if (tagName == 'TEXTAREA') {
                newElem = createDocElement('PRE', '', '', tmpElem.text);
            } else if (tagName == 'INPUT') {
                newElem = createDocElement('SPAN', '', '', tmpElem.value);
            }
            targetElem.appendChild(newElem);
            if (tmpElem.childNodes.length > 0) {
                cloneElement(newElem, tmpElem);
            }
        }
    }
}

function printContent() {
    if (document.getElementById("printTitle") != null) {
        htmlTitle = createDocElement('SPAN', 'htmlTitle', '', '');
        cloneElement(htmlTitle, document.getElementById("printTitle"));
        htmlTitle = htmlTitle.innerHTML;
        var w = window.open(appendRequestId("print.htm"), "printwindow");
        w.focus();
    }

    if (document.getElementById("printRefreshTimestamp") != null) {
        htmlRefreshTimestamp = createDocElement('SPAN', 'htmlRefreshTimestamp', '', '');
        cloneElement(htmlRefreshTimestamp, document.getElementById("printRefreshTimestamp"));
        htmlRefreshTimestamp = htmlRefreshTimestamp.innerHTML;
        var w = window.open(appendRequestId("print.htm"), "printwindow");
        w.focus();
    }

    if (document.getElementById("printContent") != null) {
        htmlContent = createDocElement('SPAN', 'htmlContent', '', '');
        cloneElement(htmlContent, document.getElementById("printContent"));
        htmlContent = htmlContent.innerHTML;
        var w = window.open(appendRequestId("print.htm"), "printwindow");
        w.focus();
    }
    if (document.getElementById("printContentList") != null) {
        htmlContent = createDocElement("SPAN", "htmlContent", "", "");
        cloneElement(htmlContent, document.getElementById("printContentList"));
        htmlContent = htmlContent.innerHTML;
        var w = window.open("print_list.htm", "printwindow");
        w.focus();
    }

}

function appendRequestId(url) {
    var random = '',
        i, j;

    try {
        random = requestId;
    } catch (e) {}

    if (random == null || random.length == 0) {
        for (j = 0; j < 36; j++) {
            i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
            random = random + i;
        }
    }

    if (url.indexOf('?') == -1) {
        url = url + '?r=' + random;

    } else {
        url = url + '&r=' + random;
    }

    return url;
}

function startAutoCloseTimer(timeoutsec) {
    window.setTimeout('checkParent(' + timeoutsec + ');', timeoutsec * 1000);
}

function checkParent(timeoutsec) {
    try {
        if (window.opener == null || window.opener.systemDate == null)
            closeWindow();
        else
            startAutoCloseTimer(timeoutsec);
    } catch (e) {
        closeWindow();
    }
}

function closeWindow() {
    window.open('', '_parent', '');
    window.close();
}

function clearData() {
    var node_list = document.getElementsByTagName('input');
    for (var i = 0; i < node_list.length; i++) {
        var node = node_list[i];
        if (node.getAttribute('type') == 'text') {
            node.value = "";
        }
    }
    var textarea_list = document.getElementsByTagName('textarea');
    for (var i = 0; i < textarea_list.length; i++) {
        var node = textarea_list[i];
        node.value = "";
    }
}

function doTabMouseOver(elementId) {
    // document.getElementById(elementId).style.background = 'url(../foa/theme/default/images/tab/tab.gif) repeat-x 0 -79px';
    document.getElementById(elementId).style.color = '#005d9a';
}

function doTabMouseOut(elementId) {
    // document.getElementById(elementId).style.background = 'url(../foa/theme/default/images/tab/tab.gif) repeat-x 0 -39px';
    document.getElementById(elementId).style.color = '#808080';
}



function scHideFilter() {
    $('.sc-show-toggle').show();
    $('.sc-hide-toggle').hide();
    $('.sc-filter-table').hide();
}

function scShowFilter() {
    $('.sc-show-toggle').hide();
    $('.sc-hide-toggle').show();
    $('.sc-filter-table').show();
}

function get_browser_info() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
            name: 'IE',
            version: (tem[1] || '')
        };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
            return {
                name: 'Opera',
                version: tem[1]
            };
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    return {
        name: M[0],
        version: M[1]
    };
}