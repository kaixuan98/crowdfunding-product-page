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
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
          <div>
            <button>Back this project</button>
            <button>Bookmark</button>
          </div>
        </section>

        <section>
          <article>
            <p className='text-4xl'>$89,914</p>
            <p>of $100,000 backed</p>
          </article>
          <article>
            <p className='text-4xl'>5,007</p>
            <p>total backers</p>
          </article>
          <article>
            <p className='text-4xl'>56</p>
            <p>days left</p>
          </article>
        </section>

        <section>
          <h2>About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <br></br>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>

          <section>

            <article>
              <h3>Bamboo Stand</h3>
              <p>Pledge $25 or more</p>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                you&#39;ll be added to a special Backer member list.
              </p>
              <div>
                <p className="text-4xl">101</p>
                <p>left</p>
              </div>
              <button>Select Reward</button>
            </article>

            <article>
              <h3>Black Edition Stand </h3>
              <p>Pledge $75 or more</p>
              <p>
                You get a Black Special Edition computer stand and a personal thank you. You&#39;ll be added to our Backer 
                member list. Shipping is included.
              </p>
              <div>
                <p className="text-4xl">64</p>
                <p>left</p>
              </div>
              <button>Select Reward</button>
            </article>

            <article>
              <h3>Mahogany Special Edition</h3>
              <p>Pledge $200 or more</p>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You&#39;ll be added 
                to our Backer member list. Shipping is included.
              </p>
              <div>
                <p className="text-4xl">0</p>
                <p>left</p>
              </div>
              <button>Out of Stock</button>
            </article>

          </section>

        </section>
      </main>

    </div>
  );
}

export default App;
