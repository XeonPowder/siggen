<template>
  <div id="app">
    <v-header></v-header>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  export default {
    components: {
      'v-header': Header,
      'v-footer': Footer
    }
  }
</script>
<style>
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    body {
        background-color: rgba(0,0,0,0);
        -webkit-background-clip: text;
        background-clip: text;
        /* uncomment following line to see the trick in actions */
        /* -webkit-text-fill-color: transparent; */
        transition: background-color 2s;
        -webkit-transition: background-color 2s;
    }
    body:hover {
       background-color: rgba(230, 78, 78, 1);
    }
    body::-webkit-scrollbar {
      width: 10px;
      height: 0px;
    }
    body::-webkit-scrollbar-track {
      display: none;
      border: 0px solid #ff4e4e;
      border-radius: 0px;
    }
    body::-webkit-scrollbar-track:hover {
      background-color: #666666;
    }
    body::-webkit-scrollbar-track:active {
      background-color: #333333;
    }
    body::-webkit-scrollbar-thumb {
      border: 0px none #ffffff;
      border-radius: 0px;
      background-color: inherit;
    }
    body::-webkit-scrollbar-thumb:hover {
      background-color: #fb2929;
    }
    body::-webkit-scrollbar-thumb:active {
      background-color: #fe7e7e;
    }
    body::-webkit-scrollbar-button {
      height: 19px;
      opacity: 0;
    }
    body::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }
  body {
    margin: 0;
    background-color: #864141;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont,
                 'avenir next', avenir,
                 helvetica, 'helvetica neue',
                 'segoe ui', arial,
                 sans-serif;
  }
  button, .button, input {
    cursor: pointer;
  }
  button:focus, .button:focus, input:focus {
    outline: none;
  }
  button, button:visited, input, input:visited {
    margin: 5px;
    display: inline-block;
    color: #A52B2B;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #A52B2B;
    text-decoration: none;
    padding: 10px 10px;
    text-align: center;
  }
  button:hover, button:focus, input:hover
  {
    color: #fff;
    background-color: #BE4040;
  }
  button, button:visited
  {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .button, .button:visited {
    margin: 5px;
    display: inline-block;
    color: #A52B2B;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #A52B2B;
    text-decoration: none;
    padding: 10px 10px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .button:hover, .button:focus
  {
    color: #fff;
    background-color: #BE4040;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .page-enter-active, .page-leave-active
  {
    transition: opacity .5s
  }
  .page-enter, .page-leave-active
  {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
  }
</style>
