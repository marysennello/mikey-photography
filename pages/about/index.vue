<script>


    // # Typical usage  
    // https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>

<template>
    <div class="scrollsnap-item relative md:border md:border-zinc-800 flex flex-col-reverse">

          <!-- to replace img src once Mikey makes a homepage tag -->
          <img src="https://live.staticflickr.com/65535/52967942485_38efb80758_b.jpg" class="object-contain md:my-0 my-10"> 

        <!-- overlay -->
        <div class="relative 
        md:absolute md:inset-0 md:bg-zinc-800 md:bg-opacity-60 
        flex items-center justify-center 
        ">
          <h3 class="text-zinc-700 
          md:text-zinc-50 md:text-2xl font-bold px-auto md:px-10">These photographs were taken mostly on 35mm film, with scattered 120 and digital shots. I've been a hobbyist since high school, but it was COVID that really brought me back into photography. The images here document little moments of my life living in Seattle. I'm a Californian at heart and that west coast influence identifies my work</h3>
        </div>
    </div>

</template>