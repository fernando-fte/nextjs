export async function getStaticPaths() {
    const paths = [];
    for (let index = 1; index < 8000; index++) {
        paths.push({
            params: {
                id: `${index}`
        }});        
    }

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Produtos(props) {
    return <div>ID do produto: {props.id}</div>
}

export default Produtos;

