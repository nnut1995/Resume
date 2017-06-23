<template>
  <div class="profile">
  <md-card>
      <md-card-area>
        <img src="../assets/Profile.jpg" width="450">
        <md-card-header>
          <div class="md-title">Nat Nunpanichphong</div>
          <div class="md-subhead">Computer Science student from Mahidol University International College</div>
          <div class="md-subhead">Web Developer</div>
        </md-card-header>
        <md-card-content>
          A senior college student marjoring in computer science program in Science Major.
          seeking to leverage acquired academic knowledge and work experience in website developer
          position and working an international organization
        </md-card-content>
      </md-card-area>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.card-example {
  .md-subhead {
    .md-icon {
      $size: 16px;
      width: $size;
      min-width: $size;
      height: $size;
      min-height: $size;
      font-size: $size;
      line-height: $size;
    }

    span {
      vertical-align: middle;
    }
  }

  .card-reservation {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .md-icon {
      margin: 8px;
      color: rgba(#000, .54) !important;
    }

    .md-button {
      border-radius: 2px !important;
    }

  }
}
</style>
