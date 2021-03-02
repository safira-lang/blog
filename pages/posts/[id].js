import {useRouter} from 'next/router';
import Layout from '../../components/layout';
import Title from '../../components/title';

export default function Post({ post }){
    const router = useRouter();

    if (router.isFallback) {
      return <div>Aguarde, carregando página!</div>
    }

    return (
      <Layout>
        <Title>Post ID: {post.id}</Title>
        <div className='card'>
          <h3>Post</h3>
          <p>Name: {post.title}</p>
        </div>
    </Layout>
  )
}


export async function getStaticPaths() {
  const posts = [
    {
      "id":1,
      "title":"Novidas na versão 0.35",
      "description":"Adicionamos o recurso de um simples tutorial",
      "text":"",
      "author":"",
      "tags":[],
    },
    {
      "id":2,
      "title":"Novidas na versão 0.3",
      "description":"Corrigimos o bug ao atualizar para novas versões",
      "text":"",
      "author":"",
      "tags":[]
    }
  ]

  const paths = posts.map(post => {
    return {
      params: { id: `${post.id}` }
    }
  });
  
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {

  // params.id
  // Obter um post especifico.
  const post = {
      "id":1,
      "title":"Novidas na versão 0.35",
      "description":"Adicionamos o recurso de um simples tutorial",
      "text":"",
      "author":"",
      "tags":[],
    }

  return {
    props: {
      post
    }
  }
}