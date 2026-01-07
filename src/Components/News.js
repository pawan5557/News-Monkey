import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  articles=  []

  static defaultProps={
    place:'us',
    type:'general'
    
  }

  static propTypes={
    place:PropTypes.string,
    type: PropTypes.string,
  }

  constructor(){

    
    super();
    this.state={
      articles: [],
      loading: false,
      pageSize: 20,
      page: 1,
      
      totalPages: 0
    }
  }


  async componentDidMount() {
    this.props.setProgress(10);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.place}&category=${this.props.type}&apiKey=4dc139347abf4fc3940c353ab443e6b3&page=1&pageSize=20`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalResults,
      totalPages: Math.ceil(
        parsedData.totalResults / this.state.pageSize
      )
    });
    console.log(parsedData);
    this.props.setProgress(15);
    this.props.setProgress(100);
  }
  

  handleprevclick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.place}&category=${this.props.type}&apiKey=4dc139347abf4fc3940c353ab443e6b3&page=${ this.state.page-1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page-1
    })
  }



  handlenextclick= async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalarticles/this.state.pageSize)){

    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.place}&category=${this.props.type}&apiKey=4dc139347abf4fc3940c353ab443e6b3&page=${ this.state.page+1}&pageSize=20`;
    let data= await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: parsedData.articles})

    this.setState({
      page: this.state.page+1
    })
  }}


  render() {
    return (
      
      <div className="container  my-3">
        <h2 className='text-center' style={{margin: '35px 0px', marginTop:'90px'}}>News Monkey top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return(
              <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} name={element.author} time={element.publishedAt}></NewsItem>
              
              </div>
            )
          })}
        

            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
            <button  disabled={this.state.page >= this.state.totalPages} type="button" className="btn btn-dark" onClick={this.handlenextclick}> Next &rarr;</button>
            </div>
              


        </div>
       
      </div>
    )
  }
}

export default News
