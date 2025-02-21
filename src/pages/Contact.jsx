import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-10 shadow-lg rounded-lg">
        {/* Contact Details */}
        <div>
          <h3 className="italic text-lg text-gray-600">Si vous souhaitez discutez</h3>
          <h2 className="text-2xl font-bold mb-4">NOS COORDONNÉES</h2>
          <p className="text-gray-700 mb-4">
          Si vous avez des questions ou souhaitez réserver, n'hésitez pas à nous contacter via les coordonnées ci-dessous ou à remplir le formulaire sur la droite.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-3 text-gray-800">
              <FaMapMarkerAlt className="text-blue-500" /> Nuansa Timur OO/24, South Kuta-Bali
            </p>
            <p className="flex items-center gap-3 text-gray-800">
              <FaPhoneAlt className="text-blue-500" /> <a href="tel:+6285239644065" className="text-blue-600 hover:underline">+6285239644065</a>
            </p>
            <p className="flex items-center gap-3 text-gray-800">
              <FaEnvelope className="text-blue-500" /> <a href="mailto:floresactivetours@gmail.com" className="text-blue-600 hover:underline">floresactivetours@gmail.com</a>
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded text-white"><FaFacebook /></a>
            <a href="#" className="bg-blue-500 p-2 rounded text-white"><FaTwitter /></a>
            <a href="#" className="bg-red-500 p-2 rounded text-white"><FaPinterest /></a>
            <a href="#" className="bg-blue-700 p-2 rounded text-white"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="italic text-lg text-gray-600"> Vous avez une question ?</h3>
          <h2 className="text-2xl font-bold mb-4">PAR ICI</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full p-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
            <button className="bg-blue-500 text-white px-6 py-3 rounded flex items-center gap-2">
              <span>&#9993;</span> SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
