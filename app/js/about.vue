<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-card-title primary-title>
                        <div id="project-desc">
                            <h3 class="first">{{ $t("about.title") }}</h3>
                            <p>
                                {{ $t("about.paragraph1") }}
                                <a href="index.xql?id=doc&amp;l=de">{{ $t("about.more") }}</a>
                            </p>
                            <p>{{ $t("about.paragraph2") }}</p>
                            <p>{{ $t("about.questions") }}
        
                                <a href="mailto:telota@bbaw.de">
                                        <i class="fa fa-envelope"></i> telota@bbaw.de
                                    </a>
                            </p>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-card-title primary-title>
                        <div id="participate">
                            <h3 class="first">{{ $t("contribute.title") }}</h3>
                    <p>{{ $t("contribute.paragraph") }}
                        <a href="index.xql?id=doc&amp;l=de">{{ $t("contribute.documentation") }}</a>.
                    </p>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-card-title primary-title>
                        <div id="plugin">
                    <h3 class="first">{{ $t("plugin.title") }}</h3>
                    <p>{{ $t("plugin.paragraph") }}
                        <br/>
                        <a href="https://github.com/telota/quoteSalute_xpi/releases/download/v0.2.5/quotesalute-0.2.5_build11.xpi" v-tippy="" v-bind:title="$t('plugin.tooltip')">
                                <i class="fas fa-download"></i> {{ $t("plugin.download") }}</a>
                        <br/>
                        <a href="https://github.com/telota/quotesalute_xpi" target="_blank">
                                <i class="fab fa-github"></i> {{ $t("plugin.documentation") }}</a>
                    </p>
                </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'about'
};
</script>

<style scoped>
</style>
