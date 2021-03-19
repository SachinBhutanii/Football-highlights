// import { useEffect, useState } from "react";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "./Highlights.css";
// import NavBarr from "./NavBarr";

// const Highlights = () => {
//   const [filteredArray, setFilterdArray] = useState([]);
//   const [soccerVideos, setSoccerVideos] = useState([]);
//   const [startDate, setStartDate] = useState(new Date());

//   const [selectedValue, setSelectedValue] = useState("La Liga");
//   const [dropselected, setDropSelected] = useState([]);

//   var array_dropdown = [];
//   var unquie_dropdown_array = [];

//   const [demostate, setDemo] = useState("");
//   var date4 = new Date();
//   var date5 = date4.toJSON();

//   const [startDate2, setStartDate2] = useState(date5);

//   useEffect(() => {
//     getFilteredVideos();
//   }, [startDate]);

//   useEffect(() => {
//     fetch("https://www.scorebat.com/video-api/v1/")
//       .then(response => response.json())
//       .then(data => setSoccerVideos(data));
//   }, []);

//   const HandleDate = date => {
//     let date2 = date.toJSON();
//     setStartDate(date);
//     setStartDate2(date2);
//     setDemo(date);
//   };

//   const getFilteredVideos = () => {
//     var x = startDate.toJSON();
//     var result = soccerVideos.filter(
//       video => video.date.slice(0, 10) === x.slice(0, 10)
//     );
//     setFilterdArray(result);
//   };

//   //unquie_dropdown_array = new Set(array_dropdown);
//   const push_to_array = video => {
//     array_dropdown.push(video.competition.name.split(":")[1]);
//     unquie_dropdown_array = new Set(array_dropdown);
//   };

//   //from drop down
//   useEffect(() => {
//     //filter
//     var result2 = soccerVideos.filter(
//       video => video.competition.name.split(":")[1] === selectedValue
//     );

//     setDropSelected(result2, console.log("Selected value", dropselected));
//   }, [selectedValue]);

//   const handleDropdown = e => {
//     setSelectedValue(e.target.value, console.log(selectedValue));
//   };

//   return (
//     <div className="game-card">
//       <NavBarr />
//       <div className="top-content">
//         <ul>
//           <li>
//             {" "}
//             <div className="drop-div">
//               <label for="matches">Choose a league:</label>
//               <div className="select-container">
//                 <select className="matches" onChange={e => handleDropdown(e)}>
//                   {soccerVideos.map(video => (
//                     <option value={video.competition.name.split(":")[1]}>
//                       {video.competition.name.split(":")[1]}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </li>

//           <li>
//             <div className="calander-div">
//               <h4 className="date-d">Date</h4>
//               <DatePicker
//                 className="calander-picker"
//                 selected={startDate}
//                 maxDate={new Date()}
//                 onChange={date => HandleDate(date)}
//               />
//             </div>
//           </li>
//         </ul>
//       </div>

//       <h1 className="watch">Watch Highlights</h1>

//       <div className="row">
//         {filteredArray.length > 0 ? (
//           filteredArray.map(video => (
//             <div className="p-4 col-md-3">
//               <Card style={{ width: "24rem" }}>
//                 <Card.Body>
//                   <Card.Title>{video.title}</Card.Title>
//                   <Card.Img variant="top" src={video.thumbnail} />
//                   <Card.Title>{video.competition.name}</Card.Title>
//                   <Card.Title>{video.date.slice(0, 10)}</Card.Title>
//                   <a href={video.url} target="_blank">
//                     <Button variant="info">Watch Highlights</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))
//         ) : !demostate ? (
//           soccerVideos.map(video => (
//             <div className="p-4 col-md-3">
//               <Card style={{ width: "24rem" }}>
//                 {/* {console.log(video.competition.name.split(":")[1])} */}
//                 {/* {setDropDownArray([...dropdownarray, video.competition.name])} */}
//                 {/*spliting the name and that putting in an array and then making a set of it to get only unique values*/}
//                 {/* {array_dropdown.push(video.competition.name.split(":")[1])} */}
//                 {/* {console.log("Dropdow state is ", array_dropdown)} */}
//                 {/* {(unquie_dropdown_array = new Set(array_dropdown))} */}

//                 {push_to_array(video)}
//                 {/* {console.log("soccervideo", unquie_dropdown_array)} */}
//                 <Card.Body>
//                   <Card.Title>{video.title}</Card.Title>
//                   <Card.Img variant="top" src={video.thumbnail} />
//                   <Card.Title>{video.competition.name}</Card.Title>
//                   <Card.Title>{video.date.slice(0, 10)}</Card.Title>
//                   <a href={video.url} target="_blank">
//                     <Button variant="info">Watch Highlights</Button>
//                   </a>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))
//         ) : (
//           <div className="nf">
//             <h1 className="nf">Not Found</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Highlights;
