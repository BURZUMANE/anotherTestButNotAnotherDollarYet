import { Provider } from 'mobx-react'
import Router from 'next/router';
import { useNewsStore } from '../mobx/newsContext'
export default function App({ Component, pageProps }) {
  const store = useNewsStore(pageProps.initialState)
  Router.events.on("routeChangeComplete", () => {
    if (process.env.NODE_ENV !== "production") {
      const els = document.querySelectorAll(
        'link[href*="/_next/static/css/styles.chunk.css"]',
      );
      const timestamp = new Date().valueOf();
      els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
    }
  });
  return (
    <Provider store={useNewsStore}>
      <Component {...pageProps} />
    </Provider>
  )
}