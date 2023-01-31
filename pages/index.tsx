/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import dynamic from "next/dynamic";

const BrowerComponent = dynamic(() => import("../src/components/bower"), {
  ssr: false,
});

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <BrowerComponent />
    </div>
  </div>
);

export function getStaticProps() {
  // get daat from cms
  return {
    props: {
      content: {
        title: "This is my really nice app",
      },
    },
  };
}
