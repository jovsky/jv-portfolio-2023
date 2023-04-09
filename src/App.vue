<template>
    <nav>
        <router-link to="/">Projetos</router-link> |
        <router-link to="/about">Sobre</router-link>
    </nav>
    <router-view />
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
        nav {
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
    }
}
</style>
