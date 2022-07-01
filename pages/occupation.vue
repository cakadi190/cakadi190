<template>
    <div id="occupation">

        <main-template>
            <div class="container mt-3">
              <div class="row justify-content-center min-vh-100 align-items-center">
                <div class="col-md-10 col-lg-8 mt-md-0 mt-5">
                    <h3>Working Experiences</h3>
                    <p>My working experience in entire companies.</p>

                    <template v-for="(work, index) in working">
                      <b-card :key="index" class="shadow mb-3">
                          <b-row align-content="center" align-v="center">
                            <b-col md="3">
                                <img :src="work.img" :alt="work.nama" class="w-100 py-3 mb-3 mb-md-0" />
                            </b-col>
                            <b-col>
                                <h3 class="h4">{{ work.name }}</h3>
                                <p class="text-muted"><span><i class="fa-solid fa-cog mr-2"></i>{{ work.role }}</span>&nbsp; &nbsp;<span><i class="fa-solid fa-map-pin mr-2"></i>{{ work.location }}</span></p>
                                <p class="m-0">{{ work.start }} &mdash; {{ work.end == null ? 'Sekarang' : work.end }}</p>
                            </b-col>
                          </b-row>
                      </b-card>
                    </template>
                </div>
              </div>
            </div>
        </main-template>
    
    </div>
</template>

<script>
export default {
  name: 'WorkExp',
  head: {
    title: 'Occupation Histories - Cak Adi'
  },
  data() {
    return {
      working: [
        { name: 'Asean Fintech Group Ltd.', img: require('~/images/companies/afg-logo.webp'), location: 'Semarang, Jawa Tengah', start: '08 November 2021', end: '14 February 2022', role: 'Junior Fullstack Web Developer' },
        { name: 'Programmer Ndeso (By Dasa Kreativa Studio)', img: require('~/images/companies/progndes.png'), location: 'Ngawi, Jawa Timur', start: '01 November 2021', end: null, role: 'Owner dan Kreator' },
        { name: 'CV. Dokternet Indonesia', img: require('~/images/companies/logo-dokternet.png'), location: 'Sidoarjo, Jawa Timur', start: 'Oktober 2021', end: 'November 2021', role: 'Frontend Web Engineer' },
        { name: 'Dasa Kreativa Group', img: require('~/images/companies/dasakreativa.png'), location: 'Ngawi, Jawa Timur', start: '19 Februari 2021', end: null, role: 'CEO dan Owner' },
      ],
    };
  },
}
</script>