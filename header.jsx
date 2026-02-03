import './index.css'

const Client={
  name:'Maung Maung',
  imgUrl:'https://cdn-icons-png.flaticon.com/512/9203/9203764.png',
  imagesize:90,
  age:27,
}


function Mybutton(){

 return(

    <header>
        <div id='navigation'>
            <img src={Client.imgUrl} id='profilephoto'/>
            <h2>{Client.name}</h2>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Projects
                </li>
            </ul>
        </div>
        <div id='paragraph'>
        <h2>Welcome form my website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias impedit minima numquam nisi voluptatum minus, distinctio aliquid ratione perferendis.
            Modi labore tempora totam! Magni quod ducimus nobis omnis laborum.
        Quaerat voluptates quidem aut, reiciendis quod assumenda neque provident
         sequi incidunt ullam architecto maxime distinctio adipisci,
          cumque voluptatem dolorum laborum veritatis fugit? Cum ducimus adipisci perferendis accusantium sunt delectus quisquam.</p>
          </div>
         <div id="btn"> <button>More Info</button>
          <button id="seemore">See More</button></div>
    </header>

 );

}

export default Mybutton