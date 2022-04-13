import { signIn } from "next-auth/react";
import Button from "../atom/Button/Button";
import {useState} from 'react'
import Form from '@/components/Form'

const LoginForm = () => {

  const [showLoginForm, setShowLoginForm] = useState(false)

  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-gray-800 font-bold text-center mb-1">
        Join Waitlist
      </h2>
      <p className="text-sm text-gray-600 whitespace-nowrap text-center">
        Join 680k designers, makers, and coders
      </p>
      <div className="flex flex-col gap-2 flex-grow mt-6">
        <Button
          isFullWidth
          className="text-left justify-start h-11 font-normal"
          color="twitter"
          leftIcon={
            <div className="bg-white p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#55ACEE"
                viewBox="0 0 24 24"
                className="!h-4 !w-4"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
          }
          onClick={() => signIn("twitter")}
        >
          Sign up with Twitter
        </Button>
        <Button
          isFullWidth
          className="text-left justify-start h-11 font-normal"
          color="github"
          leftIcon={
            <div className="bg-white p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#1F1F1F"
                viewBox="0 0 16 16"
                className="!h-4 !w-4"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          }
          onClick={() => signIn("github")}
        >
          Sign up with Github
        </Button>
        <Button
          isFullWidth
          className="text-left justify-start h-11 font-normal"
          color="google"
          leftIcon={
            <div className="bg-white p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                className="!h-4 !w-4"
              >
                <defs>
                  {" "}
                  <path
                    id="prefix__a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />{" "}
                </defs>{" "}
                <clipPath id="prefix__b">
                  {" "}
                  <use xlinkHref="#prefix__a" overflow="visible" />{" "}
                </clipPath>{" "}
                <path
                  clipPath="url(#prefix__b)"
                  fill="#FBBC05"
                  d="M0 37V11l17 13z"
                />{" "}
                <path
                  clipPath="url(#prefix__b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />{" "}
                <path
                  clipPath="url(#prefix__b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />{" "}
                <path
                  clipPath="url(#prefix__b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />{" "}
              </svg>
            </div>
          }
          onClick={() => signIn("google")}
        >
          Sign up with Google
        </Button>
      </div>
      <div className="my-5">
        <p className="text-gray-600 text-center font-medium">OR</p>
      </div>
      {showLoginForm==false ?<Button
        isFullWidth
        className="text-left justify-start h-11 font-normal"
        onClick={()=>{
          setShowLoginForm(!showLoginForm)
          // signIn("email", {email:'graeme@prototypr.io'})
        }}
        leftIcon={
          <div className="bg-white p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="!h-4 !w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        }
      >
        Sign up with Email
      </Button>:
      <Form 
        buttonText={'Sign up'} 
        label={'Enter your email address'}
        inputType={'email'}
        placeholder={'hola@prototypr.io'}
        onSubmit={(e)=>{
          e.preventDefault()
          // alert(e.target[0].value)
          signIn("email", {email:e.target[0].value})
        }}
        />}
    </div>
  );
};

export default LoginForm;
