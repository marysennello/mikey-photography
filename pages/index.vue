<script>
export default {
  data() {
    return {
      isLoading: true,
      image: null,
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=tags&format=json&nojsoncallback=1');
      const data = await response.json();
      
      const entries = data.photos.photo;
      const homeImage = entries.find((entry) => entry.tags.includes('home'));
      
      if (homeImage) {
        this.image = {
          url: `https://live.staticflickr.com/${homeImage.server}/${homeImage.id}_${homeImage.secret}_b.jpg`,
          title: homeImage.title,
        };
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
};
    // # Typical usage for Flickr links:
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
    <div >
        <Loading v-if="isLoading"/>
        <div v-else-if="image" class="scrollsnap-item relative border border-zinc-800">
            <NuxtLink to="/gallery">
                <!-- to replace img src once Mikey makes a homepage tag -->
                <img :src="image.url" :alt="image.title" class="object-contain"> 
            </NuxtLink>
        </div>
        <div v-else>
            <NuxtLink to="/gallery">Visit Gallery</NuxtLink>
        </div>
   
    </div>

</template>
