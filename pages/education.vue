<template>
  <div id="education">

    <main-template>
      <div class="container">

        <div class="row justify-content-center mt-5 align-items-center">
          <div class="col-lg-6">

            <h3>School</h3>
            <p>My education history. And now i'm currently <span class="badge badge-danger">Gap Year</span></p>

            <template v-for="(school, index) in sekolah">
              <b-card :key="index" class="shadow mb-3">
                <b-row align-content="center" align-v="center">
                  <b-col md="3">
                    <img :src="school.img" :alt="school.nama" class="w-100 py-3 mb-3 mb-md-0" />
                  </b-col>
                  <b-col>
                    <h3 class="h4">{{ school.nama }}</h3>
                    <p class="text-muted"><span><i class="fa-solid fa-map-pin mr-2"></i>{{ school.location }}</span></p>
                    <!-- <p class="text-muted"></p> -->
                    <p class="m-0">{{ school.start }} &mdash; {{ school.end == null ? 'Sekarang' : school.end }}</p>
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
    title: 'Education Histories - Cak Adi'
  },
  data() {
    return {
      sekolah: [
        {nama: 'SMA Negeri 1 Ngawi', start: 'Juni 2018', end: 'Mei 2021', img: require('~/images/education/smasa-logo.jpeg'), location: 'Ngawi, Jawa Timur'},
        {nama: 'SMP Negeri 1 Padas', start: 'Juli 2015', end: 'Maret 2018', img: require('~/images/education/kemdikbud.png'), location: 'Ngawi, Jawa Timur'}
      ],
    };
  },
}
</script>