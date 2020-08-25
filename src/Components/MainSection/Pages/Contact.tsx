import React from "react";
import GoogleMapReact from "google-map-react";
import "./Contact.scss";

const Contact = () => {
  const contactInformation = [
    { name: "Name", content: "Jake Antony Starkey", url: "" },
    { name: "Number", content: "+447872567026", url: "" },
    { name: "Email", content: "jakestarkey@gmail.com", url: process.env.REACT_APP_EMAIL },
    { name: "Github", content: "Datstarkey", url: process.env.REACT_APP_GITHUB },
    { name: "Facebook", content: "JakeStarkey", url: process.env.REACT_APP_FACEBOOK },
  ];

  const center = { lat: 53.198434, lng: -2.894267 };
  const zoom = 11;

  return (
    <div className="contact-content">
      <h1>Contact</h1>
      <table>
        <tbody>
          {contactInformation.map((element, index) => (
            <tr key={index}>
              <td className="right-alight">{element.name} :</td>
              <td>
                {element.url !== "" ? (
                  <a href={element.url} target="_blank" rel="noopener noreferrer">
                    {element.content}
                  </a>
                ) : (
                  <span>{element.content}</span>
                )}
              </td>
            </tr>
          ))}

          <tr>
            <td className="right-alight">Location :</td>
            <td>
              <div className="map">
                <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY! }} defaultCenter={center} defaultZoom={zoom} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
