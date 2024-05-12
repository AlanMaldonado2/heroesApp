import { AuthProvider } from './auth/Context/AuthProvider';
import { AppRouter } from './router/AppRouter';


export const HeroesApp = () => {
  return (
    <AuthProvider>
        
        <AppRouter />

        
    </AuthProvider>
  )
}