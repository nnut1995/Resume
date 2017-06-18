<template>
  <div class="navbar">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">My Resume</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-small">
        <h3>My Resume</h3>
      </md-toolbar>
      <md-list>
        <md-button @click.native="navigateTo('Profile')">
          <md-icon>person_outline</md-icon> <span>Profile</span>
        </md-button>
        <md-button @click.native="navigateTo('Education')">
          <md-icon>school</md-icon> <span>Education</span>
        </md-button>
        <md-button @click.native="navigateTo('Experience')">
          <md-icon>stay_current_portrait</md-icon> <span>Experience</span>
        </md-button>
        <md-button @click.native="navigateTo('Skill')">
          <md-icon>show_chart</md-icon> <span>Skill</span>
        </md-button>
        <md-button @click.native="navigateTo('Contact')">
          <md-icon>contacts</md-icon> <span>Contact</span>
        </md-button>
      </md-list>
    </md-sidenav>
  </div>
</template>
<script>
import router from './router'

export default {
  name: 'app',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
    navigateTo (nav) {
      router.push({ name: nav })
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>
