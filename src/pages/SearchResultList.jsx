import React,{useState} from 'react'
import CommonSection from "../shared/CommonSection";
import {Container,Row,Col} from 'reactstrap';

import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import Newsletter from "./../shared/Newsletter";


const SearchResultList = () => {

  const location =useLocation();  /* now the state we set using the navigate hook, we will use it using the useLocation hook */

  const [data]=useState(location.state);
  // console.log(data);

  return <>
      <CommonSection title={'Tour Search Result'}/>
      <section>
        <Container>
            <Row>
                {
                  data.length===0 ? <h4 className='text-center'>No tour found</h4> :
                   data?.map(tour=> <Col lg='3' className='mb-4' key={tour._id}>
                   <TourCard tour={tour}/>
                  </Col>)
                }
            </Row>
        </Container>
      </section>
      <Newsletter/>
  </>
}

export default SearchResultList