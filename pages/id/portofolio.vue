<template>
    <div id="cert">
        <main-template>
            <div class="container">

                <div class="row justify-content-center mt-5 align-items-center">
                    <div class="col-lg-10">

                        <h3>Portofolio</h3>
                        <p>Koleksi portofolio terbaruku.</p>

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
                                        <div class="badge px-2 py-1 badge-success" v-if="porto.status.includes('Selesai')">{{ porto.status }}</div>
                                        <div class="badge px-2 py-1 badge-warning" v-if="porto.status.includes('Revisi')">{{ porto.status }}</div>
                                        <div class="badge px-2 py-1 badge-danger" v-if="porto.status.includes('Batal')">{{ porto.status }}</div>
                                      </div>
                                    </div>
                                    <p class="text-muted">{{ porto.date }}</p>
                                    <p>{{ porto.desc }}</p>

                                    <div class="d-flex align-items-center">
                                      <b-button :disabled="!porto.authorStat" size="sm" :href="porto.website" variant="success">Pemilik Web<i class="ml-2 fa-solid fa-external-link"></i></b-button>
                                      <b-button class="ml-1" :disabled="!porto.urlStat" size="sm" :href="porto.url" variant="primary">Lihat Hasil<i class="ml-2 fa-solid fa-external-link"></i></b-button>
                                    </div>

                                    <div class="text-sm mt-1">
                                      <small v-if="!porto.authorStat && !porto.urlStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Website Pemilik dan Proyek Tidak Aktif!</small>
                                      <small v-else-if="!porto.authorStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Pemilik Website Tidak Aktif!</small>
                                      <small v-else-if="!porto.urlStat" class="text-danger"><i class="fas fa-exclamation-triangle fa-fw"></i> Website Proyek Tidak Aktif!</small>
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
        {date: '16 Juni 2022', name: 'SIDEKA (Sistem Informasi Dewan Kerja)', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), urlStat: true, authorStat: true, url: 'https://sideka.dkdjatim.or.id', status: 'Masih Revisi', desc: 'Sistem informasi Dewan Kerja Daerah Jawa Timur (DKD Jatim) untuk monitoring dan evaluasi kinerja organisasi di kwartir cabang maupun ranting.'},
        {date: 'April 2022', name: 'Aprodu', owner: 'Unknown', website: '', image: require('~/images/portofolio/aprodu.png'), urlStat: false, authorStat: false, url: '', status: 'Canceled', desc: 'Sistem untuk mengelola data barang di gudang dan mengontrol aliran. Proyek ini adalah proyek mahasiswa.'},
        {date: '8 Desember 2021', name: 'PPDB Mahasiswa', owner: 'Diana', website: '', image: require('~/images/portofolio/ppdb-mahasiswa.png'), urlStat: false, authorStat: false, url: '', status: 'Done', desc: 'Sistem pendaftaran mahasiswa dengan Laravel 8. Proyek ini untuk membantu tugas terakhir mahasiswa.'},
        {date: 'Agustus 2021', name: 'Sistem Organisasi Youth Hand', owner: 'Youth Hand', website: 'https://youthhand.web.id', image: require('~/images/portofolio/youthhand.png'), urlStat: false, authorStat: false, url: 'https://youthhand.web.id', status: 'Done', desc: 'Sistem informasi Youth Hand untuk mengelola, mengevaluasi dan memantau tujuan organisasi.'},
      ],
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.portos .images');
  },
}
</script>