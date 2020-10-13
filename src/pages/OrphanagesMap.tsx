import React from "react";
import mapMarkerImg from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <h2>Muitas crianças estão esperando a sua visita :)</h2>
        </header>

        <footer>
          <strong>Quixeramobim</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map
        center={[-5.180384, -39.2866842]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
