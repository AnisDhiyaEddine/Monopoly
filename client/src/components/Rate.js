import React from "react";
export default class App extends React.Component {
    state = {
        timestamp: 'no timestamp yet'
    };


      render() {
        return (
          <div className="Home">
             <body>
  <main>
    <form>
      <h2>Rate our work</h2>
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
        <div id="comment">
          <textarea class="comment" name="comment" rows="10" cols="33">drop a comment...
          </textarea>
        </div>
        <button  class="submit" type="submit" >envoyé</button>
    </form>
  </main>
</body>
          </div>
        );
      }
}