// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/app`
  | `/app/account`
  | `/app/account/edit`
  | `/app/account/recipes`
  | `/app/planning`
  | `/app/recipes`
  | `/app/recipes/:id`
  | `/app/recipes/:id/edit`
  | `/app/recipes/new`
  | `/app/recipes/search`
  | `/sign-in`
  | `/sign-up`

export type Params = {
  '/app/recipes/:id': { id: string }
  '/app/recipes/:id/edit': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
