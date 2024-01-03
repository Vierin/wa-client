import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { TOKEN } from '../app.constants'

import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { setIsAuth, isAuth } = useAuth()
	const { pathname } = useLocation()

	// при смене пути и isAuth проверяем авторизацию и если нет токена, то выходим с системы
	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (!token) setIsAuth(false) //выходим с системы
	}, [pathname, isAuth])
}
