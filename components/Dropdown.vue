<template>
  <div class="dropdown">
    <a href="javascript:void(0)" class="dropdown-btn">{{ value }}</a>
    <div class="dropdown-content">
      <template v-for="link in links">
        <Dropdown class="recursive" v-if="link.isDropdown"  :value="link.value" :links="link.isDropdown" :key="'D'+link"></Dropdown>
        <a v-else :class="link.disabled ? 'disabled': ''"  :key="link" :href="link.href">{{ link.value }}</a>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  .dropdown {
    position: relative;

    > a {
      color: #fff;
      text-decoration: none;
    }

    &:hover > .dropdown-content {
      display: block;
    }

    &.recursive {
      text-align: left;
      padding: 12px 16px;

      &:hover {
        background-color: #f1f1f1;
      }

      > .dropdown-btn {
        text-align: left;
      }

      > .dropdown-content {
        top: 0;
        left: 100%;
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    left: 0;
    top: calc(4 * var(--padding-normal));
    background-color: #f9f9f9;
    width: max-content;
    box-shadow: var(--shadow-small);
    z-index: 1;

    > a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      text-align: left;
      display: block;

      &:hover {
        background-color: #f1f1f1;
      }

      &.disabled {
        color: rgba(0,0,0,.2);

        &:hover {
          cursor: default;
          background-color: transparent;
        }
      }
    }
  }
</style>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
