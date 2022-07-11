<template>
    <div id="cert">
        <main-template>
            <h3 class="heading">{{ $t('certification.title') }}</h3>
            <p class="subheading">{{ $t('certification.desc') }}</p>

            <b-tabs content-class="mt-3" pills id="global-tabs">
                <b-tab :title="$t('certification.event')">
                    <b-list-group flush>
                        <template v-for="(cert, index) in certs[0].data">
                            <b-list-group-item :key="index" class="certs px-0">
                                <b-row>
                                    <b-col md="3">
                                        <a :href="cert.image" class="lightbox-init mb-3 d-block">
                                            <b-img fluid :src="cert.image" :alt="cert.name" :title="cert.name" class="border rounded" />
                                        </a>
                                    </b-col>
                                    <b-col>
                                        <h3>{{ cert.name }}</h3>
                                        <ul class="list-inline list-icon">
                                            <li class="list-inline-item building">{{ cert.company }}</li>
                                            <li class="list-inline-item calendar-2">{{ $moment(cert.date).format('DD MMMM YYYY') }}</li>
                                        </ul>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </template>
                    </b-list-group>
                </b-tab>
                <b-tab :title="$t('certification.competition')">
                    <b-list-group flush>
                        <template v-for="(cert, index) in certs[2].data">
                            <b-list-group-item :key="index" class="certs px-0">
                                <b-row>
                                    <b-col cols="3" md="2" class="d-flex justify-content-center">
                                        <i v-if="cert.rank === 1" class="fa-solid fa-trophy text-warning" :style="{'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank === 2" class="fa-solid fa-trophy text-light" :style="{'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank === 3" class="fa-solid fa-trophy" :style="{color: '#843e3e', 'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank > 3" class="fa-solid fa-trophy" :style="{color: '#ddd', 'font-size': '3rem'}"></i>
                                    </b-col>
                                    <b-col cols="9" md="10">
                                        <h3>{{ cert.name }}</h3>
                                        <p>{{ ordinal(cert.rank) }} Rank</p>
                                        <ul class="list-inline list-icon">
                                            <li class="list-inline-item building">{{ cert.university }}</li>
                                            <li class="list-inline-item globe">{{ cert.level }}</li>
                                            <li class="list-inline-item calendar">{{ cert.year }}</li>
                                        </ul>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </template>
                    </b-list-group>
                </b-tab>
                <b-tab :title="$t('certification.cert')">
                    <b-list-group flush>
                        <template v-for="(cert, index) in certs[1].data">
                            <b-list-group-item :key="index" class="certs px-0">
                                <b-row>
                                    <b-col md="3">
                                        <a :href="cert.image" class="lightbox-init mb-3 d-block">
                                            <b-img fluid :src="cert.image" :alt="cert.name" :title="cert.name" class="border rounded" />
                                        </a>
                                    </b-col>
                                    <b-col>
                                        <h3>{{ cert.name }}</h3>
                                        <ul class="list-inline list-icon">
                                            <li class="list-inline-item building">{{ cert.company }}</li>
                                            <li class="list-inline-item calendar-2">{{ $moment(cert.date).format('DD MMMM YYYY') }}</li>
                                        </ul>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </template>
                    </b-list-group>
                </b-tab>
            </b-tabs>
        </main-template>
    </div>
</template>

<script>
import SimpleLightbox from "simplelightbox";

export default {
    name: 'Cert',
    head: {
        title: 'Certification and Achievements - Cak Adi'
    },
    methods: {
        ordinal(i) {
            var j = i % 10,
                k = i % 100;
            if (j == 1 && k != 11) {
                return i + "st";
            }
            if (j == 2 && k != 12) {
                return i + "nd";
            }
            if (j == 3 && k != 13) {
                return i + "rd";
            }
            return i + "th";
        },
        toggled(a, b) {
            this.toggler = a;
            this.imageIndex = b;
        }
    },
    data() {
        return {
            certs: [
                {
                    name: this.$t('event'),
                    data: [ 
                        {year: 2022, type: 'cert', company: 'APP Jakarta Polytechnic', name: 'Digital Skill Fair 2022\'s Speaker', 'date': '2022-07-08', 'desc': 'Pemateri untuk acara Digital Skill Fair Politeknik APP Jakarta', 'image' : require('~/images/sertifikasi/dsf.jpg')},
                    ]
                },
                {
                    name: this.$t('certification'),
                    data: [
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn Coding for Marketers', 'date': '2022-07-08', 'image' : require('~/images/sertifikasi/cfm.jpg')},
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn Responsive Web Design', 'date': '2022-07-08', 'image' : require('~/images/sertifikasi/rwd.jpg')},
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn jQuery', 'date': '2022-07-08', 'image' : require('~/images/sertifikasi/jquery.jpg')},
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn Javascript', 'date': '2022-07-08', 'image' : require('~/images/sertifikasi/js.png')},
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn CSS', 'date': '2022-05-01', 'image' : require('~/images/sertifikasi/css.jpg')},
                        {year: 2022, type: 'cert', company: 'SoloLearn', name: 'Sololearn HTML', 'date': '2022-04-30', 'image' : require('~/images/sertifikasi/html.jpg')},
                    ]
                },
                {
                    name: this.$t('competition'),
                    data: [
                        {year: 2021, type: 'competition', name: 'ByTesFest Web Development', rank: 4, year: 2021, university: 'UNS Surakarta', level: 'Tingkat Nasional'},
                        {year: 2021, type: 'competition', name: 'IntechFest 2021', rank: 1, year: 2021, university: 'Politeknik Negeri Bali', level: 'Tingkat Nasional'},
                        {year: 2021, type: 'competition', name: 'Deptics Web Development', rank: 1, year: 2021, university: 'UNIPMA Madiun', level: 'Tingkat Nasional'},
                        {year: 2020, type: 'competition', name: 'ByTesFest Web Development', rank: 1, year: 2020, university: 'UNS Surakarta', level: 'Tingkat Nasional'},
                        {year: 2020, type: 'competition', name: 'SMAZAGO Poster Competition', rank: 3, year: 2020, university: 'SMA Negeri 1 Ponorogo', level: 'Tingkat Provinsi'},
                    ]
                }
            ],
        };
    },
    mounted() {
        var lightbox = new SimpleLightbox('.lightbox-init');
    }
}
</script>