import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title> New Document </title>
      <meta name="Generator" content="EditPlus" />
      <meta name="Author" content />
      <meta name="Keywords" content />
      <meta name="Description" content />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\n  html, body {\n\n  height: 100%;\n\n  padding: 0;\n\n  margin: 0;\n\n  background: #000;\n\n}\n\ncanvas {\n\n  position: absolute;\n\n  width: 100%;\n\n  height: 100%;\n\n}\n\n  ",
        }}
      />
      <canvas id="pinkboard" />
    </div>
  );
  return <Component {...pageProps} />;
}
