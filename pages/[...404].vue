<template>
  <div align="center">
    <h1>Are you lost in The End?</h1>
    <p>
      Unfortunately the page you requested doesn't exist!<br>We recommand you to check the spelling or go to the <strong><a href="/">main page</a></strong> to find what you were looking for.
    </p>
    <div id="animation_container" class="mb-4">
      <img id="tnt" v-show="tnt" :src="tntsrc" alt="Boom" @click="boom">
      <img id="diamond" v-show="diamond" src="/assets/image/404/diamond.png" alt="Diamond" @click="boom">
      <img id="explosion" v-show="explosion" :src="explosionsrc" alt="Boom">
    </div> 
  </div>
</template>

<script lang="ts">
const FRAME_TIME = 12;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  head: {
    title: '404 - Compliance',
    bodyAttrs: {
      class: 'end',
    },
  },
  data: function() {
    return {
      tntsrc: '/assets/image/404/tnt_side.png',
      tnt: true,
      diamond: false,
      explosion: false,
      explosionsrc: '/assets/image/404/explosion_0.png',
      exploded: false
    }
  },
  methods: {
    async boom() {
      if (!this.exploded) {
        // tnt blowing
        for (var i = 0; i < 8; i++) {
          await sleep(FRAME_TIME*25);
          if (i % 2 === 0) this.tntsrc = "/assets/image/404/tnt_side_on.png";
          else this.tntsrc ="/assets/image/404/tnt_side.png";
        }

        this.tnt = false;
        this.explosion = true;

        for (var i = 0; i <= 15; i++) {
          await sleep(FRAME_TIME*1.3);
          this.explosionsrc = "/assets/image/404/explosion_" + i + ".png";
        }

        this.explosion = false;
        this.diamond = true;
        
        // THE END
        this.exploded = true;
      } else {
        // initial state
        this.tnt = true;
        this.explosion = false;
        this.diamond = false;

        this.exploded = false;
      }
    }
  }
}
</script>

<style>
.end {
	background: #120E19 url(/assets/image/background/the_end.jpg) no-repeat center !important;
}

.end .foreground {
	background: transparent;
}
</style>

<style scoped lang="scss">
a, h1, p {
	color: #ccc !important;
}
strong {
	font-weight: bold;
}
.hidden {
	display: none
}
#animation_container {
	position: relative;
	height: 64px;
	width: 128px;
	margin: auto
}
#tnt {
	position: absolute;
	left: 32px;
	cursor: url("/assets/image/404/flint_and_steel.png") 16 16, pointer;
	image-rendering: pixelated;
	width: 64px;
	height: 64px;
}
#diamond {
	position: absolute;
	image-rendering: pixelated;
	left: 32px;
	width: 64px;
	height: 64px;
}
#explosion {
	position: absolute;
	left: 32px;
}
</style>