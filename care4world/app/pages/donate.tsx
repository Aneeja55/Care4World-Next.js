// pages/donate.tsx
import { FC } from 'react';
import Layout from "../components/Layout";
import DonationForm from "../components/DonationForm";

const Donate: FC = () => {
  return (
    <Layout>
      <DonationForm />
    </Layout>
  );
};

export default Donate;
