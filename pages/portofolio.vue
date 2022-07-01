<template>
    <div id="cert">
        <main-template>
            <div class="container">

                <div class="row justify-content-center mt-5 align-items-center">
                    <div class="col-lg-10">

                        <h3>Portofolios</h3>
                        <p>My latest portofolio collection.</p>

                        <template v-for="(porto, index) in portos">
                            <b-row class="portos">
                                <b-col md="4">
                                    <b-button variant="plain" class=" mb-3">
                                        <a :href="porto.image" class="images mb-3 d-block">
                                            <b-img fluid="" :src="porto.image" :alt="porto.name" class="border rounded" />
                                        </a>
                                    </b-button>
                                </b-col>
                                <b-col>
                                    <h4>{{ porto.name }}</h4>
                                    <p>{{ porto.desc }}</p>

                                    <b-button size="sm" :href="porto.website" variant="success">Web Owner<i class="ml-2 fa-solid fa-external-link"></i></b-button>
                                    <b-button size="sm" :href="porto.url" variant="primary">Go To Project<i class="ml-2 fa-solid fa-external-link"></i></b-button>
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
        {name: 'SIDEKA (Sistem Informasi Dewan Kerja)', owner: 'DKD Jawa Timur', website: 'https://dkdjatim.or.id', image: require('~/images/portofolio/sideka.png'), url: 'https://sideka.dkdjatim.or.id', status: true, desc: 'The information system for East Java Provincial Rover and Ranger Council (DKD Jatim) to monitoring and evaluating organizational performance in the regional and lower quarters.'}
      ],
    };
  },
  mounted() {
    var lightbox = new SimpleLightbox('.portos .images');
  },
}
</script>