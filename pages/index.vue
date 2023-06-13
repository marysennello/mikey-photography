<script lang="ts" setup>
//fetch the photos
//to replace fetch link once Mikey makes a homepage tag
    const { data } = await useFetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=description&format=json&nojsoncallback=1');
    const gallery = data.value.photos.photo;

    console.log(gallery[3].server)

    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
    <div class="scrollsnap-item relative border border-zinc-800">

        <NuxtLink to="/gallery">
          <!-- to replace img src once Mikey makes a homepage tag -->
          <img :src="`https://live.staticflickr.com/${gallery[3].server}/${gallery[3].id}_${gallery[3].secret}_b.jpg`" :alt="gallery[3].id" class="object-contain"> 
        </NuxtLink>

    </div>

</template>
