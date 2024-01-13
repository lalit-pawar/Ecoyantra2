import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

export default class Locator extends React.Component {
  constructor(props) {
    super();
    this.state = {

     
      latitude: 18.55831111949198,
      longitude: 73.82546801156653,
      centers: [],
      selectedcenterId: null,
      searchText: " ",
      distance: 50,
    };
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          centers: centerData,
        });
      },
      (error) => {
        console.log("error getting Location : " + error.message);
      }
    );
  };

  header = () => {

     const getDistance = (lat1 ,lon1, lat2, lon2)=>{
             
         const deg2rad= (deg) =>{ return deg * (Math.PI /180)} 
            var R = 6371 ;
            var dLat = deg2rad(lat2-lat1);
            var dLon = deg2rad(lon2-lon1);

            var a = 
               
            Math.sin(dLat /2) * Math.sin(dLat /2) + 
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) *  Math.sin(dLon/2)
            ;

            var c =2 *Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R *c ;

            return d;
                 
     } 

    const handleSearch = () => {
      let filtercenters = centerData.filter((c) =>
        c.name.toLowerCase().includes(this.state.searchText.toLowerCase())
         && 
         (

          getDistance(this.state.latitude,this.state.longitude, c.latitude, c.longitude) < this.state.distance
         )
      
        )

      this.setState({
        centers: filtercenters,
      });
    };

     // TO set all things to reset 

     
     const reserAll = () =>{

      this.setState({

            centers: centerData,
            distance : 50,
            searchText : " ",
      })
}



    return (
      <div style={{ marginBottom: 30 }}>
        <TextField
          label="search for a facility center "
           value = {this.state.searchText} 
          variant="outlined"
          style={{ width: "60%", marginTop: 30, marginBottom: 30 }}
          onChange={(event) => {
            this.setState({ searchText: event.target.value });
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: " row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            style={{ textAlign: "center", marginLeft: 30 }}
          >
            Distance
          </Typography>
          <Slider  style={{width : "75%",marginRight: 40 }}
            aria-label="Temperature"
            value={this.state.distance}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={0}
            max={60}
            onChange={(event, value)=>{

                   this.setState({distance: value});
            }}
          />
        </div>

        <div>
          <Button variant="outlined"
              onClick={reserAll} 
          style={{ width: "50%", backgroundColor: "cyan", color: "white" }}>
            <RestartAltIcon />
            Reset
          </Button>

          <Button 
            variant="outlined"
            onClick={handleSearch}
            style={{ width: "50%", backgroundColor: "cyan", color: "white" }}
          >
            <SearchIcon />
            Search
          </Button>
        </div>
      </div>
    );
  };

  map = () => {
    return (
      <div style={{ height: "80vh", width: "90vw", alignItems: "center" }}>
        <GoogleMapReact
          onClick={() => {
            this.setState({ selectedcenterId: null });
          }}
          bootstrapURLKeys={{ key: "AIzaSyAkfq6C1DNRLN11CXi77I2raz45OJ8m7zI" }}
          defaultCenter={{
            lat: 10.99835602,
            lng: 77.01502627,
          }}
          defaultZoom={14}
          centerlocation={{ 
            lat: this.state.latitude,
            lng: this.state.longitude,
          }}
        >
          {this.state.centers.map((center) => {
            return (
              <LocationOnIcon
                color={"secondary"}
                lat={center.latitude}
                lng={center.longitude}
                onClick={() => {
                  this.setState({ selectedcenterId: center.id });
                }}
              />
            );
          })}

          {this.state.centers.map((center) => {
            if (this.state.selectedcenterId === center.id) {
              return (
                <div
                  lat={center.latitude}
                  lng={center.longitude}
                  style={{ backgroundColor: "white", width: 80 }}
                >
                  <Typography>{center.name}</Typography>
                </div>
              );
            } else {
              return null;
            }
          })}
          <LocationSearchingIcon
            color={"red"}
            lat={this.state.latitude}
            lng={this.state.longitude}
          />
        </GoogleMapReact>
      </div>
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: "beige" }}>
        {this.header()}
        {this.map()}
      </div>
    );
  }
}

let centerData = [

  , 
  {
    id: 1,
    name: " Hitech Recycling,pune",
    latitude: 18.51155846059057,
    longitude: 73.8089524698671,
  },

  

  {
    id: 2,
    name: "E waste in pune , national trador, ",
    latitude: 18.528247087811128,
    longitude: 73.86228856276124,
  },

,
  {
    id: 3,
    name: " Green It Recycling center ",
    latitude:   18.513259830415315,
    longitude:  73.84862383333643,
  },

 
  { 
    id: 4,
    name: "Kuldeep E waste disposal",
    latitude:    18.454182009679798  ,
    longitude:   73.8568493645063 , 
    
  },

  {
    id: 5,
    name: "SWaCH E-Waste Collection Center,pune",
    latitude: 18.468698936380147,
    longitude: 73.85509171417064,
  },
    
  {
    id: 6,
    name: "Techeco Ewaste Namo , Dindori",
    latitude: 20.019687673355918,
    longitude: 73.79503330545161,
  },


];
