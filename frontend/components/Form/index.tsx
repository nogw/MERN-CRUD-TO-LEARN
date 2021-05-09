import axios from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

function Form() {
  interface IInputs {
    name: string;
    email: string;
    post: string;
  }

  const initialInputs: IInputs = {
    name: "",
    email: "",
    post: "",
  }

  const [form, setForm] = useState(initialInputs)

  const handleChange = (e: any) => {
    const {value, name} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  const addUser = () => {
    if (form.name && form.email && form.post) {
      api.post("/user", {
        name: form.name,
        email: form.email,
        date: dayjs().format("DD/MM/YYYY"),
        post: form.post,
      })
      .then((user: any) => {
        const decoded = jwtDecode(user.data.message)
        console.log(decoded)
      })
      .catch((err) => {
        console.log(err)
      })
    } else {
      console.log("preenche")
    }
  }

  return (
    <Container>
      <div className="input">
        <input onChange={e => handleChange(e)} value={form.name} spellCheck="false" name="name" type="text" />
        <label className="label-control" htmlFor="name">Name</label>
      </div>
      <div className="input">
        <input onChange={e => handleChange(e)} value={form.email} spellCheck="false" name="email" type="text" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input">
        <textarea onChange={e => handleChange(e)} value={form.post} spellCheck="false" name="post"/>
        <label htmlFor="post">Post</label>
      </div>

      <button onClick={addUser}>
        SEND
      </button>
    </Container>
  );
};

export default Form;
