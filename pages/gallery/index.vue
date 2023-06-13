<script lang="ts" setup>
//fetch the photos
    const { data } = await useFetch('https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=da1ed2cf22e333fa3aa29373def9060b&user_id=198520854%40N04&extras=description&format=json&nojsoncallback=1');
    const gallery = data.value.photos.photo;
    // console.log(gallery);

    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template class="px-2">
    <div v-for="image in gallery" class="scrollsnap-item last:mb-8">
      <div class="relative border border-zinc-800">
        <img :src="`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`" :alt="image.id" class="object-contain">
        <!-- hover overlay -->
        <!-- <div class="absolute inset-0 bg-zinc-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 class="text-zinc-50 text-2xl font-bold">{{image.title}}</h3>
        </div> -->
      </div>
    <!-- <p>{{image.description._content}}</p> -->
    </div>

</template>
