<template>
    <div id="cert">
        <main-template>
            <div class="container">

                <div class="row justify-content-center mt-5 align-items-center">
                    <div class="col-lg-10">

                        <h3>Portofolios</h3>
                        <p>My latest portofolio collection.</p>

                        <template v-for="(porto, index) in portos">
                            <b-row :class="'portos mb-4 pb-4' + ((index + 1) !== portos.length ? ' border-bottom' : '')">
                                <b-col md="4">
                                    <a :href="porto.image" class="images mb-3 d-block">
                                        <b-img fluid="" :src="porto.image" :alt="porto.name" class="border rounded" />
                                    </a>
                                </b-col>
                                <b-col>
                                    <div class="d-lg-flex mb-2 align-items-center">
                                      <h4 class="m-0">{{ porto.name }}</h4>

                                      <div class="ml-0 ml-lg-2">
                                        <div class="badge px-2 py-1 badge-success" v-if="porto.status.includes('Done')">{{ porto.status }}</div>
                                        <div class="badge px-2 py-1 badge-warning" v-if="porto.status.includes('Revision')">{{ porto.status }}</div>
                                        <div class="badge px-2 py-1 badge-danger" v-if="porto.status.includes('Canceled')">{{ porto.status }}</div>
                                      </div>
                                    </div>
                                    <p class="text-muted">{{ porto.date }}</p>
                                    <p>{{ porto.desc }}</p>

                                    <div class="d-flex align-items-center">
                                      <b-button :disabled="!porto.authorStat" size="sm" :href="porto.website" variant="success">Web Owner<i class="ml-2 fa-solid fa-external-link"></i></b-button>
                                      <b-button class="ml-1" :disabled="!porto.urlStat" size="sm" :href="porto.url" variant="primary">Go To Project<i class="ml-2 fa-solid fa-external-link"></i></b-button>
                                    </div>

                                    <div class="text-sm mt-1">
                                      <small v-if="!porto.authorStat && !porto.urlStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Author and Project Website Isn't Active!</small>
                                      <small v-else-if="!porto.authorStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Author Website Isn't Active!</small>
                                      <small v-else-if="!porto.urlStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Project Website Isn't Active!</small>
                                    </div>
                                </b-col>
                            </b-row>
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
  head: {
    title: 'Portofolios - Cak Adi'
  },
  name: 'Cert',
  data() {
    return {
      toggler: true,
      imageIndex: 0,
      imageSlider: [
        require('~/images/portofolio/sideka.png')
      ],
      portos: [
        {date: '16 June 2022', name: 'SIDEKA (Sistem Informasi Dewan Kerja)', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), urlStat: true, authorStat: true, url: 'https://sideka.dkdjatim.or.id', status: 'Wait For Revision', desc: 'The information system for East Java Provincial Rover and Ranger Council (DKD Jatim) to monitoring and evaluating organizational performance in the regional and lower quarters.'},
        {date: 'April 2022', name: 'Aprodu', owner: 'Unknown', website: '', image: require('~/images/portofolio/aprodu.png'), urlStat: false, authorStat: false, url: '', status: 'Canceled', desc: 'System to manage goods data in warehouse and control the flow. This project is a college student project.'},
        {date: '8 December 2021', name: 'PPDB Mahasiswa', owner: 'Diana', website: '', image: require('~/images/portofolio/ppdb-mahasiswa.png'), urlStat: false, authorStat: false, url: '', status: 'Done', desc: 'The college student registration system with Laravel 8. This project is for helping the last task college student.'},
        {date: 'August 2021', name: 'Sistem Organisasi Youth Hand', owner: 'Youth Hand', website: 'https://youthhand.web.id', image: require('~/images/portofolio/youthhand.png'), urlStat: false, authorStat: false, url: 'https://youthhand.web.id', status: 'Done', desc: 'The information system for Youth Hand to manage, evaluate and monitoring organizational purpose.'},
      ],
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.portos .images');
  },
}
</script>