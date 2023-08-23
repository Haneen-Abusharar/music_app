import React from "react";
import Head from 'next/head'

const library = () => {
    return (
        <>
            <Head>
                <title>Library</title>
                <meta name="keywords" content="music, streaming, entertainment"></meta>
            </Head>
            <main className="min-h-screen">
                <h1>Music LIbrary here:</h1>
            </main>
        </>
    );
};
export default library;