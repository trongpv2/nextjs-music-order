import React from 'react';
import axios from "axios";
import { Form, Input, Button, Divider, Card } from 'antd';

export default function Form1() {
  const onFinish = data => {
    axios({
      method: 'POST',
      url: 'https://musicapp-db.herokuapp.com/posts',
      data: {
        link: data.order.link,
        name: data.order.name,
        sender: data.order.sender,
        receiver: data.order.receiver,
        message: data.order.message,
        time: new Date()
      }
    }).then(res => {
      console.log(res);
      window.location.reload();
    })
  }
  const layout = {
    labelCol: {
      span: 32,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const style = { padding: '0 8%', width: '142%' };
  return (
    <div id="formInput">
      <div className="align-center header-form">Order Music</div>
      <Card>
        <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
          <Divider orientation="left">Link<span className="vld"> *</span></Divider>
          <Form.Item
            style={style}
            name={['order', 'link']}
            rules={[
              {
                required: true,
                message: "Link is required"
              },
              {
                pattern: new RegExp(/^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g),
                message: "Please enter a valid URL."
              },
            ]}
          >
            <Input placeholder="https://..." />
          </Form.Item>
          <Divider orientation="left">Bài hát<span className="vld"> *</span></Divider>
          <Form.Item
            style={style}
            name={['order', 'name']}
            rules={[
              {
                required: true,
                message: "Name is required"
              },
            ]}
          >
            <Input placeholder="Tên bài hát..."/>
          </Form.Item>
          <Divider orientation="left">Người gửi</Divider>
          <Form.Item
            style={style}
            name={['order', 'sender']}
          >
            <Input placeholder="Họ và tên..."/>
          </Form.Item>
          <Divider orientation="left">Người nhận</Divider>
          <Form.Item
            style={style}
            name={['order', 'receiver']}
          >
            <Input placeholder="Họ và tên..."/>
          </Form.Item>
          <Divider orientation="left">Lời nhắn<span className="vld"> *</span></Divider>
          <Form.Item
            style={style}
            name={['order', 'message']}
            rules={[
              {
                required: true,
                message: "Message is required"
              },
            ]}
          >
            <Input.TextArea rows={5} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  );
}