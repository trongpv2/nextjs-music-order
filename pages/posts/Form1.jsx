import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from 'antd';

export default function Form1() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios({
      method: 'POST',
      url: 'https://musicapp-db.herokuapp.com/posts',
      data: {
        link: data.link,
        name: data.name,
        sender: data.sender,
        receiver: data.receiver,
        message: data.message,
        time: new Date()
      }
    }).then(res => {
      console.log(res);
      window.location.reload();
    })
  }
  return (
    <div id="formInput">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="align-center header-form">Order Music</div>
        <div className="jumbotron">
          <div className="form-group">
            <label htmlFor="link">
              Link<span className="errorMessage">*</span>
              <span className="errorMessage">{errors?.link?.message}</span>
            </label>
            <input type="text"
              className="form-control"
              name="link"
              id="link"
              placeholder="https://..."
              ref={
                register(
                  {
                    required: { value: true, message: 'Không được để trống' },
                    pattern: {
                      value: /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?/g,
                      message: "Please enter a valid URL."
                    }
                  })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Bài hát<span className="errorMessage">*</span>
              {errors.name && <span className="errorMessage">Không để trống trường này</span>}
            </label>
            <input type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Tên bài hát..."
              ref={register({ required: true })}
            />

          </div>
          <div className="form-group">
            <label htmlFor="sender">Người gửi</label>
            <input type="text"
              className="form-control"
              name="sender"
              id="sender"
              placeholder="Họ và tên..."
              ref={register}
            />
          </div>
          <div className="form-group">
            <label htmlFor="receiver">Người nhận</label>
            <input type="text"
              className="form-control"
              name="receiver"
              id="receiver"
              placeholder="Họ và tên..."
              ref={register}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Lời nhắn<span className="errorMessage">*</span>
              {errors.message && <span className="errorMessage">Không để trống trường này</span>}
            </label>
            <textarea type="text"
              className="form-control"
              name="message"
              id="message"
              placeholder="Họ và tên..."
              ref={register({ required: true })}
            >
            </textarea>
          </div>
          <div className="btnSubmit">
            {/* <button type="submit" name="btnSubmit" className="btn btn-danger" ref={register}>Submit</button> */}
            <Button type='primary' htmlType='submit' className="btn btn-danger">
              Gửi
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}