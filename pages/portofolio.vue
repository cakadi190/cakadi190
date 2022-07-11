<template>
  <div id="cert">
    <main-template>

      <h1 class="heading">{{ $tc('portofolio.title') }}</h1>
      <h2 class="subheading">{{ $t('portofolio.desc') }}</h2>

      <div>
        <b-tabs content-class="mt-3" pills id="global-tabs">
          <b-tab :title="$t('portofolio.category.web')">
            <b-list-group flush>
              <template v-if="portos[$i18n.locale].data" v-for="(data, index) in portos[$i18n.locale].data">
                <b-list-group-item class="px-0">
                  <b-row>
                    <b-col lg="5" xl="4">
                      <a :href="data.image" :spinner="true" class="lightbox-init mb-3 mb-lg-0 d-block">
                        <b-img fluid :src="data.image" :alt="data.name" :title="data.name" class="border rounded" />
                      </a>
                    </b-col>
                    <b-col>
                      <div class="d-flex mb-1 justify-content-between align-items-center">
                        <h3 class="h5 m-0">{{ data.name }}</h3>
                        <span :class="'badge badge-'+projectStat[data.status]">{{ $t(`portofolio.status.${data.status}`) }}</span>
                      </div>

                      <ul class="list-inline list-icon">
                        <li class="list-inline-item author">{{ data.owner }}</li>
                        <li class="list-inline-item calendar">{{ $moment(data.date).format("dddd, MMMM Do YYYY") }}</li>
                      </ul>

                      <p class="text-muted">{{ data.desc }}</p>

                      <b-button class="d-inline-flex align-items-center" variant="primary" :disabled="!data.website" _target="blank" :href="!data.website ? '' : data.website" size="sm">{{ $t('portofolio.btn.owner') }}<i class="fa-solid fa-chevron-right ml-2 mr-1"></i></b-button>
                      <b-button class="d-inline-flex align-items-center" variant="primary" :disabled="!data.url" _target="blank" :href="!data.url ? '' : data.url" size="sm">{{ $t('portofolio.btn.project') }}<i class="fa-solid fa-chevron-right ml-2 mr-1"></i></b-button>
                    </b-col>
                  </b-row>
                </b-list-group-item>
              </template>
            </b-list-group>
          </b-tab>
          <b-tab :title="$t('portofolio.category.graphic')">
            <b-row>
              <template v-for="(data, index) in graphic">
                <b-col md="4" cols="6" class="mb-3">
                  <a :href="data.img" :spinner="true" class="lightbox-init mb-3 mb-lg-0 d-block">
                    <b-img fluid :src="data.img" :alt="data.title" :title="data.title" class="border rounded" />
                  </a>
                </b-col>
              </template>
            </b-row>
          </b-tab>
        </b-tabs>
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
      projectStat: {
        "done": "success",
        "development": "primary",
        "proposal": "info",
        "waiting": "warning",
        "revision": "warning",
        "cancel": "danger",
      },
      portos: {
        en: {
          name: 'Website',
          data: [
            {date: '2022-06-16', name: 'SIDEKA (Information System For "Dewan Kerja")', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), url: 'https://sideka.dkdjatim.or.id', status: 'revision', desc: 'The information system for East Java Provincial Rover and Ranger Council (DKD Jatim) to monitoring and evaluating organizational performance in the regional and lower quarters.'},
            {date: '2022-05-13', name: 'Aprodu', owner: 'Unknown', image: require('~/images/portofolio/aprodu.png'), status: 'cancel', desc: 'System to manage goods data in warehouse and control the flow. This project is a college student project.'},
            {date: '2021-08-08', name: 'PPDB Mahasiswa', owner: 'Diana', image: require('~/images/portofolio/ppdb-mahasiswa.png'), status: 'done', desc: 'The college student registration system with Laravel 8. This project is for helping the last task college student.'},
            {date: '2021-08-07', name: 'Sistem Organisasi Youth Hand', owner: 'Youth Hand', website: 'https://youthhand.web.id', image: require('~/images/portofolio/youthhand.png'), status: 'done', desc: 'The information system for Youth Hand to manage, evaluate and monitoring organizational purpose.'},
          ]
        },
        id: {
          name: 'Website',
          data: [
            {date: '2022-06-16', name: 'SIDEKA (Sistem Informasi Dewan Kerja)', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), url: 'https://sideka.dkdjatim.or.id', status: 'revision', desc: 'Sistem informasi untuk Dewan Kerja Jawa Timur yang bertujuan untuk memantau dan mengevaluasi kinerja organisasi di tingkat daerah, cabang maupun ranting.'},
            {date: '2022-05-13', name: 'Aprodu', owner: 'Unknown', image: require('~/images/portofolio/aprodu.png'), status: 'cancel', desc: 'Sistem untuk mengontrol data barang di gudang. Proyek ini adalah proyek mahasiswa.'},
            {date: '2021-08-08', name: 'PPDB Mahasiswa', owner: 'Diana', image: require('~/images/portofolio/ppdb-mahasiswa.png'), status: 'done', desc: 'Sistem PPDB untuk mahasiswa dengan Laravel 8. Proyek ini untuk membantu siswa dalam menyelesaikan tugas akhir.'},
            {date: '2021-08-07', name: 'Sistem Organisasi Youth Hand', owner: 'Youth Hand', website: 'https://youthhand.web.id', image: require('~/images/portofolio/youthhand.png'), status: 'done', desc: 'Sistem informasi untuk mengevaluasi dan memonitor pergerakan organisasi.'},
          ]
        },
        jv: {
          name: 'Website',
          data: [
            {date: '2022-06-16', name: 'SIDEKA (Sistem Informasi Dewan Kerja)', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), url: 'https://sideka.dkdjatim.or.id', status: 'revision', desc: 'Sistem informasi kanggo Dewan Kerja Jawa Timur sing bertujuan nggo mantau lan ngevaluasi kinerjane organisasi nang tingkat daerah, cabang utowo ranting.'},
            {date: '2022-05-13', name: 'Aprodu', owner: 'Unknown', image: require('~/images/portofolio/aprodu.png'), status: 'cancel', desc: 'Sistem kanggo ngontrol data barang nang gudang. Proyek iki yoiku proyek\'e mahasiswa.'},
            {date: '2021-08-08', name: 'PPDB Mahasiswa', owner: 'Diana', image: require('~/images/portofolio/ppdb-mahasiswa.png'), status: 'done', desc: 'Sistem PPDB kanggo mahasiswa digawe nganggo Laravel 8. Proyek iki kanggo mbantu mahasiswa nggo nyelesekno tugas akhir.'},
            {date: '2021-08-07', name: 'Sistem Organisasi Youth Hand', owner: 'Youth Hand', website: 'https://youthhand.web.id', image: require('~/images/portofolio/youthhand.png'), status: 'done', desc: 'Sistem informasi kanggo ndelok dan mantau pergerakan\'e organisasi.'},
          ]
        }
      },
      graphic: [
        {'title': '40 Tahun PT. Bukit Asam Tbk. Logo Concept', img: require('~/images/portofolio/desain/40th.jpg')},
        {'title': 'Ahsan Camp ITS Logo', img: require('~/images/portofolio/desain/ap.jpg')},
        {'title': 'Ahsan Camp ITS Banner', img: require('~/images/portofolio/desain/ap-banner.jpg')},
        {'title': 'Banner 911 Service Center', img: require('~/images/portofolio/desain/banner-911-sc.jpg')},
        {'title': 'Bulan Pramuka', img: require('~/images/portofolio/desain/bulan-pramuka.jpg')},
        {'title': 'Feed Design Ini Lho ITS', img: require('~/images/portofolio/desain/feed-ilits.jpg')},
        {'title': 'Komat Logo Concept', img: require('~/images/portofolio/desain/komat.jpg')},
        {'title': 'Kopen Logo Concept', img: require('~/images/portofolio/desain/kopen.jpg')},
        {'title': 'Label Parcel Lebaran', img: require('~/images/portofolio/desain/label-lebaran.jpg')},
        {'title': 'Redesign Logo Ambalan SMK Negeri 1 Pancur Batu', img: require('~/images/portofolio/desain/pancur.jpg')},
        {'title': 'Logo Pesta Siaga Kwarcab Ngawi 2021', img: require('~/images/portofolio/desain/pancur.jpg')},
        {'title': 'Logo Raih Sukses', img: require('~/images/portofolio/desain/raihsukses.jpg')},
        {'title': 'Ucapan Idul Fitri PSHT Jogorogo', img: require('~/images/portofolio/desain/psht-jogorogo.jpg')},
        {'title': 'Logo Sidparcab Ngawi 2021', img: require('~/images/portofolio/desain/sidparcab-ngawi.jpg')},
      ],
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.lightbox-init');
  },
}
</script>