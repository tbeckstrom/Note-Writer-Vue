<template>
  <span class="dynamic-link" :linkRef="linkRef">blah</span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "dynamic-link",
  props: ["node", "updateAttrs", "view"],
  computed: {
    linkRef: {
      get() {
        return this.node.attrs.linkRef;
      },
      set(linkRef) {
        // we cannot update `src` itself because `this.node.attrs` is immutable
        this.updateAttrs({
          linkRef
        });
      }
    }
  }
});
</script>

<style lang="sass"></style>
