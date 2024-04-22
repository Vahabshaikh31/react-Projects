import React, { useState } from 'react';

function App() {

    const [hasRendered, setHasRendered] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentName, setCurrentName] = useState('vahab');

    const images = {
        img1: "https://platinumlist.net/guide/wp-content/uploads/2023/03/8359_img_worlds_of_adventure-big1613913137.jpg-1024x683.webp",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6oX1krF68VAjkurlwYh5Wb5MasnEspXPQZw_zclIbQ&s"
    };

    const handleClick = () => {
        if (!hasRendered) {
            setCurrentImage(images.img1);
            setHasRendered(true);
            setCurrentName('Ayan')
        } else {
            setCurrentImage(images.img2);
            setHasRendered(false)
            setCurrentName('Vahab')
        }
    };

    return (
        <>
            <div contentEditable="true">
                my name is {currentName}
            </div>

            <button onClick={handleClick}>click</button>
            <a href="https://hoppingfeet.com/img-worlds-of-adventure-theme-park-review/" target='_vahab'>
                <img src={currentImage} alt="" />
            </a>
        </>
    );
}

export default App;


