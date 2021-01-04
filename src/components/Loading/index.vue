<template>
      <div class="box">
    <div class="loader-01"></div>
</div>
</template>

<script>
export default {
    name: "Loading",
}
</script>

<style scoped>
.box {
    /* display: inline-block; */
    width: 200px;
    height: 200px;
    color: #d60b52;
    line-height: 200px;
    -webkit-transition: .3s color, .3s border;
    transition: .3s color, .3s border;
    font-size: 40px;
    line-height: 200px;

}

[class*="loader-"] {
    display: inline-block;
    width: 1em;
    height: 1em;
    color: inherit;
    vertical-align: middle;
    pointer-events: none;
}
.loader-01 {
    position:absolute;
    top: 40%;
    left: 40%;
    border: .2em dotted currentcolor;
    border-radius: 50%;
    -webkit-animation: 1s loader-01 linear infinite;
    animation: 1s loader-01 linear infinite;
}
@-webkit-keyframes loader-01 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loader-01 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
