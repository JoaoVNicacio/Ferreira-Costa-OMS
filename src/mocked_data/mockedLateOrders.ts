import mockedOrders from './mockedOrders';

const mockedLateOrders: {

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
  return obj.status === 'Atrasado'
})

export default mockedLateOrders