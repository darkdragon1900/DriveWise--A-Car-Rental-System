import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { Link } from "react-router-dom";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
            <div class="btn-group">
                <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sort Cars
                </button>
             <ul class="dropdown-menu">
             <li><a class="dropdown-item" href="#">Normal cars</a></li>
             <li><a class="dropdown-item" href="#"><Link  className="nav-link" to="/vintagelist">Vintage cars</Link></a></li>
             
             </ul>
             </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
