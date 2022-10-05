export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div class="">
        <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
           
            <ul role="list" class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              <li>
                <div class="space-y-6">
                  <div className="flex justify-center">
                  <img
                    className="object-cover object-center w-3/4 mb-10 rounded-full "
                    alt="Placeholder Image"
                    src="https://github.com/AmineElazzab.png"
                  ></img>
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>Mohammed Amine Elazzab</h3>
                    </div>
                    
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-6">
                  <div className="flex justify-center">
                  <img
                    className="object-cover object-center w-3/4 mb-10 rounded-full "
                    alt="Placeholder Image"
                    src="https://github.com/Halazv2.png"
                  ></img>
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>Hala Ziani</h3>
                    </div>
                 
                  </div>
                </div>
              </li>
              <li>
                <div class="space-y-6">
                  <div className="flex justify-center">
                  <img
                    className="object-cover object-center w-3/4 mb-10 rounded-full "
                    alt="Placeholder Image"
                    src="https://github.com/ghrabla.png"
                  ></img>
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>Kamal Rhrabla</h3>
                    </div>
                  
                  </div>
                </div>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row justify-center">
            <a
              href="/"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © 2022 made by YouCodeurs
            </a>
          </ul>
    </footer>
  );
}
