import { GetStaticProps } from "next";
import Link from "next/link";

export default function Home({ org , members }) {
    console.log(members);
    return (
        <div>
            <h1>{org.login}</h1>
            <h3>{org.description}</h3>

            <p>Site: <a href={org.blog}>{org.blog}</a></p>

            <p>Membros</p>
            <ul>
                {
                    members.map(member => {
                        return (
                            <li>
                                <Link href={member.url}>
                                    <a>{member.login}</a>
                                </Link>
                            </li>
                        )
                    })
                }
                <li></li>
            </ul>
        </div>
    )
}

export const getStaticProps = GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/orgs/rocketseat')
    const data = await response.json();

    const responseMember = await fetch(`https://api.github.com/orgs/rocketseat/members`);
    const dataMember = await responseMember.json();

    const members = dataMember.map(member => {
        return {login: member.login, url: '/rocketseat/members/'+member.login }
    })

    return {
        props: {
            org: data,
            members: members,
        },
        revalidate: 1
    }
}
