import React, { useState } from 'react';
import { Container, Col, Row, Card } from 'reactstrap';
import FormatDate from './FormatDate';
import imgDefault from '../../assets/music.png';
import Modal from './Modal';

function List({ posts }) {
    return (
        <div>
            {posts.map((post, index) => (
                <div className="box-music" key={index}>
                    <Row>
                        <Container>
                            <Row>
                                <Col lg={3} md={4} sm={6} sx={6}>
                                    <Card>
                                        <ModalImage post={post} />
                                    </Card>
                                </Col>
                                <Col lg={9} md={8} sm={6} sx={6}>
                                    <div className="box-title">
                                        <ModalName post={post} />
                                    </div>
                                    <div className="box-infor">
                                        <p><span className="from-to">Do </span><b>{post.sender ? post.sender : "Ẩn danh"} </b><span className="from-to">gửi đến </span><b>{post.receiver ? post.receiver : "Ai đó"}</b></p>
                                    </div>
                                    <div className="box-mess">
                                        <span><i className="fa fa-envelope"></i>Với lời nhắn...</span><br />
                                        <span className="short-mess"><span className="mess">{post.message}</span></span>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="box-time">
                                <i><FormatDate date={post.time} /></i>
                            </Row>
                            <Modal post={post} />
                        </Container>
                    </Row>
                </div>
            ))}
        </div>
    )
}

function ModalImage(props) {
    const [url, setUrl] = useState(props.post.link);
    const [target, setTarget] = useState("_blank");
    const [dataToggle, setDataToggle] = useState("");
    const [srcImage, setSrcImage] = useState(imgDefault);
    if (url.includes("youtube.com")) {
        const idImage = url.split("v=");
        const img = "https://img.youtube.com/vi/" + idImage[1] + "/mqdefault.jpg";
        setSrcImage(img);
        setUrl("#exampleModalCenter" + props.post.id)
        setTarget("");
        setDataToggle("modal");

    }
    return (
        <a target={target} href={url} data-toggle={dataToggle}>
            <img className="thumbnail" src={srcImage} alt={props.post.name} />
        </a>
    );
}

function ModalName(props) {
    const [url, setUrl] = useState(props.post.link);
    const [target, setTarget] = useState("_blank");
    const [dataToggle, setDataToggle] = useState("");
    if (url.includes("youtube.com")) {
        setUrl("#exampleModalCenter" + props.post.id);
        setTarget("");
        setDataToggle("modal");
    }
    return (
        <a target={target} href={url} data-toggle={dataToggle}><i className="fas fa-compact-disc"></i>&nbsp;{props.post.name}</a>
    );
}

export default List;
