import topimage from "./assets/image1.svg";
import img1 from "./assets/Frame2.svg";
import img2 from "./assets/Frame4.svg";
import img3 from "./assets/Frame6.svg";
import img5 from "./assets/Frame0.svg";
import img6 from "./assets/peris.jpg";
import img7 from "./assets/smile.svg";

import { useState } from "react";
import Confetti from "react-confetti";

const App = () => {
  const imgs = [img1, img2, img3, img5];
  const [isVisible, setIsVisible] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready ? (
        <div className="flex flex-col justify-center">
          <img src={img7} alt="topimage" />
          <p className="text-3xl text-center font-extrabold text-[#333]">
            Are you ready to Celebrate?
          </p>
          <button
            className="bg-[#ED2B5C] px-4 py-2 rounded-md mx-2 text-white font-bold text-center mt-3 text-3xl"
            onClick={() => setReady(true)}
          >
            Yes <span className="text-3xl">💪🏾</span>
          </button>
        </div>
      ) : (
        <div className="w-full">
          {isVisible && <Confetti width={window.innerWidth} />}
          <div className="text-3xl hidden sm:block">
            Pease visit with a modile phone!
          </div>
          <div className="sm:hidden w-[100dvw] h-[80vh] object-cover flex flex-col justify-center">
            <img
              src={isVisible ? img6 : topimage}
              alt="top image"
              className="object-contain w-[100%] h-[70%] rounded-lg"
            />
            <h1 className="text-center font-extrabold text-3xl text-[#333]">
              Happy Birthday!
            </h1>
            <h2 className="text-center text-wrap text-2xl px-3">
              May your day be filled with joy, laughter, and love.
            </h2>
            <button
              className="bg-[#ED2B5C] px-4 py-2 rounded-md mx-2 text-white font-bold mt-2"
              onClick={() => setIsVisible(!isVisible)}
            >
              Fire 🔥
            </button>

            <div className="flex flex-nowrap flex-grow w-full h-[40%] mt-2">
              {isVisible ? (
                <div className="text-center px-2">
                  <p>Happy Birthday, my dearest Peris!</p>

                  <p>
                    Even though we're miles apart, my heart is always with you.
                    Your smile and spirit light up my life. I wish I could be
                    there to celebrate with you, but until then, know that I
                    love you deeply. You are my everything, and I am so grateful
                    for you. Happy Birthday, my love. Can't wait to hold you
                    soon. <p>Forever yours,</p>
                    <p>Kash</p>
                  </p>
                </div>
              ) : (
                imgs.map((img) => (
                  <img key={img} src={img} className="p-0 m-0" />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
