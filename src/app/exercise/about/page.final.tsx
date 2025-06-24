import Link from "next/link"

const Page = () => {
  return (
    <div>
      <p style={{ marginBottom: "100rem" }}>
        Je suis un développeur FullStack Next
      </p>
      <p style={{ marginBottom: "100rem" }}>Bottom of the about page.</p>
      <Link href="/exercise/account">Account</Link>
    </div>
  )
}

export default Page
