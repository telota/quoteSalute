import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';
import VueResouorce from 'vue-resource';

Vue.use(VueClipboard);
Vue.use(VueResouorce);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';

class Salute {
  constructor(id, quote, sender, receiver, edition, date, baseURL) {
    this.id = id;
    this.quote = quote;
    this.sender = sender;
    this.receiver = receiver;
    this.edition = edition;
    this.date = date;
    this.baseURL = baseURL;
    this.fullURL = baseURL + id;

    console.log(this);
  }
}

const app = new Vue({
    el: '#app',
    data: {
        salute: new Salute(1, 'Hallo', 'ich', 'du', 'BBAW', '21.03.2018', 'BBAW.de'),
        // all defined filter values, to have boxes pre-checked
        filter: ["sender-f","sender-m","sender-n","receiver-f","receiver-m","receiver-n","formal","informal"]
    },
    methods: {
        refresh() {
            //AJAX AUFRUF
            this.$http.get('http://localhost:8080/exist/apps/salute-demo/abfrage.xql', {params: {sender: filter[0], receiver: filter[1], formal: filter[2]}}).then(response => {
                console.log('Succes');
                console.log(response.body);
            }).catch(error => {
                console.log('Failure');
                console.log(error);
            });

            this.salute = new Salute(1, 'Welt', 'du', 'ich', 'BBAW', '21.03.2018', 'BBAW.de');
            console.log(this.filter);
        },
    },
});
