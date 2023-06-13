<script lang="ts" setup>
//fetch the photos
    const { data } = await useFetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=description&format=json&nojsoncallback=1');
    const entries = data.value;
    const gallery = entries.photos.photo;

    // console.log(gallery);

    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
  <div class="grid gap-y-5 md:gap-y-40 first:mt-8 last:mb-5">
    <div v-for="image in gallery" class="scrollsnap-item">

      <div>
        <img :src="`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`" :alt="`${image.title}, ${image.id}`" class="object-cover border border-zinc-800">
      </div>
      
    </div>
  </div>

</template>
