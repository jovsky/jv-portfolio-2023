<template>
    <div class="project">
        <div class="project-name">
            <span> {{ data.name }}</span>
        </div>
        <div class="image-container">
            <div class="wrapper">
                <img
                    :src="data.imgSrc"
                    :alt="`Image of project '${data.name}'`"
                />
            </div>
            <div class="buttons">
                <a
                    class="btn repo"
                    :href="data.repo"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub Repo
                </a>
                <a
                    class="btn app"
                    :href="data.url"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit App
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { ProjectType } from "../types/types";
const props = defineProps<{
    data: ProjectType;
}>();
</script>

<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: column;
    .project-name {
        width: 100%;
        top: 20px;
        font-weight: bold;
        text-transform: uppercase;
        width: 100%;
        color: white;
        padding: 10px;
    }
    .image-container {
        width: 100%;
        min-width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 35px;
        overflow: hidden;
        filter: brightness(0.95);
        transition: all 0.2s ease-in-out;

        .wrapper {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                background-color: red;
            }
        }
        .buttons {
            position: absolute;
            width: 100%;
            bottom: 0px;
            background-image: linear-gradient(
                transparent,
                rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.95)
            );
            height: 50%;
            display: flex;
            justify-content: end;
            align-items: flex-end;
            padding-bottom: 20px;

            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            -moz-transition: opacity 0.2s ease-in-out;
            -webkit-transition: opacity 0.2s ease-in-out;
            .btn {
                min-width: 100px;
                height: 45px;
                color: white;
                margin-right: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                padding: 0 15px;
                border: 5px solid rgb(35, 143, 107);
                border-radius: 3px;
                &.app {
                    background-color: rgb(6, 24, 18);
                }
                &.repo {
                    background-color: rgb(6, 24, 18);
                }
            }
        }

        &:hover {
            .buttons {
                opacity: 1;
                transition: opacity 0.2s ease-in-out;
                -moz-transition: opacity 0.2s ease-in-out;
                -webkit-transition: opacity 0.2s ease-in-out;
            }
        }
    }
}
@-webkit-keyframes fadeinout {
    0%,
    100% {
        bottom: 0;
    }
}
@keyframes fadeinout {
    0%,
    100% {
        bottom: 0;
    }
}
</style>
