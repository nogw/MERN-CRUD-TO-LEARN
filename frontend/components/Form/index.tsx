import axios from 'axios';
import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import NProgress from 'nprogress'; 
import { FaCheckSquare } from 'react-icons/fa'
import Link from 'next/link'

function Form() {
  interface IInputs {
    name: string;
    title: string;
    post: string;
  }

  const initialInputs: IInputs = {
    name: "",
    title: "",
    post: "",
  }

  const [form, setForm] = useState(initialInputs)
  const [send, setSend] = useState(false)
  const [user, setUser] = useState<any>({})

  const handleChange = (e: any) => {
    const {value, name} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  const addUser = () => {
    NProgress.start()

    if (form.name && form.title && form.post) {
      api.post("/post", {
        name: form.name,
        title: form.title,
        date: dayjs().format("DD/MM/YYYY"),
        post: form.post,
      })
      .then((user: any) => {
        const decoded: any = jwtDecode(user.data.message)
        setUser(decoded)
        NProgress.done()
        setSend(true)
      })
      .catch((err) => {
        console.log(err)
        NProgress.done()
      })
    } else {
      console.log("preenche")
      NProgress.done()
    }
  }

  return (
    <Container>
      {
        !send ? (
          <>
            <div className="input">
              <input onChange={e => handleChange(e)} value={form.name} spellCheck="false" name="name" type="text" />
              <label className="label-control" htmlFor="name">Name</label>
            </div>
            <div className="input">
              <input onChange={e => handleChange(e)} value={form.title} spellCheck="false" name="title" type="text" />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input">
              <textarea onChange={e => handleChange(e)} value={form.post} spellCheck="false" name="post"/>
              <label htmlFor="post">Post</label>
            </div>

            <button onClick={addUser}>
              SEND
            </button>
          </>
        ) : (
          <div className="confirm">
            <div className="textIcon">
              <FaCheckSquare className="icon"/>
              <h1>
                your post is under review
              </h1>
            </div>
            <Link href={`http://localhost:3000/post/${user.id}`}>
              <div className="tempLink">
                <h1>
                  http://localhost:3000/post/{user.id}
                </h1>
              </div>
            </Link>
          </div>
        )
      }
    </Container>
  );
};

export default Form;
