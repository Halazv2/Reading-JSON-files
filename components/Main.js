export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          <span class="text-red-700">JSON</span> Map
        </h1>
        <h2 class="text-3xl font-4 font-light lh-6 ld-04 pb-11 text-gray-700 text-center">
          Seamlessly visualize your JSON data instantly into graphs. <br />
        </h2>
        <p className="text-2xl font-4 font-light lh-6 ld-04 pb-11 text-gray-500 text-center">
          Paste - Import - Fetch!
        </p>
        <div className="ml-6 text-center">
          <a href="/login">
            <button
              type="button"
              className="relative bg-red-700 py-2 px-4 border border-transparent rounded-md font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <div className="flex text-lg">
                <span className="justify-center">Get Started</span>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 "
          alt="Placeholder Image"
          src="./images/homepage-Screen.png"
        ></img>
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        Clean and Readable JSON Data
      </h2>
      <br></br>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        JSON Map is a tool that allows you to visualize your JSON data in a
        clean and readable format. You can import JSON data and instantly see it
        in a graph. JSON Map is a great tool for developers, data scientists,
        and anyone who wants to visualize their JSON data.
      </p>
      <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">EASY-TO-USE</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Don't even bother to update your schema to view your JSON into
            graphs; directly paste, import or fetch! JSON Crack helps you to
            visualize without any additional values and save your time.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">SEARCH</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Have a huge file of values, keys or arrays? Worry no more, type in
            the keyword you are looking for into search input and it will take
            you to each node with matching result highlighting the line to
            understand better!
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">DOWNLOAD</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Download the graph to your local machine and use it wherever you
            want, to your blogs, website or make it a poster and paste to the
            wall. Who wouldn't want to see a JSON Crack graph onto their wall,
            eh?
          </p>
        </div>
        <div class="ktq4">
          <img className="w-10" src="https://nine4.app/favicon.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">LIVE</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
           With Microsoft's Monaco Editor which is also used by VS Code, easily edit your JSON and directly view through the graphs. Also there's a JSON validator above of it to make sure there is no type error.
          </p>
        </div>
      </div>
    </section>
  );
}
