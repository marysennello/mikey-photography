<script>


    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
    <div class="scrollsnap-item relative border border-zinc-800">

          <!-- to replace img src once Mikey makes a homepage tag -->
          <img src="https://live.staticflickr.com/65535/52967942485_38efb80758_b.jpg" class="object-contain"> 

        <!-- overlay -->
        <div class="absolute inset-0 bg-zinc-800 bg-opacity-50 flex items-center justify-center opacity-100 hover:bg-transparent transition-opacity duration-300">
          <h3 class="text-zinc-50 text-2xl font-bold px-60">These photographs were taken mostly on 35mm film, with scattered 120 and digital shots. I've been a hobbyist since high school, but it was COVID that really brought me back into photography. The images here document little moments of my life living in Seattle. I'm a Californian at heart and that west coast influence identifies my work</h3>
        </div>
    </div>

</template>