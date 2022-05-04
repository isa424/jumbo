<template>
  <div class="header">
    <div class="brand">
      <img
        src="../assets/logo.svg"
        alt="Jumbo Brand logo"
      >
    </div>

    <div class="links">
      <a href="/">Home</a>
      <a href="#">Supermarket</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboHeader"
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  padding: 0px 50px;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #d5d5d5;
  height: 80px;
  margin: auto;

  img {
    height: 20px;
  }

  .links {
    display: flex;
    gap: 20px;
  }
}
</style>
