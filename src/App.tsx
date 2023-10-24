import { Footer, Navbar, ServiceCard } from "./components";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-transparent relative">
          <div className="absolute h-1/2 w-1/2 inset-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary" />
        </div>
        <div className="hero-content text-center text-primary-content uppercase">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">Welcome to Eshway</h1>
            <p className="mb-5 text-3xl text-blue-400 font-semibold">
              Transforming your digital landscape for a better tomorrow.
            </p>
            <button className="btn btn-primary">Let's connect</button>
          </div>
        </div>
      </div>

      {/* About us section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse relative">
          <div className="bg-gradient-primary absolute right-0 h-1/2 w-1/4" />
          <img
            className="ml-10 max-w-sm"
            src="/about-us.svg"
            alt="person working on computer screen"
          />
          <div>
            <div className="flex items-center px-4 py-4">
              <div>
                <h1 className="text-5xl font-bold">About Us</h1>
                <p className="py-6 text-2xl font-medium">
                  <b>Eshway </b>is a digital agency specializing in website
                  development, mobile application development, SEO, and other
                  digital marketing services. With a team of skilled developers,
                  designers, and marketers, the company offers end-to-end
                  services, from ideation and strategy development to
                  implementation and ongoing maintenance. The startup strives to
                  stay up-to-date with the latest trends and technologies in the
                  digital space, enabling its clients to stay ahead of the
                  competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex flex-col">
          <h2 className="mt-8 mx-auto uppercase text-4xl font-bold border-b-2 border-b-primary">
            Services we offer
          </h2>
          <div className="mt-4 py-4 flex gap-4 justify-evenly">
            <ServiceCard
              imgSrc="/web-dev.svg"
              imgAlt="Web Dev"
              title="Web Development"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, repudiandae!"
            />
            <ServiceCard
              imgSrc="/app-dev.svg"
              imgAlt="App Dev"
              title="App Development"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, repudiandae!"
            />
            <ServiceCard
              imgSrc="/seo.svg"
              imgAlt="SEO"
              title="Search Engine Optimization"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, repudiandae!"
            />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
}

export default App;
