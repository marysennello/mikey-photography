<script lang="ts" setup>

</script>

<template>
  <div class="flex">
    <!-- side bar -->
    <aside class=" sticky top-1 pr-5">
      <HeaderNav />
    </aside>

     <!-- output the main page content -->
    <div class="flex-1 justify-items-center  grid gap-y-40 mx-auto">
        <slot class="relative my-5"/>
    </div>
  </div>
</template>
