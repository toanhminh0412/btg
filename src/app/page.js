import Script from "next/script"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"

export const metadata = {
  title: 'Home - BTG',
}

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Services />
      <Script src="https://www.cognitoforms.com/f/seamless.js" data-key="TaJuz4Nzc0aJoUcgy2rbCQ" data-form="1"/>
    </div>
  )
}
