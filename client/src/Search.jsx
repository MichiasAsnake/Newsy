import React from "react";

const Header = (props) => {
  const [search, setSearch] = React.useState("");
  const [countries, setCountries] = React.useState();

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    props.SearchData(search);
  }
  function trendsD(code) {
    setCountries(code);
    props.TrendData(countries);
  }

  return (
    <div>
      <div className="header">
        <h1 style={{ fontSize: "40px" }}>Newsy</h1>
        <form onSubmit={handleSubmit} className="inputCnt">
          <h4>Search:</h4>
          <input
            className="search"
            type="text"
            name="search"
            id="search"
            placeholder="search for news ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="trendingTabs">
            <h4>Trending Daily News:</h4>
            <div id="button" onClick={() => trendsD("us")}>
              United States
            </div>
            <div id="button" onClick={() => trendsD("jp")}>
              Japan
            </div>
            <div id="button" onClick={() => trendsD("cn")}>
              China
            </div>
            <div id="button" onClick={() => trendsD("in")}>
              India
            </div>
            <div id="button" onClick={() => trendsD("rs")}>
              Russia
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;

//<button type="submit" className='submitBtn'>Search</button> sumbit button
