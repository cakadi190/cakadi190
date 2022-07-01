<template>
    <div id="cert">
        <main-template>
            <div class="container">

                <div class="row justify-content-center mt-5 align-items-center">
                    <div class="col-lg-8">

                        <h3>Certification and Achievement</h3>
                        <p>My latest certificate and achievement collection.</p>

                        <template v-for="(cert, index) in certs">
                            <div :key="index" class="certs">
                                <b-row v-if="cert.type !== 'competition'" :class="'mb-4 pb-2' + ((index + 1) !== certs.length ? ' border-bottom' : '')">
                                    <b-col md="3">
                                        <a :href="cert.image" class="images mb-3 d-block">
                                            <b-img fluid :src="cert.image" :alt="cert.name" class="border rounded" />
                                        </a>
                                    </b-col>
                                    <b-col>
                                        <h3>{{ cert.name }}</h3>
                                        <p>{{ cert.desc }}</p>
                                        <p class="m-0">{{ cert.date }}</p>
                                    </b-col>
                                </b-row>
                                <b-row v-else :class="'mb-4 pb-2 align-items-center' + ((index + 1) !== certs.length ? ' border-bottom' : '')">
                                    <b-col cols="3" md="2" class="d-flex justify-content-center">
                                        <i v-if="cert.rank === 1" class="fa-solid fa-trophy text-warning" :style="{'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank === 2" class="fa-solid fa-trophy text-light" :style="{'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank === 3" class="fa-solid fa-trophy" :style="{color: '#843e3e', 'font-size': '3rem'}"></i>
                                        <i v-if="cert.rank > 3" class="fa-solid fa-trophy" :style="{color: '#ddd', 'font-size': '3rem'}"></i>
                                    </b-col>
                                    <b-col cols="9" md="10">
                                        <h3>{{ cert.name }}</h3>
                                        <p>{{ ordinal(cert.rank) }} Rank</p>
                                        <p><i class="fa-solid fa-building mr-2"></i>{{ cert.university }} <i class="fa-solid fa-globe mx-2"></i>{{ cert.level }} <i class="fa-solid fa-calendar mx-auto"></i> {{ cert.year }}</p>
                                    </b-col>
                                </b-row>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
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
        {year: 2022, type: 'cert', name: 'Sololearn CSS Certification', 'date': '1 May 2022', 'desc': 'CSS Course Certification from Sololearn', 'image' : require('~/images/sertifikasi/css.jpg')},
        {year: 2022, type: 'cert', name: 'Sololearn HTML Certification', 'date': '30 April 2022', 'desc': 'HTML Course Certification from Sololearn', 'image' : require('~/images/sertifikasi/html.jpg')},
        {year: 2021, type: 'competition', name: 'ByTesFest Web Development', rank: 4, year: 2021, university: 'UNS Surakarta', level: 'Tingkat Nasional'},
        {year: 2021, type: 'competition', name: 'IntechFest 2021', rank: 1, year: 2021, university: 'Politeknik Negeri Bali', level: 'Tingkat Nasional'},
        {year: 2021, type: 'competition', name: 'Deptics Web Development', rank: 1, year: 2021, university: 'UNIPMA Madiun', level: 'Tingkat Nasional'},
        {year: 2020, type: 'competition', name: 'ByTesFest Web Development', rank: 1, year: 2020, university: 'UNS Surakarta', level: 'Tingkat Nasional'},
        {year: 2020, type: 'competition', name: 'SMAZAGO Poster Competition', rank: 3, year: 2020, university: 'SMA Negeri 1 Ponorogo', level: 'Tingkat Provinsi'},
      ],
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.certs .images');
  }
}
</script>