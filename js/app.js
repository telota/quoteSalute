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

const app = new Vue({
    el: '#app',
    data: {
        salute: new Salute('Hier steht eine Grußformel', 'SaluteSig TechSprint Gruppe', 'TELOTA', 'http://www.bbaw.de/telota/telota'),
        // all defined filter values, to have boxes pre-checked
        filter_sender: ["s-f","s-m","s-n"],
        filter_receiver: ["r-f","r-m","r-n"],
        filter_type: ["formal","informal"]
    },
    methods: {
        refresh() {
            let baseURL = "http://localhost:8080/exist/apps/salute-demo/abfrage.xql";
            //AJAX AUFRUF
            this.$http.get(baseURL, {params: {
                    sender: this.filter_sender,
                    receiver: this.filter_receiver,
                    type: this.filter_type
                }
            }).then(response => {
                const { quote, title, edition, url } = response.body;
                this.salute = new Salute(quote, title, edition, url);
            }).catch(error => {
                console.log('Failure');
                console.log(error);
            });

            console.log(this.filter_receiver);
        },
    },
    mounted() {
        this.refresh();
    }
});
