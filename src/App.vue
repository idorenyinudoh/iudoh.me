<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: -0.5px;
}
p {
  margin: 0;
  font-size: 24px;
}
a {
  color: #00f;
  text-decoration: none;
  outline: none;
}
a:hover, a:focus {
  text-decoration: underline;
}
a:visited {
  color: #551a8b;
}
h1 {
  padding-bottom: 10px;
  border-bottom: 2px solid;
  font-weight: 500;
  font-size: 48px;
}
.image-container {
  position: relative;
  padding-top: 75%;
}
img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
section {
  position: relative;
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: calc(40px + 1vw) calc(30px + 1vw);
}
</style>
