import mockedOrders from './mockedOrders';

// Filtrando os dados:
const mockedDeliveredOrders: {

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

}[] = mockedOrders.filter((obj) => {
  return obj.status === 'Entregue'
})

export default mockedDeliveredOrders