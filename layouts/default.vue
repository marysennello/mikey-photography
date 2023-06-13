<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col 
  md:flex-row md:flex-nowrap min-h-screen">

    <!-- side bar -->
    <aside class="shadow bg-zinc-100 md:bg-zinc-50">
      <HeaderNav />
    </aside>

     <!-- output the main page content -->
    <div class="justify-center items-center grow
    flex 
    mx-auto px-5 md:px-auto
    ">
        <slot class="relative grow"/>
    </div>
  </div>
</template>

<style>
html {
  @apply scroll-pt-24 md:scroll-pt-12
}
aside {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #f4f4f5;

}

</style>