

import $ from 'jquery';



export const KEYS = {
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ARROW_LEFT: 39,
    ARROW_RIGHT: 37
}

export class Core {

    constructor(elem, parents) {
        this.el = elem || document.body;
        if (parents) {
            this.el = $(this.el).parents(parents)[0];
        }

        this.$el = $(this.el);

        this.$ = $;
    }

    bind = (ev, func) => {
        this.el.addEventListener(ev, func);
    }

    unbind = (ev, func) => {
        this.el.removeEventListener(ev, func);
    }

    static getKey = () => {
        return "key_" + Math.random(999999) * 10000;
    }

    static getID = () => {
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        return randLetter + Date.now();
    }

    static getQuery = (ji, def) => {
        ji = ji.toLowerCase();
        var hu = window.location.search.substring(1);
        var gy = hu.split(/&|\?/);
        for (let i = 0; i < gy.length; i++) {
            let ft = gy[i].split("=");
            if (ft[0].toLowerCase() === ji) {
                return ft[1];
            }
        }
        return def;
    }

    static setCookie = (cname, cvalue, exdays) => {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    static getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    static toDoubleDigit = (num) => {
        try {
            var n = parseInt(num);
            if (n < 10) {
                return '0' + n;
            }
            return n;
        } catch (error) {
            return '';
        }
    }

    static toDateTime = (date) => {
        try {
            var d = new Date(date);

            var dateString = this.toDateString(d);

            return `${dateString} at ${this.toDoubleDigit(d.getHours())}:${this.toDoubleDigit(d.getMinutes())}`;
        } catch (error) {
            return ''
        }
    }

    static toDateString = (date, pos, str) => {
        try {
            pos = pos || 3;
            str = str || ',';

            var d = new Date(date);

            var dateString = d.toDateString();
            var ds = [dateString.slice(0, pos), str, dateString.slice(pos)].join('');

            return ds;
        } catch (error) {
            return ''
        }
    }

    static removeFromArr = (arr, cond) => {
        try {
            for (let i = arr.length - 1; i >= 0; i--) {
                const item = arr[i];
                if (cond(item)) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        } catch (error) {
            return arr;
        }
    }

    static updateArrItem = (arr, cond, update) => {
        try {
            for (let i = arr.length - 1; i >= 0; i--) {
                const item = arr[i];
                if (cond(item)) {
                    update(item);
                }
            }
            return arr;
        } catch (error) {
            return arr;
        }
    }
}


export class Elem extends Core {

    static copyText = (val) => {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(val).select();
        document.execCommand("copy");
        $temp.remove();
    }


}

export default Core;