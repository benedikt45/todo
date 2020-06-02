<template lang="html">
  <div class="modal">
    <form class="modal__form">
      <label class="modal__label">Input text</label>
      <textarea type="text" class="modal__input" v-model='text'></textarea>
      <div class="modal__buttons">
        <button type="submit" class="modal__button btn btn_green" @click.prevent='save'>Save</button>
        <button type="submit" class="modal__button btn btn_red" @click.prevent='cancle'>Cancle</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      this.$emit("onSave", this.text);
      this.text = '';
    },
    cancle() {
      this.$emit("onCancle");
      this.text = '';
    }
  }
}
</script>

<style lang="scss">
@import '../style.scss';
.modal {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    z-index: 9000;
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: 0.9;
    justify-content: center;

    &__form {
        align-self: center;
        box-sizing: border-box;
        border: 2px solid $color_main;
        padding: 30px;
        border-radius: 4px;
        background-color: black;
        color: #FFFFFF;
        display: flex;
    }

    &__label {
        font-weight: bold;
    }

    &__input {
        outline-offset: -2px;
        border-radius: 4px;
        height: 100px;
        margin: 0 20px;
        padding-left: 10px;
        padding-top: 10px;
    }

    &__buttons {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
    }

    &__button {
        border: none;
        width: 100%;
        cursor: pointer;

        &:not(:first-child) {
            margin-top: 10px;
        }
    }
}
</style>
