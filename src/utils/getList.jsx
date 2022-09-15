const info = [
    {
        id: 1,
        title: "Aromatizante Lima Limon",
        description: "Spray con fragancia natural de limon.",
        price: 500,
        pictureUrl: "https://i.pinimg.com/564x/7c/99/2e/7c992e2c3b305ae3f0972ed0fc4ead7e.jpg"
    },
    {
        id: 2,
        title: "Aromatizante Manzanilla",
        description: "Spray con fragancia natural de manzanilla.",
        price: 600,
        pictureUrl: "https://i.pinimg.com/564x/a7/11/db/a711dbce7025bee89a2862c2de39d4a3.jpg"
    },
    {
        id: 3,
        title: "Aromatizante Agua de Rosas",
        description: "Spray con fragancia naturales de las aguas de rosas.",
        price: 500,
        pictureUrl: "https://i.pinimg.com/564x/ce/93/5f/ce935f1dd7761e7b1670a742df15d3dd.jpg"
    },
    {
        id: 4,
        title: "Vela Aromatica de Savia",
        description: "Vela con fragancia natural de las savias del bosque.",
        price: 600,
        pictureUrl: "https://i.pinimg.com/564x/79/1d/45/791d4574fd3c449df8af16b9b2ab0035.jpg"
    },
    {
        id: 5,
        title: "Vela Aromatica de Rosa",
        description: "Vela con fragancia naturales de rosas.",
        price: 500,
        pictureUrl: "https://i.pinimg.com/564x/59/f3/29/59f3297fb77985d3f2d2107ddf8e6833.jpg"
    },
    {
        id: 6,
        title: "Vela Aromatica de Frutillas",
        description: "Vela con fragancias de frutillas.",
        price: 600,
        pictureUrl: "https://i.pinimg.com/564x/91/1c/a6/911ca6e3d3684ad6023ec4c6de7d7afd.jpg"
    }
];

const getList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(info);
        }, 2000);
    })
}

export default getList;