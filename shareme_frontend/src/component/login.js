import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
// import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/dreams.mp4'
import logo from '../assets/logowhite.png'

// import { client } from '../client'

const Login = () => {
// const navigate = useNavigate();
const responseGoogle=(response) => {
    console.log(response)
    // localStorage.setItem('user', JSON.stringify(response.profileObj))
    // const {name, googleId, imageUrl} = response.profileObj

    // const doc ={
    //     _id:googleId,
    //     _type: 'user',
    //     userName: name,
    //     image: imageUrl,
    // }

    // client.createIfNotExists(doc)
    // .then((response) => {
    //     navigate('/', {replace: true})
    // })

}

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video 
            src={shareVideo}
            type='video/mp4' 
            loop
            autoPlay
            controls={false}
            muted={true}

            className='w-full h-full object-cover'
        />
        <div className='justify-center left-0 right-0 bottom-0 top-0 items-center absolute flex flex-col bg-blackOverlay'>
            <div className='p-5'>
                <img src={logo} width="130px" alt='logo'/>
                </div>
                <div className='shadow-2xl'>
                      <GoogleOAuthProvider clientId='646566556343-6f8vq22eb0ha8mcnvqbabiivqrp9vmqc.apps.googleusercontent.com'>
                    <GoogleLogin              
                        //   clientId={process.env.REACT_GOOGLE_API_TOKEN}
                        render = {(renderProps) => (
                            <button className='bg-mainColor p-3 justify-center items-center cursor-pointer outline-none rounded-lg'
                            type='button'
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                            <FcGoogle className='mr-4' /> Sign in with Google
                            </button>
                            
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        // cookiePolicy="single-host-origin"
                    />
                    </GoogleOAuthProvider>
                </div>
            
        </div>
      </div>
    </div>
  )
}

export default Login
