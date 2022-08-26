<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create game room</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input type="text" class="input" placeholder="room title" />
          </div>
        </div>
        <div class="field">
          <label class="label"
            >Password <i class="has-text-light">(optional)</i></label
          >
          <div class="control">
            <input
              type="text"
              class="input"
              placeholder="leave empty if don't need it"
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label"> Game field dimention</label>
              <div class="control has-icons-left">
                <div class="select">
                  <select>
                    <option>5x5</option>
                    <option>6x6</option>
                    <option>7x7</option>
                    <option>8x8</option>
                  </select>
                  <div class="icon is-left">
                    <i class="fas fa-border-all"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="fiel">
              <label class="label">Maximum players</label>
              <div class="control has-icons-left">
                <div class="select">
                  <select>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <div class="icon is-left">
                    <i class="fas fa-border-all"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateLobbyModal",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>