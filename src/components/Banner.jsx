import { Carousel } from "react-carousel-minimal";

function Banner() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/9833516/pexels-photo-9833516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Hong Kong",
    },
    {
      image:
        "https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=2048x2048&w=is&k=20&c=UKlDTfUWKbNvIDPALg6MLxCCWepvM1q98T7f3DJuf1o=",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Kenya",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "Uganda",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            data={data}
            time={4000}
            width="1500px"
            height="400px"
            captionStyle={captionStyle}
            // radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "0px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
