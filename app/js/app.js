import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import VueResouorce from 'vue-resource';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(VueClipboard);
Vue.use(VueResouorce);

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

const defaultSender = ["s-f","s-m","s-n"];
const defaultReceiver = ["r-f","r-m","r-n"];
const defaultType = ["formal","informal"];
const defaultLanguage = ["deu","eng","spa","fra","ita"];

const messages = {
    de: {
        general: {
            filterGreetings: 'Grußformeln filtern',
            newGreeting: 'Neuer Gruß',
            applyFilters: 'Filter anwenden',
            resetFilters: 'Filter aufheben',
        },
        filters: {
            sender: 'Von',
            receiver: 'An',
            form: 'Form',
            language: 'Sprache',
            female: 'Weiblich',
            male: 'Männlich',
            neutral: 'Neutral',
            formal: 'Formal',
            informal: 'Informal',
            english: 'Englisch',
            french: 'Französisch',
            german: 'Deutsch',
            italian: 'Italienisch',
            spanish: 'Spanisch'
        },
        errors: {
            noMatches: 'Es wurde leider keine passende Grußformel gefunden. Bitte nutzen Sie eine andere Filterkombination.'
        }
    },
    en: {
        general: {
            filterGreetings: 'Filter Greetings',
            newGreeting: 'New Greeting',
            applyFilters: 'Apply Filters',
            resetFilters: 'Clear Filters',
        },
        filters: {
            sender: 'From',
            receiver: 'To',
            form: 'Politeness',
            language: 'Language',
            female: 'Female',
            male: 'Male',
            neutral: 'Neutral',
            formal: 'Formal',
            informal: 'Informal',
            english: 'English',
            french: 'French',
            german: 'German',
            italian: 'Italian',
            spanish: 'Spanish',
        },
        errors: {
            noMatches: 'We could not find a matching greeting. Please try some other filters.'
        }
    }
};

function checkLocale() {
    const selectedLanguage = document.querySelector("#languageSelect").value;
    if (selectedLanguage === 'English') {
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
        filter_sender: defaultSender,
        filter_receiver: defaultReceiver,
        filter_type: defaultType,
        filter_language: defaultLanguage,
        error: false,
    },
    computed: {
        senderParam() {
            if (this.filter_sender.length) {
                return this.filter_sender.join('X');
            }
            return defaultSender.join('X');
        },
        receiverParam() {
            if (this.filter_receiver.length) {
                return this.filter_receiver.join('X');
            }
            return defaultReceiver.join('X');
        },
        typeParam() {
            if (this.filter_type.length) {
                return this.filter_type.join('X');
            }
            return defaultType.join('X');
        },
        lanugageParam() {
            if (this.filter_language.length) {
                return this.filter_language.join('X');
            }
            return defaultLanguage.join('X');
        },
        copyMessage() {
            return `»${this.salute.quote}« \n
            ${this.salute.title}
            ${this.salute.edition}
            ${this.salute.fullURL}
            powered by quoteSalute, https://correspsearch.net/salute/index.xql
            `;
        }

    },
    methods: {
        refresh() {
            let baseURL = "https://correspsearch.net/salute/abfrage.xql";
            //AJAX AUFRUF
            this.$http.get(baseURL, {params: {
                    sender: this.senderParam,
                    receiver: this.receiverParam,
                    type: this.typeParam,
                    language: this.lanugageParam
                }
            }).then(response => {
                const { quote, title, edition, url, licence } = response.body;
                this.salute = new Salute(quote, title, edition, url.target, licence);
                this.error = false;
            }).catch(error => {
                console.log(error);
                this.error = true;
            });

            console.log(this.filter_language);
        },
        filterClear() {
                this.filter_sender = clearSender,
                this.filter_receiver = clearReceiver,
                this.filter_type = clearType,
                this.filter_language = clearLanguage;
        }
    },
    mounted() {
        this.refresh();
    }
});
