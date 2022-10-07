import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useRef, useState } from "react";
import { json } from "@codemirror/lang-json";

export default function UserMain({ setUpload }) {
  const [jsoninput, setJsoninput] = useState("");
  const [error, setError] = useState("");
  const ref = useRef(null);

  const onChange = useCallback((value, viewUpdate) => {
    try {
      JSON.parse(value);
      setJsoninput(value);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  }, []);

  const chechObjectvalue = (checkedobj) => {
    if (checkedobj instanceof Object) {
      if (checkedobj instanceof Array) {
        return checkedobj.map((item, value) => {
          return value;
          // console.log(item[key], item[value]);
        });
      } else {
        return Object.keys(checkedobj).map((key) => {
          // console.log(key, checkedobj[key]);
        });
      }
    } else {
      return checkedobj;
    }
  };

  const chechObjectkey = (checkedkey) => {
    if (typeof checkedkey === "string") {
      return checkedkey;
    } else {
      return null;
    }
  };

  // end of fucntion

  const getValues = (obj) => {
    console.log(obj);
    let values = Object.values(obj);
    let keys = Object.keys(obj);
    chechObjectvalue(obj);

    const ul = document.createElement("ul");
    for (let i = 0; i < keys.length; i++) {
      const li = document.createElement("li");
      ul.style.display = "flex";
      ul.style.flexWrap = "wrap";
      if (typeof values[i] === "object") {
        if (parseInt(values[i]) === values[i]) {
          li.innerHTML += ``;
          li.appendChild(getValues(values[i]));
        } else {
          li.innerHTML += `${keys[i]}:`;
          li.appendChild(getValues(values[i]));
        }
      }
      if (typeof values[i] !== "object") {
        li.innerHTML += `${keys[i]}: ${values[i]}`;
      }
      ul.appendChild(li);
      li.style.color = typeof values[i] === "object" ? "green" : "white";
      li.style.fontFamily = "monospace";
      li.style.fontSize = typeof keys[i] === "string" ? "1.5rem" : "1rem";
      li.style.fontWeight =
        typeof values[i] === "string" ? "extrabold" : "bold";
      li.style.listStyleType = typeof values[i] === "string" ? "none" : "disc";
      li.style.marginLeft = typeof values[i] === "string" ? "0px" : "20px";
      li.style.marginBottom = typeof values[i] === "string" ? "0px" : "10px";
      li.style.fontSize = typeof values[i] === "string" ? "20px" : "16px";
      li.style.textAlign = typeof values[i] === "string" ? "left" : "center";

      li.style.padding = "10px";
      // li.style.borderRadius = typeof values[i] === "string" ? "0px" : "10px";
      li.style.backgroundColor =
        typeof values[i] === "string" ? "transparent" : "";
      ul.style.border = "2px solid #e5e5e5";
    }

    return ul;
  };

  const map = () => {
    // ul.innerHTML = "";
    if (jsoninput) {
      const data = JSON.parse(jsoninput);
      ref.current.innerHTML = "";
      getValues(data);
      if (ref.current) {
        ref.current.appendChild(getValues(data));
      }
    } else {
      setError("Please Enter a Json");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-36 pb-6 mx-auto">
        <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          <span className="text-red-700">JSON</span> Map
        </h1>
      </div>
      <div
        className="container p-5  mx-auto flex justify-center items-center cursor-pointer
        "
        onClick={() => {
          setUpload(false);
        }}
      >
        <h1 className="text-14 text-center font-bold text-white mb-6 ">
          upload json file
        </h1>
      </div>
      <div className="mb-5">
        <h3 className="text-3xl font-bold text-center text-white">
          please make sure your json is valid before you click on the map button
        </h3>
        <div className="flex text-center text-red-600 first-letter:uppercase justify-center">
          <h1>{error}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 mx-auto mb-20">
        <form>
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800">
            <div className="flex flex-col items-center justify-center p-5">
              <CodeMirror
                value={jsoninput}
                width="750px"
                height="230px"
                theme="dark"
                extensions={[json(), javascript()]}
                onChange={onChange}
              />
            </div>
          </label>
          <div className="flex justify-end gap-4">
            <button
              className=" mt-6 text-white border-2 py-2 px-8 focus:outline-none rounded text-lg b"
              onClick={(e) => {
                e.preventDefault();
                setJsoninput("");
              }}
            >
              Clear
            </button>
            <button
              className="mt-6 text-white bg-red-700 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
              onClick={(e) => {
                e.preventDefault();
                map();
              }}
            >
              Map
            </button>
          </div>
        </form>
      </div>
      <div
        className="flex items-center justify-center w-1/2 mx-auto bg-gray-900 p-10 rounded-lg"
        id="json"
        ref={ref}
      >
        {/* <ul className="text-white text-2xl decoration-white" id="ul"></ul> */}
      </div>
    </section>
  );
}
