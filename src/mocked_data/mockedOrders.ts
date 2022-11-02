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
            status: "Aguardando antifraude",
            dateOfDeliveryDeadline: new Date(2022, 10, 20, 14, 30, 0, 0),
            dateOfEnter: new Date(2022, 10, 12, 14, 15, 0, 0),
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
    ]

export default mockedOrders