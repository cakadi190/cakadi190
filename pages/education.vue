<template>
  <div id="education">

    <main-template>
      <h3 class="heading">{{ $t('education.title') }}</h3>
      <h2 class="subheading">{{ $t('education.desc') }}</h2>

      <p v-if="status">
        {{ $t('education.subdesc') }} <span :class="'badge badge-'+statusbadge[status]">{{ $t(`education.current.${status}`) }}</span>
      </p>

      <b-list-group flush>
        <template v-for="(school, index) in sekolah[this.$i18n.locale].data">
          <b-list-group-item class="py-4">
            <b-row align-content="center">
              <b-col cols="4" md="3">
                <img :src="school.img" :alt="school.nama" class="w-100" />
              </b-col>
              <b-col>
                <h3 class="h4">{{ school.nama }}</h3>
                <ul class="list-inline list-icon">
                  <li class="list-inline-item map"><span>{{ school.location }}</span></li>
                  <li class="list-inline-item book" v-if="school.jurusan !== null">{{ school.jurusan }}</li>
                </ul>
                <p class="m-0" v-if="$moment().diff(school.start) > 0">{{ $moment(school.start).format('MMMM YYYY') }} &mdash; {{ school.end == null ? 'Sekarang' : $moment(school.end).format('MMMM YYYY') }}</p>
                <p class="m-0" v-else>{{ $t('education.next', {'date': $moment(school.start).format('MMMM YYYY')}) }}</p>
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
    title: 'Education Histories - Cak Adi'
  },
  computed: {
    status() {
      let sekolah = this.sekolah;
      let momentjs = this.$moment();
      let data     = sekolah[this.$i18n.locale].data[0];

      if(momentjs.diff(data.start) < 0) 
        return "waitstudy"
      else if(momentjs.diff(data.start) > 0 && data.end == null)
        return "study"
      else if(momentjs.diff(data.start) > 0 && momentjs.diff(data.end) > 0 && momentjs.diff(data.end, 'month') <= 1)
        return "freshgrad"
      else 
        return "gapyear"
    }
  },
  data() {
    return {
      statusbadge: {
        "waitstudy": "warning",
        "study": "info",
        "freshgrad": "success",
        "gapyear": "danger",
      },
      sekolah: {
        en: {
          name: 'English',
          data: [
            {jurusan: 'Information Technology 3-years Diploma (D3)', nama: 'Madiun State Polytechnic', start: '2022-08-01', end: null, img: require('~/images/education/pnm.png'), location: 'Madiun, East Java'},
            {jurusan: 'Science and Mathematic', nama: 'Senior High School State 1 Ngawi', start: '2018-06-13', end: '2021-05-03', img: require('~/images/education/smasa-logo.jpeg'), location: 'Ngawi, East Java'},
            {jurusan: null, nama: 'Junior High School State 1 Padas', start: '2015-07-15', end: '2015-06-03', img: require('~/images/education/kemdikbud.png'), location: 'Ngawi, East Java'}
          ]
        },
        id: {
          name: 'Indonesia',
          data: [
            {jurusan: 'Diploma 3 (D3) Teknologi Informasi', nama: 'Politeknik Negeri Madiun', start: '2022-08-01', end: null, img: require('~/images/education/pnm.png'), location: 'Madiun, Jawa Timur'},
            {jurusan: 'Peminatan Matematika & IPA', nama: 'SMA Negeri 1 Ngawi', start: '2018-06-13', end: '2021-05-03', img: require('~/images/education/smasa-logo.jpeg'), location: 'Ngawi, Jawa Timur'},
            {jurusan: null, nama: 'SMP Negeri 1 Padas', start: '2015-07-15', end: '2015-06-03', img: require('~/images/education/kemdikbud.png'), location: 'Ngawi, Jawa Timur'}
          ]
        },
        jv: {
          name: 'Indonesia',
          data: [
            {jurusan: 'Diploma 3 (D3) Teknologi Informasi', nama: 'Politeknik Negeri Madiun', start: '2022-08-01', end: null, img: require('~/images/education/pnm.png'), location: 'Madiun, Jawa Timur'},
            {jurusan: 'Peminatan Matematika & IPA', nama: 'SMA Negeri 1 Ngawi', start: '2018-06-13', end: '2021-05-03', img: require('~/images/education/smasa-logo.jpeg'), location: 'Ngawi, Jawa Timur'},
            {jurusan: null, nama: 'SMP Negeri 1 Padas', start: '2015-07-15', end: '2015-06-03', img: require('~/images/education/kemdikbud.png'), location: 'Ngawi, Jawa Timur'}
          ]
        },
      },
    };
  },
}
</script>