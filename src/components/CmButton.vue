<template>
  <button
    ref="button"
    class="cm-button"
    :disabled="disabled"
    :class="[typeClass]"
    @click="$emit('click')"
  >
    <slot>I'm a button!</slot>
  </button>
</template>

<script>
import { Component, Vue, Emit } from 'vue-property-decorator';
@Component({
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    type: {
      type: String,
      required: true,
      default: () => 'primary',
    }

  }
})
export default class CmButton extends Vue {

  /**
   * @vuese
   * Get associated classname for colour prop
   */
  get typeClass() {
    const type = this.type;
    if (!type) return '';

    return this.formatModifierClass(type);
  }


    /**
   * Returns modifier class for button
   *
   * @param classSuffix (the suffix to be added)
   */
  formatModifierClass(classSuffix) {
    return (classSuffix && `cm-button--${classSuffix}`) || '';
  }

}
</script>

<style>

.cm-button {
  width: 130px;
  padding: 12px;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1px;
  margin: 10px

  
}
.cm-button--primary {
    background-color: #3366ff;
}

.cm-button--success {
    background-color: #00e097;
}

.cm-button--warning {
    background-color: #ffaa00;
}

.cm-button--danger {
    background-color: #ff3d71;
}

.cm-button--info {
    background-color: #0195ff;
}

.cm-button--control {
    background-color: #fff;
    color: #3c4866;
    border: 8px solid #e5e9f2;
}

.cm-button--basic {
    background-color:#eff1f8;
    color: #3c4866;
}


</style>