import './style.css';
import viteLogo from '/vite.svg';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import Reef from 'reefjs';

// Create an app
let app = new Reef('#app', {
  data: {
    articles: [],
  },
  template: function (props) {
    // If there are no articles
    if (!props.articles.length) {
      return `<p>There are no articles.</p>`;
    }

    // Otherwise, show the articles
    return `
    <div
      class="bg-grayDark"
    x-data="{ atTop: true }"
    x-on:scroll.window="atTop =( window.pageYOffset > 10) ? false : true "
     >
    <!-- Navbar -->
    <div
      class="w-full text-gray-700 bg-white h-16 fixed top-0 animated z-40"
      x-bind:class='{ "bg-black shadow-lg": !atTop }'
    >
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row"
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <a
            href="home.html"
            class="tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg class="w-8 h-8 text-purple-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <title>TailwindCSS</title>
          <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
        </svg>
          </a>
          <!-- Button Mobile Nav -->
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <span class="text-lg text-primary"
              ><i class="fas fa-bell"></i
            ></span>
          </button>
          <!-- End Button Mobile Nav -->
        </div>
        <!-- Navbar Mobile -->
        <nav
          :class="{'flex': open, 'hidden': !open}"
          class="flex-col flex-grow pb-4 hidden bg-white shadow-lg rounded-b"
        >
          <a
            class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Notifikasi 1</a
          >
          <a
          class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          href="#"
          >Notifikasi 1</a
        >
        <a
        class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Notifikasi 1</a
      >
      <a
      class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      href="#"
      >Notifikasi 1</a
    >
        </nav>
        <!-- End Navbar Mobile -->
        <nav
          class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row bg-white"
        >
          <a
            class="flex items-center px-3 py-1 mt-2 text-lg font-semibold text-primary rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            <i class="fas fa-envelope"></i>
          </a>
          <div
            @click.away="open = false"
            class="relative"
            x-data="{ open: false }"
          >
            <button
              @click="open = !open"
              class="flex flex-row items-center w-full px-3 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span class="text-lg text-primary"
                ><i class="fas fa-bell"></i
              ></span>
            </button>
            <div
              x-show="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            >
              <div class="px-2 py-2 bg-white rounded-md shadow">
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                  >Notifikasi 1</a
                >
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                  >Notifikasi #2</a
                >
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                  >Notifikasi #3</a
                >
              </div>
            </div>
          </div>
          <div
            @click.away="open = false"
            class="relative"
            x-data="{ open: false }"
          >
            <button
              @click="open = !open"
              class="flex flex-row items-center w-full px-1 py-1 mt-2 text-sm font-semibold text-left bg-transparent rounded-full md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <img src="https://randomuser.me/api/portraits/men/12.jpg" class="w-auto h-6 rounded-full" alt="" />
            </button>
            <div
              x-show="open"
              x-transition:enter="transition ease-out duration-100"
              x-transition:enter-start="transform opacity-0 scale-95"
              x-transition:enter-end="transform opacity-100 scale-100"
              x-transition:leave="transition ease-in duration-75"
              x-transition:leave-start="transform opacity-100 scale-100"
              x-transition:leave-end="transform opacity-0 scale-95"
              class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            >
              <div class="px-2 py-2 bg-white rounded-md shadow">
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="forum.html"
                  >Forum</a
                >
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="chat.html"
                  >Chat</a
                >
                <a
                  class="block px-4 py-2 mt-2  bg-transparent rounded-lg  text-sm font-semibold md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                  >Link #3</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- End Navbar -->
  <div class="w-full  md:pl-4 lg:pl-10 md:pr-4 flex self-start flex-col mt-20">
    <div class="w-full rounded overflow-hidden shadow-lg bg-white flex flex-col p-6 md:py-8 lg:py-12 xl:py-16 md:px-8 lg:px-12 xl:px-20">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
</div>
		<ul>
			${props.articles
        .map(function (article) {
          return `
        <!-- This is an example component -->


        <li>
					<strong><a href="#">${article.title}.</a></strong>
					${article.body}
				</li>`;
        })
        .join('')}
		</ul>`;
  },
});

// Fetch API data
// Then, update the app data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    app.data.articles = data;
  });
app.render();

/*
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Yo! Cool! Yo! Yes! Wow! Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
*/
