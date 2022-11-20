import axios from 'axios'

const mockedOrders: {

    id: number,
    name: string,
    email: string,
    status: string,
    dateOfDeliveryDeadline: Date,
    dateOfEnter: Date,
    products: Array <string>,
    spentTimeInAntifraud: number,
    spentTimeInSeparation: number,
    spentTimeInPackaging: number,
    spentTimeInLogistics: number,
    spentTimeInTransportation: number,
    dateOfDelivery: number,
    commentary: string

}[] = [
        {
            id: 2444,
            name: "Johnson",
            email: "johnson@email.com",
            status: "No Antifraude",
            dateOfDeliveryDeadline: new Date(2022, 10, 20,),
            dateOfEnter: new Date(2022, 10, 12, ),
            products: [
                "1x Serra Circular", "1x Trena", "2x Caixa de ferramentas"
            ],
            spentTimeInAntifraud: 2,
            spentTimeInSeparation: 0,
            spentTimeInPackaging: 0,
            spentTimeInLogistics: 0,
            spentTimeInTransportation: 0,
            dateOfDelivery: 0,
            commentary: ""
        },

        {
            id: 2445,
            name: "Peter",
            email: "peter@email.com",
            status: "Em processamento",
            dateOfDeliveryDeadline: new Date(2022, 10, 20),
            dateOfEnter: new Date(2022, 10, 12, 14),
            products: [
                "1x Serra Circular", "1x Trena", "2x Caixa de ferramentas"
            ],
            spentTimeInAntifraud: 2,
            spentTimeInSeparation: 0,
            spentTimeInPackaging: 0,
            spentTimeInLogistics: 0,
            spentTimeInTransportation: 0,
            dateOfDelivery: 0,
            commentary: ""
        },

        {
            id: 2446,
            name: "Peter",
            email: "peter@email.com",
            status: "Atrasado",
            dateOfDeliveryDeadline: new Date(2022, 10, 20),
            dateOfEnter: new Date(2022, 10, 12, 14),
            products: [
                "1x Serra Circular", "1x Trena", "2x Caixa de ferramentas"
            ],
            spentTimeInAntifraud: 2,
            spentTimeInSeparation: 0,
            spentTimeInPackaging: 0,
            spentTimeInLogistics: 0,
            spentTimeInTransportation: 0,
            dateOfDelivery: 0,
            commentary: ""
        },

        {
            id: 2447,
            name: "Peter",
            email: "peter@email.com",
            status: "Em transporte",
            dateOfDeliveryDeadline: new Date(2022, 10, 15),
            dateOfEnter: new Date(2022, 10, 12, 14),
            products: [
                "1x Serra Circular", "1x Trena", "2x Caixa de ferramentas"
            ],
            spentTimeInAntifraud: 2,
            spentTimeInSeparation: 0,
            spentTimeInPackaging: 0,
            spentTimeInLogistics: 0,
            spentTimeInTransportation: 0,
            dateOfDelivery: 0,
            commentary: ""
        },
    ];


    axios.get('/orders')

    .then(function (response) {

    })

    .catch(function (error) {
        console.log(error);
    })

    .then(function () {

    })


export default mockedOrders