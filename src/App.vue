<template>
    <nav class="app-nav">
        <router-link to="/">Projetos</router-link> |
        <router-link to="/about">Sobre</router-link>
    </nav>
    <div class="app-container">
        <div class="app-container__background"></div>
        <div class="app-container__shadow"></div>
        <span class="app-container__title">PROJECTS</span>
        <router-view />
    </div>
</template>

<style lang="scss">
body {
    background-image: url("https://img.wallpapersafari.com/desktop/1366/768/50/12/YSpoRh.jpg");
    background-color: rgb(82, 82, 82);
    overflow: hidden;
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 95vh;
        align-items: center;
        .app-nav {
            padding: 30px;
            a {
                font-weight: bold;
                text-decoration: none;
                color: #ffffff;
                &.router-link-exact-active {
                    color: #c9ffe7;
                }
            }
        }
        .app-container {
            max-width: 1000px;
            width: 100%;
            margin: 0 50px;
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            position: relative;
            overflow: hidden;
            box-sizing: content-box;
            border-radius: 10px;
            overflow: hidden;
            padding: 0 40px;
            box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.753);

            &__title {
                color: rgb(255, 255, 255);
                margin: 30px;
                font-size: 20px;
                font-weight: 800;
                font-style: black;
                font-family: "Courier New", Courier, monospace;
                letter-spacing: 3px;
                text-shadow: 3px 3px 10px rgb(0, 255, 200);
            }
            &__background {
                z-index: -1;
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(10px);
            }
            &__shadow {
                position: absolute;
                z-index: 10;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.411);
                pointer-events: none;
            }
        }
    }
}
</style>
