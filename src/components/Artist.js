import React from 'react';
import {Container, Col, Row } from 'reactstrap';

const Artist = ({ artist }) => {
    if (!artist) return null;
    const {images, name, followers, genres } = artist;

    return (
        <div>
            <Container>
                <Col sm={12}>
                    <h1>{name}</h1>
                    <h3>{followers.total} followers</h3>
                    <p>{genres.join(', ')}</p>
                    <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <img
                    src={images && images[0].url}
                    alt='Artist'
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        objectFit: 'cover',
                        margin: 10,
                        marginBottom: 50,
                        boxShadow: "5px 10px 18px #888888"
                    }}>    
                    </img>
                    </Col>
                    </Row>
                </Col>
            </Container>

        </div>
    )
}

export default Artist;