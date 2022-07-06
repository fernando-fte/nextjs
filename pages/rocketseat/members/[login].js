import { useRouter } from "next/dist/client/router";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Member({ user }) {
 
    return (
        <div>
            <img src={user.avatar_url} alt={user.name} width="80" style={{boderRadius: 40}} />
            <h1>{user.name}</h1>
        </div>
    )
}

export const getStaticPaths =  GetStaticPaths = async () => {

    const response = await fetch(`https://api.github.com/orgs/rocketseat/members`);
    const data = await response.json();

    const paths = data.map(member => {
        return { params: { login: member.login } }
    })

    return {
        paths: paths,
        fallback: true,
    }
}

export const getStaticProps = GetStaticProps = async (context) => {
    const { login } = context.params;

    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();


    return {
        props: {
            user: data,
        }
    }
}
