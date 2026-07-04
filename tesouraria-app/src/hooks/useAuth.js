/** Acesso tipado ao AuthContext — falha cedo se usado fora do provider. */
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth tem de ser usado dentro de AuthProvider')
  }

  return context
}
