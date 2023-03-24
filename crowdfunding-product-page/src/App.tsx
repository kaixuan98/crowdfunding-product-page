import React from 'react';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

      <header>
        <img src={require('./assets/image-hero-desktop.jpg')} alt="Monitor Riser"></img>
        <Navbar/>
      </header>

      <main>
        <section>
          <header>Mastercraft Bamboo Monitor Riser</header>
          <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

          <button>Back this project</button>
          <button>Bookmark</button>
        </section>

        <section>
          <p>$89,914 of $100,000 backed</p>
          <p>5,007 total backers</p>
          <p>56 days left</p>
        </section>

        <section>
          <header>About this project</header>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <section>

            <article>
              <header>Bamboo Stand</header>
              <p>Pledge $25 or more</p>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you&#39;ll be added to a special Backer member list.
              </p>
              <p>101 left</p>
              <button>Select Reward</button>
            </article>

            <article>
              <header>Black Edition Stand </header>
              <p>Pledge $75 or more</p>
              <p>
                You get a Black Special Edition computer stand and a personal thank you. You&#39;ll be added to our Backer 
                member list. Shipping is included.
              </p>
              <p>64 left</p>
              <button>Select Reward</button>
            </article>

            <article>
              <header>Mahogany Special Edition</header>
              <p>Pledge $200 or more</p>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You&#39;ll be added 
                to our Backer member list. Shipping is included.
              </p>
              <p>0 left</p>
              <button>Out of Stock</button>
            </article>

          </section>

        </section>
      </main>

    </div>
  );
}

export default App;
