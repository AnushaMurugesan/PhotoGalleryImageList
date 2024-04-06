import React from "react";
import { useState } from "react";
import './reactimg.css';

function Imglist() {

    const [url, setUrl] = useState("");
    const [list, setList] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [modal, setModal] = useState(false);

    const toggleModal = (item) => {
        setSelectedImage(item)
        setModal(true);
        document.body.style.overflow = 'hidden';
    }

    const toggleModalclose = () => {
        setSelectedImage("")
        setModal(false);
        document.body.style.overflow = 'auto';

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            id: list.length,
            src: url
        }

        if (url) {
            setList([...list, newImage])
            setUrl("")
        }
        else {
            alert("You should add items to display")
        }
        console.log(list)


    }
    return (
        <div className="container">
            <div className="header">
                <h3 className="head">PHOTO GALLERY </h3>
                <div className="field">
                    <form onSubmit={handleSubmit}>
                        <input className="inputbox" type="text" placeholder="Type your Image URL" value={url} onChange={e => setUrl(e.target.value)} />
                        <button className="button">+Add</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="img-container">
                {list.map((item) => (
                    <img className="image" key={item.id} src={item.src} onClick={() => toggleModal(item.src)} />))}
            </div>

            {modal && (
                <div className="overlay">
                    <div className="popup">
                        <img className="imgpop" src={selectedImage}></img>
                        <button className="close" onClick={toggleModalclose}>&times;</button>
                    </div>
                </div>
            )}

        </div>
    )



}
export default Imglist;