export default function JsonTree() {
  return (
    <div>
      <NextSeo
        title="Home: Json Map"
        description="Json Map is a free online tool to visualize and explore JSON data."
        canonical="https://jsonmap.com/"
        openGraph={{
          url: "https://jsonmap.com/",
        }}
      />
    </div>
  );
}


{
  "id":1,
  "te" : "first test",
  "json" :[
  {
    "id": 1,
    "name": "hafid",
    "student": ["kaaml", "hamza", "hala"],
      "others" : [
        { "class": "cde", "classId": 1 }
      ],
    "address": { "streetName": "cde", "streetId": 1 }
  },
  {
    "id": 2,
    "name": "hafid2",
    "student": ["kaaml2", "hamza2", "hala2", { "class": "cde2", "classId": 2 }],
    "address": { "streetName": "cde2", "streetId": 2 }
  }
]}
