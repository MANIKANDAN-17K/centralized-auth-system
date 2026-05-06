import { AuthButton } from './components/AuthButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <span className="font-semibold text-gray-900 text-lg">MyApp</span>
        <AuthButton />
      </nav>

      {/* Page Content */}
      <main className="flex flex-col items-center justify-center mt-32 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Centralized Auth Service</h1>
        <p className="text-gray-500 text-sm max-w-md">
          Click the <strong>Login / Sign Up</strong> button in the top right to authenticate.
          Once signed in, your JWT token is stored and ready to use.
        </p>
      </main>

    </div>
  )
}

export default App