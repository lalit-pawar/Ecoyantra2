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
    name: "E-Incarnation Recycling Pvt. Ltd. palghar",
    latitude: 19.1250724944008,
    longitude: 72.9096132085988 ,
  },

 

  {
    id: 7,
    name: "Evergreen Recyclekaro india pvt ltd. palghar",
    latitude: 19.653550173259728,
    longitude: 73.12325658069521 ,
  },



   { id: 8,
    name: "Justdispose Recycling Pvt Ltd palghar",
    latitude: 19.406482207408306,
    longitude: 72.88188645357032
  
  },

// 20.09369246897587, 

  {
    id: 9,
    name: "Techeco E-Waste Namo, Village Dhakambe, Tal. Dindori, Dist.Nashik",
    latitude: 20.09369246897587,
    longitude: 73.81031187292388 ,
  },


   {
    id: 10,
    name: "WE-The Recycling Company, Village Borpada, Tal. Bhiwandi, Dist. Thane",
    latitude: 19.352245417931158,
    longitude: 73.06526542373938
  
  },



  {
    id: 11,
    name: "Eco Friend Industries. Navi Mumbai",
    latitude: 19.092372529739116,
    longitude:  73.02671799154847
    ,
  },


  /********     Govermennt unauthorized */

  {
    id: 12,
    name: "E-waste management. Mumbai",
    latitude: 18.968355203853037,
    longitude: 72.83821117559975
    ,
  }, 

  {
    id: 13,
    name: "Right Ewaste Recycle Private Limited, Kalyan",
    latitude:  19.376215876226503,
    longitude:  73.14539097295768
    ,
  },

  {
    id: 14,
    name: "Eco Friend Industries. Navi Mumbai ",
    latitude: 19.092372529739116,
    longitude:  73.02671799154847
    ,
  },

  {
    id: 15,
    name: "Shri Krishna Colony, Chilkalthana, Aurangabad, Maharashtra",
    latitude: 19.871533878422174,
    longitude:  75.41207810419377
    ,
  },

  {
    id: 16,
    name: "Green e-Bin E-waste Recycling , Aurangabad",
    latitude:19.897785017981818,
    longitude:  75.38435975238197
    ,
  },


 // 

  {
    id: 17,
    name: " PERFECT E- WASTE RECYCLERS,  Chilkalthana, Aurangabad, Maharashtra 431006",
    latitude: 19.879133137589083,
    longitude:  75.38242568610764
    ,
  },

 /******** Gujrat  */


  {
    id: 18,
    name: "REART RECYCLING PRIVATE LIMITED, Khambha, Gujarat 360311",
    latitude:   22.237624354853526,
    longitude:  70.72903945105293
    ,
  },

  
  
  {
    id: 19,
    name: "Ezzy recycling center, Ranchhod Nagar, Rajkot, Gujarat 360003",
    latitude:  22.54236677958548,
    longitude:  70.80825801551518
    ,
  },

// 

  {
    id: 20,
    name: "REART RECYCLING PRIVATE LIMITED, Khambha, Gujarat 360311",
    latitude:   22.237624354853526,
    longitude:  70.72903945105293
    ,
  },


// , 

  {
    id: 21,
    name: "ECS e Waste Recycle Plant,Virpur Rd, Vautha, Gujarat 387810",
    latitude:   22.83631308598462,
    longitude:  72.5331115346694
    ,
  },

//, 

  {
    id: 22,
    name: "E-frontline Recycling, Panoli, Ankleshwar, Gujarat 394116",
    latitude:   21.647809745983047,
    longitude: 72.9933438483561
    ,
  },



  // , 

  {
    id: 23,
    name: "Electro Alloys Recycling & Transformation HUB,Palej, Dist Bharuch, Palej, Gujarat",
    latitude:   22.095183490910866,
    longitude:  73.07144162710742
    ,
  },


  /********    Karnataka */

  //, 
  {
    id: 24,
    name: "Ewaste Hub, Oppo Hombegowda Ground, Wilson Garden, Bengaluru, Karnataka 560027",
    latitude:  12.97101985211428,
    longitude: 77.59818037891952
    ,
  },



  //, 
  {
    id: 25,
    name: "Rashi E-Waste, Arehalli Guddadahalli, Karnataka 561205",
    latitude:  13.31554283511214,
    longitude:  77.56428600739014
    ,
  },

//, 
  {
    id: 26,
    name: "Best E-waste Recyclers  VasanthNarsapura,, Kora, Karnataka 572128",
    latitude: 13.5734108411017,
    longitude: 77.02875136305867
    ,
  },

//

  {
    id: 27,
    name: "E-FRIENDLY WASTE RECYCLERS,  Nayanda Halli, Bengaluru, Karnataka 560039",
    latitude:  12.952225447398593,
    longitude: 77.52511063982568
  },


  /****  Delhi */
// ,
  {
    id: 28,
    name: "Global E Waste Collection Point, E Waste Recycler, Naharpur Village Rd, Sector 7, Rohini, Delhi 110085",
    latitude:  28.72310910217763,
    longitude:   77.11339691111071
    ,
  },

//

  {
    id: 29,
    name: "E-waste recycling company, Pushp Vihar, New Delhi, Delhi 110017",
    latitude: 28.53637319679635,
    longitude:  77.21991518878059
    ,
  },

  // , 

  {
    id: 30,
    name: "E-Waste Recyclers India,Pocket C, Okhla Phase I, Okhla, New Delhi 110020",
    latitude:  28.543117214069614,
    longitude:  77.28108694831542
    ,
  },


];
