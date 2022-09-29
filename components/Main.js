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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          <h3 class="pt-3 font-semibold text-lg text-white">EASY-TO-USE</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Don't even bother to update your schema to view your JSON into
            graphs; directly paste, import or fetch! JSON Crack helps you to
            visualize without any additional values and save your time.
          </p>
        </div>
        <div class="ktq4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          <h3 class="pt-3 font-semibold text-lg text-white">SEARCH</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Have a huge file of values, keys or arrays? Worry no more, type in
            the keyword you are looking for into search input and it will take
            you to each node with matching result highlighting the line to
            understand better!
          </p>
        </div>
        <div class="ktq4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <h3 class="pt-3 font-semibold text-lg text-white">DOWNLOAD</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Download the graph to your local machine and use it wherever you
            want, to your blogs, website or make it a poster and paste to the
            wall. Who wouldn't want to see a JSON Crack graph onto their wall,
            eh?
          </p>
        </div>
        <div class="ktq4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clipRule="evenodd"
            />
          </svg>
          <h3 class="pt-3 font-semibold text-lg text-white">LIVE</h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            With Microsoft's Monaco Editor which is also used by VS Code, easily
            edit your JSON and directly view through the graphs. Also there's a
            JSON validator above of it to make sure there is no type error.
          </p>
        </div>
      </div>
    </section>
  );
}
