<script>
export default {
  data() {
    return {
      isLoading: true,
      colorImage: null,
      bwImage: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch(
        'https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=tags&format=json&nojsoncallback=1'
      );
      const data = await response.json();

      const entries = data.photos.photo;

      const colorImages = entries.filter((entry) => entry.tags.includes('color'));
      const bwImages = entries.filter((entry) => entry.tags.includes('blackandwhite'));

      if (colorImages.length > 0) {
        const randomColorIndex = Math.floor(Math.random() * colorImages.length);
        this.colorImage = this.createImageObject(colorImages[randomColorIndex]);
      }

      if (bwImages.length > 0) {
        const randomBwIndex = Math.floor(Math.random() * bwImages.length);
        this.bwImage = this.createImageObject(bwImages[randomBwIndex]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    createImageObject(image) {
      return {
        url: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`,
        title: image.title,
      };
    },
  },
};

    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
  <div class="grid gap-y-5 md:gap-y-40 first:mt-8 last:mb-5">

    <Loading v-if="isLoading"/>

    <div v-else class="flex flex-wrap gap-5 md:gap-20 md:justify-center justify-around">

      <!-- random color image -->
      <NuxtLink to="/gallery/color">
        <GalleryLink v-if="colorImage">
          <img :src="colorImage.url" :alt="colorImage.title" class="relative flex-1 object-cover" />
          <GalleryLinkOverlay>
            <h3 class="text-white text-2xl font-bold">Color</h3>
          </GalleryLinkOverlay>
        </GalleryLink>
        <div v-else>Color Images</div>
      </NuxtLink>

      <!-- random bw image -->
      <NuxtLink to="/gallery/bw">

        <GalleryLink v-if="colorImage">
          <img :src="bwImage.url" :alt="bwImage.title" class="relative object-cover flex-1" />
          <GalleryLinkOverlay>
            <h3 class="gallery-name">Black and White</h3>
          </GalleryLinkOverlay> 
        </GalleryLink>

        <div v-else>Black and White Images</div>

      </NuxtLink>
    </div>
  </div>
</template>


<style scoped>
  .gallery-name {
    @apply text-white text-2xl font-bold
  }

</style>