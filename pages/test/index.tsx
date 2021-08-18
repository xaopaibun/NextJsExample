import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {
  name: string,
  placeholder : string,
  setValue : (val : string) => void
}
const Input : React.FC<Props> = ({name, placeholder , setValue }) => {
  const onChange = (val : any) =>{
    setValue(val.target.value)
  }
  return(
    <div className="form-group">
      <input type="text"
        className="form-control" onChange={(val : any) => onChange(val)} name={name}  aria-describedby="helpId" placeholder={placeholder} />
    </div>
  );
}
interface PropsButton {
  TextButton: string,
  onClick : (Text : string | null) => void | any
}

const ButtonCustom : React.FC<PropsButton> = ({onClick , TextButton }) => {
  const [Text , setText] = React.useState<string>("Pham Jin");
  return(
    <div className="form-group">
      <button type="button" className="btn btn-primary" onClick = {() => onClick(Text) }>{TextButton}</button>
    </div>
  );
}

const Home : React.FC = () => {
  const [Text1 , setText1] = React.useState<string>("");
  const [Text2 , setText2] = React.useState<string>("");
  const onClick1 = (val: string) =>{
    console.log('hello ', val);
  }
  const onClick2 = () =>{
    console.log('hello 2', Text2 );
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Text 1: {Text1}</h1>
        <h1>Text 2: {Text2}</h1>
        <Input name ="name1" placeholder="Nhap name 1" setValue={setText1} />
        <Input name ="name2" placeholder="Nhap name 2" setValue={setText2} />
        <ButtonCustom TextButton ="Submit" onClick ={onClick1}/>
        <ButtonCustom TextButton ="Submit" onClick ={onClick2}/>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

       
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
      
  )
}

export default Home