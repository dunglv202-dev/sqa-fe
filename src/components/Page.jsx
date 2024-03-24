import { Helmet } from "react-helmet";

function Page({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

export default Page;
