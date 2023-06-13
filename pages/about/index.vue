<script lang="ts" setup>
//fetch the photos
//to replace fetch link once Mikey makes a homepage tag
    const { data } = await useFetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=description&format=json&nojsoncallback=1');
    const gallery = data.value.photos.photo;

    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
    <div class="scrollsnap-item relative border border-zinc-800">

          <!-- to replace img src once Mikey makes a homepage tag -->
          <img :src="`https://live.staticflickr.com/${gallery[5].server}/${gallery[5].id}_${gallery[5].secret}_b.jpg`" :alt="gallery[5].id" class="object-contain"> 

        <!-- overlay -->
        <div class="absolute inset-0 bg-zinc-800 bg-opacity-50 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-zinc-50 text-2xl font-bold">content in progress</h3>
        </div>
    </div>

</template>