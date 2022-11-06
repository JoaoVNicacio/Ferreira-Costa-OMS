import mockedOrders from './mockedOrders';

const mockedClosestOrders: {

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

}[] = mockedOrders.sort(
  (objA, objB) => Number(objA.dateOfDeliveryDeadline) - Number(objB.dateOfDeliveryDeadline)
);

export default mockedClosestOrders