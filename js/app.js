import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import VueResouorce from 'vue-resource';

Vue.use(VueClipboard);
Vue.use(VueResouorce);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

class Salute {
  constructor(quote, title, edition, fullURL) {
    this.quote = quote;
    this.title = title;
    this.edition = edition;
    this.fullURL = fullURL;
  }
}

const defaultSender = ["s-f","s-m","s-n"];
const defaultReceiver = ["r-f","r-m","r-n"];
const defaultType = ["formal","informal"];

const app = new Vue({
    el: '#app',
    data: {
        salute: new Salute('Hier steht eine Grußformel', 'SaluteSig TechSprint Gruppe', 'TELOTA', 'http://www.bbaw.de/telota/telota'),
        // all defined filter values, to have boxes pre-checked
        filter_sender: defaultSender,
        filter_receiver: defaultReceiver,
        filter_type: defaultType,
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
        copyMessage() {
            return `${this.salute.quote}
            ${this.salute.edition}
            ${this.salute.fullURL}
            ${this.salute.title}`;
        }
    },
    methods: {
        refresh() {
            let baseURL = "http://localhost:8080/exist/apps/salute-demo/abfrage.xql";
            //AJAX AUFRUF
            this.$http.get(baseURL, {params: {
                    sender: this.senderParam,
                    receiver: this.receiverParam,
                    type: this.typeParam
                }
            }).then(response => {
                const { quote, title, edition, url } = response.body;
                this.salute = new Salute(quote, title, edition, url);
                this.error = false;
            }).catch(error => {
                console.log(error);
                this.error = true;
            });

            console.log(this.filter_receiver);
        },
    },
    mounted() {
        this.refresh();
    }
});
