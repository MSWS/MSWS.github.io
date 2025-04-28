<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="flex w-screen h-screen bg-grey-300 items-center justify-center">
  <div class="flex-col text-center">
    <p class="text-4xl font-bolder text-red-500">Error</p>
    <span class="font-bold text-red-900">{page.status.toString()}</span>
    <span>{page.error?.message}</span>
  </div>
</div>
