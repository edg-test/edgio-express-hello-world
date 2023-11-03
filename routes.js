// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from '@edgio/core'

export default new Router()
    .match('/:path*', ({ renderWithApp }) => {
        renderWithApp()
    })
    .match('/compute', ({ compute }) => {
        compute((req, res) => {
            res.setHeader('Content-Type', 'application/json')
            res.body = JSON.stringify({
                message: 'Hello World from compute!'
            })
        })
    })