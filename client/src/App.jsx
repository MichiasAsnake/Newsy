import React from "react";
import Header from "./Search";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import Trending from "./Trending";

function App() {
  const [data, setData] = React.useState([]);
  const [places, setPlaces] = React.useState([]);
  const [trendP, setTrendP] = React.useState([]);
  const [trending, setTrending] = React.useState([]);
  const [latlng, setLatlng] = React.useState([]);
  const [hover, setHover] = React.useState(null);
  console.log(latlng);
  console.log(trendP);
  // Article API Call
  async function SearchData(search) {
    /* swap if other is over called :9a62fbde766c4914b445f01bab56f322 */

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&pageSize=20&apiKey=9a62fbde766c4914b445f01bab56f322`
    );

    const json = await response.json();
    setData(json.articles);
  }
  React.useEffect(() => {
    if (data.length > 0) {
      sendDataToServer();
    }
  }, [data]);
  // Trending Button Click
  async function trendingData(countries) {
    /* swap if other is over called :9a62fbde766c4914b445f01bab56f322 */

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${countries}&pageSize=20&apiKey=9a62fbde766c4914b445f01bab56f322`
    );

    const json = await response.json();
    setTrending(json.articles);
  }
  React.useEffect(() => {
    if (trending.length > 0) {
      sendTrendToServer();
    }
  }, [trending]);

  // Send data to Node
  function sendDataToServer() {
    setPlaces([]);

    fetch("http://localhost:5411/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response !== null) {
          setPlaces(response);
        }
      })
      .catch((error) => console.error(error));
  }

  function sendTrendToServer() {
    setTrendP([]);

    fetch("http://localhost:5411/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trending),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response !== null) {
          setTrendP(response);
        }
      })
      .catch((error) => console.error(error));
  }

  //Get lat lng from geocode
  React.useEffect(() => {
    if (places.length > 0) {
      Geocode.setApiKey("AIzaSyC-4wYw4_X7q0njT7oyFdBFp2Qx7DCPL7w");
      const filteredPlaces = places.filter((p) => p[0]);

      const latlng = filteredPlaces.map((p) => {
        return Geocode.fromAddress(p[0]).then((response) => {
          if (response.status === "ZERO_RESULTS") {
            console.log("no results");
          } else {
            const { lat, lng } = response.results[0].geometry.location;
            return {
              lat,
              lng,
              content: p[1],
              image: p[2],
              desc: p[3],
              auth: p[4],
              title: p[5],
              pub: p[6],
            };
          }
        });
      });
      if (latlng) {
        Promise.all(latlng).then(setLatlng);
      } else {
        console.log("does not work");
      }
    }
  }, [places]);
  //latlng from Trending buttons
  React.useEffect(() => {
    if (trendP.length > 0) {
      Geocode.setApiKey("AIzaSyC-4wYw4_X7q0njT7oyFdBFp2Qx7DCPL7w");
      const filteredTrending = trendP.filter((p) => p[0]);

      const latlng = filteredTrending.map((p) => {
        return Geocode.fromAddress(p[0]).then((response) => {
          console.log("Geocode Response:", response);
          if (response.status === "ZERO_RESULTS") {
            console.log("no results");
          } else {
            const { lat, lng } = response.results[0].geometry.location;
            return {
              lat,
              lng,
              content: p[1],
              image: p[2],
              desc: p[3],
              auth: p[4],
              title: p[5],
              pub: p[6],
              url: p[7],
            };
          }
        });
      });
      if (latlng) {
        Promise.all(latlng).then(setLatlng);
      } else {
        console.log("does not work");
      }
    }
  }, [trendP]);

  // Google Map

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-4wYw4_X7q0njT7oyFdBFp2Qx7DCPL7w",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  //converts timestamp to date posted
  function converter(x) {
    var d = new Date(x);
    var now = new Date();
    var difference = now - d;
    var daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (daysAgo <= 1) {
      return "today";
    } else {
      return daysAgo + " days ago";
    }
  }

  //Markers and infowindow
  function markers() {
    if (latlng.length > 0) {
      return latlng.map((latlng, index) => (
        <div key={index}>
          <Marker
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 4,
              strokeColor: "blue",
              strokeWeight: 7,
            }}
            position={{ lat: latlng.lat, lng: latlng.lng }}
            onMouseOver={(e) => setHover(index)}
            onMouseOut={(e) => setHover(null)}
          />

          {hover === index && (
            <InfoWindow
              position={{ lat: latlng.lat, lng: latlng.lng }}
              disableAutoPan="true"
            >
              <div className="Info">
                <h3>{latlng.title}</h3>
                <img src={latlng.image} style={{ width: "250px" }} />
                <small style={{ color: "grey" }}>
                  {converter(latlng.pub)} • {latlng.auth}
                </small>
              </div>
            </InfoWindow>
          )}
        </div>
      ));
    }
  }

  function articles() {
    if (latlng.length > 0) {
      return latlng.map((latlng) => (
        <Trending
          title={latlng.title}
          header={latlng.desc}
          author={latlng.auth}
          image={latlng.image}
          url={latlng.url}
        />
      ));
    }
  }

  return (
    <div>
      <Header SearchData={SearchData} TrendData={trendingData} />

      <div style={{ display: "flex" }}>
        <GoogleMap
          zoom={3}
          center={{ lat: 30.0902, lng: 10.7129 }}
          gestureHandling="none"
          mapContainerClassName="map-container"
        >
          {latlng.length > 0 ? markers() : null}
        </GoogleMap>

        <div className="articleContainer">
          {latlng.length > 0 ? (
            articles()
          ) : (
            <h1
              style={{
                padding: "25px",
                width: "25vw",
                textAlign: "center",
                marginTop: "100px",
                marginLeft: "45px",
              }}
            >
              Search to start!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
