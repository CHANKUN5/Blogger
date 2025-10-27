import { mockData } from '../data/mock'

const getRequestCount = () => {
  return parseInt(localStorage.getItem('requestCount') || '0')
}

const setRequestCount = (count) => {
  localStorage.setItem('requestCount', count.toString())
}

const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const simulateError = () => {
  const count = getRequestCount()
  setRequestCount(count + 1)
  if (count < 2) {
    throw new Error('Error 404: No se pudieron cargar los posts')
  }
  setRequestCount(0)
}

export const getPosts = async () => {
  await simulateDelay(800)
  simulateError()
  return mockData.posts
}

export const getPostById = async (id) => {
  await simulateDelay(400)
  const post = mockData.posts.find(p => p.id === parseInt(id))
  if (!post) throw new Error('Post no encontrado')
  return post
}

export const getPostsByCategory = async (category) => {
  await simulateDelay(500)
  return mockData.posts.filter(p => p.category === category)
}

export const getComments = async (postId) => {
  await simulateDelay(300)
  const mockComments = mockData.comments[postId] || []
  const localComments = JSON.parse(
    localStorage.getItem(`comments_${postId}`) || '[]'
  )
  return [...mockComments, ...localComments]
}

export const addComment = async (postId, comment) => {
  await simulateDelay(200)
  const localComments = JSON.parse(
    localStorage.getItem(`comments_${postId}`) || '[]'
  )
  localComments.push(comment)
  localStorage.setItem(`comments_${postId}`, JSON.stringify(localComments))
  return comment
}

export const toggleLike = (postId) => {
  const likes = JSON.parse(localStorage.getItem('likes') || '{}')
  likes[postId] = !likes[postId]
  localStorage.setItem('likes', JSON.stringify(likes))
  return likes[postId]
}

export const isPostLiked = (postId) => {
  const likes = JSON.parse(localStorage.getItem('likes') || '{}')
  return likes[postId] || false
}

export const resetRequestCount = () => {
  setRequestCount(0)
}