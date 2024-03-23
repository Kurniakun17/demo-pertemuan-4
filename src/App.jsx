function App() {
  function handleClick() {
    alert("Welcome to the app")
  }

  return (
    <div className="text-white bg-[#141414] min-h-screen grid place-items-center">
      <div className="max-w-[400px] rounded-xl bg-[#1F1F1F] p-10 flex flex-col items-center gap-4">
        <img className="rounded-full w-24 aspect-square" src="/profile.jpeg" />
        <div className="text-center">
          <h1 className="text-2xl font-bold">Kurnia Kharisma</h1>
          <p className="text-[#c5f82a] font-medium">Jakarta, Indonesia</p>
        </div>
        <p className="text-gray-300 text-center text-sm my-[8px]">
          "Front-end Developer and a Lifelong Learner📚"
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a
            href="https://instagram.com/kurniakun17"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Instagram
          </a>
          <a
            href="https://id.linkedin.com/in/kurnia-kharisma-agung-samiadjie-88b54a224"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kurniakun17"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Github
          </a>
          <a
            href="https://frontendmentor.io/profile/kurniakun17"
            className="w-full text-white bg-[#333] block text-center py-2 hover:scale-105 active:scale-90 duration-300 rounded-lg font-medium"
          >
            Frontend Mentor
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
