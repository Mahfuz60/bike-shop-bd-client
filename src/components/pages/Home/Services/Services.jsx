import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Periodic from '../../../images/periodic-service.png';
import Repair from '../../../images/repairing-service.png';
import Battery from '../../../images/battery.png';
import Engine from '../../../images/motorcycle-1.png';
import Insurance from '../../../images/insurance.png';
import Rsa from '../../../images/road-side-assistance.png';
import Spare from '../../../images/wheel.png';
import Custom from '../../../images/custom-repair.png';
import Service from '../Service/Service';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Periodic Service',
      images: `${Periodic}`,
      description:
        'Periodic inspection, adjustment and lubrication is really important to keep your motorcycle in the safest and most efficient condition.',
    },
    {
      id: 2,
      title: 'General Repairs',
      images: `${Repair}`,
      description:
        ' Bike servicing and maintenance and may wonder if the mechanic was right in suggesting to replace some parts at particular usage. ',
    },
    {
      id: 3,
      title: 'Batteries',
      images: `${Battery}`,
      description:
        'The battery is the main source of electrical energy in our vehicles. It stores chemicals, not electricity. ',
    },
    {
      id: 4,
      title: 'Engine Work',
      images: `${Engine}`,
      description:
        'Motorcycle engines work the same way that car engines do. They consist of pistons, a cylinder block and a head, which contains the valve train.',
    },
    {
      id: 5,
      title: 'Insurance Services',
      images: `${Insurance}`,
      description:
        'Two Wheeler Insurance or Bike Insurance is a plan that protects the owner of a bike from any possible damages in case of an accident, theft or natural disaster. ',
    },
    {
      id: 6,
      title: 'RSA Services',
      images: `${Rsa}`,
      description:
        'A two-wheeler Roadside Assistance Plan provides on-site repairs in case of unfortunate mechanical or technical 2-wheeler breakdown including lost key, battery jumpstart, flat-tyre assistance, Fuel Delivery.',
    },
    {
      id: 7,
      images: `${Spare}`,
      title: 'Spare Parts',
      description:
        'Spare parts are parts that you can buy separately to replace old or broken parts in a piece of equipment. They are usually parts that are designed to be easily removed or fitted.',
    },
    {
      id: 8,
      images: `${Custom}`,
      title: 'Custom Services',
      description:
        'A custom bike build is always an exciting project for all involved, an opportunity to create something from nothing, a bike that fits you perfectly, looks amazing and rides like a dream. ',
    },
  ];

  return (
    <>
      <Container>
        <h1 className='text-center mt-5 fw-bold'>
          Our <span className='text-danger'>Services</span>
        </h1>
        <Row className='d-flex mx-4 pt-5 g-3' xs={1} md={4} lg={4}>
          {services.map((service, id) => (
            <Service service={service} key={id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
