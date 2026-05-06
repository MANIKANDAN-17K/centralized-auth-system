import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { AuthModal } from './AuthModal'

export const AuthButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <>
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">
            Welcome, <span className="font-semibold text-gray-900">{user?.username}</span>
          </span>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2 bg-gray-950 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
        >
          Login / Sign Up
        </button>
      )}

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}