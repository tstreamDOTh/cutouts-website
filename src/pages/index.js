import "./index.scss"

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "@reach/router"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Cutouts" />
      <section className="hero-section">
        <Link to="/">
          <img className="logo" src="images/logo.png" />
        </Link>
        <div className="info">
          <h1>Pinterest board for your Clipboard</h1>
          <p>
            Cutouts brings you the smartest clipboard organiser for the web ever
            built. Save images, text & videos with a click. Escape the worry of
            keeping track. Cutouts makes it simple to organise your web using ML
            on the browser to make your search relevant.
          </p>

          <div className="cta">
            <a
              href="https://chrome.google.com/webstore/detail/cutouts/jcjaaeialhaakckfpmpkipnjeiggekib?hl=en-GB&authuser=0"
              target="_blank"
            >
              <button>
                <img src="images/chrome.svg" />
                Install on Chrome
              </button>
            </a>
            <a
              href="https://www.producthunt.com/posts/cutouts?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cutouts"
              target="_blank"
              style={{ width: "250px", height: "45px" }}
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=235365&theme=light"
                alt="Cutouts - The Pinterest for your clipboard. Be inspired & productive | Product Hunt Embed"
                style={{ width: "250px", height: "45px" }}
                width="250px"
                height="45px"
              />
            </a>
          </div>
        </div>

        <picture className="hero-banner">
          <source srcset="images/hero-m.jpg" media="(max-width: 700px)" />
          <img src="images/hero.jpg" alt="" />
        </picture>
      </section>
      <section className="how">
        <h2>Found something interesting? Simply Cutout!</h2>
        <picture className="banner">
          <source srcset="images/how-m.jpg" media="(max-width: 700px)" />
          <img src="images/how.jpg" alt="" />
        </picture>
      </section>

      <section className="features">
        <h2>The smart clipboard manager you deserve.</h2>
        <picture className="banner">
          <img src="images/what.jpg" alt="" />
        </picture>
      </section>

      <section className="personas">
        <h2>Anyone can use Cutouts!</h2>

        <div className="persona">
          <article>
            <img src="images/ostrich.jpg" />
            <h3>Writers</h3>
            <p>
              Save text highlights from the web. Collect inspiration & data for
              your next big article or award winning ad.
            </p>
          </article>
          <article>
            <img src="images/toucan.jpg" />
            <h3>Designers</h3>
            <p>
              Save images & videos to generate moodboards on the fly. Also never
              be short of color inspirations
            </p>
          </article>
          <article>
            <img src="images/penguin.jpg" />
            <h3>Researchers</h3>
            <p>
              Collect data & find unexpected connections between bits of
              information, never moving away from your active tab.
            </p>
          </article>
        </div>
      </section>

      <section className="secure">
        <h2>Cutouts Is Free & Secure!</h2>
        <p>
          Cutouts saves your collection on your local storage. Hence, your data
          never leaves your system & is always secure. To add a cherry on top,
          Cutouts is free forever!
        </p>
        <div className="cta">
          <a
            href="https://chrome.google.com/webstore/detail/cutouts/jcjaaeialhaakckfpmpkipnjeiggekib?hl=en-GB&authuser=0"
            target="_blank"
          >
            <button>
              <img src="images/chrome.svg" />
              Install on Chrome
            </button>
          </a>
          <a
            href="https://www.producthunt.com/posts/cutouts?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cutouts"
            target="_blank"
            style={{ width: "250px", height: "45px" }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=235365&theme=light"
              alt="Cutouts - The Pinterest for your clipboard. Be inspired & productive | Product Hunt Embed"
              style={{ width: "250px", height: "45px" }}
              width="250px"
              height="45px"
            />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
