import React from "react";
import Head from 'next/head'
import Upload from "@/components/upload";

const library = () => {
    return (
        <>
            <Head>
                <title>Library</title>
                <meta name="keywords" content="music, streaming, entertainment"></meta>
            </Head>
            <main className="min-h-screen">
                <h1>Music Library here:</h1>
                <Upload />
            </main>

        </>
    );
};
export default library;