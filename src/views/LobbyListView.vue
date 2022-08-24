<template>
  <div class="lobbies box">
    <div class="columns">
      <section class="column is-one-quarter">
        <div class="container">Chat will be here</div>
      </section>
      <section class="column">
        <LobbyListControls class="box" />
        <table class="table is-fullwidth is-striped">
          <tbody>
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
            <LobbyListEntry />
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
import LobbyListControls from "@/components/LobbyListView/LobbyListControls.vue";
import LobbyListEntry from "@/components/LobbyListView/LobbyListEntry.vue";
export default {
  name: "LobbyList",
  props: "",
  components: { LobbyListControls, LobbyListEntry },
};
</script>

<style lang="scss" scoped>
// *:not(path):not(g) {
//   color: hsla(210, 100%, 100%, 0.9) !important;
//   background: hsla(210, 100%, 50%, 0.5) !important;
//   outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
//   box-shadow: none !important;
// }
table {
  table-layout: fixed;
}
</style>