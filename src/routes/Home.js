import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Movie from '../components/Movie'
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log('hello')
    }

    // 스테이트는 오브젝트다 데이터는 변한다
    state = {
        isLoading: true,
        count: 0,
        movies: [],
    }

    add = () => {
        console.log('add')
        this.setState({ count: this.state.count + 1 })
    }
    minus = () => {
        console.log('minus')
        this.setState({ count: this.state.count - 1 })
    }

    getMovies = async () => {
        // const movies = await axios.get("https://yts.proxy.now.sh/list_movies.json");
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
        this.setState({ movies, isLoading: false })
        console.log(movies)
    }

    componentDidMount() {
        console.log('component did mount')
        this.getMovies()

        // 6초 뒤에 스테이트를 업데이트 한다.
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 6000)

        // axios는 fetch위의 인터페이스다
    }
    componentDidUpdate() {
        console.log('did Updated')
    }
    componentWillUnmount() {
        console.log('good bye')
    }

    // setState를 실행했을 때만 render() 함수가 실행됨
    render() {
        console.log('im rendering')
        const { isLoading, movies } = this.state
        return (
            <div>
                {this.state.isLoading
                    ? 'Loading'
                    : movies.map(movie => {
                          console.log(movie)
                          return (
                              <Movie
                                  id={movie.id}
                                  year={movie.year}
                                  title={movie.title}
                                  summary={movie.summary}
                                  poster={movie.medium_cover_image}
                                  genres={movie.genres}
                              />
                          )
                      })}
            </div>
        )
        // return (
        // <div>
        {
            /* <h1> Im a class Component {this.state.count} </h1>
    <button onClick = {this.add}>Add</button>
    <button onClick = {this.minus}>Minus</button>
     */
        }
        // {/* </div> */}
        // );
    }
}

export default Home
