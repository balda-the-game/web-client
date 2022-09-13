<template>
  <CreateLobbyModal
    :is-active="modalIsActive"
    @confirm="createLobbySubmit"
    @cancel="this.modalIsActive = false"
  />
  <div class="lobbies box hero is-fullheight-with-navbar is-primary">
    <div class="hero-body is-block p-0">
      <div class="container">
        <LobbyListControls
          class="box"
          @createLobby="modalIsActive = true"
          @refreshList="loadLobbies"
          @search="search"
          @joinWithCode="joinLobbyWithCode"
        />
        <div class="columns">
          <section class="column block pr-0 mb-0">
            <div class="table-container mb-3">
              <table class="table is-fullwidth is-striped">
                <tbody>
                  <LobbyListEntry
                    v-for="lobby in lobbies"
                    :key="lobby.id"
                    :id="lobby.id"
                    :title="lobby.title"
                    :slots="lobby.slots"
                    :free-slots="lobby.free_slots"
                    :dimention="lobby.dimention"
                    :locked="lobby.locked"
                    :language="lobby.language"
                    @join="joinLobby"
                  />
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
import CreateLobbyModal from "@/components/LobbyListView/CreateLobbyModal.vue";
import axios from "axios";
import qs from "qs";

export default {
  name: "LobbyListView",
  components: { LobbyListControls, LobbyListEntry, CreateLobbyModal },
  data() {
    return {
      modalIsActive: false,
      lobbies: [],
    };
  },
  methods: {
    async loadLobbies() {
      try {
        const res = await axios({
          method: "get",
          url: "/lobbies",
          headers: {
            Authorization: `JWT ${this.$store.getters.token}`,
          },
        });
        this.lobbies = res.data;
      } catch (err) {
        console.log(err.response.data);
        this.lobbies = [];
      }
    },
    async createLobbySubmit(lobby) {
      this.modalIsActive = false;
      try {
        await axios({
          method: "post",
          url: "/lobbies",
          headers: {
            Authorization: `JWT ${this.$store.getters.token}`,
          },
          data: lobby,
        });
        this.loadLobbies();
      } catch (err) {
        console.error(err.response.data);
      }
    },
    async joinLobby(id, key) {
      // FIXME: EMPTY REQ {} from forntend but not from postman when sending the key using body. Now it uses query pararm key
      const qskey = qs.stringify({ key: key });
      console.log(qskey);
      try {
        await axios({
          method: "get",
          url: `/lobbies/${id}?${qskey}`,
          headers: {
            Authorization: `JWT ${this.$store.getters.token}`,
          },
          data: qs.stringify({ key: key }),
        });
        this.loadLobbies();
      } catch (err) {
        console.error(err.response);
      }
    },
    joinLobbyWithCode(code) {
      console.log("join with code: ", code);
    },
    search(filter) {
      console.log("searching: ", filter);
    },
  },
  mounted() {
    this.loadLobbies();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colorscheme.scss";
table {
  table-layout: fixed;
}
.table-container {
  @media only screen and (max-width: 769px) {
    & {
      max-height: 43vh;
    }
  }
  max-height: 65vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    margin-left: 10px;
    width: 15px;
  }
  &::-webkit-scrollbar-track {
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