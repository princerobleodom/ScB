String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

if (window.jQuery) {
    function truncateString(str, length) {
        return str.length > length ? str.substring(0, length - 3) + '...' : str
    }

    function postProcess() {

        /**
         * Date picker
         */
        var datePickerEl = $('.date-pick');
        if (datePickerEl.length > 0) {
            $(function() {
                $(datePickerEl).datePicker().dpSetOffset(6, -250).dpSetStartDate('01/01/1920');
            });
        }


        /**
         * Radio buttons
         */
        var radioBtns = $("input:radio");

        if (radioBtns) {
            radioBtns.each(function(key, el) {
                $(el).after('<label><span></span></label>');
            });
        }


        /**
         * Breadcrumbs
         */


        var scPageHeader = $(".sc-page-header__title");
        var breadCrumbTitle = Get_Cookie('sc-parent-menu');
        breadCrumbTitle = (breadCrumbTitle == 'My Preferences') ? false : breadCrumbTitle;

        if (scPageHeader && breadCrumbTitle) {
            $(scPageHeader).prepend('<span class="sc-page-header__breadcrumb"> ' + breadCrumbTitle + ' /</span>');
        }


        /*
         * Truncate
         */


        var userNameEl = $('.profile-header__username');

        if (userNameEl.length > 0) {
            $(userNameEl).text((truncateString($(userNameEl).text(), 35)));
        }



        /*
         * Sentence cases 
         */

        var titleEl = $(".sc-format-title-case");

        if (titleEl.length > 0) {
            titleEl.each(function(key, el) {
                $(el).text(String($(el).text()).toProperCase());
            });
        }

        /**
         * Combo Boxes
         */


        var dropDowns = $("select");

        if (dropDowns.length > 0) {
            dropDowns.each(function(key, el) {
                if (!el.closest('.select-fld')) {
                    $(el).wrap('<div class="select-fld custom-select"></div>');
                }
            });
        }

        //fix all back buttons to have btn flat 
        $("input[name*='Back']").addClass('btn flat ');



        /**
         * Remove txt_error class on TD
         */
        var tableTDs = $("td");

        if (tableTDs) {
            tableTDs.each(function(key, el) {
                $(el).removeClass('txt_error');
            });
        }
    }


    postProcess();

}

function openPopupLink(url) {
    window.open(url, 'window', 'width=1200,height=600,toolbar=0,location=0,status=0,resizable=yes,scrollbars=yes ,menubar=yes');
    return false;
}