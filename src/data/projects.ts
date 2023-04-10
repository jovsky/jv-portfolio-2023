import { ProjectType } from "../types/types";

const ProjectsData: ProjectType[] = [
    {
        name: "AirTnT",
        url: "https://airbnb-jv.netlify.app/",
        repo: "https://github.com/jovsky/airbnb-hiringcoders",
        description:
            "Simula o AirBnB para encontrar hospedagens fornecidas por uma API de dados. Este projeto utilzou HTML, CSS, Boostrap, Vanilla JS e APIs do Google.",
        imgSrc: "air-tnt.png",
        technology: [],
    },
];

export default ProjectsData.map((item, i) => ({
    ...item,
    imgSrc: require(`@/assets/card-pics/${item.imgSrc}`),
    id: i,
}));
