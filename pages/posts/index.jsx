import React, {useState} from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Form1 from './Form1';
import List from './List';
import Head from 'next/head';

const IndexPosts = (props) => {
    return (
        <>
            <Head>
                <title>D2 Music Order</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            </Head>
            <Jumbotron className="content">
                <Row>
                    <Col lg="1" md="1" xs="12" sm="12"></Col>
                    <Col lg="3" md="3" xs="12" sm="12">
                        <Container>
                            <Form1 />
                        </Container>
                    </Col>
                    <Col lg="7" md="7" xs="12" sm="12">
                        <List posts={props.posts} />
                    </Col>
                </Row>
            </Jumbotron>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://musicapp-db.herokuapp.com/posts?_sort=id&_order=desc')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}

export default IndexPosts;