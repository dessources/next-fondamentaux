import Link from "next/link"

const Page = () => {
  return (
    <div>
      {/* 🐶 Applique le style global `.title` sur l'élément <p> */}
      <p className="title">Je suis un développeur FullStack Next</p>
      {/* 🐶 Applique le style `tailwind` sur le composant `<Link>` pour le transformer en bouton*/}
      <div className="mt-4">
        <Link
          href="/exercise/account"
          className="hover:bg-gray-10 rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800"
        >
          Account
        </Link>
      </div>

      {/* 🐶 Pense à regarder l'exercice bonus*/}
    </div>
  )
}

export default Page
