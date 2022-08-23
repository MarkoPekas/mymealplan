import { LogoutIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <button onClick={() => signOut()} className="p-1.5 bg-red-400 rounded-md">
        <LogoutIcon className='w-6 h-6 text-white' />
      </button>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default LoginButton;