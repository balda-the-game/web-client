<template>
  <div class="lobbies box hero is-fullheight-with-navbar is-primary">
    <div class="hero-body is-block p-0">
      <div class="container">
        <LobbyListControls class="box" />
        <div class="columns">
          <section class="column block pr-0 mb-0">
            <div class="table-container mb-3">
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
              class="box pagination is-centered is-small is-link py-0 mr-3"
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
          <section class="column is-one-third pl-0 mb-0">
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
@import "../assets/scss/colorscheme.scss";
table {
  table-layout: fixed;
}
.table-container {
  max-height: 65vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    margin-left: 10px;
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background: $turquoise;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: $green;
    border: 5px solid transparent;
    border-radius: 100px;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: $grey;
    border: 5px solid transparent;
    border-radius: 100px;
    background-clip: content-box;
  }
}
// TEMP PROPERTY
.chat {
  height: 100%;
}
</style>