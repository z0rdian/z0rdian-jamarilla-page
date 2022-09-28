import Head from "next/head";
import { Fragment } from "react";
import AboutOne from "../components/about";
import BannerOne from "../components/banner";
import BannerTwo from "../components/banner/index-2";
// import BrandOne from "../components/brand";
import Counter from "../components/counter";
import Hero from "../components/home-page/hero";
import HomePageServices from "../components/home-page/homepage-services";
// import LatestBlog from "../components/home-page/latest-blog";
// import LatestProject from "../components/home-page/latest-project";
import Footer from "../components/layout/footer";
import Newsletter from "../components/newsletter/newsletter";
// import Team from "../components/team";
// import Testimonial from "../components/testimonial";
import Contact from "../components/contactHome";
import { getAllItems, getFeaturedItems } from "../lib/items-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home - Amarilla Construcciones</title>
        <meta
          name="description"
          content="Amarilla Construcciones - Soluciones y servicios en la Ciudad de Buenoa Aires. Refacciones de primera calidad al mejor precio. "
        />
      </Head>
      <Hero heroItems={props.heroItems} />
      <BannerOne bannerItems={props.bannerItems} />
      <AboutOne aboutItems={props.aboutItems} />
      {/* <LatestProject
        projects={props.projects}
        project_section__items={props.project_section__items}
      /> */}
      <HomePageServices
        services={props.services}
        service_section__items={props.service_section__items}
      />
      {/* <BannerTwo bannerTwoItems={props.bannerTwoItems} /> */}
      <Counter />

      {/* <Team
        teamItems={props.teamItems}
        team_section__items={props.team_section__items}
      /> */}
      {/* <Testimonial
        testimonialItems={props.testimonialItems}
        testimonial_section__items={props.testimonial_section__items}
      /> */}
      {/* <LatestBlog
        blogs={props.blogs}
        blog_section__items={props.blog_section__items}
      /> */}
      <Contact contactItems={props.contactItems} />
      <Newsletter newsletterItems={props.newsletterItems} />
      <Footer footerItems={props.footerItems} />
    </Fragment>
  );
}

export function getStaticProps() {
  const heroItems = getAllItems("heros");
  const bannerItems = getAllItems("banner");
  const aboutItems = getAllItems("about");
  // const project_section__items = getAllItems("project-section");
  // const projects = getAllItems("projects");
  // const LatestProject = getFeaturedItems(projects);
  // const brandItems = getAllItems("brand");
  const services = getAllItems("services");
  const service_section__items = getAllItems("service-section");
  const HomePageServices = getFeaturedItems(services);
  // const bannerTwoItems = getAllItems("banner-2");
  // const teamItems = getAllItems("team");
  // const team_section__items = getAllItems("team-section");
  // const testimonialItems = getAllItems("testimonial");
  // const testimonial_section__items = getAllItems("testimonial-section");
  // const blog_section__items = getAllItems("blog-section");
  // const blogs = getAllItems("blogs");
  // const LatestBlog = getFeaturedItems(blogs);
  const contactItems = getAllItems("contact");
  const newsletterItems = getAllItems("newsletter");
  const footerItems = getAllItems("footer");

  return {
    props: {
      heroItems,
      bannerItems,
      aboutItems,
      // project_section__items,
      // projects: LatestProject,
      // brandItems,
      services: HomePageServices,
      service_section__items,
      // bannerTwoItems,
      // teamItems,
      // team_section__items,
      // testimonialItems,
      // testimonial_section__items,
      // blog_section__items,
      // blogs: LatestBlog,
      contactItems,
      newsletterItems,
      footerItems,
    },
  };
}

export default HomePage;
