import { isNode } from "@firebase/util";

const info = [
    {
        id: 1,
        idSection: 11,
        title: "CALM BLUE",
        description: "Otorga calma.",
        price: 500,
        stock: 6,
        pictureUrl: "https://i.pinimg.com/564x/ab/40/67/ab40673b8b757e5b8c58b8c7a8df1387.jpg"
    },
    {
        id: 2,
        idSection: 11,
        title: "RITUAL CANELA",
        description: "Esencia de canela, protección.",
        price: 600,
        stock: 6,
        pictureUrl: "https://i.pinimg.com/564x/a4/7e/0f/a47e0f83d4f2a090f1c652f4c079c46d.jpg"
    },
    {
        id: 3,
        idSection: 11,
        title: "PURIFY INOCENSE",
        description: "Otorga purificacion y contencion al hogar.",
        price: 500,
        stock: 6,
        pictureUrl: "https://i.pinimg.com/564x/28/5e/08/285e088bf41fa99a60da210bac91c0de.jpg"
    },
    {
        id: 4,
        idSection: 22,
        title: "Aromatizante Lima Limon",
        description: "Spray con fragancia natural de limon.",
        price: 500,
        stock: 4,
        pictureUrl: "https://i.pinimg.com/564x/7c/99/2e/7c992e2c3b305ae3f0972ed0fc4ead7e.jpg"
    },
    {
        id: 5,
        idSection: 22,
        title: "Aromatizante Manzanilla",
        description: "Spray con fragancia natural de manzanilla.",
        price: 600,
        stock: 5,
        pictureUrl: "https://i.pinimg.com/564x/a7/11/db/a711dbce7025bee89a2862c2de39d4a3.jpg"
    },
    {
        id: 6,
        idSection: 22,
        title: "Aromatizante Agua de Rosas",
        description: "Spray con fragancia naturales de las aguas de rosas.",
        price: 500,
        stock: 7,
        pictureUrl: "https://i.pinimg.com/564x/ce/93/5f/ce935f1dd7761e7b1670a742df15d3dd.jpg"
    },
    {
        id: 7,
        idSection: 33,
        title: "Vela Aromatica de Savia",
        description: "Vela con fragancia natural de las savias del bosque.",
        price: 600,
        stock: 3,
        pictureUrl: "https://i.pinimg.com/564x/79/1d/45/791d4574fd3c449df8af16b9b2ab0035.jpg"
    },
    {
        id: 8,
        idSection: 33,
        title: "Vela Aromatica de Rosa",
        description: "Vela con fragancia naturales de rosas.",
        price: 500,
        stock: 8,
        pictureUrl: "https://i.pinimg.com/564x/59/f3/29/59f3297fb77985d3f2d2107ddf8e6833.jpg"
    },
    {
        id: 9,
        idSection: 33,
        title: "Vela Aromatica de Frutillas",
        description: "Vela con fragancias de frutillas.",
        price: 600,
        stock: 6,
        pictureUrl: "https://i.pinimg.com/564x/91/1c/a6/911ca6e3d3684ad6023ec4c6de7d7afd.jpg"
    },
    {
        id: 10,
        idSection: 44,
        title: "AMOR",
        description: "Es una piedra sedante, relajante y bastante receptiva.",
        price: 600,
        stock: 4,
        pictureUrl: "https://i.pinimg.com/564x/0e/fa/f6/0efaf6f7fa744e6b606d6f0fdada39b1.jpg"
    },
    {
        id: 11,
        idSection: 44,
        title: "AMATISTA",
        description: "La piedra del amor, protección y sueños.",
        price: 700,
        stock: 2,
        pictureUrl: "https://i.pinimg.com/564x/29/07/a6/2907a6bd6913e0c3fda35d676a657a0b.jpg"
    },
    {
        id: 12,
        idSection: 44,
        title: "CRISTAL DE ROCA",
        description: "El espejo de nuestro ser más profundo.",
        price: 600,
        stock: 3,
        pictureUrl: "https://i.pinimg.com/564x/77/42/db/7742dba6d2dde1b63d3197dbb16e5d32.jpg"
    }
];

export default info;