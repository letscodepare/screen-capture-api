import { Router } from 'express'
import screencapture from '@api/routes/screen-capture'

// guaranteed to get dependencies
export default () => {
	const app = Router()

	screencapture(app)
	return app
}
