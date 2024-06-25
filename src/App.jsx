import React from 'react';

function App() {
  return (
    <div className="font-sans">
      <header className="bg-blue-500 text-white text-center p-10">
        <h1 className="text-4xl font-bold">sunnyside</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline bg-white text-blue-500 px-3 py-1 rounded">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-20">
        <h2 className="text-5xl font-bold">WE ARE CREATIVES</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        <div className="p-6 bg-yellow-500 text-white text-center">
          <h3 className="text-2xl font-bold">Transform your brand</h3>
          <p className="mt-4">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <a href="#learn-more" className="mt-4 inline-block text-white underline">Learn More</a>
        </div>
        <div className="p-6 bg-red-500 text-white text-center">
          <h3 className="text-2xl font-bold">Stand out to the right audience</h3>
          <p className="mt-4">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <a href="#learn-more" className="mt-4 inline-block text-white underline">Learn More</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        <div className="text-center">
          <img src="/path-to-graphic-design-image.jpg" alt="Graphic Design" className="mx-auto" />
          <h3 className="text-2xl font-bold mt-4">Graphic Design</h3>
          <p className="mt-2">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="text-center">
          <img src="/path-to-photography-image.jpg" alt="Photography" className="mx-auto" />
          <h3 className="text-2xl font-bold mt-4">Photography</h3>
          <p className="mt-2">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          <div className="text-center">
            <p>"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."</p>
            <p className="mt-4 font-bold">Emily R.</p>
            <p className="text-sm">Marketing Director</p>
          </div>
          <div className="text-center">
            <p>"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."</p>
            <p className="mt-4 font-bold">Thomas S.</p>
            <p className="text-sm">Chief Operating Officer</p>
          </div>
          <div className="text-center">
            <p>"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"</p>
            <p className="mt-4 font-bold">Jennie F.</p>
            <p className="text-sm">Business Owner</p>
          </div>
        </div>
      </section>

      <footer className="bg-green-500 text-white text-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/path-to-footer-image-1.jpg" alt="Footer Image 1" className="mx-auto" />
          <img src="/path-to-footer-image-2.jpg" alt="Footer Image 2" className="mx-auto" />
          <img src="/path-to-footer-image-3.jpg" alt="Footer Image 3" className="mx-auto" />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">sunnyside</h3>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
            </ul>
          </nav>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#facebook" className="hover:underline">Facebook</a>
            <a href="#instagram" className="hover:underline">Instagram</a>
            <a href="#twitter" className="hover:underline">Twitter</a>
            <a href="#pinterest" className="hover:underline">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
