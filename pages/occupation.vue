<template>
    <div id="occupation">
      <main-template>
        <h1 class="heading">{{ $t('occupation.title') }}</h1>
        <h2 class="subheading">{{ $t('occupation.desc') }}</h2>

        <b-list-group flush>
          <template v-for="(work, index) in working[$i18n.locale].data">
            <b-list-group-item>
              <b-row align-content="center" align-v="center">
                <b-col md="3">
                  <img :src="work.img" :alt="work.nama" class="w-100 py-3 mb-3 mb-md-0" />
                </b-col>
                <b-col>
                  <h3 class="h4">{{ work.name }}</h3>
                  <ul class="list-inline list-icon">
                    <li class="list-inline-item briefcase">{{ work.role }}</li>
                    <li class="list-inline-item map">{{ work.location }}</li>
                  </ul>
                  <p class="m-0">{{ $moment(work.start).format('dddd, DD MMMM YYYY') }} &mdash; {{ work.end == null ? $t('occupation.now') : $moment(work.end).format('dddd, DD MMMM YYYY') }}</p>
                </b-col>
              </b-row>
            </b-list-group-item>
          </template>
        </b-list-group>
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
      working: {
        en: {
          data: [
            { name: 'Asean Fintech Group Ltd.', img: require('~/images/companies/afg-logo.webp'), location: 'Semarang, Central Java', start: '2021-11-08', end: '2022-02-14', role: 'Junior Fullstack Web Developer' },
            { name: 'Programmer Ndeso (By Dasa Kreativa Studio)', img: require('~/images/companies/progndes.png'), location: 'Ngawi, East Java', start: '2021-11-01', end: null, role: 'Owner and Content Creator' },
            { name: 'CV. Dokternet Indonesia', img: require('~/images/companies/logo-dokternet.png'), location: 'Sidoarjo, East Java', start: '2021-10-01', end: '2021-10-31', role: 'Frontend Web Engineer' },
            { name: 'Dasa Kreativa Group', img: require('~/images/companies/dasakreativa.png'), location: 'Ngawi, East Java', start: '2021-02-19', end: null, role: 'CEO and Owner' },
          ]
        },
        id: {
          data: [
            { name: 'Asean Fintech Group Ltd.', img: require('~/images/companies/afg-logo.webp'), location: 'Semarang, Jawa Tengah', start: '2021-11-08', end: '2022-02-14', role: 'Fullstack Web Developer Muda' },
            { name: 'Programmer Ndeso (By Dasa Kreativa Studio)', img: require('~/images/companies/progndes.png'), location: 'Ngawi, Jawa Timur', start: '2021-11-01', end: null, role: 'Pemilik dan Pembuat Konten' },
            { name: 'CV. Dokternet Indonesia', img: require('~/images/companies/logo-dokternet.png'), location: 'Sidoarjo, Jawa Timur', start: '2021-10-01', end: '2021-10-31', role: 'Insinyur Frontend Web Muda' },
            { name: 'Dasa Kreativa Group', img: require('~/images/companies/dasakreativa.png'), location: 'Ngawi, Jawa Timur', start: '2021-02-19', end: null, role: 'CEO dan Pemilik' },
          ]
        },
        jv: {
          data: [
            { name: 'Asean Fintech Group Ltd.', img: require('~/images/companies/afg-logo.webp'), location: 'Semarang, Jawa Tengah', start: '2021-11-08', end: '2022-02-14', role: 'Fullstack Web Developer Muda' },
            { name: 'Programmer Ndeso (By Dasa Kreativa Studio)', img: require('~/images/companies/progndes.png'), location: 'Ngawi, Jawa Timur', start: '2021-11-01', end: null, role: 'Sing Ndueni lan Sing Gawe Konten' },
            { name: 'CV. Dokternet Indonesia', img: require('~/images/companies/logo-dokternet.png'), location: 'Sidoarjo, Jawa Timur', start: '2021-10-01', end: '2021-10-31', role: 'Insinyur Frontend Web Muda' },
            { name: 'Dasa Kreativa Group', img: require('~/images/companies/dasakreativa.png'), location: 'Ngawi, Jawa Timur', start: '2021-02-19', end: null, role: 'CEO dan Sing Nduwe' },
          ]
        },
      },
    };
  },
}
</script>