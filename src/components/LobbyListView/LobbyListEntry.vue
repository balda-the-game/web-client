<template>
  <tr class="entry">
    <td>
      <div class="title-wrapper">
        <!-- TODO: Ticker for overflow !-->
        <p class="lobby-title">
          Only cool boys lobby. No women strictly (#NOHOMO)
        </p>
      </div>
      <span class="container">
        <i class="fas fa-user is-large"></i>
        <i class="fas fa-user is-large"></i>
        <i class="far fa-user is-large"></i>
        <i class="far fa-user is-large"></i>
      </span>
    </td>
    <td class="right-field">
      <div
        class="
          field
          has-addons
          is-justify-content-flex-end is-align-items-center
        "
      >
        <i class="fas fa-lock is-large"></i>
        <div class="control">
          <input
            type="password"
            class="input is-small has-addons"
            placeholder="********"
          />
        </div>
        <div class="control">
          <button class="button is-small">Join</button>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "LobbyListEntry",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
i {
  padding: 0 0.35rem;
}
.lobby-title {
  white-space: nowrap;
  text-overflow: show;
  overflow: hidden;
  display: inherit;
}
.lobby-id {
  width: 3rem;
  border-right: 1px solid gray;
}
</style>

