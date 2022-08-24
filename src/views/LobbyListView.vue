<template>
  <div class="lobbies box hero is-fullheight-with-navbar is-primary">
    <div class="hero-body">
      <div class="container">
        <LobbyListControls class="box" />
        <div class="columns">
          <section class="column block">
            <div class="table-container">
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
              </tbody>
            </table>
            </div>
            <nav
              class="box pagination is-centered is-small is-link"
              role="navigation"
              aria-label="pagination"
            >
              <a class="pagination-previous">
                <i class="fas fa-angle-left is-small"></i>
              </a>
              <a class="pagination-next">
                <i class="fas fa-angle-right is-small"></i>
              </a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a
                    class="pagination-link is-current"
                    aria-label="Page 46"
                    aria-current="page"
                    >46</a
                  >
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav>
          </section>
          <section class="column is-one-quarter">
            <div class="box chat">Chat will be here</div>
          </section>
        </div>
      </div>
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
.column {
  margin-bottom: 0;
}
table {
  table-layout: fixed;
}
.table-container {
  max-height: 61vh;
  overflow-y: scroll;
}
.hero {
  display: block;
}
.hero-body {
  display: none;
  padding: 0;
}
.pagination {
  padding-top: 1px;
  padding-bottom: 1px;
}
// TEMP PROPERTY
.chat {
  height: 100%;
}
</style>