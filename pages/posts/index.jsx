import React, { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import Form2 from './Form2';
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
            <Card>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={3}></Col>
                    <Col className="gutter-row" span={6}>
                        <Form2 />
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <List posts={props.posts} />
                    </Col>
                </Row>
            </Card>
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