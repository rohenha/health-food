import { useParams, useNavigate, useLoaderData } from 'react-router-dom'
import { App, Popconfirm } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useContext } from 'react'

import { AuthContext } from '@contexts/AuthContext'

import { Layout, Typography, Button } from 'antd'

const { Title } = Typography

import { findOneRecipe, removeRecipe } from '@libs/recipes'

export const Loader = async ({ params }) => {
  const recipe = await findOneRecipe(params.id)
  console.log(recipe)
  return {
    recipe,
  }
}

export default function Recipe() {
  const { recipe } = useLoaderData()
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const { notification } = App.useApp()
  const navigate = useNavigate()

  const deleteRecipe = async () => {
    // setConfirmLoading(true)
    const response = await removeRecipe(id)
    // setConfirmLoading(false)
    if (response) {
      notification.info({
        message: `Recette bien supprimée`,
        description: 'La recette a bien été supprimée',
        icon: <CloseOutlined style={{ color: '#BF3131' }} />,
        placement: 'bottomRight',
      })
      return navigate('/app/recipes')
    }

    notification.info({
      message: `Erreur`,
      description:
        'Une erreur est survenue lors de la suppression de la recette, veuillez réessayer',
      icon: <CloseOutlined style={{ color: '#BF3131' }} />,
      placement: 'bottomRight',
    })
  }

  return (
    <Layout>
      <div className="t-recipe">
        <Title>{recipe.attributes.title}</Title>
        <ul>
          <li>Titre :{recipe.attributes.title}</li>
          <li>Nature :{recipe.attributes.nature}</li>
          <li>
            Temps de préparation :{recipe.attributes.preparation_duration} min
          </li>
        </ul>
        <Button type="primary" url={`/app/recipes/${recipe.id}/edit`}>
          Editer la recette
        </Button>
        {recipe.attributes.user.data &&
        recipe.attributes.user.data.id === user.id ? (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={deleteRecipe}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        ) : (
          ''
        )}
      </div>
    </Layout>
  )
}
