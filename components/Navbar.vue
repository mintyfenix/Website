<template>
  <nav>
    <a href="/">Compliance</a>
    <Dropdown value="Extras" :links="extrasLinks" />
    <img src="https://database.compliancepack.net/images/brand/logos/no%20background/64/Compliance%20Plain.png" alt="">
    <Dropdown value="Downloads" :links="downloadsLinks" />
    <a href="/" class="disabled">Login</a>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > img {
      width: 64px;
      height: 64px;
    }

    > .dropdown,
    > a {
      text-align: center;
      text-decoration: none;
      color: #fff;
      padding: var(--padding-normal);
      min-width: 120px;

      &:hover {
        background-color: #f1f1f1;
      }

      &.disabled {
        color: rgba(255,255,255,0.6);

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
  data: () => {
    return {
      extrasLinks: [
        { value: "Addons", href: "/extra/addons" },
        { 
          value: "Mods", 
          href: "/extra/mods", 
          isDropdown: [
            { value: "Classic Faithful 32x", href: "/extra/mods/classic_faithful_32x" }
          ]
        },
        { 
          value: "Modpacks", 
          href: "/extra/modpacks", 
          isDropdown: [
            { value: "Classic Faithful 32x", href: "/extra/modpacks/classic_faithful_32x" }
          ]
        },
        { value: "Tweaks", href: null, disabled: true },
      ],
      downloadsLinks: [
        { 
          value: "Compliance", 
          href: null, 
          isDropdown: [
            { value: "Compliance 32x", href: "/download/compliance_32x" },
            { value: "Compliance 64x", href: "/download/compliance_64x" }
          ]
        },
        { 
          value: "Classic Faithful", 
          href: null, 
          isDropdown: [
            { value: "Classic Faithful 32x", href: "/download/classic_faithful_32x" },
            { value: "Classic Faithful 64x", href: "/download/classic_faithful_64x" }
          ]
        },
        { 
          value: "Classic Faithful Programmer Art", 
          href: null, 
          isDropdown: [
            { value: "Classic Faithful Prog Art 32x", href: "/download/classic_faithful_progart_32x" },
            { value: "Classic Faithful Prog Art 64x", href: "/download/classic_faithful_progart_64x" }
          ]
        },
      ]
    }
  }
}
</script>
