<template>
    <div class="portfolio">
        <div class="portfolio__background"></div>
        <div class="portfolio__shadow"></div>
        <span class="portfolio__title">PROJECTS</span>
        <div class="portfolio__list">
            <div
                class="portfolio__list__item"
                v-for="data in projectsData"
                :key="data.name"
            >
                <ProjectCard :data="data" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue"; // @ is an alias to /src
import projectsData from "@/data/projects";
</script>

<style lang="scss" scoped>
.portfolio {
    max-width: 1000px;
    width: 100%;
    margin: 0 50px;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 5px dashed black;
    border-style: dashed;
    box-sizing: content-box;
    border-radius: 10px;
    overflow: hidden;
    padding: 0 40px;

    &__title {
        color: black;
        margin: 30px;
        font-size: 20px;
        color: black;
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
        background-color: rgba(255, 255, 255, 0.8);
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
    &__list {
        display: flex;
        width: 100%;
        gap: 20px;
        height: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 40px;
        &__item {
            width: 100%;
            display: flex;
        }
    }
}
// @media screen and (max-width: 1060px) {
//     .portfolio {
//         width: 100%;
//         margin: 0 30px;
//     }
// }
</style>
