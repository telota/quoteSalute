import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import VueResouorce from 'vue-resource';
import VueI18n from 'vue-i18n';
import VueTippy from 'vue-tippy';
import de from './lang/de';
import en from './lang/en';

Vue.use(VueI18n)
Vue.use(VueClipboard);
Vue.use(VueResouorce);
Vue.use(VueTippy);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

const licenceDisplay = {
    "http://creativecommons.org/licenses/by-sa/4.0/": "CC BY-SA 4.0",
    "https://creativecommons.org/licenses/by/4.0/": "CC BY 4.0"
}

class Salute {
  constructor(quote, title, edition, fullURL, licenceUrl) {
    this.quote = this.decode(quote);
    this.title = this.decode(title);
    this.edition = this.decode(edition);
    this.fullURL = fullURL;
    this.licenceUrl = licenceUrl;
    this.licence = licenceDisplay[licenceUrl];
  }

  decode(input) {
    return input.replace('&amp;', '&');
  }
}

const clearSender = [];
const clearReceiver = [];
const clearType = [];
const clearLanguage = [];

const allSender = ["s-f","s-m","s-n"];
const allReceiver = ["r-f","r-m","r-n"];
const allType = ["formal","informal"];
const allLanguage = ["deu","eng","spa","fra","ita", "grc", "lat"];



const messages = {
    de,
    en
};

function checkLocale() {
    const selectedLanguage = document.querySelector("#languageSelect");
    if (selectedLanguage === null) {
        return 'de';
    }

    if (selectedLanguage.value === 'English') {
        return 'en';
    }
    
    return 'de';
}

const i18n = new VueI18n({
    locale: checkLocale(),
    messages
});

const app = new Vue({
    i18n,
    el: '#app',
    data: {
        salute: new Salute('Hier steht eine Grußformel', 'quoteSalute TechSprint Gruppe', 'TELOTA', 'http://www.bbaw.de/telota/telota', 'licence'),
        // all defined filter values, to have boxes pre-checked
        filter_sender: clearSender,
        filter_receiver: clearReceiver,
        filter_type: clearType,
        filter_language: clearLanguage,
        error: false,
    },
    computed: {
        senderParam() {
            if (this.filter_sender.length) {
                return this.filter_sender.join('X');
            }
            return allSender.join('X');
        },
        receiverParam() {
            if (this.filter_receiver.length) {
                return this.filter_receiver.join('X');
            }
            return allReceiver.join('X');
        },
        typeParam() {
            if (this.filter_type.length) {
                return this.filter_type.join('X');
            }
            return allType.join('X');
        },
        lanugageParam() {
            if (this.filter_language.length) {
                return this.filter_language.join('X');
            }
            return allLanguage.join('X');
        },
        copyMessage() {
            return `»${this.salute.quote}« \n
            ${this.salute.title}
            ${this.salute.edition}
            ${this.salute.fullURL}
            --
            powered by quoteSalute.net/
            `;
        }

    },
    methods: {
        refresh() {
            let baseURL = "https://correspsearch.net/quotesalute/abfrage.xql/";
            //AJAX AUFRUF
            this.$http.get(baseURL, {params: {
                    sender: this.senderParam,
                    receiver: this.receiverParam,
                    type: this.typeParam,
                    language: this.lanugageParam
                }
            }).then(response => {
                if (_paq !== undefined) {
                    _paq.push(['trackEvent', 'Refresh quoteSalute', response.url]);
                }
                const { quote, title, edition, url, licence } = response.body;
                this.salute = new Salute(quote, title, edition, url, licence);
                this.error = false;
            }).catch(error => {
                console.log(error);
                this.error = true;
            });
        },
        filterClear() {
                this.filter_sender = clearSender,
                this.filter_receiver = clearReceiver,
                this.filter_type = clearType,
                this.filter_language = clearLanguage;
        },
        filterAll() {
                this.filter_sender = allSender,
                this.filter_receiver = allReceiver,
                this.filter_type = allType,
                this.filter_language = allLanguage;
        },
    },
    mounted() {
        this.refresh();
    }
});
