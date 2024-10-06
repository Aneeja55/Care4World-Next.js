"use client"

import Link from "next/link";
import Layout from "../app/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome to the Micro Donation Platform</h1>
      <Link href="/donate">
        Donate Anonymously
      </Link>
      <br />
      <Link href="/register-cause">
        Register a Cause
      </Link>
    </Layout>
  );
};

export default Home;
