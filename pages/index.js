import Title from '../components/title';
import Layout from '../components/layout';

export default function Home(){
    return(
      <Layout>
        <Title>Safira IDE</Title>

        <p>Uma linguagem de programação a nível natural</p>
        <p>Safira é uma linguagem de programação para iniciantes, natural e em múltiplos idiomas! O objetivo deste projeto é desenvolver a lógica de programação nas pessoas, com muito mais facilidade do que as linguagens atuais.</p>
        <p>Esperamos que ela possa suavizar o aprendizado de linguagens como C, C#, Javascript, R, Python, etc.</p>
        <p>Para pessoas com pouca ou nenhuma base de conhecimento a respeito de programação, pode ser difícil começar a aprender lógica de programação por uma linguagem mais avançada, onde ela terá que se preocupar com detalhes da linguagem. O nosso objetivo é reduzir toda a complexidade, manter o conceito e trazer a programação para um nível natural, que pode ser escrito da forma como pensamos.</p>
        <p>Na prática, você programa com muito mais liberdade, deixando seu cérebro entender o conceito com mais facilidade! A evolução acontece no seu ritmo e acreditamos que em pouco tempo todos os conceitos de programação parecerão muito simples.</p>
        <p>Inicialmente você pode usar comandos como "se", "enquanto" e posteriormente pode ir alterando para "if" ou "while" quando o conceito já estiver sido entendido.</p>
        <p>Não queremos substituir as linguagens existentes, mas pretendemos criar uma aplicação que torne o primeiro contato com o mundo da programação, o mais simples possível.</p>
        <p>Então, já que você chegou até aqui, acho que você se interessou né? Então...</p>
        <p>Está é a Safira na versão 0.25</p>
        <p>Nossa IDE conta com um interpretador, um modo debug super simples, uma grid de variáveis e muitos comandos embutidos!</p>
        <p>Ou seja, não apenas abstraímos a linguagem para um multinível, mas a IDE como um todo, sendo extremamente simples de se usar.</p>
        <p>Você pode baixar a primeira versão beta da Safira na aba downloads</p>
        <p>Baixe para Windows 10, Linux Mint 5 ou Ubuntu 20</p>

      </Layout>
    )
}