<template>
    <div class="projects">
        <div
            class="projects__item"
            v-for="data in projectsData"
            :key="data.name"
        >
            <ProjectCard :data="data" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ProjectCard from "@/components/ProjectCard.vue"; // @ is an alias to /src
import projectsData from "@/data/projects";
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    width: 100%;
    gap: 40px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    overflow-y: overlay;
    overflow-x: hidden;
    padding: 0 60px 40px;
    &__item {
        width: 100%;
        display: flex;
    }
}
</style>
