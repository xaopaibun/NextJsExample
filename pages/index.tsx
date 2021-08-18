import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useRouter } from 'next/router'
const Home: React.FC = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Please input your name??"),
    }),
    onSubmit: (valuesinput) => {
      router.push({
        pathname: '/chat/[name]',
        query: { name: valuesinput.name},
      })
      console.log(valuesinput.name)
    }
  });
  return (
    <div >
      <Head>
        <title>Authen App Chat</title>
        <link rel="icon" href="/favicon.ico" />
 
      </Head>
      <main>
        <div className='view_box'>
          <div className='box' >
            <div className='container' style={{ paddingLeft: 50, paddingRight: 50 }}>
              <div className='div_box20' />
              <div className="form-group" >
                <div style={{ textAlign: 'center' }}>
                  <img src='https://emilus.themenate.net/img/logo.png' height={70} width={100} />
                  <h3 style={{ fontWeight: 700, fontSize: '20px' }}>Enter your Name?</h3>
                  <div className='div_box5' />
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className='div_input'>

                    <input name='name' type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange} id="login-form_email" placeholder='Name' className="ant-input color_input" />
                    <span className='text-primary'>
                      <i className="fas fa-user"></i>
                    </span>

                  </div>
                  <div className='div_box5' />
                  <div className='div_box20' >
                    {formik.errors.name && (
                      <span className='colorErr' >{formik.errors.name}</span>
                    )}
                  </div>
                  <div className='div_box5' />
                  <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                    <span id="btntext">Submit</span>
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </main>

      <style jsx>{`
        main{
          
        }
        .view_box{
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    background-image: url("https://emilus.themenate.net/img/others/img-17.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
}
.box{
    width: 350px;
    height: 305px;
    background-color: white;
    border-radius: 0.625rem;
}
.div_input{
    position: relative;
}

.div_box20{
    height: 25px;
}
.div_box5{
    height: 10px;
}


.color_input{
    color: #455560;
}
.color_text{
    color: #455560;
}

.ant-btn {
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 40px;
    padding: 8.5px 1.25rem;
    font-size: 14px;
    margin-right: 10px;
    border-radius: .625rem;
    color: #455560;
    background: #fff;
    border-color: #e6ebf1;
}
.ggfb{
    padding-left: 10px;
}
.ant-btn:hover{
    background-color: #ededed;
    border-color: #ededed;
    color: #455560;
}
.ant-btn-primary {
    color: #fff;
    background: #3e79f7;
    border-color: #3e79f7;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
}
.ant-btn-block {
    width: 100%;
}
#btntext{
    color: #fff;
}
.ant-input {
    box-sizing: border-box;
    margin: 0;
    padding-right: 30px;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 8.5px 11px;
    color: #455560;
    font-size: 14px;
    padding-left: 30px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e6ebf1;
    border-radius: .625rem;
    transition: all .3s
}

.ant-input.error{
    border: 1px solid #ff6b72;
}


.ant-input:hover {
    border-color: #699dff;
    border-right-width: 1px!important;
} 

.ant-input.error:focus {
    border-color: #699dff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 1px #ff6b72;
}

.colorErr{
    color: #ff6b72;
}
.ant-input:focus {
    border-color: #699dff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgb(62 121 247 / 20%);
}

      `}</style>

    </div>
  )
}


export default Home