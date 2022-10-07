import React, { useState, useEffect } from "react";
import axios from "axios";

const Upload = ({ setUpload }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [data, setData] = useState([]);
  const [allmydata, settheData] = useState([]);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleMessageChange = (event) => {
    setData(event.target.value);
  };

  let mydata;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      let arr = [];
      fetch(filename, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          arr = data;

          let arrofindex = [];
          const list = document.getElementById("list"); // get the list element
          list.innerHTML = ""; // clear the list
          list.appendChild(createDom(data));
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const createDom = (data) => {
    const ul = document.createElement("ul");
    for (const key in data) {
      const li = document.createElement("li");
      li.innerHTML = key;
      if (typeof data[key] === "object") {
        li.appendChild(createDom(data[key]));
      } else {
        li.innerHTML += `: ${data[key]}`; // append value to key if not an object (leaf node)
      }
      ul.appendChild(li);
      li.style.color = typeof data[key] === "string" ? "white" : "white"; // change color if leaf node (string) or not (object)
      li.style.fontWeight =
        typeof data[key] === "string" ? "extrabold" : "bold";
      li.style.listStyleType = typeof data[key] === "string" ? "none" : "disc";
      li.style.marginLeft = typeof data[key] === "string" ? "0px" : "20px";
      li.style.marginBottom = typeof data[key] === "string" ? "0px" : "10px";
      li.style.fontSize = typeof data[key] === "string" ? "20px" : "16px";
      li.style.fontFamily =
        typeof data[key] === "string" ? "monospace" : "sans-serif";
      li.style.textAlign = typeof data[key] === "string" ? "left" : "center";
      li.style.padding = typeof data[key] === "string" ? "0px" : "5px";
      li.style.borderRadius = typeof data[key] === "string" ? "0px" : "10px";
      li.style.backgroundColor =
        typeof data[key] === "string" ? "transparent" : "";
      li.style.border =
        typeof data[key] === "string" ? "none" : "2px solid #e5e5e5";
    }
    return ul;
  };

  var thisIsMyCopy = mydata;

  return (
    <>
      <form onSubmit={onSubmit}>
        <section className="text-gray-600 body-font">
          <div className="max-w-5xl pt-36 pb-6 mx-auto">
            <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
              <span className="text-red-700">JSON</span> Map
            </h1>
          </div>
          <div
            className="container p-5  mx-auto flex justify-center items-center cursor-pointer"
            onClick={() => {
              setUpload(true);
            }}
          >
            <h1 className="text-14 text-center font-bold text-white mb-6 ">
              upload json file
            </h1>
          </div>
          <div className="flex  w-1/2 mx-auto mb-20 flex-wrap">
            <label
              forhtml="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-12 h-12 mb-3 text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-200 dark:text-gray-400">
                  <span className="font-semibold">Select a file</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  JSON file only size 10MB
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={onChange}
              />
              {filename}
            </label>
            <div className="flex justify-end gap-4 items-end mt-3 w-full">
              <input
                type="submit"
                value="Map"
                className="bg-red-700 rounded px-10 py-4 font-bold text-white cursor-pointer "
              />
            </div>
          </div>
        </section>
      </form>
      <div className="text-white mt-8" id="mydiv    ">
        <ul id="list"></ul>
      </div>
    </>
  );
};

export default Upload;
