import Link from "next/link";

function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Link href="/sobre">            
                <a>Ver sobre</a>
            </Link>
            <br></br>
            <Link href="/tempo">            
                <a>Ver tempo</a>
            </Link>
            <br></br>
            <Link href="/rocketseat">            
                <a>Ver rocketseat</a>
            </Link>
        </div>
    );
}

export default Home;