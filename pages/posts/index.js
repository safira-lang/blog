import Link from 'next/link';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function Users({ posts }){
  return (

      <Layout>
        <Title>Post Page</Title>

        <div>
          {posts.map(post => {
            return (
              <Link href={`posts/[id]`} as={`posts/${post.id}`} key={post.id}>
              <a className='card'>
                <h3>Post</h3>
                <p>Titulo: {post.title}</p>
                <p>Descrição: {post.description}</p>
              </a>
              </Link>

            );
   
          }
         )
        }
        </div>

      </Layout>
      )
}


export async function getStaticProps() {
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

  return {
    props: {
      posts
    }
  }
}