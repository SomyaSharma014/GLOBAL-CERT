import picture0 from "../../assets/image/portfolio/pic.PNG";
import picture1 from "../../assets/image/portfolio/4-9.jpg";
import picture2 from "../../assets/image/portfolio/6-7.jpg";
import picture3 from "../../assets/image/portfolio/8-10.jpg";
import picture4 from "../../assets/image/portfolio/12-14.jpg";
import picture5 from "../../assets/image/portfolio/3-15.jpg";
import picture6 from "../../assets/image/portfolio/run2-pc1.png";
import picture7 from "../../assets/image/portfolio/run2-pc2.png";
import picture8 from "../../assets/image/portfolio/run2-pc3.png";
import picture9 from "../../assets/image/portfolio/run2-pc4.png";
import picture10 from "../../assets/image/portfolio/run2-pc5.png";
import picture11 from "../../assets/image/portfolio/run2-pc6.png";
export const Modal1 = ({ visible, onClose }) => {
    
    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }
    
    if (!visible) {
        return null;
    }
    else {
        // const st={zIndex:100}
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 1</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture0} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Threads</h4>
                    <h4><span className="font-bold">Category</span>: Illustration</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}

export const Modal2 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 2</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture1} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Explore</h4>
                    <h4><span className="font-bold">Category</span>: Graphic Design</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal3 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 3</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture2} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Threads</h4>
                    <h4><span className="font-bold">Category</span>: Illustration</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal4 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 4</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture3} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Lines</h4>
                    <h4><span className="font-bold">Category</span>: Branding</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal5 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 5</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture4} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Southwest</h4>
                    <h4><span className="font-bold">Category</span>: Web Design</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal6 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture5} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal7 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture6} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal8 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture7} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal9 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture8} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal10 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture9} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal11 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture10} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}
export const Modal12 = ({ visible, onClose }) => {

    const handleClose = (e) => {
        if (e.target.id === "modal-content") {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }
    else {
        return (

            <div onClick={handleClose} id="modal-content" style={{zIndex:100}}  className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-30 flex flex-col justify-center items-center">
                <div className="bg-white  text-center modal-container flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl mb-2">Project Name 6</h1>
                    <p className="text-sm italic text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur</p>
                    <img src={picture11} alt="pic" className="modal-pic rounded-lg" />
                    <p className="w-1/2 block m-auto">Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                        maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <h4 className="pt-4"><span className="font-bold">Client</span>: Window</h4>
                    <h4><span className="font-bold">Category</span>: Photography</h4>
                    <button onClick={onClose} className="text-white bg-green-300 px-6 py-4 rounded-lg my-4 hover:bg-green-500">X Close Project</button>
                </div>
            </div>

        )
    }
}