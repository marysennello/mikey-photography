<template>
  <div>
    <Loading v-if="isLoading"/>
    <div v-else-if="images.length > 0" class="flex flex-row flex-wrap gap-5 justify-center justify-items-center items-center">
      <div v-for="image in images" :key="image.id" class="flex justify-center border border-zinc-800 md:h-screen ">
        <img :src="image.url" :alt="image.title" class="object-fill"/>
      </div>
    </div>
    <div v-else>No images found.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      images: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=tags&format=json&nojsoncallback=1');
      const data = await response.json();
      
      const entries = data.photos.photo;
           
      if (entries.length > 0) {
        this.images = entries.map((image) => ({
          url: `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`,
          title: image.title,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
